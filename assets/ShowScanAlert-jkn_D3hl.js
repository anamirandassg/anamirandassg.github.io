const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BIkIVnTe.js","assets/index-oju9DPd2.js","assets/index-B8E-m_hz.css","assets/index-Ci0zXM0r.js","assets/CheckBoxSlide-ChHYzNQk.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import"./Toast-EcAR2H5f.js";import{k as h,f as _,n as $,t as S,l as w,_ as P,e as E,a as k,b as A,m as R,i as y}from"./index-oju9DPd2.js";import{g as b,i as C}from"./globalSignal-Dx2wg24B.js";import{b as x,f as D,a as F,k as I}from"./Util-Dx3vfczV.js";import{g as L,c as W}from"./ShowQRPrintLabel-jCaHmj9u.js";let m=[300,80,300,80,300,80,300];const z=t=>{t=t.split("'").join("-");let a=t.split("/");t.split("-").length>3&&(a=t.split("-").join);let e=a?.[0];e.indexOf("2300")===0&&(e="2300"+(e.split("2300")?.[1]).slice(0,5)),console.log(e);let r="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const l=new RegExp(r);e.length===13&&l.test(e);let o="^[0-9]{4}-[1-9]{4}";const f=new RegExp(o);e.length===9&&f.test(e),a.length>4&&e.length;let d="^Y24[0-9]{6}";const c=new RegExp(d);e.length===9&&c.test(e);let i="^SS24[0-9]{6}";const g=new RegExp(i);e.length===10&&g.test(e);let n="^[0-9]";const s=new RegExp(n);return e.length>6&&e.length<11&&s.test(e),{params:{idairguide:"all",":search0":e},code:1}},T=async(t,a)=>{let e=z(t),r={timeStamp:new Date().getTime(),latitude:b?.latitude,longitude:b?.longitude,statusId:a,userId:h?.profile?.userId,userName:h?.profile?.name};if(e?.params)return await M(e.params,r);{let l=e?.txt||e?.params?.search0;return navigator.vibrate(m),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:l}}}}}},M=async(t,a)=>{let e=await O(t,a);if(console.log(e),e.error){let r={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(m),{error:{alert:"error",color:"rgb(200 25 60)",scanData:r}}}else{if(e.code===203||e.code===303)return navigator.vibrate(m),{error:{alert:"warning",color:"#FF6F1D",scanData:e.data}};if(e.code===200)return navigator.vibrate(500),{error:{alert:"success",color:"#0f5223ff",scanData:e.data}}}},O=async(t,a)=>{let e={params:t,form:a},r=x(802001);return r=x(802008),e={...e,...r},await D(e)};var Y=S('<div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=ssg>');function V(){return(()=>{var t=Y(),a=t.firstChild,e=a.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#fff"),t.style.setProperty("border-radius","13"),a.style.setProperty("padding","16px"),_(r=>{var l=C()?"96vw":"420px",o=F("SSG.webp");return l!==r.e&&((r.e=l)!=null?t.style.setProperty("width",l):t.style.removeProperty("width")),o!==r.t&&$(e,"src",r.t=o),r},{e:void 0,t:void 0}),t})()}var j=S('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo </h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5></h5></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5>');w(()=>P(()=>import("./SVG-BIkIVnTe.js"),__vite__mapDeps([0,1,2,3])));w(()=>P(()=>import("./CheckBoxSlide-ChHYzNQk.js"),__vite__mapDeps([4,1,2,5])));function N(t){k(!1);const a=e=>{W(e)};return A(t?.val,async e=>await L(t?.val)),R(()=>{I()}),(()=>{var e=j(),r=e.firstChild,l=r.firstChild,o=l.firstChild,f=o.nextSibling,d=f.firstChild,c=l.nextSibling,i=c.firstChild,g=c.nextSibling,n=g.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","50px 25px"),d.$$click=()=>a(t?.bagnumber),y(d,()=>t?.bagnumber),c.style.setProperty("padding","16px"),i.$$click=()=>a(t?.msg1),y(i,()=>t?.msg1),g.style.setProperty("padding","16px"),n.$$click=()=>a(t?.msg2),y(n,()=>t?.msg2),_(s=>{var p=C()?"86vw":"420px",u=300/t?.msg1?.length*1.32+"px",v=300/t?.msg2?.length*1.32+"px";return p!==s.e&&((s.e=p)!=null?e.style.setProperty("width",p):e.style.removeProperty("width")),u!==s.t&&((s.t=u)!=null?i.style.setProperty("font-size",u):i.style.removeProperty("font-size")),v!==s.a&&((s.a=v)!=null?n.style.setProperty("font-size",v):n.style.removeProperty("font-size")),s},{e:void 0,t:void 0,a:void 0}),e})()}E(["click"]);export{V as S,N as a,T as h};
