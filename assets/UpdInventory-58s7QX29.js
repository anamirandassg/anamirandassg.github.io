const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BnlDMkmC.js","assets/index-CbyE4LeZ.js","assets/index-lCkr9jrN.css","assets/InputHr-CC3ioeQU.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-ZVRLJPUn.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-Dg7SM5JO.js","assets/debounces-DRT-KIHx.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-Bfg8iRla.js"])))=>i.map(i=>d[i]);
import{l as h,_,c as R,a as w,s as oe,i as l,d as t,m as ie,S as g,F as de,e as ae,g as se,o as ne,aD as ce,h as be,t as x,j as pe,aF as B,ag as ue,n as ve,p as fe,q as ge}from"./index-CbyE4LeZ.js";import{CloseModal as he}from"./DialogHRM-JZ8kGj4X.js";import{u as _e}from"./debounces-DRT-KIHx.js";import{LookupProducts as me}from"./DashProducts-BdBvwdwE.js";import N from"./FlexSpace-D8ZW1KWZ.js";import"./App.module-CbHnVtRQ.js";var A=x("<div style=padding:4px>"),xe=x('<div style="margin:15px 0"class=" spaceAround centerBx">'),Ce=x('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Entrada</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),ye=x('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="icon_status centerBx tr_bar_10">');const ke=h(()=>_(()=>import("./SVG-BnlDMkmC.js"),__vite__mapDeps([0,1,2]))),p=h(()=>_(()=>import("./InputHr-CC3ioeQU.js"),__vite__mapDeps([3,1,2,4]))),H=h(()=>_(()=>import("./ButonHrm-ZVRLJPUn.js"),__vite__mapDeps([5,1,2,0,6]))),Se=h(()=>_(()=>import("./DropDwnFetchSearch-Dg7SM5JO.js"),__vite__mapDeps([7,1,2,8,0,9]))),W=h(()=>_(()=>import("./DropDwnSearch-Bfg8iRla.js"),__vite__mapDeps([10,1,2,8,0,9])));function qe(d){R();const[r,u]=R({invoice:"",seller:"",description:"",hbl:""}),[f,C]=w(""),[c,P]=w(null),[b,y]=w([]),j=_e(C,400),s=(o,i)=>{u({[o]:i}),j(pe())},z=async o=>{let a=B(E,r,d?.frm2).data,n=ue(b(),d?.frm2?.products);console.log({diffProd:n}),n||(a.products=b()),console.log(a),await $e(d?.frm1?.ssg_inventory_key,a),he(d?.modalId)};oe(()=>{u(d?.frm1),d?.frm1?.products.map(o=>{y([...b(),o])})});const J=async o=>{let i=await me(o),a=[];return Object.keys(i).map(n=>{a.push({id:n,label:i[n]?.name,code:i[n]?.code})}),a},Q=async o=>{let i={product:c(),qty:r?.qty,price:r?.price};y([...b(),i]),u({qty:0}),u({price:0}),P(null)},Y=o=>{y(i=>i.filter((a,n)=>a.product.id!==o))};let E=["invoice","type","store","seller","description","products","hbl","salePrice"];return(()=>{var o=Ce(),i=o.firstChild,a=i.firstChild,n=a.firstChild,G=n.nextSibling,k=a.nextSibling,D=k.firstChild,F=D.nextSibling,I=F.nextSibling,q=I.nextSibling,M=q.nextSibling,T=M.nextSibling,U=T.nextSibling,K=U.nextSibling;return o.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),o.style.setProperty("overflow","auto"),o.style.setProperty("background","#ffffff"),o.style.setProperty("border-radius","13"),o.style.setProperty("padding","10px 19px"),l(G,t(g,{get when(){return ie(()=>!!(r?.invoice&&r?.store&&B(E,r,d?.frm2)?.hasChange))()&&b()?.length>0},get children(){return t(H,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:z})}})),k.style.setProperty("padding","16px"),l(D,t(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>s("invoice",e)})),l(F,t(W,{list:[{id:"ENTRY",label:"ENTRADAS"},{id:"SALES",label:"VENTAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>s("type",e.id),width:"260px"})),l(I,t(W,{get list(){return we()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return r?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>s("store",e.id),width:"360px"})),l(q,t(p,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.seller},placeholder:"Vendedor o Comprador",colors:"#2b2b2b",handleClick:e=>s("seller",e)})),l(M,t(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.hbl},placeholder:"Hbl",colors:"#2b2b2b",handleClick:e=>s("hbl",e)})),l(T,t(p,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>s("description",e)})),l(K,t(Se,{callback:J,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return c()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:P,width:"360px"})),l(k,t(g,{get when(){return c()?.id},get children(){return[(()=>{var e=A();return l(e,t(p,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:v=>s("qty",v)})),e})(),(()=>{var e=A();return l(e,t(p,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.price},placeholder:"Precio",colors:"#2b2b2b",handleClick:v=>s("price",v)})),e})(),t(g,{get when(){return r?.type==="SALES"},get children(){var e=A();return l(e,t(p,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.salePrice},placeholder:"Precio de Venta",colors:"#2b2b2b",handleClick:v=>s("salePrice",v)})),e}}),t(g,{get when(){return r?.price&&r?.qty},get children(){var e=xe();return l(e,t(H,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:Q})),e}})]}}),null),l(i,t(g,{get when(){return b()},get children(){return t(de,{get each(){return b()},children:(e,v)=>(()=>{var m=ye(),O=m.firstChild,X=O.firstChild,S=O.nextSibling,Z=S.firstChild,ee=Z.nextSibling,re=ee.firstChild,$=S.nextSibling,te=$.firstChild,le=te.nextSibling,V=le.firstChild;V.firstChild;var L=$.nextSibling;return l(X,()=>e?.product?.label),l(m,t(N,{}),S),l(re,()=>(e?.qty*1).toFixed(2)),l(m,t(N,{}),$),l(V,()=>(e?.price*1).toFixed(2),null),L.$$click=()=>Y(e?.product?.id),l(L,t(ke,{name:"outline_delete",size:24})),m})()})}}),null),ae(e=>(e=se()?"96vw":"1020px")!=null?o.style.setProperty("width",e):o.style.removeProperty("width")),o})()}const $e=async(d,r)=>{let u={...r},f={params:{businessId:ve?.profile?.businessYId,id:d},form:u},C=fe(139004);f={...f,...C};{const c=await ge(f);return console.log(f),console.log(c),c?.data?.error?{}:c?.data}},we=()=>{let d=[];return ne("M023009")?.stores.map(r=>{ce()[r.id]&&d.push(r)}),d};be(["click"]);export{qe as default,we as validStores};
