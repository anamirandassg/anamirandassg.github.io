const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-NhBnxl76.js","assets/index-DrIeK7ZK.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js","assets/DropDwnSearch-1yVCdNqV.js","assets/debounces-BtUUkHe0.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-D72KkQu_.js","assets/LoadingColorSpinner-DvaeKhHZ.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-Dn6T3blO.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-D-nNLWHa.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnSalesOrder-DlFaPr-W.js","assets/Toast-8lXuvYZP.js","assets/Toast-DLpFKn-Q.css","assets/components-CWLHYQti.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/DialogHRM-Z7jDCbl6.js","assets/DialogHRM-V9_lZntj.css","assets/ShowQRPrintLabel-C_shXvoB.js","assets/PDFButton-ClnWeH7R.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-DkuHxdU6.js","assets/InitPrintServices-QWHeDiid.js","assets/DashSalePOS-Drm2Vr3g.js","assets/browser-image-compression-BVJ4p9S0.js","assets/handelImagesServices-Cyx2ssQs.js","assets/DashInventoryMov-EDaNuhnY.js","assets/DashInventory-aMdvEHq9.js","assets/PickDate-ME4YHZyf.js"])))=>i.map(i=>d[i]);
import{l as S,_ as C,d as te,a as I,e as z,i as r,f as a,S as k,F as q,h as J,j as U,c as re,t as w,o as le,b as se,p as ie,y as ae,E as ne,m as oe,s as de,g as Q}from"./index-DrIeK7ZK.js";import{s as ce}from"./App.module-CbHnVtRQ.js";import{O as B,g as G,f as pe,m as ue,k as he,a as _e,b as ve}from"./Util-DZlMHKqJ.js";import{OpenModal as fe}from"./DialogHRM-Z7jDCbl6.js";import{c as be}from"./ShowQRPrintLabel-C_shXvoB.js";import{LookupProducts as me}from"./DashSalePOS-Drm2Vr3g.js";import"./browser-image-compression-BVJ4p9S0.js";var ge=w('<div class="centerBx bottombx"><h5 class="">Aranceles</h5><h4 class="">$</h4>'),xe=w('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Resumen por fechas</h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div></div><div class=" flxWrp spaceAround centerBx"><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class="">Cantidad de Lbs: </h5><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class="">Importe por Lbs: </h5><h4 class="">$</h4></div></div><div class=" flxWrp spaceAround centerBx"><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class="">Total de Mercancias: </h5><h4 class="">$</h4></div></div><div class=separator></div><div class=separator></div><div class=" ">'),$e=w('<div class="centerBx bottombx wt65"><h5 class=tr_bar_10>$</h5>X<h4 class=tr_bar_15></h4>=<h5 class=tr_bar_20>$</h5>'),ye=w('<section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx><span aria-hidden=true>Qty: </span></section><p class=GehUpe data-test-line-item-price=""><span data-test-integ-cart-current-price="">$');const M=S(()=>C(()=>import("./SVG-NhBnxl76.js"),__vite__mapDeps([0,1,2,3])));S(()=>C(()=>import("./DropDwnSearch-1yVCdNqV.js"),__vite__mapDeps([4,1,2,5,0,3,6])));function Se(l){I({});const[e,o]=I({totals:0,weight:0}),m=t=>{be(t)},d=t=>{let c=0,g=0,n=0,s=0,b=0,p=0,v=0,u=0,x={},i={},h={};l?.list.map(($,D)=>{$?.isCompleted&&($?.reservas?.map((_,E)=>{let y=V(_?.qty),P=V(_?.price),O=V(_?.arancel);P&&!h[P]&&(h[P]=0),h[P]+=y,c+=y,g+=y*P+O,v+=O}),$?.products?.map((_,E)=>{let y=_?.product?.id;x[y]?(x[y].qty+=_.qty,u+=_.qty*_.salePrice):(x[y]=_,u+=_.qty*_.salePrice)}))}),o({cost:n,sales:g,lbs:s,bulto:b,gross:p,billedBy:i,weight:c,prices:h,aranceles:v,products:x,prodTotals:u})};return z(()=>{console.log("ShowPDFResumeSales"),d()}),(()=>{var t=xe(),c=t.firstChild,g=c.firstChild,n=g.firstChild,s=n.nextSibling,b=s.firstChild,p=c.nextSibling,v=p.firstChild,u=v.firstChild,x=u.nextSibling,i=x.nextSibling,h=v.nextSibling,$=h.firstChild,D=$.nextSibling,_=D.nextSibling;_.firstChild;var E=p.nextSibling,y=E.firstChild,P=y.firstChild,O=P.nextSibling,N=O.nextSibling;N.firstChild;var Y=E.nextSibling,L=Y.nextSibling,W=L.nextSibling;return t.style.setProperty("height","clamp(70vh, 90vh,  94vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),b.$$click=()=>m(l?.item?.bagnumber),r(b,()=>l?.item?.bagnumber),p.style.setProperty("padding","16px"),r(u,a(M,{name:"weight-pound",size:22})),r(i,()=>e()?.weight?.toFixed(2)),r($,a(M,{name:"money_outline",size:22})),r(_,()=>e()?.sales?.toFixed(2),null),E.style.setProperty("padding","16px"),r(P,a(M,{name:"money",size:22})),r(N,()=>(e()?.prodTotals*-1).toFixed(2),null),r(t,a(q,{get each(){return B(e()?.prices)},children:(f,R)=>a(k,{get when(){return e()?.prices?.[f]>0},get children(){var F=$e(),T=F.firstChild;T.firstChild;var Z=T.nextSibling,j=Z.nextSibling,ee=j.nextSibling,H=ee.nextSibling;return H.firstChild,r(T,()=>(f*1).toFixed(2),null),r(j,()=>e()?.prices?.[f]?.toFixed(2)),r(H,()=>(e()?.prices?.[f]*f).toFixed(2),null),F}})}),L),r(t,a(k,{get when(){return e()?.aranceles>0},get children(){var f=ge(),R=f.firstChild,F=R.nextSibling;return F.firstChild,r(F,()=>e()?.aranceles?.toFixed(2),null),f}}),L),W.style.setProperty("padding","16px"),r(W,a(k,{get when(){return B(e()?.products).length>0},get children(){return a(q,{get each(){return B(e()?.products)},children:(f,R)=>a(Ce,{get itm(){return e()?.products[f]}})})}})),J(f=>(f=U()?"86vw":"720px")!=null?t.style.setProperty("width",f):t.style.removeProperty("width")),t})()}const Ce=l=>{const[e,o]=re(),m=async()=>{let d=l?.itm?.product?.id,t=`${d}`,c=await me(t);c?.[d]?.productImageUrl&&o(d,c?.[d])};return z(()=>{m()}),(()=>{var d=ye(),t=d.firstChild,c=t.firstChild,g=c.firstChild;g.firstChild;var n=t.nextSibling,s=n.firstChild,b=s.firstChild;b.firstChild;var p=s.nextSibling,v=p.firstChild;return v.firstChild,r(g,()=>l?.itm?.product?.label,null),r(b,()=>l?.itm?.qty*-1,null),r(v,()=>(l?.itm?.salePrice*1).toFixed(2),null),d})()},V=l=>{let e=l*1;return!isNaN(e)&&typeof e=="number"?e:0};te(["click"]);var Pe=w('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Ordenes</h2><div style=margin:15px class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),we=w("<div> <!>."),De=w("<div> ");const Ee=S(()=>C(()=>import("./FlexSpace-D72KkQu_.js"),__vite__mapDeps([7,1,2])));S(()=>C(()=>import("./SVG-NhBnxl76.js"),__vite__mapDeps([0,1,2,3])));const Fe=S(()=>C(()=>import("./LoadingColorSpinner-DvaeKhHZ.js"),__vite__mapDeps([8,1,2,9]))),Ie=S(()=>C(()=>import("./InputHr-Dn6T3blO.js"),__vite__mapDeps([10,1,2,11]))),Oe=S(()=>C(()=>import("./ButonHrm-D-nNLWHa.js"),__vite__mapDeps([12,1,2,0,3,13]))),Ae=S(()=>C(()=>import("./ItemOnSalesOrder-DlFaPr-W.js"),__vite__mapDeps([14,1,2,3,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]))),ke=S(()=>C(()=>import("./PickDate-ME4YHZyf.js"),__vite__mapDeps([32,1,2,20,21,3])));let A=864e5;function Be(){I(0);const[l,e]=I(null),[o,m]=I("");le(()=>{}),se(()=>{});const d=()=>{let n=_e(),s={};s.id=n,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=a(Se,{modalId:n,refetch:g,get list(){return ve(c())}}),fe(s)},t=n=>{e(n),g()},[c,{refetch:g}]=ie(o,async n=>{let s=Math.floor(l()/A);Math.floor(l()-A),s||(s=void 0);const b=await X(n,s);if(n.length>0){let p=[];return B(b).map(v=>{let u=b[v];if(console.log("dd",u?.createDate,Math.floor((u?.createDate-A)/1e4)),l()){let x=Math.floor(u?.createDate/A);s===x&&p.push(u)}else p.push(u)}),p}else return[]});return z(()=>{}),(()=>{var n=Pe(),s=n.firstChild,b=s.firstChild,p=b.nextSibling,v=s.nextSibling,u=v.firstChild,x=v.nextSibling;return r(s,a(Ee,{}),p),r(s,a(Oe,{color:"#047db7ff",icon:"receipt",label:"Resume",handleClick:d}),p),r(s,a(ke,{get init(){return l()},label:"Fecha",updDate:i=>t(i)}),null),r(u,a(Ie,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#646cff",get value(){return o()},placeholder:"search...",colors:"#2b2b2b",handleClick:i=>m(i)})),r(x,a(ne,{fallback:i=>(()=>{var h=we(),$=h.firstChild,D=$.nextSibling;return D.nextSibling,r(h,()=>i.toString(),D),h})(),get children(){return a(ae,{get fallback(){return(()=>{var i=De();return i.firstChild,r(i,a(Fe,{stroke:"rgb(200 25 60 / 1)",size:62}),null),i})()},get children(){return a(k,{get when(){return c()},get children(){return a(q,{get each(){return c()},children:(i,h)=>a(Ae,{item:i,refetch:g})})}})}})}})),J(i=>{var h=ce.App,$=`padding:16px ${U()?"1vw":"5vw"}  `;return h!==i.e&&oe(n,i.e=h),i.t=de(x,$,i.t),i},{e:void 0,t:void 0}),n})()}const X=async(l,e)=>{let o={params:{businessId:Q?.profile?.businessYId,":search5":Q?.profile?.agencyStore?.id,createdDate:e}};l&&l.split(" ").map((t,c)=>{t&&(o.params[":search"+c]=t.trim())});let m=G(431002);o={...o,...m};const d=await pe(o);return d?.error?{}:d},Le=async l=>{let e=[];l.map(o=>{let m={params:{id:o?.ssg_track_key,idairguide:"all"}},d=G(802002);m={...m,...d},e.push(m)}),ue(e,K)},K=async l=>{const o=await he(l);if(o)return o},We=Object.freeze(Object.defineProperty({__proto__:null,LookupProducts:X,default:Be,fetchCSVInve:K,loadProduct:Le},Symbol.toStringTag,{value:"Module"}));export{We as D,V as i};
