import{C as t}from"./index.17d42263.js";function r(){return t.get({url:"/article/cate"})}function a(r){return t.get({url:"/article/lists",data:r})}function e(r){return t.get({url:"/article/detail",data:r})}function l(r){return t.post({url:"/article/addCollect",data:r},{isAuth:!0})}function c(r){return t.post({url:"/article/cancelCollect",data:r},{isAuth:!0})}function n(){return t.get({url:"/article/collect"})}export{r as a,e as b,c,l as d,n as e,a as g};
