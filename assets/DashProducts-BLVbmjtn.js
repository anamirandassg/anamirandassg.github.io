const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-C1cAyHOn.js","assets/index-ZuRdWjxZ.js","assets/index-BRlA1Q7g.css","assets/SVG-B0O-UaJG.js","assets/Util-CJwQ4eI5.js","assets/AddProduct-X1lC4jNz.js","assets/DialogHRM-tsaHe75L.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-C8gCccs0.js","assets/LoadingColorSpinner-D3IEEzk2.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-D2AKaV_Q.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-aSfnD0Ck.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-_7GoFRP_.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnProduct-NmpXdACp.js","assets/handelImagesServices-DOHcSlrd.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-CMIWZgHk.js","assets/Toast-DLpFKn-Q.css","assets/ShowQRPrintLabel-LwNql91u.js","assets/fontkit.es-yAesCE8D.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-tbDVtYPt.js","assets/components-Ndc71V9s.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FloatInputText-B4-cE1qY.js","assets/FloatInputText-BnENulVO.css"])))=>i.map(i=>d[i]);
import{l as n,_ as l,a as I,o as O,b as w,p as L,d as D,i as p,e as s,x as R,S as k,z as V,F as T,E as q,f as B,j as F,m as M,s as Q,g as S,t as E}from"./index-ZuRdWjxZ.js";import{s as z}from"./App.module-CbHnVtRQ.js";import{f as $,g as C,m as j,k as H,a as W,O as A}from"./Util-CJwQ4eI5.js";import{OpenModal as U}from"./DialogHRM-tsaHe75L.js";var Y=E('<div class="centerBx bottombx "><h5 class="">Stock'),K=E('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Productos</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),N=E("<div> <!>."),G=E("<div> ");const J=n(()=>l(()=>import("./FlexSpace-C1cAyHOn.js"),__vite__mapDeps([0,1,2])));n(()=>l(()=>import("./SVG-B0O-UaJG.js"),__vite__mapDeps([3,1,2,4])));const X=n(()=>l(()=>import("./AddProduct-X1lC4jNz.js"),__vite__mapDeps([5,1,2,4,6,7,8]))),Z=n(()=>l(()=>import("./LoadingColorSpinner-D3IEEzk2.js"),__vite__mapDeps([9,1,2,10])));n(()=>l(()=>import("./InputHr-D2AKaV_Q.js"),__vite__mapDeps([11,1,2,12])));const ee=n(()=>l(()=>import("./ButonHrm-aSfnD0Ck.js"),__vite__mapDeps([13,1,2,3,4,14]))),te=n(()=>l(()=>import("./CheckBoxSlide-_7GoFRP_.js"),__vite__mapDeps([15,1,2,16]))),re=n(()=>l(()=>import("./ItemOnProduct-NmpXdACp.js"),__vite__mapDeps([17,1,2,4,8,6,7,18,19,20,21,22,23,24,25,26,27,28]))),se=n(()=>l(()=>import("./FloatInputText-B4-cE1qY.js"),__vite__mapDeps([29,1,2,30]))),[y,ae]=I(!1);function pe(){const[r,_]=I(0),[t,f]=I("");O(()=>{}),w(()=>{});const v=()=>{let d=W(),a={};a.id=d,a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=s(X,{modalId:d,refetch:b}),U(a)},[g,{refetch:b}]=L(t,async d=>{const a=await oe(d,r());let c={};if(y()){let o=await ne();A(o)?.map(u=>{o[u]?.products?.map(m=>{let e=m?.product?.id;c[e]||(c[e]={total:0,balance:0}),c[e].balance+=m?.price*1*m?.qty*1,c[e].total+=m?.qty*1})})}let h=[];return A(a).map(o=>{let u=a[o];y()?!c[o]?.total&&!u?.productImageUrl&&(u.stock=c[o],h.push(u)):h.push(u)}),h});return D(()=>{}),(()=>{var d=K(),a=d.firstChild,c=a.firstChild,h=c.nextSibling,o=a.nextSibling,u=o.firstChild,m=o.nextSibling;return p(a,s(J,{}),h),p(h,s(ee,{color:"#37be5fff",icon:"plus",label:"Agregar",handleClick:v})),p(u,s(se,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",validations:{required:!0},index:1,get value(){return t()},placeholder:"Productos",colors:"#2b2b2b",handleClick:e=>f(e)})),p(o,s(k,{get when(){return R()},get children(){var e=Y(),i=e.firstChild;return p(e,s(te,{get initValue(){return y()},updChange:x=>ae(!y()),color:"var(--background-red-ssg)"}),i),e}}),null),p(m,s(q,{fallback:e=>(()=>{var i=N(),x=i.firstChild,P=x.nextSibling;return P.nextSibling,p(i,()=>e.toString(),P),i})(),get children(){return s(V,{get fallback(){return(()=>{var e=G();return e.firstChild,p(e,s(Z,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return s(k,{get when(){return g()},get children(){return s(T,{get each(){return g()},children:(e,i)=>s(re,{item:e,refetch:b})})}})}})}})),B(e=>{var i=z.App,x=`padding:16px ${F()?"1vw":"5vw"}  `;return i!==e.e&&M(d,e.e=i),e.t=Q(m,x,e.t),e},{e:void 0,t:void 0}),d})()}const oe=async(r,_)=>{let t={params:{businessId:S?.profile?.businessYId}};r&&r.split(" ").map((g,b)=>{g&&(t.params[":search"+b]=g.trim())});let f=C(122001);t={...t,...f},t.params[":search0"];const v=await $(t);return v?.error?{}:v},_e=async r=>{let _=[];r.map(t=>{let f={params:{id:t?.ssg_track_key,idairguide:"all"}},v=C(802002);f={...f,...v},_.push(f)}),j(_,ie)},ie=async r=>{const t=await H(r);if(t)return t},ne=async()=>{let r={params:{businessId:S?.profile?.businessYId,":search0":"produ"}},_=C(132001);r={...r,..._},r.params[":search0"];const t=await $(r);return t?.error?{}:t};export{X as AddProduct,ne as LookupInventoryOnProd,oe as LookupProducts,pe as default,ie as fetchCSVInve,_e as loadProduct,ae as setShowstock,y as showstock};
