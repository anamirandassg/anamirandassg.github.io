const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-PL08AkIV.js","assets/index-DN2CEQe7.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-B9DJg3mP.js","assets/ButonHrm-BN04G0NK.js","assets/SVG-BWR0LIJa.js","assets/Util-F67-CCle.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-AiZst19y.js","assets/debounces-DpYkm7AX.js","assets/FlexSpace-DPuzk0fH.js","assets/DeliveryScanView-gBKp-c14.js","assets/DialogHRM-_6iKbJet.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryView-tqRpJa0M.js","assets/PDFButton-CYzToAIH.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BUYa1DnD.js","assets/Toast-CduFRrUi.js","assets/Toast-DLpFKn-Q.css","assets/components-DbDpqtXk.js","assets/InputHr-DK47EKWs.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{c as B,l as h,_ as b,a as S,Y as G,u as W,j,o as q,n as Y,b as H,i as c,d as u,S as $,w as J,F as K,E as U,e as X,s as Z,g as ee,t as p,L as te}from"./index-DN2CEQe7.js";import{O as C,b as re,f as ne,g as k}from"./Util-F67-CCle.js";import"./DialogHRM-_6iKbJet.js";import"./ShowScanDeliveryManifest-CV1K5FzT.js";import"./PDFButton-CYzToAIH.js";import{u as E}from"./debounces-DpYkm7AX.js";import"./html5-qrcode-scanner-AiZst19y.js";import"./DeliveryScanView-gBKp-c14.js";import"./DeliveryView-tqRpJa0M.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BUYa1DnD.js";import"./Toast-CduFRrUi.js";import"./components-DbDpqtXk.js";var se=p("<h4>"),oe=p("<h5>"),ie=p('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),ae=p('<div class=" flxWrp spaceAround centerBx bottombx"><div style=padding:4px>'),le=p('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),N=p("<div> "),ce=p("<div> <!>.");const[Ne,Pe]=B(),P=h(()=>b(()=>import("./LoadingColorSpinner-PL08AkIV.js"),__vite__mapDeps([0,1,2,3])));h(()=>b(()=>import("./DeliveryCamera-B9DJg3mP.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));const de=h(()=>b(()=>import("./DeliveryScanView-gBKp-c14.js").then(o=>o.I),__vite__mapDeps([12,1,2,7,13,14,15,16,17,18,19,20,10,21])));h(()=>b(()=>import("./SVG-BWR0LIJa.js"),__vite__mapDeps([6,1,2,7])));const ue=h(()=>b(()=>import("./InputHr-DK47EKWs.js"),__vite__mapDeps([22,1,2,23])));h(()=>b(()=>import("./FlexSpace-DPuzk0fH.js"),__vite__mapDeps([11,1,2])));const[Be,Le]=S("");function Oe(){const[o,i]=S(0),[n,w]=B({});G();const[L,pe]=W(),[I,O]=S(" ");S(0);const D=E(i,500),R=r=>{O(r),D(k())};j(()=>{F()}),q(()=>{});const M=r=>(v(r?.ybestate)+"_"+v(r?.ybcity)+"_"+v(r?.ybreparto)+"_"+v(r?.ybstreet)+"_"+v(r?.ybstreetNo)).toLowerCase();Y(async()=>{let r=await ge({id:L?.dId,checkAuth:!0});w("detail",r);let a={},m={},y={};r?.linkedBagsInfo?.map(e=>{if(e?.currentStatus!="YABA_99"){let d=M(e?.consigneeInfo),l=e.cidentity,t=e?.estate||e?.consigneeInfo?.ybestate,s=e?.city||e?.consigneeInfo?.ybcity,f=e?.consigneeInfo?.ybreparto;if(y[f]||(y[f]=1),m[s]||(m[s]=1),a[d]||(a[d]={city:s,estate:t,rpto:f,address:{ybstreetNo:e?.consigneeInfo?.ybstreetNo,ybstreet:e?.consigneeInfo?.ybstreet,ybapt:e?.consigneeInfo?.ybapt,ybbetwen1:e?.consigneeInfo?.ybbetwen1,ybbetwen2:e?.consigneeInfo?.ybbetwen2},currentStatus:e?.currentStatus,customers:{},bagsNo:0}),!a[d].customers[l]){let z={name:me(e),phoneNumber:fe(e),cid:e.cidentity},A={...e,...z};A.bagsNumb={},a[d].customers[l]=A}let g={bagnumber:e?.bagnumber,idairguide:e?.guia,tracking:e?.tracking};a[d].customers[l].bagsNumb[e?.ssg_track_key]=g,a[d].bagsNo+=1}}),w("linkedBagsInfo",a),E(k()),i(k())});function T(){return"geolocation"in navigator}function V(r){te({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function F(){T()?navigator.geolocation.getCurrentPosition(V):showMessage("Geolocation isn't supported by your browser")}const x=r=>r,[Q,{refetch:_e}]=H(o,async r=>{let a=n?.linkedBagsInfo,m=[];return I().length>0&&C(a).map((e,d)=>{let l=a[e],t=JSON.stringify(l).toLowerCase(),s=I().toLowerCase();t.indexOf(s)>0&&m.push(e)}),I().length===0&&(m=C(a)),m&&m.sort((e,d)=>{let l=x(e),t=x(d);return l<t?1:l>t?-1:0})});return(()=>{var r=le(),a=r.firstChild,m=a.firstChild,y=m.nextSibling,e=y.firstChild,d=a.nextSibling,l=d.nextSibling;return c(e,()=>n?.detail?.name),c(r,u($,{get when(){return n?.detail?.name},get fallback(){return(()=>{var t=N();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=ie(),s=t.firstChild,f=s.firstChild;return c(t,u($,{get when(){return n?.detail?.city},get children(){return[(()=>{var g=se();return c(g,()=>n?.detail?.city),g})(),"|"]}}),s),c(t,u($,{get when(){return n?.detail?.province},get children(){return[(()=>{var g=oe();return c(g,()=>n?.detail?.province),g})(),"|"]}}),s),c(f,()=>C(n?.linkedBagsInfo)?.length),t})(),(()=>{var t=ae(),s=t.firstChild;return c(s,u(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"search...",colors:"#2b2b2b",handleClick:f=>R(f)})),t})()]}}),l),c(l,u(U,{fallback:t=>(()=>{var s=ce(),f=s.firstChild,g=f.nextSibling;return g.nextSibling,c(s,()=>t.toString(),g),s})(),get children(){return u(J,{get fallback(){return(()=>{var t=N();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return u($,{get when(){return C(n?.linkedBagsInfo)?.length>0},get children(){return u(K,{get each(){return Q()},children:(t,s)=>u(de,{addressId:t,get item(){return n?.linkedBagsInfo?.[t]},get list(){return n?.linkedBagsInfo}})})}})}})}})),X(t=>Z(l,` ${ee()?"":"width:94vw;"} margin: 0 auto`,t)),r})()}const ge=async o=>{let i={params:o},n=re(703003);return i={...i,...n},await ne(i)},v=o=>o||"",_=o=>o?" "+o:"",me=o=>{let i=o?.consigneeInfo;return _(i?.firstName)+_(i?.middleName)+_(i?.lastName)+_(i?.lastName2)},fe=o=>{let i=o?.consigneeInfo,n=_(i?.altPhoneNumber);return _(i?.phoneNumber)+(n?" |"+n:"")};export{ge as LookupBagId,Oe as default,Ne as scannedQRs,Pe as setScannedQRs,Le as setStatus,Be as status};
