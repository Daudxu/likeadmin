import{_ as y,m as _,p as V}from"./index.70fc6efa.js";import{P as k,u as B}from"./index.f3a5499d.js";import{P}from"./index.700e7071.js";import{d as $,r as w,o as x,a,a8 as z,b as f,c as g,f as e,w as t,a9 as E,e as h,m as u}from"./vendor.fcdc1dfd.js";const q=$({components:{Pagination:k,Popup:P},setup(){const o=w({id:0,name:"",desc:"",create_time:"",num:0}),{pager:s,requestApi:l}=B({callback:_,params:o}),c=d=>{V({id:d}).then(r=>{console.log("res",r),l()}).catch(r=>{console.log("err",r)})};return x(()=>{l()}),{formData:o,apiRoleLists:_,handleDelete:c,pager:s,requestApi:l}}}),A={class:"role"},N=u("\u65B0\u589E\u89D2\u8272"),R={class:"m-t-15"},j={class:"m-t-15"},I=u("\u7F16\u8F91"),L=u("\u5220\u9664"),M={class:"flex row-right"};function T(o,s,l,c,d,r){const p=a("el-button"),m=a("router-link"),n=a("el-table-column"),b=a("popup"),v=a("el-table"),C=a("pagination"),D=a("el-card"),F=z("loading");return f(),g("div",A,[e(D,{shadow:"never"},{default:t(()=>[e(m,{to:"/permission/role/edit"},{default:t(()=>[e(p,{type:"primary",size:"small"},{default:t(()=>[N]),_:1})]),_:1}),E((f(),g("div",R,[h("div",j,[e(v,{data:o.pager.lists,size:"small"},{default:t(()=>[e(n,{prop:"id",label:"ID"}),e(n,{prop:"name",label:"\u540D\u79F0"}),e(n,{prop:"desc",label:"\u5907\u6CE8"}),e(n,{prop:"",label:"\u6743\u9650"}),e(n,{prop:"create_time",label:"\u521B\u5EFA\u65F6\u95F4"}),e(n,{prop:"",label:"\u64CD\u4F5C"},{default:t(({row:i})=>[e(m,{class:"m-r-10",to:{path:"/permission/role/edit",query:{id:i.id}}},{default:t(()=>[e(p,{type:"text",size:"mini"},{default:t(()=>[I]),_:1})]),_:2},1032,["to"]),e(b,{class:"m-r-10 inline",onConfirm:U=>o.handleDelete(i.id)},{trigger:t(()=>[e(p,{type:"text",size:"mini"},{default:t(()=>[L]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),h("div",M,[e(C,{modelValue:o.pager,"onUpdate:modelValue":s[0]||(s[0]=i=>o.pager=i),layout:"total, prev, pager, next, jumper",onChange:o.requestApi},null,8,["modelValue","onChange"])])])),[[F,o.pager.loading]])]),_:1})])}var O=y(q,[["render",T]]);export{O as default};
