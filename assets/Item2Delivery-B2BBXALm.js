const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-B3HXNVXc.js","assets/index-BsH4vb_L.js","assets/index-BmzAZVve.css","assets/SVG-BlkwGQm0.js","assets/ShowQR-BG41y6Qw.js","assets/ShowQRPrintLabel-hT7Cz09d.js","assets/PDFButton-BNuwWsqH.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-Bn0WCazU.js","assets/InitPrintServices-B0jgZ6qP.js","assets/Util-Ce3tbPYr.js","assets/Toast-C6yOCMLy.js","assets/Toast-DLpFKn-Q.css","assets/ButonUploadHrm-CACYEmjO.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-BNcGawx_.js","assets/LoadingColorSpinner-CA23Jtc8.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-DJQN6Vok.js","assets/debounces-CiE9oGWq.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as r,_ as s,a as p,u as O,N as D,n as T,d as a,i as g,S as h,k as f,e as y,q as V,s as L,h as R,t as d,m as b}from"./index-BsH4vb_L.js";import{t as w,g as E,y as U,O as M,b as z,f as F}from"./Util-Ce3tbPYr.js";/* empty css                             */import{c as q,i as H,b as N,u as W,a as K}from"./handelImagesServices-Dw83p5aA.js";import"./browser-image-compression-BVJ4p9S0.js";var Q=d('<div class="elastic_view_bx show"><div class=" spaceAround centerBx">'),Y=d("<div><img alt=sf>"),j=d('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),G=d("<div>"),J=d("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen");r(()=>s(()=>import("./FlexSpace-B3HXNVXc.js"),__vite__mapDeps([0,1,2])));const X=r(()=>s(()=>import("./SVG-BlkwGQm0.js"),__vite__mapDeps([3,1,2])));r(()=>s(()=>import("./ShowQR-BG41y6Qw.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12])));const Z=r(()=>s(()=>import("./ButonUploadHrm-CACYEmjO.js"),__vite__mapDeps([13,1,2,3,10,14]))),ee=r(()=>s(()=>import("./ButonHrm-BNcGawx_.js"),__vite__mapDeps([15,1,2,3,10,14]))),te=r(()=>s(()=>import("./LoadingColorSpinner-CA23Jtc8.js"),__vite__mapDeps([16,1,2,17])));r(()=>s(()=>import("./DropDwnSearch-DJQN6Vok.js"),__vite__mapDeps([18,1,2,19,3,20])));function de(u){const[l,i]=p(null),[n,m]=p(!1);p("");const[I,v]=p(!1),[S,re]=O(),$=D();T(()=>{});const x=async(e,t)=>{let o=await N(e.type,t);if(await W(o,e)){let c={deliveryProof:K()+"/"+t,currentStatus:"YABA_99",deliveryUserId:b?.profile?.userId,deliveryUserName:b?.profile?.name,wasDelivery:"OK",deliveryTime:U()};const P=M(u?.list).map(async k=>{await ae({ssg_track_key:k,idairguide:"all"},c)});await Promise.all(P),v(!1),m(!1),$(`/delivery-detail?dId=${S?.dId}`,{replace:!0})}else v(!1)},A=async()=>{v(!0);let e=await q(l()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),t=await H(e),_=await(await fetch(t)).blob(),c=u?.cid+"/"+E()+E()+".webp";x(_,c)},B=e=>{i(e),m(!0)},C=()=>{i(null),m(!1)};return[a(h,{get when(){return!n()||!l()?.source},get children(){var e=Q(),t=e.firstChild;return g(t,a(Z,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:B})),e}}),a(h,{get when(){return f(()=>!!n())()&&l()?.source},get children(){return[(()=>{var e=Y(),t=e.firstChild;return y(()=>V(t,"src",l()?.source)),e})(),a(h,{get when(){return f(()=>!!n())()&&!I()},get fallback(){return(()=>{var e=J(),t=e.firstChild;return g(e,a(te,{stroke:"rgb(200 25 60 / 1)",size:32}),t),e})()},get children(){var e=j(),t=e.firstChild,o=t.nextSibling,_=o.firstChild;return g(t,a(ee,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:C})),o.$$click=A,g(_,a(X,{name:"success",size:32,get color(){return w?.success?.svg}})),y(c=>L(o,w?.success,c)),e}}),G()]}})]}const ae=async(u,l)=>{let i={params:u,data2update:l},n=z(809004);return i={...i,...n},await F(i)};R(["click"]);export{de as default};
