const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-C1NyTMhI.js","assets/index-Cgtasu4w.js","assets/index-D4QuRvi-.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/Item2Delivery-BZBc8tGH.js","assets/Util-dbxHFpkD.js","assets/index-Ci0zXM0r.js","assets/manifestList-CSHEgbpJ.js","assets/ContainerElasticView-LzOd6fDI.css","assets/SVG-Dm8x9331.js","assets/FlexSpace-Dq5NE1WW.js","assets/ShowScanDeliveryManifest-BiYtSAq2.js","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/DashManifest-BpbWq5nk.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/DialogHRM-DzfafcxX.js","assets/DialogHRM-V9_lZntj.css","assets/ManifestDetails-B7MpnxXS.js","assets/debounces-DKhB0Q71.js","assets/globalSignal-DzAhHNVG.js","assets/fontkit.es-DEjOtITv.js","assets/ButonHrm-BLkvlmpn.js","assets/ButonHrm-BSeWNUGQ.css","assets/DeliveryView-Bv6B5lkS.js","assets/qrcode-C5vWJp7P.js","assets/Toast-zpqYXU20.js","assets/Toast-DLpFKn-Q.css","assets/ViewErrorsModal-CXxVbssK.js"])))=>i.map(i=>d[i]);
import{c as G,l as S,_ as y,a as Q,I as ie,u as re,C as ne,h as se,o as le,m as ae,i as e,d as t,f as V,e as oe,t as u,S as _,q as W,F as q,E as H,g as k,s as ce,n as j}from"./index-Cgtasu4w.js";import{g as K,O as f,b as de}from"./Util-dbxHFpkD.js";import{i as A,s as ue}from"./globalSignal-DzAhHNVG.js";import{OpenModal as J}from"./DialogHRM-DzfafcxX.js";import{stop2Deliver as o}from"./DeliveryView-Bv6B5lkS.js";import"./fontkit.es-DEjOtITv.js";import"./qrcode-C5vWJp7P.js";import"./Toast-zpqYXU20.js";import"./index-Ci0zXM0r.js";import"./DashManifest-BpbWq5nk.js";import"./App.module-CbHnVtRQ.js";var ve=u("<h5 class=rpto>"),ge=u("<h5>"),_e=u('<div><div class=" flxWrp spaceAround centerBx"><h2>Completar Entrega</h2><div class="icon_status centerBx"></div></div><div style=padding:16px><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="icon_status centerBx"></div><div class=bagsNo></div></div><div><div class=vertseparator></div><div class=vertseparator></div><h4></h4></div></div><p class=" textleft "style=padding:18px>;</p><div>'),U=u("<div> <!>."),X=u("<div> "),me=u('<div class="_dsplFlx flxWrp spaceAround "style=" margin:0 auto;;padding:8px 9px;">'),he=u('<div class="icon_status centerBx">'),xe=u("<div style=max-width:160px;margin:8px;><h5>"),T=u('<div class="_dsplFlx bottombx flxWrp spaceAround ">'),pe=u('<div><div class=separator></div><div class="spaceAround centerBx"><div class="icon_status centerBx"></div></div><div><div class=" centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=" centerBx"><div class="icon_status centerBx"></div><h4></h4></div><div class=" centerBx"><div class="icon_status centerBx"></div><h5>');const[ze,Le]=G(),Y=S(()=>y(()=>import("./LoadingColorSpinner-C1NyTMhI.js"),__vite__mapDeps([0,1,2,3]))),$e=S(()=>y(()=>import("./Item2Delivery-BZBc8tGH.js"),__vite__mapDeps([4,1,2,5,6,7,8]))),x=S(()=>y(()=>import("./SVG-Dm8x9331.js"),__vite__mapDeps([9,1,2,6]))),Z=S(()=>y(()=>import("./FlexSpace-Dq5NE1WW.js"),__vite__mapDeps([10,1,2]))),be=S(()=>y(()=>import("./ShowScanDeliveryManifest-BiYtSAq2.js"),__vite__mapDeps([11,1,2,12,6,13,14,15,5,16,17,18,7,19,20,21,22,9,23,24,25,26,27]))),fe=S(()=>y(()=>import("./ViewErrorsModal-CXxVbssK.js"),__vite__mapDeps([28,1,2,20,5,6,16,17,26,27]))),[Oe,Ve]=Q(""),[O,Ne]=G();function Te(n){ie(),Q(0);const[p,a]=re(),v=ne();se(()=>{g()}),le(()=>{}),ae(async()=>{o?.stopD?.addressId||v(`/delivery-detail?dId=${p?.dId}`,{replace:!0})});function r(){return"geolocation"in navigator}function s(c){ue({latitude:c?.coords?.latitude,longitude:c?.coords?.longitude})}function g(){r()?navigator.geolocation.getCurrentPosition(s):showMessage("Geolocation isn't supported by your browser")}const D=c=>{c.cidentity,{...o?.stopD}},$=c=>{de("cameraScanDelivery")?.clear()},M=c=>{let m=K(),d={};d.id=m,d.closeEvent=$,d.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},d.content=t(be,{get item(){return o?.stopD},modalId:m,callback:D}),J(d)};return(()=>{var c=_e(),m=c.firstChild,d=m.firstChild,B=d.nextSibling,b=m.nextSibling,C=b.firstChild,E=C.firstChild,z=E.nextSibling,l=C.nextSibling,I=l.firstChild,w=I.nextSibling,ee=w.nextSibling,L=b.nextSibling,te=L.firstChild,N=L.nextSibling;return B.$$click=M,e(B,t(x,{name:"qr_code",size:32,color:"#2b2b2b"})),e(E,t(x,{name:"open_package_file_outline",size:32})),e(z,()=>o?.stopD?.bagsNo),e(b,t(Z,{}),l),e(l,t(_,{get when(){return o?.stopD?.consigneeInfo?.ybreparto},get children(){return[(()=>{var i=ve();return e(i,()=>o?.stopD?.consigneeInfo?.ybreparto),i})(),"|"]}}),I),e(l,t(_,{get when(){return o?.stopD?.city},get children(){return[(()=>{var i=ge();return e(i,()=>o?.stopD?.city),i})(),"|"]}}),w),e(ee,()=>o?.stopD?.estate),e(L,()=>o?.stopD?.addressId,te),e(N,t(H,{fallback:i=>(()=>{var h=U(),P=h.firstChild,R=P.nextSibling;return R.nextSibling,e(h,()=>i.toString(),R),h})(),get children(){return t(W,{get fallback(){return(()=>{var i=X();return i.firstChild,e(i,t(Y,{stroke:"rgb(200 25 60 / 1)",size:62}),null),i})()},get children(){return t(_,{get when(){return f(o?.stopD?.customers)?.length>0},get children(){return t(q,{get each(){return f(o?.stopD?.customers)},children:(i,h)=>t(ye,{get item(){return o?.stopD?.customers?.[i]}})})}})}})}})),V(i=>{var h=` ${A(),"centerBx"}  topbx `,P=` ${A(),"centerBx"} bottombx`,R=` ${A()?"":"width:94vw;"} margin: 0 auto; ; padding: 18px 29px;`;return h!==i.e&&k(b,i.e=h),P!==i.t&&k(l,i.t=P),i.a=ce(N,R,i.a),i},{e:void 0,t:void 0,a:void 0}),c})()}const Se=n=>(()=>{var p=me();return e(p,t(H,{fallback:a=>(()=>{var v=U(),r=v.firstChild,s=r.nextSibling;return s.nextSibling,e(v,()=>a.toString(),s),v})(),get children(){return t(W,{get fallback(){return(()=>{var a=X();return a.firstChild,e(a,t(Y,{stroke:"rgb(200 25 60 / 1)",size:62}),null),a})()},get children(){return t(_,{get when(){return f(n?.list)?.length>0},get children(){return t(q,{get each(){return f(n?.list)},children:(a,v)=>(()=>{var r=xe(),s=r.firstChild;return j(r,"data-id",`${a}`),e(r,t(_,{get when(){return O?.[n?.cid]?.[a]==="ST200"},get children(){var g=he();return e(g,t(x,{name:"success",size:32,color:"var(--hrm-palette-tertiary50)"})),g}}),s),e(s,()=>n?.list?.[a]?.bagnumber),V(()=>k(r,`bag_number centerBx ${O?.[n?.cid]?.[a]==="ST200"?"checked":""} `)),r})()})}})}})}})),p})(),ye=n=>{const p=async()=>{},a=async()=>{let r=K(),s={};s.id=r,s.closeEvent=p,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=t(fe,{get item(){return n?.item},modalId:r}),J(s)},v=()=>{let r=f(n?.item?.bagsNumb)?.length,s=f(O?.[n?.item?.cidentity])?.length;return r===s};return(()=>{var r=pe(),s=r.firstChild,g=s.nextSibling,D=g.firstChild,$=g.nextSibling,M=$.firstChild,c=M.firstChild,m=c.nextSibling,d=M.nextSibling,B=d.firstChild,b=B.nextSibling,C=d.nextSibling,E=C.firstChild,z=E.nextSibling;return e(g,t(Z,{}),D),D.$$click=a,e(D,t(x,{name:"alert",size:32})),e(c,t(x,{name:"account",size:24})),e(m,()=>n?.item?.name),e($,t(F,{}),d),e(B,t(x,{name:"cellphone",size:24})),e(b,()=>n?.item?.phoneNumber),e($,t(F,{}),C),e(E,t(x,{name:"credit_card",size:24})),e(z,()=>n?.item?.cidentity),e(r,t(_,{get when(){return!v()},get children(){var l=T();return e(l,t(Se,{get list(){return n?.item?.bagsNumb},get cid(){return n?.item?.cidentity}})),l}}),null),e(r,t(_,{get when(){return v()},get children(){var l=T();return e(l,t($e,{get list(){return n?.item?.bagsNumb},get cid(){return n?.item?.cidentity},get item(){return n?.item}})),l}}),null),V(l=>{var I=n?.item?.cidentity,w=` ${A()?"":"centerBx"} bottombx`;return I!==l.e&&j(r,"data-cid",l.e=I),w!==l.t&&k($,l.t=w),l},{e:void 0,t:void 0}),r})()},F=()=>t(_,{get when(){return!A()},children:"|"});oe(["click"]);export{F as SepOnMobile,Te as default,ze as scannedQRs,Le as setScannedQRs,Ve as setStatus,Ne as setStatusD,Oe as status,O as statusD};