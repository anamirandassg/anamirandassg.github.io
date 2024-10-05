const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-BkSVocwb.js","assets/index-NC4KTl9c.js","assets/index-BQScBqqw.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-BVcWZSVX.js","assets/ButonHrm-BBJ9_VUC.js","assets/SVG-08opEzm0.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-r2DrdzXl.js","assets/debounces-C87TYXnN.js","assets/FlexSpace--HzCDPt9.js","assets/ItemOnDeliveryList-QKLnfeiY.js","assets/DeliveryView-BXGnQGpD.js","assets/DialogHRM-Ber-xNbP.js","assets/DialogHRM-V9_lZntj.css","assets/DashManifest-MlYyX1ka.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/components-SE1xONz9.js"])))=>i.map(i=>d[i]);
import{c as C,l as h,_ as f,a as y,aa as N,u as A,k as L,p as O,q as D,i as s,d as o,f as R,o as M,t as g,j as T,S as v,O as I,y as V,F as q,$ as F,s as j,h as z,B as G}from"./index-NC4KTl9c.js";import"./DialogHRM-Ber-xNbP.js";import"./DeliveryScanView-DhN8s18W.js";import"./fontkit.es-CY0MsTw6.js";import"./html5-qrcode-scanner-r2DrdzXl.js";import"./DashManifest-MlYyX1ka.js";import"./App.module-CbHnVtRQ.js";import"./ManifestDetails-BtONMk2z.js";import"./debounces-C87TYXnN.js";import"./ButonHrm-BBJ9_VUC.js";/* empty css                 */import"./SVG-08opEzm0.js";import"./DeliveryView-BXGnQGpD.js";import"./ShowQRPrintLabel-CC3Q1dpN.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-D6loe7YL.js";import"./Toast-eluQuALL.js";var K=g("<h4>"),Q=g("<h5>"),W=g('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),H=g('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),S=g("<div> "),J=g("<div> <!>.");const[ye,$e]=C(),k=h(()=>f(()=>import("./LoadingColorSpinner-BkSVocwb.js"),__vite__mapDeps([0,1,2,3])));h(()=>f(()=>import("./DeliveryCamera-BVcWZSVX.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10])));const U=h(()=>f(()=>import("./ItemOnDeliveryList-QKLnfeiY.js"),__vite__mapDeps([11,1,2,9,12,13,14,15,16,17,18])));h(()=>f(()=>import("./SVG-08opEzm0.js"),__vite__mapDeps([6,1,2])));h(()=>f(()=>import("./FlexSpace--HzCDPt9.js"),__vite__mapDeps([10,1,2])));const[be,Ie]=y("");function Se(){y([]);const[t,i]=C({});N();const[m,ee]=A(),[te,E]=y("");y(0),L(()=>{w()}),O(()=>{}),D(async()=>{let a=await X({id:m?.dId,checkAuth:!0});i("detail",a);let n={};a?.linkedBagsInfo?.map(r=>{let l=x(r),p=r.cidentity;if(n[l]||(n[l]={city:r?.city,estate:r?.estate,currentStatus:r?.currentStatus,customers:{},bagsNo:0}),!n[l].customers[p]){let _={name:Y(r),phoneNumber:Z(r),cid:r.cidentity},e={...r,..._};e.bagsNumb={},n[l].customers[p]=e}let $={bagnumber:r?.bagnumber,idairguide:r?.idairguide,tracking:r?.tracking};n[l].customers[p].bagsNumb[r?.ssg_track_key]=$,n[l].bagsNo+=1}),i("linkedBagsInfo",n),E(T())});function B(){return"geolocation"in navigator}function P(a){G({latitude:a?.coords?.latitude,longitude:a?.coords?.longitude})}function w(){B()?navigator.geolocation.getCurrentPosition(P):showMessage("Geolocation isn't supported by your browser")}const x=a=>{let n=a?.street.split(",");return n.slice(0,n.length-2).join(",")};return(()=>{var a=H(),n=a.firstChild,r=n.firstChild,l=r.nextSibling,p=l.firstChild,$=n.nextSibling,_=$.nextSibling;return s(p,()=>t?.detail?.name),s(a,o(v,{get when(){return t?.detail?.name},get fallback(){return(()=>{var e=S();return e.firstChild,s(e,o(k,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){var e=W(),d=e.firstChild,b=d.firstChild;return s(e,o(v,{get when(){return t?.detail?.city},get children(){return[(()=>{var c=K();return s(c,()=>t?.detail?.city),c})(),"|"]}}),d),s(e,o(v,{get when(){return t?.detail?.province},get children(){return[(()=>{var c=Q();return s(c,()=>t?.detail?.province),c})(),"|"]}}),d),s(b,()=>I(t?.linkedBagsInfo)?.length),e}}),_),s(_,o(F,{fallback:e=>(()=>{var d=J(),b=d.firstChild,c=b.nextSibling;return c.nextSibling,s(d,()=>e.toString(),c),d})(),get children(){return o(V,{get fallback(){return(()=>{var e=S();return e.firstChild,s(e,o(k,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return o(v,{get when(){return I(t?.linkedBagsInfo)?.length>0},get children(){return o(q,{get each(){return I(t?.linkedBagsInfo)},children:(e,d)=>o(U,{addressId:e,get item(){return t?.linkedBagsInfo?.[e]},get list(){return t?.linkedBagsInfo}})})}})}})}})),R(e=>j(_,` ${z()?"":"width:94vw;"} margin: 0 auto`,e)),a})()}const X=async t=>await M({params:t,query:"getManifestOrderByKeyID"}),u=t=>t?" "+t:"",Y=t=>{let i=t?.consigneeInfo;return u(i?.firstName)+u(i?.middleName)+u(i?.lastName)+u(i?.lastName2)},Z=t=>{let i=t?.consigneeInfo,m=u(i?.altPhoneNumber);return u(i?.phoneNumber)+(m?" |"+m:"")};export{X as LookupBagId,Se as default,ye as scannedQRs,$e as setScannedQRs,Ie as setStatus,be as status};
