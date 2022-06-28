var I=Object.defineProperty,Y=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var v=(t,o,n)=>o in t?I(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,V=(t,o)=>{for(var n in o||(o={}))R.call(o,n)&&v(t,n,o[n]);if(S)for(var n of S(o))x.call(o,n)&&v(t,n,o[n]);return t},h=(t,o)=>Y(t,K(o));import{s as Q,t as T}from"./setting.36cd0d35.js";import{u as z}from"./index.2dcd0ed9.js";import{F as G}from"./index.9abad14a.js";import{d as $,q as C,o as M,a as c,b as i,c as p,f as u,w as a,_ as e,k as A,h as F,ai as j,e as O,m as k}from"./vendor.eb12b813.js";var m=(t=>(t.LOCAL="local",t.QINIU="qiniu",t.ALIYUN="aliyun",t.QCLOUD="qcloud",t))(m||{});const H={class:"storage-setting"},J={class:"card-content m-t-24"},P={key:0},W={key:1},X={key:2},Z={key:3},ee={key:4,class:"muted xs m-r-16"},ue={key:0},te=O("div",{class:"muted xs m-r-16"}," \u8BF7\u8865\u5168http://\u6216https://\uFF0C\u4F8B\u5982https://static.cloud.com ",-1),oe=k("\u505C\u7528\xB7"),le=k("\u542F\u7528"),ae=k("\u4FDD\u5B58"),Fe=$({setup(t){const{route:o,router:n}=z();let s=C(""),r=C({bucket:"",access_key:"",secret_key:"",domain:"",region:"",status:0}),U=C({bucket:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",trigger:"blur"}],access_key:[{required:!0,message:"\u8BF7\u8F93\u5165ACCESS_KEY",trigger:"blur"}],secret_key:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_KEY",trigger:"blur"}],domain:[{required:!0,message:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u8F93\u5165REGION",trigger:"blur"}]});const D=C(null),L=()=>{var B;(B=D.value)==null||B.validate(l=>{!l||T(h(V({},r.value),{engine:s.value})).then(f=>{setTimeout(()=>n.back(),500)}).catch(f=>{console.log("err",f)})})},q=async()=>{r.value=await Q({engine:s.value})};return M(async()=>{o.query.engine&&(console.log("route.query.engine",o.query.engine),s.value=o.query.engine),await q()}),(B,l)=>{const f=c("el-page-header"),g=c("el-card"),y=c("el-alert"),_=c("el-form-item"),E=c("el-input"),b=c("el-radio"),N=c("el-radio-group"),w=c("el-button");return i(),p("div",H,[u(g,{shadow:"never"},{default:a(()=>[u(f,{onBack:l[0]||(l[0]=d=>B.$router.go(-1)),content:"\u5B58\u50A8\u8BBE\u7F6E"})]),_:1}),e(s)!==e(m).LOCAL?(i(),A(g,{key:0,shadow:"never",class:"m-t-15"},{default:a(()=>[e(s)==e(m).QINIU?(i(),A(y,{key:0,title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u5207\u6362\u4E03\u725B\u4E91\u5B58\u50A8\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u4E03\u725B\u4E91\u3002",type:"primary",closable:!1,"show-icon":""})):F("",!0),e(s)==e(m).ALIYUN?(i(),A(y,{key:1,title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u5207\u6362\u963F\u91CC\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u963F\u91CC\u4E91OSS\u3002",type:"primary",closable:!1,"show-icon":""})):F("",!0),e(s)==e(m).QCLOUD?(i(),A(y,{key:2,title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u5207\u6362\u817E\u8BAF\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u817E\u8BAF\u4E91OSS\u3002",type:"primary",closable:!1,"show-icon":""})):F("",!0)]),_:1})):F("",!0),u(g,{shadow:"never",class:"m-t-15"},{default:a(()=>[u(e(j),{ref_key:"formRef",ref:D,model:e(r),rules:e(U),"label-width":"240px",size:"small",class:"ls-form"},{default:a(()=>[O("div",J,[u(_,{label:"\u5B58\u50A8\u65B9\u5F0F"},{default:a(()=>[e(s)===e(m).LOCAL?(i(),p("div",P,"\u672C\u5730\u5B58\u50A8")):F("",!0),e(s)===e(m).QINIU?(i(),p("div",W,"\u4E03\u725B\u4E91\u5B58\u50A8")):F("",!0),e(s)===e(m).ALIYUN?(i(),p("div",X,"\u963F\u91CC\u4E91OSS")):F("",!0),e(s)===e(m).QCLOUD?(i(),p("div",Z,"\u817E\u8BAF\u4E91OSS")):F("",!0),e(s)===e(m).LOCAL?(i(),p("div",ee," \u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u4E0D\u9700\u8981\u914D\u7F6E\u5176\u4ED6\u53C2\u6570 ")):F("",!0)]),_:1})]),e(s)!=="local"?(i(),p("div",ue,[u(_,{label:" \u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)",prop:"bucket"},{default:a(()=>[u(E,{modelValue:e(r).bucket,"onUpdate:modelValue":l[1]||(l[1]=d=>e(r).bucket=d),placeholder:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)"},null,8,["modelValue"])]),_:1}),u(_,{label:"ACCESS_KEY\uFF08AK\uFF09",prop:"access_key"},{default:a(()=>[u(E,{modelValue:e(r).access_key,"onUpdate:modelValue":l[2]||(l[2]=d=>e(r).access_key=d),placeholder:"\u8BF7\u8F93\u5165ACCESS_KEY"},null,8,["modelValue"])]),_:1}),u(_,{label:"SECRET_KEY\uFF08SK\uFF09",prop:"secret_key"},{default:a(()=>[u(E,{modelValue:e(r).secret_key,"onUpdate:modelValue":l[3]||(l[3]=d=>e(r).secret_key=d),placeholder:"\u8BF7\u8F93\u5165SECRET_KEY"},null,8,["modelValue"])]),_:1}),u(_,{label:"\u7A7A\u95F4\u57DF\u540D\uFF08Domain\uFF09",prop:"domain"},{default:a(()=>[u(E,{modelValue:e(r).domain,"onUpdate:modelValue":l[4]||(l[4]=d=>e(r).domain=d),placeholder:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D"},null,8,["modelValue"]),te]),_:1}),e(s)==e(m).QCLOUD?(i(),A(_,{key:0,label:"REGION",prop:"region"},{default:a(()=>[u(E,{modelValue:e(r).region,"onUpdate:modelValue":l[5]||(l[5]=d=>e(r).region=d),placeholder:"\u8BF7\u8F93\u5165region"},null,8,["modelValue"])]),_:1})):F("",!0)])):F("",!0),u(_,{label:"\u72B6\u6001",prop:"status"},{default:a(()=>[u(N,{class:"m-r-16",modelValue:e(r).status,"onUpdate:modelValue":l[6]||(l[6]=d=>e(r).status=d)},{default:a(()=>[u(b,{label:0},{default:a(()=>[oe]),_:1}),u(b,{label:1},{default:a(()=>[le]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),u(G,null,{default:a(()=>[u(w,{type:"primary",size:"small",onClick:L},{default:a(()=>[ae]),_:1})]),_:1})])}}});export{Fe as default};
