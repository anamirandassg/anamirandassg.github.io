const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-tYfMYvkD.js","assets/index-CQuD3DCq.js","assets/index-mNJWtuMT.css","assets/SVG-C7kEtqG-.js","assets/Util-DZlMHKqJ.js","assets/ShowQR-CYE2wRnv.js","assets/ShowQRPrintLabel-DzfQH_lE.js","assets/PDFButton-ClnWeH7R.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-DkuHxdU6.js","assets/InitPrintServices-QWHeDiid.js","assets/Toast-93Yb8nPc.js","assets/Toast-DLpFKn-Q.css","assets/ButonUploadHrm-CNKWJoxo.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-Dx0Bvr7a.js","assets/LoadingColorSpinner-C2uSCjGG.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-B7oQF0Nt.js","assets/debounces-CIWj1gH4.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as r,_ as s,a as p,r as O,u as D,e as T,f as a,i as g,S as f,q as h,h as y,k as V,s as L,d as R,t as d,g as b}from"./index-CQuD3DCq.js";import{t as w,a as E,H as U,O as M,g as z,f as F}from"./Util-DZlMHKqJ.js";/* empty css                             */import{c as H,i as q,b as W,u as K,a as N}from"./handelImagesServices-BWTmlr9k.js";import"./browser-image-compression-BVJ4p9S0.js";var Q=d('<div class="elastic_view_bx show"><div class=" spaceAround centerBx">'),Y=d("<div><img alt=sf>"),j=d('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),G=d("<div>"),J=d("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen");r(()=>s(()=>import("./FlexSpace-tYfMYvkD.js"),__vite__mapDeps([0,1,2])));const X=r(()=>s(()=>import("./SVG-C7kEtqG-.js"),__vite__mapDeps([3,1,2,4])));r(()=>s(()=>import("./ShowQR-CYE2wRnv.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));const Z=r(()=>s(()=>import("./ButonUploadHrm-CNKWJoxo.js"),__vite__mapDeps([13,1,2,3,4,14]))),ee=r(()=>s(()=>import("./ButonHrm-Dx0Bvr7a.js"),__vite__mapDeps([15,1,2,3,4,14]))),te=r(()=>s(()=>import("./LoadingColorSpinner-C2uSCjGG.js"),__vite__mapDeps([16,1,2,17])));r(()=>s(()=>import("./DropDwnSearch-B7oQF0Nt.js"),__vite__mapDeps([18,1,2,19,3,4,20])));function de(u){const[l,i]=p(null),[n,_]=p(!1);p("");const[I,v]=p(!1),[S,re]=O(),$=D();T(()=>{});const x=async(e,t)=>{let o=await W(e.type,t);if(await K(o,e)){let c={deliveryProof:N()+"/"+t,currentStatus:"YABA_99",deliveryUserId:b?.profile?.userId,deliveryUserName:b?.profile?.name,wasDelivery:"OK",deliveryTime:U()};const P=M(u?.list).map(async k=>{await ae({ssg_track_key:k,idairguide:"all"},c)});await Promise.all(P),v(!1),_(!1),$(`/delivery-detail?dId=${S?.dId}`,{replace:!0})}else v(!1)},A=async()=>{v(!0);let e=await H(l()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),t=await q(e),m=await(await fetch(t)).blob(),c=u?.cid+"/"+E()+E()+".webp";x(m,c)},B=e=>{i(e),_(!0)},C=()=>{i(null),_(!1)};return[a(f,{get when(){return!n()||!l()?.source},get children(){var e=Q(),t=e.firstChild;return g(t,a(Z,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:B})),e}}),a(f,{get when(){return h(()=>!!n())()&&l()?.source},get children(){return[(()=>{var e=Y(),t=e.firstChild;return y(()=>V(t,"src",l()?.source)),e})(),a(f,{get when(){return h(()=>!!n())()&&!I()},get fallback(){return(()=>{var e=J(),t=e.firstChild;return g(e,a(te,{stroke:"rgb(200 25 60 / 1)",size:32}),t),e})()},get children(){var e=j(),t=e.firstChild,o=t.nextSibling,m=o.firstChild;return g(t,a(ee,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:C})),o.$$click=A,g(m,a(X,{name:"success",size:32,get color(){return w?.success?.svg}})),y(c=>L(o,w?.success,c)),e}}),G()]}})]}const ae=async(u,l)=>{let i={params:u,data2update:l},n=z(809004);return i={...i,...n},await F(i)};R(["click"]);export{de as default};
