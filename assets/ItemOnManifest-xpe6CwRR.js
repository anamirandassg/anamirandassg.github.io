const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DOtTZnFX.js","assets/index-BGOIoX1m.js","assets/index-DGHHyjai.css","assets/SVG-CwIR7Sbw.js","assets/index-Ci0zXM0r.js","assets/ShowQRManifest-CcoZ2hqE.js","assets/globalSignal-DReTlKO1.js","assets/ShowQRPrintLabel-DQih0po7.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CprHcwF4.js","assets/Util-uEfv1z7O.js","assets/Toast-B5drWTWD.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as h,c as S,a as k,d as n,e as A,i as r,S as c,k as B,f as C,g as M,n as R,t as s}from"./index-BGOIoX1m.js";import{g as O,b as p,f as z}from"./Util-uEfv1z7O.js";import{u as D}from"./debounces-DPu4ciPj.js";import{OpenModal as P}from"./DialogHRM-wi4aFdap.js";import{i as x}from"./globalSignal-DReTlKO1.js";import{A as Q}from"./components-CtaFX2Pr.js";import"./index-Ci0zXM0r.js";var V=s('<p class=" textleft fullName_consigne">'),q=s("<h5 class=rpto>"),y=s("<div class=vertseparator>"),F=s("<h5>"),L=s('<div class="_dsplFlx bottombx"><h4>'),T=s('<div class=""><div class=bottombx><h4 class=centerBx>'),j=s('<div class="icon_status centerBx">'),H=s('<div><div class="_dsplFlx topbx centerBx"><div></div><div class="icon_status centerBx"></div><div class="icon_status centerBx"><a class=centerBx>');const E=g(()=>h(()=>import("./FlexSpace-DOtTZnFX.js"),__vite__mapDeps([0,1,2]))),v=g(()=>h(()=>import("./SVG-CwIR7Sbw.js"),__vite__mapDeps([3,1,2,4]))),N=g(()=>h(()=>import("./ShowQRManifest-CcoZ2hqE.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function ee(t){S({search:"",status:"AERO_33"});const[_,u]=k("");D(u,400);const d=m=>{},w=m=>{let i={};i.id=O(),i.closeEvent=d,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=n(N,{get item(){return t?.item},get refetch(){return t?.refetch}}),P(i)},I=async m=>{await G(t?.item?.ssg_manifest_key),t?.refetch()};return n(c,{get when(){return t?.item?.name},get children(){var m=H(),i=m.firstChild,f=i.firstChild,o=f.nextSibling,$=o.nextSibling,b=$.firstChild;return r(i,n(c,{get when(){return t?.item?.name},get children(){return n(Q,{get href(){return`/manifest-detail?mId=${t?.item?.ssg_manifest_key}`},get children(){var e=V();return r(e,()=>t?.item?.name),e}})}}),f),r(i,n(E,{}),o),r(i,n(c,{get when(){return!x()},get children(){var e=L(),l=e.firstChild;return r(e,n(c,{get when(){return t?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var a=q();return r(a,()=>t?.item?.consigneeInfo?.ybreparto),a})(),y()]}}),l),r(e,n(c,{get when(){return t?.item?.city},get children(){return[(()=>{var a=F();return r(a,()=>t?.item?.city),a})(),y()]}}),l),r(l,()=>t?.item?.province),e}}),o),r(i,n(E,{}),o),o.$$click=w,r(o,n(v,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),$.$$click=()=>{},r(b,n(v,{name:"link",size:22})),r(i,n(c,{get when(){return t?.item?.noBags>0},get children(){var e=T(),l=e.firstChild,a=l.firstChild;return r(a,()=>t?.item?.noBags),e}}),null),r(i,n(c,{get when(){return B?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=j();return e.$$click=I,r(e,n(v,{name:"outline_delete",size:22})),e}}),null),C(e=>{var l=`client_item_box gWXAaj jlytmu manifest ${x()?"isMobile":""}`,a=`/link-manifest?mId=${t?.item?.ssg_manifest_key}`;return l!==e.e&&M(m,e.e=l),a!==e.t&&R(b,"href",e.t=a),e},{e:void 0,t:void 0}),m}})}const G=async t=>{let _={params:{ssg_manifest_key:t}},u=p(709003);_={..._,...u};const d=await z(_);return console.log(_),console.log(d),d?.data?.error?{}:d?.data};A(["click"]);export{ee as default};
