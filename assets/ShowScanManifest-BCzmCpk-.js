const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CnpMu39j.js","assets/index-CSWRe9WA.js","assets/index-lCkr9jrN.css"])))=>i.map(i=>d[i]);
import{l as p,_ as c,r as m,s as f,e as u,g as h,h as y,t as _,o as l,n as g,Q as S}from"./index-CSWRe9WA.js";import{H as x,a as v}from"./html5-qrcode-scanner-Bq_hdwOU.js";import{updLinkedBags as w}from"./ManifestDetails-DC1KoDk7.js";import{CloseModal as M}from"./DialogHRM-xd_ePV8O.js";import{LookupBagId as A}from"./DeliveryViewDetail-hxv35t4M.js";import"./debounces-Hafqhk5o.js";import"./ButonHrm-PkqUPOIE.js";/* empty css                 */import"./SVG-CnpMu39j.js";import"./ShowQRPrintLabel-BMrQqMVV.js";import"./PDFButton-CDCBNSM_.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BvE5c5FQ.js";import"./InitPrintServices-BYjNdQBR.js";import"./Toast-CZ1R9Tq2.js";import"./ShowScanDeliveryManifest-Bf8Dt0aD.js";import"./DeliveryScanView-D3CF5WdV.js";import"./DeliveryView-iarsBkuP.js";import"./components-Ca4eQAjW.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-CnpMu39j.js"),__vite__mapDeps([0,1,2])));const k="qrreader_delAM";function U(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await A({id:e})&&(await w({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),M(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[x.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new v(k,e);r.render(t),S("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,n=a.firstChild,d=a.nextSibling;return d.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),n.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const V=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{U as default,V as parseTrcking};
