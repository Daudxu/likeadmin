import{B as E,C as V,v as x,D}from"./element-plus.317dd699.js";import{a as C,b as y}from"./role.7079950d.js";import{P as B}from"./index.3448bf9e.js";import{d as R,s as i,r as h,e as k,$ as g,o as U,c as I,U as t,L as u,u as N}from"./@vue.e8706010.js";const P={class:"edit-popup"},j=R({__name:"edit",emits:["success","close"],setup(q,{expose:c,emit:m}){const d=i(),s=i(),n=h("add"),f=k(()=>n.value=="edit"?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),o=g({id:"",name:"",desc:"",sort:0,menu_id:[]}),_={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},F=async()=>{var l,e;await((l=d.value)==null?void 0:l.validate()),n.value=="edit"?await C(o):await y(o),(e=s.value)==null||e.close(),m("success")},v=()=>{m("close")};return c({open:(l="add")=>{var e;n.value=l,(e=s.value)==null||e.open()},setFormData:async l=>{for(const e in o)l[e]!=null&&l[e]!=null&&(o[e]=l[e])}}),(l,e)=>{const p=E,r=V,w=x,b=D;return U(),I("div",P,[t(B,{ref_key:"popupRef",ref:s,title:N(f),async:!0,width:"550px",onConfirm:F,onClose:v},{default:u(()=>[t(b,{class:"ls-form",ref_key:"formRef",ref:d,rules:_,model:o,"label-width":"60px"},{default:u(()=>[t(r,{label:"\u540D\u79F0",prop:"name"},{default:u(()=>[t(p,{class:"ls-input",modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=a=>o.name=a),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5907\u6CE8",prop:"desc"},{default:u(()=>[t(p,{modelValue:o.desc,"onUpdate:modelValue":e[1]||(e[1]=a=>o.desc=a),type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(r,{label:"\u6392\u5E8F",prop:"sort"},{default:u(()=>[t(w,{modelValue:o.sort,"onUpdate:modelValue":e[2]||(e[2]=a=>o.sort=a),min:0,max:9999},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{j as _};
