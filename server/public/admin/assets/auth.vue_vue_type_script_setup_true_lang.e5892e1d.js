import{B as T,U as L,y as U,E as M,A as N}from"./element-plus.6014d9af.js";import{a as P}from"./role.9ff7b083.js";import{m as q}from"./menu.ec9046cc.js";import{P as H}from"./index.50733217.js";import{t as I}from"./index.78f53bc3.js";import{d as O,s as m,r as c,$,o as j,c as z,U as o,L as u,a as h,n as v}from"./@vue.67e62321.js";const G={class:"edit-popup"},le=O({__name:"auth",emits:["success","close"],setup(J,{expose:k,emit:p}){const s=m(),f=m(),r=m(),y=c(!1),d=c(!0),_=c([]),i=c([]),a=$({id:"",name:"",desc:"",sort:0,menu_id:[]}),C={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},x=()=>{q({page_type:0}).then(e=>{i.value=e.lists,_.value=I(e.lists),v(()=>{E()})})},b=()=>{var t,n;const e=(t=s.value)==null?void 0:t.getCheckedKeys(),l=(n=s.value)==null?void 0:n.getHalfCheckedKeys();return e==null||e.unshift.apply(e,l),e},E=()=>{a.menu_id.forEach(e=>{v(()=>{var l;(l=s.value)==null||l.setChecked(e,!0,!1)})})},g=e=>{const l=i.value;for(let t=0;t<l.length;t++)s.value.store.nodesMap[l[t].id].expanded=e},w=e=>{var l,t;e?(l=s.value)==null||l.setCheckedKeys(_.value.map(n=>n.id)):(t=s.value)==null||t.setCheckedKeys([])},A=async()=>{var e,l;await((e=f.value)==null?void 0:e.validate()),a.menu_id=b(),await P(a),(l=r.value)==null||l.close(),p("success")},D=()=>{p("close")},F=()=>{var e;(e=r.value)==null||e.open()},R=async e=>{for(const l in a)e[l]!=null&&e[l]!=null&&(a[l]=e[l])};return x(),k({open:F,setFormData:R}),(e,l)=>{const t=T,n=L,B=U,K=M,V=N;return j(),z("div",G,[o(H,{ref_key:"popupRef",ref:r,title:"\u5206\u914D\u6743\u9650",async:!0,width:"550px",clickModalClose:!0,onConfirm:A,onClose:D},{default:u(()=>[o(V,{class:"ls-form",ref_key:"formRef",ref:f,rules:C,model:a,"label-width":"60px"},{default:u(()=>[o(K,{class:"h-[400px] sm:h-[600px]"},{default:u(()=>[o(B,{label:"\u6743\u9650",prop:"menu_id"},{default:u(()=>[h("div",null,[o(t,{label:"\u5C55\u5F00/\u6298\u53E0",onChange:g}),o(t,{label:"\u5168\u9009/\u4E0D\u5168\u9009",onChange:w}),o(t,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=S=>d.value=S),label:"\u7236\u5B50\u8054\u52A8"},null,8,["modelValue"]),h("div",null,[o(n,{ref_key:"treeRef",ref:s,data:i.value,props:{label:"name",children:"children"},"check-strictly":!d.value,"node-key":"id","default-expand-all":y.value,"show-checkbox":""},null,8,["data","check-strictly","default-expand-all"])])])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{le as _};
