const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BAwyYzEz.js","assets/index-BlMn_6j_.js","assets/index-DEEWbFNK.css","assets/Util-C4Gv2Rs-.js"])))=>i.map(i=>d[i]);
import{l as p,_ as c,o as m,b as f,e as u,f as h,h as y,t as _,n as S}from"./index-BlMn_6j_.js";import{H as g,a as x}from"./html5-qrcode-scanner-BGtARNDN.js";import{updLinkedBags as v}from"./ManifestDetails-DnZCi28N.js";import{CloseModal as w}from"./DialogHRM-CJILU5pJ.js";import{LookupBagId as M}from"./DeliveryViewDetail-CAV5AiWc.js";import{d as l,u as b}from"./Util-C4Gv2Rs-.js";import"./debounces-DjkTlD9V.js";import"./ButonHrm-D25m287v.js";/* empty css                 */import"./SVG-BAwyYzEz.js";import"./ShowQRPrintLabel-BC5P5SWG.js";import"./PDFButton-CCQT0yk3.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BaZy4qZc.js";import"./InitPrintServices-COQVt4ve.js";import"./Toast-DGx5X4GD.js";import"./ShowScanDeliveryManifest-CvC8R89u.js";import"./DeliveryScanView-Bpp_Jq5K.js";import"./DeliveryView-DIGGdcVT.js";import"./components-CunsUjLq.js";var A=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-BAwyYzEz.js"),__vite__mapDeps([0,1,2,3])));const k="qrreader_delAM";function V(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:S?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[g.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),b("cameraScanManifest",r)};return(()=>{var e=A(),r=e.firstChild,i=r.firstChild,d=i.firstChild,n=i.nextSibling;return n.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),d.$$click=t,u(a=>(a=h()?"92vw":"420px")!=null?e.style.setProperty("width",a):e.style.removeProperty("width")),e})()}const Y=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{V as default,Y as parseTrcking};