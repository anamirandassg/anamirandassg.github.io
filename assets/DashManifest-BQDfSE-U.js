const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-cpfccbfZ.js","assets/index-oju9DPd2.js","assets/index-B8E-m_hz.css","assets/SVG-BIkIVnTe.js","assets/index-Ci0zXM0r.js","assets/AddManifest-CJISdmin.js","assets/globalSignal-Dx2wg24B.js","assets/Util-Dx3vfczV.js","assets/DialogHRM-BO8J7Tvl.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BkW_x1Hm.js","assets/LoadingColorSpinner-hMnmkBAW.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-rrYqpIFa.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-ChHYzNQk.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnManifest-BZtRmlb9.js","assets/components-CB1Xx2_s.js"])))=>i.map(i=>d[i]);
import{l as d,_ as c,a as b,o as I,h as w,b as D,i as l,d as r,f as O,k as M,e as P,t as x,r as V,S as L,F as R,E as T,g as B}from"./index-oju9DPd2.js";import{s as F}from"./App.module-CbHnVtRQ.js";import{b as k,f as Q,e as z,d as H,g as W,O as q}from"./Util-Dx3vfczV.js";import{OpenModal as j}from"./DialogHRM-BO8J7Tvl.js";import"./index-Ci0zXM0r.js";var G=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div><div class="centerBx bottombx "><h5 class="">Entregados</h5></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),K=x("<div> <!>."),N=x("<div> ");const U=d(()=>c(()=>import("./FlexSpace-cpfccbfZ.js"),__vite__mapDeps([0,1,2]))),J=d(()=>c(()=>import("./SVG-BIkIVnTe.js"),__vite__mapDeps([3,1,2,4]))),X=d(()=>c(()=>import("./AddManifest-CJISdmin.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10]))),Y=d(()=>c(()=>import("./LoadingColorSpinner-hMnmkBAW.js"),__vite__mapDeps([11,1,2,12]))),Z=d(()=>c(()=>import("./InputHr-rrYqpIFa.js"),__vite__mapDeps([13,1,2,14]))),ee=d(()=>c(()=>import("./CheckBoxSlide-ChHYzNQk.js"),__vite__mapDeps([15,1,2,16]))),te=d(()=>c(()=>import("./ItemOnManifest-BZtRmlb9.js"),__vite__mapDeps([17,1,2,7,4,10,8,9,6,18])));function de(){const[a,i]=b(0);b(0);const[e,o]=b("");I(()=>{}),w(()=>{});const p=()=>{let s=W(),t={};t.id=s,t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=r(X,{modalId:s,refetch:v}),j(t)},u=s=>{i(s),v()},[f,{refetch:v}]=D(e,async s=>{const t=await re(s,a());let g=[];return q(t).map(_=>{let m=t[_];g.push(m)}),g});return(()=>{var s=G(),t=s.firstChild,g=t.firstChild,_=g.nextSibling,m=_.nextSibling,C=m.firstChild,y=t.nextSibling,$=y.firstChild,S=y.nextSibling;return l(t,r(U,{}),_),_.$$click=p,l(_,r(J,{name:"plus",size:22})),l(m,r(ee,{get initValue(){return a()},updChange:u,color:"var(--background-red-ssg)"}),C),l($,r(Z,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"search...",colors:"#2b2b2b",handleClick:n=>o(n)})),l(S,r(T,{fallback:n=>(()=>{var h=K(),A=h.firstChild,E=A.nextSibling;return E.nextSibling,l(h,()=>n.toString(),E),h})(),get children(){return r(V,{get fallback(){return(()=>{var n=N();return n.firstChild,l(n,r(Y,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return r(L,{get when(){return f()},get children(){return r(R,{get each(){return f()},children:(n,h)=>r(te,{item:n,refetch:v})})}})}})}})),O(()=>B(s,F.App)),s})()}const re=async(a,i)=>{let e={params:{workgroup:M?.profile?.workgroup?.id},fldsQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"],isCompleted:i};a&&a.split(" ").map((u,f)=>{u&&(e.params[":search"+f]=u.trim())});let o=k(703001);e={...e,...o};const p=await Q(e);return p?.error?{}:p},ce=async a=>{let i=[];a.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},p=k(802002);o={...o,...p},i.push(o)}),z(i,se)},se=async a=>{const e=await H(a);if(e)return e};P(["click"]);export{re as LookupManifets,de as default,se as fetchCSVInve,ce as loadManifest};
