const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnShipper-BQGMjM-h.js","assets/index-Bnv1Z0K_.js","assets/index-mNJWtuMT.css","assets/Util-7ERmh4Cp.js","assets/DialogHRM-CVl-kr9_.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-BT4i71bv.js","assets/SVG-DmV_0B-g.js","assets/ContainerElasticView-LzOd6fDI.css","assets/PDFButton-DXdwVZ_H.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-hw3Kqgbm.js","assets/Toast-B9kPECOt.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-CVx_0cAy.js","assets/ButonHrm-BSeWNUGQ.css","assets/ShowRemmitance-CQGYcvPj.js","assets/ShowQRPrintLabel-DKuQnYOh.js","assets/InitPrintServices-C5c3gOIX.js","assets/FlexSpace-CWoxEDfH.js","assets/LoadingColorSpinner-3xo0Ndw8.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as _,_ as b,c as C,a as S,b as $,p as E,i as l,f as r,E as w,y,S as m,F as k,h as I,s as x,j as A,t as f}from"./index-Bnv1Z0K_.js";import D from"./InputHr-CKPx3Hi-.js";import{a as g,C as F,g as O,f as R}from"./Util-7ERmh4Cp.js";import{u as L}from"./debounces-Ck3v6PGk.js";/* empty css                */var P=f("<div><div>"),j=f("<div> <!>."),z=f("<div> ");const M=_(()=>b(()=>import("./ItemOnShipper-BQGMjM-h.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),Q=_(()=>b(()=>import("./LoadingColorSpinner-3xo0Ndw8.js"),__vite__mapDeps([20,1,2,21])));function N(){const[s,a]=C({list:{search:""}}),[c,p]=S(""),o=L(p,500),u=(n,t)=>{a("list",{[n]:t}),o(g())};$(()=>{});const[d,{refetch:V}]=E(c,async n=>{const t=await T(s?.list?.search);return F(t)});return(()=>{var n=P(),t=n.firstChild;return l(n,r(D,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return s?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>u("search",e)}),t),l(t,r(m,{get when(){return d()},get children(){return r(w,{fallback:e=>(()=>{var i=j(),v=i.firstChild,h=v.nextSibling;return h.nextSibling,l(i,()=>e.toString(),h),i})(),get children(){return r(y,{get fallback(){return(()=>{var e=z();return e.firstChild,l(e,r(Q,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return d()},get children(){return r(k,{get each(){return d()},children:(e,i)=>r(M,{item:e,refresh:()=>o(g())})})}})}})}})}})),I(e=>x(t,` ${A()?"":"width:94vw;"} margin: 0 auto;`,e)),n})()}const T=async s=>{if(s.length>4){let a={params:{}};s&&s.split(" ").map((o,u)=>{o&&(a.params[":search"+u]=o.trim())});let c=O(421001);return a={...a,...c},await R(a)}else return{}};export{N as default};
