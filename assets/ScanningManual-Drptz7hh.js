const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Cod6xDRi.js","assets/index-CgMuzQKX.js","assets/index-DGHHyjai.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-CfOUHnpj.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-D9rz6ETf.js","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as y,_ as $,a as c,c as q,o as N,m as J,i as s,d as n,f as h,e as K,t as m,s as Q,S as w,q as U,F as Y,g as z,E as Z}from"./index-CgMuzQKX.js";import{t as f,i as ee,a as te,g as S}from"./Util-uEfv1z7O.js";import{i as F}from"./globalSignal-B7euIFAZ.js";import re from"./FlexSpace-CO8NVGpq.js";import{h as ae,S as se,a as ne}from"./ShowScanAlert-uQUKDLP4.js";import{OpenToast as ie}from"./Toast-DNN79moQ.js";import{OpenModal as O,CloseModal as R}from"./DialogHRM-1cJ-gMeB.js";import"./index-Ci0zXM0r.js";import"./ShowQRPrintLabel-CZeA_N7d.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-CprHcwF4.js";var oe=m('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),le=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=scrollH>'),ce=m("<div> <!>."),de=m("<div> "),me=m('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><p></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const ge=y(()=>$(()=>import("./LoadingColorSpinner-Cod6xDRi.js"),__vite__mapDeps([0,1,2,3]))),pe=y(()=>$(()=>import("./InputHr-CfOUHnpj.js"),__vite__mapDeps([4,1,2,5]))),x=y(()=>$(()=>import("./SVG-D9rz6ETf.js"),__vite__mapDeps([6,1,2,7])));function Ee(G){const[g,L]=c([]),[j,ue]=q({}),[C,p]=c("");c("");const[u,ve]=c("");c("");const[v,_e]=c("");N(()=>{}),J(()=>{});const H=a=>{a||(a=C()),a=a.split("'").join("-"),p(""),!v()&&T(a)},T=async a=>{let e=await ae(a,G?.status);e?.data?(e?.data?.isSSG?I():(ie({text:`Pertenece a ${e?.data?.city?e?.data?.city:""}${e?.data?.estate?" :: "+e?.data?.estate:""}`,timeout:3500,theme:"green",id:S()}),A({color:e?.color,msg1:e?.data?.city,msg2:e?.data?.estate,bagnumber:e?.data?.bagnumber})),L([...g(),e.data])):e?.error&&(e?.error?.isSSG?I():A({color:e?.error?.color,msg1:e?.error?.scanData?.consigneeInfo?.ybcity,msg2:e?.error?.scanData?.consigneeInfo?.ybestate,bagnumber:e?.error?.scanData?.consigneeInfo?.bagnumber}))},I=a=>{let e=S(),t={};t.id=e,t.overlayColor="rgb(200 25 60)",t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=n(se,{modalId:e}),O(t),setTimeout(()=>{R(e)},1e3)},A=a=>{let e=S(),t={};t.id=e,t.overlayColor=a.color,t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=n(ne,{modalId:e,get bagnumber(){return a.bagnumber},get msg1(){return a.msg1},get msg2(){return a.msg2}}),O(t),setTimeout(()=>{R(e)},1e3)};return(()=>{var a=le(),e=a.firstChild,t=e.nextSibling,_=t.firstChild,V=t.nextSibling;return e.style.setProperty("padding","16px"),s(e,n(w,{get when(){return v()},get children(){var r=oe(),o=r.firstChild,l=o.nextSibling;return s(o,n(x,{get name(){return f?.[u()]?.icon},size:32,get color(){return f?.[u()]?.svg}})),s(l,()=>j?.consigneeInfo?.ybestate),h(i=>Q(r,f?.[u()],i)),r}})),t.style.setProperty("padding","16px"),t.style.setProperty("margin-top","35px"),s(t,n(pe,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return C()},placeholder:"codigo ...",colors:"#2b2b2b",handleClick:p,onEnter:H}),_),_.$$click=()=>p(""),s(_,n(x,{name:"Xclose",size:32,color:"#2b2b2b"})),s(V,n(Z,{fallback:r=>(()=>{var o=ce(),l=o.firstChild,i=l.nextSibling;return i.nextSibling,s(o,()=>r.toString(),i),o})(),get children(){return n(U,{get fallback(){return(()=>{var r=de();return r.firstChild,s(r,n(ge,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r})()},get children(){return n(w,{get when(){return g()},get children(){return n(Y,{get each(){return ee(g(),"timeStamp",0)},children:(r,o)=>(()=>{var l=me(),i=l.firstChild,B=i.firstChild,P=B.firstChild,b=P.nextSibling,k=B.nextSibling,E=k.firstChild,W=E.nextSibling,X=W.nextSibling;return s(P,n(x,{get name(){return te("M023009")?.statusListIcons?.[r?.currentStatus]},size:32})),b.style.setProperty("padding","8px"),s(b,()=>r?.tracking),s(i,n(re,{}),k),s(E,()=>r?.city),s(X,()=>r?.estate),h(d=>{var M=`client_item_box gWXAaj jlytmu manifest  ${F()?"isMobile":"centerBx"}`,D=` title_scan centerBx ${F(),""} `;return M!==d.e&&z(i,d.e=M),D!==d.t&&z(b,d.t=D),d},{e:void 0,t:void 0}),l})()})}})}})}})),h(r=>(r=v()?"block":"none")!=null?e.style.setProperty("display",r):e.style.removeProperty("display")),a})()}K(["click"]);export{Ee as default};
