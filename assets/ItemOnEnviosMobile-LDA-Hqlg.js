const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-drEz4pF6.js","assets/index-DJKGOlMc.js","assets/index-96-BciZA.css","assets/ShowQR-ByuzgaVn.js"])))=>i.map(i=>d[i]);
import{l as o,_ as v,e as C,c as M,a as O,u as F,d as l,i,S as m,t as d,g as E,O as N,w as P,k as T,A as D,m as V}from"./index-DJKGOlMc.js";import"./ContainerElasticView-KxdfFkF9.js";var L=d("<div class=fullName_consigne><h5>"),z=d('<div class=" _dsplFlx"><div class="icon_status centerBx">'),B=d("<div class=bag_number><h5>"),j=d('<div class="icon_status centerBx">'),H=d('<div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),q=d('<div class="client_item_box gWXAaj jlytmu"><div class=" topbx centerBx"></div><div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">');const Q=o(()=>v(()=>import("./FlexSpace-drEz4pF6.js"),__vite__mapDeps([0,1,2]))),w=o(()=>v(()=>import("./index-DJKGOlMc.js").then(e=>e.a6),__vite__mapDeps([1,2]))),X=o(()=>v(()=>import("./ShowQR-ByuzgaVn.js"),__vite__mapDeps([3,1,2])));function W(e){M({search:"",status:"AERO_33"});const[k,x]=O("");F(x,400);const r=t=>t?" "+t:"",_=()=>{let t=e?.item?.consigneeInfo;return r(t?.firstName)+r(t?.middleName)+r(t?.lastName)+r(t?.lastName2)},n=()=>{let t={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.idairguide};rmvBag(t)},s=()=>{let t=e?.item?.consigneeInfo,g=r(t?.altPhoneNumber);return r(t?.phoneNumber)+(g?" |"+g:"")},u=()=>{let t=e?.item?.street.split(",");return t.slice(0,t.length-2).join(",")},c=()=>{let t=e?.item?.hbls.length;const g=e?.item?.hbls.reduce((I,$)=>I+`${I?"/":""}${$.hbl}/${$.quantity}/${$.weight}`,"");let y=`${e?.item?.idairguide}/${e?.item?.cidentity}/${t}/${g}`,h={};h.id=E(),h.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},h.content=l(X,{val:y,get item(){return e?.item}}),N(h)};return l(m,{get when(){return e?.item?.tracking},get children(){var t=q(),g=t.firstChild,y=g.nextSibling,h=y.firstChild,I=h.nextSibling,$=I.nextSibling,A=$.nextSibling;return i(g,l(m,{get when(){return e?.item?.tracking},get children(){var a=z(),b=a.firstChild;return i(b,l(w,{name:"link-off",size:32,color:"var(--background-red-ssg)"})),i(a,l(m,{get when(){return e.filter},get children(){var f=L(),S=f.firstChild;return i(S,()=>e?.item?.idairnumber),f}}),null),a}}),null),i(g,l(Q,{}),null),i(g,l(m,{get when(){return e?.item?.bagnumber},get children(){var a=B(),b=a.firstChild;return a.$$click=c,i(b,()=>e?.item?.bagnumber),a}}),null),i(g,l(m,{get when(){return e?.item?.ssg_track_key.length===16},get children(){var a=j();return a.$$click=n,i(a,l(w,{name:"outline_delete",size:24})),a}}),null),i(t,l(m,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var a=H(),b=a.firstChild,f=b.firstChild,S=f.nextSibling,R=S.nextSibling;return i(f,()=>e?.item?.consigneeInfo?.ybcity),i(R,()=>e?.item?.consigneeInfo?.ybestate),a}}),y),i(h,_),i($,s),i(A,u),t}})}C(["click"]);var G=d("<div class=guide_number><h5>"),J=d('<div class=" _dsplFlx"><div class="icon_status centerBx">'),K=d("<div class=bottombx><h5>"),U=d("<div><div class=bag_number><h5>"),Y=d('<div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),Z=d('<div><div class=" topbx centerBx">');const p=o(()=>v(()=>import("./FlexSpace-drEz4pF6.js"),__vite__mapDeps([0,1,2]))),ee=o(()=>v(()=>import("./index-DJKGOlMc.js").then(e=>e.a6),__vite__mapDeps([1,2]))),te=o(()=>v(()=>import("./ShowQR-ByuzgaVn.js"),__vite__mapDeps([3,1,2])));function ne(e){const k=()=>{let r=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let _=r.reduce((n,s)=>Math.min(n,s.timeStamp),1/0);return Math.floor((new Date().getTime()-_)/864e5)}else return null},x=r=>{let _="";if(r)_=r;else{let s=e?.item?.hbls.length;const u=e?.item?.hbls.reduce((c,t)=>c+`${c?"/":""}${t.hbl}/${t.quantity}/${t.weight}`,"");_=`${e?.item?.idairguide}/${e?.item?.cidentity}/${s}/${u}`}let n={};n.id=E(),n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=l(te,{val:_,get item(){return e?.item}}),N(n)};return e?.filter?l(W,{get item(){return e?.item},get filter(){return e?.filter}}):l(m,{get when(){return e?.item?.tracking},get children(){var r=Z(),_=r.firstChild;return i(_,l(m,{get when(){return e?.item?.tracking},get children(){var n=J(),s=n.firstChild;return i(s,l(ee,{get name(){return P?.[e?.item?.currentStatus]},size:32})),i(n,l(m,{get when(){return k()},get children(){var u=G(),c=u.firstChild;return i(c,k),u}}),null),n}}),null),i(_,l(p,{}),null),i(_,l(m,{get when(){return e?.item?.bagnumber},get children(){var n=U(),s=n.firstChild,u=s.firstChild;return s.$$click=x,i(u,()=>e?.item?.bagnumber),i(n,l(m,{get when(){return e?.item?.tracking},get children(){var c=K(),t=c.firstChild;return c.$$click=()=>x(e?.item?.tracking),i(t,()=>e?.item?.tracking),c}}),null),n}}),null),i(r,l(m,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var n=Y(),s=n.firstChild,u=s.firstChild,c=u.nextSibling,t=c.nextSibling;return i(u,()=>e?.item?.consigneeInfo?.ybcity),i(t,()=>e?.item?.consigneeInfo?.ybestate),n}}),null),T(()=>D(r,`client_item_box gWXAaj jlytmu ${V()?"isMobile":""}`)),r}})}C(["click"]);export{ne as default};
