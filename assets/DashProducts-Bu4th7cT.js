const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BVHz8g-I.js","assets/index-DHCS-KQi.js","assets/index-DaYrm968.css","assets/SVG-DCMD_W7G.js","assets/Util-Bc5vcOBp.js","assets/AddProduct-VgApUlCo.js","assets/DialogHRM-B_MjLUhO.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-ycRia-T1.js","assets/LoadingColorSpinner-BKSHlb9m.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BryfXTA9.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-CccK6Gex.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnProduct-uFenl4A1.js","assets/handelImagesServices-CyYy2IT2.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-nFsXK8A-.js","assets/Toast-DLpFKn-Q.css","assets/ShowQRPrintLabel-DwJQDOkp.js","assets/fontkit.es-CD9tcdqV.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-CO7w1VfE.js","assets/components-D_rdW7k3.js"])))=>i.map(i=>d[i]);
import{l,_ as d,a as b,o as I,b as P,p as S,e as $,i as p,f as s,y as k,S as O,F as w,E as D,h as L,j as R,m as V,s as T,g as M,t as x}from"./index-DHCS-KQi.js";import{s as B}from"./App.module-CbHnVtRQ.js";import{f as F,g as C,m as H,k as Q,a as z,O as W}from"./Util-Bc5vcOBp.js";import{OpenModal as j}from"./DialogHRM-B_MjLUhO.js";var q=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Productos</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),K=x("<div> <!>."),N=x("<div> ");const Y=l(()=>d(()=>import("./FlexSpace-BVHz8g-I.js"),__vite__mapDeps([0,1,2])));l(()=>d(()=>import("./SVG-DCMD_W7G.js"),__vite__mapDeps([3,1,2,4])));const G=l(()=>d(()=>import("./AddProduct-VgApUlCo.js"),__vite__mapDeps([5,1,2,4,6,7,8]))),J=l(()=>d(()=>import("./LoadingColorSpinner-BKSHlb9m.js"),__vite__mapDeps([9,1,2,10]))),U=l(()=>d(()=>import("./InputHr-BryfXTA9.js"),__vite__mapDeps([11,1,2,12]))),X=l(()=>d(()=>import("./ButonHrm-CccK6Gex.js"),__vite__mapDeps([13,1,2,3,4,14]))),Z=l(()=>d(()=>import("./ItemOnProduct-uFenl4A1.js"),__vite__mapDeps([15,1,2,4,8,6,7,16,17,18,19,20,21,22,23,24])));function ne(){const[a,u]=b(0);b(0);const[t,n]=b("");I(()=>{}),P(()=>{});const c=()=>{let o=z(),r={};r.id=o,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(G,{modalId:o,refetch:f}),j(r)},[_,{refetch:f}]=S(t,async o=>{const r=await ee(o,a());let m=[];return W(r).map(v=>{let h=r[v];m.push(h)}),m});return $(()=>{}),(()=>{var o=q(),r=o.firstChild,m=r.firstChild,v=m.nextSibling,h=r.nextSibling,A=h.firstChild,y=h.nextSibling;return p(r,s(Y,{}),v),p(v,s(X,{color:"#37be5fff",icon:"plus",label:"Agregar",handleClick:c})),p(A,s(U,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>n(e)})),p(y,s(D,{fallback:e=>(()=>{var i=K(),g=i.firstChild,E=g.nextSibling;return E.nextSibling,p(i,()=>e.toString(),E),i})(),get children(){return s(k,{get fallback(){return(()=>{var e=N();return e.firstChild,p(e,s(J,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return s(O,{get when(){return _()},get children(){return s(w,{get each(){return _()},children:(e,i)=>s(Z,{item:e,refetch:f})})}})}})}})),L(e=>{var i=B.App,g=`padding:16px ${R()?"1vw":"5vw"}  `;return i!==e.e&&V(o,e.e=i),e.t=T(y,g,e.t),e},{e:void 0,t:void 0}),o})()}const ee=async(a,u)=>{let t={params:{businessId:M?.profile?.businessYId}};a&&a.split(" ").map((_,f)=>{_&&(t.params[":search"+f]=_.trim())});let n=C(122001);t={...t,...n},t.params[":search0"];const c=await F(t);return c?.error?{}:c},ie=async a=>{let u=[];a.map(t=>{let n={params:{id:t?.ssg_track_key,idairguide:"all"}},c=C(802002);n={...n,...c},u.push(n)}),H(u,te)},te=async a=>{const t=await Q(a);if(t)return t};export{G as AddProduct,ee as LookupProducts,ne as default,te as fetchCSVInve,ie as loadProduct};
