import{a8 as Q,al as O,a9 as R,G as x,D as C,F as I,d as Y,ao as Z,I as ee,P as ie,d0 as te,k as u,C as le,ap as ae,r as S,ai as se,L as V,M as oe,m as ne,o as a,c as h,e as T,h as i,T as r,v as ce,f as d,w as v,W as g,p as f,i as n,t as y,V as F,a as re,dj as he,q as K,az as de,X as ue,N as pe,K as we,dO as U,ac as ve,$ as fe}from"./index.384b7db0.js";import{i as _e}from"./validator.ae916af9.js";import{U as E,C as z,I as N}from"./event.776e7e11.js";const me=Q({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:O,default:""},inactiveIcon:{type:O,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:R(Function)},size:{type:String,validator:_e},tabindex:{type:[String,Number]}}),be={[E]:o=>x(o)||C(o)||I(o),[z]:o=>x(o)||C(o)||I(o),[N]:o=>x(o)||C(o)||I(o)},ge=["onClick"],ye=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],xe=["aria-hidden"],ke=["aria-hidden"],Ce=["aria-hidden"],Ie=["aria-hidden"],Se={name:"ElSwitch"},Ve=Y({...Se,props:me,emits:be,setup(o,{expose:A,emit:p}){const l=o,B="ElSwitch",j=pe(),{formItem:_}=Z(),G=ee(),t=ie("switch");te({from:'"value"',replacement:'"model-value" or "v-model"',scope:B,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u(()=>{var e;return!!((e=j.vnode.props)!=null&&e.value)}));const{inputId:L}=le(l,{formItemContext:_}),m=ae(u(()=>l.loading)),k=S(l.modelValue!==!1),w=S(),W=S(),q=u(()=>[t.b(),t.m(G.value),t.is("disabled",m.value),t.is("checked",s.value)]),H=u(()=>({width:se(l.width)}));V(()=>l.modelValue,()=>{k.value=!0}),V(()=>l.value,()=>{k.value=!1});const P=u(()=>k.value?l.modelValue:l.value),s=u(()=>P.value===l.activeValue);[l.activeValue,l.inactiveValue].includes(P.value)||(p(E,l.inactiveValue),p(z,l.inactiveValue),p(N,l.inactiveValue)),V(s,e=>{var c;w.value.checked=e,l.validateEvent&&((c=_==null?void 0:_.validate)==null||c.call(_,"change").catch(J=>oe()))});const b=()=>{const e=s.value?l.inactiveValue:l.activeValue;p(E,e),p(z,e),p(N,e),we(()=>{w.value.checked=s.value})},D=()=>{if(m.value)return;const{beforeChange:e}=l;if(!e){b();return}const c=e();[U(c),x(c)].includes(!0)||ve(B,"beforeChange must return type `Promise<boolean>` or `boolean`"),U(c)?c.then(M=>{M&&b()}).catch(M=>{}):c&&b()},X=u(()=>t.cssVarBlock({...l.activeColor?{"on-color":l.activeColor}:null,...l.inactiveColor?{"off-color":l.inactiveColor}:null,...l.borderColor?{"border-color":l.borderColor}:null})),$=()=>{var e,c;(c=(e=w.value)==null?void 0:e.focus)==null||c.call(e)};return ne(()=>{w.value.checked=s.value}),A({focus:$}),(e,c)=>(a(),h("div",{class:r(i(q)),style:K(i(X)),onClick:de(D,["prevent"])},[T("input",{id:i(L),ref_key:"input",ref:w,class:r(i(t).e("input")),type:"checkbox",role:"switch","aria-checked":i(s),"aria-disabled":i(m),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:i(m),tabindex:e.tabindex,onChange:b,onKeydown:ce(D,["enter"])},null,42,ye),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(a(),h("span",{key:0,class:r([i(t).e("label"),i(t).em("label","left"),i(t).is("active",!i(s))])},[e.inactiveIcon?(a(),d(i(f),{key:0},{default:v(()=>[(a(),d(g(e.inactiveIcon)))]),_:1})):n("v-if",!0),!e.inactiveIcon&&e.inactiveText?(a(),h("span",{key:1,"aria-hidden":i(s)},y(e.inactiveText),9,xe)):n("v-if",!0)],2)):n("v-if",!0),T("span",{ref_key:"core",ref:W,class:r(i(t).e("core")),style:K(i(H))},[e.inlinePrompt?(a(),h("div",{key:0,class:r(i(t).e("inner"))},[e.activeIcon||e.inactiveIcon?(a(),h(F,{key:0},[e.activeIcon?(a(),d(i(f),{key:0,class:r([i(t).is("icon"),i(s)?i(t).is("show"):i(t).is("hide")])},{default:v(()=>[(a(),d(g(e.activeIcon)))]),_:1},8,["class"])):n("v-if",!0),e.inactiveIcon?(a(),d(i(f),{key:1,class:r([i(t).is("icon"),i(s)?i(t).is("hide"):i(t).is("show")])},{default:v(()=>[(a(),d(g(e.inactiveIcon)))]),_:1},8,["class"])):n("v-if",!0)],64)):e.activeText||e.inactiveIcon?(a(),h(F,{key:1},[e.activeText?(a(),h("span",{key:0,class:r([i(t).is("text"),i(s)?i(t).is("show"):i(t).is("hide")]),"aria-hidden":!i(s)},y(e.activeText.substring(0,3)),11,ke)):n("v-if",!0),e.inactiveText?(a(),h("span",{key:1,class:r([i(t).is("text"),i(s)?i(t).is("hide"):i(t).is("show")]),"aria-hidden":i(s)},y(e.inactiveText.substring(0,3)),11,Ce)):n("v-if",!0)],64)):n("v-if",!0)],2)):n("v-if",!0),T("div",{class:r(i(t).e("action"))},[e.loading?(a(),d(i(f),{key:0,class:r(i(t).is("loading"))},{default:v(()=>[re(i(he))]),_:1},8,["class"])):n("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(a(),h("span",{key:1,class:r([i(t).e("label"),i(t).em("label","right"),i(t).is("active",i(s))])},[e.activeIcon?(a(),d(i(f),{key:0},{default:v(()=>[(a(),d(g(e.activeIcon)))]),_:1})):n("v-if",!0),!e.activeIcon&&e.activeText?(a(),h("span",{key:1,"aria-hidden":!i(s)},y(e.activeText),9,Ie)):n("v-if",!0)],2)):n("v-if",!0)],14,ge))}});var Te=ue(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Be=fe(Te);export{Be as E};
