const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DaEmXyNl.js","assets/index-Bw9zjTY_.js","assets/index-lCkr9jrN.css","assets/SVG-BaZuCb4a.js","assets/Util-D2O-IqKB.js","assets/ShowQRManifest-DEYELyhZ.js","assets/ShowQRPrintLabel-3TqYO2zP.js","assets/PDFButton-85Y0gBbC.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-AFz-JHBR.js","assets/InitPrintServices-DgotkDNu.js","assets/Toast-CacXzZdD.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as v,c as M,a as S,d as r,i as n,S as l,g as b,e as h,q as y,v as A,m as B,f as C,h as p,t as s}from"./index-Bw9zjTY_.js";import{g as R,i as z,B as O}from"./Util-D2O-IqKB.js";import{u as P}from"./debounces-BAQxtSR9.js";import{OpenModal as D}from"./DialogHRM-C941CJHx.js";import{A as L}from"./components-FWXCDMiW.js";var V=s('<p class=" textleft fullName_consigne">'),F=s("<h5 class=rpto>"),k=s("<div class=vertseparator>"),T=s("<h5>"),j=s('<div class="_dsplFlx bottombx"><h4>'),f=s('<div class="icon_status centerBx">'),x=s('<div class="icon_status centerBx"><a class=centerBx>'),q=s('<div class=""><div class=bottombx><h4 class=centerBx>'),H=s('<div><div class="_dsplFlx topbx centerBx"><div>');const w=g(()=>v(()=>import("./FlexSpace-DaEmXyNl.js"),__vite__mapDeps([0,1,2]))),_=g(()=>v(()=>import("./SVG-BaZuCb4a.js"),__vite__mapDeps([3,1,2,4]))),N=g(()=>v(()=>import("./ShowQRManifest-DEYELyhZ.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function J(t){M({search:"",status:"AERO_33"});const[$,d]=S("");P(d,400);const o=m=>{},u=m=>{let i={};i.id=R(),i.closeEvent=o,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=r(N,{get item(){return t?.item},get refetch(){return t?.refetch}}),D(i)},I=async m=>{await Q(t?.item),t?.refetch()};return r(l,{get when(){return t?.item?.name},get children(){var m=H(),i=m.firstChild,E=i.firstChild;return n(i,r(l,{get when(){return t?.item?.name},get children(){return r(L,{get href(){return`/manifest-detail?mId=${t?.item?.ssg_manifest_key}`},get children(){var e=V();return n(e,()=>t?.item?.name),e}})}}),E),n(i,r(w,{}),null),n(i,r(l,{get when(){return!b()},get children(){var e=j(),a=e.firstChild;return n(e,r(l,{get when(){return t?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var c=F();return n(c,()=>t?.item?.consigneeInfo?.ybreparto),c})(),k()]}}),a),n(e,r(l,{get when(){return t?.item?.city},get children(){return[(()=>{var c=T();return n(c,()=>t?.item?.city),c})(),k()]}}),a),n(a,()=>t?.item?.province),e}}),null),n(i,r(w,{}),null),n(i,r(l,{get when(){return t?.item?.isPending!=="99"},get fallback(){return(()=>{var e=f();return n(e,r(_,{name:"check_circle",size:22,color:"var(--hrm-palette-tertiary60)"})),e})()},get children(){return[(()=>{var e=f();return e.$$click=u,n(e,r(_,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),(()=>{var e=x(),a=e.firstChild;return e.$$click=()=>{},n(a,r(_,{name:"link",size:22})),h(()=>y(a,"href",`/link-manifest?mId=${t?.item?.ssg_manifest_key}`)),e})(),r(l,{get when(){return A()},get children(){var e=x(),a=e.firstChild;return e.$$click=()=>{},n(a,r(_,{name:"link",size:22,color:"var(--hrm-palette-tertiary60)"})),h(()=>y(a,"href",`/link-manifest-searching?mId=${t?.item?.ssg_manifest_key}`)),e}}),r(l,{get when(){return t?.item?.noBags>0},get children(){var e=q(),a=e.firstChild,c=a.firstChild;return n(c,()=>t?.item?.noBags),e}}),r(l,{get when(){return B?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=f();return e.$$click=I,n(e,r(_,{name:"outline_delete",size:22})),e}})]}}),null),h(()=>C(m,`client_item_box gWXAaj jlytmu manifest ${b()?"isMobile":""}`)),m}})}const Q=async t=>{let $={params:{ssg_manifest_key:t?.ssg_manifest_key},actionKey:709003};z.remove(t,function(o,u){o||console.log("manifest successfully removed")}),O.post($,function(o,u){o||console.log("added 2 upload")})};p(["click"]);export{J as default};
