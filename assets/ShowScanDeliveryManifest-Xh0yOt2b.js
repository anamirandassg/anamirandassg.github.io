const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BG3n_bzG.js","assets/index-rYb7uL3-.js","assets/index-NFdrrltd.css","assets/index-Ci0zXM0r.js","assets/FlexSpace-r3Vz7tHV.js"])))=>i.map(i=>d[i]);
import{l as C,_ as k,a as S,o as H,m as N,i as _,d as w,f as q,e as L,t as M,k as O,g as Q}from"./index-rYb7uL3-.js";import{H as Y,a as B}from"./html5-qrcode-scanner-Cl8XE5pu.js";import{g as x,i as j}from"./globalSignal-BFrObJU0.js";import{a as V,u as Z,b as z,f as F}from"./Util-DErZaF9J.js";import{s as G}from"./DeliveryScanView-DLtZMHJl.js";import"./index-Ci0zXM0r.js";import"./DialogHRM-BU1Zi4n8.js";import"./DeliveryView-CZ2ZhB-0.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-B5XMlhFC.js";import"./debounces-D86tEGjW.js";import"./components-CxCwPCGq.js";var W=M('<div><div><div class="_dsplFlx bottombx lowbordr"><h5>Confirmar Entrega</h5><div class="icon_status centerBx"></div></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div style=position:relative;><div></div><div id=qr-reader_SSDM style=width:300px>');const J=C(()=>k(()=>import("./SVG-BG3n_bzG.js"),__vite__mapDeps([0,1,2,3]))),K=C(()=>k(()=>import("./FlexSpace-r3Vz7tHV.js"),__vite__mapDeps([4,1,2])));function ge(n){const[s,g]=S(""),[d,i]=S(""),[E,v]=S();H(()=>{V("cameraScanDelivery")?.clear()}),N(()=>{setTimeout(()=>{D()},90)});const b=(e,r)=>{e!==E()&&(v(e),setTimeout(()=>{v("")},3e3),R(e))},R=e=>{e||(e=s()),e=e.split("'").join("-"),new Date().getTime(),x?.latitude,x?.longitude,n?.status,O?.profile?.userId;let r=e.split("/");e.split("-").length>3&&(r=e.split("-").join);let t=r?.[0];t.indexOf("2300")===0&&(t="2300"+(t.split("2300")?.[1]).slice(0,5));let o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const a=new RegExp(o);let c=t.length===13&&a.test(t),f="^SS24[0-9]{6}";const p=new RegExp(f);let l=t.length===10&&p.test(t),u="^Y24[0-9]{6}";const h=new RegExp(u);let m=t.length===9&&h.test(t),I="^[0-9]";const $=new RegExp(I);let A=t.length>6&&t.length<11&&$.test(t),T=r.length>4&&t.length===12,y={idairguide:"all",":search0":r?.[1],":search1":r?.[3]};c&&(t.slice(3,7),y={idairguide:"all",":search0":t}),(l||A||m)&&(t.slice(0,4),y={idairguide:"all",":search0":t}),c||T||l?P(y):(i("alert"),setTimeout(()=>{i("")},1800))},P=async e=>{let r=await U(e),t=Object.keys(r)?.[0];if(r[t]?.cidentity){let o=r[t]?.cidentity,a=r[t]?.ssg_track_key,c={...n?.item};c?.customers?.[o]?.bagsNumb?.[a]?(i("success"),G(o,{[a]:"ST200"})):i("alert"),setTimeout(()=>{i("")},1800),c?.customers?.[o]?.bagsNumb?.[a],n?.callback(r[t])}else i("alert"),setTimeout(()=>{i("")},1800)},D=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[Y.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},r=new B("qr-reader_SSDM",e);r.render(b),Z("cameraScanDelivery",r)};return(()=>{var e=W(),r=e.firstChild,t=r.firstChild,o=t.firstChild,a=o.nextSibling,c=r.nextSibling,f=c.firstChild,p=f.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),o.$$click=b,_(t,w(K,{}),a),a.$$click=()=>{},_(a,w(J,{name:"keyboard",size:32,color:"#2b2b2b"})),q(l=>{var u=j()?"92vw":"420px",h=`scanOverlay ${d()} `,m=d()?"block":"none";return u!==l.e&&((l.e=u)!=null?e.style.setProperty("width",u):e.style.removeProperty("width")),h!==l.t&&Q(p,l.t=h),m!==l.a&&((l.a=m)!=null?p.style.setProperty("display",m):p.style.removeProperty("display")),l},{e:void 0,t:void 0,a:void 0}),e})()}const fe=n=>{let s=n,g="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(g);return s.length===13&&d.test(s)&&(s=s.slice(3,12)),s},U=async n=>{let s={params:n},g=z(802001);return s={...s,...g},await F(s)};L(["click"]);export{ge as default,fe as parseTrcking};
