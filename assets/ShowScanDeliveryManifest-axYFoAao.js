const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-B-5yn0I7.js","assets/index-DUg-L_Uo.js","assets/index-lCkr9jrN.css","assets/FlexSpace-BLgYV-Go.js"])))=>i.map(i=>d[i]);
import{l as C,_ as E,a as S,r as q,s as H,i as _,d as w,e as N,g as Q,f as L,h as M,t as O,o as Y,an as x,n as B,Q as j,p as V,q as Z}from"./index-DUg-L_Uo.js";import{H as z,a as F}from"./html5-qrcode-scanner-o4dsEeoF.js";import{s as G}from"./DeliveryScanView-Bqxw33RH.js";import"./DialogHRM-DRleNzWL.js";import"./DeliveryView-BgefV90-.js";import"./PDFButton-CHzwwz_Z.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-CrXhvqSW.js";import"./Toast-CuTxNHrB.js";import"./debounces-CBZKqaaQ.js";import"./components-CQHbB_Q_.js";var W=O('<div><div><div class="_dsplFlx bottombx lowbordr"><h5>Confirmar Entrega</h5><div class="icon_status centerBx"></div></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div style=position:relative;><div></div><div id=qr-reader_SSDM style=width:300px>');const J=C(()=>E(()=>import("./SVG-B-5yn0I7.js"),__vite__mapDeps([0,1,2]))),K=C(()=>E(()=>import("./FlexSpace-BLgYV-Go.js"),__vite__mapDeps([3,1,2])));function pe(n){const[r,m]=S(""),[d,i]=S(""),[k,v]=S();q(()=>{Y("cameraScanDelivery")?.clear()}),H(()=>{setTimeout(()=>{D()},90)});const b=(e,s)=>{e!==k()&&(v(e),setTimeout(()=>{v("")},3e3),R(e))},R=e=>{e||(e=r()),e=e.split("'").join("-"),new Date().getTime(),x?.latitude,x?.longitude,n?.status,B?.profile?.userId;let s=e.split("/");e.split("-").length>3&&(s=e.split("-").join);let t=s?.[0];t.indexOf("2300")===0&&(t="2300"+(t.split("2300")?.[1]).slice(0,5));let o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const a=new RegExp(o);let c=t.length===13&&a.test(t),h="^SS24[0-9]{6}";const p=new RegExp(h);let l=t.length===10&&p.test(t),u="^Y24[0-9]{6}";const f=new RegExp(u);let g=t.length===9&&f.test(t),I="^[0-9]";const $=new RegExp(I);let A=t.length>6&&t.length<11&&$.test(t),T=s.length>4&&t.length===12,y={idairguide:"all",":search0":s?.[1],":search1":s?.[3]};c&&(t.slice(3,7),y={idairguide:"all",":search0":t}),(l||A||g)&&(t.slice(0,4),y={idairguide:"all",":search0":t}),c||T||l?P(y):(i("alert"),setTimeout(()=>{i("")},1800))},P=async e=>{let s=await U(e),t=Object.keys(s)?.[0];if(s[t]?.cidentity){let o=s[t]?.cidentity,a=s[t]?.ssg_track_key,c={...n?.item};c?.customers?.[o]?.bagsNumb?.[a]?(i("success"),G(o,{[a]:"ST200"})):i("alert"),setTimeout(()=>{i("")},1800),c?.customers?.[o]?.bagsNumb?.[a],n?.callback(s[t])}else i("alert"),setTimeout(()=>{i("")},1800)},D=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[z.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},s=new F("qr-reader_SSDM",e);s.render(b),j("cameraScanDelivery",s)};return(()=>{var e=W(),s=e.firstChild,t=s.firstChild,o=t.firstChild,a=o.nextSibling,c=s.nextSibling,h=c.firstChild,p=h.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),o.$$click=b,_(t,w(K,{}),a),a.$$click=()=>{},_(a,w(J,{name:"keyboard",size:32,color:"#2b2b2b"})),N(l=>{var u=Q()?"92vw":"420px",f=`scanOverlay ${d()} `,g=d()?"block":"none";return u!==l.e&&((l.e=u)!=null?e.style.setProperty("width",u):e.style.removeProperty("width")),f!==l.t&&L(p,l.t=f),g!==l.a&&((l.a=g)!=null?p.style.setProperty("display",g):p.style.removeProperty("display")),l},{e:void 0,t:void 0,a:void 0}),e})()}const ue=n=>{let r=n,m="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(m);return r.length===13&&d.test(r)&&(r=r.slice(3,12)),r},U=async n=>{let r={params:n},m=V(802001);return r={...r,...m},await Z(r)};M(["click"]);export{pe as default,ue as parseTrcking};