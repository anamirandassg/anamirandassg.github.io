const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-C_l-Jm5E.js","assets/index-C3nuwiPu.js","assets/index-BmzAZVve.css","assets/debounces-BWTJVc88.js","assets/SVG-BKtEPdQ8.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-Ccy8kERi.js","assets/Util-Dlxe-mBA.js","assets/html5-qrcode-scanner-U4lUiSae.js","assets/ShowScanAlert-D9sJFwoQ.js","assets/Toast-D8yVWZQ9.js","assets/Toast-DLpFKn-Q.css","assets/ShowQRPrintLabel-Bu-LBqpt.js","assets/PDFButton-Bkj4cawg.js","assets/fontkit.es-BRvkp4mY.js","assets/InitPrintServices-nkIhHp6G.js","assets/DialogHRM-CooODzX_.js","assets/DialogHRM-V9_lZntj.css","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ScanningManual-BxVLktA2.js","assets/FlexSpace-CfpwBNks.js","assets/LoadingColorSpinner-BOE6ZmHa.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as F,l as o,_ as c,a as f,j as W,o as j,n as G,i as n,d as t,z as C,e as h,w as Q,A as q,M as w,S as B,F as N,f as L,g as A,h as X,t as d,B as H,y as J,C as K}from"./index-C3nuwiPu.js";import{s as U}from"./App.module-CbHnVtRQ.js";import{i as Y,a as Z}from"./Util-Dlxe-mBA.js";var ee=d('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),te=d('<div class="centerBx100 ">'),ne=d('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),re=d('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),se=d("<div class=loader>Loading..."),ie=d('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[pe,ve]=F(),ae=o(()=>c(()=>import("./DropDwnSearch-C_l-Jm5E.js"),__vite__mapDeps([0,1,2,3,4,5]))),le=o(()=>c(()=>import("./ScanningCamera-Ccy8kERi.js"),__vite__mapDeps([6,1,2,7,8,3,9,10,11,12,13,14,15,16,17,18,19]))),oe=o(()=>c(()=>import("./ScanningManual-BxVLktA2.js"),__vite__mapDeps([20,1,2,7,9,10,11,12,13,14,15,16,17,18,19]))),m=o(()=>c(()=>import("./SVG-BKtEPdQ8.js"),__vite__mapDeps([4,1,2]))),ce=o(()=>c(()=>import("./FlexSpace-CfpwBNks.js"),__vite__mapDeps([21,1,2])));o(()=>c(()=>import("./LoadingColorSpinner-BOE6ZmHa.js"),__vite__mapDeps([22,1,2,23])));const[l,de]=f(""),[k,be]=f([]);function xe(){F({});const[p,S]=f(1),[P,R]=H(),$=r=>()=>R(()=>S(r));W(()=>{I()}),j(()=>{}),G(()=>{A()&&S(0)});function T(){return"geolocation"in navigator}function D(r){K({latitude:r?.coords?.latitude,longitude:r?.coords?.longitude})}function I(){T()?navigator.geolocation.getCurrentPosition(D):showMessage("Geolocation isn't supported by your browser")}const M=()=>J?.list?.filter(r=>r.id);return(()=>{var r=re(),O=r.firstChild,V=O.nextSibling,y=V.nextSibling,E=y.nextSibling;return n(y,t(ae,{get list(){return M()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return l()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:e=>de(e.id),width:"260px"})),n(E,t(B,{get when(){return l()},get children(){return[(()=>{var e=ee(),u=e.firstChild,i=u.firstChild,v=i.firstChild,a=u.nextSibling,g=a.firstChild,b=g.firstChild;return C(u,"click",$(0),!0),n(v,t(m,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),C(a,"click",$(1),!0),n(b,t(m,{name:"keyboard",size:32,color:"#2b2b2b"})),h(s=>{var _=p()===0,x=p()===1;return _!==s.e&&u.classList.toggle("selected",s.e=_),x!==s.t&&a.classList.toggle("selected",s.t=x),s},{e:void 0,t:void 0}),e})(),(()=>{var e=te();return n(e,t(Q,{get fallback(){return se()},get children(){return t(q,{get children(){return[t(w,{get when(){return p()===0},get children(){return t(le,{get status(){return l()},get locat(){return l()}})}}),t(w,{get when(){return p()===1},get children(){return t(oe,{get status(){return l()},get locat(){return l()}})}})]}})}})),h(()=>e.classList.toggle("pending",!!P())),e})()]}}),null),n(E,t(B,{get when(){return k()?.length>0},get children(){return[ne(),t(N,{get each(){return Y(k(),"timeStamp",0)},children:(e,u)=>(()=>{var i=ie(),v=i.firstChild,a=v.firstChild,g=a.nextSibling,b=g.nextSibling,s=v.nextSibling,_=s.firstChild,x=_.nextSibling,z=x.nextSibling;return n(a,t(m,{get name(){return Z("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),g.style.setProperty("padding","8px"),n(g,()=>e?.idairguide),b.style.setProperty("padding","8px"),n(b,()=>e?.tracking),n(i,t(ce,{}),s),n(_,()=>e?.city),n(z,()=>e?.consigneeInfo?.ybestate),h(()=>L(i,`client_item_box gWXAaj jlytmu manifest  ${A()?"isMobile":"centerBx"}`)),i})()})]}}),null),h(()=>L(r,U.App)),r})()}X(["click"]);export{xe as default,pe as scannedQRs,ve as setScannedQRs,de as setStatus,be as setTaskScan,l as status,k as taskScan};
