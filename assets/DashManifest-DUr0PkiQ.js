const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace--GMGrfVT.js","assets/index-DFPcfLox.js","assets/index-BmzAZVve.css","assets/SVG-B13zer73.js","assets/AddManifest-Bq0iaSUw.js","assets/Util-vFOR5kDG.js","assets/DialogHRM-B6nEXmBl.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-D3pUmLss.js","assets/LoadingColorSpinner-tEHpXPTI.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-ESq-Y9NY.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-DWhh9sW3.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnManifest-CuMH87Rj.js","assets/components-DFZct8zv.js"])))=>i.map(i=>d[i]);
import{l as c,_ as p,a as b,o as w,j as D,b as O,i as d,d as r,w as M,S as P,F as V,E as L,e as R,f as T,v as k,m as B,h as F,t as x}from"./index-DFPcfLox.js";import{s as Q}from"./App.module-CbHnVtRQ.js";import{b as C,f as z,e as j,d as H,g as W,O as q}from"./Util-vFOR5kDG.js";import{OpenModal as U}from"./DialogHRM-B6nEXmBl.js";var G=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Manifiestos</h2><div class="icon_status centerBx"></div><div class="centerBx bottombx "><h5 class="">Entregados</h5></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround "style="padding:16px 5vw">'),K=x("<div> <!>."),N=x("<div> ");const J=c(()=>p(()=>import("./FlexSpace--GMGrfVT.js"),__vite__mapDeps([0,1,2]))),X=c(()=>p(()=>import("./SVG-B13zer73.js"),__vite__mapDeps([3,1,2]))),Y=c(()=>p(()=>import("./AddManifest-Bq0iaSUw.js"),__vite__mapDeps([4,1,2,5,6,7,8]))),Z=c(()=>p(()=>import("./LoadingColorSpinner-tEHpXPTI.js"),__vite__mapDeps([9,1,2,10]))),ee=c(()=>p(()=>import("./InputHr-ESq-Y9NY.js"),__vite__mapDeps([11,1,2,12]))),te=c(()=>p(()=>import("./CheckBoxSlide-DWhh9sW3.js"),__vite__mapDeps([13,1,2,14]))),re=c(()=>p(()=>import("./ItemOnManifest-CuMH87Rj.js"),__vite__mapDeps([15,1,2,5,8,6,7,16])));function de(){const[a,i]=b(0);b(0);const[e,o]=b("");w(()=>{}),D(()=>{});const l=()=>{let s=W(),t={};t.id=s,t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=r(Y,{modalId:s,refetch:v}),U(t)},u=s=>{i(s),v()},[f,{refetch:v}]=O(e,async s=>{const t=await se(s,a());let g=[];return q(t).map(_=>{let m=t[_];g.push(m)}),g});return(()=>{var s=G(),t=s.firstChild,g=t.firstChild,_=g.nextSibling,m=_.nextSibling,S=m.firstChild,y=t.nextSibling,$=y.firstChild,A=y.nextSibling;return d(t,r(J,{}),_),_.$$click=l,d(_,r(X,{name:"plus",size:22})),d(m,r(te,{get initValue(){return a()},updChange:u,color:"var(--background-red-ssg)"}),S),d($,r(ee,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"search...",colors:"#2b2b2b",handleClick:n=>o(n)})),d(A,r(L,{fallback:n=>(()=>{var h=K(),I=h.firstChild,E=I.nextSibling;return E.nextSibling,d(h,()=>n.toString(),E),h})(),get children(){return r(M,{get fallback(){return(()=>{var n=N();return n.firstChild,d(n,r(Z,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return r(P,{get when(){return f()},get children(){return r(V,{get each(){return f()},children:(n,h)=>r(re,{item:n,refetch:v})})}})}})}})),R(()=>T(s,Q.App)),s})()}const se=async(a,i)=>{let e={params:{},fldsjQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"],isCompleted:i};a&&a.split(" ").map((u,f)=>{u&&(e.params[":search"+f]=u.trim())}),k()||(e.params.workgroup=B?.profile?.workgroup?.id+"");let o=C(703001);e={...e,...o};const l=await z(e);return k()&&console.log(l),l?.error?{}:l},ce=async a=>{let i=[];a.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},l=C(802002);o={...o,...l},i.push(o)}),j(i,ae)},ae=async a=>{const e=await H(a);if(e)return e};F(["click"]);export{se as LookupManifets,de as default,ae as fetchCSVInve,ce as loadManifest};
