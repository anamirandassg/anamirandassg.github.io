const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CJrcVamg.js","assets/index-CHpRMMcL.js","assets/index-lCkr9jrN.css"])))=>i.map(i=>d[i]);
import{l as P,_ as $,b as w,i as f,d as C,e as S,g as A,A as R,h as E,t as F}from"./index-CHpRMMcL.js";import{c as z,g as x,S as W}from"./ShowQRPrintLabel-BLxqdd2Q.js";import"./PDFButton-C77ST4HX.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-CBL7hhp4.js";import"./InitPrintServices-CfDhfV0j.js";import"./Toast-DYKCeSqJ.js";var L=F('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const M=P(()=>$(()=>import("./SVG-CJrcVamg.js"),__vite__mapDeps([0,1,2])));function G(t){const s=e=>{z(t?.item?.ssg_manifest_key)},o=async()=>{let e=g(t?.item?.ssg_manifest_key),i={qr:await x(e)},d=await W([i]);window.open(d)},[n,{refetch:h}]=w(t?.item?.ssg_manifest_key,async e=>{let l=g(t?.item?.ssg_manifest_key);return await x(l)});return(()=>{var e=L(),l=e.firstChild,i=l.firstChild,d=i.firstChild,b=d.nextSibling,_=b.firstChild,y=_.nextSibling,c=i.nextSibling,k=c.firstChild,v=c.nextSibling,a=v.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),f(_,()=>t?.item?.name),y.$$click=o,f(y,C(M,{name:"printer",size:32})),c.style.setProperty("padding","16px"),v.style.setProperty("padding","16px"),a.$$click=s,f(a,()=>t?.item?.name),S(r=>{var m=A()?"96vw":"420px",u=n(),p=300/t?.item?.ssg_manifest_key?.length*1.82+"px";return m!==r.e&&((r.e=m)!=null?e.style.setProperty("width",m):e.style.removeProperty("width")),u!==r.t&&R(k,"src",r.t=u),p!==r.a&&((r.a=p)!=null?a.style.setProperty("font-size",p):a.style.removeProperty("font-size")),r},{e:void 0,t:void 0,a:void 0}),e})()}const g=t=>{let s=t,o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const n=new RegExp(o);return s.length===13&&n.test(s)&&(s=s.slice(3,12)),s};E(["click"]);export{G as default,g as parseTrcking};
