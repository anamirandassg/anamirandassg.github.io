const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnManifestDelivery-ycLNWGtS.js","assets/index-CYppiLK1.js","assets/index-C8O1wSFC.css","assets/debounces-DfFDANt5.js","assets/DialogHRM-BaMFV0wI.js","assets/DialogHRM-V9_lZntj.css","assets/LoadingColorSpinner-DprMS_UZ.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-C-tI7uNM.js","assets/ButonHrm-lgovmBok.js","assets/SVG-yC9yEoUF.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-CsBN3xY3.js","assets/FlexSpace-sNLeAvey.js","assets/DeliveryHbl-MDMjF_Mz.js","assets/InputHr-BIwDYGhX.js","assets/InputHr-M3rJ9grQ.css","assets/Envios-BdNsS347.js","assets/ShowQRPrintLabel-Bg0To2uy.js","assets/fontkit.es-BfAp_FCj.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-Ddhg5UQH.js","assets/Toast-BULQ9bJF.js","assets/Toast-SmEZ1JuI.css","assets/ShowScanManifest-DqpHNvB5.js","assets/DashManifest-C2IkJzi3.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/LinkManifest-Piz3xrqR.js","assets/DeliveryViewDetail-BNVyZjjf.js"])))=>i.map(i=>d[i]);
import{l as o,_ as l,a as s,D as G,c as h,E as j,k,p as A,q as O,j as S,b as q,i as u,d as t,y as w,S as F,F as N,G as Q,t as v,n as U,O as b,o as W,x as H,f as K,e as Y,z as J,M as X,A as Z,B as ee}from"./index-CYppiLK1.js";import{OpenModal as te}from"./DialogHRM-BaMFV0wI.js";import"./DashManifest-C2IkJzi3.js";import"./InputHr-BIwDYGhX.js";import"./App.module-CbHnVtRQ.js";var se=v('<div style="margin:30px 0;width:90vw ">'),ne=v("<div> <!>."),re=v("<div> ");const ie=o(()=>l(()=>import("./ItemOnManifestDelivery-ycLNWGtS.js"),__vite__mapDeps([0,1,2,3,4,5]))),ae=o(()=>l(()=>import("./LoadingColorSpinner-DprMS_UZ.js"),__vite__mapDeps([6,1,2,7]))),[oe,le]=s([]),[$,C]=s("");function ce(){G(),h(),h({}),s(""),s("23008"),s(!1),s(!1),s(""),s(""),s(""),s(""),j(),k(()=>{}),A(()=>{}),O(()=>{$(S())});const[a,{refetch:f}]=q($,async i=>{const e=await de(U?.profile?.userId,"ST009");b(e)?.length===1&&b(e)?.[0];let n=[];return b(e).map(_=>{let c=e[_];n.push(c)}),console.log(n),n});return(()=>{var i=se();return u(i,t(Q,{fallback:e=>(()=>{var n=ne(),_=n.firstChild,c=_.nextSibling;return c.nextSibling,u(n,()=>e.toString(),c),n})(),get children(){return t(w,{get fallback(){return(()=>{var e=re();return e.firstChild,u(e,t(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return t(F,{get when(){return a()},get children(){return t(N,{get each(){return a()},children:(e,n)=>t(ie,{item:e})})}})}})}})),i})()}const de=async(a,f)=>{let i={params:{linkedUser:a,status:f},query:"getScanManifestYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND linkedUser = linkedUser AND status = status"};const e=await W(i);return console.log(i),console.log(e),e},ue=Object.freeze(Object.defineProperty({__proto__:null,default:ce,obsManifest:$,setObsMan:C,setTasks:le,tasks:oe},Symbol.toStringTag,{value:"Module"}));var _e=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Delivery</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:31%>Manifiesto</div></li></ul><div class="centerBx100 ">'),ge=v("<div class=loader>Loading...");const[ye,xe]=h(),pe=o(()=>l(()=>Promise.resolve().then(()=>ue),void 0));o(()=>l(()=>import("./DeliveryCamera-C-tI7uNM.js"),__vite__mapDeps([8,1,2,9,10,11,12,3,13])));o(()=>l(()=>import("./DeliveryHbl-MDMjF_Mz.js"),__vite__mapDeps([14,1,2,15,16,10,17,3,18,19,20,21,22,23,13])));const L=o(()=>l(()=>import("./SVG-yC9yEoUF.js"),__vite__mapDeps([10,1,2]))),ve=o(()=>l(()=>import("./ShowScanManifest-DqpHNvB5.js"),__vite__mapDeps([24,1,2,12,25,26,27,4,5,28,3,19,21,29]))),[fe,Ee]=s("");function Me(){h({});const[a,f]=s(0),[i,e]=Z(),n=r=>()=>e(()=>f(r));k(()=>{I()}),A(()=>{}),O(()=>{});function _(){return"geolocation"in navigator}function c(r){ee({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function I(){_()?navigator.geolocation.getCurrentPosition(c):showMessage("Geolocation isn't supported by your browser")}const P=r=>{console.log("refreshManif ",r),C(S())},R=r=>{let g=S(),d={};d.id=g,d.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},d.content=t(ve,{get item(){return props?.item},modalId:g,callback:P}),te(d)};return(()=>{var r=_e(),g=r.firstChild,d=g.firstChild,y=d.nextSibling,T=g.nextSibling,B=T.nextSibling,x=B.firstChild,m=x.firstChild,V=m.firstChild,z=V.firstChild,E=x.nextSibling;return y.$$click=R,u(y,t(L,{name:"plus",size:32,color:"#2b2b2b"})),H(m,"click",n(0)),u(z,t(L,{name:"filterList",size:32,color:"#2b2b2b"})),u(E,t(w,{get fallback(){return ge()},get children(){return t(J,{get children(){return t(X,{get when(){return a()===0},get children(){return t(pe,{get status(){return fe()}})}})}})}})),K(p=>{var M=a()===0,D=!!i();return M!==p.e&&m.classList.toggle("selected",p.e=M),D!==p.t&&E.classList.toggle("pending",p.t=D),p},{e:void 0,t:void 0}),r})()}Y(["click"]);export{Me as default,ye as scannedQRs,xe as setScannedQRs,Ee as setStatus,fe as status};
