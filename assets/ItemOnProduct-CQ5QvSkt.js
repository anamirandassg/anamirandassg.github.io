const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D9SfsuxO.js","assets/index-D92b8fus.js","assets/index-mNJWtuMT.css","assets/SVG-BazYrrpa.js","assets/Util-DZlMHKqJ.js","assets/ShowQRProducts-DUeUYLRu.js","assets/ShowQRPrintLabel-e8YAWG7W.js","assets/PDFButton-ClnWeH7R.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-DkuHxdU6.js","assets/InitPrintServices-QWHeDiid.js","assets/Toast-D0D6g00l.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as v,_ as h,c as S,a as y,f as i,i as r,S as o,h as $,k as E,j as g,g as P,m as f,d as U,t as n}from"./index-D92b8fus.js";import{a as k}from"./Util-DZlMHKqJ.js";import{u as B}from"./debounces-BeMPhJLv.js";import"./DialogHRM-CcTrMI5Q.js";import{g as O,a as R}from"./handelImagesServices-C4GBoB1J.js";import{OpenToast as L}from"./Toast-D0D6g00l.js";import{a as D,b as j,d as F}from"./ShowQRPrintLabel-e8YAWG7W.js";import{A as N}from"./components-8Esi0-Fk.js";import"./browser-image-compression-BVJ4p9S0.js";import"./PDFButton-ClnWeH7R.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-DkuHxdU6.js";import"./InitPrintServices-QWHeDiid.js";var T=n("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),V=n('<p class=" textleft fullName_consigne">'),q=n("<h5 class=rpto>"),p=n("<div class=vertseparator>"),M=n('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),z=n('<div class="icon_status centerBx">'),Q=n("<h5>"),G=n('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div><div class="icon_status centerBx"></div></div><div class=" bottombx centerBx">');const x=v(()=>h(()=>import("./FlexSpace-D9SfsuxO.js"),__vite__mapDeps([0,1,2]))),w=v(()=>h(()=>import("./SVG-BazYrrpa.js"),__vite__mapDeps([3,1,2,4])));v(()=>h(()=>import("./ShowQRProducts-DUeUYLRu.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function se(t){S({search:"",status:"AERO_33"});const[H,I]=y("");B(I,400);const A=async a=>{L({text:"No se puede eliminar",timeout:3500,theme:"red",id:k()})},b=()=>t?.item?.productImageUrl?O()+R()+"/"+t?.item?.productImageUrl:null,C=async()=>{let a=t?.item?.code||t?.item?.UPC||t?.item?.ASIN,d=D(a);var l=await j(d,"image/png");let s={qr:URL.createObjectURL(l),lbl:a,lbl2:t?.item?.name?.toUpperCase()},u=await F([s]);window.open(u)};return i(o,{get when(){return t?.item?.name},get children(){var a=G(),d=a.firstChild,l=d.firstChild,_=l.firstChild,s=_.nextSibling,u=l.nextSibling;return r(a,i(o,{get when(){return b()},get children(){var e=T(),m=e.firstChild;return $(()=>E(m,"src",b())),e}}),d),r(_,i(o,{get when(){return t?.item?.name},get children(){return i(N,{get href(){return`/product-detail?mId=${t?.item?.ssg_product_key}`},get children(){var e=V();return r(e,()=>t?.item?.name?.toUpperCase()),e}})}})),r(l,i(x,{}),s),r(l,i(o,{get when(){return!g()},get children(){var e=M(),m=e.firstChild;return r(e,i(o,{get when(){return t?.item?.unit},get children(){return[(()=>{var c=q();return r(c,()=>t?.item?.unit),c})(),p()]}}),m),r(m,()=>t?.item?.code),e}}),s),r(l,i(x,{}),s),s.$$click=C,r(s,i(w,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),r(l,i(o,{get when(){return P?.profile?.isAdmin},get children(){var e=z();return e.$$click=A,r(e,i(w,{name:"outline_delete",size:22})),e}}),null),r(u,i(o,{get when(){return t?.item?.category},get children(){return[(()=>{var e=Q();return r(e,()=>t?.item?.category),e})(),p()]}})),$(e=>{var m=`client_item_box gWXAaj jlytmu product centerBx ${g()?"isMobile":""}`,c=`${g()?"":"tr_bar_60"} centerBx`;return m!==e.e&&f(a,e.e=m),c!==e.t&&f(_,e.t=c),e},{e:void 0,t:void 0}),a}})}U(["click"]);export{se as default};
