!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}var o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},u=function(){function n(n,e){var t=[],r=!0,o=!1,u=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(c){o=!0,u=c}finally{try{!r&&i["return"]&&i["return"]()}finally{if(o)throw u}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=t(3),i=r(a),c=t(5),l=t(4),d=r(l),f={c:function(n){var e=i["default"].createComponent(v,null,n,"b","c","d");return e},u:function(){},r:i["default"].DEADPOOL},p={c:function(n){var e,t,r=document.createElement("body");return e=document.createElement("h1"),e.appendChild(document.createTextNode("WORD COUNTZZZ")),r.appendChild(e),e=document.createElement("input"),e.type="file",n.b=e,e.onchange=n.a,r.appendChild(e),e=document.createElement("div"),e.className="progress",e.appendChild(i["default"].createDynamic(!0,e,n.c,n,"d","e")),r.appendChild(e),e=document.createElement("table"),t=document.createElement("tbody"),t.appendChild(i["default"].createDynamic(!0,t,n.f,n,"g","h")),e.appendChild(t),r.appendChild(e),r},u:function(n,e){n.a!==e.a&&(e.b.onchange=n.a,e.a=n.a),n.c!==e.c&&(e.c=e.d(!0,n.c,e.c,e.e,e,"d","e")),n.f!==e.f&&(e.f=e.g(!0,n.f,e.f,e.h,e,"g","h"))},r:i["default"].DEADPOOL},s={c:function(n){var e,t=document.createElement("tr");return e=document.createElement("td"),e.appendChild(i["default"].createDynamic(!0,e,n.a,n,"b","c")),t.appendChild(e),e=document.createElement("td"),e.appendChild(i["default"].createDynamic(!0,e,n.d,n,"e","f")),t.appendChild(e),t},u:function(n,e){n.a!==e.a&&(e.a=e.b(!0,n.a,e.a,e.c,e,"b","c")),n.d!==e.d&&(e.d=e.e(!0,n.d,e.d,e.f,e,"e","f"))},r:i["default"].DEADPOOL},v=function(n,e,t){var r=e.progress,o=e.wordCounts,a=t.onFileChange;return{$s:p,$n:null,$c:null,$t:null,$a:null,$p:null,a:a,b:null,c:r,d:null,e:null,f:Array.from(o.entries()).map(function(n){var e=u(n,2),t=e[0],r=e[1];return{$s:s,$n:null,$c:null,$t:null,$a:null,$p:null,a:t,b:null,c:null,d:r,e:null,f:null,key:t}}),g:null,h:null}};v.state={onInit:function(n,e,t){return{startTime:0,progress:"",wordCounts:new Map}},onUploadData:function(n,e,t,r,o){var u=e.wordCounts,a=e.startTime;return{startTime:a||Date.now(),progress:"counting... "+(100*o|0)+"%",wordCounts:(0,c.countWords)(r,u)}},onUploadEnd:function(n,e,t){return o({},e,{progress:"Done "+((Date.now()-e.startTime)/1e3|0)+"s"})},onFileChange:function(n,e,t,r){var u=t.onUploadEnd,a=t.onUploadData,i=r.target.files;return(0,d["default"])({file:i[0],onUploadEnd:u,onUploadData:a}),o({},e,{progress:"uploading..."})}},document.body=i["default"].render({$s:f,$n:null,$c:null,$t:null,$a:null,$p:null,b:null,c:null,d:null})},function(n,e){"use strict";n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children=[],n.webpackPolyfill=1),n}},function(n,e,t){var r,o,u;(function(n){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};!function(a,i){"object"==t(e)&&"object"==t(n)?n.exports=i():(o=[],r=i,u="function"==typeof r?r.apply(e,o):r,!(void 0!==u&&(n.exports=u)))}(void 0,function(){return function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(n,e,t){n.exports=t(1)},function(n,e){function t(){}Object.defineProperty(e,"__esModule",{value:!0}),e.Pool=t;var r={$p:null},o=document.createComment(""),u=e.DEADPOOL={push:function(){},pop:function(){}};t.prototype={push:function(n){var e=n.key;n.next=this[e],this[e]=n},pop:function(n){var e=this[n];return e?(this[n]=e.next,e):void 0}};var a=function(n){n.$s.r.push(n)},i=function(){return o.cloneNode(!1)},c=function(n,e){var t=n.parentNode;t&&t.replaceChild(e,n)},l=function(n,e,t){return t?n.insertBefore(e,t):n.appendChild(e)},d=function(n,e){for(var t=n.length,r=0,o=void 0;t>r;)o=n[r++],a(o),e.removeChild(o.$n)},f=function(n,e){for(var t=n.length,r=0;t>r;)a(n[r++]);e.textContent=""},p=function(n,e){return e.$s===n.$s&&(n.$s.u(n,e),!0)},s=function(n,e,t,r,o){if(!p(e,t)){var u=U(e),i=r.$n;e.$c=t.$c,e.$t=t.$t,e.$p=t.$p,e.$a=n,r.$n=u,r[o]=e,n.$$instance=e,u.xvdom=r,c(i,u),a(e)}},v=function(n,e,t,r,o){var u=n.$$instance,a=u.$p,i=u.$t,c=n.$$doRerender;n.$$doRerender=!1;var l=e.apply(void 0,[a,i,n].concat(o));return n.$$doRerender=c,u.$t=l,i!==l&&c&&s(n,u.$c(a,l,n),u,t,r),l},$=function(n,e,t,r){return function(){for(var o=arguments.length,u=Array(o),a=0;o>a;a++)u[a]=arguments[a];return v(n,e,t,r,u)}},m=function(n,e,t){var o={$$doRerender:!1,$$instance:r};for(var u in n)o[u]=$(o,n[u],e,t);return o},y=function(n,e,t,r){for(var o=0;t>o;)l(n,(e[o]=S(e[o])).$n,r),++o},h=function(n,e,t){for(var r=0;t>r;)n.appendChild((e[r]=S(e[r])).$n),++r},g=function(n,e,t,r,o,u,i,c,d){for(var f={},p=c.$n,s=void 0,v=void 0,$=void 0;d>=i;)s=t[i++],f[s.key]=s;for(;o>=r;)$=e[r],v=$.key,s=f[v],s?(s===c&&(p=p.nextSibling),f[v]=null,$=_(s,$)):$=S($),e[r]=$,l(n,$.$n,p),++r;for(v in f)s=f[v],s&&(a(s),n.removeChild(s.$n))},b=function(n,e,t,r,o,u,i,c,d,f,p,s){if(c>f)for(;u>=r;)o=e[r],l(n,(e[r]=S(o)).$n,s),++r;else if(r>u)for(;f>=c;)d=t[c++],a(d),n.removeChild(d.$n);else g(n,e,t,r,u,d,c,p,f)},C=function(n,e,t,r,o,u){var a=0,i=0,c=!0,d=t-1,f=o-1,p=0!==t&&e[0],s=0!==o&&r[0],v=u,$=void 0,m=void 0,y=void 0;n:for(;c&&f>=a&&d>=i;){for(c=!1;s.key===p.key;){if(e[i]=_(s,p),a++,i++,a>f||i>d)break n;s=r[a],p=e[i],c=!0}for($=r[f],m=e[d];$.key===m.key;){if(v=(e[d]=_($,m)).$n,f--,d--,a>f||i>d)break n;$=r[f],m=e[d],c=!0}for(;s.key===m.key;){if(y=(e[d]=_(s,m)).$n,$.key!==m.key&&(v=l(n,y,v)),a++,d--,a>f||i>d)break n;s=r[a],m=e[d],c=!0}for(;$.key===p.key;){if(l(n,(e[i]=_($,p)).$n,s.$n),f--,i++,a>f||i>d)break n;$=r[f],p=e[i],c=!0}}(d>=i||f>=a)&&b(n,e,r,i,p,d,m,a,s,f,$,v)},x=function(n,e,t){var r=n.parentNode,o=e.length,u=t.length;o?u?C(r,e,o,t,u,n):y(r,e,o,n):d(t,r)},D=function(n,e,t){var r=e.length,o=t.length;r?o?C(n,e,r,t,o,null):h(n,e,r):f(t,n)},k=function(n,e,t,r,o,u,a){return null==e?r.nodeValue="":e.constructor===String||e.constructor===Number?r.nodeValue=e:O(n,e,null,r,o,u,a),e},O=function(n,e,t,r,o,u,a){return c(r,T(n,r.parentNode,e,o,u,a)),e},w=function(n,e,t,r,o,u,a){return e&&p(e,t)?t:O(n,e,null,r,o,u,a)},E=function(n,e,t,r,o,u,a,i){var c=r.$a,l=c.onProps;r.$p=e,l?l():s(c,r.$c(e,r.$t,c),r,u,i)},A=function(n,e,t,r,o,u,a,i){var l=n(e||{});p(l,r)||c(o,u[a]=(u[i]=S(l)).$n)},P=function(n,e,t,r,o,u,a){return e instanceof Array?n?D(r,e,t):x(r,e,t):n?(f(t,r),r.appendChild(T(!0,r,e,o,u,a))):(d(t,r.parentNode),O(!1,e,null,r,o,u,a)),e},N=function(n,e,t,o,u,a){r.$p=e;var i=n.state,c=m(i,t,a),l=i.onInit(e||{},void 0,c);c.$$doRerender=!0;var d=n(e,l,c),f=U(d);return c.$$instance=d,d.$c=n,d.$t=l,d.$a=c,d.$p=e,t[o]=E,t[a]=d,t[u]=f,f},T=e.createDynamic=function(n,e,t,r,o,u){var a=void 0,c=void 0,l=void 0,d=void 0;return null==t||(d=t.constructor)===Boolean?(l=O,c=a=i()):d===Object?(l=w,c=a=U(t)):d===String||d===Number?(l=k,c=a=document.createTextNode(t)):d===Array&&(a=document.createDocumentFragment(),h(a,t,t.length),l=P,c=n?e:a.appendChild(i())),r[o]=l,r[u]=c,a},j=e.createComponent=function(n,e,t,r,o,u){if(n.state)return N(n,e,t,r,o,u);var a=n(e||{}),i=U(a);return t[r]=A,t[u]=a,t[o]=i,i},S=function(n){var e=n.$s,t=e.r.pop(n.key);return t?(e.u(n,t),t):((n.$n=e.c(n)).xvdom=n,n)},U=e.render=function(n){return S(n).$n},_=function(n,e){return p(e,n)?n:(e=S(e),c(n.$n,e.$n),a(n),e)},R=e.rerender=function(n,e){return _(n.xvdom,e).$n},L=e.unmount=function(n){n.xvdom&&a(n.xvdom),n.parentNode&&n.parentNode.removeChild(n)};e["default"]={createDynamic:T,createComponent:j,render:U,rerender:R,unmount:L,Pool:t,DEADPOOL:u},e._={rerenderText:k,rerenderInstance:w,rerenderDynamic:O,rerenderArray:P}}])})}).call(e,t(2)(n))},function(n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(n){function e(){u.readAsText(t.slice(c,c+i))}var t=n.file,r=n.onUploadEnd,o=n.onUploadData,u=new FileReader,a=t.size,i=1048576,c=0,l=0,d="",f=/[a-z0-9']$/;u.onload=function(n){var t=u.result,p=d,s=void 0;l+=t.length,t.match(f)&&-1!==(s=t.lastIndexOf(" "))?(d=t.slice(s,t.length),t=t.slice(0,s)):d="",o(p+t,l/a),c+=i,a>c?window.requestAnimationFrame(e):r()},e()}},function(n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(n,e,t,r){for(var o=void 0;o=e.exec(n);)r=t(r,o[0]);return r},r=function(n,e){return n.set(e,(0|n.get(e))+1)};e.countWords=function(n){var e=arguments.length<=1||void 0===arguments[1]?new Map:arguments[1];return t(n.toLowerCase(),/\w+/g,r,e)}}]);