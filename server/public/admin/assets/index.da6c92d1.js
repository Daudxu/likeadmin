import{_ as A,d as N,u as I,l as k,r as R,s as q,bR as j,o as l,c as L,a as t,w as e,e as h,h as m,Q as r,f as u,S as Q,i as z,g as i,E as H}from"./index.384b7db0.js";import{v as J}from"./el-loading.abc3f1d4.js";import{E as K,a as M}from"./el-table-column.b0eae4f8.js";import"./el-checkbox.2a98827a.js";import"./el-tag.f1977c97.js";import{E as O}from"./el-card.2d504979.js";import{E as W,a as X}from"./el-form-item.f43edef0.js";import{E as Y}from"./el-input.a93fc7f3.js";import{c as Z,d as ee,e as te,f as oe,g as ae}from"./dev_tools.07dbc52d.js";import{u as le}from"./pages.e9fd114b.js";import ne from"./data-table.137b53c0.js";import{P as se}from"./index.ca7f9f76.js";import ue from"./code-preview.ed90293b.js";import{P as F}from"./index.9f6c9ec5.js";import"./event.776e7e11.js";import"./isEqual.78bef719.js";import"./index.0a5e60ad.js";import"./el-select.762557fc.js";import"./index.1b4cfcd8.js";import"./scroll.cb490b8d.js";import"./validator.ae916af9.js";import"./el-overlay.97653f00.js";import"./el-tab-pane.fcfabcc4.js";const ie={class:"code-generation"},re={class:"m-l-20"},de=i("\u67E5\u8BE2"),me=i("\u91CD\u7F6E"),ce=i("\u5BFC\u5165\u6570\u636E\u8868"),_e=i("\u751F\u6210\u4EE3\u7801"),pe=i("\u5220\u9664"),fe={class:"m-t-15"},ve=i("\u9884\u89C8"),ge=i("\u4EE3\u7801\u751F\u6210"),Ce=i("\u7F16\u8F91"),be=i("\u540C\u6B65"),he=i("\u5220\u9664"),Fe={class:"flex row-right m-t-20"},Ee=N({__name:"index",setup(ye){I();const c=k({table_name:"",table_comment:""}),_=k({show:!1,code:[]}),{pager:v,requestApi:g,resetParams:V,resetPage:B}=le({callback:Z,params:c}),p=R([]),D=n=>{p.value=n.map(({id:o})=>o)},P=async n=>{await ee({id:n})},E=async n=>{await te({id:n}),g()},$=async n=>{try{const o=await oe({id:n});_.code=o,_.show=!0}catch{}},y=async n=>{const o=await ae({id:n});o.file&&window.open(o.file,"_blank")};return g(),(n,o)=>{const w=Y,C=W,s=H,S=X,x=O,f=K,T=q("router-link"),G=M,d=j("perms"),U=J;return l(),L("div",ie,[t(x,{shadow:"never"},{default:e(()=>[t(S,{class:"ls-form",model:c,"label-width":"80px",inline:""},{default:e(()=>[t(C,{label:"\u8868\u540D\u79F0"},{default:e(()=>[t(w,{modelValue:c.table_name,"onUpdate:modelValue":o[0]||(o[0]=a=>c.table_name=a),class:"ls-input"},null,8,["modelValue"])]),_:1}),t(C,{label:"\u8868\u63CF\u8FF0"},{default:e(()=>[t(w,{modelValue:c.table_comment,"onUpdate:modelValue":o[1]||(o[1]=a=>c.table_comment=a),class:"ls-input"},null,8,["modelValue"])]),_:1}),t(C,null,{default:e(()=>[h("div",re,[t(s,{type:"primary",onClick:m(B)},{default:e(()=>[de]),_:1},8,["onClick"]),t(s,{onClick:m(V)},{default:e(()=>[me]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model"])]),_:1}),r((l(),u(x,{class:"m-t-16",shadow:"never"},{default:e(()=>[r((l(),u(ne,{class:"inline m-r-10",onSuccess:m(g)},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[ce]),_:1})]),_:1},8,["onSuccess"])),[[d,["tools.generator/selectTable"]]]),r((l(),u(s,{disabled:!p.value.length,onClick:o[2]||(o[2]=a=>y(p.value))},{default:e(()=>[_e]),_:1},8,["disabled"])),[[d,["tools.generator/generate"]]]),r((l(),u(F,{class:"m-l-10 inline",disabled:!p.value.length,content:"\u786E\u8BA4\u5220\u9664\u9009\u4E2D\u6570\u636E\u8868\uFF1F",onConfirm:o[3]||(o[3]=a=>E(p.value))},{trigger:e(()=>[t(s,{disabled:!p.value.length},{default:e(()=>[pe]),_:1},8,["disabled"])]),_:1},8,["disabled"])),[[d,["tools.generator/delete"]]]),h("div",fe,[t(G,{data:m(v).lists,onSelectionChange:D},{default:e(()=>[t(f,{type:"selection",width:"55"}),t(f,{label:"\u8868\u540D\u79F0",prop:"table_name"}),t(f,{label:"\u8868\u63CF\u8FF0",prop:"table_comment"}),t(f,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time"}),t(f,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"update_time"}),t(f,{label:"\u64CD\u4F5C",width:"240",fixed:"right"},{default:e(({row:a})=>[r((l(),u(s,{type:"text",onClick:b=>$(a.id)},{default:e(()=>[ve]),_:2},1032,["onClick"])),[[d,["tools.generator/preview"]]]),r((l(),u(s,{type:"text",onClick:b=>y(a.id)},{default:e(()=>[ge]),_:2},1032,["onClick"])),[[d,["tools.generator/generate"]]]),r((l(),u(T,{class:"m-l-10",to:{path:"/dev_tools/code/edit",query:{id:a.id}}},{default:e(()=>[t(s,{type:"text"},{default:e(()=>[Ce]),_:1})]),_:2},1032,["to"])),[[d,["tools.generator/edit"]]]),r((l(),u(F,{class:"inline m-l-10",content:"\u786E\u8BA4\u8981\u540C\u6B65\u8868\u7ED3\u6784\u5417\uFF1F",onConfirm:b=>P(a.id)},{trigger:e(()=>[t(s,{type:"text"},{default:e(()=>[be]),_:1})]),_:2},1032,["onConfirm"])),[[d,["tools.generator/syncColumn"]]]),r((l(),u(F,{class:"inline m-l-10",onConfirm:b=>E(a.id)},{trigger:e(()=>[t(s,{type:"text"},{default:e(()=>[he]),_:1})]),_:2},1032,["onConfirm"])),[[d,["tools.generator/delete"]]])]),_:1})]),_:1},8,["data"])]),h("div",Fe,[t(se,{modelValue:m(v),"onUpdate:modelValue":o[4]||(o[4]=a=>Q(v)?v.value=a:null),layout:"total, prev, pager, next, jumper",onChange:m(g)},null,8,["modelValue","onChange"])])]),_:1})),[[U,m(v).loading]]),_.show?(l(),u(ue,{key:0,modelValue:_.show,"onUpdate:modelValue":o[5]||(o[5]=a=>_.show=a),code:_.code},null,8,["modelValue","code"])):z("",!0)])}}});var Ke=A(Ee,[["__scopeId","data-v-10cf2604"]]);export{Ke as default};
