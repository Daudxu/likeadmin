var g=Object.defineProperty;var r=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(t,s,i)=>s in t?g(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,n=(t,s)=>{for(var i in s||(s={}))a.call(s,i)&&o(t,i,s[i]);if(r)for(var i of r(s))u.call(s,i)&&o(t,i,s[i]);return t};import{r as e}from"./index.2dcd0ed9.js";function c(){return e.get("/setting.web.web_setting/getCopyright")}function m(t){return e.post("/setting.web.web_setting/setCopyright",n({},t))}function C(){return e.get("/setting.web.web_setting/getWebsite")}function S(t){return e.post("/setting.web.web_setting/setWebsite",n({},t))}function b(){return e.get("/setting.web.web_setting/getAgreement")}function l(t){return e.post("/setting.web.web_setting/setAgreement",t)}const y=()=>e.get("/setting.customer_service/getConfig"),w=t=>e.post("/setting.customer_service/setConfig",t);function h(){return e.get("/setting.user.user/getConfig")}function d(t){return e.post("/setting.user.user/setConfig",t)}function _(){return e.get("/setting.user.user/getRegisterConfig")}function A(t){return e.post("/setting.user.user/setRegisterConfig",t)}function G(){return e.get("/setting.system.system/info")}function L(t){return e.get("/setting.system.log/lists",{params:t})}function v(){return e.post("/setting.system.cache/clear")}function W(t){return e.post("/auth.admin/editSelf",t)}function q(){return e.post("/auth.admin/mySelf")}function P(){return e.get("/setting.storage/lists")}function R(t){return e.get("/setting.storage/detail",{params:t})}function U(t){return e.post("/setting.storage/setup",t)}export{y as a,w as b,C as c,S as d,c as e,m as f,b as g,l as h,h as i,d as j,_ as k,A as l,G as m,L as n,v as o,q as p,W as q,P as r,R as s,U as t};
