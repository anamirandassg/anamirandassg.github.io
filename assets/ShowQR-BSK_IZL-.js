const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-a6bMPYQU.js","assets/index-CSXd_khH.js","assets/index-NFdrrltd.css","assets/index-Ci0zXM0r.js","assets/CheckBoxSlide-Dia6NmVn.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as p,_ as P,a as A,b as E,m as I,i as n,d as f,f as F,e as W,t as $,q as z,S as L,n as M}from"./index-CSXd_khH.js";import{i as T}from"./globalSignal-BJem-C_J.js";import{c as V,g as _,S as q}from"./ShowQRPrintLabel-rvMFn9KD.js";import{k as B}from"./Util-DErZaF9J.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-NgpjRc8z.js";import"./Toast-C95evKrU.js";var D=$('<div class="centerBx bottombx"><h5>SSG'),G=$('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const Q=p(()=>P(()=>import("./SVG-a6bMPYQU.js"),__vite__mapDeps([0,1,2,3]))),O=p(()=>P(()=>import("./CheckBoxSlide-Dia6NmVn.js"),__vite__mapDeps([4,1,2,5])));function ie(t){const[i,m]=A(!1),o=e=>{V(e)},l=e=>e?" "+e:"",S=()=>{let e=t?.item?.consigneeInfo;return l(e?.firstName)+l(e?.middleName)+l(e?.lastName)+l(e?.lastName2)},C=async()=>{let e=await _(t?.val),d={state:t?.item?.consigneeInfo?.ybestate,name:S(),phoneNumber:t?.item?.consigneeInfo?.phoneNumber,altPhoneNumber:t?.item?.consigneeInfo?.altPhoneNumber,guiaWeek:t?.item?.guia,bulto:t?.item?.bagnumber,tracking:t?.val!==t?.item?.bagnumber?t?.val:"",qr:e},a=await q([d],!0,i());window.open(a)},[k,{refetch:U}]=E(t?.val,async e=>await _(t?.val));return I(()=>{B()}),(()=>{var e=G(),d=e.firstChild,a=d.firstChild,w=a.firstChild,N=w.nextSibling,u=N.firstChild,b=u.nextSibling,v=a.nextSibling,R=v.firstChild,h=v.nextSibling,c=h.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),u.$$click=()=>o(t?.item?.bagnumber),n(u,()=>t?.item?.bagnumber),b.$$click=C,n(b,f(Q,{name:"printer",size:32})),n(a,f(L,{get when(){return z()},get children(){var r=D(),s=r.firstChild;return n(r,f(O,{get initValue(){return i()},updChange:m,color:"var(--background-red-ssg)"}),s),r}}),null),v.style.setProperty("padding","16px"),h.style.setProperty("padding","16px"),c.$$click=()=>o(t?.val),n(c,()=>y(t?.val)),F(r=>{var s=T()?"96vw":"420px",x=k(),g=300/y(t?.val)?.length*1.82+"px";return s!==r.e&&((r.e=s)!=null?e.style.setProperty("width",s):e.style.removeProperty("width")),x!==r.t&&M(R,"src",r.t=x),g!==r.a&&((r.a=g)!=null?c.style.setProperty("font-size",g):c.style.removeProperty("font-size")),r},{e:void 0,t:void 0,a:void 0}),e})()}const y=t=>{let i=t,m="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const o=new RegExp(m);return i.length===13&&o.test(i)&&(i=i.slice(3,12)),i};W(["click"]);export{ie as default,y as parseTrcking};
