const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-tLQf-akW.js","assets/index-JeM1UUlF.js","assets/index-lCkr9jrN.css","assets/CheckBoxSlide-2ssYmQ-s.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as $,_ as P,a as A,b as E,s as L,i as o,d as h,E as I,S as F,e as U,g as G,A as W,h as q,t as C,$ as z}from"./index-JeM1UUlF.js";import{c as B,a as p,b as S,S as O}from"./ShowQRPrintLabel-CEo9iPAS.js";import"./PDFButton-CVEa5i5b.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BIcH_GNA.js";import"./InitPrintServices-CJPpdbG7.js";import"./Toast-DFxhib2M.js";var Q=C('<div class="centerBx bottombx"><h5>SSG'),T=C('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const V=$(()=>P(()=>import("./SVG-tLQf-akW.js"),__vite__mapDeps([0,1,2]))),M=$(()=>P(()=>import("./CheckBoxSlide-2ssYmQ-s.js"),__vite__mapDeps([3,1,2,4])));function ee(t){const[i,u]=A(!1),d=e=>{B(e)},a=e=>e?" "+e:"",w=()=>{let e=t?.item?.consigneeInfo;return a(e?.firstName)+a(e?.middleName)+a(e?.lastName)+a(e?.lastName2)},k=async()=>{let e=p(t?.val);var s=await S(e,"image/png");let r=URL.createObjectURL(s),c={state:t?.item?.consigneeInfo?.ybestate,name:w(),phoneNumber:t?.item?.consigneeInfo?.phoneNumber,altPhoneNumber:t?.item?.consigneeInfo?.altPhoneNumber,guiaWeek:t?.item?.guia,bulto:t?.item?.bagnumber,tracking:t?.val!==t?.item?.bagnumber?t?.val:"",qr:r,isSSG:t?.item?.isSSG},g=await O([c]);window.open(g)},[R,{refetch:j}]=E(t?.val,async e=>{let s=p(t?.val);var r=await S(s,"image/png");return URL.createObjectURL(r)});return L(()=>{console.log(t?.item),z()}),(()=>{var e=T(),s=e.firstChild,r=s.firstChild,c=r.firstChild,g=c.nextSibling,v=g.firstChild,x=v.nextSibling,b=r.nextSibling,N=b.firstChild,_=b.nextSibling,m=_.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),v.$$click=()=>d(t?.item?.bagnumber),o(v,()=>t?.item?.bagnumber),x.$$click=k,o(x,h(V,{name:"printer",size:32})),o(r,h(F,{get when(){return I()},get children(){var l=Q(),n=l.firstChild;return o(l,h(M,{get initValue(){return i()},updChange:u,color:"var(--background-red-ssg)"}),n),l}}),null),b.style.setProperty("padding","16px"),_.style.setProperty("padding","16px"),m.$$click=()=>d(t?.val),o(m,()=>t?.val),U(l=>{var n=G()?"96vw":"420px",y=R(),f=300/t?.val?.length*1.82+"px";return n!==l.e&&((l.e=n)!=null?e.style.setProperty("width",n):e.style.removeProperty("width")),y!==l.t&&W(N,"src",l.t=y),f!==l.a&&((l.a=f)!=null?m.style.setProperty("font-size",f):m.style.removeProperty("font-size")),l},{e:void 0,t:void 0,a:void 0}),e})()}const te=t=>{let i=t,u="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(u);return i.length===13&&d.test(i)&&(i=i.slice(3,12)),i};q(["click"]);export{ee as default,te as parseTrcking};
