const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DmfBQ1XE.js","assets/index-Rl3TmLYH.js","assets/index-BRlA1Q7g.css","assets/Util-DmBsvgxN.js"])))=>i.map(i=>d[i]);
import{l as P,_ as k,p as $,i as f,e as w,f as C,j as S,k as A,h as E,t as R}from"./index-Rl3TmLYH.js";import{c as F,g as _,S as z}from"./ShowQRPrintLabel-CiDMgOWm.js";import"./fontkit.es-muN7o4LY.js";import"./Util-DmBsvgxN.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-D_5X27CX.js";import"./Toast-B7V57fet.js";var W=R('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Imprimir Etiqueta</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const q=P(()=>k(()=>import("./SVG-DmfBQ1XE.js"),__vite__mapDeps([0,1,2,3])));function j(t){const r=e=>{F(t?.item?.code)},a=async()=>{let e=t?.item?.code,s={qr:await _(e)},n=await z([s]);window.open(n)},[d,{refetch:h}]=$(t?.item?.ssg_product_key,async e=>{let l=t?.item?.code;return await _(l)});return(()=>{var e=W(),l=e.firstChild,s=l.firstChild,n=s.firstChild,g=n.nextSibling,u=g.firstChild,v=u.nextSibling,c=s.nextSibling,b=c.firstChild,y=c.nextSibling,o=y.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),f(u,()=>t?.item?.name),v.$$click=a,f(v,w(q,{name:"printer",size:32})),c.style.setProperty("padding","16px"),y.style.setProperty("padding","16px"),o.$$click=r,f(o,()=>t?.item?.code),C(i=>{var p=S()?"96vw":"420px",x=d(),m=300/t?.item?.ssg_manifest_key?.length*1.82+"px";return p!==i.e&&((i.e=p)!=null?e.style.setProperty("width",p):e.style.removeProperty("width")),x!==i.t&&A(b,"src",i.t=x),m!==i.a&&((i.a=m)!=null?o.style.setProperty("font-size",m):o.style.removeProperty("font-size")),i},{e:void 0,t:void 0,a:void 0}),e})()}const B=t=>{let r=t,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(a);return r.length===13&&d.test(r)&&(r=r.slice(3,12)),r};E(["click"]);export{j as default,B as parseTrcking};
