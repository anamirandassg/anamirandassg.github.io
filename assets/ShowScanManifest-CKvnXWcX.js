const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-9G4wpA9m.js","assets/index-BXk4djaH.js","assets/index-BmzAZVve.css"])))=>i.map(i=>d[i]);
import{l as d,_ as c,o as m,n as f,e as u,g as h,h as y,t as _,m as g}from"./index-BXk4djaH.js";import{H as S,a as x}from"./html5-qrcode-scanner-CGBAQhXI.js";import{updLinkedBags as v}from"./ManifestDetails-Dif53Mmi.js";import{CloseModal as w}from"./DialogHRM-PW5MDw4F.js";import{LookupBagId as M}from"./DeliveryViewDetail-BYntcMnh.js";import{a as l,u as A}from"./Util-ZZYG9kF2.js";import"./debounces-BkvUtFaP.js";import"./ButonHrm-DBbqFrad.js";/* empty css                 */import"./SVG-9G4wpA9m.js";import"./ShowQRPrintLabel-DUeA2Wk3.js";import"./PDFButton-BPwQOm6a.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-j4QB5RW3.js";import"./InitPrintServices-D3KYFGNf.js";import"./Toast-CQGOdk3V.js";import"./ShowScanDeliveryManifest-CKZtfFak.js";import"./DeliveryScanView-BphlNl53.js";import"./DeliveryView-D8DPtMgw.js";import"./components-ByAaAs7I.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');d(()=>c(()=>import("./SVG-9G4wpA9m.js"),__vite__mapDeps([0,1,2])));const k="qrreader_delAM";function V(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[S.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),A("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,a=r.firstChild,n=a.firstChild,p=a.nextSibling;return p.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),n.$$click=t,u(i=>(i=h()?"92vw":"420px")!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),e})()}const Y=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{V as default,Y as parseTrcking};