import{A as P,e as D,w as T,t as V}from"./index-DkkNlLnX.js";var s={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var w=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;function G(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function J(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(u){return r[u]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(u){o[u]=u}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var K=J()?Object.assign:function(e,r){for(var t,n=G(e),o,u=1;u<arguments.length;u++){t=Object(arguments[u]);for(var i in t)W.call(t,i)&&(n[i]=t[i]);if(w){o=w(t);for(var c=0;c<o.length;c++)H.call(t,o[c])&&(n[o[c]]=t[o[c]])}}return n};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=K,y=60103,R=60106;s.Fragment=60107;s.StrictMode=60108;s.Profiler=60114;var b=60109,x=60110,A=60112;s.Suspense=60113;var I=60115,q=60116;if(typeof Symbol=="function"&&Symbol.for){var a=Symbol.for;y=a("react.element"),R=a("react.portal"),s.Fragment=a("react.fragment"),s.StrictMode=a("react.strict_mode"),s.Profiler=a("react.profiler"),b=a("react.provider"),x=a("react.context"),A=a("react.forward_ref"),s.Suspense=a("react.suspense"),I=a("react.memo"),q=a("react.lazy")}var E=typeof Symbol=="function"&&Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U={};function v(e,r,t){this.props=e,this.context=r,this.refs=U,this.updater=t||M}v.prototype.isReactComponent={};v.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")};v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F(){}F.prototype=v.prototype;function j(e,r,t){this.props=e,this.context=r,this.refs=U,this.updater=t||M}var O=j.prototype=new F;O.constructor=j;g(O,v.prototype);O.isPureReactComponent=!0;var S={current:null},L=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function z(e,r,t){var n,o={},u=null,i=null;if(r!=null)for(n in r.ref!==void 0&&(i=r.ref),r.key!==void 0&&(u=""+r.key),r)L.call(r,n)&&!N.hasOwnProperty(n)&&(o[n]=r[n]);var c=arguments.length-2;if(c===1)o.children=t;else if(1<c){for(var f=Array(c),l=0;l<c;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)o[n]===void 0&&(o[n]=c[n]);return{$$typeof:y,type:e,key:u,ref:i,props:o,_owner:S.current}}function Y(e,r){return{$$typeof:y,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function X(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}var $=/\/+/g;function _(e,r){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):r.toString(36)}function m(e,r,t,n,o){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case y:case R:i=!0}}if(i)return i=e,o=o(i),e=n===""?"."+_(i,0):n,Array.isArray(o)?(t="",e!=null&&(t=e.replace($,"$&/")+"/"),m(o,r,t,"",function(l){return l})):o!=null&&(k(o)&&(o=Y(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace($,"$&/")+"/")+e)),r.push(o)),1;if(i=0,n=n===""?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){u=e[c];var f=n+_(u,c);i+=m(u,r,t,f,o)}else if(f=Q(e),typeof f=="function")for(e=f.call(e),c=0;!(u=e.next()).done;)u=u.value,f=n+_(u,c++),i+=m(u,r,t,f,o);else if(u==="object")throw r=""+e,Error(d(31,r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function h(e,r,t){if(e==null)return e;var n=[],o=0;return m(e,n,"","",function(u){return r.call(t,u,o++)}),n}function Z(e){if(e._status===-1){var r=e._result;r=r(),e._status=0,e._result=r,r.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}var B={current:null};function p(){var e=B.current;if(e===null)throw Error(d(321));return e}var ee={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:g};s.Children={map:h,forEach:function(e,r,t){h(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return h(e,function(){r++}),r},toArray:function(e){return h(e,function(r){return r})||[]},only:function(e){if(!k(e))throw Error(d(143));return e}};s.Component=v;s.PureComponent=j;s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee;s.cloneElement=function(e,r,t){if(e==null)throw Error(d(267,e));var n=g({},e.props),o=e.key,u=e.ref,i=e._owner;if(r!=null){if(r.ref!==void 0&&(u=r.ref,i=S.current),r.key!==void 0&&(o=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in r)L.call(r,f)&&!N.hasOwnProperty(f)&&(n[f]=r[f]===void 0&&c!==void 0?c[f]:r[f])}var f=arguments.length-2;if(f===1)n.children=t;else if(1<f){c=Array(f);for(var l=0;l<f;l++)c[l]=arguments[l+2];n.children=c}return{$$typeof:y,type:e.type,key:o,ref:u,props:n,_owner:i}};s.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:x,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:b,_context:e},e.Consumer=e};s.createElement=z;s.createFactory=function(e){var r=z.bind(null,e);return r.type=e,r};s.createRef=function(){return{current:null}};s.forwardRef=function(e){return{$$typeof:A,render:e}};s.isValidElement=k;s.lazy=function(e){return{$$typeof:q,_payload:{_status:-1,_result:e},_init:Z}};s.memo=function(e,r){return{$$typeof:I,type:e,compare:r===void 0?null:r}};s.useCallback=function(e,r){return p().useCallback(e,r)};s.useContext=function(e,r){return p().useContext(e,r)};s.useDebugValue=function(){};s.useEffect=function(e,r){return p().useEffect(e,r)};s.useImperativeHandle=function(e,r,t){return p().useImperativeHandle(e,r,t)};s.useLayoutEffect=function(e,r){return p().useLayoutEffect(e,r)};s.useMemo=function(e,r){return p().useMemo(e,r)};s.useReducer=function(e,r,t){return p().useReducer(e,r,t)};s.useRef=function(e){return p().useRef(e)};s.useState=function(e){return p().useState(e)};s.version="17.0.2";var re=V('<div id=loadingSpinner><svg class=spinnerSvg viewBox="25 25 50 50"><circle cx=50 cy=50 r=20 fill=none strokeMiterlimit=10>');const ne=e=>{let r="spinnerPath",t={};return e?.stroke&&(r="spinnerPathWC",t={stroke:e?.stroke}),(()=>{var n=re(),o=n.firstChild,u=o.firstChild;return n.style.setProperty("position","relative"),P(u,"class",r),D(i=>{var c=e?.size+"px"||"10px",f=e?.size+"px"||"10px",l=t,C=e?.strokeW||2;return c!==i.e&&((i.e=c)!=null?n.style.setProperty("width",c):n.style.removeProperty("width")),f!==i.t&&((i.t=f)!=null?n.style.setProperty("height",f):n.style.removeProperty("height")),i.a=T(u,l,i.a),C!==i.o&&P(u,"strokeWidth",i.o=C),i},{e:void 0,t:void 0,a:void 0,o:void 0}),n})()};export{ne as default};
