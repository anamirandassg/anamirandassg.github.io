import{a,c as A,k as R,r as k,s as D,d as o,S as s,az as H,i as $,t as n,o as G,Q as L,j as g}from"./index-DJKl8WNG.js";import{H as q,a as z}from"./html5-qrcode-scanner-CIsKBzJN.js";import{u as E}from"./debounces-C3lNOb7L.js";import{a as Q}from"./Scanning-CaFGjxCj.js";import"./Toast-DJ8KZrku.js";import{S as T,a as j}from"./ShowScanAlert-CbysWi_V.js";import{OpenModal as d,CloseModal as S}from"./DialogHRM-DFKWnIeT.js";import"./App.module-CbHnVtRQ.js";import"./ShowQRPrintLabel-CUoGz4sd.js";import"./PDFButton-ViT1fFng.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-C36kLZ2K.js";import"./InitPrintServices-CjeaunaM.js";var O=n("<div class=scanWrp><div id=qr-reader style=width:300px>"),P=n("<slot name=plans style=margin-top:35px>"),x=n("<div>esta funcion es solo para dispositivos mobiles");function ae(h){const[f,b]=a([]);A({});const[y,v]=a(""),[i,c]=a(),[w,l]=a();a(""),a("");const[C,B]=a("");R(()=>{}),k(()=>{c(!1),G("cameraScanLoc")?.clear()}),D(()=>{setTimeout(()=>{_()},90)});const m=(t,e)=>{t!==w()&&(l(t),setTimeout(()=>{l("")},3e3),I(t))},I=t=>{t||(t=y()),t=t.split("'").join("-"),v(""),!C()&&M(t)},M=async t=>{let e=await Q(t,h?.status);e?.data?(e?.data?.isSSG?p():(e?.data?.city,e?.data?.estate,u({color:e?.color,msg1:e?.data?.city,msg2:e?.data?.estate,bagnumber:e?.data?.bagnumber})),b([...f(),e.data])):e?.error&&(e?.error?.isSSG?p():u({color:e?.error?.color,msg1:e?.error?.scanData?.consigneeInfo?.ybcity,msg2:e?.error?.scanData?.consigneeInfo?.ybestate,bagnumber:e?.error?.scanData?.consigneeInfo?.bagnumber}))},_=()=>{c(!0);let t={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[q.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},e=new z("qr-reader",t);e.render(m),L("cameraScanLoc",e)};E(m,400);const p=t=>{let e=g(),r={};r.id=e,r.overlayColor="rgb(200 25 60)",r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=o(T,{modalId:e}),d(r),setTimeout(()=>{S(e)},1800)},u=t=>{let e=g(),r={};r.id=e,r.overlayColor=t.color,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=o(j,{modalId:e,get bagnumber(){return t.bagnumber},get msg1(){return t.msg1},get msg2(){return t.msg2}}),d(r),setTimeout(()=>{S(e)},1800)};return o(s,{when:!0,get fallback(){return x()},get children(){return o(s,{get when(){return i()},get children(){var t=P();return t._$owner=H(),$(t,o(s,{get when(){return i()},style:"margin-top: 35px",get children(){return O()}})),t}})}})}export{ae as default};