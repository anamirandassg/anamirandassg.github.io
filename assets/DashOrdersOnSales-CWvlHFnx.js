const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BFZDkuHM.js","assets/index-D16NH-Ha.js","assets/index-BRlA1Q7g.css","assets/Util-CugZcr5q.js","assets/DropDwnSearch-wfOq6M-R.js","assets/debounces-DJYpvv3-.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-a1At56JQ.js","assets/LoadingColorSpinner-BlLJKxTv.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BYBcT-WZ.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-K9FnUjhd.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnSalesOrder-DX80nKhC.js","assets/Toast-DR5ncfch.js","assets/Toast-DLpFKn-Q.css","assets/components-DY77s8I7.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/DialogHRM-t8Aqv5b6.js","assets/DialogHRM-V9_lZntj.css","assets/ShowQRPrintLabel-C2QRNPhp.js","assets/fontkit.es-Bw_0IftY.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-kIHy6xNl.js","assets/DashSalePOS-B4slSWFu.js","assets/browser-image-compression-BVJ4p9S0.js","assets/handelImagesServices-BIxY-eYN.js","assets/DashInventoryMov-1P4L5udA.js","assets/AddInventory-h0NuEcmh.js","assets/DashProducts-L2octnvi.js","assets/DashInventory-c4xmDV5y.js","assets/PickDate-CXAiJjYr.js"])))=>i.map(i=>d[i]);
import{l as S,_ as C,h as re,a as R,d as W,i as r,e as n,S as D,F as k,f as G,j as X,c as le,t as A,o as se,b as ie,p as ne,z as ae,E as oe,m as de,s as ce,g as U}from"./index-D16NH-Ha.js";import{s as pe}from"./App.module-CbHnVtRQ.js";import{O as F,g as K,f as ue,m as he,k as _e,a as ve,b as be}from"./Util-CugZcr5q.js";import{OpenModal as ge}from"./DialogHRM-t8Aqv5b6.js";import{c as fe}from"./ShowQRPrintLabel-C2QRNPhp.js";import{LookupProducts as xe}from"./DashSalePOS-B4slSWFu.js";import"./browser-image-compression-BVJ4p9S0.js";var me=A('<div class="centerBx bottombx"><h5 class="">Aranceles</h5><h4 class="">$</h4>'),$e=A('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Resumen por fechas</h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div></div><div class=" flxWrp spaceAround centerBx"><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class="">Cantidad de Lbs: </h5><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class="">Importe por Lbs: </h5><h4 class="">$</h4></div></div><div class=" flxWrp spaceAround centerBx"><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class="">Total de Mercancias: </h5><h4 class="">$</h4></div></div><div class=separator></div><div class=separator></div><div class=separator></div><div class=" ">'),ye=A('<div class="centerBx bottombx wt65"><h5 class=tr_bar_10>$</h5>X<h4 class=tr_bar_15></h4>=<h5 class=tr_bar_20>$</h5>'),Se=A('<div class="centerBx bottombx wt65"><h5 class=tr_bar_20>$</h5><h4 class=tr_bar_80>'),Ce=A('<section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx><span aria-hidden=true>Qty: </span></section><p class=GehUpe data-test-line-item-price=""><span data-test-integ-cart-current-price="">$');const q=S(()=>C(()=>import("./SVG-BFZDkuHM.js"),__vite__mapDeps([0,1,2,3])));S(()=>C(()=>import("./DropDwnSearch-wfOq6M-R.js"),__vite__mapDeps([4,1,2,5,0,3,6])));let Pe={"SERVICIO DE RAPEADO":1,TRANSPORTACION:1,"OTROS SERVICIO":1};function Ee(s){R({});const[e,c]=R({totals:0,weight:0}),g=l=>{fe(l)},p=l=>{let u=0,f=0,o=0,i=0,v=0,h=0,b=0,_=0,x={},t={},m={},$={};s?.list.map((P,B)=>{P?.isCompleted&&(P?.reservas?.map((a,M)=>{let y=z(a?.qty),O=z(a?.price),w=z(a?.arancel);O&&!$[O]&&($[O]=0),$[O]+=y,u+=y,f+=y*O+w,Pe[a?.type]?(t[a?.type]||(t[a?.type]=0),t[a?.type]+=w):(t.ARANCELES||(t.ARANCELES=0),t.ARANCELES+=w)}),P?.products?.map((a,M)=>{let y=a?.product?.id;x[y]?(x[y].qty+=a.qty,_+=a.qty*a.salePrice):(x[y]=a,_+=a.qty*a.salePrice)}))}),c({cost:o,sales:f,lbs:i,bulto:v,gross:h,billedBy:m,weight:u,prices:$,aranceles:b,products:x,prodTotals:_,others:t})};return W(()=>{p()}),(()=>{var l=$e(),u=l.firstChild,f=u.firstChild,o=f.firstChild,i=o.nextSibling,v=i.firstChild,h=u.nextSibling,b=h.firstChild,_=b.firstChild,x=_.nextSibling,t=x.nextSibling,m=b.nextSibling,$=m.firstChild,P=$.nextSibling,B=P.nextSibling;B.firstChild;var a=h.nextSibling,M=a.firstChild,y=M.firstChild,O=y.nextSibling,w=O.nextSibling;w.firstChild;var ee=a.nextSibling,j=ee.nextSibling,V=j.nextSibling,H=V.nextSibling;return l.style.setProperty("height","clamp(70vh, 90vh,  94vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),v.$$click=()=>g(s?.item?.bagnumber),r(v,()=>s?.item?.bagnumber),h.style.setProperty("padding","16px"),r(_,n(q,{name:"weight-pound",size:22})),r(t,()=>e()?.weight?.toFixed(2)),r($,n(q,{name:"money_outline",size:22})),r(B,()=>e()?.sales?.toFixed(2),null),a.style.setProperty("padding","16px"),r(y,n(q,{name:"money",size:22})),r(w,()=>(e()?.prodTotals*-1).toFixed(2),null),r(l,n(k,{get each(){return F(e()?.prices)},children:(d,L)=>n(D,{get when(){return e()?.prices?.[d]>0},get children(){var E=ye(),I=E.firstChild;I.firstChild;var N=I.nextSibling,Q=N.nextSibling,te=Q.nextSibling,J=te.nextSibling;return J.firstChild,r(I,()=>(d*1).toFixed(2),null),r(Q,()=>e()?.prices?.[d]?.toFixed(2)),r(J,()=>(e()?.prices?.[d]*d).toFixed(2),null),E}})}),j),r(l,n(k,{get each(){return F(e()?.others)},children:(d,L)=>n(D,{get when(){return e()?.others?.[d]>0},get children(){var E=Se(),I=E.firstChild;I.firstChild;var N=I.nextSibling;return r(I,()=>e()?.others?.[d]?.toFixed(2),null),r(N,d),E}})}),V),r(l,n(D,{get when(){return e()?.aranceles>0},get children(){var d=me(),L=d.firstChild,E=L.nextSibling;return E.firstChild,r(E,()=>e()?.aranceles?.toFixed(2),null),d}}),V),H.style.setProperty("padding","16px"),r(H,n(D,{get when(){return F(e()?.products).length>0},get children(){return n(k,{get each(){return F(e()?.products)},children:(d,L)=>n(Ae,{get itm(){return e()?.products[d]}})})}})),G(d=>(d=X()?"86vw":"720px")!=null?l.style.setProperty("width",d):l.style.removeProperty("width")),l})()}const Ae=s=>{const[e,c]=le(),g=async()=>{let p=s?.itm?.product?.id,l=`${p}`,u=await xe(l);u?.[p]?.productImageUrl&&c(p,u?.[p])};return W(()=>{g()}),(()=>{var p=Ce(),l=p.firstChild,u=l.firstChild,f=u.firstChild;f.firstChild;var o=l.nextSibling,i=o.firstChild,v=i.firstChild;v.firstChild;var h=i.nextSibling,b=h.firstChild;return b.firstChild,r(f,()=>s?.itm?.product?.label,null),r(v,()=>s?.itm?.qty*-1,null),r(b,()=>(s?.itm?.salePrice*1).toFixed(2),null),p})()},z=s=>{let e=s*1;return!isNaN(e)&&typeof e=="number"?e:0};re(["click"]);var Oe=A('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Ordenes</h2><div style=margin:15px class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),Ie=A("<div> <!>."),we=A("<div> ");const De=S(()=>C(()=>import("./FlexSpace-a1At56JQ.js"),__vite__mapDeps([7,1,2])));S(()=>C(()=>import("./SVG-BFZDkuHM.js"),__vite__mapDeps([0,1,2,3])));const Fe=S(()=>C(()=>import("./LoadingColorSpinner-BlLJKxTv.js"),__vite__mapDeps([8,1,2,9]))),Re=S(()=>C(()=>import("./InputHr-BYBcT-WZ.js"),__vite__mapDeps([10,1,2,11]))),Le=S(()=>C(()=>import("./ButonHrm-K9FnUjhd.js"),__vite__mapDeps([12,1,2,0,3,13]))),Te=S(()=>C(()=>import("./ItemOnSalesOrder-DX80nKhC.js"),__vite__mapDeps([14,1,2,3,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,5,31,7,32]))),ke=S(()=>C(()=>import("./PickDate-CXAiJjYr.js"),__vite__mapDeps([33,1,2,20,21,3])));let T=864e5;function Be(){R(0);const[s,e]=R(null),[c,g]=R("");se(()=>{}),ie(()=>{});const p=()=>{let o=ve(),i={};i.id=o,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=n(Ee,{modalId:o,refetch:f,get list(){return be(u())}}),ge(i)},l=o=>{e(o),f()},[u,{refetch:f}]=ne(c,async o=>{let i=Math.floor(s()/T);Math.floor(s()-T),i||(i=void 0);const v=await Y(o,i);if(o.length>0){let h=[];return F(v).map(b=>{let _=v[b];if(console.log("dd",_?.createDate,Math.floor((_?.createDate-T)/1e4)),s()){let x=Math.floor(_?.createDate/T);i===x&&h.push(_)}else h.push(_)}),h}else return[]});return W(()=>{}),(()=>{var o=Oe(),i=o.firstChild,v=i.firstChild,h=v.nextSibling,b=i.nextSibling,_=b.firstChild,x=b.nextSibling;return r(i,n(De,{}),h),r(i,n(Le,{color:"#047db7ff",icon:"receipt",label:"Resume",handleClick:p}),h),r(i,n(ke,{get init(){return s()},label:"Fecha",updDate:t=>l(t)}),null),r(_,n(Re,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#646cff",get value(){return c()},placeholder:"search...",colors:"#2b2b2b",handleClick:t=>g(t)})),r(x,n(oe,{fallback:t=>(()=>{var m=Ie(),$=m.firstChild,P=$.nextSibling;return P.nextSibling,r(m,()=>t.toString(),P),m})(),get children(){return n(ae,{get fallback(){return(()=>{var t=we();return t.firstChild,r(t,n(Fe,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return n(D,{get when(){return u()},get children(){return n(k,{get each(){return u()},children:(t,m)=>n(Te,{item:t,refetch:f})})}})}})}})),G(t=>{var m=pe.App,$=`padding:16px ${X()?"1vw":"5vw"}  `;return m!==t.e&&de(o,t.e=m),t.t=ce(x,$,t.t),t},{e:void 0,t:void 0}),o})()}const Y=async(s,e)=>{let c={params:{businessId:U?.profile?.businessYId,":search5":U?.profile?.agencyStore?.id,createdDate:e}};s&&s.split(" ").map((l,u)=>{l&&(c.params[":search"+u]=l.trim())});let g=K(431002);c={...c,...g};const p=await ue(c);return p?.error?{}:p},Me=async s=>{let e=[];s.map(c=>{let g={params:{id:c?.ssg_track_key,idairguide:"all"}},p=K(802002);g={...g,...p},e.push(g)}),he(e,Z)},Z=async s=>{const c=await _e(s);if(c)return c},Qe=Object.freeze(Object.defineProperty({__proto__:null,LookupProducts:Y,default:Be,fetchCSVInve:Z,loadProduct:Me},Symbol.toStringTag,{value:"Module"}));export{Qe as D,z as i};
