const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-C6ROFSSp.js","assets/index-Do4nhdU0.js","assets/index-C1cQPolT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-Bx1C19XD.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-1hx_1_9D.js","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as d,_ as g,a,c as w,o as B,m as R,i as n,d as s,f as h,e as z,t as C,s as G,S as O}from"./index-Do4nhdU0.js";import{t as m,g as v}from"./Util-D886uaAp.js";import"./globalSignal-DbwDqxNx.js";import{h as V,S as F,a as H}from"./ShowScanAlert-C07mmmoC.js";import"./Toast-BG6UuY1Q.js";import{OpenModal as y,CloseModal as S}from"./DialogHRM-DOKMp4nk.js";import"./index-Ci0zXM0r.js";import"./Scanning-B5kkfECu.js";import"./App.module-CbHnVtRQ.js";import"./ShowQRPrintLabel-Cav7TXbw.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-BbVI7Xg0.js";var L=C('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),T=C('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx">');d(()=>g(()=>import("./LoadingColorSpinner-C6ROFSSp.js"),__vite__mapDeps([0,1,2,3])));const W=d(()=>g(()=>import("./InputHr-Bx1C19XD.js"),__vite__mapDeps([4,1,2,5]))),x=d(()=>g(()=>import("./SVG-1hx_1_9D.js"),__vite__mapDeps([6,1,2,7])));function le(I){const[A,P]=a([]),[$,j]=w({}),[u,l]=a("");a("");const[i,X]=a("");a("");const[c,q]=a("");B(()=>{}),R(()=>{});const E=t=>{t||(t=u()),t=t.split("'").join("-"),l(""),!c()&&D(t)},D=async t=>{let e=await V(t,I?.status);e?.data?(e?.data?.isSSG?b():f({color:e?.color,msg1:e?.data?.city,msg2:e?.data?.estate,bagnumber:e?.data?.bagnumber}),P([...A(),e.data])):e?.error&&(e?.error?.isSSG?b():f({color:e?.error?.color,msg1:e?.error?.scanData?.consigneeInfo?.ybcity,msg2:e?.error?.scanData?.consigneeInfo?.ybestate,bagnumber:e?.error?.scanData?.consigneeInfo?.bagnumber}))},b=t=>{let e=v(),r={};r.id=e,r.overlayColor="rgb(200 25 60)",r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(F,{modalId:e}),y(r),setTimeout(()=>{S(e)},1e3)},f=t=>{let e=v(),r={};r.id=e,r.overlayColor=t.color,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(H,{modalId:e,get bagnumber(){return t.bagnumber},get msg1(){return t.msg1},get msg2(){return t.msg2}}),y(r),setTimeout(()=>{S(e)},1e3)};return(()=>{var t=T(),e=t.firstChild,r=e.nextSibling,p=r.firstChild;return e.style.setProperty("padding","16px"),n(e,s(O,{get when(){return c()},get children(){var o=L(),_=o.firstChild,k=_.nextSibling;return n(_,s(x,{get name(){return m?.[i()]?.icon},size:32,get color(){return m?.[i()]?.svg}})),n(k,()=>$?.consigneeInfo?.ybestate),h(M=>G(o,m?.[i()],M)),o}})),r.style.setProperty("padding","16px"),r.style.setProperty("margin-top","35px"),n(r,s(W,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return u()},placeholder:"codigo ...",colors:"#2b2b2b",handleClick:l,onEnter:E}),p),p.$$click=()=>l(""),n(p,s(x,{name:"Xclose",size:32,color:"#2b2b2b"})),h(o=>(o=c()?"block":"none")!=null?e.style.setProperty("display",o):e.style.removeProperty("display")),t})()}z(["click"]);export{le as default};
