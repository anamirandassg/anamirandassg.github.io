const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-ZQnsUnAA.js","assets/index-iC7Xub7Q.js","assets/index-C8O1wSFC.css"])))=>i.map(i=>d[i]);
import{l as P,_ as $,b as w,i as p,d as C,f as S,e as R,t as A,h as E,D as F}from"./index-iC7Xub7Q.js";import{c as z,g as x,S as W}from"./ShowQRPrintLabel-YM_5yeIq.js";import"./fontkit.es-BaBbEI0u.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-S_kwqzOf.js";import"./Toast-DoxUcL-J.js";var D=A('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const L=P(()=>$(()=>import("./SVG-ZQnsUnAA.js"),__vite__mapDeps([0,1,2])));function B(t){const s=e=>{z(t?.item?.ssg_manifest_key)},o=async()=>{let e=g(t?.item?.ssg_manifest_key),i={qr:await x(e)},d=await W([i]);window.open(d)},[n,{refetch:h}]=w(t?.item?.ssg_manifest_key,async e=>{let l=g(t?.item?.ssg_manifest_key);return await x(l)});return(()=>{var e=D(),l=e.firstChild,i=l.firstChild,d=i.firstChild,b=d.nextSibling,_=b.firstChild,y=_.nextSibling,c=i.nextSibling,k=c.firstChild,v=c.nextSibling,a=v.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),p(_,()=>t?.item?.name),y.$$click=o,p(y,C(L,{name:"printer",size:32})),c.style.setProperty("padding","16px"),v.style.setProperty("padding","16px"),a.$$click=s,p(a,()=>t?.item?.name),S(r=>{var f=E()?"96vw":"420px",u=n(),m=300/t?.item?.ssg_manifest_key?.length*1.82+"px";return f!==r.e&&((r.e=f)!=null?e.style.setProperty("width",f):e.style.removeProperty("width")),u!==r.t&&F(k,"src",r.t=u),m!==r.a&&((r.a=m)!=null?a.style.setProperty("font-size",m):a.style.removeProperty("font-size")),r},{e:void 0,t:void 0,a:void 0}),e})()}const g=t=>{let s=t,o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const n=new RegExp(o);return s.length===13&&n.test(s)&&(s=s.slice(3,12)),s};R(["click"]);export{B as default,g as parseTrcking};
