const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BYemyLgD.js","assets/index-BFD1kMWA.js","assets/index-BmzAZVve.css","assets/SVG-BU8pAHIr.js","assets/index-Ci0zXM0r.js","assets/ShowQRManifest-CfLrR3a7.js","assets/ShowQRPrintLabel-qu-UgZ4Q.js","assets/PDFButton-B_0lS8EG.js","assets/fontkit.es-BqrvdTa9.js","assets/InitPrintServices-8lwggMm8.js","assets/Util-BwLP_5oJ.js","assets/Toast-CZMyYNuW.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as f,c as k,a as I,d as r,i as n,S as s,g as v,e as $,q as A,m as C,f as M,h as S,t as i}from"./index-BFD1kMWA.js";import{g as p,b as B,f as R}from"./Util-BwLP_5oJ.js";import{u as O}from"./debounces-iOMNtc8n.js";import{OpenModal as z}from"./DialogHRM-D_1jeXDe.js";import{A as P}from"./components-Diy-UkVs.js";import"./index-Ci0zXM0r.js";var q=i('<p class=" textleft fullName_consigne">'),D=i("<h5 class=rpto>"),y=i("<div class=vertseparator>"),Q=i("<h5>"),V=i('<div class="_dsplFlx bottombx"><h4>'),h=i('<div class="icon_status centerBx">'),F=i('<div class="icon_status centerBx"><a class=centerBx>'),L=i('<div class=""><div class=bottombx><h4 class=centerBx>'),T=i('<div><div class="_dsplFlx topbx centerBx"><div>');const b=g(()=>f(()=>import("./FlexSpace-BYemyLgD.js"),__vite__mapDeps([0,1,2]))),u=g(()=>f(()=>import("./SVG-BU8pAHIr.js"),__vite__mapDeps([3,1,2,4]))),j=g(()=>f(()=>import("./ShowQRManifest-CfLrR3a7.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function U(t){k({search:"",status:"AERO_33"});const[o,d]=I("");O(d,400);const _=m=>{},x=m=>{let a={};a.id=p(),a.closeEvent=_,a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=r(j,{get item(){return t?.item},get refetch(){return t?.refetch}}),z(a)},w=async m=>{await H(t?.item?.ssg_manifest_key),t?.refetch()};return r(s,{get when(){return t?.item?.name},get children(){var m=T(),a=m.firstChild,E=a.firstChild;return n(a,r(s,{get when(){return t?.item?.name},get children(){return r(P,{get href(){return`/manifest-detail?mId=${t?.item?.ssg_manifest_key}`},get children(){var e=q();return n(e,()=>t?.item?.name),e}})}}),E),n(a,r(b,{}),null),n(a,r(s,{get when(){return!v()},get children(){var e=V(),l=e.firstChild;return n(e,r(s,{get when(){return t?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var c=D();return n(c,()=>t?.item?.consigneeInfo?.ybreparto),c})(),y()]}}),l),n(e,r(s,{get when(){return t?.item?.city},get children(){return[(()=>{var c=Q();return n(c,()=>t?.item?.city),c})(),y()]}}),l),n(l,()=>t?.item?.province),e}}),null),n(a,r(b,{}),null),n(a,r(s,{get when(){return t?.item?.isPending!=="99"},get fallback(){return(()=>{var e=h();return n(e,r(u,{name:"check_circle",size:22,color:"var(--hrm-palette-tertiary60)"})),e})()},get children(){return[(()=>{var e=h();return e.$$click=x,n(e,r(u,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),(()=>{var e=F(),l=e.firstChild;return e.$$click=()=>{},n(l,r(u,{name:"link",size:22})),$(()=>A(l,"href",`/link-manifest?mId=${t?.item?.ssg_manifest_key}`)),e})(),r(s,{get when(){return t?.item?.noBags>0},get children(){var e=L(),l=e.firstChild,c=l.firstChild;return n(c,()=>t?.item?.noBags),e}}),r(s,{get when(){return C?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=h();return e.$$click=w,n(e,r(u,{name:"outline_delete",size:22})),e}})]}}),null),$(()=>M(m,`client_item_box gWXAaj jlytmu manifest ${v()?"isMobile":""}`)),m}})}const H=async t=>{let o={params:{ssg_manifest_key:t}},d=B(709003);o={...o,...d};const _=await R(o);return console.log(o),console.log(_),_?.data?.error?{}:_?.data};S(["click"]);export{U as default};
