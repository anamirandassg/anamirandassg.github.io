const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D7M8rCrF.js","assets/index-BnQZZ72n.js","assets/index-BRlA1Q7g.css","assets/SVG-B-_GsH4b.js","assets/Util-DCAGxQXf.js","assets/AddManifest-CEMEs_3G.js","assets/DialogHRM-ts0cJGWB.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-DUPjjIVA.js","assets/Scanning-DmSqSnL8.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-CkzLo8WE.js","assets/Toast-DLpFKn-Q.css","assets/LoadingColorSpinner-Chl4NC-B.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-DdE5WK8Z.js","assets/InputHr-BXFw4d2l.css","assets/CheckBoxSlide-2_eEWFlj.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnManifest-B0Lw0tqW.js","assets/components-Cdp0H2IA.js"])))=>i.map(i=>d[i]);
import{l as u,_ as f,a as h,o as M,b as w,d as D,p as O,i as p,e as r,z as L,S as P,F as V,E as R,f as B,m as T,B as z,x as F,g as Q,h as q,t as v}from"./index-BnQZZ72n.js";import{s as H}from"./App.module-CbHnVtRQ.js";import{O as E,g as S,f as W,q as j,m as U,k as G,a as K}from"./Util-DCAGxQXf.js";import{OpenModal as N}from"./DialogHRM-ts0cJGWB.js";import{h as J,l as X}from"./Scanning-DmSqSnL8.js";import"./Toast-CkzLo8WE.js";var Y=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div><div class="centerBx bottombx "><h5 class="">Entregados</h5></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),Z=v("<div> <!>."),ee=v("<div> ");const te=u(()=>f(()=>import("./FlexSpace-D7M8rCrF.js"),__vite__mapDeps([0,1,2]))),se=u(()=>f(()=>import("./SVG-B-_GsH4b.js"),__vite__mapDeps([3,1,2,4]))),re=u(()=>f(()=>import("./AddManifest-CEMEs_3G.js"),__vite__mapDeps([5,1,2,4,6,7,8,9,10,11,12,13]))),ae=u(()=>f(()=>import("./LoadingColorSpinner-Chl4NC-B.js"),__vite__mapDeps([14,1,2,15]))),ie=u(()=>f(()=>import("./InputHr-DdE5WK8Z.js"),__vite__mapDeps([16,1,2,17]))),ne=u(()=>f(()=>import("./CheckBoxSlide-2_eEWFlj.js"),__vite__mapDeps([18,1,2,19]))),le=u(()=>f(()=>import("./ItemOnManifest-B0Lw0tqW.js"),__vite__mapDeps([20,1,2,4,8,6,7,21])));function ge(){const[i,c]=h(0);h(0);const[e,a]=h("");M(()=>{}),w(()=>{}),D(async()=>{X()});const n=()=>{let t=K(),s={};s.id=t,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=r(re,{modalId:t,refetch:d}),N(s)},l=t=>{c(t),d()},[_,{refetch:d}]=O(e,async t=>await oe(t,i()));return(()=>{var t=Y(),s=t.firstChild,b=s.firstChild,m=b.nextSibling,x=m.nextSibling,C=x.firstChild,y=s.nextSibling,$=y.firstChild,A=y.nextSibling;return p(s,r(te,{}),m),m.$$click=n,p(m,r(se,{name:"plus",size:22})),p(x,r(ne,{get initValue(){return i()},updChange:l,color:"var(--background-red-ssg)"}),C),p($,r(ie,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"search...",colors:"#2b2b2b",handleClick:o=>a(o)})),p(A,r(R,{fallback:o=>(()=>{var g=Z(),I=g.firstChild,k=I.nextSibling;return k.nextSibling,p(g,()=>o.toString(),k),g})(),get children(){return r(L,{get fallback(){return(()=>{var o=ee();return o.firstChild,p(o,r(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),o})()},get children(){return r(P,{get when(){return _()},get children(){return r(V,{get each(){return _()},children:(o,g)=>r(le,{item:o,refetch:d})})}})}})}})),B(()=>T(t,H.App)),t})()}const oe=async(i,c)=>{if(z()){let e=await J(),a=[];return E(e).map(n=>{let l=e?.[n];a.push(l)}),a}else{let e={params:{},fldsjQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"],isCompleted:c};i&&i.split(" ").map((l,_)=>{l&&(e.params[":search"+_]=l.trim())}),F()||(e.params.workgroup=Q?.profile?.workgroup?.id+"");let a=S(703001);e={...e,...a};const n=await W(e);if(n?.error)return{};{let l=[];return E(n).map(_=>{let d=n[_];d._id=d?.ssg_manifest_key,j.put(d,function(s,b){s||console.log("Successfully posted on manifest list")}),l.push(d)}),l}}},he=async i=>{let c=[];i.map(e=>{let a={params:{id:e?.ssg_track_key,idairguide:"all"}},n=S(802002);a={...a,...n},c.push(a)}),U(c,de)},de=async i=>{const e=await G(i);if(e)return e};q(["click"]);export{oe as LookupManifets,ge as default,de as fetchCSVInve,he as loadManifest};
