const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-Djrhmw-J.js","assets/index-DEC_qqAp.js","assets/index-DYvAu9Q1.css","assets/debounces-Ck-jflkm.js","assets/SVG-DEbu7_30.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-l8ID8Wze.js","assets/Util-D886uaAp.js","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/ShowScanAlert-DcGTyIXc.js","assets/Toast-B3yg-0aH.js","assets/Toast-DLpFKn-Q.css","assets/globalSignal-C3-NWSPW.js","assets/ShowQRPrintLabel-Cs-8FCfv.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-BbVI7Xg0.js","assets/DialogHRM-Cc3LhbYl.js","assets/DialogHRM-V9_lZntj.css","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ScanningManual-D2J3-2iv.js","assets/FlexSpace-CmSbV51-.js","assets/LoadingColorSpinner-DD9B4szm.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as F,l as o,_ as c,a as f,h as z,o as G,m as j,i as r,d as t,f as h,e as Q,t as d,w as C,r as q,x as N,M as w,S as L,F as X,g as B,y as H}from"./index-DEC_qqAp.js";import{s as J}from"./App.module-CbHnVtRQ.js";import{i as K,a as U}from"./Util-D886uaAp.js";import{i as A,s as Y,g as Z}from"./globalSignal-C3-NWSPW.js";import"./index-Ci0zXM0r.js";var ee=d('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),te=d('<div class="centerBx100 ">'),re=d('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),se=d('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),ne=d("<div class=loader>Loading..."),ie=d('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[be,xe]=F(),ae=o(()=>c(()=>import("./DropDwnSearch-Djrhmw-J.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),le=o(()=>c(()=>import("./ScanningCamera-l8ID8Wze.js"),__vite__mapDeps([7,1,2,8,5,9,3,10,11,12,13,14,15,16,17,18,19,20,21,22]))),oe=o(()=>c(()=>import("./ScanningManual-D2J3-2iv.js"),__vite__mapDeps([23,1,2,8,5,13,10,11,12,14,15,16,17,18,19,20,21,22]))),m=o(()=>c(()=>import("./SVG-DEbu7_30.js"),__vite__mapDeps([4,1,2,5]))),ce=o(()=>c(()=>import("./FlexSpace-CmSbV51-.js"),__vite__mapDeps([24,1,2])));o(()=>c(()=>import("./LoadingColorSpinner-DD9B4szm.js"),__vite__mapDeps([25,1,2,26])));const[l,de]=f(""),[k,he]=f([]);function me(){F({});const[p,S]=f(1),[P,R]=H(),$=s=>()=>R(()=>S(s));z(()=>{I()}),G(()=>{}),j(()=>{A()&&S(0)});function T(){return"geolocation"in navigator}function D(s){Y({latitude:s?.coords?.latitude,longitude:s?.coords?.longitude})}function I(){T()?navigator.geolocation.getCurrentPosition(D):showMessage("Geolocation isn't supported by your browser")}const M=()=>Z?.list?.filter(s=>s.id);return(()=>{var s=se(),O=s.firstChild,V=O.nextSibling,y=V.nextSibling,E=y.nextSibling;return r(y,t(ae,{get list(){return M()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return l()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:e=>de(e.id),width:"260px"})),r(E,t(L,{get when(){return l()},get children(){return[(()=>{var e=ee(),u=e.firstChild,i=u.firstChild,v=i.firstChild,a=u.nextSibling,g=a.firstChild,b=g.firstChild;return C(u,"click",$(0),!0),r(v,t(m,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),C(a,"click",$(1),!0),r(b,t(m,{name:"keyboard",size:32,color:"#2b2b2b"})),h(n=>{var _=p()===0,x=p()===1;return _!==n.e&&u.classList.toggle("selected",n.e=_),x!==n.t&&a.classList.toggle("selected",n.t=x),n},{e:void 0,t:void 0}),e})(),(()=>{var e=te();return r(e,t(q,{get fallback(){return ne()},get children(){return t(N,{get children(){return[t(w,{get when(){return p()===0},get children(){return t(le,{get status(){return l()},get locat(){return l()}})}}),t(w,{get when(){return p()===1},get children(){return t(oe,{get status(){return l()},get locat(){return l()}})}})]}})}})),h(()=>e.classList.toggle("pending",!!P())),e})()]}}),null),r(E,t(L,{get when(){return k()?.length>0},get children(){return[re(),t(X,{get each(){return K(k(),"timeStamp",0)},children:(e,u)=>(()=>{var i=ie(),v=i.firstChild,a=v.firstChild,g=a.nextSibling,b=g.nextSibling,n=v.nextSibling,_=n.firstChild,x=_.nextSibling,W=x.nextSibling;return r(a,t(m,{get name(){return U("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),g.style.setProperty("padding","8px"),r(g,()=>e?.idairguide),b.style.setProperty("padding","8px"),r(b,()=>e?.tracking),r(i,t(ce,{}),n),r(_,()=>e?.city),r(W,()=>e?.consigneeInfo?.ybestate),h(()=>B(i,`client_item_box gWXAaj jlytmu manifest  ${A()?"isMobile":"centerBx"}`)),i})()})]}}),null),h(()=>B(s,J.App)),s})()}Q(["click"]);export{me as default,be as scannedQRs,xe as setScannedQRs,de as setStatus,he as setTaskScan,l as status,k as taskScan};