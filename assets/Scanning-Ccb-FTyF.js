const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-xUyA4KAZ.js","assets/index-DiKAjaIm.js","assets/index-PRcoyGS_.css","assets/debounces-BwpfumkX.js","assets/SVG-MJvrE44Q.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-CI2QFJg-.js","assets/Util-D886uaAp.js","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/ShowScanAlert-BlUyKnzA.js","assets/Toast-DXw_AnMu.js","assets/Toast-DLpFKn-Q.css","assets/globalSignal-QKI7bfvh.js","assets/ShowQRPrintLabel-3Rt3onT2.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-BbVI7Xg0.js","assets/DialogHRM-BEyfegnm.js","assets/DialogHRM-V9_lZntj.css","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ScanningManual-CKdwphfj.js","assets/FlexSpace-DUMv-Tf6.js","assets/LoadingColorSpinner-C2MX3kUQ.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as D,l as u,_ as g,a as $,h as q,o as N,m as X,i as r,d as t,f as m,e as H,t as o,w as B,r as k,x as J,M as A,S as P,F as K,g as R,s as U,E as Y,y as Z}from"./index-DiKAjaIm.js";import{s as ee}from"./App.module-CbHnVtRQ.js";import{i as te,a as re}from"./Util-D886uaAp.js";import{i as f,s as ne,g as ie}from"./globalSignal-QKI7bfvh.js";import"./index-Ci0zXM0r.js";var se=o('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),ae=o('<div class="centerBx100 ">'),le=o('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),oe=o("<div class=loader>Loading..."),ce=o("<div> <!>."),de=o("<div> "),ue=o('<div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[ye,Ce]=D(),ge=u(()=>g(()=>import("./DropDwnSearch-xUyA4KAZ.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),_e=u(()=>g(()=>import("./ScanningCamera-CI2QFJg-.js"),__vite__mapDeps([7,1,2,8,5,9,3,10,11,12,13,14,15,16,17,18,19,20,21,22]))),ve=u(()=>g(()=>import("./ScanningManual-CKdwphfj.js"),__vite__mapDeps([23,1,2,8,5,13,10,11,12,14,15,16,17,18,19,20,21,22]))),S=u(()=>g(()=>import("./SVG-MJvrE44Q.js"),__vite__mapDeps([4,1,2,5]))),pe=u(()=>g(()=>import("./FlexSpace-DUMv-Tf6.js"),__vite__mapDeps([24,1,2]))),be=u(()=>g(()=>import("./LoadingColorSpinner-C2MX3kUQ.js"),__vite__mapDeps([25,1,2,26]))),[d,xe]=$(""),[T,Ee]=$([]);function Le(){D({});const[b,y]=$(1),[F,I]=Z(),C=n=>()=>I(()=>y(n));q(()=>{V()}),N(()=>{}),X(()=>{f()&&y(0)});function M(){return"geolocation"in navigator}function O(n){ne({latitude:n?.coords?.latitude,longitude:n?.coords?.longitude})}function V(){M()?navigator.geolocation.getCurrentPosition(O):showMessage("Geolocation isn't supported by your browser")}const z=()=>ie?.list?.filter(n=>n.id);return(()=>{var n=le(),W=n.firstChild,G=W.nextSibling,E=G.nextSibling,L=E.nextSibling;return r(E,t(ge,{get list(){return z()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return d()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:e=>xe(e.id),width:"260px"})),r(L,t(P,{get when(){return d()},get children(){return[(()=>{var e=se(),i=e.firstChild,s=i.firstChild,l=s.firstChild,c=i.nextSibling,_=c.firstChild,x=_.firstChild;return B(i,"click",C(0),!0),r(l,t(S,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),B(c,"click",C(1),!0),r(x,t(S,{name:"keyboard",size:32,color:"#2b2b2b"})),m(a=>{var v=b()===0,h=b()===1;return v!==a.e&&i.classList.toggle("selected",a.e=v),h!==a.t&&c.classList.toggle("selected",a.t=h),a},{e:void 0,t:void 0}),e})(),(()=>{var e=ae();return r(e,t(k,{get fallback(){return oe()},get children(){return t(J,{get children(){return[t(A,{get when(){return b()===0},get children(){return t(_e,{get status(){return d()},get locat(){return d()}})}}),t(A,{get when(){return b()===1},get children(){return t(ve,{get status(){return d()},get locat(){return d()}})}})]}})}})),m(()=>e.classList.toggle("pending",!!F())),e})()]}}),null),r(L,t(Y,{fallback:e=>(()=>{var i=ce(),s=i.firstChild,l=s.nextSibling;return l.nextSibling,r(i,()=>e.toString(),l),i})(),get children(){return t(k,{get fallback(){return(()=>{var e=de();return e.firstChild,r(e,t(be,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return t(P,{get when(){return T()},get children(){return t(K,{get each(){return te(T(),"timeStamp",0)},children:(e,i)=>(()=>{var s=ue(),l=s.firstChild,c=l.firstChild,_=c.nextSibling,x=_.nextSibling,a=l.nextSibling,v=a.firstChild,h=v.nextSibling,j=h.nextSibling;return r(c,t(S,{get name(){return re("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),_.style.setProperty("padding","8px"),r(_,()=>e?.idairguide),x.style.setProperty("padding","8px"),r(x,()=>e?.tracking),r(s,t(pe,{}),a),r(v,()=>e?.city),r(j,()=>e?.consigneeInfo?.ybestate),m(p=>{var w=`client_item_box gWXAaj jlytmu manifest  ${f()?"isMobile":"centerBx"}`,Q=`width:${f()?"96vw":"90%"}`;return w!==p.e&&R(s,p.e=w),p.t=U(s,Q,p.t),p},{e:void 0,t:void 0}),s})()})}})}})}}),null),m(()=>R(n,ee.App)),n})()}H(["click"]);export{Le as default,ye as scannedQRs,Ce as setScannedQRs,xe as setStatus,Ee as setTaskScan,d as status,T as taskScan};