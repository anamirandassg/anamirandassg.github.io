const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnShipper-W2pQtK6R.js","assets/index-DPaQ-zj4.js","assets/index-BmzAZVve.css","assets/Util-DemBMAwY.js","assets/DialogHRM-D9zgcINg.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-BTk01nRr.js","assets/SVG-CqLrL6N9.js","assets/ContainerElasticView-LzOd6fDI.css","assets/PDFButton-BbCPktZi.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-gRWPDBlG.js","assets/Toast-DN7GtXOe.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-D7QdRjje.js","assets/ButonHrm-BSeWNUGQ.css","assets/ShowRemmitance-B4oqo13P.js","assets/ShowQRPrintLabel-CsaudiHv.js","assets/InitPrintServices-dskthxJh.js","assets/LoadingColorSpinner-CqnRhp9O.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as b,_,c as C,a as S,j as w,b as $,i as l,d as r,E,w as y,S as m,F as k,e as I,s as x,g as A,t as f}from"./index-DPaQ-zj4.js";import D from"./InputHr-DYDGbXt3.js";import{g,w as F,b as O,f as R}from"./Util-DemBMAwY.js";import{u as L}from"./debounces-Z_PgnfnD.js";var P=f("<div><div>"),j=f("<div> <!>."),z=f("<div> ");const M=b(()=>_(()=>import("./ItemOnShipper-W2pQtK6R.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))),Q=b(()=>_(()=>import("./LoadingColorSpinner-CqnRhp9O.js"),__vite__mapDeps([19,1,2,20])));function K(){const[s,a]=C({list:{search:""}}),[c,p]=S(""),o=L(p,500),u=(n,t)=>{a("list",{[n]:t}),o(g())};w(()=>{});const[d,{refetch:V}]=$(c,async n=>{const t=await T(s?.list?.search);return F(t)});return(()=>{var n=P(),t=n.firstChild;return l(n,r(D,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return s?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>u("search",e)}),t),l(t,r(m,{get when(){return d()},get children(){return r(E,{fallback:e=>(()=>{var i=j(),v=i.firstChild,h=v.nextSibling;return h.nextSibling,l(i,()=>e.toString(),h),i})(),get children(){return r(y,{get fallback(){return(()=>{var e=z();return e.firstChild,l(e,r(Q,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return d()},get children(){return r(k,{get each(){return d()},children:(e,i)=>r(M,{item:e,refresh:()=>o(g())})})}})}})}})}})),I(e=>x(t,` ${A()?"":"width:94vw;"} margin: 0 auto;`,e)),n})()}const T=async s=>{if(s.length>4){let a={params:{}};s&&s.split(" ").map((o,u)=>{o&&(a.params[":search"+u]=o.trim())});let c=O(421001);return a={...a,...c},await R(a)}else return{}};export{K as default};
