const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BRKkFrCC.js","assets/index-B9XtfwEX.js","assets/index-BRlA1Q7g.css","assets/Util-BSJ3epRO.js","assets/InputHr-CQXdx0b9.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-peOL9M4H.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-BuSahQIZ.js","assets/debounces-B6fqrYGB.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-BqBXRm5x.js","assets/PickDate-BzgtLWmW.js","assets/DialogHRM-aP-iD2kX.js","assets/DialogHRM-V9_lZntj.css","assets/FloatInputText-CdWBZSIu.js","assets/FloatInputText-BnENulVO.css"])))=>i.map(i=>d[i]);
import{l as f,_ as m,c as M,a as P,d as le,i as o,e as t,q as ie,S as u,x as ae,F as ne,f as se,j as de,h as ce,t as S,g as N}from"./index-B9XtfwEX.js";import{a as q,O as be,g as pe,f as ue}from"./Util-BSJ3epRO.js";import{CloseModal as ve}from"./DialogHRM-aP-iD2kX.js";import{u as he}from"./debounces-B6fqrYGB.js";import{LookupProducts as ge}from"./DashProducts-cYPauTOJ.js";import j from"./FlexSpace-Cm-9PswZ.js";import{LookupInventory as _e}from"./DashInventory-tgrbgaXS.js";import{OpenToast as fe}from"./Toast-DcmCjBIL.js";import{validStores as H}from"./AddInventory-DO6RCHdz.js";import"./App.module-CbHnVtRQ.js";var w=S("<div style=padding:4px>"),me=S('<div style="margin:15px 0"class=" spaceAround centerBx">'),ye=S('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Salidas o Ventas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),xe=S('<div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$'),Ce=S('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="icon_status centerBx tr_bar_10">');const Se=f(()=>m(()=>import("./SVG-BRKkFrCC.js"),__vite__mapDeps([0,1,2,3])));f(()=>m(()=>import("./InputHr-CQXdx0b9.js"),__vite__mapDeps([4,1,2,5])));const W=f(()=>m(()=>import("./ButonHrm-peOL9M4H.js"),__vite__mapDeps([6,1,2,0,3,7]))),ke=f(()=>m(()=>import("./DropDwnFetchSearch-BuSahQIZ.js"),__vite__mapDeps([8,1,2,9,0,3,10]))),E=f(()=>m(()=>import("./DropDwnSearch-BqBXRm5x.js"),__vite__mapDeps([11,1,2,9,0,3,10]))),$e=f(()=>m(()=>import("./PickDate-BzgtLWmW.js"),__vite__mapDeps([12,1,2,13,14,3]))),C=f(()=>m(()=>import("./FloatInputText-CdWBZSIu.js"),__vite__mapDeps([15,1,2,16])));function Le(b){M();const[e,n]=M({invoice:"",description:""}),[F,k]=P(""),[y,I]=P(null),[v,z]=P([]),Q=he(k,400),c=(l,i)=>{n({[l]:i}),Q(q())},Y=async l=>{if(e?.type==="TRANSFER"&&e?.storeTo){let i={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.store,toStore:e?.storeTo,hbl:e?.hbl,createDate:e?.createDate||new Date().getTime(),products:v()};await T(i);const s=a=>(a.qty=a.qty*-1,a);let d=v().map(a=>s(a)),h={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.storeTo,fromStore:e?.store,hbl:e?.hbl,createDate:e?.createDate||new Date().getTime(),products:d};await T(h)}else{let i={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.store,hbl:e?.hbl,createDate:e?.createDate||new Date().getTime(),products:v()};await T(i)}ve(b?.modalId)};le(()=>{b?.bagnumber&&n({invoice:b?.bagnumber}),b?.hbl&&(n({description:b?.hbl}),n({hbl:b?.hbl}))});const G=async l=>{let i=await ge(l),s=[];return Object.keys(i).map(d=>{s.push({id:d,label:i[d]?.name,code:i[d]?.code})}),s},K=async l=>{let i=`${y()?.id} ${e?.store}`,s=await _e(i),d=0,h=0;be(s)?.map(g=>{s[g]?.products?.map(_=>{y()?.id===_?.product?.id&&(d+=_?.price*1*_?.qty*1,h+=_?.qty*1)})});const a=d/h;if(h-e?.qty>=0){let g={product:y(),qty:e?.qty*-1,price:a,salePrice:e?.salePrice};z([...v(),g]),n({qty:0}),n({price:0}),I(null)}else fe({text:"Sin Existencia",timeout:3500,theme:"red",id:q()})},U=async l=>{};return(()=>{var l=ye(),i=l.firstChild,s=i.firstChild,d=s.firstChild,h=d.nextSibling,a=s.nextSibling,g=a.firstChild,_=g.nextSibling,R=_.nextSibling,D=R.nextSibling,L=D.nextSibling,J=L.nextSibling;return l.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),o(h,t(u,{get when(){return ie(()=>!!(e?.invoice&&e?.store&&e?.type))()&&v()?.length>0},get children(){return t(W,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:Y})}})),a.style.setProperty("padding","16px"),o(a,t($e,{get init(){return e?.createDate},label:"Fecha",updDate:r=>c("createDate",r)}),g),o(g,t(E,{list:[{id:"SALES",label:"VENTAS"},{id:"TRANSFER",label:"TRANSFERENCIAS"}],lbl_empty:"Tipo de Salida",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>c("type",r.id),width:"260px"})),o(_,t(C,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",validations:{required:!0},index:1,get value(){return e?.invoice||""},placeholder:"Factura",colors:"#2b2b2b",handleClick:r=>c("invoice",r)})),o(R,t(E,{get list(){return H()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return e?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>c("store",r.id),width:"360px"})),o(a,t(u,{get when(){return e?.type==="TRANSFER"},get children(){var r=w();return o(r,t(E,{get list(){return H()},lbl_empty:"Almacen Destino",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return e?.storeTo},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:p=>c("storeTo",p.id),width:"360px"})),r}}),D),o(D,t(C,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",index:2,get value(){return e?.description||""},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:r=>c("description",r)})),o(a,t(u,{get when(){return ae()},get children(){var r=w();return o(r,t(C,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",index:3,get value(){return e?.hbl||""},placeholder:"Hbl",colors:"#2b2b2b",handleClick:p=>c("hbl",p)})),r}}),L),o(J,t(ke,{callback:G,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return y()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:I,width:"360px"})),o(a,t(u,{get when(){return y()?.id},get children(){return[(()=>{var r=w();return o(r,t(C,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return e?.qty||""},placeholder:"Cantidad",validations:{required:!0},index:1,colors:"#2b2b2b",handleClick:p=>c("qty",p)})),r})(),t(u,{get when(){return e?.type==="SALES"},get children(){var r=w();return o(r,t(C,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return e?.salePrice||""},placeholder:"Precio de Venta",colors:"#2b2b2b",handleClick:p=>c("salePrice",p)})),r}}),t(u,{get when(){return e?.type==="SALES"&&e?.salePrice&&e?.qty||e?.type!=="SALES"&&e?.qty},get children(){var r=me();return o(r,t(W,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:K})),r}})]}}),null),o(i,t(u,{get when(){return v()},get children(){return t(ne,{get each(){return v()},children:(r,p)=>(()=>{var x=Ce(),O=x.firstChild,X=O.firstChild,A=O.nextSibling,Z=A.firstChild,ee=Z.nextSibling,re=ee.firstChild,$=A.nextSibling;return o(X,()=>r?.product?.label),o(x,t(j,{}),A),o(re,()=>(r?.qty*1).toFixed(2)),o(x,t(j,{}),$),o(x,t(u,{get when(){return r?.salePrice},get children(){var V=xe(),te=V.firstChild,oe=te.nextSibling,B=oe.firstChild;return B.firstChild,o(B,()=>(r?.salePrice*1).toFixed(2),null),V}}),$),$.$$click=U,o($,t(Se,{name:"outline_delete",size:24})),x})()})}}),null),se(r=>(r=de()?"96vw":"920px")!=null?l.style.setProperty("width",r):l.style.removeProperty("width")),l})()}const T=async b=>{let e={ssg_inventory_key:q(),createDate:new Date().getTime(),businessId:N?.profile?.businessYId};e={...b,...e};let n={params:{businessId:N?.profile?.businessYId},form:e},F=pe(139003);n={...n,...F};const k=await ue(n);return k?.data?.error?{}:k?.data};ce(["click"]);export{Le as default};
