const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DqXHQUkx.js","assets/index-CnAi9qOS.js","assets/index-D7Gv5tA3.css","assets/SVG-DrSvIfFx.js","assets/Util-C4Gv2Rs-.js","assets/AddProduct-B9W5hoJP.js","assets/DialogHRM-DIBcushe.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BHuoMbkF.js","assets/LoadingColorSpinner-Bem8O0Yc.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-s136TSoN.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-Bo2hb80Y.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnProduct-NBgT5FwT.js","assets/handelImagesServices-BxpkHqRv.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-Be2hxX56.js","assets/Toast-DLpFKn-Q.css","assets/ShowQRPrintLabel-BeZu0aKw.js","assets/PDFButton-CCQT0yk3.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BaZy4qZc.js","assets/InitPrintServices-COQVt4ve.js","assets/components-C2Aqj73q.js"])))=>i.map(i=>d[i]);
import{l,_ as d,a as b,o as I,k as P,j as S,b as $,i as p,d as s,x as k,S as O,F as w,E as D,e as L,f as R,g as V,q as T,n as M,t as x}from"./index-CnAi9qOS.js";import{s as B}from"./App.module-CbHnVtRQ.js";import{c as C,f as F,j as H,i as Q,b as j,O as q}from"./Util-C4Gv2Rs-.js";import{OpenModal as z}from"./DialogHRM-DIBcushe.js";var W=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Productos</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),K=x("<div> <!>."),N=x("<div> ");const Y=l(()=>d(()=>import("./FlexSpace-DqXHQUkx.js"),__vite__mapDeps([0,1,2])));l(()=>d(()=>import("./SVG-DrSvIfFx.js"),__vite__mapDeps([3,1,2,4])));const G=l(()=>d(()=>import("./AddProduct-B9W5hoJP.js"),__vite__mapDeps([5,1,2,4,6,7,8]))),J=l(()=>d(()=>import("./LoadingColorSpinner-Bem8O0Yc.js"),__vite__mapDeps([9,1,2,10]))),U=l(()=>d(()=>import("./InputHr-s136TSoN.js"),__vite__mapDeps([11,1,2,12]))),X=l(()=>d(()=>import("./ButonHrm-Bo2hb80Y.js"),__vite__mapDeps([13,1,2,3,4,14]))),Z=l(()=>d(()=>import("./ItemOnProduct-NBgT5FwT.js"),__vite__mapDeps([15,1,2,4,8,6,7,16,17,18,19,20,21,22,23,24,25])));function ne(){const[a,u]=b(0);b(0);const[t,n]=b("");I(()=>{}),P(()=>{});const c=()=>{let o=j(),r={};r.id=o,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(G,{modalId:o,refetch:f}),z(r)},[_,{refetch:f}]=S(t,async o=>{const r=await ee(o,a());let m=[];return q(r).map(v=>{let h=r[v];m.push(h)}),m});return $(()=>{}),(()=>{var o=W(),r=o.firstChild,m=r.firstChild,v=m.nextSibling,h=r.nextSibling,A=h.firstChild,y=h.nextSibling;return p(r,s(Y,{}),v),p(v,s(X,{color:"#37be5fff",icon:"plus",label:"Agregar",handleClick:c})),p(A,s(U,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>n(e)})),p(y,s(D,{fallback:e=>(()=>{var i=K(),g=i.firstChild,E=g.nextSibling;return E.nextSibling,p(i,()=>e.toString(),E),i})(),get children(){return s(k,{get fallback(){return(()=>{var e=N();return e.firstChild,p(e,s(J,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return s(O,{get when(){return _()},get children(){return s(w,{get each(){return _()},children:(e,i)=>s(Z,{item:e,refetch:f})})}})}})}})),L(e=>{var i=B.App,g=`padding:16px ${R()?"1vw":"5vw"}  `;return i!==e.e&&V(o,e.e=i),e.t=T(y,g,e.t),e},{e:void 0,t:void 0}),o})()}const ee=async(a,u)=>{let t={params:{businessId:M?.profile?.businessYId}};a&&a.split(" ").map((_,f)=>{_&&(t.params[":search"+f]=_.trim())});let n=C(122001);t={...t,...n},t.params[":search0"];const c=await F(t);return c?.error?{}:c},ie=async a=>{let u=[];a.map(t=>{let n={params:{id:t?.ssg_track_key,idairguide:"all"}},c=C(802002);n={...n,...c},u.push(n)}),H(u,te)},te=async a=>{const t=await Q(a);if(t)return t};export{G as AddProduct,ee as LookupProducts,ne as default,te as fetchCSVInve,ie as loadProduct};
