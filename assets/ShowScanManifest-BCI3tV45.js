const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DmfBQ1XE.js","assets/index-Rl3TmLYH.js","assets/index-BRlA1Q7g.css","assets/Util-DmBsvgxN.js"])))=>i.map(i=>d[i]);
import{l as p,_ as c,o as m,d as f,f as u,j as h,h as y,t as _,g}from"./index-Rl3TmLYH.js";import{H as S,a as x}from"./html5-qrcode-scanner-Cn1FKT3B.js";import{updLinkedBags as v}from"./ManifestDetails-BN-gqNN-.js";import{CloseModal as w}from"./DialogHRM-DwC3nSOA.js";import{LookupBagId as M}from"./DeliveryViewDetail-Dvlp7GFE.js";import{e as l,u as A}from"./Util-DmBsvgxN.js";import"./debounces-C5fEz-lH.js";import"./ButonHrm-EJklfvJY.js";/* empty css                 */import"./SVG-DmfBQ1XE.js";import"./ShowQRPrintLabel-CiDMgOWm.js";import"./fontkit.es-muN7o4LY.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-D_5X27CX.js";import"./Toast-B7V57fet.js";import"./ShowScanDeliveryManifest-CX9HAhdN.js";import"./DeliveryScanView-D8ye4Ftu.js";import"./DeliveryView-5pGm-TJO.js";import"./components-DKOHBzuN.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-DmfBQ1XE.js"),__vite__mapDeps([0,1,2,3])));const k="qrreader_delAM";function O(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[S.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),A("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,d=a.firstChild,n=a.nextSibling;return n.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),d.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const U=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{O as default,U as parseTrcking};
