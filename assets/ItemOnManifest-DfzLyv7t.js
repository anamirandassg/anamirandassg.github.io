const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DqXHQUkx.js","assets/index-CnAi9qOS.js","assets/index-D7Gv5tA3.css","assets/SVG-DrSvIfFx.js","assets/Util-C4Gv2Rs-.js","assets/ShowQRManifest-IRec6Ygr.js","assets/ShowQRPrintLabel-BeZu0aKw.js","assets/PDFButton-CCQT0yk3.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BaZy4qZc.js","assets/InitPrintServices-COQVt4ve.js","assets/Toast-Be2hxX56.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as v,c as M,a as S,d as r,i as n,S as l,f as b,e as h,s as y,w as A,n as C,g as B,h as p,t as s}from"./index-CnAi9qOS.js";import{b as R,m as z,D as O}from"./Util-C4Gv2Rs-.js";import{u as D}from"./debounces-BHuoMbkF.js";import{OpenModal as P}from"./DialogHRM-DIBcushe.js";import{A as L}from"./components-C2Aqj73q.js";var V=s('<p class=" textleft fullName_consigne">'),F=s("<h5 class=rpto>"),k=s("<div class=vertseparator>"),T=s("<h5>"),j=s('<div class="_dsplFlx bottombx"><h4>'),f=s('<div class="icon_status centerBx">'),x=s('<div class="icon_status centerBx"><a class=centerBx>'),H=s('<div class=""><div class=bottombx><h4 class=centerBx>'),N=s('<div><div class="_dsplFlx topbx centerBx"><div>');const w=g(()=>v(()=>import("./FlexSpace-DqXHQUkx.js"),__vite__mapDeps([0,1,2]))),_=g(()=>v(()=>import("./SVG-DrSvIfFx.js"),__vite__mapDeps([3,1,2,4]))),Q=g(()=>v(()=>import("./ShowQRManifest-IRec6Ygr.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function J(t){M({search:"",status:"AERO_33"});const[$,d]=S("");D(d,400);const o=m=>{},u=m=>{let i={};i.id=R(),i.closeEvent=o,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=r(Q,{get item(){return t?.item},get refetch(){return t?.refetch}}),P(i)},I=async m=>{await q(t?.item),t?.refetch()};return r(l,{get when(){return t?.item?.name},get children(){var m=N(),i=m.firstChild,E=i.firstChild;return n(i,r(l,{get when(){return t?.item?.name},get children(){return r(L,{get href(){return`/manifest-detail?mId=${t?.item?.ssg_manifest_key}`},get children(){var e=V();return n(e,()=>t?.item?.name),e}})}}),E),n(i,r(w,{}),null),n(i,r(l,{get when(){return!b()},get children(){var e=j(),a=e.firstChild;return n(e,r(l,{get when(){return t?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var c=F();return n(c,()=>t?.item?.consigneeInfo?.ybreparto),c})(),k()]}}),a),n(e,r(l,{get when(){return t?.item?.city},get children(){return[(()=>{var c=T();return n(c,()=>t?.item?.city),c})(),k()]}}),a),n(a,()=>t?.item?.province),e}}),null),n(i,r(w,{}),null),n(i,r(l,{get when(){return t?.item?.isPending!=="99"},get fallback(){return(()=>{var e=f();return n(e,r(_,{name:"check_circle",size:22,color:"var(--hrm-palette-tertiary60)"})),e})()},get children(){return[(()=>{var e=f();return e.$$click=u,n(e,r(_,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),(()=>{var e=x(),a=e.firstChild;return e.$$click=()=>{},n(a,r(_,{name:"link",size:22})),h(()=>y(a,"href",`/link-manifest?mId=${t?.item?.ssg_manifest_key}`)),e})(),r(l,{get when(){return A()},get children(){var e=x(),a=e.firstChild;return e.$$click=()=>{},n(a,r(_,{name:"link",size:22,color:"var(--hrm-palette-tertiary60)"})),h(()=>y(a,"href",`/link-manifest-searching?mId=${t?.item?.ssg_manifest_key}`)),e}}),r(l,{get when(){return t?.item?.noBags>0},get children(){var e=H(),a=e.firstChild,c=a.firstChild;return n(c,()=>t?.item?.noBags),e}}),r(l,{get when(){return C?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=f();return e.$$click=I,n(e,r(_,{name:"outline_delete",size:22})),e}})]}}),null),h(()=>B(m,`client_item_box gWXAaj jlytmu manifest ${b()?"isMobile":""}`)),m}})}const q=async t=>{let $={params:{ssg_manifest_key:t?.ssg_manifest_key},actionKey:709003};z.remove(t,function(o,u){o||console.log("manifest successfully removed")}),O.post($,function(o,u){o||console.log("added 2 upload")})};p(["click"]);export{J as default};
