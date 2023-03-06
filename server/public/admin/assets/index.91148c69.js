import{v as w,_ as y}from"./index.cd92a33e.js";import{w as B,I as g}from"./element-plus.317dd699.js";import{C as b}from"./vue-echarts.5be4544b.js";import{d as v,$ as E,j as C,a4 as A,o as r,c as l,a as t,U as i,L as o,T as e,V as m,a7 as h,u as k,S as x,P as D}from"./@vue.e8706010.js";import"./@vueuse.1e5a6e21.js";import"./lodash.873faf2b.js";import"./axios.3af9fe4b.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.1a2c9cae.js";import"./color.3050aad5.js";import"./clone.3b081931.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.21f7a9fd.js";import"./ms.a9ae1d6d.js";import"./@element-plus.196c7323.js";import"./nprogress.fd69c5bf.js";import"./vue-clipboard3.9796a14d.js";import"./clipboard.2bdac801.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";import"./lodash-es.29c53eac.js";import"./dayjs.f7363e4f.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./resize-detector.4e96b72b.js";const O={class:"workbench"},z={class:"md:flex"},V=t("span",{class:"card-title"},"\u7248\u672C\u4FE1\u606F",-1),N={class:"flex leading-9"},S=t("div",{class:"w-20"},"\u5F53\u524D\u7248\u672C",-1),L={class:"flex leading-9"},T=t("div",{class:"w-20"},"\u57FA\u4E8E\u6846\u67B6",-1),j={class:"flex leading-9"},G=t("div",{class:"w-20"},"\u83B7\u53D6\u6E20\u9053",-1),I=["href"],M=x("\u5B98\u7F51"),P=["href"],U=x("Gitee"),W=t("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1),$={class:"text-tx-secondary text-xs ml-4"},q={class:"flex flex-wrap"},H={class:"w-1/2 md:w-1/4"},J=t("div",{class:"leading-10"},"\u8BBF\u95EE\u91CF(\u4EBA)",-1),K={class:"text-6xl"},Q={class:"text-tx-secondary text-xs"},R={class:"w-1/2 md:w-1/4"},X=t("div",{class:"leading-10"},"\u9500\u552E\u989D(\u5143)",-1),Y={class:"text-6xl"},Z={class:"text-tx-secondary text-xs"},tt={class:"w-1/2 md:w-1/4"},st=t("div",{class:"leading-10"},"\u8BA2\u5355\u91CF(\u7B14)",-1),et={class:"text-6xl"},ot={class:"text-tx-secondary text-xs"},it={class:"w-1/2 md:w-1/4"},at=t("div",{class:"leading-10"},"\u65B0\u589E\u7528\u6237",-1),nt={class:"text-6xl"},dt={class:"text-tx-secondary text-xs"},rt={class:"function mb-4"},lt=t("span",null,"\u5E38\u7528\u529F\u80FD",-1),ct={class:"flex flex-wrap"},ut={class:"mt-2"},_t={class:"md:flex"},pt=t("span",null,"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1),mt=t("span",null,"\u670D\u52A1\u652F\u6301",-1),ht={class:"ml-2"},vt={class:"text-tx-regular text-xs mt-4"},xt=v({name:"workbench"}),ss=v({...xt,setup(ft){const s=E({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[0],type:"line",smooth:!0}]}}),f=()=>{w().then(a=>{s.version=a.version,s.today=a.today,s.menu=a.menu,s.visitor=a.visitor,s.support=a.support,s.visitorOption.xAxis.data=[],s.visitorOption.series[0].data=[],a.visitor.date.reverse().forEach(c=>{s.visitorOption.xAxis.data.push(c)}),a.visitor.list[0].data.forEach(c=>{s.visitorOption.series[0].data.push(c)})}).catch(a=>{console.log("err",a)})};return C(()=>{f()}),(a,c)=>{const u=B,d=g,_=y,F=A("router-link");return r(),l("div",O,[t("div",z,[i(d,{class:"!border-none mb-4 md:mr-4",shadow:"never"},{header:o(()=>[V]),default:o(()=>[t("div",null,[t("div",N,[S,t("span",null,e(s.version.version),1)]),t("div",L,[T,t("span",null,e(s.version.based),1)]),t("div",j,[G,t("div",null,[t("a",{href:s.version.channel.website,target:"_blank"},[i(u,{type:"success",size:"small"},{default:o(()=>[M]),_:1})],8,I),t("a",{class:"ml-3",href:s.version.channel.gitee,target:"_blank"},[i(u,{type:"danger",size:"small"},{default:o(()=>[U]),_:1})],8,P)])])])]),_:1}),i(d,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:o(()=>[t("div",null,[W,t("span",$," \u66F4\u65B0\u65F6\u95F4\uFF1A"+e(s.today.time),1)])]),default:o(()=>[t("div",q,[t("div",H,[J,t("div",K,e(s.today.today_visitor),1),t("div",Q," \u603B\u8BBF\u95EE\u91CF\uFF1A"+e(s.today.total_visitor),1)]),t("div",R,[X,t("div",Y,e(s.today.today_sales),1),t("div",Z," \u603B\u9500\u552E\u989D\uFF1A"+e(s.today.total_sales),1)]),t("div",tt,[st,t("div",et,e(s.today.order_num),1),t("div",ot," \u603B\u8BA2\u5355\u91CF\uFF1A"+e(s.today.order_sum),1)]),t("div",it,[at,t("div",nt,e(s.today.today_new_user),1),t("div",dt," \u603B\u8BBF\u7528\u6237\uFF1A"+e(s.today.total_new_user),1)])])]),_:1})]),t("div",rt,[i(d,{class:"flex-1 !border-none",shadow:"never"},{header:o(()=>[lt]),default:o(()=>[t("div",ct,[(r(!0),l(m,null,h(s.menu,n=>(r(),l("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:n},[i(F,{to:n.url,class:"mb-3 flex flex-col items-center"},{default:o(()=>[i(_,{width:"40px",height:"40px",src:n==null?void 0:n.image},null,8,["src"]),t("div",ut,e(n.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",_t,[i(d,{class:"flex-1 !border-none md:mr-4 mb-4",shadow:"never"},{header:o(()=>[pt]),default:o(()=>[t("div",null,[i(k(b),{style:{height:"350px"},option:s.visitorOption,autoresize:!0},null,8,["option"])])]),_:1}),i(d,{class:"!border-none mb-4",shadow:"never"},{header:o(()=>[mt]),default:o(()=>[t("div",null,[(r(!0),l(m,null,h(s.support,(n,p)=>(r(),l("div",{key:p},[t("div",{class:D(["flex items-center pb-10 pt-10",{"border-b border-br":p==0}])},[i(_,{width:120,height:120,class:"flex-none",src:n.image},null,8,["src"]),t("div",ht,[t("div",null,e(n.title),1),t("div",vt,e(n.desc),1)])],2)]))),128))])]),_:1})])])}}});export{ss as default};
