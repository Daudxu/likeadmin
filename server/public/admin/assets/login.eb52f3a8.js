import{d as V,q as f,j as C,r as A,o as K,a as r,b as L,c as $,e as l,Y as q,t as F,f as n,w as u,Z as w,m as D}from"./vendor.eb12b813.js";import{_ as N,u as R,c as y,A as k}from"./index.2dcd0ed9.js";const U=V({setup(){const{store:e,router:t,route:b}=R(),_=f(null),g=f(null),i=f(!1),c=f(!1),d=C(()=>e.getters.config),a=A({account:"",password:""}),m={account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}]},h=()=>{var o;if(!a.password)return(o=_.value)==null?void 0:o.focus();p()},p=()=>{var o;(o=g.value)==null||o.validate(v=>{!v||(c.value=!0,y.set(k,{remember:i.value,account:a.account}),e.dispatch("user/login",a).then(()=>{const{query:{redirect:s}}=b,B=typeof s=="string"?s:"/";t.replace(B)}).catch(s=>{console.log(s)}).finally(()=>{c.value=!1}))})};return K(()=>{const o=y.get(k);o.remember&&(i.value=o.remember,a.account=o.account)}),{config:d,passwordRefs:_,loginFormRefs:g,loginForm:a,loginLoading:c,rules:m,handleEnter:h,handleLogin:p,remAccount:i}}}),x={class:"login flex flex-col"},E={class:"flex-1 flex flex-center"},S={class:"login-card bg-white flex"},T={class:"login-form flex flex-col"},j={class:"f-s-24 f-w-500 text-center m-b-40"},z={class:"m-b-20"},I=D("\u767B\u5F55"),M={class:"login-footer"},O={class:"flex flex-center muted xs m-t-20"},Y={class:"m-r-10"},Z=["href"];function G(e,t,b,_,g,i){const c=r("avatar"),d=r("el-icon"),a=r("el-input"),m=r("el-form-item"),h=r("lock"),p=r("el-form"),o=r("el-checkbox"),v=r("el-button");return L(),$("div",x,[l("div",E,[l("div",S,[l("div",{class:"login-img",style:q({"background-image":`url(${e.config.login_image})`})},null,4),l("div",T,[l("div",j,F(e.config.web_name),1),n(p,{ref:"loginFormRefs",model:e.loginForm,"status-icon":"",rules:e.rules},{default:u(()=>[n(m,{prop:"account"},{default:u(()=>[n(a,{modelValue:e.loginForm.account,"onUpdate:modelValue":t[0]||(t[0]=s=>e.loginForm.account=s),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",onKeyup:w(e.handleEnter,["enter"])},{prepend:u(()=>[n(d,null,{default:u(()=>[n(c)]),_:1})]),_:1},8,["modelValue","onKeyup"])]),_:1}),n(m,{prop:"password"},{default:u(()=>[n(a,{ref:"passwordRefs",modelValue:e.loginForm.password,"onUpdate:modelValue":t[1]||(t[1]=s=>e.loginForm.password=s),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onKeyup:w(e.handleLogin,["enter"])},{prepend:u(()=>[n(d,null,{default:u(()=>[n(h)]),_:1})]),_:1},8,["modelValue","onKeyup"])]),_:1})]),_:1},8,["model","rules"]),l("div",z,[n(o,{modelValue:e.remAccount,"onUpdate:modelValue":t[2]||(t[2]=s=>e.remAccount=s),label:"\u8BB0\u4F4F\u8D26\u53F7"},null,8,["modelValue"])]),n(v,{type:"primary",loading:e.loginLoading,onClick:e.handleLogin},{default:u(()=>[I]),_:1},8,["loading","onClick"])])])]),l("div",M,[l("div",O,[l("span",Y,F(e.config.copyright_info),1),l("a",{class:"link muted",href:e.config.icp_link,target:"_blank"},F(e.config.icp_number),9,Z)])])])}var P=N(U,[["render",G],["__scopeId","data-v-0a9f534d"]]);export{P as default};
