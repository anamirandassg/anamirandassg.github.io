const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-jScghAPM.js","assets/index-BXk4djaH.js","assets/index-BmzAZVve.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-2DG-zejX.js","assets/debounces-BkvUtFaP.js","assets/SVG-9G4wpA9m.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-_tE90ARs.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-DEWKJB1O.js","assets/InputHr-M3rJ9grQ.css","assets/FlexSpace-BQZCrK97.js","assets/ShowQR-DqO0Xipe.js","assets/ShowQRPrintLabel-DUeA2Wk3.js","assets/PDFButton-BPwQOm6a.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-j4QB5RW3.js","assets/InitPrintServices-D3KYFGNf.js","assets/Util-ZZYG9kF2.js","assets/Toast-CQGOdk3V.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as a,_ as s,c as I,a as k,h as A,j as T,d as r,i as l,S as m,g as h,e as w,f as D,t as u}from"./index-BXk4djaH.js";import{a as M,g as V}from"./Util-ZZYG9kF2.js";import{u as N}from"./debounces-BkvUtFaP.js";import{OpenModal as F}from"./DialogHRM-PW5MDw4F.js";import"./PDFButton-BPwQOm6a.js";import"./fontkit.es-j4QB5RW3.js";a(()=>s(()=>import("./LoadingColorSpinner-jScghAPM.js"),__vite__mapDeps([0,1,2,3])));a(()=>s(()=>import("./DropDwnSearch-2DG-zejX.js"),__vite__mapDeps([4,1,2,5,6,7])));a(()=>s(()=>import("./CheckBoxSlide-_tE90ARs.js"),__vite__mapDeps([8,1,2,9])));a(()=>s(()=>import("./InputHr-DEWKJB1O.js"),__vite__mapDeps([10,1,2,11])));a(()=>s(()=>import("./SVG-9G4wpA9m.js"),__vite__mapDeps([6,1,2])));a(()=>s(()=>Promise.resolve().then(()=>G),void 0));const[$,S]=I({list:{}});k("");A(["click"]);var y=u('<div class="icon_status centerBx">'),p=u('<div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5 class=rpto></h5><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),j=u("<div class=bag_number><h5>"),z=u('<div class="_dsplFlx bottombx flxWrp spaceAround "><div class=bag_number><h5>'),B=u('<div class=" flxWrp spaceAround bottombx"><h5></h5><div class=vertseparator></div><h4>'),W=u('<div><div class="_dsplFlx topbx centerBx"><div class=" _dsplFlx"></div><p class="tr_bar_30 textleft fullName_consigne"></p><div class="icon_status centerBx">');const Q=a(()=>s(()=>import("./FlexSpace-BQZCrK97.js"),__vite__mapDeps([12,1,2]))),f=a(()=>s(()=>import("./SVG-9G4wpA9m.js"),__vite__mapDeps([6,1,2]))),X=a(()=>s(()=>import("./ShowQR-DqO0Xipe.js"),__vite__mapDeps([13,1,2,14,15,16,17,18,19,20,21])));function q(e){I({search:"",status:"AERO_33"});const[H,O]=k("");N(O,400);const v=t=>t?" "+t:"",R=()=>{let t=e?.item?.consigneeInfo;return v(t?.firstName)+v(t?.middleName)+v(t?.lastName)+v(t?.lastName2)},x=()=>{let t=e?.item?.hbls.length;const d=e?.item?.hbls.reduce((g,c)=>g+`${g?"/":""}${c.hbl}/${c.quantity}/${c.weight}`,"");`${e?.item?.idairguide}${e?.item?.cidentity}${t}${d}`;let _={};_.id=V(),_.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},_.content=r(X,{get val(){return e?.item?.tracking},get item(){return e?.item}}),F(_)},P=()=>{let t=e?.item?.ssg_track_key;$?.list?.[t]?S("list",t,void 0):S("list",t,1)};return T(()=>{}),r(m,{get when(){return e?.item?.currentStatus},get children(){var t=W(),d=t.firstChild,_=d.firstChild,g=_.nextSibling,c=g.nextSibling;return l(_,r(m,{get when(){return!e?.isAlready},get children(){var i=y();return i.$$click=P,l(i,r(f,{get name(){return $?.list?.[e?.item?.ssg_track_key]?"check_circle_outline":"radio_unchecked"},get color(){return $?.list?.[e?.item?.ssg_track_key]?"var(--background-red-ssg)":"var(--hrm_palette-imput-label_gray)"}})),i}}),null),l(_,r(m,{get when(){return e?.isAlready},get children(){var i=y();return l(i,r(f,{name:"success",color:"var(--hrm_palette-imput-label_gray)"})),i}}),null),l(g,R),l(d,r(Q,{}),c),l(d,r(m,{get when(){return!h()},get children(){var i=p(),n=i.firstChild,o=n.firstChild,b=o.nextSibling,E=b.nextSibling,C=E.nextSibling,L=C.nextSibling;return l(o,()=>e?.item?.consigneeInfo?.ybreparto),l(E,()=>e?.item?.city),l(L,()=>e?.item?.estate),i}}),c),l(d,r(m,{get when(){return!h()&&e?.item?.bagnumber},get children(){var i=j(),n=i.firstChild;return i.$$click=x,l(n,()=>e?.item?.bagnumber),i}}),c),l(c,r(f,{get name(){return M("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),l(t,r(m,{get when(){return h()&&e?.item?.bagnumber},get children(){var i=z(),n=i.firstChild,o=n.firstChild;return n.$$click=x,l(o,()=>e?.item?.bagnumber),i}}),null),l(t,r(m,{get when(){return h()},get children(){var i=B(),n=i.firstChild,o=n.nextSibling,b=o.nextSibling;return l(n,()=>e?.item?.city),l(b,()=>e?.item?.estate),i}}),null),w(()=>D(t,`client_item_box gWXAaj jlytmu manifest ${h()?"isMobile":"--dsd"}`)),t}})}A(["click"]);const G=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{q as default};