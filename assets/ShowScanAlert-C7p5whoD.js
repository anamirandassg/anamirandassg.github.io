const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-C1zA0ONa.js","assets/index-BSIjyJfa.js","assets/index-mNJWtuMT.css","assets/Util-7ERmh4Cp.js","assets/CheckBoxSlide-CI14GJCD.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as x,_ as f,d as _,a as h,p as b,e as P,i as p,h as $,j as C,t as w}from"./index-BSIjyJfa.js";import{c as k,g as A}from"./ShowQRPrintLabel-NdyrXERw.js";import{y as E}from"./Util-7ERmh4Cp.js";import"./PDFButton-DXdwVZ_H.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-hw3Kqgbm.js";import"./InitPrintServices-C5c3gOIX.js";import"./Toast-2Hx1ttoB.js";var S=w('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo </h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5></h5></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5>');x(()=>f(()=>import("./SVG-C1zA0ONa.js"),__vite__mapDeps([0,1,2,3])));x(()=>f(()=>import("./CheckBoxSlide-CI14GJCD.js"),__vite__mapDeps([4,1,2,5])));function L(e){h(!1);const r=t=>{k(t)};return b(e?.val,async t=>await A(e?.val)),P(()=>{E()}),(()=>{var t=S(),s=t.firstChild,a=s.firstChild,g=a.firstChild,u=g.nextSibling,v=u.firstChild,d=a.nextSibling,i=d.firstChild,y=d.nextSibling,o=y.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","50px 25px"),v.$$click=()=>r(e?.bagnumber),p(v,()=>e?.bagnumber),d.style.setProperty("padding","16px"),i.$$click=()=>r(e?.msg1),p(i,()=>e?.msg1),y.style.setProperty("padding","16px"),o.$$click=()=>r(e?.msg2),p(o,()=>e?.msg2),$(l=>{var n=C()?"86vw":"420px",c=300/e?.msg1?.length*1.32+"px",m=300/e?.msg2?.length*1.32+"px";return n!==l.e&&((l.e=n)!=null?t.style.setProperty("width",n):t.style.removeProperty("width")),c!==l.t&&((l.t=c)!=null?i.style.setProperty("font-size",c):i.style.removeProperty("font-size")),m!==l.a&&((l.a=m)!=null?o.style.setProperty("font-size",m):o.style.removeProperty("font-size")),l},{e:void 0,t:void 0,a:void 0}),t})()}const O=e=>{let r=e,t="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(t);return r.length===13&&s.test(r)&&(r=r.slice(3,12)),r};_(["click"]);export{L as default,O as parseTrcking};
