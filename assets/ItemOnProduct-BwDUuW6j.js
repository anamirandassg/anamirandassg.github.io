const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-B7Y5IyCv.js","assets/index-uMCGT5ZP.js","assets/index-BmzAZVve.css","assets/SVG-BiI02H6O.js","assets/index-Ci0zXM0r.js","assets/ShowQRProducts-BJ58FOXX.js","assets/ShowQRPrintLabel-wY02eTN7.js","assets/PDFButton-B_0lS8EG.js","assets/fontkit.es-BqrvdTa9.js","assets/InitPrintServices-DzdLVHm-.js","assets/Util-C77m685E.js","assets/Toast-C6E6n1zC.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as u,_,c as C,a as O,d as r,i,S as n,e as h,q as P,g as d,m as R,f as $,h as B,t as a}from"./index-uMCGT5ZP.js";import{g as f}from"./Util-C77m685E.js";import{u as M}from"./debounces-DyscD__y.js";import{OpenModal as D}from"./DialogHRM-NuQt6Dwg.js";import{g as k,a as F}from"./handelImagesServices-DHI9x9PO.js";import{OpenToast as T}from"./Toast-C6E6n1zC.js";import{A as U}from"./components-BI6240Qg.js";import"./index-Ci0zXM0r.js";import"./browser-image-compression-BVJ4p9S0.js";var V=a("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),z=a('<p class=" textleft fullName_consigne">'),L=a("<h5 class=rpto>"),p=a("<div class=vertseparator>"),N=a('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),x=a('<div class="icon_status centerBx">'),j=a("<h5>"),q=a('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const b=u(()=>_(()=>import("./FlexSpace-B7Y5IyCv.js"),__vite__mapDeps([0,1,2]))),I=u(()=>_(()=>import("./SVG-BiI02H6O.js"),__vite__mapDeps([3,1,2,4]))),H=u(()=>_(()=>import("./ShowQRProducts-BJ58FOXX.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function re(t){C({search:"",status:"AERO_33"});const[Q,w]=O("");M(w,400);const E=s=>{},y=s=>{let l={};l.id=f(),l.closeEvent=E,l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=r(H,{get item(){return t?.item},get refetch(){return t?.refetch}}),D(l)},A=async s=>{T({text:"No se puede eliminar",timeout:3500,theme:"red",id:f()})},g=()=>t?.item?.productImageUrl?k()+F()+"/"+t?.item?.productImageUrl:null;return r(n,{get when(){return t?.item?.name},get children(){var s=q(),l=s.firstChild,m=l.firstChild,v=m.firstChild,S=m.nextSibling;return i(s,r(n,{get when(){return g()},get children(){var e=V(),o=e.firstChild;return h(()=>P(o,"src",g())),e}}),l),i(v,r(n,{get when(){return t?.item?.name},get children(){return r(U,{get href(){return`/product-detail?mId=${t?.item?.ssg_product_key}`},get children(){var e=z();return i(e,()=>t?.item?.name?.toUpperCase()),e}})}})),i(m,r(b,{}),null),i(m,r(n,{get when(){return!d()},get children(){var e=N(),o=e.firstChild;return i(e,r(n,{get when(){return t?.item?.unit},get children(){return[(()=>{var c=L();return i(c,()=>t?.item?.unit),c})(),p()]}}),o),i(o,()=>t?.item?.code),e}}),null),i(m,r(n,{get when(){return!d()},get children(){return[r(b,{}),(()=>{var e=x();return e.$$click=y,i(e,r(I,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),r(n,{get when(){return R?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=x();return e.$$click=A,i(e,r(I,{name:"outline_delete",size:22})),e}})]}}),null),i(S,r(n,{get when(){return t?.item?.category},get children(){return[(()=>{var e=j();return i(e,()=>t?.item?.category),e})(),p()]}})),h(e=>{var o=`client_item_box gWXAaj jlytmu product centerBx ${d()?"isMobile":""}`,c=`${d()?"":"tr_bar_60"} centerBx`;return o!==e.e&&$(s,e.e=o),c!==e.t&&$(v,e.t=c),e},{e:void 0,t:void 0}),s}})}B(["click"]);export{re as default};
