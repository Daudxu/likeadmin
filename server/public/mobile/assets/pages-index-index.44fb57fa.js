import{_ as e}from"./u-search.223c439a.js";import{r as t,a,o as s,c as n,w as l,b as r,i as c,d as i,u as o,e as d,f as u,g as p,F as m,h as f,S as y,j as h,k as b,l as g,t as _,m as v}from"./index.01e6308a.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as w}from"./u-image.2f57e228.js";import{n as k}from"./util.428a7bec.js";import{_ as j}from"./news-card.c330c163.js";import{_ as O}from"./tabbar.e62a7263.js";import{g as C}from"./shop.ad726ab8.js";import"./u-icon.ed88a569.js";import"./icon_visit.9ad00ab7.js";import"./u-badge.9da4649e.js";var I=x({},[["render",function(i,o){const d=t(a("u-search"),e),u=c;return s(),n(u,{url:"/pages/search/search",class:"search px-[24rpx] py-[14rpx] bg-white","hover-class":"none"},{default:l((()=>[r(d,{placeholder:"请输入关键词搜索",disabled:"","show-action":!1})])),_:1})}]]);const F=i({__name:"banner",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const{getImageUrl:c}=o();return(i,o)=>{const g=t(a("u-image"),w),_=y,v=h,x=b;return e.content.data.length&&e.content.enabled?(s(),n(x,{key:0,class:"banner h-[340rpx] bg-white translate-y-0"},{default:l((()=>[r(v,{class:"swiper h-full","indicator-dots":e.content.data.length>1,"indicator-active-color":"#4173ff",autoplay:!0},{default:l((()=>[(s(!0),d(m,null,u(e.content.data,((e,t)=>(s(),n(_,{key:t,onClick:t=>{return a=e.link,void k(a);var a}},{default:l((()=>[r(g,{mode:"aspectFit",width:"100%",height:"100%",src:p(c)(e.image)},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["indicator-dots"])])),_:1})):f("v-if",!0)}}}),S=i({__name:"nav",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const{getImageUrl:c}=o();return(i,o)=>{const y=t(a("u-image"),w),h=b;return e.content.data.length&&e.content.enabled?(s(),n(h,{key:0,class:"nav pt-[30rpx] pb-[16rpx] bg-white"},{default:l((()=>[r(h,{class:"nav-item flex flex-wrap"},{default:l((()=>[(s(!0),d(m,null,u(e.content.data,((e,t)=>(s(),n(h,{key:t,class:"flex flex-col items-center w-1/5 mb-[30rpx]",onClick:t=>{return a=e.link,void k(a);var a}},{default:l((()=>[r(y,{width:"41px",height:"41px",src:p(c)(e.image),alt:""},null,8,["src"]),r(h,{class:"mt-[14rpx]"},{default:l((()=>[g(_(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):f("v-if",!0)}}});var U=x(i({__name:"index",setup(e){const c=v({pages:[],article:[]});return(async()=>{var e;const t=await C();c.pages=JSON.parse(null==(e=null==t?void 0:t.page)?void 0:e.data),c.article=t.article})(),(e,i)=>{const o=t(a("w-search"),I),p=t(a("w-banner"),F),y=t(a("w-nav"),S),h=b,_=t(a("news-card"),j),v=t(a("tabbar"),O);return s(),n(h,{class:"index"},{default:l((()=>[(s(!0),d(m,null,u(c.pages,((e,t)=>(s(),n(h,{key:t},{default:l((()=>["search"==e.name?(s(),n(o,{key:0,content:e.content,styles:e.styles},null,8,["content","styles"])):f("v-if",!0),"banner"==e.name?(s(),n(p,{key:1,content:e.content,styles:e.styles},null,8,["content","styles"])):f("v-if",!0),"nav"==e.name?(s(),n(y,{key:2,content:e.content,styles:e.styles},null,8,["content","styles"])):f("v-if",!0)])),_:2},1024)))),128)),c.article.length?(s(),n(h,{key:0,class:"article"},{default:l((()=>[r(h,{class:"flex items-center article-title mx-[20rpx] my-[30rpx] text-2xl font-medium"},{default:l((()=>[g(" 最新资讯 ")])),_:1}),(s(!0),d(m,null,u(c.article,(e=>(s(),n(_,{key:e.id,"news-id":e.id,item:e},null,8,["news-id","item"])))),128))])),_:1})):f("v-if",!0),r(v)])),_:1})}}}),[["__scopeId","data-v-937fbb6c"]]);export{U as default};
