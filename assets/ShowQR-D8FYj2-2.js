const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DcJh3zEJ.js","assets/index-CXf7gjIb.js","assets/index-BRlA1Q7g.css","assets/Util-CugZcr5q.js","assets/CheckBoxSlide-zBAxo9Es.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as P,_ as $,a as A,p as L,d as E,i as m,e as x,x as I,S as F,f as U,j as G,k as W,h as q,t as w}from"./index-CXf7gjIb.js";import{c as z,a as S,b as p,S as B}from"./ShowQRPrintLabel-DbHftYQj.js";import{y as O}from"./Util-CugZcr5q.js";import"./fontkit.es-Bw_0IftY.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-kIHy6xNl.js";import"./Toast-24mbv0A_.js";var Q=w('<div class="centerBx bottombx"><h5>SSG'),T=w('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const V=P(()=>$(()=>import("./SVG-DcJh3zEJ.js"),__vite__mapDeps([0,1,2,3]))),j=P(()=>$(()=>import("./CheckBoxSlide-zBAxo9Es.js"),__vite__mapDeps([4,1,2,5])));function ee(e){const[i,f]=A(!1),u=t=>{z(t)},s=t=>t?" "+t:"",C=()=>{let t=e?.item?.consigneeInfo;return s(t?.firstName)+s(t?.middleName)+s(t?.lastName)+s(t?.lastName2)},k=async()=>{let t=S(e?.val);var n=await p(t,"image/png");let r=URL.createObjectURL(n),a=e?.item?.street.split(","),g=a[a.length-2],o=e?.item?.street.split(g)[0],v={state:e?.item?.consigneeInfo?.ybestate,name:C(),phoneNumber:e?.item?.consigneeInfo?.phoneNumber,altPhoneNumber:e?.item?.consigneeInfo?.altPhoneNumber,street:o,city:g+", "+a[a.length-1],guiaWeek:e?.item?.guia,bulto:e?.item?.bagnumber,tracking:e?.val!==e?.item?.bagnumber?e?.val:"",qr:r,isSSG:e?.item?.isSSG},d=await B([v]);window.open(d)},[R,{refetch:M}]=L(e?.val,async t=>{let n=S(e?.val);var r=await p(n,"image/png");return URL.createObjectURL(r)});return E(()=>{console.log(e?.item),O()}),(()=>{var t=T(),n=t.firstChild,r=n.firstChild,a=r.firstChild,g=a.nextSibling,o=g.firstChild,v=o.nextSibling,d=r.nextSibling,N=d.firstChild,y=d.nextSibling,b=y.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o.$$click=()=>u(e?.item?.bagnumber),m(o,()=>e?.item?.bagnumber),v.$$click=k,m(v,x(V,{name:"printer",size:32})),m(r,x(F,{get when(){return I()},get children(){var l=Q(),c=l.firstChild;return m(l,x(j,{get initValue(){return i()},updChange:f,color:"var(--background-red-ssg)"}),c),l}}),null),d.style.setProperty("padding","16px"),y.style.setProperty("padding","16px"),b.$$click=()=>u(e?.val),m(b,()=>e?.val),U(l=>{var c=G()?"96vw":"420px",_=R(),h=300/e?.val?.length*1.82+"px";return c!==l.e&&((l.e=c)!=null?t.style.setProperty("width",c):t.style.removeProperty("width")),_!==l.t&&W(N,"src",l.t=_),h!==l.a&&((l.a=h)!=null?b.style.setProperty("font-size",h):b.style.removeProperty("font-size")),l},{e:void 0,t:void 0,a:void 0}),t})()}const te=e=>{let i=e,f="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const u=new RegExp(f);return i.length===13&&u.test(i)&&(i=i.slice(3,12)),i};q(["click"]);export{ee as default,te as parseTrcking};
