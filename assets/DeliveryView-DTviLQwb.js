const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-BFpnLYy4.js","assets/index-dqKcxXDx.js","assets/index-DEEWbFNK.css","assets/Util-C4Gv2Rs-.js","assets/DeliveryCamera-W32kUNP-.js","assets/ButonHrm-pdeS58tf.js","assets/SVG-CSSerAjY.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-BGtARNDN.js","assets/debounces-DoXmuWlk.js","assets/FlexSpace-CRp4kLNy.js","assets/DeliveryHbl-NSv164tT.js","assets/InputHr-qthB2fMY.js","assets/InputHr-M3rJ9grQ.css","assets/ShowScanManifest-DIZOdu_o.js","assets/ManifestDetails-BxGc-8Mm.js","assets/ShowQRPrintLabel-CS0JAcN0.js","assets/PDFButton-CCQT0yk3.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BaZy4qZc.js","assets/InitPrintServices-COQVt4ve.js","assets/Toast-BAZ9l--3.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-CIe1SfVn.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryViewDetail-CaesfwkZ.js","assets/ShowScanDeliveryManifest-DrVDH8k2.js","assets/DeliveryScanView-DyM9ddEF.js","assets/components-ByBgyUQf.js","assets/ItemOnManifestDelivery-DmIig_iq.js","assets/LoadingColorSpinner-CWMkyEAF.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as v,l as r,_ as l,a as x,b as C,i as a,d as i,x as L,S as R,F as D,E as O,h as k,t as h,n as w}from"./index-dqKcxXDx.js";import{b as M,O as P,c as T,f as V}from"./Util-C4Gv2Rs-.js";import{OpenModal as B}from"./DialogHRM-CIe1SfVn.js";var Q=h('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Entregas</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"style=width:180px>Manifiestos a entregar</div></li></ul><div style="margin:30px 0;width:90vw ">'),z=h("<div> <!>."),F=h("<div> ");const[N,U]=v();r(()=>l(()=>import("./DeliveryManifest-BFpnLYy4.js"),__vite__mapDeps([0,1,2,3])));r(()=>l(()=>import("./DeliveryCamera-W32kUNP-.js"),__vite__mapDeps([4,1,2,5,6,3,7,8,9,10])));r(()=>l(()=>import("./DeliveryHbl-NSv164tT.js"),__vite__mapDeps([11,1,2,12,13,3,6,10])));const f=r(()=>l(()=>import("./SVG-CSSerAjY.js"),__vite__mapDeps([6,1,2,3]))),q=r(()=>l(()=>import("./ShowScanManifest-DIZOdu_o.js"),__vite__mapDeps([14,1,2,8,3,15,9,5,6,7,16,17,18,19,20,21,22,23,24,25,26,27,28]))),W=r(()=>l(()=>import("./ItemOnManifestDelivery-DmIig_iq.js"),__vite__mapDeps([29,1,2,3,9,23,24,28]))),j=r(()=>l(()=>import("./LoadingColorSpinner-CWMkyEAF.js"),__vite__mapDeps([30,1,2,31]))),[X,Y]=v({}),[Z,ee]=x("");function te(){x(null);const[o,_]=v(""),u=async()=>{const t=await G(w?.profile?.userId,"ST009");let e=[];P(t).map(p=>{let c=t[p];e.push(c)}),_("list",e)};C(u);const n=()=>{let t=M(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(q,{modalId:t,refetch:u}),B(e)};return(()=>{var t=Q(),e=t.firstChild,p=e.firstChild,c=p.nextSibling,S=e.nextSibling,b=S.nextSibling,m=b.firstChild,$=m.firstChild,E=$.firstChild,y=E.firstChild,I=m.nextSibling;return c.$$click=n,a(c,i(f,{name:"plus",size:32,color:"#2b2b2b"})),a(y,i(f,{name:"filterList",size:32,color:"#2b2b2b"})),a(I,i(O,{fallback:s=>(()=>{var d=z(),A=d.firstChild,g=A.nextSibling;return g.nextSibling,a(d,()=>s.toString(),g),d})(),get children(){return i(L,{get fallback(){return(()=>{var s=F();return s.firstChild,a(s,i(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return i(R,{get when(){return o?.list?.length>0},get children(){return i(D,{get each(){return o?.list},children:(s,d)=>i(W,{item:s})})}})}})}})),t})()}const G=async(o,_,u)=>{let n={params:{linkedUser:o,status:_,checkAuth:!0}},t=T(703001);n={...n,...t};const e=await V(n);return console.log(n),console.log(e),e};k(["click"]);export{te as default,N as scannedQRs,U as setScannedQRs,ee as setStatus,Y as setStop2Deliver,Z as status,X as stop2Deliver};
