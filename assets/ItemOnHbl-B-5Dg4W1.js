const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-rPOweVzt.js","assets/index-DH8C3qs7.js","assets/index-DEEWbFNK.css","assets/SVG-CAmOGkx7.js","assets/Util-CKCUAuLU.js","assets/ShowQR-DK2n1eIP.js","assets/ShowQRPrintLabel-xvvlWjOO.js","assets/PDFButton-DzKPI8bv.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-xY8_R9eo.js","assets/InitPrintServices-Cu6eu-iZ.js","assets/Toast-BlUV_0we.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as k,_ as p,c as Z,a as C,b as G,j as U,d as a,i as n,S as u,e as x,q as X,f as h,y as D,F as Y,g as L,s as J,h as K,t as m,Q as A,n as M}from"./index-DH8C3qs7.js";import{t as B,d as ee,b as v,c as te,f as re}from"./Util-CKCUAuLU.js";import{OpenModal as ie}from"./DialogHRM-CvD8NJGp.js";import{g as ne}from"./ShowQRPrintLabel-xvvlWjOO.js";import{setTasks as ae,tasks as se}from"./FindHBL-B-8xNaJ0.js";import"./ItemHbl2Delivery-D5LfQjdj.js";import"./PDFButton-DzKPI8bv.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-xY8_R9eo.js";import"./InitPrintServices-Cu6eu-iZ.js";import"./Toast-BlUV_0we.js";import"./InputHr-0MQZ44Nz.js";import"./SVG-CAmOGkx7.js";import"./FlexSpace-rPOweVzt.js";/* empty css                             */import"./handelImagesServices-CSnRKUqk.js";import"./browser-image-compression-BVJ4p9S0.js";import"./ItemOnReports-DtPaaLi3.js";import"./ContainerElasticView-CJ_FQ95G.js";import"./DashInventory-D_QxV6Cn.js";import"./App.module-CbHnVtRQ.js";var le=m('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ce=m('<div class="centerBx bottombx"><h5>'),oe=m('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),me=m('<p class="tr_bar_30 textleft fullName_consigne">'),ue=m("<div style=margin-right:4vw>"),de=m("<div class=bag_number><h5>"),ge=m("<div><div>"),_e=m("<div>"),he=m('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),be=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ve=m('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>');const Q=k(()=>p(()=>import("./FlexSpace-rPOweVzt.js"),__vite__mapDeps([0,1,2]))),E=k(()=>p(()=>import("./SVG-CAmOGkx7.js"),__vite__mapDeps([3,1,2,4]))),fe=k(()=>p(()=>import("./ShowQR-DK2n1eIP.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function Oe(e){const[S,d]=Z({}),[b,P]=C(""),[$e,R]=C(""),[F,N]=C(""),f=r=>r?" "+r:"",H=()=>{let r=e?.item?.consigneeInfo;return f(r?.firstName)+f(r?.middleName)+f(r?.lastName)+f(r?.lastName2)},q=r=>{let i="";if(e?.item?.hblS){let g=e?.item?.hblS;i=`${e?.item?.idairguide}/${e?.item?.cidentity}/${g}`}let l={};l.id=v(),l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=a(fe,{val:i,get item(){return e?.item}}),ie(l)},z=r=>{let i=r,l="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const g=new RegExp(l);return i.length===13&&g.test(i)&&(i=i.slice(3,12)),i},y=(r,i)=>{P(i),R(r),setTimeout(()=>{R("")},300)},$=r=>{N(r),setTimeout(()=>{N("")},3e3)},V=async r=>{let i={timeStamp:new Date().getTime(),latitude:A?.latitude,longitude:A?.longitude,statusId:r,userId:M?.profile?.userId,userName:M?.profile?.name};if(e?.item?.idairguide){let l=e?.item?.statusHistory||[];l.push(i);let g={idairguide:e?.item?.guia,ssg_track_key:e?.item?.ssg_track_key},_=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,w=e?.item?.city||e?.item?.consigneeInfo?.ybcity,I={idairnumber:e?.item?.idairnumber,estate:_,city:w,tracking:e?.currentHbl,currentStatus:r,timeStamp:new Date().getTime()};if(d(""),d(e?.item),$(v()),y("","success"),!D?.roles?.[_])y("","warning"),d({consigneeInfo:{ybestate:"Zona incorrecta"}}),$(v());else if(e?.item?.currentStatus!==i.statusId){let t={statusHistory:l,currentStatus:i.statusId};typeof e?.item?.guia=="number"&&(t.guia=e?.item?.guia+""),await ye(g,t),ae([...se(),I]),e?.newSear()}else y("","warning"),d({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),$(v())}else y("","error"),d({consigneeInfo:{ybestate:"Error con manifiesto"}}),$(v())};G(()=>{});const O=()=>A?.list?.filter(r=>r.id),[W,{refetch:xe}]=U(e?.item?.bagnumber,async()=>{let r=e?.item?.hbls?.[0]?.hbl;return await ne(r)});return a(u,{get when(){return e?.item?.idairguide},get children(){var r=be(),i=r.firstChild,l=i.nextSibling,g=l.firstChild,_=g.firstChild,w=_.nextSibling,I=w.nextSibling;return i.style.setProperty("padding","16px"),n(i,a(u,{get when(){return F()},get children(){var t=le(),s=t.firstChild,c=s.nextSibling;return n(s,a(E,{get name(){return B?.[b()]?.icon},size:32,get color(){return B?.[b()]?.svg}})),n(c,()=>S?.consigneeInfo?.ybestate),x(o=>X(t,B?.[b()],o)),t}})),n(l,a(u,{get when(){return e?.item?.idairnumber},get children(){return[(()=>{var t=oe(),s=t.firstChild;return n(s,a(E,{get name(){return ee("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),n(t,a(u,{get when(){return!h()&&e?.item?.idairnumber},get children(){var c=ce(),o=c.firstChild;return n(o,()=>e?.item?.idairnumber),c}}),null),t})(),a(u,{get when(){return!h()},get children(){return[(()=>{var t=me();return n(t,H),t})(),ue()]}})]}}),g),n(l,a(Q,{}),g),n(_,()=>e?.item?.consigneeInfo?.ybcity),n(I,()=>e?.item?.consigneeInfo?.ybestate),n(l,a(Q,{}),null),n(l,a(u,{get when(){return!h()&&e?.item?.bagnumber},get children(){var t=ge(),s=t.firstChild;return n(s,a(u,{get when(){return e?.item?.bagnumber},get children(){var c=de(),o=c.firstChild;return c.$$click=()=>q(),n(o,()=>z(e?.item?.bagnumber)),c}})),t}}),null),n(r,a(u,{get when(){return e?.item?.currentStatus!=="YABA_99"},get children(){return[a(u,{get when(){return!e?.showQR&&D?.roles?.HBLUPD?.isActive},get children(){var t=_e();return n(t,a(Y,{get each(){return O()},children:(s,c)=>(()=>{var o=ve(),T=o.firstChild,j=T.firstChild;return o.$$click=Se=>V(s.id),o.style.setProperty("padding","9px"),n(o,a(E,{get name(){return s.icon},size:24}),T),n(j,()=>h()?s.label:s.tag),o})()})),x(()=>L(t,h()?"":" bottombx flxWrp spaceAround centerBx")),t}}),a(u,{get when(){return e?.showQR},get children(){var t=he(),s=t.firstChild;return t.style.setProperty("padding","16px"),x(()=>J(s,"src",W())),t}})]}}),null),x(t=>{var s=`client_item_box gWXAaj jlytmu ${h()?"isMobile":""}`,c=F()?"block":"none";return s!==t.e&&L(r,t.e=s),c!==t.t&&((t.t=c)!=null?i.style.setProperty("display",c):i.style.removeProperty("display")),t},{e:void 0,t:void 0}),r}})}const ye=async(e,S)=>{let d={params:e,data2update:S},b=te(809004);return d={...d,...b},await re(d)};K(["click"]);export{Oe as default};
