const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-CRjo2tMO.js","assets/index-NKUnsseI.js","assets/index-D76Q4b_C.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-Bc0oRdtn.js","assets/ButonHrm-1_QD__M-.js","assets/SVG-CRIwODTH.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-DyOwOipf.js","assets/debounces-CWEG2LlI.js","assets/FlexSpace-BCzomOF5.js","assets/ItemOnDeliveryList-B7Ysyurz.js","assets/DeliveryView-CCph29ih.js","assets/DialogHRM-CuXqTZeR.js","assets/DialogHRM-V9_lZntj.css","assets/DashManifest-B0tHltEP.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/components-Bf1n577I.js"])))=>i.map(i=>d[i]);
import{c as k,l as h,_ as f,a as b,a6 as N,u as A,k as D,p as L,q as O,i as s,d as l,f as R,o as M,t as g,j as V,S as v,O as $,y as T,F as q,V as F,s as j,h as z,B as G}from"./index-NKUnsseI.js";import"./DialogHRM-CuXqTZeR.js";import"./DeliveryScanView-BxmCLWEM.js";import"./fontkit.es-D3_o5DR4.js";import"./html5-qrcode-scanner-DyOwOipf.js";import"./DashManifest-B0tHltEP.js";import"./App.module-CbHnVtRQ.js";import"./ManifestDetails-BZDHesZc.js";import"./debounces-CWEG2LlI.js";import"./ButonHrm-1_QD__M-.js";/* empty css                 */import"./SVG-CRIwODTH.js";import"./DeliveryView-CCph29ih.js";var K=g("<h4>"),Q=g("<h5>"),W=g('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bottombx><h4></h4></div>|<div class=bag_number><h4>'),H=g('<div><div class=" flxWrp spaceAround centerBx"><h2>Delivery Manifest</h2></div><div style=padding:16px></div><div>'),S=g("<div> "),J=g("<div> <!>.");const[pe,he]=k(),I=h(()=>f(()=>import("./LoadingColorSpinner-CRjo2tMO.js"),__vite__mapDeps([0,1,2,3])));h(()=>f(()=>import("./DeliveryCamera-Bc0oRdtn.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10])));const U=h(()=>f(()=>import("./ItemOnDeliveryList-B7Ysyurz.js"),__vite__mapDeps([11,1,2,9,12,13,14,15,16,17,18])));h(()=>f(()=>import("./SVG-CRIwODTH.js"),__vite__mapDeps([6,1,2])));h(()=>f(()=>import("./FlexSpace-BCzomOF5.js"),__vite__mapDeps([10,1,2])));const[fe,ve]=b("");function be(){b([]);const[t,i]=k({});N();const[m,ee]=A(),[te,x]=b("");b(0),D(()=>{E()}),L(()=>{}),O(async()=>{let a=await X({id:m?.dId,checkAuth:!0});i("detail",a);let n={};a?.linkedBagsInfo?.map(r=>{let o=P(r),e=r.cidentity;if(n[o]||(n[o]={city:r?.city,estate:r?.estate,currentStatus:r?.currentStatus,customers:{},bagsNo:0}),!n[o].customers[e]){let _={name:Y(r),phoneNumber:Z(r),cid:r.cidentity},c={...r,..._};c.bagsNumb={},n[o].customers[e]=c}let d={bagnumber:r?.bagnumber,idairguide:r?.idairguide};n[o].customers[e].bagsNumb[r?.ssg_track_key]=d,n[o].bagsNo+=1}),i("linkedBagsInfo",n),x(V())});function B(){return"geolocation"in navigator}function C(a){G({latitude:a?.coords?.latitude,longitude:a?.coords?.longitude})}function E(){B()?navigator.geolocation.getCurrentPosition(C):showMessage("Geolocation isn't supported by your browser")}const P=a=>{let n=a?.street.split(",");return n.slice(0,n.length-2).join(",")};return(()=>{var a=H(),n=a.firstChild,r=n.nextSibling,o=r.nextSibling;return s(a,l(v,{get when(){return t?.detail?.name},get fallback(){return(()=>{var e=S();return e.firstChild,s(e,l(I,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){var e=W(),d=e.firstChild,_=d.firstChild,c=d.nextSibling,y=c.nextSibling,w=y.firstChild;return s(_,()=>t?.detail?.name),s(e,l(v,{get when(){return t?.detail?.city},get children(){return[(()=>{var p=K();return s(p,()=>t?.detail?.city),p})(),"|"]}}),y),s(e,l(v,{get when(){return t?.detail?.province},get children(){return[(()=>{var p=Q();return s(p,()=>t?.detail?.province),p})(),"|"]}}),y),s(w,()=>$(t?.linkedBagsInfo)?.length),e}}),o),s(o,l(F,{fallback:e=>(()=>{var d=J(),_=d.firstChild,c=_.nextSibling;return c.nextSibling,s(d,()=>e.toString(),c),d})(),get children(){return l(T,{get fallback(){return(()=>{var e=S();return e.firstChild,s(e,l(I,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return l(v,{get when(){return $(t?.linkedBagsInfo)?.length>0},get children(){return l(q,{get each(){return $(t?.linkedBagsInfo)},children:(e,d)=>l(U,{addressId:e,get item(){return t?.linkedBagsInfo?.[e]},get list(){return t?.linkedBagsInfo}})})}})}})}})),R(e=>j(o,` ${z()?"":"width:94vw;"} margin: 0 auto`,e)),a})()}const X=async t=>await M({params:t,query:"getManifestOrderByKeyID"}),u=t=>t?" "+t:"",Y=t=>{let i=t?.consigneeInfo;return u(i?.firstName)+u(i?.middleName)+u(i?.lastName)+u(i?.lastName2)},Z=t=>{let i=t?.consigneeInfo,m=u(i?.altPhoneNumber);return u(i?.phoneNumber)+(m?" |"+m:"")};export{X as LookupBagId,be as default,pe as scannedQRs,he as setScannedQRs,ve as setStatus,fe as status};
