import{L as _,d as V,Z as j,r as C,K as S,m as O,ad as I,bE as L,bH as U,bx as x,_ as R,k as K,l as N,o as H,c as q,a as k,h as w,S as T,q as G}from"./index.384b7db0.js";import{_ as Y}from"./index.eb9a1a31.js";var W=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],Z=function(e){return W.map(function(t){return t.toLowerCase()}).indexOf(e.toLowerCase())!==-1},J=function(e,t,n){Object.keys(t).filter(Z).forEach(function(i){var r=t[i];typeof r=="function"&&(i==="onInit"?r(e,n):n.on(i.substring(2),function(o){return r(o,n)}))})},Q=function(e,t,n,i){var r=e.modelEvents?e.modelEvents:null,o=Array.isArray(r)?r.join(" "):r;_(i,function(d,l){n&&typeof d=="string"&&d!==l&&d!==n.getContent({format:e.outputFormat})&&n.setContent(d)}),n.on(o||"change input undo redo",function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))})},X=function(e,t,n,i,r,o){i.setContent(o()),n.attrs["onUpdate:modelValue"]&&Q(t,n,i,r),J(e,n.attrs,i)},E=0,D=function(e){var t=Date.now(),n=Math.floor(Math.random()*1e9);return E++,e+"_"+n+E+String(t)},$=function(e){return e!==null&&e.tagName.toLowerCase()==="textarea"},B=function(e){return typeof e=="undefined"||e===""?[]:Array.isArray(e)?e:e.split(" ")},ee=function(e,t){return B(e).concat(B(t))},ne=function(e){return e==null},F=function(){return{listeners:[],scriptId:D("tiny-script"),scriptLoaded:!1}},te=function(){var e=F(),t=function(r,o,d,l){var a=o.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=r,a.src=d;var c=function(){a.removeEventListener("load",c),l()};a.addEventListener("load",c),o.head&&o.head.appendChild(a)},n=function(r,o,d){e.scriptLoaded?d():(e.listeners.push(d),r.getElementById(e.scriptId)||t(e.scriptId,r,o,function(){e.listeners.forEach(function(l){return l()}),e.scriptLoaded=!0}))},i=function(){e=F()};return{load:n,reinitialize:i}},ae=te(),ie=function(){return typeof window!="undefined"?window:global},v=function(){var e=ie();return e&&e.tinymce?e.tinymce:null},oe={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return e==="html"||e==="text"}}},m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)},re=function(e,t,n,i){return e(i||"div",{id:t,ref:n})},le=function(e,t,n){return e("textarea",{id:t,visibility:"hidden",ref:n})},ue=V({props:oe,setup:function(e,t){var n=e.init?m({},e.init):{},i=j(e),r=i.disabled,o=i.modelValue,d=i.tagName,l=C(null),a=null,c=e.id||D("tiny-vue"),f=e.init&&e.init.inline||e.inline,g=!!t.attrs["onUpdate:modelValue"],b=!0,A=e.initialValue?e.initialValue:"",h="",M=function(u){return g?function(){return o!=null&&o.value?o.value:""}:function(){return u?A:h}},y=function(){var u=M(b),s=m(m({},n),{readonly:e.disabled,selector:"#"+c,plugins:ee(n.plugins,e.plugins),toolbar:e.toolbar||n.toolbar,inline:f,setup:function(p){a=p,p.on("init",function(z){return X(z,e,t,p,o,u)}),typeof n.setup=="function"&&n.setup(p)}});$(l.value)&&(l.value.style.visibility=""),v().init(s),b=!1};_(r,function(u){var s;a!==null&&(typeof((s=a.mode)===null||s===void 0?void 0:s.set)=="function"?a.mode.set(u?"readonly":"design"):a.setMode(u?"readonly":"design"))}),_(d,function(u){var s;g||(h=a.getContent()),(s=v())===null||s===void 0||s.remove(a),S(function(){return y()})}),O(function(){if(v()!==null)y();else if(l.value&&l.value.ownerDocument){var u=e.cloudChannel?e.cloudChannel:"5",s=e.apiKey?e.apiKey:"no-api-key",p=ne(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+s+"/tinymce/"+u+"/tinymce.min.js":e.tinymceScriptSrc;ae.load(l.value.ownerDocument,p,y)}}),I(function(){v()!==null&&v().remove(a)}),f||(L(function(){b||y()}),U(function(){var u;g||(h=a.getContent()),(u=v())===null||u===void 0||u.remove(a)}));var P=function(u){var s;h=a.getContent(),(s=v())===null||s===void 0||s.remove(a),n=m(m({},n),u),S(function(){return y()})};return t.expose({rerender:P}),function(){return f?re(x,c,l,e.tagName):le(x,c,l)}}});const se=V({__name:"index",props:{modelValue:{default:""},width:{default:"1000"},height:{default:"1000"}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e;let i=K({get:()=>n.modelValue||"",set:a=>{t("update:modelValue",a)}});const r=C(null),o=C({callback:null,type:"image"}),d=N({apiKey:"mejzqiqf65aswd278mtojz1w7g3zysvdhg3sjen77zf7f6e9",init:{language:"zh_CN",placeholder:"\u5728\u8FD9\u91CC\u8F93\u5165\u6587\u5B57",min_width:n.width,min_height:n.height,height:n.height,resize:"both",branding:!1,font_formats:"\u5FAE\u8F6F\u96C5\u9ED1=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;\u82F9\u679C\u82F9\u65B9=PingFang SC,Microsoft YaHei,sans-serif;\u5B8B\u4F53=simsun,serif;\u4EFF\u5B8B\u4F53=FangSong,serif;\u9ED1\u4F53=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",plugins:"preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern autosave",toolbar:["fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote subscript superscript removeformat ","styleselect formatselect fontselect fontsizeselect |  table image axupimgs media charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace | code print preview | indent2em lineheight formatpainter"],paste_data_images:!0,file_picker_types:"file image media",convert_urls:!1,file_picker_callback:(a,c,f)=>{var g;f.filetype=="image"?o.value.type="image":f.filetype=="media"?o.value.type="video":o.value.type="file",(g=r.value)==null||g.showPopup(1),o.value.callback=a}}}),l=a=>{o.value.callback(a)};return(a,c)=>(H(),q("div",{class:"tinymce-boxz",style:G({"max-width":e.width+"px","max-height":e.height+"px"})},[k(w(ue),{modelValue:w(i),"onUpdate:modelValue":c[0]||(c[0]=f=>T(i)?i.value=f:i=f),"api-key":d.apiKey,init:d.init},null,8,["modelValue","api-key","init"]),k(Y,{hiddenUpload:!0,type:o.value.type,ref_key:"materialRef",ref:r,onChange:l},null,8,["type"])],4))}});var fe=R(se,[["__scopeId","data-v-456d9d46"]]);export{fe as E};
