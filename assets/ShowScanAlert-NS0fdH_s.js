const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-y2izSF3R.js","assets/index-C6GDYHVF.js","assets/index-BRlA1Q7g.css","assets/Util-CJwQ4eI5.js","assets/CheckBoxSlide-DTTwch6p.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as f,_ as x,h as _,a as h,p as b,d as P,i as m,f as $,j as C,t as w}from"./index-C6GDYHVF.js";import{c as k,g as A}from"./ShowQRPrintLabel-D0Noia-S.js";import{y as E}from"./Util-CJwQ4eI5.js";import"./fontkit.es-yAesCE8D.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-tbDVtYPt.js";import"./Toast-B5mSnyhw.js";var S=w('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo </h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5></h5></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5>');f(()=>x(()=>import("./SVG-y2izSF3R.js"),__vite__mapDeps([0,1,2,3])));f(()=>x(()=>import("./CheckBoxSlide-DTTwch6p.js"),__vite__mapDeps([4,1,2,5])));function I(e){h(!1);const r=t=>{k(t)};return b(e?.val,async t=>await A(e?.val)),P(()=>{E()}),(()=>{var t=S(),s=t.firstChild,a=s.firstChild,g=a.firstChild,u=g.nextSibling,p=u.firstChild,d=a.nextSibling,i=d.firstChild,y=d.nextSibling,o=y.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","50px 25px"),p.$$click=()=>r(e?.bagnumber),m(p,()=>e?.bagnumber),d.style.setProperty("padding","16px"),i.$$click=()=>r(e?.msg1),m(i,()=>e?.msg1),y.style.setProperty("padding","16px"),o.$$click=()=>r(e?.msg2),m(o,()=>e?.msg2),$(l=>{var n=C()?"86vw":"420px",c=300/e?.msg1?.length*1.32+"px",v=300/e?.msg2?.length*1.32+"px";return n!==l.e&&((l.e=n)!=null?t.style.setProperty("width",n):t.style.removeProperty("width")),c!==l.t&&((l.t=c)!=null?i.style.setProperty("font-size",c):i.style.removeProperty("font-size")),v!==l.a&&((l.a=v)!=null?o.style.setProperty("font-size",v):o.style.removeProperty("font-size")),l},{e:void 0,t:void 0,a:void 0}),t})()}const L=e=>{let r=e,t="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(t);return r.length===13&&s.test(r)&&(r=r.slice(3,12)),r};_(["click"]);export{I as default,L as parseTrcking};
