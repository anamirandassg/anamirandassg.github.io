const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CuRLxaO5.js","assets/index-BRFxLudr.js","assets/index-BmzAZVve.css","assets/SVG-BxnnaVKE.js","assets/ShowQRManifest-Cj2s0t1Z.js","assets/ShowQRPrintLabel-DF1MHO38.js","assets/PDFButton-BZaI0SDq.js","assets/fontkit.es-Bc8gA_Rh.js","assets/InitPrintServices-jEkvnauw.js","assets/Util-D-2Q9NLa.js","assets/Toast-DYBFY36v.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as f,c as k,a as I,d as r,i as n,S as s,g as v,e as $,q as A,m as C,f as M,h as S,t as l}from"./index-BRFxLudr.js";import{g as B,b as p,f as R}from"./Util-D-2Q9NLa.js";import{u as O}from"./debounces-CQSl4_C6.js";import{OpenModal as z}from"./DialogHRM-DHPq6eoe.js";import{A as P}from"./components-eTEIm4rT.js";var q=l('<p class=" textleft fullName_consigne">'),D=l("<h5 class=rpto>"),y=l("<div class=vertseparator>"),Q=l("<h5>"),V=l('<div class="_dsplFlx bottombx"><h4>'),h=l('<div class="icon_status centerBx">'),F=l('<div class="icon_status centerBx"><a class=centerBx>'),L=l('<div class=""><div class=bottombx><h4 class=centerBx>'),T=l('<div><div class="_dsplFlx topbx centerBx"><div>');const b=g(()=>f(()=>import("./FlexSpace-CuRLxaO5.js"),__vite__mapDeps([0,1,2]))),u=g(()=>f(()=>import("./SVG-BxnnaVKE.js"),__vite__mapDeps([3,1,2]))),j=g(()=>f(()=>import("./ShowQRManifest-Cj2s0t1Z.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));function K(t){k({search:"",status:"AERO_33"});const[o,d]=I("");O(d,400);const _=m=>{},x=m=>{let a={};a.id=B(),a.closeEvent=_,a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=r(j,{get item(){return t?.item},get refetch(){return t?.refetch}}),z(a)},w=async m=>{await H(t?.item?.ssg_manifest_key),t?.refetch()};return r(s,{get when(){return t?.item?.name},get children(){var m=T(),a=m.firstChild,E=a.firstChild;return n(a,r(s,{get when(){return t?.item?.name},get children(){return r(P,{get href(){return`/manifest-detail?mId=${t?.item?.ssg_manifest_key}`},get children(){var e=q();return n(e,()=>t?.item?.name),e}})}}),E),n(a,r(b,{}),null),n(a,r(s,{get when(){return!v()},get children(){var e=V(),i=e.firstChild;return n(e,r(s,{get when(){return t?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var c=D();return n(c,()=>t?.item?.consigneeInfo?.ybreparto),c})(),y()]}}),i),n(e,r(s,{get when(){return t?.item?.city},get children(){return[(()=>{var c=Q();return n(c,()=>t?.item?.city),c})(),y()]}}),i),n(i,()=>t?.item?.province),e}}),null),n(a,r(b,{}),null),n(a,r(s,{get when(){return t?.item?.isPending!=="99"},get fallback(){return(()=>{var e=h();return n(e,r(u,{name:"check_circle",size:22,color:"var(--hrm-palette-tertiary60)"})),e})()},get children(){return[(()=>{var e=h();return e.$$click=x,n(e,r(u,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),(()=>{var e=F(),i=e.firstChild;return e.$$click=()=>{},n(i,r(u,{name:"link",size:22})),$(()=>A(i,"href",`/link-manifest?mId=${t?.item?.ssg_manifest_key}`)),e})(),r(s,{get when(){return t?.item?.noBags>0},get children(){var e=L(),i=e.firstChild,c=i.firstChild;return n(c,()=>t?.item?.noBags),e}}),r(s,{get when(){return C?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=h();return e.$$click=w,n(e,r(u,{name:"outline_delete",size:22})),e}})]}}),null),$(()=>M(m,`client_item_box gWXAaj jlytmu manifest ${v()?"isMobile":""}`)),m}})}const H=async t=>{let o={params:{ssg_manifest_key:t}},d=p(709003);o={...o,...d};const _=await R(o);return console.log(o),console.log(_),_?.data?.error?{}:_?.data};S(["click"]);export{K as default};