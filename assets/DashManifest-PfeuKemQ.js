const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-FC6j4ng_.js","assets/index-DWlcWIT8.js","assets/index-D76Q4b_C.css","assets/SVG-B3hibY_I.js","assets/AddManifest-C2s2WEz9.js","assets/fontkit.es-D6SXTWVW.js","assets/qrcode-C5vWJp7P.js","assets/Toast-BwD6D5tu.js","assets/Toast-SmEZ1JuI.css","assets/DialogHRM-DG7r_Gtm.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BXeEr9RL.js","assets/LoadingColorSpinner-bK8z3UOx.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-DdmhLxKj.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifest-BHDED7Ii.js"])))=>i.map(i=>d[i]);
import{l as o,_ as d,a as v,p as A,k as S,b as E,i as l,d as s,f as D,o as k,W as $,X as C,e as I,t as m,j as M,y as O,S as L,F as N,V,g as w,O as P}from"./index-DWlcWIT8.js";import{s as R}from"./App.module-CbHnVtRQ.js";import{OpenModal as T}from"./DialogHRM-DG7r_Gtm.js";var B=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),F=m("<div> <!>."),z=m("<div> ");const W=o(()=>d(()=>import("./FlexSpace-FC6j4ng_.js"),__vite__mapDeps([0,1,2]))),q=o(()=>d(()=>import("./SVG-B3hibY_I.js"),__vite__mapDeps([3,1,2]))),H=o(()=>d(()=>import("./AddManifest-C2s2WEz9.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11]))),U=o(()=>d(()=>import("./LoadingColorSpinner-bK8z3UOx.js"),__vite__mapDeps([12,1,2,13]))),j=o(()=>d(()=>import("./InputHr-DdmhLxKj.js"),__vite__mapDeps([14,1,2,15]))),K=o(()=>d(()=>import("./ItemOnManifest-BHDED7Ii.js"),__vite__mapDeps([16,1,2,11,9,10])));function Z(){v(0);const[a,c]=v("");A(()=>{}),S(()=>{});const t=()=>{let r=M(),e={};e.id=r,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=s(H,{modalId:r}),T(e)},[i,{refetch:u}]=E(a,async r=>{const e=await Q(r);let _=[];return P(e).map(p=>{let f=e[p];_.push(f)}),_});return(()=>{var r=B(),e=r.firstChild,_=e.firstChild,p=_.nextSibling,f=e.nextSibling,y=f.firstChild,b=f.nextSibling;return l(e,s(W,{}),p),p.$$click=t,l(p,s(q,{name:"plus",size:22})),l(y,s(j,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return a()},placeholder:"search...",colors:"#2b2b2b",handleClick:n=>c(n)})),l(b,s(V,{fallback:n=>(()=>{var h=F(),x=h.firstChild,g=x.nextSibling;return g.nextSibling,l(h,()=>n.toString(),g),h})(),get children(){return s(O,{get fallback(){return(()=>{var n=z();return n.firstChild,l(n,s(U,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return s(L,{get when(){return i()},get children(){return s(N,{get each(){return i()},children:(n,h)=>s(K,{item:n,refetch:u})})}})}})}})),D(()=>w(r,R.App)),r})()}const Q=async(a,c)=>{let t={params:{},query:"getScanManifestYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2 AND !* contain :search3 AND !* contain :search4 AND !* contain :search5 AND currentStatus = :currentStatus AND linkedUser = linkedUser AND status = :status",fldsQry:["createDate","linkedUser","status","name","city","province","ssg_manifest_key"]};a&&a.split(" ").map((u,r)=>{u&&(t.params[":search"+r]=u.trim())});const i=await k(t);return i?.error?{}:i},ee=async a=>{let c=[];a.map(t=>{let i={params:{id:t?.ssg_track_key,idairguide:t?.idairguide},query:"getLogisticOrderByKeyID"};c.push(i)}),$(c,G)},G=async a=>{const t=await C(a);if(t)return t};I(["click"]);export{Q as LookupManifets,Z as default,G as fetchCSVInve,ee as loadManifest};
