const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnShipper-CGtQNjjI.js","assets/index-Cv4YO0m0.js","assets/index-ALtnuvRO.css","assets/Util-Df9CfxGL.js","assets/DialogHRM-BWVWEPWN.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-C_KFX8WE.js","assets/SVG-DEKs_P2n.js","assets/ContainerElasticView-LzOd6fDI.css","assets/PDFButton-BDIa4If0.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-6TA5hJ2T.js","assets/Toast-DwNaU0FC.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-D26AmRp8.js","assets/ButonHrm-BSeWNUGQ.css","assets/ShowRemmitance-bCmVSVCT.js","assets/ShowQRPrintLabel-DbErpRqZ.js","assets/InitPrintServices-BR2Uf5F7.js","assets/FlexSpace-BPCicj0R.js","assets/LoadingColorSpinner-BAAKBS0B.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as _,_ as b,c as C,a as S,k as $,j as E,i as l,d as r,E as w,x as k,S as m,F as y,e as x,q as A,f as I,t as f}from"./index-Cv4YO0m0.js";import D from"./InputHr-dD_OsbXE.js";import{b as g,A as F,c as O,f as R}from"./Util-Df9CfxGL.js";import{u as L}from"./debounces-CQMmt6Zm.js";var P=f("<div><div>"),j=f("<div> <!>."),z=f("<div> ");const M=_(()=>b(()=>import("./ItemOnShipper-CGtQNjjI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),Q=_(()=>b(()=>import("./LoadingColorSpinner-BAAKBS0B.js"),__vite__mapDeps([20,1,2,21])));function J(){const[s,a]=C({list:{search:""}}),[c,p]=S(""),o=L(p,500),u=(n,t)=>{a("list",{[n]:t}),o(g())};$(()=>{});const[d,{refetch:V}]=E(c,async n=>{const t=await T(s?.list?.search);return F(t)});return(()=>{var n=P(),t=n.firstChild;return l(n,r(D,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return s?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>u("search",e)}),t),l(t,r(m,{get when(){return d()},get children(){return r(w,{fallback:e=>(()=>{var i=j(),v=i.firstChild,h=v.nextSibling;return h.nextSibling,l(i,()=>e.toString(),h),i})(),get children(){return r(k,{get fallback(){return(()=>{var e=z();return e.firstChild,l(e,r(Q,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return d()},get children(){return r(y,{get each(){return d()},children:(e,i)=>r(M,{item:e,refresh:()=>o(g())})})}})}})}})}})),x(e=>A(t,` ${I()?"":"width:94vw;"} margin: 0 auto;`,e)),n})()}const T=async s=>{if(s.length>4){let a={params:{}};s&&s.split(" ").map((o,u)=>{o&&(a.params[":search"+u]=o.trim())});let c=O(421001);return a={...a,...c},await R(a)}else return{}};export{J as default};