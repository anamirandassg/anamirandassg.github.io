const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-oDSq8ri8.js","assets/index-CMRsWGOd.js","assets/index-DaYrm968.css","assets/SVG-B6VmFfhN.js","assets/Util-B8-DWw-6.js","assets/ShowQRManifest-Ce4Zoj33.js","assets/ShowQRPrintLabel-DRA9nXSa.js","assets/fontkit.es-BHcUmD3g.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-BhTuseMZ.js","assets/Toast-DW6JLgQU.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as v,c as M,a as S,e as r,i as n,S as l,j as b,f as h,k,x as A,g as C,m as B,h as p,t as s}from"./index-CMRsWGOd.js";import{a as R,o as z,H as O}from"./Util-B8-DWw-6.js";import{u as P}from"./debounces-CDzb-NWw.js";import{OpenModal as D}from"./DialogHRM-xj-zv1AF.js";import{A as L}from"./components-BPBifD7v.js";var V=s('<p class=" textleft fullName_consigne">'),j=s("<h5 class=rpto>"),y=s("<div class=vertseparator>"),F=s("<h5>"),H=s('<div class="_dsplFlx bottombx"><h4>'),f=s('<div class="icon_status centerBx">'),x=s('<div class="icon_status centerBx"><a class=centerBx>'),T=s('<div class=""><div class=bottombx><h4 class=centerBx>'),N=s('<div><div class="_dsplFlx topbx centerBx"><div>');const w=g(()=>v(()=>import("./FlexSpace-oDSq8ri8.js"),__vite__mapDeps([0,1,2]))),_=g(()=>v(()=>import("./SVG-B6VmFfhN.js"),__vite__mapDeps([3,1,2,4]))),Q=g(()=>v(()=>import("./ShowQRManifest-Ce4Zoj33.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));function J(t){M({search:"",status:"AERO_33"});const[$,u]=S("");P(u,400);const o=m=>{},d=m=>{let i={};i.id=R(),i.closeEvent=o,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=r(Q,{get item(){return t?.item},get refetch(){return t?.refetch}}),D(i)},I=async m=>{await q(t?.item),t?.refetch()};return r(l,{get when(){return t?.item?.name},get children(){var m=N(),i=m.firstChild,E=i.firstChild;return n(i,r(l,{get when(){return t?.item?.name},get children(){return r(L,{get href(){return`/manifest-detail?mId=${t?.item?.ssg_manifest_key}`},get children(){var e=V();return n(e,()=>t?.item?.name),e}})}}),E),n(i,r(w,{}),null),n(i,r(l,{get when(){return!b()},get children(){var e=H(),a=e.firstChild;return n(e,r(l,{get when(){return t?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var c=j();return n(c,()=>t?.item?.consigneeInfo?.ybreparto),c})(),y()]}}),a),n(e,r(l,{get when(){return t?.item?.city},get children(){return[(()=>{var c=F();return n(c,()=>t?.item?.city),c})(),y()]}}),a),n(a,()=>t?.item?.province),e}}),null),n(i,r(w,{}),null),n(i,r(l,{get when(){return t?.item?.isPending!=="99"},get fallback(){return(()=>{var e=f();return n(e,r(_,{name:"check_circle",size:22,color:"var(--hrm-palette-tertiary60)"})),e})()},get children(){return[(()=>{var e=f();return e.$$click=d,n(e,r(_,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),(()=>{var e=x(),a=e.firstChild;return e.$$click=()=>{},n(a,r(_,{name:"link",size:22})),h(()=>k(a,"href",`/link-manifest?mId=${t?.item?.ssg_manifest_key}`)),e})(),r(l,{get when(){return A()},get children(){var e=x(),a=e.firstChild;return e.$$click=()=>{},n(a,r(_,{name:"link",size:22,color:"var(--hrm-palette-tertiary60)"})),h(()=>k(a,"href",`/link-manifest-searching?mId=${t?.item?.ssg_manifest_key}`)),e}}),r(l,{get when(){return t?.item?.noBags>0},get children(){var e=T(),a=e.firstChild,c=a.firstChild;return n(c,()=>t?.item?.noBags),e}}),r(l,{get when(){return C?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=f();return e.$$click=I,n(e,r(_,{name:"outline_delete",size:22})),e}})]}}),null),h(()=>B(m,`client_item_box gWXAaj jlytmu manifest ${b()?"isMobile":""}`)),m}})}const q=async t=>{let $={params:{ssg_manifest_key:t?.ssg_manifest_key},actionKey:709003};z.remove(t,function(o,d){o||console.log("manifest successfully removed")}),O.post($,function(o,d){o||console.log("added 2 upload")})};p(["click"]);export{J as default};
