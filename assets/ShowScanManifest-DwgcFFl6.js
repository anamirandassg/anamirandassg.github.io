const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-0DyuRqFt.js","assets/index-MWcyRJ7Y.js","assets/index-BmzAZVve.css"])))=>i.map(i=>d[i]);
import{l as p,_ as c,r as m,s as f,e as u,g as h,h as y,t as _,o as l,n as g,Q as S}from"./index-MWcyRJ7Y.js";import{H as x,a as v}from"./html5-qrcode-scanner-NRvKr1su.js";import{updLinkedBags as w}from"./ManifestDetails-C9zK8jyh.js";import{CloseModal as M}from"./DialogHRM-CX4AZT-W.js";import{LookupBagId as A}from"./DeliveryViewDetail-CxSO4N5W.js";import"./debounces-CWPhYdOE.js";import"./ButonHrm-DYarANhh.js";/* empty css                 */import"./SVG-0DyuRqFt.js";import"./ShowQRPrintLabel-DV-3ePBv.js";import"./PDFButton-D6iUlA_X.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-DjiWixPQ.js";import"./InitPrintServices-DDjs88_M.js";import"./Toast-kUDxtYWW.js";import"./ShowScanDeliveryManifest-rq_WhnEd.js";import"./DeliveryScanView-CQKxpToY.js";import"./DeliveryView-ByD_xy0P.js";import"./components-DzRn3D31.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-0DyuRqFt.js"),__vite__mapDeps([0,1,2])));const k="qrreader_delAM";function U(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await A({id:e})&&(await w({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),M(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[x.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new v(k,e);r.render(t),S("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,n=a.firstChild,d=a.nextSibling;return d.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),n.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const V=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{U as default,V as parseTrcking};
