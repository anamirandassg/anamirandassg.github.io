const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D8p7kWcf.js","assets/index-BqDbKQoA.js","assets/index-NFdrrltd.css","assets/SVG-ccCeZ7vA.js","assets/index-Ci0zXM0r.js","assets/AddProduct-BALpPcYe.js","assets/globalSignal-C5WWW7Ov.js","assets/Util-DErZaF9J.js","assets/DialogHRM-Can0AQN2.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-CQsk2Gla.js","assets/LoadingColorSpinner-95Jlb_HW.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BiVeiBlI.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-DaB8LZ_n.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnProduct-CWj12tw3.js","assets/handelImagesServices-b5yxZ0tj.js","assets/components-BTeSVfTj.js"])))=>i.map(i=>d[i]);
import{l,_ as d,a as b,o as P,h as S,b as $,i as p,d as s,f as A,k,e as O,t as x,r as w,S as D,F as L,E as R,g as V,s as T}from"./index-BqDbKQoA.js";import{s as F}from"./App.module-CbHnVtRQ.js";import{b as C,f as M,e as z,d as B,g as Q,O as H}from"./Util-DErZaF9J.js";import{OpenModal as W}from"./DialogHRM-Can0AQN2.js";import{i as q}from"./globalSignal-C5WWW7Ov.js";import"./index-Ci0zXM0r.js";var j=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Productos</h2><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),G=x("<div> <!>."),K=x("<div> ");const N=l(()=>d(()=>import("./FlexSpace-D8p7kWcf.js"),__vite__mapDeps([0,1,2]))),Y=l(()=>d(()=>import("./SVG-ccCeZ7vA.js"),__vite__mapDeps([3,1,2,4]))),J=l(()=>d(()=>import("./AddProduct-BALpPcYe.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10]))),U=l(()=>d(()=>import("./LoadingColorSpinner-95Jlb_HW.js"),__vite__mapDeps([11,1,2,12]))),X=l(()=>d(()=>import("./InputHr-BiVeiBlI.js"),__vite__mapDeps([13,1,2,14])));l(()=>d(()=>import("./CheckBoxSlide-DaB8LZ_n.js"),__vite__mapDeps([15,1,2,16])));const Z=l(()=>d(()=>import("./ItemOnProduct-CWj12tw3.js"),__vite__mapDeps([17,1,2,7,4,10,8,9,6,18,19])));function le(){const[a,u]=b(0);b(0);const[t,o]=b("");P(()=>{}),S(()=>{});const c=()=>{let i=Q(),r={};r.id=i,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(J,{modalId:i,refetch:f}),W(r)},[_,{refetch:f}]=$(t,async i=>{const r=await ee(i,a());let v=[];return H(r).map(m=>{let h=r[m];v.push(h)}),v});return(()=>{var i=j(),r=i.firstChild,v=r.firstChild,m=v.nextSibling,h=r.nextSibling,I=h.firstChild,E=h.nextSibling;return p(r,s(N,{}),m),m.$$click=c,p(m,s(Y,{name:"plus",size:22})),p(I,s(X,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>o(e)})),p(E,s(R,{fallback:e=>(()=>{var n=G(),g=n.firstChild,y=g.nextSibling;return y.nextSibling,p(n,()=>e.toString(),y),n})(),get children(){return s(w,{get fallback(){return(()=>{var e=K();return e.firstChild,p(e,s(U,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return s(D,{get when(){return _()},get children(){return s(L,{get each(){return _()},children:(e,n)=>s(Z,{item:e,refetch:f})})}})}})}})),A(e=>{var n=F.App,g=`padding:16px ${q()?"1vw":"5vw"}  `;return n!==e.e&&V(i,e.e=n),e.t=T(E,g,e.t),e},{e:void 0,t:void 0}),i})()}const ee=async(a,u)=>{let t={params:{businessId:k?.profile?.businessYId}};a&&a.split(" ").map((_,f)=>{_&&(t.params[":search"+f]=_.trim())});let o=C(122001);t={...t,...o},t.params[":search0"];const c=await M(t);return c?.error?{}:c},de=async a=>{let u=[];a.map(t=>{let o={params:{id:t?.ssg_track_key,idairguide:"all"}},c=C(802002);o={...o,...c},u.push(o)}),z(u,te)},te=async a=>{const t=await B(a);if(t)return t};O(["click"]);export{ee as LookupProducts,le as default,te as fetchCSVInve,de as loadProduct};
