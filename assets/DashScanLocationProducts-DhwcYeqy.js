const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BFjYYo8L.js","assets/index-BAL7cYef.js","assets/index-BRlA1Q7g.css","assets/SVG-B6dmaFWV.js","assets/Util-BFTPhrO4.js","assets/LoadingColorSpinner-qvPBp4Oo.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BMadI7Ex.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-q_kPwgUU.js","assets/ButonHrm-BSeWNUGQ.css"])))=>i.map(i=>d[i]);
import{l as V,_ as F,c as H,a as P,o as mt,b as ft,d as T,i as o,e as _,F as Q,S as J,p as _t,f as j,k as Z,m as ht,g as R,h as bt,t as w}from"./index-BAL7cYef.js";import{O,g as z,f as tt,m as $t,k as gt,i as D,a as et,E as yt}from"./Util-BFTPhrO4.js";import{g as st,a as rt}from"./handelImagesServices-CrHi0fC9.js";import{OpenToast as it}from"./Toast-BCkrdaLA.js";import{validStores as Ct}from"./AddInventory-C_aCEfhs.js";import{I as vt}from"./print_invoice_service-BrgIqvPm.js";import"./browser-image-compression-BVJ4p9S0.js";import"./DialogHRM-CEowjsne.js";import"./debounces-tcqQvHjx.js";import"./DashProducts-CAmLvuWW.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-BFjYYo8L.js";import"./fontkit.es-CdiTDqf_.js";import"./InitPrintServices-DU4P7h91.js";import"./qrcode-DHy8FFhS.js";var kt=w('<div style="padding:50px 0 0 0"><section class=qsuVSc><section class=bLl6je><section class="dvPdhb ">'),It=w('<section class="h6rxkc ">'),xt=w('<section class="rtS8wf InvE"><div class=X3QHFf><section class=WirBi><section class=""><section class="EMijzc centerBx"><div class="icon_status centerBx "style="margin:0 4px"></div><div class="icon_status centerBx "style="margin:0 4px"></div></section><section class="EMijzc centerBx"><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx><span aria-hidden=true class=h5M7vb>Almacen: <select class=RIw0b aria-label=Stores></select></span></section><p class=GehUpe data-test-line-item-price=""> </p><section class=dEfaq><section class=JpKBkb><button class=yjHiqb><span>Imprimir Inventario</span></button></section><section class=JpKBkb><button class=yjHiqb><span>Comparar Inventario'),wt=w("<option>"),St=w('<section class="kGEQJf "><section class="Z722Ge InvE"><section class=VcJUVb><section class=h7Oog><span class=YdB1ac><img class=bwpkad alt=sf></span><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx><span aria-hidden=true>Qty: <span class=h5M7vb></span></span></section><section class=dEfaq><section class=JpKBkb><button class=yjHiqb><span>Remover'),qt=w('<div class="icon_status centerBx "style="margin:0 4px">'),Et=w('<span class=" centerBx"><span class=fnT8></span><span><div class="icon_status centerBx "style="margin:0 4px">'),Ot=w('<div class="GehUpe centerBx"data-test-line-item-price="">'),Pt=w("<section class=kGEQJf><section class=Z722Ge><section class=VcJUVb><section class=h7Oog><span class=YdB1ac><img class=bwpkad alt=sf></span><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe>");V(()=>F(()=>import("./FlexSpace-BFjYYo8L.js"),__vite__mapDeps([0,1,2])));const L=V(()=>F(()=>import("./SVG-B6dmaFWV.js"),__vite__mapDeps([3,1,2,4])));V(()=>F(()=>import("./LoadingColorSpinner-qvPBp4Oo.js"),__vite__mapDeps([5,1,2,6])));const ct=V(()=>F(()=>import("./InputHr-BMadI7Ex.js"),__vite__mapDeps([7,1,2,8])));V(()=>F(()=>import("./ButonHrm-q_kPwgUU.js"),__vite__mapDeps([9,1,2,3,4,10])));const[M,A]=H({items:{}}),q="348723orh2idsffs";function Zt(){P(0);const[t,i]=P("");mt(()=>{}),ft(()=>{}),T(()=>{e()});const e=async()=>{(await At())?.map(c=>{A("items",c.doc)})};return(()=>{var s=kt(),c=s.firstChild,a=c.firstChild,n=a.firstChild;return o(n,_(J,{get when(){return O(M?.items?.products)},get children(){return _(Q,{get each(){return O(M?.items?.products)},children:(p,u)=>_(Bt,{get itm(){return M?.items?.products?.[p]}})})}})),o(c,_(Dt,{updSearch:i}),null),s})()}const Dt=t=>{const[i,e]=P(""),[s,c]=P(1),[a,n]=P("");T(()=>{n(R?.profile?.agencyStore?.id)});const p=()=>{s()===1&&i().length>8&&u(i())},u=async d=>{let m=`${d}`,f=await N(m),r=O(f)?.[0],l=1,$=await U(q)||{};$?.products?.[r]&&(l=$?.products?.[r].qty*1+1);let h=$;if($?.products||(h.products={},h._id=q),$?.products?.[r])h.products[r].qty=l;else{let g={product:{id:r,label:f?.[r]?.name,code:f?.[r]?.code},qty:l};h.products[r]=g}D.put(h,function(I,v){}),A("items",h),e(""),it({text:f?.[r]?.name+" agregado al inventario",timeout:3500,theme:"blue",id:et()})},[y,{refetch:C}]=_t(i,async d=>{if(s()===2&&d.length>4){const m=await N(d);let f=[];return O(m).map(r=>{let l=m[r];f.push(l)}),f}else return[]}),b=()=>{e(""),c(1)},k=async()=>{let d=`${a()}`,m=await W(d,d),r=(await U(q)||{})?.products;O(m)?.map($=>{m[$]?.products?.map(h=>{let g=h?.product?.id;r[g]&&(r[g].stock||(r[g].stock=0),r[g].stock+=h?.qty*1)})});let l=await U(q)||{};l.products=r,A("items",l)},E=async()=>{let d=`${a()}`,m=await W(d,d),r=(await U(q)||{})?.products,l={};O(r)?.map(I=>{l[I]=r[I]}),O(m)?.map(I=>{m[I]?.products?.map(v=>{let x=v?.product?.id;l[x]?(l[x].stock||(l[x].stock=0),l[x].stock+=v?.qty*1):(l[x]||(l[x]={product:v?.product,stock:v?.qty*1}),l[x].stock+=v?.qty*1)})});let h={products:yt(l),createDate:new Date().getTime(),store:a()},g=await vt(h);window.open(g)};return(()=>{var d=xt(),m=d.firstChild,f=m.firstChild,r=f.firstChild,l=r.firstChild,$=l.firstChild,h=$.nextSibling,g=l.nextSibling,I=g.firstChild,v=I.firstChild,x=v.nextSibling,G=x.firstChild,lt=G.firstChild,nt=lt.firstChild,K=nt.nextSibling,at=G.nextSibling,ot=at.nextSibling,X=ot.firstChild,dt=X.firstChild,ut=X.nextSibling,pt=ut.firstChild;return o(r,_(J,{get when(){return y()?.length>0},get children(){var S=It();return o(S,_(Q,{get each(){return y()},children:(Y,B)=>_(Vt,{itm:Y,clearTx:b})})),S}}),l),o(l,_(ct,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return i()},placeholder:"buscar productos ...",colors:"#2b2b2b",handleClick:e,onEnter:p}),$),$.$$click=()=>c(1),o($,_(L,{name:"qrcode-scan",size:22,get color(){return s()===1?"#646cff":""}})),h.$$click=()=>c(2),o(h,_(L,{name:"keyboard",size:22,get color(){return s()===2?"#646cff":""}})),K.addEventListener("change",S=>{n(S?.target?.value)}),o(K,_(Q,{get each(){return Ct()},children:(S,Y)=>(()=>{var B=wt();return o(B,()=>S?.label),j(()=>B.selected=a()===S?.id),j(()=>B.value=S?.id),B})()})),dt.$$click=E,pt.$$click=k,d})()},Bt=t=>{const[i,e]=H(),s=()=>i?.[t?.itm?.product?.id]?.productImageUrl?st()+rt()+"/"+i?.[t?.itm?.product?.id]?.productImageUrl:null,c=async()=>{let n=t?.itm?.product?.id,p=`${n}`,u=await N(p);u?.[n]?.productImageUrl&&e(n,u?.[n])};T(()=>{c()});const a=()=>{D.get(q,function(p,u){let y={...u};delete y.products[t?.itm?.product?.id],D.put(y,function(b,k){b||A("items","products",t?.itm?.product?.id,void 0)})})};return(()=>{var n=St(),p=n.firstChild,u=p.firstChild,y=u.firstChild,C=y.firstChild,b=C.firstChild,k=C.nextSibling,E=k.firstChild,d=E.firstChild,m=d.firstChild;m.firstChild;var f=E.nextSibling,r=f.firstChild,l=r.firstChild,$=l.firstChild,h=$.nextSibling,g=r.nextSibling,I=g.firstChild,v=I.firstChild;return o(m,()=>t?.itm?.product?.label,null),o(h,()=>t?.itm?.qty),o(f,_(Ut,{get itm(){return t?.itm}}),g),v.$$click=a,j(()=>Z(b,"src",s())),n})()},Ut=t=>{const i=()=>t?.itm?.stock&&t?.itm?.stock-t?.itm?.qty>1?null:1,e=()=>t?.itm?.stock&&t?.itm?.stock===t?.itm?.qty?1:0;return(()=>{var s=Ot();return o(s,_(J,{get when(){return e()},get children(){var c=qt();return o(c,_(L,{name:"check_circle_outline",size:26,color:"#137333ff"})),c}}),null),o(s,_(J,{get when(){return!e()},get children(){var c=Et(),a=c.firstChild,n=a.nextSibling,p=n.firstChild;return o(a,()=>(t?.itm?.stock?t?.itm?.stock:0)?.toFixed(2)),o(p,_(L,{get name(){return i()?"plus":"minus"},size:18,get color(){return i()?"#137333ff":"#c8193c"}})),o(n,()=>(t?.itm?.stock?t?.itm?.stock-t?.itm?.qty:t?.itm?.qty)?.toFixed(2),null),j(()=>ht(n,`${i()?"mnwi":"koi3M"} fnT8 centerBx`)),c}}),null),s})()},N=async(t,i)=>{let e={params:{businessId:R?.profile?.businessYId}};t&&t.split(" ").map((a,n)=>{a&&(e.params[":search"+n]=a.trim())});let s=z(122001);e={...e,...s},e.params[":search0"];const c=await tt(e);return c?.error?{}:c},te=async t=>{let i=[];t.map(e=>{let s={params:{id:e?.ssg_track_key,idairguide:"all"}},c=z(802002);s={...s,...c},i.push(s)}),$t(i,jt)},jt=async t=>{const e=await gt(t);if(e)return e},At=()=>new Promise((t,i)=>{D.allDocs({include_docs:!0,descending:!0},function(e,s){t(s.rows)})}),Vt=t=>{const[i,e]=H(),[s,c]=P(""),a=()=>i?.prod?.productImageUrl?st()+rt()+"/"+i?.prod?.productImageUrl:null;T(()=>{e("prod",t?.itm)}),Array.from(Array(10).keys());const n=async()=>{let p=s()*1,u=i?.prod?.ssg_product_key,y=p,C=await U(q)||{};C?.products?.[u]&&(y=C?.products?.[u].qty+p);let b=C;if(C?.products||(b.products={},b._id=q),C?.products?.[u])b.products[u].qty=y;else{let k={product:{id:u,label:t?.itm?.name,code:t?.itm?.code},qty:y};b.products[u]=k}D.put(b,function(E,d){}),A("items",b),t?.clearTx(),it({text:" El inventario fue actualizado",timeout:3500,theme:"blue",id:et()})};return(()=>{var p=Pt(),u=p.firstChild,y=u.firstChild,C=y.firstChild,b=C.firstChild,k=b.firstChild,E=b.nextSibling,d=E.firstChild,m=d.firstChild,f=m.firstChild;f.firstChild;var r=d.nextSibling;return o(f,()=>t?.itm?.name,null),o(r,_(ct,{width:"90px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return s()},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:c,onEnter:n})),j(()=>Z(k,"src",a())),p})()},U=t=>new Promise((i,e)=>{D.get(t,function(c,a){i(a)})}),W=async(t,i)=>{let e={params:{businessId:R?.profile?.businessYId,":store":i.trim()}};t&&t.split(" ").map((a,n)=>{a&&(e.params[":search"+n]=a.trim())});let s=z(132001);e={...e,...s},e.params[":search0"];const c=await tt(e);return c?.error?{}:c};bt(["click"]);export{W as LookupInventory,N as LookupProducts,Zt as default,jt as fetchCSVInve,U as getCartId,M as inventoryItems,q as inventoryKey,At as loadCarts,te as loadProduct,A as setInventoryItems};
