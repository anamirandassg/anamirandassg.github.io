const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-B_V5Hrpr.js","assets/index-Davks-F7.js","assets/index-DGHHyjai.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-B-tNgXjC.js","assets/ButonHrm-Dn34qKas.js","assets/SVG-CYTTjjhw.js","assets/index-Ci0zXM0r.js","assets/Util-CHzs30Zz.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/debounces-khgXmkFO.js","assets/FlexSpace-D03avtQj.js","assets/globalSignal-hV27f7Qu.js","assets/ItemOnDeliveryList-DPPZOMmv.js","assets/DeliveryView-aUP-ZUN9.js","assets/DialogHRM-D44MwW5Y.js","assets/DialogHRM-V9_lZntj.css","assets/browser-image-compression-BVJ4p9S0.js","assets/DeliveryScanView-Cw-x3STY.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/Toast-FPAwwC2b.js","assets/Toast-DLpFKn-Q.css","assets/components-CRjmHA24.js"])))=>i.map(i=>d[i]);
import{c as C,l as h,_ as f,a as $,I as A,u as L,h as O,o as R,m as D,i as s,d as o,f as M,t as m,S as v,q as T,F as V,E as F,s as Q}from"./index-Davks-F7.js";import{b as q,f as z,g as G,O as S}from"./Util-CHzs30Zz.js";import{i as j,s as W}from"./globalSignal-hV27f7Qu.js";import"./DialogHRM-D44MwW5Y.js";import"./ShowScanDeliveryManifest-DYvEIxl6.js";import"./fontkit.es-DEjOtITv.js";import"./index-Ci0zXM0r.js";import"./html5-qrcode-scanner-Cl8XE5pu.js";import"./DashManifest-0uAN4-NV.js";import"./App.module-CbHnVtRQ.js";import"./ManifestDetails-TzcKMCwR.js";import"./debounces-khgXmkFO.js";import"./ButonHrm-Dn34qKas.js";/* empty css                 */import"./SVG-CYTTjjhw.js";import"./DeliveryView-aUP-ZUN9.js";import"./browser-image-compression-BVJ4p9S0.js";import"./DeliveryScanView-Cw-x3STY.js";import"./qrcode-C5vWJp7P.js";import"./Toast-FPAwwC2b.js";var K=m("<h4>"),Y=m("<h5>"),H=m('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),J=m('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),I=m("<div> "),U=m("<div> <!>.");const[Ie,ke]=C(),k=h(()=>f(()=>import("./LoadingColorSpinner-B_V5Hrpr.js"),__vite__mapDeps([0,1,2,3])));h(()=>f(()=>import("./DeliveryCamera-B-tNgXjC.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12,13])));const X=h(()=>f(()=>import("./ItemOnDeliveryList-DPPZOMmv.js"),__vite__mapDeps([14,1,2,8,7,11,13,15,16,17,6,18,9,19,20,21,22,23,24])));h(()=>f(()=>import("./SVG-CYTTjjhw.js"),__vite__mapDeps([6,1,2,7])));h(()=>f(()=>import("./FlexSpace-D03avtQj.js"),__vite__mapDeps([12,1,2])));const[Ce,Ee]=$("");function Pe(){$([]);const[t,n]=C({});A();const[u,E]=L(),[re,P]=$("");$(0),O(()=>{B()}),R(()=>{}),D(async()=>{let a=await Z({id:u?.dId,checkAuth:!0});n("detail",a);let i={};a?.linkedBagsInfo?.map(r=>{if(r?.currentStatus!="YABA_99"){let l=N(r),p=r.cidentity;if(i[l]||(i[l]={city:r?.city,estate:r?.estate,currentStatus:r?.currentStatus,customers:{},bagsNo:0}),!i[l].customers[p]){let _={name:ee(r),phoneNumber:te(r),cid:r.cidentity},e={...r,..._};e.bagsNumb={},i[l].customers[p]=e}let b={bagnumber:r?.bagnumber,idairguide:r?.idairguide,tracking:r?.tracking};i[l].customers[p].bagsNumb[r?.ssg_track_key]=b,i[l].bagsNo+=1}}),n("linkedBagsInfo",i),P(G())});function w(){return"geolocation"in navigator}function x(a){W({latitude:a?.coords?.latitude,longitude:a?.coords?.longitude})}function B(){w()?navigator.geolocation.getCurrentPosition(x):showMessage("Geolocation isn't supported by your browser")}const N=a=>{let i=a?.street.split(",");return i.slice(0,i.length-2).join(",")};return(()=>{var a=J(),i=a.firstChild,r=i.firstChild,l=r.nextSibling,p=l.firstChild,b=i.nextSibling,_=b.nextSibling;return s(p,()=>t?.detail?.name),s(a,o(v,{get when(){return t?.detail?.name},get fallback(){return(()=>{var e=I();return e.firstChild,s(e,o(k,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){var e=H(),d=e.firstChild,y=d.firstChild;return s(e,o(v,{get when(){return t?.detail?.city},get children(){return[(()=>{var c=K();return s(c,()=>t?.detail?.city),c})(),"|"]}}),d),s(e,o(v,{get when(){return t?.detail?.province},get children(){return[(()=>{var c=Y();return s(c,()=>t?.detail?.province),c})(),"|"]}}),d),s(y,()=>S(t?.linkedBagsInfo)?.length),e}}),_),s(_,o(F,{fallback:e=>(()=>{var d=U(),y=d.firstChild,c=y.nextSibling;return c.nextSibling,s(d,()=>e.toString(),c),d})(),get children(){return o(T,{get fallback(){return(()=>{var e=I();return e.firstChild,s(e,o(k,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return o(v,{get when(){return S(t?.linkedBagsInfo)?.length>0},get children(){return o(V,{get each(){return S(t?.linkedBagsInfo)},children:(e,d)=>o(X,{addressId:e,get item(){return t?.linkedBagsInfo?.[e]},get list(){return t?.linkedBagsInfo}})})}})}})}})),M(e=>Q(_,` ${j()?"":"width:94vw;"} margin: 0 auto`,e)),a})()}const Z=async t=>{let n={params:t},u=q(703003);return n={...n,...u},await z(n)},g=t=>t?" "+t:"",ee=t=>{let n=t?.consigneeInfo;return g(n?.firstName)+g(n?.middleName)+g(n?.lastName)+g(n?.lastName2)},te=t=>{let n=t?.consigneeInfo,u=g(n?.altPhoneNumber);return g(n?.phoneNumber)+(u?" |"+u:"")};export{Z as LookupBagId,Pe as default,Ie as scannedQRs,ke as setScannedQRs,Ee as setStatus,Ce as status};
