import{f as i}from"./index.cd92a33e.js";import{a as c,b as g,c as o}from"./wx_oa.20be24c5.js";import{s as h,r as l,$ as d}from"./@vue.e8706010.js";const r=h(),a=l([]),n=l(0),B=d({name:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]},{min:1,max:12,message:"\u957F\u5EA6\u9650\u523612\u4E2A\u5B57\u7B26",trigger:["blur","change"]}],menuType:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}],visitType:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}],url:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]},{pattern:/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u7684\u7F51\u5740\u94FE\u63A5",trigger:["blur","change"]}],appId:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}],pagePath:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}]}),y=s=>(s&&(r.value=s),{menuList:a,menuIndex:n,handleAddMenu:()=>{a.value.push({name:"\u83DC\u5355\u540D\u79F0",has_menu:!1,type:"view",url:"",appid:"",pagepath:"",sub_button:[]})},handleAddSubMenu:u=>{const e=n.value;if(a.value[e].sub_button.length>=5){i.msgError("\u5DF2\u6DFB\u52A0\u4E0A\u9650\uFF5E");return}a.value[e].sub_button.push(u)},handleEditSubMenu:(u,e)=>{const t=n.value;a.value[t].sub_button[e]=u},handleDelMenu:u=>{u!=0&&n.value--,a.value.splice(u,1)},handleDelSubMenu:(u,e)=>{a.value[u].sub_button.splice(e,1)},getOaMenuFunc:async()=>{try{a.value=await c()}catch(u){console.log("\u83B7\u53D6\u83DC\u5355=>",u)}},handleSave:async()=>{const u=r.value.value;for(let e=0;e<u.length;e++)try{await u[e].menuFormRef.validate()}catch{n.value=e;return}await g(a.value)},handlePublish:async()=>{const u=r.value.value;for(let e=0;e<u.length;e++)try{await u[e].menuFormRef.validate()}catch{n.value=e;return}await o(a.value)}});export{B as r,y as u};
