const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-hT-AbOuP.js","assets/index-Beyrq630.js","assets/index-DGHHyjai.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-BJbCQdTL.js","assets/ButonHrm-BvlLA8AH.js","assets/SVG-D5aSjgmV.js","assets/index-Ci0zXM0r.js","assets/Util-uEfv1z7O.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/debounces-CwcTS2fN.js","assets/FlexSpace-BQRbLmmk.js","assets/globalSignal-D4Bp8v89.js","assets/DeliveryScanView-CxfVf5JM.js","assets/DialogHRM-D2CaNdOT.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryView-DfZFdOGL.js","assets/browser-image-compression-BVJ4p9S0.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/Toast-DQ6hSgh4.js","assets/Toast-DLpFKn-Q.css","assets/components-DUx7SDuz.js","assets/InputHr-DNNMaa7K.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{c as B,l as h,_ as b,a as S,J as G,u as W,h as q,o as J,m as j,b as H,i as c,d as u,f as K,t as f,S as $,r as Y,F as U,E as X,s as Z}from"./index-Beyrq630.js";import{b as ee,f as te,g as w,O as C}from"./Util-uEfv1z7O.js";import{i as re,s as ne}from"./globalSignal-D4Bp8v89.js";import"./DialogHRM-D2CaNdOT.js";import"./ShowScanDeliveryManifest-C2azhOuU.js";import"./PDFButton-B_0lS8EG.js";import{u as E}from"./debounces-CwcTS2fN.js";import"./index-Ci0zXM0r.js";import"./html5-qrcode-scanner-Cl8XE5pu.js";import"./DeliveryScanView-CxfVf5JM.js";import"./DeliveryView-DfZFdOGL.js";/* empty css                 */import"./SVG-D5aSjgmV.js";import"./browser-image-compression-BVJ4p9S0.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-DQ6hSgh4.js";import"./components-DUx7SDuz.js";var se=f("<h4>"),oe=f("<h5>"),ie=f('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),ae=f('<div class=" flxWrp spaceAround centerBx bottombx"><div style=padding:4px>'),le=f('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),N=f("<div> "),ce=f("<div> <!>.");const[De,Re]=B(),P=h(()=>b(()=>import("./LoadingColorSpinner-hT-AbOuP.js"),__vite__mapDeps([0,1,2,3])));h(()=>b(()=>import("./DeliveryCamera-BJbCQdTL.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12,13])));const de=h(()=>b(()=>import("./DeliveryScanView-CxfVf5JM.js").then(o=>o.I),__vite__mapDeps([14,1,2,8,7,13,15,16,17,6,18,9,19,20,21,22,23,11,24])));h(()=>b(()=>import("./SVG-D5aSjgmV.js"),__vite__mapDeps([6,1,2,7])));const ue=h(()=>b(()=>import("./InputHr-DNNMaa7K.js"),__vite__mapDeps([25,1,2,26])));h(()=>b(()=>import("./FlexSpace-BQRbLmmk.js"),__vite__mapDeps([12,1,2])));const[Me,Te]=S("");function Ve(){const[o,i]=S(0),[n,k]=B({});G();const[L,fe]=W(),[I,O]=S(" ");S(0);const D=E(i,500),R=r=>{O(r),D(w())};q(()=>{F()}),J(()=>{});const M=r=>(v(r?.ybestate)+"_"+v(r?.ybcity)+"_"+v(r?.ybreparto)+"_"+v(r?.ybstreet)+"_"+v(r?.ybstreetNo)).toLowerCase();j(async()=>{let r=await ge({id:L?.dId,checkAuth:!0});k("detail",r);let a={},m={},y={};r?.linkedBagsInfo?.map(t=>{if(t?.currentStatus!="YABA_99"){let d=M(t?.consigneeInfo),l=t.cidentity,e=t?.estate||t?.consigneeInfo?.ybestate,s=t?.city||t?.consigneeInfo?.ybcity,p=t?.consigneeInfo?.ybreparto;if(y[p]||(y[p]=1),m[s]||(m[s]=1),a[d]||(a[d]={city:s,estate:e,rpto:p,address:{ybstreetNo:t?.consigneeInfo?.ybstreetNo,ybstreet:t?.consigneeInfo?.ybstreet,ybapt:t?.consigneeInfo?.ybapt,ybbetwen1:t?.consigneeInfo?.ybbetwen1,ybbetwen2:t?.consigneeInfo?.ybbetwen2},currentStatus:t?.currentStatus,customers:{},bagsNo:0}),!a[d].customers[l]){let z={name:me(t),phoneNumber:pe(t),cid:t.cidentity},A={...t,...z};A.bagsNumb={},a[d].customers[l]=A}let g={bagnumber:t?.bagnumber,idairguide:"all",tracking:t?.tracking};a[d].customers[l].bagsNumb[t?.ssg_track_key]=g,a[d].bagsNo+=1}}),k("linkedBagsInfo",a),E(w()),i(w())});function T(){return"geolocation"in navigator}function V(r){ne({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function F(){T()?navigator.geolocation.getCurrentPosition(V):showMessage("Geolocation isn't supported by your browser")}const x=r=>r,[Q,{refetch:_e}]=H(o,async r=>{let a=n?.linkedBagsInfo,m=[];return I().length>0&&C(a).map((t,d)=>{let l=a[t],e=JSON.stringify(l).toLowerCase(),s=I().toLowerCase();e.indexOf(s)>0&&m.push(t)}),I().length===0&&(m=C(a)),m&&m.sort((t,d)=>{let l=x(t),e=x(d);return l<e?1:l>e?-1:0})});return(()=>{var r=le(),a=r.firstChild,m=a.firstChild,y=m.nextSibling,t=y.firstChild,d=a.nextSibling,l=d.nextSibling;return c(t,()=>n?.detail?.name),c(r,u($,{get when(){return n?.detail?.name},get fallback(){return(()=>{var e=N();return e.firstChild,c(e,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return[(()=>{var e=ie(),s=e.firstChild,p=s.firstChild;return c(e,u($,{get when(){return n?.detail?.city},get children(){return[(()=>{var g=se();return c(g,()=>n?.detail?.city),g})(),"|"]}}),s),c(e,u($,{get when(){return n?.detail?.province},get children(){return[(()=>{var g=oe();return c(g,()=>n?.detail?.province),g})(),"|"]}}),s),c(p,()=>C(n?.linkedBagsInfo)?.length),e})(),(()=>{var e=ae(),s=e.firstChild;return c(s,u(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"search...",colors:"#2b2b2b",handleClick:p=>R(p)})),e})()]}}),l),c(l,u(X,{fallback:e=>(()=>{var s=ce(),p=s.firstChild,g=p.nextSibling;return g.nextSibling,c(s,()=>e.toString(),g),s})(),get children(){return u(Y,{get fallback(){return(()=>{var e=N();return e.firstChild,c(e,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return u($,{get when(){return C(n?.linkedBagsInfo)?.length>0},get children(){return u(U,{get each(){return Q()},children:(e,s)=>u(de,{addressId:e,get item(){return n?.linkedBagsInfo?.[e]},get list(){return n?.linkedBagsInfo}})})}})}})}})),K(e=>Z(l,` ${re()?"":"width:94vw;"} margin: 0 auto`,e)),r})()}const ge=async o=>{let i={params:o},n=ee(703003);return i={...i,...n},await te(i)},v=o=>o||"",_=o=>o?" "+o:"",me=o=>{let i=o?.consigneeInfo;return _(i?.firstName)+_(i?.middleName)+_(i?.lastName)+_(i?.lastName2)},pe=o=>{let i=o?.consigneeInfo,n=_(i?.altPhoneNumber);return _(i?.phoneNumber)+(n?" |"+n:"")};export{ge as LookupBagId,Ve as default,De as scannedQRs,Re as setScannedQRs,Te as setStatus,Me as status};
