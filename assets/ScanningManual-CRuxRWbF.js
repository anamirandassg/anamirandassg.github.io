const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InputHr-B_DY6Ffw.js","assets/index-JeM1UUlF.js","assets/index-lCkr9jrN.css","assets/InputHr-M3rJ9grQ.css","assets/SVG-tLQf-akW.js","assets/ShowScanAlert-BDmEoQC6.js","assets/ShowQRPrintLabel-CEo9iPAS.js","assets/PDFButton-CVEa5i5b.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BIcH_GNA.js","assets/InitPrintServices-CJPpdbG7.js","assets/Toast-DFxhib2M.js","assets/Toast-DLpFKn-Q.css","assets/ShowSSG-Bnr9w4X3.js"])))=>i.map(i=>d[i]);
import{l,_ as i,a as o,c as M,r as R,s as B,i as n,d as s,v as g,e as h,w as z,S as G,h as O,t as C,j as f}from"./index-JeM1UUlF.js";import{a as V}from"./Scanning-Cd7F8HIB.js";import{OpenModal as y,CloseModal as S}from"./DialogHRM-CVXfSPfa.js";import"./App.module-CbHnVtRQ.js";import"./Toast-DFxhib2M.js";var L=C('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),T=C('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx">');const F=l(()=>i(()=>import("./InputHr-B_DY6Ffw.js"),__vite__mapDeps([0,1,2,3]))),x=l(()=>i(()=>import("./SVG-tLQf-akW.js"),__vite__mapDeps([4,1,2]))),H=l(()=>i(()=>import("./ShowScanAlert-BDmEoQC6.js"),__vite__mapDeps([5,1,2,6,7,8,9,10,11,12]))),j=l(()=>i(()=>import("./ShowSSG-Bnr9w4X3.js"),__vite__mapDeps([13,1,2])));function Y(I){const[A,E]=o([]),[P,W]=M({}),[u,c]=o("");o("");const[d,X]=o("");o("");const[p,q]=o("");R(()=>{}),B(()=>{});const $=t=>{t||(t=u()),t=t.split("'").join("-"),c(""),!p()&&D(t)},D=async t=>{let e=await V(t,I?.status);e?.data?(e?.data?.isSSG?_():b({color:e?.color,msg1:e?.data?.city,msg2:e?.data?.estate,bagnumber:e?.data?.bagnumber}),E([...A(),e.data])):e?.error&&(e?.error?.isSSG?_():b({color:e?.error?.color,msg1:e?.error?.scanData?.consigneeInfo?.ybcity,msg2:e?.error?.scanData?.consigneeInfo?.ybestate,bagnumber:e?.error?.scanData?.consigneeInfo?.bagnumber}))},_=t=>{let e=f(),r={};r.id=e,r.overlayColor="rgb(200 25 60)",r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(j,{modalId:e}),y(r),setTimeout(()=>{S(e)},1e3)},b=t=>{let e=f(),r={};r.id=e,r.overlayColor=t.color,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(H,{modalId:e,get bagnumber(){return t.bagnumber},get msg1(){return t.msg1},get msg2(){return t.msg2}}),y(r),setTimeout(()=>{S(e)},1e3)};return(()=>{var t=T(),e=t.firstChild,r=e.nextSibling,m=r.firstChild;return e.style.setProperty("padding","16px"),n(e,s(G,{get when(){return p()},get children(){var a=L(),v=a.firstChild,k=v.nextSibling;return n(v,s(x,{get name(){return g?.[d()]?.icon},size:32,get color(){return g?.[d()]?.svg}})),n(k,()=>P?.consigneeInfo?.ybestate),h(w=>z(a,g?.[d()],w)),a}})),r.style.setProperty("padding","16px"),r.style.setProperty("margin-top","35px"),n(r,s(F,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return u()},placeholder:"codigo ...",colors:"#2b2b2b",handleClick:c,onEnter:$}),m),m.$$click=()=>c(""),n(m,s(x,{name:"Xclose",size:32,color:"#2b2b2b"})),h(a=>(a=p()?"block":"none")!=null?e.style.setProperty("display",a):e.style.removeProperty("display")),t})()}O(["click"]);export{Y as default};
