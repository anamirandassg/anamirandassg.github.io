const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-krqrZGgX.js","assets/index-PZmRD6qC.js","assets/index-W9fcnr7G.css","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as P,_ as $,b as w,i as f,d as C,f as S,e as R,t as A,n as E}from"./index-PZmRD6qC.js";import{i as F}from"./globalSignal-AlJRtNUL.js";import{c as z,g as u,S as W}from"./ShowQRPrintLabel-Bh1mIHxi.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-B3KIQnKW.js";import"./Util-D2YTzGDx.js";import"./Toast-AsO8pjPO.js";var I=A('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const L=P(()=>$(()=>import("./SVG-krqrZGgX.js"),__vite__mapDeps([0,1,2,3])));function Z(t){const r=e=>{z(t?.item?.ssg_manifest_key)},a=async()=>{let e=g(t?.item?.ssg_manifest_key),s=await u(e),d=await W([{qr:s}],!0,s);window.open(d)},[n,{refetch:h}]=w(t?.item?.ssg_manifest_key,async e=>{let s=g(t?.item?.ssg_manifest_key);return await u(s)});return(()=>{var e=I(),s=e.firstChild,l=s.firstChild,d=l.firstChild,b=d.nextSibling,y=b.firstChild,_=y.nextSibling,c=l.nextSibling,k=c.firstChild,v=c.nextSibling,o=v.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),f(y,()=>t?.item?.name),_.$$click=a,f(_,C(L,{name:"printer",size:32})),c.style.setProperty("padding","16px"),v.style.setProperty("padding","16px"),o.$$click=r,f(o,()=>t?.item?.name),S(i=>{var m=F()?"96vw":"420px",x=n(),p=300/t?.item?.ssg_manifest_key?.length*1.82+"px";return m!==i.e&&((i.e=m)!=null?e.style.setProperty("width",m):e.style.removeProperty("width")),x!==i.t&&E(k,"src",i.t=x),p!==i.a&&((i.a=p)!=null?o.style.setProperty("font-size",p):o.style.removeProperty("font-size")),i},{e:void 0,t:void 0,a:void 0}),e})()}const g=t=>{let r=t,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const n=new RegExp(a);return r.length===13&&n.test(r)&&(r=r.slice(3,12)),r};R(["click"]);export{Z as default,g as parseTrcking};
