const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BKtEPdQ8.js","assets/index-C3nuwiPu.js","assets/index-BmzAZVve.css"])))=>i.map(i=>d[i]);
import{l as p,_ as c,o as m,n as f,e as u,g as h,h as y,t as _,m as g}from"./index-C3nuwiPu.js";import{H as S,a as x}from"./html5-qrcode-scanner-U4lUiSae.js";import{updLinkedBags as v}from"./ManifestDetails-BVOSj-E5.js";import{CloseModal as w}from"./DialogHRM-CooODzX_.js";import{LookupBagId as M}from"./DeliveryViewDetail-OewevLoX.js";import{a as l,u as A}from"./Util-Dlxe-mBA.js";import"./debounces-BWTJVc88.js";import"./ButonHrm-sS30ll-S.js";/* empty css                 */import"./SVG-BKtEPdQ8.js";import"./ShowQRPrintLabel-Bu-LBqpt.js";import"./PDFButton-Bkj4cawg.js";import"./fontkit.es-BRvkp4mY.js";import"./InitPrintServices-nkIhHp6G.js";import"./Toast-D8yVWZQ9.js";import"./ShowScanDeliveryManifest-8Gbi8f7p.js";import"./DeliveryScanView-BUp3ZNAF.js";import"./DeliveryView-CwV56qyp.js";import"./components-CAou3LXP.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-BKtEPdQ8.js"),__vite__mapDeps([0,1,2])));const k="qrreader_delAM";function U(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[S.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),A("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,n=a.firstChild,d=a.nextSibling;return d.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),n.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const V=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{U as default,V as parseTrcking};