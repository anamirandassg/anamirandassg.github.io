const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DBuw3s_z.js","assets/index-CX08qMr9.js","assets/index-W9fcnr7G.css","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as n,_ as m,o as c,m as f,f as u,e as h,t as y,k as _}from"./index-CX08qMr9.js";import{i as S}from"./globalSignal-wLi-6lpX.js";import{H as g,a as x}from"./html5-qrcode-scanner-Cl8XE5pu.js";import{updLinkedBags as v}from"./ManifestDetails-DxabKcS6.js";import{CloseModal as w}from"./DialogHRM-Dg-o5fgk.js";import{LookupBagId as M}from"./DeliveryViewDetail-C6jK0kof.js";import{a as l,u as k}from"./Util-D2YTzGDx.js";import"./index-Ci0zXM0r.js";import"./debounces-Bxi15UZt.js";import"./ButonHrm-BEC_Ro5Q.js";/* empty css                 */import"./SVG-DBuw3s_z.js";import"./ShowScanDeliveryManifest-BbxieO-b.js";import"./DeliveryScanView-CnNTcqO_.js";import"./DeliveryView-Cqj_IBaw.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-BM5u4LI0.js";import"./components-DCJzUiqN.js";var A=y('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');n(()=>m(()=>import("./SVG-DBuw3s_z.js"),__vite__mapDeps([0,1,2,3])));const b="qrreader_delAM";function V(o){c(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{i()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:_?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},i=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[g.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(b,e);r.render(t),k("cameraScanManifest",r)};return(()=>{var e=A(),r=e.firstChild,s=r.firstChild,p=s.firstChild,d=s.nextSibling;return d.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),p.$$click=t,u(a=>(a=S()?"92vw":"420px")!=null?e.style.setProperty("width",a):e.style.removeProperty("width")),e})()}const Y=o=>{let t=o,i="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(i);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};h(["click"]);export{V as default,Y as parseTrcking};
