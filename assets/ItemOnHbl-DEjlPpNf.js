const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-5z897oT0.js","assets/index-DcLwopj0.js","assets/index-DaYrm968.css","assets/SVG-DNeEStyL.js","assets/Util-B8-DWw-6.js","assets/ShowQR-C70kd-jQ.js","assets/ShowQRPrintLabel-BQmrkfiY.js","assets/fontkit.es-BHcUmD3g.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-BhTuseMZ.js","assets/Toast-bOg8nd2i.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as E,_ as p,c as Z,a as C,d as G,p as U,e as a,i as n,S as u,f as x,s as X,j as h,z as D,F as Y,m as L,k as J,h as K,t as m,T as A,g as M}from"./index-DcLwopj0.js";import{t as k,e as ee,a as v,g as te,f as re}from"./Util-B8-DWw-6.js";import{OpenModal as ie}from"./DialogHRM-nYHLaF4A.js";import{g as ne}from"./ShowQRPrintLabel-BQmrkfiY.js";import{setTasks as ae,tasks as se}from"./FindHBL-C4aecXbi.js";import"./ItemHbl2Delivery-CV1ZpH_0.js";import"./fontkit.es-BHcUmD3g.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-BhTuseMZ.js";import"./Toast-bOg8nd2i.js";import"./InputHr-BYhNS5vR.js";import"./SVG-DNeEStyL.js";import"./FlexSpace-5z897oT0.js";/* empty css                             */import"./handelImagesServices-BJ-Go0lZ.js";import"./browser-image-compression-BVJ4p9S0.js";import"./ItemOnReports-WyMmycZF.js";import"./ContainerElasticView-CJFRVMOn.js";import"./DashInventory-CKbqOJ0w.js";import"./App.module-CbHnVtRQ.js";var le=m('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ce=m('<div class="centerBx bottombx"><h5>'),oe=m('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),me=m('<p class="tr_bar_30 textleft fullName_consigne">'),ue=m("<div style=margin-right:4vw>"),de=m("<div class=bag_number><h5>"),ge=m("<div><div>"),_e=m("<div>"),he=m('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),be=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ve=m('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>');const H=E(()=>p(()=>import("./FlexSpace-5z897oT0.js"),__vite__mapDeps([0,1,2]))),B=E(()=>p(()=>import("./SVG-DNeEStyL.js"),__vite__mapDeps([3,1,2,4]))),fe=E(()=>p(()=>import("./ShowQR-C70kd-jQ.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));function Ve(e){const[S,d]=Z({}),[b,P]=C(""),[$e,R]=C(""),[T,F]=C(""),f=r=>r?" "+r:"",Q=()=>{let r=e?.item?.consigneeInfo;return f(r?.firstName)+f(r?.middleName)+f(r?.lastName)+f(r?.lastName2)},z=r=>{let i="";if(e?.item?.hblS){let g=e?.item?.hblS;i=`${e?.item?.idairguide}/${e?.item?.cidentity}/${g}`}let l={};l.id=v(),l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=a(fe,{val:i,get item(){return e?.item}}),ie(l)},q=r=>{let i=r,l="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const g=new RegExp(l);return i.length===13&&g.test(i)&&(i=i.slice(3,12)),i},y=(r,i)=>{P(i),R(r),setTimeout(()=>{R("")},300)},$=r=>{F(r),setTimeout(()=>{F("")},3e3)},V=async r=>{let i={timeStamp:new Date().getTime(),latitude:A?.latitude,longitude:A?.longitude,statusId:r,userId:M?.profile?.userId,userName:M?.profile?.name};if(e?.item?.idairguide){let l=e?.item?.statusHistory||[];l.push(i);let g={idairguide:e?.item?.guia,ssg_track_key:e?.item?.ssg_track_key},_=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,w=e?.item?.city||e?.item?.consigneeInfo?.ybcity,I={idairnumber:e?.item?.idairnumber,estate:_,city:w,tracking:e?.currentHbl,currentStatus:r,timeStamp:new Date().getTime()};if(d(""),d(e?.item),$(v()),y("","success"),!D?.roles?.[_])y("","warning"),d({consigneeInfo:{ybestate:"Zona incorrecta"}}),$(v());else if(e?.item?.currentStatus!==i.statusId){let t={statusHistory:l,currentStatus:i.statusId};typeof e?.item?.guia=="number"&&(t.guia=e?.item?.guia+""),await ye(g,t),ae([...se(),I]),e?.newSear()}else y("","warning"),d({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),$(v())}else y("","error"),d({consigneeInfo:{ybestate:"Error con manifiesto"}}),$(v())};G(()=>{});const O=()=>A?.list?.filter(r=>r.id),[W,{refetch:xe}]=U(e?.item?.bagnumber,async()=>{let r=e?.item?.hbls?.[0]?.hbl;return await ne(r)});return a(u,{get when(){return e?.item?.idairguide},get children(){var r=be(),i=r.firstChild,l=i.nextSibling,g=l.firstChild,_=g.firstChild,w=_.nextSibling,I=w.nextSibling;return i.style.setProperty("padding","16px"),n(i,a(u,{get when(){return T()},get children(){var t=le(),s=t.firstChild,c=s.nextSibling;return n(s,a(B,{get name(){return k?.[b()]?.icon},size:32,get color(){return k?.[b()]?.svg}})),n(c,()=>S?.consigneeInfo?.ybestate),x(o=>X(t,k?.[b()],o)),t}})),n(l,a(u,{get when(){return e?.item?.idairnumber},get children(){return[(()=>{var t=oe(),s=t.firstChild;return n(s,a(B,{get name(){return ee("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),n(t,a(u,{get when(){return!h()&&e?.item?.idairnumber},get children(){var c=ce(),o=c.firstChild;return n(o,()=>e?.item?.idairnumber),c}}),null),t})(),a(u,{get when(){return!h()},get children(){return[(()=>{var t=me();return n(t,Q),t})(),ue()]}})]}}),g),n(l,a(H,{}),g),n(_,()=>e?.item?.consigneeInfo?.ybcity),n(I,()=>e?.item?.consigneeInfo?.ybestate),n(l,a(H,{}),null),n(l,a(u,{get when(){return!h()&&e?.item?.bagnumber},get children(){var t=ge(),s=t.firstChild;return n(s,a(u,{get when(){return e?.item?.bagnumber},get children(){var c=de(),o=c.firstChild;return c.$$click=()=>z(),n(o,()=>q(e?.item?.bagnumber)),c}})),t}}),null),n(r,a(u,{get when(){return e?.item?.currentStatus!=="YABA_99"},get children(){return[a(u,{get when(){return!e?.showQR&&D?.roles?.HBLUPD?.isActive},get children(){var t=_e();return n(t,a(Y,{get each(){return O()},children:(s,c)=>(()=>{var o=ve(),N=o.firstChild,j=N.firstChild;return o.$$click=Se=>V(s.id),o.style.setProperty("padding","9px"),n(o,a(B,{get name(){return s.icon},size:24}),N),n(j,()=>h()?s.label:s.tag),o})()})),x(()=>L(t,h()?"":" bottombx flxWrp spaceAround centerBx")),t}}),a(u,{get when(){return e?.showQR},get children(){var t=he(),s=t.firstChild;return t.style.setProperty("padding","16px"),x(()=>J(s,"src",W())),t}})]}}),null),x(t=>{var s=`client_item_box gWXAaj jlytmu ${h()?"isMobile":""}`,c=T()?"block":"none";return s!==t.e&&L(r,t.e=s),c!==t.t&&((t.t=c)!=null?i.style.setProperty("display",c):i.style.removeProperty("display")),t},{e:void 0,t:void 0}),r}})}const ye=async(e,S)=>{let d={params:e,data2update:S},b=te(809004);return d={...d,...b},await re(d)};K(["click"]);export{Ve as default};
