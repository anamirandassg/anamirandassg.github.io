const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BUbVtHju.js","assets/index-DA7NoUTw.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js","assets/InputHr-fTKJl904.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-C07NJfWM.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-49r_rlpA.js","assets/debounces-BUerqMOd.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-fQvVCZ_q.js","assets/PickDate-CJOr4ZFP.js","assets/DialogHRM-BuFEgiLx.js","assets/DialogHRM-V9_lZntj.css"])))=>i.map(i=>d[i]);
import{l as f,_ as m,c as M,a as D,e as ie,i as o,f as t,q as ae,S as g,F as se,h as ne,j as de,d as ce,t as S,g as N}from"./index-DA7NoUTw.js";import{a as F,O as be,g as pe,f as ue}from"./Util-DZlMHKqJ.js";import{CloseModal as ve}from"./DialogHRM-BuFEgiLx.js";import{u as he}from"./debounces-BUerqMOd.js";import{LookupProducts as ge}from"./DashProducts-Bxu41AsP.js";import j from"./FlexSpace-jfeR8ctX.js";import{LookupInventory as _e}from"./DashInventory-Sr02e7AA.js";import{OpenToast as fe}from"./Toast-DSYEWaBA.js";import{validStores as H}from"./AddInventory-C3NiGgaS.js";import"./App.module-CbHnVtRQ.js";var P=S("<div style=padding:4px>"),me=S('<div style="margin:15px 0"class=" spaceAround centerBx">'),ye=S('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Salidas o Ventas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),xe=S('<div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$'),Ce=S('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="icon_status centerBx tr_bar_10">');const Se=f(()=>m(()=>import("./SVG-BUbVtHju.js"),__vite__mapDeps([0,1,2,3]))),C=f(()=>m(()=>import("./InputHr-fTKJl904.js"),__vite__mapDeps([4,1,2,5]))),W=f(()=>m(()=>import("./ButonHrm-C07NJfWM.js"),__vite__mapDeps([6,1,2,0,3,7]))),ke=f(()=>m(()=>import("./DropDwnFetchSearch-49r_rlpA.js"),__vite__mapDeps([8,1,2,9,0,3,10]))),E=f(()=>m(()=>import("./DropDwnSearch-fQvVCZ_q.js"),__vite__mapDeps([11,1,2,9,0,3,10]))),$e=f(()=>m(()=>import("./PickDate-CJOr4ZFP.js"),__vite__mapDeps([12,1,2,13,14,3])));function Le(b){M();const[e,s]=M({invoice:"",description:""}),[I,k]=D(""),[y,q]=D(null),[p,z]=D([]),Q=he(k,400),c=(l,i)=>{s({[l]:i}),Q(F())},Y=async l=>{if(e?.type==="TRANSFER"&&e?.storeTo){let i={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.store,hbl:e?.hbl,createDate:e?.createDate,products:p()};await T(i);const n=a=>(a.qty=a.qty*-1,a);let d=p().map(a=>n(a)),u={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.storeTo,hbl:e?.hbl,createDate:e?.createDate,products:d};await T(u)}else{let i={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.store,hbl:e?.hbl,createDate:e?.createDate,products:p()};await T(i)}ve(b?.modalId)};ie(()=>{b?.bagnumber&&s({invoice:b?.bagnumber}),b?.hbl&&(s({description:b?.hbl}),s({hbl:b?.hbl}))});const G=async l=>{let i=await ge(l),n=[];return Object.keys(i).map(d=>{n.push({id:d,label:i[d]?.name,code:i[d]?.code})}),n},K=async l=>{let i=`${y()?.id} ${e?.store}`,n=await _e(i),d=0,u=0;be(n)?.map(v=>{n[v]?.products?.map(h=>{y()?.id===h?.product?.id&&(d+=h?.price*1*h?.qty*1,u+=h?.qty*1)})});const a=d/u;if(u-e?.qty>=0){let v={product:y(),qty:e?.qty*-1,price:a,salePrice:e?.salePrice};z([...p(),v]),s({qty:0}),s({price:0}),q(null)}else fe({text:"Sin Existencia",timeout:3500,theme:"red",id:F()})},J=async l=>{};return(()=>{var l=ye(),i=l.firstChild,n=i.firstChild,d=n.firstChild,u=d.nextSibling,a=n.nextSibling,v=a.firstChild,h=v.nextSibling,R=h.nextSibling,w=R.nextSibling,L=w.nextSibling,U=L.nextSibling,X=U.nextSibling;return l.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),o(u,t(g,{get when(){return ae(()=>!!(e?.invoice&&e?.store&&e?.type))()&&p()?.length>0},get children(){return t(W,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:Y})}})),a.style.setProperty("padding","16px"),o(a,t($e,{get init(){return e?.createDate},label:"Fecha",updDate:r=>c("createDate",r)}),v),o(v,t(E,{list:[{id:"SALES",label:"VENTAS"},{id:"TRANSFER",label:"TRANSFERENCIAS"}],lbl_empty:"Tipo de Salida",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>c("type",r.id),width:"260px"})),o(h,t(C,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:r=>c("invoice",r)})),o(R,t(E,{get list(){return H()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return e?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>c("store",r.id),width:"360px"})),o(a,t(g,{get when(){return e?.type==="TRANSFER"},get children(){var r=P();return o(r,t(E,{get list(){return H()},lbl_empty:"Almacen Destino",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return e?.storeTo},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:_=>c("storeTo",_.id),width:"360px"})),r}}),w),o(w,t(C,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:r=>c("description",r)})),o(L,t(C,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.hbl},placeholder:"Hbl",colors:"#2b2b2b",handleClick:r=>c("hbl",r)})),o(X,t(ke,{callback:G,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return y()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:q,width:"360px"})),o(a,t(g,{get when(){return y()?.id},get children(){return[(()=>{var r=P();return o(r,t(C,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return e?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:_=>c("qty",_)})),r})(),t(g,{get when(){return e?.type==="SALES"},get children(){var r=P();return o(r,t(C,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return e?.salePrice},placeholder:"Precio de Venta",colors:"#2b2b2b",handleClick:_=>c("salePrice",_)})),r}}),t(g,{get when(){return e?.type==="SALES"&&e?.salePrice&&e?.qty||e?.type!=="SALES"&&e?.qty},get children(){var r=me();return o(r,t(W,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:K})),r}})]}}),null),o(i,t(g,{get when(){return p()},get children(){return t(se,{get each(){return p()},children:(r,_)=>(()=>{var x=Ce(),O=x.firstChild,Z=O.firstChild,A=O.nextSibling,ee=A.firstChild,re=ee.nextSibling,te=re.firstChild,$=A.nextSibling;return o(Z,()=>r?.product?.label),o(x,t(j,{}),A),o(te,()=>(r?.qty*1).toFixed(2)),o(x,t(j,{}),$),o(x,t(g,{get when(){return r?.salePrice},get children(){var V=xe(),oe=V.firstChild,le=oe.nextSibling,B=le.firstChild;return B.firstChild,o(B,()=>(r?.salePrice*1).toFixed(2),null),V}}),$),$.$$click=J,o($,t(Se,{name:"outline_delete",size:24})),x})()})}}),null),ne(r=>(r=de()?"96vw":"920px")!=null?l.style.setProperty("width",r):l.style.removeProperty("width")),l})()}const T=async b=>{let e={ssg_inventory_key:F(),createDate:new Date().getTime(),businessId:N?.profile?.businessYId};e={...b,...e};let s={params:{businessId:N?.profile?.businessYId},form:e},I=pe(139003);s={...s,...I};const k=await ue(s);return k?.data?.error?{}:k?.data};ce(["click"]);export{Le as default};
