const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BmNDMg15.js","assets/index--_JNbh3-.js","assets/index-BmzAZVve.css","assets/index-Ci0zXM0r.js","assets/CheckBoxSlide-CvRD8oA-.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as y,_ as S,a as R,b as A,n as E,i as n,d as f,v as I,S as F,e as G,g as W,q as z,h as L,t as p}from"./index--_JNbh3-.js";import{c as M,g as _,S as T}from"./ShowQRPrintLabel-DQ1OwyjB.js";import{m as V}from"./Util-BwLP_5oJ.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./fontkit.es-BqrvdTa9.js";import"./InitPrintServices-8lwggMm8.js";import"./Toast-CS0gWLuA.js";var q=p('<div class="centerBx bottombx"><h5>SSG'),B=p('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const D=y(()=>S(()=>import("./SVG-BmNDMg15.js"),__vite__mapDeps([0,1,2,3]))),Q=y(()=>S(()=>import("./CheckBoxSlide-CvRD8oA-.js"),__vite__mapDeps([4,1,2,5])));function ee(t){const[r,m]=R(!1),o=e=>{M(e)},l=e=>e?" "+e:"",P=()=>{let e=t?.item?.consigneeInfo;return l(e?.firstName)+l(e?.middleName)+l(e?.lastName)+l(e?.lastName2)},$=async()=>{let e=await _(t?.val),d={state:t?.item?.consigneeInfo?.ybestate,name:P(),phoneNumber:t?.item?.consigneeInfo?.phoneNumber,altPhoneNumber:t?.item?.consigneeInfo?.altPhoneNumber,guiaWeek:t?.item?.guia,bulto:t?.item?.bagnumber,tracking:t?.val!==t?.item?.bagnumber?t?.val:"",qr:e,isSSG:t?.item?.isSSG},a=await T([d]);window.open(a)},[C,{refetch:O}]=A(t?.val,async e=>await _(t?.val));return E(()=>{console.log(t?.item),V()}),(()=>{var e=B(),d=e.firstChild,a=d.firstChild,w=a.firstChild,k=w.nextSibling,u=k.firstChild,b=u.nextSibling,v=a.nextSibling,N=v.firstChild,h=v.nextSibling,c=h.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),u.$$click=()=>o(t?.item?.bagnumber),n(u,()=>t?.item?.bagnumber),b.$$click=$,n(b,f(D,{name:"printer",size:32})),n(a,f(F,{get when(){return I()},get children(){var i=q(),s=i.firstChild;return n(i,f(Q,{get initValue(){return r()},updChange:m,color:"var(--background-red-ssg)"}),s),i}}),null),v.style.setProperty("padding","16px"),h.style.setProperty("padding","16px"),c.$$click=()=>o(t?.val),n(c,()=>t?.val),G(i=>{var s=W()?"96vw":"420px",x=C(),g=300/t?.val?.length*1.82+"px";return s!==i.e&&((i.e=s)!=null?e.style.setProperty("width",s):e.style.removeProperty("width")),x!==i.t&&z(N,"src",i.t=x),g!==i.a&&((i.a=g)!=null?c.style.setProperty("font-size",g):c.style.removeProperty("font-size")),i},{e:void 0,t:void 0,a:void 0}),e})()}const te=t=>{let r=t,m="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const o=new RegExp(m);return r.length===13&&o.test(r)&&(r=r.slice(3,12)),r};L(["click"]);export{ee as default,te as parseTrcking};
