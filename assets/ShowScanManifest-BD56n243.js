const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-Dm8x9331.js","assets/index-Cgtasu4w.js","assets/index-D4QuRvi-.css","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as n,_ as m,o as c,m as f,f as u,e as h,t as y,j as _}from"./index-Cgtasu4w.js";import{i as S}from"./globalSignal-DzAhHNVG.js";import{H as g,a as x}from"./html5-qrcode-scanner-Cl8XE5pu.js";import{updLinkedBags as v}from"./ManifestDetails-B7MpnxXS.js";import{CloseModal as w}from"./DialogHRM-DzfafcxX.js";import{LookupBagId as M}from"./DeliveryViewDetail-DOqX94g3.js";import{b as l,u as b}from"./Util-dbxHFpkD.js";import"./index-Ci0zXM0r.js";import"./manifestList-CSHEgbpJ.js";import"./debounces-DKhB0Q71.js";import"./fontkit.es-DEjOtITv.js";import"./ButonHrm-BLkvlmpn.js";/* empty css                 */import"./SVG-Dm8x9331.js";import"./ShowScanDeliveryManifest-BiYtSAq2.js";import"./DashManifest-BpbWq5nk.js";import"./App.module-CbHnVtRQ.js";import"./DeliveryView-Bv6B5lkS.js";import"./DeliveryScanView-DCPgsAx9.js";import"./qrcode-C5vWJp7P.js";import"./Toast-zpqYXU20.js";var A=y('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');n(()=>m(()=>import("./SVG-Dm8x9331.js"),__vite__mapDeps([0,1,2,3])));const k="qrreader_delAM";function V(o){c(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{i()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:_?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},i=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[g.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),b("cameraScanManifest",r)};return(()=>{var e=A(),r=e.firstChild,s=r.firstChild,p=s.firstChild,d=s.nextSibling;return d.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),p.$$click=t,u(a=>(a=S()?"92vw":"420px")!=null?e.style.setProperty("width",a):e.style.removeProperty("width")),e})()}const Y=o=>{let t=o,i="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(i);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};h(["click"]);export{V as default,Y as parseTrcking};