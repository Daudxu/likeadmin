var ae=Object.defineProperty,ce=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var q=(e,t,o)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))le.call(t,o)&&q(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&q(e,o,t[o]);return e},z=(e,t)=>ce(e,ue(t));import{d as g,r as _e,o as Q,a as d,b as c,c as h,e as i,f as u,w as l,t as m,F as D,g as L,h as F,p as X,i as Y,j as w,k as E,n as K,l as pe,m as j,q as Z,s as me,R,u as he,v as fe,E as P,x as ve,y as ge,z as ye,A as $e,B as be,C as we,K as Ee,D as Fe,N as M,G as ke,H as Ae,I as W,J as Ce,U as De,L as Be,M as xe,O as Pe,P as Ie,Q as Se,S as Oe,T as Le,V as Re,W as Te,X as Ne}from"./vendor.d820f56e.js";const Ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};Ve();const je={token:e=>e.user.token,userInfo:e=>e.user.user,config:e=>e.app.config,permission:e=>e.permission.permission,isAdmin:e=>e.permission.isAdmin},Me=1,Ue="1.0.0";function qe(e,t=1e3,o){let n=new Date(0).getTime();return function(...r){const a=new Date().getTime();if(a-n>t)return n=a,e.apply(o,r)}}function ze(e=[],t=[],o="children"){return e.forEach(n=>{const r=n[o];r?ze(r,t,o):t.push(n)}),t}const Ke="modulepreload",H={},We="/admin/",k=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${We}${n}`,n in H)return;H[n]=!0;const r=n.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Ke,r||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),r)return new Promise((p,v)=>{s.addEventListener("load",p),s.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};function He(){return _.get("/Workbench/index")}var y=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o};const Ge=g({setup(){const e=_e({version:{version:"",website:""},today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[0],type:"line"}]}}),t=()=>{He().then(o=>{console.log("res",o),e.version=o.version,e.today=o.today,e.menu=o.menu,e.visitor=o.visitor,e.article=o.article,e.visitorOption.xAxis.data=[],e.visitorOption.series[0].data=[],o.visitor.date.reverse().forEach(n=>{e.visitorOption.xAxis.data.push(n)}),o.visitor.list[0].data.forEach(n=>{e.visitorOption.series[0].data.push(n)})}).catch(o=>{console.log("err",o)})};return Q(()=>{t()}),{workbenchData:e,getWorkbench:t}}}),A=e=>(X("data-v-2a8ab6c1"),e=e(),Y(),e),Je={class:"workbench"},Qe={class:"flex workbench-header"},Xe=A(()=>i("span",{class:"card-title"},"\u8D26\u53F7\u4FE1\u606F",-1)),Ye={class:"m-b-20"},Ze=A(()=>i("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1)),et={class:"muted xs m-l-15"},tt={class:"flex"},ot={class:"flex-1"},nt=A(()=>i("div",{class:"lighter m-b-10"},"\u8BBF\u95EE\u91CF",-1)),st={class:"f-s-32 m-b-10"},rt={class:"lighter"},it={class:"flex-1"},at=A(()=>i("div",{class:"lighter m-b-10"},"\u9500\u552E\u989D",-1)),ct={class:"f-s-32 m-b-10"},ut={class:"lighter"},lt={class:"flex-1"},dt=A(()=>i("div",{class:"lighter m-b-10"},"\u65B0\u589E\u7528\u6237",-1)),_t={class:"f-s-32 m-b-10"},pt={class:"lighter"},mt={class:"m-t-15 function"},ht=A(()=>i("span",{class:"card-title"},"\u5E38\u7528\u529F\u80FD",-1)),ft={class:"nav-lists"},vt={class:"m-t-8 normal"},gt={class:"flex m-t-15 ranking"},yt=A(()=>i("span",{class:"card-title"},"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1)),$t={class:"ranking-centent"},bt=A(()=>i("div",null,[i("span",{class:"card-title"},"\u6587\u7AE0\u9605\u8BFB\u91CF\u6392\u540D")],-1)),wt={class:"ranking-centent"},Et={key:0,class:"icon",style:{background:"#f86056",color:"#fff"}},Ft={key:1,class:"icon",style:{background:"#fc8d2e",color:"#fff"}},kt={key:2,class:"icon",style:{background:"#fcbc2e",color:"#fff"}},At={key:3,class:"icon"};function Ct(e,t,o,n,r,a){const s=d("el-card"),p=d("el-image"),v=d("router-link"),C=d("v-chart"),$=d("el-table-column"),B=d("el-table");return c(),h("div",Je,[i("div",Qe,[u(s,{class:"flex-1",shadow:"never"},{header:l(()=>[Xe]),default:l(()=>[i("div",null,[i("div",Ye,"\u7248\u672C\u53F7\uFF1A"+m(e.workbenchData.version.version),1),i("div",null,"\u5B98\u7F51\u5730\u5740\uFF1A"+m(e.workbenchData.version.website),1)])]),_:1}),u(s,{class:"flex-3 m-l-15",shadow:"never"},{header:l(()=>[i("div",null,[Ze,i("span",et,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+m(e.workbenchData.today.time),1)])]),default:l(()=>[i("div",tt,[i("div",ot,[nt,i("div",st,m(e.workbenchData.today.today_visitor),1),i("div",rt,"\u603B\u8BBF\u95EE\u91CF\uFF1A"+m(e.workbenchData.today.total_visitor),1)]),i("div",it,[at,i("div",ct,m(e.workbenchData.today.today_sales),1),i("div",ut,"\u603B\u9500\u552E\u989D\uFF1A"+m(e.workbenchData.today.total_sales),1)]),i("div",lt,[dt,i("div",_t,m(e.workbenchData.today.today_new_user),1),i("div",pt," \u603B\u8BBF\u7528\u6237\uFF1A"+m(e.workbenchData.today.total_new_user),1)])])]),_:1})]),i("div",mt,[u(s,{class:"flex-1",shadow:"never"},{header:l(()=>[ht]),default:l(()=>[i("div",ft,[(c(!0),h(D,null,L(e.workbenchData.menu,f=>(c(),h("div",{key:f,class:"nav-item flex flex-col flex-center m-t-10"},[u(v,{to:f.url},{default:l(()=>[u(p,{style:{width:"48px",height:"48px"},src:f.image},null,8,["src"]),i("div",vt,m(f.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),i("div",gt,[u(s,{class:"flex-1",shadow:"never"},{header:l(()=>[yt]),default:l(()=>[i("div",$t,[u(C,{class:"chart",option:e.workbenchData.visitorOption},null,8,["option"])])]),_:1}),u(s,{class:"flex-1 m-l-15",shadow:"never"},{header:l(()=>[bt]),default:l(()=>[i("div",wt,[u(B,{data:e.workbenchData.article,size:"medium"},{default:l(()=>[u($,{label:"\u6392\u540D","min-width":"70",type:"index"},{default:l(f=>[f.$index==0?(c(),h("div",Et,m(f.$index+1),1)):F("",!0),f.$index==1?(c(),h("div",Ft,m(f.$index+1),1)):F("",!0),f.$index==2?(c(),h("div",kt,m(f.$index+1),1)):F("",!0),f.$index>2?(c(),h("div",At,m(f.$index+1),1)):F("",!0)]),_:1}),u($,{prop:"name",label:"\u6587\u7AE0\u540D\u79F0"}),u($,{prop:"read",label:"\u9605\u8BFB\u91CF"})]),_:1},8,["data"])])]),_:1})])])}var Dt=y(Ge,[["render",Ct],["__scopeId","data-v-2a8ab6c1"]]);const Bt=g({components:{},props:{route:{type:Object,default:()=>({})}},setup(e){return{hasChildren:w(()=>{var n;return!!((n=e.route.children)!=null?n:[]).filter(r=>{var a;return!((a=r.meta)!=null&&a.hidden)}).length})}}});function xt(e,t,o,n,r,a){const s=d("el-sub-menu"),p=d("el-menu-item");return e.route.meta.hidden?F("",!0):(c(),h(D,{key:0},[e.hasChildren?(c(),E(s,{key:0,index:e.route.path},{title:l(()=>[i("i",{class:K(["iconfont m-r-10",e.route.meta.icon])},null,2),i("span",null,m(e.route.meta.title),1)]),default:l(()=>[pe(e.$slots,"default")]),_:3},8,["index"])):(c(),E(p,{key:1,index:e.route.path},{default:l(()=>[i("i",{class:K(["iconfont m-r-10",e.route.meta.icon])},null,2),i("span",null,m(e.route.meta.title),1)]),_:1},8,["index"]))],64))}var Pt=y(Bt,[["render",xt]]);const It=g({components:{SubMenu:Pt},setup(){const{store:e,route:t}=I(),o=w(()=>e.state.permission.sidebar),n=w(()=>{var a,s;return(s=(a=t.meta)==null?void 0:a.parent)!=null?s:t.path});return{config:w(()=>e.getters.config),sidebar:o,currentPath:n}}}),St={class:"layout-aside"},Ot=["src"],Lt={class:"line-1"},Rt={class:"scrollbar-wrap"};function Tt(e,t,o,n,r,a){const s=d("router-link"),p=d("sub-menu"),v=d("el-menu"),C=d("el-scrollbar");return c(),h("div",St,[u(s,{to:"/workbench",class:"logo flex col-center"},{default:l(()=>[i("img",{class:"logo-img",src:e.config.web_logo,alt:""},null,8,Ot),i("div",Lt,m(e.config.web_name),1)]),_:1}),i("div",Rt,[u(C,{style:{height:"100%"},class:"ls-scrollbar"},{default:l(()=>[u(v,{"active-text-color":"#fff","background-color":"#2a2c41","default-active":e.currentPath,"text-color":"#E5E5E5",router:""},{default:l(()=>[(c(!0),h(D,null,L(e.sidebar,($,B)=>(c(),E(p,{key:B,route:$},{default:l(()=>[(c(!0),h(D,null,L($==null?void 0:$.children,(f,se)=>(c(),E(p,{key:se,route:f},{default:l(()=>[(c(!0),h(D,null,L(f==null?void 0:f.children,(re,ie)=>(c(),E(p,{key:ie,route:re},null,8,["route"]))),128))]),_:2},1032,["route"]))),128))]),_:2},1032,["route"]))),128))]),_:1},8,["default-active"])]),_:1})])])}var Nt=y(It,[["render",Tt],["__scopeId","data-v-02f335bc"]]),Vt="/admin/assets/no_perm.c6e79b52.png";const jt=g({components:{},props:{},setup(e){const{store:t,route:o}=I(),n=w(()=>t.getters.permission),r=w(()=>t.getters.isAdmin),a=w(()=>{const{path:s,meta:p}=o;if(r.value)return!0;const v=n.value[s];return console.log(n.value,s),!v||!(p!=null&&p.permission)?!0:v.some(C=>(p==null?void 0:p.permission).includes(C))});return{permission:n,hasPermission:a}}}),ee=e=>(X("data-v-1be4645a"),e=e(),Y(),e),Mt={key:0,class:"perm"},Ut={key:1,class:"no-perm flex flex-col flex-center"},qt=ee(()=>i("img",{src:Vt},null,-1)),zt=ee(()=>i("div",{class:"muted"},"\u6682\u65E0\u67E5\u770B\u6743\u9650",-1)),Kt=[qt,zt];function Wt(e,t,o,n,r,a){const s=d("router-view");return e.permission?(c(),h("div",Mt,[e.hasPermission?(c(),E(s,{key:0})):(c(),h("div",Ut,Kt))])):F("",!0)}var Ht=y(jt,[["render",Wt],["__scopeId","data-v-1be4645a"]]);const Gt=g({components:{Perm:Ht}}),Jt={class:"layout-main"},Qt={class:"p-15"};function Xt(e,t,o,n,r,a){const s=d("perm"),p=d("el-scrollbar");return c(),h("div",Jt,[u(p,null,{default:l(()=>[i("div",Qt,[u(s)])]),_:1})])}var Yt=y(Gt,[["render",Xt],["__scopeId","data-v-3e7655a7"]]);const Zt=g({setup(){const{store:e,router:t}=I();return{userInfo:w(()=>e.getters.userInfo),handleCommand:r=>{switch(r){case"logout":e.dispatch("user/logout").then(()=>{t.push("/login"),e.commit("permission/setPermission",{auth:null,root:0})})}}}}}),eo={class:"layout-header"},to={class:"admin-info flex flex-center m-l-40"},oo={class:"m-l-10"},no={class:"flex flex-center"},so=j("\u9000\u51FA\u767B\u5F55");function ro(e,t,o,n,r,a){const s=d("el-avatar"),p=d("arrow-down"),v=d("el-icon"),C=d("el-dropdown-item"),$=d("el-dropdown-menu"),B=d("el-dropdown");return c(),h("div",eo,[i("div",to,[u(s,{size:40,src:e.userInfo.avatar},null,8,["src"]),i("div",oo,[u(B,{trigger:"hover",onCommand:e.handleCommand},{dropdown:l(()=>[u($,null,{default:l(()=>[u(C,{command:"logout"},{default:l(()=>[so]),_:1})]),_:1})]),default:l(()=>[i("div",no,[j(m(e.userInfo.name)+" ",1),u(v,{class:"el-icon--right"},{default:l(()=>[u(p)]),_:1})])]),_:1},8,["onCommand"])])])])}var io=y(Zt,[["render",ro],["__scopeId","data-v-e8692272"]]);const ao=g({components:{LayoutAside:Nt,LayoutMain:Yt,LayoutHeader:io}}),co={class:"layout"},uo={class:"aside"},lo={class:"main"};function _o(e,t,o,n,r,a){const s=d("layout-aside"),p=d("layout-header"),v=d("layout-main");return c(),h("div",co,[i("div",uo,[u(s)]),i("div",lo,[u(p),u(v)])])}var po=y(ao,[["render",_o]]);const mo=g({props:{code:Number,title:String},setup(){let e=null;const t=Z(5),{router:o}=I();return e=setInterval(()=>{t.value===0?(clearInterval(e),o.go(-1)):t.value--},1e3),me(()=>{clearInterval(e)}),{second:t}}}),ho={class:"error"},fo={class:"error-code"},vo={class:"lg lighter m-t-30 m-b-30"};function go(e,t,o,n,r,a){const s=d("el-button");return c(),h("div",ho,[i("div",null,[i("div",fo,m(e.code),1),i("div",vo,m(e.title),1),u(s,{type:"primary",size:"small",onClick:t[0]||(t[0]=p=>e.$router.go(-1))},{default:l(()=>[j(m(e.second)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})])])}var te=y(mo,[["render",go],["__scopeId","data-v-8a4a4484"]]);const yo=g({components:{Error:te},setup(){}}),$o={class:"error404"};function bo(e,t,o,n,r,a){const s=d("error");return c(),h("div",$o,[u(s,{code:404,title:"\u54CE\u5440\uFF0C\u51FA\u9519\u4E86\uFF01\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u2026"})])}var wo=y(yo,[["render",bo]]);const Eo=g({components:{Error:te},setup(){}}),Fo={class:"error500"};function ko(e,t,o,n,r,a){const s=d("error");return c(),h("div",Fo,[u(s,{code:500,title:"\u54CE\u5440\uFF0C\u51FA\u9519\u4E86\uFF01\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u2026"})])}var Ao=y(Eo,[["render",ko]]);const Co={path:"/setting",redirect:"/setting",component:R,meta:{title:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:"icon-setting"},children:[{path:"/setting/website",redirect:"/setting/website/information",component:R,meta:{title:"\u7F51\u7AD9\u8BBE\u7F6E"},children:[{path:"/setting/website/information",component:()=>k(()=>import("./information.b1db0d2a.js"),["assets/information.b1db0d2a.js","assets/index.10a1cf58.js","assets/index.0d4d735c.css","assets/vendor.d820f56e.js","assets/index.f6905679.js","assets/index.73a4b90c.css","assets/index.cdc554a9.js","assets/index.87a602e0.css","assets/setting.ed3757a9.js"]),meta:{title:"\u7F51\u7AD9\u4FE1\u606F",permission:["view"]}},{path:"/setting/website/filing",component:()=>k(()=>import("./filing.818ce8d1.js"),["assets/filing.818ce8d1.js","assets/setting.ed3757a9.js","assets/index.cdc554a9.js","assets/index.87a602e0.css","assets/vendor.d820f56e.js"]),meta:{title:"\u5907\u6848\u4FE1\u606F",permission:["view"]}}]},{path:"/setting/system",redirect:"/setting/system/environment",component:R,meta:{title:"\u7CFB\u7EDF\u7EF4\u62A4"},children:[{path:"/setting/website/environment",component:()=>k(()=>import("./environment.6da3a7d7.js"),["assets/environment.6da3a7d7.js","assets/vendor.d820f56e.js","assets/setting.ed3757a9.js"]),meta:{title:"\u7CFB\u7EDF\u73AF\u5883",permission:["view"]}}]}]},Do={path:"/permission",redirect:"/permission/admin",component:R,meta:{title:"\u6743\u9650\u7BA1\u7406",icon:"icon-quanxian"},children:[{path:"/permission/admin",component:()=>k(()=>import("./index.ab0e9bdb.js"),["assets/index.ab0e9bdb.js","assets/index.09dc78fe.css","assets/index.f6905679.js","assets/index.73a4b90c.css","assets/vendor.d820f56e.js"]),meta:{title:"\u7BA1\u7406\u5458",permission:["view"]}},{path:"/permission/admin/edit",component:()=>k(()=>import("./edit.56e619a4.js"),["assets/edit.56e619a4.js","assets/index.10a1cf58.js","assets/index.0d4d735c.css","assets/vendor.d820f56e.js","assets/index.f6905679.js","assets/index.73a4b90c.css","assets/index.cdc554a9.js","assets/index.87a602e0.css"]),meta:{title:"\u7BA1\u7406\u5458",parent:"/permission/admin",hidden:!0}},{path:"/permission/role",component:()=>k(()=>import("./index.b8d485b4.js"),["assets/index.b8d485b4.js","assets/index.f6905679.js","assets/index.73a4b90c.css","assets/vendor.d820f56e.js"]),meta:{title:"\u89D2\u8272",permission:["view"]}},{path:"/permission/role/edit",component:()=>k(()=>import("./edit.44f7d9b3.js"),["assets/edit.44f7d9b3.js","assets/edit.155ac0f5.css","assets/index.cdc554a9.js","assets/index.87a602e0.css","assets/vendor.d820f56e.js"]),meta:{title:"\u89D2\u8272",parent:"/permission/role",hidden:!0}}]},oe=[{path:"/",redirect:"workbench",component:po,children:[{path:"/workbench",component:Dt,meta:{title:"\u5DE5\u4F5C\u53F0",icon:"icon-home",permission:["view"]}},Do,Co]}],Bo=[{path:"/login",component:()=>k(()=>import("./login.940d0c7b.js"),["assets/login.940d0c7b.js","assets/login.d7200980.css","assets/vendor.d820f56e.js"])},{path:"/error/500",component:Ao},{path:"/:pathMatch(.*)*",name:"404",component:wo}],V=he({history:fe("/admin/"),routes:[...oe,...Bo]}),T={key:"like_admin_",set(e,t,o){e=this.getKey(e);let n={expire:o?this.time()+o:"",value:t};typeof n=="object"&&(n=JSON.stringify(n));try{window.localStorage.setItem(e,n)}catch{return!1}},get(e){e=this.getKey(e);try{const t=window.localStorage.getItem(e);if(!t)return!1;const{value:o,expire:n}=JSON.parse(t);return n&&n<this.time()?(window.localStorage.removeItem(e),!1):o}catch{return!1}},time(){return Math.round(new Date().getTime()/1e3)},remove(e){e=this.getKey(e),window.localStorage.removeItem(e)},getKey(e){return this.key+e}},N="token",un="account",O={success:({show:e,msg:t,data:o})=>(e*1&&P({type:"success",message:t}),o),error:({show:e,msg:t})=>(e*1&&P({type:"error",message:t}),Promise.reject(t)),redirect:qe(()=>(b.commit("user/setToken",""),b.commit("user/setUser",{}),T.remove(N),V.push("/login"),Promise.reject())),page:({data:e})=>(window.location.href=e.url,e)},_=ve.create({baseURL:"/adminapi",timeout:60*1e3,headers:{"Content-Type":"application/json",version:Ue}});_.interceptors.request.use(e=>{const t=b.getters.token;return e.headers&&(e.headers.token=t),e},e=>Promise.reject(e));_.interceptors.response.use(e=>{switch(e.data.code){case 1:return O.success(e.data);case 0:return O.error(e.data);case-1:return O.redirect();case 2:return O.page(e.data)}},e=>(console.log(e),P({type:"error",message:e}),Promise.reject(e)));function ln(e){return _.post("/file/addCate",e)}function dn(e){return _.post("/file/editCate",e)}function _n(e){return _.post("/file/delCate",e)}function pn(e){return _.get("/file/listCate",{params:e})}function mn(e){return _.get("/file/lists",{params:e})}function hn(e){return _.post("/file/delete",e)}function fn(e){return _.post("/file/move",e)}function xo(){return _.get("/config/getConfig")}const Po={namespaced:!0,state:{config:{}},mutations:{setConfig(e,t){e.config=t}},actions:{getConfig({commit:e}){return new Promise((t,o)=>{xo().then(n=>{e("setConfig",n),t(n)})})}}};function vn(e){return _.get("/auth.admin/lists",{params:e})}function gn(e){return _.post("/auth.admin/add",e)}function yn(e){return _.post("/auth.admin/edit",e)}function $n(e){return _.post("/auth.admin/delete",e)}function bn(e){return _.get("/auth.admin/detail",{params:e})}function wn(e){return _.get("/auth.role/lists",{params:e})}function En(e){return _.post("/auth.role/add",x({},e))}function Fn(e){return _.post("/auth.role/edit",x({},e))}function kn(e){return _.post("/auth.role/delete",x({},e))}function An(e){return _.get("/auth.role/detail",{params:e})}function Cn(){return _.get("/config/getMenu")}function Io(){return _.get("/config/getAuth")}const So={namespaced:!0,state:{sidebar:[],permission:null,isAdmin:0},getters:{},mutations:{setSidebar(e,t){e.sidebar=t},setPermission(e,t){e.permission=t.auth,e.isAdmin=t.root}},actions:{getPermission({commit:e}){return new Promise((t,o)=>{Io().then(n=>{e("setPermission",n),t(n)}).catch(n=>{o(n)})})}}};function Oo(e){return _.post("/login/account",z(x({},e),{terminal:Me}))}function Lo(){return _.post("/login/logout")}function Ro(){return _.get("/auth.admin/mySelf")}const To={namespaced:!0,state:{token:T.get(N)||"",user:{}},mutations:{setToken(e,t){e.token=t,T.set(N,t)},setUser(e,t){e.user=t}},actions:{login({commit:e},t){const{account:o,password:n}=t;return new Promise((r,a)=>{Oo({account:o.trim(),password:n}).then(s=>{e("setToken",s.token),r(s)}).catch(s=>{a(s)})})},logout({commit:e}){return new Promise((t,o)=>{Lo().then(n=>{e("setToken",""),e("setUser",{}),T.remove(N),t(n)}).catch(n=>{o(n)})})},getUser({commit:e}){return new Promise((t,o)=>{Ro().then(n=>{e("setUser",n),t(n)}).catch(n=>{o(n)})})}}};var No={app:Po,permission:So,user:To};const Vo=ge({modules:No,getters:je}),ne=Symbol("vue-store");function jo(){return ye(ne)}var b=Vo;function I(){const e=jo(),t=$e(),o=be();return{store:e,route:t,router:o}}const Mo=g({setup(){const{store:e,route:t}=I(),o=Z(!0),n=w(()=>t.meta.keepAlive);return we("reload",()=>{o.value=!1,Fe(()=>{o.value=!0})}),Q(async()=>{const a=await e.dispatch("app/getConfig");let s=document.querySelector('link[rel="icon"]');if(s){s.href=a.web_favicon;return}s=document.createElement("link"),s.rel="icon",s.href=a.web_favicon,document.head.appendChild(s)}),{routerAlive:o,keepAlive:n}}});function Uo(e,t,o,n,r,a){const s=d("router-view");return c(),h(D,null,[(c(),E(Ee,null,[e.keepAlive&&e.routerAlive?(c(),E(s,{key:0})):F("",!0)],1024)),!e.keepAlive&&e.routerAlive?(c(),E(s,{key:0})):F("",!0)],64)}var qo=y(Mo,[["render",Uo]]);M.configure({showSpinner:!1});const G="/login",zo="/",Ko=["/login"];V.beforeEach(async(e,t,o)=>{var r;M.start(),(r=e.meta)!=null&&r.title&&(document.title=e.meta.title),b.getters.token?(b.getters.permission==null&&(b.commit("permission/setSidebar",oe[0].children),await b.dispatch("user/getUser"),await b.dispatch("permission/getPermission")),e.path===G?o({path:zo}):o()):Ko.includes(e.path)?o():o({path:G,query:{redirect:e.fullPath}})});V.afterEach(async(e,t)=>{M.done()});var Wo=e=>{e.use(ke,{zIndex:3e3,locale:Ae}),Object.keys(W).forEach(t=>{e.component(t,W[t])})};Ce([Be,xe,Pe,Ie,Se,Oe,Le,Re]);var Ho=e=>{e.component("VChart",De)};const Go="#4a5dff",Jo="#67c23a",Qo="#fb9400",Xo="#f56c6c",Yo="#909399",Zo="#333333",en="#666666",tn="#999999";var on={color_primary:Go,color_success:Jo,color_warning:Qo,color_danger:Xo,color_ingo:Yo,font_color_primary:Zo,font_color_regular:en,font_color_secondary:tn};(function(){const t=new Te(".copy-btn");t.on("success",o=>{P.success("\u590D\u5236\u6210\u529F"),o.clearSelection()}),t.on("error",o=>{console.error(o),P.success("\u590D\u5236\u5931\u8D25")})})();var nn={mounted:(e,t)=>{e.className=e.className+" copy-btn",e.setAttribute("data-clipboard-text",t.value)},updated:(e,t)=>{e.setAttribute("data-clipboard-text",t.value)}},sn=Object.freeze(Object.defineProperty({__proto__:null,default:nn},Symbol.toStringTag,{value:"Module"}));const J={"./modules/copy.ts":sn};var rn=e=>{Object.keys(J).forEach(t=>{const o=t.replace(/^\.\/(.*)\.\w+$/,"$1");e.directive(o,J[t].default)})};const S=Ne(qo);S.config.globalProperties.$variables=on;Wo(S);Ho(S);rn(S);S.use(V).use(b,ne).mount("#app");export{un as A,y as _,ln as a,dn as b,T as c,_n as d,pn as e,hn as f,fn as g,mn as h,jo as i,vn as j,yn as k,$n as l,wn as m,bn as n,gn as o,kn as p,Cn as q,_ as r,ze as s,En as t,I as u,Ue as v,Fn as w,An as x};