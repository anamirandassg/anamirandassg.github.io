const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-Bl1jUOSv.js","assets/index-DMSxEkxD.js","assets/index-B8E-m_hz.css","assets/Util-Dx3vfczV.js","assets/index-Ci0zXM0r.js","assets/DeliveryCamera-DC-8aj9u.js","assets/ButonHrm-C66xxm_A.js","assets/SVG-AjLMsy09.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/debounces-BYS4qSWc.js","assets/FlexSpace-4D1XSu2f.js","assets/globalSignal-BkOOPxFp.js","assets/DeliveryHbl-HIQ-zMWb.js","assets/InputHr-F78mrDLS.js","assets/InputHr-M3rJ9grQ.css","assets/ShowScanManifest-fOVITVpj.js","assets/ManifestDetails-CQyqtHz2.js","assets/DialogHRM-vKDF_n5r.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryViewDetail-PnHwi97-.js","assets/ShowScanDeliveryManifest-Bej6_Znr.js","assets/DeliveryScanView-CUq4lMF1.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/Toast-DrAaDwfp.js","assets/Toast-DLpFKn-Q.css","assets/components-1KRFz1Og.js","assets/ItemOnManifestDelivery-CDqzMaD_.js","assets/LoadingColorSpinner-G8aqINgU.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as v,l as r,_ as l,a as x,m as C,i as a,d as i,e as L,t as m,r as R,S as D,F as O,E as k,k as w}from"./index-DMSxEkxD.js";import{g as M,O as P,b as T,f as V}from"./Util-Dx3vfczV.js";import"./globalSignal-BkOOPxFp.js";import{OpenModal as B}from"./DialogHRM-vKDF_n5r.js";import"./index-Ci0zXM0r.js";var Q=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Entregas</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"style=width:180px>Manifiestos a entregar</div></li></ul><div style="margin:30px 0;width:90vw ">'),z=m("<div> <!>."),F=m("<div> ");const[X,Y]=v();r(()=>l(()=>import("./DeliveryManifest-Bl1jUOSv.js"),__vite__mapDeps([0,1,2,3,4])));r(()=>l(()=>import("./DeliveryCamera-DC-8aj9u.js"),__vite__mapDeps([5,1,2,6,7,4,3,8,9,10,11,12])));r(()=>l(()=>import("./DeliveryHbl-HIQ-zMWb.js"),__vite__mapDeps([13,1,2,14,15,3,4,7,12,11])));const f=r(()=>l(()=>import("./SVG-AjLMsy09.js"),__vite__mapDeps([7,1,2,4]))),q=r(()=>l(()=>import("./ShowScanManifest-fOVITVpj.js"),__vite__mapDeps([16,1,2,12,9,4,17,3,10,6,7,8,18,19,20,21,22,23,24,25,26,27,28]))),W=r(()=>l(()=>import("./ItemOnManifestDelivery-CDqzMaD_.js"),__vite__mapDeps([29,1,2,4,10,18,3,19,12,28]))),j=r(()=>l(()=>import("./LoadingColorSpinner-G8aqINgU.js"),__vite__mapDeps([30,1,2,31]))),[Z,ee]=v({}),[te,ie]=x("");function se(){x(null);const[o,_]=v(""),p=async()=>{const t=await G(w?.profile?.userId,"ST009");let e=[];P(t).map(u=>{let c=t[u];e.push(c)}),_("list",e)};C(p);const n=()=>{let t=M(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(q,{modalId:t,refetch:p}),B(e)};return(()=>{var t=Q(),e=t.firstChild,u=e.firstChild,c=u.nextSibling,S=e.nextSibling,$=S.nextSibling,h=$.firstChild,b=h.firstChild,E=b.firstChild,y=E.firstChild,I=h.nextSibling;return c.$$click=n,a(c,i(f,{name:"plus",size:32,color:"#2b2b2b"})),a(y,i(f,{name:"filterList",size:32,color:"#2b2b2b"})),a(I,i(k,{fallback:s=>(()=>{var d=z(),A=d.firstChild,g=A.nextSibling;return g.nextSibling,a(d,()=>s.toString(),g),d})(),get children(){return i(R,{get fallback(){return(()=>{var s=F();return s.firstChild,a(s,i(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return i(D,{get when(){return o?.list?.length>0},get children(){return i(O,{get each(){return o?.list},children:(s,d)=>i(W,{item:s})})}})}})}})),t})()}const G=async(o,_,p)=>{let n={params:{linkedUser:o,status:_,checkAuth:!0}},t=T(703001);n={...n,...t};const e=await V(n);return console.log(n),console.log(e),e};L(["click"]);export{se as default,X as scannedQRs,Y as setScannedQRs,ie as setStatus,ee as setStop2Deliver,te as status,Z as stop2Deliver};
