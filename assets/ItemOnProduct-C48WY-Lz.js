const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DUMv-Tf6.js","assets/index-DiKAjaIm.js","assets/index-PRcoyGS_.css","assets/SVG-MJvrE44Q.js","assets/index-Ci0zXM0r.js","assets/ShowQRProducts-D56XeBRi.js","assets/globalSignal-QKI7bfvh.js","assets/ShowQRPrintLabel-3Rt3onT2.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-BbVI7Xg0.js","assets/Util-D886uaAp.js","assets/Toast-DXw_AnMu.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as u,_,c as C,a as O,d as r,e as P,i,S as n,f as h,n as R,k as B,g as $,t as a}from"./index-DiKAjaIm.js";import{g as f}from"./Util-D886uaAp.js";import{u as M}from"./debounces-BwpfumkX.js";import{OpenModal as k}from"./DialogHRM-BEyfegnm.js";import{i as d}from"./globalSignal-QKI7bfvh.js";import{g as D,a as F}from"./handelImagesServices-DJvptNh5.js";import{OpenToast as T}from"./Toast-DXw_AnMu.js";import{A as U}from"./components-CnZp3Ek-.js";import"./index-Ci0zXM0r.js";import"./browser-image-compression-BVJ4p9S0.js";var V=a("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),z=a('<p class=" textleft fullName_consigne">'),L=a("<h5 class=rpto>"),p=a("<div class=vertseparator>"),N=a('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),x=a('<div class="icon_status centerBx">'),j=a("<h5>"),H=a('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const b=u(()=>_(()=>import("./FlexSpace-DUMv-Tf6.js"),__vite__mapDeps([0,1,2]))),I=u(()=>_(()=>import("./SVG-MJvrE44Q.js"),__vite__mapDeps([3,1,2,4]))),Q=u(()=>_(()=>import("./ShowQRProducts-D56XeBRi.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function ie(t){C({search:"",status:"AERO_33"});const[q,w]=O("");M(w,400);const E=o=>{},y=o=>{let l={};l.id=f(),l.closeEvent=E,l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=r(Q,{get item(){return t?.item},get refetch(){return t?.refetch}}),k(l)},A=async o=>{T({text:"No se puede eliminar",timeout:3500,theme:"red",id:f()})},g=()=>t?.item?.productImageUrl?D()+F()+"/"+t?.item?.productImageUrl:null;return r(n,{get when(){return t?.item?.name},get children(){var o=H(),l=o.firstChild,m=l.firstChild,v=m.firstChild,S=m.nextSibling;return i(o,r(n,{get when(){return g()},get children(){var e=V(),s=e.firstChild;return h(()=>R(s,"src",g())),e}}),l),i(v,r(n,{get when(){return t?.item?.name},get children(){return r(U,{get href(){return`/product-detail?mId=${t?.item?.ssg_product_key}`},get children(){var e=z();return i(e,()=>t?.item?.name?.toUpperCase()),e}})}})),i(m,r(b,{}),null),i(m,r(n,{get when(){return!d()},get children(){var e=N(),s=e.firstChild;return i(e,r(n,{get when(){return t?.item?.unit},get children(){return[(()=>{var c=L();return i(c,()=>t?.item?.unit),c})(),p()]}}),s),i(s,()=>t?.item?.code),e}}),null),i(m,r(n,{get when(){return!d()},get children(){return[r(b,{}),(()=>{var e=x();return e.$$click=y,i(e,r(I,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),r(n,{get when(){return B?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=x();return e.$$click=A,i(e,r(I,{name:"outline_delete",size:22})),e}})]}}),null),i(S,r(n,{get when(){return t?.item?.category},get children(){return[(()=>{var e=j();return i(e,()=>t?.item?.category),e})(),p()]}})),h(e=>{var s=`client_item_box gWXAaj jlytmu product centerBx ${d()?"isMobile":""}`,c=`${d()?"":"tr_bar_60"} centerBx`;return s!==e.e&&$(o,e.e=s),c!==e.t&&$(v,e.t=c),e},{e:void 0,t:void 0}),o}})}P(["click"]);export{ie as default};
