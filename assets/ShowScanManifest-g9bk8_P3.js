const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-JQaKQi55.js","assets/index-7ZM3jTwu.js","assets/index-BRlA1Q7g.css","assets/Util-D6Peje1o.js"])))=>i.map(i=>d[i]);
import{l as n,_ as c,o as m,d as f,f as u,j as h,h as y,t as _,g}from"./index-7ZM3jTwu.js";import{H as S,a as x}from"./html5-qrcode-scanner-ZTsbULhS.js";import{updLinkedBags as v}from"./ManifestDetails-Du_LvBgf.js";import{CloseModal as w}from"./DialogHRM-Pn91f8dh.js";import{LookupBagId as M}from"./DeliveryViewDetail-Dl9rIxPL.js";import{e as l,u as A}from"./Util-D6Peje1o.js";import"./debounces-kmK87E1s.js";import"./ButonHrm-CFrXzA_f.js";/* empty css                 */import"./SVG-JQaKQi55.js";import"./ShowQRPrintLabel-CXovudQK.js";import"./fontkit.es-jEU4QD-9.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-Y_2rRhtM.js";import"./Toast-B5mORVrG.js";import"./DashManifest-b3GgOoAj.js";import"./App.module-CbHnVtRQ.js";import"./ShowScanDeliveryManifest-DawFgLfV.js";import"./DeliveryScanView-CA2RAlZZ.js";import"./DeliveryView-C9GkHcHw.js";import"./components-Dn9OptO9.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');n(()=>c(()=>import("./SVG-JQaKQi55.js"),__vite__mapDeps([0,1,2,3])));const k="qrreader_delAM";function V(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{i()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},i=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[S.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),A("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,s=r.firstChild,p=s.firstChild,d=s.nextSibling;return d.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),p.$$click=t,u(a=>(a=h()?"92vw":"420px")!=null?e.style.setProperty("width",a):e.style.removeProperty("width")),e})()}const Y=o=>{let t=o,i="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(i);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{V as default,Y as parseTrcking};
