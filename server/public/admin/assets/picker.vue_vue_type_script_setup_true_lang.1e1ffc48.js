import{X as $,B as L,w as M,E as W,a as I}from"./element-plus.317dd699.js";import{p as T,q as z,b as P}from"./index.cd92a33e.js";import{d as R,r as U,s as j,$ as D,e as q,w as K,n as h,j as O,o as i,c,U as n,L as a,u as k,K as X,V,a as u,a7 as E,P as Z,T as A,Z as w,S as G}from"./@vue.e8706010.js";import{c as H}from"./@vueuse.1e5a6e21.js";const J={class:"icon-select"},Q={class:"flex justify-between"},Y=u("div",{class:"mb-3"},"\u8BF7\u9009\u62E9\u56FE\u6807",-1),ee=["onClick"],oe={class:"h-[280px]"},te={class:"flex flex-wrap"},se={key:0,class:"flex items-center"},le=G("\u65E0"),re=R({__name:"picker",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(r,{emit:p}){const _=U(0),b=[{name:"element\u56FE\u6807",icons:T()},{name:"\u672C\u5730\u56FE\u6807",icons:z()}],m=j(),e=D({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),x=()=>{e.inputFocus=e.popoverVisible=!0},C=()=>{e.inputFocus=!1,e.popoverVisible=e.mouseoverSelect},F=t=>{e.mouseoverSelect=e.popoverVisible=!1,p("update:modelValue",t),p("change",t)},y=()=>{p("update:modelValue",""),p("change","")},g=q(()=>{var l,d;const t=(d=(l=b[_.value])==null?void 0:l.icons)!=null?d:[];if(!e.inputValue)return t;const o=e.inputValue.toLowerCase();return t.filter(f=>{if(f.toLowerCase().indexOf(o)!==-1)return f})}),B=()=>{h(()=>{var o;const t=(o=m.value)==null?void 0:o.$el.offsetWidth;e.popoverWidth=t<300?300:t})};return H(document.body,"click",()=>{e.popoverVisible=!!(e.inputFocus||e.mouseoverSelect)}),K(()=>e.popoverVisible,async t=>{var o,l;await h(),t?(o=m.value)==null||o.focus():(l=m.value)==null||l.blur()}),O(()=>{B()}),(t,o)=>{const l=P,d=M,f=W,S=I,N=$;return i(),c("div",J,[n(N,{trigger:"contextmenu",visible:e.popoverVisible,"onUpdate:visible":o[3]||(o[3]=s=>e.popoverVisible=s),width:e.popoverWidth},{reference:a(()=>[n(k(L),{ref_key:"inputRef",ref:m,modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=s=>e.inputValue=s),modelModifiers:{trim:!0},placeholder:"\u641C\u7D22\u56FE\u6807",autofocus:!1,disabled:r.disabled,onFocus:x,onBlur:C,clearable:""},{prepend:a(()=>[r.modelValue?(i(),c("div",se,[n(S,{class:"flex-1 w-20",content:r.modelValue,placement:"top"},{default:a(()=>[(i(),X(l,{class:"mr-1",key:r.modelValue,name:r.modelValue,size:16},null,8,["name"]))]),_:1},8,["content"])])):(i(),c(V,{key:1},[le],64))]),append:a(()=>[n(d,null,{default:a(()=>[n(l,{name:"el-icon-Close",size:18,onClick:y})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:a(()=>[u("div",{onMouseover:o[0]||(o[0]=w(s=>e.mouseoverSelect=!0,["stop"])),onMouseout:o[1]||(o[1]=w(s=>e.mouseoverSelect=!1,["stop"]))},[u("div",null,[u("div",Q,[Y,u("div",null,[(i(),c(V,null,E(b,(s,v)=>u("span",{key:v,class:Z(["cursor-pointer text-sm ml-2",{"text-primary":v==_.value}]),onClick:ne=>_.value=v},A(s.name),11,ee)),64))])]),u("div",oe,[n(f,null,{default:a(()=>[u("div",te,[(i(!0),c(V,null,E(k(g),s=>(i(),c("div",{key:s,class:"m-1"},[n(d,{onClick:v=>F(s)},{default:a(()=>[n(l,{name:s,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}});export{re as _};
