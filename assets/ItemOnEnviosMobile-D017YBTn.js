const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-KKCFmHVf.js","assets/index-ClNVsa9Q.js","assets/index-fN3cNkmN.css","assets/ShowQR-Boijkild.js"])))=>i.map(i=>d[i]);
import{l as I,_ as k,e as D,c as R,a as M,u as T,d as s,i as t,S as g,t as m,g as P,O,w as B,F as H,x as V,Y as j,$ as z}from"./index-ClNVsa9Q.js";import L from"./ContainerElasticView-DQZ-zcua.js";import{u as Y}from"./isMobile-BkMSgOMa.js";var q=m("<div class=fullName_consigne><h5>"),Q=m('<div class=" _dsplFlx"><div class="icon_status centerBx">'),X=m("<div class=bag_number><h5>"),W=m('<div class="icon_status centerBx">'),G=m('<div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),J=m('<div class="client_item_box gWXAaj jlytmu"><div class=" topbx centerBx"></div><div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">');const K=I(()=>k(()=>import("./FlexSpace-KKCFmHVf.js"),__vite__mapDeps([0,1,2]))),F=I(()=>k(()=>import("./index-ClNVsa9Q.js").then(e=>e.a6),__vite__mapDeps([1,2]))),U=I(()=>k(()=>import("./ShowQR-Boijkild.js"),__vite__mapDeps([3,1,2])));function Z(e){R({search:"",status:"AERO_33"});const[$,x]=M(""),[f,C]=M("");T(C,400),Y(x);const u=i=>i?" "+i:"",w=()=>{let i=e?.item?.consigneeInfo;return u(i?.firstName)+u(i?.middleName)+u(i?.lastName)+u(i?.lastName2)},S=()=>{let i={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.idairguide};rmvBag(i)},l=()=>{let i=e?.item?.consigneeInfo,a=u(i?.altPhoneNumber);return u(i?.phoneNumber)+(a?" |"+a:"")},r=()=>{let i=e?.item?.street.split(",");return i.slice(0,i.length-2).join(",")},o=()=>{let i=e?.item?.hbls.length;const a=e?.item?.hbls.reduce((y,v)=>y+`${y?"/":""}${v.hbl}/${v.quantity}/${v.weight}`,"");let b=`${e?.item?.idairguide}/${e?.item?.cidentity}/${i}/${a}`,c={};c.id=P(),c.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},c.content=s(U,{val:b,get item(){return e?.item}}),O(c)};return s(g,{get when(){return e?.item?.tracking},get children(){var i=J(),a=i.firstChild,b=a.nextSibling,c=b.firstChild,y=c.nextSibling,v=y.nextSibling,E=v.nextSibling;return t(a,s(g,{get when(){return e?.item?.tracking},get children(){var n=Q(),_=n.firstChild;return t(_,s(F,{name:"link-off",size:32,color:"var(--background-red-ssg)"})),t(n,s(g,{get when(){return e.filter},get children(){var d=q(),h=d.firstChild;return t(h,()=>e?.item?.idairnumber),d}}),null),n}}),null),t(a,s(K,{}),null),t(a,s(g,{get when(){return e?.item?.bagnumber},get children(){var n=X(),_=n.firstChild;return n.$$click=o,t(_,()=>e?.item?.bagnumber),n}}),null),t(a,s(g,{get when(){return e?.item?.ssg_track_key.length===16},get children(){var n=W();return n.$$click=S,t(n,s(F,{name:"outline_delete",size:24})),n}}),null),t(i,s(g,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var n=G(),_=n.firstChild,d=_.firstChild,h=d.nextSibling,N=h.nextSibling;return t(d,()=>e?.item?.consigneeInfo?.ybcity),t(N,()=>e?.item?.consigneeInfo?.ybestate),n}}),b),t(c,w),t(v,l),t(E,r),i}})}D(["click"]);var p=m("<div class=guide_number><h5>"),ee=m('<div class=" _dsplFlx"><div class="icon_status centerBx">'),te=m("<div class=bottombx><h5>"),ie=m("<div><div class=bag_number><h5>"),le=m('<div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ne=m('<div class="_dsplFlx bottombx lowbordr"><h5>Movimientos'),se=m('<div class="client_item_box gWXAaj jlytmu"><div class=" topbx centerBx"></div><div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft "></p></div><div class="_dsplFlx bottombx"><div class="icon_status centerBx"></div><h4></h4></div>'),re=m('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">');const ae=I(()=>k(()=>import("./FlexSpace-KKCFmHVf.js"),__vite__mapDeps([0,1,2]))),A=I(()=>k(()=>import("./index-ClNVsa9Q.js").then(e=>e.a6),__vite__mapDeps([1,2]))),me=I(()=>k(()=>import("./ShowQR-Boijkild.js"),__vite__mapDeps([3,1,2])));function oe(e){const $=l=>l?" "+l:"",x=()=>{let l=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let r=l.reduce((o,i)=>Math.min(o,i.timeStamp),1/0);return Math.floor((new Date().getTime()-r)/864e5)}else return null},f=()=>{let l=e?.item?.consigneeInfo;return $(l?.firstName)+$(l?.middleName)+$(l?.lastName)+$(l?.lastName2)},C=()=>{e?.item?.ssg_track_key,e?.item?.idairguide,ce()},u=()=>{let l=e?.item?.consigneeInfo,r=$(l?.altPhoneNumber);return $(l?.phoneNumber)+(r?" |"+r:"")},w=()=>{let l=e?.item?.street.split(",");return l.slice(0,l.length-2).join(",")},S=l=>{let r="";if(l)r=l;else{let i=e?.item?.hbls.length;const a=e?.item?.hbls.reduce((b,c)=>b+`${b?"/":""}${c.hbl}/${c.quantity}/${c.weight}`,"");r=`${e?.item?.idairguide}/${e?.item?.cidentity}/${i}/${a}`}let o={};o.id=P(),o.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},o.content=s(me,{val:r,get item(){return e?.item}}),O(o)};return e?.filter?s(Z,{get item(){return e?.item},get filter(){return e?.filter}}):s(g,{get when(){return e?.item?.tracking},get children(){var l=se(),r=l.firstChild,o=r.nextSibling,i=o.firstChild,a=i.nextSibling,b=a.nextSibling,c=b.nextSibling,y=o.nextSibling,v=y.firstChild,E=v.nextSibling;return t(r,s(g,{get when(){return e?.item?.tracking},get children(){var n=ee(),_=n.firstChild;return t(_,s(A,{get name(){return B?.[e?.item?.currentStatus]},size:32})),t(n,s(g,{get when(){return x()},get children(){var d=p(),h=d.firstChild;return t(h,x),d}}),null),n}}),null),t(r,s(ae,{}),null),t(r,s(g,{get when(){return e?.item?.bagnumber},get children(){var n=ie(),_=n.firstChild,d=_.firstChild;return _.$$click=S,t(d,()=>e?.item?.bagnumber),t(n,s(g,{get when(){return e?.item?.tracking},get children(){var h=te(),N=h.firstChild;return h.$$click=()=>S(e?.item?.tracking),t(N,()=>e?.item?.tracking),h}}),null),n}}),null),t(i,f),t(b,u),t(c,w),t(l,s(g,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var n=le(),_=n.firstChild,d=_.firstChild,h=d.nextSibling,N=h.nextSibling;return t(d,()=>e?.item?.consigneeInfo?.ybcity),t(N,()=>e?.item?.consigneeInfo?.ybestate),n}}),y),v.$$click=C,t(v,s(A,{name:"send",size:24,color:"#4b4b4b"})),E.style.setProperty("color","#7b7b7b"),t(E,()=>e?.item?.nameshipper),t(l,s(L,{get children(){return[ne(),s(H,{get each(){return e?.item?.statusHistory},children:n=>s(de,{item:n})})]}}),null),l}})}const ce=async e=>{},de=e=>(()=>{var $=re(),x=$.firstChild,f=x.nextSibling,C=f.firstChild,u=C.nextSibling,w=u.nextSibling,S=w.nextSibling;S.nextSibling;var l=f.nextSibling;return t(x,()=>V[e?.item?.statusId]),t(f,()=>j(e?.item?.timeStamp),u),t(f,()=>z(e?.item?.timeStamp),S),t(l,()=>e?.item?.userId),$})();D(["click"]);export{oe as default};
