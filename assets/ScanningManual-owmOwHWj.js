const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-msWu7pWL.js","assets/index-Bd8d4l1p.js","assets/index-DGHHyjai.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-NvD9idxZ.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-jh3f1-82.js","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as x,_ as y,a as c,c as N,o as q,m as J,i as s,d as n,f as h,e as K,t as g,s as Q,S as D,r as U,F as Y,g as w,E as Z}from"./index-Bd8d4l1p.js";import{t as f,i as ee,a as te,g as z}from"./Util-uEfv1z7O.js";import{i as F}from"./globalSignal-ChcoKg_q.js";import re from"./FlexSpace-C4NbACMw.js";import{h as ae,S as se,a as ne}from"./ShowScanAlert-leS-wtkQ.js";import"./Toast-pMiqqDvz.js";import{OpenModal as R,CloseModal as G}from"./DialogHRM-Dkv_duLR.js";import"./index-Ci0zXM0r.js";import"./ShowQRPrintLabel-CdYgf9Rb.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-CprHcwF4.js";var ie=g('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),oe=g('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=scrollH>'),le=g("<div> <!>."),ce=g("<div> "),de=g('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><p></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const ge=x(()=>y(()=>import("./LoadingColorSpinner-msWu7pWL.js"),__vite__mapDeps([0,1,2,3]))),me=x(()=>y(()=>import("./InputHr-NvD9idxZ.js"),__vite__mapDeps([4,1,2,5]))),S=x(()=>y(()=>import("./SVG-jh3f1-82.js"),__vite__mapDeps([6,1,2,7])));function Ee(L){const[m,O]=c([]),[j,pe]=N({}),[$,p]=c("");c("");const[u,ue]=c("");c("");const[v,ve]=c("");q(()=>{}),J(()=>{});const H=a=>{a||(a=$()),a=a.split("'").join("-"),p(""),!v()&&V(a)},V=async a=>{let e=await ae(a,L?.status);e?.data?(e?.data?.isSSG?C():I({color:e?.color,msg1:e?.data?.city,msg2:e?.data?.estate,bagnumber:e?.data?.bagnumber}),O([...m(),e.data])):e?.error&&(e?.error?.isSSG?C():I({color:e?.error?.color,msg1:e?.error?.scanData?.consigneeInfo?.ybcity,msg2:e?.error?.scanData?.consigneeInfo?.ybestate,bagnumber:e?.error?.scanData?.consigneeInfo?.bagnumber}))},C=a=>{let e=z(),t={};t.id=e,t.overlayColor="rgb(200 25 60)",t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=n(se,{modalId:e}),R(t),setTimeout(()=>{G(e)},1e3)},I=a=>{let e=z(),t={};t.id=e,t.overlayColor=a.color,t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=n(ne,{modalId:e,get bagnumber(){return a.bagnumber},get msg1(){return a.msg1},get msg2(){return a.msg2}}),R(t),setTimeout(()=>{G(e)},1e3)};return(()=>{var a=oe(),e=a.firstChild,t=e.nextSibling,_=t.firstChild,T=t.nextSibling;return e.style.setProperty("padding","16px"),s(e,n(D,{get when(){return v()},get children(){var r=ie(),o=r.firstChild,l=o.nextSibling;return s(o,n(S,{get name(){return f?.[u()]?.icon},size:32,get color(){return f?.[u()]?.svg}})),s(l,()=>j?.consigneeInfo?.ybestate),h(i=>Q(r,f?.[u()],i)),r}})),t.style.setProperty("padding","16px"),t.style.setProperty("margin-top","35px"),s(t,n(me,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return $()},placeholder:"codigo ...",colors:"#2b2b2b",handleClick:p,onEnter:H}),_),_.$$click=()=>p(""),s(_,n(S,{name:"Xclose",size:32,color:"#2b2b2b"})),s(T,n(Z,{fallback:r=>(()=>{var o=le(),l=o.firstChild,i=l.nextSibling;return i.nextSibling,s(o,()=>r.toString(),i),o})(),get children(){return n(U,{get fallback(){return(()=>{var r=ce();return r.firstChild,s(r,n(ge,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r})()},get children(){return n(D,{get when(){return m()},get children(){return n(Y,{get each(){return ee(m(),"timeStamp",0)},children:(r,o)=>(()=>{var l=de(),i=l.firstChild,A=i.firstChild,B=A.firstChild,b=B.nextSibling,k=A.nextSibling,E=k.firstChild,W=E.nextSibling,X=W.nextSibling;return s(B,n(S,{get name(){return te("M023009")?.statusListIcons?.[r?.currentStatus]},size:32})),b.style.setProperty("padding","8px"),s(b,()=>r?.tracking),s(i,n(re,{}),k),s(E,()=>r?.city),s(X,()=>r?.estate),h(d=>{var M=`client_item_box gWXAaj jlytmu manifest  ${F()?"isMobile":"centerBx"}`,P=` title_scan centerBx ${F(),""} `;return M!==d.e&&w(i,d.e=M),P!==d.t&&w(b,d.t=P),d},{e:void 0,t:void 0}),l})()})}})}})}})),h(r=>(r=v()?"block":"none")!=null?e.style.setProperty("display",r):e.style.removeProperty("display")),a})()}K(["click"]);export{Ee as default};
