const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InputHr-CThNFDCi.js","assets/index-CQuD3DCq.js","assets/index-mNJWtuMT.css","assets/InputHr-BXFw4d2l.css","assets/SVG-C7kEtqG-.js","assets/Util-DZlMHKqJ.js","assets/ShowScanAlert-DpJ3-vho.js","assets/ShowQRPrintLabel-DzfQH_lE.js","assets/PDFButton-ClnWeH7R.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-DkuHxdU6.js","assets/InitPrintServices-QWHeDiid.js","assets/Toast-93Yb8nPc.js","assets/Toast-DLpFKn-Q.css","assets/ShowSSG-CYhSmQPl.js"])))=>i.map(i=>d[i]);
import{l,_ as i,a as o,c as R,o as w,e as B,i as n,f as s,h,s as z,S as G,d as O,t as C}from"./index-CQuD3DCq.js";import{t as g,a as v}from"./Util-DZlMHKqJ.js";import{a as V}from"./Scanning-8-ibN4CW.js";import{OpenModal as y,CloseModal as S}from"./DialogHRM-CjlPBnUE.js";import"./App.module-CbHnVtRQ.js";import"./Toast-93Yb8nPc.js";var L=C('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),T=C('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx">');const F=l(()=>i(()=>import("./InputHr-CThNFDCi.js"),__vite__mapDeps([0,1,2,3]))),x=l(()=>i(()=>import("./SVG-C7kEtqG-.js"),__vite__mapDeps([4,1,2,5]))),H=l(()=>i(()=>import("./ShowScanAlert-DpJ3-vho.js"),__vite__mapDeps([6,1,2,7,8,5,9,10,11,12,13]))),W=l(()=>i(()=>import("./ShowSSG-CYhSmQPl.js"),__vite__mapDeps([14,1,2,5])));function Z(I){const[A,E]=o([]),[P,j]=R({}),[u,c]=o("");o("");const[d,X]=o("");o("");const[p,q]=o("");w(()=>{}),B(()=>{});const $=t=>{t||(t=u()),t=t.split("'").join("-"),c(""),!p()&&D(t)},D=async t=>{let e=await V(t,I?.status);e?.data?(e?.data?.isSSG?_():b({color:e?.color,msg1:e?.data?.city,msg2:e?.data?.estate,bagnumber:e?.data?.bagnumber}),E([...A(),e.data])):e?.error&&(e?.error?.isSSG?_():b({color:e?.error?.color,msg1:e?.error?.scanData?.consigneeInfo?.ybcity,msg2:e?.error?.scanData?.consigneeInfo?.ybestate,bagnumber:e?.error?.scanData?.consigneeInfo?.bagnumber}))},_=t=>{let e=v(),r={};r.id=e,r.overlayColor="rgb(200 25 60)",r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(W,{modalId:e}),y(r),setTimeout(()=>{S(e)},1e3)},b=t=>{let e=v(),r={};r.id=e,r.overlayColor=t.color,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=s(H,{modalId:e,get bagnumber(){return t.bagnumber},get msg1(){return t.msg1},get msg2(){return t.msg2}}),y(r),setTimeout(()=>{S(e)},1e3)};return(()=>{var t=T(),e=t.firstChild,r=e.nextSibling,m=r.firstChild;return e.style.setProperty("padding","16px"),n(e,s(G,{get when(){return p()},get children(){var a=L(),f=a.firstChild,k=f.nextSibling;return n(f,s(x,{get name(){return g?.[d()]?.icon},size:32,get color(){return g?.[d()]?.svg}})),n(k,()=>P?.consigneeInfo?.ybestate),h(M=>z(a,g?.[d()],M)),a}})),r.style.setProperty("padding","16px"),r.style.setProperty("margin-top","35px"),n(r,s(F,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return u()},placeholder:"codigo ...",colors:"#2b2b2b",handleClick:c,onEnter:$}),m),m.$$click=()=>c(""),n(m,s(x,{name:"Xclose",size:32,color:"#2b2b2b"})),h(a=>(a=p()?"block":"none")!=null?e.style.setProperty("display",a):e.style.removeProperty("display")),t})()}O(["click"]);export{Z as default};
