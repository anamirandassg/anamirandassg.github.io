const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CpHyQroA.js","assets/index-twYRq3uj.js","assets/index-DaYrm968.css","assets/Util-B8-DWw-6.js"])))=>i.map(i=>d[i]);
import{l as p,_ as c,o as m,e as f,h as u,j as h,d as y,t as _,g}from"./index-twYRq3uj.js";import{H as S,a as x}from"./html5-qrcode-scanner-CMLH6P8J.js";import{updLinkedBags as v}from"./ManifestDetails-DvRkQsgZ.js";import{CloseModal as w}from"./DialogHRM-B0ugz95c.js";import{LookupBagId as M}from"./DeliveryViewDetail-DVcuE4K3.js";import{e as l,u as A}from"./Util-B8-DWw-6.js";import"./debounces-DDQWqeGf.js";import"./ButonHrm-K6YXT_l_.js";/* empty css                 */import"./SVG-CpHyQroA.js";import"./ShowQRPrintLabel-lg8RAxPK.js";import"./fontkit.es-BHcUmD3g.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-BhTuseMZ.js";import"./Toast-B1ZQpAb6.js";import"./ShowScanDeliveryManifest-CRdEW0S8.js";import"./DeliveryScanView-pSIhi_Nm.js";import"./DeliveryView-Crh5CH0q.js";import"./components-CJBtVVNK.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-CpHyQroA.js"),__vite__mapDeps([0,1,2,3])));const k="qrreader_delAM";function O(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[S.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),A("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,d=a.firstChild,n=a.nextSibling;return n.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),d.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const U=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{O as default,U as parseTrcking};
