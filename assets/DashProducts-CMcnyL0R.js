const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-hKEW-O6U.js","assets/index-CX08qMr9.js","assets/index-W9fcnr7G.css","assets/SVG-DBuw3s_z.js","assets/index-Ci0zXM0r.js","assets/AddProduct-DT4pwq5t.js","assets/globalSignal-wLi-6lpX.js","assets/Util-D2YTzGDx.js","assets/DialogHRM-Dg-o5fgk.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-Bxi15UZt.js","assets/LoadingColorSpinner-BoG0YNPr.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-DSOoyUdn.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-YqzE3JCv.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnProduct-UGzGxOT7.js","assets/handelImagesServices-kQ3-lwp6.js","assets/Toast-BM5u4LI0.js","assets/Toast-DLpFKn-Q.css","assets/components-DCJzUiqN.js"])))=>i.map(i=>d[i]);
import{l,_ as d,a as b,o as P,h as S,b as $,m as A,i as p,d as s,f as k,k as O,e as w,t as x,r as D,S as L,F as R,E as V,g as T,s as M}from"./index-CX08qMr9.js";import{s as F}from"./App.module-CbHnVtRQ.js";import{b as C,f as z,e as B,d as Q,g as H,O as W}from"./Util-D2YTzGDx.js";import{OpenModal as q}from"./DialogHRM-Dg-o5fgk.js";import{i as j}from"./globalSignal-wLi-6lpX.js";import"./index-Ci0zXM0r.js";var G=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Productos</h2><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),K=x("<div> <!>."),N=x("<div> ");const Y=l(()=>d(()=>import("./FlexSpace-hKEW-O6U.js"),__vite__mapDeps([0,1,2]))),J=l(()=>d(()=>import("./SVG-DBuw3s_z.js"),__vite__mapDeps([3,1,2,4]))),U=l(()=>d(()=>import("./AddProduct-DT4pwq5t.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10]))),X=l(()=>d(()=>import("./LoadingColorSpinner-BoG0YNPr.js"),__vite__mapDeps([11,1,2,12]))),Z=l(()=>d(()=>import("./InputHr-DSOoyUdn.js"),__vite__mapDeps([13,1,2,14])));l(()=>d(()=>import("./CheckBoxSlide-YqzE3JCv.js"),__vite__mapDeps([15,1,2,16])));const ee=l(()=>d(()=>import("./ItemOnProduct-UGzGxOT7.js"),__vite__mapDeps([17,1,2,7,4,10,8,9,6,18,19,20,21])));function de(){const[a,u]=b(0);b(0);const[t,i]=b("");P(()=>{}),S(()=>{});const c=()=>{let o=H(),r={};r.id=o,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(U,{modalId:o,refetch:f}),q(r)},[_,{refetch:f}]=$(t,async o=>{const r=await te(o,a());let v=[];return W(r).map(m=>{let h=r[m];v.push(h)}),v});return A(()=>{}),(()=>{var o=G(),r=o.firstChild,v=r.firstChild,m=v.nextSibling,h=r.nextSibling,I=h.firstChild,E=h.nextSibling;return p(r,s(Y,{}),m),m.$$click=c,p(m,s(J,{name:"plus",size:22})),p(I,s(Z,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>i(e)})),p(E,s(V,{fallback:e=>(()=>{var n=K(),g=n.firstChild,y=g.nextSibling;return y.nextSibling,p(n,()=>e.toString(),y),n})(),get children(){return s(D,{get fallback(){return(()=>{var e=N();return e.firstChild,p(e,s(X,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return s(L,{get when(){return _()},get children(){return s(R,{get each(){return _()},children:(e,n)=>s(ee,{item:e,refetch:f})})}})}})}})),k(e=>{var n=F.App,g=`padding:16px ${j()?"1vw":"5vw"}  `;return n!==e.e&&T(o,e.e=n),e.t=M(E,g,e.t),e},{e:void 0,t:void 0}),o})()}const te=async(a,u)=>{let t={params:{businessId:O?.profile?.businessYId}};a&&a.split(" ").map((_,f)=>{_&&(t.params[":search"+f]=_.trim())});let i=C(122001);t={...t,...i},t.params[":search0"];const c=await z(t);return c?.error?{}:c},ce=async a=>{let u=[];a.map(t=>{let i={params:{id:t?.ssg_track_key,idairguide:"all"}},c=C(802002);i={...i,...c},u.push(i)}),B(u,re)},re=async a=>{const t=await Q(a);if(t)return t};w(["click"]);export{te as LookupProducts,de as default,re as fetchCSVInve,ce as loadProduct};
