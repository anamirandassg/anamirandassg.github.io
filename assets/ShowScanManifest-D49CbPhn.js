const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DCMD_W7G.js","assets/index-DHCS-KQi.js","assets/index-DaYrm968.css","assets/Util-Bc5vcOBp.js"])))=>i.map(i=>d[i]);
import{l as p,_ as c,o as m,e as f,h as u,j as h,d as y,t as _,g}from"./index-DHCS-KQi.js";import{H as S,a as x}from"./html5-qrcode-scanner-U1De7xFH.js";import{updLinkedBags as v}from"./ManifestDetails-BzA5wS2F.js";import{CloseModal as w}from"./DialogHRM-B_MjLUhO.js";import{LookupBagId as M}from"./DeliveryViewDetail-BnNI09w8.js";import{e as l,u as A}from"./Util-Bc5vcOBp.js";import"./debounces-ycRia-T1.js";import"./ButonHrm-CccK6Gex.js";/* empty css                 */import"./SVG-DCMD_W7G.js";import"./ShowQRPrintLabel-DwJQDOkp.js";import"./fontkit.es-CD9tcdqV.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-CO7w1VfE.js";import"./Toast-nFsXK8A-.js";import"./ShowScanDeliveryManifest-ylURZCyv.js";import"./DeliveryScanView-DcwiSpWK.js";import"./DeliveryView-DE8PeJoE.js";import"./components-D_rdW7k3.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-DCMD_W7G.js"),__vite__mapDeps([0,1,2,3])));const k="qrreader_delAM";function O(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[S.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),A("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,d=a.firstChild,n=a.nextSibling;return n.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),d.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const U=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{O as default,U as parseTrcking};
