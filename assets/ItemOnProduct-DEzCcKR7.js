const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-ZuIl_VRM.js","assets/index-CMPFS5l3.js","assets/index-CaL-WNrg.css","assets/SVG-Bw-dPoFc.js","assets/Util-7ERmh4Cp.js","assets/ShowQRProducts-vnq4pd4I.js","assets/ShowQRPrintLabel-dd3StqUp.js","assets/PDFButton-DXdwVZ_H.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-hw3Kqgbm.js","assets/InitPrintServices-C5c3gOIX.js","assets/Toast-DS_YK2AF.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as v,c as y,a as E,f as r,i,S as a,h as b,k as P,j as d,g as S,m as $,d as U,t as n}from"./index-CMPFS5l3.js";import{a as k}from"./Util-7ERmh4Cp.js";import{u as B}from"./debounces-B1ypXRVS.js";import"./DialogHRM-1fBgaf-_.js";import{g as O,a as R}from"./handelImagesServices-CxXaAJtj.js";import{OpenToast as L}from"./Toast-DS_YK2AF.js";import{a as D,b as j,d as F}from"./ShowQRPrintLabel-dd3StqUp.js";import{A as N}from"./components-CwIDaYvQ.js";import"./browser-image-compression-BVJ4p9S0.js";import"./PDFButton-DXdwVZ_H.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-hw3Kqgbm.js";import"./InitPrintServices-C5c3gOIX.js";var T=n("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),V=n('<p class=" textleft fullName_consigne">'),q=n("<h5 class=rpto>"),f=n("<div class=vertseparator>"),M=n('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),p=n('<div class="icon_status centerBx">'),z=n("<h5>"),Q=n('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const x=g(()=>v(()=>import("./FlexSpace-ZuIl_VRM.js"),__vite__mapDeps([0,1,2]))),w=g(()=>v(()=>import("./SVG-Bw-dPoFc.js"),__vite__mapDeps([3,1,2,4])));g(()=>v(()=>import("./ShowQRProducts-vnq4pd4I.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function ne(t){y({search:"",status:"AERO_33"});const[G,I]=E("");B(I,400);const A=async l=>{L({text:"No se puede eliminar",timeout:3500,theme:"red",id:k()})},h=()=>t?.item?.productImageUrl?O()+R()+"/"+t?.item?.productImageUrl:null,C=async()=>{let l=t?.item?.UPC||t?.item?.ASIN||t?.item?.code,c=D(l);var m=await j(c,"image/png");let _={qr:URL.createObjectURL(m),lbl:l,lbl2:t?.item?.name?.toUpperCase()},e=await F([_]);window.open(e)};return r(a,{get when(){return t?.item?.name},get children(){var l=Q(),c=l.firstChild,m=c.firstChild,u=m.firstChild,_=m.nextSibling;return i(l,r(a,{get when(){return h()},get children(){var e=T(),s=e.firstChild;return b(()=>P(s,"src",h())),e}}),c),i(u,r(a,{get when(){return t?.item?.name},get children(){return r(N,{get href(){return`/product-detail?mId=${t?.item?.ssg_product_key}`},get children(){var e=V();return i(e,()=>t?.item?.name?.toUpperCase()),e}})}})),i(m,r(x,{}),null),i(m,r(a,{get when(){return!d()},get children(){var e=M(),s=e.firstChild;return i(e,r(a,{get when(){return t?.item?.unit},get children(){return[(()=>{var o=q();return i(o,()=>t?.item?.unit),o})(),f()]}}),s),i(s,()=>t?.item?.code),e}}),null),i(m,r(a,{get when(){return!d()},get children(){return[r(x,{}),(()=>{var e=p();return e.$$click=C,i(e,r(w,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),r(a,{get when(){return S?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=p();return e.$$click=A,i(e,r(w,{name:"outline_delete",size:22})),e}})]}}),null),i(_,r(a,{get when(){return t?.item?.category},get children(){return[(()=>{var e=z();return i(e,()=>t?.item?.category),e})(),f()]}})),b(e=>{var s=`client_item_box gWXAaj jlytmu product centerBx ${d()?"isMobile":""}`,o=`${d()?"":"tr_bar_60"} centerBx`;return s!==e.e&&$(l,e.e=s),o!==e.t&&$(u,e.t=o),e},{e:void 0,t:void 0}),l}})}U(["click"]);export{ne as default};
