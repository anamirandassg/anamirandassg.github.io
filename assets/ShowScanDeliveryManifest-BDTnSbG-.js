const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CkJayHUo.js","assets/index-D1PHKxVd.js","assets/index-D4QuRvi-.css","assets/index-Ci0zXM0r.js","assets/FlexSpace-BsUaqGdw.js"])))=>i.map(i=>d[i]);
import{l as C,_ as x,a as y,o as I,m as $,i as b,d as _,f as A,e as q,t as T,j as N,g as G}from"./index-D1PHKxVd.js";import{H as L,a as M}from"./html5-qrcode-scanner-Cl8XE5pu.js";import"./DashManifest-WsZJXUWd.js";import"./ManifestDetails-n1O3wu6t.js";import"./DialogHRM-WkPnqwqG.js";import{g as w,i as O}from"./globalSignal-Bdf8QRru.js";import{a as k,u as j,f as B,q as Q}from"./Util-Ho0G8bBr.js";import"./DeliveryView-C5gCdcYV.js";import{setStatusD as H}from"./DeliveryScanView-CATYKLOZ.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";import"./debounces-B3TDGcT0.js";import"./ButonHrm-CVyefBI2.js";/* empty css                 */import"./SVG-CkJayHUo.js";import"./fontkit.es-DEjOtITv.js";import"./qrcode-C5vWJp7P.js";import"./Toast-D0_QTc6P.js";var V=T('<div><div><div class="_dsplFlx bottombx lowbordr"><h5>Confirmar Entrega</h5><div class="icon_status centerBx"></div></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div style=position:relative;><div></div><div id=qr-reader_SSDM style=width:300px>');const Z=C(()=>x(()=>import("./SVG-CkJayHUo.js"),__vite__mapDeps([0,1,2,3]))),z=C(()=>x(()=>import("./FlexSpace-BsUaqGdw.js"),__vite__mapDeps([4,1,2])));function ue(n){const[s,g]=y(""),[u,l]=y(""),[E,v]=y();I(()=>{k("cameraScanDelivery")?.clear()}),$(()=>{setTimeout(()=>{D()},90)});const S=(e,r)=>{e!==E()&&(v(e),setTimeout(()=>{v("")},3e3),P(e))},P=e=>{e||(e=s()),e=e.split("'").join("-"),new Date().getTime(),w?.latitude,w?.longitude,n?.status,N?.profile?.userId;let r=e.split("/");e.split("-").length>3&&(r=e.split("-").join);let t=r?.[0];t.indexOf("2300")===0&&(t="2300"+(t.split("2300")?.[1]).slice(0,5));let o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const a=new RegExp(o);let c=t.length===13&&a.test(t),h="^[0-9]{4}-[1-9]{4}";const m=new RegExp(h);let i=t.length===9&&m.test(t),f=r.length>4&&t.length===12,p={idairguide:r?.[0],":search0":r?.[1],":search1":r?.[3]};c&&(p={idairguide:"175-2383"+t.slice(3,7),":search0":t}),i&&(p={idairguide:"175-2383"+t.slice(0,4),":search0":t}),c||f||i?R(p):(l("alert"),setTimeout(()=>{l("")},1800))},R=async e=>{let r=await F(e),t=Object.keys(r)?.[0];if(r[t]?.cidentity){let o=r[t]?.cidentity,a=r[t]?.ssg_track_key,c={...n?.item};c?.customers?.[o]?.bagsNumb?.[a]?(l("success"),H(o,{[a]:"ST200"})):l("alert"),setTimeout(()=>{l("")},1800),c?.customers?.[o]?.bagsNumb?.[a],n?.callback(r[t])}else l("alert"),setTimeout(()=>{l("")},1800)},D=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[L.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new M("qr-reader_SSDM",e);r.render(S),j("cameraScanDelivery",r)};return(()=>{var e=V(),r=e.firstChild,t=r.firstChild,o=t.firstChild,a=o.nextSibling,c=r.nextSibling,h=c.firstChild,m=h.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),o.$$click=S,b(t,_(z,{}),a),a.$$click=()=>{},b(a,_(Z,{name:"keyboard",size:32,color:"#2b2b2b"})),A(i=>{var f=O()?"92vw":"420px",p=`scanOverlay ${u()} `,d=u()?"block":"none";return f!==i.e&&((i.e=f)!=null?e.style.setProperty("width",f):e.style.removeProperty("width")),p!==i.t&&G(m,i.t=p),d!==i.a&&((i.a=d)!=null?m.style.setProperty("display",d):m.style.removeProperty("display")),i},{e:void 0,t:void 0,a:void 0}),e})()}const me=n=>{let s=n,g="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const u=new RegExp(g);return s.length===13&&u.test(s)&&(s=s.slice(3,12)),s},F=async n=>{let s={params:n},g={...k(Q())}[802001];return s={...s,...g},await B(s)};q(["click"]);export{ue as default,me as parseTrcking};
