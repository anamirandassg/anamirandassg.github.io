const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D03avtQj.js","assets/index-Davks-F7.js","assets/index-DGHHyjai.css","assets/SVG-CYTTjjhw.js","assets/index-Ci0zXM0r.js","assets/ShowQR-CW-odb1a.js","assets/globalSignal-hV27f7Qu.js","assets/ShowQRPrintLabel-BCd5SSTx.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-CUYOHVUf.js","assets/Util-CHzs30Zz.js","assets/Toast-FPAwwC2b.js","assets/Toast-DLpFKn-Q.css","assets/DeliveryView-aUP-ZUN9.js","assets/DialogHRM-D44MwW5Y.js","assets/DialogHRM-V9_lZntj.css","assets/browser-image-compression-BVJ4p9S0.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-Dn34qKas.js","assets/LoadingColorSpinner-B_V5Hrpr.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-DKmH3C8m.js","assets/debounces-khgXmkFO.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as s,_ as i,a as v,u as O,D as k,m as T,d as r,e as V,i as p,S as h,j as b,f as w,n as L,s as R,t as u,k as U}from"./index-Davks-F7.js";import{t as y,g as E,v as M,O as z,b as F,f as H}from"./Util-CHzs30Zz.js";/* empty css                             */import{c as W,i as j,g as q,u as K,a as Q}from"./handelImagesServices-CW2hR8RI.js";import"./index-Ci0zXM0r.js";import"./browser-image-compression-BVJ4p9S0.js";var Y=u('<div class="elastic_view_bx show"><div class=" spaceAround centerBx">'),G=u("<div><img alt=sf>"),N=u('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),J=u("<div>"),X=u("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen");s(()=>i(()=>import("./FlexSpace-D03avtQj.js"),__vite__mapDeps([0,1,2])));const Z=s(()=>i(()=>import("./SVG-CYTTjjhw.js"),__vite__mapDeps([3,1,2,4])));s(()=>i(()=>import("./ShowQR-CW-odb1a.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));const ee=s(()=>i(()=>import("./DeliveryView-aUP-ZUN9.js").then(a=>a.B),__vite__mapDeps([14,1,2,11,4,6,15,16,3,17,18]))),te=s(()=>i(()=>import("./ButonHrm-Dn34qKas.js"),__vite__mapDeps([19,1,2,3,4,11,18]))),ae=s(()=>i(()=>import("./LoadingColorSpinner-B_V5Hrpr.js"),__vite__mapDeps([20,1,2,21])));s(()=>i(()=>import("./DropDwnSearch-DKmH3C8m.js"),__vite__mapDeps([22,1,2,23,3,4,24])));function ue(a){const[l,o]=v(null),[c,_]=v(!1),[I,g]=v(!1),[S,se]=O(),$=k();T(()=>{});const x=async(e,t)=>{let n=await q(e.type,t);if(await K(n,e)){let d={deliveryProof:Q()+"/"+t,currentStatus:"YABA_99",deliveryUserId:U?.profile?.userId,wasDelivery:"OK",deliveryTime:M()};const P=z(a?.list).map(async f=>{let D={ssg_track_key:f,idairguide:a?.list[f]?.idairguide};await re(D,d)});await Promise.all(P),g(!1),_(!1),$(`/delivery-detail?dId=${S?.dId}`,{replace:!0})}else g(!1)},A=async()=>{g(!0);let e=await W(l()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),t=await j(e),m=await(await fetch(t)).blob(),d=a?.cid+"/"+E()+E()+".webp";x(m,d)},B=e=>{o(e),_(!0)},C=()=>{o(null),_(!1)};return[r(h,{get when(){return!c()||!l()?.source},get children(){var e=Y(),t=e.firstChild;return p(t,r(ee,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:B})),e}}),r(h,{get when(){return b(()=>!!c())()&&l()?.source},get children(){return[(()=>{var e=G(),t=e.firstChild;return w(()=>L(t,"src",l()?.source)),e})(),r(h,{get when(){return b(()=>!!c())()&&!I()},get fallback(){return(()=>{var e=X(),t=e.firstChild;return p(e,r(ae,{stroke:"rgb(200 25 60 / 1)",size:32}),t),e})()},get children(){var e=N(),t=e.firstChild,n=t.nextSibling,m=n.firstChild;return p(t,r(te,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:C})),n.$$click=A,p(m,r(Z,{name:"success",size:32,get color(){return y?.success?.svg}})),w(d=>R(n,y?.success,d)),e}}),J()]}})]}const re=async(a,l)=>{let o={params:a,data2update:l},c=F(809004);return o={...o,...c},await H(o)};V(["click"]);export{ue as default};
