const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-D9rz6ETf.js","assets/index-CgMuzQKX.js","assets/index-DGHHyjai.css","assets/index-Ci0zXM0r.js","assets/CheckBoxSlide-13rgmkrt.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{OpenToast as v}from"./Toast-DNN79moQ.js";import{k as H,r as w,f as P,n as O,t as k,l as I,_ as E,e as W,a as q,b as N,m as z,i as x}from"./index-CgMuzQKX.js";import{g as C,i as $}from"./globalSignal-B7euIFAZ.js";import{g as h,b as S,f as _,a as M,j as Q}from"./Util-uEfv1z7O.js";import{g as j,c as T}from"./ShowQRPrintLabel-CZeA_N7d.js";let A="No se encontro ningun registro o el codigo es incorrecto",Y=[400,300,400,300,400],f=[300,80,300,80,300,80,300];const B=t=>{t=t.split("'").join("-");let r=t.split("/");t.split("-").length>3&&(r=t.split("-").join);let e=r?.[0];e.indexOf("2300")===0&&(e="2300"+(e.split("2300")?.[1]).slice(0,5));let a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(a);let i=e.length===13&&s.test(e),g="^[0-9]{4}-[1-9]{4}";const o=new RegExp(g);let n=e.length===9&&o.test(e),c=r.length>4&&e.length===12,b="^Y24[0-9]{6}";const d=new RegExp(b);let l=e.length===9&&d.test(e),u="^SS24[0-9]{6}";const y=new RegExp(u);let p=e.length===10&&y.test(e),R="^[0-9]";const D=new RegExp(R);let G=e.length>6&&e.length<11&&D.test(e);if(i||c||n){let m={idairguide:r?.[0],":search0":r?.[1],":search1":r?.[3]};return i&&(m={idairguide:"175-2383"+e.slice(3,7),":search0":e}),n&&(m={idairguide:"175-2383"+e.slice(0,4),":search0":e}),{params:m,code:1}}else if(G||l||p)return{txt:e,code:1}},le=async(t,r)=>{let e=B(t),a={timeStamp:new Date().getTime(),latitude:C?.latitude,longitude:C?.longitude,statusId:r,userId:H?.profile?.userId};if(e?.params)return await Z(e.params,a);if(e?.txt)return await U(e.txt,a);{let s=e?.txt||e?.params?.search0;return navigator.vibrate(f),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:s}}}}}},Z=async(t,r)=>{let e=await J(t),a=Object.keys(e)?.[0];if(e[a]?.cidentity){let s=F(e[a],r);return navigator.vibrate(500),s}v({text:A,timeout:2500,theme:"red",id:h()}),navigator.vibrate(f)},U=async(t,r)=>{let e=await K(t);if(e?.cidentity){let a=await F(e,r);return navigator.vibrate(500),a}v({text:A,timeout:2500,theme:"red",id:h()}),navigator.vibrate(f)},F=async(t,r)=>{let e=t?.statusHistory||[];e.push(r);let a=!1;if(t?.isSSG&&w?.roles?.SSG?.isActive&&(a=!0),w?.roles?.[t?.consigneeInfo?.ybestate]?.isActive)if(t?.currentStatus!==r.statusId){let s={statusHistory:e,currentStatus:r.statusId},i={ssg_track_key:t.ssg_track_key,idairguide:t.idairguide},g=await V(i,s),o={tracking:t?.tracking,idairguide:t.idairguide,city:t?.consigneeInfo?.ybcity,estate:t.estate,bagnumber:t?.bagnumber};return{data:{...g,...o,isSSG:a},color:"#0f5223ff"}}else{a||v({text:"FUE ESCANEADO EN "+t?.consigneeInfo?.ybestate,timeout:3500,theme:"orange",id:h()});let s={consigneeInfo:{ybcity:"Fue escaneado",ybestate:t?.consigneeInfo?.ybestate,bagnumber:t?.bagnumber}};return navigator.vibrate(Y),{error:{alert:"warning",color:"#FF6F1D",scanData:s,isSSG:a}}}else{let s={consigneeInfo:{ybestate:"Zona incorrecta",bagnumber:t?.bagnumber}};return v({text:"ZONA INCORRECTA",timeout:3500,theme:"orange",id:h()}),navigator.vibrate(f),{error:{alert:"warning",color:"#FF6F1D",scanData:s}}}},V=async(t,r)=>{let e={params:t,data2update:r},a=S(809004);return e={...e,...a},await _(e)},J=async t=>{let r={params:t,fldsQry:["idairguide","currentStatus","ssg_track_key","statusHistory","tracking","estate","city","cidentity","consigneeInfo:ybestate","consigneeInfo:ybcity"]},e=S(802001);return r={...r,...e},await _(r)},K=async t=>{let r={params:{id:t}},e=S(803001);return r={...r,...e},await _(r)};var X=k('<div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=ssg>');function oe(){return(()=>{var t=X(),r=t.firstChild,e=r.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#fff"),t.style.setProperty("border-radius","13"),r.style.setProperty("padding","16px"),P(a=>{var s=$()?"96vw":"420px",i=M("SSG.webp");return s!==a.e&&((a.e=s)!=null?t.style.setProperty("width",s):t.style.removeProperty("width")),i!==a.t&&O(e,"src",a.t=i),a},{e:void 0,t:void 0}),t})()}var ee=k('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo </h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5></h5></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h5>');I(()=>E(()=>import("./SVG-D9rz6ETf.js"),__vite__mapDeps([0,1,2,3])));I(()=>E(()=>import("./CheckBoxSlide-13rgmkrt.js"),__vite__mapDeps([4,1,2,5])));function ne(t){q(!1);const r=e=>{T(e)};return N(t?.val,async e=>await j(t?.val)),z(()=>{Q()}),(()=>{var e=ee(),a=e.firstChild,s=a.firstChild,i=s.firstChild,g=i.nextSibling,o=g.firstChild,n=s.nextSibling,c=n.firstChild,b=n.nextSibling,d=b.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","20px 19px"),o.$$click=()=>r(t?.bagnumber),x(o,()=>t?.bagnumber),n.style.setProperty("padding","16px"),c.$$click=()=>r(t?.msg1),x(c,()=>t?.msg1),b.style.setProperty("padding","16px"),d.$$click=()=>r(t?.msg2),x(d,()=>t?.msg2),P(l=>{var u=$()?"86vw":"420px",y=300/t?.msg1?.length*1.32+"px",p=300/t?.msg2?.length*1.32+"px";return u!==l.e&&((l.e=u)!=null?e.style.setProperty("width",u):e.style.removeProperty("width")),y!==l.t&&((l.t=y)!=null?c.style.setProperty("font-size",y):c.style.removeProperty("font-size")),p!==l.a&&((l.a=p)!=null?d.style.setProperty("font-size",p):d.style.removeProperty("font-size")),l},{e:void 0,t:void 0,a:void 0}),e})()}W(["click"]);export{oe as S,ne as a,le as h};
