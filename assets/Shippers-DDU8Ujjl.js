const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnShipper-Oo7LCNRK.js","assets/index-DRpz4y-S.js","assets/index-lCkr9jrN.css","assets/DialogHRM-BwujtE47.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-pihoRLIO.js","assets/SVG-CNsBYLwQ.js","assets/ContainerElasticView-LzOd6fDI.css","assets/PDFButton-C1E5fvKc.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BC6KGFqu.js","assets/Toast-B9ChhmfU.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-CjQQKxHK.js","assets/ButonHrm-BSeWNUGQ.css","assets/ShowRemmitance-Dw0eFYdb.js","assets/ShowQRPrintLabel-RxMmsdDc.js","assets/InitPrintServices-pmhW66Dq.js","assets/LoadingColorSpinner-B6NChX0j.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as _,_ as b,c as C,a as S,k as $,b as w,i as l,d as r,G as E,H as k,S as m,F as y,j as g,e as I,w as x,g as A,t as p,a9 as D,p as F,q as O}from"./index-DRpz4y-S.js";import R from"./InputHr-IlKEMZx3.js";import{u as L}from"./debounces-Dpzs-kDP.js";var P=p("<div><div>"),j=p("<div> <!>."),z=p("<div> ");const H=_(()=>b(()=>import("./ItemOnShipper-Oo7LCNRK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))),M=_(()=>b(()=>import("./LoadingColorSpinner-B6NChX0j.js"),__vite__mapDeps([18,1,2,19])));function q(){const[s,a]=C({list:{search:""}}),[c,f]=S(""),o=L(f,500),u=(n,t)=>{a("list",{[n]:t}),o(g())};$(()=>{});const[d,{refetch:T}]=w(c,async n=>{const t=await Q(s?.list?.search);return D(t)});return(()=>{var n=P(),t=n.firstChild;return l(n,r(R,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return s?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>u("search",e)}),t),l(t,r(m,{get when(){return d()},get children(){return r(E,{fallback:e=>(()=>{var i=j(),v=i.firstChild,h=v.nextSibling;return h.nextSibling,l(i,()=>e.toString(),h),i})(),get children(){return r(k,{get fallback(){return(()=>{var e=z();return e.firstChild,l(e,r(M,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return d()},get children(){return r(y,{get each(){return d()},children:(e,i)=>r(H,{item:e,refresh:()=>o(g())})})}})}})}})}})),I(e=>x(t,` ${A()?"":"width:94vw;"} margin: 0 auto;`,e)),n})()}const Q=async s=>{if(s.length>4){let a={params:{}};s&&s.split(" ").map((o,u)=>{o&&(a.params[":search"+u]=o.trim())});let c=F(421001);return a={...a,...c},await O(a)}else return{}};export{q as default};
