const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-AvAmS2bv.js","assets/index-CVR6cbR4.js","assets/index-D7Gv5tA3.css","assets/SVG-C40NHNfg.js","assets/Util-C4Gv2Rs-.js","assets/LoadingColorSpinner-Cs-vAZtB.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-DnhsB-bF.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-BQueQWdN.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnSalesOrder-BFD7gIkk.js","assets/Toast-8Bo8TXoA.js","assets/Toast-DLpFKn-Q.css","assets/components-Cpdvtj-J.js"])))=>i.map(i=>d[i]);
import{l as d,_ as c,a as g,o as S,k as A,j as $,b as O,i as u,d as a,x as I,S as P,F as k,E as w,e as D,f as L,g as R,q as V,n as T,t as b}from"./index-CVR6cbR4.js";import{s as F}from"./App.module-CbHnVtRQ.js";import{c as E,f as B,j as Q,i as j,O as q}from"./Util-C4Gv2Rs-.js";import"./DialogHRM-Cfll8vbC.js";var M=b('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Ordenes</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),W=b("<div> <!>."),z=b("<div> ");const H=d(()=>c(()=>import("./FlexSpace-AvAmS2bv.js"),__vite__mapDeps([0,1,2])));d(()=>c(()=>import("./SVG-C40NHNfg.js"),__vite__mapDeps([3,1,2,4])));const K=d(()=>c(()=>import("./LoadingColorSpinner-Cs-vAZtB.js"),__vite__mapDeps([5,1,2,6]))),N=d(()=>c(()=>import("./InputHr-DnhsB-bF.js"),__vite__mapDeps([7,1,2,8])));d(()=>c(()=>import("./ButonHrm-BQueQWdN.js"),__vite__mapDeps([9,1,2,3,4,10])));const Y=d(()=>c(()=>import("./ItemOnSalesOrder-BFD7gIkk.js"),__vite__mapDeps([11,1,2,4,12,13,14])));function re(){const[t,p]=g(0);g(0);const[r,n]=g("");S(()=>{}),A(()=>{});const[i,{refetch:_}]=$(r,async s=>{if(s.length>2){const o=await G(s,t());let f=[];return q(o).map(m=>{let v=o[m];f.push(v)}),f}else return[]});return O(()=>{}),(()=>{var s=M(),o=s.firstChild,f=o.firstChild,m=f.nextSibling,v=o.nextSibling,C=v.firstChild,x=v.nextSibling;return u(o,a(H,{}),m),u(C,a(N,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>n(e)})),u(x,a(w,{fallback:e=>(()=>{var l=W(),h=l.firstChild,y=h.nextSibling;return y.nextSibling,u(l,()=>e.toString(),y),l})(),get children(){return a(I,{get fallback(){return(()=>{var e=z();return e.firstChild,u(e,a(K,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return a(P,{get when(){return i()},get children(){return a(k,{get each(){return i()},children:(e,l)=>a(Y,{item:e,refetch:_})})}})}})}})),D(e=>{var l=F.App,h=`padding:16px ${L()?"1vw":"5vw"}  `;return l!==e.e&&R(s,e.e=l),e.t=V(x,h,e.t),e},{e:void 0,t:void 0}),s})()}const G=async(t,p)=>{let r={params:{businessId:T?.profile?.businessYId}};t&&t.split(" ").map((_,s)=>{_&&(r.params[":search"+s]=_.trim())});let n=E(431002);r={...r,...n};const i=await B(r);return i?.error?{}:i},te=async t=>{let p=[];t.map(r=>{let n={params:{id:r?.ssg_track_key,idairguide:"all"}},i=E(802002);n={...n,...i},p.push(n)}),Q(p,J)},J=async t=>{const r=await j(t);if(r)return r};export{G as LookupProducts,re as default,J as fetchCSVInve,te as loadProduct};
