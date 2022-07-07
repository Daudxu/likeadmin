import{d as M,dG as P,aq as L,r as O,l as G,s as I,bR as $,o as a,c,a as e,w as t,h as u,e as D,Q as f,f as _,dH as y,i as H,g as s,E as Q,dF as S}from"./index.384b7db0.js";import{v as j}from"./el-loading.abc3f1d4.js";import"./el-tag.f1977c97.js";import{a as z,E as J}from"./el-table-column.b0eae4f8.js";import"./el-checkbox.2a98827a.js";import{E as K}from"./el-card.2d504979.js";import{E as W,a as X}from"./el-form-item.f43edef0.js";import{E as Y}from"./el-input.a93fc7f3.js";import{a as Z,E as ee}from"./el-select.762557fc.js";import{a as te,n as oe}from"./auth.087e92df.js";import{u as ae}from"./pages.e9fd114b.js";import{E as le}from"./index.1b4cfcd8.js";import"./event.776e7e11.js";import"./isEqual.78bef719.js";import"./index.0a5e60ad.js";import"./scroll.cb490b8d.js";import"./validator.ae916af9.js";const ue={class:"menu-lists"},se=s("\u67E5\u8BE2"),ne=s("\u6E05\u7A7A\u67E5\u8BE2"),ie=s("\u65B0\u589E"),re=s("\u5168\u90E8\u5C55\u5F00/\u6298\u53E0"),de={key:0},me={key:1},_e={key:2},pe={class:"flex"},ce=s("\u6B63\u5E38"),fe=s("\u505C\u7528"),Ee=s("\u7F16\u8F91"),he=s("\u5220\u9664"),Pe=M({__name:"index",setup(Ce){P();const v=L(),E=O(!1),d=G({page_type:0,name:"",is_disable:""}),{pager:h,requestApi:k,resetPage:x,resetParams:V}=ae({callback:te,params:d}),T=async n=>{await oe({id:n}),k()},R=()=>{E.value=!E.value,B(h.lists,E.value)},B=(n,i=!0)=>{var p;for(const r in n)(p=v.value)==null||p.toggleRowExpansion(n[r],i),n[r].children&&B(n[r].children,i)};return k(),(n,i)=>{const p=Y,r=W,C=Z,A=ee,m=Q,N=X,F=K,g=I("router-link"),l=J,U=S,w=le,b=$("perms"),q=j;return a(),c("div",ue,[e(F,{shadow:"never"},{default:t(()=>[e(N,{ref:"formRef",style:{"margin-bottom":"-16px"},model:d,inline:!0},{default:t(()=>[e(r,{label:"\u83DC\u5355\u540D\u79F0"},{default:t(()=>[e(p,{modelValue:d.name,"onUpdate:modelValue":i[0]||(i[0]=o=>d.name=o),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u83DC\u5355\u72B6\u6001"},{default:t(()=>[e(A,{modelValue:d.is_disable,"onUpdate:modelValue":i[1]||(i[1]=o=>d.is_disable=o),placeholder:"\u8BF7\u9009\u62E9\u83DC\u5355\u72B6\u6001"},{default:t(()=>[e(C,{label:"\u5168\u90E8",value:""}),e(C,{label:"\u6B63\u5E38",value:"0"}),e(C,{label:"\u505C\u7528",value:"1"})]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(m,{type:"primary",onClick:u(x)},{default:t(()=>[se]),_:1},8,["onClick"]),e(m,{onClick:u(V)},{default:t(()=>[ne]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(F,{class:"m-t-16",shadow:"never"},{default:t(()=>[D("div",null,[f((a(),_(g,{class:"m-r-10",to:"/permission/menu/edit"},{default:t(()=>[e(m,{type:"primary"},{default:t(()=>[ie]),_:1})]),_:1})),[[b,["auth.menu/add"]]]),e(m,{onClick:R},{default:t(()=>[re]),_:1})]),f((a(),_(u(z),{ref_key:"tableRef",ref:v,data:u(h).lists,class:"m-t-16","row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(l,{label:"\u83DC\u5355\u540D\u79F0",prop:"name","min-width":"150"}),e(l,{label:"\u7C7B\u578B",prop:"type","min-width":"80"},{default:t(({row:o})=>[o.type==u(y).CATALOGUE?(a(),c("div",de,"\u76EE\u5F55")):o.type==u(y).MENU?(a(),c("div",me,"\u83DC\u5355")):o.type==u(y).BUTTON?(a(),c("div",_e,"\u6309\u94AE")):H("",!0)]),_:1}),e(l,{label:"\u56FE\u6807",prop:"icon","min-width":"80"},{default:t(({row:o})=>[D("div",pe,[e(U,{name:o.icon},null,8,["name"])])]),_:1}),e(l,{label:"\u6743\u9650\u6807\u8BC6",prop:"perms","min-width":"150"}),e(l,{label:"\u72B6\u6001",prop:"is_disable","min-width":"100"},{default:t(({row:o})=>[o.is_disable==0?(a(),_(w,{key:0},{default:t(()=>[ce]),_:1})):(a(),_(w,{key:1,type:"danger"},{default:t(()=>[fe]),_:1}))]),_:1}),e(l,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(l,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"update_time","min-width":"180"}),e(l,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:t(({row:o})=>[f((a(),_(g,{class:"m-r-10",to:{path:"/permission/menu/edit",query:{id:o.id}}},{default:t(()=>[e(m,{type:"primary",link:""},{default:t(()=>[Ee]),_:1})]),_:2},1032,["to"])),[[b,["auth.menu/edit"]]]),f((a(),_(m,{type:"primary",link:"",onClick:be=>T(o.id)},{default:t(()=>[he]),_:2},1032,["onClick"])),[[b,["auth.menu/delete"]]])]),_:1})]),_:1},8,["data"])),[[q,u(h).loading]])]),_:1})])}}});export{Pe as default};
