const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-MCYpwldN.js","assets/index-DDHcSRy_.js","assets/index-mNJWtuMT.css","assets/debounces-CdK2IOhV.js","assets/SVG-B55pLqwj.js","assets/Util-DZlMHKqJ.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningManifestManual-BypnndyN.js","assets/DialogHRM-Brz9h3wQ.js","assets/DialogHRM-V9_lZntj.css","assets/Toast-Dv7c-d-M.js","assets/Toast-DLpFKn-Q.css","assets/Scanning-DCy1Eb4g.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-a5kpBgSD.js","assets/LoadingColorSpinner-CRP5t5zs.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ButonHrm-BkP9p0bQ.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-DjPFOW0B.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{c as f,l as d,_ as u,a as v,r as V,u as q,b as T,o as Q,e as G,i as r,f as p,F as K,h as z,m as N,j as W,S as H,t as B,A as w,M as U}from"./index-DDHcSRy_.js";import{D as X,e as h,g as M,f as E,O as J,E as Y,F as Z}from"./Util-DZlMHKqJ.js";import{i as ee}from"./Scanning-DCy1Eb4g.js";import"./App.module-CbHnVtRQ.js";import"./Toast-Dv7c-d-M.js";var te=B('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),se=B('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Associar a el Manifiesto </h2></div><div class=centerBx100 style=margin-top:20px>'),ae=B('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[be,ke]=f();d(()=>u(()=>import("./DropDwnSearch-MCYpwldN.js"),__vite__mapDeps([0,1,2,3,4,5,6])));const ne=d(()=>u(()=>import("./ScanningManifestManual-BypnndyN.js"),__vite__mapDeps([7,1,2,5,8,9,10,11,12,13,14]))),ie=d(()=>u(()=>import("./SVG-B55pLqwj.js"),__vite__mapDeps([4,1,2,5]))),oe=d(()=>u(()=>import("./FlexSpace-a5kpBgSD.js"),__vite__mapDeps([15,1,2])));d(()=>u(()=>import("./LoadingColorSpinner-CRP5t5zs.js"),__vite__mapDeps([16,1,2,17])));const re=d(()=>u(()=>import("./ButonHrm-BkP9p0bQ.js"),__vite__mapDeps([18,1,2,4,5,19])));d(()=>u(()=>import("./CheckBoxSlide-DjPFOW0B.js"),__vite__mapDeps([20,1,2,21])));const[he,ve]=v(""),[S,xe]=v([]);function Se(){f({});const[t,n]=V(),[e,i]=f({search:""});f();const[_,l]=f(),g=q();f();const[m,ue]=v(""),[_e,O]=v("");T(()=>{R()}),Q(()=>{}),G(async()=>{if(await ee(),t?.mId){let s={id:t?.mId},o=await le(s);O(t?.mId),i("manifestObj",o),l("linked",o?.linkedBags)}});function A(){return"geolocation"in navigator}function C(s){U({latitude:s?.coords?.latitude,longitude:s?.coords?.longitude})}function R(){A()?navigator.geolocation.getCurrentPosition(C):showMessage("Geolocation isn't supported by your browser")}const F=async()=>{let s={..._?.linked};S().map(a=>{let b=a.ssg_track_key;s?.[b]||(s[b]={idairguide:"all"})}),l("linked",s);let o={ssg_manifest_key:t?.mId},y={linkedBags:s};if(w()){let a={params:o,data2update:y,actionKey:709002};Y.post(a,function(c,k){c||console.log("successfully posted on manifest link")}),Z.post(a,function(c,k){c||console.log("added to queue upload")})}else await ce(o,y);g("/manifest",{replace:!0})};return(()=>{var s=se(),o=s.firstChild;o.firstChild;var y=o.nextSibling;return r(o,p(re,{color:"#c8193c",label:"Associar Manifiesto",handleClick:F}),null),r(y,p(ne,{get status(){return m()},get locat(){return m()}}),null),r(y,p(H,{get when(){return S()?.length>0},get children(){return[te(),p(K,{get each(){return X(S(),"timeStamp",0)},children:(a,b)=>(()=>{var c=ae(),k=c.firstChild,I=k.firstChild,x=I.nextSibling,L=x.nextSibling,P=k.nextSibling,$=P.firstChild,j=$.nextSibling,D=j.nextSibling;return r(I,p(ie,{get name(){return h("M023009")?.statusListIcons?.[a?.currentStatus]},size:32})),x.style.setProperty("padding","8px"),r(x,()=>a?.idairguide),L.style.setProperty("padding","8px"),r(L,()=>a?.tracking),r(c,p(oe,{}),P),r($,()=>a?.city),r(D,()=>a?.consigneeInfo?.ybestate),z(()=>N(c,`client_item_box gWXAaj jlytmu manifest  ${W()?"isMobile":"centerBx"}`)),c})()})]}}),null),s})()}const le=async t=>{let n={params:t};if(w()){let e={...h("manifestList")?.[t?.id]},i=[],_=h("alinkM")?.[t?.id]?.data2update?.linkedBags||{},l=Object.assign({},e?.linkedBags,_);return e.linkedBags=l,l&&Object.keys(l)?.map(async g=>{if(g){let m=h("manifestByKeys")?.[g];i.push(m)}}),e.linkedBagsInfo=i,e}else{let e=M(703003);return n={...n,...e},await E(n)}},ce=async(t,n)=>{let e={params:t,data2update:n},i=M(709002);e={...e,...i};const _=await E(e),l=J(n?.linkedBags).map(async(g,m)=>{await de({ssg_track_key:g,idairguide:"all"},{currentManifestKey:t?.ssg_manifest_key})});return await Promise.all(l),_},de=async(t,n)=>{let e={params:t,data2update:n},i=M(809004);return e={...e,...i},await E(e)};export{Se as default,S as manifestScan,be as scannedQRs,xe as setManifestScan,ke as setScannedQRs,ve as setStatus,he as status,ce as updLinkedBags};
