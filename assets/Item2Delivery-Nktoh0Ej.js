const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DUMv-Tf6.js","assets/index-DiKAjaIm.js","assets/index-PRcoyGS_.css","assets/SVG-MJvrE44Q.js","assets/index-Ci0zXM0r.js","assets/ShowQR-06-MzlDs.js","assets/globalSignal-QKI7bfvh.js","assets/ShowQRPrintLabel-3Rt3onT2.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-BbVI7Xg0.js","assets/Util-D886uaAp.js","assets/Toast-DXw_AnMu.js","assets/Toast-DLpFKn-Q.css","assets/ButonUploadHrm-CbHypJci.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-REi_ekQ3.js","assets/LoadingColorSpinner-C2MX3kUQ.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-xUyA4KAZ.js","assets/debounces-BwpfumkX.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as r,_ as s,a as v,u as O,G as D,m as T,d as a,e as V,i as p,S as f,j as h,f as b,n as L,s as R,t as d,k as y}from"./index-DiKAjaIm.js";import{t as w,g as E,z as U,O as z,b as M,f as F}from"./Util-D886uaAp.js";/* empty css                             */import{c as H,i as W,b as j,u as q,a as G}from"./handelImagesServices-DJvptNh5.js";import"./index-Ci0zXM0r.js";import"./browser-image-compression-BVJ4p9S0.js";var K=d('<div class="elastic_view_bx show"><div class=" spaceAround centerBx">'),N=d("<div><img alt=sf>"),Q=d('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),Y=d("<div>"),J=d("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen");r(()=>s(()=>import("./FlexSpace-DUMv-Tf6.js"),__vite__mapDeps([0,1,2])));const X=r(()=>s(()=>import("./SVG-MJvrE44Q.js"),__vite__mapDeps([3,1,2,4])));r(()=>s(()=>import("./ShowQR-06-MzlDs.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));const Z=r(()=>s(()=>import("./ButonUploadHrm-CbHypJci.js"),__vite__mapDeps([15,1,2,3,4,12,16]))),ee=r(()=>s(()=>import("./ButonHrm-REi_ekQ3.js"),__vite__mapDeps([17,1,2,3,4,12,16]))),te=r(()=>s(()=>import("./LoadingColorSpinner-C2MX3kUQ.js"),__vite__mapDeps([18,1,2,19])));r(()=>s(()=>import("./DropDwnSearch-xUyA4KAZ.js"),__vite__mapDeps([20,1,2,21,3,4,22])));function me(m){const[l,i]=v(null),[n,u]=v(!1),[I,g]=v(!1),[S,re]=O(),$=D();T(()=>{});const x=async(e,t)=>{let o=await j(e.type,t);if(await q(o,e)){let c={deliveryProof:G()+"/"+t,currentStatus:"YABA_99",deliveryUserId:y?.profile?.userId,deliveryUserName:y?.profile?.name,wasDelivery:"OK",deliveryTime:U()};const P=z(m?.list).map(async k=>{await ae({ssg_track_key:k,idairguide:"all"},c)});await Promise.all(P),g(!1),u(!1),$(`/delivery-detail?dId=${S?.dId}`,{replace:!0})}else g(!1)},A=async()=>{g(!0);let e=await H(l()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),t=await W(e),_=await(await fetch(t)).blob(),c=m?.cid+"/"+E()+E()+".webp";x(_,c)},B=e=>{i(e),u(!0)},C=()=>{i(null),u(!1)};return[a(f,{get when(){return!n()||!l()?.source},get children(){var e=K(),t=e.firstChild;return p(t,a(Z,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:B})),e}}),a(f,{get when(){return h(()=>!!n())()&&l()?.source},get children(){return[(()=>{var e=N(),t=e.firstChild;return b(()=>L(t,"src",l()?.source)),e})(),a(f,{get when(){return h(()=>!!n())()&&!I()},get fallback(){return(()=>{var e=J(),t=e.firstChild;return p(e,a(te,{stroke:"rgb(200 25 60 / 1)",size:32}),t),e})()},get children(){var e=Q(),t=e.firstChild,o=t.nextSibling,_=o.firstChild;return p(t,a(ee,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:C})),o.$$click=A,p(_,a(X,{name:"success",size:32,get color(){return w?.success?.svg}})),b(c=>R(o,w?.success,c)),e}}),Y()]}})]}const ae=async(m,l)=>{let i={params:m,data2update:l},n=M(809004);return i={...i,...n},await F(i)};V(["click"]);export{me as default};
