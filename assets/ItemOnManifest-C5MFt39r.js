const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-C1DWzlDI.js","assets/index-BGxHyqTm.js","assets/index-BUHqikRO.css","assets/SVG-Kbn11ive.js","assets/index-Ci0zXM0r.js","assets/ShowQRManifest-C2q8f3R-.js","assets/globalSignal-CnHTewJd.js","assets/ShowQRPrintLabel-C6EeIqcL.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-NgpjRc8z.js","assets/Util-DErZaF9J.js","assets/Toast-CyODNRbC.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as f,c as E,a as I,d as r,e as p,i as n,S as s,f as v,n as A,k as C,g as M,t as i}from"./index-BGxHyqTm.js";import{g as S,b as B,f as R}from"./Util-DErZaF9J.js";import{u as O}from"./debounces-IlVTt_TR.js";import{OpenModal as z}from"./DialogHRM-Dmu10hHA.js";import{i as $}from"./globalSignal-CnHTewJd.js";import{A as P}from"./components-BPNoFzRN.js";import"./index-Ci0zXM0r.js";var D=i('<p class=" textleft fullName_consigne">'),Q=i("<h5 class=rpto>"),y=i("<div class=vertseparator>"),V=i("<h5>"),q=i('<div class="_dsplFlx bottombx"><h4>'),h=i('<div class="icon_status centerBx">'),F=i('<div class="icon_status centerBx"><a class=centerBx>'),L=i('<div class=""><div class=bottombx><h4 class=centerBx>'),T=i('<div><div class="_dsplFlx topbx centerBx"><div>');const b=g(()=>f(()=>import("./FlexSpace-C1DWzlDI.js"),__vite__mapDeps([0,1,2]))),u=g(()=>f(()=>import("./SVG-Kbn11ive.js"),__vite__mapDeps([3,1,2,4]))),j=g(()=>f(()=>import("./ShowQRManifest-C2q8f3R-.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function Y(t){E({search:"",status:"AERO_33"});const[o,d]=I("");O(d,400);const _=m=>{},x=m=>{let a={};a.id=S(),a.closeEvent=_,a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=r(j,{get item(){return t?.item},get refetch(){return t?.refetch}}),z(a)},k=async m=>{await H(t?.item?.ssg_manifest_key),t?.refetch()};return r(s,{get when(){return t?.item?.name},get children(){var m=T(),a=m.firstChild,w=a.firstChild;return n(a,r(s,{get when(){return t?.item?.name},get children(){return r(P,{get href(){return`/manifest-detail?mId=${t?.item?.ssg_manifest_key}`},get children(){var e=D();return n(e,()=>t?.item?.name),e}})}}),w),n(a,r(b,{}),null),n(a,r(s,{get when(){return!$()},get children(){var e=q(),l=e.firstChild;return n(e,r(s,{get when(){return t?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var c=Q();return n(c,()=>t?.item?.consigneeInfo?.ybreparto),c})(),y()]}}),l),n(e,r(s,{get when(){return t?.item?.city},get children(){return[(()=>{var c=V();return n(c,()=>t?.item?.city),c})(),y()]}}),l),n(l,()=>t?.item?.province),e}}),null),n(a,r(b,{}),null),n(a,r(s,{get when(){return t?.item?.isPending!=="99"},get fallback(){return(()=>{var e=h();return n(e,r(u,{name:"check_circle",size:22,color:"var(--hrm-palette-tertiary60)"})),e})()},get children(){return[(()=>{var e=h();return e.$$click=x,n(e,r(u,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),(()=>{var e=F(),l=e.firstChild;return e.$$click=()=>{},n(l,r(u,{name:"link",size:22})),v(()=>A(l,"href",`/link-manifest?mId=${t?.item?.ssg_manifest_key}`)),e})(),r(s,{get when(){return t?.item?.noBags>0},get children(){var e=L(),l=e.firstChild,c=l.firstChild;return n(c,()=>t?.item?.noBags),e}}),r(s,{get when(){return C?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=h();return e.$$click=k,n(e,r(u,{name:"outline_delete",size:22})),e}})]}}),null),v(()=>M(m,`client_item_box gWXAaj jlytmu manifest ${$()?"isMobile":""}`)),m}})}const H=async t=>{let o={params:{ssg_manifest_key:t}},d=B(709003);o={...o,...d};const _=await R(o);return console.log(o),console.log(_),_?.data?.error?{}:_?.data};p(["click"]);export{Y as default};
