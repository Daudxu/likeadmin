import{k as je,b as Me,S as Ne,J as We,T as Ge,E as Ye,U as qe,p as Ke,q as Ze,r as Qe,w as Je,R as Oe,B as Xe,a as He,F as et,L as tt,M as lt,N as nt,Q as at}from"./element-plus.317dd699.js";import{_ as ot}from"./index.vue_vue_type_script_setup_true_lang.f549c02e.js";import{_ as st}from"./index.bd2421b1.js";import{r as $,f as Fe,d as Ae,b as xe,h as it}from"./index.cd92a33e.js";import{P as ut}from"./index.3448bf9e.js";import{U as dt}from"./index.cbeeff21.js";import{_ as ct}from"./index.vue_vue_type_script_setup_true_lang.a60e2335.js";import{s as Q,r as D,$ as Se,d as J,o as s,c,a as o,K as V,R as m,U as n,H as rt,_ as Ve,I as ft,u as e,e as De,w as K,M as Z,O as ue,L as a,k as U,n as we,a3 as _t,C as mt,j as pt,Z as Y,V as P,a7 as q,a9 as ht,P as be,S as p,T as se,b7 as vt,b6 as gt}from"./@vue.e8706010.js";import{u as yt}from"./usePaging.160b82b8.js";import{g as Ct}from"./vue3-video-play.4851e3ad.js";const kt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAACJElEQVRYR+2YMWsUURSFz3m7s+nskjUIQSutbMRi7WzUVjSadMHCbVLkByjmLygaCVYWRqMEUhkFS9Gg0cJfYCPZjYUQFbPs+I7c2R1Q2ZjZfRNYYS4MAzPv3vnmvDvL3kMA2Hl5/CjLI9ckf4ZwY3Zt15C+gfwIao3So0rt3XsJtPUk9M/cAW6y9ap2DIyfAjgCwANwGeoYiEFtk/5e5CvXeer1D2neATcGgiTZM4+t9RNLEKcBtAFEGeBsiRWzl7EoSXo+8rV9gWc/fDc1B1VSEoEnDpj0KTB33tS26DGaEezvZQZpRxmODyoT5+vwBwS3zeTcT4yjTdZNJEiPSykk1bjZX6HeD/WQJ1zUApgq2w+etcsniBuAVlH9vELOx6Yo1VywgkmTB4X1kEGGhyAtg/Ecq3NNqnknDwVTrNBaactEts88OHs5b8Bw/Tof4M+kr4WrwwhoL9n5uRPWhxWwsxPEl+EGNMacP5I8evCPGgVgqKSFgoWCoQqE5hc9WCgYqkBoftGDeSiYz1/+UJLe+foftvh2A2B1fwQIrapkaFoDcK4PVyH0qVnyU4fjGdW4NQ2WlgDE5hLkMoJmQdh9zW9Dk59K5lhtLjyE01TX/jDILP5MGEbvbFPOJroIXvc5PjvTBbx7GM4vAjjd9WdSc2g/IPaqaTv5Aq58haP1TSb2Au20GGErvgTxIqiTAA7tVSnn+2Z9vAXdCsa4bD6Nsf0C/gYA5PMzcW0AAAAASUVORK5CYII=";function Et(l){return $.post({url:"/file/addCate",params:l})}function wt(l){return $.post({url:"/file/editCate",params:l})}function bt(l){return $.post({url:"/file/delCate",params:l})}function Ft(l){return $.get({url:"/file/listCate",params:l})}function At(l){return $.get({url:"/file/lists",params:l})}function xt(l){return $.post({url:"/file/delete",params:l})}function St(l){return $.post({url:"/file/move",params:l})}function Vt(l){return $.post({url:"/file/rename",params:l})}function Dt(l){const F=Q(),k=D([]),r=D(""),h=async()=>{const _=await Ft({page_type:0,type:l}),y=[{name:"\u5168\u90E8",id:""},{name:"\u672A\u5206\u7EC4",id:0}];k.value=_.lists,k.value.unshift(...y),setTimeout(()=>{var f;(f=F.value)==null||f.setCurrentKey(r.value)},0)};return{treeRef:F,cateId:r,cateLists:k,handleAddCate:async _=>{await Et({type:l,name:_,pid:0}),h()},handleEditCate:async(_,y)=>{await wt({id:y,name:_}),h()},handleDeleteCate:async _=>{await Fe.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await bt({id:_}),r.value="",h()},getCateLists:h,handleCatSelect:_=>{r.value=_.id}}}function Bt(l,F,k,r){const h=Q(),x=D("normal"),E=D(0),i=D([]),g=D(!1),_=D(!1),y=Se({name:"",type:F,cid:l}),{pager:f,getLists:T,resetPage:X}=yt({fetchFun:At,params:y,firstLoading:!0,size:r}),L=()=>{T()},H=()=>{X()},ee=u=>!!i.value.find(v=>v.id==u),te=async u=>{await Fe.confirm("\u786E\u8BA4\u5220\u9664\u540E\uFF0C\u672C\u5730\u6216\u4E91\u5B58\u50A8\u6587\u4EF6\u4E5F\u5C06\u540C\u6B65\u5220\u9664\uFF0C\u5982\u6587\u4EF6\u5DF2\u88AB\u4F7F\u7528\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01");const v=u||i.value.map(R=>R.id);await xt({ids:v}),L(),C()},z=async()=>{const u=i.value.map(v=>v.id);await St({ids:u,cid:E.value}),E.value=0,L(),C()},I=u=>{const v=i.value.findIndex(R=>R.id==u.id);if(v!=-1){i.value.splice(v,1);return}if(i.value.length==k.value){if(k.value==1){i.value=[],i.value.push(u);return}je.warning("\u5DF2\u8FBE\u5230\u9009\u62E9\u4E0A\u9650");return}i.value.push(u)},C=()=>{i.value=[]};return{listShowType:x,tableRef:h,moveId:E,pager:f,fileParams:y,select:i,isCheckAll:g,isIndeterminate:_,getFileList:L,refresh:H,batchFileDelete:te,batchFileMove:z,selectFile:I,isSelect:ee,clearSelect:C,cancelSelete:u=>{i.value=i.value.filter(v=>v.id!=u)},selectAll:u=>{var v;if(_.value=!1,(v=h.value)==null||v.toggleAllSelection(),u){i.value=[...f.lists];return}C()},handleFileRename:async(u,v)=>{await Vt({id:v,name:u}),L()}}}const Rt=J({props:{uri:{type:String},fileSize:{type:String,default:"100px"},type:{type:String,default:"image"}},emits:["close"]});const zt=["src"],It={key:2,class:"absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full w-5 h-5 flex justify-center items-center bg-[rgba(0,0,0,0.3)]"};function $t(l,F,k,r,h,x){const E=Me,i=xe;return s(),c("div",null,[o("div",{class:"file-item relative",style:Ve({height:l.fileSize,width:l.fileSize})},[l.type=="image"?(s(),V(E,{key:0,class:"image",fit:"contain",src:l.uri},null,8,["src"])):l.type=="video"?(s(),c("video",{key:1,class:"video",src:l.uri},null,8,zt)):m("",!0),l.type=="video"?(s(),c("div",It,[n(i,{name:"el-icon-CaretRight",size:18,color:"#fff"})])):m("",!0),rt(l.$slots,"default",{},void 0,!0)],4)])}const ie=Ae(Rt,[["render",$t],["__scopeId","data-v-ec4ebd66"]]),Pt=J({__name:"index",props:{src:{type:String,required:!0},width:String,height:String,poster:String},setup(l,{expose:F}){const k=l,r=Q(),h=Se({color:"var(--el-color-primary)",muted:!1,webFullScreen:!1,speedRate:["0.75","1.0","1.25","1.5","2.0"],autoPlay:!0,loop:!1,mirror:!1,ligthOff:!1,volume:.3,control:!0,title:"",poster:"",...k}),x=()=>{r.value.play()},E=()=>{r.value.pause()},i=f=>{console.log(f,"\u64AD\u653E")},g=f=>{console.log(f,"\u6682\u505C")},_=f=>{console.log(f,"\u65F6\u95F4\u66F4\u65B0")},y=f=>{console.log(f,"\u53EF\u4EE5\u64AD\u653E")};return F({play:x,pause:E}),(f,T)=>(s(),c("div",null,[n(e(Ct),ft({ref_key:"playerRef",ref:r},h,{src:l.src,onPlay:i,onPause:g,onTimeupdate:_,onCanplay:y}),null,16,["src"])]))}}),Tt={key:0},Lt={key:1},Ut=J({__name:"preview",props:{modelValue:{type:Boolean,default:!1},url:{type:String,default:""},type:{type:String,default:"image"}},emits:["update:modelValue"],setup(l,{emit:F}){const k=l,r=Q(),h=De({get(){return k.modelValue},set(i){F("update:modelValue",i)}}),x=()=>{F("update:modelValue",!1)},E=D([]);return K(()=>k.modelValue,i=>{i?we(()=>{var g;E.value=[k.url],(g=r.value)==null||g.play()}):we(()=>{var g;E.value=[],(g=r.value)==null||g.pause()})}),(i,g)=>{const _=Ne,y=Pt,f=We;return Z((s(),c("div",null,[l.type=="image"?(s(),c("div",Tt,[E.value.length?(s(),V(_,{key:0,"url-list":E.value,"hide-on-click-modal":"",onClose:x},null,8,["url-list"])):m("",!0)])):m("",!0),l.type=="video"?(s(),c("div",Lt,[n(f,{modelValue:e(h),"onUpdate:modelValue":g[0]||(g[0]=T=>U(h)?h.value=T:null),width:"740px",title:"\u89C6\u9891\u9884\u89C8","before-close":x},{default:a(()=>[n(y,{ref_key:"playerRef",ref:r,src:l.url,width:"100%",height:"450px"},null,8,["src"])]),_:1},8,["modelValue"])])):m("",!0)],512)),[[ue,l.modelValue]])}}}),O=l=>(vt("data-v-51a98951"),l=l(),gt(),l),jt={class:"material"},Mt={class:"material__left"},Nt={class:"flex-1 min-h-0"},Wt={class:"material-left__content pt-4 p-b-4"},Gt={class:"flex flex-1 items-center min-w-0 pr-4"},Yt=O(()=>o("img",{class:"w-[20px] h-[16px] mr-3",src:kt},null,-1)),qt={class:"flex-1 truncate mr-2"},Kt=O(()=>o("span",{class:"muted m-r-10"},"\xB7\xB7\xB7",-1)),Zt=p(" \u547D\u540D\u5206\u7EC4 "),Qt=["onClick"],Jt=p("\u5220\u9664\u5206\u7EC4"),Ot={class:"flex justify-center p-2 border-t border-br"},Xt=p(" \u6DFB\u52A0\u5206\u7EC4 "),Ht={class:"material__center flex flex-col"},el={class:"operate-btn flex"},tl={class:"flex-1 flex"},ll=p("\u672C\u5730\u4E0A\u4F20"),nl=p("\u672C\u5730\u4E0A\u4F20"),al=p(" \u5220\u9664 "),ol=p("\u79FB\u52A8"),sl=O(()=>o("span",{class:"mr-5"},"\u79FB\u52A8\u6587\u4EF6\u81F3",-1)),il={class:"flex items-center ml-2"},ul={key:0,class:"mt-3"},dl=p(" \u5F53\u9875\u5168\u9009 "),cl={class:"material-center__content flex flex-col flex-1 mb-1 min-h-0"},rl={class:"file-list flex flex-wrap mt-4"},fl={key:0,class:"item-selected"},_l={class:"operation-btns flex items-center"},ml=p(" \u91CD\u547D\u540D "),pl=p(" \u67E5\u770B "),hl={class:"inline-block"},vl=p(" \u91CD\u547D\u540D "),gl={class:"inline-block"},yl=p(" \u67E5\u770B "),Cl={class:"inline-block"},kl=p(" \u5220\u9664 "),El={key:1,class:"flex flex-1 justify-center items-center"},wl={class:"material-center__footer flex justify-between items-center mt-2"},bl={class:"flex"},Fl={class:"mr-3"},Al=p(" \u5F53\u9875\u5168\u9009 "),xl=p(" \u5220\u9664 "),Sl=p("\u79FB\u52A8"),Vl=O(()=>o("span",{class:"mr-5"},"\u79FB\u52A8\u6587\u4EF6\u81F3",-1)),Dl={key:0,class:"material__right"},Bl={class:"flex justify-between p-2 flex-wrap"},Rl={class:"sm flex items-center"},zl={key:0},Il=p("\u6E05\u7A7A"),$l={class:"flex-1 min-h-0"},Pl={class:"select-lists flex flex-col p-t-3"},Tl={class:"select-item"},Ll=J({__name:"index",props:{fileSize:{type:String,default:"100px"},limit:{type:Number,default:1},type:{type:String,default:"image"},mode:{type:String,default:"picker"},pageSize:{type:Number,default:15}},emits:["change"],setup(l,{expose:F,emit:k}){const r=l,{limit:h}=_t(r),x=De(()=>{switch(r.type){case"image":return 10;case"video":return 20;case"file":return 30;default:return 0}}),E=mt("visible"),i=D(""),g=D(!1),{treeRef:_,cateId:y,cateLists:f,handleAddCate:T,handleEditCate:X,handleDeleteCate:L,getCateLists:H,handleCatSelect:ee}=Dt(x.value),{tableRef:te,listShowType:z,moveId:I,pager:C,fileParams:M,select:S,isCheckAll:B,isIndeterminate:u,getFileList:v,refresh:R,batchFileDelete:N,batchFileMove:de,selectFile:le,isSelect:ce,clearSelect:re,cancelSelete:Be,selectAll:fe,handleFileRename:_e}=Bt(y,x,h,r.pageSize),me=async()=>{var A;await H(),(A=_.value)==null||A.setCurrentKey(y.value),v()},ne=A=>{i.value=A,g.value=!0};return K(E,async A=>{A&&me()},{immediate:!0}),K(y,()=>{M.name="",R()}),K(S,A=>{if(k("change",A),A.length==C.lists.length&&A.length!==0){u.value=!1,B.value=!0;return}A.length>0?u.value=!0:(B.value=!1,u.value=!1)},{deep:!0}),pt(()=>{r.mode=="page"&&me()}),F({clearSelect:re}),(A,d)=>{const pe=it,he=Ke,W=ct,Re=Ze,ze=Qe,Ie=Ge,ae=Ye,w=Je,ve=dt,ge=at,ye=Oe,Ce=ut,G=xe,$e=Xe,ke=He,oe=et,Ee=st,j=tt,Pe=qe,Te=lt,Le=ot,Ue=nt;return Z((s(),c("div",jt,[o("div",Mt,[o("div",Nt,[n(ae,null,{default:a(()=>[o("div",Wt,[n(Ie,{ref_key:"treeRef",ref:_,"node-key":"id",data:e(f),"empty-text":"''","highlight-current":!0,"expand-on-click-node":!1,"current-node-key":e(y),onNodeClick:e(ee)},{default:a(({data:t})=>[o("div",Gt,[Yt,o("span",qt,[n(pe,{content:t.name},null,8,["content"])]),t.id>0?(s(),V(ze,{key:0,"hide-on-click":!1},{dropdown:a(()=>[n(Re,null,{default:a(()=>[n(W,{onConfirm:b=>e(X)(b,t.id),size:"default",value:t.name,width:"400px",limit:20,"show-limit":"",teleported:""},{default:a(()=>[o("div",null,[n(he,null,{default:a(()=>[Zt]),_:1})])]),_:2},1032,["onConfirm","value"]),o("div",{onClick:b=>e(L)(t.id)},[n(he,null,{default:a(()=>[Jt]),_:1})],8,Qt)]),_:2},1024)]),default:a(()=>[Kt]),_:2},1024)):m("",!0)])]),_:1},8,["data","current-node-key","onNodeClick"])])]),_:1})]),o("div",Ot,[n(W,{onConfirm:e(T),size:"default",width:"400px",limit:20,"show-limit":"",teleported:""},{default:a(()=>[n(w,null,{default:a(()=>[Xt]),_:1})]),_:1},8,["onConfirm"])])]),o("div",Ht,[o("div",el,[o("div",tl,[l.type=="image"?(s(),V(ve,{key:0,class:"mr-3",data:{cid:e(y)},type:l.type,"show-progress":!0,onChange:e(R)},{default:a(()=>[n(w,{type:"primary"},{default:a(()=>[ll]),_:1})]),_:1},8,["data","type","onChange"])):m("",!0),l.type=="video"?(s(),V(ve,{key:1,class:"mr-3",data:{cid:e(y)},type:l.type,"show-progress":!0,onChange:e(R)},{default:a(()=>[n(w,{type:"primary"},{default:a(()=>[nl]),_:1})]),_:1},8,["data","type","onChange"])):m("",!0),l.mode=="page"?(s(),V(w,{key:2,disabled:!e(S).length,onClick:d[0]||(d[0]=Y(t=>e(N)(),["stop"]))},{default:a(()=>[al]),_:1},8,["disabled"])):m("",!0),l.mode=="page"?(s(),V(Ce,{key:3,class:"ml-3",onConfirm:e(de),disabled:!e(S).length,title:"\u79FB\u52A8\u6587\u4EF6"},{trigger:a(()=>[n(w,{disabled:!e(S).length},{default:a(()=>[ol]),_:1},8,["disabled"])]),default:a(()=>[o("div",null,[sl,n(ye,{modelValue:e(I),"onUpdate:modelValue":d[1]||(d[1]=t=>U(I)?I.value=t:null),placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(s(!0),c(P,null,q(e(f),t=>(s(),c(P,{key:t.id},[t.id!==""?(s(),V(ge,{key:0,label:t.name,value:t.id},null,8,["label","value"])):m("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])):m("",!0)]),n($e,{class:"w-60",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",modelValue:e(M).name,"onUpdate:modelValue":d[2]||(d[2]=t=>e(M).name=t),onKeyup:ht(e(R),["enter"])},{append:a(()=>[n(w,{onClick:e(R)},{icon:a(()=>[n(G,{name:"el-icon-Search"})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeyup"]),o("div",il,[n(ke,{content:"\u5217\u8868\u89C6\u56FE",placement:"top"},{default:a(()=>[o("div",{class:be(["list-icon",{select:e(z)=="table"}]),onClick:d[3]||(d[3]=t=>z.value="table")},[n(G,{name:"local-icon-list-2",size:18})],2)]),_:1}),n(ke,{content:"\u5E73\u94FA\u89C6\u56FE",placement:"top"},{default:a(()=>[o("div",{class:be(["list-icon",{select:e(z)=="normal"}]),onClick:d[4]||(d[4]=t=>z.value="normal")},[n(G,{name:"el-icon-Menu",size:18})],2)]),_:1})])]),l.mode=="page"?(s(),c("div",ul,[n(oe,{disabled:!e(C).lists.length,modelValue:e(B),"onUpdate:modelValue":d[5]||(d[5]=t=>U(B)?B.value=t:null),onChange:e(fe),indeterminate:e(u)},{default:a(()=>[dl]),_:1},8,["disabled","modelValue","onChange","indeterminate"])])):m("",!0),o("div",cl,[e(C).lists.length?Z((s(),V(ae,{key:0},{default:a(()=>[o("ul",rl,[(s(!0),c(P,null,q(e(C).lists,t=>(s(),c("li",{class:"file-item-wrap",key:t.id,style:Ve({width:l.fileSize})},[n(Ee,{onClose:b=>e(N)([t.id])},{default:a(()=>[n(ie,{uri:t.uri,"file-size":l.fileSize,type:l.type,onClick:b=>e(le)(t)},{default:a(()=>[e(ce)(t.id)?(s(),c("div",fl,[n(G,{size:24,name:"el-icon-Check",color:"#fff"})])):m("",!0)]),_:2},1032,["uri","file-size","type","onClick"])]),_:2},1032,["onClose"]),n(pe,{class:"mt-1",content:t.name},null,8,["content"]),o("div",_l,[n(W,{onConfirm:b=>e(_e)(b,t.id),size:"default",value:t.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:a(()=>[n(w,{type:"primary",link:""},{default:a(()=>[ml]),_:1})]),_:2},1032,["onConfirm","value"]),n(w,{type:"primary",link:"",onClick:b=>ne(t.uri)},{default:a(()=>[pl]),_:2},1032,["onClick"])])],4))),128))])]),_:1},512)),[[ue,e(z)=="normal"]]):m("",!0),Z(n(Te,{ref_key:"tableRef",ref:te,class:"mt-4",data:e(C).lists,width:"100%",height:"100%",size:"large",onRowClick:e(le)},{default:a(()=>[n(j,{width:"55"},{default:a(({row:t})=>[n(oe,{modelValue:e(ce)(t.id),onChange:b=>e(le)(t)},null,8,["modelValue","onChange"])]),_:1}),n(j,{label:"\u56FE\u7247",width:"100"},{default:a(({row:t})=>[n(ie,{uri:t.uri,"file-size":"50px",type:l.type},null,8,["uri","type"])]),_:1}),n(j,{label:"\u540D\u79F0","min-width":"100","show-overflow-tooltip":""},{default:a(({row:t})=>[n(Pe,{onClick:Y(b=>ne(t.uri),["stop"]),underline:!1},{default:a(()=>[p(se(t.name),1)]),_:2},1032,["onClick"])]),_:1}),n(j,{prop:"create_time",label:"\u4E0A\u4F20\u65F6\u95F4","min-width":"100"}),n(j,{label:"\u64CD\u4F5C",width:"150",fixed:"right"},{default:a(({row:t})=>[o("div",hl,[n(W,{onConfirm:b=>e(_e)(b,t.id),size:"default",value:t.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:a(()=>[n(w,{type:"primary",link:""},{default:a(()=>[vl]),_:1})]),_:2},1032,["onConfirm","value"])]),o("div",gl,[n(w,{type:"primary",link:"",onClick:Y(b=>ne(t.uri),["stop"])},{default:a(()=>[yl]),_:2},1032,["onClick"])]),o("div",Cl,[n(w,{type:"primary",link:"",onClick:Y(b=>e(N)([t.id]),["stop"])},{default:a(()=>[kl]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data","onRowClick"]),[[ue,e(z)=="table"]]),!e(C).loading&&!e(C).lists.length?(s(),c("div",El," \u6682\u65E0\u6570\u636E~ ")):m("",!0)]),o("div",wl,[o("div",bl,[l.mode=="page"?(s(),c(P,{key:0},[o("span",Fl,[n(oe,{disabled:!e(C).lists.length,modelValue:e(B),"onUpdate:modelValue":d[6]||(d[6]=t=>U(B)?B.value=t:null),onChange:e(fe),indeterminate:e(u)},{default:a(()=>[Al]),_:1},8,["disabled","modelValue","onChange","indeterminate"])]),n(w,{disabled:!e(S).length,onClick:d[7]||(d[7]=t=>e(N)())},{default:a(()=>[xl]),_:1},8,["disabled"]),n(Ce,{class:"ml-3 inline",onConfirm:e(de),disabled:!e(S).length,title:"\u79FB\u52A8\u6587\u4EF6"},{trigger:a(()=>[n(w,{disabled:!e(S).length},{default:a(()=>[Sl]),_:1},8,["disabled"])]),default:a(()=>[o("div",null,[Vl,n(ye,{modelValue:e(I),"onUpdate:modelValue":d[8]||(d[8]=t=>U(I)?I.value=t:null),placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(s(!0),c(P,null,q(e(f),t=>(s(),c(P,{key:t.id},[t.id!==""?(s(),V(ge,{key:0,label:t.name,value:t.id},null,8,["label","value"])):m("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])],64)):m("",!0)]),n(Le,{modelValue:e(C),"onUpdate:modelValue":d[9]||(d[9]=t=>U(C)?C.value=t:null),onChange:e(v),layout:"total, prev, pager, next, jumper"},null,8,["modelValue","onChange"])])]),l.mode=="picker"?(s(),c("div",Dl,[o("div",Bl,[o("div",Rl,[p(" \u5DF2\u9009\u62E9 "+se(e(S).length)+" ",1),e(h)?(s(),c("span",zl,"/"+se(e(h)),1)):m("",!0)]),n(w,{type:"primary",link:"",onClick:e(re)},{default:a(()=>[Il]),_:1},8,["onClick"])]),o("div",$l,[n(ae,{class:"ls-scrollbar"},{default:a(()=>[o("ul",Pl,[(s(!0),c(P,null,q(e(S),t=>(s(),c("li",{class:"mb-4",key:t.id},[o("div",Tl,[n(Ee,{onClose:b=>e(Be)(t.id)},{default:a(()=>[n(ie,{uri:t.uri,"file-size":"100px",type:l.type},null,8,["uri","type"])]),_:2},1032,["onClose"])])]))),128))])]),_:1})])])):m("",!0),n(Ut,{modelValue:g.value,"onUpdate:modelValue":d[10]||(d[10]=t=>g.value=t),url:i.value,type:l.type},null,8,["modelValue","url","type"])])),[[Ue,e(C).loading]])}}});const Ql=Ae(Ll,[["__scopeId","data-v-51a98951"]]);export{ie as F,Ql as _,Ut as a};
