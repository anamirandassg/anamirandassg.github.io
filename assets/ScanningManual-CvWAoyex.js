const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-jScghAPM.js","assets/index-BXk4djaH.js","assets/index-BmzAZVve.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-DEWKJB1O.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-9G4wpA9m.js"])))=>i.map(i=>d[i]);
import{l as m,_ as g,a as o,c as w,o as B,n as R,i as n,d as s,e as f,s as z,S as G,h as O,t as C}from"./index-BXk4djaH.js";import{t as p,g as v}from"./Util-ZZYG9kF2.js";import{h as V,S as F,a as H}from"./ShowScanAlert-PoHAdjRG.js";import"./Toast-CQGOdk3V.js";import{OpenModal as y,CloseModal as S}from"./DialogHRM-PW5MDw4F.js";import"./Scanning-DyEaz1oL.js";import"./App.module-CbHnVtRQ.js";import"./ShowQRPrintLabel-DUeA2Wk3.js";import"./PDFButton-BPwQOm6a.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-j4QB5RW3.js";import"./InitPrintServices-D3KYFGNf.js";var L=C('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),T=C('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx">');m(()=>g(()=>import("./LoadingColorSpinner-jScghAPM.js"),__vite__mapDeps([0,1,2,3])));const W=m(()=>g(()=>import("./InputHr-DEWKJB1O.js"),__vite__mapDeps([4,1,2,5]))),x=m(()=>g(()=>import("./SVG-9G4wpA9m.js"),__vite__mapDeps([6,1,2])));function se(I){const[A,P]=o([]),[$,j]=w({}),[u,l]=o("");o("");const[i,X]=o("");o("");const[c,q]=o("");B(()=>{}),R(()=>{});const E=t=>{t||(t=u()),t=t.split("'").join("-"),l(""),!c()&&D(t)},D=async t=>{let e=await V(t,I?.status);e?.data?(e?.data?.isSSG?b():h({color:e?.color,msg1:e?.data?.city,msg2:e?.data?.estate,bagnumber:e?.data?.bagnumber}),P([...A(),e.data])):e?.error&&(e?.error?.isSSG?b():h({color:e?.error?.color,msg1:e?.error?.scanData?.consigneeInfo?.ybcity,msg2:e?.error?.scanData?.consigneeInfo?.ybestate,bagnumber:e?.error?.scanData?.consigneeInfo?.bagnumber}))},b=t=>{let e=v(),r={};r.id=e,r.overlayColor="rgb(200 25 60)",r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(F,{modalId:e}),y(r),setTimeout(()=>{S(e)},1e3)},h=t=>{let e=v(),r={};r.id=e,r.overlayColor=t.color,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(H,{modalId:e,get bagnumber(){return t.bagnumber},get msg1(){return t.msg1},get msg2(){return t.msg2}}),y(r),setTimeout(()=>{S(e)},1e3)};return(()=>{var t=T(),e=t.firstChild,r=e.nextSibling,d=r.firstChild;return e.style.setProperty("padding","16px"),n(e,s(G,{get when(){return c()},get children(){var a=L(),_=a.firstChild,k=_.nextSibling;return n(_,s(x,{get name(){return p?.[i()]?.icon},size:32,get color(){return p?.[i()]?.svg}})),n(k,()=>$?.consigneeInfo?.ybestate),f(M=>z(a,p?.[i()],M)),a}})),r.style.setProperty("padding","16px"),r.style.setProperty("margin-top","35px"),n(r,s(W,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return u()},placeholder:"codigo ...",colors:"#2b2b2b",handleClick:l,onEnter:E}),d),d.$$click=()=>l(""),n(d,s(x,{name:"Xclose",size:32,color:"#2b2b2b"})),f(a=>(a=c()?"block":"none")!=null?e.style.setProperty("display",a):e.style.removeProperty("display")),t})()}O(["click"]);export{se as default};
