const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-Dl5oZst_.js","assets/index-DTOMnFAS.js","assets/index-BRlA1Q7g.css","assets/Util-CJwQ4eI5.js","assets/DeliveryCamera-DL66mGvu.js","assets/ButonHrm-DgCpqQAT.js","assets/SVG-CCfgW4fr.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-oazqLk9I.js","assets/debounces-BpEiiBvP.js","assets/FlexSpace-DsTtWiYx.js","assets/DeliveryHbl-CST2Z_58.js","assets/InputHr-CQB0PaRN.js","assets/InputHr-BXFw4d2l.css","assets/ShowScanManifest-T3HA9NPb.js","assets/ManifestDetails-CkPsPXU6.js","assets/ShowQRPrintLabel-DFYutaEp.js","assets/fontkit.es-yAesCE8D.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-tbDVtYPt.js","assets/Toast-BLqoE13e.js","assets/Toast-DLpFKn-Q.css","assets/DashManifest-CFgOOqAQ.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/DialogHRM-DusS65ym.js","assets/DialogHRM-V9_lZntj.css","assets/Reports-Cs84zqJN.js","assets/ScanningServices--UFlXfpk.js","assets/DeliveryViewDetail-Dgjw2Cl7.js","assets/ShowScanDeliveryManifest-UJr8jv0b.js","assets/DeliveryScanView-D2pIQ52E.js","assets/components-Coqnizq3.js","assets/ItemOnManifestDelivery-CFsQ3WCM.js","assets/LoadingColorSpinner-DFG1fFN3.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as v,l as r,_ as l,a as x,d as C,i as a,e as i,z as L,S as R,F as D,E as O,h as k,t as h,g as w}from"./index-DTOMnFAS.js";import{a as M,O as P,g as T,f as V}from"./Util-CJwQ4eI5.js";import{OpenModal as B}from"./DialogHRM-DusS65ym.js";var z=h('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Entregas</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"style=width:180px>Manifiestos a entregar</div></li></ul><div style="margin:30px 0;width:90vw ">'),Q=h("<div> <!>."),F=h("<div> ");const[N,U]=v();r(()=>l(()=>import("./DeliveryManifest-Dl5oZst_.js"),__vite__mapDeps([0,1,2,3])));r(()=>l(()=>import("./DeliveryCamera-DL66mGvu.js"),__vite__mapDeps([4,1,2,5,6,3,7,8,9,10])));r(()=>l(()=>import("./DeliveryHbl-CST2Z_58.js"),__vite__mapDeps([11,1,2,12,13,3,6,10])));const f=r(()=>l(()=>import("./SVG-CCfgW4fr.js"),__vite__mapDeps([6,1,2,3]))),q=r(()=>l(()=>import("./ShowScanManifest-T3HA9NPb.js"),__vite__mapDeps([14,1,2,8,3,15,9,5,6,7,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]))),W=r(()=>l(()=>import("./ItemOnManifestDelivery-CFsQ3WCM.js"),__vite__mapDeps([33,1,2,3,9,25,26,32]))),j=r(()=>l(()=>import("./LoadingColorSpinner-DFG1fFN3.js"),__vite__mapDeps([34,1,2,35]))),[X,Y]=v({}),[Z,ee]=x("");function te(){x(null);const[o,_]=v(""),u=async()=>{const t=await G(w?.profile?.userId,"ST009");let e=[];P(t).map(p=>{let c=t[p];e.push(c)}),_("list",e)};C(u);const n=()=>{let t=M(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(q,{modalId:t,refetch:u}),B(e)};return(()=>{var t=z(),e=t.firstChild,p=e.firstChild,c=p.nextSibling,S=e.nextSibling,$=S.nextSibling,m=$.firstChild,E=m.firstChild,b=E.firstChild,y=b.firstChild,I=m.nextSibling;return c.$$click=n,a(c,i(f,{name:"plus",size:32,color:"#2b2b2b"})),a(y,i(f,{name:"filterList",size:32,color:"#2b2b2b"})),a(I,i(O,{fallback:s=>(()=>{var d=Q(),A=d.firstChild,g=A.nextSibling;return g.nextSibling,a(d,()=>s.toString(),g),d})(),get children(){return i(L,{get fallback(){return(()=>{var s=F();return s.firstChild,a(s,i(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return i(R,{get when(){return o?.list?.length>0},get children(){return i(D,{get each(){return o?.list},children:(s,d)=>i(W,{item:s})})}})}})}})),t})()}const G=async(o,_,u)=>{let n={params:{linkedUser:o,status:_,checkAuth:!0}},t=T(703001);n={...n,...t};const e=await V(n);return console.log(n),console.log(e),e};k(["click"]);export{te as default,N as scannedQRs,U as setScannedQRs,ee as setStatus,Y as setStop2Deliver,Z as status,X as stop2Deliver};
