import{a,c as A,b as R,o as D,e as H,f as o,S as n,a6 as $,i as k,t as s}from"./index-DA7NoUTw.js";import{e as G,u as L,a as g}from"./Util-DZlMHKqJ.js";import{H as q,a as E}from"./html5-qrcode-scanner-QeobMvFI.js";import{u as T}from"./debounces-BUerqMOd.js";import{a as z}from"./Scanning-DJpPnvjO.js";import"./Toast-DSYEWaBA.js";import O from"./ShowSSG-BQ64XBwj.js";import{OpenModal as d,CloseModal as S}from"./DialogHRM-BuFEgiLx.js";import P from"./ShowScanAlert-BgnsDC4A.js";import"./App.module-CbHnVtRQ.js";import"./ShowQRPrintLabel-DyTADM3z.js";import"./PDFButton-ClnWeH7R.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-DkuHxdU6.js";import"./InitPrintServices-QWHeDiid.js";var Q=s("<div class=scanWrp><div id=qr-reader style=width:300px>"),j=s("<slot name=plans style=margin-top:35px>"),x=s("<div>esta funcion es solo para dispositivos mobiles");function ne(h){const[f,b]=a([]);A({});const[y,v]=a(""),[i,c]=a(),[w,l]=a();a(""),a("");const[C,B]=a("");R(()=>{}),D(()=>{c(!1),G("cameraScanLoc")?.clear()}),H(()=>{setTimeout(()=>{_()},90)});const m=(t,e)=>{t!==w()&&(l(t),setTimeout(()=>{l("")},3e3),I(t))},I=t=>{t||(t=y()),t=t.split("'").join("-"),v(""),!C()&&M(t)},M=async t=>{let e=await z(t,h?.status);e?.data?(e?.data?.isSSG?p():(e?.data?.city,e?.data?.estate,u({color:e?.color,msg1:e?.data?.city,msg2:e?.data?.estate,bagnumber:e?.data?.bagnumber})),b([...f(),e.data])):e?.error&&(e?.error?.isSSG?p():u({color:e?.error?.color,msg1:e?.error?.scanData?.consigneeInfo?.ybcity,msg2:e?.error?.scanData?.consigneeInfo?.ybestate,bagnumber:e?.error?.scanData?.consigneeInfo?.bagnumber}))},_=()=>{c(!0);let t={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[q.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},e=new E("qr-reader",t);e.render(m),L("cameraScanLoc",e)};T(m,400);const p=t=>{let e=g(),r={};r.id=e,r.overlayColor="rgb(200 25 60)",r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=o(O,{modalId:e}),d(r),setTimeout(()=>{S(e)},1800)},u=t=>{let e=g(),r={};r.id=e,r.overlayColor=t.color,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=o(P,{modalId:e,get bagnumber(){return t.bagnumber},get msg1(){return t.msg1},get msg2(){return t.msg2}}),d(r),setTimeout(()=>{S(e)},1800)};return o(n,{when:!0,get fallback(){return x()},get children(){return o(n,{get when(){return i()},get children(){var t=j();return t._$owner=$(),k(t,o(n,{get when(){return i()},style:"margin-top: 35px",get children(){return Q()}})),t}})}})}export{ne as default};
