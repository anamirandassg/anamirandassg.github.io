const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-C7cgwQQf.js","assets/index-DjfzCh1Q.js","assets/index-BmzAZVve.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-wNzj2aTe.js","assets/ButonHrm-CYDiYXi0.js","assets/SVG-CQCqG7HI.js","assets/Util-JtLJw1Vf.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-CzbG3d9n.js","assets/debounces-BrrxaB09.js","assets/FlexSpace-DxE3mQXi.js","assets/DeliveryScanView-SIr-rfEq.js","assets/DialogHRM-DRvzMvld.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryView-Dr-gqfuN.js","assets/PDFButton-DSyiPGj-.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-DAv2r_Qf.js","assets/Toast-ByeAacnd.js","assets/Toast-DLpFKn-Q.css","assets/components-DmGlvOLa.js","assets/InputHr-DlcsQAW6.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{c as B,l as h,_ as b,a as S,U as G,u as W,j,o as q,n as H,b as J,i as c,d as u,S as $,w as K,F as U,E as Y,e as X,s as Z,g as ee,t as p,C as te}from"./index-DjfzCh1Q.js";import{O as C,b as re,f as ne,g as k}from"./Util-JtLJw1Vf.js";import"./DialogHRM-DRvzMvld.js";import"./ShowScanDeliveryManifest-DnYIE_fy.js";import"./PDFButton-DSyiPGj-.js";import{u as E}from"./debounces-BrrxaB09.js";import"./html5-qrcode-scanner-CzbG3d9n.js";import"./DeliveryScanView-SIr-rfEq.js";import"./DeliveryView-Dr-gqfuN.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-DAv2r_Qf.js";import"./Toast-ByeAacnd.js";import"./components-DmGlvOLa.js";var se=p("<h4>"),oe=p("<h5>"),ie=p('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),ae=p('<div class=" flxWrp spaceAround centerBx bottombx"><div style=padding:4px>'),le=p('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),N=p("<div> "),ce=p("<div> <!>.");const[Ne,Pe]=B(),P=h(()=>b(()=>import("./LoadingColorSpinner-C7cgwQQf.js"),__vite__mapDeps([0,1,2,3])));h(()=>b(()=>import("./DeliveryCamera-wNzj2aTe.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));const de=h(()=>b(()=>import("./DeliveryScanView-SIr-rfEq.js").then(o=>o.I),__vite__mapDeps([12,1,2,7,13,14,15,16,17,18,19,20,10,21])));h(()=>b(()=>import("./SVG-CQCqG7HI.js"),__vite__mapDeps([6,1,2])));const ue=h(()=>b(()=>import("./InputHr-DlcsQAW6.js"),__vite__mapDeps([22,1,2,23])));h(()=>b(()=>import("./FlexSpace-DxE3mQXi.js"),__vite__mapDeps([11,1,2])));const[Be,Le]=S("");function Oe(){const[o,i]=S(0),[n,w]=B({});G();const[L,pe]=W(),[I,O]=S(" ");S(0);const D=E(i,500),R=r=>{O(r),D(k())};j(()=>{F()}),q(()=>{});const M=r=>(v(r?.ybestate)+"_"+v(r?.ybcity)+"_"+v(r?.ybreparto)+"_"+v(r?.ybstreet)+"_"+v(r?.ybstreetNo)).toLowerCase();H(async()=>{let r=await ge({id:L?.dId,checkAuth:!0});w("detail",r);let a={},m={},y={};r?.linkedBagsInfo?.map(t=>{if(t?.currentStatus!="YABA_99"){let d=M(t?.consigneeInfo),l=t.cidentity,e=t?.estate||t?.consigneeInfo?.ybestate,s=t?.city||t?.consigneeInfo?.ybcity,f=t?.consigneeInfo?.ybreparto;if(y[f]||(y[f]=1),m[s]||(m[s]=1),a[d]||(a[d]={city:s,estate:e,rpto:f,address:{ybstreetNo:t?.consigneeInfo?.ybstreetNo,ybstreet:t?.consigneeInfo?.ybstreet,ybapt:t?.consigneeInfo?.ybapt,ybbetwen1:t?.consigneeInfo?.ybbetwen1,ybbetwen2:t?.consigneeInfo?.ybbetwen2},currentStatus:t?.currentStatus,customers:{},bagsNo:0}),!a[d].customers[l]){let z={name:me(t),phoneNumber:fe(t),cid:t.cidentity},A={...t,...z};A.bagsNumb={},a[d].customers[l]=A}let g={bagnumber:t?.bagnumber,idairguide:"all",tracking:t?.tracking};a[d].customers[l].bagsNumb[t?.ssg_track_key]=g,a[d].bagsNo+=1}}),w("linkedBagsInfo",a),E(k()),i(k())});function T(){return"geolocation"in navigator}function V(r){te({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function F(){T()?navigator.geolocation.getCurrentPosition(V):showMessage("Geolocation isn't supported by your browser")}const x=r=>r,[Q,{refetch:_e}]=J(o,async r=>{let a=n?.linkedBagsInfo,m=[];return I().length>0&&C(a).map((t,d)=>{let l=a[t],e=JSON.stringify(l).toLowerCase(),s=I().toLowerCase();e.indexOf(s)>0&&m.push(t)}),I().length===0&&(m=C(a)),m&&m.sort((t,d)=>{let l=x(t),e=x(d);return l<e?1:l>e?-1:0})});return(()=>{var r=le(),a=r.firstChild,m=a.firstChild,y=m.nextSibling,t=y.firstChild,d=a.nextSibling,l=d.nextSibling;return c(t,()=>n?.detail?.name),c(r,u($,{get when(){return n?.detail?.name},get fallback(){return(()=>{var e=N();return e.firstChild,c(e,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return[(()=>{var e=ie(),s=e.firstChild,f=s.firstChild;return c(e,u($,{get when(){return n?.detail?.city},get children(){return[(()=>{var g=se();return c(g,()=>n?.detail?.city),g})(),"|"]}}),s),c(e,u($,{get when(){return n?.detail?.province},get children(){return[(()=>{var g=oe();return c(g,()=>n?.detail?.province),g})(),"|"]}}),s),c(f,()=>C(n?.linkedBagsInfo)?.length),e})(),(()=>{var e=ae(),s=e.firstChild;return c(s,u(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"search...",colors:"#2b2b2b",handleClick:f=>R(f)})),e})()]}}),l),c(l,u(Y,{fallback:e=>(()=>{var s=ce(),f=s.firstChild,g=f.nextSibling;return g.nextSibling,c(s,()=>e.toString(),g),s})(),get children(){return u(K,{get fallback(){return(()=>{var e=N();return e.firstChild,c(e,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return u($,{get when(){return C(n?.linkedBagsInfo)?.length>0},get children(){return u(U,{get each(){return Q()},children:(e,s)=>u(de,{addressId:e,get item(){return n?.linkedBagsInfo?.[e]},get list(){return n?.linkedBagsInfo}})})}})}})}})),X(e=>Z(l,` ${ee()?"":"width:94vw;"} margin: 0 auto`,e)),r})()}const ge=async o=>{let i={params:o},n=re(703003);return i={...i,...n},await ne(i)},v=o=>o||"",_=o=>o?" "+o:"",me=o=>{let i=o?.consigneeInfo;return _(i?.firstName)+_(i?.middleName)+_(i?.lastName)+_(i?.lastName2)},fe=o=>{let i=o?.consigneeInfo,n=_(i?.altPhoneNumber);return _(i?.phoneNumber)+(n?" |"+n:"")};export{ge as LookupBagId,Oe as default,Ne as scannedQRs,Pe as setScannedQRs,Le as setStatus,Be as status};
