const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-KKfLKHAK.js","assets/index-1gVGLN4L.js","assets/index-DEEWbFNK.css","assets/SVG-62f2Cd9T.js","assets/Util-CKCUAuLU.js","assets/ShowQRProducts-Djo69Ewe.js","assets/ShowQRPrintLabel-BsdGfBQk.js","assets/PDFButton-DzKPI8bv.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-xY8_R9eo.js","assets/InitPrintServices-Cu6eu-iZ.js","assets/Toast-DDJEGs_z.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as v,c as y,a as E,d as r,i,S as a,e as b,s as P,f as d,n as S,g as $,h as U,t as n}from"./index-1gVGLN4L.js";import{b as B}from"./Util-CKCUAuLU.js";import{u as O}from"./debounces-CoCRCFn1.js";import"./DialogHRM-BtE96Xvz.js";import{g as R,a as k}from"./handelImagesServices-CFaw1msT.js";import{OpenToast as L}from"./Toast-DDJEGs_z.js";import{a as D,b as F,d as N}from"./ShowQRPrintLabel-BsdGfBQk.js";import{A as T}from"./components-DzZHLCgp.js";import"./browser-image-compression-BVJ4p9S0.js";import"./PDFButton-DzKPI8bv.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-xY8_R9eo.js";import"./InitPrintServices-Cu6eu-iZ.js";var V=n("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),j=n('<p class=" textleft fullName_consigne">'),q=n("<h5 class=rpto>"),f=n("<div class=vertseparator>"),M=n('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),p=n('<div class="icon_status centerBx">'),z=n("<h5>"),Q=n('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const x=g(()=>v(()=>import("./FlexSpace-KKfLKHAK.js"),__vite__mapDeps([0,1,2]))),w=g(()=>v(()=>import("./SVG-62f2Cd9T.js"),__vite__mapDeps([3,1,2,4])));g(()=>v(()=>import("./ShowQRProducts-Djo69Ewe.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function ne(t){y({search:"",status:"AERO_33"});const[G,I]=E("");O(I,400);const A=async l=>{L({text:"No se puede eliminar",timeout:3500,theme:"red",id:B()})},h=()=>t?.item?.productImageUrl?R()+k()+"/"+t?.item?.productImageUrl:null,C=async()=>{let l=t?.item?.UPC||t?.item?.ASIN||t?.item?.code,c=D(l);var m=await F(c,"image/png");let _={qr:URL.createObjectURL(m),lbl:l,lbl2:t?.item?.name?.toUpperCase()},e=await N([_]);window.open(e)};return r(a,{get when(){return t?.item?.name},get children(){var l=Q(),c=l.firstChild,m=c.firstChild,u=m.firstChild,_=m.nextSibling;return i(l,r(a,{get when(){return h()},get children(){var e=V(),s=e.firstChild;return b(()=>P(s,"src",h())),e}}),c),i(u,r(a,{get when(){return t?.item?.name},get children(){return r(T,{get href(){return`/product-detail?mId=${t?.item?.ssg_product_key}`},get children(){var e=j();return i(e,()=>t?.item?.name?.toUpperCase()),e}})}})),i(m,r(x,{}),null),i(m,r(a,{get when(){return!d()},get children(){var e=M(),s=e.firstChild;return i(e,r(a,{get when(){return t?.item?.unit},get children(){return[(()=>{var o=q();return i(o,()=>t?.item?.unit),o})(),f()]}}),s),i(s,()=>t?.item?.code),e}}),null),i(m,r(a,{get when(){return!d()},get children(){return[r(x,{}),(()=>{var e=p();return e.$$click=C,i(e,r(w,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),r(a,{get when(){return S?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=p();return e.$$click=A,i(e,r(w,{name:"outline_delete",size:22})),e}})]}}),null),i(_,r(a,{get when(){return t?.item?.category},get children(){return[(()=>{var e=z();return i(e,()=>t?.item?.category),e})(),f()]}})),b(e=>{var s=`client_item_box gWXAaj jlytmu product centerBx ${d()?"isMobile":""}`,o=`${d()?"":"tr_bar_60"} centerBx`;return s!==e.e&&$(l,e.e=s),o!==e.t&&$(u,e.t=o),e},{e:void 0,t:void 0}),l}})}U(["click"]);export{ne as default};
