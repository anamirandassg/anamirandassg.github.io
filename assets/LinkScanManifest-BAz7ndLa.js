const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-CkeG-861.js","assets/index-CSWRe9WA.js","assets/index-lCkr9jrN.css","assets/debounces-Hafqhk5o.js","assets/SVG-CnpMu39j.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningManifestManual-DZGHU2aO.js","assets/DialogHRM-xd_ePV8O.js","assets/DialogHRM-V9_lZntj.css","assets/Toast-CZ1R9Tq2.js","assets/Toast-DLpFKn-Q.css","assets/Scanning-GgqqAHL8.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-CoS-w3fX.js","assets/LoadingColorSpinner-BjsgGquL.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ButonHrm-PkqUPOIE.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-GQ70eDyU.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{c as f,l as d,_ as u,a as v,u as j,a8 as D,k as T,r as Q,s as G,i as r,d as p,F as K,a9 as z,o as h,e as N,f as W,g as X,S as H,p as B,q as M,O as U,t as E,M as w,aa as J,ab as Y,X as Z}from"./index-CSWRe9WA.js";import{i as ee}from"./Scanning-GgqqAHL8.js";import"./App.module-CbHnVtRQ.js";import"./Toast-CZ1R9Tq2.js";var te=E('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),se=E('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Associar a el Manifiesto </h2></div><div class=centerBx100 style=margin-top:20px>'),ae=E('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[ye,be]=f();d(()=>u(()=>import("./DropDwnSearch-CkeG-861.js"),__vite__mapDeps([0,1,2,3,4,5])));const ne=d(()=>u(()=>import("./ScanningManifestManual-DZGHU2aO.js"),__vite__mapDeps([6,1,2,7,8,9,10,11,12,13]))),ie=d(()=>u(()=>import("./SVG-CnpMu39j.js"),__vite__mapDeps([4,1,2]))),oe=d(()=>u(()=>import("./FlexSpace-CoS-w3fX.js"),__vite__mapDeps([14,1,2])));d(()=>u(()=>import("./LoadingColorSpinner-BjsgGquL.js"),__vite__mapDeps([15,1,2,16])));const re=d(()=>u(()=>import("./ButonHrm-PkqUPOIE.js"),__vite__mapDeps([17,1,2,4,18])));d(()=>u(()=>import("./CheckBoxSlide-GQ70eDyU.js"),__vite__mapDeps([19,1,2,20])));const[ke,he]=v(""),[S,ve]=v([]);function xe(){f({});const[t,n]=j(),[e,i]=f({search:""});f();const[_,c]=f(),g=D();f();const[m,ue]=v(""),[_e,O]=v("");T(()=>{R()}),Q(()=>{}),G(async()=>{if(await ee(),t?.mId){let s={id:t?.mId},o=await le(s);O(t?.mId),i("manifestObj",o),c("linked",o?.linkedBags)}});function A(){return"geolocation"in navigator}function C(s){Z({latitude:s?.coords?.latitude,longitude:s?.coords?.longitude})}function R(){A()?navigator.geolocation.getCurrentPosition(C):showMessage("Geolocation isn't supported by your browser")}const q=async()=>{let s={..._?.linked};S().map(a=>{let b=a.ssg_track_key;s?.[b]||(s[b]={idairguide:"all"})}),c("linked",s);let o={ssg_manifest_key:t?.mId},y={linkedBags:s};if(w()){let a={params:o,data2update:y,actionKey:709002};J.post(a,function(l,k){l||console.log("successfully posted on manifest link")}),Y.post(a,function(l,k){l||console.log("added to queue upload")})}else await ce(o,y);g("/manifest",{replace:!0})};return(()=>{var s=se(),o=s.firstChild;o.firstChild;var y=o.nextSibling;return r(o,p(re,{color:"#c8193c",label:"Associar Manifiesto",handleClick:q}),null),r(y,p(ne,{get status(){return m()},get locat(){return m()}}),null),r(y,p(H,{get when(){return S()?.length>0},get children(){return[te(),p(K,{get each(){return z(S(),"timeStamp",0)},children:(a,b)=>(()=>{var l=ae(),k=l.firstChild,I=k.firstChild,x=I.nextSibling,L=x.nextSibling,P=k.nextSibling,$=P.firstChild,F=$.nextSibling,V=F.nextSibling;return r(I,p(ie,{get name(){return h("M023009")?.statusListIcons?.[a?.currentStatus]},size:32})),x.style.setProperty("padding","8px"),r(x,()=>a?.idairguide),L.style.setProperty("padding","8px"),r(L,()=>a?.tracking),r(l,p(oe,{}),P),r($,()=>a?.city),r(V,()=>a?.consigneeInfo?.ybestate),N(()=>W(l,`client_item_box gWXAaj jlytmu manifest  ${X()?"isMobile":"centerBx"}`)),l})()})]}}),null),s})()}const le=async t=>{let n={params:t};if(w()){let e={...h("manifestList")?.[t?.id]},i=[],_=h("alinkM")?.[t?.id]?.data2update?.linkedBags||{},c=Object.assign({},e?.linkedBags,_);return c&&Object.keys(c)?.map(async g=>{if(g){let m=h("manifestByKeys")?.[g];i.push(m)}}),e.linkedBagsInfo=i,e}else{let e=B(703003);return n={...n,...e},await M(n)}},ce=async(t,n)=>{let e={params:t,data2update:n},i=B(709002);e={...e,...i};const _=await M(e),c=U(n?.linkedBags).map(async(g,m)=>{await de({ssg_track_key:g,idairguide:"all"},{currentManifestKey:t?.ssg_manifest_key})});return await Promise.all(c),_},de=async(t,n)=>{let e={params:t,data2update:n},i=B(809004);return e={...e,...i},await M(e)};export{xe as default,S as manifestScan,ye as scannedQRs,ve as setManifestScan,be as setScannedQRs,he as setStatus,ke as status,ce as updLinkedBags};
