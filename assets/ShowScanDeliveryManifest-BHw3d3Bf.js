const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DEKs_P2n.js","assets/index-Cv4YO0m0.js","assets/index-ALtnuvRO.css","assets/Util-Df9CfxGL.js","assets/FlexSpace-BPCicj0R.js"])))=>i.map(i=>d[i]);
import{l as C,_ as E,a as S,o as H,b as N,i as _,d as w,e as Q,f as q,g as L,h as M,t as O,Q as x,n as Y}from"./index-Cv4YO0m0.js";import{H as B,a as j}from"./html5-qrcode-scanner-B_x_kgAL.js";import{d as V,u as Z,c as z,f as F}from"./Util-Df9CfxGL.js";import{s as G}from"./DeliveryScanView-jDx7ieVx.js";import"./DialogHRM-BWVWEPWN.js";import"./DeliveryView-DS3S54od.js";import"./PDFButton-BDIa4If0.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-6TA5hJ2T.js";import"./Toast-DwNaU0FC.js";import"./debounces-CQMmt6Zm.js";import"./components-BFyEzvWl.js";var W=O('<div><div><div class="_dsplFlx bottombx lowbordr"><h5>Confirmar Entrega</h5><div class="icon_status centerBx"></div></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div style=position:relative;><div></div><div id=qr-reader_SSDM style=width:300px>');const J=C(()=>E(()=>import("./SVG-DEKs_P2n.js"),__vite__mapDeps([0,1,2,3]))),K=C(()=>E(()=>import("./FlexSpace-BPCicj0R.js"),__vite__mapDeps([4,1,2])));function ue(n){const[r,g]=S(""),[d,i]=S(""),[k,v]=S();H(()=>{V("cameraScanDelivery")?.clear()}),N(()=>{setTimeout(()=>{D()},90)});const b=(e,s)=>{e!==k()&&(v(e),setTimeout(()=>{v("")},3e3),R(e))},R=e=>{e||(e=r()),e=e.split("'").join("-"),new Date().getTime(),x?.latitude,x?.longitude,n?.status,Y?.profile?.userId;let s=e.split("/");e.split("-").length>3&&(s=e.split("-").join);let t=s?.[0];t.indexOf("2300")===0&&(t="2300"+(t.split("2300")?.[1]).slice(0,5));let o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const a=new RegExp(o);let c=t.length===13&&a.test(t),h="^SS24[0-9]{6}";const p=new RegExp(h);let l=t.length===10&&p.test(t),u="^Y24[0-9]{6}";const f=new RegExp(u);let m=t.length===9&&f.test(t),I="^[0-9]";const $=new RegExp(I);let A=t.length>6&&t.length<11&&$.test(t),T=s.length>4&&t.length===12,y={idairguide:"all",":search0":s?.[1],":search1":s?.[3]};c&&(t.slice(3,7),y={idairguide:"all",":search0":t}),(l||A||m)&&(t.slice(0,4),y={idairguide:"all",":search0":t}),c||T||l?P(y):(i("alert"),setTimeout(()=>{i("")},1800))},P=async e=>{let s=await U(e),t=Object.keys(s)?.[0];if(s[t]?.cidentity){let o=s[t]?.cidentity,a=s[t]?.ssg_track_key,c={...n?.item};c?.customers?.[o]?.bagsNumb?.[a]?(i("success"),G(o,{[a]:"ST200"})):i("alert"),setTimeout(()=>{i("")},1800),c?.customers?.[o]?.bagsNumb?.[a],n?.callback(s[t])}else i("alert"),setTimeout(()=>{i("")},1800)},D=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[B.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},s=new j("qr-reader_SSDM",e);s.render(b),Z("cameraScanDelivery",s)};return(()=>{var e=W(),s=e.firstChild,t=s.firstChild,o=t.firstChild,a=o.nextSibling,c=s.nextSibling,h=c.firstChild,p=h.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),o.$$click=b,_(t,w(K,{}),a),a.$$click=()=>{},_(a,w(J,{name:"keyboard",size:32,color:"#2b2b2b"})),Q(l=>{var u=q()?"92vw":"420px",f=`scanOverlay ${d()} `,m=d()?"block":"none";return u!==l.e&&((l.e=u)!=null?e.style.setProperty("width",u):e.style.removeProperty("width")),f!==l.t&&L(p,l.t=f),m!==l.a&&((l.a=m)!=null?p.style.setProperty("display",m):p.style.removeProperty("display")),l},{e:void 0,t:void 0,a:void 0}),e})()}const me=n=>{let r=n,g="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(g);return r.length===13&&d.test(r)&&(r=r.slice(3,12)),r},U=async n=>{let r={params:n},g=z(802001);return r={...r,...g},await F(r)};M(["click"]);export{ue as default,me as parseTrcking};
