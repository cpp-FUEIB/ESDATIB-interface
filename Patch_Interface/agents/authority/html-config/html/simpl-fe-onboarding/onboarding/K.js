var __webpack_modules__ = {
    2728: (s, c, d) => {
      var p = {};
      (d.r(p),
        d.d(p, {
          Module: () => rt,
          ModuleFederation: () => ot,
          createInstance: () => Ut,
          getInstance: () => tn,
          getRemoteEntry: () => Se,
          getRemoteInfo: () => ve,
          init: () => zr,
          loadRemote: () => Xr,
          loadScript: () => m.k0,
          loadScriptNode: () => m.oe,
          loadShare: () => Yr,
          loadShareSync: () => Jr,
          preloadRemote: () => Zr,
          registerGlobalPlugins: () => yt,
          registerPlugins: () => en,
          registerRemotes: () => Qr,
          registerShared: () => rn,
        }));
      var E = d(4523);
      function g() {
        return (
          (g =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
              }
              return e;
            }),
          g.apply(this, arguments)
        );
      }
      function b(t, e) {
        if (null == t) return {};
        var o,
          i,
          n = {},
          r = Object.keys(t);
        for (i = 0; i < r.length; i++)
          !(e.indexOf((o = r[i])) >= 0) && (n[o] = t[o]);
        return n;
      }
      var m = d(906);
      const R = "RUNTIME-001",
        I = "RUNTIME-002",
        P = "RUNTIME-003",
        L = "RUNTIME-004",
        x = "RUNTIME-005",
        j = "RUNTIME-006",
        q = "RUNTIME-007",
        V = "RUNTIME-008",
        F = "RUNTIME-009",
        Le = "TYPE-001",
        le = "BUILD-001",
        Ae = "BUILD-002",
        k = (t, e, n, r) => {
          const o = [`${[e[t]]} #${t}`];
          return (
            n && o.push(`args: ${JSON.stringify(n)}`),
            o.push(
              ((t) =>
                `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${t.split("-")[0].toLowerCase()}/${t}`)(
                t,
              ),
            ),
            r && o.push(`Original Error Message:\n ${r}`),
            o.join("\n")
          );
        };
      function ee() {
        return (
          (ee =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
              }
              return e;
            }),
          ee.apply(this, arguments)
        );
      }
      const G = {
          [R]: "Failed to get remoteEntry exports.",
          [I]: 'The remote entry interface does not contain "init"',
          [P]: "Failed to get manifest.",
          [L]: "Failed to locate remote.",
          [x]: "Invalid loadShareSync function call from bundler runtime",
          [j]: "Invalid loadShareSync function call from runtime",
          [q]: "Failed to get remote snapshot.",
          [V]: "Failed to load script resources.",
          [F]: "Please call createInstance first.",
        },
        ce =
          (ee(
            {},
            G,
            {
              [Le]: "Failed to generate type declaration. Execute the below cmd to reproduce and fix the error.",
            },
            {
              [le]: "Failed to find expose module.",
              [Ae]: "PublicPath is required in prod mode.",
            },
          ),
          "[ Federation Runtime ]"),
        De = (0, m.h)(ce);
      function B(t, e) {
        t || te(e);
      }
      function te(t) {
        throw t instanceof Error
          ? (t.message.startsWith(ce) || (t.message = `${ce}: ${t.message}`), t)
          : new Error(`${ce}: ${t}`);
      }
      function he(t) {
        (t instanceof Error &&
          (t.message.startsWith(ce) || (t.message = `${ce}: ${t.message}`)),
          De.warn(t));
      }
      function at(t, e) {
        return (-1 === t.findIndex((n) => n === e) && t.push(e), t);
      }
      function me(t) {
        return "version" in t && t.version
          ? `${t.name}:${t.version}`
          : "entry" in t && t.entry
            ? `${t.name}:${t.entry}`
            : `${t.name}`;
      }
      function xe(t) {
        return typeof t.entry < "u";
      }
      function lt(t) {
        return !t.entry.includes(".json");
      }
      function Fe(t) {
        return t && "object" == typeof t;
      }
      const Kt = Object.prototype.toString;
      function ct(t) {
        return Array.isArray(t) ? t : [t];
      }
      function ut(t) {
        const e = { url: "", type: "global", globalName: "" };
        return (0, m.OL)() || (0, m.tf)()
          ? "remoteEntry" in t
            ? {
                url: t.remoteEntry,
                type: t.remoteEntryType,
                globalName: t.globalName,
              }
            : e
          : "ssrRemoteEntry" in t
            ? {
                url: t.ssrRemoteEntry || e.url,
                type: t.ssrRemoteEntryType || e.type,
                globalName: t.globalName,
              }
            : e;
      }
      const H = "object" == typeof globalThis ? globalThis : window,
        J = (() => {
          try {
            return document.defaultView;
          } catch {
            return H;
          }
        })(),
        ue = J;
      function Oe(t, e, n) {
        Object.defineProperty(t, e, {
          value: n,
          configurable: !1,
          writable: !0,
        });
      }
      function Ie(t, e) {
        return Object.hasOwnProperty.call(t, e);
      }
      Ie(H, "__GLOBAL_LOADING_REMOTE_ENTRY__") ||
        Oe(H, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
      const se = H.__GLOBAL_LOADING_REMOTE_ENTRY__;
      function ft(t) {
        var e, n, r, o, i, u;
        (Ie(t, "__VMOK__") &&
          !Ie(t, "__FEDERATION__") &&
          Oe(t, "__FEDERATION__", t.__VMOK__),
          Ie(t, "__FEDERATION__") ||
            (Oe(t, "__FEDERATION__", {
              __GLOBAL_PLUGIN__: [],
              __INSTANCES__: [],
              moduleInfo: {},
              __SHARE__: {},
              __MANIFEST_LOADING__: {},
              __PRELOADED_MAP__: new Map(),
            }),
            Oe(t, "__VMOK__", t.__FEDERATION__)),
          null != (e = t.__FEDERATION__).__GLOBAL_PLUGIN__ ||
            (e.__GLOBAL_PLUGIN__ = []),
          null != (n = t.__FEDERATION__).__INSTANCES__ ||
            (n.__INSTANCES__ = []),
          null != (r = t.__FEDERATION__).moduleInfo || (r.moduleInfo = {}),
          null != (o = t.__FEDERATION__).__SHARE__ || (o.__SHARE__ = {}),
          null != (i = t.__FEDERATION__).__MANIFEST_LOADING__ ||
            (i.__MANIFEST_LOADING__ = {}),
          null != (u = t.__FEDERATION__).__PRELOADED_MAP__ ||
            (u.__PRELOADED_MAP__ = new Map()));
      }
      function ae(t, e) {
        if ("string" == typeof e) {
          if (t[e]) return { value: t[e], key: e };
          {
            const r = Object.keys(t);
            for (const o of r) {
              const [i, u] = o.split(":"),
                a = `${i}:${e}`,
                l = t[a];
              if (l) return { value: l, key: a };
            }
            return { value: void 0, key: e };
          }
        }
        throw new Error("key must be string");
      }
      (ft(H), ft(J));
      const He = () => J.__FEDERATION__.moduleInfo,
        ye = (t) =>
          ((t, e) => {
            const r = ae(e, me(t)).value;
            if (
              (r &&
                !r.version &&
                "version" in t &&
                t.version &&
                (r.version = t.version),
              r)
            )
              return r;
            if ("version" in t && t.version) {
              const { version: o } = t,
                u = me(b(t, ["version"])),
                a = ae(J.__FEDERATION__.moduleInfo, u).value;
              if (a?.version === o) return a;
            }
          })(t, J.__FEDERATION__.moduleInfo),
        Ge = (t, e) => {
          const n = me(t);
          return (
            (J.__FEDERATION__.moduleInfo[n] = e),
            J.__FEDERATION__.moduleInfo
          );
        },
        Ne = (t, e) => {
          const n = e || `__FEDERATION_${t}:custom__`;
          return { remoteEntryKey: n, entryExports: H[n] };
        },
        yt = (t) => {
          const { __GLOBAL_PLUGIN__: e } = J.__FEDERATION__;
          t.forEach((n) => {
            -1 === e.findIndex((r) => r.name === n.name)
              ? e.push(n)
              : he(`The plugin ${n.name} has been registered.`);
          });
        },
        bt = (t) => H.__FEDERATION__.__PRELOADED_MAP__.get(t),
        gt = (t) => H.__FEDERATION__.__PRELOADED_MAP__.set(t, !0),
        Ee = "default",
        St = "global",
        vt = "[0-9A-Za-z-]+",
        je = `(?:\\+(${vt}(?:\\.${vt})*))`,
        be = "0|[1-9]\\d*",
        Me = "[0-9]+",
        Rt = "\\d*[a-zA-Z-][a-zA-Z0-9-]*",
        Tt = `(?:${Me}|${Rt})`,
        At = `(?:${be}|${Rt})`,
        Ot = `(?:-(${At}(?:\\.${At})*))`,
        Ue = `${be}|x|X|\\*`,
        fe = `[v=\\s]*(${Ue})(?:\\.(${Ue})(?:\\.(${Ue})(?:${Ot})?${je}?)?)?`,
        Zt = `^\\s*(${fe})\\s+-\\s+(${fe})\\s*$`,
        Be = "((?:<|>)?=?)",
        er = `(\\s*)${Be}\\s*([v=\\s]*(${Me})\\.(${Me})\\.(${Me})(?:-?(${Tt}(?:\\.${Tt})*))?${je}?|${fe})`,
        It = "(?:~>?)",
        tr = `(\\s*)${It}\\s+`,
        or = `^(?:\\^)${fe}$`,
        ir = `^${It}${fe}$`,
        ar = `^${Be}\\s*${fe}$`,
        lr = `^${Be}\\s*(v?(${be})\\.(${be})\\.(${be})${Ot}?${je}?)$|^$`;
      function re(t) {
        return new RegExp(t);
      }
      function K(t) {
        return !t || "x" === t.toLowerCase() || "*" === t;
      }
      function Mt(...t) {
        return (e) => t.reduce((n, r) => r(n), e);
      }
      function Pt(t) {
        return t.match(re(lr));
      }
      function $t(t, e, n, r) {
        const o = `${t}.${e}.${n}`;
        return r ? `${o}-${r}` : o;
      }
      function ur(t) {
        return t.replace(re(Zt), (e, n, r, o, i, u, a, l, _, h, y, v) =>
          `${(n = K(r) ? "" : K(o) ? `>=${r}.0.0` : K(i) ? `>=${r}.${o}.0` : `>=${n}`)} ${(l = K(_) ? "" : K(h) ? `<${Number(_) + 1}.0.0-0` : K(y) ? `<${_}.${Number(h) + 1}.0-0` : v ? `<=${_}.${h}.${y}-${v}` : `<=${l}`)}`.trim(),
        );
      }
      function fr(t) {
        return t.replace(re(er), "$1$2$3");
      }
      function dr(t) {
        return t.replace(re(tr), "$1~");
      }
      function _r(t) {
        return t.replace(re("(\\s*)(?:\\^)\\s+"), "$1^");
      }
      function pr(t) {
        return t
          .trim()
          .split(/\s+/)
          .map((e) =>
            e.replace(re(or), (n, r, o, i, u) =>
              K(r)
                ? ""
                : K(o)
                  ? `>=${r}.0.0 <${Number(r) + 1}.0.0-0`
                  : K(i)
                    ? "0" === r
                      ? `>=${r}.${o}.0 <${r}.${Number(o) + 1}.0-0`
                      : `>=${r}.${o}.0 <${Number(r) + 1}.0.0-0`
                    : u
                      ? "0" === r
                        ? "0" === o
                          ? `>=${r}.${o}.${i}-${u} <${r}.${o}.${Number(i) + 1}-0`
                          : `>=${r}.${o}.${i}-${u} <${r}.${Number(o) + 1}.0-0`
                        : `>=${r}.${o}.${i}-${u} <${Number(r) + 1}.0.0-0`
                      : "0" === r
                        ? "0" === o
                          ? `>=${r}.${o}.${i} <${r}.${o}.${Number(i) + 1}-0`
                          : `>=${r}.${o}.${i} <${r}.${Number(o) + 1}.0-0`
                        : `>=${r}.${o}.${i} <${Number(r) + 1}.0.0-0`,
            ),
          )
          .join(" ");
      }
      function hr(t) {
        return t
          .trim()
          .split(/\s+/)
          .map((e) =>
            e.replace(re(ir), (n, r, o, i, u) =>
              K(r)
                ? ""
                : K(o)
                  ? `>=${r}.0.0 <${Number(r) + 1}.0.0-0`
                  : K(i)
                    ? `>=${r}.${o}.0 <${r}.${Number(o) + 1}.0-0`
                    : u
                      ? `>=${r}.${o}.${i}-${u} <${r}.${Number(o) + 1}.0-0`
                      : `>=${r}.${o}.${i} <${r}.${Number(o) + 1}.0-0`,
            ),
          )
          .join(" ");
      }
      function mr(t) {
        return t
          .split(/\s+/)
          .map((e) =>
            e.trim().replace(re(ar), (n, r, o, i, u, a) => {
              const l = K(o),
                _ = l || K(i),
                h = _ || K(u);
              return (
                "=" === r && h && (r = ""),
                (a = ""),
                l
                  ? ">" === r || "<" === r
                    ? "<0.0.0-0"
                    : "*"
                  : r && h
                    ? (_ && (i = 0),
                      (u = 0),
                      ">" === r
                        ? ((r = ">="),
                          _
                            ? ((o = Number(o) + 1), (i = 0), (u = 0))
                            : ((i = Number(i) + 1), (u = 0)))
                        : "<=" === r &&
                          ((r = "<"),
                          _ ? (o = Number(o) + 1) : (i = Number(i) + 1)),
                      "<" === r && (a = "-0"),
                      `${r + o}.${i}.${u}${a}`)
                    : _
                      ? `>=${o}.0.0${a} <${Number(o) + 1}.0.0-0`
                      : h
                        ? `>=${o}.${i}.0${a} <${o}.${Number(i) + 1}.0-0`
                        : n
              );
            }),
          )
          .join(" ");
      }
      function yr(t) {
        return t.trim().replace(re("(<|>)?=?\\s*\\*"), "");
      }
      function Er(t) {
        return t.trim().replace(re("^\\s*>=\\s*0.0.0\\s*$"), "");
      }
      function Pe(t, e) {
        return (t = Number(t) || t) > (e = Number(e) || e)
          ? 1
          : t === e
            ? 0
            : -1;
      }
      function $e(t, e) {
        return (
          Pe(t.major, e.major) ||
          Pe(t.minor, e.minor) ||
          Pe(t.patch, e.patch) ||
          (function br(t, e) {
            const { preRelease: n } = t,
              { preRelease: r } = e;
            if (void 0 === n && r) return 1;
            if (n && void 0 === r) return -1;
            if (void 0 === n && void 0 === r) return 0;
            for (let o = 0, i = n.length; o <= i; o++) {
              const u = n[o],
                a = r[o];
              if (u !== a)
                return void 0 === u && void 0 === a
                  ? 0
                  : u
                    ? a
                      ? Pe(u, a)
                      : -1
                    : 1;
            }
            return 0;
          })(t, e)
        );
      }
      function We(t, e) {
        return t.version === e.version;
      }
      function gr(t, e) {
        switch (t.operator) {
          case "":
          case "=":
            return We(t, e);
          case ">":
            return $e(t, e) < 0;
          case ">=":
            return We(t, e) || $e(t, e) < 0;
          case "<":
            return $e(t, e) > 0;
          case "<=":
            return We(t, e) || $e(t, e) > 0;
          case void 0:
            return !0;
          default:
            return !1;
        }
      }
      function Sr(t) {
        return Mt(pr, hr, mr, yr)(t);
      }
      function vr(t) {
        return Mt(ur, fr, dr, _r)(t.trim()).split(/\s+/).join(" ");
      }
      function we(t, e) {
        if (!t) return !1;
        const n = Pt(t);
        if (!n) return !1;
        const [, r, , o, i, u, a] = n,
          l = {
            operator: r,
            version: $t(o, i, u, a),
            major: o,
            minor: i,
            patch: u,
            preRelease: a?.split("."),
          },
          _ = e.split("||");
        for (const h of _) {
          const y = h.trim();
          if (!y || "*" === y || "x" === y) return !0;
          try {
            const v = vr(y);
            if (!v.trim()) return !0;
            const S = v
              .split(" ")
              .map((T) => Sr(T))
              .join(" ");
            if (!S.trim()) return !0;
            const A = S.split(/\s+/)
              .map((T) => Er(T))
              .filter(Boolean);
            if (0 === A.length) continue;
            let O = !0;
            for (const T of A) {
              const N = Pt(T);
              if (!N) {
                O = !1;
                break;
              }
              const [, M, , $, w, D, W] = N;
              if (
                !gr(
                  {
                    operator: M,
                    version: $t($, w, D, W),
                    major: $,
                    minor: w,
                    patch: D,
                    preRelease: W?.split("."),
                  },
                  l,
                )
              ) {
                O = !1;
                break;
              }
            }
            if (O) return !0;
          } catch (v) {
            console.error(`[semver] Error processing range part "${y}":`, v);
            continue;
          }
        }
        return !1;
      }
      function wt(t, e) {
        const n = e.shared || {},
          r = e.name,
          o = Object.keys(n).reduce((u, a) => {
            const l = ct(n[a]);
            return (
              (u[a] = u[a] || []),
              l.forEach((_) => {
                u[a].push(
                  (function Rr(t, e, n, r) {
                    let o;
                    var i, u, a;
                    return (
                      (o =
                        "get" in t
                          ? t.get
                          : "lib" in t
                            ? () => Promise.resolve(t.lib)
                            : () =>
                                Promise.resolve(() => {
                                  throw new Error(`Can not get shared '${n}'!`);
                                })),
                      g({ deps: [], useIn: [], from: e, loading: null }, t, {
                        shareConfig: g(
                          {
                            requiredVersion: `^${t.version}`,
                            singleton: !1,
                            eager: !1,
                            strictVersion: !1,
                          },
                          t.shareConfig,
                        ),
                        get: o,
                        loaded: !(!t?.loaded && !("lib" in t)) || void 0,
                        version: null != (i = t.version) ? i : "0",
                        scope: Array.isArray(t.scope)
                          ? t.scope
                          : [null != (u = t.scope) ? u : "default"],
                        strategy:
                          (null != (a = t.strategy) ? a : r) || "version-first",
                      })
                    );
                  })(_, r, a, e.shareStrategy),
                );
              }),
              u
            );
          }, {}),
          i = g({}, t.shared);
        return (
          Object.keys(o).forEach((u) => {
            i[u]
              ? o[u].forEach((a) => {
                  i[u].find((_) => _.version === a.version) || i[u].push(a);
                })
              : (i[u] = o[u]);
          }),
          { shared: i, shareInfos: o }
        );
      }
      function ge(t, e) {
        const n = (r) => {
          if (!Number.isNaN(Number(r))) {
            const i = r.split(".");
            let u = r;
            for (let a = 0; a < 3 - i.length; a++) u += ".0";
            return u;
          }
          return r;
        };
        return !!we(n(t), `<=${n(e)}`);
      }
      const Ve = (t, e) => {
          const n =
            e ||
            function (r, o) {
              return ge(r, o);
            };
          return Object.keys(t).reduce(
            (r, o) => (!r || n(r, o) || "0" === r ? o : r),
            0,
          );
        },
        qe = (t) => !!t.loaded || "function" == typeof t.lib;
      function Ar(t, e, n) {
        const r = t[e][n];
        return Ve(t[e][n], function (i, u) {
          return !qe(r[i]) && ge(i, u);
        });
      }
      function Or(t, e, n) {
        const r = t[e][n];
        return Ve(t[e][n], function (i, u) {
          const a = (l) => qe(l) || ((t) => !!t.loading)(l);
          return a(r[u]) ? !a(r[i]) || !!ge(i, u) : !a(r[i]) && ge(i, u);
        });
      }
      function Ir(t) {
        return "loaded-first" === t ? Or : Ar;
      }
      function de(t, e, n, r) {
        if (!t) return;
        const { shareConfig: o, scope: i = Ee, strategy: u } = n,
          a = Array.isArray(i) ? i : [i];
        for (const l of a)
          if (o && t[l] && t[l][e]) {
            const { requiredVersion: _ } = o,
              y = Ir(u)(t, l, e),
              S = {
                shareScopeMap: t,
                scope: l,
                pkgName: e,
                version: y,
                GlobalFederation: ue.__FEDERATION__,
                resolver: () => {
                  if (o.singleton) {
                    if ("string" == typeof _ && !we(y, _)) {
                      const O = `Version ${y} from ${y && t[l][e][y].from} of shared singleton module ${e} does not satisfy the requirement of ${n.from} which needs ${_})`;
                      o.strictVersion ? te(O) : he(O);
                    }
                    return t[l][e][y];
                  }
                  if (!1 === _ || "*" === _ || we(y, _)) return t[l][e][y];
                  for (const [O, T] of Object.entries(t[l][e]))
                    if (we(O, _)) return T;
                },
              };
            return (r.emit(S) || S).resolver();
          }
      }
      function Ke() {
        return ue.__FEDERATION__.__SHARE__;
      }
      function kt(t) {
        const { pkgName: e, extraOptions: n, shareInfos: r } = t;
        var i;
        const u =
          null != (i = n?.resolver)
            ? i
            : (a) => {
                if (!a) return;
                const l = {};
                a.forEach((y) => {
                  l[y.version] = y;
                });
                const h = Ve(l, function (y, v) {
                  return !qe(l[y]) && ge(y, v);
                });
                return l[h];
              };
        return Object.assign({}, u(r[e]), n?.customShareInfo);
      }
      const Dt = ".then(callbacks[0]).catch(callbacks[1])";
      function ze() {
        return (ze = (0, E.A)(function* ({ entry: t, remoteEntryExports: e }) {
          return new Promise((n, r) => {
            try {
              e
                ? n(e)
                : typeof FEDERATION_ALLOW_NEW_FUNCTION < "u"
                  ? new Function("callbacks", `import("${t}")${Dt}`)([n, r])
                  : import(t).then(n).catch(r);
            } catch (o) {
              r(o);
            }
          });
        })).apply(this, arguments);
      }
      function Xe() {
        return (Xe = (0, E.A)(function* ({ entry: t, remoteEntryExports: e }) {
          return new Promise((n, r) => {
            try {
              e
                ? n(e)
                : new Function("callbacks", `System.import("${t}")${Dt}`)([
                    n,
                    r,
                  ]);
            } catch (o) {
              r(o);
            }
          });
        })).apply(this, arguments);
      }
      function xt(t, e, n) {
        const { remoteEntryKey: r, entryExports: o } = Ne(t, e);
        return (
          B(
            o,
            k(R, G, { remoteName: t, remoteEntryUrl: n, remoteEntryKey: r }),
          ),
          o
        );
      }
      function Ye() {
        return (Ye = (0, E.A)(function* ({
          name: t,
          globalName: e,
          entry: n,
          loaderHook: r,
          getEntryUrl: o,
        }) {
          const { entryExports: i } = Ne(t, e);
          if (i) return i;
          const u = o ? o(n) : n;
          return (0, m.k0)(u, {
            attrs: {},
            createScriptHook: (a, l) => {
              const _ = r.lifecycle.createScript.emit({ url: a, attrs: l });
              if (
                _ &&
                (_ instanceof HTMLScriptElement ||
                  "script" in _ ||
                  "timeout" in _)
              )
                return _;
            },
          })
            .then(() => xt(t, e, n))
            .catch((a) => {
              throw (B(void 0, k(V, G, { remoteName: t, resourceUrl: n })), a);
            });
        })).apply(this, arguments);
      }
      function Je() {
        return (
          (Je = (0, E.A)(function* ({
            remoteInfo: t,
            remoteEntryExports: e,
            loaderHook: n,
            getEntryUrl: r,
          }) {
            const { entry: o, entryGlobalName: i, name: u, type: a } = t;
            switch (a) {
              case "esm":
              case "module":
                return (function $r(t) {
                  return ze.apply(this, arguments);
                })({ entry: o, remoteEntryExports: e });
              case "system":
                return (function wr(t) {
                  return Xe.apply(this, arguments);
                })({ entry: o, remoteEntryExports: e });
              default:
                return (function kr(t) {
                  return Ye.apply(this, arguments);
                })({
                  entry: o,
                  globalName: i,
                  name: u,
                  loaderHook: n,
                  getEntryUrl: r,
                });
            }
          })),
          Je.apply(this, arguments)
        );
      }
      function Ze() {
        return (Ze = (0, E.A)(function* ({ remoteInfo: t, loaderHook: e }) {
          const { entry: n, entryGlobalName: r, name: o, type: i } = t,
            { entryExports: u } = Ne(o, r);
          return (
            u ||
            (0, m.oe)(n, {
              attrs: { name: o, globalName: r, type: i },
              loaderHook: {
                createScriptHook: (a, l = {}) => {
                  const _ = e.lifecycle.createScript.emit({ url: a, attrs: l });
                  if (_ && "url" in _) return _;
                },
              },
            })
              .then(() => xt(o, r, n))
              .catch((a) => {
                throw a;
              })
          );
        })).apply(this, arguments);
      }
      function Qe(t) {
        const { entry: e, name: n } = t;
        return (0, m.lG)(n, e);
      }
      function Se(t) {
        return et.apply(this, arguments);
      }
      function et() {
        return (
          (et = (0, E.A)(function* (t) {
            const {
                origin: e,
                remoteEntryExports: n,
                remoteInfo: r,
                getEntryUrl: o,
              } = t,
              i = Qe(r);
            if (n) return n;
            if (!se[i]) {
              const a = e.loaderHook;
              se[i] = e.remoteHandler.hooks.lifecycle.loadEntry
                .emit({ loaderHook: a, remoteInfo: r, remoteEntryExports: n })
                .then(
                  (l) =>
                    l ||
                    ((
                      typeof ENV_TARGET < "u"
                        ? "web" === ENV_TARGET
                        : (0, m.OL)()
                    )
                      ? (function Lr(t) {
                          return Je.apply(this, arguments);
                        })({
                          remoteInfo: r,
                          remoteEntryExports: n,
                          loaderHook: a,
                          getEntryUrl: o,
                        })
                      : (function Dr(t) {
                          return Ze.apply(this, arguments);
                        })({ remoteInfo: r, loaderHook: a })),
                );
            }
            return se[i];
          })),
          et.apply(this, arguments)
        );
      }
      function ve(t) {
        return g({}, t, {
          entry: "entry" in t ? t.entry : "",
          type: t.type || St,
          entryGlobalName: t.entryGlobalName || t.name,
          shareScope: t.shareScope || Ee,
        });
      }
      function Ct(t) {
        return g(
          {
            resourceCategory: "sync",
            share: !0,
            depsRemote: !0,
            prefetchInterface: !1,
          },
          t,
        );
      }
      function tt(t, e, n, r = !0) {
        const { cssAssets: o, jsAssetsWithoutEntry: i, entryAssets: u } = n;
        if (e.options.inBrowser) {
          if (
            (u.forEach((a) => {
              const { moduleInfo: l } = a,
                _ = e.moduleCache.get(t.name);
              Se(
                _
                  ? {
                      origin: e,
                      remoteInfo: l,
                      remoteEntryExports: _.remoteEntryExports,
                    }
                  : { origin: e, remoteInfo: l, remoteEntryExports: void 0 },
              );
            }),
            r)
          ) {
            const a = { rel: "preload", as: "style" };
            o.forEach((l) => {
              const { link: _, needAttach: h } = (0, m.d)({
                url: l,
                cb: () => {},
                attrs: a,
                createLinkHook: (y, v) => {
                  const S = e.loaderHook.lifecycle.createLink.emit({
                    url: y,
                    attrs: v,
                  });
                  if (S instanceof HTMLLinkElement) return S;
                },
              });
              h && document.head.appendChild(_);
            });
          } else {
            const a = { rel: "stylesheet", type: "text/css" };
            o.forEach((l) => {
              const { link: _, needAttach: h } = (0, m.d)({
                url: l,
                cb: () => {},
                attrs: a,
                createLinkHook: (y, v) => {
                  const S = e.loaderHook.lifecycle.createLink.emit({
                    url: y,
                    attrs: v,
                  });
                  if (S instanceof HTMLLinkElement) return S;
                },
                needDeleteLink: !1,
              });
              h && document.head.appendChild(_);
            });
          }
          if (r) {
            const a = { rel: "preload", as: "script" };
            i.forEach((l) => {
              const { link: _, needAttach: h } = (0, m.d)({
                url: l,
                cb: () => {},
                attrs: a,
                createLinkHook: (y, v) => {
                  const S = e.loaderHook.lifecycle.createLink.emit({
                    url: y,
                    attrs: v,
                  });
                  if (S instanceof HTMLLinkElement) return S;
                },
              });
              h && document.head.appendChild(_);
            });
          } else {
            const a = {
              fetchpriority: "high",
              type: "module" === t?.type ? "module" : "text/javascript",
            };
            i.forEach((l) => {
              const { script: _, needAttach: h } = (0, m.so)({
                url: l,
                cb: () => {},
                attrs: a,
                createScriptHook: (y, v) => {
                  const S = e.loaderHook.lifecycle.createScript.emit({
                    url: y,
                    attrs: v,
                  });
                  if (S instanceof HTMLScriptElement) return S;
                },
                needDeleteScript: !0,
              });
              h && document.head.appendChild(_);
            });
          }
        }
      }
      let rt = class {
        getEntry() {
          var e = this;
          return (0, E.A)(function* () {
            if (e.remoteEntryExports) return e.remoteEntryExports;
            let n;
            try {
              n = yield Se({
                origin: e.host,
                remoteInfo: e.remoteInfo,
                remoteEntryExports: e.remoteEntryExports,
              });
            } catch (r) {
              const o = Qe(e.remoteInfo);
              if (!(r instanceof Error && r.message.includes(V))) throw r;
              n = yield e.host.loaderHook.lifecycle.loadEntryError.emit({
                getRemoteEntry: Se,
                origin: e.host,
                remoteInfo: e.remoteInfo,
                remoteEntryExports: e.remoteEntryExports,
                globalLoading: se,
                uniqueKey: o,
              });
            }
            return (
              B(
                n,
                `remoteEntryExports is undefined \n ${(0, m.ML)(e.remoteInfo)}`,
              ),
              (e.remoteEntryExports = n),
              e.remoteEntryExports
            );
          })();
        }
        get(e, n, r, o) {
          var i = this;
          return (0, E.A)(function* () {
            const { loadFactory: u = !0 } = r || { loadFactory: !0 },
              a = yield i.getEntry();
            if (!i.inited) {
              const v = i.host.shareScopeMap,
                S = Array.isArray(i.remoteInfo.shareScope)
                  ? i.remoteInfo.shareScope
                  : [i.remoteInfo.shareScope];
              (S.length || S.push("default"),
                S.forEach((M) => {
                  v[M] || (v[M] = {});
                }));
              const A = v[S[0]],
                O = [],
                T = {
                  version: i.remoteInfo.version || "",
                  shareScopeKeys: Array.isArray(i.remoteInfo.shareScope)
                    ? S
                    : i.remoteInfo.shareScope || "default",
                };
              Object.defineProperty(T, "shareScopeMap", {
                value: v,
                enumerable: !1,
              });
              const N = yield i.host.hooks.lifecycle.beforeInitContainer.emit({
                shareScope: A,
                remoteEntryInitOptions: T,
                initScope: O,
                remoteInfo: i.remoteInfo,
                origin: i.host,
              });
              (typeof a?.init > "u" &&
                te(
                  k(I, G, {
                    hostName: i.host.name,
                    remoteName: i.remoteInfo.name,
                    remoteEntryUrl: i.remoteInfo.entry,
                    remoteEntryKey: i.remoteInfo.entryGlobalName,
                  }),
                ),
                yield a.init(
                  N.shareScope,
                  N.initScope,
                  N.remoteEntryInitOptions,
                ),
                yield i.host.hooks.lifecycle.initContainer.emit(
                  g({}, N, { id: e, remoteSnapshot: o, remoteEntryExports: a }),
                ));
            }
            let l;
            ((i.lib = a),
              (i.inited = !0),
              (l = yield i.host.loaderHook.lifecycle.getModuleFactory.emit({
                remoteEntryExports: a,
                expose: n,
                moduleInfo: i.remoteInfo,
              })),
              l || (l = yield a.get(n)),
              B(l, `${me(i.remoteInfo)} remote don't export ${n}.`));
            const _ = ((t, e) => {
                let n;
                return (
                  (n = t.endsWith("/") ? t.slice(0, -1) : t),
                  e.startsWith(".") && (e = e.slice(1)),
                  (n += e),
                  n
                );
              })(i.remoteInfo.name, n),
              h = i.wraperFactory(l, _);
            return u ? yield h() : h;
          })();
        }
        wraperFactory(e, n) {
          function r(o, i) {
            o &&
              "object" == typeof o &&
              Object.isExtensible(o) &&
              !Object.getOwnPropertyDescriptor(o, Symbol.for("mf_module_id")) &&
              Object.defineProperty(o, Symbol.for("mf_module_id"), {
                value: i,
                enumerable: !1,
              });
          }
          return e instanceof Promise
            ? (0, E.A)(function* () {
                const o = yield e();
                return (r(o, n), o);
              })
            : () => {
                const o = e();
                return (r(o, n), o);
              };
        }
        constructor({ remoteInfo: e, host: n }) {
          ((this.inited = !1),
            (this.lib = void 0),
            (this.remoteInfo = e),
            (this.host = n));
        }
      };
      class Z {
        on(e) {
          "function" == typeof e && this.listeners.add(e);
        }
        once(e) {
          const n = this;
          this.on(function r(...o) {
            return (n.remove(r), e.apply(null, o));
          });
        }
        emit(...e) {
          let n;
          return (
            this.listeners.size > 0 &&
              this.listeners.forEach((r) => {
                n = r(...e);
              }),
            n
          );
        }
        remove(e) {
          this.listeners.delete(e);
        }
        removeAll() {
          this.listeners.clear();
        }
        constructor(e) {
          ((this.type = ""),
            (this.listeners = new Set()),
            e && (this.type = e));
        }
      }
      class Q extends Z {
        emit(...e) {
          let n;
          const r = Array.from(this.listeners);
          if (r.length > 0) {
            let o = 0;
            const i = (u) =>
              !1 !== u &&
              (o < r.length
                ? Promise.resolve(r[o++].apply(null, e)).then(i)
                : u);
            n = i();
          }
          return Promise.resolve(n);
        }
      }
      function Ft(t, e) {
        if (!Fe(e)) return !1;
        if (t !== e) for (const n in t) if (!(n in e)) return !1;
        return !0;
      }
      class Re extends Z {
        emit(e) {
          Fe(e) ||
            te(`The data for the "${this.type}" hook should be an object.`);
          for (const n of this.listeners)
            try {
              const r = n(e);
              if (!Ft(e, r)) {
                this.onerror(
                  `A plugin returned an unacceptable value for the "${this.type}" type.`,
                );
                break;
              }
              e = r;
            } catch (r) {
              (he(r), this.onerror(r));
            }
          return e;
        }
        constructor(e) {
          (super(), (this.onerror = te), (this.type = e));
        }
      }
      class ie extends Z {
        emit(e) {
          Fe(e) ||
            te(
              `The response data for the "${this.type}" hook must be an object.`,
            );
          const n = Array.from(this.listeners);
          if (n.length > 0) {
            let r = 0;
            const o = (u) => (he(u), this.onerror(u), e),
              i = (u) => {
                if (Ft(e, u)) {
                  if (((e = u), r < n.length))
                    try {
                      return Promise.resolve(n[r++](e)).then(i, o);
                    } catch (a) {
                      return o(a);
                    }
                } else
                  this.onerror(
                    `A plugin returned an incorrect value for the "${this.type}" type.`,
                  );
                return e;
              };
            return Promise.resolve(i(e));
          }
          return Promise.resolve(e);
        }
        constructor(e) {
          (super(), (this.onerror = te), (this.type = e));
        }
      }
      class _e {
        applyPlugin(e, n) {
          B(
            (function zt(t) {
              return "[object Object]" === Kt.call(t);
            })(e),
            "Plugin configuration is invalid.",
          );
          const r = e.name;
          (B(r, "A name must be provided by the plugin."),
            this.registerPlugins[r] ||
              ((this.registerPlugins[r] = e),
              null == e.apply || e.apply.call(e, n),
              Object.keys(this.lifecycle).forEach((o) => {
                const i = e[o];
                i && this.lifecycle[o].on(i);
              })));
        }
        removePlugin(e) {
          B(e, "A name is required.");
          const n = this.registerPlugins[e];
          (B(n, `The plugin "${e}" is not registered.`),
            Object.keys(n).forEach((r) => {
              "name" !== r && this.lifecycle[r].remove(n[r]);
            }));
        }
        constructor(e) {
          ((this.registerPlugins = {}),
            (this.lifecycle = e),
            (this.lifecycleKeys = Object.keys(e)));
        }
      }
      function Ht(t, e) {
        const n = ut(e);
        n.url ||
          te(`The attribute remoteEntry of ${t.name} must not be undefined.`);
        let r = (0, m.Al)(e, n.url);
        (!(0, m.OL)() && !r.startsWith("http") && (r = `https:${r}`),
          (t.type = n.type),
          (t.entryGlobalName = n.globalName),
          (t.entry = r),
          (t.version = e.version),
          (t.buildVersion = e.buildVersion));
      }
      function Hr(t) {
        const e = t.split(":");
        return 1 === e.length
          ? { name: e[0], version: void 0 }
          : 2 === e.length
            ? { name: e[0], version: e[1] }
            : { name: e[1], version: e[2] };
      }
      function Gt(t, e, n, r, o = {}, i) {
        const u = me(e),
          { value: a } = ae(t, u),
          l = i || a;
        if (l && !(0, m.Tr)(l) && (n(l, e, r), l.remotesInfo)) {
          const _ = Object.keys(l.remotesInfo);
          for (const h of _)
            o[h] ||
              ((o[h] = !0),
              Gt(
                t,
                { name: Hr(h).name, version: l.remotesInfo[h].matchedVersion },
                n,
                !1,
                o,
                void 0,
              ));
        }
      }
      const nt = (t, e) =>
        document.querySelector(`${t}[${"link" === t ? "href" : "src"}="${e}"]`);
      function Gr(t, e, n, r, o) {
        const i = [],
          u = [],
          a = [],
          l = new Set(),
          _ = new Set(),
          { options: h } = t,
          { preloadConfig: y } = e,
          { depsRemote: v } = y;
        if (
          (Gt(
            r,
            n,
            (T, N, M) => {
              let $;
              if (M) $ = y;
              else if (Array.isArray(v)) {
                const X = v.find(
                  (Y) => Y.nameOrAlias === N.name || Y.nameOrAlias === N.alias,
                );
                if (!X) return;
                $ = Ct(X);
              } else {
                if (!0 !== v) return;
                $ = y;
              }
              const w = (0, m.Al)(T, ut(T).url);
              w &&
                a.push({
                  name: N.name,
                  moduleInfo: {
                    name: N.name,
                    entry: w,
                    type: "remoteEntryType" in T ? T.remoteEntryType : "global",
                    entryGlobalName: "globalName" in T ? T.globalName : N.name,
                    shareScope: "",
                    version: "version" in T ? T.version : void 0,
                  },
                  url: w,
                });
              let D = "modules" in T ? T.modules : [];
              const W = (function Cr(t) {
                return t
                  ? t.map((e) =>
                      "." === e
                        ? e
                        : e.startsWith("./")
                          ? e.replace("./", "")
                          : e,
                    )
                  : [];
              })($.exposes);
              var z;
              function U(X) {
                const Y = X.map((ne) => (0, m.Al)(T, ne));
                return $.filter ? Y.filter($.filter) : Y;
              }
              if (
                (W.length &&
                  "modules" in T &&
                  (D =
                    null == T || null == (z = T.modules)
                      ? void 0
                      : z.reduce(
                          (X, Y) => (
                            -1 !== W?.indexOf(Y.moduleName) && X.push(Y),
                            X
                          ),
                          [],
                        )),
                D)
              ) {
                const X = D.length;
                for (let Y = 0; Y < X; Y++) {
                  const ne = D[Y],
                    it = `${N.name}/${ne.moduleName}`;
                  (t.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                    id: "." === ne.moduleName ? N.name : it,
                    name: N.name,
                    remoteSnapshot: T,
                    preloadConfig: $,
                    remote: N,
                    origin: t,
                  }),
                    !bt(it) &&
                      ("all" === $.resourceCategory
                        ? (i.push(...U(ne.assets.css.async)),
                          i.push(...U(ne.assets.css.sync)),
                          u.push(...U(ne.assets.js.async)),
                          u.push(...U(ne.assets.js.sync)))
                        : ($.resourceCategory = "sync") &&
                          (i.push(...U(ne.assets.css.sync)),
                          u.push(...U(ne.assets.js.sync))),
                      gt(it)));
                }
              }
            },
            !0,
            {},
            o,
          ),
          o.shared && o.shared.length > 0)
        ) {
          const T = (N, M) => {
            const $ = de(
              t.shareScopeMap,
              M.sharedName,
              N,
              t.sharedHandler.hooks.lifecycle.resolveShare,
            );
            $ &&
              "function" == typeof $.lib &&
              (M.assets.js.sync.forEach((w) => {
                l.add(w);
              }),
              M.assets.css.sync.forEach((w) => {
                _.add(w);
              }));
          };
          o.shared.forEach((N) => {
            var M;
            const $ = null == (M = h.shared) ? void 0 : M[N.sharedName];
            if (!$) return;
            const w = N.version ? $.find((W) => W.version === N.version) : $;
            w &&
              ct(w).forEach((W) => {
                T(W, N);
              });
          });
        }
        const A = u.filter((T) => !l.has(T) && !nt("script", T));
        return {
          cssAssets: i.filter((T) => !_.has(T) && !nt("link", T)),
          jsAssetsWithoutEntry: A,
          entryAssets: a.filter((T) => !nt("script", T.url)),
        };
      }
      function jt(t, e) {
        const n = ye({ name: e.name, version: e.options.version }),
          r =
            n &&
            "remotesInfo" in n &&
            n.remotesInfo &&
            ae(n.remotesInfo, t.name).value;
        return r && r.matchedVersion
          ? {
              hostGlobalSnapshot: n,
              globalSnapshot: He(),
              remoteSnapshot: ye({ name: t.name, version: r.matchedVersion }),
            }
          : {
              hostGlobalSnapshot: void 0,
              globalSnapshot: He(),
              remoteSnapshot: ye({
                name: t.name,
                version: "version" in t ? t.version : void 0,
              }),
            };
      }
      class Ur {
        loadRemoteSnapshotInfo(e) {
          var n = this;
          return (0, E.A)(function* ({ moduleInfo: r, id: o }) {
            const { options: u } = n.HostInstance;
            yield n.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
              options: u,
              moduleInfo: r,
            });
            let a = ye({
              name: n.HostInstance.options.name,
              version: n.HostInstance.options.version,
            });
            (a ||
              ((a = {
                version: n.HostInstance.options.version || "",
                remoteEntry: "",
                remotesInfo: {},
              }),
              (J.__FEDERATION__.moduleInfo = g(
                {},
                J.__FEDERATION__.moduleInfo,
                { [n.HostInstance.options.name]: a },
              ))),
              a &&
                "remotesInfo" in a &&
                !ae(a.remotesInfo, r.name).value &&
                ("version" in r || "entry" in r) &&
                (a.remotesInfo = g({}, a?.remotesInfo, {
                  [r.name]: {
                    matchedVersion: "version" in r ? r.version : r.entry,
                  },
                })));
            const {
                hostGlobalSnapshot: l,
                remoteSnapshot: _,
                globalSnapshot: h,
              } = n.getGlobalRemoteInfo(r),
              { remoteSnapshot: y, globalSnapshot: v } =
                yield n.hooks.lifecycle.loadSnapshot.emit({
                  options: u,
                  moduleInfo: r,
                  hostGlobalSnapshot: l,
                  remoteSnapshot: _,
                  globalSnapshot: h,
                });
            let S, A;
            if (y)
              if ((0, m.Tr)(y)) {
                const O = (0, m.OL)()
                    ? y.remoteEntry
                    : y.ssrRemoteEntry || y.remoteEntry || "",
                  T = yield n.getManifestJson(O, r, {});
                ((S = T), (A = Ge(g({}, r, { entry: O }), T)));
              } else {
                const { remoteSnapshot: O } =
                  yield n.hooks.lifecycle.loadRemoteSnapshot.emit({
                    options: n.HostInstance.options,
                    moduleInfo: r,
                    remoteSnapshot: y,
                    from: "global",
                  });
                ((S = O), (A = v));
              }
            else if (xe(r)) {
              const O = yield n.getManifestJson(r.entry, r, {}),
                T = Ge(r, O),
                { remoteSnapshot: N } =
                  yield n.hooks.lifecycle.loadRemoteSnapshot.emit({
                    options: n.HostInstance.options,
                    moduleInfo: r,
                    remoteSnapshot: O,
                    from: "global",
                  });
              ((S = N), (A = T));
            } else
              te(
                k(q, G, {
                  hostName: r.name,
                  hostVersion: r.version,
                  globalSnapshot: JSON.stringify(v),
                }),
              );
            return (
              yield n.hooks.lifecycle.afterLoadSnapshot.emit({
                id: o,
                host: n.HostInstance,
                options: u,
                moduleInfo: r,
                remoteSnapshot: S,
              }),
              { remoteSnapshot: S, globalSnapshot: A }
            );
          }).apply(this, arguments);
        }
        getGlobalRemoteInfo(e) {
          return jt(e, this.HostInstance);
        }
        getManifestJson(e, n, r) {
          var o = this;
          return (0, E.A)(function* () {
            const i = (function () {
                var a = (0, E.A)(function* () {
                  let l = o.manifestCache.get(e);
                  if (l) return l;
                  try {
                    let _ = yield o.loaderHook.lifecycle.fetch.emit(e, {});
                    ((!_ || !(_ instanceof Response)) &&
                      (_ = yield fetch(e, {})),
                      (l = yield _.json()));
                  } catch (_) {
                    ((l =
                      yield o.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit(
                        {
                          id: e,
                          error: _,
                          from: "runtime",
                          lifecycle: "afterResolve",
                          origin: o.HostInstance,
                        },
                      )),
                      l ||
                        (delete o.manifestLoading[e],
                        te(
                          k(
                            P,
                            G,
                            {
                              manifestUrl: e,
                              moduleName: n.name,
                              hostName: o.HostInstance.options.name,
                            },
                            `${_}`,
                          ),
                        )));
                  }
                  return (
                    B(
                      l.metaData && l.exposes && l.shared,
                      `${e} is not a federation manifest`,
                    ),
                    o.manifestCache.set(e, l),
                    l
                  );
                });
                return function () {
                  return a.apply(this, arguments);
                };
              })(),
              u = (function () {
                var a = (0, E.A)(function* () {
                  const l = yield i(),
                    _ = (0, m.Jn)(l, { version: e }),
                    { remoteSnapshot: h } =
                      yield o.hooks.lifecycle.loadRemoteSnapshot.emit({
                        options: o.HostInstance.options,
                        moduleInfo: n,
                        manifestJson: l,
                        remoteSnapshot: _,
                        manifestUrl: e,
                        from: "manifest",
                      });
                  return h;
                });
                return function () {
                  return a.apply(this, arguments);
                };
              })();
            return (
              o.manifestLoading[e] ||
                (o.manifestLoading[e] = u().then((a) => a)),
              o.manifestLoading[e]
            );
          })();
        }
        constructor(e) {
          ((this.loadingHostSnapshot = null),
            (this.manifestCache = new Map()),
            (this.hooks = new _e({
              beforeLoadRemoteSnapshot: new Q("beforeLoadRemoteSnapshot"),
              loadSnapshot: new ie("loadGlobalSnapshot"),
              loadRemoteSnapshot: new ie("loadRemoteSnapshot"),
              afterLoadSnapshot: new ie("afterLoadSnapshot"),
            })),
            (this.manifestLoading = ue.__FEDERATION__.__MANIFEST_LOADING__),
            (this.HostInstance = e),
            (this.loaderHook = e.loaderHook));
        }
      }
      class Br {
        registerShared(e, n) {
          const { shareInfos: r, shared: o } = wt(e, n);
          return (
            Object.keys(r).forEach((u) => {
              r[u].forEach((l) => {
                !de(
                  this.shareScopeMap,
                  u,
                  l,
                  this.hooks.lifecycle.resolveShare,
                ) &&
                  l &&
                  l.lib &&
                  this.setShared({
                    pkgName: u,
                    lib: l.lib,
                    get: l.get,
                    loaded: !0,
                    shared: l,
                    from: n.name,
                  });
              });
            }),
            { shareInfos: r, shared: o }
          );
        }
        loadShare(e, n) {
          var r = this;
          return (0, E.A)(function* () {
            const { host: o } = r,
              i = kt({
                pkgName: e,
                extraOptions: n,
                shareInfos: o.options.shared,
              });
            i?.scope &&
              (yield Promise.all(
                i.scope.map(
                  (function () {
                    var h = (0, E.A)(function* (y) {
                      yield Promise.all(
                        r.initializeSharing(y, { strategy: i.strategy }),
                      );
                    });
                    return function (y) {
                      return h.apply(this, arguments);
                    };
                  })(),
                ),
              ));
            const u = yield r.hooks.lifecycle.beforeLoadShare.emit({
                pkgName: e,
                shareInfo: i,
                shared: o.options.shared,
                origin: o,
              }),
              { shareInfo: a } = u;
            B(
              a,
              `Cannot find ${e} Share in the ${o.options.name}. Please ensure that the ${e} Share parameters have been injected`,
            );
            const l = de(r.shareScopeMap, e, a, r.hooks.lifecycle.resolveShare),
              _ = (h) => {
                (h.useIn || (h.useIn = []), at(h.useIn, o.options.name));
              };
            if (l && l.lib) return (_(l), l.lib);
            if (l && l.loading && !l.loaded) {
              const h = yield l.loading;
              return ((l.loaded = !0), l.lib || (l.lib = h), _(l), h);
            }
            if (l) {
              const y = (function () {
                var v = (0, E.A)(function* () {
                  const S = yield l.get();
                  return (_(l), (l.loaded = !0), (l.lib = S), S);
                });
                return function () {
                  return v.apply(this, arguments);
                };
              })()();
              return (
                r.setShared({
                  pkgName: e,
                  loaded: !1,
                  shared: l,
                  from: o.options.name,
                  lib: null,
                  loading: y,
                }),
                y
              );
            }
            {
              if (n?.customShareInfo) return !1;
              const y = (function () {
                var v = (0, E.A)(function* () {
                  const S = yield a.get();
                  ((a.lib = S), (a.loaded = !0), _(a));
                  const A = de(
                    r.shareScopeMap,
                    e,
                    a,
                    r.hooks.lifecycle.resolveShare,
                  );
                  return (
                    A && ((A.lib = S), (A.loaded = !0), (A.from = a.from)),
                    S
                  );
                });
                return function () {
                  return v.apply(this, arguments);
                };
              })()();
              return (
                r.setShared({
                  pkgName: e,
                  loaded: !1,
                  shared: a,
                  from: o.options.name,
                  lib: null,
                  loading: y,
                }),
                y
              );
            }
          })();
        }
        initializeSharing(e = Ee, n) {
          const { host: r } = this,
            o = n?.from,
            i = n?.strategy;
          let u = n?.initScope;
          const a = [];
          if ("build" !== o) {
            const { initTokens: A } = this;
            u || (u = []);
            let O = A[e];
            if ((O || (O = A[e] = { from: this.host.name }), u.indexOf(O) >= 0))
              return a;
            u.push(O);
          }
          const l = this.shareScopeMap,
            _ = r.options.name;
          l[e] || (l[e] = {});
          const h = l[e],
            S = (function () {
              var A = (0, E.A)(function* (O) {
                const { module: T } =
                  yield r.remoteHandler.getRemoteModuleAndOptions({ id: O });
                if (T.getEntry) {
                  let N;
                  try {
                    N = yield T.getEntry();
                  } catch (M) {
                    N =
                      yield r.remoteHandler.hooks.lifecycle.errorLoadRemote.emit(
                        {
                          id: O,
                          error: M,
                          from: "runtime",
                          lifecycle: "beforeLoadShare",
                          origin: r,
                        },
                      );
                  }
                  T.inited ||
                    (yield ((A) => A && A.init && A.init(l[e], u))(N),
                    (T.inited = !0));
                }
              });
              return function (T) {
                return A.apply(this, arguments);
              };
            })();
          return (
            Object.keys(r.options.shared).forEach((A) => {
              r.options.shared[A].forEach((T) => {
                T.scope.includes(e) &&
                  ((A, O) => {
                    var T;
                    const { version: N, eager: M } = O;
                    h[A] = h[A] || {};
                    const $ = h[A],
                      w = $[N],
                      D = !(
                        !w ||
                        !(w.eager || (null != (T = w.shareConfig) && T.eager))
                      );
                    (!w ||
                      ("loaded-first" !== w.strategy &&
                        !w.loaded &&
                        (!M != !D ? M : _ > w.from))) &&
                      ($[N] = O);
                  })(A, T);
              });
            }),
            ("version-first" === r.options.shareStrategy ||
              "version-first" === i) &&
              r.options.remotes.forEach((A) => {
                A.shareScope === e && a.push(S(A.name));
              }),
            a
          );
        }
        loadShareSync(e, n) {
          const { host: r } = this,
            o = kt({
              pkgName: e,
              extraOptions: n,
              shareInfos: r.options.shared,
            });
          o?.scope &&
            o.scope.forEach((a) => {
              this.initializeSharing(a, { strategy: o.strategy });
            });
          const i = de(
              this.shareScopeMap,
              e,
              o,
              this.hooks.lifecycle.resolveShare,
            ),
            u = (a) => {
              (a.useIn || (a.useIn = []), at(a.useIn, r.options.name));
            };
          if (i) {
            if ("function" == typeof i.lib)
              return (
                u(i),
                i.loaded ||
                  ((i.loaded = !0),
                  i.from === r.options.name && (o.loaded = !0)),
                i.lib
              );
            if ("function" == typeof i.get) {
              const a = i.get();
              if (!(a instanceof Promise))
                return (
                  u(i),
                  this.setShared({
                    pkgName: e,
                    loaded: !0,
                    from: r.options.name,
                    lib: a,
                    shared: i,
                  }),
                  a
                );
            }
          }
          if (o.lib) return (o.loaded || (o.loaded = !0), o.lib);
          if (o.get) {
            const a = o.get();
            if (a instanceof Promise)
              throw new Error(
                k("build" === n?.from ? x : j, G, {
                  hostName: r.options.name,
                  sharedPkgName: e,
                }),
              );
            return (
              (o.lib = a),
              this.setShared({
                pkgName: e,
                loaded: !0,
                from: r.options.name,
                lib: o.lib,
                shared: o,
              }),
              o.lib
            );
          }
          throw new Error(
            k(j, G, { hostName: r.options.name, sharedPkgName: e }),
          );
        }
        initShareScopeMap(e, n, r = {}) {
          const { host: o } = this;
          ((this.shareScopeMap[e] = n),
            this.hooks.lifecycle.initContainerShareScopeMap.emit({
              shareScope: n,
              options: o.options,
              origin: o,
              scopeName: e,
              hostShareScopeMap: r.hostShareScopeMap,
            }));
        }
        setShared({
          pkgName: e,
          shared: n,
          from: r,
          lib: o,
          loading: i,
          loaded: u,
          get: a,
        }) {
          const { version: l, scope: _ = "default" } = n,
            h = b(n, ["version", "scope"]);
          (Array.isArray(_) ? _ : [_]).forEach((v) => {
            if (
              (this.shareScopeMap[v] || (this.shareScopeMap[v] = {}),
              this.shareScopeMap[v][e] || (this.shareScopeMap[v][e] = {}),
              !this.shareScopeMap[v][e][l])
            )
              return (
                (this.shareScopeMap[v][e][l] = g(
                  { version: l, scope: ["default"] },
                  h,
                  { lib: o, loaded: u, loading: i },
                )),
                void (a && (this.shareScopeMap[v][e][l].get = a))
              );
            const S = this.shareScopeMap[v][e][l];
            (i && !S.loading && (S.loading = i),
              u && !S.loaded && (S.loaded = u),
              r && S.from !== r && (S.from = r));
          });
        }
        _setGlobalShareScopeMap(e) {
          const n = Ke(),
            r = e.id || e.name;
          r && !n[r] && (n[r] = this.shareScopeMap);
        }
        constructor(e) {
          ((this.hooks = new _e({
            afterResolve: new ie("afterResolve"),
            beforeLoadShare: new ie("beforeLoadShare"),
            loadShare: new Q(),
            resolveShare: new Re("resolveShare"),
            initContainerShareScopeMap: new Re("initContainerShareScopeMap"),
          })),
            (this.host = e),
            (this.shareScopeMap = {}),
            (this.initTokens = {}),
            this._setGlobalShareScopeMap(e.options));
        }
      }
      class Wr {
        formatAndRegisterRemote(e, n) {
          return (n.remotes || []).reduce(
            (o, i) => (this.registerRemote(i, o, { force: !1 }), o),
            e.remotes,
          );
        }
        setIdToRemoteMap(e, n) {
          const { remote: r, expose: o } = n,
            { name: i, alias: u } = r;
          if (
            ((this.idToRemoteMap[e] = { name: r.name, expose: o }),
            u && e.startsWith(i))
          ) {
            const a = e.replace(i, u);
            this.idToRemoteMap[a] = { name: r.name, expose: o };
          } else if (u && e.startsWith(u)) {
            const a = e.replace(u, i);
            this.idToRemoteMap[a] = { name: r.name, expose: o };
          }
        }
        loadRemote(e, n) {
          var r = this;
          return (0, E.A)(function* () {
            const { host: o } = r;
            try {
              const { loadFactory: i = !0 } = n || { loadFactory: !0 },
                {
                  module: u,
                  moduleOptions: a,
                  remoteMatchInfo: l,
                } = yield r.getRemoteModuleAndOptions({ id: e }),
                {
                  pkgNameOrAlias: _,
                  remote: h,
                  expose: y,
                  id: v,
                  remoteSnapshot: S,
                } = l,
                A = yield u.get(v, y, n, S),
                O = yield r.hooks.lifecycle.onLoad.emit({
                  id: v,
                  pkgNameOrAlias: _,
                  expose: y,
                  exposeModule: i ? A : void 0,
                  exposeModuleFactory: i ? void 0 : A,
                  remote: h,
                  options: a,
                  moduleInstance: u,
                  origin: o,
                });
              return (r.setIdToRemoteMap(e, l), "function" == typeof O ? O : A);
            } catch (i) {
              const { from: u = "runtime" } = n || { from: "runtime" },
                a = yield r.hooks.lifecycle.errorLoadRemote.emit({
                  id: e,
                  error: i,
                  from: u,
                  lifecycle: "onLoad",
                  origin: o,
                });
              if (!a) throw i;
              return a;
            }
          })();
        }
        preloadRemote(e) {
          var n = this;
          return (0, E.A)(function* () {
            const { host: r } = n;
            yield n.hooks.lifecycle.beforePreloadRemote.emit({
              preloadOps: e,
              options: r.options,
              origin: r,
            });
            const o = (function xr(t, e) {
              return e.map((n) => {
                const r = (function Mr(t, e) {
                  for (const n of t)
                    if (e === n.name || (n.alias && e === n.alias)) return n;
                })(t, n.nameOrAlias);
                return (
                  B(
                    r,
                    `Unable to preload ${n.nameOrAlias} as it is not included in ${!r && (0, m.ML)({ remoteInfo: r, remotes: t })}`,
                  ),
                  { remote: r, preloadConfig: Ct(n) }
                );
              });
            })(r.options.remotes, e);
            yield Promise.all(
              o.map(
                (function () {
                  var i = (0, E.A)(function* (u) {
                    const { remote: a } = u,
                      l = ve(a),
                      { globalSnapshot: _, remoteSnapshot: h } =
                        yield r.snapshotHandler.loadRemoteSnapshotInfo({
                          moduleInfo: a,
                        }),
                      y = yield n.hooks.lifecycle.generatePreloadAssets.emit({
                        origin: r,
                        preloadOptions: u,
                        remote: a,
                        remoteInfo: l,
                        globalSnapshot: _,
                        remoteSnapshot: h,
                      });
                    y && tt(l, r, y);
                  });
                  return function (u) {
                    return i.apply(this, arguments);
                  };
                })(),
              ),
            );
          })();
        }
        registerRemotes(e, n) {
          const { host: r } = this;
          e.forEach((o) => {
            this.registerRemote(o, r.options.remotes, { force: n?.force });
          });
        }
        getRemoteModuleAndOptions(e) {
          var n = this;
          return (0, E.A)(function* () {
            const { host: r } = n,
              { id: o } = e;
            let i;
            try {
              i = yield n.hooks.lifecycle.beforeRequest.emit({
                id: o,
                options: r.options,
                origin: r,
              });
            } catch (O) {
              if (
                ((i = yield n.hooks.lifecycle.errorLoadRemote.emit({
                  id: o,
                  options: r.options,
                  origin: r,
                  from: "runtime",
                  error: O,
                  lifecycle: "beforeRequest",
                })),
                !i)
              )
                throw O;
            }
            const { id: u } = i,
              a = (function Lt(t, e) {
                for (const n of t) {
                  const r = e.startsWith(n.name);
                  let o = e.replace(n.name, "");
                  if (r) {
                    if (o.startsWith("/"))
                      return (
                        (o = `.${o}`),
                        { pkgNameOrAlias: n.name, expose: o, remote: n }
                      );
                    if ("" === o)
                      return { pkgNameOrAlias: n.name, expose: ".", remote: n };
                  }
                  const i = n.alias && e.startsWith(n.alias);
                  let u = n.alias && e.replace(n.alias, "");
                  if (n.alias && i) {
                    if (u && u.startsWith("/"))
                      return (
                        (u = `.${u}`),
                        { pkgNameOrAlias: n.alias, expose: u, remote: n }
                      );
                    if ("" === u)
                      return {
                        pkgNameOrAlias: n.alias,
                        expose: ".",
                        remote: n,
                      };
                  }
                }
              })(r.options.remotes, u);
            B(a, k(L, G, { hostName: r.options.name, requestId: u }));
            const { remote: l } = a,
              _ = ve(l),
              h = yield r.sharedHandler.hooks.lifecycle.afterResolve.emit(
                g({ id: u }, a, {
                  options: r.options,
                  origin: r,
                  remoteInfo: _,
                }),
              ),
              { remote: y, expose: v } = h;
            B(
              y && v,
              `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${u}.`,
            );
            let S = r.moduleCache.get(y.name);
            const A = { host: r, remoteInfo: _ };
            return (
              S || ((S = new rt(A)), r.moduleCache.set(y.name, S)),
              { module: S, moduleOptions: A, remoteMatchInfo: h }
            );
          })();
        }
        registerRemote(e, n, r) {
          const { host: o } = this,
            i = () => {
              if (e.alias) {
                const a = n.find((l) => {
                  var _;
                  return (
                    e.alias &&
                    (l.name.startsWith(e.alias) ||
                      (null == (_ = l.alias) ? void 0 : _.startsWith(e.alias)))
                  );
                });
                B(
                  !a,
                  `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${a && a.name} name or alias`,
                );
              }
              ("entry" in e &&
                (0, m.OL)() &&
                !e.entry.startsWith("http") &&
                (e.entry = new URL(e.entry, window.location.origin).href),
                e.shareScope || (e.shareScope = Ee),
                e.type || (e.type = St));
            };
          this.hooks.lifecycle.beforeRegisterRemote.emit({
            remote: e,
            origin: o,
          });
          const u = n.find((a) => a.name === e.name);
          if (u) {
            const a = [
              `The remote "${e.name}" is already registered.`,
              "Please note that overriding it may cause unexpected errors.",
            ];
            r?.force &&
              (this.removeRemote(u),
              i(),
              n.push(e),
              this.hooks.lifecycle.registerRemote.emit({
                remote: e,
                origin: o,
              }),
              (0, m.R8)(a.join(" ")));
          } else
            (i(),
              n.push(e),
              this.hooks.lifecycle.registerRemote.emit({
                remote: e,
                origin: o,
              }));
        }
        removeRemote(e) {
          try {
            const { host: r } = this,
              { name: o } = e,
              i = r.options.remotes.findIndex((a) => a.name === o);
            -1 !== i && r.options.remotes.splice(i, 1);
            const u = r.moduleCache.get(e.name);
            if (u) {
              const a = u.remoteInfo,
                l = a.entryGlobalName;
              var n;
              H[l] &&
                (null != (n = Object.getOwnPropertyDescriptor(H, l)) &&
                n.configurable
                  ? delete H[l]
                  : (H[l] = void 0));
              const _ = Qe(u.remoteInfo);
              (se[_] && delete se[_],
                r.snapshotHandler.manifestCache.delete(a.entry));
              let h = a.buildVersion
                ? (0, m.lG)(a.name, a.buildVersion)
                : a.name;
              const y = H.__FEDERATION__.__INSTANCES__.findIndex((S) =>
                a.buildVersion ? S.options.id === h : S.name === h,
              );
              if (-1 !== y) {
                const S = H.__FEDERATION__.__INSTANCES__[y];
                h = S.options.id || h;
                const A = Ke();
                let O = !0;
                const T = [];
                (Object.keys(A).forEach((N) => {
                  const M = A[N];
                  M &&
                    Object.keys(M).forEach(($) => {
                      const w = M[$];
                      w &&
                        Object.keys(w).forEach((D) => {
                          const W = w[D];
                          W &&
                            Object.keys(W).forEach((z) => {
                              const U = W[z];
                              U &&
                                "object" == typeof U &&
                                U.from === a.name &&
                                (U.loaded || U.loading
                                  ? ((U.useIn = U.useIn.filter(
                                      (X) => X !== a.name,
                                    )),
                                    U.useIn.length
                                      ? (O = !1)
                                      : T.push([N, $, D, z]))
                                  : T.push([N, $, D, z]));
                            });
                        });
                    });
                }),
                  O && ((S.shareScopeMap = {}), delete A[h]),
                  T.forEach(([N, M, $, w]) => {
                    var D, W, z;
                    null == (z = A[N]) ||
                      null == (W = z[M]) ||
                      null == (D = W[$]) ||
                      delete D[w];
                  }),
                  H.__FEDERATION__.__INSTANCES__.splice(y, 1));
              }
              const { hostGlobalSnapshot: v } = jt(e, r);
              if (v) {
                const S =
                  v &&
                  "remotesInfo" in v &&
                  v.remotesInfo &&
                  ae(v.remotesInfo, e.name).key;
                S &&
                  (delete v.remotesInfo[S],
                  ue.__FEDERATION__.__MANIFEST_LOADING__[S] &&
                    delete ue.__FEDERATION__.__MANIFEST_LOADING__[S]);
              }
              r.moduleCache.delete(e.name);
            }
          } catch (r) {
            De.log("removeRemote fail: ", r);
          }
        }
        constructor(e) {
          ((this.hooks = new _e({
            beforeRegisterRemote: new Re("beforeRegisterRemote"),
            registerRemote: new Re("registerRemote"),
            beforeRequest: new ie("beforeRequest"),
            onLoad: new Q("onLoad"),
            handlePreloadModule: new Z("handlePreloadModule"),
            errorLoadRemote: new Q("errorLoadRemote"),
            beforePreloadRemote: new Q("beforePreloadRemote"),
            generatePreloadAssets: new Q("generatePreloadAssets"),
            afterPreloadRemote: new Q(),
            loadEntry: new Q(),
          })),
            (this.host = e),
            (this.idToRemoteMap = {}));
        }
      }
      class ot {
        initOptions(e) {
          this.registerPlugins(e.plugins);
          const n = this.formatOptions(this.options, e);
          return ((this.options = n), n);
        }
        loadShare(e, n) {
          var r = this;
          return (0, E.A)(function* () {
            return r.sharedHandler.loadShare(e, n);
          })();
        }
        loadShareSync(e, n) {
          return this.sharedHandler.loadShareSync(e, n);
        }
        initializeSharing(e = Ee, n) {
          return this.sharedHandler.initializeSharing(e, n);
        }
        initRawContainer(e, n, r) {
          const o = ve({ name: e, entry: n }),
            i = new rt({ host: this, remoteInfo: o });
          return ((i.remoteEntryExports = r), this.moduleCache.set(e, i), i);
        }
        loadRemote(e, n) {
          var r = this;
          return (0, E.A)(function* () {
            return r.remoteHandler.loadRemote(e, n);
          })();
        }
        preloadRemote(e) {
          var n = this;
          return (0, E.A)(function* () {
            return n.remoteHandler.preloadRemote(e);
          })();
        }
        initShareScopeMap(e, n, r = {}) {
          this.sharedHandler.initShareScopeMap(e, n, r);
        }
        formatOptions(e, n) {
          const { shared: r } = wt(e, n),
            { userOptions: o, options: i } =
              this.hooks.lifecycle.beforeInit.emit({
                origin: this,
                userOptions: n,
                options: e,
                shareInfo: r,
              }),
            u = this.remoteHandler.formatAndRegisterRemote(i, o),
            { shared: a } = this.sharedHandler.registerShared(i, o),
            l = [...i.plugins];
          o.plugins &&
            o.plugins.forEach((h) => {
              l.includes(h) || l.push(h);
            });
          const _ = g({}, e, n, { plugins: l, remotes: u, shared: a });
          return (
            this.hooks.lifecycle.init.emit({ origin: this, options: _ }),
            _
          );
        }
        registerPlugins(e) {
          const n = (function Pr(t, e) {
            const n = J.__FEDERATION__.__GLOBAL_PLUGIN__,
              r = [
                e.hooks,
                e.remoteHandler.hooks,
                e.sharedHandler.hooks,
                e.snapshotHandler.hooks,
                e.loaderHook,
                e.bridgeHook,
              ];
            return (
              n.length > 0 &&
                n.forEach((o) => {
                  t?.find((i) => i.name !== o.name) && t.push(o);
                }),
              t &&
                t.length > 0 &&
                t.forEach((o) => {
                  r.forEach((i) => {
                    i.applyPlugin(o, e);
                  });
                }),
              t
            );
          })(e, this);
          this.options.plugins = this.options.plugins.reduce(
            (r, o) => (
              o && r && !r.find((i) => i.name === o.name) && r.push(o),
              r
            ),
            n || [],
          );
        }
        registerRemotes(e, n) {
          return this.remoteHandler.registerRemotes(e, n);
        }
        registerShared(e) {
          this.sharedHandler.registerShared(
            this.options,
            g({}, this.options, { shared: e }),
          );
        }
        constructor(e) {
          ((this.hooks = new _e({
            beforeInit: new Re("beforeInit"),
            init: new Z(),
            beforeInitContainer: new ie("beforeInitContainer"),
            initContainer: new ie("initContainer"),
          })),
            (this.version = "0.18.4"),
            (this.moduleCache = new Map()),
            (this.loaderHook = new _e({
              getModuleInfo: new Z(),
              createScript: new Z(),
              createLink: new Z(),
              fetch: new Q(),
              loadEntryError: new Q(),
              getModuleFactory: new Q(),
            })),
            (this.bridgeHook = new _e({
              beforeBridgeRender: new Z(),
              afterBridgeRender: new Z(),
              beforeBridgeDestroy: new Z(),
              afterBridgeDestroy: new Z(),
            })));
          const n = [
              {
                name: "snapshot-plugin",
                afterResolve: (t) =>
                  (0, E.A)(function* () {
                    const {
                      remote: e,
                      pkgNameOrAlias: n,
                      expose: r,
                      origin: o,
                      remoteInfo: i,
                      id: u,
                    } = t;
                    if (!xe(e) || !lt(e)) {
                      const { remoteSnapshot: a, globalSnapshot: l } =
                        yield o.snapshotHandler.loadRemoteSnapshotInfo({
                          moduleInfo: e,
                          id: u,
                        });
                      Ht(i, a);
                      const _ = {
                          remote: e,
                          preloadConfig: {
                            nameOrAlias: n,
                            exposes: [r],
                            resourceCategory: "sync",
                            share: !1,
                            depsRemote: !1,
                          },
                        },
                        h =
                          yield o.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit(
                            {
                              origin: o,
                              preloadOptions: _,
                              remoteInfo: i,
                              remote: e,
                              remoteSnapshot: a,
                              globalSnapshot: l,
                            },
                          );
                      return (
                        h && tt(i, o, h, !1),
                        g({}, t, { remoteSnapshot: a })
                      );
                    }
                    return t;
                  })(),
              },
              {
                name: "generate-preload-assets-plugin",
                generatePreloadAssets: (t) =>
                  (0, E.A)(function* () {
                    const {
                      origin: e,
                      preloadOptions: n,
                      remoteInfo: r,
                      remote: o,
                      globalSnapshot: i,
                      remoteSnapshot: u,
                    } = t;
                    return (0, m.OL)()
                      ? xe(o) && lt(o)
                        ? {
                            cssAssets: [],
                            jsAssetsWithoutEntry: [],
                            entryAssets: [
                              {
                                name: o.name,
                                url: o.entry,
                                moduleInfo: {
                                  name: r.name,
                                  entry: o.entry,
                                  type: r.type || "global",
                                  entryGlobalName: "",
                                  shareScope: "",
                                },
                              },
                            ],
                          }
                        : (Ht(r, u), Gr(e, n, r, i, u))
                      : {
                          cssAssets: [],
                          jsAssetsWithoutEntry: [],
                          entryAssets: [],
                        };
                  })(),
              },
            ],
            r = {
              id: "onboarding:2.7.1",
              name: e.name,
              plugins: n,
              remotes: [],
              shared: {},
              inBrowser: (0, m.OL)(),
            };
          ((this.name = e.name),
            (this.options = r),
            (this.snapshotHandler = new Ur(this)),
            (this.sharedHandler = new Br(this)),
            (this.remoteHandler = new Wr(this)),
            (this.shareScopeMap = this.sharedHandler.shareScopeMap),
            this.registerPlugins([...r.plugins, ...(e.plugins || [])]),
            (this.options = this.formatOptions(r, e)));
        }
      }
      function Ut(t) {
        const n = new (
          (function _t() {
            return H.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
          })() || ot
        )(t);
        return (
          (function dt(t) {
            H.__FEDERATION__.__INSTANCES__.push(t);
          })(n),
          n
        );
      }
      let C = null;
      function zr(t) {
        const e = (function Kr(t, e) {
          const n = "onboarding:2.7.1";
          return H.__FEDERATION__.__INSTANCES__.find(
            (r) =>
              !!(
                (n && r.options.id === n) ||
                (r.options.name === t && !r.options.version && !e) ||
                (r.options.name === t && e && r.options.version === e)
              ),
          );
        })(t.name, t.version);
        return e ? (e.initOptions(t), C || (C = e), e) : ((C = Ut(t)), C);
      }
      function Xr(...t) {
        return (B(C, k(F, G)), C.loadRemote.apply(C, t));
      }
      function Yr(...t) {
        return (B(C, k(F, G)), C.loadShare.apply(C, t));
      }
      function Jr(...t) {
        return (B(C, k(F, G)), C.loadShareSync.apply(C, t));
      }
      function Zr(...t) {
        return (B(C, k(F, G)), C.preloadRemote.apply(C, t));
      }
      function Qr(...t) {
        return (B(C, k(F, G)), C.registerRemotes.apply(C, t));
      }
      function en(...t) {
        return (B(C, k(F, G)), C.registerPlugins.apply(C, t));
      }
      function tn() {
        return C;
      }
      function rn(...t) {
        return (B(C, k(F, G)), C.registerShared.apply(C, t));
      }
      !(function pt(t, e = (0, m.Bb)()) {
        e &&
          ((H.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = t),
          (H.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.18.4"));
      })(ot);
      const Bt = ["script"];
      function ke(t) {
        !t.S ||
          t.federation.hasAttachShareScopeMap ||
          !t.federation.instance ||
          !t.federation.instance.shareScopeMap ||
          ((t.S = t.federation.instance.shareScopeMap),
          (t.federation.hasAttachShareScopeMap = !0));
      }
      function st() {
        return (
          (st =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
              }
              return e;
            }),
          st.apply(this, arguments)
        );
      }
      const Wt = {
        runtime: p,
        instance: void 0,
        initOptions: void 0,
        bundlerRuntime: {
          remotes: function nn(t) {
            const {
              chunkId: e,
              promises: n,
              chunkMapping: r,
              idToExternalAndNameMapping: o,
              webpackRequire: i,
              idToRemoteMap: u,
            } = t;
            (ke(i),
              i.o(r, e) &&
                r[e].forEach((a) => {
                  let l = i.R;
                  l || (l = []);
                  const _ = o[a],
                    h = u[a];
                  if (l.indexOf(_) >= 0) return;
                  if ((l.push(_), _.p)) return n.push(_.p);
                  const y = (M) => {
                      (M || (M = new Error("Container missing")),
                        "string" == typeof M.message &&
                          (M.message += `\nwhile loading "${_[1]}" from ${_[2]}`),
                        (i.m[a] = () => {
                          throw M;
                        }),
                        (_.p = 0));
                    },
                    v = (M, $, w, D, W, z) => {
                      try {
                        const U = M($, w);
                        if (!U || !U.then) return W(U, D, z);
                        {
                          const X = U.then((Y) => W(Y, D), y);
                          if (!z) return X;
                          n.push((_.p = X));
                        }
                      } catch (U) {
                        y(U);
                      }
                    };
                  var A = (M, $, w) => v($.get, _[1], l, 0, O, w),
                    O = (M) => {
                      ((_.p = 1),
                        (i.m[a] = ($) => {
                          $.exports = M();
                        }));
                    };
                  1 === h.length && Bt.includes(h[0].externalType) && h[0].name
                    ? v(
                        () => {
                          try {
                            const $ =
                                (0, m.e4)(h[0].name, m.yq) + _[1].slice(1),
                              w = i.federation.instance,
                              D = () =>
                                i.federation.instance.loadRemote($, {
                                  loadFactory: !1,
                                  from: "build",
                                });
                            return "version-first" === w.options.shareStrategy
                              ? Promise.all(
                                  w.sharedHandler.initializeSharing(_[0]),
                                ).then(() => D())
                              : D();
                          } catch (M) {
                            y(M);
                          }
                        },
                        _[2],
                        0,
                        0,
                        O,
                        1,
                      )
                    : v(
                        i,
                        _[2],
                        0,
                        0,
                        (M, $, w) => (M ? v(i.I, _[0], 0, M, A, w) : y()),
                        1,
                      );
                }));
          },
          consumes: function on(t) {
            const {
              chunkId: e,
              promises: n,
              chunkMapping: r,
              installedModules: o,
              moduleToHandlerMapping: i,
              webpackRequire: u,
            } = t;
            (ke(u),
              u.o(r, e) &&
                r[e].forEach((a) => {
                  if (u.o(o, a)) return n.push(o[a]);
                  const l = (h) => {
                      ((o[a] = 0),
                        (u.m[a] = (y) => {
                          var v;
                          delete u.c[a];
                          const S = h(),
                            { shareInfo: A } = i[a];
                          if (
                            null != A &&
                            null != (v = A.shareConfig) &&
                            v.layer &&
                            S &&
                            "object" == typeof S
                          )
                            try {
                              (!S.hasOwnProperty("layer") ||
                                void 0 === S.layer) &&
                                (S.layer = A.shareConfig.layer);
                            } catch {}
                          y.exports = S;
                        }));
                    },
                    _ = (h) => {
                      (delete o[a],
                        (u.m[a] = (y) => {
                          throw (delete u.c[a], h);
                        }));
                    };
                  try {
                    const h = u.federation.instance;
                    if (!h) throw new Error("Federation instance not found!");
                    const { shareKey: y, getter: v, shareInfo: S } = i[a],
                      A = h
                        .loadShare(y, { customShareInfo: S })
                        .then((O) => (!1 === O ? v() : O));
                    A.then ? n.push((o[a] = A.then(l).catch(_))) : l(A);
                  } catch (h) {
                    _(h);
                  }
                }));
          },
          I: function sn({
            shareScopeName: t,
            webpackRequire: e,
            initPromises: n,
            initTokens: r,
            initScope: o,
          }) {
            const i = Array.isArray(t) ? t : [t];
            var u = [];
            return (
              i.forEach((l) => {
                u.push(
                  (function (l) {
                    o || (o = []);
                    const _ = e.federation.instance;
                    var h = r[l];
                    if ((h || (h = r[l] = { from: _.name }), o.indexOf(h) >= 0))
                      return;
                    o.push(h);
                    const y = n[l];
                    if (y) return y;
                    var S = (T) => {
                      var N = (D) =>
                        ((T) =>
                          typeof console < "u" &&
                          console.warn &&
                          console.warn(T))(
                          "Initialization of sharing external failed: " + D,
                        );
                      try {
                        var M = e(T);
                        if (!M) return;
                        var $ = (D) =>
                          D &&
                          D.init &&
                          D.init(e.S[l], o, {
                            shareScopeMap: e.S || {},
                            shareScopeKeys: t,
                          });
                        if (M.then) return A.push(M.then($, N));
                        var w = $(M);
                        if (w && "boolean" != typeof w && w.then)
                          return A.push(w.catch(N));
                      } catch (D) {
                        N(D);
                      }
                    };
                    const A = _.initializeSharing(l, {
                      strategy: _.options.shareStrategy,
                      initScope: o,
                      from: "build",
                    });
                    ke(e);
                    const O = e.federation.bundlerRuntimeOptions.remotes;
                    return (
                      O &&
                        Object.keys(O.idToRemoteMap).forEach((T) => {
                          const N = O.idToRemoteMap[T],
                            M = O.idToExternalAndNameMapping[T][2];
                          N.length > 1
                            ? S(M)
                            : 1 === N.length &&
                              (Bt.includes(N[0].externalType) || S(M));
                        }),
                      (n[l] =
                        !A.length || Promise.all(A).then(() => (n[l] = !0)))
                    );
                  })(l),
                );
              }),
              Promise.all(u).then(() => !0)
            );
          },
          S: {},
          installInitialConsumes: function ln(t) {
            const {
              moduleToHandlerMapping: e,
              webpackRequire: n,
              installedModules: r,
              initialConsumes: o,
            } = t;
            o.forEach((i) => {
              n.m[i] = (u) => {
                var a;
                ((r[i] = 0), delete n.c[i]);
                const l = (function an(t) {
                  const {
                      moduleId: e,
                      moduleToHandlerMapping: n,
                      webpackRequire: r,
                    } = t,
                    o = r.federation.instance;
                  if (!o) throw new Error("Federation instance not found!");
                  const { shareKey: i, shareInfo: u } = n[e];
                  try {
                    return o.loadShareSync(i, { customShareInfo: u });
                  } catch (a) {
                    throw (
                      console.error(
                        'loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.',
                      ),
                      console.error(
                        "The original error message is as follows: ",
                      ),
                      a
                    );
                  }
                })({
                  moduleId: i,
                  moduleToHandlerMapping: e,
                  webpackRequire: n,
                });
                if ("function" != typeof l)
                  throw new Error(
                    `Shared module is not available for eager consumption: ${i}`,
                  );
                const _ = l(),
                  { shareInfo: h } = e[i];
                if (
                  null != h &&
                  null != (a = h.shareConfig) &&
                  a.layer &&
                  _ &&
                  "object" == typeof _
                )
                  try {
                    (!_.hasOwnProperty("layer") || void 0 === _.layer) &&
                      (_.layer = h.shareConfig.layer);
                  } catch {}
                u.exports = _;
              };
            });
          },
          initContainerEntry: function cn(t) {
            const {
              webpackRequire: e,
              shareScope: n,
              initScope: r,
              shareScopeKey: o,
              remoteEntryInitOptions: i,
            } = t;
            if (
              !(
                e.S &&
                e.federation &&
                e.federation.instance &&
                e.federation.initOptions
              )
            )
              return;
            const u = e.federation.instance;
            u.initOptions(
              st({ name: e.federation.initOptions.name, remotes: [] }, i),
            );
            const a = i?.shareScopeKeys,
              l = i?.shareScopeMap;
            if (o && "string" != typeof o)
              o.forEach((h) => {
                a && l
                  ? (l[h] || (l[h] = {}),
                    u.initShareScopeMap(h, l[h], {
                      hostShareScopeMap: i?.shareScopeMap || {},
                    }))
                  : u.initShareScopeMap(h, n, {
                      hostShareScopeMap: i?.shareScopeMap || {},
                    });
              });
            else {
              const h = o || "default";
              Array.isArray(a)
                ? a.forEach((y) => {
                    (l[y] || (l[y] = {}),
                      u.initShareScopeMap(y, l[y], {
                        hostShareScopeMap: i?.shareScopeMap || {},
                      }));
                  })
                : u.initShareScopeMap(h, n, {
                    hostShareScopeMap: i?.shareScopeMap || {},
                  });
            }
            return (
              e.federation.attachShareScopeMap &&
                e.federation.attachShareScopeMap(e),
              "function" == typeof e.federation.prefetch &&
                e.federation.prefetch(),
              Array.isArray(o)
                ? e.federation.initOptions.shared
                  ? e.I(o, r)
                  : Promise.all(o.map((h) => e.I(h, r))).then(() => !0)
                : e.I(o || "default", r)
            );
          },
        },
        attachShareScopeMap: ke,
        bundlerRuntimeOptions: {},
      };
      if (!d.federation.runtime) {
        var Vt = d.federation;
        for (var Te in ((d.federation = {}), Wt)) d.federation[Te] = Wt[Te];
        for (var Te in Vt) d.federation[Te] = Vt[Te];
      }
      d.federation.instance ||
        ((d.federation.instance = d.federation.runtime.init(
          d.federation.initOptions,
        )),
        d.federation.attachShareScopeMap && d.federation.attachShareScopeMap(d),
        d.federation.installInitialConsumes &&
          d.federation.installInitialConsumes(),
        !d.federation.isMFRemote &&
          d.federation.prefetch &&
          d.federation.prefetch());
    },
    7996: (s, c, d) => {
      Promise.all([
        d.e(941),
        d.e(139),
        d.e(786),
        d.e(292),
        d.e(232),
        d.e(571),
        d.e(636),
        d.e(447),
        d.e(150),
        d.e(857),
        d.e(678),
        d.e(383),
        d.e(76),
        d.e(566),
      ])
        .then(d.bind(d, 7536))
        .catch((p) => console.error(p));
    },
    4523: (s, c, d) => {
      function p(g, b, m, R, I, P, L) {
        try {
          var x = g[P](L),
            j = x.value;
        } catch (q) {
          return void m(q);
        }
        x.done ? b(j) : Promise.resolve(j).then(R, I);
      }
      function E(g) {
        return function () {
          var b = this,
            m = arguments;
          return new Promise(function (R, I) {
            var P = g.apply(b, m);
            function L(j) {
              p(P, R, I, L, x, "next", j);
            }
            function x(j) {
              p(P, R, I, L, x, "throw", j);
            }
            L(void 0);
          });
        };
      }
      d.d(c, { A: () => E });
    },
    906: (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Al: () => getResourceUrl,
        Bb: () => isDebugMode,
        Jn: () => generateSnapshotFromManifest,
        ML: () => safeToString,
        OL: () => isBrowserEnv,
        R8: () => warn,
        Tr: () => isManifestProvider,
        d: () => createLink,
        e4: () => decodeName,
        h: () => createLogger,
        k0: () => loadScript,
        lG: () => composeKeyWithSeparator,
        oe: () => loadScriptNode,
        so: () => createScript,
        tf: () => isReactNativeEnv,
        yq: () => ENCODE_NAME_PREFIX,
      });
      var _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(4523),
        _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(8046);
      const FederationModuleManifest = "federation-manifest.json",
        MANIFEST_EXT = ".json",
        BROWSER_LOG_KEY = "FEDERATION_DEBUG",
        NameTransformSymbol = { AT: "@", HYPHEN: "-", SLASH: "/" },
        NameTransformMap = {
          [NameTransformSymbol.AT]: "scope_",
          [NameTransformSymbol.HYPHEN]: "_",
          [NameTransformSymbol.SLASH]: "__",
        },
        EncodedNameTransformMap = {
          [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
          [NameTransformMap[NameTransformSymbol.HYPHEN]]:
            NameTransformSymbol.HYPHEN,
          [NameTransformMap[NameTransformSymbol.SLASH]]:
            NameTransformSymbol.SLASH,
        },
        SEPARATOR = ":",
        ManifestFileName = "mf-manifest.json",
        StatsFileName = "mf-stats.json",
        MFModuleType = { NPM: "npm", APP: "app" },
        MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__",
        ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX",
        TEMP_DIR = ".federation",
        MFPrefetchCommon = {
          identifier: "MFDataPrefetch",
          globalKey: "__PREFETCH__",
          library: "mf-data-prefetch",
          exportsKey: "__PREFETCH_EXPORTS__",
          fileName: "bootstrap.js",
        };
      var ContainerPlugin = Object.freeze({ __proto__: null }),
        ContainerReferencePlugin = Object.freeze({ __proto__: null }),
        ModuleFederationPlugin = Object.freeze({ __proto__: null }),
        SharePlugin = Object.freeze({ __proto__: null });
      function isBrowserEnv() {
        return typeof window < "u" && typeof window.document < "u";
      }
      function isReactNativeEnv() {
        var s;
        return (
          typeof navigator < "u" &&
          "ReactNative" === (null == (s = navigator) ? void 0 : s.product)
        );
      }
      function isBrowserDebug() {
        try {
          if (isBrowserEnv() && window.localStorage)
            return !!localStorage.getItem(BROWSER_LOG_KEY);
        } catch {
          return !1;
        }
        return !1;
      }
      function isDebugMode() {
        return typeof process < "u" &&
          process.env &&
          process.env.FEDERATION_DEBUG
          ? !!process.env.FEDERATION_DEBUG
          : !!(typeof FEDERATION_DEBUG < "u" && FEDERATION_DEBUG) ||
              isBrowserDebug();
      }
      const getProcessEnv = function () {
          return typeof process < "u" && process.env ? process.env : {};
        },
        LOG_CATEGORY = "[ Federation Runtime ]",
        parseEntry = (s, c, d = SEPARATOR) => {
          const p = s.split(d),
            E = "development" === getProcessEnv().NODE_ENV && c,
            b = (m) => m.startsWith("http") || m.includes(MANIFEST_EXT);
          if (p.length >= 2) {
            let [m, ...R] = p;
            s.startsWith(d) &&
              ((m = p.slice(0, 2).join(d)), (R = [E || p.slice(2).join(d)]));
            let I = E || R.join(d);
            return b(I)
              ? { name: m, entry: I }
              : { name: m, version: I || "*" };
          }
          if (1 === p.length) {
            const [m] = p;
            return E && b(E)
              ? { name: m, entry: E }
              : { name: m, version: E || "*" };
          }
          throw `Invalid entry value: ${s}`;
        },
        composeKeyWithSeparator = function (...s) {
          return s.length
            ? s.reduce((c, d) => (d ? (c ? `${c}${SEPARATOR}${d}` : d) : c), "")
            : "";
        },
        encodeName = function (s, c = "", d = !1) {
          try {
            const p = d ? ".js" : "";
            return `${c}${s
              .replace(
                new RegExp(`${NameTransformSymbol.AT}`, "g"),
                NameTransformMap[NameTransformSymbol.AT],
              )
              .replace(
                new RegExp(`${NameTransformSymbol.HYPHEN}`, "g"),
                NameTransformMap[NameTransformSymbol.HYPHEN],
              )
              .replace(
                new RegExp(`${NameTransformSymbol.SLASH}`, "g"),
                NameTransformMap[NameTransformSymbol.SLASH],
              )}${p}`;
          } catch (p) {
            throw p;
          }
        },
        decodeName = function (s, c, d) {
          try {
            let p = s;
            if (c) {
              if (!p.startsWith(c)) return p;
              p = p.replace(new RegExp(c, "g"), "");
            }
            return (
              (p = p
                .replace(
                  new RegExp(
                    `${NameTransformMap[NameTransformSymbol.AT]}`,
                    "g",
                  ),
                  EncodedNameTransformMap[
                    NameTransformMap[NameTransformSymbol.AT]
                  ],
                )
                .replace(
                  new RegExp(
                    `${NameTransformMap[NameTransformSymbol.SLASH]}`,
                    "g",
                  ),
                  EncodedNameTransformMap[
                    NameTransformMap[NameTransformSymbol.SLASH]
                  ],
                )
                .replace(
                  new RegExp(
                    `${NameTransformMap[NameTransformSymbol.HYPHEN]}`,
                    "g",
                  ),
                  EncodedNameTransformMap[
                    NameTransformMap[NameTransformSymbol.HYPHEN]
                  ],
                )),
              d && (p = p.replace(".js", "")),
              p
            );
          } catch (p) {
            throw p;
          }
        },
        generateExposeFilename = (s, c) => {
          if (!s) return "";
          let d = s;
          return (
            "." === d && (d = "default_export"),
            d.startsWith("./") && (d = d.replace("./", "")),
            encodeName(d, "__federation_expose_", c)
          );
        },
        generateShareFilename = (s, c) =>
          s ? encodeName(s, "__federation_shared_", c) : "",
        getResourceUrl = (s, c) => {
          if ("getPublicPath" in s) {
            let d;
            return (
              (d = s.getPublicPath.startsWith("function")
                ? new Function("return " + s.getPublicPath)()()
                : new Function(s.getPublicPath)()),
              `${d}${c}`
            );
          }
          return "publicPath" in s
            ? isBrowserEnv() || isReactNativeEnv() || !("ssrPublicPath" in s)
              ? `${s.publicPath}${c}`
              : `${s.ssrPublicPath}${c}`
            : (console.warn(
                "Cannot get resource URL. If in debug mode, please ignore.",
                s,
                c,
              ),
              "");
        },
        assert = (s, c) => {
          s || error(c);
        },
        error = (s) => {
          throw new Error(`${LOG_CATEGORY}: ${s}`);
        },
        warn = (s) => {
          console.warn(`${LOG_CATEGORY}: ${s}`);
        };
      function safeToString(s) {
        try {
          return JSON.stringify(s, null, 2);
        } catch {
          return "";
        }
      }
      const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
      function isRequiredVersion(s) {
        return VERSION_PATTERN_REGEXP.test(s);
      }
      const simpleJoinRemoteEntry = (s, c) => {
        if (!s) return c;
        const p = ((E) => {
          if ("." === E) return "";
          if (E.startsWith("./")) return E.replace("./", "");
          if (E.startsWith("/")) {
            const g = E.slice(1);
            return g.endsWith("/") ? g.slice(0, -1) : g;
          }
          return E;
        })(s);
        return p ? (p.endsWith("/") ? `${p}${c}` : `${p}/${c}`) : c;
      };
      function inferAutoPublicPath(s) {
        return s
          .replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/");
      }
      function generateSnapshotFromManifest(s, c = {}) {
        var d, p;
        const { remotes: E = {}, overrides: g = {}, version: b } = c;
        let m;
        const R = () =>
            "publicPath" in s.metaData
              ? "auto" === s.metaData.publicPath && b
                ? inferAutoPublicPath(b)
                : s.metaData.publicPath
              : s.metaData.getPublicPath,
          I = Object.keys(g);
        let P = {};
        var L;
        (Object.keys(E).length ||
          (P =
            (null == (L = s.remotes)
              ? void 0
              : L.reduce((k, ee) => {
                  let G;
                  const pe = ee.federationContainerName;
                  return (
                    (G = I.includes(pe)
                      ? g[pe]
                      : "version" in ee
                        ? ee.version
                        : ee.entry),
                    (k[pe] = { matchedVersion: G }),
                    k
                  );
                }, {})) || {}),
          Object.keys(E).forEach(
            (k) => (P[k] = { matchedVersion: I.includes(k) ? g[k] : E[k] }),
          ));
        const {
            remoteEntry: { path: x, name: j, type: q },
            types: V,
            buildInfo: { buildVersion: F },
            globalName: Le,
            ssrRemoteEntry: le,
          } = s.metaData,
          { exposes: Ae } = s;
        let oe = {
          version: b || "",
          buildVersion: F,
          globalName: Le,
          remoteEntry: simpleJoinRemoteEntry(x, j),
          remoteEntryType: q,
          remoteTypes: simpleJoinRemoteEntry(V.path, V.name),
          remoteTypesZip: V.zip || "",
          remoteTypesAPI: V.api || "",
          remotesInfo: P,
          shared: s?.shared.map((k) => ({
            assets: k.assets,
            sharedName: k.name,
            version: k.version,
          })),
          modules: Ae?.map((k) => ({
            moduleName: k.name,
            modulePath: k.path,
            assets: k.assets,
          })),
        };
        if (
          (null != (d = s.metaData) &&
            d.prefetchInterface &&
            (oe = (0, _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(
              {},
              oe,
              { prefetchInterface: s.metaData.prefetchInterface },
            )),
          null != (p = s.metaData) && p.prefetchEntry)
        ) {
          const { path: k, name: ee, type: G } = s.metaData.prefetchEntry;
          oe = (0, _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, oe, {
            prefetchEntry: simpleJoinRemoteEntry(k, ee),
            prefetchEntryType: G,
          });
        }
        if (
          ((m = (0, _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(
            {},
            oe,
            "publicPath" in s.metaData
              ? { publicPath: R(), ssrPublicPath: s.metaData.ssrPublicPath }
              : { getPublicPath: R() },
          )),
          le)
        ) {
          const k = simpleJoinRemoteEntry(le.path, le.name);
          ((m.ssrRemoteEntry = k),
            (m.ssrRemoteEntryType = le.type || "commonjs-module"));
        }
        return m;
      }
      function isManifestProvider(s) {
        return !(
          !("remoteEntry" in s) || !s.remoteEntry.includes(MANIFEST_EXT)
        );
      }
      const PREFIX = "[ Module Federation ]";
      let Logger = class {
        setPrefix(c) {
          this.prefix = c;
        }
        log(...c) {
          console.log(this.prefix, ...c);
        }
        warn(...c) {
          console.log(this.prefix, ...c);
        }
        error(...c) {
          console.log(this.prefix, ...c);
        }
        success(...c) {
          console.log(this.prefix, ...c);
        }
        info(...c) {
          console.log(this.prefix, ...c);
        }
        ready(...c) {
          console.log(this.prefix, ...c);
        }
        debug(...c) {
          isDebugMode() && console.log(this.prefix, ...c);
        }
        constructor(c) {
          this.prefix = c;
        }
      };
      function createLogger(s) {
        return new Logger(s);
      }
      const logger = createLogger(PREFIX);
      function safeWrapper(s, c) {
        return _safeWrapper.apply(this, arguments);
      }
      function _safeWrapper() {
        return (_safeWrapper = (0,
        _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
          function* (s, c) {
            try {
              return yield s();
            } catch (d) {
              return void (!c && warn(d));
            }
          },
        )).apply(this, arguments);
      }
      function isStaticResourcesEqual(s, c) {
        const d = /^(https?:)?\/\//i;
        return (
          s.replace(d, "").replace(/\/$/, "") ===
          c.replace(d, "").replace(/\/$/, "")
        );
      }
      function createScript(s) {
        let E,
          c = null,
          d = !0,
          p = 2e4;
        const g = document.getElementsByTagName("script");
        for (let m = 0; m < g.length; m++) {
          const R = g[m],
            I = R.getAttribute("src");
          if (I && isStaticResourcesEqual(I, s.url)) {
            ((c = R), (d = !1));
            break;
          }
        }
        if (!c) {
          const m = s.attrs;
          let R;
          ((c = document.createElement("script")),
            (c.type = "module" === m?.type ? "module" : "text/javascript"),
            s.createScriptHook &&
              ((R = s.createScriptHook(s.url, s.attrs)),
              R instanceof HTMLScriptElement
                ? (c = R)
                : "object" == typeof R &&
                  ("script" in R && R.script && (c = R.script),
                  "timeout" in R && R.timeout && (p = R.timeout))),
            c.src || (c.src = s.url),
            m &&
              !R &&
              Object.keys(m).forEach((I) => {
                c &&
                  ("async" === I || "defer" === I
                    ? (c[I] = m[I])
                    : c.getAttribute(I) || c.setAttribute(I, m[I]));
              }));
        }
        const b = (function () {
          var m = (0,
          _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
            function* (R, I) {
              clearTimeout(E);
              const P = () => {
                "error" === I?.type
                  ? s?.onErrorCallback && s?.onErrorCallback(I)
                  : s?.cb && s?.cb();
              };
              if (
                c &&
                ((c.onerror = null),
                (c.onload = null),
                safeWrapper(() => {
                  const { needDeleteScript: L = !0 } = s;
                  L && c?.parentNode && c.parentNode.removeChild(c);
                }),
                R && "function" == typeof R)
              ) {
                const L = R(I);
                if (L instanceof Promise) {
                  const x = yield L;
                  return (P(), x);
                }
                return (P(), L);
              }
              P();
            },
          );
          return function (I, P) {
            return m.apply(this, arguments);
          };
        })();
        return (
          (c.onerror = b.bind(null, c.onerror)),
          (c.onload = b.bind(null, c.onload)),
          (E = setTimeout(() => {
            b(null, new Error(`Remote script "${s.url}" time-outed.`));
          }, p)),
          { script: c, needAttach: d }
        );
      }
      function createLink(s) {
        let c = null,
          d = !0;
        const p = document.getElementsByTagName("link");
        for (let g = 0; g < p.length; g++) {
          const b = p[g],
            m = b.getAttribute("href"),
            R = b.getAttribute("rel");
          if (m && isStaticResourcesEqual(m, s.url) && R === s.attrs.rel) {
            ((c = b), (d = !1));
            break;
          }
        }
        if (!c) {
          let g;
          ((c = document.createElement("link")), c.setAttribute("href", s.url));
          const b = s.attrs;
          (s.createLinkHook &&
            ((g = s.createLinkHook(s.url, b)),
            g instanceof HTMLLinkElement && (c = g)),
            b &&
              !g &&
              Object.keys(b).forEach((m) => {
                c && !c.getAttribute(m) && c.setAttribute(m, b[m]);
              }));
        }
        const E = (g, b) => {
          const m = () => {
            "error" === b?.type
              ? s?.onErrorCallback && s?.onErrorCallback(b)
              : s?.cb && s?.cb();
          };
          if (
            c &&
            ((c.onerror = null),
            (c.onload = null),
            safeWrapper(() => {
              const { needDeleteLink: R = !0 } = s;
              R && c?.parentNode && c.parentNode.removeChild(c);
            }),
            g)
          ) {
            const R = g(b);
            return (m(), R);
          }
          m();
        };
        return (
          (c.onerror = E.bind(null, c.onerror)),
          (c.onload = E.bind(null, c.onload)),
          { link: c, needAttach: d }
        );
      }
      function loadScript(s, c) {
        const { attrs: d = {}, createScriptHook: p } = c;
        return new Promise((E, g) => {
          const { script: b, needAttach: m } = createScript({
            url: s,
            cb: E,
            onErrorCallback: g,
            attrs: (0, _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(
              { fetchpriority: "high" },
              d,
            ),
            createScriptHook: p,
            needDeleteScript: !0,
          });
          m && document.head.appendChild(b);
        });
      }
      const sdkImportCache = new Map();
      function importNodeModule(s) {
        if (!s) throw new Error("import specifier is required");
        if (sdkImportCache.has(s)) return sdkImportCache.get(s);
        const d = new Function("name", "return import(name)")(s)
          .then((p) => p)
          .catch((p) => {
            throw (
              console.error(`Error importing module ${s}:`, p),
              sdkImportCache.delete(s),
              p
            );
          });
        return (sdkImportCache.set(s, d), d);
      }
      const loadNodeFetch = (function () {
          var s = (0,
          _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
            function* () {
              const c = yield importNodeModule("node-fetch");
              return c.default || c;
            },
          );
          return function () {
            return s.apply(this, arguments);
          };
        })(),
        lazyLoaderHookFetch = (function () {
          var s = (0,
          _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
            function* (c, d, p) {
              const g = yield ((b = c),
              (m = d || {}),
              p.lifecycle.fetch.emit(b, m));
              var b, m;
              return g && g instanceof Response
                ? g
                : (typeof fetch > "u" ? yield loadNodeFetch() : fetch)(
                    c,
                    d || {},
                  );
            },
          );
          return function (d, p, E) {
            return s.apply(this, arguments);
          };
        })(),
        createScriptNode =
          typeof ENV_TARGET > "u" || "web" !== ENV_TARGET
            ? (url, cb, attrs, loaderHook) => {
                if (loaderHook?.createScriptHook) {
                  const s = loaderHook.createScriptHook(url);
                  s && "object" == typeof s && "url" in s && (url = s.url);
                }
                let urlObj;
                try {
                  urlObj = new URL(url);
                } catch (s) {
                  return (
                    console.error("Error constructing URL:", s),
                    void cb(new Error(`Invalid URL: ${s}`))
                  );
                }
                const getFetch = (function () {
                    var s = (0,
                    _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
                      function* () {
                        return loaderHook?.fetch
                          ? (c, d) => lazyLoaderHookFetch(c, d, loaderHook)
                          : typeof fetch > "u"
                            ? loadNodeFetch()
                            : fetch;
                      },
                    );
                    return function () {
                      return s.apply(this, arguments);
                    };
                  })(),
                  handleScriptFetch = (function () {
                    var _ref5 = (0,
                    _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
                      function* (f, urlObj) {
                        try {
                          var _vm_constants;
                          const res = yield f(urlObj.href),
                            data = yield res.text(),
                            [path, vm] = yield Promise.all([
                              importNodeModule("path"),
                              importNodeModule("vm"),
                            ]),
                            scriptContext = {
                              exports: {},
                              module: { exports: {} },
                            },
                            urlDirname = urlObj.pathname
                              .split("/")
                              .slice(0, -1)
                              .join("/"),
                            filename = path.basename(urlObj.pathname);
                          var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
                          const script = new vm.Script(
                            `(function(exports, module, require, __dirname, __filename) {${data}\n})`,
                            {
                              filename,
                              importModuleDynamically:
                                null !=
                                (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER =
                                  null == (_vm_constants = vm.constants)
                                    ? void 0
                                    : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER)
                                  ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER
                                  : importNodeModule,
                            },
                          );
                          script.runInThisContext()(
                            scriptContext.exports,
                            scriptContext.module,
                            eval("require"),
                            urlDirname,
                            filename,
                          );
                          const exportedInterface =
                            scriptContext.module.exports ||
                            scriptContext.exports;
                          if (attrs && exportedInterface && attrs.globalName) {
                            const s =
                              exportedInterface[attrs.globalName] ||
                              exportedInterface;
                            return void cb(void 0, s);
                          }
                          cb(void 0, exportedInterface);
                        } catch (s) {
                          cb(
                            s instanceof Error
                              ? s
                              : new Error(`Script execution error: ${s}`),
                          );
                        }
                      },
                    );
                    return function s(c, d) {
                      return _ref5.apply(this, arguments);
                    };
                  })();
                getFetch()
                  .then(
                    (function () {
                      var s = (0,
                      _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
                        function* (c) {
                          if ("esm" === attrs?.type || "module" === attrs?.type)
                            return loadModule(urlObj.href, {
                              fetch: c,
                              vm: yield importNodeModule("vm"),
                            })
                              .then(
                                (function () {
                                  var d = (0,
                                  _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
                                    function* (p) {
                                      (yield p.evaluate(),
                                        cb(void 0, p.namespace));
                                    },
                                  );
                                  return function (p) {
                                    return d.apply(this, arguments);
                                  };
                                })(),
                              )
                              .catch((d) => {
                                cb(
                                  d instanceof Error
                                    ? d
                                    : new Error(`Script execution error: ${d}`),
                                );
                              });
                          handleScriptFetch(c, urlObj);
                        },
                      );
                      return function (c) {
                        return s.apply(this, arguments);
                      };
                    })(),
                  )
                  .catch((s) => {
                    cb(s);
                  });
              }
            : (s, c, d, p) => {
                c(
                  new Error(
                    "createScriptNode is disabled in non-Node.js environment",
                  ),
                );
              },
        loadScriptNode =
          typeof ENV_TARGET > "u" || "web" !== ENV_TARGET
            ? (s, c) =>
                new Promise((d, p) => {
                  createScriptNode(
                    s,
                    (E, g) => {
                      if (E) p(E);
                      else {
                        var b, m;
                        const R =
                            (null == c || null == (b = c.attrs)
                              ? void 0
                              : b.globalName) ||
                            `__FEDERATION_${null == c || null == (m = c.attrs) ? void 0 : m.name}:custom__`,
                          I = (globalThis[R] = g);
                        d(I);
                      }
                    },
                    c.attrs,
                    c.loaderHook,
                  );
                })
            : (s, c) => {
                throw new Error(
                  "loadScriptNode is disabled in non-Node.js environment",
                );
              },
        esmModuleCache = new Map();
      function loadModule(s, c) {
        return _loadModule.apply(this, arguments);
      }
      function _loadModule() {
        return (
          (_loadModule = (0,
          _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
            function* (s, c) {
              if (esmModuleCache.has(s)) return esmModuleCache.get(s);
              const { fetch: d, vm: p } = c,
                g = yield (yield d(s)).text(),
                b = new p.SourceTextModule(g, {
                  importModuleDynamically:
                    ((m = (0,
                    _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
                      function* (R, I) {
                        return loadModule(new URL(R, s).href, c);
                      },
                    )),
                    function (I, P) {
                      return m.apply(this, arguments);
                    }),
                });
              var m;
              return (
                esmModuleCache.set(s, b),
                yield b.link(
                  (function () {
                    var m = (0,
                    _builds_simpl_simpl_open_development_iaa_simpl_fe_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.A)(
                      function* (R) {
                        const I = new URL(R, s).href;
                        return yield loadModule(I, c);
                      },
                    );
                    return function (R) {
                      return m.apply(this, arguments);
                    };
                  })(),
                ),
                b
              );
            },
          )),
          _loadModule.apply(this, arguments)
        );
      }
      function normalizeOptions(s, c, d) {
        return function (p) {
          if (!1 === p) return !1;
          if (typeof p > "u") return !!s && c;
          if (!0 === p) return c;
          if (p && "object" == typeof p)
            return (0, _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(
              {},
              c,
              p,
            );
          throw new Error(
            `Unexpected type for \`${d}\`, expect boolean/undefined/object, got: ${typeof p}`,
          );
        };
      }
      const createModuleFederationConfig = (s) => s;
    },
    8046: (s, c, d) => {
      function p() {
        return (
          (p =
            Object.assign ||
            function (g) {
              for (var b = 1; b < arguments.length; b++) {
                var m = arguments[b];
                for (var R in m)
                  Object.prototype.hasOwnProperty.call(m, R) && (g[R] = m[R]);
              }
              return g;
            }),
          p.apply(this, arguments)
        );
      }
      d.d(c, { _: () => p });
    },
  },
  __webpack_module_cache__ = {};
function __webpack_require__(s) {
  var c = __webpack_module_cache__[s];
  if (void 0 !== c) return c.exports;
  var d = (__webpack_module_cache__[s] = { id: s, loaded: !1, exports: {} }),
    p = {
      id: s,
      module: d,
      factory: __webpack_modules__[s],
      require: __webpack_require__,
    };
  return (
    __webpack_require__.i.forEach(function (E) {
      E(p);
    }),
    p.factory.call((d = p.module).exports, d, d.exports, p.require),
    (d.loaded = !0),
    d.exports
  );
}
((__webpack_require__.m = __webpack_modules__),
  (__webpack_require__.c = __webpack_module_cache__),
  (__webpack_require__.i = []),
  (__webpack_require__.x = (s) => {}),
  __webpack_require__.federation ||
    (__webpack_require__.federation = {
      initOptions: {
        name: "onboarding",
        remotes: [],
        shareStrategy: "version-first",
      },
      chunkMatcher: function (s) {
        return !0;
      },
      rootOutputDir: "",
      initialConsumes: void 0,
      bundlerRuntimeOptions: {},
    }),
  (__webpack_require__.amdO = {}),
  (__webpack_require__.n = (s) => {
    var c = s && s.__esModule ? () => s.default : () => s;
    return (__webpack_require__.d(c, { a: c }), c);
  }),
  (() => {
    var c,
      s = Object.getPrototypeOf
        ? (d) => Object.getPrototypeOf(d)
        : (d) => d.__proto__;
    __webpack_require__.t = function (d, p) {
      if (
        (1 & p && (d = this(d)),
        8 & p ||
          ("object" == typeof d &&
            d &&
            ((4 & p && d.__esModule) ||
              (16 & p && "function" == typeof d.then))))
      )
        return d;
      var E = Object.create(null);
      __webpack_require__.r(E);
      var g = {};
      c = c || [null, s({}), s([]), s(s)];
      for (var b = 2 & p && d; "object" == typeof b && !~c.indexOf(b); b = s(b))
        Object.getOwnPropertyNames(b).forEach((m) => (g[m] = () => d[m]));
      return ((g.default = () => d), __webpack_require__.d(E, g), E);
    };
  })(),
  (__webpack_require__.d = (s, c) => {
    for (var d in c)
      __webpack_require__.o(c, d) &&
        !__webpack_require__.o(s, d) &&
        Object.defineProperty(s, d, { enumerable: !0, get: c[d] });
  }),
  (__webpack_require__.f = {}),
  (__webpack_require__.e = (s) =>
    Promise.all(
      Object.keys(__webpack_require__.f).reduce(
        (c, d) => (__webpack_require__.f[d](s, c), c),
        [],
      ),
    )),
  (__webpack_require__.u = (s) =>
    (76 === s ? "common" : s) +
    "." +
    {
      76: "2ef347d5ef42e637",
      137: "0875aed46e926cda",
      139: "6504335fb77c2777",
      150: "6db6863c2b896e08",
      232: "503aa92842385814",
      292: "29702b3683d2df81",
      330: "bfecb18259504f91",
      383: "667b0ad168289647",
      390: "c13b6c4ee9c11ecf",
      422: "73d8d864bc21017b",
      447: "7a24aaa08d87a9f8",
      469: "3a24fb824215c294",
      524: "acc27e0f4b4d6805",
      566: "ef436edf86258396",
      571: "d4864c4464c3df94",
      606: "914124ca22126fdd",
      636: "f77bb776cd4b292b",
      678: "e775d6cfb46fa7ab",
      696: "5c6e6579436be5bb",
      707: "acb875db604cb123",
      731: "ed608d701632b49b",
      733: "92e80a03ffcb148e",
      786: "2a8eb3f7ccb64032",
      809: "ce7626729db785dc",
      817: "17cb66d6cec1a340",
      825: "e1e09797d7a82d93",
      857: "9962ffab2dbfba73",
      896: "ab7183193b6de37f",
      936: "6f40c5b17522b26c",
      941: "1a775ca9a10e1cd4",
    }[s] +
    ".js"),
  (__webpack_require__.miniCssF = (s) => {}),
  (__webpack_require__.o = (s, c) =>
    Object.prototype.hasOwnProperty.call(s, c)),
  (() => {
    var s = {},
      c = "onboarding:";
    __webpack_require__.l = (d, p, E, g) => {
      if (s[d]) s[d].push(p);
      else {
        var b, m;
        if (void 0 !== E)
          for (
            var R = document.getElementsByTagName("script"), I = 0;
            I < R.length;
            I++
          ) {
            var P = R[I];
            if (
              P.getAttribute("src") == d ||
              P.getAttribute("data-webpack") == c + E
            ) {
              b = P;
              break;
            }
          }
        (b ||
          ((m = !0),
          ((b = document.createElement("script")).type = "module"),
          (b.charset = "utf-8"),
          (b.timeout = 120),
          __webpack_require__.nc &&
            b.setAttribute("nonce", __webpack_require__.nc),
          b.setAttribute("data-webpack", c + E),
          (b.src = __webpack_require__.tu(d))),
          (s[d] = [p]));
        var L = (j, q) => {
            ((b.onerror = b.onload = null), clearTimeout(x));
            var V = s[d];
            if (
              (delete s[d],
              b.parentNode && b.parentNode.removeChild(b),
              V && V.forEach((F) => F(q)),
              j)
            )
              return j(q);
          },
          x = setTimeout(
            L.bind(null, void 0, { type: "timeout", target: b }),
            12e4,
          );
        ((b.onerror = L.bind(null, b.onerror)),
          (b.onload = L.bind(null, b.onload)),
          m && document.head.appendChild(b));
      }
    };
  })(),
  (__webpack_require__.r = (s) => {
    (typeof Symbol < "u" &&
      Symbol.toStringTag &&
      Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(s, "__esModule", { value: !0 }));
  }),
  (__webpack_require__.nmd = (s) => (
    (s.paths = []),
    s.children || (s.children = []),
    s
  )),
  (__webpack_require__.j = 792),
  (() => {
    __webpack_require__.S = {};
    var s = {},
      c = {};
    __webpack_require__.I = (d, p) => {
      p || (p = []);
      var E = c[d];
      if ((E || (E = c[d] = {}), !(p.indexOf(E) >= 0))) {
        if ((p.push(E), s[d])) return s[d];
        __webpack_require__.o(__webpack_require__.S, d) ||
          (__webpack_require__.S[d] = {});
        var P = [];
        return (s[d] = P.length ? Promise.all(P).then(() => (s[d] = 1)) : 1);
      }
    };
  })(),
  (() => {
    var s;
    __webpack_require__.tt = () => (
      void 0 === s &&
        ((s = { createScriptURL: (c) => c }),
        typeof trustedTypes < "u" &&
          trustedTypes.createPolicy &&
          (s = trustedTypes.createPolicy("angular#bundler", s))),
      s
    );
  })(),
  (__webpack_require__.tu = (s) => __webpack_require__.tt().createScriptURL(s)),
  (() => {
    ((__webpack_require__.federation.initOptions.shared = {}),
      (__webpack_require__.S = {}));
    var s = {},
      c = {};
    __webpack_require__.I = (d, p) =>
      __webpack_require__.federation.bundlerRuntime.I({
        shareScopeName: d,
        webpackRequire: __webpack_require__,
        initPromises: s,
        initTokens: c,
        initScope: p,
      });
  })(),
  (() => {
    var s;
    if (("string" == typeof import.meta.url && (s = import.meta.url), !s))
      throw new Error("Automatic publicPath is not supported in this browser");
    ((s = s
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/")),
      (__webpack_require__.p = s));
  })(),
  (() => {
    var s = __webpack_require__.x,
      c = !1;
    __webpack_require__.x = () => {
      if ((c || ((c = !0), __webpack_require__(2728)), "function" == typeof s))
        return s();
      console.warn(
        "[Module Federation] prevStartup is not a function, skipping startup execution",
      );
    };
  })(),
  (() => {
    var s = { 792: 0 };
    __webpack_require__.f.j = (p, E) => {
      var g = __webpack_require__.o(s, p) ? s[p] : void 0;
      if (0 !== g)
        if (g) E.push(g[2]);
        else {
          var b = new Promise((P, L) => (g = s[p] = [P, L]));
          E.push((g[2] = b));
          var m = __webpack_require__.p + __webpack_require__.u(p),
            R = new Error();
          __webpack_require__.l(
            m,
            (P) => {
              if (
                __webpack_require__.o(s, p) &&
                (0 !== (g = s[p]) && (s[p] = void 0), g)
              ) {
                var L = P && ("load" === P.type ? "missing" : P.type),
                  x = P && P.target && P.target.src;
                ((R.message =
                  "Loading chunk " + p + " failed.\n(" + L + ": " + x + ")"),
                  (R.name = "ChunkLoadError"),
                  (R.type = L),
                  (R.request = x),
                  g[1](R));
              }
            },
            "chunk-" + p,
            p,
          );
        }
    };
    var c = (p, E) => {
        var R,
          I,
          [g, b, m] = E,
          P = 0;
        if (g.some((x) => 0 !== s[x])) {
          for (R in b)
            __webpack_require__.o(b, R) && (__webpack_require__.m[R] = b[R]);
          m && m(__webpack_require__);
        }
        for (p && p(E); P < g.length; P++)
          (__webpack_require__.o(s, (I = g[P])) && s[I] && s[I][0](),
            (s[I] = 0));
      },
      d = (self.webpackChunkonboarding = self.webpackChunkonboarding || []);
    (d.forEach(c.bind(null, 0)), (d.push = c.bind(null, d.push.bind(d))));
  })(),
  __webpack_require__.x());
var __webpack_exports__ = __webpack_require__(7996);
