const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-B55pLqwj.js","assets/index-DDHcSRy_.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js","assets/CheckBoxSlide-DjPFOW0B.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as x,_ as f,d as _,a as h,p as b,e as P,i as p,h as $,j as C,t as w}from"./index-DDHcSRy_.js";import{c as k,g as A}from"./ShowQRPrintLabel-R98NyShe.js";import{y as E}from"./Util-DZlMHKqJ.js";import"./PDFButton-ClnWeH7R.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-DkuHxdU6.js";import"./InitPrintServices-QWHeDiid.js";import"./Toast-Dv7c-d-M.js";var S=w('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo </h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5></h5></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5>');x(()=>f(()=>import("./SVG-B55pLqwj.js"),__vite__mapDeps([0,1,2,3])));x(()=>f(()=>import("./CheckBoxSlide-DjPFOW0B.js"),__vite__mapDeps([4,1,2,5])));function L(e){h(!1);const r=t=>{k(t)};return b(e?.val,async t=>await A(e?.val)),P(()=>{E()}),(()=>{var t=S(),s=t.firstChild,a=s.firstChild,g=a.firstChild,u=g.nextSibling,v=u.firstChild,d=a.nextSibling,i=d.firstChild,y=d.nextSibling,o=y.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","50px 25px"),v.$$click=()=>r(e?.bagnumber),p(v,()=>e?.bagnumber),d.style.setProperty("padding","16px"),i.$$click=()=>r(e?.msg1),p(i,()=>e?.msg1),y.style.setProperty("padding","16px"),o.$$click=()=>r(e?.msg2),p(o,()=>e?.msg2),$(l=>{var n=C()?"86vw":"420px",c=300/e?.msg1?.length*1.32+"px",m=300/e?.msg2?.length*1.32+"px";return n!==l.e&&((l.e=n)!=null?t.style.setProperty("width",n):t.style.removeProperty("width")),c!==l.t&&((l.t=c)!=null?i.style.setProperty("font-size",c):i.style.removeProperty("font-size")),m!==l.a&&((l.a=m)!=null?o.style.setProperty("font-size",m):o.style.removeProperty("font-size")),l},{e:void 0,t:void 0,a:void 0}),t})()}const O=e=>{let r=e,t="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(t);return r.length===13&&s.test(r)&&(r=r.slice(3,12)),r};_(["click"]);export{L as default,O as parseTrcking};
