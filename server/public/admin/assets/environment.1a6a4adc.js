import{_ as v}from"./select.38e7ad8c.js";import{_ as h,d as b,m as C,n as w,e as u,o as E,c as B,a as e,w as o,f as s,y as c,bC as _}from"./index.6235ba03.js";import{i as A}from"./setting.4f3d8e6f.js";const F=b({setup(){const a=C({server:[],env:[],auth:[]}),d=()=>{A().then(n=>{console.log("res",n),a.server=n.server,a.env=n.env,a.auth=n.auth})};return w(()=>{d()}),{info:a,getSystemInfo:d}}}),$={class:"system-environment"},k=s("div",null,"\u670D\u52A1\u5668\u4FE1\u606F",-1),y={class:"m-t-15"},D=s("div",null,"PHP\u73AF\u5883\u8981\u6C42",-1),S={class:"m-t-15"},g=s("div",null,"\u76EE\u5F55\u6743\u9650",-1),q={class:"m-t-15"};function I(a,d,n,N,P,V){const t=u("el-table-column"),i=u("el-table"),p=u("el-card"),m=v,r=u("el-icon"),f=u("close-bold");return E(),B("div",$,[e(p,{shadow:"never"},{default:o(()=>[k,s("div",y,[e(i,{data:a.info.server},{default:o(()=>[e(t,{prop:"param",label:"\u53C2\u6570"}),e(t,{prop:"value",label:"\u503C"})]),_:1},8,["data"])])]),_:1}),e(p,{shadow:"never",class:"m-t-15"},{default:o(()=>[D,s("div",S,[e(i,{data:a.info.env},{default:o(()=>[e(t,{prop:"option",label:"\u9009\u9879"}),e(t,{prop:"require",label:"\u8981\u6C42"}),e(t,{prop:"status",label:"\u72B6\u6001"},{default:o(l=>[c(e(r,{color:"#67C23A"},{default:o(()=>[e(m)]),_:2},1536),[[_,l.row.status]]),c(e(r,{color:"#DB2828"},{default:o(()=>[e(f)]),_:2},1536),[[_,!l.row.status]])]),_:1}),e(t,{prop:"remark",label:"\u8BF4\u660E\u53CA\u5E2E\u52A9"})]),_:1},8,["data"])])]),_:1}),e(p,{shadow:"never",class:"m-t-15"},{default:o(()=>[g,s("div",q,[e(i,{data:a.info.auth},{default:o(()=>[e(t,{prop:"dir",label:"\u9009\u9879"}),e(t,{prop:"require",label:"\u8981\u6C42"}),e(t,{prop:"status",label:"\u72B6\u6001"},{default:o(l=>[c(e(r,{color:"#67C23A"},{default:o(()=>[e(m)]),_:2},1536),[[_,l.row.status]]),c(e(r,{color:"#DB2828"},{default:o(()=>[e(f)]),_:2},1536),[[_,!l.row.status]])]),_:1}),e(t,{prop:"remark",label:"\u8BF4\u660E\u53CA\u5E2E\u52A9"})]),_:1},8,["data"])])]),_:1})])}var j=h(F,[["render",I]]);export{j as default};
