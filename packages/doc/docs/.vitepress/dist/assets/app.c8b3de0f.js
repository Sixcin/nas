import{d as i,I as s,a1 as c,u,h as l,l as d,a2 as f,a3 as m,a4 as h,a5 as A,a6 as g,a7 as v,a8 as C,a9 as P,aa as b,ab as w,ac as y,ad as R,ae as _,af as E}from"./chunks/framework.18539d36.js";import{t as r}from"./chunks/theme.410a4b48.js";console.log("Code licensed under MIT, documentation under CC BY-SA 4.0.");console.log("Made with ❤️️ love by all contributors.");const T={...r,enhanceApp(e){r.enhanceApp(e)}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=p(T),D=i({name:"VitePressApp",setup(){const{site:e}=u();return l(()=>{d(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),f(),m(),h(),n.setup&&n.setup(),()=>A(n.Layout)}});async function S(){const e=O(),a=I();a.provide(g,e);const t=v(e.route);return a.provide(C,t),a.component("Content",P),a.component("ClientOnly",b),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:w}),{app:a,router:e,data:t}}function I(){return y(D)}function O(){let e=s,a;return R(t=>{let o=_(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),E(()=>import(o),[])},n.NotFound)}s&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{c(a.route,t.site),e.mount("#app")})});export{S as createApp};
