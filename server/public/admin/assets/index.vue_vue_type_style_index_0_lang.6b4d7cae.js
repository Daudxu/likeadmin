import{T as y,E as b}from"./@wangeditor.d48d1b87.js";import{_ as w}from"./picker.2a1ca7ac.js";import{g as m}from"./index.cd92a33e.js";import{d as V,s as f,r as x,e as c,E as U,o as k,c as E,U as i,u as t,k as B,_ as R}from"./@vue.e8706010.js";const F=V({__name:"index",props:{modelValue:{default:""},mode:{default:"default"},height:{default:"100%"},width:{default:"auto"},toolbarConfig:{default:()=>({})}},emits:["update:modelValue"],setup(l,{emit:p}){const a=l,d=f(),n=f(),r=x("");let s;const g={MENU_CONF:{uploadImage:{customBrowseAndUpload(e){var o;r.value="image",(o=n.value)==null||o.showPopup(-1),s=e}},uploadVideo:{customBrowseAndUpload(e){var o;r.value="video",(o=n.value)==null||o.showPopup(-1),s=e}}}},h=c(()=>({height:m(a.height),width:m(a.width)})),u=c({get(){return a.modelValue},set(e){p("update:modelValue",e)}}),v=e=>{e.forEach(o=>{s(o)})};U(()=>{const e=d.value;e!=null&&e.destroy()});const _=e=>{d.value=e};return(e,o)=>(k(),E("div",{class:"border border-br flex flex-col",style:R(t(h))},[i(t(y),{class:"border-b border-br",editor:t(d),defaultConfig:l.toolbarConfig,mode:l.mode},null,8,["editor","defaultConfig","mode"]),i(t(b),{class:"overflow-y-auto flex-1",modelValue:t(u),"onUpdate:modelValue":o[0]||(o[0]=C=>B(u)?u.value=C:null),defaultConfig:g,mode:l.mode,onOnCreated:_},null,8,["modelValue","mode"]),i(w,{ref_key:"materialPickerRef",ref:n,type:r.value,limit:-1,"hidden-upload":"",onChange:v},null,8,["type"])],4))}});export{F as _};