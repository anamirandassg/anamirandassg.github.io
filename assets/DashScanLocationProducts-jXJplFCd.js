const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Bhub-XBy.js","assets/index-JeM1UUlF.js","assets/index-lCkr9jrN.css","assets/SVG-tLQf-akW.js","assets/AddProduct-kXpxoL1g.js","assets/DialogHRM-CVXfSPfa.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BsrWG7xD.js","assets/LoadingColorSpinner-DZYtYP4T.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-B_DY6Ffw.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-RxwIk-9N.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnScanLocationProduct-D35gwAZh.js","assets/handelImagesServices-B-eX21aQ.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-DFxhib2M.js","assets/Toast-DLpFKn-Q.css","assets/ShowQRPrintLabel-CEo9iPAS.js","assets/PDFButton-CVEa5i5b.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BIcH_GNA.js","assets/InitPrintServices-CJPpdbG7.js"])))=>i.map(i=>d[i]);
import{l,_ as d,a as g,r as S,k as A,b as I,s as P,i as p,d as a,H as $,S as k,F as w,G as L,e as O,g as D,f as R,w as V,n as T,p as E,q as F,I as B,C as Q,t as b,O as q}from"./index-JeM1UUlF.js";import{s as H}from"./App.module-CbHnVtRQ.js";import"./DialogHRM-CVXfSPfa.js";var M=b('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Conteo Inventario de Productos</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),W=b("<div> <!>."),z=b("<div> ");const j=l(()=>d(()=>import("./FlexSpace-Bhub-XBy.js"),__vite__mapDeps([0,1,2])));l(()=>d(()=>import("./SVG-tLQf-akW.js"),__vite__mapDeps([3,1,2])));l(()=>d(()=>import("./AddProduct-kXpxoL1g.js"),__vite__mapDeps([4,1,2,5,6,7])));const G=l(()=>d(()=>import("./LoadingColorSpinner-DZYtYP4T.js"),__vite__mapDeps([8,1,2,9]))),K=l(()=>d(()=>import("./InputHr-B_DY6Ffw.js"),__vite__mapDeps([10,1,2,11])));l(()=>d(()=>import("./ButonHrm-RxwIk-9N.js"),__vite__mapDeps([12,1,2,3,13])));const N=l(()=>d(()=>import("./ItemOnScanLocationProduct-D35gwAZh.js"),__vite__mapDeps([14,1,2,7,5,6,15,16,17,18,19,20,21,22,23])));function ee(){const[t,u]=g(0);g(0);const[r,n]=g("");S(()=>{}),A(()=>{});const[i,{refetch:_}]=I(r,async s=>{if(s.length>8){const c=await Y(s,t());let f=[];return q(c).map(m=>{let v=c[m];f.push(v)}),f}else return[]});return P(()=>{}),(()=>{var s=M(),c=s.firstChild,f=c.firstChild,m=f.nextSibling,v=c.nextSibling,C=v.firstChild,x=v.nextSibling;return p(c,a(j,{}),m),p(C,a(K,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>n(e)})),p(x,a(L,{fallback:e=>(()=>{var o=W(),h=o.firstChild,y=h.nextSibling;return y.nextSibling,p(o,()=>e.toString(),y),o})(),get children(){return a($,{get fallback(){return(()=>{var e=z();return e.firstChild,p(e,a(G,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return a(k,{get when(){return i()},get children(){return a(w,{get each(){return i()},children:(e,o)=>a(N,{item:e,refetch:_})})}})}})}})),O(e=>{var o=H.App,h=`padding:16px ${D()?"1vw":"5vw"}  `;return o!==e.e&&R(s,e.e=o),e.t=V(x,h,e.t),e},{e:void 0,t:void 0}),s})()}const Y=async(t,u)=>{let r={params:{businessId:T?.profile?.businessYId}};t&&t.split(" ").map((_,s)=>{_&&(r.params[":search"+s]=_.trim())});let n=E(122001);r={...r,...n},r.params[":search0"];const i=await F(r);return i?.error?{}:i},re=async t=>{let u=[];t.map(r=>{let n={params:{id:r?.ssg_track_key,idairguide:"all"}},i=E(802002);n={...n,...i},u.push(n)}),B(u,J)},J=async t=>{const r=await Q(t);if(r)return r};export{Y as LookupProducts,ee as default,J as fetchCSVInve,re as loadProduct};