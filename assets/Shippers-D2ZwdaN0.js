const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnShipper-LZrYQLLC.js","assets/index-CXqMZ4Du.js","assets/index-DEEWbFNK.css","assets/Util-CKCUAuLU.js","assets/DialogHRM-w5rj0f8J.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-5nE0jWS6.js","assets/SVG-DJaoqm4Q.js","assets/ContainerElasticView-LzOd6fDI.css","assets/PDFButton-DzKPI8bv.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-xY8_R9eo.js","assets/Toast-DNEVDXHB.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-COT61pBZ.js","assets/ButonHrm-BSeWNUGQ.css","assets/ShowRemmitance-miLZYFz9.js","assets/ShowQRPrintLabel-CYlJmIMH.js","assets/InitPrintServices-Cu6eu-iZ.js","assets/FlexSpace-DUyWMndT.js","assets/LoadingColorSpinner-CWPVbTt2.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as _,_ as b,c as C,a as S,k as $,j as E,i as l,d as r,E as w,x as k,S as m,F as y,e as x,q as A,f as I,t as f}from"./index-CXqMZ4Du.js";import D from"./InputHr-DihyVKL_.js";import{b as g,A as F,c as O,f as R}from"./Util-CKCUAuLU.js";import{u as L}from"./debounces-5I5nlVM3.js";var P=f("<div><div>"),j=f("<div> <!>."),z=f("<div> ");const M=_(()=>b(()=>import("./ItemOnShipper-LZrYQLLC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),Q=_(()=>b(()=>import("./LoadingColorSpinner-CWPVbTt2.js"),__vite__mapDeps([20,1,2,21])));function J(){const[s,a]=C({list:{search:""}}),[c,p]=S(""),o=L(p,500),u=(n,t)=>{a("list",{[n]:t}),o(g())};$(()=>{});const[d,{refetch:V}]=E(c,async n=>{const t=await T(s?.list?.search);return F(t)});return(()=>{var n=P(),t=n.firstChild;return l(n,r(D,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return s?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>u("search",e)}),t),l(t,r(m,{get when(){return d()},get children(){return r(w,{fallback:e=>(()=>{var i=j(),v=i.firstChild,h=v.nextSibling;return h.nextSibling,l(i,()=>e.toString(),h),i})(),get children(){return r(k,{get fallback(){return(()=>{var e=z();return e.firstChild,l(e,r(Q,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return d()},get children(){return r(y,{get each(){return d()},children:(e,i)=>r(M,{item:e,refresh:()=>o(g())})})}})}})}})}})),x(e=>A(t,` ${I()?"":"width:94vw;"} margin: 0 auto;`,e)),n})()}const T=async s=>{if(s.length>4){let a={params:{}};s&&s.split(" ").map((o,u)=>{o&&(a.params[":search"+u]=o.trim())});let c=O(421001);return a={...a,...c},await R(a)}else return{}};export{J as default};
