const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnShipper-Cnos6Tqx.js","assets/index-CEZmhTqZ.js","assets/index-BRlA1Q7g.css","assets/Util-BvnLaC1J.js","assets/DialogHRM-D_JrzI8M.js","assets/DialogHRM-V9_lZntj.css","assets/ButonHrm-C-2YmiFW.js","assets/SVG-DLWu1Pum.js","assets/ButonHrm-BSeWNUGQ.css","assets/ShowRemmitance-BAsdTvTc.js","assets/ShowQRPrintLabel-BMsDDggY.js","assets/fontkit.es-CT-D8DzF.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-CLOyuAbw.js","assets/Toast-BVnTl0uP.js","assets/Toast-DLpFKn-Q.css","assets/FlexSpace-_LC45Isv.js","assets/LoadingColorSpinner-BqE7FqiY.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as _,_ as b,c as C,a as S,b as $,p as E,i as l,e as r,E as w,z as y,S as m,F as k,f as I,s as x,j as A,t as f}from"./index-CEZmhTqZ.js";import D from"./InputHr-XEYHDfQp.js";import{a as g,P as F,g as O,f as P}from"./Util-BvnLaC1J.js";import{u as R}from"./debounces-CcaEeBWg.js";var z=f("<div><div>"),L=f("<div> <!>."),j=f("<div> ");const M=_(()=>b(()=>import("./ItemOnShipper-Cnos6Tqx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),Q=_(()=>b(()=>import("./LoadingColorSpinner-BqE7FqiY.js"),__vite__mapDeps([17,1,2,18])));function K(){const[s,a]=C({list:{search:""}}),[c,p]=S(""),o=R(p,500),u=(n,t)=>{a("list",{[n]:t}),o(g())};$(()=>{});const[d,{refetch:V}]=E(c,async n=>{const t=await T(s?.list?.search);return F(t)});return(()=>{var n=z(),t=n.firstChild;return l(n,r(D,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return s?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>u("search",e)}),t),l(t,r(m,{get when(){return d()},get children(){return r(w,{fallback:e=>(()=>{var i=L(),v=i.firstChild,h=v.nextSibling;return h.nextSibling,l(i,()=>e.toString(),h),i})(),get children(){return r(y,{get fallback(){return(()=>{var e=j();return e.firstChild,l(e,r(Q,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return d()},get children(){return r(k,{get each(){return d()},children:(e,i)=>r(M,{item:e,refresh:()=>o(g())})})}})}})}})}})),I(e=>x(t,` ${A()?"":"width:94vw;"} margin: 0 auto;`,e)),n})()}const T=async s=>{if(s.length>4){let a={params:{}};s&&s.split(" ").map((o,u)=>{o&&(a.params[":search"+u]=o.trim())});let c=O(421001);return a={...a,...c},await P(a)}else return{}};export{K as default};
