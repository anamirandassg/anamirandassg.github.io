const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BcNdFcwd.js","assets/index-BohYA11Y.js","assets/index-BRlA1Q7g.css","assets/SVG-DjC2J2vQ.js","assets/Util-B-FWhTQW.js","assets/ShowQRProducts-CEIsQ9fI.js","assets/ShowQRPrintLabel-D1csX2gH.js","assets/fontkit.es-Dye5NabB.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-ByvuCY7T.js","assets/Toast-DV07Bp4-.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as y,c as A,a as x,e as a,i as r,S as c,f as I,k as q,j as p,x as B,m as w,g as P,h as L,t as m}from"./index-BohYA11Y.js";import{g as E,f as O,O as R,a as N}from"./Util-B-FWhTQW.js";import{u as j}from"./debounces-ZuE8skXC.js";import"./DialogHRM-CMbGjqUO.js";import{g as D,a as Q}from"./handelImagesServices-4iku29K6.js";import{OpenToast as T}from"./Toast-DV07Bp4-.js";import{a as F,b as V,d as M}from"./ShowQRPrintLabel-D1csX2gH.js";import"./DashProducts-fwKNh60g.js";import{A as z}from"./components-DqiQ5I72.js";import"./browser-image-compression-BVJ4p9S0.js";import"./fontkit.es-Dye5NabB.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-ByvuCY7T.js";import"./App.module-CbHnVtRQ.js";var Y=m("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),G=m('<p class=" textleft fullName_consigne">'),H=m("<h5 class=rpto>"),k=m("<div class=vertseparator>"),K=m('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),W=m('<div class="icon_status centerBx">'),X=m("<h5>"),J=m('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div><div class="icon_status centerBx"></div></div><div class=" bottombx centerBx">');const S=$(()=>y(()=>import("./FlexSpace-BcNdFcwd.js"),__vite__mapDeps([0,1,2]))),C=$(()=>y(()=>import("./SVG-DjC2J2vQ.js"),__vite__mapDeps([3,1,2,4])));$(()=>y(()=>import("./ShowQRProducts-CEIsQ9fI.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));function ve(t){A({search:"",status:"AERO_33"});const[i,v]=x("");x(0),j(v,400);const o=async l=>{U()},f=()=>t?.item?.productImageUrl?D()+Q()+"/"+t?.item?.productImageUrl:null,h=async()=>{let l=t?.item?.codeN||t?.item?.code||t?.item?.UPC||t?.item?.ASIN,u=F(l);var s=await V(u,"image/png");let n={qr:URL.createObjectURL(s),lbl:l,lbl2:t?.item?.name?.toUpperCase()},g=await M([n]);window.open(g)},U=async()=>{let l=t?.item?.ssg_product_key,u=`${l}`,s=await ee(u),_=0,n=0;R(s)?.map(g=>{s[g]?.products?.map(e=>{l===e?.product?.id&&(_+=e?.price*1*e?.qty*1,n+=e?.qty*1)})}),n?T({text:"No se puede eliminar",timeout:3500,theme:"red",id:N()}):await Z(t?.item?.ssg_product_key)};return a(c,{get when(){return t?.item?.name},get children(){var l=J(),u=l.firstChild,s=u.firstChild,_=s.firstChild,n=_.nextSibling,g=s.nextSibling;return r(l,a(c,{get when(){return f()},get children(){var e=Y(),d=e.firstChild;return I(()=>q(d,"src",f())),e}}),u),r(_,a(c,{get when(){return t?.item?.name},get children(){return a(z,{get href(){return`/product-detail?mId=${t?.item?.ssg_product_key}`},get children(){var e=G();return r(e,()=>t?.item?.name?.toUpperCase()),e}})}})),r(s,a(S,{}),n),r(s,a(c,{get when(){return!p()},get children(){var e=K(),d=e.firstChild;return r(e,a(c,{get when(){return t?.item?.unit},get children(){return[(()=>{var b=H();return r(b,()=>t?.item?.unit),b})(),k()]}}),d),r(d,()=>t?.item?.codeN),e}}),n),r(s,a(S,{}),n),n.$$click=h,r(n,a(C,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),r(s,a(c,{get when(){return B()},get children(){var e=W();return e.$$click=o,r(e,a(C,{name:"outline_delete",size:22})),e}}),null),r(g,a(c,{get when(){return t?.item?.category},get children(){return[(()=>{var e=X();return r(e,()=>t?.item?.category),e})(),k()]}}),null),r(g,a(c,{get when(){return t?.item?.stock?.total},get children(){return t?.item?.stock?.total}}),null),I(e=>{var d=`client_item_box gWXAaj jlytmu product centerBx ${p()?"isMobile":""}`,b=`${p()?"":"tr_bar_60"} centerBx`;return d!==e.e&&w(l,e.e=d),b!==e.t&&w(_,e.t=b),e},{e:void 0,t:void 0}),l}})}const Z=async t=>{let i={params:{id:t,businessId:P?.profile?.businessYId}},v=E(129005);i={...i,...v};const o=await O(i);return console.log(i),console.log(o),o?.data?.error?{}:o?.data},ee=async t=>{let i={params:{businessId:P?.profile?.businessYId}};t&&t.split(" ").map((f,h)=>{f&&(i.params[":search"+h]=f.trim())});let v=E(132001);i={...i,...v},i.params[":search0"];const o=await O(i);return o?.error?{}:o};L(["click"]);export{ee as LookupInventoryOnProd,ve as default};
