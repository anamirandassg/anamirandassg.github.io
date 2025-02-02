const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DeYqKzA4.js","assets/index-B0KzbsV_.js","assets/index-BRlA1Q7g.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-CtKlo-dy.js","assets/ButonHrm-BdKZwCgd.js","assets/SVG-DnB8738D.js","assets/Util-BFTPhrO4.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-DZzJ0aCp.js","assets/debounces-CIgggoqC.js","assets/FlexSpace-BvhqL2Al.js","assets/DeliveryScanView-U_iUqOOV.js","assets/DialogHRM-CUN-KpSc.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryView-BM_EAvRy.js","assets/fontkit.es-CdiTDqf_.js","assets/qrcode-DHy8FFhS.js","assets/Toast-CkRFmwGc.js","assets/Toast-DLpFKn-Q.css","assets/components-CnL8IDeT.js","assets/InputHr-Bg1_3Vq4.js","assets/InputHr-BXFw4d2l.css"])))=>i.map(i=>d[i]);
import{c as B,l as h,_ as b,a as S,a0 as G,r as W,b as j,o as q,d as H,p as J,i as c,e as u,S as $,z as K,F as Y,E as U,f as X,s as Z,j as ee,t as p,O as te}from"./index-B0KzbsV_.js";import{O as C,g as re,f as ne,a as w}from"./Util-BFTPhrO4.js";import"./DialogHRM-CUN-KpSc.js";import"./ShowScanDeliveryManifest-BQHA0WYy.js";import"./fontkit.es-CdiTDqf_.js";import{u as E}from"./debounces-CIgggoqC.js";import"./html5-qrcode-scanner-DZzJ0aCp.js";import"./DeliveryScanView-U_iUqOOV.js";import"./DeliveryView-BM_EAvRy.js";import"./qrcode-DHy8FFhS.js";import"./Toast-CkRFmwGc.js";import"./components-CnL8IDeT.js";var se=p("<h4>"),oe=p("<h5>"),ie=p('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),ae=p('<div class=" flxWrp spaceAround centerBx bottombx"><div style=padding:4px>'),le=p('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),N=p("<div> "),ce=p("<div> <!>.");const[Ee,Ne]=B(),P=h(()=>b(()=>import("./LoadingColorSpinner-DeYqKzA4.js"),__vite__mapDeps([0,1,2,3])));h(()=>b(()=>import("./DeliveryCamera-CtKlo-dy.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));const de=h(()=>b(()=>import("./DeliveryScanView-U_iUqOOV.js").then(o=>o.I),__vite__mapDeps([12,1,2,7,13,14,15,16,17,18,19,10,20])));h(()=>b(()=>import("./SVG-DnB8738D.js"),__vite__mapDeps([6,1,2,7])));const ue=h(()=>b(()=>import("./InputHr-Bg1_3Vq4.js"),__vite__mapDeps([21,1,2,22])));h(()=>b(()=>import("./FlexSpace-BvhqL2Al.js"),__vite__mapDeps([11,1,2])));const[Pe,Be]=S("");function Oe(){const[o,i]=S(0),[n,k]=B({});G();const[O,pe]=W(),[I,L]=S(" ");S(0);const D=E(i,500),R=r=>{L(r),D(w())};j(()=>{F()}),q(()=>{});const M=r=>(v(r?.ybestate)+"_"+v(r?.ybcity)+"_"+v(r?.ybreparto)+"_"+v(r?.ybstreet)+"_"+v(r?.ybstreetNo)).toLowerCase();H(async()=>{let r=await ge({id:O?.dId,checkAuth:!0});k("detail",r);let a={},f={},y={};r?.linkedBagsInfo?.map(e=>{if(e?.currentStatus!="YABA_99"){let d=M(e?.consigneeInfo),l=e.cidentity,t=e?.estate||e?.consigneeInfo?.ybestate,s=e?.city||e?.consigneeInfo?.ybcity,m=e?.consigneeInfo?.ybreparto;if(y[m]||(y[m]=1),f[s]||(f[s]=1),a[d]||(a[d]={city:s,estate:t,rpto:m,address:{ybstreetNo:e?.consigneeInfo?.ybstreetNo,ybstreet:e?.consigneeInfo?.ybstreet,ybapt:e?.consigneeInfo?.ybapt,ybbetwen1:e?.consigneeInfo?.ybbetwen1,ybbetwen2:e?.consigneeInfo?.ybbetwen2},currentStatus:e?.currentStatus,customers:{},bagsNo:0}),!a[d].customers[l]){let z={name:fe(e),phoneNumber:me(e),cid:e.cidentity},A={...e,...z};A.bagsNumb={},a[d].customers[l]=A}let g={bagnumber:e?.bagnumber,idairguide:e?.guia,tracking:e?.tracking};a[d].customers[l].bagsNumb[e?.ssg_track_key]=g,a[d].bagsNo+=1}}),k("linkedBagsInfo",a),E(w()),i(w())});function T(){return"geolocation"in navigator}function V(r){te({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function F(){T()?navigator.geolocation.getCurrentPosition(V):showMessage("Geolocation isn't supported by your browser")}const x=r=>r,[Q,{refetch:_e}]=J(o,async r=>{let a=n?.linkedBagsInfo,f=[];return I().length>0&&C(a).map((e,d)=>{let l=a[e],t=JSON.stringify(l).toLowerCase(),s=I().toLowerCase();t.indexOf(s)>0&&f.push(e)}),I().length===0&&(f=C(a)),f&&f.sort((e,d)=>{let l=x(e),t=x(d);return l<t?1:l>t?-1:0})});return(()=>{var r=le(),a=r.firstChild,f=a.firstChild,y=f.nextSibling,e=y.firstChild,d=a.nextSibling,l=d.nextSibling;return c(e,()=>n?.detail?.name),c(r,u($,{get when(){return n?.detail?.name},get fallback(){return(()=>{var t=N();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=ie(),s=t.firstChild,m=s.firstChild;return c(t,u($,{get when(){return n?.detail?.city},get children(){return[(()=>{var g=se();return c(g,()=>n?.detail?.city),g})(),"|"]}}),s),c(t,u($,{get when(){return n?.detail?.province},get children(){return[(()=>{var g=oe();return c(g,()=>n?.detail?.province),g})(),"|"]}}),s),c(m,()=>C(n?.linkedBagsInfo)?.length),t})(),(()=>{var t=ae(),s=t.firstChild;return c(s,u(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"search...",colors:"#2b2b2b",handleClick:m=>R(m)})),t})()]}}),l),c(l,u(U,{fallback:t=>(()=>{var s=ce(),m=s.firstChild,g=m.nextSibling;return g.nextSibling,c(s,()=>t.toString(),g),s})(),get children(){return u(K,{get fallback(){return(()=>{var t=N();return t.firstChild,c(t,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return u($,{get when(){return C(n?.linkedBagsInfo)?.length>0},get children(){return u(Y,{get each(){return Q()},children:(t,s)=>u(de,{addressId:t,get item(){return n?.linkedBagsInfo?.[t]},get list(){return n?.linkedBagsInfo}})})}})}})}})),X(t=>Z(l,` ${ee()?"":"width:94vw;"} margin: 0 auto`,t)),r})()}const ge=async o=>{let i={params:o},n=re(703003);return i={...i,...n},await ne(i)},v=o=>o||"",_=o=>o?" "+o:"",fe=o=>{let i=o?.consigneeInfo;return _(i?.firstName)+_(i?.middleName)+_(i?.lastName)+_(i?.lastName2)},me=o=>{let i=o?.consigneeInfo,n=_(i?.altPhoneNumber);return _(i?.phoneNumber)+(n?" |"+n:"")};export{ge as LookupBagId,Oe as default,Ee as scannedQRs,Ne as setScannedQRs,Be as setStatus,Pe as status};
