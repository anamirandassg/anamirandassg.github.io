const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CnNoKLys.js","assets/index-Bqe7kUWr.js","assets/index-DVaqc53U.css","assets/ShowQR-D9njmkBy.js","assets/ShowQRPrintLabel-Ds7OjTfL.js","assets/DropDwnSearch-CAP35O_l.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as N,_ as M,a as T,c as ce,s as de,b as ue,g as $,i as t,d as n,V as k,e as f,w as Z,S as o,y as G,R as z,F as J,J as Y,f as K,h as oe,t as _,j as I,O as ge,I as H,n as me,p as _e}from"./index-Bqe7kUWr.js";import{g as he}from"./ShowQRPrintLabel-Ds7OjTfL.js";import{setTasks as ve,tasks as be}from"./FindHBL-2Yy_dPj5.js";import"./InputHr-i0js8DVw.js";import"./Envios-C4wPtoXc.js";import"./FlexSpace-CnNoKLys.js";var p=_('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ee=_('<div class="centerBx bottombx"><h5>'),te=_("<div class=bag_number><h5>"),ie=_("<div class=bottombx><h5>"),re=_("<div>"),ne=_('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),$e=_('<div class="client_item_box WXAaj2 jlytmu isMobile"><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=" centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"><div></div></div><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4></h4></div><div class=bottombx bottombx><p class=" textleft fullName_consigne"></p></div><div class=separator>'),le=_('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>'),fe=_('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),xe=_('<p class="tr_bar_30 textleft fullName_consigne">'),ye=_("<div style=margin-right:4vw>"),we=_("<div><div>"),Se=_('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>');const P=N(()=>M(()=>import("./FlexSpace-CnNoKLys.js"),__vite__mapDeps([0,1,2]))),C=N(()=>M(()=>import("./index-Bqe7kUWr.js").then(e=>e.a9),__vite__mapDeps([1,2]))),ke=N(()=>M(()=>import("./ShowQR-D9njmkBy.js"),__vite__mapDeps([3,1,2,4])));N(()=>M(()=>import("./DropDwnSearch-CAP35O_l.js"),__vite__mapDeps([5,1,2,6])));function Te(e){T("");const[A,x]=ce({}),[v,ae]=T(""),[Ie,Q]=T(""),[B,V]=T(""),E=i=>i?" "+i:"",O=()=>{let i=e?.item?.consigneeInfo;return E(i?.firstName)+E(i?.middleName)+E(i?.lastName)+E(i?.lastName2)},R=i=>{let l="";if(i)l=i;else if(e?.item?.hblS){let h=e?.item?.hblS;l=`${e?.item?.idairguide}/${e?.item?.cidentity}/${h}`}let s={};s.id=I(),s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=n(ke,{val:l,get item(){return e?.item}}),ge(s)},y=i=>{let l=i,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const h=new RegExp(s);return l.length===13&&h.test(l)&&(l=l.slice(3,12)),l},F=(i,l)=>{ae(l),Q(i),setTimeout(()=>{Q("")},300)},D=i=>{V(i),setTimeout(()=>{V("")},3e3)},W=async i=>{let l={timeStamp:new Date().getTime(),latitude:H?.latitude,longitude:H?.longitude,statusId:i,userId:me?.profile?.userId};if(e?.item?.idairguide){let s=e?.item?.statusHistory||[];s.push(l);let h={idairguide:e?.item?.idairguide,ssg_track_key:e?.item?.ssg_track_key},m=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,w=e?.item?.city||e?.item?.consigneeInfo?.ybcity,S={idairnumber:e?.item?.idairnumber,estate:m,city:w,tracking:e?.currentHbl,currentStatus:i,timeStamp:new Date().getTime()};if(x(""),x(e?.item),D(I()),F("","success"),!z?.roles?.[m])F("","warning"),x({consigneeInfo:{ybestate:"Zona incorrecta"}}),D(I());else if(e?.item?.currentStatus!==l.statusId){let r={statusHistory:s,currentStatus:l.statusId};await Ce(h,r),ve([...be(),S]),e?.newSear()}else F("","warning"),x({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),D(I())}else F("","error"),x({consigneeInfo:{ybestate:"Error con manifiesto"}}),D(I())};de(()=>{});const j=()=>H?.list?.filter(i=>i.id),[q,{refetch:Pe}]=ue(e?.item?.tracking,async()=>{let i=y(e?.item?.tracking);return await he(i)});return $()?(()=>{var i=$e(),l=i.firstChild,s=l.nextSibling,h=s.firstChild,m=s.nextSibling,w=m.firstChild,S=m.nextSibling,r=S.firstChild,d=r.nextSibling,c=d.nextSibling,u=S.nextSibling,L=u.firstChild;return u.nextSibling,l.style.setProperty("padding","16px"),t(l,n(o,{get when(){return B()},get children(){var a=p(),g=a.firstChild,U=g.nextSibling;return t(g,n(C,{get name(){return k?.[v()]?.icon},size:32,get color(){return k?.[v()]?.svg}})),t(U,()=>A?.consigneeInfo?.ybestate),f(b=>Z(a,k?.[v()],b)),a}})),t(h,n(C,{get name(){return G?.[e?.item?.currentStatus]},size:32})),t(s,n(o,{get when(){return e?.item?.idairnumber},get children(){var a=ee(),g=a.firstChild;return t(g,()=>e?.item?.idairnumber),a}}),null),t(m,n(P,{}),w),t(w,n(o,{get when(){return e?.item?.bagnumber},get children(){var a=te(),g=a.firstChild;return a.$$click=()=>R(null),t(g,()=>e?.item?.bagnumber),a}})),t(m,n(P,{}),null),t(m,n(o,{get when(){return e?.item?.tracking},get children(){var a=ie(),g=a.firstChild;return a.$$click=()=>R(y(e?.item?.tracking)),t(g,()=>y(e?.item?.tracking)),a}}),null),t(m,n(P,{}),null),t(r,()=>e?.item?.consigneeInfo?.ybcity),t(c,()=>e?.item?.consigneeInfo?.ybestate),t(L,O),t(i,n(o,{get when(){return!e?.showQR&&z?.roles?.HBLUPD?.isActive},get children(){var a=re();return t(a,n(J,{get each(){return j()},children:(g,U)=>(()=>{var b=le(),X=b.firstChild,se=X.firstChild;return b.$$click=Ae=>W(g.id),b.style.setProperty("padding","9px"),t(b,n(C,{get name(){return g.icon},size:24}),X),t(se,()=>g.label),b})()})),a}}),null),t(i,n(o,{get when(){return e?.showQR},get children(){var a=ne(),g=a.firstChild;return a.style.setProperty("padding","16px"),f(()=>Y(g,"src",q())),a}}),null),f(a=>(a=B()?"block":"none")!=null?l.style.setProperty("display",a):l.style.removeProperty("display")),i})():n(o,{get when(){return e?.item?.tracking},get children(){var i=Se(),l=i.firstChild,s=l.nextSibling,h=s.firstChild,m=h.firstChild,w=m.nextSibling,S=w.nextSibling;return l.style.setProperty("padding","16px"),t(l,n(o,{get when(){return B()},get children(){var r=p(),d=r.firstChild,c=d.nextSibling;return t(d,n(C,{get name(){return k?.[v()]?.icon},size:32,get color(){return k?.[v()]?.svg}})),t(c,()=>A?.consigneeInfo?.ybestate),f(u=>Z(r,k?.[v()],u)),r}})),t(s,n(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var r=fe(),d=r.firstChild;return t(d,n(C,{get name(){return G?.[e?.item?.currentStatus]},size:32})),t(r,n(o,{get when(){return!$()&&e?.item?.idairnumber},get children(){var c=ee(),u=c.firstChild;return t(u,()=>e?.item?.idairnumber),c}}),null),r})(),n(o,{get when(){return!$()},get children(){return[(()=>{var r=xe();return t(r,O),r})(),ye()]}})]}}),h),t(s,n(P,{}),h),t(m,()=>e?.item?.consigneeInfo?.ybcity),t(S,()=>e?.item?.consigneeInfo?.ybestate),t(s,n(P,{}),null),t(s,n(o,{get when(){return!$()&&e?.item?.tracking},get children(){var r=we(),d=r.firstChild;return t(d,n(o,{get when(){return e?.item?.bagnumber},get children(){var c=te(),u=c.firstChild;return c.$$click=()=>R(null),t(u,()=>y(e?.item?.bagnumber)),c}})),t(r,n(o,{get when(){return e?.item?.tracking},get children(){var c=ie(),u=c.firstChild;return c.$$click=()=>R(y(e?.item?.tracking)),t(u,()=>y(e?.item?.tracking)),c}}),null),r}}),null),t(i,n(o,{get when(){return!e?.showQR&&z?.roles?.HBLUPD?.isActive},get children(){var r=re();return t(r,n(J,{get each(){return j()},children:(d,c)=>(()=>{var u=le(),L=u.firstChild,a=L.firstChild;return u.$$click=g=>W(d.id),u.style.setProperty("padding","9px"),t(u,n(C,{get name(){return d.icon},size:24}),L),t(a,()=>$()?d.label:d.tag),u})()})),f(()=>K(r,$()?"":" bottombx flxWrp spaceAround centerBx")),r}}),null),t(i,n(o,{get when(){return e?.showQR},get children(){var r=ne(),d=r.firstChild;return r.style.setProperty("padding","16px"),f(()=>Y(d,"src",q())),r}}),null),f(r=>{var d=`client_item_box gWXAaj jlytmu ${$()?"isMobile":""}`,c=B()?"block":"none";return d!==r.e&&K(i,r.e=d),c!==r.t&&((r.t=c)!=null?l.style.setProperty("display",c):l.style.removeProperty("display")),r},{e:void 0,t:void 0}),i}})}const Ce=async(e,A)=>await _e({params:e,query:"updateLogisticYabaExpress",data2update:A});oe(["click"]);export{Te as default};
