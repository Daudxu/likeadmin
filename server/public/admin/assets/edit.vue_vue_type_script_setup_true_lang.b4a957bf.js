import{G as x,C as O,B as w,H as U,D as N}from"./element-plus.317dd699.js";import{r as F}from"./index.cd92a33e.js";import{P as Y}from"./index.3448bf9e.js";import{d as I,s as g,$ as T,e as G,o as m,c as B,U as t,L as a,a as r,S as _,T as A,u as C,K as L,R as S}from"./@vue.e8706010.js";function oe(){return F.get({url:"/setting.storage/lists"})}function P(i){return F.post({url:"/setting.storage/setup",params:i})}function H(i){return F.get({url:"/setting.storage/detail",params:i})}const $={class:"edit-popup"},j={class:"form-tips"},z={key:0},J={class:"flex-1"},M={class:"flex-1"},Q=r("div",{class:"form-tips"}," \u8BF7\u8865\u5168http://\u6216https://\uFF0C\u4F8B\u5982https://static.cloud.com ",-1),W=_("\u5173\u95ED"),X=_("\u5F00\u542F"),le=I({__name:"edit",emits:["success"],setup(i,{expose:b,emit:y}){const d=g(),p=g(),u=T({engine:"",bucket:"",access_key:"",secret_key:"",domain:"",region:"",status:0}),D=[{name:"\u672C\u5730\u5B58\u50A8",type:"local",tips:"\u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u4E0D\u9700\u8981\u914D\u7F6E\u5176\u4ED6\u53C2\u6570"},{name:"\u4E03\u725B\u4E91\u5B58\u50A8",type:"qiniu",tips:"\u5207\u6362\u4E03\u725B\u4E91\u5B58\u50A8\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u4E03\u725B\u4E91"},{name:"\u963F\u91CC\u4E91OSS",type:"aliyun",tips:"\u5207\u6362\u963F\u91CC\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u963F\u91CC\u4E91OSS"},{name:"\u817E\u8BAF\u4E91OSS",type:"qcloud",tips:"\u5207\u6362\u817E\u8BAF\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u817E\u8BAF\u4E91OSS"}],k={bucket:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",trigger:"blur"}],access_key:[{required:!0,message:"\u8BF7\u8F93\u5165ACCESS_KEY",trigger:"blur"}],secret_key:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_KEY",trigger:"blur"}],domain:[{required:!0,message:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u8F93\u5165REGION",trigger:"blur"}]},E=G(()=>D.find(l=>l.type==u.engine)),V=async()=>{var l,e;await((l=d.value)==null?void 0:l.validate()),await P(u),(e=p.value)==null||e.close(),y("success")},v=async()=>{const l=await H({engine:u.engine});for(const e in l)u[e]=l[e]},R=l=>{var e;u.engine=l,(e=p.value)==null||e.open(),v()},h=()=>{var l;(l=d.value)==null||l.resetFields()};return b({open:R}),(l,e)=>{const c=x,s=O,n=w,q=U,K=N;return m(),B("div",$,[t(Y,{ref_key:"popupRef",ref:p,title:"\u8BBE\u7F6E\u5B58\u50A8",async:!0,width:"550px",onConfirm:V,onClose:h},{default:a(()=>[t(K,{ref_key:"formRef",ref:d,model:u,"label-width":"120px",rules:k},{default:a(()=>[t(s,{label:"\u5B58\u50A8\u65B9\u5F0F",prop:"engine"},{default:a(()=>{var o;return[r("div",null,[t(c,{"model-value":""},{default:a(()=>{var f;return[_(A((f=C(E))==null?void 0:f.name),1)]}),_:1}),r("div",j,A((o=C(E))==null?void 0:o.tips),1)])]}),_:1}),u.engine!=="local"?(m(),B("div",z,[t(s,{label:" \u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",prop:"bucket"},{default:a(()=>[r("div",J,[t(n,{modelValue:u.bucket,"onUpdate:modelValue":e[0]||(e[0]=o=>u.bucket=o),placeholder:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)",clearable:""},null,8,["modelValue"])])]),_:1}),t(s,{label:"ACCESS_KEY",prop:"access_key"},{default:a(()=>[t(n,{modelValue:u.access_key,"onUpdate:modelValue":e[1]||(e[1]=o=>u.access_key=o),placeholder:"\u8BF7\u8F93\u5165ACCESS_KEY(AK)",clearable:""},null,8,["modelValue"])]),_:1}),t(s,{label:"SECRET_KEY",prop:"secret_key"},{default:a(()=>[t(n,{modelValue:u.secret_key,"onUpdate:modelValue":e[2]||(e[2]=o=>u.secret_key=o),placeholder:"\u8BF7\u8F93\u5165SECRET_KEY(SK)",clearable:""},null,8,["modelValue"])]),_:1}),t(s,{label:"\u7A7A\u95F4\u57DF\u540D",prop:"domain"},{default:a(()=>[r("div",M,[r("div",null,[t(n,{modelValue:u.domain,"onUpdate:modelValue":e[3]||(e[3]=o=>u.domain=o),placeholder:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D(Domain)",clearable:""},null,8,["modelValue"])]),Q])]),_:1}),u.engine=="qcloud"?(m(),L(s,{key:0,label:"REGION",prop:"region"},{default:a(()=>[t(n,{modelValue:u.region,"onUpdate:modelValue":e[4]||(e[4]=o=>u.region=o),placeholder:"\u8BF7\u8F93\u5165region",clearable:""},null,8,["modelValue"])]),_:1})):S("",!0)])):S("",!0),t(s,{label:"\u72B6\u6001",prop:"status"},{default:a(()=>[t(q,{modelValue:u.status,"onUpdate:modelValue":e[5]||(e[5]=o=>u.status=o)},{default:a(()=>[t(c,{label:0},{default:a(()=>[W]),_:1}),t(c,{label:1},{default:a(()=>[X]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{le as _,oe as s};
