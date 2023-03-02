import{d as a,z as e,W as t,o as s,c as l,w as r,h as c,b as u,l as i,t as d,k as o,n,y as m,r as f,a as p}from"./index.68799f62.js";import{_ as x}from"./u-parse.4105c745.js";import{_}from"./u-icon.6dcdb6e7.js";import{_ as v}from"./icon_visit.9ad00ab7.js";import{b as w,c as b,d as h}from"./news.f5685c0b.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";var j=y(a({__name:"news_detail",setup(a){const y=e({});let j="";const k=async a=>{y.value=await w({id:a})};return t((a=>{j=a.id,k(j)})),(a,e)=>{const t=o,w=n,g=m,z=f(p("u-parse"),x),$=f(p("u-icon"),_);return s(),l(t,{class:"news-detail bg-white"},{default:r((()=>[c(" 标题信心 "),u(t,{class:"news-detail-header py-[20rpx] px-[30rpx]"},{default:r((()=>[u(t,{class:"text-3xl font-medium"},{default:r((()=>[i(d(y.value.title),1)])),_:1}),u(t,{class:"flex mt-[20rpx] text-xs"},{default:r((()=>[y.value.author?(s(),l(t,{key:0,class:"mr-[40rpx]"},{default:r((()=>[i("作者: "+d(y.value.author),1)])),_:1})):c("v-if",!0),u(t,{class:"text-muted mr-[40rpx] flex-1"},{default:r((()=>[i(d(y.value.create_time),1)])),_:1}),u(t,{class:"flex items-center text-muted flex-none"},{default:r((()=>[u(w,{src:v,class:"w-[30rpx] h-[30rpx]"}),u(t,{class:"ml-[10rpx]"},{default:r((()=>[i(d(y.value.click),1)])),_:1})])),_:1})])),_:1})])),_:1}),c(" 咨询内容 "),u(t,{class:"news-detail-section bg-white p-[24rpx]"},{default:r((()=>[c(" 摘要 "),y.value.abstract?(s(),l(t,{key:0,class:"summary p-[20rpx] text-base"},{default:r((()=>[u(g,{class:"font-medium"},{default:r((()=>[i("摘要: ")])),_:1}),i(" "+d(y.value.abstract),1)])),_:1})):c("v-if",!0),c(" 内容 "),u(t,{class:"mt-[20rpx]"},{default:r((()=>[u(z,{html:y.value.content},null,8,["html"])])),_:1})])),_:1}),u(t,{class:"panel-btn flex items-center px-[34rpx]",onClick:e[0]||(e[0]=a=>(async a=>{try{y.value.collect?(await b({id:a}),uni.$u.toast("已取消收藏")):(await h({id:a}),uni.$u.toast("收藏成功")),k(j)}catch(e){}})(y.value.id))},{default:r((()=>[u($,{name:y.value.collect?"star-fill":"star",size:"40",color:y.value.collect?"#F7BA47":"#333"},null,8,["name","color"]),u(g,{class:"ml-[10rpx]"},{default:r((()=>[i("收藏")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-80019d60"]]);export{j as default};
