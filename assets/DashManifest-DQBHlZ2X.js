const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DG8GvFNu.js","assets/index-BJDLapRD.js","assets/index-DGHHyjai.css","assets/SVG-BG9nti-A.js","assets/index-Ci0zXM0r.js","assets/AddManifest-CphpCK37.js","assets/globalSignal-DDaoVMvq.js","assets/Util-uEfv1z7O.js","assets/DialogHRM-DmhkcNHk.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-n05Z78zY.js","assets/LoadingColorSpinner-LiZYuyw_.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BWlm75HD.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifest-CQZy_zzA.js","assets/components-DZSzWwOS.js"])))=>i.map(i=>d[i]);
import{l as c,_ as p,a as v,o as k,h as $,b as C,i as d,d as s,f as S,k as A,e as I,t as g,q as w,S as M,F as O,E as D,g as L}from"./index-BJDLapRD.js";import{s as P}from"./App.module-CbHnVtRQ.js";import{b,f as R,e as V,d as T,g as F,O as Q}from"./Util-uEfv1z7O.js";import{OpenModal as z}from"./DialogHRM-DmhkcNHk.js";import"./index-Ci0zXM0r.js";var B=g('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),q=g("<div> <!>."),H=g("<div> ");const W=c(()=>p(()=>import("./FlexSpace-DG8GvFNu.js"),__vite__mapDeps([0,1,2]))),j=c(()=>p(()=>import("./SVG-BG9nti-A.js"),__vite__mapDeps([3,1,2,4]))),G=c(()=>p(()=>import("./AddManifest-CphpCK37.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10]))),K=c(()=>p(()=>import("./LoadingColorSpinner-LiZYuyw_.js"),__vite__mapDeps([11,1,2,12]))),N=c(()=>p(()=>import("./InputHr-BWlm75HD.js"),__vite__mapDeps([13,1,2,14]))),U=c(()=>p(()=>import("./ItemOnManifest-CQZy_zzA.js"),__vite__mapDeps([15,1,2,7,4,10,8,9,6,16])));function se(){v(0);const[a,t]=v("");k(()=>{}),$(()=>{});const i=()=>{let r=F(),e={};e.id=r,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=s(G,{modalId:r,refetch:o}),z(e)},[n,{refetch:o}]=C(a,async r=>{const e=await J(r);let u=[];return Q(e).map(_=>{let f=e[_];u.push(f)}),u});return(()=>{var r=B(),e=r.firstChild,u=e.firstChild,_=u.nextSibling,f=e.nextSibling,y=f.firstChild,x=f.nextSibling;return d(e,s(W,{}),_),_.$$click=i,d(_,s(j,{name:"plus",size:22})),d(y,s(N,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return a()},placeholder:"search...",colors:"#2b2b2b",handleClick:l=>t(l)})),d(x,s(D,{fallback:l=>(()=>{var m=q(),E=m.firstChild,h=E.nextSibling;return h.nextSibling,d(m,()=>l.toString(),h),m})(),get children(){return s(w,{get fallback(){return(()=>{var l=H();return l.firstChild,d(l,s(K,{stroke:"rgb(200 25 60 / 1)",size:62}),null),l})()},get children(){return s(M,{get when(){return n()},get children(){return s(O,{get each(){return n()},children:(l,m)=>s(U,{item:l,refetch:o})})}})}})}})),S(()=>L(r,P.App)),r})()}const J=async a=>{let t={params:{workgroup:A?.profile?.workgroup?.id},fldsQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key"]};a&&a.split(" ").map((o,r)=>{o&&(t.params[":search"+r]=o.trim())});let i=b(703001);t={...t,...i};const n=await R(t);return n?.error?{}:n},ae=async a=>{let t=[];a.map(i=>{let n={params:{id:i?.ssg_track_key,idairguide:i?.idairguide}},o=b(802002);n={...n,...o},t.push(n)}),V(t,X)},X=async a=>{const i=await T(a);if(i)return i};I(["click"]);export{J as LookupManifets,se as default,X as fetchCSVInve,ae as loadManifest};
