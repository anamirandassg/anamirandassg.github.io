const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnShipper-DY4e_o4H.js","assets/index-CMPFS5l3.js","assets/index-CaL-WNrg.css","assets/Util-7ERmh4Cp.js","assets/DialogHRM-1fBgaf-_.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-9bop5BfL.js","assets/SVG-Bw-dPoFc.js","assets/ContainerElasticView-LzOd6fDI.css","assets/PDFButton-DXdwVZ_H.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-hw3Kqgbm.js","assets/Toast-DS_YK2AF.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-DIUBNgu5.js","assets/ButonHrm-BSeWNUGQ.css","assets/ShowRemmitance-BD27V70A.js","assets/ShowQRPrintLabel-dd3StqUp.js","assets/InitPrintServices-C5c3gOIX.js","assets/FlexSpace-ZuIl_VRM.js","assets/LoadingColorSpinner-DdRS_GH9.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as _,_ as b,c as C,a as S,b as $,n as E,i as l,f as r,E as w,x as y,S as m,F as k,h as x,s as I,j as A,t as f}from"./index-CMPFS5l3.js";import D from"./InputHr-DWNR00eQ.js";import{a as g,C as F,g as O,f as R}from"./Util-7ERmh4Cp.js";import{u as L}from"./debounces-B1ypXRVS.js";/* empty css                */var P=f("<div><div>"),j=f("<div> <!>."),z=f("<div> ");const M=_(()=>b(()=>import("./ItemOnShipper-DY4e_o4H.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),Q=_(()=>b(()=>import("./LoadingColorSpinner-DdRS_GH9.js"),__vite__mapDeps([20,1,2,21])));function N(){const[s,a]=C({list:{search:""}}),[c,p]=S(""),o=L(p,500),u=(n,t)=>{a("list",{[n]:t}),o(g())};$(()=>{});const[d,{refetch:V}]=E(c,async n=>{const t=await T(s?.list?.search);return F(t)});return(()=>{var n=P(),t=n.firstChild;return l(n,r(D,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return s?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>u("search",e)}),t),l(t,r(m,{get when(){return d()},get children(){return r(w,{fallback:e=>(()=>{var i=j(),v=i.firstChild,h=v.nextSibling;return h.nextSibling,l(i,()=>e.toString(),h),i})(),get children(){return r(y,{get fallback(){return(()=>{var e=z();return e.firstChild,l(e,r(Q,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return d()},get children(){return r(k,{get each(){return d()},children:(e,i)=>r(M,{item:e,refresh:()=>o(g())})})}})}})}})}})),x(e=>I(t,` ${A()?"":"width:94vw;"} margin: 0 auto;`,e)),n})()}const T=async s=>{if(s.length>4){let a={params:{}};s&&s.split(" ").map((o,u)=>{o&&(a.params[":search"+u]=o.trim())});let c=O(421001);return a={...a,...c},await R(a)}else return{}};export{N as default};
