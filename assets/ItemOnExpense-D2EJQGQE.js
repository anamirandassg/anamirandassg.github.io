const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D2xE4IT5.js","assets/index-MWcyRJ7Y.js","assets/index-BmzAZVve.css","assets/SVG-0DyuRqFt.js"])))=>i.map(i=>d[i]);
import{l as g,_ as h,c as p,a as w,d as r,i as l,S as i,g as c,n as u,e as I,f as _,h as S,t as n,j as y}from"./index-MWcyRJ7Y.js";import{u as A}from"./debounces-CWPhYdOE.js";import"./DialogHRM-CX4AZT-W.js";import"./browser-image-compression-BVJ4p9S0.js";import{OpenToast as C}from"./Toast-kUDxtYWW.js";import{A as E}from"./components-DzRn3D31.js";var B=n('<p class=" textleft fullName_consigne">'),O=n("<h5 class=rpto>$"),P=n('<div class="_dsplFlx bottombx tr_bar_30">'),k=n('<div class="icon_status centerBx">'),R=n("<h5>"),j=n("<div class=vertseparator>"),D=n("<h4>"),F=n('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const v=g(()=>h(()=>import("./FlexSpace-D2xE4IT5.js"),__vite__mapDeps([0,1,2]))),N=g(()=>h(()=>import("./SVG-0DyuRqFt.js"),__vite__mapDeps([3,1,2])));function U(t){p({search:"",status:"AERO_33"});const[T,$]=w("");A($,400);const x=async m=>{t?.item?.ssg_expenses_key,u?.profile?.businessYId,C({text:"No se puede eliminar",timeout:3500,theme:"red",id:y()})};return r(i,{get when(){return t?.item?.amount},get children(){var m=F(),f=m.firstChild,a=f.firstChild,d=a.firstChild,b=a.nextSibling;return l(d,r(i,{get when(){return t?.item?.seller},get children(){return r(E,{get href(){return`/expenses-detail?mId=${t?.item?.ssg_expenses_key}`},get children(){var e=B();return l(e,()=>t?.item?.seller?.toUpperCase()),e}})}})),l(a,r(v,{}),null),l(a,r(i,{get when(){return!c()},get children(){var e=P();return l(e,r(i,{get when(){return t?.item?.amount},get children(){var s=O();return s.firstChild,l(s,()=>t?.item?.amount,null),s}})),e}}),null),l(a,r(i,{get when(){return!c()},get children(){return[r(v,{}),r(i,{get when(){return u?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=k();return e.$$click=x,l(e,r(N,{name:"outline_delete",size:22})),e}})]}}),null),l(b,r(i,{get when(){return t?.item?.category},get children(){return[(()=>{var e=R();return l(e,()=>t?.item?.category),e})(),j(),(()=>{var e=D();return l(e,()=>t?.item?.description),e})()]}})),I(e=>{var s=`client_item_box gWXAaj jlytmu  centerBx ${c()?"isMobile":""}`,o=`${c()?"":"tr_bar_60"} centerBx`;return s!==e.e&&_(m,e.e=s),o!==e.t&&_(d,e.t=o),e},{e:void 0,t:void 0}),m}})}S(["click"]);export{U as default};
