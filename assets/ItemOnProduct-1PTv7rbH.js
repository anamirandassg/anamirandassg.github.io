const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DxKagGrA.js","assets/index-UAuAMgZc.js","assets/index-NFdrrltd.css","assets/SVG-D1tkPU1F.js","assets/index-Ci0zXM0r.js","assets/ShowQRProducts-DruP2-2y.js","assets/globalSignal-BHISgZ7b.js","assets/ShowQRPrintLabel-CAyOA94q.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-NgpjRc8z.js","assets/Util-DErZaF9J.js","assets/Toast-CCDTJb-h.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as u,_,c as S,a as C,d as r,e as P,i as l,S as n,f as h,n as R,k as B,g as $,t as a}from"./index-UAuAMgZc.js";import{g as M}from"./Util-DErZaF9J.js";import{u as O}from"./debounces-Ci2FfRSm.js";import{OpenModal as k}from"./DialogHRM-BO4khs0-.js";import{i as d}from"./globalSignal-BHISgZ7b.js";import{g as D,a as F}from"./handelImagesServices-Bs2w9a6-.js";import{A as U}from"./components-DZDMwfku.js";import"./index-Ci0zXM0r.js";var V=a("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),z=a('<p class=" textleft fullName_consigne">'),L=a("<h5 class=rpto>"),f=a("<div class=vertseparator>"),T=a('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),b=a('<div class="icon_status centerBx">'),j=a("<h5>"),H=a('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const x=u(()=>_(()=>import("./FlexSpace-DxKagGrA.js"),__vite__mapDeps([0,1,2]))),p=u(()=>_(()=>import("./SVG-D1tkPU1F.js"),__vite__mapDeps([3,1,2,4]))),N=u(()=>_(()=>import("./ShowQRProducts-DruP2-2y.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function ee(t){S({search:"",status:"AERO_33"});const[Q,I]=C("");O(I,400);const w=s=>{},E=s=>{let i={};i.id=M(),i.closeEvent=w,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=r(N,{get item(){return t?.item},get refetch(){return t?.refetch}}),k(i)},y=async s=>{},g=()=>t?.item?.productImageUrl?D()+F()+"/"+t?.item?.productImageUrl:null;return r(n,{get when(){return t?.item?.name},get children(){var s=H(),i=s.firstChild,o=i.firstChild,v=o.firstChild,A=o.nextSibling;return l(s,r(n,{get when(){return g()},get children(){var e=V(),c=e.firstChild;return h(()=>R(c,"src",g())),e}}),i),l(v,r(n,{get when(){return t?.item?.name},get children(){return r(U,{get href(){return`/product-detail?mId=${t?.item?.ssg_product_key}`},get children(){var e=z();return l(e,()=>t?.item?.name?.toUpperCase()),e}})}})),l(o,r(x,{}),null),l(o,r(n,{get when(){return!d()},get children(){var e=T(),c=e.firstChild;return l(e,r(n,{get when(){return t?.item?.unit},get children(){return[(()=>{var m=L();return l(m,()=>t?.item?.unit),m})(),f()]}}),c),l(c,()=>t?.item?.code),e}}),null),l(o,r(n,{get when(){return!d()},get children(){return[r(x,{}),(()=>{var e=b();return e.$$click=E,l(e,r(p,{name:"qr_code",color:"var(--hrm_palette-imput-label_gray)"})),e})(),r(n,{get when(){return B?.profile?.isAdmin||!(t?.item?.noBags>0)},get children(){var e=b();return e.$$click=y,l(e,r(p,{name:"outline_delete",size:22})),e}})]}}),null),l(A,r(n,{get when(){return t?.item?.category},get children(){return[(()=>{var e=j();return l(e,()=>t?.item?.category),e})(),f()]}})),h(e=>{var c=`client_item_box gWXAaj jlytmu product centerBx ${d()?"isMobile":""}`,m=`${d()?"":"tr_bar_60"} centerBx`;return c!==e.e&&$(s,e.e=c),m!==e.t&&$(v,e.t=m),e},{e:void 0,t:void 0}),s}})}P(["click"]);export{ee as default};
