(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const He=(e,t)=>e===t,ie=Symbol("solid-proxy"),G={equals:He};let Se=_e;const _=1,X=2,Ee={owned:null,cleanups:null,context:null,owner:null};var p=null;let ne=null,Ge=null,v=null,P=null,O=null,Z=0;function Pe(e,t){const n=v,r=p,o=e.length===0,s=t===void 0?r:t,l=o?Ee:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=o?e:()=>e(()=>C(()=>z(l)));p=l,v=null;try{return k(i,!0)}finally{v=n,p=r}}function I(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Oe(n,o));return[Ce.bind(n),r]}function B(e,t,n){const r=de(e,t,!1,_);K(r)}function Xe(e,t,n){Se=tt;const r=de(e,t,!1,_);r.user=!0,O?O.push(r):K(r)}function E(e,t,n){n=n?Object.assign({},G,n):G;const r=de(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,K(r),Ce.bind(r)}function Je(e){return k(e,!1)}function C(e){if(v===null)return e();const t=v;v=null;try{return e()}finally{v=t}}function ce(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let a=0;a<e.length;a++)i[a]=e[a]()}else i=e();if(s)return s=!1,l;const u=C(()=>t(i,o,l));return o=i,u}}function Qe(e){Xe(()=>C(e))}function xe(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function fe(){return p}function Le(e,t){const n=p,r=v;p=e,v=null;try{return k(t,!0)}catch(o){pe(o)}finally{p=n,v=r}}function Ye(e){const t=v,n=p;return Promise.resolve().then(()=>{v=t,p=n;let r;return k(e,!1),v=p=null,r?r.done:void 0})}function Re(e,t){const n=Symbol("context");return{id:n,Provider:rt(n),defaultValue:e}}function Ze(e){let t;return p&&p.context&&(t=p.context[e.id])!==void 0?t:e.defaultValue}function he(e){const t=E(e),n=E(()=>le(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Ce(){if(this.sources&&this.state)if(this.state===_)K(this);else{const e=P;P=null,k(()=>Q(this),!1),P=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function Oe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=ne&&ne.running;l&&ne.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?P.push(s):O.push(s),s.observers&&ke(s)),l||(s.state=_)}if(P.length>1e6)throw P=[],new Error},!1)),t}function K(e){if(!e.fn)return;z(e);const t=Z;ze(e,e.value,t)}function ze(e,t,n){let r;const o=p,s=v;v=p=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=_,e.owned&&e.owned.forEach(z),e.owned=null),e.updatedAt=n+1,pe(l)}finally{v=s,p=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Oe(e,r):e.value=r,e.updatedAt=n)}function de(e,t,n,r=_,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:n};return p===null||p!==Ee&&(p.owned?p.owned.push(s):p.owned=[s]),s}function J(e){if(e.state===0)return;if(e.state===X)return Q(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===_)K(e);else if(e.state===X){const r=P;P=null,k(()=>Q(e,t[0]),!1),P=r}}function k(e,t){if(P)return e();let n=!1;t||(P=[]),O?n=!0:O=[],Z++;try{const r=e();return et(n),r}catch(r){n||(O=null),P=null,pe(r)}}function et(e){if(P&&(_e(P),P=null),e)return;const t=O;O=null,t.length&&k(()=>Se(t),!1)}function _e(e){for(let t=0;t<e.length;t++)J(e[t])}function tt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:J(r)}for(t=0;t<n;t++)J(e[t])}function Q(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===_?r!==t&&(!r.updatedAt||r.updatedAt<Z)&&J(r):o===X&&Q(r,t)}}}function ke(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=X,n.pure?P.push(n):O.push(n),n.observers&&ke(n))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function nt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function pe(e,t=p){throw nt(e)}function le(e){if(typeof e=="function"&&!e.length)return le(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=le(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function rt(e,t){return function(r){let o;return B(()=>o=C(()=>(p.context={...p.context,[e]:r.value},he(()=>r.children))),void 0),o}}let ot=!1;function x(e,t){return C(()=>e(t||{}))}function V(){return!0}const st={get(e,t,n){return t===ie?n:e.get(t)},has(e,t){return t===ie?!0:e.has(t)},set:V,deleteProperty:V,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:V,deleteProperty:V}},ownKeys(e){return e.keys()}};function re(e){return(e=typeof e=="function"?e():e)?e:{}}function it(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function lt(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&ie in i,e[l]=typeof i=="function"?(t=!0,E(i)):i}if(t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const u=re(e[i])[l];if(u!==void 0)return u}},has(l){for(let i=e.length-1;i>=0;i--)if(l in re(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(re(e[i])));return[...new Set(l)]}},st);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const u=Object.getOwnPropertyNames(i);for(let a=u.length-1;a>=0;a--){const c=u[a];if(c==="__proto__"||c==="constructor")continue;const h=Object.getOwnPropertyDescriptor(i,c);if(!r[c])r[c]=h.get?{enumerable:!0,configurable:!0,get:it.bind(n[c]=[h.get.bind(i)])}:h.value!==void 0?h:void 0;else{const g=n[c];g&&(h.get?g.push(h.get.bind(i)):h.value!==void 0&&g.push(()=>h.value))}}}const o={},s=Object.keys(r);for(let l=s.length-1;l>=0;l--){const i=s[l],u=r[i];u&&u.get?Object.defineProperty(o,i,u):o[i]=u?u.value:void 0}return o}const at=e=>`Stale read from <${e}>.`;function Te(e){const t=e.keyed,n=E(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return E(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?C(()=>o(t?r:()=>{if(!C(n))throw at("Show");return e.when})):o}return e.fallback},void 0,void 0)}function ut(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,u=t[o-1].nextSibling,a=null;for(;l<o||i<s;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const c=s<r?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],c)}else if(s===i)for(;l<o;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],c),t[o]=n[s]}else{if(!a){a=new Map;let h=i;for(;h<s;)a.set(n[h],h++)}const c=a.get(t[l]);if(c!=null)if(i<c&&c<s){let h=l,g=1,m;for(;++h<o&&h<s&&!((m=a.get(t[h]))==null||m!==c+g);)g++;if(g>c-i){const S=t[l];for(;i<c;)e.insertBefore(n[i++],S)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const ve="_$DX_DELEGATE";function ct(e,t,n,r={}){let o;return Pe(s=>{o=s,t===document?e():pt(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function ft(e,t,n){let r;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},s=()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function ht(e,t=window.document){const n=t[ve]||(t[ve]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,gt))}}function dt(e,t){e.className=t}function pt(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Y(e,t,r,n);B(o=>Y(e,t(),o,n),r)}function gt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=D(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=D(e,n,r);else{if(s==="function")return B(()=>{let i=t();for(;typeof i=="function";)i=i();n=Y(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],u=n&&Array.isArray(n);if(ae(i,t,n,o))return B(()=>n=Y(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=D(e,n,r),l)return n}else u?n.length===0?be(e,i,r):ut(e,n,i):(n&&D(e),be(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=D(e,n,r,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ae(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],u=n&&n[e.length],a;if(!(i==null||i===!0||i===!1))if((a=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))o=ae(e,i,u)||o;else if(a==="function")if(r){for(;typeof i=="function";)i=i();o=ae(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||o}else e.push(i),o=!0;else{const c=String(i);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return o}function be(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function D(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const u=i.parentNode===e;!s&&!l?u?e.replaceChild(o,i):e.insertBefore(o,n):u&&i.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const mt=!1;function $e(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const l={to:o,options:s,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:u=>{u&&(n=!0),i.navigate(o,{...s,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let ue;function ge(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ue=window.history.state._depth}ge();function yt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function wt(e,t){let n=!1;return()=>{const r=ue;ge();const o=r==null?null:ue-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const vt=/^(?:[a-z0-9]+:)?\/\//i,bt=/^\/+|(\/)\/+$/g,Ne="http://sr";function q(e,t=!1){const n=e.replace(bt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function H(e,t,n){if(vt.test(t))return;const r=q(e),o=n&&q(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+q(t,!s)}function At(e,t){return q(e).replace(/\/*(\*.*)?$/g,"")+q(t)}function je(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function St(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),l=s.length;return i=>{const u=i.split("/").filter(Boolean),a=u.length-l;if(a<0||a>0&&o===void 0&&!t)return null;const c={path:l?"":"/",params:{}},h=g=>n===void 0?void 0:n[g];for(let g=0;g<l;g++){const m=s[g],S=u[g],f=m[0]===":",d=f?m.slice(1):m;if(f&&oe(S,h(d)))c.params[d]=S;else if(f||!oe(S,m))return null;c.path+=`/${S}`}if(o){const g=a?u.slice(-a).join("/"):"";if(oe(g,h(o)))c.params[o]=g;else return null}return c}}function oe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Et(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function De(e){const t=new Map,n=fe();return new Proxy({},{get(r,o){return t.has(o)||Le(n,()=>t.set(o,E(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Be(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Be(r).reduce((s,l)=>[...s,...o.map(i=>i+l)],[])}const Pt=100,xt=Re(),Fe=Re();function Lt(e,t=""){const{component:n,preload:r,load:o,children:s,info:l}=e,i=!s||Array.isArray(s)&&!s.length,u={key:e,component:n,preload:r||o,info:l};return Ue(e.path).reduce((a,c)=>{for(const h of Be(c)){const g=At(t,h);let m=i?g:g.split("/*",1)[0];m=m.split("/").map(S=>S.startsWith(":")||S.startsWith("*")?S:encodeURIComponent(S)).join("/"),a.push({...u,originalPath:c,pattern:m,matcher:St(m,!i,e.matchFilters)})}return a},[])}function Rt(e,t=0){return{routes:e,score:Et(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],l=s.matcher(n);if(!l)return null;r.unshift({...l,route:s})}return r}}}function Ue(e){return Array.isArray(e)?e:[e]}function Ie(e,t="",n=[],r=[]){const o=Ue(e);for(let s=0,l=o.length;s<l;s++){const i=o[s];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const u=Lt(i,t);for(const a of u){n.push(a);const c=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!c)Ie(i.children,a.pattern,n,r);else{const h=Rt([...n],r.length);r.push(h)}n.pop()}}}return n.length?r:r.sort((s,l)=>l.score-s.score)}function se(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function Ct(e,t){const n=new URL(Ne),r=E(u=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),u}},n,{equals:(u,a)=>u.href===a.href}),o=E(()=>r().pathname),s=E(()=>r().search,!0),l=E(()=>r().hash),i=()=>"";return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return i()},query:De(ce(s,()=>je(r())))}}let $;function Ot(){return $}function _t(e,t,n,r={}){const{signal:[o,s],utils:l={}}=e,i=l.parsePath||(w=>w),u=l.renderPath||(w=>w),a=l.beforeLeave||$e(),c=H("",r.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!o().value&&s({value:c,replace:!0,scroll:!1});const[h,g]=I(!1);let m;const S=(w,A)=>{A.value===f()&&A.state===b()||(m===void 0&&g(!0),$=w,m=A,Ye(()=>{m===A&&(d(m.value),y(m.state),T[1]([]))}).finally(()=>{m===A&&Je(()=>{$=void 0,w==="navigate"&&Me(m),g(!1),m=void 0})}))},[f,d]=I(o().value),[b,y]=I(o().state),N=Ct(f,b),R=[],T=I([]),F=E(()=>typeof r.transformUrl=="function"?se(t(),r.transformUrl(N.pathname)):se(t(),N.pathname)),qe=De(()=>{const w=F(),A={};for(let L=0;L<w.length;L++)Object.assign(A,w[L].params);return A}),me={pattern:c,path:()=>c,outlet:()=>null,resolvePath(w){return H(c,w)}};return B(ce(o,w=>S("native",w),{defer:!0})),{base:me,location:N,params:qe,isRouting:h,renderPath:u,parsePath:i,navigatorFactory:We,matches:F,beforeLeave:a,preloadRoute:Ve,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:T};function Ke(w,A,L){C(()=>{if(typeof A=="number"){A&&(l.go?l.go(A):console.warn("Router integration does not support relative routing"));return}const W=!A||A[0]==="?",{replace:ee,resolve:j,scroll:te,state:U}={replace:!1,resolve:!W,scroll:!0,...L};let ye;const M=j?w.resolvePath(A):H(W&&(ye=o().value)&&ye.split("?")[0]||"",A);if(M===void 0)throw new Error(`Path '${A}' is not a routable path`);if(R.length>=Pt)throw new Error("Too many redirects");const we=f();(M!==we||U!==b())&&(mt||a.confirm(M,L)&&(R.push({value:we,replace:ee,scroll:te,state:b()}),S("navigate",{value:M,state:U})))})}function We(w){return w=w||Ze(Fe)||me,(A,L)=>Ke(w,A,L)}function Me(w){const A=R[0];A&&(s({...w,replace:A.replace,scroll:A.scroll}),R.length=0)}function Ve(w,A={}){const L=se(t(),w.pathname),W=$;$="preload";for(let ee in L){const{route:j,params:te}=L[ee];j.component&&j.component.preload&&j.component.preload();const{preload:U}=j;A.preloadData&&U&&Le(n(),()=>U({params:te,location:{pathname:w.pathname,search:w.search,hash:w.hash,query:je(w),state:null,key:""},intent:"preload"}))}$=W}}function kt(e,t,n,r){const{base:o,location:s,params:l}=e,{pattern:i,component:u,preload:a}=r().route,c=E(()=>r().path);u&&u.preload&&u.preload();const h=a?a({params:l,location:s,intent:$||"initial"}):void 0;return{parent:t,pattern:i,path:c,outlet:()=>u?x(u,{params:l,location:s,data:h,get children(){return n()}}):n(),resolvePath(m){return H(o.path(),m,c())}}}const Tt=e=>t=>{const{base:n}=t,r=he(()=>t.children),o=E(()=>Ie(r(),t.base||""));let s;const l=_t(e,o,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),x(xt.Provider,{value:l,get children(){return x($t,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[E(()=>(s=fe())&&null),x(Nt,{routerState:l,get branches(){return o()}})]}})}})};function $t(e){const t=e.routerState.location,n=e.routerState.params,r=E(()=>e.preload&&C(()=>{e.preload({params:n,location:t,intent:Ot()||"initial"})}));return x(Te,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>x(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Nt(e){const t=[];let n;const r=E(ce(e.routerState.matches,(o,s,l)=>{let i=s&&o.length===s.length;const u=[];for(let a=0,c=o.length;a<c;a++){const h=s&&s[a],g=o[a];l&&h&&g.route.key===h.route.key?u[a]=l[a]:(i=!1,t[a]&&t[a](),Pe(m=>{t[a]=m,u[a]=kt(e.routerState,u[a-1]||e.routerState.base,Ae(()=>r()[a+1]),()=>e.routerState.matches()[a])}))}return t.splice(o.length).forEach(a=>a()),l&&i?l:(n=u[0],u)}));return Ae(()=>r()&&n)()}const Ae=e=>()=>x(Te,{get when(){return e()},keyed:!0,children:t=>x(Fe.Provider,{value:t,get children(){return t.outlet()}})}),jt=e=>{const t=he(()=>e.children);return lt(e,{get children(){return t()}})};function Dt([e,t],n,r){return[e,r?o=>t(r(o)):t]}function Bt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Ft(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Dt(I(n(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!t&&e.set(o),o));return e.init&&xe(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Tt({signal:r,create:e.create,utils:e.utils})}function Ut(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function It(e,t){const n=Bt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const qt=new Map;function Kt(e=!0,t=!1,n="/_server",r){return o=>{const s=o.base.path(),l=o.navigatorFactory(o.base);let i={};function u(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function a(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const d=f.composedPath().find(F=>F instanceof Node&&F.nodeName.toUpperCase()==="A");if(!d||t&&!d.hasAttribute("link"))return;const b=u(d),y=b?d.href.baseVal:d.href;if((b?d.target.baseVal:d.target)||!y&&!d.hasAttribute("state"))return;const R=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||R&&R.includes("external"))return;const T=b?new URL(y,document.baseURI):new URL(y);if(!(T.origin!==window.location.origin||s&&T.pathname&&!T.pathname.toLowerCase().startsWith(s.toLowerCase())))return[d,T]}function c(f){const d=a(f);if(!d)return;const[b,y]=d,N=o.parsePath(y.pathname+y.search+y.hash),R=b.getAttribute("state");f.preventDefault(),l(N,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:R&&JSON.parse(R)})}function h(f){const d=a(f);if(!d)return;const[b,y]=d;typeof r=="function"&&(y.pathname=r(y.pathname)),i[y.pathname]||o.preloadRoute(y,{preloadData:b.getAttribute("preload")!=="false"})}function g(f){const d=a(f);if(!d)return;const[b,y]=d;typeof r=="function"&&(y.pathname=r(y.pathname)),!i[y.pathname]&&(i[y.pathname]=setTimeout(()=>{o.preloadRoute(y,{preloadData:b.getAttribute("preload")!=="false"}),delete i[y.pathname]},200))}function m(f){const d=a(f);if(!d)return;const[,b]=d;typeof r=="function"&&(b.pathname=r(b.pathname)),i[b.pathname]&&(clearTimeout(i[b.pathname]),delete i[b.pathname])}function S(f){if(f.defaultPrevented)return;let d=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const y=new URL(d,Ne);if(d=o.parsePath(y.pathname+y.search),!d.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const b=qt.get(d);if(b){f.preventDefault();const y=new FormData(f.target,f.submitter);b.call({r:o,f:f.target},f.target.enctype==="multipart/form-data"?y:new URLSearchParams(y))}}ht(["click","submit"]),document.addEventListener("click",c),e&&(document.addEventListener("mouseover",g),document.addEventListener("mouseout",m),document.addEventListener("focusin",h),document.addEventListener("touchstart",h)),document.addEventListener("submit",S),xe(()=>{document.removeEventListener("click",c),e&&(document.removeEventListener("mouseover",g),document.removeEventListener("mouseout",m),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",S)})}}function Wt(e){const t=()=>({value:window.location.pathname.replace(/^\/+/,"/")+window.location.search+window.location.hash,state:window.history.state}),n=$e();return Ft({get:t,set({value:r,replace:o,scroll:s,state:l}){o?window.history.replaceState(yt(l),"",r):window.history.pushState(l,"",r),It(decodeURIComponent(window.location.hash.slice(1)),s),ge()},init:r=>Ut(window,"popstate",wt(r,o=>{if(o&&o<0)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:Kt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const Mt="_App_18d2k_1",Vt="_logo_18d2k_5",Ht="_header_18d2k_11",Gt="_link_18d2k_22",Xt={App:Mt,logo:Vt,"logo-spin":"_logo-spin_18d2k_1",header:Ht,link:Gt};var Jt=ft('<div><header class=""><nav><a href=/envios>Envios</a></nav></header><div class=centerBx100><slot name=plans>');function Qt(){return(()=>{var e=Jt(),t=e.firstChild,n=t.nextSibling,r=n.firstChild;return r._$owner=fe(),B(()=>dt(e,Xt.App)),e})()}function Yt(){return Qe(async()=>await(await fetch("https://qvamarkets.com/gql_api/getStatic?fileName=svgs.json")).json()),x(Wt,{get children(){return x(jt,{path:"/",get component(){return x(Qt,{})}})}})}const Zt=document.getElementById("root");ct(()=>x(Yt,{}),Zt);
