const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-yC9yEoUF.js","assets/index-CYppiLK1.js","assets/index-C8O1wSFC.css","assets/FlexSpace-sNLeAvey.js","assets/LoadingColorSpinner-DprMS_UZ.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-C-tI7uNM.js","assets/ButonHrm-lgovmBok.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-CsBN3xY3.js","assets/debounces-DfFDANt5.js","assets/ItemOnDeliveryList-D_ufDVQ9.js","assets/DialogHRM-BaMFV0wI.js","assets/DialogHRM-V9_lZntj.css","assets/LinkManifest-Piz3xrqR.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/fontkit.es-BfAp_FCj.js","assets/InitPrintServices-Ddhg5UQH.js","assets/DashManifest-C2IkJzi3.js"])))=>i.map(i=>d[i]);
import{l as m,_ as p,e as L,p as M,q as R,i as l,d as a,f as N,h as O,t as S,n as C,c as T,a as I,D as G,u as H,k as j,o as U,j as B,S as A,y as W,O as D,F as K,G as Z,s as Y,B as J}from"./index-CYppiLK1.js";import{CloseModal as X,OpenModal as ee}from"./DialogHRM-BaMFV0wI.js";import{H as te,a as re}from"./html5-qrcode-scanner-CsBN3xY3.js";import{LookupManifets as se}from"./DashManifest-C2IkJzi3.js";import{updLinkedBags as ne}from"./LinkManifest-Piz3xrqR.js";import"./fontkit.es-BfAp_FCj.js";import"./App.module-CbHnVtRQ.js";import"./debounces-DfFDANt5.js";import"./InitPrintServices-Ddhg5UQH.js";var ie=S('<div><div><div class="_dsplFlx bottombx lowbordr"><h5>Confirmar Entrega</h5><div class="icon_status centerBx"></div></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qr-reader style=width:220px>');const oe=m(()=>p(()=>import("./SVG-yC9yEoUF.js"),__vite__mapDeps([0,1,2]))),ae=m(()=>p(()=>import("./FlexSpace-sNLeAvey.js"),__vite__mapDeps([3,1,2])));let k;function le(e){M(()=>{k?.clear()}),R(()=>{setTimeout(()=>{d()},90)});const s=async n=>{let u="kZxxLCeHlz8l3gU8";(await se(u))?.[u]&&(await ne({ssg_manifest_key:u},{linkedUser:C?.profile?.userId}),e?.callback({ssg_manifest_key:u,linkedUser:C?.profile?.userId})),X(e?.modalId)},d=()=>{let n={fps:10,qrbox:{width:250,height:200},supportedScanTypes:[te.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0};k=new re("qr-reader",n),k.render(s)};return(()=>{var n=ie(),u=n.firstChild,_=u.firstChild,b=_.firstChild,f=b.nextSibling;return n.style.setProperty("max-height","80vh"),n.style.setProperty("overflow","auto"),n.style.setProperty("background","#ffffff"),n.style.setProperty("border-radius","13"),n.style.setProperty("padding","10px 19px"),b.$$click=s,l(_,a(ae,{}),f),f.$$click=()=>{},l(f,a(oe,{name:"keyboard",size:32,color:"#2b2b2b"})),N($=>($=O()?"92vw":"420px")!=null?n.style.setProperty("width",$):n.style.removeProperty("width")),n})()}L(["click"]);var de=S("<h4>"),ce=S('<div><div class=" flxWrp spaceAround centerBx"><h2>Delivery Manifest</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=" flxWrp spaceAround centerBx"><div class=bottombx><h4></h4></div><h5></h5></div><div>'),ue=S("<div> <!>."),me=S("<div> ");const[Ee,Ce]=T(),pe=m(()=>p(()=>import("./LoadingColorSpinner-DprMS_UZ.js"),__vite__mapDeps([4,1,2,5])));m(()=>p(()=>import("./DeliveryCamera-C-tI7uNM.js"),__vite__mapDeps([6,1,2,7,0,8,9,10,3])));const ge=m(()=>p(()=>import("./ItemOnDeliveryList-D_ufDVQ9.js"),__vite__mapDeps([11,1,2,10,12,13,14,15,16,17,18,19]))),_e=m(()=>p(()=>import("./SVG-yC9yEoUF.js"),__vite__mapDeps([0,1,2])));m(()=>p(()=>import("./FlexSpace-sNLeAvey.js"),__vite__mapDeps([3,1,2])));const[Be,Ae]=I("");function De(){I([]);const[e,s]=T({});G();const[d,n]=H(),[u,_]=I("");I(0),j(()=>{$()}),M(()=>{}),R(async()=>{console.log(d?.dId);let i=await fe({id:d?.dId});s("detail",i);let r={};i.linkedBagsInfo.map(t=>{let c=Q(t),h=t.cidentity;if(r[c]||(r[c]={city:t?.city,estate:t?.estate,currentStatus:t?.currentStatus,customers:{}}),!r[c].customers[h]){let v={name:he(t),phoneNumber:ve(t),cid:t.cidentity},y={...t,...v};y.bagsNumb=[],r[c].customers[h]=y}r[c].customers[h].bagsNumb.push(t?.bagnumber)}),s("linkedBagsInfo",r),_(B())});function b(){return"geolocation"in navigator}function f(i){J({latitude:i?.coords?.latitude,longitude:i?.coords?.longitude})}function $(){b()?navigator.geolocation.getCurrentPosition(f):showMessage("Geolocation isn't supported by your browser")}const V=i=>{console.log("refreshManif ",i)},q=i=>{let r=B(),t={};t.id=r,t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=a(le,{get item(){return props?.item},modalId:r,callback:V}),ee(t)},Q=i=>{let r=i?.street.split(",");return r.slice(0,r.length-2).join(",")};return(()=>{var i=ce(),r=i.firstChild,t=r.firstChild,c=t.nextSibling,h=r.nextSibling,v=h.nextSibling,y=v.firstChild,z=y.firstChild,w=y.nextSibling,P=v.nextSibling;return c.$$click=q,l(c,a(_e,{name:"qr_code",size:32,color:"#2b2b2b"})),l(z,()=>e?.detail?.name),l(v,a(A,{get when(){return e?.detail?.city},get children(){return[(()=>{var o=de();return l(o,()=>e?.detail?.city),o})(),"|"]}}),w),l(w,()=>e?.detail?.province),l(P,a(Z,{fallback:o=>(()=>{var x=ue(),F=x.firstChild,E=F.nextSibling;return E.nextSibling,l(x,()=>o.toString(),E),x})(),get children(){return a(W,{get fallback(){return(()=>{var o=me();return o.firstChild,l(o,a(pe,{stroke:"rgb(200 25 60 / 1)",size:62}),null),o})()},get children(){return a(A,{get when(){return D(e?.linkedBagsInfo)?.length>0},get children(){return a(K,{get each(){return D(e?.linkedBagsInfo)},children:(o,x)=>a(ge,{addressId:o,get item(){return e?.linkedBagsInfo?.[o]},get list(){return e?.linkedBagsInfo}})})}})}})}})),N(o=>Y(P,` ${O()?"":"width:94vw;"} margin: 0 auto`,o)),i})()}const fe=async e=>await U({params:e,query:"getManifestOrderByKeyID"}),g=e=>e?" "+e:"",he=e=>{let s=e?.consigneeInfo;return g(s?.firstName)+g(s?.middleName)+g(s?.lastName)+g(s?.lastName2)},ve=e=>{let s=e?.consigneeInfo,d=g(s?.altPhoneNumber);return g(s?.phoneNumber)+(d?" |"+d:"")};L(["click"]);export{fe as LookupBagId,De as default,Ee as scannedQRs,Ce as setScannedQRs,Ae as setStatus,Be as status};
