const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DTHXxt6B.js","assets/index-CzgziP8Z.js","assets/index-DGHHyjai.css","assets/SVG-CWjkhMje.js","assets/index-Ci0zXM0r.js","assets/ShowQR-B75OTlws.js","assets/globalSignal-oi01T7gp.js","assets/ShowQRPrintLabel-BvjR69lW.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CprHcwF4.js","assets/Util-uEfv1z7O.js","assets/Toast-AIkMIwLG.js","assets/Toast-DLpFKn-Q.css","assets/DeliveryView-xhvuCOaG.js","assets/DialogHRM-Djdu3UuD.js","assets/DialogHRM-V9_lZntj.css","assets/browser-image-compression-BVJ4p9S0.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-B1GtiDz-.js","assets/LoadingColorSpinner-B4-lJTIX.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-B0ZZqfnx.js","assets/debounces-DxwHJSqx.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as r,_ as s,a as v,u as D,D as O,m as T,d as a,e as V,i as p,S as f,j as h,f as y,n as L,s as R,t as m,k as b}from"./index-CzgziP8Z.js";import{t as w,g as E,x as U,O as M,b as z,f as F}from"./Util-uEfv1z7O.js";/* empty css                             */import{c as H,i as W,g as j,u as q,a as K}from"./handelImagesServices-DaLGLQB8.js";import"./index-Ci0zXM0r.js";import"./browser-image-compression-BVJ4p9S0.js";var N=m('<div class="elastic_view_bx show"><div class=" spaceAround centerBx">'),Q=m("<div><img alt=sf>"),Y=m('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),G=m("<div>"),J=m("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen");r(()=>s(()=>import("./FlexSpace-DTHXxt6B.js"),__vite__mapDeps([0,1,2])));const X=r(()=>s(()=>import("./SVG-CWjkhMje.js"),__vite__mapDeps([3,1,2,4])));r(()=>s(()=>import("./ShowQR-B75OTlws.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));const Z=r(()=>s(()=>import("./DeliveryView-xhvuCOaG.js").then(l=>l.B),__vite__mapDeps([15,1,2,12,4,6,16,17,3,18,19]))),ee=r(()=>s(()=>import("./ButonHrm-B1GtiDz-.js"),__vite__mapDeps([20,1,2,3,4,12,19]))),te=r(()=>s(()=>import("./LoadingColorSpinner-B4-lJTIX.js"),__vite__mapDeps([21,1,2,22])));r(()=>s(()=>import("./DropDwnSearch-B0ZZqfnx.js"),__vite__mapDeps([23,1,2,24,3,4,25])));function me(l){const[i,o]=v(null),[c,u]=v(!1),[I,g]=v(!1),[x,re]=D(),S=O();T(()=>{});const $=async(e,t)=>{let n=await j(e.type,t);if(await q(n,e)){let d={deliveryProof:K()+"/"+t,currentStatus:"YABA_99",deliveryUserId:b?.profile?.userId,deliveryUserName:b?.profile?.name,wasDelivery:"OK",deliveryTime:U()};const P=M(l?.list).map(async k=>{await ae({ssg_track_key:k,idairguide:"all"},d)});await Promise.all(P),g(!1),u(!1),S(`/delivery-detail?dId=${x?.dId}`,{replace:!0})}else g(!1)},A=async()=>{g(!0);let e=await H(i()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),t=await W(e),_=await(await fetch(t)).blob(),d=l?.cid+"/"+E()+E()+".webp";$(_,d)},B=e=>{o(e),u(!0)},C=()=>{o(null),u(!1)};return[a(f,{get when(){return!c()||!i()?.source},get children(){var e=N(),t=e.firstChild;return p(t,a(Z,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:B})),e}}),a(f,{get when(){return h(()=>!!c())()&&i()?.source},get children(){return[(()=>{var e=Q(),t=e.firstChild;return y(()=>L(t,"src",i()?.source)),e})(),a(f,{get when(){return h(()=>!!c())()&&!I()},get fallback(){return(()=>{var e=J(),t=e.firstChild;return p(e,a(te,{stroke:"rgb(200 25 60 / 1)",size:32}),t),e})()},get children(){var e=Y(),t=e.firstChild,n=t.nextSibling,_=n.firstChild;return p(t,a(ee,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:C})),n.$$click=A,p(_,a(X,{name:"success",size:32,get color(){return w?.success?.svg}})),y(d=>R(n,w?.success,d)),e}}),G()]}})]}const ae=async(l,i)=>{let o={params:l,data2update:i},c=z(809004);return o={...o,...c},await F(o)};V(["click"]);export{me as default};
