const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-Bz0uYlSP.js","assets/index-CalfAZQb.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js"])))=>i.map(i=>d[i]);
import{l as n,_ as c,o as m,e as f,h as u,j as h,d as y,t as _,g}from"./index-CalfAZQb.js";import{H as S,a as x}from"./html5-qrcode-scanner-QeobMvFI.js";import{updLinkedBags as v}from"./ManifestDetails-BmuuoKc-.js";import{CloseModal as w}from"./DialogHRM-_M25lKJp.js";import{LookupBagId as M}from"./DeliveryViewDetail-B9h_wjdg.js";import{e as l,u as A}from"./Util-DZlMHKqJ.js";import"./debounces-Dat3Yq5L.js";import"./ButonHrm-C6Wt0q2F.js";/* empty css                 */import"./SVG-Bz0uYlSP.js";import"./ShowQRPrintLabel-MaovzMnF.js";import"./PDFButton-ClnWeH7R.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-DkuHxdU6.js";import"./InitPrintServices-QWHeDiid.js";import"./Toast-TZqq8KrY.js";import"./ShowScanDeliveryManifest-DhXvkdV6.js";import"./DeliveryScanView-Di91l5Is.js";import"./DeliveryView-CMrAVKvd.js";import"./components-EG2JwDsB.js";var b=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar Manifiesto</h5></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qrreader_delAM style=width:300px>');n(()=>c(()=>import("./SVG-Bz0uYlSP.js"),__vite__mapDeps([0,1,2,3])));const k="qrreader_delAM";function U(o){m(()=>{l("cameraScanManifest")?.clear()}),f(()=>{setTimeout(()=>{s()},90)});const t=async e=>{e&&(await M({id:e})&&(await v({ssg_manifest_key:e},{linkedUser:g?.profile?.userId}),l("cameraScanManifest")?.clear(),o?.refetch?.()),w(o?.modalId))},s=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[S.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new x(k,e);r.render(t),A("cameraScanManifest",r)};return(()=>{var e=b(),r=e.firstChild,i=r.firstChild,d=i.firstChild,p=i.nextSibling;return p.firstChild,e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),d.$$click=t,u(a=>(a=h()?"92vw":"420px")!=null?e.style.setProperty("width",a):e.style.removeProperty("width")),e})()}const V=o=>{let t=o,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const e=new RegExp(s);return t.length===13&&e.test(t)&&(t=t.slice(3,12)),t};y(["click"]);export{U as default,V as parseTrcking};
