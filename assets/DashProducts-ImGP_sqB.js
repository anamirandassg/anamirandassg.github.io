const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CfpwBNks.js","assets/index-C3nuwiPu.js","assets/index-BmzAZVve.css","assets/SVG-BKtEPdQ8.js","assets/AddProduct-CansoolN.js","assets/Util-Dlxe-mBA.js","assets/DialogHRM-CooODzX_.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BWTJVc88.js","assets/LoadingColorSpinner-BOE6ZmHa.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BiIq-D3A.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-B3VmBWV9.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnProduct-DBLND8IP.js","assets/handelImagesServices-CuYVXF30.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-D8yVWZQ9.js","assets/Toast-DLpFKn-Q.css","assets/components-CAou3LXP.js"])))=>i.map(i=>d[i]);
import{l,_ as d,a as b,o as P,j as S,b as $,n as A,i as u,d as s,w as k,S as O,F as w,E as D,e as L,g as R,f as V,s as T,m as M,h as F,t as x}from"./index-C3nuwiPu.js";import{s as z}from"./App.module-CbHnVtRQ.js";import{b as C,f as B,e as Q,d as H,g as W,O as j}from"./Util-Dlxe-mBA.js";import{OpenModal as q}from"./DialogHRM-CooODzX_.js";var G=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Productos</h2><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),K=x("<div> <!>."),N=x("<div> ");const Y=l(()=>d(()=>import("./FlexSpace-CfpwBNks.js"),__vite__mapDeps([0,1,2]))),J=l(()=>d(()=>import("./SVG-BKtEPdQ8.js"),__vite__mapDeps([3,1,2]))),U=l(()=>d(()=>import("./AddProduct-CansoolN.js"),__vite__mapDeps([4,1,2,5,6,7,8]))),X=l(()=>d(()=>import("./LoadingColorSpinner-BOE6ZmHa.js"),__vite__mapDeps([9,1,2,10]))),Z=l(()=>d(()=>import("./InputHr-BiIq-D3A.js"),__vite__mapDeps([11,1,2,12])));l(()=>d(()=>import("./CheckBoxSlide-B3VmBWV9.js"),__vite__mapDeps([13,1,2,14])));const ee=l(()=>d(()=>import("./ItemOnProduct-DBLND8IP.js"),__vite__mapDeps([15,1,2,5,8,6,7,16,17,18,19,20])));function ne(){const[a,p]=b(0);b(0);const[t,i]=b("");P(()=>{}),S(()=>{});const c=()=>{let o=W(),r={};r.id=o,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(U,{modalId:o,refetch:f}),q(r)},[_,{refetch:f}]=$(t,async o=>{const r=await te(o,a());let v=[];return j(r).map(m=>{let h=r[m];v.push(h)}),v});return A(()=>{}),(()=>{var o=G(),r=o.firstChild,v=r.firstChild,m=v.nextSibling,h=r.nextSibling,I=h.firstChild,E=h.nextSibling;return u(r,s(Y,{}),m),m.$$click=c,u(m,s(J,{name:"plus",size:22})),u(I,s(Z,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>i(e)})),u(E,s(D,{fallback:e=>(()=>{var n=K(),g=n.firstChild,y=g.nextSibling;return y.nextSibling,u(n,()=>e.toString(),y),n})(),get children(){return s(k,{get fallback(){return(()=>{var e=N();return e.firstChild,u(e,s(X,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return s(O,{get when(){return _()},get children(){return s(w,{get each(){return _()},children:(e,n)=>s(ee,{item:e,refetch:f})})}})}})}})),L(e=>{var n=z.App,g=`padding:16px ${R()?"1vw":"5vw"}  `;return n!==e.e&&V(o,e.e=n),e.t=T(E,g,e.t),e},{e:void 0,t:void 0}),o})()}const te=async(a,p)=>{let t={params:{businessId:M?.profile?.businessYId}};a&&a.split(" ").map((_,f)=>{_&&(t.params[":search"+f]=_.trim())});let i=C(122001);t={...t,...i},t.params[":search0"];const c=await B(t);return c?.error?{}:c},le=async a=>{let p=[];a.map(t=>{let i={params:{id:t?.ssg_track_key,idairguide:"all"}},c=C(802002);i={...i,...c},p.push(i)}),Q(p,re)},re=async a=>{const t=await H(a);if(t)return t};F(["click"]);export{te as LookupProducts,ne as default,re as fetchCSVInve,le as loadProduct};
