const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-BnabuKV-.js","assets/index-D2M-mgPm.js","assets/index-CmG81InF.css","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-ByeDa7Qf.js","assets/ButonHrm-BWy4vbnE.js","assets/ButonHrm-BPLzySnX.css","assets/FlexSpace-KHi-FHQv.js","assets/ScanningManual-BMh_8opo.js"])))=>i.map(i=>d[i]);
import{c as f,l as d,_ as u,a as m,k as R,r as M,s as P,i as l,d as n,A as h,e as c,B as T,D as B,M as S,S as F,f as G,E as I,h as O,t as i,G as V,H as Q,I as W}from"./index-D2M-mgPm.js";var z=i("<ul class=inline><li>Camera</li><li>RF o Manual"),H=i('<div class="centerBx100 ">'),N=i('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),j=i("<div class=loader>Loading...");const[Y,Z]=f(),q=d(()=>u(()=>import("./DropDwnSearch-BnabuKV-.js"),__vite__mapDeps([0,1,2,3]))),J=d(()=>u(()=>import("./ScanningCamera-ByeDa7Qf.js"),__vite__mapDeps([4,1,2,5,6,7]))),K=d(()=>u(()=>import("./ScanningManual-BMh_8opo.js"),__vite__mapDeps([8,1,2,7]))),[r,U]=m("");function ee(){f({});const[s,x]=m(0),[E,L]=V(),g=e=>()=>L(()=>x(e));R(()=>{w()}),M(()=>{}),P(()=>{});function C(){return"geolocation"in navigator}function $(e){Q({latitude:e?.coords?.latitude,longitude:e?.coords?.longitude})}function w(){C()?navigator.geolocation.getCurrentPosition($):showMessage("Geolocation isn't supported by your browser")}const k=()=>W?.list?.filter(e=>e.id);return(()=>{var e=N(),y=e.firstChild,A=y.nextSibling,p=A.nextSibling,D=p.nextSibling;return l(p,n(q,{get list(){return k()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:t=>U(t.id),width:"260px"})),l(D,n(F,{get when(){return r()},get children(){return[(()=>{var t=z(),o=t.firstChild,_=o.nextSibling;return h(o,"click",g(0)),h(_,"click",g(1)),c(a=>{var v=s()===0,b=s()===1;return v!==a.e&&o.classList.toggle("selected",a.e=v),b!==a.t&&_.classList.toggle("selected",a.t=b),a},{e:void 0,t:void 0}),t})(),(()=>{var t=H();return l(t,n(T,{get fallback(){return j()},get children(){return n(B,{get children(){return[n(S,{get when(){return s()===0},get children(){return n(J,{get status(){return r()},get locat(){return r()}})}}),n(S,{get when(){return s()===1},get children(){return n(K,{get status(){return r()},get locat(){return r()}})}})]}})}})),c(()=>t.classList.toggle("pending",!!E())),t})()]}})),c(()=>G(e,I.App)),e})()}O(["click"]);export{ee as default,Y as scannedQRs,Z as setScannedQRs,U as setStatus,r as status};
