const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DE1c1YqA.js","assets/index-Bi7WmJMv.js","assets/index-lCkr9jrN.css","assets/SVG-t32KrDyi.js","assets/ShowQRProducts-CNL6sFW3.js","assets/ShowQRPrintLabel-X886Rxl7.js","assets/PDFButton-Dq9myv3J.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-nDm7vnFZ.js","assets/InitPrintServices-sqkKOuss.js","assets/Toast-6yD9BVdp.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as u,_,c as C,a as O,d as r,i as l,S as n,e as h,A as P,g as d,n as R,f as $,h as B,t as a,j as f}from"./index-Bi7WmJMv.js";import{u as M}from"./debounces-BCqOsi4E.js";import{OpenModal as D}from"./DialogHRM-C7nnZ4rp.js";import{g as k,a as F}from"./handelImagesServices-KDygOGRA.js";import{OpenToast as T}from"./Toast-6yD9BVdp.js";import{A as U}from"./components-B0FII2L_.js";import"./browser-image-compression-BVJ4p9S0.js";var V=a("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),j=a('<p class=" textleft fullName_consigne">'),z=a("<h5 class=rpto>"),x=a("<div class=vertseparator>"),L=a('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),b=a('<div class="icon_status centerBx">'),N=a("<h5>"),H=a('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const p=u(()=>_(()=>import("./FlexSpace-DE1c1YqA.js"),__vite__mapDeps([0,1,2]))),I=u(()=>_(()=>import("./SVG-t32KrDyi.js"),__vite__mapDeps([3,1,2]))),Q=u(()=>_(()=>import("./ShowQRProducts-CNL6sFW3.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));function ee(t){C({search:"",status:"AERO_33"});const[q,w]=O("");M(w,400);const E=s=>{},A=s=>{let i={};i.id=f(),i.closeEvent=E,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=r(Q,{get item(){return t?.item},get refetch(){return t?.refetch}}),D(i)},y=async s=>{T({text:"No se puede eliminar",timeout:3500,theme:"red",id:f()})},g=()=>t?.item?.productImageUrl?k()+F()+"/"+t?.item?.productImageUrl:null;return r(n,{get when(){return t?.item?.name},get children(){var s=H(),i=s.firstChild,c=i.firstChild,v=c.firstChild,S=c.nextSibling;return l(s,r(n,{get when(){return g()},get children(){var e=V(),o=e.firstChild;return h(()=>P(o,"src",g())),e}}),i),l(v,r(n,{get when(){return t?.item?.name},get children(){return r(U,{get href(){return`/product-detail?mId=${t?.item?.ssg_product_key}`},get children(){var e=j();return l(e,()=>t?.item?.name?.toUpperCase()),e}})}})),l(c,r(p,{}),null),l(c,r(n,{get when(){return!d()},get children(){var e=L(),o=e.firstChild;return l(e,r(n,{get when(){return t?.item?.unit},get children(){return[(()=>{var m=z();return l(m,()=>t?.item?.unit),m})(),x()]}}),o),l(o,()=>t?.item?.code),e}}),null),l(c,r(n,{get when(){return!d()},get children(){return[r(p,{}),(()=>{var e=b();return e.$$click=A,l(e,r(I,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),r(n,{get when(){return R?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=b();return e.$$click=y,l(e,r(I,{name:"outline_delete",size:22})),e}})]}}),null),l(S,r(n,{get when(){return t?.item?.category},get children(){return[(()=>{var e=N();return l(e,()=>t?.item?.category),e})(),x()]}})),h(e=>{var o=`client_item_box gWXAaj jlytmu product centerBx ${d()?"isMobile":""}`,m=`${d()?"":"tr_bar_60"} centerBx`;return o!==e.e&&$(s,e.e=o),m!==e.t&&$(v,e.t=m),e},{e:void 0,t:void 0}),s}})}B(["click"]);export{ee as default};
