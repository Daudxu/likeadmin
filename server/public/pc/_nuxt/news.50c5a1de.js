function t(){return $request.get({url:"/article/cate"})}function r(e){return $request.get({url:"/article/lists",params:e})}function l(){return $request.get({url:"/pc/infoCenter"})}function c(e){return $request.get({url:"/pc/articleDetail",params:e})}function u(e){return $request.post({url:"/article/addCollect",params:e})}function n(e){return $request.post({url:"/article/cancelCollect",params:e})}function a(e){return $request.get({url:"/article/collect",params:e})}export{c as a,u as b,n as c,l as d,a as e,t as f,r as g};