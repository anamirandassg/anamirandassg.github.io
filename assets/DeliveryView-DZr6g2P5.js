const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-ZkiqCPEv.js","assets/index-BRFxLudr.js","assets/index-BmzAZVve.css","assets/Util-D-2Q9NLa.js","assets/DeliveryCamera-BrifHRzw.js","assets/ButonHrm-DIerNXSv.js","assets/SVG-BxnnaVKE.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-DCFeLrgB.js","assets/debounces-CQSl4_C6.js","assets/FlexSpace-CuRLxaO5.js","assets/DeliveryHbl-qD1JKq7G.js","assets/InputHr-CU42mU88.js","assets/InputHr-M3rJ9grQ.css","assets/ShowScanManifest-MVNX-Hmj.js","assets/ManifestDetails-B5D6GPkR.js","assets/ShowQRPrintLabel-DF1MHO38.js","assets/PDFButton-BZaI0SDq.js","assets/fontkit.es-Bc8gA_Rh.js","assets/InitPrintServices-jEkvnauw.js","assets/Toast-DYBFY36v.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-DHPq6eoe.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryViewDetail-Ct83e9Cc.js","assets/ShowScanDeliveryManifest-CwIrNVp8.js","assets/DeliveryScanView-Ch0E9BPL.js","assets/components-eTEIm4rT.js","assets/ItemOnManifestDelivery-C_Xbk9jZ.js","assets/LoadingColorSpinner-DfWzEOkU.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as v,l as r,_ as l,a as x,n as C,i as a,d as i,w as L,S as R,F as D,E as O,h as w,t as h,m as k}from"./index-BRFxLudr.js";import{g as M,O as P,b as T,f as V}from"./Util-D-2Q9NLa.js";import{OpenModal as B}from"./DialogHRM-DHPq6eoe.js";var Q=h('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Entregas</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"style=width:180px>Manifiestos a entregar</div></li></ul><div style="margin:30px 0;width:90vw ">'),z=h("<div> <!>."),F=h("<div> ");const[N,U]=v();r(()=>l(()=>import("./DeliveryManifest-ZkiqCPEv.js"),__vite__mapDeps([0,1,2,3])));r(()=>l(()=>import("./DeliveryCamera-BrifHRzw.js"),__vite__mapDeps([4,1,2,5,6,3,7,8,9,10])));r(()=>l(()=>import("./DeliveryHbl-qD1JKq7G.js"),__vite__mapDeps([11,1,2,12,13,3,6,10])));const f=r(()=>l(()=>import("./SVG-BxnnaVKE.js"),__vite__mapDeps([6,1,2]))),q=r(()=>l(()=>import("./ShowScanManifest-MVNX-Hmj.js"),__vite__mapDeps([14,1,2,8,15,3,9,5,6,7,16,17,18,19,20,21,22,23,24,25,26,27]))),W=r(()=>l(()=>import("./ItemOnManifestDelivery-C_Xbk9jZ.js"),__vite__mapDeps([28,1,2,9,22,23,27]))),j=r(()=>l(()=>import("./LoadingColorSpinner-DfWzEOkU.js"),__vite__mapDeps([29,1,2,30]))),[X,Y]=v({}),[Z,ee]=x("");function te(){x(null);const[o,_]=v(""),u=async()=>{const t=await G(k?.profile?.userId,"ST009");let e=[];P(t).map(p=>{let c=t[p];e.push(c)}),_("list",e)};C(u);const n=()=>{let t=M(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(q,{modalId:t,refetch:u}),B(e)};return(()=>{var t=Q(),e=t.firstChild,p=e.firstChild,c=p.nextSibling,S=e.nextSibling,$=S.nextSibling,m=$.firstChild,b=m.firstChild,E=b.firstChild,y=E.firstChild,I=m.nextSibling;return c.$$click=n,a(c,i(f,{name:"plus",size:32,color:"#2b2b2b"})),a(y,i(f,{name:"filterList",size:32,color:"#2b2b2b"})),a(I,i(O,{fallback:s=>(()=>{var d=z(),A=d.firstChild,g=A.nextSibling;return g.nextSibling,a(d,()=>s.toString(),g),d})(),get children(){return i(L,{get fallback(){return(()=>{var s=F();return s.firstChild,a(s,i(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return i(R,{get when(){return o?.list?.length>0},get children(){return i(D,{get each(){return o?.list},children:(s,d)=>i(W,{item:s})})}})}})}})),t})()}const G=async(o,_,u)=>{let n={params:{linkedUser:o,status:_,checkAuth:!0}},t=T(703001);n={...n,...t};const e=await V(n);return console.log(n),console.log(e),e};w(["click"]);export{te as default,N as scannedQRs,U as setScannedQRs,ee as setStatus,Y as setStop2Deliver,Z as status,X as stop2Deliver};