const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Bijb2seh.js","assets/index-Cv5F9-K1.js","assets/index-DGHHyjai.css","assets/SVG-BdRCSS5O.js","assets/index-Ci0zXM0r.js","assets/ShowQR-BeqVAkm4.js","assets/globalSignal-BJOxeQ2F.js","assets/ShowQRPrintLabel-BviW5gMq.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-C7cXHSNx.js","assets/Util-D2TY0Dd6.js","assets/Toast-CYpYhA4A.js","assets/Toast-DLpFKn-Q.css","assets/DropDwnSearch-DEkEQWa9.js","assets/debounces-BqReYOh6.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as w,_ as I,a as x,c as Z,k as G,b as U,d as s,e as X,i as n,S as _,f as S,s as J,r as L,F as K,g as p,m as Y,t as m,j as ee}from"./index-Cv5F9-K1.js";import{t as k,a as M,g as v,f as te,q as ie}from"./Util-D2TY0Dd6.js";import{OpenModal as re}from"./DialogHRM-Diw7aUpl.js";import{i as h,g as B}from"./globalSignal-BJOxeQ2F.js";import{g as ne}from"./ShowQRPrintLabel-BviW5gMq.js";import{setTasks as ae,tasks as le}from"./FindHBL-Cjvd5ctM.js";import"./index-Ci0zXM0r.js";import"./fontkit.es-DEjOtITv.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-C7cXHSNx.js";import"./Toast-CYpYhA4A.js";import"./InputHr-Cg0oOHiO.js";import"./SVG-BdRCSS5O.js";import"./FlexSpace-Bijb2seh.js";var se=m('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ce=m('<div class="centerBx bottombx"><h5>'),oe=m("<div class=bag_number><h5>"),me=m("<div>"),ue=m('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),de=m('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>'),ge=m('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),_e=m('<p class="tr_bar_30 textleft fullName_consigne">'),he=m("<div style=margin-right:4vw>"),be=m("<div><div>"),ve=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>');const q=w(()=>I(()=>import("./FlexSpace-Bijb2seh.js"),__vite__mapDeps([0,1,2]))),P=w(()=>I(()=>import("./SVG-BdRCSS5O.js"),__vite__mapDeps([3,1,2,4]))),fe=w(()=>I(()=>import("./ShowQR-BeqVAkm4.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));w(()=>I(()=>import("./DropDwnSearch-DEkEQWa9.js"),__vite__mapDeps([14,1,2,15,3,4,16])));function pe(e){x("");const[C,g]=Z({}),[b,R]=x(""),[ye,T]=x(""),[D,F]=x(""),f=i=>i?" "+i:"",H=()=>{let i=e?.item?.consigneeInfo;return f(i?.firstName)+f(i?.middleName)+f(i?.lastName)+f(i?.lastName2)},Q=i=>{let r="";if(e?.item?.hblS){let u=e?.item?.hblS;r=`${e?.item?.idairguide}/${e?.item?.cidentity}/${u}`}let a={};a.id=v(),a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=s(fe,{val:r,get item(){return e?.item}}),re(a)},V=i=>{let r=i,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const u=new RegExp(a);return r.length===13&&u.test(r)&&(r=r.slice(3,12)),r},$=(i,r)=>{R(r),T(i),setTimeout(()=>{T("")},300)},y=i=>{F(i),setTimeout(()=>{F("")},3e3)},z=async i=>{let r={timeStamp:new Date().getTime(),latitude:B?.latitude,longitude:B?.longitude,statusId:i,userId:ee?.profile?.userId};if(e?.item?.idairguide){let a=e?.item?.statusHistory||[];a.push(r);let u={idairguide:e?.item?.idairguide,ssg_track_key:e?.item?.ssg_track_key},d=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,E=e?.item?.city||e?.item?.consigneeInfo?.ybcity,A={idairnumber:e?.item?.idairnumber,estate:d,city:E,tracking:e?.currentHbl,currentStatus:i,timeStamp:new Date().getTime()};if(g(""),g(e?.item),y(v()),$("","success"),!L?.roles?.[d])$("","warning"),g({consigneeInfo:{ybestate:"Zona incorrecta"}}),y(v());else if(e?.item?.currentStatus!==r.statusId){let t={statusHistory:a,currentStatus:r.statusId};await $e(u,t),ae([...le(),A]),e?.newSear()}else $("","warning"),g({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),y(v())}else $("","error"),g({consigneeInfo:{ybestate:"Error con manifiesto"}}),y(v())};G(()=>{});const O=()=>B?.list?.filter(i=>i.id),[j,{refetch:xe}]=U(e?.item?.bagnumber,async()=>{let i=e?.item?.hbls,r=i.map(d=>`${d.hbl}/${d.quantity}/${d.weight}`).join(""),a=`${e?.item?.idairguide}/${e?.item?.cidentity}/${i.length}/${r}`;return await ne(a)});return s(_,{get when(){return e?.item?.bagnumber},get children(){var i=ve(),r=i.firstChild,a=r.nextSibling,u=a.firstChild,d=u.firstChild,E=d.nextSibling,A=E.nextSibling;return r.style.setProperty("padding","16px"),n(r,s(_,{get when(){return D()},get children(){var t=se(),l=t.firstChild,c=l.nextSibling;return n(l,s(P,{get name(){return k?.[b()]?.icon},size:32,get color(){return k?.[b()]?.svg}})),n(c,()=>C?.consigneeInfo?.ybestate),S(o=>J(t,k?.[b()],o)),t}})),n(a,s(_,{get when(){return e?.item?.bagnumber},get children(){return[(()=>{var t=ge(),l=t.firstChild;return n(l,s(P,{get name(){return M("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),n(t,s(_,{get when(){return!h()&&e?.item?.idairnumber},get children(){var c=ce(),o=c.firstChild;return n(o,()=>e?.item?.idairnumber),c}}),null),t})(),s(_,{get when(){return!h()},get children(){return[(()=>{var t=_e();return n(t,H),t})(),he()]}})]}}),u),n(a,s(q,{}),u),n(d,()=>e?.item?.consigneeInfo?.ybcity),n(A,()=>e?.item?.consigneeInfo?.ybestate),n(a,s(q,{}),null),n(a,s(_,{get when(){return!h()&&e?.item?.bagnumber},get children(){var t=be(),l=t.firstChild;return n(l,s(_,{get when(){return e?.item?.bagnumber},get children(){var c=oe(),o=c.firstChild;return c.$$click=()=>Q(),n(o,()=>V(e?.item?.bagnumber)),c}})),t}}),null),n(i,s(_,{get when(){return!e?.showQR&&L?.roles?.HBLUPD?.isActive},get children(){var t=me();return n(t,s(K,{get each(){return O()},children:(l,c)=>(()=>{var o=de(),N=o.firstChild,W=N.firstChild;return o.$$click=Se=>z(l.id),o.style.setProperty("padding","9px"),n(o,s(P,{get name(){return l.icon},size:24}),N),n(W,()=>h()?l.label:l.tag),o})()})),S(()=>p(t,h()?"":" bottombx flxWrp spaceAround centerBx")),t}}),null),n(i,s(_,{get when(){return e?.showQR},get children(){var t=ue(),l=t.firstChild;return t.style.setProperty("padding","16px"),S(()=>Y(l,"src",j())),t}}),null),S(t=>{var l=`client_item_box gWXAaj jlytmu ${h()?"isMobile":""}`,c=D()?"block":"none";return l!==t.e&&p(i,t.e=l),c!==t.t&&((t.t=c)!=null?r.style.setProperty("display",c):r.style.removeProperty("display")),t},{e:void 0,t:void 0}),i}})}const $e=async(e,C)=>{let g={params:e,data2update:C},b={...M(ie())}[809004];return g={...g,...b},await te(g)};X(["click"]);export{pe as default};
