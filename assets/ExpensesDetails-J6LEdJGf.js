const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-V7r5BmBU.js","assets/index-Dg4KpUrp.js","assets/index-DEEWbFNK.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-D9P_Qaex.js","assets/debounces-3jQDg8TB.js","assets/SVG-D0ylncmC.js","assets/Util-CKCUAuLU.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-D1DJRcmd.js","assets/ButonUploadHrm-b8kpNAY1.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-DX_EBrIP.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-9Yn1MKaj.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as p,_,p as O,c as $,a as d,o as w,k as D,b as V,i as s,d as a,S as g,n as P,h as A,t as m}from"./index-Dg4KpUrp.js";import{c as C,f as I,j as L}from"./Util-CKCUAuLU.js";import{u as B}from"./debounces-3jQDg8TB.js";import"./ButonHrm-DBbYMi31.js";import"./browser-image-compression-BVJ4p9S0.js";import"./DashInventory-Cigp0PAx.js";/* empty css                 */import"./SVG-D0ylncmC.js";import"./App.module-CbHnVtRQ.js";import"./DialogHRM-CrfiTYfI.js";var j=m('<div><div class=" flxWrp spaceAround "><div class="centerBx flxWrp "style=margin:16px></div><div class="centerBx flxWrp "style=margin:16px>'),R=m("<div><div style=padding:30px>"),T=m("<div> "),k=m("<div style=margin:8px>"),q=m('<div class="centerBx flxWrp "><div class="bottombx centerBx unit"><h5>'),Q=m("<div class=unitBx><h5>"),W=m('<div class="centerBx flxWrp "><div class="bottombx centerBx unit"><h5></h5><div class=bag_number><h5>');const F=p(()=>_(()=>import("./LoadingColorSpinner-V7r5BmBU.js"),__vite__mapDeps([0,1,2,3])));p(()=>_(()=>import("./DropDwnSearch-D9P_Qaex.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const M=p(()=>_(()=>import("./FlexSpace-D1DJRcmd.js"),__vite__mapDeps([9,1,2])));p(()=>_(()=>import("./ButonUploadHrm-b8kpNAY1.js"),__vite__mapDeps([10,1,2,6,7,11])));p(()=>_(()=>import("./CheckBoxSlide-DX_EBrIP.js"),__vite__mapDeps([12,1,2,13])));const z=p(()=>_(()=>import("./InputHr-9Yn1MKaj.js"),__vite__mapDeps([14,1,2,15])));p(()=>_(()=>import("./SVG-D0ylncmC.js"),__vite__mapDeps([6,1,2,7])));function ne(e){const[t,l]=O(),[r,o]=$({search:""});$(),$(),d(null),d(!1),d(!1),d("");const[f,x]=d("");B(x,400),w(()=>{}),D(()=>{});const i=async()=>{if(t?.mId){let n={id:t?.mId,businessId:P?.profile?.businessYId},u=await G(n);console.log(u),o("expensesObj",u?.[t?.mId])}};V(async()=>{i()});const b=async n=>{i()},c=async(n,u)=>{b()};return(()=>{var n=R(),u=n.firstChild;return s(n,a(g,{get when(){return r?.expensesObj?.amount},get fallback(){return(()=>{var v=T();return v.firstChild,s(v,a(F,{stroke:"rgb(200 25 60 / 1)",size:62}),null),v})()},get children(){var v=j(),S=v.firstChild,h=S.firstChild,y=h.nextSibling;return s(h,a(E,{get value(){return r?.expensesObj?.seller},label:"Vendedor:",key:"seller",updItem:c}),null),s(h,a(M,{}),null),s(h,a(E,{get value(){return r?.expensesObj?.amount},label:"Costo:",key:"amount",updItem:c}),null),s(y,a(H,{get value(){return r?.expensesObj?.category},label:"Categoria:",key:"category",updItem:c}),null),s(y,a(Y,{}),null),s(y,a(E,{get value(){return r?.expensesObj?.description},label:"Descripcion:",key:"description",updItem:c}),null),v}}),u),n})()}const Y=()=>[k(),"|",k()],E=e=>{const[t,l]=d(!1),[r,o]=d(""),f=()=>{e?.updItem(e?.key,r()),l(!1)},x=()=>{let i=t();i||o(e?.value),l(!i)};return a(g,{get when(){return e?.value},get children(){var i=q(),b=i.firstChild,c=b.firstChild;return c.$$click=x,s(c,()=>e?.label),s(b,a(g,{get when(){return t()},get fallback(){return(()=>{var n=Q(),u=n.firstChild;return s(u,()=>e?.value),n})()},get children(){return a(z,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r()},placeholder:"Modelo",colors:"#2b2b2b",handleClick:n=>o(n),onEnter:f})}}),null),i}})},H=e=>a(g,{get when(){return e?.value},get children(){var t=W(),l=t.firstChild,r=l.firstChild,o=r.nextSibling,f=o.firstChild;return s(r,()=>e?.label),s(f,()=>e?.value),t}}),ae=async(e,t)=>{let l={params:{id:e,businessId:P?.profile?.businessYId},form:t},r=C(129004);return l={...l,...r},await I(l)},G=async e=>{let t={params:e},l=C(162001);return t={...t,...l},await I(t)},oe=async e=>{let t=[];e.map(l=>{let r={params:{id:l?.ssg_track_key,idairguide:"all"}},o=C(802002);r={...r,...o},t.push(r)}),L(t,J)},J=async e=>{const l=await I(e);if(l)return l};A(["click"]);export{ne as default,J as fetchCSVInve,oe as loadProduct,ae as updProducts};
