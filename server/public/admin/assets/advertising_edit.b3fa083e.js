import{e as z,a as G,f as J,g as K,h as O}from"./decoration.ae941646.js";import{F as Q}from"./index.319a77f2.js";import{_ as W}from"./index.b6938fb2.js";import{d as X,r as d,k as Y,m as Z,n as ee,e as n,o as i,c as f,a as t,w as o,i as u,H as k,I as x,f as U,t as le,g as c,j as h,h as g}from"./index.6235ba03.js";import"./index.a594d598.js";import"./index.9923ef6e.js";import"./pages.9569697b.js";const ae={class:"muted"},ue=g("\u5546\u57CE\u9875\u9762"),te=g("\u81EA\u5B9A\u4E49\u94FE\u63A5"),oe=g("\u4FDD\u5B58"),ce=X({__name:"advertising_edit",setup(ne){const V=d(),{router:A,route:L}=Y(),m=L.query.id;let e=d({name:"",image:"",pid:"",link_type:1,link_address:"",sort:0,status:1}),y=d([]),b=d([]);d([]);const p=d(""),E=d(""),_=d(""),P=Z({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}],link_address:[{required:!0,message:"\u94FE\u63A5\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",trigger:[]}],status:[{required:!0,message:"\u8BF7\u9009\u62E9\u72B6\u6001",trigger:"change"}]}),q=async s=>{switch(e.value=await z({id:s}),e.value.link_type){case 1:p.value=e.value.link_address;break;case 2:E.value=e.value.link_address;break;case 3:_.value=e.value.link_address;break}},N=async()=>{const s=await G();y.value=s.lists},S=async()=>{b.value=await J()},j=async()=>{await K({...e.value}),A.back()},$=async()=>{await O({...e.value}),A.back()},R=s=>{switch(e.value.link_type){case 1:e.value.link_address=p.value;break;case 2:e.value.link_address=E.value;break;case 3:e.value.link_address=_.value;break}!s||s.validate(a=>{if(!a)return!1;m?$():j()})};return ee(()=>{m&&q(m),N(),S()}),(s,a)=>{const T=n("el-page-header"),B=n("el-card"),v=n("el-input"),r=n("el-form-item"),w=n("el-option"),D=n("el-select"),C=n("el-radio"),H=n("el-switch"),I=n("el-form"),M=n("el-button");return i(),f(k,null,[t(B,{shadow:"never"},{default:o(()=>[t(T,{content:u(m)?"\u7F16\u8F91\u5E7F\u544A":"\u65B0\u589E\u5E7F\u544A",onBack:a[0]||(a[0]=l=>s.$router.back())},null,8,["content"])]),_:1}),t(I,{ref_key:"formRef",ref:V,model:u(e),rules:P,"label-width":"120px",class:"formData"},{default:o(()=>[t(B,{shadow:"never",style:{"margin-top":"15px"}},{default:o(()=>[t(r,{label:"\u5E7F\u544A\u540D\u79F0:",prop:"name"},{default:o(()=>[t(v,{class:"ls-input",modelValue:u(e).name,"onUpdate:modelValue":a[1]||(a[1]=l=>u(e).name=l),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5E7F\u544A\u4F4D\u7F6E:",prop:"name"},{default:o(()=>[t(D,{modelValue:u(e).pid,"onUpdate:modelValue":a[2]||(a[2]=l=>u(e).pid=l),class:"ls-input",placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[(i(!0),f(k,null,x(u(y),(l,F)=>(i(),c(w,{key:F,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(r,{label:"\u56FE\u6807:"},{default:o(()=>[t(W,{modelValue:u(e).image,"onUpdate:modelValue":a[3]||(a[3]=l=>u(e).image=l),limit:1},null,8,["modelValue"]),U("div",ae," \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A\u5BBD750*\u9AD8 "+le(u(e).pid==2?"200":"340")+" \u50CF\u7D20\u7684jpg\uFF0Cjpeg\uFF0Cpng\uFF0Cgif\u56FE\u7247 ",1)]),_:1}),t(r,{label:"\u94FE\u63A5\u5730\u5740:",prop:"link_address"},{default:o(()=>[t(C,{modelValue:u(e).link_type,"onUpdate:modelValue":a[4]||(a[4]=l=>u(e).link_type=l),name:"1",label:1},{default:o(()=>[ue]),_:1},8,["modelValue"]),t(C,{modelValue:u(e).link_type,"onUpdate:modelValue":a[5]||(a[5]=l=>u(e).link_type=l),name:"3",label:3},{default:o(()=>[te]),_:1},8,["modelValue"]),U("div",null,[u(e).link_type===1?(i(),c(D,{key:0,modelValue:p.value,"onUpdate:modelValue":a[6]||(a[6]=l=>p.value=l),class:"ls-input",placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[(i(!0),f(k,null,x(u(b),(l,F)=>(i(),c(w,{key:F,label:l.name,value:l.index+""},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):h("",!0),u(e).link_type===3?(i(),c(v,{key:1,class:"ls-input",modelValue:_.value,"onUpdate:modelValue":a[7]||(a[7]=l=>_.value=l),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):h("",!0)])]),_:1}),t(r,{label:"\u6392\u5E8F:"},{default:o(()=>[t(v,{class:"ls-input",modelValue:u(e).sort,"onUpdate:modelValue":a[8]||(a[8]=l=>u(e).sort=l),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u72B6\u6001:",prop:"status"},{default:o(()=>[t(H,{modelValue:u(e).status,"onUpdate:modelValue":a[9]||(a[9]=l=>u(e).status=l),"active-text":u(e).status?"\u542F\u7528":"\u5173\u95ED","active-value":1,"inactive-value":0},null,8,["modelValue","active-text"])]),_:1})]),_:1})]),_:1},8,["model","rules"]),t(Q,null,{default:o(()=>[t(M,{type:"primary",onClick:a[10]||(a[10]=l=>R(V.value))},{default:o(()=>[oe]),_:1})]),_:1})],64)}}});export{ce as default};
