const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DE1c1YqA.js","assets/index-Bi7WmJMv.js","assets/index-lCkr9jrN.css","assets/SVG-t32KrDyi.js","assets/AddProduct-CrAnwuUX.js","assets/DialogHRM-C7nnZ4rp.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BCqOsi4E.js","assets/LoadingColorSpinner-ClZ3-B0p.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-DajCAglg.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-qwRvA13J.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnProduct-C_M6elPz.js","assets/handelImagesServices-KDygOGRA.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-6yD9BVdp.js","assets/Toast-DLpFKn-Q.css","assets/components-B0FII2L_.js"])))=>i.map(i=>d[i]);
import{l,_ as d,a as b,r as P,k as S,b as $,s as A,i as u,d as s,H as k,S as O,F as w,G as D,e as L,g as R,f as V,w as T,n as M,p as C,q as F,I as z,C as B,h as H,t as x,j as Q,O as q}from"./index-Bi7WmJMv.js";import{s as W}from"./App.module-CbHnVtRQ.js";import{OpenModal as j}from"./DialogHRM-C7nnZ4rp.js";var G=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Productos</h2><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),K=x("<div> <!>."),N=x("<div> ");const Y=l(()=>d(()=>import("./FlexSpace-DE1c1YqA.js"),__vite__mapDeps([0,1,2]))),J=l(()=>d(()=>import("./SVG-t32KrDyi.js"),__vite__mapDeps([3,1,2]))),U=l(()=>d(()=>import("./AddProduct-CrAnwuUX.js"),__vite__mapDeps([4,1,2,5,6,7]))),X=l(()=>d(()=>import("./LoadingColorSpinner-ClZ3-B0p.js"),__vite__mapDeps([8,1,2,9]))),Z=l(()=>d(()=>import("./InputHr-DajCAglg.js"),__vite__mapDeps([10,1,2,11])));l(()=>d(()=>import("./CheckBoxSlide-qwRvA13J.js"),__vite__mapDeps([12,1,2,13])));const ee=l(()=>d(()=>import("./ItemOnProduct-C_M6elPz.js"),__vite__mapDeps([14,1,2,7,5,6,15,16,17,18,19])));function ie(){const[a,p]=b(0);b(0);const[t,i]=b("");P(()=>{}),S(()=>{});const c=()=>{let n=Q(),r={};r.id=n,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(U,{modalId:n,refetch:f}),j(r)},[_,{refetch:f}]=$(t,async n=>{const r=await te(n,a());let m=[];return q(r).map(v=>{let h=r[v];m.push(h)}),m});return A(()=>{}),(()=>{var n=G(),r=n.firstChild,m=r.firstChild,v=m.nextSibling,h=r.nextSibling,I=h.firstChild,y=h.nextSibling;return u(r,s(Y,{}),v),v.$$click=c,u(v,s(J,{name:"plus",size:22})),u(I,s(Z,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>i(e)})),u(y,s(D,{fallback:e=>(()=>{var o=K(),g=o.firstChild,E=g.nextSibling;return E.nextSibling,u(o,()=>e.toString(),E),o})(),get children(){return s(k,{get fallback(){return(()=>{var e=N();return e.firstChild,u(e,s(X,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return s(O,{get when(){return _()},get children(){return s(w,{get each(){return _()},children:(e,o)=>s(ee,{item:e,refetch:f})})}})}})}})),L(e=>{var o=W.App,g=`padding:16px ${R()?"1vw":"5vw"}  `;return o!==e.e&&V(n,e.e=o),e.t=T(y,g,e.t),e},{e:void 0,t:void 0}),n})()}const te=async(a,p)=>{let t={params:{businessId:M?.profile?.businessYId}};a&&a.split(" ").map((_,f)=>{_&&(t.params[":search"+f]=_.trim())});let i=C(122001);t={...t,...i},t.params[":search0"];const c=await F(t);return c?.error?{}:c},oe=async a=>{let p=[];a.map(t=>{let i={params:{id:t?.ssg_track_key,idairguide:"all"}},c=C(802002);i={...i,...c},p.push(i)}),z(p,re)},re=async a=>{const t=await B(a);if(t)return t};H(["click"]);export{te as LookupProducts,ie as default,re as fetchCSVInve,oe as loadProduct};
