const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-DUpDwc5L.js","assets/index-_PH4TKcl.js","assets/index-BRlA1Q7g.css","assets/debounces-DOKM3k9t.js","assets/SVG-CQDwSTDp.js","assets/Util-CJwQ4eI5.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningManifestManual-Bqc6vv9J.js","assets/DialogHRM-BmJ_288a.js","assets/DialogHRM-V9_lZntj.css","assets/Toast-4RNGB2fR.js","assets/Toast-DLpFKn-Q.css","assets/DashManifest-D5xqIp4O.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-iSeBU6N-.js","assets/LoadingColorSpinner-Beo7zloT.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ButonHrm-eQX_h9-B.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-D9kXXxmM.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{c as u,l as o,_ as l,a as f,r as V,u as j,b as q,o as Q,d as G,i as n,e as d,F as K,f as z,m as H,j as N,S as W,t as k,J as w,O as J}from"./index-_PH4TKcl.js";import{F as X,e as S,g as B,f as I,O as U,u as Y,G as Z,H as tt,I as et}from"./Util-CJwQ4eI5.js";import{handleListManifest as st}from"./DashManifest-D5xqIp4O.js";import"./App.module-CbHnVtRQ.js";import"./DialogHRM-BmJ_288a.js";var at=k('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),it=k('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Associar a el Manifiesto </h2></div><div class=centerBx100 style=margin-top:20px>'),nt=k('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[xt,St]=u();o(()=>l(()=>import("./DropDwnSearch-DUpDwc5L.js"),__vite__mapDeps([0,1,2,3,4,5,6])));const rt=o(()=>l(()=>import("./ScanningManifestManual-Bqc6vv9J.js"),__vite__mapDeps([7,1,2,5,8,9,10,11,12,13,14]))),ot=o(()=>l(()=>import("./SVG-CQDwSTDp.js"),__vite__mapDeps([4,1,2,5]))),lt=o(()=>l(()=>import("./FlexSpace-iSeBU6N-.js"),__vite__mapDeps([15,1,2])));o(()=>l(()=>import("./LoadingColorSpinner-Beo7zloT.js"),__vite__mapDeps([16,1,2,17])));const ct=o(()=>l(()=>import("./ButonHrm-eQX_h9-B.js"),__vite__mapDeps([18,1,2,4,5,19])));o(()=>l(()=>import("./CheckBoxSlide-D9kXXxmM.js"),__vite__mapDeps([20,1,2,21])));const[kt,Bt]=f(""),[x,dt]=f([]);function It(){u({});const[t,i]=V(),[a,c]=u({search:""});u();const[_,m]=u(),y=j();u();const[b,gt]=f(""),[pt,O]=f("");q(()=>{R()}),Q(()=>{}),G(async()=>{if(await st(),t?.mId){let s={id:t?.mId},r=await ut(s);O(t?.mId),c("manifestObj",r),m("linked",r?.linkedBags)}});function A(){return"geolocation"in navigator}function C(s){J({latitude:s?.coords?.latitude,longitude:s?.coords?.longitude})}function R(){A()?navigator.geolocation.getCurrentPosition(C):showMessage("Geolocation isn't supported by your browser")}const F=async()=>{let s={..._?.linked};x().map(e=>{let h=e.ssg_track_key;s?.[h]||(s[h]={idairguide:e?.guia})}),m("linked",s);let r={ssg_manifest_key:t?.mId},g={linkedBags:s};if(w()){let e={...S("manifestList")};e?.[t?.mId]?.linkedBags||(e[t?.mId].linkedBags={}),e[t?.mId].linkedBags=s,Y("manifestList",e),await Z(et,tt,e)}else await _t(r,g);y(`/manifest-detail?mId=${t?.mId}`,{replace:!0}),setTimeout(()=>{dt([])},450)};return(()=>{var s=it(),r=s.firstChild;r.firstChild;var g=r.nextSibling;return n(r,d(ct,{color:"#c8193c",label:"Associar Manifiesto",handleClick:F}),null),n(g,d(rt,{get status(){return b()},get locat(){return b()}}),null),n(g,d(W,{get when(){return x()?.length>0},get children(){return[at(),d(K,{get each(){return X(x(),"timeStamp",0)},children:(e,h)=>(()=>{var p=nt(),M=p.firstChild,L=M.firstChild,v=L.nextSibling,E=v.nextSibling,P=M.nextSibling,$=P.firstChild,D=$.nextSibling,T=D.nextSibling;return n(L,d(ot,{get name(){return S("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),v.style.setProperty("padding","8px"),n(v,()=>e?.idairguide),E.style.setProperty("padding","8px"),n(E,()=>e?.tracking),n(p,d(lt,{}),P),n($,()=>e?.city),n(T,()=>e?.consigneeInfo?.ybestate),z(()=>H(p,`client_item_box gWXAaj jlytmu manifest  ${N()?"isMobile":"centerBx"}`)),p})()})]}}),null),s})()}const ut=async t=>{let i={params:t};if(w())return{...S("manifestList")?.[t?.id]};{let a=B(703003);return i={...i,...a},await I(i)}},_t=async(t,i)=>{let a={params:t,data2update:i},c=B(709002);a={...a,...c};const _=await I(a),m=U(i?.linkedBags).map(async(y,b)=>{await mt({ssg_track_key:y,idairguide:"all"},{currentManifestKey:t?.ssg_manifest_key})});return await Promise.all(m),_},mt=async(t,i)=>{let a={params:t,data2update:i},c=B(809004);return a={...a,...c},await I(a)};export{It as default,x as manifestScan,xt as scannedQRs,dt as setManifestScan,St as setScannedQRs,Bt as setStatus,kt as status,_t as updLinkedBags};
