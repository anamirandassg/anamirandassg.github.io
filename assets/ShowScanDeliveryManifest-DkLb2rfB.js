const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-C7kEtqG-.js","assets/index-CQuD3DCq.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js","assets/FlexSpace-tYfMYvkD.js"])))=>i.map(i=>d[i]);
import{l as C,_ as E,a as S,o as H,e as N,i as _,f as w,h as q,j as L,m as M,d as O,t as Q,R as x,g as Y}from"./index-CQuD3DCq.js";import{H as j,a as B}from"./html5-qrcode-scanner-QeobMvFI.js";import{e as V,u as Z,g as z,f as F}from"./Util-DZlMHKqJ.js";import{s as G}from"./DeliveryScanView-CRKtHxs0.js";import"./DialogHRM-CjlPBnUE.js";import"./DeliveryView-D2OA0PtV.js";import"./PDFButton-ClnWeH7R.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-DkuHxdU6.js";import"./Toast-93Yb8nPc.js";import"./debounces-CIWj1gH4.js";import"./components-DYk2IIwa.js";var W=Q('<div><div><div class="_dsplFlx bottombx lowbordr"><h5>Confirmar Entrega</h5><div class="icon_status centerBx"></div></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div style=position:relative;><div></div><div id=qr-reader_SSDM style=width:300px>');const J=C(()=>E(()=>import("./SVG-C7kEtqG-.js"),__vite__mapDeps([0,1,2,3]))),K=C(()=>E(()=>import("./FlexSpace-tYfMYvkD.js"),__vite__mapDeps([4,1,2])));function ue(n){const[r,g]=S(""),[d,i]=S(""),[R,v]=S();H(()=>{V("cameraScanDelivery")?.clear()}),N(()=>{setTimeout(()=>{D()},90)});const b=(e,s)=>{e!==R()&&(v(e),setTimeout(()=>{v("")},3e3),k(e))},k=e=>{e||(e=r()),e=e.split("'").join("-"),new Date().getTime(),x?.latitude,x?.longitude,n?.status,Y?.profile?.userId;let s=e.split("/");e.split("-").length>3&&(s=e.split("-").join);let t=s?.[0];t.indexOf("2300")===0&&(t="2300"+(t.split("2300")?.[1]).slice(0,5));let o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const a=new RegExp(o);let c=t.length===13&&a.test(t),h="^SS24[0-9]{6}";const p=new RegExp(h);let l=t.length===10&&p.test(t),u="^Y24[0-9]{6}";const f=new RegExp(u);let m=t.length===9&&f.test(t),I="^[0-9]";const $=new RegExp(I);let A=t.length>6&&t.length<11&&$.test(t),T=s.length>4&&t.length===12,y={idairguide:"all",":search0":s?.[1],":search1":s?.[3]};c&&(t.slice(3,7),y={idairguide:"all",":search0":t}),(l||A||m)&&(t.slice(0,4),y={idairguide:"all",":search0":t}),c||T||l?P(y):(i("alert"),setTimeout(()=>{i("")},1800))},P=async e=>{let s=await U(e),t=Object.keys(s)?.[0];if(s[t]?.cidentity){let o=s[t]?.cidentity,a=s[t]?.ssg_track_key,c={...n?.item};c?.customers?.[o]?.bagsNumb?.[a]?(i("success"),G(o,{[a]:"ST200"})):i("alert"),setTimeout(()=>{i("")},1800),c?.customers?.[o]?.bagsNumb?.[a],n?.callback(s[t])}else i("alert"),setTimeout(()=>{i("")},1800)},D=()=>{let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[j.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},s=new B("qr-reader_SSDM",e);s.render(b),Z("cameraScanDelivery",s)};return(()=>{var e=W(),s=e.firstChild,t=s.firstChild,o=t.firstChild,a=o.nextSibling,c=s.nextSibling,h=c.firstChild,p=h.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),o.$$click=b,_(t,w(K,{}),a),a.$$click=()=>{},_(a,w(J,{name:"keyboard",size:32,color:"#2b2b2b"})),q(l=>{var u=L()?"92vw":"420px",f=`scanOverlay ${d()} `,m=d()?"block":"none";return u!==l.e&&((l.e=u)!=null?e.style.setProperty("width",u):e.style.removeProperty("width")),f!==l.t&&M(p,l.t=f),m!==l.a&&((l.a=m)!=null?p.style.setProperty("display",m):p.style.removeProperty("display")),l},{e:void 0,t:void 0,a:void 0}),e})()}const me=n=>{let r=n,g="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(g);return r.length===13&&d.test(r)&&(r=r.slice(3,12)),r},U=async n=>{let r={params:n},g=z(802001);return r={...r,...g},await F(r)};O(["click"]);export{ue as default,me as parseTrcking};
