const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Bo6p9169.js","assets/index-D_bcj_hq.js","assets/index-D4QuRvi-.css","assets/SVG-0zukjWw4.js","assets/index-Ci0zXM0r.js","assets/ShowQR-CnbaY78K.js","assets/globalSignal-Bhl_FzQI.js","assets/ShowQRPrintLabel-DHqhwbi3.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-Crm62MPj.js","assets/Util-Dktdagtb.js","assets/Toast-BfLIxSAO.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as v,e as C,c as M,a as F,d as l,i,S as c,t as d,f as O,g as P}from"./index-D_bcj_hq.js";import{g as E,a as T}from"./Util-Dktdagtb.js";import{OpenModal as N}from"./DialogHRM-CLsziKGA.js";import{u as D}from"./debounces-DUKxQQZ4.js";import{i as V}from"./globalSignal-Bhl_FzQI.js";import"./index-Ci0zXM0r.js";var L=d("<div class=fullName_consigne><h5>"),z=d('<div class=" _dsplFlx"><div class="icon_status centerBx">'),B=d("<div class=bag_number><h5>"),j=d('<div class="icon_status centerBx">'),H=d('<div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),q=d('<div class="client_item_box gWXAaj jlytmu"><div class=" topbx centerBx"></div><div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">');const Q=$(()=>v(()=>import("./FlexSpace-Bo6p9169.js"),__vite__mapDeps([0,1,2]))),w=$(()=>v(()=>import("./SVG-0zukjWw4.js"),__vite__mapDeps([3,1,2,4]))),X=$(()=>v(()=>import("./ShowQR-CnbaY78K.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));function W(e){M({search:"",status:"AERO_33"});const[S,x]=F("");D(x,400);const r=t=>t?" "+t:"",_=()=>{let t=e?.item?.consigneeInfo;return r(t?.firstName)+r(t?.middleName)+r(t?.lastName)+r(t?.lastName2)},n=()=>{let t={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.idairguide};rmvBag(t)},s=()=>{let t=e?.item?.consigneeInfo,g=r(t?.altPhoneNumber);return r(t?.phoneNumber)+(g?" |"+g:"")},u=()=>{let t=e?.item?.street.split(",");return t.slice(0,t.length-2).join(",")},m=()=>{let t=e?.item?.hbls.length;const g=e?.item?.hbls.reduce((I,o)=>I+`${I?"/":""}${o.hbl}/${o.quantity}/${o.weight}`,"");let y=`${e?.item?.idairguide}/${e?.item?.cidentity}/${t}/${g}`,h={};h.id=E(),h.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},h.content=l(X,{val:y,get item(){return e?.item}}),N(h)};return l(c,{get when(){return e?.item?.tracking},get children(){var t=q(),g=t.firstChild,y=g.nextSibling,h=y.firstChild,I=h.nextSibling,o=I.nextSibling,R=o.nextSibling;return i(g,l(c,{get when(){return e?.item?.tracking},get children(){var a=z(),b=a.firstChild;return i(b,l(w,{name:"link-off",size:32,color:"var(--background-red-ssg)"})),i(a,l(c,{get when(){return e.filter},get children(){var f=L(),k=f.firstChild;return i(k,()=>e?.item?.idairnumber),f}}),null),a}}),null),i(g,l(Q,{}),null),i(g,l(c,{get when(){return e?.item?.bagnumber},get children(){var a=B(),b=a.firstChild;return a.$$click=m,i(b,()=>e?.item?.bagnumber),a}}),null),i(g,l(c,{get when(){return e?.item?.ssg_track_key.length===16},get children(){var a=j();return a.$$click=n,i(a,l(w,{name:"outline_delete",size:24})),a}}),null),i(t,l(c,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var a=H(),b=a.firstChild,f=b.firstChild,k=f.nextSibling,A=k.nextSibling;return i(f,()=>e?.item?.consigneeInfo?.ybcity),i(A,()=>e?.item?.consigneeInfo?.ybestate),a}}),y),i(h,_),i(o,s),i(R,u),t}})}C(["click"]);var G=d("<div class=guide_number><h5>"),J=d('<div class=" _dsplFlx"><div class="icon_status centerBx">'),K=d("<div class=bottombx><h5>"),U=d("<div><div class=bag_number><h5>"),Y=d('<div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),Z=d('<div><div class=" topbx centerBx">');const p=$(()=>v(()=>import("./FlexSpace-Bo6p9169.js"),__vite__mapDeps([0,1,2]))),ee=$(()=>v(()=>import("./SVG-0zukjWw4.js"),__vite__mapDeps([3,1,2,4]))),te=$(()=>v(()=>import("./ShowQR-CnbaY78K.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));function me(e){const S=()=>{let r=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let _=r.reduce((n,s)=>Math.min(n,s.timeStamp),1/0);return Math.floor((new Date().getTime()-_)/864e5)}else return null},x=r=>{let _="";if(r)_=r;else{let s=e?.item?.hbls.length;const u=e?.item?.hbls.reduce((m,t)=>m+`${m?"/":""}${t.hbl}/${t.quantity}/${t.weight}`,"");_=`${e?.item?.idairguide}/${e?.item?.cidentity}/${s}/${u}`}let n={};n.id=E(),n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=l(te,{val:_,get item(){return e?.item}}),N(n)};return e?.filter?l(W,{get item(){return e?.item},get filter(){return e?.filter}}):l(c,{get when(){return e?.item?.tracking},get children(){var r=Z(),_=r.firstChild;return i(_,l(c,{get when(){return e?.item?.tracking},get children(){var n=J(),s=n.firstChild;return i(s,l(ee,{get name(){return T("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),i(n,l(c,{get when(){return S()},get children(){var u=G(),m=u.firstChild;return i(m,S),u}}),null),n}}),null),i(_,l(p,{}),null),i(_,l(c,{get when(){return e?.item?.bagnumber},get children(){var n=U(),s=n.firstChild,u=s.firstChild;return s.$$click=x,i(u,()=>e?.item?.bagnumber),i(n,l(c,{get when(){return e?.item?.tracking},get children(){var m=K(),t=m.firstChild;return m.$$click=()=>x(e?.item?.tracking),i(t,()=>e?.item?.tracking),m}}),null),n}}),null),i(r,l(c,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var n=Y(),s=n.firstChild,u=s.firstChild,m=u.nextSibling,t=m.nextSibling;return i(u,()=>e?.item?.consigneeInfo?.ybcity),i(t,()=>e?.item?.consigneeInfo?.ybestate),n}}),null),O(()=>P(r,`client_item_box gWXAaj jlytmu ${V()?"isMobile":""}`)),r}})}C(["click"]);export{me as default};
