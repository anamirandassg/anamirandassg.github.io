const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BVHz8g-I.js","assets/index-DHCS-KQi.js","assets/index-DaYrm968.css","assets/SVG-DCMD_W7G.js","assets/Util-Bc5vcOBp.js","assets/LoadingColorSpinner-BKSHlb9m.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BryfXTA9.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-CccK6Gex.js","assets/ButonHrm-BSeWNUGQ.css"])))=>i.map(i=>d[i]);
import{l as A,_ as V,c as N,a as O,o as mt,b as ft,e as L,i as o,f as h,F as M,S as F,p as _t,h as U,k as W,m as ht,g as H,d as bt,t as x}from"./index-DHCS-KQi.js";import{O as E,g as R,f as Z,m as $t,k as gt,i as P,a as tt,E as yt}from"./Util-Bc5vcOBp.js";import{g as et,a as st}from"./handelImagesServices-CyYy2IT2.js";import{OpenToast as rt}from"./Toast-nFsXK8A-.js";import{validStores as Ct}from"./AddInventory-Bo7rCnSe.js";import{I as vt}from"./print_invoice_service-BOiLkiCx.js";import"./browser-image-compression-BVJ4p9S0.js";import"./DialogHRM-B_MjLUhO.js";import"./debounces-ycRia-T1.js";import"./DashProducts-Bu4th7cT.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-BVHz8g-I.js";import"./fontkit.es-CD9tcdqV.js";import"./InitPrintServices-CO7w1VfE.js";import"./qrcode-DHy8FFhS.js";var kt=x('<div style="padding:50px 0 0 0"><section class=qsuVSc><section class=bLl6je><section class="dvPdhb ">'),It=x('<section class="h6rxkc ">'),xt=x('<section class="rtS8wf InvE"><div class=X3QHFf><section class=WirBi><section class=""><section class="EMijzc centerBx"><div class="icon_status centerBx "style="margin:0 4px"></div><div class="icon_status centerBx "style="margin:0 4px"></div></section><section class="EMijzc centerBx"><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx><span aria-hidden=true class=h5M7vb>Almacen: <select class=RIw0b aria-label=Stores></select></span></section><p class=GehUpe data-test-line-item-price=""> </p><section class=dEfaq><section class=JpKBkb><button class=yjHiqb><span>Imprimir Inventario</span></button></section><section class=JpKBkb><button class=yjHiqb><span>Comparar Inventario'),wt=x("<option>"),St=x('<section class="kGEQJf "><section class="Z722Ge InvE"><section class=VcJUVb><section class=h7Oog><span class=YdB1ac><img class=bwpkad alt=sf></span><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx><span aria-hidden=true>Qty: <span class=h5M7vb></span></span></section><section class=dEfaq><section class=JpKBkb><button class=yjHiqb><span>Remover'),qt=x('<div class="icon_status centerBx "style="margin:0 4px">'),Et=x('<span class=" centerBx"><span class=fnT8></span><span><div class="icon_status centerBx "style="margin:0 4px">'),Ot=x('<div class="GehUpe centerBx"data-test-line-item-price="">'),Pt=x("<section class=kGEQJf><section class=Z722Ge><section class=VcJUVb><section class=h7Oog><span class=YdB1ac><img class=bwpkad alt=sf></span><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe>");A(()=>V(()=>import("./FlexSpace-BVHz8g-I.js"),__vite__mapDeps([0,1,2])));const J=A(()=>V(()=>import("./SVG-DCMD_W7G.js"),__vite__mapDeps([3,1,2,4])));A(()=>V(()=>import("./LoadingColorSpinner-BKSHlb9m.js"),__vite__mapDeps([5,1,2,6])));const it=A(()=>V(()=>import("./InputHr-BryfXTA9.js"),__vite__mapDeps([7,1,2,8])));A(()=>V(()=>import("./ButonHrm-CccK6Gex.js"),__vite__mapDeps([9,1,2,3,4,10])));const[T,j]=N({items:{}}),S="348723orh2idsffs";function Zt(){O(0);const[t,i]=O("");mt(()=>{}),ft(()=>{}),L(()=>{e()});const e=async()=>{(await At())?.map(c=>{j("items",c.doc)})};return(()=>{var s=kt(),c=s.firstChild,a=c.firstChild,n=a.firstChild;return o(n,h(F,{get when(){return E(T?.items?.products)},get children(){return h(M,{get each(){return E(T?.items?.products)},children:(p,u)=>h(Bt,{get itm(){return T?.items?.products?.[p]}})})}})),o(c,h(Dt,{updSearch:i}),null),s})()}const Dt=t=>{const[i,e]=O(""),[s,c]=O(1),[a,n]=O("");L(()=>{n(H?.profile?.agencyStore?.id)});const p=()=>{s()===1&&i().length>8&&u(i())},u=async d=>{let m=`${d}`,f=await Q(m),r=E(f)?.[0],l=1,b=await B(S)||{};b?.products?.[r]&&(l=b?.products?.[r].qty*1+1);let $=b;if(b?.products||($.products={},$._id=S),b?.products?.[r])$.products[r].qty=l;else{let _={product:{id:r,label:f?.[r]?.name,code:f?.[r]?.code},qty:l};$.products[r]=_}P.put($,function(k,v){}),j("items",$),e(""),rt({text:f?.[r]?.name+" agregado al inventario",timeout:3500,theme:"blue",id:tt()})},[y,{refetch:C}]=_t(i,async d=>{if(s()===2&&d.length>4){const m=await Q(d);let f=[];return E(m).map(r=>{let l=m[r];f.push(l)}),f}else return[]}),g=()=>{e(""),c(1)},I=async()=>{let d=`${a()}`,m=await Y(d,d),r=(await B(S)||{})?.products;E(m)?.map(b=>{m[b]?.products?.map($=>{let _=$?.product?.id;r[_]&&(r[_].stock||(r[_].stock=0),r[_].stock+=$?.qty*1)})});let l=await B(S)||{};l.products=r,j("items",l)},q=async()=>{let d=`${a()}`,m=await Y(d,d),r=(await B(S)||{})?.products,l={};E(r)?.map(_=>{l[_]=r[_]}),E(m)?.map(_=>{m[_]?.products?.map(k=>{let v=k?.product?.id;l[v]?(l[v].stock||(l[v].stock=0),l[v].stock+=k?.qty*1):(l[v]||(l[v]={product:k?.product,stock:k?.qty*1}),l[v].stock+=k?.qty*1)})});let b={products:yt(l),createDate:new Date().getTime(),store:a()},$=await vt(b);window.open($)};return(()=>{var d=xt(),m=d.firstChild,f=m.firstChild,r=f.firstChild,l=r.firstChild,b=l.firstChild,$=b.nextSibling,_=l.nextSibling,k=_.firstChild,v=k.firstChild,ct=v.nextSibling,z=ct.firstChild,lt=z.firstChild,nt=lt.firstChild,G=nt.nextSibling,at=z.nextSibling,ot=at.nextSibling,K=ot.firstChild,dt=K.firstChild,ut=K.nextSibling,pt=ut.firstChild;return o(r,h(F,{get when(){return y()?.length>0},get children(){var w=It();return o(w,h(M,{get each(){return y()},children:(X,D)=>h(Vt,{itm:X,clearTx:g})})),w}}),l),o(l,h(it,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return i()},placeholder:"buscar productos ...",colors:"#2b2b2b",handleClick:e,onEnter:p}),b),b.$$click=()=>c(1),o(b,h(J,{name:"qrcode-scan",size:22,get color(){return s()===1?"#646cff":""}})),$.$$click=()=>c(2),o($,h(J,{name:"keyboard",size:22,get color(){return s()===2?"#646cff":""}})),G.addEventListener("change",w=>{n(w?.target?.value)}),o(G,h(M,{get each(){return Ct()},children:(w,X)=>(()=>{var D=wt();return o(D,()=>w?.label),U(()=>D.selected=a()===w?.id),U(()=>D.value=w?.id),D})()})),dt.$$click=q,pt.$$click=I,d})()},Bt=t=>{const[i,e]=N(),s=()=>i?.[t?.itm?.product?.id]?.productImageUrl?et()+st()+"/"+i?.[t?.itm?.product?.id]?.productImageUrl:null,c=async()=>{let n=t?.itm?.product?.id,p=`${n}`,u=await Q(p);u?.[n]?.productImageUrl&&e(n,u?.[n])};L(()=>{c()});const a=()=>{P.get(S,function(p,u){let y={...u};delete y.products[t?.itm?.product?.id],P.put(y,function(g,I){g||j("items","products",t?.itm?.product?.id,void 0)})})};return(()=>{var n=St(),p=n.firstChild,u=p.firstChild,y=u.firstChild,C=y.firstChild,g=C.firstChild,I=C.nextSibling,q=I.firstChild,d=q.firstChild,m=d.firstChild;m.firstChild;var f=q.nextSibling,r=f.firstChild,l=r.firstChild,b=l.firstChild,$=b.nextSibling,_=r.nextSibling,k=_.firstChild,v=k.firstChild;return o(m,()=>t?.itm?.product?.label,null),o($,()=>t?.itm?.qty),o(f,h(Ut,{get itm(){return t?.itm}}),_),v.$$click=a,U(()=>W(g,"src",s())),n})()},Ut=t=>{const i=()=>t?.itm?.stock&&t?.itm?.stock-t?.itm?.qty>1?null:1,e=()=>t?.itm?.stock&&t?.itm?.stock===t?.itm?.qty?1:0;return(()=>{var s=Ot();return o(s,h(F,{get when(){return e()},get children(){var c=qt();return o(c,h(J,{name:"check_circle_outline",size:26,color:"#137333ff"})),c}}),null),o(s,h(F,{get when(){return!e()},get children(){var c=Et(),a=c.firstChild,n=a.nextSibling,p=n.firstChild;return o(a,()=>(t?.itm?.stock?t?.itm?.stock:0)?.toFixed(2)),o(p,h(J,{get name(){return i()?"plus":"minus"},size:18,get color(){return i()?"#137333ff":"#c8193c"}})),o(n,()=>(t?.itm?.stock?t?.itm?.stock-t?.itm?.qty:t?.itm?.qty)?.toFixed(2),null),U(()=>ht(n,`${i()?"mnwi":"koi3M"} fnT8 centerBx`)),c}}),null),s})()},Q=async(t,i)=>{let e={params:{businessId:H?.profile?.businessYId}};t&&t.split(" ").map((a,n)=>{a&&(e.params[":search"+n]=a.trim())});let s=R(122001);e={...e,...s},e.params[":search0"];const c=await Z(e);return c?.error?{}:c},te=async t=>{let i=[];t.map(e=>{let s={params:{id:e?.ssg_track_key,idairguide:"all"}},c=R(802002);s={...s,...c},i.push(s)}),$t(i,jt)},jt=async t=>{const e=await gt(t);if(e)return e},At=()=>new Promise((t,i)=>{P.allDocs({include_docs:!0,descending:!0},function(e,s){t(s.rows)})}),Vt=t=>{const[i,e]=N(),[s,c]=O(""),a=()=>i?.prod?.productImageUrl?et()+st()+"/"+i?.prod?.productImageUrl:null;L(()=>{e("prod",t?.itm)}),Array.from(Array(10).keys());const n=async()=>{let p=s()*1,u=i?.prod?.ssg_product_key,y=p,C=await B(S)||{};C?.products?.[u]&&(y=C?.products?.[u].qty+p);let g=C;if(C?.products||(g.products={},g._id=S),C?.products?.[u])g.products[u].qty=y;else{let I={product:{id:u,label:t?.itm?.name,code:t?.itm?.code},qty:y};g.products[u]=I}P.put(g,function(q,d){}),j("items",g),t?.clearTx(),rt({text:" El inventario fue actualizado",timeout:3500,theme:"blue",id:tt()})};return(()=>{var p=Pt(),u=p.firstChild,y=u.firstChild,C=y.firstChild,g=C.firstChild,I=g.firstChild,q=g.nextSibling,d=q.firstChild,m=d.firstChild,f=m.firstChild;f.firstChild;var r=d.nextSibling;return o(f,()=>t?.itm?.name,null),o(r,h(it,{width:"90px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return s()},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:c,onEnter:n})),U(()=>W(I,"src",a())),p})()},B=t=>new Promise((i,e)=>{P.get(t,function(c,a){i(a)})}),Y=async(t,i)=>{let e={params:{businessId:H?.profile?.businessYId,":store":i.trim()}};t&&t.split(" ").map((a,n)=>{a&&(e.params[":search"+n]=a.trim())});let s=R(132001);e={...e,...s},e.params[":search0"];const c=await Z(e);return c?.error?{}:c};bt(["click"]);export{Y as LookupInventory,Q as LookupProducts,Zt as default,jt as fetchCSVInve,B as getCartId,T as inventoryItems,S as inventoryKey,At as loadCarts,te as loadProduct,j as setInventoryItems};
