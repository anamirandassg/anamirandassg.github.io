const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-C4NbACMw.js","assets/index-Bd8d4l1p.js","assets/index-DGHHyjai.css","assets/SVG-jh3f1-82.js","assets/index-Ci0zXM0r.js","assets/AddManifest-BgMSYr82.js","assets/globalSignal-ChcoKg_q.js","assets/Util-uEfv1z7O.js","assets/DialogHRM-Dkv_duLR.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-DQF1eLiT.js","assets/LoadingColorSpinner-msWu7pWL.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-NvD9idxZ.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifest-DoQpBsLS.js","assets/components-BV5D2xD-.js"])))=>i.map(i=>d[i]);
import{l as d,_ as p,a as v,o as k,h as $,b as C,i as c,d as s,f as S,k as A,e as I,t as g,r as w,S as M,F as O,E as D,g as L}from"./index-Bd8d4l1p.js";import{s as P}from"./App.module-CbHnVtRQ.js";import{b,f as R,e as V,d as T,g as F,O as Q}from"./Util-uEfv1z7O.js";import{OpenModal as z}from"./DialogHRM-Dkv_duLR.js";import"./index-Ci0zXM0r.js";var B=g('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),H=g("<div> <!>."),W=g("<div> ");const q=d(()=>p(()=>import("./FlexSpace-C4NbACMw.js"),__vite__mapDeps([0,1,2]))),j=d(()=>p(()=>import("./SVG-jh3f1-82.js"),__vite__mapDeps([3,1,2,4]))),G=d(()=>p(()=>import("./AddManifest-BgMSYr82.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10]))),K=d(()=>p(()=>import("./LoadingColorSpinner-msWu7pWL.js"),__vite__mapDeps([11,1,2,12]))),N=d(()=>p(()=>import("./InputHr-NvD9idxZ.js"),__vite__mapDeps([13,1,2,14]))),U=d(()=>p(()=>import("./ItemOnManifest-DoQpBsLS.js"),__vite__mapDeps([15,1,2,7,4,10,8,9,6,16])));function se(){v(0);const[a,t]=v("");k(()=>{}),$(()=>{});const l=()=>{let r=F(),e={};e.id=r,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=s(G,{modalId:r,refetch:o}),z(e)},[i,{refetch:o}]=C(a,async r=>{const e=await J(r);let u=[];return Q(e).map(_=>{let f=e[_];u.push(f)}),u});return(()=>{var r=B(),e=r.firstChild,u=e.firstChild,_=u.nextSibling,f=e.nextSibling,y=f.firstChild,x=f.nextSibling;return c(e,s(q,{}),_),_.$$click=l,c(_,s(j,{name:"plus",size:22})),c(y,s(N,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return a()},placeholder:"search...",colors:"#2b2b2b",handleClick:n=>t(n)})),c(x,s(D,{fallback:n=>(()=>{var m=H(),E=m.firstChild,h=E.nextSibling;return h.nextSibling,c(m,()=>n.toString(),h),m})(),get children(){return s(w,{get fallback(){return(()=>{var n=W();return n.firstChild,c(n,s(K,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return s(M,{get when(){return i()},get children(){return s(O,{get each(){return i()},children:(n,m)=>s(U,{item:n,refetch:o})})}})}})}})),S(()=>L(r,P.App)),r})()}const J=async a=>{let t={params:{workgroup:A?.profile?.workgroup?.id},fldsQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key"]};a&&a.split(" ").map((o,r)=>{o&&(t.params[":search"+r]=o.trim())});let l=b(703001);t={...t,...l};const i=await R(t);return i?.error?{}:i},ae=async a=>{let t=[];a.map(l=>{let i={params:{id:l?.ssg_track_key,idairguide:"all"}},o=b(802002);i={...i,...o},t.push(i)}),V(t,X)},X=async a=>{const l=await T(a);if(l)return l};I(["click"]);export{J as LookupManifets,se as default,X as fetchCSVInve,ae as loadManifest};