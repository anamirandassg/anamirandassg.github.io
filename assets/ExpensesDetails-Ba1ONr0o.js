const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DW4SzQXa.js","assets/index-CzfKLxBa.js","assets/index-PRcoyGS_.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-BdDSSbfP.js","assets/debounces-CkoKtUnb.js","assets/SVG-zE3qDjnm.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-DEOK6n7l.js","assets/ButonUploadHrm-BqYLYijg.js","assets/Util-D886uaAp.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-DrtmZ0kM.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-CfLV6fHF.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as p,_,u as O,c as $,a as d,o as w,h as D,m as V,i as s,d as a,k as P,e as A,t as m,S as g}from"./index-CzfKLxBa.js";import{b as C,f as I,e as L}from"./Util-D886uaAp.js";import{u as B}from"./debounces-CkoKtUnb.js";import"./globalSignal-OLwNkv5r.js";import"./ButonHrm-CPmAnXK-.js";import"./browser-image-compression-BVJ4p9S0.js";import"./DashInventory-DQeNzUK_.js";import"./index-Ci0zXM0r.js";/* empty css                 */import"./SVG-zE3qDjnm.js";import"./App.module-CbHnVtRQ.js";import"./DialogHRM-w3xL4z2O.js";var R=m('<div><div class=" flxWrp spaceAround "><div class="centerBx flxWrp "style=margin:16px></div><div class="centerBx flxWrp "style=margin:16px>'),T=m("<div><div style=padding:30px>"),j=m("<div> "),k=m("<div style=margin:8px>"),q=m('<div class="centerBx flxWrp "><div class="bottombx centerBx unit"><h5>'),Q=m("<div class=unitBx><h5>"),W=m('<div class="centerBx flxWrp "><div class="bottombx centerBx unit"><h5></h5><div class=bag_number><h5>');const F=p(()=>_(()=>import("./LoadingColorSpinner-DW4SzQXa.js"),__vite__mapDeps([0,1,2,3])));p(()=>_(()=>import("./DropDwnSearch-BdDSSbfP.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const M=p(()=>_(()=>import("./FlexSpace-DEOK6n7l.js"),__vite__mapDeps([9,1,2])));p(()=>_(()=>import("./ButonUploadHrm-BqYLYijg.js"),__vite__mapDeps([10,1,2,6,7,11,12])));p(()=>_(()=>import("./CheckBoxSlide-DrtmZ0kM.js"),__vite__mapDeps([13,1,2,14])));const z=p(()=>_(()=>import("./InputHr-CfLV6fHF.js"),__vite__mapDeps([15,1,2,16])));p(()=>_(()=>import("./SVG-zE3qDjnm.js"),__vite__mapDeps([6,1,2,7])));function oe(e){const[t,l]=O(),[r,o]=$({search:""});$(),$(),d(null),d(!1),d(!1),d("");const[f,x]=d("");B(x,400),w(()=>{}),D(()=>{});const i=async()=>{if(t?.mId){let n={id:t?.mId,businessId:P?.profile?.businessYId},c=await G(n);console.log(c),o("expensesObj",c?.[t?.mId])}};V(async()=>{i()});const b=async n=>{i()},u=async(n,c)=>{b()};return(()=>{var n=T(),c=n.firstChild;return s(n,a(g,{get when(){return r?.expensesObj?.amount},get fallback(){return(()=>{var v=j();return v.firstChild,s(v,a(F,{stroke:"rgb(200 25 60 / 1)",size:62}),null),v})()},get children(){var v=R(),S=v.firstChild,h=S.firstChild,y=h.nextSibling;return s(h,a(E,{get value(){return r?.expensesObj?.seller},label:"Vendedor:",key:"seller",updItem:u}),null),s(h,a(M,{}),null),s(h,a(E,{get value(){return r?.expensesObj?.amount},label:"Costo:",key:"amount",updItem:u}),null),s(y,a(H,{get value(){return r?.expensesObj?.category},label:"Categoria:",key:"category",updItem:u}),null),s(y,a(Y,{}),null),s(y,a(E,{get value(){return r?.expensesObj?.description},label:"Descripcion:",key:"description",updItem:u}),null),v}}),c),n})()}const Y=()=>[k(),"|",k()],E=e=>{const[t,l]=d(!1),[r,o]=d(""),f=()=>{e?.updItem(e?.key,r()),l(!1)},x=()=>{let i=t();i||o(e?.value),l(!i)};return a(g,{get when(){return e?.value},get children(){var i=q(),b=i.firstChild,u=b.firstChild;return u.$$click=x,s(u,()=>e?.label),s(b,a(g,{get when(){return t()},get fallback(){return(()=>{var n=Q(),c=n.firstChild;return s(c,()=>e?.value),n})()},get children(){return a(z,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r()},placeholder:"Modelo",colors:"#2b2b2b",handleClick:n=>o(n),onEnter:f})}}),null),i}})},H=e=>a(g,{get when(){return e?.value},get children(){var t=W(),l=t.firstChild,r=l.firstChild,o=r.nextSibling,f=o.firstChild;return s(r,()=>e?.label),s(f,()=>e?.value),t}}),ie=async(e,t)=>{let l={params:{id:e,businessId:P?.profile?.businessYId},form:t},r=C(129004);return l={...l,...r},await I(l)},G=async e=>{let t={params:e},l=C(162001);return t={...t,...l},await I(t)},ue=async e=>{let t=[];e.map(l=>{let r={params:{id:l?.ssg_track_key,idairguide:"all"}},o=C(802002);r={...r,...o},t.push(r)}),L(t,J)},J=async e=>{const l=await I(e);if(l)return l};A(["click"]);export{oe as default,J as fetchCSVInve,ue as loadProduct,ie as updProducts};