const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DD9B4szm.js","assets/index-DEC_qqAp.js","assets/index-DYvAu9Q1.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-kuMVTF3a.js","assets/ButonHrm-mwJl-YOT.js","assets/SVG-DEbu7_30.js","assets/index-Ci0zXM0r.js","assets/Util-D886uaAp.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/debounces-Ck-jflkm.js","assets/FlexSpace-CmSbV51-.js","assets/globalSignal-C3-NWSPW.js","assets/DeliveryScanView-CvlLvTPt.js","assets/DialogHRM-Cc3LhbYl.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryView-hHGPSCCt.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/Toast-B3yg-0aH.js","assets/Toast-DLpFKn-Q.css","assets/components-VsOE6P3u.js","assets/InputHr-DnoOvHnE.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{c as B,l as h,_ as b,a as S,K as G,u as W,h as q,o as K,m as j,b as H,i as c,d as u,f as J,t as p,S as $,r as Y,F as U,E as X,s as Z}from"./index-DEC_qqAp.js";import{b as ee,f as te,g as w,O as C}from"./Util-D886uaAp.js";import{i as re,s as ne}from"./globalSignal-C3-NWSPW.js";import"./DialogHRM-Cc3LhbYl.js";import"./ShowScanDeliveryManifest-DzlKQQ4w.js";import"./PDFButton-B_0lS8EG.js";import{u as E}from"./debounces-Ck-jflkm.js";import"./index-Ci0zXM0r.js";import"./html5-qrcode-scanner-Cl8XE5pu.js";import"./DeliveryScanView-CvlLvTPt.js";import"./DeliveryView-hHGPSCCt.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-B3yg-0aH.js";import"./components-VsOE6P3u.js";var se=p("<h4>"),oe=p("<h5>"),ie=p('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),ae=p('<div class=" flxWrp spaceAround centerBx bottombx"><div style=padding:4px>'),le=p('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),N=p("<div> "),ce=p("<div> <!>.");const[Be,Le]=B(),P=h(()=>b(()=>import("./LoadingColorSpinner-DD9B4szm.js"),__vite__mapDeps([0,1,2,3])));h(()=>b(()=>import("./DeliveryCamera-kuMVTF3a.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12,13])));const de=h(()=>b(()=>import("./DeliveryScanView-CvlLvTPt.js").then(o=>o.I),__vite__mapDeps([14,1,2,8,7,13,15,16,17,18,19,20,21,22,11,23])));h(()=>b(()=>import("./SVG-DEbu7_30.js"),__vite__mapDeps([6,1,2,7])));const ue=h(()=>b(()=>import("./InputHr-DnoOvHnE.js"),__vite__mapDeps([24,1,2,25])));h(()=>b(()=>import("./FlexSpace-CmSbV51-.js"),__vite__mapDeps([12,1,2])));const[Oe,De]=S("");function Re(){const[o,i]=S(0),[n,k]=B({});G();const[L,pe]=W(),[I,O]=S(" ");S(0);const D=E(i,500),R=r=>{O(r),D(w())};q(()=>{F()}),K(()=>{});const M=r=>(v(r?.ybestate)+"_"+v(r?.ybcity)+"_"+v(r?.ybreparto)+"_"+v(r?.ybstreet)+"_"+v(r?.ybstreetNo)).toLowerCase();j(async()=>{let r=await ge({id:L?.dId,checkAuth:!0});k("detail",r);let a={},m={},y={};r?.linkedBagsInfo?.map(t=>{if(t?.currentStatus!="YABA_99"){let d=M(t?.consigneeInfo),l=t.cidentity,e=t?.estate||t?.consigneeInfo?.ybestate,s=t?.city||t?.consigneeInfo?.ybcity,f=t?.consigneeInfo?.ybreparto;if(y[f]||(y[f]=1),m[s]||(m[s]=1),a[d]||(a[d]={city:s,estate:e,rpto:f,address:{ybstreetNo:t?.consigneeInfo?.ybstreetNo,ybstreet:t?.consigneeInfo?.ybstreet,ybapt:t?.consigneeInfo?.ybapt,ybbetwen1:t?.consigneeInfo?.ybbetwen1,ybbetwen2:t?.consigneeInfo?.ybbetwen2},currentStatus:t?.currentStatus,customers:{},bagsNo:0}),!a[d].customers[l]){let z={name:me(t),phoneNumber:fe(t),cid:t.cidentity},A={...t,...z};A.bagsNumb={},a[d].customers[l]=A}let g={bagnumber:t?.bagnumber,idairguide:"all",tracking:t?.tracking};a[d].customers[l].bagsNumb[t?.ssg_track_key]=g,a[d].bagsNo+=1}}),k("linkedBagsInfo",a),E(w()),i(w())});function T(){return"geolocation"in navigator}function V(r){ne({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function F(){T()?navigator.geolocation.getCurrentPosition(V):showMessage("Geolocation isn't supported by your browser")}const x=r=>r,[Q,{refetch:_e}]=H(o,async r=>{let a=n?.linkedBagsInfo,m=[];return I().length>0&&C(a).map((t,d)=>{let l=a[t],e=JSON.stringify(l).toLowerCase(),s=I().toLowerCase();e.indexOf(s)>0&&m.push(t)}),I().length===0&&(m=C(a)),m&&m.sort((t,d)=>{let l=x(t),e=x(d);return l<e?1:l>e?-1:0})});return(()=>{var r=le(),a=r.firstChild,m=a.firstChild,y=m.nextSibling,t=y.firstChild,d=a.nextSibling,l=d.nextSibling;return c(t,()=>n?.detail?.name),c(r,u($,{get when(){return n?.detail?.name},get fallback(){return(()=>{var e=N();return e.firstChild,c(e,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return[(()=>{var e=ie(),s=e.firstChild,f=s.firstChild;return c(e,u($,{get when(){return n?.detail?.city},get children(){return[(()=>{var g=se();return c(g,()=>n?.detail?.city),g})(),"|"]}}),s),c(e,u($,{get when(){return n?.detail?.province},get children(){return[(()=>{var g=oe();return c(g,()=>n?.detail?.province),g})(),"|"]}}),s),c(f,()=>C(n?.linkedBagsInfo)?.length),e})(),(()=>{var e=ae(),s=e.firstChild;return c(s,u(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"search...",colors:"#2b2b2b",handleClick:f=>R(f)})),e})()]}}),l),c(l,u(X,{fallback:e=>(()=>{var s=ce(),f=s.firstChild,g=f.nextSibling;return g.nextSibling,c(s,()=>e.toString(),g),s})(),get children(){return u(Y,{get fallback(){return(()=>{var e=N();return e.firstChild,c(e,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return u($,{get when(){return C(n?.linkedBagsInfo)?.length>0},get children(){return u(U,{get each(){return Q()},children:(e,s)=>u(de,{addressId:e,get item(){return n?.linkedBagsInfo?.[e]},get list(){return n?.linkedBagsInfo}})})}})}})}})),J(e=>Z(l,` ${re()?"":"width:94vw;"} margin: 0 auto`,e)),r})()}const ge=async o=>{let i={params:o},n=ee(703003);return i={...i,...n},await te(i)},v=o=>o||"",_=o=>o?" "+o:"",me=o=>{let i=o?.consigneeInfo;return _(i?.firstName)+_(i?.middleName)+_(i?.lastName)+_(i?.lastName2)},fe=o=>{let i=o?.consigneeInfo,n=_(i?.altPhoneNumber);return _(i?.phoneNumber)+(n?" |"+n:"")};export{ge as LookupBagId,Re as default,Be as scannedQRs,Le as setScannedQRs,De as setStatus,Oe as status};