const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-V_oYOdMb.js","assets/index-C1Z4iK9s.js","assets/index-lCkr9jrN.css","assets/SVG-CEv6cuRw.js","assets/Util-F67-CCle.js","assets/AddManifest-yM0rz6wv.js","assets/DialogHRM-CRDP59Zd.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-CTQCOtIu.js","assets/Scanning-D5Yzwxdj.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-DHSX3Z4Z.js","assets/Toast-DLpFKn-Q.css","assets/LoadingColorSpinner-ChV0i6V3.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BtKimcjL.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-BgBAqzJZ.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnManifest-C81VKVIG.js","assets/components-C6Sjksv6.js"])))=>i.map(i=>d[i]);
import{l as u,_ as f,a as h,o as M,j as w,n as D,b as O,i as p,d as r,w as L,S as P,F as V,E as R,e as B,f as T,y as F,v as Q,m as z,h as j,t as v}from"./index-C1Z4iK9s.js";import{s as H}from"./App.module-CbHnVtRQ.js";import{O as k,b as S,f as W,i as q,e as U,d as G,g as K}from"./Util-F67-CCle.js";import{OpenModal as N}from"./DialogHRM-CRDP59Zd.js";import{h as J,l as X}from"./Scanning-D5Yzwxdj.js";import"./Toast-DHSX3Z4Z.js";var Y=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div><div class="centerBx bottombx "><h5 class="">Entregados</h5></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),Z=v("<div> <!>."),ee=v("<div> ");const te=u(()=>f(()=>import("./FlexSpace-V_oYOdMb.js"),__vite__mapDeps([0,1,2]))),se=u(()=>f(()=>import("./SVG-CEv6cuRw.js"),__vite__mapDeps([3,1,2,4]))),re=u(()=>f(()=>import("./AddManifest-yM0rz6wv.js"),__vite__mapDeps([5,1,2,4,6,7,8,9,10,11,12,13]))),ae=u(()=>f(()=>import("./LoadingColorSpinner-ChV0i6V3.js"),__vite__mapDeps([14,1,2,15]))),ie=u(()=>f(()=>import("./InputHr-BtKimcjL.js"),__vite__mapDeps([16,1,2,17]))),ne=u(()=>f(()=>import("./CheckBoxSlide-BgBAqzJZ.js"),__vite__mapDeps([18,1,2,19]))),le=u(()=>f(()=>import("./ItemOnManifest-C81VKVIG.js"),__vite__mapDeps([20,1,2,4,8,6,7,21])));function ge(){const[i,c]=h(0);h(0);const[e,a]=h("");M(()=>{}),w(()=>{}),D(async()=>{X()});const n=()=>{let t=K(),s={};s.id=t,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=r(re,{modalId:t,refetch:d}),N(s)},l=t=>{c(t),d()},[_,{refetch:d}]=O(e,async t=>await oe(t,i()));return(()=>{var t=Y(),s=t.firstChild,b=s.firstChild,m=b.nextSibling,y=m.nextSibling,C=y.firstChild,x=s.nextSibling,$=x.firstChild,A=x.nextSibling;return p(s,r(te,{}),m),m.$$click=n,p(m,r(se,{name:"plus",size:22})),p(y,r(ne,{get initValue(){return i()},updChange:l,color:"var(--background-red-ssg)"}),C),p($,r(ie,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"search...",colors:"#2b2b2b",handleClick:o=>a(o)})),p(A,r(R,{fallback:o=>(()=>{var g=Z(),I=g.firstChild,E=I.nextSibling;return E.nextSibling,p(g,()=>o.toString(),E),g})(),get children(){return r(L,{get fallback(){return(()=>{var o=ee();return o.firstChild,p(o,r(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),o})()},get children(){return r(P,{get when(){return _()},get children(){return r(V,{get each(){return _()},children:(o,g)=>r(le,{item:o,refetch:d})})}})}})}})),B(()=>T(t,H.App)),t})()}const oe=async(i,c)=>{if(F()){let e=await J(),a=[];return k(e).map(n=>{let l=e?.[n];a.push(l)}),a}else{let e={params:{},fldsjQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"],isCompleted:c};i&&i.split(" ").map((l,_)=>{l&&(e.params[":search"+_]=l.trim())}),Q()||(e.params.workgroup=z?.profile?.workgroup?.id+"");let a=S(703001);e={...e,...a};const n=await W(e);if(n?.error)return{};{let l=[];return k(n).map(_=>{let d=n[_];d._id=d?.ssg_manifest_key,q.put(d,function(s,b){s||console.log("Successfully posted on manifest list")}),l.push(d)}),l}}},he=async i=>{let c=[];i.map(e=>{let a={params:{id:e?.ssg_track_key,idairguide:"all"}},n=S(802002);a={...a,...n},c.push(a)}),U(c,de)},de=async i=>{const e=await G(i);if(e)return e};j(["click"]);export{oe as LookupManifets,ge as default,de as fetchCSVInve,he as loadManifest};
