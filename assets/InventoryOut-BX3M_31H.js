const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BAwyYzEz.js","assets/index-BlMn_6j_.js","assets/index-DEEWbFNK.css","assets/Util-C4Gv2Rs-.js","assets/InputHr-CfduWPnF.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-D25m287v.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-MY2s2Dyu.js","assets/debounces-DjkTlD9V.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-Bo0Z9pXT.js"])))=>i.map(i=>d[i]);
import{l as x,_ as C,c as M,a as P,b as ie,i as o,d as t,m as se,S as h,F as ae,e as ne,f as de,h as ce,t as S,n as N}from"./index-BlMn_6j_.js";import{b as F,O as be,c as pe,f as ue}from"./Util-C4Gv2Rs-.js";import{CloseModal as ve}from"./DialogHRM-CJILU5pJ.js";import{u as he}from"./debounces-DjkTlD9V.js";import{LookupProducts as ge}from"./DashProducts-BHXV0Fmx.js";import H from"./FlexSpace-CkYJ8wom.js";import{LookupInventory as fe}from"./DashInventory-DYA91qOi.js";import{OpenToast as _e}from"./Toast-DGx5X4GD.js";import{validStores as W}from"./AddInventory-M4W7DoDX.js";import"./App.module-CbHnVtRQ.js";var E=S("<div style=padding:4px>"),me=S('<div style="margin:15px 0"class=" spaceAround centerBx">'),ye=S('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Salidas o Ventas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),xe=S('<div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$'),Ce=S('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="icon_status centerBx tr_bar_10">');const Se=x(()=>C(()=>import("./SVG-BAwyYzEz.js"),__vite__mapDeps([0,1,2,3]))),y=x(()=>C(()=>import("./InputHr-CfduWPnF.js"),__vite__mapDeps([4,1,2,5]))),j=x(()=>C(()=>import("./ButonHrm-D25m287v.js"),__vite__mapDeps([6,1,2,0,3,7]))),ke=x(()=>C(()=>import("./DropDwnFetchSearch-MY2s2Dyu.js"),__vite__mapDeps([8,1,2,9,0,3,10]))),D=x(()=>C(()=>import("./DropDwnSearch-Bo0Z9pXT.js"),__vite__mapDeps([11,1,2,9,0,3,10])));function Re(b){M();const[e,d]=M({invoice:"",description:""}),[I,k]=P(""),[_,q]=P(null),[p,z]=P([]),Q=he(k,400),c=(l,i)=>{d({[l]:i}),Q(F())},Y=async l=>{if(e?.type==="TRANSFER"&&e?.storeTo){let i={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.store,hbl:e?.hbl,products:p()};await T(i);const a=s=>(s.qty=s.qty*-1,s);let n=p().map(s=>a(s)),u={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.storeTo,hbl:e?.hbl,products:n};await T(u)}else{let i={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.store,hbl:e?.hbl,products:p()};await T(i)}ve(b?.modalId)};ie(()=>{b?.bagnumber&&d({invoice:b?.bagnumber}),b?.hbl&&d({description:b?.hbl})});const G=async l=>{let i=await ge(l),a=[];return Object.keys(i).map(n=>{a.push({id:n,label:i[n]?.name,code:i[n]?.code})}),a},K=async l=>{let i=`${_()?.id} ${e?.store}`,a=await fe(i),n=0,u=0;be(a)?.map(g=>{a[g]?.products?.map(v=>{_()?.id===v?.product?.id&&(n+=v?.price*1*v?.qty*1,u+=v?.qty*1)})});const s=n/u;if(u-e?.qty>=0){let g={product:_(),qty:e?.qty*-1,price:s,salePrice:e?.salePrice};z([...p(),g]),d({qty:0}),d({price:0}),q(null)}else _e({text:"Sin Existencia",timeout:3500,theme:"red",id:F()})},J=async l=>{};return(()=>{var l=ye(),i=l.firstChild,a=i.firstChild,n=a.firstChild,u=n.nextSibling,s=a.nextSibling,g=s.firstChild,v=g.nextSibling,R=v.nextSibling,w=R.nextSibling,L=w.nextSibling,U=L.nextSibling,X=U.nextSibling;return l.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),o(u,t(h,{get when(){return se(()=>!!(e?.invoice&&e?.store&&e?.type))()&&p()?.length>0},get children(){return t(j,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:Y})}})),s.style.setProperty("padding","16px"),o(g,t(D,{list:[{id:"SALES",label:"VENTAS"},{id:"TRANSFER",label:"TRANSFERENCIAS"}],lbl_empty:"Tipo de Salida",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>c("type",r.id),width:"260px"})),o(v,t(y,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:r=>c("invoice",r)})),o(R,t(D,{get list(){return W()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return e?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>c("store",r.id),width:"360px"})),o(s,t(h,{get when(){return e?.type==="TRANSFER"},get children(){var r=E();return o(r,t(D,{get list(){return W()},lbl_empty:"Almacen Destino",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return e?.storeTo},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:f=>c("storeTo",f.id),width:"360px"})),r}}),w),o(w,t(y,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:r=>c("description",r)})),o(L,t(y,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.hbl},placeholder:"Hbl",colors:"#2b2b2b",handleClick:r=>c("hbl",r)})),o(X,t(ke,{callback:G,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return _()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:q,width:"360px"})),o(s,t(h,{get when(){return _()?.id},get children(){return[(()=>{var r=E();return o(r,t(y,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return e?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:f=>c("qty",f)})),r})(),t(h,{get when(){return e?.type==="SALES"},get children(){var r=E();return o(r,t(y,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return e?.salePrice},placeholder:"Precio de Venta",colors:"#2b2b2b",handleClick:f=>c("salePrice",f)})),r}}),t(h,{get when(){return e?.type==="SALES"&&e?.salePrice&&e?.qty||e?.type!=="SALES"&&e?.qty},get children(){var r=me();return o(r,t(j,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:K})),r}})]}}),null),o(i,t(h,{get when(){return p()},get children(){return t(ae,{get each(){return p()},children:(r,f)=>(()=>{var m=Ce(),O=m.firstChild,Z=O.firstChild,A=O.nextSibling,ee=A.firstChild,re=ee.nextSibling,te=re.firstChild,$=A.nextSibling;return o(Z,()=>r?.product?.label),o(m,t(H,{}),A),o(te,()=>(r?.qty*1).toFixed(2)),o(m,t(H,{}),$),o(m,t(h,{get when(){return r?.salePrice},get children(){var V=xe(),oe=V.firstChild,le=oe.nextSibling,B=le.firstChild;return B.firstChild,o(B,()=>(r?.salePrice*1).toFixed(2),null),V}}),$),$.$$click=J,o($,t(Se,{name:"outline_delete",size:24})),m})()})}}),null),ne(r=>(r=de()?"96vw":"920px")!=null?l.style.setProperty("width",r):l.style.removeProperty("width")),l})()}const T=async b=>{let e={ssg_inventory_key:F(),createDate:new Date().getTime(),businessId:N?.profile?.businessYId};e={...b,...e};let d={params:{businessId:N?.profile?.businessYId},form:e},I=pe(139003);d={...d,...I};const k=await ue(d);return k?.data?.error?{}:k?.data};ce(["click"]);export{Re as default};
