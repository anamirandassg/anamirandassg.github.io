const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-ccCeZ7vA.js","assets/index-BqDbKQoA.js","assets/index-NFdrrltd.css","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as P,_ as k,b as $,i as f,d as w,f as C,e as S,t as A,n as E}from"./index-BqDbKQoA.js";import{i as R}from"./globalSignal-C5WWW7Ov.js";import{c as F,g as _,S as z}from"./ShowQRPrintLabel-DW8qbrMg.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-NgpjRc8z.js";import"./Util-DErZaF9J.js";import"./Toast-TqHXJgEe.js";var W=A('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Imprimir Etiqueta</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const q=P(()=>k(()=>import("./SVG-ccCeZ7vA.js"),__vite__mapDeps([0,1,2,3])));function U(e){const r=t=>{F(e?.item?.code)},a=async()=>{let t=e?.item?.code,s=await _(t),n=await z([{qr:s}],!0,s);window.open(n)},[d,{refetch:h}]=$(e?.item?.ssg_product_key,async t=>{let s=e?.item?.code;return await _(s)});return(()=>{var t=W(),s=t.firstChild,l=s.firstChild,n=l.firstChild,g=n.nextSibling,u=g.firstChild,v=u.nextSibling,c=l.nextSibling,b=c.firstChild,y=c.nextSibling,o=y.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),f(u,()=>e?.item?.name),v.$$click=a,f(v,w(q,{name:"printer",size:32})),c.style.setProperty("padding","16px"),y.style.setProperty("padding","16px"),o.$$click=r,f(o,()=>e?.item?.code),C(i=>{var p=R()?"96vw":"420px",x=d(),m=300/e?.item?.ssg_manifest_key?.length*1.82+"px";return p!==i.e&&((i.e=p)!=null?t.style.setProperty("width",p):t.style.removeProperty("width")),x!==i.t&&E(b,"src",i.t=x),m!==i.a&&((i.a=m)!=null?o.style.setProperty("font-size",m):o.style.removeProperty("font-size")),i},{e:void 0,t:void 0,a:void 0}),t})()}const Z=e=>{let r=e,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(a);return r.length===13&&d.test(r)&&(r=r.slice(3,12)),r};S(["click"]);export{U as default,Z as parseTrcking};
