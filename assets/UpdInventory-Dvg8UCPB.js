const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CmnSgbeE.js","assets/index-vSzQxDt2.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js","assets/InputHr-Dy2qjIE7.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-Cmzoo1ou.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-BEj6IMcd.js","assets/debounces-64T0P8om.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-BNP5sskI.js"])))=>i.map(i=>d[i]);
import{l as h,_,c as L,a as P,e as le,i as o,f as t,q as ie,S as g,F as de,h as ae,j as se,P as ne,d as ce,t as x,g as be}from"./index-vSzQxDt2.js";import{e as pe,a as ue,R as B,G as ve,g as fe,f as ge}from"./Util-DZlMHKqJ.js";import{CloseModal as he}from"./DialogHRM-hAj9sT_z.js";import{u as _e}from"./debounces-64T0P8om.js";import{LookupProducts as me}from"./DashProducts-Cjri5YAu.js";import N from"./FlexSpace-DYZrbJwe.js";import"./App.module-CbHnVtRQ.js";var w=x("<div style=padding:4px>"),xe=x('<div style="margin:15px 0"class=" spaceAround centerBx">'),Ce=x('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Entrada</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),ye=x('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="icon_status centerBx tr_bar_10">');const ke=h(()=>_(()=>import("./SVG-CmnSgbeE.js"),__vite__mapDeps([0,1,2,3]))),p=h(()=>_(()=>import("./InputHr-Dy2qjIE7.js"),__vite__mapDeps([4,1,2,5]))),H=h(()=>_(()=>import("./ButonHrm-Cmzoo1ou.js"),__vite__mapDeps([6,1,2,0,3,7]))),Se=h(()=>_(()=>import("./DropDwnFetchSearch-BEj6IMcd.js"),__vite__mapDeps([8,1,2,9,0,3,10]))),W=h(()=>_(()=>import("./DropDwnSearch-BNP5sskI.js"),__vite__mapDeps([11,1,2,9,0,3,10])));function Me(d){L();const[r,u]=L({invoice:"",seller:"",description:"",hbl:""}),[f,C]=P(""),[n,A]=P(null),[c,y]=P([]),j=_e(C,400),s=(l,i)=>{u({[l]:i}),j(ue())},z=async l=>{let a=B(E,r,d?.frm2).data;ve(c(),d?.frm2?.products)||(a.products=c()),console.log(a),await $e(d?.frm1?.ssg_inventory_key,a),he(d?.modalId)};le(()=>{u(d?.frm1),d?.frm1?.products.map(l=>{y([...c(),l])})});const G=async l=>{let i=await me(l),a=[];return Object.keys(i).map(b=>{a.push({id:b,label:i[b]?.name,code:i[b]?.code})}),a},J=async l=>{let i={product:n(),qty:r?.qty,price:r?.price};y([...c(),i]),u({qty:0}),u({price:0}),A(null)},Q=l=>{y(i=>i.filter((a,b)=>a.product.id!==l))};let E=["invoice","type","store","seller","description","products","hbl","salePrice"];return(()=>{var l=Ce(),i=l.firstChild,a=i.firstChild,b=a.firstChild,Y=b.nextSibling,k=a.nextSibling,D=k.firstChild,F=D.nextSibling,I=F.nextSibling,q=I.nextSibling,M=q.nextSibling,T=M.nextSibling,U=T.nextSibling,K=U.nextSibling;return l.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),o(Y,t(g,{get when(){return ie(()=>!!(r?.invoice&&r?.store&&B(E,r,d?.frm2)?.hasChange))()&&c()?.length>0},get children(){return t(H,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:z})}})),k.style.setProperty("padding","16px"),o(D,t(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>s("invoice",e)})),o(F,t(W,{list:[{id:"ENTRY",label:"ENTRADAS"},{id:"SALES",label:"VENTAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>s("type",e.id),width:"260px"})),o(I,t(W,{get list(){return Pe()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return r?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>s("store",e.id),width:"360px"})),o(q,t(p,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.seller},placeholder:"Vendedor o Comprador",colors:"#2b2b2b",handleClick:e=>s("seller",e)})),o(M,t(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.hbl},placeholder:"Hbl",colors:"#2b2b2b",handleClick:e=>s("hbl",e)})),o(T,t(p,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>s("description",e)})),o(K,t(Se,{callback:G,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return n()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:A,width:"360px"})),o(k,t(g,{get when(){return n()?.id},get children(){return[(()=>{var e=w();return o(e,t(p,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:v=>s("qty",v)})),e})(),(()=>{var e=w();return o(e,t(p,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.price},placeholder:"Precio",colors:"#2b2b2b",handleClick:v=>s("price",v)})),e})(),t(g,{get when(){return r?.type==="SALES"},get children(){var e=w();return o(e,t(p,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.salePrice},placeholder:"Precio de Venta",colors:"#2b2b2b",handleClick:v=>s("salePrice",v)})),e}}),t(g,{get when(){return r?.price&&r?.qty},get children(){var e=xe();return o(e,t(H,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:J})),e}})]}}),null),o(i,t(g,{get when(){return c()},get children(){return t(de,{get each(){return c()},children:(e,v)=>(()=>{var m=ye(),O=m.firstChild,X=O.firstChild,S=O.nextSibling,Z=S.firstChild,ee=Z.nextSibling,re=ee.firstChild,$=S.nextSibling,te=$.firstChild,oe=te.nextSibling,R=oe.firstChild;R.firstChild;var V=$.nextSibling;return o(X,()=>e?.product?.label),o(m,t(N,{}),S),o(re,()=>(e?.qty*1).toFixed(2)),o(m,t(N,{}),$),o(R,()=>(e?.price*1).toFixed(2),null),V.$$click=()=>Q(e?.product?.id),o(V,t(ke,{name:"outline_delete",size:24})),m})()})}}),null),ae(e=>(e=se()?"96vw":"1020px")!=null?l.style.setProperty("width",e):l.style.removeProperty("width")),l})()}const $e=async(d,r)=>{let u={...r},f={params:{businessId:be?.profile?.businessYId,id:d},form:u},C=fe(139004);f={...f,...C};{const n=await ge(f);return console.log(f),console.log(n),n?.data?.error?{}:n?.data}},Pe=()=>{let d=[];return pe("M023009")?.stores.map(r=>{ne()[r.id]&&d.push(r)}),d};ce(["click"]);export{Me as default,Pe as validStores};
