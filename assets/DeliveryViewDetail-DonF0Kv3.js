const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-D7-LcZC3.js","assets/index-DfnndQVu.js","assets/index-DGHHyjai.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-BZyOtsTJ.js","assets/ButonHrm-CWmogd9k.js","assets/SVG-B3M6J_R5.js","assets/index-Ci0zXM0r.js","assets/Util-uEfv1z7O.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/debounces-Bo9ZjQKA.js","assets/FlexSpace-C0Mzn-ya.js","assets/globalSignal-B85JDhH1.js","assets/DeliveryScanView-B-CvvglK.js","assets/DialogHRM-AsYatAEW.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryView-Jj_eqaZV.js","assets/browser-image-compression-BVJ4p9S0.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/Toast-DVa0BnZN.js","assets/Toast-DLpFKn-Q.css","assets/components-Dzd16PQs.js","assets/InputHr-_dZUn-si.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{c as B,l as h,_ as b,a as C,I as z,u as G,h as W,o as j,m as H,b as J,i as c,d as u,f as K,t as f,S as $,q as Y,F as U,E as X,s as Z}from"./index-DfnndQVu.js";import{b as ee,f as te,g as w,O as S}from"./Util-uEfv1z7O.js";import{i as re,s as ne}from"./globalSignal-B85JDhH1.js";import"./DialogHRM-AsYatAEW.js";import"./ShowScanDeliveryManifest-IVpewPni.js";import"./fontkit.es-DEjOtITv.js";import{u as E}from"./debounces-Bo9ZjQKA.js";import"./index-Ci0zXM0r.js";import"./html5-qrcode-scanner-Cl8XE5pu.js";import"./DashManifest-B-llBVVm.js";import"./App.module-CbHnVtRQ.js";import"./ManifestDetails-D9LolPYu.js";import"./ButonHrm-CWmogd9k.js";/* empty css                 */import"./SVG-B3M6J_R5.js";import"./DeliveryView-Jj_eqaZV.js";import"./browser-image-compression-BVJ4p9S0.js";import"./DeliveryScanView-B-CvvglK.js";import"./qrcode-C5vWJp7P.js";import"./Toast-DVa0BnZN.js";import"./components-Dzd16PQs.js";var oe=f("<h4>"),se=f("<h5>"),ie=f('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),ae=f('<div class=" flxWrp spaceAround centerBx bottombx"><div style=padding:4px>'),le=f('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),N=f("<div> "),ce=f("<div> <!>.");const[Te,Ve]=B(),P=h(()=>b(()=>import("./LoadingColorSpinner-D7-LcZC3.js"),__vite__mapDeps([0,1,2,3])));h(()=>b(()=>import("./DeliveryCamera-BZyOtsTJ.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12,13])));const de=h(()=>b(()=>import("./DeliveryScanView-B-CvvglK.js").then(s=>s.I),__vite__mapDeps([14,1,2,8,7,13,15,16,17,6,18,9,19,20,21,22,11,23])));h(()=>b(()=>import("./SVG-B3M6J_R5.js"),__vite__mapDeps([6,1,2,7])));const ue=h(()=>b(()=>import("./InputHr-_dZUn-si.js"),__vite__mapDeps([24,1,2,25])));h(()=>b(()=>import("./FlexSpace-C0Mzn-ya.js"),__vite__mapDeps([12,1,2])));const[Fe,Qe]=C("");function qe(){const[s,i]=C(0),[n,k]=B({});z();const[O,fe]=G(),[I,D]=C(" ");C(0);const L=E(i,500),R=r=>{D(r),L(w())};W(()=>{F()}),j(()=>{});const M=r=>v(r?.ybestate)+"_"+v(r?.ybcity)+"_"+v(r?.ybreparto)+"_"+v(r?.ybstreet)+"_"+v(r?.ybstreetNo);H(async()=>{let r=await ge({id:O?.dId,checkAuth:!0});k("detail",r);let a={},m={},y={};r?.linkedBagsInfo?.map(e=>{if(e?.currentStatus!="YABA_99"){let d=M(e?.consigneeInfo),l=e.cidentity,t=e?.estate||e?.consigneeInfo?.ybestate,o=e?.city||e?.consigneeInfo?.ybcity,p=e?.consigneeInfo?.ybreparto;if(y[p]||(y[p]=1),m[o]||(m[o]=1),a[d]||(a[d]={city:o,estate:t,rpto:p,address:{ybstreetNo:e?.consigneeInfo?.ybstreetNo,ybstreet:e?.consigneeInfo?.ybstreet,ybapt:e?.consigneeInfo?.ybapt,ybbetwen1:e?.consigneeInfo?.ybbetwen1,ybbetwen2:e?.consigneeInfo?.ybbetwen2},currentStatus:e?.currentStatus,customers:{},bagsNo:0}),!a[d].customers[l]){let q={name:me(e),phoneNumber:pe(e),cid:e.cidentity},A={...e,...q};A.bagsNumb={},a[d].customers[l]=A}let g={bagnumber:e?.bagnumber,idairguide:e?.idairguide,tracking:e?.tracking};a[d].customers[l].bagsNumb[e?.ssg_track_key]=g,a[d].bagsNo+=1}}),k("linkedBagsInfo",a),E(w()),i(w())});function T(){return"geolocation"in navigator}function V(r){ne({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function F(){T()?navigator.geolocation.getCurrentPosition(V):showMessage("Geolocation isn't supported by your browser")}const x=r=>r,[Q,{refetch:_e}]=J(s,async r=>{let a=n?.linkedBagsInfo,m=[];return I().length>0&&S(a).map((e,d)=>{let l=a[e],t=JSON.stringify(l).toLowerCase(),o=I().toLowerCase();t.indexOf(o)>0&&m.push(e)}),I().length===0&&(m=S(a)),m&&m.sort((e,d)=>{let l=x(e),t=x(d);return l<t?1:l>t?-1:0})});return(()=>{var r=le(),a=r.firstChild,m=a.firstChild,y=m.nextSibling,e=y.firstChild,d=a.nextSibling,l=d.nextSibling;return c(e,()=>n?.detail?.name),c(r,u($,{get when(){return n?.detail?.name},get fallback(){return(()=>{var t=N();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=ie(),o=t.firstChild,p=o.firstChild;return c(t,u($,{get when(){return n?.detail?.city},get children(){return[(()=>{var g=oe();return c(g,()=>n?.detail?.city),g})(),"|"]}}),o),c(t,u($,{get when(){return n?.detail?.province},get children(){return[(()=>{var g=se();return c(g,()=>n?.detail?.province),g})(),"|"]}}),o),c(p,()=>S(n?.linkedBagsInfo)?.length),t})(),(()=>{var t=ae(),o=t.firstChild;return c(o,u(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"search...",colors:"#2b2b2b",handleClick:p=>R(p)})),t})()]}}),l),c(l,u(X,{fallback:t=>(()=>{var o=ce(),p=o.firstChild,g=p.nextSibling;return g.nextSibling,c(o,()=>t.toString(),g),o})(),get children(){return u(Y,{get fallback(){return(()=>{var t=N();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return u($,{get when(){return S(n?.linkedBagsInfo)?.length>0},get children(){return u(U,{get each(){return Q()},children:(t,o)=>u(de,{addressId:t,get item(){return n?.linkedBagsInfo?.[t]},get list(){return n?.linkedBagsInfo}})})}})}})}})),K(t=>Z(l,` ${re()?"":"width:94vw;"} margin: 0 auto`,t)),r})()}const ge=async s=>{let i={params:s},n=ee(703003);return i={...i,...n},await te(i)},v=s=>s||"",_=s=>s?" "+s:"",me=s=>{let i=s?.consigneeInfo;return _(i?.firstName)+_(i?.middleName)+_(i?.lastName)+_(i?.lastName2)},pe=s=>{let i=s?.consigneeInfo,n=_(i?.altPhoneNumber);return _(i?.phoneNumber)+(n?" |"+n:"")};export{ge as LookupBagId,qe as default,Te as scannedQRs,Ve as setScannedQRs,Qe as setStatus,Fe as status};
