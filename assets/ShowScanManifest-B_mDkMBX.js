const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BnlDMkmC.js","assets/index-CbyE4LeZ.js","assets/index-lCkr9jrN.css"])))=>i.map(i=>d[i]);
import{l as p,_ as c,r as m,s as f,e as u,g as h,h as y,t as _,o as l,n as g,Q as S}from"./index-CbyE4LeZ.js";import{H as x,a as v}from"./html5-qrcode-scanner-BY837Got.js";import{updLinkedBags as w}from"./ManifestDetails-CC-1fxZM.js";import{CloseModal as M}from"./DialogHRM-JZ8kGj4X.js";import{LookupBagId as A}from"./DeliveryViewDetail-DtgssWr_.js";import"./debounces-DRT-KIHx.js";import"./ButonHrm-ZVRLJPUn.js";/* empty css                 */import"./SVG-BnlDMkmC.js";import"./ShowQRPrintLabel-aKtIpg6U.js";import"./PDFButton-1LV498PM.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-C4Jtll4Z.js";import"./InitPrintServices-JH5tk0p5.js";import"./Toast-BJCqOLnM.js";import"./ShowScanDeliveryManifest-Cz4tpxU0.js";import"./DeliveryScanView-v4roM9u7.js";import"./DeliveryView-dgxfmYsH.js";import"./components-4SAjFMqW.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-BnlDMkmC.js"),__vite__mapDeps([0,1,2])));const k="qrreader_delAM";function U(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await A({id:e})&&(await w({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),M(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[x.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new v(k,e);r.render(t),S("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,n=a.firstChild,d=a.nextSibling;return d.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),n.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const V=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{U as default,V as parseTrcking};