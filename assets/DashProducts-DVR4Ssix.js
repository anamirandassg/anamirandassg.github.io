const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BYemyLgD.js","assets/index-BFD1kMWA.js","assets/index-BmzAZVve.css","assets/SVG-BU8pAHIr.js","assets/index-Ci0zXM0r.js","assets/AddProduct-mXdMFAyr.js","assets/Util-BwLP_5oJ.js","assets/DialogHRM-D_1jeXDe.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-iOMNtc8n.js","assets/LoadingColorSpinner-Bb-wVOXO.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-CGv3CaD6.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-BJoMBdhf.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnProduct-DH2Kh2u0.js","assets/handelImagesServices-w0zTH8Fc.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-CZMyYNuW.js","assets/Toast-DLpFKn-Q.css","assets/components-Diy-UkVs.js"])))=>i.map(i=>d[i]);
import{l,_ as d,a as b,o as P,j as S,b as $,n as A,i as p,d as s,w as k,S as O,F as w,E as D,e as L,g as R,f as V,s as T,m as M,h as F,t as x}from"./index-BFD1kMWA.js";import{s as z}from"./App.module-CbHnVtRQ.js";import{b as C,f as B,e as Q,d as H,g as W,O as j}from"./Util-BwLP_5oJ.js";import{OpenModal as q}from"./DialogHRM-D_1jeXDe.js";import"./index-Ci0zXM0r.js";var G=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Productos</h2><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),K=x("<div> <!>."),N=x("<div> ");const Y=l(()=>d(()=>import("./FlexSpace-BYemyLgD.js"),__vite__mapDeps([0,1,2]))),J=l(()=>d(()=>import("./SVG-BU8pAHIr.js"),__vite__mapDeps([3,1,2,4]))),U=l(()=>d(()=>import("./AddProduct-mXdMFAyr.js"),__vite__mapDeps([5,1,2,6,4,7,8,9]))),X=l(()=>d(()=>import("./LoadingColorSpinner-Bb-wVOXO.js"),__vite__mapDeps([10,1,2,11]))),Z=l(()=>d(()=>import("./InputHr-CGv3CaD6.js"),__vite__mapDeps([12,1,2,13])));l(()=>d(()=>import("./CheckBoxSlide-BJoMBdhf.js"),__vite__mapDeps([14,1,2,15])));const ee=l(()=>d(()=>import("./ItemOnProduct-DH2Kh2u0.js"),__vite__mapDeps([16,1,2,6,4,9,7,8,17,18,19,20,21])));function le(){const[a,u]=b(0);b(0);const[t,i]=b("");P(()=>{}),S(()=>{});const c=()=>{let o=W(),r={};r.id=o,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(U,{modalId:o,refetch:f}),q(r)},[_,{refetch:f}]=$(t,async o=>{const r=await te(o,a());let v=[];return j(r).map(m=>{let h=r[m];v.push(h)}),v});return A(()=>{}),(()=>{var o=G(),r=o.firstChild,v=r.firstChild,m=v.nextSibling,h=r.nextSibling,I=h.firstChild,E=h.nextSibling;return p(r,s(Y,{}),m),m.$$click=c,p(m,s(J,{name:"plus",size:22})),p(I,s(Z,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>i(e)})),p(E,s(D,{fallback:e=>(()=>{var n=K(),g=n.firstChild,y=g.nextSibling;return y.nextSibling,p(n,()=>e.toString(),y),n})(),get children(){return s(k,{get fallback(){return(()=>{var e=N();return e.firstChild,p(e,s(X,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return s(O,{get when(){return _()},get children(){return s(w,{get each(){return _()},children:(e,n)=>s(ee,{item:e,refetch:f})})}})}})}})),L(e=>{var n=z.App,g=`padding:16px ${R()?"1vw":"5vw"}  `;return n!==e.e&&V(o,e.e=n),e.t=T(E,g,e.t),e},{e:void 0,t:void 0}),o})()}const te=async(a,u)=>{let t={params:{businessId:M?.profile?.businessYId}};a&&a.split(" ").map((_,f)=>{_&&(t.params[":search"+f]=_.trim())});let i=C(122001);t={...t,...i},t.params[":search0"];const c=await B(t);return c?.error?{}:c},de=async a=>{let u=[];a.map(t=>{let i={params:{id:t?.ssg_track_key,idairguide:"all"}},c=C(802002);i={...i,...c},u.push(i)}),Q(u,re)},re=async a=>{const t=await H(a);if(t)return t};F(["click"]);export{te as LookupProducts,le as default,re as fetchCSVInve,de as loadProduct};
