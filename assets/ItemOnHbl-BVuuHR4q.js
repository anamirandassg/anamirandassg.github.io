const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CA-L_smQ.js","assets/index-D-kpS7Kn.js","assets/index-mmPwS5V-.css","assets/SVG-2e3bBWTc.js","assets/ShowQR-HfnBCdt9.js","assets/ShowQRPrintLabel-Dnsvs8J0.js","assets/fontkit.es-D4YXGtbp.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-BLc7a6Ab.js","assets/Toast-BbPr4j_M.js","assets/Toast-SmEZ1JuI.css","assets/DropDwnSearch-ofZtP6YY.js","assets/debounces-BuYlV6Rz.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as N,_ as M,a as T,c as ce,q as de,b as ue,h as $,i as t,d as n,f,e as oe,t as _,a0 as C,s as X,S as o,v as Z,L as z,F as G,D as Y,g as J,j as I,C as H,n as me,o as ge}from"./index-D-kpS7Kn.js";import{OpenModal as _e}from"./DialogHRM-CUsKNcac.js";import{g as he}from"./ShowQRPrintLabel-Dnsvs8J0.js";import{setTasks as ve,tasks as be}from"./FindHBL-Bqitqu8s.js";import"./fontkit.es-D4YXGtbp.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-BLc7a6Ab.js";import"./Toast-BbPr4j_M.js";import"./InputHr-Bon-Ouif.js";import"./SVG-2e3bBWTc.js";import"./Envios-C35P9EsY.js";import"./debounces-BuYlV6Rz.js";import"./FlexSpace-CA-L_smQ.js";var K=_('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ee=_('<div class="centerBx bottombx"><h5>'),te=_("<div class=bag_number><h5>"),ie=_("<div class=bottombx><h5>"),re=_("<div>"),ne=_('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),$e=_('<div class="client_item_box WXAaj2 jlytmu isMobile"><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=" centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"><div></div></div><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4></h4></div><div class=bottombx bottombx><p class=" textleft fullName_consigne"></p></div><div class=separator>'),le=_('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>'),fe=_('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),xe=_('<p class="tr_bar_30 textleft fullName_consigne">'),ye=_("<div style=margin-right:4vw>"),we=_("<div><div>"),Se=_('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>');const P=N(()=>M(()=>import("./FlexSpace-CA-L_smQ.js"),__vite__mapDeps([0,1,2]))),k=N(()=>M(()=>import("./SVG-2e3bBWTc.js"),__vite__mapDeps([3,1,2]))),Ce=N(()=>M(()=>import("./ShowQR-HfnBCdt9.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10])));N(()=>M(()=>import("./DropDwnSearch-ofZtP6YY.js"),__vite__mapDeps([11,1,2,12,3,13])));function Ve(e){T("");const[A,x]=ce({}),[v,ae]=T(""),[Ie,Q]=T(""),[B,q]=T(""),E=i=>i?" "+i:"",V=()=>{let i=e?.item?.consigneeInfo;return E(i?.firstName)+E(i?.middleName)+E(i?.lastName)+E(i?.lastName2)},R=i=>{let l="";if(i)l=i;else if(e?.item?.hblS){let h=e?.item?.hblS;l=`${e?.item?.idairguide}/${e?.item?.cidentity}/${h}`}let s={};s.id=I(),s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=n(Ce,{val:l,get item(){return e?.item}}),_e(s)},y=i=>{let l=i,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const h=new RegExp(s);return l.length===13&&h.test(l)&&(l=l.slice(3,12)),l},D=(i,l)=>{ae(l),Q(i),setTimeout(()=>{Q("")},300)},F=i=>{q(i),setTimeout(()=>{q("")},3e3)},W=async i=>{let l={timeStamp:new Date().getTime(),latitude:H?.latitude,longitude:H?.longitude,statusId:i,userId:me?.profile?.userId};if(e?.item?.idairguide){let s=e?.item?.statusHistory||[];s.push(l);let h={idairguide:e?.item?.idairguide,ssg_track_key:e?.item?.ssg_track_key},g=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,w=e?.item?.city||e?.item?.consigneeInfo?.ybcity,S={idairnumber:e?.item?.idairnumber,estate:g,city:w,tracking:e?.currentHbl,currentStatus:i,timeStamp:new Date().getTime()};if(x(""),x(e?.item),F(I()),D("","success"),!z?.roles?.[g])D("","warning"),x({consigneeInfo:{ybestate:"Zona incorrecta"}}),F(I());else if(e?.item?.currentStatus!==l.statusId){let r={statusHistory:s,currentStatus:l.statusId};await ke(h,r),ve([...be(),S]),e?.newSear()}else D("","warning"),x({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),F(I())}else D("","error"),x({consigneeInfo:{ybestate:"Error con manifiesto"}}),F(I())};de(()=>{});const j=()=>H?.list?.filter(i=>i.id),[O,{refetch:Pe}]=ue(e?.item?.tracking,async()=>{let i=y(e?.item?.tracking);return await he(i)});return $()?(()=>{var i=$e(),l=i.firstChild,s=l.nextSibling,h=s.firstChild,g=s.nextSibling,w=g.firstChild,S=g.nextSibling,r=S.firstChild,d=r.nextSibling,c=d.nextSibling,u=S.nextSibling,L=u.firstChild;return u.nextSibling,l.style.setProperty("padding","16px"),t(l,n(o,{get when(){return B()},get children(){var a=K(),m=a.firstChild,p=m.nextSibling;return t(m,n(k,{get name(){return C?.[v()]?.icon},size:32,get color(){return C?.[v()]?.svg}})),t(p,()=>A?.consigneeInfo?.ybestate),f(b=>X(a,C?.[v()],b)),a}})),t(h,n(k,{get name(){return Z?.[e?.item?.currentStatus]},size:32})),t(s,n(o,{get when(){return e?.item?.idairnumber},get children(){var a=ee(),m=a.firstChild;return t(m,()=>e?.item?.idairnumber),a}}),null),t(g,n(P,{}),w),t(w,n(o,{get when(){return e?.item?.bagnumber},get children(){var a=te(),m=a.firstChild;return a.$$click=()=>R(null),t(m,()=>e?.item?.bagnumber),a}})),t(g,n(P,{}),null),t(g,n(o,{get when(){return e?.item?.tracking},get children(){var a=ie(),m=a.firstChild;return a.$$click=()=>R(y(e?.item?.tracking)),t(m,()=>y(e?.item?.tracking)),a}}),null),t(g,n(P,{}),null),t(r,()=>e?.item?.consigneeInfo?.ybcity),t(c,()=>e?.item?.consigneeInfo?.ybestate),t(L,V),t(i,n(o,{get when(){return!e?.showQR&&z?.roles?.HBLUPD?.isActive},get children(){var a=re();return t(a,n(G,{get each(){return j()},children:(m,p)=>(()=>{var b=le(),U=b.firstChild,se=U.firstChild;return b.$$click=Ae=>W(m.id),b.style.setProperty("padding","9px"),t(b,n(k,{get name(){return m.icon},size:24}),U),t(se,()=>m.label),b})()})),a}}),null),t(i,n(o,{get when(){return e?.showQR},get children(){var a=ne(),m=a.firstChild;return a.style.setProperty("padding","16px"),f(()=>Y(m,"src",O())),a}}),null),f(a=>(a=B()?"block":"none")!=null?l.style.setProperty("display",a):l.style.removeProperty("display")),i})():n(o,{get when(){return e?.item?.tracking},get children(){var i=Se(),l=i.firstChild,s=l.nextSibling,h=s.firstChild,g=h.firstChild,w=g.nextSibling,S=w.nextSibling;return l.style.setProperty("padding","16px"),t(l,n(o,{get when(){return B()},get children(){var r=K(),d=r.firstChild,c=d.nextSibling;return t(d,n(k,{get name(){return C?.[v()]?.icon},size:32,get color(){return C?.[v()]?.svg}})),t(c,()=>A?.consigneeInfo?.ybestate),f(u=>X(r,C?.[v()],u)),r}})),t(s,n(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var r=fe(),d=r.firstChild;return t(d,n(k,{get name(){return Z?.[e?.item?.currentStatus]},size:32})),t(r,n(o,{get when(){return!$()&&e?.item?.idairnumber},get children(){var c=ee(),u=c.firstChild;return t(u,()=>e?.item?.idairnumber),c}}),null),r})(),n(o,{get when(){return!$()},get children(){return[(()=>{var r=xe();return t(r,V),r})(),ye()]}})]}}),h),t(s,n(P,{}),h),t(g,()=>e?.item?.consigneeInfo?.ybcity),t(S,()=>e?.item?.consigneeInfo?.ybestate),t(s,n(P,{}),null),t(s,n(o,{get when(){return!$()&&e?.item?.tracking},get children(){var r=we(),d=r.firstChild;return t(d,n(o,{get when(){return e?.item?.bagnumber},get children(){var c=te(),u=c.firstChild;return c.$$click=()=>R(null),t(u,()=>y(e?.item?.bagnumber)),c}})),t(r,n(o,{get when(){return e?.item?.tracking},get children(){var c=ie(),u=c.firstChild;return c.$$click=()=>R(y(e?.item?.tracking)),t(u,()=>y(e?.item?.tracking)),c}}),null),r}}),null),t(i,n(o,{get when(){return!e?.showQR&&z?.roles?.HBLUPD?.isActive},get children(){var r=re();return t(r,n(G,{get each(){return j()},children:(d,c)=>(()=>{var u=le(),L=u.firstChild,a=L.firstChild;return u.$$click=m=>W(d.id),u.style.setProperty("padding","9px"),t(u,n(k,{get name(){return d.icon},size:24}),L),t(a,()=>$()?d.label:d.tag),u})()})),f(()=>J(r,$()?"":" bottombx flxWrp spaceAround centerBx")),r}}),null),t(i,n(o,{get when(){return e?.showQR},get children(){var r=ne(),d=r.firstChild;return r.style.setProperty("padding","16px"),f(()=>Y(d,"src",O())),r}}),null),f(r=>{var d=`client_item_box gWXAaj jlytmu ${$()?"isMobile":""}`,c=B()?"block":"none";return d!==r.e&&J(i,r.e=d),c!==r.t&&((r.t=c)!=null?l.style.setProperty("display",c):l.style.removeProperty("display")),r},{e:void 0,t:void 0}),i}})}const ke=async(e,A)=>await ge({params:e,query:"updateLogisticYabaExpress",data2update:A});oe(["click"]);export{Ve as default};