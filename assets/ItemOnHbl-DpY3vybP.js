const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BgaoLnqk.js","assets/index-CQ7LNxaB.js","assets/index-NFdrrltd.css","assets/SVG-CvC3scd9.js","assets/index-Ci0zXM0r.js","assets/ShowQR-BcHFqZpn.js","assets/globalSignal-CZuww2AS.js","assets/ShowQRPrintLabel-zXGae5zP.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-NgpjRc8z.js","assets/Util-DErZaF9J.js","assets/Toast-B4VeSPfQ.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as B,_ as P,c as Z,a as C,m as G,b as U,d as s,e as X,i as n,S as _,f as x,s as J,v as D,F as K,g as L,n as Y,t as m,k as M}from"./index-CQ7LNxaB.js";import{t as k,a as ee,g as v,b as te,f as ie}from"./Util-DErZaF9J.js";import{OpenModal as re}from"./DialogHRM-CFsJT5DH.js";import{i as h,g as A}from"./globalSignal-CZuww2AS.js";import{g as ne}from"./ShowQRPrintLabel-zXGae5zP.js";import{setTasks as ae,tasks as le}from"./FindHBL-DM9lS8xz.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-NgpjRc8z.js";import"./Toast-B4VeSPfQ.js";import"./InputHr-Dn7BvEkL.js";import"./SVG-CvC3scd9.js";import"./FlexSpace-BgaoLnqk.js";var se=m('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ce=m('<div class="centerBx bottombx"><h5>'),oe=m('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),me=m('<p class="tr_bar_30 textleft fullName_consigne">'),ue=m("<div style=margin-right:4vw>"),de=m("<div class=bag_number><h5>"),ge=m("<div><div>"),_e=m("<div>"),he=m('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),be=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ve=m('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>');const H=B(()=>P(()=>import("./FlexSpace-BgaoLnqk.js"),__vite__mapDeps([0,1,2]))),E=B(()=>P(()=>import("./SVG-CvC3scd9.js"),__vite__mapDeps([3,1,2,4]))),fe=B(()=>P(()=>import("./ShowQR-BcHFqZpn.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function Me(e){const[w,g]=Z({}),[b,R]=C(""),[ye,p]=C(""),[N,F]=C(""),f=i=>i?" "+i:"",Q=()=>{let i=e?.item?.consigneeInfo;return f(i?.firstName)+f(i?.middleName)+f(i?.lastName)+f(i?.lastName2)},q=i=>{let r="";if(e?.item?.hblS){let u=e?.item?.hblS;r=`${e?.item?.idairguide}/${e?.item?.cidentity}/${u}`}let a={};a.id=v(),a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=s(fe,{val:r,get item(){return e?.item}}),re(a)},z=i=>{let r=i,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const u=new RegExp(a);return r.length===13&&u.test(r)&&(r=r.slice(3,12)),r},$=(i,r)=>{R(r),p(i),setTimeout(()=>{p("")},300)},y=i=>{F(i),setTimeout(()=>{F("")},3e3)},V=async i=>{let r={timeStamp:new Date().getTime(),latitude:A?.latitude,longitude:A?.longitude,statusId:i,userId:M?.profile?.userId,userName:M?.profile?.name};if(e?.item?.idairguide){let a=e?.item?.statusHistory||[];a.push(r);let u={idairguide:"all",ssg_track_key:e?.item?.ssg_track_key},d=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,S=e?.item?.city||e?.item?.consigneeInfo?.ybcity,I={idairnumber:e?.item?.idairnumber,estate:d,city:S,tracking:e?.currentHbl,currentStatus:i,timeStamp:new Date().getTime()};if(g(""),g(e?.item),y(v()),$("","success"),!D?.roles?.[d])$("","warning"),g({consigneeInfo:{ybestate:"Zona incorrecta"}}),y(v());else if(e?.item?.currentStatus!==r.statusId){let t={statusHistory:a,currentStatus:r.statusId};await $e(u,t),ae([...le(),I]),e?.newSear()}else $("","warning"),g({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),y(v())}else $("","error"),g({consigneeInfo:{ybestate:"Error con manifiesto"}}),y(v())};G(()=>{});const O=()=>A?.list?.filter(i=>i.id),[W,{refetch:xe}]=U(e?.item?.bagnumber,async()=>{let i=e?.item?.hbls,r=i.map(d=>`${d.hbl}/${d.quantity}/${d.weight}`).join(""),a=`${e?.item?.idairguide}/${e?.item?.cidentity}/${i.length}/${r}`;return await ne(a)});return s(_,{get when(){return e?.item?.idairguide},get children(){var i=be(),r=i.firstChild,a=r.nextSibling,u=a.firstChild,d=u.firstChild,S=d.nextSibling,I=S.nextSibling;return r.style.setProperty("padding","16px"),n(r,s(_,{get when(){return N()},get children(){var t=se(),l=t.firstChild,c=l.nextSibling;return n(l,s(E,{get name(){return k?.[b()]?.icon},size:32,get color(){return k?.[b()]?.svg}})),n(c,()=>w?.consigneeInfo?.ybestate),x(o=>J(t,k?.[b()],o)),t}})),n(a,s(_,{get when(){return e?.item?.idairnumber},get children(){return[(()=>{var t=oe(),l=t.firstChild;return n(l,s(E,{get name(){return ee("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),n(t,s(_,{get when(){return!h()&&e?.item?.idairnumber},get children(){var c=ce(),o=c.firstChild;return n(o,()=>e?.item?.idairnumber),c}}),null),t})(),s(_,{get when(){return!h()},get children(){return[(()=>{var t=me();return n(t,Q),t})(),ue()]}})]}}),u),n(a,s(H,{}),u),n(d,()=>e?.item?.consigneeInfo?.ybcity),n(I,()=>e?.item?.consigneeInfo?.ybestate),n(a,s(H,{}),null),n(a,s(_,{get when(){return!h()&&e?.item?.bagnumber},get children(){var t=ge(),l=t.firstChild;return n(l,s(_,{get when(){return e?.item?.bagnumber},get children(){var c=de(),o=c.firstChild;return c.$$click=()=>q(),n(o,()=>z(e?.item?.bagnumber)),c}})),t}}),null),n(i,s(_,{get when(){return!e?.showQR&&D?.roles?.HBLUPD?.isActive},get children(){var t=_e();return n(t,s(K,{get each(){return O()},children:(l,c)=>(()=>{var o=ve(),T=o.firstChild,j=T.firstChild;return o.$$click=we=>V(l.id),o.style.setProperty("padding","9px"),n(o,s(E,{get name(){return l.icon},size:24}),T),n(j,()=>h()?l.label:l.tag),o})()})),x(()=>L(t,h()?"":" bottombx flxWrp spaceAround centerBx")),t}}),null),n(i,s(_,{get when(){return e?.showQR},get children(){var t=he(),l=t.firstChild;return t.style.setProperty("padding","16px"),x(()=>Y(l,"src",W())),t}}),null),x(t=>{var l=`client_item_box gWXAaj jlytmu ${h()?"isMobile":""}`,c=N()?"block":"none";return l!==t.e&&L(i,t.e=l),c!==t.t&&((t.t=c)!=null?r.style.setProperty("display",c):r.style.removeProperty("display")),t},{e:void 0,t:void 0}),i}})}const $e=async(e,w)=>{let g={params:e,data2update:w},b=te(809004);return g={...g,...b},await ie(g)};X(["click"]);export{Me as default};
