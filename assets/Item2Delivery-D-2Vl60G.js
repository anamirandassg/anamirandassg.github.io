const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DaEmXyNl.js","assets/index-Bw9zjTY_.js","assets/index-lCkr9jrN.css","assets/SVG-BaZuCb4a.js","assets/Util-D2O-IqKB.js","assets/ShowQR-BG-RmlkB.js","assets/ShowQRPrintLabel-3TqYO2zP.js","assets/PDFButton-85Y0gBbC.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-AFz-JHBR.js","assets/InitPrintServices-DgotkDNu.js","assets/Toast-CacXzZdD.js","assets/Toast-DLpFKn-Q.css","assets/ButonUploadHrm-BA9Sl7ZL.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-BTqmP-Fh.js","assets/LoadingColorSpinner-BslwOo_k.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-Dma0ZOpG.js","assets/debounces-BAQxtSR9.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as r,_ as s,a as p,u as D,K as O,n as T,d as a,i as g,S as h,k as f,e as b,q as V,s as L,h as R,t as d,m as y}from"./index-Bw9zjTY_.js";import{t as w,g as E,D as U,O as M,b as z,f as F}from"./Util-D2O-IqKB.js";/* empty css                             */import{c as q,i as H,b as K,u as W,a as N}from"./handelImagesServices-D8GmZzNu.js";import"./browser-image-compression-BVJ4p9S0.js";var Q=d('<div class="elastic_view_bx show"><div class=" spaceAround centerBx">'),Y=d("<div><img alt=sf>"),j=d('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),G=d("<div>"),J=d("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen");r(()=>s(()=>import("./FlexSpace-DaEmXyNl.js"),__vite__mapDeps([0,1,2])));const X=r(()=>s(()=>import("./SVG-BaZuCb4a.js"),__vite__mapDeps([3,1,2,4])));r(()=>s(()=>import("./ShowQR-BG-RmlkB.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));const Z=r(()=>s(()=>import("./ButonUploadHrm-BA9Sl7ZL.js"),__vite__mapDeps([13,1,2,3,4,14]))),ee=r(()=>s(()=>import("./ButonHrm-BTqmP-Fh.js"),__vite__mapDeps([15,1,2,3,4,14]))),te=r(()=>s(()=>import("./LoadingColorSpinner-BslwOo_k.js"),__vite__mapDeps([16,1,2,17])));r(()=>s(()=>import("./DropDwnSearch-Dma0ZOpG.js"),__vite__mapDeps([18,1,2,19,3,4,20])));function de(u){const[l,i]=p(null),[n,m]=p(!1);p("");const[I,v]=p(!1),[S,re]=D(),$=O();T(()=>{});const x=async(e,t)=>{let o=await K(e.type,t);if(await W(o,e)){let c={deliveryProof:N()+"/"+t,currentStatus:"YABA_99",deliveryUserId:y?.profile?.userId,deliveryUserName:y?.profile?.name,wasDelivery:"OK",deliveryTime:U()};const P=M(u?.list).map(async k=>{await ae({ssg_track_key:k,idairguide:"all"},c)});await Promise.all(P),v(!1),m(!1),$(`/delivery-detail?dId=${S?.dId}`,{replace:!0})}else v(!1)},A=async()=>{v(!0);let e=await q(l()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),t=await H(e),_=await(await fetch(t)).blob(),c=u?.cid+"/"+E()+E()+".webp";x(_,c)},B=e=>{i(e),m(!0)},C=()=>{i(null),m(!1)};return[a(h,{get when(){return!n()||!l()?.source},get children(){var e=Q(),t=e.firstChild;return g(t,a(Z,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:B})),e}}),a(h,{get when(){return f(()=>!!n())()&&l()?.source},get children(){return[(()=>{var e=Y(),t=e.firstChild;return b(()=>V(t,"src",l()?.source)),e})(),a(h,{get when(){return f(()=>!!n())()&&!I()},get fallback(){return(()=>{var e=J(),t=e.firstChild;return g(e,a(te,{stroke:"rgb(200 25 60 / 1)",size:32}),t),e})()},get children(){var e=j(),t=e.firstChild,o=t.nextSibling,_=o.firstChild;return g(t,a(ee,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:C})),o.$$click=A,g(_,a(X,{name:"success",size:32,get color(){return w?.success?.svg}})),b(c=>L(o,w?.success,c)),e}}),G()]}})]}const ae=async(u,l)=>{let i={params:u,data2update:l},n=z(809004);return i={...i,...n},await F(i)};R(["click"]);export{de as default};