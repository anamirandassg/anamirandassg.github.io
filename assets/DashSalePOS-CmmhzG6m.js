const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-AvAmS2bv.js","assets/index-CVR6cbR4.js","assets/index-D7Gv5tA3.css","assets/SVG-C40NHNfg.js","assets/Util-C4Gv2Rs-.js","assets/ShowQRProducts-CD8cFNJo.js","assets/ShowQRPrintLabel-Bec6C6ZW.js","assets/PDFButton-CCQT0yk3.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BaZy4qZc.js","assets/InitPrintServices-COQVt4ve.js","assets/Toast-8Bo8TXoA.js","assets/Toast-DLpFKn-Q.css","assets/InputHr-DnhsB-bF.js","assets/InputHr-M3rJ9grQ.css","assets/LoadingColorSpinner-Cs-vAZtB.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ButonHrm-BQueQWdN.js","assets/ButonHrm-BSeWNUGQ.css"])))=>i.map(i=>d[i]);
import{l as h,_ as x,c as J,a as A,d as s,i as l,S as P,e as D,s as ie,g as R,f as U,t as g,n as B,o as ae,k as se,j as ne,b as ce,x as oe,F as Y,E as de,h as ue}from"./index-CVR6cbR4.js";import{s as me}from"./App.module-CbHnVtRQ.js";import{G as I,O as k,b as F,c as L,f as M,j as _e,i as pe,g as fe,A as ge,H as be}from"./Util-C4Gv2Rs-.js";import{OpenModal as ve,CloseModal as he}from"./DialogHRM-Cfll8vbC.js";import{u as xe}from"./debounces-CGr8JVfi.js";import{g as $e,a as ye}from"./handelImagesServices-D5JofS2U.js";import{OpenToast as K}from"./Toast-8Bo8TXoA.js";import"./PDFButton-CCQT0yk3.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BaZy4qZc.js";import{LookupInventory as Ce}from"./DashInventory-B_VS55ao.js";import"./browser-image-compression-BVJ4p9S0.js";var Se=g("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),Pe=g('<p class=" textleft fullName_consigne">'),Oe=g("<h5>$"),Ie=g('<h4 class="rpto centerBx">X'),we=g('<div style=padding:8px;margin:12px><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div class=" centerBx"></div></div><div class=" bottombx centerBx"></div><div class="_dsplFlx bottombx spaceAround ">');h(()=>x(()=>import("./FlexSpace-AvAmS2bv.js"),__vite__mapDeps([0,1,2])));h(()=>x(()=>import("./SVG-C40NHNfg.js"),__vite__mapDeps([3,1,2,4])));h(()=>x(()=>import("./ShowQRProducts-CD8cFNJo.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));const Ee=h(()=>x(()=>import("./InputHr-DnhsB-bF.js"),__vite__mapDeps([13,1,2,14])));function ke(e){J({search:"",status:"AERO_33"});const[n,i]=A("");xe(i,400);const[a,m]=A(""),o=()=>e?.item?.productImageUrl?$e()+ye()+"/"+e?.item?.productImageUrl:null,b=async()=>{let p=B?.profile?.agencyStore?.id,_=e?.item?.ssg_product_key,$=`${_} ${p}`,c=await Ce($),t=0,r=0;k(c)?.map(f=>{c[f]?.products?.map(d=>{_===d?.product?.id&&(t+=d?.price*1*d?.qty*1,r+=d?.qty*1)})});const v=r?t/r:0;if(r&&r-a()>=0){let f=await N(j)||{},d=f;if(f)if(f?.cart||(d.cart={}),f?.cart?.[_])d.cart[_].qty+=a()*-1;else{let C={product:{id:_,label:e?.item?.name,code:e?.item?.code},qty:a()*-1,price:v,salePrice:e?.item?.salePrice};d.cart[_]=C}else{let C={product:{id:_,label:e?.item?.name,code:e?.item?.code},qty:a()*-1,price:v,salePrice:e?.item?.salePrice};d.cart={},d.cart[_]=C,d._id=j}I.put(d,function(u,y){u||(T("items",d),e?.cleanTX?.(),K({text:e?.item?.name+" agregado al carrito",timeout:3500,theme:"blue",id:F()}))})}else K({text:"Sin Existencia",timeout:3500,theme:"red",id:F()})};return s(P,{get when(){return e?.item?.name},get children(){var p=we(),_=p.firstChild,$=_.firstChild,c=$.firstChild,t=$.nextSibling;return l(p,s(P,{get when(){return o()},get children(){var r=Se(),v=r.firstChild;return D(()=>ie(v,"src",o())),r}}),_),l(c,s(P,{get when(){return e?.item?.name},get children(){var r=Pe();return l(r,()=>e?.item?.name?.toUpperCase()),r}})),l(t,s(P,{get when(){return e?.item?.salePrice},get children(){return[(()=>{var r=Oe();return r.firstChild,l(r,()=>(e?.item?.salePrice*1).toFixed(2),null),r})(),Ie()]}}),null),l(t,s(P,{get when(){return e?.item?.unit&&e?.item?.salePrice},get children(){return s(Ee,{width:"70px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return a()},placeholder:"Qty",colors:"#2b2b2b",handleClick:r=>m(r),onEnter:b})}}),null),D(()=>R(p,`client_item_box gWXAaj jlytmu product centerBx ${U()?"isMobile":""}`)),p}})}const N=e=>new Promise((n,i)=>{I.get(e,function(m,o){n(o)})}),Ae=Object.freeze(Object.defineProperty({__proto__:null,default:ke,getCartId:N},Symbol.toStringTag,{value:"Module"}));var Be=g('<div style=max-width:45%><div class=QCNFEe><p class=jhB0af>Order summary</p></div><div class=qntUl><p class=B7xUP><span data-test-integ-cart-subtotal-label="">Subtotal</span><span data-test-integ-cart-subtotal-value="">$</span></p><p class=B7xUP><span data-test-integ-cart-subtotal-label="">Estimated tax</span><span data-test-integ-cart-subtotal-value="">$</span></p><p class=B7xUP><span data-test-integ-cart-subtotal-label=""class=OGw7rb>Estimated total</span><span data-test-integ-cart-subtotal-value=""class=OGw7rb> $</span></p></div><div class=separator></div><div class=separator></div><div style=margin:15px class=" spaceAround centerBx">'),De=g("<div style=margin:35px>"),qe=g('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Ventas</h2><div style=padding:4px;margin-left:12px></div></div><div class=centerBx><div style=max-width:55%></div><div>'),Fe=g("<div> <!>."),Le=g("<div> "),Te=g('<div class="centerBx bottombx"><div class="centerBx tr_bar_30"><div class="bottombx unit "><div class="unitBx "><h5></h5></div></div><h4 style=margin:2px>X</h4><h5>$</h5></div><div class="_dsplFlx flxWrp spaceAround centerBx tr_bar_60"><h5 style="margin:0px 20px;text-align:left;"></h5></div><div class="icon_status centerBx tr_bar_10">'),je=g('<div><div class=QCNFEe><p class=jhB0af>Confirmar Orden</p></div><p class=B7xUP><span data-test-integ-cart-subtotal-label="">Desea completar la orden y actualizar el inventario</span></p><div class=separator></div><div style=margin:15px class=" spaceAround centerBx">');const Q=h(()=>x(()=>import("./FlexSpace-AvAmS2bv.js"),__vite__mapDeps([0,1,2]))),Ve=h(()=>x(()=>import("./SVG-C40NHNfg.js"),__vite__mapDeps([3,1,2,4]))),Re=h(()=>x(()=>import("./LoadingColorSpinner-Cs-vAZtB.js"),__vite__mapDeps([15,1,2,16]))),Me=h(()=>x(()=>import("./InputHr-DnhsB-bF.js"),__vite__mapDeps([13,1,2,14]))),Z=h(()=>x(()=>import("./ButonHrm-BQueQWdN.js"),__vite__mapDeps([17,1,2,3,4,18]))),Qe=h(()=>x(()=>Promise.resolve().then(()=>Ae),void 0)),[S,T]=J({items:{}}),j="348723orh2idsffs";function nt(){const[e,n]=A(0);A(0);const[i,a]=A("");ae(()=>{}),se(()=>{});const[m,{refetch:o}]=ne(i,async c=>{if(c.length>8){const t=await Ne(c,e());let r=[];return k(t).map(v=>{let f=t[v];r.push(f)}),r}else return[]});ce(()=>{b()});const b=async()=>{(await He())?.map(t=>{T("items",t.doc)})},p=c=>{let t=0;return k(S?.items?.cart).map(r=>{t+=S?.items?.cart?.[r]?.qty*-1*S?.items?.cart?.[r]?.salePrice}),t},_=()=>{let c=F(),t={};t.id=c,t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=s(We,{modalId:c,refetch:o,completeOrder:()=>$(c)}),ve(t)},$=async c=>{let t=new Date,r=F(),v={type:"SALES",invoice:t.getFullYear()+fe(12),description:"",store:B?.profile?.agencyStore?.id,hbl:"",products:ge(be(S?.items?.cart)),ssg_inventory_key:r,ssg_sorder_key:r,createDate:t.getTime(),businessId:B?.profile?.businessYId},f={params:{businessId:B?.profile?.businessYId},form:v},d=L(139003),C={...f,...d},u=L(431005),y={...f,...u};if(await M(C),!(await M(y))?.error){he(c);let E=await N(j);E.cart=void 0,I.put(E,function(q,z){q||T("items",E)})}};return(()=>{var c=qe(),t=c.firstChild,r=t.firstChild,v=r.nextSibling,f=t.nextSibling,d=f.firstChild,C=d.nextSibling;return l(v,s(Me,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return i()},placeholder:"buscar productos ...",colors:"#2b2b2b",handleClick:u=>a(u)})),l(t,s(Q,{}),null),l(d,s(de,{fallback:u=>(()=>{var y=Fe(),w=y.firstChild,O=w.nextSibling;return O.nextSibling,l(y,()=>u.toString(),O),y})(),get children(){return s(oe,{get fallback(){return(()=>{var u=Le();return u.firstChild,l(u,s(Re,{stroke:"rgb(200 25 60 / 1)",size:62}),null),u})()},get children(){return s(P,{get when(){return m()},get children(){return s(Y,{get each(){return m()},children:(u,y)=>s(Qe,{item:u,refetch:o,cleanTX:()=>a("")})})}})}})}})),l(f,s(P,{get when(){return k(S?.items?.cart)?.length>0},get children(){return[(()=>{var u=Be(),y=u.firstChild,w=y.nextSibling,O=w.firstChild,E=O.firstChild,V=E.nextSibling;V.firstChild;var q=O.nextSibling,z=q.firstChild,H=z.nextSibling;H.firstChild;var ee=q.nextSibling,te=ee.firstChild,W=te.nextSibling;W.firstChild;var re=w.nextSibling,X=re.nextSibling,G=X.nextSibling;return l(V,()=>p().toFixed(2),null),l(H,()=>(p()*.06).toFixed(2),null),l(W,()=>(p()*.06+p()).toFixed(2),null),l(u,s(Y,{get each(){return k(S?.items?.cart)},children:(le,Xe)=>s(Ue,{get item(){return S?.items?.cart?.[le]}})}),X),l(G,s(Q,{}),null),l(G,s(Z,{color:"#646cff",icon:"outline_cart",label:"Procesar Orden",handleClick:_}),null),D(()=>R(u,`client_item_box gWXAaj jlytmu floatLeft ${U()?"isMobile":""} `)),u})(),De()]}}),C),D(()=>R(c,me.App)),c})()}const Ue=e=>{const n=()=>{({...S?.items},I.get(j,function(a,m){let o={...m};delete o.cart[e?.item?.product?.id],I.put(o,function(p,_){p||T("items","cart",e?.item?.product?.id,void 0)})}))};return(()=>{var i=Te(),a=i.firstChild,m=a.firstChild,o=m.firstChild,b=o.firstChild,p=m.nextSibling,_=p.nextSibling;_.firstChild;var $=a.nextSibling,c=$.firstChild,t=$.nextSibling;return l(b,()=>(e?.item?.qty*-1).toFixed(2)),l(_,()=>e?.item?.salePrice,null),l(c,()=>e?.item?.product?.label),t.$$click=n,l(t,s(Ve,{name:"outline_delete",size:22})),i})()},Ne=async(e,n)=>{let i={params:{businessId:B?.profile?.businessYId}};e&&e.split(" ").map((o,b)=>{o&&(i.params[":search"+b]=o.trim())});let a=L(122001);i={...i,...a},i.params[":search0"];const m=await M(i);return m?.error?{}:m},ct=async e=>{let n=[];e.map(i=>{let a={params:{id:i?.ssg_track_key,idairguide:"all"}},m=L(802002);a={...a,...m},n.push(a)}),_e(n,ze)},ze=async e=>{const i=await pe(e);if(i)return i},He=()=>new Promise((e,n)=>{I.allDocs({include_docs:!0,descending:!0},function(i,a){e(a.rows)})});function We(e){return(()=>{var n=je(),i=n.firstChild,a=i.nextSibling,m=a.nextSibling,o=m.nextSibling;return n.style.setProperty("max-height","80vh"),n.style.setProperty("overflow","auto"),n.style.setProperty("background","#fff"),n.style.setProperty("border-radius","11px"),n.style.setProperty("padding"," 0 21px"),l(o,s(Q,{}),null),l(o,s(Z,{color:"#646cff",icon:"send",label:"Completar Orden",get handleClick(){return e.completeOrder}}),null),D(b=>(b=U()?"96vw":"420px")!=null?n.style.setProperty("width",b):n.style.removeProperty("width")),n})()}ue(["click"]);export{Ne as LookupProducts,S as cartItems,j as cartKey,nt as default,ze as fetchCSVInve,He as loadCarts,ct as loadProduct,T as setCartItems};
