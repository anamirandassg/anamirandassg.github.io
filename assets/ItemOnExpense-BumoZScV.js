const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BjdtxJh3.js","assets/index-BnhUWhFw.js","assets/index-PRcoyGS_.css","assets/SVG-D475H7BK.js","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as v,_ as h,c as p,a as w,d as r,e as I,i,S as n,k as u,f as S,g as _,t as l}from"./index-BnhUWhFw.js";import{g as y}from"./Util-D886uaAp.js";import{u as A}from"./debounces-x6XSEqns.js";import"./DialogHRM-DfDMZwie.js";import{i as o}from"./globalSignal-Dkctqzbo.js";import"./browser-image-compression-BVJ4p9S0.js";import{OpenToast as C}from"./Toast-DzTQahTr.js";import{A as E}from"./components-BgvTRoZT.js";import"./index-Ci0zXM0r.js";var B=l('<p class=" textleft fullName_consigne">'),k=l("<h5 class=rpto>$"),O=l('<div class="_dsplFlx bottombx tr_bar_30">'),P=l('<div class="icon_status centerBx">'),R=l("<h5>"),D=l("<div class=vertseparator>"),F=l("<h4>"),N=l('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const g=v(()=>h(()=>import("./FlexSpace-BjdtxJh3.js"),__vite__mapDeps([0,1,2]))),T=v(()=>h(()=>import("./SVG-D475H7BK.js"),__vite__mapDeps([3,1,2,4])));function Y(t){p({search:"",status:"AERO_33"});const[V,$]=w("");A($,400);const f=async m=>{t?.item?.ssg_expenses_key,u?.profile?.businessYId,C({text:"No se puede eliminar",timeout:3500,theme:"red",id:y()})};return r(n,{get when(){return t?.item?.amount},get children(){var m=N(),x=m.firstChild,a=x.firstChild,c=a.firstChild,b=a.nextSibling;return i(c,r(n,{get when(){return t?.item?.seller},get children(){return r(E,{get href(){return`/expenses-detail?mId=${t?.item?.ssg_expenses_key}`},get children(){var e=B();return i(e,()=>t?.item?.seller?.toUpperCase()),e}})}})),i(a,r(g,{}),null),i(a,r(n,{get when(){return!o()},get children(){var e=O();return i(e,r(n,{get when(){return t?.item?.amount},get children(){var s=k();return s.firstChild,i(s,()=>t?.item?.amount,null),s}})),e}}),null),i(a,r(n,{get when(){return!o()},get children(){return[r(g,{}),r(n,{get when(){return u?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=P();return e.$$click=f,i(e,r(T,{name:"outline_delete",size:22})),e}})]}}),null),i(b,r(n,{get when(){return t?.item?.category},get children(){return[(()=>{var e=R();return i(e,()=>t?.item?.category),e})(),D(),(()=>{var e=F();return i(e,()=>t?.item?.description),e})()]}})),S(e=>{var s=`client_item_box gWXAaj jlytmu  centerBx ${o()?"isMobile":""}`,d=`${o()?"":"tr_bar_60"} centerBx`;return s!==e.e&&_(m,e.e=s),d!==e.t&&_(c,e.t=d),e},{e:void 0,t:void 0}),m}})}I(["click"]);export{Y as default};
