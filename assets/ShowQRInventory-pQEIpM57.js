const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BUbVtHju.js","assets/index-DA7NoUTw.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js"])))=>i.map(i=>d[i]);
import{l as P,_ as $,p as w,i as f,f as C,h as S,j as R,k as A,d as E,t as F}from"./index-DA7NoUTw.js";import{c as z,g as x,S as W}from"./ShowQRPrintLabel-DyTADM3z.js";import"./PDFButton-ClnWeH7R.js";import"./Util-DZlMHKqJ.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-DkuHxdU6.js";import"./InitPrintServices-QWHeDiid.js";import"./Toast-DSYEWaBA.js";var I=F('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const L=P(()=>$(()=>import("./SVG-BUbVtHju.js"),__vite__mapDeps([0,1,2,3])));function G(t){const r=e=>{z(t?.item?.ssg_manifest_key)},o=async()=>{let e=g(t?.item?.ssg_manifest_key),i={qr:await x(e)},d=await W([i]);window.open(d)},[n,{refetch:h}]=w(t?.item?.ssg_manifest_key,async e=>{let l=g(t?.item?.ssg_manifest_key);return await x(l)});return(()=>{var e=I(),l=e.firstChild,i=l.firstChild,d=i.firstChild,b=d.nextSibling,y=b.firstChild,_=y.nextSibling,c=i.nextSibling,k=c.firstChild,v=c.nextSibling,a=v.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),f(y,()=>t?.item?.name),_.$$click=o,f(_,C(L,{name:"printer",size:32})),c.style.setProperty("padding","16px"),v.style.setProperty("padding","16px"),a.$$click=r,f(a,()=>t?.item?.name),S(s=>{var m=R()?"96vw":"420px",u=n(),p=300/t?.item?.ssg_manifest_key?.length*1.82+"px";return m!==s.e&&((s.e=m)!=null?e.style.setProperty("width",m):e.style.removeProperty("width")),u!==s.t&&A(k,"src",s.t=u),p!==s.a&&((s.a=p)!=null?a.style.setProperty("font-size",p):a.style.removeProperty("font-size")),s},{e:void 0,t:void 0,a:void 0}),e})()}const g=t=>{let r=t,o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const n=new RegExp(o);return r.length===13&&n.test(r)&&(r=r.slice(3,12)),r};E(["click"]);export{G as default,g as parseTrcking};
