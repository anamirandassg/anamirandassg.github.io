const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-2DG-zejX.js","assets/index-BXk4djaH.js","assets/index-BmzAZVve.css","assets/debounces-BkvUtFaP.js","assets/SVG-9G4wpA9m.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningManifestManual-UZ2BNZN4.js","assets/Util-ZZYG9kF2.js","assets/DialogHRM-PW5MDw4F.js","assets/DialogHRM-V9_lZntj.css","assets/Toast-CQGOdk3V.js","assets/Toast-DLpFKn-Q.css","assets/FlexSpace-BQZCrK97.js","assets/LoadingColorSpinner-jScghAPM.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ButonHrm-DBbqFrad.js","assets/ButonHrm-BSeWNUGQ.css"])))=>i.map(i=>d[i]);
import{c as l,l as c,_ as d,a as f,u as V,N as j,j as q,o as D,n as Q,i as n,d as o,F as T,e as G,f as N,g as z,S as K,t as x,C as W}from"./index-BXk4djaH.js";import{i as H,a as X,b as S,f as k,O as J}from"./Util-ZZYG9kF2.js";var U=x('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),Y=x('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Associar a el Manifiesto </h2></div><div class=centerBx100 style=margin-top:20px>'),Z=x('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[ut,_t]=l();c(()=>d(()=>import("./DropDwnSearch-2DG-zejX.js"),__vite__mapDeps([0,1,2,3,4,5])));const tt=c(()=>d(()=>import("./ScanningManifestManual-UZ2BNZN4.js"),__vite__mapDeps([6,1,2,7,8,9,10,11]))),et=c(()=>d(()=>import("./SVG-9G4wpA9m.js"),__vite__mapDeps([4,1,2]))),st=c(()=>d(()=>import("./FlexSpace-BQZCrK97.js"),__vite__mapDeps([12,1,2])));c(()=>d(()=>import("./LoadingColorSpinner-jScghAPM.js"),__vite__mapDeps([13,1,2,14])));const at=c(()=>d(()=>import("./ButonHrm-DBbqFrad.js"),__vite__mapDeps([15,1,2,4,7,16]))),[gt,pt]=f(""),[v,mt]=f([]);function ft(){l({});const[e,a]=V(),[s,r]=l({search:""});l();const[g,p]=l(),y=j();l();const[b,ot]=f(""),[P,w]=f("");q(()=>{A()}),D(()=>{}),Q(async()=>{if(e?.mId){let t={id:e?.mId},i=await nt(t);w(e?.mId),r("manifestObj",i),p("linked",i?.linkedBags)}});function L(){return"geolocation"in navigator}function C(t){W({latitude:t?.coords?.latitude,longitude:t?.coords?.longitude})}function A(){L()?navigator.geolocation.getCurrentPosition(C):showMessage("Geolocation isn't supported by your browser")}const O=async()=>{let t={...g?.linked};v().map(i=>{let u=i.ssg_track_key;t?.[u]||(t[u]={idairguide:"all"})}),p("linked",t),await it({ssg_manifest_key:P()},{linkedBags:t}),y("/manifest",{replace:!0})};return(()=>{var t=Y(),i=t.firstChild;i.firstChild;var u=i.nextSibling;return n(i,o(at,{color:"#c8193c",label:"Associar Manifiesto",handleClick:O}),null),n(u,o(tt,{get status(){return b()},get locat(){return b()}}),null),n(u,o(K,{get when(){return v()?.length>0},get children(){return[U(),o(T,{get each(){return H(v(),"timeStamp",0)},children:(_,lt)=>(()=>{var m=Z(),B=m.firstChild,M=B.firstChild,h=M.nextSibling,E=h.nextSibling,I=B.nextSibling,$=I.firstChild,R=$.nextSibling,F=R.nextSibling;return n(M,o(et,{get name(){return X("M023009")?.statusListIcons?.[_?.currentStatus]},size:32})),h.style.setProperty("padding","8px"),n(h,()=>_?.idairguide),E.style.setProperty("padding","8px"),n(E,()=>_?.tracking),n(m,o(st,{}),I),n($,()=>_?.city),n(F,()=>_?.consigneeInfo?.ybestate),G(()=>N(m,`client_item_box gWXAaj jlytmu manifest  ${z()?"isMobile":"centerBx"}`)),m})()})]}}),null),t})()}const nt=async e=>{let a={params:e},s=S(703003);return a={...a,...s},await k(a)},it=async(e,a)=>{let s={params:e,data2update:a},r=S(709002);s={...s,...r};const g=await k(s),p=J(a?.linkedBags).map(async(y,b)=>{await rt({ssg_track_key:y,idairguide:"all"},{currentManifestKey:e?.ssg_manifest_key})});return await Promise.all(p),g},rt=async(e,a)=>{let s={params:e,data2update:a},r=S(809004);return s={...s,...r},await k(s)};export{ft as default,v as manifestScan,ut as scannedQRs,mt as setManifestScan,_t as setScannedQRs,pt as setStatus,gt as status,it as updLinkedBags};
