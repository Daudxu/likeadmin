var ae=Object.defineProperty,ue=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var q=(e,t,o)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,P=(e,t)=>{for(var o in t||(t={}))le.call(t,o)&&q(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&q(e,o,t[o]);return e},z=(e,t)=>ue(e,ce(t));import{d as E,r as _e,o as Q,a as d,b as l,c as f,e as i,f as u,w as c,t as h,F as C,g as S,h as k,p as X,i as Y,j as b,k as F,n as K,l as pe,m as N,q as Z,s as me,R as D,u as he,v as fe,E as I,x as ve,y as ge,z as Ee,A as ye,B as $e,C as we,K as be,D as Fe,N as M,G as Ae,H as ke,I as W,J as Be,U as De,L as Ce,M as xe,O as Pe,P as Ie,Q as Le,S as Oe,T as Re,V as Se,W as Te,X as Ve}from"./vendor.fcdc1dfd.js";const Ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};Ne();const je={token:e=>e.user.token,userInfo:e=>e.user.user,config:e=>e.app.config,permission:e=>e.permission.permission,isAdmin:e=>e.permission.isAdmin},Me=1,Ue="1.0.0";function qe(e,t=1e3,o){let n=new Date(0).getTime();return function(...r){const a=new Date().getTime();if(a-n>t)return n=a,e.apply(o,r)}}function ze(e=[],t=[],o="children"){return e.forEach(n=>{const r=n[o];r?ze(r,t,o):t.push(n)}),t}const Ke="modulepreload",H={},We="/admin/",v=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${We}${n}`,n in H)return;H[n]=!0;const r=n.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Ke,r||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),r)return new Promise((p,g)=>{s.addEventListener("load",p),s.addEventListener("error",g)})})).then(()=>t())};function He(){return _.get("/Workbench/index")}var y=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o};const Ge=E({setup(){const e=_e({version:{version:"",website:""},today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[0],type:"line"}]}}),t=()=>{He().then(o=>{console.log("res",o),e.version=o.version,e.today=o.today,e.menu=o.menu,e.visitor=o.visitor,e.article=o.article,e.visitorOption.xAxis.data=[],e.visitorOption.series[0].data=[],o.visitor.date.reverse().forEach(n=>{e.visitorOption.xAxis.data.push(n)}),o.visitor.list[0].data.forEach(n=>{e.visitorOption.series[0].data.push(n)})}).catch(o=>{console.log("err",o)})};return Q(()=>{t()}),{workbenchData:e,getWorkbench:t}}}),B=e=>(X("data-v-1d481657"),e=e(),Y(),e),Je={class:"workbench"},Qe={class:"flex workbench-header"},Xe=B(()=>i("span",{class:"card-title"},"\u8D26\u53F7\u4FE1\u606F",-1)),Ye={class:"m-b-20"},Ze=B(()=>i("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1)),et={class:"muted xs m-l-15"},tt={class:"flex"},ot={class:"flex-1"},nt=B(()=>i("div",{class:"lighter m-b-10"},"\u8BBF\u95EE\u91CF",-1)),st={class:"f-s-32 m-b-10"},rt={class:"lighter"},it={class:"flex-1"},at=B(()=>i("div",{class:"lighter m-b-10"},"\u9500\u552E\u989D",-1)),ut={class:"f-s-32 m-b-10"},ct={class:"lighter"},lt={class:"flex-1"},dt=B(()=>i("div",{class:"lighter m-b-10"},"\u65B0\u589E\u7528\u6237",-1)),_t={class:"f-s-32 m-b-10"},pt={class:"lighter"},mt={class:"m-t-15 function"},ht=B(()=>i("span",{class:"card-title"},"\u5E38\u7528\u529F\u80FD",-1)),ft={class:"nav-lists"},vt={class:"flex flex-center"},gt={class:"m-t-8 normal text-center"},Et={class:"flex m-t-15 ranking"},yt=B(()=>i("span",{class:"card-title"},"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1)),$t={class:"ranking-centent"},wt=B(()=>i("div",null,[i("span",{class:"card-title"},"\u6587\u7AE0\u9605\u8BFB\u91CF\u6392\u540D")],-1)),bt={class:"ranking-centent"},Ft={key:0,class:"icon",style:{background:"#f86056",color:"#fff"}},At={key:1,class:"icon",style:{background:"#fc8d2e",color:"#fff"}},kt={key:2,class:"icon",style:{background:"#fcbc2e",color:"#fff"}},Bt={key:3,class:"icon"};function Dt(e,t,o,n,r,a){const s=d("el-card"),p=d("el-image"),g=d("router-link"),A=d("v-chart"),$=d("el-table-column"),x=d("el-table");return l(),f("div",Je,[i("div",Qe,[u(s,{class:"flex-1",shadow:"never"},{header:c(()=>[Xe]),default:c(()=>[i("div",null,[i("div",Ye,"\u7248\u672C\u53F7\uFF1A"+h(e.workbenchData.version.version),1),i("div",null,"\u5B98\u7F51\u540D\u79F0\uFF1A"+h(e.workbenchData.version.name),1)])]),_:1}),u(s,{class:"flex-3 m-l-15",shadow:"never"},{header:c(()=>[i("div",null,[Ze,i("span",et,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+h(e.workbenchData.today.time),1)])]),default:c(()=>[i("div",tt,[i("div",ot,[nt,i("div",st,h(e.workbenchData.today.today_visitor),1),i("div",rt,"\u603B\u8BBF\u95EE\u91CF\uFF1A"+h(e.workbenchData.today.total_visitor),1)]),i("div",it,[at,i("div",ut,h(e.workbenchData.today.today_sales),1),i("div",ct,"\u603B\u9500\u552E\u989D\uFF1A"+h(e.workbenchData.today.total_sales),1)]),i("div",lt,[dt,i("div",_t,h(e.workbenchData.today.today_new_user),1),i("div",pt," \u603B\u8BBF\u7528\u6237\uFF1A"+h(e.workbenchData.today.total_new_user),1)])])]),_:1})]),i("div",mt,[u(s,{class:"flex-1",shadow:"never"},{header:c(()=>[ht]),default:c(()=>[i("div",ft,[(l(!0),f(C,null,S(e.workbenchData.menu,m=>(l(),f("div",{key:m,class:"nav-item flex-col m-t-10"},[u(g,{to:m.url},{default:c(()=>[i("view",vt,[u(p,{style:{width:"48px",height:"48px"},src:m==null?void 0:m.image},null,8,["src"])]),i("div",gt,h(m.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),i("div",Et,[u(s,{class:"flex-1",shadow:"never"},{header:c(()=>[yt]),default:c(()=>[i("div",$t,[u(A,{class:"chart",option:e.workbenchData.visitorOption},null,8,["option"])])]),_:1}),u(s,{class:"flex-1 m-l-15",shadow:"never"},{header:c(()=>[wt]),default:c(()=>[i("div",bt,[u(x,{data:e.workbenchData.article,size:"medium"},{default:c(()=>[u($,{label:"\u6392\u540D","min-width":"70",type:"index"},{default:c(m=>[m.$index==0?(l(),f("div",Ft,h(m.$index+1),1)):k("",!0),m.$index==1?(l(),f("div",At,h(m.$index+1),1)):k("",!0),m.$index==2?(l(),f("div",kt,h(m.$index+1),1)):k("",!0),m.$index>2?(l(),f("div",Bt,h(m.$index+1),1)):k("",!0)]),_:1}),u($,{prop:"name",label:"\u6587\u7AE0\u540D\u79F0"}),u($,{prop:"read",label:"\u9605\u8BFB\u91CF"})]),_:1},8,["data"])])]),_:1})])])}var Ct=y(Ge,[["render",Dt],["__scopeId","data-v-1d481657"]]);const xt=E({components:{},props:{route:{type:Object,default:()=>({})}},setup(e){return{hasChildren:b(()=>{var n;return!!((n=e.route.children)!=null?n:[]).filter(r=>{var a;return!((a=r.meta)==null?void 0:a.hidden)}).length})}}});function Pt(e,t,o,n,r,a){const s=d("el-sub-menu"),p=d("el-menu-item");return e.route.meta.hidden?k("",!0):(l(),f(C,{key:0},[e.hasChildren?(l(),F(s,{key:0,index:e.route.path},{title:c(()=>[i("i",{class:K(["iconfont m-r-10",e.route.meta.icon])},null,2),i("span",null,h(e.route.meta.title),1)]),default:c(()=>[pe(e.$slots,"default")]),_:3},8,["index"])):(l(),F(p,{key:1,index:e.route.path},{default:c(()=>[i("i",{class:K(["iconfont m-r-10",e.route.meta.icon])},null,2),i("span",null,h(e.route.meta.title),1)]),_:1},8,["index"]))],64))}var It=y(xt,[["render",Pt]]);const Lt=E({components:{SubMenu:It},setup(){const{store:e,route:t}=L(),o=b(()=>e.state.permission.sidebar),n=b(()=>{var a,s;return(s=(a=t.meta)==null?void 0:a.parent)!=null?s:t.path});return{config:b(()=>e.getters.config),sidebar:o,currentPath:n}}}),Ot={class:"layout-aside"},Rt=["src"],St={class:"line-1"},Tt={class:"scrollbar-wrap"};function Vt(e,t,o,n,r,a){const s=d("router-link"),p=d("sub-menu"),g=d("el-menu"),A=d("el-scrollbar");return l(),f("div",Ot,[u(s,{to:"/workbench",class:"logo flex col-center"},{default:c(()=>[i("img",{class:"logo-img",src:e.config.web_logo,alt:""},null,8,Rt),i("div",St,h(e.config.web_name),1)]),_:1}),i("div",Tt,[u(A,{style:{height:"100%"},class:"ls-scrollbar"},{default:c(()=>[u(g,{"active-text-color":"#fff","background-color":"#2a2c41","default-active":e.currentPath,"text-color":"#E5E5E5",router:""},{default:c(()=>[(l(!0),f(C,null,S(e.sidebar,($,x)=>(l(),F(p,{key:x,route:$},{default:c(()=>[(l(!0),f(C,null,S($==null?void 0:$.children,(m,se)=>(l(),F(p,{key:se,route:m},{default:c(()=>[(l(!0),f(C,null,S(m==null?void 0:m.children,(re,ie)=>(l(),F(p,{key:ie,route:re},null,8,["route"]))),128))]),_:2},1032,["route"]))),128))]),_:2},1032,["route"]))),128))]),_:1},8,["default-active"])]),_:1})])])}var Nt=y(Lt,[["render",Vt],["__scopeId","data-v-02f335bc"]]),jt="/admin/assets/no_perm.c6e79b52.png";const Mt=E({components:{},props:{},setup(e){const{store:t,route:o}=L(),n=b(()=>t.getters.permission),r=b(()=>t.getters.isAdmin),a=b(()=>{const{path:s,meta:p}=o;if(r.value)return!0;const g=n.value[s];return console.log(n.value,s),!g||!(p==null?void 0:p.permission)?!0:g.some(A=>(p==null?void 0:p.permission).includes(A))});return{permission:n,hasPermission:a}}}),ee=e=>(X("data-v-1be4645a"),e=e(),Y(),e),Ut={key:0,class:"perm"},qt={key:1,class:"no-perm flex flex-col flex-center"},zt=ee(()=>i("img",{src:jt},null,-1)),Kt=ee(()=>i("div",{class:"muted"},"\u6682\u65E0\u67E5\u770B\u6743\u9650",-1)),Wt=[zt,Kt];function Ht(e,t,o,n,r,a){const s=d("router-view");return e.permission?(l(),f("div",Ut,[e.hasPermission?(l(),F(s,{key:0})):(l(),f("div",qt,Wt))])):k("",!0)}var Gt=y(Mt,[["render",Ht],["__scopeId","data-v-1be4645a"]]);const Jt=E({components:{Perm:Gt}}),Qt={class:"layout-main"},Xt={class:"p-15"};function Yt(e,t,o,n,r,a){const s=d("perm"),p=d("el-scrollbar");return l(),f("div",Qt,[u(p,null,{default:c(()=>[i("div",Xt,[u(s)])]),_:1})])}var Zt=y(Jt,[["render",Yt],["__scopeId","data-v-3e7655a7"]]);const eo=E({setup(){const{store:e,router:t}=L();return{userInfo:b(()=>e.getters.userInfo),handleCommand:r=>{switch(r){case"logout":e.dispatch("user/logout").then(()=>{t.push("/login"),e.commit("permission/setPermission",{auth:null,root:0})})}}}}}),to={class:"layout-header"},oo={class:"admin-info flex flex-center m-l-40"},no={class:"m-l-10"},so={class:"flex flex-center"},ro=N("\u4E2A\u4EBA\u8BBE\u7F6E"),io=N("\u9000\u51FA\u767B\u5F55");function ao(e,t,o,n,r,a){const s=d("el-avatar"),p=d("arrow-down"),g=d("el-icon"),A=d("el-dropdown-item"),$=d("router-link"),x=d("el-dropdown-menu"),m=d("el-dropdown");return l(),f("div",to,[i("div",oo,[u(s,{size:40,src:e.userInfo.avatar},null,8,["src"]),i("div",no,[u(m,{trigger:"hover",onCommand:e.handleCommand},{dropdown:c(()=>[u(x,null,{default:c(()=>[u($,{to:"/setting/personal/personal_data"},{default:c(()=>[u(A,null,{default:c(()=>[ro]),_:1})]),_:1}),u(A,{command:"logout"},{default:c(()=>[io]),_:1})]),_:1})]),default:c(()=>[i("div",so,[N(h(e.userInfo.name)+" ",1),u(g,{class:"el-icon--right"},{default:c(()=>[u(p)]),_:1})])]),_:1},8,["onCommand"])])])])}var uo=y(eo,[["render",ao],["__scopeId","data-v-a65139b2"]]);const co=E({components:{LayoutAside:Nt,LayoutMain:Zt,LayoutHeader:uo}}),lo={class:"layout"},_o={class:"aside"},po={class:"main"};function mo(e,t,o,n,r,a){const s=d("layout-aside"),p=d("layout-header"),g=d("layout-main");return l(),f("div",lo,[i("div",_o,[u(s)]),i("div",po,[u(p),u(g)])])}var ho=y(co,[["render",mo]]);const fo=E({props:{code:Number,title:String},setup(){let e=null;const t=Z(5),{router:o}=L();return e=setInterval(()=>{t.value===0?(clearInterval(e),o.go(-1)):t.value--},1e3),me(()=>{clearInterval(e)}),{second:t}}}),vo={class:"error"},go={class:"error-code"},Eo={class:"lg lighter m-t-30 m-b-30"};function yo(e,t,o,n,r,a){const s=d("el-button");return l(),f("div",vo,[i("div",null,[i("div",go,h(e.code),1),i("div",Eo,h(e.title),1),u(s,{type:"primary",size:"small",onClick:t[0]||(t[0]=p=>e.$router.go(-1))},{default:c(()=>[N(h(e.second)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})])])}var te=y(fo,[["render",yo],["__scopeId","data-v-8a4a4484"]]);const $o=E({components:{Error:te},setup(){}}),wo={class:"error404"};function bo(e,t,o,n,r,a){const s=d("error");return l(),f("div",wo,[u(s,{code:404,title:"\u54CE\u5440\uFF0C\u51FA\u9519\u4E86\uFF01\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u2026"})])}var Fo=y($o,[["render",bo]]);const Ao=E({components:{Error:te},setup(){}}),ko={class:"error500"};function Bo(e,t,o,n,r,a){const s=d("error");return l(),f("div",ko,[u(s,{code:500,title:"\u54CE\u5440\uFF0C\u51FA\u9519\u4E86\uFF01\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u2026"})])}var Do=y(Ao,[["render",Bo]]);const Co={path:"/setting",redirect:"/setting/service",component:D,meta:{title:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:"icon-setting"},children:[{path:"/setting/service",redirect:"/setting/service/online_service",component:D,meta:{title:"\u5BA2\u670D\u8BBE\u7F6E",hidden:!0},children:[{path:"/setting/service/online_service",component:()=>v(()=>import("./online_service.c6c6d5b5.js"),["assets/online_service.c6c6d5b5.js","assets/online_service.7224dad7.css","assets/index.f6dd0e9d.js","assets/index.4c20d851.css","assets/vendor.fcdc1dfd.js","assets/index.700e7071.js","assets/index.2eb40577.css","assets/index.f3a5499d.js","assets/index.104ca5ab.css","assets/index.9b142dae.js","assets/index.87a602e0.css","assets/setting.767f2c26.js"]),meta:{title:"\u5728\u7EBF\u5BA2\u670D"}}]},{path:"/setting/website",redirect:"/setting/website/information",component:D,meta:{title:"\u7F51\u7AD9\u8BBE\u7F6E"},children:[{path:"/setting/website/information",component:()=>v(()=>import("./information.e86eafc3.js"),["assets/information.e86eafc3.js","assets/index.f6dd0e9d.js","assets/index.4c20d851.css","assets/vendor.fcdc1dfd.js","assets/index.700e7071.js","assets/index.2eb40577.css","assets/index.f3a5499d.js","assets/index.104ca5ab.css","assets/index.9b142dae.js","assets/index.87a602e0.css","assets/setting.767f2c26.js"]),meta:{title:"\u7F51\u7AD9\u4FE1\u606F",permission:["view"]}},{path:"/setting/website/filing",component:()=>v(()=>import("./filing.35cdd52b.js"),["assets/filing.35cdd52b.js","assets/setting.767f2c26.js","assets/index.9b142dae.js","assets/index.87a602e0.css","assets/vendor.fcdc1dfd.js"]),meta:{title:"\u5907\u6848\u4FE1\u606F",permission:["view"]}},{path:"/setting/website/protocol",component:()=>v(()=>import("./protocol.7eea4edd.js"),["assets/protocol.7eea4edd.js","assets/protocol.267a7477.css","assets/setting.767f2c26.js","assets/vendor.fcdc1dfd.js","assets/index.f6dd0e9d.js","assets/index.4c20d851.css","assets/index.700e7071.js","assets/index.2eb40577.css","assets/index.f3a5499d.js","assets/index.104ca5ab.css","assets/index.9b142dae.js","assets/index.87a602e0.css"]),meta:{title:"\u653F\u7B56/\u534F\u8BAE",permission:["view"],hidden:!0}}]},{path:"/setting/user",redirect:"/setting/user",component:D,meta:{title:"\u7528\u6237\u8BBE\u7F6E",hidden:!0},children:[{path:"/setting/user",component:()=>v(()=>import("./index.e40862bb.js"),["assets/index.e40862bb.js","assets/setting.767f2c26.js","assets/index.f6dd0e9d.js","assets/index.4c20d851.css","assets/vendor.fcdc1dfd.js","assets/index.700e7071.js","assets/index.2eb40577.css","assets/index.f3a5499d.js","assets/index.104ca5ab.css","assets/index.9b142dae.js","assets/index.87a602e0.css"]),meta:{title:"\u7528\u6237\u8BBE\u7F6E",permission:["view"]}},{path:"/setting/user/login",component:()=>v(()=>import("./login.bfe7448e.js"),["assets/login.bfe7448e.js","assets/login.c93f0173.css","assets/setting.767f2c26.js","assets/index.9b142dae.js","assets/index.87a602e0.css","assets/vendor.fcdc1dfd.js"]),meta:{title:"\u767B\u5F55\u6CE8\u518C",permission:["view"]}}]},{path:"/setting/system",redirect:"/setting/system/environment",component:D,meta:{title:"\u7CFB\u7EDF\u7EF4\u62A4"},children:[{path:"/setting/website/environment",component:()=>v(()=>import("./environment.e224c32d.js"),["assets/environment.e224c32d.js","assets/vendor.fcdc1dfd.js","assets/setting.767f2c26.js"]),meta:{title:"\u7CFB\u7EDF\u73AF\u5883",permission:["view"]}},{path:"/setting/website/journal",component:()=>v(()=>import("./journal.efe11310.js"),["assets/journal.efe11310.js","assets/setting.767f2c26.js","assets/index.f3a5499d.js","assets/index.104ca5ab.css","assets/vendor.fcdc1dfd.js"]),meta:{title:"\u7CFB\u7EDF\u65E5\u5FD7",permission:["view"]}},{path:"/setting/website/cache",component:()=>v(()=>import("./cache.7c5d0e8d.js"),["assets/cache.7c5d0e8d.js","assets/cache.2cf718a6.css","assets/setting.767f2c26.js","assets/vendor.fcdc1dfd.js"]),meta:{title:"\u7CFB\u7EDF\u7F13\u5B58",permission:["view"]}}]},{path:"/setting/personal/personal_data",component:()=>v(()=>import("./personal_data.c80e439a.js"),["assets/personal_data.c80e439a.js","assets/index.f6dd0e9d.js","assets/index.4c20d851.css","assets/vendor.fcdc1dfd.js","assets/index.700e7071.js","assets/index.2eb40577.css","assets/index.f3a5499d.js","assets/index.104ca5ab.css","assets/index.9b142dae.js","assets/index.87a602e0.css","assets/setting.767f2c26.js"]),meta:{title:"\u4E2A\u4EBA\u8BBE\u7F6E",permission:["view"],hidden:!0}},{path:"/setting/storage",redirect:"/setting/storage/index",component:D,meta:{title:"\u5B58\u50A8\u8BBE\u7F6E"},children:[{path:"/setting/storage/index",component:()=>v(()=>import("./index.59af04fb.js"),["assets/index.59af04fb.js","assets/setting.767f2c26.js","assets/vendor.fcdc1dfd.js"]),meta:{title:"\u5B58\u50A8\u8BBE\u7F6E",permission:["view"]}},{path:"/setting/storage/edit",component:()=>v(()=>import("./edit.ece33d6b.js"),["assets/edit.ece33d6b.js","assets/setting.767f2c26.js","assets/index.9b142dae.js","assets/index.87a602e0.css","assets/vendor.fcdc1dfd.js"]),meta:{title:"\u5B58\u50A8\u8BBE\u7F6E",permission:["view"],hidden:!0}}]}]},xo={path:"/permission",redirect:"/permission/admin",component:D,meta:{title:"\u6743\u9650\u7BA1\u7406",icon:"icon-quanxian"},children:[{path:"/permission/admin",component:()=>v(()=>import("./index.4811572e.js"),["assets/index.4811572e.js","assets/index.75da6941.css","assets/index.f3a5499d.js","assets/index.104ca5ab.css","assets/vendor.fcdc1dfd.js","assets/index.700e7071.js","assets/index.2eb40577.css"]),meta:{title:"\u7BA1\u7406\u5458",permission:["view"]}},{path:"/permission/admin/edit",component:()=>v(()=>import("./edit.0819d084.js"),["assets/edit.0819d084.js","assets/index.f6dd0e9d.js","assets/index.4c20d851.css","assets/vendor.fcdc1dfd.js","assets/index.700e7071.js","assets/index.2eb40577.css","assets/index.f3a5499d.js","assets/index.104ca5ab.css","assets/index.9b142dae.js","assets/index.87a602e0.css"]),meta:{title:"\u7BA1\u7406\u5458",parent:"/permission/admin",hidden:!0}},{path:"/permission/role",component:()=>v(()=>import("./index.5006f2c7.js"),["assets/index.5006f2c7.js","assets/index.f3a5499d.js","assets/index.104ca5ab.css","assets/vendor.fcdc1dfd.js","assets/index.700e7071.js","assets/index.2eb40577.css"]),meta:{title:"\u89D2\u8272",permission:["view"]}},{path:"/permission/role/edit",component:()=>v(()=>import("./edit.9e0f3810.js"),["assets/edit.9e0f3810.js","assets/edit.155ac0f5.css","assets/index.9b142dae.js","assets/index.87a602e0.css","assets/vendor.fcdc1dfd.js"]),meta:{title:"\u89D2\u8272",parent:"/permission/role",hidden:!0}}]},oe=[{path:"/",redirect:"workbench",component:ho,children:[{path:"/workbench",component:Ct,meta:{title:"\u5DE5\u4F5C\u53F0",icon:"icon-home",permission:["view"]}},xo,Co]}],Po=[{path:"/login",component:()=>v(()=>import("./login.fc9ffdf5.js"),["assets/login.fc9ffdf5.js","assets/login.d7200980.css","assets/vendor.fcdc1dfd.js"])},{path:"/error/500",component:Do},{path:"/:pathMatch(.*)*",name:"404",component:Fo}],j=he({history:fe("/admin/"),routes:[...oe,...Po]}),T={key:"like_admin_",set(e,t,o){e=this.getKey(e);let n={expire:o?this.time()+o:"",value:t};typeof n=="object"&&(n=JSON.stringify(n));try{window.localStorage.setItem(e,n)}catch{return!1}},get(e){e=this.getKey(e);try{const t=window.localStorage.getItem(e);if(!t)return!1;const{value:o,expire:n}=JSON.parse(t);return n&&n<this.time()?(window.localStorage.removeItem(e),!1):o}catch{return!1}},time(){return Math.round(new Date().getTime()/1e3)},remove(e){e=this.getKey(e),window.localStorage.removeItem(e)},getKey(e){return this.key+e}},V="token",dn="account",R={success:({show:e,msg:t,data:o})=>(e*1&&I({type:"success",message:t}),o),error:({show:e,msg:t})=>(e*1&&I({type:"error",message:t}),Promise.reject(t)),redirect:qe(()=>(w.commit("user/setToken",""),w.commit("user/setUser",{}),T.remove(V),j.push("/login"),Promise.reject())),page:({data:e})=>(window.location.href=e.url,e)},_=ve.create({baseURL:"/adminapi",timeout:60*1e3,headers:{"Content-Type":"application/json",version:Ue}});_.interceptors.request.use(e=>{const t=w.getters.token;return e.headers&&(e.headers.token=t),e},e=>Promise.reject(e));_.interceptors.response.use(e=>{switch(e.data.code){case 1:return R.success(e.data);case 0:return R.error(e.data);case-1:return R.redirect();case 2:return R.page(e.data)}},e=>(console.log(e),I({type:"error",message:e}),Promise.reject(e)));function _n(e){return _.post("/file/addCate",e)}function pn(e){return _.post("/file/editCate",e)}function mn(e){return _.post("/file/delCate",e)}function hn(e){return _.get("/file/listCate",{params:e})}function fn(e){return _.get("/file/lists",{params:e})}function vn(e){return _.post("/file/delete",e)}function gn(e){return _.post("/file/move",e)}function Io(){return _.get("/config/getConfig")}const Lo={namespaced:!0,state:{config:{}},mutations:{setConfig(e,t){e.config=t}},actions:{getConfig({commit:e}){return new Promise((t,o)=>{Io().then(n=>{e("setConfig",n),t(n)})})}}};function En(e){return _.get("/auth.admin/lists",{params:e})}function yn(e){return _.post("/auth.admin/add",e)}function $n(e){return _.post("/auth.admin/edit",e)}function wn(e){return _.post("/auth.admin/delete",e)}function bn(e){return _.get("/auth.admin/detail",{params:e})}function Fn(e){return _.get("/auth.role/lists",{params:e})}function An(e){return _.post("/auth.role/add",P({},e))}function kn(e){return _.post("/auth.role/edit",P({},e))}function Bn(e){return _.post("/auth.role/delete",P({},e))}function Dn(e){return _.get("/auth.role/detail",{params:e})}function Cn(){return _.get("/config/getMenu")}function Oo(){return _.get("/config/getAuth")}const Ro={namespaced:!0,state:{sidebar:[],permission:null,isAdmin:0},getters:{},mutations:{setSidebar(e,t){e.sidebar=t},setPermission(e,t){e.permission=t.auth,e.isAdmin=t.root}},actions:{getPermission({commit:e}){return new Promise((t,o)=>{Oo().then(n=>{e("setPermission",n),t(n)}).catch(n=>{o(n)})})}}};function So(e){return _.post("/login/account",z(P({},e),{terminal:Me}))}function To(){return _.post("/login/logout")}function Vo(){return _.get("/auth.admin/mySelf")}const No={namespaced:!0,state:{token:T.get(V)||"",user:{}},mutations:{setToken(e,t){e.token=t,T.set(V,t)},setUser(e,t){e.user=t}},actions:{login({commit:e},t){const{account:o,password:n}=t;return new Promise((r,a)=>{So({account:o.trim(),password:n}).then(s=>{e("setToken",s.token),r(s)}).catch(s=>{a(s)})})},logout({commit:e}){return new Promise((t,o)=>{To().then(n=>{e("setToken",""),e("setUser",{}),T.remove(V),t(n)}).catch(n=>{o(n)})})},getUser({commit:e}){return new Promise((t,o)=>{Vo().then(n=>{e("setUser",n),t(n)}).catch(n=>{o(n)})})}}};var jo={app:Lo,permission:Ro,user:No};const Mo=ge({modules:jo,getters:je}),ne=Symbol("vue-store");function Uo(){return Ee(ne)}var w=Mo;function L(){const e=Uo(),t=ye(),o=$e();return{store:e,route:t,router:o}}const qo=E({setup(){const{store:e,route:t}=L(),o=Z(!0),n=b(()=>t.meta.keepAlive);return we("reload",()=>{o.value=!1,Fe(()=>{o.value=!0})}),Q(async()=>{const a=await e.dispatch("app/getConfig");let s=document.querySelector('link[rel="icon"]');if(s){s.href=a.web_favicon;return}s=document.createElement("link"),s.rel="icon",s.href=a.web_favicon,document.head.appendChild(s)}),{routerAlive:o,keepAlive:n}}});function zo(e,t,o,n,r,a){const s=d("router-view");return l(),f(C,null,[(l(),F(be,null,[e.keepAlive&&e.routerAlive?(l(),F(s,{key:0})):k("",!0)],1024)),!e.keepAlive&&e.routerAlive?(l(),F(s,{key:0})):k("",!0)],64)}var Ko=y(qo,[["render",zo]]);M.configure({showSpinner:!1});const G="/login",Wo="/",Ho=["/login"];j.beforeEach(async(e,t,o)=>{var r;M.start(),((r=e.meta)==null?void 0:r.title)&&(document.title=e.meta.title),w.getters.token?(w.getters.permission==null&&(w.commit("permission/setSidebar",oe[0].children),await w.dispatch("user/getUser"),await w.dispatch("permission/getPermission")),e.path===G?o({path:Wo}):o()):Ho.includes(e.path)?o():o({path:G,query:{redirect:e.fullPath}})});j.afterEach(async(e,t)=>{M.done()});var Go=e=>{e.use(Ae,{zIndex:3e3,locale:ke}),Object.keys(W).forEach(t=>{e.component(t,W[t])})};Be([Ce,xe,Pe,Ie,Le,Oe,Re,Se]);var Jo=e=>{e.component("VChart",De)};const Qo="#4a5dff",Xo="#67c23a",Yo="#fb9400",Zo="#f56c6c",en="#909399",tn="#333333",on="#666666",nn="#999999";var sn={color_primary:Qo,color_success:Xo,color_warning:Yo,color_danger:Zo,color_ingo:en,font_color_primary:tn,font_color_regular:on,font_color_secondary:nn};(function(){const t=new Te(".copy-btn");t.on("success",o=>{I.success("\u590D\u5236\u6210\u529F"),o.clearSelection()}),t.on("error",o=>{console.error(o),I.success("\u590D\u5236\u5931\u8D25")})})();var rn={mounted:(e,t)=>{e.className=e.className+" copy-btn",e.setAttribute("data-clipboard-text",t.value)},updated:(e,t)=>{e.setAttribute("data-clipboard-text",t.value)}},an=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rn});const J={"./modules/copy.ts":an};var un=e=>{Object.keys(J).forEach(t=>{const o=t.replace(/^\.\/(.*)\.\w+$/,"$1");e.directive(o,J[t].default)})};const O=Ve(Ko);O.config.globalProperties.$variables=sn;Go(O);Jo(O);un(O);O.use(j).use(w,ne).mount("#app");export{dn as A,y as _,_n as a,pn as b,T as c,mn as d,hn as e,vn as f,gn as g,fn as h,Uo as i,En as j,$n as k,wn as l,Fn as m,bn as n,yn as o,Bn as p,Cn as q,_ as r,ze as s,An as t,L as u,Ue as v,kn as w,Dn as x};
