const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DG8GvFNu.js","assets/index-BJDLapRD.js","assets/index-DGHHyjai.css","assets/SVG-BG9nti-A.js","assets/index-Ci0zXM0r.js","assets/ShowQR-VXpx9-cv.js","assets/globalSignal-DDaoVMvq.js","assets/ShowQRPrintLabel-B5WvpwB2.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-2OOIWYuu.js","assets/Util-uEfv1z7O.js","assets/Toast-8yH8rEbJ.js","assets/Toast-DLpFKn-Q.css","assets/DropDwnSearch-BAr2f-1O.js","assets/debounces-n05Z78zY.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as S,_ as I,a as x,c as j,m as Z,b as G,d as s,e as U,i as n,S as _,f as w,s as X,r as L,F as J,g as p,n as K,t as u,k as Y}from"./index-BJDLapRD.js";import{t as k,a as ee,g as v,b as te,f as ie}from"./Util-uEfv1z7O.js";import{OpenModal as re}from"./DialogHRM-DmhkcNHk.js";import{i as h,g as B}from"./globalSignal-DDaoVMvq.js";import{g as ne}from"./ShowQRPrintLabel-B5WvpwB2.js";import{setTasks as ae,tasks as le}from"./FindHBL-CW9g89im.js";import"./index-Ci0zXM0r.js";import"./fontkit.es-DEjOtITv.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-2OOIWYuu.js";import"./Toast-8yH8rEbJ.js";import"./InputHr-BWlm75HD.js";import"./SVG-BG9nti-A.js";import"./FlexSpace-DG8GvFNu.js";var se=u('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ce=u('<div class="centerBx bottombx"><h5>'),oe=u("<div class=bag_number><h5>"),ue=u("<div>"),me=u('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),de=u('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>'),ge=u('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),_e=u('<p class="tr_bar_30 textleft fullName_consigne">'),he=u("<div style=margin-right:4vw>"),be=u("<div><div>"),ve=u('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>');const M=S(()=>I(()=>import("./FlexSpace-DG8GvFNu.js"),__vite__mapDeps([0,1,2]))),P=S(()=>I(()=>import("./SVG-BG9nti-A.js"),__vite__mapDeps([3,1,2,4]))),fe=S(()=>I(()=>import("./ShowQR-VXpx9-cv.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));S(()=>I(()=>import("./DropDwnSearch-BAr2f-1O.js"),__vite__mapDeps([14,1,2,15,3,4,16])));function pe(e){x("");const[C,g]=j({}),[b,R]=x(""),[ye,T]=x(""),[D,F]=x(""),f=i=>i?" "+i:"",H=()=>{let i=e?.item?.consigneeInfo;return f(i?.firstName)+f(i?.middleName)+f(i?.lastName)+f(i?.lastName2)},Q=i=>{let r="";if(e?.item?.hblS){let m=e?.item?.hblS;r=`${e?.item?.idairguide}/${e?.item?.cidentity}/${m}`}let a={};a.id=v(),a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=s(fe,{val:r,get item(){return e?.item}}),re(a)},q=i=>{let r=i,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const m=new RegExp(a);return r.length===13&&m.test(r)&&(r=r.slice(3,12)),r},$=(i,r)=>{R(r),T(i),setTimeout(()=>{T("")},300)},y=i=>{F(i),setTimeout(()=>{F("")},3e3)},V=async i=>{let r={timeStamp:new Date().getTime(),latitude:B?.latitude,longitude:B?.longitude,statusId:i,userId:Y?.profile?.userId};if(e?.item?.idairguide){let a=e?.item?.statusHistory||[];a.push(r);let m={idairguide:e?.item?.idairguide,ssg_track_key:e?.item?.ssg_track_key},d=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,E=e?.item?.city||e?.item?.consigneeInfo?.ybcity,A={idairnumber:e?.item?.idairnumber,estate:d,city:E,tracking:e?.currentHbl,currentStatus:i,timeStamp:new Date().getTime()};if(g(""),g(e?.item),y(v()),$("","success"),!L?.roles?.[d])$("","warning"),g({consigneeInfo:{ybestate:"Zona incorrecta"}}),y(v());else if(e?.item?.currentStatus!==r.statusId){let t={statusHistory:a,currentStatus:r.statusId};await $e(m,t),ae([...le(),A]),e?.newSear()}else $("","warning"),g({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),y(v())}else $("","error"),g({consigneeInfo:{ybestate:"Error con manifiesto"}}),y(v())};Z(()=>{});const z=()=>B?.list?.filter(i=>i.id),[O,{refetch:xe}]=G(e?.item?.bagnumber,async()=>{let i=e?.item?.hbls,r=i.map(d=>`${d.hbl}/${d.quantity}/${d.weight}`).join(""),a=`${e?.item?.idairguide}/${e?.item?.cidentity}/${i.length}/${r}`;return await ne(a)});return s(_,{get when(){return e?.item?.bagnumber},get children(){var i=ve(),r=i.firstChild,a=r.nextSibling,m=a.firstChild,d=m.firstChild,E=d.nextSibling,A=E.nextSibling;return r.style.setProperty("padding","16px"),n(r,s(_,{get when(){return D()},get children(){var t=se(),l=t.firstChild,c=l.nextSibling;return n(l,s(P,{get name(){return k?.[b()]?.icon},size:32,get color(){return k?.[b()]?.svg}})),n(c,()=>C?.consigneeInfo?.ybestate),w(o=>X(t,k?.[b()],o)),t}})),n(a,s(_,{get when(){return e?.item?.bagnumber},get children(){return[(()=>{var t=ge(),l=t.firstChild;return n(l,s(P,{get name(){return ee("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),n(t,s(_,{get when(){return!h()&&e?.item?.idairnumber},get children(){var c=ce(),o=c.firstChild;return n(o,()=>e?.item?.idairnumber),c}}),null),t})(),s(_,{get when(){return!h()},get children(){return[(()=>{var t=_e();return n(t,H),t})(),he()]}})]}}),m),n(a,s(M,{}),m),n(d,()=>e?.item?.consigneeInfo?.ybcity),n(A,()=>e?.item?.consigneeInfo?.ybestate),n(a,s(M,{}),null),n(a,s(_,{get when(){return!h()&&e?.item?.bagnumber},get children(){var t=be(),l=t.firstChild;return n(l,s(_,{get when(){return e?.item?.bagnumber},get children(){var c=oe(),o=c.firstChild;return c.$$click=()=>Q(),n(o,()=>q(e?.item?.bagnumber)),c}})),t}}),null),n(i,s(_,{get when(){return!e?.showQR&&L?.roles?.HBLUPD?.isActive},get children(){var t=ue();return n(t,s(J,{get each(){return z()},children:(l,c)=>(()=>{var o=de(),N=o.firstChild,W=N.firstChild;return o.$$click=we=>V(l.id),o.style.setProperty("padding","9px"),n(o,s(P,{get name(){return l.icon},size:24}),N),n(W,()=>h()?l.label:l.tag),o})()})),w(()=>p(t,h()?"":" bottombx flxWrp spaceAround centerBx")),t}}),null),n(i,s(_,{get when(){return e?.showQR},get children(){var t=me(),l=t.firstChild;return t.style.setProperty("padding","16px"),w(()=>K(l,"src",O())),t}}),null),w(t=>{var l=`client_item_box gWXAaj jlytmu ${h()?"isMobile":""}`,c=D()?"block":"none";return l!==t.e&&p(i,t.e=l),c!==t.t&&((t.t=c)!=null?r.style.setProperty("display",c):r.style.removeProperty("display")),t},{e:void 0,t:void 0}),i}})}const $e=async(e,C)=>{let g={params:e,data2update:C},b=te(809004);return g={...g,...b},await ie(g)};U(["click"]);export{pe as default};
