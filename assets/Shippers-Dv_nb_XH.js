const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnShipper-Dx1MDswj.js","assets/index-CNK7zAgA.js","assets/index-lCkr9jrN.css","assets/Util-D2O-IqKB.js","assets/DialogHRM-b92Z9RqZ.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-B92k7o0b.js","assets/SVG-CK7FhKom.js","assets/ContainerElasticView-LzOd6fDI.css","assets/PDFButton-85Y0gBbC.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-AFz-JHBR.js","assets/Toast-B9Xe7Jmw.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-DRNx4X35.js","assets/ButonHrm-BSeWNUGQ.css","assets/ShowRemmitance-B5yn6XvH.js","assets/ShowQRPrintLabel-D3D_T4tZ.js","assets/InitPrintServices-DgotkDNu.js","assets/FlexSpace-BOQdCgpR.js","assets/LoadingColorSpinner-DzaN6bAK.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as b,_,c as C,a as S,j as $,b as w,i as l,d as r,E,w as y,S as m,F as k,e as I,s as x,g as A,t as f}from"./index-CNK7zAgA.js";import D from"./InputHr-tjOq74kM.js";import{g,y as F,b as O,f as R}from"./Util-D2O-IqKB.js";import{u as L}from"./debounces-DZBO1afk.js";var P=f("<div><div>"),j=f("<div> <!>."),z=f("<div> ");const M=b(()=>_(()=>import("./ItemOnShipper-Dx1MDswj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),Q=b(()=>_(()=>import("./LoadingColorSpinner-DzaN6bAK.js"),__vite__mapDeps([20,1,2,21])));function K(){const[s,a]=C({list:{search:""}}),[c,p]=S(""),o=L(p,500),u=(n,t)=>{a("list",{[n]:t}),o(g())};$(()=>{});const[d,{refetch:V}]=w(c,async n=>{const t=await T(s?.list?.search);return F(t)});return(()=>{var n=P(),t=n.firstChild;return l(n,r(D,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return s?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>u("search",e)}),t),l(t,r(m,{get when(){return d()},get children(){return r(E,{fallback:e=>(()=>{var i=j(),v=i.firstChild,h=v.nextSibling;return h.nextSibling,l(i,()=>e.toString(),h),i})(),get children(){return r(y,{get fallback(){return(()=>{var e=z();return e.firstChild,l(e,r(Q,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return d()},get children(){return r(k,{get each(){return d()},children:(e,i)=>r(M,{item:e,refresh:()=>o(g())})})}})}})}})}})),I(e=>x(t,` ${A()?"":"width:94vw;"} margin: 0 auto;`,e)),n})()}const T=async s=>{if(s.length>4){let a={params:{}};s&&s.split(" ").map((o,u)=>{o&&(a.params[":search"+u]=o.trim())});let c=O(421001);return a={...a,...c},await R(a)}else return{}};export{K as default};