const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-IuShATjt.js","assets/index-C8V4evGH.js","assets/index-DGSEMnLR.css","assets/SVG-OBKQRjse.js","assets/index-Ci0zXM0r.js","assets/ShowQR-7UoY84G8.js","assets/globalSignal-YaySbPky.js","assets/ShowQRPrintLabel-Bp7ymovS.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-BI_Od3nu.js","assets/Util-dbxHFpkD.js","assets/Toast-DvEpGGXy.js","assets/Toast-BKeKgjC9.css","assets/DropDwnSearch-COigO6Cq.js","assets/debounces-DRdsmFa0.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as N,_ as z,a as T,c as ce,m as de,b as ue,i as t,d as n,f as $,e as oe,t as _,s as X,S as o,z as M,F as Z,n as G,g as Y,j as me}from"./index-C8V4evGH.js";import{g as I,f as ge}from"./Util-dbxHFpkD.js";import{t as k,b as J}from"./manifestList-CSHEgbpJ.js";import{OpenModal as _e}from"./DialogHRM-CzGIiFLn.js";import{i as f,g as p}from"./globalSignal-YaySbPky.js";import{g as he}from"./ShowQRPrintLabel-Bp7ymovS.js";import{setTasks as ve,tasks as be}from"./FindHBL-Bw2VqbaM.js";import"./index-Ci0zXM0r.js";import"./fontkit.es-DEjOtITv.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-BI_Od3nu.js";import"./Toast-DvEpGGXy.js";import"./InputHr-EbmvXsu-.js";import"./SVG-OBKQRjse.js";import"./Envios-CWjR6DNs.js";import"./debounces-DRdsmFa0.js";import"./FlexSpace-IuShATjt.js";var K=_('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ee=_('<div class="centerBx bottombx"><h5>'),te=_("<div class=bag_number><h5>"),ie=_("<div class=bottombx><h5>"),re=_("<div>"),ne=_('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),$e=_('<div class="client_item_box WXAaj2 jlytmu isMobile"><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=" centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"><div></div></div><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4></h4></div><div class=bottombx bottombx><p class=" textleft fullName_consigne"></p></div><div class=separator>'),le=_('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>'),fe=_('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),xe=_('<p class="tr_bar_30 textleft fullName_consigne">'),ye=_("<div style=margin-right:4vw>"),we=_("<div><div>"),Se=_('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>');const P=N(()=>z(()=>import("./FlexSpace-IuShATjt.js"),__vite__mapDeps([0,1,2]))),C=N(()=>z(()=>import("./SVG-OBKQRjse.js"),__vite__mapDeps([3,1,2,4]))),ke=N(()=>z(()=>import("./ShowQR-7UoY84G8.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));N(()=>z(()=>import("./DropDwnSearch-COigO6Cq.js"),__vite__mapDeps([14,1,2,15,3,4,16])));function Oe(e){T("");const[A,x]=ce({}),[v,se]=T(""),[Ie,H]=T(""),[B,Q]=T(""),E=i=>i?" "+i:"",V=()=>{let i=e?.item?.consigneeInfo;return E(i?.firstName)+E(i?.middleName)+E(i?.lastName)+E(i?.lastName2)},R=i=>{let l="";if(i)l=i;else if(e?.item?.hblS){let h=e?.item?.hblS;l=`${e?.item?.idairguide}/${e?.item?.cidentity}/${h}`}let a={};a.id=I(),a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=n(ke,{val:l,get item(){return e?.item}}),_e(a)},y=i=>{let l=i,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const h=new RegExp(a);return l.length===13&&h.test(l)&&(l=l.slice(3,12)),l},F=(i,l)=>{se(l),H(i),setTimeout(()=>{H("")},300)},D=i=>{Q(i),setTimeout(()=>{Q("")},3e3)},W=async i=>{let l={timeStamp:new Date().getTime(),latitude:p?.latitude,longitude:p?.longitude,statusId:i,userId:me?.profile?.userId};if(e?.item?.idairguide){let a=e?.item?.statusHistory||[];a.push(l);let h={idairguide:e?.item?.idairguide,ssg_track_key:e?.item?.ssg_track_key},g=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,w=e?.item?.city||e?.item?.consigneeInfo?.ybcity,S={idairnumber:e?.item?.idairnumber,estate:g,city:w,tracking:e?.currentHbl,currentStatus:i,timeStamp:new Date().getTime()};if(x(""),x(e?.item),D(I()),F("","success"),!M?.roles?.[g])F("","warning"),x({consigneeInfo:{ybestate:"Zona incorrecta"}}),D(I());else if(e?.item?.currentStatus!==l.statusId){let r={statusHistory:a,currentStatus:l.statusId};await Ce(h,r),ve([...be(),S]),e?.newSear()}else F("","warning"),x({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),D(I())}else F("","error"),x({consigneeInfo:{ybestate:"Error con manifiesto"}}),D(I())};de(()=>{});const j=()=>p?.list?.filter(i=>i.id),[q,{refetch:Pe}]=ue(e?.item?.tracking,async()=>{let i=y(e?.item?.tracking);return await he(i)});return f()?(()=>{var i=$e(),l=i.firstChild,a=l.nextSibling,h=a.firstChild,g=a.nextSibling,w=g.firstChild,S=g.nextSibling,r=S.firstChild,d=r.nextSibling,c=d.nextSibling,u=S.nextSibling,L=u.firstChild;return u.nextSibling,l.style.setProperty("padding","16px"),t(l,n(o,{get when(){return B()},get children(){var s=K(),m=s.firstChild,O=m.nextSibling;return t(m,n(C,{get name(){return k?.[v()]?.icon},size:32,get color(){return k?.[v()]?.svg}})),t(O,()=>A?.consigneeInfo?.ybestate),$(b=>X(s,k?.[v()],b)),s}})),t(h,n(C,{get name(){return J?.[e?.item?.currentStatus]},size:32})),t(a,n(o,{get when(){return e?.item?.idairnumber},get children(){var s=ee(),m=s.firstChild;return t(m,()=>e?.item?.idairnumber),s}}),null),t(g,n(P,{}),w),t(w,n(o,{get when(){return e?.item?.bagnumber},get children(){var s=te(),m=s.firstChild;return s.$$click=()=>R(null),t(m,()=>e?.item?.bagnumber),s}})),t(g,n(P,{}),null),t(g,n(o,{get when(){return e?.item?.tracking},get children(){var s=ie(),m=s.firstChild;return s.$$click=()=>R(y(e?.item?.tracking)),t(m,()=>y(e?.item?.tracking)),s}}),null),t(g,n(P,{}),null),t(r,()=>e?.item?.consigneeInfo?.ybcity),t(c,()=>e?.item?.consigneeInfo?.ybestate),t(L,V),t(i,n(o,{get when(){return!e?.showQR&&M?.roles?.HBLUPD?.isActive},get children(){var s=re();return t(s,n(Z,{get each(){return j()},children:(m,O)=>(()=>{var b=le(),U=b.firstChild,ae=U.firstChild;return b.$$click=Ae=>W(m.id),b.style.setProperty("padding","9px"),t(b,n(C,{get name(){return m.icon},size:24}),U),t(ae,()=>m.label),b})()})),s}}),null),t(i,n(o,{get when(){return e?.showQR},get children(){var s=ne(),m=s.firstChild;return s.style.setProperty("padding","16px"),$(()=>G(m,"src",q())),s}}),null),$(s=>(s=B()?"block":"none")!=null?l.style.setProperty("display",s):l.style.removeProperty("display")),i})():n(o,{get when(){return e?.item?.tracking},get children(){var i=Se(),l=i.firstChild,a=l.nextSibling,h=a.firstChild,g=h.firstChild,w=g.nextSibling,S=w.nextSibling;return l.style.setProperty("padding","16px"),t(l,n(o,{get when(){return B()},get children(){var r=K(),d=r.firstChild,c=d.nextSibling;return t(d,n(C,{get name(){return k?.[v()]?.icon},size:32,get color(){return k?.[v()]?.svg}})),t(c,()=>A?.consigneeInfo?.ybestate),$(u=>X(r,k?.[v()],u)),r}})),t(a,n(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var r=fe(),d=r.firstChild;return t(d,n(C,{get name(){return J?.[e?.item?.currentStatus]},size:32})),t(r,n(o,{get when(){return!f()&&e?.item?.idairnumber},get children(){var c=ee(),u=c.firstChild;return t(u,()=>e?.item?.idairnumber),c}}),null),r})(),n(o,{get when(){return!f()},get children(){return[(()=>{var r=xe();return t(r,V),r})(),ye()]}})]}}),h),t(a,n(P,{}),h),t(g,()=>e?.item?.consigneeInfo?.ybcity),t(S,()=>e?.item?.consigneeInfo?.ybestate),t(a,n(P,{}),null),t(a,n(o,{get when(){return!f()&&e?.item?.tracking},get children(){var r=we(),d=r.firstChild;return t(d,n(o,{get when(){return e?.item?.bagnumber},get children(){var c=te(),u=c.firstChild;return c.$$click=()=>R(null),t(u,()=>y(e?.item?.bagnumber)),c}})),t(r,n(o,{get when(){return e?.item?.tracking},get children(){var c=ie(),u=c.firstChild;return c.$$click=()=>R(y(e?.item?.tracking)),t(u,()=>y(e?.item?.tracking)),c}}),null),r}}),null),t(i,n(o,{get when(){return!e?.showQR&&M?.roles?.HBLUPD?.isActive},get children(){var r=re();return t(r,n(Z,{get each(){return j()},children:(d,c)=>(()=>{var u=le(),L=u.firstChild,s=L.firstChild;return u.$$click=m=>W(d.id),u.style.setProperty("padding","9px"),t(u,n(C,{get name(){return d.icon},size:24}),L),t(s,()=>f()?d.label:d.tag),u})()})),$(()=>Y(r,f()?"":" bottombx flxWrp spaceAround centerBx")),r}}),null),t(i,n(o,{get when(){return e?.showQR},get children(){var r=ne(),d=r.firstChild;return r.style.setProperty("padding","16px"),$(()=>G(d,"src",q())),r}}),null),$(r=>{var d=`client_item_box gWXAaj jlytmu ${f()?"isMobile":""}`,c=B()?"block":"none";return d!==r.e&&Y(i,r.e=d),c!==r.t&&((r.t=c)!=null?l.style.setProperty("display",c):l.style.removeProperty("display")),r},{e:void 0,t:void 0}),i}})}const Ce=async(e,A)=>await ge({params:e,query:"updateLogisticYabaExpress",data2update:A});oe(["click"]);export{Oe as default};