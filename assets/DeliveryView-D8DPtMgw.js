const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-BkeXW11f.js","assets/index-BXk4djaH.js","assets/index-BmzAZVve.css","assets/Util-ZZYG9kF2.js","assets/DeliveryCamera-rO326r-u.js","assets/ButonHrm-DBbqFrad.js","assets/SVG-9G4wpA9m.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-CGBAQhXI.js","assets/debounces-BkvUtFaP.js","assets/FlexSpace-BQZCrK97.js","assets/DeliveryHbl-BoN0n46P.js","assets/InputHr-DEWKJB1O.js","assets/InputHr-M3rJ9grQ.css","assets/ShowScanManifest-CKvnXWcX.js","assets/ManifestDetails-Dif53Mmi.js","assets/ShowQRPrintLabel-DUeA2Wk3.js","assets/PDFButton-BPwQOm6a.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-j4QB5RW3.js","assets/InitPrintServices-D3KYFGNf.js","assets/Toast-CQGOdk3V.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-PW5MDw4F.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryViewDetail-BYntcMnh.js","assets/ShowScanDeliveryManifest-CKZtfFak.js","assets/DeliveryScanView-BphlNl53.js","assets/components-ByAaAs7I.js","assets/ItemOnManifestDelivery-CLza12v9.js","assets/LoadingColorSpinner-jScghAPM.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as v,l as r,_ as l,a as x,n as C,i as a,d as i,w as L,S as R,F as D,E as O,h as w,t as h,m as k}from"./index-BXk4djaH.js";import{g as M,O as P,b as T,f as V}from"./Util-ZZYG9kF2.js";import{OpenModal as B}from"./DialogHRM-PW5MDw4F.js";var Q=h('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Entregas</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"style=width:180px>Manifiestos a entregar</div></li></ul><div style="margin:30px 0;width:90vw ">'),z=h("<div> <!>."),F=h("<div> ");const[N,U]=v();r(()=>l(()=>import("./DeliveryManifest-BkeXW11f.js"),__vite__mapDeps([0,1,2,3])));r(()=>l(()=>import("./DeliveryCamera-rO326r-u.js"),__vite__mapDeps([4,1,2,5,6,3,7,8,9,10])));r(()=>l(()=>import("./DeliveryHbl-BoN0n46P.js"),__vite__mapDeps([11,1,2,12,13,3,6,10])));const f=r(()=>l(()=>import("./SVG-9G4wpA9m.js"),__vite__mapDeps([6,1,2]))),q=r(()=>l(()=>import("./ShowScanManifest-CKvnXWcX.js"),__vite__mapDeps([14,1,2,8,15,3,9,5,6,7,16,17,18,19,20,21,22,23,24,25,26,27,28]))),W=r(()=>l(()=>import("./ItemOnManifestDelivery-CLza12v9.js"),__vite__mapDeps([29,1,2,9,23,24,28]))),j=r(()=>l(()=>import("./LoadingColorSpinner-jScghAPM.js"),__vite__mapDeps([30,1,2,31]))),[X,Y]=v({}),[Z,ee]=x("");function te(){x(null);const[o,_]=v(""),u=async()=>{const t=await G(k?.profile?.userId,"ST009");let e=[];P(t).map(p=>{let c=t[p];e.push(c)}),_("list",e)};C(u);const n=()=>{let t=M(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(q,{modalId:t,refetch:u}),B(e)};return(()=>{var t=Q(),e=t.firstChild,p=e.firstChild,c=p.nextSibling,S=e.nextSibling,$=S.nextSibling,m=$.firstChild,b=m.firstChild,E=b.firstChild,y=E.firstChild,I=m.nextSibling;return c.$$click=n,a(c,i(f,{name:"plus",size:32,color:"#2b2b2b"})),a(y,i(f,{name:"filterList",size:32,color:"#2b2b2b"})),a(I,i(O,{fallback:s=>(()=>{var d=z(),A=d.firstChild,g=A.nextSibling;return g.nextSibling,a(d,()=>s.toString(),g),d})(),get children(){return i(L,{get fallback(){return(()=>{var s=F();return s.firstChild,a(s,i(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return i(R,{get when(){return o?.list?.length>0},get children(){return i(D,{get each(){return o?.list},children:(s,d)=>i(W,{item:s})})}})}})}})),t})()}const G=async(o,_,u)=>{let n={params:{linkedUser:o,status:_,checkAuth:!0}},t=T(703001);n={...n,...t};const e=await V(n);return console.log(n),console.log(e),e};w(["click"]);export{te as default,N as scannedQRs,U as setScannedQRs,ee as setStatus,Y as setStop2Deliver,Z as status,X as stop2Deliver};
