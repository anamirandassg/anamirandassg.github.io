const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnShipper-IdkAxwTW.js","assets/index-BLZE2s6l.js","assets/index-lCkr9jrN.css","assets/DialogHRM-CDspj2ID.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-CHr88z2V.js","assets/SVG-D9i3twBA.js","assets/ContainerElasticView-LzOd6fDI.css","assets/PDFButton-CW_6L3wv.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BGtKoALU.js","assets/Toast-BXf7ylY1.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-Dl3Smlc1.js","assets/ButonHrm-BSeWNUGQ.css","assets/ShowRemmitance-DPsrVQsW.js","assets/ShowQRPrintLabel-DY3JSsC1.js","assets/InitPrintServices-ChsUN8Qd.js","assets/LoadingColorSpinner-Cg8CcMBj.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as _,_ as b,c as C,a as S,k as $,b as w,i as l,d as r,G as E,H as k,S as m,F as y,j as g,e as I,w as x,g as A,t as p,a9 as D,p as F,q as O}from"./index-BLZE2s6l.js";import R from"./InputHr-CVjYZGi9.js";import{u as L}from"./debounces-CDTX7212.js";var P=p("<div><div>"),j=p("<div> <!>."),z=p("<div> ");const H=_(()=>b(()=>import("./ItemOnShipper-IdkAxwTW.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))),M=_(()=>b(()=>import("./LoadingColorSpinner-Cg8CcMBj.js"),__vite__mapDeps([18,1,2,19])));function q(){const[s,a]=C({list:{search:""}}),[c,f]=S(""),o=L(f,500),u=(n,t)=>{a("list",{[n]:t}),o(g())};$(()=>{});const[d,{refetch:T}]=w(c,async n=>{const t=await Q(s?.list?.search);return D(t)});return(()=>{var n=P(),t=n.firstChild;return l(n,r(R,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return s?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>u("search",e)}),t),l(t,r(m,{get when(){return d()},get children(){return r(E,{fallback:e=>(()=>{var i=j(),v=i.firstChild,h=v.nextSibling;return h.nextSibling,l(i,()=>e.toString(),h),i})(),get children(){return r(k,{get fallback(){return(()=>{var e=z();return e.firstChild,l(e,r(M,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return d()},get children(){return r(y,{get each(){return d()},children:(e,i)=>r(H,{item:e,refresh:()=>o(g())})})}})}})}})}})),I(e=>x(t,` ${A()?"":"width:94vw;"} margin: 0 auto;`,e)),n})()}const Q=async s=>{if(s.length>4){let a={params:{}};s&&s.split(" ").map((o,u)=>{o&&(a.params[":search"+u]=o.trim())});let c=F(421001);return a={...a,...c},await O(a)}else return{}};export{q as default};