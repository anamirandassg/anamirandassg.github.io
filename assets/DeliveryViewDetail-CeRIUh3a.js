const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Cs-vAZtB.js","assets/index-CVR6cbR4.js","assets/index-D7Gv5tA3.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-HmD9KlUZ.js","assets/ButonHrm-BQueQWdN.js","assets/SVG-C40NHNfg.js","assets/Util-C4Gv2Rs-.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-BGtARNDN.js","assets/debounces-CGr8JVfi.js","assets/FlexSpace-AvAmS2bv.js","assets/DeliveryScanView-OqCWJ4Uh.js","assets/DialogHRM-Cfll8vbC.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryView-DfUwP2tF.js","assets/PDFButton-CCQT0yk3.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BaZy4qZc.js","assets/Toast-8Bo8TXoA.js","assets/Toast-DLpFKn-Q.css","assets/components-Cpdvtj-J.js","assets/InputHr-DnhsB-bF.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{c as B,l as h,_ as b,a as S,Y as z,p as G,k as W,o as j,b as Y,j as H,i as c,d as u,S as $,x as J,F as K,E as U,e as X,q as Z,f as ee,t as p,M as te}from"./index-CVR6cbR4.js";import{O as C,c as re,f as ne,b as w}from"./Util-C4Gv2Rs-.js";import"./DialogHRM-Cfll8vbC.js";import"./ShowScanDeliveryManifest-6nIwiW0t.js";import"./PDFButton-CCQT0yk3.js";import{u as E}from"./debounces-CGr8JVfi.js";import"./html5-qrcode-scanner-BGtARNDN.js";import"./DeliveryScanView-OqCWJ4Uh.js";import"./DeliveryView-DfUwP2tF.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BaZy4qZc.js";import"./Toast-8Bo8TXoA.js";import"./components-Cpdvtj-J.js";var se=p("<h4>"),oe=p("<h5>"),ie=p('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),ae=p('<div class=" flxWrp spaceAround centerBx bottombx"><div style=padding:4px>'),le=p('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),N=p("<div> "),ce=p("<div> <!>.");const[Ne,Pe]=B(),P=h(()=>b(()=>import("./LoadingColorSpinner-Cs-vAZtB.js"),__vite__mapDeps([0,1,2,3])));h(()=>b(()=>import("./DeliveryCamera-HmD9KlUZ.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));const de=h(()=>b(()=>import("./DeliveryScanView-OqCWJ4Uh.js").then(o=>o.I),__vite__mapDeps([12,1,2,7,13,14,15,16,17,18,19,20,10,21])));h(()=>b(()=>import("./SVG-C40NHNfg.js"),__vite__mapDeps([6,1,2,7])));const ue=h(()=>b(()=>import("./InputHr-DnhsB-bF.js"),__vite__mapDeps([22,1,2,23])));h(()=>b(()=>import("./FlexSpace-AvAmS2bv.js"),__vite__mapDeps([11,1,2])));const[Be,Le]=S("");function Oe(){const[o,i]=S(0),[n,k]=B({});z();const[L,pe]=G(),[I,O]=S(" ");S(0);const D=E(i,500),R=r=>{O(r),D(w())};W(()=>{F()}),j(()=>{});const M=r=>(v(r?.ybestate)+"_"+v(r?.ybcity)+"_"+v(r?.ybreparto)+"_"+v(r?.ybstreet)+"_"+v(r?.ybstreetNo)).toLowerCase();Y(async()=>{let r=await ge({id:L?.dId,checkAuth:!0});k("detail",r);let a={},f={},y={};r?.linkedBagsInfo?.map(e=>{if(e?.currentStatus!="YABA_99"){let d=M(e?.consigneeInfo),l=e.cidentity,t=e?.estate||e?.consigneeInfo?.ybestate,s=e?.city||e?.consigneeInfo?.ybcity,m=e?.consigneeInfo?.ybreparto;if(y[m]||(y[m]=1),f[s]||(f[s]=1),a[d]||(a[d]={city:s,estate:t,rpto:m,address:{ybstreetNo:e?.consigneeInfo?.ybstreetNo,ybstreet:e?.consigneeInfo?.ybstreet,ybapt:e?.consigneeInfo?.ybapt,ybbetwen1:e?.consigneeInfo?.ybbetwen1,ybbetwen2:e?.consigneeInfo?.ybbetwen2},currentStatus:e?.currentStatus,customers:{},bagsNo:0}),!a[d].customers[l]){let q={name:fe(e),phoneNumber:me(e),cid:e.cidentity},A={...e,...q};A.bagsNumb={},a[d].customers[l]=A}let g={bagnumber:e?.bagnumber,idairguide:e?.guia,tracking:e?.tracking};a[d].customers[l].bagsNumb[e?.ssg_track_key]=g,a[d].bagsNo+=1}}),k("linkedBagsInfo",a),E(w()),i(w())});function T(){return"geolocation"in navigator}function V(r){te({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function F(){T()?navigator.geolocation.getCurrentPosition(V):showMessage("Geolocation isn't supported by your browser")}const x=r=>r,[Q,{refetch:_e}]=H(o,async r=>{let a=n?.linkedBagsInfo,f=[];return I().length>0&&C(a).map((e,d)=>{let l=a[e],t=JSON.stringify(l).toLowerCase(),s=I().toLowerCase();t.indexOf(s)>0&&f.push(e)}),I().length===0&&(f=C(a)),f&&f.sort((e,d)=>{let l=x(e),t=x(d);return l<t?1:l>t?-1:0})});return(()=>{var r=le(),a=r.firstChild,f=a.firstChild,y=f.nextSibling,e=y.firstChild,d=a.nextSibling,l=d.nextSibling;return c(e,()=>n?.detail?.name),c(r,u($,{get when(){return n?.detail?.name},get fallback(){return(()=>{var t=N();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=ie(),s=t.firstChild,m=s.firstChild;return c(t,u($,{get when(){return n?.detail?.city},get children(){return[(()=>{var g=se();return c(g,()=>n?.detail?.city),g})(),"|"]}}),s),c(t,u($,{get when(){return n?.detail?.province},get children(){return[(()=>{var g=oe();return c(g,()=>n?.detail?.province),g})(),"|"]}}),s),c(m,()=>C(n?.linkedBagsInfo)?.length),t})(),(()=>{var t=ae(),s=t.firstChild;return c(s,u(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"search...",colors:"#2b2b2b",handleClick:m=>R(m)})),t})()]}}),l),c(l,u(U,{fallback:t=>(()=>{var s=ce(),m=s.firstChild,g=m.nextSibling;return g.nextSibling,c(s,()=>t.toString(),g),s})(),get children(){return u(J,{get fallback(){return(()=>{var t=N();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return u($,{get when(){return C(n?.linkedBagsInfo)?.length>0},get children(){return u(K,{get each(){return Q()},children:(t,s)=>u(de,{addressId:t,get item(){return n?.linkedBagsInfo?.[t]},get list(){return n?.linkedBagsInfo}})})}})}})}})),X(t=>Z(l,` ${ee()?"":"width:94vw;"} margin: 0 auto`,t)),r})()}const ge=async o=>{let i={params:o},n=re(703003);return i={...i,...n},await ne(i)},v=o=>o||"",_=o=>o?" "+o:"",fe=o=>{let i=o?.consigneeInfo;return _(i?.firstName)+_(i?.middleName)+_(i?.lastName)+_(i?.lastName2)},me=o=>{let i=o?.consigneeInfo,n=_(i?.altPhoneNumber);return _(i?.phoneNumber)+(n?" |"+n:"")};export{ge as LookupBagId,Oe as default,Ne as scannedQRs,Pe as setScannedQRs,Le as setStatus,Be as status};
