<template>
  <div v-show="isSchemasLoading" class="schemas-loading flex h-20 items-center justify-center pt-4">
    <SLoadingSpinner class="h-20 w-20" />
  </div>
  <div v-show="!isSchemasLoading" class="flex flex-col gap-y-4 pt-4 pb-20">
    <div class="flex max-w-screen-md flex-col gap-y-4">
      <SStatusMessage
        v-if="schemasErrorDetails"
        class="schemas-error"
        :title="schemasErrorDetails.title"
        variant="error"
      >
        {{ schemasErrorDetails.description }}
      </SStatusMessage>
      <SSelect
        v-if="schemas.length"
        v-model="selectedSchemaKey"
        id="search-schema"
        :options="schemas"
        label="Resource type"
        @change="selectShape"
      />
    </div>
    <form
      v-if="selectedSchema"
      :key="formKey"
      action=""
      @submit.prevent="handleSearchSubmit"
      class="flex max-w-screen-md flex-col gap-y-4 pb-5"
    >
      <div>
        <SJsonFormsWrapper
          v-model:data="form.data"
          :schema="selectedSchema"
          form-schema-variant="advancedSearch"
          @change="onChange"
        />
      </div>
      <div class="flex flex-row justify-end gap-4">
        <SButton
          severity="secondary"
          type="button"
          :disabled="!form.data || Object.keys(form.data).length === 0"
          @click="resetForm"
          label="Clear parameters"
        />
        <SButton
          class="advanced-search-button"
          icon="search"
          iconPos="right"
          severity="primary"
          type="submit"
          :disabled="isSearchLoading || !searchData || Object.keys(searchData).length === 0"
          @submit.prevent="handleSearchSubmit"
          label="Search"
        />
        <SLoadingSpinner v-if="isSearchLoading" class="search-loading ml-4" />
      </div>
    </form>
    <div ref="resultsContainer">
      <SearchResults
        :result="result"
        v-if="showResults"
        results-number-suffix="for the parameters:"
      >
        <template #details>
          <div class="flex flex-col gap-4">
            <SearchedPropertiesTree
              v-if="lastSearchedProperties"
              :input-properties="lastSearchedProperties"
            />
            <SStatusMessage v-if="errorDetails" :title="errorDetails.title" variant="error">
              {{ errorDetails.description }}
            </SStatusMessage>
          </div>
        </template>
      </SearchResults>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, toRaw } from 'vue';
import {
  SSelect,
  SButton,
  SLoadingSpinner,
  SStatusMessage,
  SJsonFormsWrapper,
} from '@simpl/vue-components';
import SearchResults from '@/components/search/SearchResults.vue';
import SearchedPropertiesTree from '@/components/search/SearchedPropertiesTree.vue';
import { useAdvancedSearchSchemas } from '@/services/composables/useAdvancedSearchSchemas';
import { useAdvancedSearch } from '@/services/composables/useAdvancedSearch';
import type { PossibleUIError } from 'types/errors';
import type { SearchAPIResult, SearchAdvancedRequestBody } from 'types/searchApi';
import type { SSelectOptions } from 'types/components';
import type { JsonFormsChangeEvent } from '@jsonforms/vue';
import { transformFormDataToAdvancedSearchRequestBody } from '@/util/search';
import type { ConvertedSchema } from 'types/shapes';

const { fetchSearchSchemas, fetchConvertedSchema } = useAdvancedSearchSchemas();

const schemas = ref<SSelectOptions>([]);
const selectedSchemaKey = ref<string | undefined>();
const selectedSchema = ref<ConvertedSchema | null>(null);
const isSchemasLoading = ref(true);
const form = reactive({
  data: {},
  errors: [] as unknown[],
});

const lastSearchedProperties = ref<SearchAdvancedRequestBody | null>(null);
const isSearchLoading = ref(false);
const showResults = ref(false);
const result = ref<SearchAPIResult[]>([]);
const errorDetails = ref<PossibleUIError>(null);
const schemasErrorDetails = ref<PossibleUIError>(null);
const resultsContainer = ref<HTMLElement | null>(null);
const formKey = ref(0);

fetchSearchSchemas().then(({ data, error }) => {
  if (error.value) {
    schemasErrorDetails.value = error.value;
  } else {
    schemasErrorDetails.value = null;
    schemas.value = data.value;
  }
  isSchemasLoading.value = false;
});

const selectShape = async (value: string) => {
  selectedSchemaKey.value = value;
  form.data = {};

  const { data, error } = await fetchConvertedSchema(value);
  if (error.value) {
    schemasErrorDetails.value = error.value;
  } else {
    schemasErrorDetails.value = null;
    selectedSchema.value = data.value?.root ? Object.values(data.value.root)[0] : undefined;
  }
};

const onChange = async (event: JsonFormsChangeEvent) => {
  form.errors = event.errors ?? [];
};

const searchData = computed(() => {
  return transformFormDataToAdvancedSearchRequestBody(form.data);
});

const handleSearchSubmit = async (e: Event) => {
  if (!searchData.value) {
    return;
  }

  showResults.value = false;
  lastSearchedProperties.value = toRaw(searchData.value);

  const top = resultsContainer.value!.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: 'smooth' });

  isSearchLoading.value = true;
  const { data, error } = await useAdvancedSearch(searchData.value);
  if (error.value) {
    errorDetails.value = error.value;
  } else {
    errorDetails.value = null;
    result.value = data.value;
  }
  isSearchLoading.value = false;
  showResults.value = true;
};

const resetForm = () => {
  form.data = {};
  form.errors = [];
  formKey.value++;
  showResults.value = false;
  result.value = [];
  lastSearchedProperties.value = null;
  errorDetails.value = null;
};
</script>