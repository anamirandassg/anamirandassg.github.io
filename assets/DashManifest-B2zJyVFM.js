const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BXqKi982.js","assets/index-DJb4pLvl.js","assets/index-BmzAZVve.css","assets/SVG-CUHt6r20.js","assets/index-Ci0zXM0r.js","assets/AddManifest-Bzx6fqhi.js","assets/Util-C77m685E.js","assets/DialogHRM-DKKGfX1K.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-B3S0x5Vu.js","assets/LoadingColorSpinner-Dv4k1B83.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-FKh1Xl-y.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-CWGHnrJo.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnManifest-CTptEXCH.js","assets/components-CJeDnSS2.js"])))=>i.map(i=>d[i]);
import{l as d,_ as c,a as b,o as I,j as w,b as D,i as l,d as r,w as O,S as M,F as P,E as V,e as L,f as R,m as T,h as B,t as x}from"./index-DJb4pLvl.js";import{s as F}from"./App.module-CbHnVtRQ.js";import{b as k,f as Q,e as z,d as H,g as W,O as j}from"./Util-C77m685E.js";import{OpenModal as q}from"./DialogHRM-DKKGfX1K.js";import"./index-Ci0zXM0r.js";var G=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div><div class="centerBx bottombx "><h5 class="">Entregados</h5></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),K=x("<div> <!>."),N=x("<div> ");const U=d(()=>c(()=>import("./FlexSpace-BXqKi982.js"),__vite__mapDeps([0,1,2]))),J=d(()=>c(()=>import("./SVG-CUHt6r20.js"),__vite__mapDeps([3,1,2,4]))),X=d(()=>c(()=>import("./AddManifest-Bzx6fqhi.js"),__vite__mapDeps([5,1,2,6,4,7,8,9]))),Y=d(()=>c(()=>import("./LoadingColorSpinner-Dv4k1B83.js"),__vite__mapDeps([10,1,2,11]))),Z=d(()=>c(()=>import("./InputHr-FKh1Xl-y.js"),__vite__mapDeps([12,1,2,13]))),ee=d(()=>c(()=>import("./CheckBoxSlide-CWGHnrJo.js"),__vite__mapDeps([14,1,2,15]))),te=d(()=>c(()=>import("./ItemOnManifest-CTptEXCH.js"),__vite__mapDeps([16,1,2,6,4,9,7,8,17])));function de(){const[a,i]=b(0);b(0);const[e,o]=b("");I(()=>{}),w(()=>{});const p=()=>{let s=W(),t={};t.id=s,t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=r(X,{modalId:s,refetch:v}),q(t)},u=s=>{i(s),v()},[f,{refetch:v}]=D(e,async s=>{const t=await re(s,a());let m=[];return j(t).map(_=>{let g=t[_];m.push(g)}),m});return(()=>{var s=G(),t=s.firstChild,m=t.firstChild,_=m.nextSibling,g=_.nextSibling,C=g.firstChild,y=t.nextSibling,$=y.firstChild,S=y.nextSibling;return l(t,r(U,{}),_),_.$$click=p,l(_,r(J,{name:"plus",size:22})),l(g,r(ee,{get initValue(){return a()},updChange:u,color:"var(--background-red-ssg)"}),C),l($,r(Z,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"search...",colors:"#2b2b2b",handleClick:n=>o(n)})),l(S,r(V,{fallback:n=>(()=>{var h=K(),A=h.firstChild,E=A.nextSibling;return E.nextSibling,l(h,()=>n.toString(),E),h})(),get children(){return r(O,{get fallback(){return(()=>{var n=N();return n.firstChild,l(n,r(Y,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return r(M,{get when(){return f()},get children(){return r(P,{get each(){return f()},children:(n,h)=>r(te,{item:n,refetch:v})})}})}})}})),L(()=>R(s,F.App)),s})()}const re=async(a,i)=>{let e={params:{workgroup:T?.profile?.workgroup?.id},fldsQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"],isCompleted:i};a&&a.split(" ").map((u,f)=>{u&&(e.params[":search"+f]=u.trim())});let o=k(703001);e={...e,...o};const p=await Q(e);return p?.error?{}:p},ce=async a=>{let i=[];a.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},p=k(802002);o={...o,...p},i.push(o)}),z(i,se)},se=async a=>{const e=await H(a);if(e)return e};B(["click"]);export{re as LookupManifets,de as default,se as fetchCSVInve,ce as loadManifest};
