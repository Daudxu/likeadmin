import{M as t}from"./index.6235ba03.js";function i(){return t.get("/setting.web.web_setting/getCopyright")}function n(e){return t.post("/setting.web.web_setting/setCopyright",{...e})}function r(){return t.get("/setting.web.web_setting/getWebsite")}function o(e){return t.post("/setting.web.web_setting/setWebsite",{...e})}function g(){return t.get("/setting.web.web_setting/getAgreement")}function a(e){return t.post("/setting.web.web_setting/setAgreement",e)}const u=()=>t.get("/setting.customer_service/getConfig"),p=e=>t.post("/setting.customer_service/setConfig",e);function f(){return t.get("/setting.user.user/getConfig")}function c(e){return t.post("/setting.user.user/setConfig",e)}function m(){return t.get("/setting.user.user/getRegisterConfig")}function C(e){return t.post("/setting.user.user/setRegisterConfig",e)}function S(){return t.get("/setting.system.system/info")}function b(e){return t.get("/setting.system.log/lists",{params:e})}function l(){return t.post("/setting.system.cache/clear")}function y(e){return t.post("/auth.admin/editSelf",e)}function w(){return t.post("/auth.admin/mySelf")}function h(){return t.get("/setting.storage/lists")}function d(e){return t.get("/setting.storage/detail",{params:e})}function _(e){return t.post("/setting.storage/setup",e)}export{w as a,y as b,u as c,p as d,_ as e,d as f,h as g,l as h,S as i,b as j,f as k,c as l,m,C as n,i as o,n as p,r as q,o as r,g as s,a as t};
