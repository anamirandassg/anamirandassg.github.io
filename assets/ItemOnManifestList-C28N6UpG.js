const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DZYtYP4T.js","assets/index-JeM1UUlF.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-DDo8F7CA.js","assets/debounces-BsrWG7xD.js","assets/SVG-tLQf-akW.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-2ssYmQ-s.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-B_DY6Ffw.js","assets/InputHr-M3rJ9grQ.css","assets/FlexSpace-Bhub-XBy.js","assets/ShowQR-CX8iNZOD.js","assets/ShowQRPrintLabel-CEo9iPAS.js","assets/PDFButton-CVEa5i5b.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BIcH_GNA.js","assets/InitPrintServices-CJPpdbG7.js","assets/Toast-DFxhib2M.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as a,_ as s,c as k,a as I,h as A,k as T,d as r,i as l,S as d,g as h,o as w,e as D,f as M,t as u,j as V}from"./index-JeM1UUlF.js";import{u as N}from"./debounces-BsrWG7xD.js";import{OpenModal as F}from"./DialogHRM-CVXfSPfa.js";import"./PDFButton-CVEa5i5b.js";import"./fontkit.es-BIcH_GNA.js";a(()=>s(()=>import("./LoadingColorSpinner-DZYtYP4T.js"),__vite__mapDeps([0,1,2,3])));a(()=>s(()=>import("./DropDwnSearch-DDo8F7CA.js"),__vite__mapDeps([4,1,2,5,6,7])));a(()=>s(()=>import("./CheckBoxSlide-2ssYmQ-s.js"),__vite__mapDeps([8,1,2,9])));a(()=>s(()=>import("./InputHr-B_DY6Ffw.js"),__vite__mapDeps([10,1,2,11])));a(()=>s(()=>import("./SVG-tLQf-akW.js"),__vite__mapDeps([6,1,2])));a(()=>s(()=>Promise.resolve().then(()=>G),void 0));const[$,S]=k({list:{}});I("");A(["click"]);var y=u('<div class="icon_status centerBx">'),j=u('<div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5 class=rpto></h5><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),p=u("<div class=bag_number><h5>"),z=u('<div class="_dsplFlx bottombx flxWrp spaceAround "><div class=bag_number><h5>'),B=u('<div class=" flxWrp spaceAround bottombx"><h5></h5><div class=vertseparator></div><h4>'),W=u('<div><div class="_dsplFlx topbx centerBx"><div class=" _dsplFlx"></div><p class="tr_bar_30 textleft fullName_consigne"></p><div class="icon_status centerBx">');const Q=a(()=>s(()=>import("./FlexSpace-Bhub-XBy.js"),__vite__mapDeps([12,1,2]))),f=a(()=>s(()=>import("./SVG-tLQf-akW.js"),__vite__mapDeps([6,1,2]))),X=a(()=>s(()=>import("./ShowQR-CX8iNZOD.js"),__vite__mapDeps([13,1,2,14,15,16,17,18,19,20])));function q(e){k({search:"",status:"AERO_33"});const[H,O]=I("");N(O,400);const v=t=>t?" "+t:"",R=()=>{let t=e?.item?.consigneeInfo;return v(t?.firstName)+v(t?.middleName)+v(t?.lastName)+v(t?.lastName2)},x=()=>{let t=e?.item?.hbls.length;const m=e?.item?.hbls.reduce((g,c)=>g+`${g?"/":""}${c.hbl}/${c.quantity}/${c.weight}`,"");`${e?.item?.idairguide}${e?.item?.cidentity}${t}${m}`;let _={};_.id=V(),_.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},_.content=r(X,{get val(){return e?.item?.tracking},get item(){return e?.item}}),F(_)},P=()=>{let t=e?.item?.ssg_track_key;$?.list?.[t]?S("list",t,void 0):S("list",t,1)};return T(()=>{}),r(d,{get when(){return e?.item?.currentStatus},get children(){var t=W(),m=t.firstChild,_=m.firstChild,g=_.nextSibling,c=g.nextSibling;return l(_,r(d,{get when(){return!e?.isAlready},get children(){var i=y();return i.$$click=P,l(i,r(f,{get name(){return $?.list?.[e?.item?.ssg_track_key]?"check_circle_outline":"radio_unchecked"},get color(){return $?.list?.[e?.item?.ssg_track_key]?"var(--background-red-ssg)":"var(--hrm_palette-imput-label_gray)"}})),i}}),null),l(_,r(d,{get when(){return e?.isAlready},get children(){var i=y();return l(i,r(f,{name:"success",color:"var(--hrm_palette-imput-label_gray)"})),i}}),null),l(g,R),l(m,r(Q,{}),c),l(m,r(d,{get when(){return!h()},get children(){var i=j(),n=i.firstChild,o=n.firstChild,b=o.nextSibling,E=b.nextSibling,C=E.nextSibling,L=C.nextSibling;return l(o,()=>e?.item?.consigneeInfo?.ybreparto),l(E,()=>e?.item?.city),l(L,()=>e?.item?.estate),i}}),c),l(m,r(d,{get when(){return!h()&&e?.item?.bagnumber},get children(){var i=p(),n=i.firstChild;return i.$$click=x,l(n,()=>e?.item?.bagnumber),i}}),c),l(c,r(f,{get name(){return w("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),l(t,r(d,{get when(){return h()&&e?.item?.bagnumber},get children(){var i=z(),n=i.firstChild,o=n.firstChild;return n.$$click=x,l(o,()=>e?.item?.bagnumber),i}}),null),l(t,r(d,{get when(){return h()},get children(){var i=B(),n=i.firstChild,o=n.nextSibling,b=o.nextSibling;return l(n,()=>e?.item?.city),l(b,()=>e?.item?.estate),i}}),null),D(()=>M(t,`client_item_box gWXAaj jlytmu manifest ${h()?"isMobile":"--dsd"}`)),t}})}A(["click"]);const G=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{q as default};
