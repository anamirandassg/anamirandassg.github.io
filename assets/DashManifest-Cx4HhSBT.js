const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CRp4kLNy.js","assets/index-dqKcxXDx.js","assets/index-DEEWbFNK.css","assets/SVG-CSSerAjY.js","assets/Util-C4Gv2Rs-.js","assets/AddManifest-n7HdTjkN.js","assets/DialogHRM-CIe1SfVn.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-DoXmuWlk.js","assets/Scanning-H20L8-V_.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-BAZ9l--3.js","assets/Toast-DLpFKn-Q.css","assets/LoadingColorSpinner-CWMkyEAF.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-qthB2fMY.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-DXe1TAVH.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnManifest-DHcsJ0PD.js","assets/components-ByBgyUQf.js"])))=>i.map(i=>d[i]);
import{l as u,_,a as h,o as M,k as w,b as D,j as O,i as p,d as r,x as L,S as P,F as V,E as R,e as B,g as T,z,w as F,n as Q,h as j,t as v}from"./index-dqKcxXDx.js";import{s as H}from"./App.module-CbHnVtRQ.js";import{O as E,c as S,f as W,m as q,j as U,i as G,b as K}from"./Util-C4Gv2Rs-.js";import{OpenModal as N}from"./DialogHRM-CIe1SfVn.js";import{h as J,l as X}from"./Scanning-H20L8-V_.js";import"./Toast-BAZ9l--3.js";var Y=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div><div class="centerBx bottombx "><h5 class="">Entregados</h5></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),Z=v("<div> <!>."),ee=v("<div> ");const te=u(()=>_(()=>import("./FlexSpace-CRp4kLNy.js"),__vite__mapDeps([0,1,2]))),se=u(()=>_(()=>import("./SVG-CSSerAjY.js"),__vite__mapDeps([3,1,2,4]))),re=u(()=>_(()=>import("./AddManifest-n7HdTjkN.js"),__vite__mapDeps([5,1,2,4,6,7,8,9,10,11,12,13]))),ae=u(()=>_(()=>import("./LoadingColorSpinner-CWMkyEAF.js"),__vite__mapDeps([14,1,2,15]))),ie=u(()=>_(()=>import("./InputHr-qthB2fMY.js"),__vite__mapDeps([16,1,2,17]))),ne=u(()=>_(()=>import("./CheckBoxSlide-DXe1TAVH.js"),__vite__mapDeps([18,1,2,19]))),le=u(()=>_(()=>import("./ItemOnManifest-DHcsJ0PD.js"),__vite__mapDeps([20,1,2,4,8,6,7,21])));function ge(){const[i,d]=h(0);h(0);const[e,a]=h("");M(()=>{}),w(()=>{}),D(async()=>{X()});const n=()=>{let t=K(),s={};s.id=t,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=r(re,{modalId:t,refetch:c}),N(s)},l=t=>{d(t),c()},[f,{refetch:c}]=O(e,async t=>await oe(t,i()));return(()=>{var t=Y(),s=t.firstChild,b=s.firstChild,m=b.nextSibling,x=m.nextSibling,C=x.firstChild,y=s.nextSibling,$=y.firstChild,A=y.nextSibling;return p(s,r(te,{}),m),m.$$click=n,p(m,r(se,{name:"plus",size:22})),p(x,r(ne,{get initValue(){return i()},updChange:l,color:"var(--background-red-ssg)"}),C),p($,r(ie,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"search...",colors:"#2b2b2b",handleClick:o=>a(o)})),p(A,r(R,{fallback:o=>(()=>{var g=Z(),I=g.firstChild,k=I.nextSibling;return k.nextSibling,p(g,()=>o.toString(),k),g})(),get children(){return r(L,{get fallback(){return(()=>{var o=ee();return o.firstChild,p(o,r(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),o})()},get children(){return r(P,{get when(){return f()},get children(){return r(V,{get each(){return f()},children:(o,g)=>r(le,{item:o,refetch:c})})}})}})}})),B(()=>T(t,H.App)),t})()}const oe=async(i,d)=>{if(z()){let e=await J(),a=[];return E(e).map(n=>{let l=e?.[n];a.push(l)}),a}else{let e={params:{},fldsjQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"],isCompleted:d};i&&i.split(" ").map((l,f)=>{l&&(e.params[":search"+f]=l.trim())}),F()||(e.params.workgroup=Q?.profile?.workgroup?.id+"");let a=S(703001);e={...e,...a};const n=await W(e);if(n?.error)return{};{let l=[];return E(n).map(f=>{let c=n[f];c._id=c?.ssg_manifest_key,q.put(c,function(s,b){s||console.log("Successfully posted on manifest list")}),l.push(c)}),l}}},he=async i=>{let d=[];i.map(e=>{let a={params:{id:e?.ssg_track_key,idairguide:"all"}},n=S(802002);a={...a,...n},d.push(a)}),U(d,ce)},ce=async i=>{const e=await G(i);if(e)return e};j(["click"]);export{oe as LookupManifets,ge as default,ce as fetchCSVInve,he as loadManifest};
