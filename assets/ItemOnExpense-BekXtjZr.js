const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DRY60fzG.js","assets/index-Rl3TmLYH.js","assets/index-BRlA1Q7g.css","assets/SVG-DmfBQ1XE.js","assets/Util-DmBsvgxN.js"])))=>i.map(i=>d[i]);
import{l as g,_ as h,c as p,a as w,e as r,i,S as n,j as o,g as u,f as I,m as _,h as S,t as l}from"./index-Rl3TmLYH.js";import{a as y}from"./Util-DmBsvgxN.js";import{u as A}from"./debounces-C5fEz-lH.js";import"./DialogHRM-DwC3nSOA.js";import"./browser-image-compression-BVJ4p9S0.js";import{OpenToast as C}from"./Toast-B7V57fet.js";import{A as E}from"./components-DKOHBzuN.js";var B=l('<p class=" textleft fullName_consigne">'),O=l("<h5 class=rpto>$"),P=l('<div class="_dsplFlx bottombx tr_bar_30">'),k=l('<div class="icon_status centerBx">'),R=l("<h5>"),j=l("<div class=vertseparator>"),D=l("<h4>"),F=l('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const v=g(()=>h(()=>import("./FlexSpace-DRY60fzG.js"),__vite__mapDeps([0,1,2]))),N=g(()=>h(()=>import("./SVG-DmfBQ1XE.js"),__vite__mapDeps([3,1,2,4])));function W(t){p({search:"",status:"AERO_33"});const[T,$]=w("");A($,400);const f=async m=>{t?.item?.ssg_expenses_key,u?.profile?.businessYId,C({text:"No se puede eliminar",timeout:3500,theme:"red",id:y()})};return r(n,{get when(){return t?.item?.amount},get children(){var m=F(),x=m.firstChild,a=x.firstChild,c=a.firstChild,b=a.nextSibling;return i(c,r(n,{get when(){return t?.item?.seller},get children(){return r(E,{get href(){return`/expenses-detail?mId=${t?.item?.ssg_expenses_key}`},get children(){var e=B();return i(e,()=>t?.item?.seller?.toUpperCase()),e}})}})),i(a,r(v,{}),null),i(a,r(n,{get when(){return!o()},get children(){var e=P();return i(e,r(n,{get when(){return t?.item?.amount},get children(){var s=O();return s.firstChild,i(s,()=>t?.item?.amount,null),s}})),e}}),null),i(a,r(n,{get when(){return!o()},get children(){return[r(v,{}),r(n,{get when(){return u?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=k();return e.$$click=f,i(e,r(N,{name:"outline_delete",size:22})),e}})]}}),null),i(b,r(n,{get when(){return t?.item?.category},get children(){return[(()=>{var e=R();return i(e,()=>t?.item?.category),e})(),j(),(()=>{var e=D();return i(e,()=>t?.item?.description),e})()]}})),I(e=>{var s=`client_item_box gWXAaj jlytmu  centerBx ${o()?"isMobile":""}`,d=`${o()?"":"tr_bar_60"} centerBx`;return s!==e.e&&_(m,e.e=s),d!==e.t&&_(c,e.t=d),e},{e:void 0,t:void 0}),m}})}S(["click"]);export{W as default};
