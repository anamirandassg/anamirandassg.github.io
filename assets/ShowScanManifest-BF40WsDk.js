const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DJaoqm4Q.js","assets/index-CXqMZ4Du.js","assets/index-DEEWbFNK.css","assets/Util-CKCUAuLU.js"])))=>i.map(i=>d[i]);
import{l as p,_ as c,o as m,b as f,e as u,f as h,h as y,t as _,n as S}from"./index-CXqMZ4Du.js";import{H as g,a as x}from"./html5-qrcode-scanner-qNFlzSON.js";import{updLinkedBags as v}from"./ManifestDetails-O4n559Uc.js";import{CloseModal as w}from"./DialogHRM-w5rj0f8J.js";import{LookupBagId as M}from"./DeliveryViewDetail-B8cMIKkN.js";import{d as l,u as b}from"./Util-CKCUAuLU.js";import"./debounces-5I5nlVM3.js";import"./ButonHrm-COT61pBZ.js";/* empty css                 */import"./SVG-DJaoqm4Q.js";import"./ShowQRPrintLabel-CYlJmIMH.js";import"./PDFButton-DzKPI8bv.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-xY8_R9eo.js";import"./InitPrintServices-Cu6eu-iZ.js";import"./Toast-DNEVDXHB.js";import"./ShowScanDeliveryManifest-Bmk66CfV.js";import"./DeliveryScanView-Dfc9yNX_.js";import"./DeliveryView-10Qu1qF8.js";import"./components-Bh346BYt.js";var A=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');p(()=>c(()=>import("./SVG-DJaoqm4Q.js"),__vite__mapDeps([0,1,2,3])));const k="qrreader_delAM";function V(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:S?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[g.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),b("cameraScanManifest",r)};return(()=>{var e=A(),r=e.firstChild,i=r.firstChild,d=i.firstChild,n=i.nextSibling;return n.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),d.$$click=t,u(a=>(a=h()?"92vw":"420px")!=null?e.style.setProperty("width",a):e.style.removeProperty("width")),e})()}const Y=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{V as default,Y as parseTrcking};