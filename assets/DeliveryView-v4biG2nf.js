const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-DcM3r_JO.js","assets/index-uMCGT5ZP.js","assets/index-BmzAZVve.css","assets/Util-C77m685E.js","assets/index-Ci0zXM0r.js","assets/DeliveryCamera-DGcMnVzb.js","assets/ButonHrm-Di7eBwtE.js","assets/SVG-BiI02H6O.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/debounces-DyscD__y.js","assets/FlexSpace-B7Y5IyCv.js","assets/DeliveryHbl-Ck0vvrHa.js","assets/InputHr-DTRoJvAf.js","assets/InputHr-M3rJ9grQ.css","assets/ShowScanManifest-DOe6A8S_.js","assets/ManifestDetails-BGbksC01.js","assets/ShowQRPrintLabel-wY02eTN7.js","assets/PDFButton-B_0lS8EG.js","assets/fontkit.es-BqrvdTa9.js","assets/InitPrintServices-DzdLVHm-.js","assets/Toast-C6E6n1zC.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-NuQt6Dwg.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryViewDetail-CEK0obji.js","assets/ShowScanDeliveryManifest-DAJ3WUra.js","assets/DeliveryScanView-CEamgquK.js","assets/components-BI6240Qg.js","assets/ItemOnManifestDelivery-Dy5_rX_s.js","assets/LoadingColorSpinner-Dh2iJKT4.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as v,l as r,_ as l,a as x,n as C,i as a,d as i,w as L,S as R,F as D,E as O,h as w,t as h,m as k}from"./index-uMCGT5ZP.js";import{g as M,O as P,b as T,f as V}from"./Util-C77m685E.js";import{OpenModal as B}from"./DialogHRM-NuQt6Dwg.js";import"./index-Ci0zXM0r.js";var Q=h('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Entregas</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"style=width:180px>Manifiestos a entregar</div></li></ul><div style="margin:30px 0;width:90vw ">'),z=h("<div> <!>."),F=h("<div> ");const[U,X]=v();r(()=>l(()=>import("./DeliveryManifest-DcM3r_JO.js"),__vite__mapDeps([0,1,2,3,4])));r(()=>l(()=>import("./DeliveryCamera-DGcMnVzb.js"),__vite__mapDeps([5,1,2,6,7,4,3,8,9,10,11])));r(()=>l(()=>import("./DeliveryHbl-Ck0vvrHa.js"),__vite__mapDeps([12,1,2,13,14,3,4,7,11])));const f=r(()=>l(()=>import("./SVG-BiI02H6O.js"),__vite__mapDeps([7,1,2,4]))),q=r(()=>l(()=>import("./ShowScanManifest-DOe6A8S_.js"),__vite__mapDeps([15,1,2,9,4,16,3,10,6,7,8,17,18,19,20,21,22,23,24,25,26,27,28]))),W=r(()=>l(()=>import("./ItemOnManifestDelivery-Dy5_rX_s.js"),__vite__mapDeps([29,1,2,4,10,23,24,28]))),j=r(()=>l(()=>import("./LoadingColorSpinner-Dh2iJKT4.js"),__vite__mapDeps([30,1,2,31]))),[Y,Z]=v({}),[ee,te]=x("");function ie(){x(null);const[o,_]=v(""),p=async()=>{const t=await G(k?.profile?.userId,"ST009");let e=[];P(t).map(u=>{let c=t[u];e.push(c)}),_("list",e)};C(p);const n=()=>{let t=M(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(q,{modalId:t,refetch:p}),B(e)};return(()=>{var t=Q(),e=t.firstChild,u=e.firstChild,c=u.nextSibling,S=e.nextSibling,$=S.nextSibling,m=$.firstChild,b=m.firstChild,E=b.firstChild,y=E.firstChild,I=m.nextSibling;return c.$$click=n,a(c,i(f,{name:"plus",size:32,color:"#2b2b2b"})),a(y,i(f,{name:"filterList",size:32,color:"#2b2b2b"})),a(I,i(O,{fallback:s=>(()=>{var d=z(),A=d.firstChild,g=A.nextSibling;return g.nextSibling,a(d,()=>s.toString(),g),d})(),get children(){return i(L,{get fallback(){return(()=>{var s=F();return s.firstChild,a(s,i(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return i(R,{get when(){return o?.list?.length>0},get children(){return i(D,{get each(){return o?.list},children:(s,d)=>i(W,{item:s})})}})}})}})),t})()}const G=async(o,_,p)=>{let n={params:{linkedUser:o,status:_,checkAuth:!0}},t=T(703001);n={...n,...t};const e=await V(n);return console.log(n),console.log(e),e};w(["click"]);export{ie as default,U as scannedQRs,X as setScannedQRs,te as setStatus,Z as setStop2Deliver,ee as status,Y as stop2Deliver};
