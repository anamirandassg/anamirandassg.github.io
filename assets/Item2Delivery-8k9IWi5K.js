const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-cpfccbfZ.js","assets/index-oju9DPd2.js","assets/index-B8E-m_hz.css","assets/SVG-BIkIVnTe.js","assets/index-Ci0zXM0r.js","assets/ShowQR-VVx9wP7p.js","assets/globalSignal-Dx2wg24B.js","assets/ShowQRPrintLabel-jCaHmj9u.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-BiO_tIgN.js","assets/Util-Dx3vfczV.js","assets/Toast-EcAR2H5f.js","assets/Toast-DLpFKn-Q.css","assets/ButonUploadHrm-aFOs53Lm.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-Dsh792tZ.js","assets/LoadingColorSpinner-hMnmkBAW.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-BK-FQRKD.js","assets/debounces-BkW_x1Hm.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as r,_ as s,a as v,u as D,D as O,m as T,d as a,e as V,i as p,S as f,j as h,f as y,n as L,s as R,t as d,k as b}from"./index-oju9DPd2.js";import{t as w,g as E,y as U,O as M,b as z,f as F}from"./Util-Dx3vfczV.js";/* empty css                             */import{c as H,i as W,g as j,u as q,a as K}from"./handelImagesServices-DX538b4X.js";import"./index-Ci0zXM0r.js";var N=d('<div class="elastic_view_bx show"><div class=" spaceAround centerBx">'),Q=d("<div><img alt=sf>"),Y=d('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),G=d("<div>"),J=d("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen");r(()=>s(()=>import("./FlexSpace-cpfccbfZ.js"),__vite__mapDeps([0,1,2])));const X=r(()=>s(()=>import("./SVG-BIkIVnTe.js"),__vite__mapDeps([3,1,2,4])));r(()=>s(()=>import("./ShowQR-VVx9wP7p.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));const Z=r(()=>s(()=>import("./ButonUploadHrm-aFOs53Lm.js"),__vite__mapDeps([15,1,2,3,4,12,16]))),ee=r(()=>s(()=>import("./ButonHrm-Dsh792tZ.js"),__vite__mapDeps([17,1,2,3,4,12,16]))),te=r(()=>s(()=>import("./LoadingColorSpinner-hMnmkBAW.js"),__vite__mapDeps([18,1,2,19])));r(()=>s(()=>import("./DropDwnSearch-BK-FQRKD.js"),__vite__mapDeps([20,1,2,21,3,4,22])));function de(u){const[l,i]=v(null),[n,m]=v(!1),[I,g]=v(!1),[S,re]=D(),$=O();T(()=>{});const x=async(e,t)=>{let o=await j(e.type,t);if(await q(o,e)){let c={deliveryProof:K()+"/"+t,currentStatus:"YABA_99",deliveryUserId:b?.profile?.userId,deliveryUserName:b?.profile?.name,wasDelivery:"OK",deliveryTime:U()};const P=M(u?.list).map(async k=>{await ae({ssg_track_key:k,idairguide:"all"},c)});await Promise.all(P),g(!1),m(!1),$(`/delivery-detail?dId=${S?.dId}`,{replace:!0})}else g(!1)},A=async()=>{g(!0);let e=await H(l()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),t=await W(e),_=await(await fetch(t)).blob(),c=u?.cid+"/"+E()+E()+".webp";x(_,c)},B=e=>{i(e),m(!0)},C=()=>{i(null),m(!1)};return[a(f,{get when(){return!n()||!l()?.source},get children(){var e=N(),t=e.firstChild;return p(t,a(Z,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:B})),e}}),a(f,{get when(){return h(()=>!!n())()&&l()?.source},get children(){return[(()=>{var e=Q(),t=e.firstChild;return y(()=>L(t,"src",l()?.source)),e})(),a(f,{get when(){return h(()=>!!n())()&&!I()},get fallback(){return(()=>{var e=J(),t=e.firstChild;return p(e,a(te,{stroke:"rgb(200 25 60 / 1)",size:32}),t),e})()},get children(){var e=Y(),t=e.firstChild,o=t.nextSibling,_=o.firstChild;return p(t,a(ee,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:C})),o.$$click=A,p(_,a(X,{name:"success",size:32,get color(){return w?.success?.svg}})),y(c=>R(o,w?.success,c)),e}}),G()]}})]}const ae=async(u,l)=>{let i={params:u,data2update:l},n=z(809004);return i={...i,...n},await F(i)};V(["click"]);export{de as default};
