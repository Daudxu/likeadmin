import{_ as B}from"./index.bd2421b1.js";import{P as A}from"./index.3448bf9e.js";import{c as M,w as V}from"./element-plus.317dd699.js";import{d as $,s as L,a4 as y,o as s,c as u,a7 as g,u as p,V as v,M as N,O,U as t,L as n,a,T as b,S as D,b7 as R,b6 as j}from"./@vue.e8706010.js";import{u as q}from"./useMenuOa.34750d77.js";import{_ as z}from"./oa-menu-form.vue_vue_type_script_setup_true_lang.15583a78.js";import{_ as U}from"./oa-menu-form-edit.vue_vue_type_script_setup_true_lang.9c46b2dc.js";import{d as G}from"./index.cd92a33e.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.f7363e4f.js";import"./axios.3af9fe4b.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./wx_oa.20be24c5.js";import"./lodash.873faf2b.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.1a2c9cae.js";import"./color.3050aad5.js";import"./clone.3b081931.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.21f7a9fd.js";import"./ms.a9ae1d6d.js";import"./nprogress.fd69c5bf.js";import"./vue-clipboard3.9796a14d.js";import"./clipboard.2bdac801.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";const H=i=>(R("data-v-0242043a"),i=i(),j(),i),J=H(()=>a("div",{class:"text-base oa-attr-title"},"\u83DC\u5355\u914D\u7F6E",-1)),K={class:"flex items-center w-full p-4 mt-4 rounded bg-fill-light"},Q={class:"flex-1"},W={class:"mr-auto"},X=D(" \u662F\u5426\u5220\u9664\u5F53\u524D\u5B50\u83DC\u5355\uFF1F "),Y=$({__name:"oa-attr",setup(i){const m=L(),{menuList:x,menuIndex:r,handleAddSubMenu:T,handleEditSubMenu:w,handleDelMenu:C,handleDelSubMenu:E}=q(m);return(Z,_)=>{const S=y("EditPen"),c=M,d=V,k=y("Delete"),F=A,P=B;return s(!0),u(v,null,g(p(x),(e,f)=>N((s(),u("div",{key:f,class:"flex-1 oa-attr min-w-0"},[J,t(P,{onClose:_[0]||(_[0]=o=>p(C)(p(r)))},{default:n(()=>[a("div",K,[t(z,{ref_for:!0,ref_key:"menuRef",ref:m,modular:"master",name:e.name,"onUpdate:name":o=>e.name=o,menuType:e.has_menu,"onUpdate:menuType":o=>e.has_menu=o,visitType:e.type,"onUpdate:visitType":o=>e.type=o,url:e.url,"onUpdate:url":o=>e.url=o,appId:e.appid,"onUpdate:appId":o=>e.appid=o,pagePath:e.pagepath,"onUpdate:pagePath":o=>e.pagepath=o},{default:n(()=>[a("div",Q,[a("ul",null,[(s(!0),u(v,null,g(e.sub_button,(o,l)=>(s(),u("li",{class:"flex",key:l,style:{padding:"8px"}},[a("span",W,b(o.name),1),t(U,{modular:"edit",subItem:o,onEdit:h=>p(w)(h,l)},{default:n(()=>[t(d,{link:""},{default:n(()=>[t(c,null,{default:n(()=>[t(S)]),_:1})]),_:1})]),_:2},1032,["subItem","onEdit"]),t(F,{onConfirm:h=>p(E)(p(r),l)},{trigger:n(()=>[t(d,{link:""},{default:n(()=>[t(c,{class:"ml-5"},{default:n(()=>[t(k)]),_:1})]),_:1})]),default:n(()=>[X]),_:2},1032,["onConfirm"])]))),128))]),t(U,{modular:"add",onAdd:p(T)},{default:n(()=>[t(d,{type:"primary",link:"",disabled:e.sub_button.length>=5},{default:n(()=>[D(" \u6DFB\u52A0\u5B50\u83DC\u5355("+b(e.sub_button.length)+"/5) ",1)]),_:2},1032,["disabled"])]),_:2},1032,["onAdd"])])]),_:2},1032,["name","onUpdate:name","menuType","onUpdate:menuType","visitType","onUpdate:visitType","url","onUpdate:url","appId","onUpdate:appId","pagePath","onUpdate:pagePath"])])]),_:2},1024)],512)),[[O,f===p(r)]])),128)}}});const Oe=G(Y,[["__scopeId","data-v-0242043a"]]);export{Oe as default};
