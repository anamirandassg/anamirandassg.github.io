const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CZkOYNll.js","assets/index-CAL5Ex2l.js","assets/index-CNMNPlHE.css","assets/FlexSpace-Vz3uQAok.js"])))=>i.map(i=>d[i]);
import{l as f,_ as m,e as _,p as v,q as y,i as d,d as c,f as h,h as x,t as S,n as p}from"./index-CAL5Ex2l.js";import{H as b,a as g}from"./html5-qrcode-scanner-De2pui9J.js";import{LookupManifets as k}from"./DashManifest-ssQRFUrT.js";import{updLinkedBags as w}from"./LinkManifest-D9f77eKG.js";import{CloseModal as P}from"./DialogHRM-CaB18NFG.js";var C=S('<div><div><div class="_dsplFlx bottombx lowbordr"><h5>Confirmar Entrega</h5><div class="icon_status centerBx"></div></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qr-reader style=width:220px>');const E=f(()=>m(()=>import("./SVG-CZkOYNll.js"),__vite__mapDeps([0,1,2]))),$=f(()=>m(()=>import("./FlexSpace-Vz3uQAok.js"),__vite__mapDeps([3,1,2])));let s;function R(l){v(()=>{s?.clear()}),y(()=>{setTimeout(()=>{u()},90)});const a=async e=>{let t="kZxxLCeHlz8l3gU8";(await k(t))?.[t]&&(await w({ssg_manifest_key:t},{linkedUser:p?.profile?.userId}),l?.callback({ssg_manifest_key:t,linkedUser:p?.profile?.userId})),P(l?.modalId)},u=()=>{let e={fps:10,qrbox:{width:250,height:200},supportedScanTypes:[b.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0};s=new g("qr-reader",e),s.render(a)};return(()=>{var e=C(),t=e.firstChild,r=t.firstChild,i=r.firstChild,o=i.nextSibling;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),i.$$click=a,d(r,c($,{}),o),o.$$click=()=>{},d(o,c(E,{name:"keyboard",size:32,color:"#2b2b2b"})),h(n=>(n=x()?"92vw":"420px")!=null?e.style.setProperty("width",n):e.style.removeProperty("width")),e})()}_(["click"]);export{R as S};
