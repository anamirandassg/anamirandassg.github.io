const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-CWMkyEAF.js","assets/index-dqKcxXDx.js","assets/index-DEEWbFNK.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-DmFUGNvp.js","assets/debounces-DoXmuWlk.js","assets/SVG-CSSerAjY.js","assets/Util-C4Gv2Rs-.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-CRp4kLNy.js","assets/ButonHrm-pdeS58tf.js","assets/ButonHrm-BSeWNUGQ.css","assets/UpdInventory-BNC9RrUM.js","assets/DialogHRM-CIe1SfVn.js","assets/DialogHRM-V9_lZntj.css","assets/DashProducts-Lj0sJOkP.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InputHr-qthB2fMY.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as S,_ as v,p as st,c as D,a as at,o as it,k as ot,b as K,i as f,d as A,F as lt,S as X,w as rt,e as nt,s as ct,h as dt,t as Y,n as ft}from"./index-dqKcxXDx.js";import{d as T,e as M,c as H,f as J,j as ut}from"./Util-C4Gv2Rs-.js";import{u as ht}from"./debounces-DoXmuWlk.js";import"./DialogHRM-CIe1SfVn.js";import{g as mt,a as pt}from"./handelImagesServices-DFTqSuS4.js";import"./DashInventoryMov-D19MybYN.js";import{LookupProducts as xt}from"./DashProducts-Lj0sJOkP.js";import{P as _t,S as G,r as i}from"./PDFButton-CCQT0yk3.js";import{f as bt}from"./fontkit.es-BaZy4qZc.js";import{b as wt}from"./InitPrintServices-COQVt4ve.js";import"./qrcode-DHy8FFhS.js";import"./Toast-BAZ9l--3.js";import"./browser-image-compression-BVJ4p9S0.js";import"./App.module-CbHnVtRQ.js";let t=0;const gt=async a=>{const o=await _t.create();o.registerFontkit(bt);var s=await o.embedFont(G.TimesRoman),l=await o.embedFont(G.TimesRomanBold),n=await o.embedFont(G.TimesRomanBold);if(T("modernFontReport")){let d=T("Roboto-Bold.ttf");const B=await fetch(d).then(y=>y.arrayBuffer());l=await o.embedFont(B);let W=T("ggSans-Italic.ttf");const U=await fetch(W).then(y=>y.arrayBuffer());s=await o.embedFont(U);let V=T("ggSans-Medium.ttf");const k=await fetch(V).then(y=>y.arrayBuffer());n=await o.embedFont(k)}let e=o.addPage();const{width:h,height:c}=e.getSize(),r=10;t=c-40;const u=n.widthOfTextAtSize(a?.invoice,12),b=s.widthOfTextAtSize("Invoice: ",11);e.drawText("Invoice: ",{x:580-u-b,y:t,size:11,font:s,color:i(0,0,0)}),e.drawText(a?.invoice,{x:580-u,y:t,size:12,font:n,color:i(0,0,0)});let m=c-30,p=T("storeGroupBy")?.[a?.store]?.label;e.drawText(p,{x:20,y:m,size:13,font:l,color:i(0,0,0)}),t=t-20;let $=a?.createDate;const w=s.widthOfTextAtSize("Fecha: ",11),g=l.widthOfTextAtSize(M($)+"",12);e.drawText("Fecha: ",{x:580-w-g,y:t,size:11,font:s,color:i(0,0,0)}),e.drawText(M($)+"",{x:580-g,y:t,size:12,font:l,color:i(.06,.06,.06)}),t=t-20;let x=T("providers_ids")?.[a?.customer?.providerId]?.name||"";if(x){const d=s.widthOfTextAtSize("Bill To: ",11),B=l.widthOfTextAtSize(x+"",12);e.drawText("Bill To: ",{x:580-d-B,y:t,size:11,font:s,color:i(0,0,0)}),e.drawText(x+"",{x:580-B,y:t,size:12,font:l,color:i(0,0,0)})}t=t-50,e.drawRectangle({x:15,y:t+1,width:560,height:.85,color:i(.53,.53,.53),borderColor:i(.53,.53,.53)}),e.drawText(a?.description+"",{x:20,y:t-11,size:10,font:s,color:i(0,0,0)}),t=t-20,e.drawRectangle({x:15,y:t+1,width:560,height:.85,color:i(.53,.53,.53),borderColor:i(.53,.53,.53)}),t=t-18,e.drawText("Producto",{x:20,y:t,size:13,font:l,color:i(0,0,0)});const z=l.widthOfTextAtSize("Qty",12);e.drawText("Qty",{x:400-z,y:t,size:12,font:l,color:i(0,0,0)});const C=l.widthOfTextAtSize("Precio",12);e.drawText("Precio",{x:480-C,y:t,size:12,font:l,color:i(0,0,0)});const O=l.widthOfTextAtSize("Total",12);e.drawText("Total",{x:560-O,y:t,size:12,font:l,color:i(0,0,0)}),t=t-8,e.drawRectangle({x:15,y:t+1,width:560,height:.95,color:i(.53,.53,.53),borderColor:i(.53,.53,.53)});let _=a?.products||[];Array.isArray(_)&&_.map((d,B)=>{const W=d?.product?.label;t=t-16,W&&e.drawText(W+"",{x:20,y:t,size:r,font:s,color:i(0,0,0)});let U=d?.qty?(d?.qty*-1).toFixed(2):"0.00";const V=s.widthOfTextAtSize(U+"",r);e.drawText(U+"",{x:400-V,y:t,size:r,font:s,color:i(0,0,0)});let k=d?.qty?(d?.salePrice*1).toFixed(2):"0.00";const y=s.widthOfTextAtSize(k+"",r);e.drawText(k+"",{x:480-y,y:t,size:r,font:s,color:i(0,0,0)});let N=d?.qty?(d?.salePrice*d?.qty*-1).toFixed(2):"0.00";const et=s.widthOfTextAtSize(N+"",r);e.drawText(N+"",{x:560-et,y:t,size:r,font:s,color:i(0,0,0)})}),t=t-28,e.drawRectangle({x:15,y:t+1,width:560,height:.85,color:i(.53,.53,.53),borderColor:i(.53,.53,.53)});let F=500;t=t-20;let I=a?.amount?a?.amount?.toFixed(2):"0.00";const E=s.widthOfTextAtSize(I+"",r);e.drawText(I+"",{x:560-E,y:t,size:r,font:s,color:i(.13,.13,.13)});const L=s.widthOfTextAtSize("SubTotal",r);e.drawText("SubTotal",{x:F-L,y:t,size:r,font:s,color:i(0,0,0)}),t=t-16;let R=a?.hasTax?a?.hasTax?.toFixed(2):"0.00";const j=s.widthOfTextAtSize(R+"",r);e.drawText(R+"",{x:560-j,y:t,size:r,font:s,color:i(.13,.13,.13)});const Q=s.widthOfTextAtSize("Taxes",r);e.drawText("Taxes",{x:F-Q,y:t,size:r,font:s,color:i(0,0,0)});let P=a?.hasTax?a?.hasTax+a?.amount:a?.amount*1;t=t-16;let q=P?P?.toFixed(2):"0.00";const Z=n.widthOfTextAtSize(q+"",11);e.drawText(q+"",{x:560-Z,y:t,size:11,font:n,color:i(0,0,0)});const tt=n.widthOfTextAtSize("Total",11);e.drawText("Total",{x:F-tt,y:t,size:11,font:n,color:i(0,0,0)});{const d=await o.save();return wt(d)}};var yt=Y('<div style="padding:50px 0"><section class=qsuVSc><section class=bLl6je><section class=dvPdhb></section></section><section class=KgyCAd>'),Tt=Y('<section class=rtS8wf><div class=X3QHFf><div class="LhAUHc evth2b"><div class=kDdWge><div class=QCNFEe><p class=jhB0af>Summario de la orden</p></div><div class=qntUl><p class=B7xUP><span data-test-integ-cart-subtotal-label="">Subtotal</span><span data-test-integ-cart-subtotal-value="">$</span></p><p class=B7xUP><span data-test-integ-cart-subtotal-label="">Estimated tax</span><span data-test-integ-cart-subtotal-value="">$</span></p><p class=B7xUP><span data-test-integ-cart-subtotal-label=""class=OGw7rb>Estimated total</span><span data-test-integ-cart-subtotal-value=""class=OGw7rb> $</span></p></div></div><div class=oPYFfd><section class=BQHvme><section class=wo08ff><span class=PwY8l2>Fecha:</span><span class=PwY8l33> </span></section><section class=wo08ff><span class=PwY8l2>Invoice:</span><span class=PwY8l33></span></section><section class=wo08ff><span class=PwY8l2>Almacen:</span><span class=PwY8l33> </span></section></section></div><section class=JM2zDb>'),St=Y('<section class=dEfaq><section><button class="yjHiqb wv2Pxc"jsaction=click:A4e0fe data-line-number=1 data-test-sfl-btn=1 aria-label="Move Nest Doorbell (wired, 2nd gen) (Snow) from cart to save for later cart."><span>Save for later</span></button></section><section class=JpKBkb><button class=yjHiqb jsaction=click:IY6UFe data-line-number=1 data-selected-quantity=1 data-test-remove-btn=1 aria-label="Remove Nest Doorbell (wired, 2nd gen) (Snow) from cart"><span>Remove'),vt=Y('<section class=kGEQJf><section class=Z722Ge><section class=VcJUVb><section class=h7Oog><span class=YdB1ac><img class=bwpkad alt=sf></span><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx><span aria-hidden=true>Qty:</span><span aria-hidden=true class=PwY8l33></span></section><p class=GehUpe data-test-line-item-price=""><span data-test-integ-cart-current-price="">$');S(()=>v(()=>import("./LoadingColorSpinner-CWMkyEAF.js"),__vite__mapDeps([0,1,2,3])));S(()=>v(()=>import("./DropDwnSearch-DmFUGNvp.js"),__vite__mapDeps([4,1,2,5,6,7,8])));S(()=>v(()=>import("./FlexSpace-CRp4kLNy.js"),__vite__mapDeps([9,1,2])));const $t=S(()=>v(()=>import("./ButonHrm-pdeS58tf.js"),__vite__mapDeps([10,1,2,6,7,11])));S(()=>v(()=>import("./UpdInventory-BNC9RrUM.js"),__vite__mapDeps([12,1,2,7,13,14,5,15,16,17,9])));S(()=>v(()=>import("./InputHr-qthB2fMY.js"),__vite__mapDeps([18,1,2,19])));S(()=>v(()=>import("./SVG-CSSerAjY.js"),__vite__mapDeps([6,1,2,7])));function Qt(){const[a,o]=st(),[s,l]=D({search:""});D(),D(),D();const[n,e]=at("");ht(e,400),it(()=>{}),ot(()=>{});const h=async()=>{if(a?.mId){let c={id:a?.mId,businessId:ft?.profile?.businessYId},r=await At(c);l("manifestObj",r)}};return K(async()=>{h()}),(()=>{var c=yt(),r=c.firstChild,u=r.firstChild,b=u.firstChild;return u.nextSibling,f(b,A(X,{get when(){return s?.manifestObj?.products},get children(){return A(lt,{get each(){return s?.manifestObj?.products},children:(m,p)=>A(Ct,{itm:m})})}})),f(r,A(zt,{get item(){return s?.manifestObj},get list(){return s?.manifestObj}}),null),c})()}const zt=a=>{const o=l=>{let n=0;return a?.item?.products?.map(e=>{n+=e?.qty*-1*e?.salePrice}),n},s=async l=>{let n={...a?.item};n.amount=o();let e=await gt(n);window.open(e)};return(()=>{var l=Tt(),n=l.firstChild,e=n.firstChild,h=e.firstChild,c=h.firstChild,r=c.nextSibling,u=r.firstChild,b=u.firstChild,m=b.nextSibling;m.firstChild;var p=u.nextSibling,$=p.firstChild,w=$.nextSibling;w.firstChild;var g=p.nextSibling,x=g.firstChild,z=x.nextSibling;z.firstChild;var C=h.nextSibling,O=C.firstChild,_=O.firstChild,F=_.firstChild,I=F.nextSibling;I.firstChild;var E=_.nextSibling,L=E.firstChild,R=L.nextSibling,j=E.nextSibling,Q=j.firstChild,P=Q.nextSibling;P.firstChild;var q=C.nextSibling;return f(m,()=>o().toFixed(2),null),f(w,()=>(o()*.06).toFixed(2),null),f(z,()=>(o()*.06+o()).toFixed(2),null),f(I,()=>M(a?.item?.createDate),null),f(R,()=>a?.item?.invoice),f(P,()=>T("storeGroupBy")?.[a?.item?.store]?.label,null),f(q,A($t,{color:"#646cff",label:"Imprimir",handleClick:s})),l})()},Ct=a=>{const[o,s]=D(),l=()=>o?.[a?.itm?.product?.id]?.productImageUrl?mt()+pt()+"/"+o?.[a?.itm?.product?.id]?.productImageUrl:null,n=async()=>{let e=a?.itm?.product?.id,h=`${e}`,c=await xt(h);c?.[e]?.productImageUrl&&s(e,c?.[e])};return K(()=>{n()}),(()=>{var e=vt(),h=e.firstChild,c=h.firstChild,r=c.firstChild,u=r.firstChild,b=u.firstChild,m=u.nextSibling,p=m.firstChild,$=p.firstChild,w=$.firstChild;w.firstChild;var g=p.nextSibling,x=g.firstChild,z=x.firstChild,C=z.nextSibling,O=x.nextSibling,_=O.firstChild;return _.firstChild,f(w,()=>a?.itm?.product?.label,null),f(C,()=>a?.itm?.qty*-1),f(_,()=>(a?.itm?.salePrice*1).toFixed(2),null),f(g,A(X,{get when(){return rt()},get children(){return St()}}),null),nt(()=>ct(b,"src",l())),e})()},Vt=async(a,o)=>{let s={params:a,data2update:o},l=H(709002);return s={...s,...l},await J(s)},At=async a=>{let o={params:a},s=H(132002);return o={...o,...s},await J(o)},Gt=async a=>{let o=[];a.map(s=>{let l={params:{id:s?.ssg_track_key,idairguide:"all"}},n=H(802002);l={...l,...n},o.push(l)}),ut(o,Ot)},Ot=async a=>{const s=await J(a);if(s)return s};dt(["click"]);export{$t as ButtonHrm,Qt as default,Ot as fetchCSVInve,Gt as loadInventory,Vt as updLinkedBags};
