const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-ByochtEf.js","assets/index-CWRfkaoT.js","assets/index-DGSEMnLR.css","assets/debounces-BmZn20Ow.js","assets/SVG-DN06c9xQ.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-BFM3eWsS.js","assets/ButonHrm-Q29QGbDM.js","assets/Util-dbxHFpkD.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/FlexSpace-BAukekaF.js","assets/globalSignal-Dne7IUbW.js","assets/ScanningServices-LjoDI_Jv.js","assets/ScanningManual-8f9Fd4mY.js","assets/manifestList-CSHEgbpJ.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css"])))=>i.map(i=>d[i]);
import{c as x,l as o,_ as c,a as S,h as I,o as M,m as V,i as a,d as t,f as g,e as G,t as d,p as h,q as O,r as W,M as m,S as z,g as q,v as Q}from"./index-CWRfkaoT.js";import{s as N}from"./App.module-CbHnVtRQ.js";import"./index-Ci0zXM0r.js";import{s as j,g as H}from"./globalSignal-Dne7IUbW.js";var J=d('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),K=d('<div class="centerBx100 ">'),U=d('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),X=d("<div class=loader>Loading...");const[ie,le]=x(),Y=o(()=>c(()=>import("./DropDwnSearch-ByochtEf.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Z=o(()=>c(()=>import("./ScanningCamera-BFM3eWsS.js"),__vite__mapDeps([7,1,2,8,4,5,9,10,11,3,12,13,14]))),ee=o(()=>c(()=>import("./ScanningManual-8f9Fd4mY.js"),__vite__mapDeps([15,1,2,9,5,13,12,16,14,17,18]))),f=o(()=>c(()=>import("./SVG-DN06c9xQ.js"),__vite__mapDeps([4,1,2,5]))),[s,te]=S("");function oe(){x({});const[i,C]=S(0),[E,$]=Q(),p=e=>()=>$(()=>C(e));I(()=>{y()}),M(()=>{}),V(()=>{});function L(){return"geolocation"in navigator}function w(e){j({latitude:e?.coords?.latitude,longitude:e?.coords?.longitude})}function y(){L()?navigator.geolocation.getCurrentPosition(w):showMessage("Geolocation isn't supported by your browser")}const A=()=>H?.list?.filter(e=>e.id);return(()=>{var e=U(),k=e.firstChild,B=k.nextSibling,_=B.nextSibling,R=_.nextSibling;return a(_,t(Y,{get list(){return A()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return s()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:r=>te(r.id),width:"260px"})),a(R,t(z,{get when(){return s()},get children(){return[(()=>{var r=J(),l=r.firstChild,D=l.firstChild,P=D.firstChild,u=l.nextSibling,T=u.firstChild,F=T.firstChild;return h(l,"click",p(0),!0),a(P,t(f,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),h(u,"click",p(1),!0),a(F,t(f,{name:"keyboard",size:32,color:"#2b2b2b"})),g(n=>{var v=i()===0,b=i()===1;return v!==n.e&&l.classList.toggle("selected",n.e=v),b!==n.t&&u.classList.toggle("selected",n.t=b),n},{e:void 0,t:void 0}),r})(),(()=>{var r=K();return a(r,t(O,{get fallback(){return X()},get children(){return t(W,{get children(){return[t(m,{get when(){return i()===0},get children(){return t(Z,{get status(){return s()},get locat(){return s()}})}}),t(m,{get when(){return i()===1},get children(){return t(ee,{get status(){return s()},get locat(){return s()}})}})]}})}})),g(()=>r.classList.toggle("pending",!!E())),r})()]}})),g(()=>q(e,N.App)),e})()}G(["click"]);export{oe as default,ie as scannedQRs,le as setScannedQRs,te as setStatus,s as status};
