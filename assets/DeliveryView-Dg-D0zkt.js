const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-CU-IVDA1.js","assets/index-BOYuCN0S.js","assets/index-DGSEMnLR.css","assets/DeliveryCamera-BWfZJjAb.js","assets/ButonHrm-k9Jyat4e.js","assets/SVG-CxYWE_S9.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-CfV-Jqj-.js","assets/debounces-TwFXo-EL.js","assets/FlexSpace-BqtxHkz8.js","assets/DeliveryHbl-sCHBu5I_.js","assets/InputHr-CHTVb-Cq.js","assets/InputHr-M3rJ9grQ.css","assets/Envios-Dgtb243p.js","assets/ShowQRPrintLabel-DeI1PvK_.js","assets/fontkit.es-B8_sCfQU.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-D2F_4ovx.js","assets/Toast-B1zAgmoU.js","assets/Toast-SmEZ1JuI.css","assets/ShowScanManifest-BHA1pS7T.js","assets/DashManifest-C9gXy_Se.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/DialogHRM-BmtfIJxw.js","assets/DialogHRM-V9_lZntj.css","assets/ManifestDetails-CueeL5N4.js","assets/DeliveryViewDetail-nARYiIZC.js","assets/DeliveryScanView-1cbX84sh.js","assets/ItemOnManifestDelivery-BqXgPsuN.js","assets/components-Yiipuykh.js","assets/LoadingColorSpinner-DGxnq9Ee.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as u,l as r,_ as l,a as I,q as D,i as n,d as i,e as L,t as v,j as R,z as C,S as O,F as k,G as M,n as w,O as P,o as T}from"./index-BOYuCN0S.js";import{OpenModal as V}from"./DialogHRM-BmtfIJxw.js";import"./DashManifest-C9gXy_Se.js";import"./App.module-CbHnVtRQ.js";var z=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Delivery</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:31%>Manifiesto</div></li></ul><div style="margin:30px 0;width:90vw ">'),B=v("<div> <!>."),q=v("<div> ");const[Y,J]=u();r(()=>l(()=>import("./DeliveryManifest-CU-IVDA1.js"),__vite__mapDeps([0,1,2])));r(()=>l(()=>import("./DeliveryCamera-BWfZJjAb.js"),__vite__mapDeps([3,1,2,4,5,6,7,8,9])));r(()=>l(()=>import("./DeliveryHbl-sCHBu5I_.js"),__vite__mapDeps([10,1,2,11,12,5,13,8,14,15,16,17,18,19,9])));const g=r(()=>l(()=>import("./SVG-CxYWE_S9.js"),__vite__mapDeps([5,1,2]))),F=r(()=>l(()=>import("./ShowScanManifest-BHA1pS7T.js"),__vite__mapDeps([20,1,2,7,21,22,23,24,25,26,8,15,4,5,6,27,28,14,16,17,18,19]))),Q=r(()=>l(()=>import("./ItemOnManifestDelivery-BqXgPsuN.js"),__vite__mapDeps([29,1,2,8,24,25,30]))),j=r(()=>l(()=>import("./LoadingColorSpinner-DGxnq9Ee.js"),__vite__mapDeps([31,1,2,32]))),[N,X]=u({}),[Z,ee]=I("");function te(){const[d,c]=u(""),_=async()=>{const t=await G(w?.profile?.userId,"ST009");let e=[];P(t).map(p=>{let a=t[p];e.push(a)}),c("list",e)};D(_);const h=()=>{let t=R(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(F,{modalId:t,refetch:_}),V(e)};return(()=>{var t=z(),e=t.firstChild,p=e.firstChild,a=p.nextSibling,x=e.nextSibling,S=x.nextSibling,m=S.firstChild,b=m.firstChild,$=b.firstChild,E=$.firstChild,y=m.nextSibling;return a.$$click=h,n(a,i(g,{name:"plus",size:32,color:"#2b2b2b"})),n(E,i(g,{name:"filterList",size:32,color:"#2b2b2b"})),n(y,i(M,{fallback:s=>(()=>{var o=B(),A=o.firstChild,f=A.nextSibling;return f.nextSibling,n(o,()=>s.toString(),f),o})(),get children(){return i(C,{get fallback(){return(()=>{var s=q();return s.firstChild,n(s,i(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return i(O,{get when(){return d?.list?.length>0},get children(){return i(k,{get each(){return d?.list},children:(s,o)=>i(Q,{item:s})})}})}})}})),t})()}const G=async(d,c,_)=>await T({params:{status:c,checkAuth:!0},query:"getAllManifestYabaExpress"});L(["click"]);export{te as default,Y as scannedQRs,J as setScannedQRs,ee as setStatus,X as setStop2Deliver,Z as status,N as stop2Deliver};
