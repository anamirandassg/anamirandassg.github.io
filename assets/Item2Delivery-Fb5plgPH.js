const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BAxAHHjl.js","assets/index-BcPxdzNG.js","assets/index-DGHHyjai.css","assets/SVG-CgaNqNB-.js","assets/index-Ci0zXM0r.js","assets/ShowQR-IDSUqbXX.js","assets/globalSignal-CTzzE19b.js","assets/ShowQRPrintLabel-CJbZOt5B.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CprHcwF4.js","assets/Util-uEfv1z7O.js","assets/Toast-CR1M38zn.js","assets/Toast-DLpFKn-Q.css","assets/DeliveryView-Ca1Nr62H.js","assets/DialogHRM-CHw8HR8n.js","assets/DialogHRM-V9_lZntj.css","assets/browser-image-compression-BVJ4p9S0.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-DVdVD8-h.js","assets/LoadingColorSpinner-DguuT5wE.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-D_W-rrDn.js","assets/debounces-nsG59_FJ.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as s,_ as i,a as v,u as k,D as T,m as V,d as r,e as L,i as p,S as f,j as y,f as b,n as R,s as U,t as u,k as w}from"./index-BcPxdzNG.js";import{t as E,g as x,x as M,O as z,b as F,f as H}from"./Util-uEfv1z7O.js";/* empty css                             */import{c as W,i as j,g as q,u as K,a as N}from"./handelImagesServices-CRYDVJ-g.js";import"./index-Ci0zXM0r.js";import"./browser-image-compression-BVJ4p9S0.js";var Q=u('<div class="elastic_view_bx show"><div class=" spaceAround centerBx">'),Y=u("<div><img alt=sf>"),G=u('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),J=u("<div>"),X=u("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen");s(()=>i(()=>import("./FlexSpace-BAxAHHjl.js"),__vite__mapDeps([0,1,2])));const Z=s(()=>i(()=>import("./SVG-CgaNqNB-.js"),__vite__mapDeps([3,1,2,4])));s(()=>i(()=>import("./ShowQR-IDSUqbXX.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));const ee=s(()=>i(()=>import("./DeliveryView-Ca1Nr62H.js").then(a=>a.B),__vite__mapDeps([15,1,2,12,4,6,16,17,3,18,19]))),te=s(()=>i(()=>import("./ButonHrm-DVdVD8-h.js"),__vite__mapDeps([20,1,2,3,4,12,19]))),ae=s(()=>i(()=>import("./LoadingColorSpinner-DguuT5wE.js"),__vite__mapDeps([21,1,2,22])));s(()=>i(()=>import("./DropDwnSearch-D_W-rrDn.js"),__vite__mapDeps([23,1,2,24,3,4,25])));function ue(a){const[l,o]=v(null),[c,m]=v(!1),[I,g]=v(!1),[S,se]=k(),$=T();V(()=>{});const A=async(e,t)=>{let n=await q(e.type,t);if(await K(n,e)){let d={deliveryProof:N()+"/"+t,currentStatus:"YABA_99",deliveryUserId:w?.profile?.userId,deliveryUserName:w?.profile?.name,wasDelivery:"OK",deliveryTime:M()};const D=z(a?.list).map(async h=>{let O={ssg_track_key:h,idairguide:a?.list[h]?.idairguide};await re(O,d)});await Promise.all(D),g(!1),m(!1),$(`/delivery-detail?dId=${S?.dId}`,{replace:!0})}else g(!1)},B=async()=>{g(!0);let e=await W(l()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),t=await j(e),_=await(await fetch(t)).blob(),d=a?.cid+"/"+x()+x()+".webp";A(_,d)},C=e=>{o(e),m(!0)},P=()=>{o(null),m(!1)};return[r(f,{get when(){return!c()||!l()?.source},get children(){var e=Q(),t=e.firstChild;return p(t,r(ee,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:C})),e}}),r(f,{get when(){return y(()=>!!c())()&&l()?.source},get children(){return[(()=>{var e=Y(),t=e.firstChild;return b(()=>R(t,"src",l()?.source)),e})(),r(f,{get when(){return y(()=>!!c())()&&!I()},get fallback(){return(()=>{var e=X(),t=e.firstChild;return p(e,r(ae,{stroke:"rgb(200 25 60 / 1)",size:32}),t),e})()},get children(){var e=G(),t=e.firstChild,n=t.nextSibling,_=n.firstChild;return p(t,r(te,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:P})),n.$$click=B,p(_,r(Z,{name:"success",size:32,get color(){return E?.success?.svg}})),b(d=>U(n,E?.success,d)),e}}),J()]}})]}const re=async(a,l)=>{let o={params:a,data2update:l},c=F(809004);return o={...o,...c},await H(o)};L(["click"]);export{ue as default};
