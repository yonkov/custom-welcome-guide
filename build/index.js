(window.webpackJsonp_custom_welcome_guide=window.webpackJsonp_custom_welcome_guide||[]).push([[2],{12:function(e,t,n){}}]),function(e){function t(t){for(var o,s,i=t[0],a=t[1],u=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={1:0},c=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp_custom_welcome_guide=window.webpackJsonp_custom_welcome_guide||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=a;c.push([13,2]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var o=n(5),r=n(4),c=n.n(r);const s=custom_welcome_guide_script_params.rest_url,i=()=>{const[e,t]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{(async()=>{const e=await fetch(s+"wp/v2/guides?filter[orderby]=date&order=asc"),n=await e.json();t(n)})()},[]),e},a=()=>{const[e,t]=Object(o.useState)({});return Object(o.useEffect)(()=>{c.a.loadPromise.then(()=>{const n=new c.a.models.Settings;e.isAPILoaded||n.fetch().then(e=>{t({isShowPost:e.cwg_options.is_show_post?e.cwg_options.is_show_post:"",isShowPage:e.cwg_options.is_show_page?e.cwg_options.is_show_page:"",isShowCPT:e.cwg_options.is_show_cpt?e.cwg_options.is_show_cpt:"",isShowAdmin:e.cwg_options.is_show_admin?e.cwg_options.is_show_admin:"",featuredPostId:e.cwg_options.featured_post_id?e.cwg_options.featured_post_id:"",isAPILoaded:!0})})})},[]),e}},function(e,t){e.exports=window.wp.api},function(e,t){e.exports=window.React},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";var o=n(6),r=n.n(o),c=n(0),s=(n(2),n(1)),i=n(3);t.a=e=>{const t=Object(i.a)(),{parentPostId:n}=e;function o(e){let t=document.createElement("div");t.innerHTML=e;let n=t.querySelectorAll("style, script"),o=n.length;for(;o--;)n[o].parentNode.removeChild(n[o]);return t.innerHTML}return t.length>0&&Object(c.createElement)(s.Guide,r()({},e,{className:"edit-post-welcome-guide custom-welcome-guide",pages:t.filter(e=>e.parent==n||e.id==n).map(e=>({image:e.featured_image?Object(c.createElement)("div",{class:"post-thumbnail"},Object(c.createElement)("img",{src:e.featured_image})):"",content:Object(c.createElement)("div",null,Object(c.createElement)("h2",{className:"edit-post-welcome-guide__heading"},e.title.rendered),Object(c.createElement)("div",{className:"edit-post-welcome-guide__text",dangerouslySetInnerHTML:{__html:o(e.content.rendered)}}))}))}))}},function(e,t,n){"use strict";var o=n(0),r=n(3),c=n(7);t.a=e=>{const[t,n]=Object(o.useState)(!0),{isAPILoaded:s,featuredPostId:i}=Object(r.b)();return s?!localStorage.getItem("custom-welcome-guide")&&i&&Object(o.createElement)(o.Fragment,null,t&&Object(o.createElement)(c.a,{parentPostId:i,onFinish:()=>{n(!1),localStorage.setItem("custom-welcome-guide","yes")}})):null}},,,function(e,t){e.exports=window.wp.plugins},,function(e,t,n){"use strict";n.r(t);var o=n(0),r=(n(12),n(6)),c=n.n(r),s=n(1),i=n(7),a=n(3);const u=custom_welcome_guide_script_params.site_url,{__:__}=wp.i18n;var l=e=>{const[t,n]=Object(o.useState)(!1),r=Object(a.a)(),[l,d]=Object(o.useState)();if(!r)return Object(o.createElement)("div",{className:"guide-list"},Object(o.createElement)(s.Spinner,null));const p=r.filter(e=>0==e.parent);return Object(o.createElement)(o.Fragment,null,0==r.length&&Object(o.createElement)("span",null,__("No guides found. Get started by ","custom-welcome-guide"),Object(o.createElement)("a",{href:u+"/wp-admin/edit.php?post_type=guides"},""+__("adding a guide","custom-welcome-guide"))),r.length>0&&p.map((e,t)=>Object(o.createElement)("div",{className:"guide-list"},0==t&&1==p.length?"":Object(o.createElement)("span",null,t+1+"."),Object(o.createElement)(s.Button,{className:"guide-btn",key:t,onClick:()=>{n(!0),d(e.id)}},e.title.rendered))),t&&Object(o.createElement)(i.a,c()({},e,{onFinish:()=>n(!1),parentPostId:l})))},d=n(8),p=n(11);const{PluginDocumentSettingPanel:m}=wp.editPost;function w(){const e=document.body.className.indexOf("post-type-post")>-1,t=document.body.className.indexOf("post-type-page")>-1,n=!e&&!t,{isShowPost:o,isShowPage:r,isShowCPT:c,isAPILoaded:s}=Object(a.b)();return!(!e||!o)||!(!t||!r)||!(!n||!c)}const g=()=>Object(o.createElement)(o.Fragment,null,w()&&Object(o.createElement)(m,{name:"welcome-guide",title:"Welcome Guide",className:"welcome-guide"},Object(o.createElement)(l,null)));Object(p.registerPlugin)("welcome-guide-plugin-document-setting-panel",{render:function(){return Object(o.createElement)(o.Fragment,null,w()&&Object(o.createElement)(d.a,null),Object(o.createElement)(g,null))},icon:"welcome-view-site"})}]);