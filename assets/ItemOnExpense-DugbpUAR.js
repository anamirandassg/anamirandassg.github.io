const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BTgTYXhz.js","assets/index-COVb01tO.js","assets/index-lCkr9jrN.css","assets/SVG-B3SV77JW.js","assets/Util-B95KFj0U.js"])))=>i.map(i=>d[i]);
import{l as g,_ as h,c as p,a as w,d as r,i,S as n,f as o,n as u,e as I,g as _,h as S,t as l}from"./index-COVb01tO.js";import{b as y}from"./Util-B95KFj0U.js";import{u as A}from"./debounces-D9ZBve1Z.js";import"./DialogHRM-Otqzy6Yq.js";import"./browser-image-compression-BVJ4p9S0.js";import{OpenToast as C}from"./Toast-DCI3E2vh.js";import{A as E}from"./components-C1aCYG8_.js";var B=l('<p class=" textleft fullName_consigne">'),O=l("<h5 class=rpto>$"),P=l('<div class="_dsplFlx bottombx tr_bar_30">'),k=l('<div class="icon_status centerBx">'),R=l("<h5>"),D=l("<div class=vertseparator>"),F=l("<h4>"),N=l('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const v=g(()=>h(()=>import("./FlexSpace-BTgTYXhz.js"),__vite__mapDeps([0,1,2]))),T=g(()=>h(()=>import("./SVG-B3SV77JW.js"),__vite__mapDeps([3,1,2,4])));function W(t){p({search:"",status:"AERO_33"});const[V,$]=w("");A($,400);const f=async m=>{t?.item?.ssg_expenses_key,u?.profile?.businessYId,C({text:"No se puede eliminar",timeout:3500,theme:"red",id:y()})};return r(n,{get when(){return t?.item?.amount},get children(){var m=N(),x=m.firstChild,a=x.firstChild,c=a.firstChild,b=a.nextSibling;return i(c,r(n,{get when(){return t?.item?.seller},get children(){return r(E,{get href(){return`/expenses-detail?mId=${t?.item?.ssg_expenses_key}`},get children(){var e=B();return i(e,()=>t?.item?.seller?.toUpperCase()),e}})}})),i(a,r(v,{}),null),i(a,r(n,{get when(){return!o()},get children(){var e=P();return i(e,r(n,{get when(){return t?.item?.amount},get children(){var s=O();return s.firstChild,i(s,()=>t?.item?.amount,null),s}})),e}}),null),i(a,r(n,{get when(){return!o()},get children(){return[r(v,{}),r(n,{get when(){return u?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=k();return e.$$click=f,i(e,r(T,{name:"outline_delete",size:22})),e}})]}}),null),i(b,r(n,{get when(){return t?.item?.category},get children(){return[(()=>{var e=R();return i(e,()=>t?.item?.category),e})(),D(),(()=>{var e=F();return i(e,()=>t?.item?.description),e})()]}})),I(e=>{var s=`client_item_box gWXAaj jlytmu  centerBx ${o()?"isMobile":""}`,d=`${o()?"":"tr_bar_60"} centerBx`;return s!==e.e&&_(m,e.e=s),d!==e.t&&_(c,e.t=d),e},{e:void 0,t:void 0}),m}})}S(["click"]);export{W as default};
