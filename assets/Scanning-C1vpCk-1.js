const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-Bto9MxLx.js","assets/index-TgCUg3Vz.js","assets/index-DGHHyjai.css","assets/debounces-BNPceH1b.js","assets/SVG-B20ovUuS.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-CjkHDbWp.js","assets/Util-uEfv1z7O.js","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/ShowScanAlert-mHFkqslT.js","assets/Toast-B6wQsu88.js","assets/Toast-DLpFKn-Q.css","assets/globalSignal-C0rH51i3.js","assets/ShowQRPrintLabel-Y1iWZxIT.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CprHcwF4.js","assets/DialogHRM-CAY8t6AM.js","assets/DialogHRM-V9_lZntj.css","assets/ScanningManual-C-Sqg459.js","assets/FlexSpace-BPXpknaC.js"])))=>i.map(i=>d[i]);
import{c as S,l as o,_ as c,a as C,h as M,o as I,m as V,i as a,d as t,f as g,e as G,t as d,w as h,r as O,x as W,M as m,S as z,g as Q,y as q}from"./index-TgCUg3Vz.js";import{s as N}from"./App.module-CbHnVtRQ.js";import"./index-Ci0zXM0r.js";import{i as j,s as H,g as J}from"./globalSignal-C0rH51i3.js";var K=d('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),U=d('<div class="centerBx100 ">'),X=d('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),Y=d("<div class=loader>Loading...");const[le,oe]=S(),Z=o(()=>c(()=>import("./DropDwnSearch-Bto9MxLx.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),ee=o(()=>c(()=>import("./ScanningCamera-CjkHDbWp.js"),__vite__mapDeps([7,1,2,8,5,9,3,10,11,12,13,14,15,16,17,18,19,20]))),te=o(()=>c(()=>import("./ScanningManual-C-Sqg459.js"),__vite__mapDeps([21,1,2,8,5,13,22,10,11,12,14,15,16,17,18,19,20]))),x=o(()=>c(()=>import("./SVG-B20ovUuS.js"),__vite__mapDeps([4,1,2,5]))),[s,re]=C("");function ce(){S({});const[i,p]=C(1),[E,$]=q(),_=e=>()=>$(()=>p(e));M(()=>{y()}),I(()=>{}),V(()=>{j()&&p(0)});function w(){return"geolocation"in navigator}function L(e){H({latitude:e?.coords?.latitude,longitude:e?.coords?.longitude})}function y(){w()?navigator.geolocation.getCurrentPosition(L):showMessage("Geolocation isn't supported by your browser")}const A=()=>J?.list?.filter(e=>e.id);return(()=>{var e=X(),k=e.firstChild,B=k.nextSibling,v=B.nextSibling,R=v.nextSibling;return a(v,t(Z,{get list(){return A()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return s()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:r=>re(r.id),width:"260px"})),a(R,t(z,{get when(){return s()},get children(){return[(()=>{var r=K(),l=r.firstChild,D=l.firstChild,P=D.firstChild,u=l.nextSibling,T=u.firstChild,F=T.firstChild;return h(l,"click",_(0),!0),a(P,t(x,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),h(u,"click",_(1),!0),a(F,t(x,{name:"keyboard",size:32,color:"#2b2b2b"})),g(n=>{var b=i()===0,f=i()===1;return b!==n.e&&l.classList.toggle("selected",n.e=b),f!==n.t&&u.classList.toggle("selected",n.t=f),n},{e:void 0,t:void 0}),r})(),(()=>{var r=U();return a(r,t(O,{get fallback(){return Y()},get children(){return t(W,{get children(){return[t(m,{get when(){return i()===0},get children(){return t(ee,{get status(){return s()},get locat(){return s()}})}}),t(m,{get when(){return i()===1},get children(){return t(te,{get status(){return s()},get locat(){return s()}})}})]}})}})),g(()=>r.classList.toggle("pending",!!E())),r})()]}})),g(()=>Q(e,N.App)),e})()}G(["click"]);export{ce as default,le as scannedQRs,oe as setScannedQRs,re as setStatus,s as status};
