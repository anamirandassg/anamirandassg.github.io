const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-XC4K0ehX.js","assets/index-Ba5Julcs.js","assets/index-BmzAZVve.css","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as P,_ as $,b as k,i as f,d as w,e as C,g as S,q as A,h as E,t as R}from"./index-Ba5Julcs.js";import{c as F,g as _,S as q}from"./ShowQRPrintLabel-wUjJaD-g.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./fontkit.es-BqrvdTa9.js";import"./InitPrintServices-DzdLVHm-.js";import"./Util-C77m685E.js";import"./Toast-puvEduR5.js";var z=R('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Imprimir Etiqueta</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const W=P(()=>$(()=>import("./SVG-XC4K0ehX.js"),__vite__mapDeps([0,1,2,3])));function G(e){const r=t=>{F(e?.item?.code)},a=async()=>{let t=e?.item?.code,s={qr:await _(t)},n=await q([s]);window.open(n)},[d,{refetch:h}]=k(e?.item?.ssg_product_key,async t=>{let l=e?.item?.code;return await _(l)});return(()=>{var t=z(),l=t.firstChild,s=l.firstChild,n=s.firstChild,g=n.nextSibling,u=g.firstChild,v=u.nextSibling,c=s.nextSibling,b=c.firstChild,y=c.nextSibling,o=y.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),f(u,()=>e?.item?.name),v.$$click=a,f(v,w(W,{name:"printer",size:32})),c.style.setProperty("padding","16px"),y.style.setProperty("padding","16px"),o.$$click=r,f(o,()=>e?.item?.code),C(i=>{var p=S()?"96vw":"420px",x=d(),m=300/e?.item?.ssg_manifest_key?.length*1.82+"px";return p!==i.e&&((i.e=p)!=null?t.style.setProperty("width",p):t.style.removeProperty("width")),x!==i.t&&A(b,"src",i.t=x),m!==i.a&&((i.a=m)!=null?o.style.setProperty("font-size",m):o.style.removeProperty("font-size")),i},{e:void 0,t:void 0,a:void 0}),t})()}const O=e=>{let r=e,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(a);return r.length===13&&d.test(r)&&(r=r.slice(3,12)),r};E(["click"]);export{G as default,O as parseTrcking};
