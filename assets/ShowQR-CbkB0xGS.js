const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-0DyuRqFt.js","assets/index-MWcyRJ7Y.js","assets/index-BmzAZVve.css","assets/CheckBoxSlide-BotaVPeE.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as y,_ as S,a as A,b as E,s as R,i as n,d as f,E as I,S as F,e as G,g as W,A as z,h as L,t as p,Z as M}from"./index-MWcyRJ7Y.js";import{c as T,g as _,S as V}from"./ShowQRPrintLabel-DV-3ePBv.js";import"./PDFButton-D6iUlA_X.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-DjiWixPQ.js";import"./InitPrintServices-DDjs88_M.js";import"./Toast-kUDxtYWW.js";var B=p('<div class="centerBx bottombx"><h5>SSG'),D=p('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const Q=y(()=>S(()=>import("./SVG-0DyuRqFt.js"),__vite__mapDeps([0,1,2]))),q=y(()=>S(()=>import("./CheckBoxSlide-BotaVPeE.js"),__vite__mapDeps([3,1,2,4])));function Y(t){const[l,m]=A(!1),o=e=>{T(e)},r=e=>e?" "+e:"",P=()=>{let e=t?.item?.consigneeInfo;return r(e?.firstName)+r(e?.middleName)+r(e?.lastName)+r(e?.lastName2)},$=async()=>{let e=await _(t?.val),d={state:t?.item?.consigneeInfo?.ybestate,name:P(),phoneNumber:t?.item?.consigneeInfo?.phoneNumber,altPhoneNumber:t?.item?.consigneeInfo?.altPhoneNumber,guiaWeek:t?.item?.guia,bulto:t?.item?.bagnumber,tracking:t?.val!==t?.item?.bagnumber?t?.val:"",qr:e,isSSG:t?.item?.isSSG},a=await V([d]);window.open(a)},[C,{refetch:O}]=E(t?.val,async e=>await _(t?.val));return R(()=>{console.log(t?.item),M()}),(()=>{var e=D(),d=e.firstChild,a=d.firstChild,w=a.firstChild,k=w.nextSibling,u=k.firstChild,b=u.nextSibling,g=a.nextSibling,N=g.firstChild,h=g.nextSibling,c=h.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),u.$$click=()=>o(t?.item?.bagnumber),n(u,()=>t?.item?.bagnumber),b.$$click=$,n(b,f(Q,{name:"printer",size:32})),n(a,f(F,{get when(){return I()},get children(){var i=B(),s=i.firstChild;return n(i,f(q,{get initValue(){return l()},updChange:m,color:"var(--background-red-ssg)"}),s),i}}),null),g.style.setProperty("padding","16px"),h.style.setProperty("padding","16px"),c.$$click=()=>o(t?.val),n(c,()=>t?.val),G(i=>{var s=W()?"96vw":"420px",x=C(),v=300/t?.val?.length*1.82+"px";return s!==i.e&&((i.e=s)!=null?e.style.setProperty("width",s):e.style.removeProperty("width")),x!==i.t&&z(N,"src",i.t=x),v!==i.a&&((i.a=v)!=null?c.style.setProperty("font-size",v):c.style.removeProperty("font-size")),i},{e:void 0,t:void 0,a:void 0}),e})()}const ee=t=>{let l=t,m="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const o=new RegExp(m);return l.length===13&&o.test(l)&&(l=l.slice(3,12)),l};L(["click"]);export{Y as default,ee as parseTrcking};
