import{L as k,_ as w,w as y,M as C,I as B,N as L}from"./element-plus.317dd699.js";import{d as x}from"./message.85c8dbed.js";import{_ as D}from"./edit.vue_vue_type_script_setup_true_lang.55573dcc.js";import{d as u,s as F,$ as T,af as N,o as e,c as R,M as d,K as a,L as t,U as i,S as l}from"./@vue.e8706010.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.f7363e4f.js";import"./axios.3af9fe4b.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.ffa405f0.js";import"./lodash.873faf2b.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.1a2c9cae.js";import"./color.3050aad5.js";import"./clone.3b081931.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.21f7a9fd.js";import"./ms.a9ae1d6d.js";import"./nprogress.fd69c5bf.js";import"./vue-clipboard3.9796a14d.js";import"./clipboard.2bdac801.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";import"./index.882ba4be.js";const S=l("\u5F00\u542F"),$=l("\u5173\u95ED"),M=l(" \u8BBE\u7F6E "),V=u({name:"shortLetter"}),wt=u({...V,setup(z){const p=F(),o=T({loading:!1,lists:[]}),c=async()=>{try{o.loading=!0,o.lists=await x(),o.loading=!1}catch{o.loading=!1}},f=r=>{var s;(s=p.value)==null||s.open(r)};return c(),(r,s)=>{const n=k,_=w,g=y,h=C,E=B,v=N("perms"),b=L;return e(),R("div",null,[d((e(),a(E,{class:"!border-none",shadow:"never"},{default:t(()=>[i(h,{size:"large",data:o.lists},{default:t(()=>[i(n,{label:"\u77ED\u4FE1\u6E20\u9053",prop:"name","min-width":"120"}),i(n,{label:"\u72B6\u6001","min-width":"120"},{default:t(({row:m})=>[m.status==1?(e(),a(_,{key:0},{default:t(()=>[S]),_:1})):(e(),a(_,{key:1,type:"danger"},{default:t(()=>[$]),_:1}))]),_:1}),i(n,{label:"\u64CD\u4F5C","min-width":"120",fixed:"right"},{default:t(({row:m})=>[d((e(),a(g,{type:"primary",link:"",onClick:I=>f(m.type)},{default:t(()=>[M]),_:2},1032,["onClick"])),[[v,["notice.sms_config/setConfig"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[b,o.loading]]),i(D,{ref_key:"editRef",ref:p,onSuccess:c},null,512)])}}});export{wt as default};