const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CmnSgbeE.js","assets/index-vSzQxDt2.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js","assets/CheckBoxSlide-BfRzP6Kd.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as P,_ as $,a as L,p as A,e as E,i as o,f as h,x as I,S as F,h as U,j as G,k as W,d as q,t as C}from"./index-vSzQxDt2.js";import{c as z,a as p,b as S,S as B}from"./ShowQRPrintLabel-BMm9Sfm7.js";import{y as O}from"./Util-DZlMHKqJ.js";import"./PDFButton-ClnWeH7R.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-DkuHxdU6.js";import"./InitPrintServices-QWHeDiid.js";import"./Toast-BqC1dkC5.js";var Q=C('<div class="centerBx bottombx"><h5>SSG'),T=C('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const V=P(()=>$(()=>import("./SVG-CmnSgbeE.js"),__vite__mapDeps([0,1,2,3]))),j=P(()=>$(()=>import("./CheckBoxSlide-BfRzP6Kd.js"),__vite__mapDeps([4,1,2,5])));function te(t){const[i,u]=L(!1),d=e=>{z(e)},a=e=>e?" "+e:"",k=()=>{let e=t?.item?.consigneeInfo;return a(e?.firstName)+a(e?.middleName)+a(e?.lastName)+a(e?.lastName2)},w=async()=>{let e=p(t?.val);var s=await S(e,"image/png");let l=URL.createObjectURL(s),c={state:t?.item?.consigneeInfo?.ybestate,name:k(),phoneNumber:t?.item?.consigneeInfo?.phoneNumber,altPhoneNumber:t?.item?.consigneeInfo?.altPhoneNumber,guiaWeek:t?.item?.guia,bulto:t?.item?.bagnumber,tracking:t?.val!==t?.item?.bagnumber?t?.val:"",qr:l,isSSG:t?.item?.isSSG},g=await B([c]);window.open(g)},[R,{refetch:M}]=A(t?.val,async e=>{let s=p(t?.val);var l=await S(s,"image/png");return URL.createObjectURL(l)});return E(()=>{console.log(t?.item),O()}),(()=>{var e=T(),s=e.firstChild,l=s.firstChild,c=l.firstChild,g=c.nextSibling,v=g.firstChild,x=v.nextSibling,b=l.nextSibling,N=b.firstChild,_=b.nextSibling,m=_.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),v.$$click=()=>d(t?.item?.bagnumber),o(v,()=>t?.item?.bagnumber),x.$$click=w,o(x,h(V,{name:"printer",size:32})),o(l,h(F,{get when(){return I()},get children(){var r=Q(),n=r.firstChild;return o(r,h(j,{get initValue(){return i()},updChange:u,color:"var(--background-red-ssg)"}),n),r}}),null),b.style.setProperty("padding","16px"),_.style.setProperty("padding","16px"),m.$$click=()=>d(t?.val),o(m,()=>t?.val),U(r=>{var n=G()?"96vw":"420px",y=R(),f=300/t?.val?.length*1.82+"px";return n!==r.e&&((r.e=n)!=null?e.style.setProperty("width",n):e.style.removeProperty("width")),y!==r.t&&W(N,"src",r.t=y),f!==r.a&&((r.a=f)!=null?m.style.setProperty("font-size",f):m.style.removeProperty("font-size")),r},{e:void 0,t:void 0,a:void 0}),e})()}const re=t=>{let i=t,u="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(u);return i.length===13&&d.test(i)&&(i=i.slice(3,12)),i};q(["click"]);export{te as default,re as parseTrcking};
