const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-D9i3twBA.js","assets/index-BLZE2s6l.js","assets/index-lCkr9jrN.css"])))=>i.map(i=>d[i]);
import{l as p,_ as c,r as m,s as f,e as u,g as h,h as y,t as _,o as l,n as g,Q as S}from"./index-BLZE2s6l.js";import{H as x,a as v}from"./html5-qrcode-scanner-BS3ewSJl.js";import{updLinkedBags as w}from"./ManifestDetails-Cq6v-8OY.js";import{CloseModal as M}from"./DialogHRM-CDspj2ID.js";import{LookupBagId as A}from"./DeliveryViewDetail-BZd4TzWZ.js";import"./debounces-CDTX7212.js";import"./ButonHrm-Dl3Smlc1.js";/* empty css                 */import"./SVG-D9i3twBA.js";import"./ShowQRPrintLabel-DY3JSsC1.js";import"./PDFButton-CW_6L3wv.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BGtKoALU.js";import"./InitPrintServices-ChsUN8Qd.js";import"./Toast-BXf7ylY1.js";import"./ShowScanDeliveryManifest-C4216VwT.js";import"./DeliveryScanView-CYMs-XYU.js";import"./DeliveryView-D0HueS92.js";import"./components-CS07XXti.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-D9i3twBA.js"),__vite__mapDeps([0,1,2])));const k="qrreader_delAM";function U(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await A({id:e})&&(await w({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),M(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[x.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new v(k,e);r.render(t),S("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,n=a.firstChild,d=a.nextSibling;return d.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),n.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const V=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{U as default,V as parseTrcking};