(window.webpackJsonp_custom_welcome_guide=window.webpackJsonp_custom_welcome_guide||[]).push([[2],{9:function(e,t,n){}}]),function(e){function t(t){for(var o,s,i=t[0],l=t[1],a=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={1:0},c=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp_custom_welcome_guide=window.webpackJsonp_custom_welcome_guide||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var u=l;c.push([10,2]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.api},function(e,t){e.exports=window.React},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},,,function(e,t){e.exports=window.wp.plugins},,function(e,t,n){"use strict";n.r(t);var o=n(0),r=(n(9),n(5)),c=n.n(r),s=n(1),i=(n(2),n(4)),l=n(3),a=n.n(l);const u=custom_welcome_guide_script_params.rest_url,p=()=>{const[e,t]=Object(i.useState)([]);return Object(i.useEffect)(()=>{(async()=>{const e=await fetch(u+"wp/v2/guides?filter[orderby]=date&order=asc"),n=await e.json();t(n)})()},[]),e},d=()=>{const[e,t]=Object(i.useState)({});return Object(i.useEffect)(()=>{a.a.loadPromise.then(()=>{const n=new a.a.models.Settings;e.isAPILoaded||n.fetch().then(e=>{t({isShowPost:e.cwg_options.is_show_post?e.cwg_options.is_show_post:"",isShowPage:e.cwg_options.is_show_page?e.cwg_options.is_show_page:"",isShowCPT:e.cwg_options.is_show_cpt?e.cwg_options.is_show_cpt:"",featuredPostId:e.cwg_options.featured_post_id?e.cwg_options.featured_post_id:"",isAPILoaded:!0})})})},[]),e};var m=e=>{const t=p(),{parentPostId:n}=e;function r(e){let t=document.createElement("div");t.innerHTML=e;let n=t.querySelectorAll("style, script"),o=n.length;for(;o--;)n[o].parentNode.removeChild(n[o]);return t.innerHTML}return t.length>0&&Object(o.createElement)(s.Guide,c()({},e,{className:"edit-post-welcome-guide custom-welcome-guide",pages:t.filter(e=>e.parent==n||e.id==n).map(e=>({image:e.featured_image?Object(o.createElement)("div",{class:"post-thumbnail"},Object(o.createElement)("img",{src:e.featured_image})):"",content:Object(o.createElement)("div",null,Object(o.createElement)("h2",{className:"edit-post-welcome-guide__heading"},e.title.rendered),Object(o.createElement)("div",{className:"edit-post-welcome-guide__text",dangerouslySetInnerHTML:{__html:r(e.content.rendered)}}))}))}))};const{__:__}=wp.i18n;var w=e=>{const[t,n]=Object(o.useState)(!1),r=p(),[i,l]=Object(o.useState)(),a=r.filter(e=>0==e.parent);return Object(o.createElement)(o.Fragment,null,r.length>0&&a.map((e,t)=>Object(o.createElement)("div",{class:"guide-list"},0==t&&1==a.length?"":Object(o.createElement)("span",null,t+1+"."),Object(o.createElement)(s.Button,{className:"guide-btn",key:t,onClick:()=>{n(!0),l(e.id)}},e.title.rendered))),t&&Object(o.createElement)(m,c()({},e,{onFinish:()=>n(!1),parentPostId:i})))},f=e=>{const[t,n]=Object(o.useState)(!0),{isAPILoaded:r,featuredPostId:c}=d();return r?!localStorage.getItem("custom-welcome-guide")&&c&&Object(o.createElement)(o.Fragment,null,t&&Object(o.createElement)(m,{parentPostId:c,onFinish:()=>{n(!1),localStorage.setItem("custom-welcome-guide","yes")}})):null},g=n(8);const{PluginDocumentSettingPanel:_}=wp.editPost;function b(){const e=document.body.className.indexOf("post-type-post")>-1,t=document.body.className.indexOf("post-type-page")>-1,n=!e&&!t,{isShowPost:o,isShowPage:r,isShowCPT:c,isAPILoaded:s}=d();return!(!e||!o)||!(!t||!r)||!(!n||!c)}const h=()=>Object(o.createElement)(o.Fragment,null,b()&&Object(o.createElement)(_,{name:"welcome-guide",title:"Welcome Guide",className:"welcome-guide"},Object(o.createElement)(w,null)));Object(g.registerPlugin)("welcome-guide-plugin-document-setting-panel",{render:function(){return Object(o.createElement)(o.Fragment,null,b()&&Object(o.createElement)(f,null),Object(o.createElement)(h,null))},icon:"welcome-view-site"})}]);