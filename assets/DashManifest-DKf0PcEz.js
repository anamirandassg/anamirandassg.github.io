const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DRY60fzG.js","assets/index-Rl3TmLYH.js","assets/index-BRlA1Q7g.css","assets/SVG-DmfBQ1XE.js","assets/Util-DmBsvgxN.js","assets/AddManifest-DXrSgUrJ.js","assets/DialogHRM-DwC3nSOA.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-C5fEz-lH.js","assets/Scanning-CJEBX0gz.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-B7V57fet.js","assets/Toast-DLpFKn-Q.css","assets/LoadingColorSpinner-bsIhJXp3.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-CZbOiJC6.js","assets/InputHr-BXFw4d2l.css","assets/CheckBoxSlide-txHvUasg.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnManifest-DfqrEyoN.js","assets/components-DKOHBzuN.js"])))=>i.map(i=>d[i]);
import{l as u,_ as f,a as h,o as M,b as w,d as D,p as O,i as p,e as r,z as L,S as P,F as V,E as R,f as B,m as T,B as z,x as F,g as Q,h as H,t as v}from"./index-Rl3TmLYH.js";import{s as W}from"./App.module-CbHnVtRQ.js";import{O as E,g as S,f as j,o as q,m as U,k as G,a as K}from"./Util-DmBsvgxN.js";import{OpenModal as N}from"./DialogHRM-DwC3nSOA.js";import{h as J,l as X}from"./Scanning-CJEBX0gz.js";import"./Toast-B7V57fet.js";var Y=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div><div class="centerBx bottombx "><h5 class="">Entregados</h5></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),Z=v("<div> <!>."),ee=v("<div> ");const te=u(()=>f(()=>import("./FlexSpace-DRY60fzG.js"),__vite__mapDeps([0,1,2]))),se=u(()=>f(()=>import("./SVG-DmfBQ1XE.js"),__vite__mapDeps([3,1,2,4]))),re=u(()=>f(()=>import("./AddManifest-DXrSgUrJ.js"),__vite__mapDeps([5,1,2,4,6,7,8,9,10,11,12,13]))),ae=u(()=>f(()=>import("./LoadingColorSpinner-bsIhJXp3.js"),__vite__mapDeps([14,1,2,15]))),ie=u(()=>f(()=>import("./InputHr-CZbOiJC6.js"),__vite__mapDeps([16,1,2,17]))),ne=u(()=>f(()=>import("./CheckBoxSlide-txHvUasg.js"),__vite__mapDeps([18,1,2,19]))),oe=u(()=>f(()=>import("./ItemOnManifest-DfqrEyoN.js"),__vite__mapDeps([20,1,2,4,8,6,7,21])));function ge(){const[i,c]=h(0);h(0);const[e,a]=h("");M(()=>{}),w(()=>{}),D(async()=>{X()});const n=()=>{let t=K(),s={};s.id=t,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=r(re,{modalId:t,refetch:d}),N(s)},o=t=>{c(t),d()},[_,{refetch:d}]=O(e,async t=>await le(t,i()));return(()=>{var t=Y(),s=t.firstChild,b=s.firstChild,m=b.nextSibling,x=m.nextSibling,C=x.firstChild,y=s.nextSibling,$=y.firstChild,A=y.nextSibling;return p(s,r(te,{}),m),m.$$click=n,p(m,r(se,{name:"plus",size:22})),p(x,r(ne,{get initValue(){return i()},updChange:o,color:"var(--background-red-ssg)"}),C),p($,r(ie,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"search...",colors:"#2b2b2b",handleClick:l=>a(l)})),p(A,r(R,{fallback:l=>(()=>{var g=Z(),I=g.firstChild,k=I.nextSibling;return k.nextSibling,p(g,()=>l.toString(),k),g})(),get children(){return r(L,{get fallback(){return(()=>{var l=ee();return l.firstChild,p(l,r(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),l})()},get children(){return r(P,{get when(){return _()},get children(){return r(V,{get each(){return _()},children:(l,g)=>r(oe,{item:l,refetch:d})})}})}})}})),B(()=>T(t,W.App)),t})()}const le=async(i,c)=>{if(z()){let e=await J(),a=[];return E(e).map(n=>{let o=e?.[n];a.push(o)}),a}else{let e={params:{},fldsjQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"],isCompleted:c};i&&i.split(" ").map((o,_)=>{o&&(e.params[":search"+_]=o.trim())}),F()||(e.params.workgroup=Q?.profile?.workgroup?.id+"");let a=S(703001);e={...e,...a};const n=await j(e);if(n?.error)return{};{let o=[];return E(n).map(_=>{let d=n[_];d._id=d?.ssg_manifest_key,q.put(d,function(s,b){s||console.log("Successfully posted on manifest list")}),o.push(d)}),o}}},he=async i=>{let c=[];i.map(e=>{let a={params:{id:e?.ssg_track_key,idairguide:"all"}},n=S(802002);a={...a,...n},c.push(a)}),U(c,de)},de=async i=>{const e=await G(i);if(e)return e};H(["click"]);export{le as LookupManifets,ge as default,de as fetchCSVInve,he as loadManifest};
