const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-DU2RokID.js","assets/index-D0zGioQA.js","assets/index-DvBVPk7j.css","assets/debounces-BtxWZRx0.js","assets/SVG-BDd4Tgjc.js","assets/Util-C4Gv2Rs-.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningManifestManual-BbeDqcDS.js","assets/DialogHRM-Dm5hHt4I.js","assets/DialogHRM-V9_lZntj.css","assets/Toast-vo5gGSTV.js","assets/Toast-DLpFKn-Q.css","assets/Scanning-DaMarasu.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-BP1xokXW.js","assets/LoadingColorSpinner-7bm8QQMW.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ButonHrm-Bo6I0rBc.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-D9nvJrU8.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{c as f,l as d,_ as u,a as v,p as j,L as q,k as T,o as Q,b as G,i as r,d as p,F as K,e as z,g as N,f as W,S as H,t as S,z as w,M as U}from"./index-D0zGioQA.js";import{B as X,d as h,c as M,f as E,O as J,C as Y,D as Z}from"./Util-C4Gv2Rs-.js";import{i as ee}from"./Scanning-DaMarasu.js";import"./App.module-CbHnVtRQ.js";import"./Toast-vo5gGSTV.js";var te=S('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),se=S('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Associar a el Manifiesto </h2></div><div class=centerBx100 style=margin-top:20px>'),ae=S('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[be,ke]=f();d(()=>u(()=>import("./DropDwnSearch-DU2RokID.js"),__vite__mapDeps([0,1,2,3,4,5,6])));const ne=d(()=>u(()=>import("./ScanningManifestManual-BbeDqcDS.js"),__vite__mapDeps([7,1,2,5,8,9,10,11,12,13,14]))),ie=d(()=>u(()=>import("./SVG-BDd4Tgjc.js"),__vite__mapDeps([4,1,2,5]))),oe=d(()=>u(()=>import("./FlexSpace-BP1xokXW.js"),__vite__mapDeps([15,1,2])));d(()=>u(()=>import("./LoadingColorSpinner-7bm8QQMW.js"),__vite__mapDeps([16,1,2,17])));const re=d(()=>u(()=>import("./ButonHrm-Bo6I0rBc.js"),__vite__mapDeps([18,1,2,4,5,19])));d(()=>u(()=>import("./CheckBoxSlide-D9nvJrU8.js"),__vite__mapDeps([20,1,2,21])));const[he,ve]=v(""),[B,xe]=v([]);function Be(){f({});const[t,n]=j(),[e,i]=f({search:""});f();const[_,l]=f(),g=q();f();const[m,ue]=v(""),[_e,O]=v("");T(()=>{R()}),Q(()=>{}),G(async()=>{if(await ee(),t?.mId){let s={id:t?.mId},o=await le(s);O(t?.mId),i("manifestObj",o),l("linked",o?.linkedBags)}});function A(){return"geolocation"in navigator}function C(s){U({latitude:s?.coords?.latitude,longitude:s?.coords?.longitude})}function R(){A()?navigator.geolocation.getCurrentPosition(C):showMessage("Geolocation isn't supported by your browser")}const D=async()=>{let s={..._?.linked};B().map(a=>{let b=a.ssg_track_key;s?.[b]||(s[b]={idairguide:"all"})}),l("linked",s);let o={ssg_manifest_key:t?.mId},y={linkedBags:s};if(w()){let a={params:o,data2update:y,actionKey:709002};Y.post(a,function(c,k){c||console.log("successfully posted on manifest link")}),Z.post(a,function(c,k){c||console.log("added to queue upload")})}else await ce(o,y);g("/manifest",{replace:!0})};return(()=>{var s=se(),o=s.firstChild;o.firstChild;var y=o.nextSibling;return r(o,p(re,{color:"#c8193c",label:"Associar Manifiesto",handleClick:D}),null),r(y,p(ne,{get status(){return m()},get locat(){return m()}}),null),r(y,p(H,{get when(){return B()?.length>0},get children(){return[te(),p(K,{get each(){return X(B(),"timeStamp",0)},children:(a,b)=>(()=>{var c=ae(),k=c.firstChild,I=k.firstChild,x=I.nextSibling,L=x.nextSibling,P=k.nextSibling,$=P.firstChild,F=$.nextSibling,V=F.nextSibling;return r(I,p(ie,{get name(){return h("M023009")?.statusListIcons?.[a?.currentStatus]},size:32})),x.style.setProperty("padding","8px"),r(x,()=>a?.idairguide),L.style.setProperty("padding","8px"),r(L,()=>a?.tracking),r(c,p(oe,{}),P),r($,()=>a?.city),r(V,()=>a?.consigneeInfo?.ybestate),z(()=>N(c,`client_item_box gWXAaj jlytmu manifest  ${W()?"isMobile":"centerBx"}`)),c})()})]}}),null),s})()}const le=async t=>{let n={params:t};if(w()){let e={...h("manifestList")?.[t?.id]},i=[],_=h("alinkM")?.[t?.id]?.data2update?.linkedBags||{},l=Object.assign({},e?.linkedBags,_);return e.linkedBags=l,l&&Object.keys(l)?.map(async g=>{if(g){let m=h("manifestByKeys")?.[g];i.push(m)}}),e.linkedBagsInfo=i,e}else{let e=M(703003);return n={...n,...e},await E(n)}},ce=async(t,n)=>{let e={params:t,data2update:n},i=M(709002);e={...e,...i};const _=await E(e),l=J(n?.linkedBags).map(async(g,m)=>{await de({ssg_track_key:g,idairguide:"all"},{currentManifestKey:t?.ssg_manifest_key})});return await Promise.all(l),_},de=async(t,n)=>{let e={params:t,data2update:n},i=M(809004);return e={...e,...i},await E(e)};export{Be as default,B as manifestScan,be as scannedQRs,xe as setManifestScan,ke as setScannedQRs,ve as setStatus,he as status,ce as updLinkedBags};
