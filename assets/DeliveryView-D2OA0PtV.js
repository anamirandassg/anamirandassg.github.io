const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-COMJnGBl.js","assets/index-CQuD3DCq.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js","assets/DeliveryCamera-FYoAZM_l.js","assets/ButonHrm-Dx0Bvr7a.js","assets/SVG-C7kEtqG-.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-QeobMvFI.js","assets/debounces-CIWj1gH4.js","assets/FlexSpace-tYfMYvkD.js","assets/DeliveryHbl-BYZCAXQu.js","assets/InputHr-CThNFDCi.js","assets/InputHr-BXFw4d2l.css","assets/ShowScanManifest-clyFOZS-.js","assets/ManifestDetails-1NODOheu.js","assets/ShowQRPrintLabel-DzfQH_lE.js","assets/PDFButton-ClnWeH7R.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-DkuHxdU6.js","assets/InitPrintServices-QWHeDiid.js","assets/Toast-93Yb8nPc.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-CjlPBnUE.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryViewDetail-MHZ3kYYe.js","assets/ShowScanDeliveryManifest-DkLb2rfB.js","assets/DeliveryScanView-CRKtHxs0.js","assets/components-DYk2IIwa.js","assets/ItemOnManifestDelivery-BB421HVT.js","assets/LoadingColorSpinner-C2uSCjGG.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as v,l as r,_ as l,a as x,e as C,i as a,f as i,y as L,S as R,F as D,E as O,d as k,t as h,g as w}from"./index-CQuD3DCq.js";import{a as M,O as P,g as T,f as V}from"./Util-DZlMHKqJ.js";import{OpenModal as B}from"./DialogHRM-CjlPBnUE.js";var Q=h('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Entregas</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"style=width:180px>Manifiestos a entregar</div></li></ul><div style="margin:30px 0;width:90vw ">'),z=h("<div> <!>."),F=h("<div> ");const[N,U]=v();r(()=>l(()=>import("./DeliveryManifest-COMJnGBl.js"),__vite__mapDeps([0,1,2,3])));r(()=>l(()=>import("./DeliveryCamera-FYoAZM_l.js"),__vite__mapDeps([4,1,2,5,6,3,7,8,9,10])));r(()=>l(()=>import("./DeliveryHbl-BYZCAXQu.js"),__vite__mapDeps([11,1,2,12,13,3,6,10])));const f=r(()=>l(()=>import("./SVG-C7kEtqG-.js"),__vite__mapDeps([6,1,2,3]))),q=r(()=>l(()=>import("./ShowScanManifest-clyFOZS-.js"),__vite__mapDeps([14,1,2,8,3,15,9,5,6,7,16,17,18,19,20,21,22,23,24,25,26,27,28]))),W=r(()=>l(()=>import("./ItemOnManifestDelivery-BB421HVT.js"),__vite__mapDeps([29,1,2,3,9,23,24,28]))),j=r(()=>l(()=>import("./LoadingColorSpinner-C2uSCjGG.js"),__vite__mapDeps([30,1,2,31]))),[X,Y]=v({}),[Z,ee]=x("");function te(){x(null);const[o,_]=v(""),u=async()=>{const t=await G(w?.profile?.userId,"ST009");let e=[];P(t).map(p=>{let c=t[p];e.push(c)}),_("list",e)};C(u);const n=()=>{let t=M(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(q,{modalId:t,refetch:u}),B(e)};return(()=>{var t=Q(),e=t.firstChild,p=e.firstChild,c=p.nextSibling,S=e.nextSibling,$=S.nextSibling,m=$.firstChild,E=m.firstChild,b=E.firstChild,y=b.firstChild,I=m.nextSibling;return c.$$click=n,a(c,i(f,{name:"plus",size:32,color:"#2b2b2b"})),a(y,i(f,{name:"filterList",size:32,color:"#2b2b2b"})),a(I,i(O,{fallback:s=>(()=>{var d=z(),A=d.firstChild,g=A.nextSibling;return g.nextSibling,a(d,()=>s.toString(),g),d})(),get children(){return i(L,{get fallback(){return(()=>{var s=F();return s.firstChild,a(s,i(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return i(R,{get when(){return o?.list?.length>0},get children(){return i(D,{get each(){return o?.list},children:(s,d)=>i(W,{item:s})})}})}})}})),t})()}const G=async(o,_,u)=>{let n={params:{linkedUser:o,status:_,checkAuth:!0}},t=T(703001);n={...n,...t};const e=await V(n);return console.log(n),console.log(e),e};k(["click"]);export{te as default,N as scannedQRs,U as setScannedQRs,ee as setStatus,Y as setStop2Deliver,Z as status,X as stop2Deliver};
