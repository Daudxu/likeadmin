var A=Object.defineProperty,R=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var D=(o,e,s)=>e in o?A(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,V=(o,e)=>{for(var s in e||(e={}))q.call(e,s)&&D(o,s,e[s]);if(v)for(var s of v(e))I.call(e,s)&&D(o,s,e[s]);return o},b=(o,e)=>R(o,U(e));import{F as S}from"./index.9abad14a.js";import{h as z,i as J,j as N}from"./organization.76aa181d.js";import{_ as j,u as T}from"./index.2dcd0ed9.js";import{d as $,q as C,j as M,a1 as G,r as H,o as K,a as m,a4 as L,b as B,c as O,f as u,w as n,a5 as P,k as Q,_ as l,ai as W,p as X,i as Y,m as Z,e as ee}from"./vendor.eb12b813.js";const ue=o=>(X("data-v-9e564c9c"),o=o(),Y(),o),oe={class:"post-edit"},ae=ue(()=>ee("div",{class:"muted"}," \u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D ",-1)),te=Z("\u4FDD\u5B58"),le=$({setup(o){const e=C(null),{router:s,route:g}=T(),i=M(()=>{var d;return(d=g.query)==null?void 0:d.id}),_=C(!1),{formData:a,rules:k}=G(H({formData:{name:"",code:"",sort:0,remark:"",status:0},rules:{code:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0",trigger:["blur"]}]}})),w=()=>{!i.value||(_.value=!0,z({id:i.value}).then(d=>{a.value=d}).finally(()=>{_.value=!1}))},h=()=>{var d;(d=e.value)==null||d.validate(t=>{if(!t)return;(i.value?J(b(V({},a.value),{id:i.value})):N(a.value)).then(()=>{setTimeout(()=>s.go(-1),500)})})};return K(()=>{w()}),(d,t)=>{const f=m("el-page-header"),F=m("el-card"),c=m("el-input"),p=m("el-form-item"),E=m("el-switch"),y=m("el-button"),x=L("loading");return B(),O("div",oe,[u(F,{shadow:"never"},{default:n(()=>[u(f,{content:l(i)?"\u7F16\u8F91\u5C97\u4F4D":"\u65B0\u589E\u5C97\u4F4D",onBack:t[0]||(t[0]=r=>d.$router.back())},null,8,["content"])]),_:1}),P((B(),Q(F,{shadow:"never",class:"m-t-15"},{default:n(()=>[u(l(W),{ref_key:"formRefs",ref:e,rules:l(k),class:"ls-form",model:l(a),"label-width":"150px",size:"small"},{default:n(()=>[u(p,{label:"\u5C97\u4F4D\u540D\u79F0",prop:"name"},{default:n(()=>[u(c,{modelValue:l(a).name,"onUpdate:modelValue":t[1]||(t[1]=r=>l(a).name=r),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0"},null,8,["modelValue"])]),_:1}),u(p,{label:"\u5C97\u4F4D\u7F16\u7801",prop:"code"},{default:n(()=>[u(c,{modelValue:l(a).code,"onUpdate:modelValue":t[2]||(t[2]=r=>l(a).code=r),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801"},null,8,["modelValue"])]),_:1}),u(p,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[u(c,{modelValue:l(a).sort,"onUpdate:modelValue":t[3]||(t[3]=r=>l(a).sort=r),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number"},null,8,["modelValue"]),ae]),_:1}),u(p,{label:"\u5907\u6CE8",prop:"remark"},{default:n(()=>[u(c,{modelValue:l(a).remark,"onUpdate:modelValue":t[4]||(t[4]=r=>l(a).remark=r),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea",autosize:{minRows:4,maxRows:6}},null,8,["modelValue"])]),_:1}),u(p,{label:"\u5C97\u4F4D\u72B6\u6001"},{default:n(()=>[u(E,{modelValue:l(a).status,"onUpdate:modelValue":t[5]||(t[5]=r=>l(a).status=r),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1})),[[x,_.value]]),u(S,null,{default:n(()=>[u(y,{type:"primary",size:"small",onClick:h},{default:n(()=>[te]),_:1})]),_:1})])}}});var ie=j(le,[["__scopeId","data-v-9e564c9c"]]);export{ie as default};
