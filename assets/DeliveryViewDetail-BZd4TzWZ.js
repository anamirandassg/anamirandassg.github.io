const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Cg8CcMBj.js","assets/index-BLZE2s6l.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-DJwSEd4N.js","assets/ButonHrm-Dl3Smlc1.js","assets/SVG-D9i3twBA.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-BS3ewSJl.js","assets/debounces-CDTX7212.js","assets/FlexSpace-CIlXr-le.js","assets/DeliveryScanView-CYMs-XYU.js","assets/DialogHRM-CDspj2ID.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryView-D0HueS92.js","assets/PDFButton-CW_6L3wv.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BGtKoALU.js","assets/Toast-BXf7ylY1.js","assets/Toast-DLpFKn-Q.css","assets/components-CS07XXti.js","assets/InputHr-CVjYZGi9.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{c as B,l as h,_ as b,a as S,au as q,u as z,k as W,r as j,s as H,b as J,i as c,d as u,S as $,O as C,H as K,F as Y,G as U,e as X,w as Z,g as ee,p as te,q as re,t as p,j as w,ae as ne}from"./index-BLZE2s6l.js";import"./DialogHRM-CDspj2ID.js";import"./ShowScanDeliveryManifest-C4216VwT.js";import"./PDFButton-CW_6L3wv.js";import{u as N}from"./debounces-CDTX7212.js";import"./html5-qrcode-scanner-BS3ewSJl.js";import"./DeliveryScanView-CYMs-XYU.js";import"./DeliveryView-D0HueS92.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BGtKoALU.js";import"./Toast-BXf7ylY1.js";import"./components-CS07XXti.js";var se=p("<h4>"),oe=p("<h5>"),ie=p('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),ae=p('<div class=" flxWrp spaceAround centerBx bottombx"><div style=padding:4px>'),le=p('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),E=p("<div> "),ce=p("<div> <!>.");const[Ne,Ee]=B(),P=h(()=>b(()=>import("./LoadingColorSpinner-Cg8CcMBj.js"),__vite__mapDeps([0,1,2,3])));h(()=>b(()=>import("./DeliveryCamera-DJwSEd4N.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10])));const de=h(()=>b(()=>import("./DeliveryScanView-CYMs-XYU.js").then(o=>o.I),__vite__mapDeps([11,1,2,12,13,14,15,16,17,18,19,9,20])));h(()=>b(()=>import("./SVG-D9i3twBA.js"),__vite__mapDeps([6,1,2])));const ue=h(()=>b(()=>import("./InputHr-CVjYZGi9.js"),__vite__mapDeps([21,1,2,22])));h(()=>b(()=>import("./FlexSpace-CIlXr-le.js"),__vite__mapDeps([10,1,2])));const[Pe,Be]=S("");function Le(){const[o,i]=S(0),[n,k]=B({});q();const[L,pe]=z(),[I,O]=S(" ");S(0);const D=N(i,500),R=r=>{O(r),D(w())};W(()=>{F()}),j(()=>{});const M=r=>(v(r?.ybestate)+"_"+v(r?.ybcity)+"_"+v(r?.ybreparto)+"_"+v(r?.ybstreet)+"_"+v(r?.ybstreetNo)).toLowerCase();H(async()=>{let r=await ge({id:L?.dId,checkAuth:!0});k("detail",r);let a={},m={},y={};r?.linkedBagsInfo?.map(e=>{if(e?.currentStatus!="YABA_99"){let d=M(e?.consigneeInfo),l=e.cidentity,t=e?.estate||e?.consigneeInfo?.ybestate,s=e?.city||e?.consigneeInfo?.ybcity,f=e?.consigneeInfo?.ybreparto;if(y[f]||(y[f]=1),m[s]||(m[s]=1),a[d]||(a[d]={city:s,estate:t,rpto:f,address:{ybstreetNo:e?.consigneeInfo?.ybstreetNo,ybstreet:e?.consigneeInfo?.ybstreet,ybapt:e?.consigneeInfo?.ybapt,ybbetwen1:e?.consigneeInfo?.ybbetwen1,ybbetwen2:e?.consigneeInfo?.ybbetwen2},currentStatus:e?.currentStatus,customers:{},bagsNo:0}),!a[d].customers[l]){let G={name:me(e),phoneNumber:fe(e),cid:e.cidentity},A={...e,...G};A.bagsNumb={},a[d].customers[l]=A}let g={bagnumber:e?.bagnumber,idairguide:e?.guia,tracking:e?.tracking};a[d].customers[l].bagsNumb[e?.ssg_track_key]=g,a[d].bagsNo+=1}}),k("linkedBagsInfo",a),N(w()),i(w())});function T(){return"geolocation"in navigator}function V(r){ne({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function F(){T()?navigator.geolocation.getCurrentPosition(V):showMessage("Geolocation isn't supported by your browser")}const x=r=>r,[Q,{refetch:_e}]=J(o,async r=>{let a=n?.linkedBagsInfo,m=[];return I().length>0&&C(a).map((e,d)=>{let l=a[e],t=JSON.stringify(l).toLowerCase(),s=I().toLowerCase();t.indexOf(s)>0&&m.push(e)}),I().length===0&&(m=C(a)),m&&m.sort((e,d)=>{let l=x(e),t=x(d);return l<t?1:l>t?-1:0})});return(()=>{var r=le(),a=r.firstChild,m=a.firstChild,y=m.nextSibling,e=y.firstChild,d=a.nextSibling,l=d.nextSibling;return c(e,()=>n?.detail?.name),c(r,u($,{get when(){return n?.detail?.name},get fallback(){return(()=>{var t=E();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=ie(),s=t.firstChild,f=s.firstChild;return c(t,u($,{get when(){return n?.detail?.city},get children(){return[(()=>{var g=se();return c(g,()=>n?.detail?.city),g})(),"|"]}}),s),c(t,u($,{get when(){return n?.detail?.province},get children(){return[(()=>{var g=oe();return c(g,()=>n?.detail?.province),g})(),"|"]}}),s),c(f,()=>C(n?.linkedBagsInfo)?.length),t})(),(()=>{var t=ae(),s=t.firstChild;return c(s,u(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"search...",colors:"#2b2b2b",handleClick:f=>R(f)})),t})()]}}),l),c(l,u(U,{fallback:t=>(()=>{var s=ce(),f=s.firstChild,g=f.nextSibling;return g.nextSibling,c(s,()=>t.toString(),g),s})(),get children(){return u(K,{get fallback(){return(()=>{var t=E();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return u($,{get when(){return C(n?.linkedBagsInfo)?.length>0},get children(){return u(Y,{get each(){return Q()},children:(t,s)=>u(de,{addressId:t,get item(){return n?.linkedBagsInfo?.[t]},get list(){return n?.linkedBagsInfo}})})}})}})}})),X(t=>Z(l,` ${ee()?"":"width:94vw;"} margin: 0 auto`,t)),r})()}const ge=async o=>{let i={params:o},n=te(703003);return i={...i,...n},await re(i)},v=o=>o||"",_=o=>o?" "+o:"",me=o=>{let i=o?.consigneeInfo;return _(i?.firstName)+_(i?.middleName)+_(i?.lastName)+_(i?.lastName2)},fe=o=>{let i=o?.consigneeInfo,n=_(i?.altPhoneNumber);return _(i?.phoneNumber)+(n?" |"+n:"")};export{ge as LookupBagId,Le as default,Ne as scannedQRs,Ee as setScannedQRs,Be as setStatus,Pe as status};
