const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-CRlyQy8p.js","assets/index-DDTHMCbI.js","assets/index-PRcoyGS_.css","assets/Util-D886uaAp.js","assets/index-Ci0zXM0r.js","assets/DeliveryCamera-4ZsrHcQr.js","assets/ButonHrm-nAy8RVg2.js","assets/SVG-B-1xjfzq.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/debounces-3KCHyU1G.js","assets/FlexSpace-CtNaCk_R.js","assets/globalSignal-BCbGooAj.js","assets/DeliveryHbl-CPQUJgiL.js","assets/InputHr-B8FAsT1l.js","assets/InputHr-M3rJ9grQ.css","assets/ShowScanManifest-CGzzunzh.js","assets/ManifestDetails-B26XN2BJ.js","assets/DialogHRM-DEDHoOND.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryViewDetail-x-apvOIY.js","assets/ShowScanDeliveryManifest-TROvfVl7.js","assets/DeliveryScanView-xvbgB7CI.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/Toast-C7eMhJDf.js","assets/Toast-DLpFKn-Q.css","assets/components-yvaWuvcc.js","assets/ItemOnManifestDelivery-COdPKy3M.js","assets/LoadingColorSpinner-Dv6OpUFm.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as v,l as r,_ as l,a as x,m as C,i as a,d as i,e as L,t as m,r as R,S as D,F as O,E as k,k as w}from"./index-DDTHMCbI.js";import{g as M,O as P,b as T,f as V}from"./Util-D886uaAp.js";import"./globalSignal-BCbGooAj.js";import{OpenModal as B}from"./DialogHRM-DEDHoOND.js";import"./index-Ci0zXM0r.js";var Q=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Entregas</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"style=width:180px>Manifiestos a entregar</div></li></ul><div style="margin:30px 0;width:90vw ">'),z=m("<div> <!>."),F=m("<div> ");const[X,Y]=v();r(()=>l(()=>import("./DeliveryManifest-CRlyQy8p.js"),__vite__mapDeps([0,1,2,3,4])));r(()=>l(()=>import("./DeliveryCamera-4ZsrHcQr.js"),__vite__mapDeps([5,1,2,6,7,4,3,8,9,10,11,12])));r(()=>l(()=>import("./DeliveryHbl-CPQUJgiL.js"),__vite__mapDeps([13,1,2,14,15,3,4,7,12,11])));const f=r(()=>l(()=>import("./SVG-B-1xjfzq.js"),__vite__mapDeps([7,1,2,4]))),q=r(()=>l(()=>import("./ShowScanManifest-CGzzunzh.js"),__vite__mapDeps([16,1,2,12,9,4,17,3,10,6,7,8,18,19,20,21,22,23,24,25,26,27,28]))),W=r(()=>l(()=>import("./ItemOnManifestDelivery-COdPKy3M.js"),__vite__mapDeps([29,1,2,4,10,18,19,12,28]))),j=r(()=>l(()=>import("./LoadingColorSpinner-Dv6OpUFm.js"),__vite__mapDeps([30,1,2,31]))),[Z,ee]=v({}),[te,ie]=x("");function se(){x(null);const[o,_]=v(""),p=async()=>{const t=await G(w?.profile?.userId,"ST009");let e=[];P(t).map(u=>{let c=t[u];e.push(c)}),_("list",e)};C(p);const n=()=>{let t=M(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(q,{modalId:t,refetch:p}),B(e)};return(()=>{var t=Q(),e=t.firstChild,u=e.firstChild,c=u.nextSibling,S=e.nextSibling,$=S.nextSibling,h=$.firstChild,b=h.firstChild,E=b.firstChild,y=E.firstChild,I=h.nextSibling;return c.$$click=n,a(c,i(f,{name:"plus",size:32,color:"#2b2b2b"})),a(y,i(f,{name:"filterList",size:32,color:"#2b2b2b"})),a(I,i(k,{fallback:s=>(()=>{var d=z(),A=d.firstChild,g=A.nextSibling;return g.nextSibling,a(d,()=>s.toString(),g),d})(),get children(){return i(R,{get fallback(){return(()=>{var s=F();return s.firstChild,a(s,i(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return i(D,{get when(){return o?.list?.length>0},get children(){return i(O,{get each(){return o?.list},children:(s,d)=>i(W,{item:s})})}})}})}})),t})()}const G=async(o,_,p)=>{let n={params:{linkedUser:o,status:_,checkAuth:!0}},t=T(703001);n={...n,...t};const e=await V(n);return console.log(n),console.log(e),e};L(["click"]);export{se as default,X as scannedQRs,Y as setScannedQRs,ie as setStatus,ee as setStop2Deliver,te as status,Z as stop2Deliver};
