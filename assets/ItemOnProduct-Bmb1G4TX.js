const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D9l58TG3.js","assets/index-DRpz4y-S.js","assets/index-lCkr9jrN.css","assets/SVG-CNsBYLwQ.js","assets/ShowQRProducts-DDB-dswP.js","assets/ShowQRPrintLabel-RxMmsdDc.js","assets/PDFButton-C1E5fvKc.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BC6KGFqu.js","assets/InitPrintServices-pmhW66Dq.js","assets/Toast-B9ChhmfU.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as g,_ as v,c as C,a as E,d as r,i,S as l,e as b,A as P,g as u,n as S,f as $,h as U,t as a,j as B}from"./index-DRpz4y-S.js";import{u as O}from"./debounces-Dpzs-kDP.js";import"./DialogHRM-BwujtE47.js";import{g as R,a as k}from"./handelImagesServices-CVELPvaX.js";import{OpenToast as L}from"./Toast-B9ChhmfU.js";import{a as D,b as j,d as F}from"./ShowQRPrintLabel-RxMmsdDc.js";import{A as T}from"./components-CpzTdrNF.js";import"./browser-image-compression-BVJ4p9S0.js";import"./PDFButton-C1E5fvKc.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BC6KGFqu.js";import"./InitPrintServices-pmhW66Dq.js";var V=a("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),q=a('<p class=" textleft fullName_consigne">'),M=a("<h5 class=rpto>"),f=a("<div class=vertseparator>"),N=a('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),p=a('<div class="icon_status centerBx">'),z=a("<h5>"),Q=a('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const x=g(()=>v(()=>import("./FlexSpace-D9l58TG3.js"),__vite__mapDeps([0,1,2]))),w=g(()=>v(()=>import("./SVG-CNsBYLwQ.js"),__vite__mapDeps([3,1,2])));g(()=>v(()=>import("./ShowQRProducts-DDB-dswP.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));function ae(t){C({search:"",status:"AERO_33"});const[G,I]=E("");O(I,400);const A=async n=>{L({text:"No se puede eliminar",timeout:3500,theme:"red",id:B()})},h=()=>t?.item?.productImageUrl?R()+k()+"/"+t?.item?.productImageUrl:null,y=async()=>{let n=D(t?.item?.code);var c=await j(n,"image/png");let d={qr:URL.createObjectURL(c),lbl:t?.item?.code,lbl2:t?.item?.name?.toUpperCase()},_=await F([d]);window.open(_)};return r(l,{get when(){return t?.item?.name},get children(){var n=Q(),c=n.firstChild,m=c.firstChild,d=m.firstChild,_=m.nextSibling;return i(n,r(l,{get when(){return h()},get children(){var e=V(),s=e.firstChild;return b(()=>P(s,"src",h())),e}}),c),i(d,r(l,{get when(){return t?.item?.name},get children(){return r(T,{get href(){return`/product-detail?mId=${t?.item?.ssg_product_key}`},get children(){var e=q();return i(e,()=>t?.item?.name?.toUpperCase()),e}})}})),i(m,r(x,{}),null),i(m,r(l,{get when(){return!u()},get children(){var e=N(),s=e.firstChild;return i(e,r(l,{get when(){return t?.item?.unit},get children(){return[(()=>{var o=M();return i(o,()=>t?.item?.unit),o})(),f()]}}),s),i(s,()=>t?.item?.code),e}}),null),i(m,r(l,{get when(){return!u()},get children(){return[r(x,{}),(()=>{var e=p();return e.$$click=y,i(e,r(w,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),r(l,{get when(){return S?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=p();return e.$$click=A,i(e,r(w,{name:"outline_delete",size:22})),e}})]}}),null),i(_,r(l,{get when(){return t?.item?.category},get children(){return[(()=>{var e=z();return i(e,()=>t?.item?.category),e})(),f()]}})),b(e=>{var s=`client_item_box gWXAaj jlytmu product centerBx ${u()?"isMobile":""}`,o=`${u()?"":"tr_bar_60"} centerBx`;return s!==e.e&&$(n,e.e=s),o!==e.t&&$(d,e.t=o),e},{e:void 0,t:void 0}),n}})}U(["click"]);export{ae as default};