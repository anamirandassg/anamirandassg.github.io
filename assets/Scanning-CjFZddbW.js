const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-D0ZAx5yA.js","assets/index-DDTHMCbI.js","assets/index-PRcoyGS_.css","assets/debounces-3KCHyU1G.js","assets/SVG-B-1xjfzq.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-yZbdLz4X.js","assets/Util-D886uaAp.js","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/ShowScanAlert-DtJhvZSG.js","assets/Toast-C7eMhJDf.js","assets/Toast-DLpFKn-Q.css","assets/globalSignal-BCbGooAj.js","assets/ShowQRPrintLabel-Dw2pSRDb.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-BbVI7Xg0.js","assets/DialogHRM-DEDHoOND.js","assets/DialogHRM-V9_lZntj.css","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ScanningManual-BlNwttoW.js","assets/FlexSpace-CtNaCk_R.js","assets/LoadingColorSpinner-Dv6OpUFm.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{c as P,l as u,_ as g,a as S,h as j,o as Q,m as q,i as r,d as t,f as h,e as N,t as o,w as E,r as L,x as X,M as w,S as B,F as H,g as k,E as J,y as K}from"./index-DDTHMCbI.js";import{s as U}from"./App.module-CbHnVtRQ.js";import{i as Y,a as Z}from"./Util-D886uaAp.js";import{i as A,s as ee,g as te}from"./globalSignal-BCbGooAj.js";import"./index-Ci0zXM0r.js";var re=o('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),ne=o('<div class="centerBx100 ">'),ie=o('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px><div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),se=o("<div class=loader>Loading..."),ae=o("<div> <!>."),le=o("<div> "),oe=o('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[fe,Se]=P(),ce=u(()=>g(()=>import("./DropDwnSearch-D0ZAx5yA.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),de=u(()=>g(()=>import("./ScanningCamera-yZbdLz4X.js"),__vite__mapDeps([7,1,2,8,5,9,3,10,11,12,13,14,15,16,17,18,19,20,21,22]))),ue=u(()=>g(()=>import("./ScanningManual-BlNwttoW.js"),__vite__mapDeps([23,1,2,8,5,13,10,11,12,14,15,16,17,18,19,20,21,22]))),f=u(()=>g(()=>import("./SVG-B-1xjfzq.js"),__vite__mapDeps([4,1,2,5]))),ge=u(()=>g(()=>import("./FlexSpace-CtNaCk_R.js"),__vite__mapDeps([24,1,2]))),_e=u(()=>g(()=>import("./LoadingColorSpinner-Dv6OpUFm.js"),__vite__mapDeps([25,1,2,26]))),[d,pe]=S(""),[F,$e]=S([]);function ye(){P({});const[v,$]=S(1),[R,T]=K(),y=n=>()=>T(()=>$(n));j(()=>{M()}),Q(()=>{}),q(()=>{A()&&$(0)});function D(){return"geolocation"in navigator}function I(n){ee({latitude:n?.coords?.latitude,longitude:n?.coords?.longitude})}function M(){D()?navigator.geolocation.getCurrentPosition(I):showMessage("Geolocation isn't supported by your browser")}const O=()=>te?.list?.filter(n=>n.id);return(()=>{var n=ie(),V=n.firstChild,z=V.nextSibling,C=z.nextSibling,m=C.nextSibling,W=m.firstChild;return r(C,t(ce,{get list(){return O()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return d()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:e=>pe(e.id),width:"260px"})),r(m,t(B,{get when(){return d()},get children(){return[(()=>{var e=re(),i=e.firstChild,s=i.firstChild,l=s.firstChild,c=i.nextSibling,_=c.firstChild,b=_.firstChild;return E(i,"click",y(0),!0),r(l,t(f,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),E(c,"click",y(1),!0),r(b,t(f,{name:"keyboard",size:32,color:"#2b2b2b"})),h(a=>{var p=v()===0,x=v()===1;return p!==a.e&&i.classList.toggle("selected",a.e=p),x!==a.t&&c.classList.toggle("selected",a.t=x),a},{e:void 0,t:void 0}),e})(),(()=>{var e=ne();return r(e,t(L,{get fallback(){return se()},get children(){return t(X,{get children(){return[t(w,{get when(){return v()===0},get children(){return t(de,{get status(){return d()},get locat(){return d()}})}}),t(w,{get when(){return v()===1},get children(){return t(ue,{get status(){return d()},get locat(){return d()}})}})]}})}})),h(()=>e.classList.toggle("pending",!!R())),e})()]}}),W),r(m,t(J,{fallback:e=>(()=>{var i=ae(),s=i.firstChild,l=s.nextSibling;return l.nextSibling,r(i,()=>e.toString(),l),i})(),get children(){return t(L,{get fallback(){return(()=>{var e=le();return e.firstChild,r(e,t(_e,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return t(B,{get when(){return F()},get children(){return t(H,{get each(){return Y(F(),"timeStamp",0)},children:(e,i)=>(()=>{var s=oe(),l=s.firstChild,c=l.firstChild,_=c.nextSibling,b=_.nextSibling,a=l.nextSibling,p=a.firstChild,x=p.nextSibling,G=x.nextSibling;return r(c,t(f,{get name(){return Z("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),_.style.setProperty("padding","8px"),r(_,()=>e?.idairguide),b.style.setProperty("padding","8px"),r(b,()=>e?.tracking),r(s,t(ge,{}),a),r(p,()=>e?.city),r(G,()=>e?.consigneeInfo?.ybestate),h(()=>k(s,`client_item_box gWXAaj jlytmu manifest  ${A()?"isMobile":"centerBx"}`)),s})()})}})}})}}),null),h(()=>k(n,U.App)),n})()}N(["click"]);export{ye as default,fe as scannedQRs,Se as setScannedQRs,pe as setStatus,$e as setTaskScan,d as status,F as taskScan};
