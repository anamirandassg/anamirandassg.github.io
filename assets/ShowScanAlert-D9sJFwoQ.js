const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BKtEPdQ8.js","assets/index-C3nuwiPu.js","assets/index-BmzAZVve.css","assets/CheckBoxSlide-B3VmBWV9.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import"./Toast-D8yVWZQ9.js";import{y as m,m as y,e as h,g as _,q as $,t as x,l as P,_ as S,h as k,a as D,b as A,n as F,i as g}from"./index-C3nuwiPu.js";import{b,f as I,a as E,m as W}from"./Util-Dlxe-mBA.js";import{setTaskScan as L,taskScan as z}from"./Scanning-Dc0iX8ls.js";import{g as R,c as j}from"./ShowQRPrintLabel-Bu-LBqpt.js";let M=[400,300,400,300,400],w=[300,80,300,80,300,80,300];const O=t=>{t=t.split("'").join("-"),t=t.split(",").join("-"),t=t.split(";").join("-");let s=t.split("/");t.split("-").length>3&&(s=t.split("-").join(""));let e=s?.[0];return e.indexOf("230")>=0&&(e="230"+(e.split("230")?.[1]).slice(0,6)),e.indexOf("231")>=0&&(e="231"+(e.split("231")?.[1]).slice(0,5)),{params:{idairguide:"all",":search0":e},code:1}},U=async(t,s)=>{let e=O(t),r={timeStamp:new Date().getTime(),latitude:m?.latitude,longitude:m?.longitude,statusId:s,userId:y?.profile?.userId,userName:y?.profile?.name};if(e?.params)return await q(e.params,r);{let a=e?.txt||e?.params?.search0;return navigator.vibrate(w),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:a}}}}}},q=async(t,s)=>{let r=(await B(t,s))?.data;if(r?.code===203||r?.code===303)return navigator.vibrate(M),{error:{alert:"warning",color:"#FF6F1D",scanData:r.data}};if(r?.code===200){navigator.vibrate(500);let a={...r.data};return a.tracking=t?.[":search0"],a.timeStamp=new Date().getTime(),L([...z(),a]),{error:{alert:"success",color:"#0f5223ff",scanData:r.data}}}else if(!r||r?.error){let a={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(w),{error:{alert:"error",color:"rgb(200 25 60)",scanData:a}}}},B=async(t,s)=>{let e={params:t,form:s},r=b(802001);return r=b(802008),e={...e,...r},await I(e)};var G=x('<div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=ssg>');function X(){return(()=>{var t=G(),s=t.firstChild,e=s.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#fff"),t.style.setProperty("border-radius","13"),s.style.setProperty("padding","16px"),h(r=>{var a=_()?"96vw":"420px",i=E("SSG.webp");return a!==r.e&&((r.e=a)!=null?t.style.setProperty("width",a):t.style.removeProperty("width")),i!==r.t&&$(e,"src",r.t=i),r},{e:void 0,t:void 0}),t})()}var Q=x('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo </h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5></h5></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5>');P(()=>S(()=>import("./SVG-BKtEPdQ8.js"),__vite__mapDeps([0,1,2])));P(()=>S(()=>import("./CheckBoxSlide-B3VmBWV9.js"),__vite__mapDeps([3,1,2,4])));function Y(t){D(!1);const s=e=>{j(e)};return A(t?.val,async e=>await R(t?.val)),F(()=>{W()}),(()=>{var e=Q(),r=e.firstChild,a=r.firstChild,i=a.firstChild,C=i.nextSibling,p=C.firstChild,c=a.nextSibling,o=c.firstChild,v=c.nextSibling,n=v.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","50px 25px"),p.$$click=()=>s(t?.bagnumber),g(p,()=>t?.bagnumber),c.style.setProperty("padding","16px"),o.$$click=()=>s(t?.msg1),g(o,()=>t?.msg1),v.style.setProperty("padding","16px"),n.$$click=()=>s(t?.msg2),g(n,()=>t?.msg2),h(l=>{var d=_()?"86vw":"420px",f=300/t?.msg1?.length*1.32+"px",u=300/t?.msg2?.length*1.32+"px";return d!==l.e&&((l.e=d)!=null?e.style.setProperty("width",d):e.style.removeProperty("width")),f!==l.t&&((l.t=f)!=null?o.style.setProperty("font-size",f):o.style.removeProperty("font-size")),u!==l.a&&((l.a=u)!=null?n.style.setProperty("font-size",u):n.style.removeProperty("font-size")),l},{e:void 0,t:void 0,a:void 0}),e})()}k(["click"]);export{X as S,Y as a,U as h};
