const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DM7keoXx.js","assets/index-fVyAceyB.js","assets/index-C1cQPolT.css","assets/index-Ci0zXM0r.js","assets/CheckBoxSlide-BaWUUPhl.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import"./Toast-BzDoz-22.js";import{k as p,f as h,n as $,t as x,l as _,_ as P,e as k,a as D,b as A,m as F,i as u}from"./index-fVyAceyB.js";import{g as y,i as S}from"./globalSignal-BmUjh8Kw.js";import{b,f as I,a as E,m as W}from"./Util-D886uaAp.js";import{setTaskScan as L,taskScan as z}from"./Scanning-ByGgyqAs.js";import{g as R,c as M}from"./ShowQRPrintLabel-0AixwGdY.js";let O=[400,300,400,300,400],w=[300,80,300,80,300,80,300];const T=e=>{e=e.split("'").join("-");let s=e.split("/");e.split("-").length>3&&(s=e.split("-").join(""));let t=s?.[0];return t.indexOf("2300")>=0&&(t="2300"+(t.split("2300")?.[1]).slice(0,5)),{params:{idairguide:"all",":search0":t},code:1}},U=async(e,s)=>{let t=T(e),r={timeStamp:new Date().getTime(),latitude:y?.latitude,longitude:y?.longitude,statusId:s,userId:p?.profile?.userId,userName:p?.profile?.name};if(t?.params){let a=await j(t.params,r);return console.log(a),a}else{let a=t?.txt||t?.params?.search0;return navigator.vibrate(w),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:a}}}}}},j=async(e,s)=>{let r=(await q(e,s))?.data;if(r?.code===203||r?.code===303)return navigator.vibrate(O),{error:{alert:"warning",color:"#FF6F1D",scanData:r.data}};if(r?.code===200){navigator.vibrate(500);let a={...r.data};return a.tracking=e?.[":search0"],a.timeStamp=new Date().getTime(),L([...z(),a]),{error:{alert:"success",color:"#0f5223ff",scanData:r.data}}}else if(!r||r?.error){let a={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(w),{error:{alert:"error",color:"rgb(200 25 60)",scanData:a}}}},q=async(e,s)=>{let t={params:e,form:s},r=b(802001);return r=b(802008),t={...t,...r},await I(t)};var B=x('<div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=ssg>');function X(){return(()=>{var e=B(),s=e.firstChild,t=s.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#fff"),e.style.setProperty("border-radius","13"),s.style.setProperty("padding","16px"),h(r=>{var a=S()?"96vw":"420px",o=E("SSG.webp");return a!==r.e&&((r.e=a)!=null?e.style.setProperty("width",a):e.style.removeProperty("width")),o!==r.t&&$(t,"src",r.t=o),r},{e:void 0,t:void 0}),e})()}var G=x('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo </h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5></h5></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5>');_(()=>P(()=>import("./SVG-DM7keoXx.js"),__vite__mapDeps([0,1,2,3])));_(()=>P(()=>import("./CheckBoxSlide-BaWUUPhl.js"),__vite__mapDeps([4,1,2,5])));function Y(e){D(!1);const s=t=>{M(t)};return A(e?.val,async t=>await R(e?.val)),F(()=>{W()}),(()=>{var t=G(),r=t.firstChild,a=r.firstChild,o=a.firstChild,C=o.nextSibling,v=C.firstChild,d=a.nextSibling,i=d.firstChild,m=d.nextSibling,n=m.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","50px 25px"),v.$$click=()=>s(e?.bagnumber),u(v,()=>e?.bagnumber),d.style.setProperty("padding","16px"),i.$$click=()=>s(e?.msg1),u(i,()=>e?.msg1),m.style.setProperty("padding","16px"),n.$$click=()=>s(e?.msg2),u(n,()=>e?.msg2),h(l=>{var c=S()?"86vw":"420px",f=300/e?.msg1?.length*1.32+"px",g=300/e?.msg2?.length*1.32+"px";return c!==l.e&&((l.e=c)!=null?t.style.setProperty("width",c):t.style.removeProperty("width")),f!==l.t&&((l.t=f)!=null?i.style.setProperty("font-size",f):i.style.removeProperty("font-size")),g!==l.a&&((l.a=g)!=null?n.style.setProperty("font-size",g):n.style.removeProperty("font-size")),l},{e:void 0,t:void 0,a:void 0}),t})()}k(["click"]);export{X as S,Y as a,U as h};
