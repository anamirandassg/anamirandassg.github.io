const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D-GAA8Qq.js","assets/index-CFUY4uOd.js","assets/index-DGHHyjai.css","assets/SVG-joP20i3P.js","assets/index-Ci0zXM0r.js","assets/ShowQR-IPJCTbDp.js","assets/globalSignal-CsSzoQh8.js","assets/ShowQRPrintLabel-BFMwFot3.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-khaE0HRx.js","assets/Util-uEfv1z7O.js","assets/Toast-CHTYjclQ.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as v,_ as f,c as N,a as M,h as F,d as r,e as R,i as l,S as c,f as O,g as D,t as d}from"./index-CFUY4uOd.js";import{a as L,g as P}from"./Util-uEfv1z7O.js";import{u as T}from"./debounces-LvJD_SNN.js";import{OpenModal as V}from"./DialogHRM-D8S84T5k.js";import{selectedManifest as $,setSelectedManifest as y}from"./LinkManifest-0OkDPqe-.js";import{i as o}from"./globalSignal-CsSzoQh8.js";import"./index-Ci0zXM0r.js";import"./fontkit.es-DEjOtITv.js";import"./InitPrintServices-khaE0HRx.js";var k=d('<div class="icon_status centerBx">'),z=d('<div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5 class=rpto></h5><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),B=d("<div class=bag_number><h5>"),W=d('<div class="_dsplFlx bottombx flxWrp spaceAround "><div class=bag_number><h5>'),j=d('<div class=" flxWrp spaceAround bottombx"><h5></h5><div class=vertseparator></div><h4>'),p=d('<div><div class="_dsplFlx topbx centerBx"><div class=" _dsplFlx"></div><p class="tr_bar_30 textleft fullName_consigne"></p><div class="icon_status centerBx">');const Q=v(()=>f(()=>import("./FlexSpace-D-GAA8Qq.js"),__vite__mapDeps([0,1,2]))),b=v(()=>f(()=>import("./SVG-joP20i3P.js"),__vite__mapDeps([3,1,2,4]))),X=v(()=>f(()=>import("./ShowQR-IPJCTbDp.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));function ie(e){N({search:"",status:"AERO_33"});const[q,C]=M("");T(C,400);const g=t=>t?" "+t:"",w=()=>{let t=e?.item?.consigneeInfo;return g(t?.firstName)+g(t?.middleName)+g(t?.lastName)+g(t?.lastName2)},x=()=>{let t=e?.item?.hbls.length;const m=e?.item?.hbls.reduce((u,s)=>u+`${u?"/":""}${s.hbl}/${s.quantity}/${s.weight}`,"");`${e?.item?.idairguide}${e?.item?.cidentity}${t}${m}`;let n={};n.id=P(),n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=r(X,{get val(){return e?.item?.tracking},get item(){return e?.item}}),V(n)},A=()=>{let t=e?.item?.ssg_track_key;$?.list?.[t]?y("list",t,void 0):y("list",t,1)};return F(()=>{}),r(c,{get when(){return e?.item?.currentStatus},get children(){var t=p(),m=t.firstChild,n=m.firstChild,u=n.nextSibling,s=u.nextSibling;return l(n,r(c,{get when(){return!e?.isAlready},get children(){var i=k();return i.$$click=A,l(i,r(b,{get name(){return $?.list?.[e?.item?.ssg_track_key]?"check_circle_outline":"radio_unchecked"},get color(){return $?.list?.[e?.item?.ssg_track_key]?"var(--background-red-ssg)":"var(--hrm_palette-imput-label_gray)"}})),i}}),null),l(n,r(c,{get when(){return e?.isAlready},get children(){var i=k();return l(i,r(b,{name:"success",color:"var(--hrm_palette-imput-label_gray)"})),i}}),null),l(u,w),l(m,r(Q,{}),s),l(m,r(c,{get when(){return!o()},get children(){var i=z(),a=i.firstChild,_=a.firstChild,h=_.nextSibling,S=h.nextSibling,E=S.nextSibling,I=E.nextSibling;return l(_,()=>e?.item?.consigneeInfo?.ybreparto),l(S,()=>e?.item?.city),l(I,()=>e?.item?.estate),i}}),s),l(m,r(c,{get when(){return!o()&&e?.item?.bagnumber},get children(){var i=B(),a=i.firstChild;return i.$$click=x,l(a,()=>e?.item?.bagnumber),i}}),s),l(s,r(b,{get name(){return L("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),l(t,r(c,{get when(){return o()&&e?.item?.bagnumber},get children(){var i=W(),a=i.firstChild,_=a.firstChild;return a.$$click=x,l(_,()=>e?.item?.bagnumber),i}}),null),l(t,r(c,{get when(){return o()},get children(){var i=j(),a=i.firstChild,_=a.nextSibling,h=_.nextSibling;return l(a,()=>e?.item?.city),l(h,()=>e?.item?.estate),i}}),null),O(()=>D(t,`client_item_box gWXAaj jlytmu manifest ${o()?"isMobile":"--dsd"}`)),t}})}R(["click"]);export{ie as default};
