const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BE2hHXui.js","assets/index-DEu1n9fd.js","assets/index-BRlQ52V4.css","assets/index-Ci0zXM0r.js","assets/CheckBoxSlide-C5hY0JqG.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import"./Toast-DTv7evvX.js";import{k as b,f as _,n as $,t as S,l as w,_ as P,e as E,a as I,b as D,m as k,i as y}from"./index-DEu1n9fd.js";import{g as h,i as C}from"./globalSignal-CQa7yuH5.js";import{b as x,f as A,a as F,m as R}from"./Util-D2YTzGDx.js";import{g as W,c as L}from"./ShowQRPrintLabel-GeD929he.js";let z=[400,300,400,300,400],m=[300,80,300,80,300,80,300];const H=t=>{t=t.split("'").join("-");let a=t.split("/");t.split("-").length>3&&(a=t.split("-").join);let e=a?.[0];e.indexOf("2300")>=0&&(e="2300"+(e.split("2300")?.[1]).slice(0,5));let r="^Y24[0-9]{6}";const l=new RegExp(r);let o=e.length===9&&l.test(e),u="^SS24[0-9]{6}";const g=new RegExp(u);let n=e.length===10&&g.test(e),i="^[0-9]";const f=new RegExp(i);if(e.length>6&&e.length<11&&f.test(e)||o||n)return{params:{idairguide:"all",":search0":e},code:1};let s={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(m),{error:{alert:"error",color:"rgb(200 25 60)",scanData:s}}},V=async(t,a)=>{let e=H(t),r={timeStamp:new Date().getTime(),latitude:h?.latitude,longitude:h?.longitude,statusId:a,userId:b?.profile?.userId,userName:b?.profile?.name};if(e?.params)return await M(e.params,r);{let l=e?.txt||e?.params?.search0;return navigator.vibrate(m),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:l}}}}}},M=async(t,a)=>{let r=(await Y(t,a)).data;if(r.error){let l={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(m),{error:{alert:"error",color:"rgb(200 25 60)",scanData:l}}}else{if(r.code===203||r.code===303)return navigator.vibrate(z),{error:{alert:"warning",color:"#FF6F1D",scanData:r.data}};if(r.code===200)return navigator.vibrate(500),{error:{alert:"success",color:"#0f5223ff",scanData:r.data}}}},Y=async(t,a)=>{let e={params:t,form:a},r=x(802001);return r=x(802008),e={...e,...r},await A(e)};var O=S('<div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=ssg>');function N(){return(()=>{var t=O(),a=t.firstChild,e=a.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#fff"),t.style.setProperty("border-radius","13"),a.style.setProperty("padding","16px"),_(r=>{var l=C()?"96vw":"420px",o=F("SSG.webp");return l!==r.e&&((r.e=l)!=null?t.style.setProperty("width",l):t.style.removeProperty("width")),o!==r.t&&$(e,"src",r.t=o),r},{e:void 0,t:void 0}),t})()}var j=S('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo </h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5></h5></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5>');w(()=>P(()=>import("./SVG-BE2hHXui.js"),__vite__mapDeps([0,1,2,3])));w(()=>P(()=>import("./CheckBoxSlide-C5hY0JqG.js"),__vite__mapDeps([4,1,2,5])));function J(t){I(!1);const a=e=>{L(e)};return D(t?.val,async e=>await W(t?.val)),k(()=>{R()}),(()=>{var e=j(),r=e.firstChild,l=r.firstChild,o=l.firstChild,u=o.nextSibling,g=u.firstChild,n=l.nextSibling,i=n.firstChild,f=n.nextSibling,d=f.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","50px 25px"),g.$$click=()=>a(t?.bagnumber),y(g,()=>t?.bagnumber),n.style.setProperty("padding","16px"),i.$$click=()=>a(t?.msg1),y(i,()=>t?.msg1),f.style.setProperty("padding","16px"),d.$$click=()=>a(t?.msg2),y(d,()=>t?.msg2),_(s=>{var c=C()?"86vw":"420px",p=300/t?.msg1?.length*1.32+"px",v=300/t?.msg2?.length*1.32+"px";return c!==s.e&&((s.e=c)!=null?e.style.setProperty("width",c):e.style.removeProperty("width")),p!==s.t&&((s.t=p)!=null?i.style.setProperty("font-size",p):i.style.removeProperty("font-size")),v!==s.a&&((s.a=v)!=null?d.style.setProperty("font-size",v):d.style.removeProperty("font-size")),s},{e:void 0,t:void 0,a:void 0}),e})()}E(["click"]);export{N as S,J as a,V as h};
