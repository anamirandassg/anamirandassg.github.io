const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D8CPn30t.js","assets/index-CHpRMMcL.js","assets/index-lCkr9jrN.css","assets/SVG-CJrcVamg.js","assets/ShowQRManifest-Df-G6ijQ.js","assets/ShowQRPrintLabel-BLxqdd2Q.js","assets/PDFButton-C77ST4HX.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-CBL7hhp4.js","assets/InitPrintServices-CfDhfV0j.js","assets/Toast-DYKCeSqJ.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as v,c as A,a as M,d as n,i as r,S as l,g as b,e as h,A as y,E as S,n as C,f as B,h as R,t as s,j as p,N as z,ad as O}from"./index-CHpRMMcL.js";import{u as P}from"./debounces-DY3aBeyT.js";import{OpenModal as D}from"./DialogHRM-B26Xh0E8.js";import{A as L}from"./components-BXMc9fiz.js";var V=s('<p class=" textleft fullName_consigne">'),j=s("<h5 class=rpto>"),k=s("<div class=vertseparator>"),F=s("<h5>"),N=s('<div class="_dsplFlx bottombx"><h4>'),f=s('<div class="icon_status centerBx">'),x=s('<div class="icon_status centerBx"><a class=centerBx>'),T=s('<div class=""><div class=bottombx><h4 class=centerBx>'),H=s('<div><div class="_dsplFlx topbx centerBx"><div>');const w=g(()=>v(()=>import("./FlexSpace-D8CPn30t.js"),__vite__mapDeps([0,1,2]))),_=g(()=>v(()=>import("./SVG-CJrcVamg.js"),__vite__mapDeps([3,1,2]))),Q=g(()=>v(()=>import("./ShowQRManifest-Df-G6ijQ.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));function X(t){A({search:"",status:"AERO_33"});const[$,d]=M("");P(d,400);const o=m=>{},u=m=>{let a={};a.id=p(),a.closeEvent=o,a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=n(Q,{get item(){return t?.item},get refetch(){return t?.refetch}}),D(a)},E=async m=>{await q(t?.item),t?.refetch()};return n(l,{get when(){return t?.item?.name},get children(){var m=H(),a=m.firstChild,I=a.firstChild;return r(a,n(l,{get when(){return t?.item?.name},get children(){return n(L,{get href(){return`/manifest-detail?mId=${t?.item?.ssg_manifest_key}`},get children(){var e=V();return r(e,()=>t?.item?.name),e}})}}),I),r(a,n(w,{}),null),r(a,n(l,{get when(){return!b()},get children(){var e=N(),i=e.firstChild;return r(e,n(l,{get when(){return t?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var c=j();return r(c,()=>t?.item?.consigneeInfo?.ybreparto),c})(),k()]}}),i),r(e,n(l,{get when(){return t?.item?.city},get children(){return[(()=>{var c=F();return r(c,()=>t?.item?.city),c})(),k()]}}),i),r(i,()=>t?.item?.province),e}}),null),r(a,n(w,{}),null),r(a,n(l,{get when(){return t?.item?.isPending!=="99"},get fallback(){return(()=>{var e=f();return r(e,n(_,{name:"check_circle",size:22,color:"var(--hrm-palette-tertiary60)"})),e})()},get children(){return[(()=>{var e=f();return e.$$click=u,r(e,n(_,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),(()=>{var e=x(),i=e.firstChild;return e.$$click=()=>{},r(i,n(_,{name:"link",size:22})),h(()=>y(i,"href",`/link-manifest?mId=${t?.item?.ssg_manifest_key}`)),e})(),n(l,{get when(){return S()},get children(){var e=x(),i=e.firstChild;return e.$$click=()=>{},r(i,n(_,{name:"link",size:22,color:"var(--hrm-palette-tertiary60)"})),h(()=>y(i,"href",`/link-manifest-searching?mId=${t?.item?.ssg_manifest_key}`)),e}}),n(l,{get when(){return t?.item?.noBags>0},get children(){var e=T(),i=e.firstChild,c=i.firstChild;return r(c,()=>t?.item?.noBags),e}}),n(l,{get when(){return C?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=f();return e.$$click=E,r(e,n(_,{name:"outline_delete",size:22})),e}})]}}),null),h(()=>B(m,`client_item_box gWXAaj jlytmu manifest ${b()?"isMobile":""}`)),m}})}const q=async t=>{let $={params:{ssg_manifest_key:t?.ssg_manifest_key},actionKey:709003};z.remove(t,function(o,u){o||console.log("manifest successfully removed")}),O.post($,function(o,u){o||console.log("added 2 upload")})};R(["click"]);export{X as default};
