const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BrgYvb58.js","assets/index-DFgipc_K.js","assets/index-BRlA1Q7g.css","assets/SVG-Ctm1jOC0.js","assets/Util-CVANcjoa.js","assets/ShowQR-B8MX7EPG.js","assets/ShowQRPrintLabel-CFEHXSji.js","assets/fontkit.es-C1JtbSzE.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-B2CiK_UV.js","assets/Toast-CEqGnKWE.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as B,_ as E,c as X,a as C,d as Z,p as G,e as a,i as n,S as u,f as x,s as U,j as h,A as D,F as Y,m as L,k as J,h as K,t as m,X as A,g as M}from"./index-DFgipc_K.js";import{t as k,e as ee,a as v,g as te,f as re}from"./Util-CVANcjoa.js";import{OpenModal as ie}from"./DialogHRM-BmvMg8h7.js";import{g as ne}from"./ShowQRPrintLabel-CFEHXSji.js";import{setTasks as ae,tasks as se}from"./FindHBL-B6yLaClv.js";import"./ItemHbl2Delivery-ByQn_0Jg.js";import"./fontkit.es-C1JtbSzE.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-B2CiK_UV.js";import"./Toast-CEqGnKWE.js";import"./InputHr-CxOREz9w.js";import"./SVG-Ctm1jOC0.js";import"./FlexSpace-BrgYvb58.js";/* empty css                             */import"./handelImagesServices-BlCDdloE.js";import"./browser-image-compression-BVJ4p9S0.js";import"./ItemOnReports-CnP8BM0F.js";import"./ContainerElasticView-C7cnSRn9.js";import"./DashInventory-YtRAjURw.js";import"./App.module-CbHnVtRQ.js";import"./ScanningServices-DXd_CA0f.js";var le=m('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),oe=m('<div class="centerBx bottombx"><h5>'),ce=m('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),me=m('<p class="tr_bar_30 textleft fullName_consigne">'),ue=m("<div style=margin-right:4vw>"),de=m("<div class=bag_number><h5>"),ge=m("<div><div>"),_e=m("<div>"),he=m('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),be=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ve=m('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>');const H=B(()=>E(()=>import("./FlexSpace-BrgYvb58.js"),__vite__mapDeps([0,1,2]))),p=B(()=>E(()=>import("./SVG-Ctm1jOC0.js"),__vite__mapDeps([3,1,2,4]))),fe=B(()=>E(()=>import("./ShowQR-B8MX7EPG.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));function Oe(e){const[S,d]=X({}),[b,P]=C(""),[$e,R]=C(""),[F,N]=C(""),f=r=>r?" "+r:"",Q=()=>{let r=e?.item?.consigneeInfo;return f(r?.firstName)+f(r?.middleName)+f(r?.lastName)+f(r?.lastName2)},q=r=>{let i="";if(e?.item?.hblS){let g=e?.item?.hblS;i=`${e?.item?.idairguide}/${e?.item?.cidentity}/${g}`}let l={};l.id=v(),l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=a(fe,{val:i,get item(){return e?.item}}),ie(l)},z=r=>{let i=r,l="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const g=new RegExp(l);return i.length===13&&g.test(i)&&(i=i.slice(3,12)),i},y=(r,i)=>{P(i),R(r),setTimeout(()=>{R("")},300)},$=r=>{N(r),setTimeout(()=>{N("")},3e3)},V=async r=>{let i={timeStamp:new Date().getTime(),latitude:A?.latitude,longitude:A?.longitude,statusId:r,userId:M?.profile?.userId,userName:M?.profile?.name};if(e?.item?.idairguide){let l=e?.item?.statusHistory||[];l.push(i);let g={idairguide:e?.item?.guia,ssg_track_key:e?.item?.ssg_track_key},_=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,w=e?.item?.city||e?.item?.consigneeInfo?.ybcity,I={idairnumber:e?.item?.idairnumber,estate:_,city:w,tracking:e?.currentHbl,currentStatus:r,timeStamp:new Date().getTime()};if(d(""),d(e?.item),$(v()),y("","success"),!D?.roles?.[_])y("","warning"),d({consigneeInfo:{ybestate:"Zona incorrecta"}}),$(v());else if(e?.item?.currentStatus!==i.statusId){let t={statusHistory:l,currentStatus:i.statusId};typeof e?.item?.guia=="number"&&(t.guia=e?.item?.guia+""),await ye(g,t),ae([...se(),I]),e?.newSear()}else y("","warning"),d({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),$(v())}else y("","error"),d({consigneeInfo:{ybestate:"Error con manifiesto"}}),$(v())};Z(()=>{});const O=()=>A?.list?.filter(r=>r.id),[W,{refetch:xe}]=G(e?.item?.bagnumber,async()=>{let r=e?.item?.hbls?.[0]?.hbl;return await ne(r)});return a(u,{get when(){return e?.item?.idairguide},get children(){var r=be(),i=r.firstChild,l=i.nextSibling,g=l.firstChild,_=g.firstChild,w=_.nextSibling,I=w.nextSibling;return i.style.setProperty("padding","16px"),n(i,a(u,{get when(){return F()},get children(){var t=le(),s=t.firstChild,o=s.nextSibling;return n(s,a(p,{get name(){return k?.[b()]?.icon},size:32,get color(){return k?.[b()]?.svg}})),n(o,()=>S?.consigneeInfo?.ybestate),x(c=>U(t,k?.[b()],c)),t}})),n(l,a(u,{get when(){return e?.item?.idairnumber},get children(){return[(()=>{var t=ce(),s=t.firstChild;return n(s,a(p,{get name(){return ee("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),n(t,a(u,{get when(){return!h()&&e?.item?.idairnumber},get children(){var o=oe(),c=o.firstChild;return n(c,()=>e?.item?.idairnumber),o}}),null),t})(),a(u,{get when(){return!h()},get children(){return[(()=>{var t=me();return n(t,Q),t})(),ue()]}})]}}),g),n(l,a(H,{}),g),n(_,()=>e?.item?.consigneeInfo?.ybcity),n(I,()=>e?.item?.consigneeInfo?.ybestate),n(l,a(H,{}),null),n(l,a(u,{get when(){return!h()&&e?.item?.bagnumber},get children(){var t=ge(),s=t.firstChild;return n(s,a(u,{get when(){return e?.item?.bagnumber},get children(){var o=de(),c=o.firstChild;return o.$$click=()=>q(),n(c,()=>z(e?.item?.bagnumber)),o}})),t}}),null),n(r,a(u,{get when(){return e?.item?.currentStatus!=="YABA_99"},get children(){return[a(u,{get when(){return!e?.showQR&&D?.roles?.HBLUPD?.isActive},get children(){var t=_e();return n(t,a(Y,{get each(){return O()},children:(s,o)=>(()=>{var c=ve(),T=c.firstChild,j=T.firstChild;return c.$$click=Se=>V(s.id),c.style.setProperty("padding","9px"),n(c,a(p,{get name(){return s.icon},size:24}),T),n(j,()=>h()?s.label:s.tag),c})()})),x(()=>L(t,h()?"":" bottombx flxWrp spaceAround centerBx")),t}}),a(u,{get when(){return e?.showQR},get children(){var t=he(),s=t.firstChild;return t.style.setProperty("padding","16px"),x(()=>J(s,"src",W())),t}})]}}),null),x(t=>{var s=`client_item_box gWXAaj jlytmu ${h()?"isMobile":""}`,o=F()?"block":"none";return s!==t.e&&L(r,t.e=s),o!==t.t&&((t.t=o)!=null?i.style.setProperty("display",o):i.style.removeProperty("display")),t},{e:void 0,t:void 0}),r}})}const ye=async(e,S)=>{let d={params:e,data2update:S},b=te(809004);return d={...d,...b},await re(d)};K(["click"]);export{Oe as default};
