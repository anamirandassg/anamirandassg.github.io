const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CQCqG7HI.js","assets/index-DjfzCh1Q.js","assets/index-BmzAZVve.css"])))=>i.map(i=>d[i]);
import{l as d,_ as c,o as m,n as f,e as u,g as h,h as y,t as _,m as g}from"./index-DjfzCh1Q.js";import{H as S,a as x}from"./html5-qrcode-scanner-CzbG3d9n.js";import{updLinkedBags as v}from"./ManifestDetails-C2fbGZy-.js";import{CloseModal as w}from"./DialogHRM-DRvzMvld.js";import{LookupBagId as M}from"./DeliveryViewDetail-7dTRw-Nm.js";import{a as l,u as A}from"./Util-JtLJw1Vf.js";import"./debounces-BrrxaB09.js";import"./ButonHrm-CYDiYXi0.js";/* empty css                 */import"./SVG-CQCqG7HI.js";import"./ShowQRPrintLabel-Cv0XIPAx.js";import"./PDFButton-DSyiPGj-.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-DAv2r_Qf.js";import"./InitPrintServices-CihyH-xp.js";import"./Toast-ByeAacnd.js";import"./ShowScanDeliveryManifest-DnYIE_fy.js";import"./DeliveryScanView-SIr-rfEq.js";import"./DeliveryView-Dr-gqfuN.js";import"./components-DmGlvOLa.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');d(()=>c(()=>import("./SVG-CQCqG7HI.js"),__vite__mapDeps([0,1,2])));const k="qrreader_delAM";function V(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[S.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),A("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,n=a.firstChild,p=a.nextSibling;return p.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),n.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const Y=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{V as default,Y as parseTrcking};
