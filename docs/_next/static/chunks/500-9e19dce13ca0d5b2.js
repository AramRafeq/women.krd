(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[500],{5054:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(4184),o=n.n(r),a=n(7294),i=n(3124),u=n(9559);var l=e=>{const{value:t,formatter:n,precision:r,decimalSeparator:o,groupSeparator:i="",prefixCls:u}=e;let l;if("function"===typeof n)l=n(t);else{const e=String(t),n=e.match(/^(-?)(\d*)(\.(\d+))?$/);if(n&&"-"!==e){const e=n[1];let t=n[2]||"0",s=n[4]||"";t=t.replace(/\B(?=(\d{3})+(?!\d))/g,i),"number"===typeof r&&(s=s.padEnd(r,"0").slice(0,r>0?r:0)),s&&(s=`${o}${s}`),l=[a.createElement("span",{key:"int",className:`${u}-content-value-int`},e,t),s&&a.createElement("span",{key:"decimal",className:`${u}-content-value-decimal`},s)]}else l=e}return a.createElement("span",{className:`${u}-content-value`},l)},s=n(7968),c=n(5503),f=n(4747);const d=e=>{const{componentCls:t,marginXXS:n,padding:r,colorTextDescription:o,statisticTitleFontSize:a,colorTextHeading:i,statisticContentFontSize:u,statisticFontFamily:l}=e;return{[`${t}`]:Object.assign(Object.assign({},(0,f.Wf)(e)),{[`${t}-title`]:{marginBottom:n,color:o,fontSize:a},[`${t}-skeleton`]:{paddingTop:r},[`${t}-content`]:{color:i,fontSize:u,fontFamily:l,[`${t}-content-value`]:{display:"inline-block",direction:"ltr"},[`${t}-content-prefix, ${t}-content-suffix`]:{display:"inline-block"},[`${t}-content-prefix`]:{marginInlineEnd:n},[`${t}-content-suffix`]:{marginInlineStart:n}}})}};var p=(0,s.Z)("Statistic",(e=>{const{fontSizeHeading3:t,fontSize:n,fontFamily:r}=e,o=(0,c.TS)(e,{statisticTitleFontSize:n,statisticContentFontSize:t,statisticFontFamily:r});return[d(o)]})),m=n(7838),v=n(6159);const b=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function y(e,t){const{format:n=""}=t,r=new Date(e).getTime(),o=Date.now();return function(e,t){let n=e;const r=/\[[^\]]*]/g,o=(t.match(r)||[]).map((e=>e.slice(1,-1))),a=t.replace(r,"[]"),i=b.reduce(((e,t)=>{let[r,o]=t;if(e.includes(r)){const t=Math.floor(n/o);return n-=t*o,e.replace(new RegExp(`${r}+`,"g"),(e=>{const n=e.length;return t.toString().padStart(n,"0")}))}return e}),a);let u=0;return i.replace(r,(()=>{const e=o[u];return u+=1,e}))}(Math.max(r-o,0),n)}const h=e=>{const{value:t,format:n="HH:mm:ss",onChange:r,onFinish:o}=e,i=(0,m.Z)(),u=a.useRef(null),l=()=>{const e=function(e){return new Date(e).getTime()}(t);e>=Date.now()&&(u.current=setInterval((()=>{i(),null===r||void 0===r||r(e-Date.now()),e<Date.now()&&(null===o||void 0===o||o(),u.current&&(clearInterval(u.current),u.current=null))}),33.333333333333336))};a.useEffect((()=>(l(),()=>{u.current&&(clearInterval(u.current),u.current=null)})),[t]);return a.createElement(_,Object.assign({},e,{valueRender:e=>(0,v.Tm)(e,{title:void 0}),formatter:(e,t)=>y(e,Object.assign(Object.assign({},t),{format:n}))}))};const g=e=>{const{prefixCls:t,className:n,style:r,valueStyle:s,value:c=0,title:f,valueRender:d,prefix:m,suffix:v,loading:b=!1,onMouseEnter:y,onMouseLeave:h,decimalSeparator:g=".",groupSeparator:_=","}=e,{getPrefixCls:O,direction:j}=a.useContext(i.E_),w=O("statistic",t),[S,E]=p(w),x=a.createElement(l,Object.assign({decimalSeparator:g,groupSeparator:_,prefixCls:w},e,{value:c})),k=o()(w,{[`${w}-rtl`]:"rtl"===j},n,E);return S(a.createElement("div",{className:k,style:r,onMouseEnter:y,onMouseLeave:h},f&&a.createElement("div",{className:`${w}-title`},f),a.createElement(u.Z,{paragraph:!1,loading:b,className:`${w}-skeleton`},a.createElement("div",{style:s,className:`${w}-content`},m&&a.createElement("span",{className:`${w}-content-prefix`},m),d?d(x):x,v&&a.createElement("span",{className:`${w}-content-suffix`},v)))))};g.Countdown=a.memo(h);var _=g,O=g},3507:function(e,t){"use strict";t.Z=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}})},7645:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](i):i instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var i,l;var s=r=o({},r,t);0;if(s.suspense)return n(s);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)},t.noSSR=u;i(n(7294));var a=i(n(4588));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4588:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=(i=n(7294))&&i.__esModule?i:{default:i},l=n(2021),s=n(3644);var c=[],f=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function v(e){return function(e,t){var n=function(){if(!o){var t=new m(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var o=null;if(!d&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&f.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,u=i[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var l=a.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,o=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}))}var c=r.suspense?function(e,t){return u.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=u.default.useContext(s.LoadableContext),i=l.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(p,e)}function b(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return b(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};b(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var y=v;t.default=y},2021:function(e,t,n){!function(){"use strict";var t={800:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,u,l=o(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))n.call(i,c)&&(l[c]=i[c]);if(t){u=t(i);for(var f=0;f<u.length;f++)r.call(i,u[f])&&(l[u[f]]=i[u[f]])}}return l}},569:function(e,t,n){0},403:function(e,t,n){var r=n(800),o=n(522);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,a=o.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=a[0];var i=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===n||(a=t(),i({getCurrentValue:t,subscribe:n,value:a})),o.useDebugValue(a),o.useEffect((function(){function e(){if(!o){var e=t();i((function(o){return o.getCurrentValue!==t||o.subscribe!==n||o.value===e?o:r({},o,{value:e})}))}}var o=!1,a=n(e);return e(),function(){o=!0,a()}}),[t,n]),a}},138:function(e,t,n){e.exports=n(403)},522:function(e){e.exports=n(7294)}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,o),i=!1}finally{i&&delete r[e]}return a.exports}o.ab="//";var a=o(138);e.exports=a}()},5152:function(e,t,n){e.exports=n(7645)},1032:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var s=a[l];if(!u(s))return!1;var c=e[s],f=t[s];if(!1===(o=n?n.call(r,c,f,s):void 0)||void 0===o&&c!==f)return!1}return!0}}}]);