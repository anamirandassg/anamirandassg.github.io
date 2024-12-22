const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DNqbN189.js","assets/index-CHpRMMcL.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-v9F2I7jT.js","assets/ButonHrm-DVEIjo4u.js","assets/SVG-CJrcVamg.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-C_mgMdRk.js","assets/debounces-DY3aBeyT.js","assets/FlexSpace-D8CPn30t.js","assets/DeliveryScanView-DBxab5Ex.js","assets/DialogHRM-B26Xh0E8.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryView-ViDpKtNJ.js","assets/PDFButton-C77ST4HX.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-CBL7hhp4.js","assets/Toast-DYKCeSqJ.js","assets/Toast-DLpFKn-Q.css","assets/components-BXMc9fiz.js","assets/InputHr-BKzQppQe.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{c as B,l as h,_ as b,a as S,au as q,u as z,k as W,r as j,s as H,b as J,i as c,d as u,S as $,O as C,H as K,F as Y,G as U,e as X,w as Z,g as ee,p as te,q as re,t as p,j as w,ae as ne}from"./index-CHpRMMcL.js";import"./DialogHRM-B26Xh0E8.js";import"./ShowScanDeliveryManifest-xBTvEuWV.js";import"./PDFButton-C77ST4HX.js";import{u as N}from"./debounces-DY3aBeyT.js";import"./html5-qrcode-scanner-C_mgMdRk.js";import"./DeliveryScanView-DBxab5Ex.js";import"./DeliveryView-ViDpKtNJ.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-CBL7hhp4.js";import"./Toast-DYKCeSqJ.js";import"./components-BXMc9fiz.js";var se=p("<h4>"),oe=p("<h5>"),ie=p('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),ae=p('<div class=" flxWrp spaceAround centerBx bottombx"><div style=padding:4px>'),le=p('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),E=p("<div> "),ce=p("<div> <!>.");const[Ne,Ee]=B(),P=h(()=>b(()=>import("./LoadingColorSpinner-DNqbN189.js"),__vite__mapDeps([0,1,2,3])));h(()=>b(()=>import("./DeliveryCamera-v9F2I7jT.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10])));const de=h(()=>b(()=>import("./DeliveryScanView-DBxab5Ex.js").then(o=>o.I),__vite__mapDeps([11,1,2,12,13,14,15,16,17,18,19,9,20])));h(()=>b(()=>import("./SVG-CJrcVamg.js"),__vite__mapDeps([6,1,2])));const ue=h(()=>b(()=>import("./InputHr-BKzQppQe.js"),__vite__mapDeps([21,1,2,22])));h(()=>b(()=>import("./FlexSpace-D8CPn30t.js"),__vite__mapDeps([10,1,2])));const[Pe,Be]=S("");function Le(){const[o,i]=S(0),[n,k]=B({});q();const[L,pe]=z(),[I,O]=S(" ");S(0);const D=N(i,500),R=r=>{O(r),D(w())};W(()=>{F()}),j(()=>{});const M=r=>(v(r?.ybestate)+"_"+v(r?.ybcity)+"_"+v(r?.ybreparto)+"_"+v(r?.ybstreet)+"_"+v(r?.ybstreetNo)).toLowerCase();H(async()=>{let r=await ge({id:L?.dId,checkAuth:!0});k("detail",r);let a={},m={},y={};r?.linkedBagsInfo?.map(t=>{if(t?.currentStatus!="YABA_99"){let d=M(t?.consigneeInfo),l=t.cidentity,e=t?.estate||t?.consigneeInfo?.ybestate,s=t?.city||t?.consigneeInfo?.ybcity,f=t?.consigneeInfo?.ybreparto;if(y[f]||(y[f]=1),m[s]||(m[s]=1),a[d]||(a[d]={city:s,estate:e,rpto:f,address:{ybstreetNo:t?.consigneeInfo?.ybstreetNo,ybstreet:t?.consigneeInfo?.ybstreet,ybapt:t?.consigneeInfo?.ybapt,ybbetwen1:t?.consigneeInfo?.ybbetwen1,ybbetwen2:t?.consigneeInfo?.ybbetwen2},currentStatus:t?.currentStatus,customers:{},bagsNo:0}),!a[d].customers[l]){let G={name:me(t),phoneNumber:fe(t),cid:t.cidentity},A={...t,...G};A.bagsNumb={},a[d].customers[l]=A}let g={bagnumber:t?.bagnumber,idairguide:"all",tracking:t?.tracking};a[d].customers[l].bagsNumb[t?.ssg_track_key]=g,a[d].bagsNo+=1}}),k("linkedBagsInfo",a),N(w()),i(w())});function T(){return"geolocation"in navigator}function V(r){ne({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function F(){T()?navigator.geolocation.getCurrentPosition(V):showMessage("Geolocation isn't supported by your browser")}const x=r=>r,[Q,{refetch:_e}]=J(o,async r=>{let a=n?.linkedBagsInfo,m=[];return I().length>0&&C(a).map((t,d)=>{let l=a[t],e=JSON.stringify(l).toLowerCase(),s=I().toLowerCase();e.indexOf(s)>0&&m.push(t)}),I().length===0&&(m=C(a)),m&&m.sort((t,d)=>{let l=x(t),e=x(d);return l<e?1:l>e?-1:0})});return(()=>{var r=le(),a=r.firstChild,m=a.firstChild,y=m.nextSibling,t=y.firstChild,d=a.nextSibling,l=d.nextSibling;return c(t,()=>n?.detail?.name),c(r,u($,{get when(){return n?.detail?.name},get fallback(){return(()=>{var e=E();return e.firstChild,c(e,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return[(()=>{var e=ie(),s=e.firstChild,f=s.firstChild;return c(e,u($,{get when(){return n?.detail?.city},get children(){return[(()=>{var g=se();return c(g,()=>n?.detail?.city),g})(),"|"]}}),s),c(e,u($,{get when(){return n?.detail?.province},get children(){return[(()=>{var g=oe();return c(g,()=>n?.detail?.province),g})(),"|"]}}),s),c(f,()=>C(n?.linkedBagsInfo)?.length),e})(),(()=>{var e=ae(),s=e.firstChild;return c(s,u(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"search...",colors:"#2b2b2b",handleClick:f=>R(f)})),e})()]}}),l),c(l,u(U,{fallback:e=>(()=>{var s=ce(),f=s.firstChild,g=f.nextSibling;return g.nextSibling,c(s,()=>e.toString(),g),s})(),get children(){return u(K,{get fallback(){return(()=>{var e=E();return e.firstChild,c(e,u(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return u($,{get when(){return C(n?.linkedBagsInfo)?.length>0},get children(){return u(Y,{get each(){return Q()},children:(e,s)=>u(de,{addressId:e,get item(){return n?.linkedBagsInfo?.[e]},get list(){return n?.linkedBagsInfo}})})}})}})}})),X(e=>Z(l,` ${ee()?"":"width:94vw;"} margin: 0 auto`,e)),r})()}const ge=async o=>{let i={params:o},n=te(703003);return i={...i,...n},await re(i)},v=o=>o||"",_=o=>o?" "+o:"",me=o=>{let i=o?.consigneeInfo;return _(i?.firstName)+_(i?.middleName)+_(i?.lastName)+_(i?.lastName2)},fe=o=>{let i=o?.consigneeInfo,n=_(i?.altPhoneNumber);return _(i?.phoneNumber)+(n?" |"+n:"")};export{ge as LookupBagId,Le as default,Ne as scannedQRs,Ee as setScannedQRs,Be as setStatus,Pe as status};
