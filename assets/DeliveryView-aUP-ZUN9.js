const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeliveryManifest-DfIFTGi2.js","assets/index-Davks-F7.js","assets/index-DGHHyjai.css","assets/Util-CHzs30Zz.js","assets/index-Ci0zXM0r.js","assets/DeliveryCamera-B-tNgXjC.js","assets/ButonHrm-Dn34qKas.js","assets/SVG-CYTTjjhw.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/debounces-khgXmkFO.js","assets/FlexSpace-D03avtQj.js","assets/globalSignal-hV27f7Qu.js","assets/DeliveryHbl-DDuXFKTP.js","assets/InputHr-BD31HpNN.js","assets/InputHr-M3rJ9grQ.css","assets/ShowScanManifest-D1Qv_i8F.js","assets/ManifestDetails-TzcKMCwR.js","assets/DialogHRM-D44MwW5Y.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryViewDetail-CVxaAHlO.js","assets/ShowScanDeliveryManifest-DYvEIxl6.js","assets/DashManifest-0uAN4-NV.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/DeliveryScanView-Cw-x3STY.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/Toast-FPAwwC2b.js","assets/Toast-DLpFKn-Q.css","assets/browser-image-compression-BVJ4p9S0.js","assets/ItemOnManifestDelivery-BRQRaKtT.js","assets/components-CRjmHA24.js","assets/LoadingColorSpinner-B_V5Hrpr.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{a as v,e as C,i as f,d as u,f as R,t as h,S as F,s as k,c as $,l as g,_ as p,m as w,q as x,F as T,E as j,k as M}from"./index-Davks-F7.js";import{g as L,O as P,b as B,f as V}from"./Util-CHzs30Zz.js";import"./globalSignal-hV27f7Qu.js";import{OpenModal as z}from"./DialogHRM-D44MwW5Y.js";/* empty css                 */import q from"./SVG-CYTTjjhw.js";import"./browser-image-compression-BVJ4p9S0.js";function U({multiple:e=!1,accept:n=""}){const i=document.createElement("input");return i.type="file",i.accept=n,i.multiple=e,i}function Q(e){const n=[];if(!e)return n;for(const i in e){const l=+i;if(isNaN(+l))continue;const t=e[l];if(!t)continue;const s={source:URL.createObjectURL(t),name:t.name,size:t.size,file:t};n.push(s)}return n}function H(e){const[n,i]=v([]);let l=()=>{};const t=async r=>{r.preventDefault(),r.stopPropagation();const o=r.currentTarget;let d=[];o.files&&(d=Q(o.files)),o.removeEventListener("change",t),o.remove(),i(d);try{await l(d)}catch(_){console.error(_)}};return{files:n,selectFiles:r=>{r&&(l=r);const o=U(e||{});o.addEventListener("change",t),o.click()},removeFile:r=>{i(o=>o.filter(d=>d.name!==r))},clearFiles:()=>{i([])}}}var N=h('<div class=" jaqJnq_hrm1"><div class="gHAsFI_hrm1 dqn9fN jUrKkb upl"><h5></h5><div id=fileupload>');function G(e){const[n,i]=v(!1);let l={};if(e?.color){let{r:c,g:a,b:r}=O(e.color),o="rgba("+[c,a,r].join(",")+", 0.17 )",d="rgba("+[c,a,r].join(",")+", 0.21 )",_="rgba("+[c,a,r].join(",")+", 0.42 )";l={"--btn_bg_hrm2":o,"--btn_bg_hover_hrm2":d,"--btn_text_hrm2":e?.color,"--btn_border_hrm2":n()?e?.color:"transparent","--border-radius-8":"8px"},n()&&(l={"--btn_bg_hrm2":o,"--btn_bg_hover_hrm2":_,"--btn_text_hrm2":e?.color,"--btn_border_hrm2":e?.color,"--border-radius-8":"8px"})}const{files:t,selectFiles:s}=H({accept:"image/*"});return(()=>{var c=N(),a=c.firstChild,r=a.firstChild,o=r.nextSibling;return f(a,u(F,{get when(){return e?.icon},get children(){return u(q,{get name(){return e?.icon}})}}),r),f(r,()=>e.label),o.$$click=()=>{s(([{source:d,name:_,size:y,file:S}])=>{e?.handleClick?.({source:d,name:_,size:y,file:S})})},R(d=>k(c,l,d)),c})()}const K={attributes:!0,characterData:!0},W=async(e,n,i,l)=>{const t=new MutationObserver(c=>{c.forEach(a=>{if(a?.type==="attributes"){let r=a?.attributeName?.toString()?.trim(),o=e.toString().trim();r===o&&n&&n(L(),e)}})}),s=i||document.querySelector("html");t.observe(s,K)},O=e=>{e=e.replace("#",""),e.length!==6&&(e=J(e));const n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),l=parseInt(e.slice(4,6),16);return{r:n,g:i,b:l}};function J(e){return e.length===4&&(e=e.replace("#","")),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e}C(["click"]);const ve=Object.freeze(Object.defineProperty({__proto__:null,default:G,hex2rgb:O,observeTagAttr:W},Symbol.toStringTag,{value:"Module"}));var X=h('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Entregas</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div class=centerBx100 style=margin-top:20px><ul class=inline><li class=selected><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"style=width:180px>Manifiestos a entregar</div></li></ul><div style="margin:30px 0;width:90vw ">'),Y=h("<div> <!>."),Z=h("<div> ");const[ee,te]=$();g(()=>p(()=>import("./DeliveryManifest-DfIFTGi2.js"),__vite__mapDeps([0,1,2,3,4])));g(()=>p(()=>import("./DeliveryCamera-B-tNgXjC.js"),__vite__mapDeps([5,1,2,6,7,4,3,8,9,10,11,12])));g(()=>p(()=>import("./DeliveryHbl-DDuXFKTP.js"),__vite__mapDeps([13,1,2,14,15,3,4,7,12,11])));const I=g(()=>p(()=>import("./SVG-CYTTjjhw.js"),__vite__mapDeps([7,1,2,4]))),re=g(()=>p(()=>import("./ShowScanManifest-D1Qv_i8F.js"),__vite__mapDeps([16,1,2,12,9,4,17,3,10,6,7,8,18,19,20,21,22,23,24,25,26,27,28,29,30]))),ne=g(()=>p(()=>import("./ItemOnManifestDelivery-BRQRaKtT.js"),__vite__mapDeps([31,1,2,4,10,18,3,19,12,32]))),ie=g(()=>p(()=>import("./LoadingColorSpinner-B_V5Hrpr.js"),__vite__mapDeps([33,1,2,34]))),[le,se]=$({}),[oe,ae]=v("");function ce(){v(null);const[e,n]=$(""),i=async()=>{const t=await de(M?.profile?.userId,"ST009");let s=[];P(t).map(c=>{let a=t[c];s.push(a)}),n("list",s)};w(i);const l=()=>{let t=L(),s={};s.id=t,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=u(re,{modalId:t,refetch:i}),z(s)};return(()=>{var t=X(),s=t.firstChild,c=s.firstChild,a=c.nextSibling,r=s.nextSibling,o=r.nextSibling,d=o.firstChild,_=d.firstChild,y=_.firstChild,S=y.firstChild,A=d.nextSibling;return a.$$click=l,f(a,u(I,{name:"plus",size:32,color:"#2b2b2b"})),f(S,u(I,{name:"filterList",size:32,color:"#2b2b2b"})),f(A,u(j,{fallback:m=>(()=>{var b=Y(),D=b.firstChild,E=D.nextSibling;return E.nextSibling,f(b,()=>m.toString(),E),b})(),get children(){return u(x,{get fallback(){return(()=>{var m=Z();return m.firstChild,f(m,u(ie,{stroke:"rgb(200 25 60 / 1)",size:62}),null),m})()},get children(){return u(F,{get when(){return e?.list?.length>0},get children(){return u(T,{get each(){return e?.list},children:(m,b)=>u(ne,{item:m})})}})}})}})),t})()}const de=async(e,n,i)=>{let l={params:{status:n,checkAuth:!0}},t=B(703002);return l={...l,...t},await V(l)};C(["click"]);const he=Object.freeze(Object.defineProperty({__proto__:null,default:ce,scannedQRs:ee,setScannedQRs:te,setStatus:ae,setStop2Deliver:se,status:oe,stop2Deliver:le},Symbol.toStringTag,{value:"Module"}));export{ve as B,he as D,se as a,le as s};
