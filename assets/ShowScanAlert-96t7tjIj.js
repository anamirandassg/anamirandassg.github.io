const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DyP6fYvf.js","assets/index-i8UwSibR.js","assets/index-DaYrm968.css","assets/Util-B8-DWw-6.js","assets/CheckBoxSlide-C8qkI9Je.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as x,_ as f,d as _,a as h,p as b,e as P,i as m,h as $,j as C,t as w}from"./index-i8UwSibR.js";import{c as k,g as A}from"./ShowQRPrintLabel-uP2CvLwW.js";import{y as E}from"./Util-B8-DWw-6.js";import"./fontkit.es-BHcUmD3g.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-BhTuseMZ.js";import"./Toast-D_AIkvVg.js";var S=w('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo </h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5></h5></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5>');x(()=>f(()=>import("./SVG-DyP6fYvf.js"),__vite__mapDeps([0,1,2,3])));x(()=>f(()=>import("./CheckBoxSlide-C8qkI9Je.js"),__vite__mapDeps([4,1,2,5])));function I(t){h(!1);const r=e=>{k(e)};return b(t?.val,async e=>await A(t?.val)),P(()=>{E()}),(()=>{var e=S(),s=e.firstChild,a=s.firstChild,g=a.firstChild,u=g.nextSibling,p=u.firstChild,d=a.nextSibling,i=d.firstChild,y=d.nextSibling,o=y.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","50px 25px"),p.$$click=()=>r(t?.bagnumber),m(p,()=>t?.bagnumber),d.style.setProperty("padding","16px"),i.$$click=()=>r(t?.msg1),m(i,()=>t?.msg1),y.style.setProperty("padding","16px"),o.$$click=()=>r(t?.msg2),m(o,()=>t?.msg2),$(l=>{var n=C()?"86vw":"420px",c=300/t?.msg1?.length*1.32+"px",v=300/t?.msg2?.length*1.32+"px";return n!==l.e&&((l.e=n)!=null?e.style.setProperty("width",n):e.style.removeProperty("width")),c!==l.t&&((l.t=c)!=null?i.style.setProperty("font-size",c):i.style.removeProperty("font-size")),v!==l.a&&((l.a=v)!=null?o.style.setProperty("font-size",v):o.style.removeProperty("font-size")),l},{e:void 0,t:void 0,a:void 0}),e})()}const L=t=>{let r=t,e="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(e);return r.length===13&&s.test(r)&&(r=r.slice(3,12)),r};_(["click"]);export{I as default,L as parseTrcking};
