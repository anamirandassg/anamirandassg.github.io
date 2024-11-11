const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DBuw3s_z.js","assets/index-CX08qMr9.js","assets/index-W9fcnr7G.css","assets/index-Ci0zXM0r.js","assets/InputHr-DSOoyUdn.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-BEC_Ro5Q.js","assets/Util-D2YTzGDx.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-BuWSopmR.js","assets/debounces-Bxi15UZt.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-DtfvfJaD.js"])))=>i.map(i=>d[i]);
import{l as y,_ as x,c as B,a as P,m as ie,i as o,d as t,f as le,e as se,t as C,j as ae,S as g,F as ne,k as M}from"./index-CX08qMr9.js";import{i as de}from"./globalSignal-wLi-6lpX.js";import{g as F,O as ce,b as pe,f as be}from"./Util-D2YTzGDx.js";import{CloseModal as ue}from"./DialogHRM-Dg-o5fgk.js";import{u as ve}from"./debounces-Bxi15UZt.js";import{LookupProducts as ge}from"./DashProducts-CMcnyL0R.js";import N from"./FlexSpace-hKEW-O6U.js";import{LookupInventory as he}from"./DashInventory-loWcc4A3.js";import{OpenToast as me}from"./Toast-BM5u4LI0.js";import{validStores as j}from"./AddInventory-D3spAuF1.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";var E=C("<div style=padding:4px>"),_e=C('<div style="margin:15px 0"class=" spaceAround centerBx">'),fe=C('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Salidas o Ventas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),ye=C('<div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$'),xe=C('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="icon_status centerBx tr_bar_10">');const Ce=y(()=>x(()=>import("./SVG-DBuw3s_z.js"),__vite__mapDeps([0,1,2,3]))),$=y(()=>x(()=>import("./InputHr-DSOoyUdn.js"),__vite__mapDeps([4,1,2,5]))),W=y(()=>x(()=>import("./ButonHrm-BEC_Ro5Q.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),Se=y(()=>x(()=>import("./DropDwnFetchSearch-BuWSopmR.js"),__vite__mapDeps([9,1,2,10,0,3,11]))),D=y(()=>x(()=>import("./DropDwnSearch-DtfvfJaD.js"),__vite__mapDeps([12,1,2,10,0,3,11])));function Le(c){B();const[e,d]=B({invoice:"",description:""}),[I,S]=P(""),[_,q]=P(null),[p,z]=P([]),H=ve(S,400),b=(i,l)=>{d({[i]:l}),H(F())},Q=async i=>{if(e?.type==="TRANSFER"&&e?.storeTo){let l={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.store,products:p()};await T(l);const a=s=>(s.qty=s.qty*-1,s);let n=p().map(s=>a(s)),u={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.storeTo,products:n};await T(u)}else{let l={type:e?.type,invoice:e?.invoice,description:e?.description,store:e?.store,products:p()};await T(l)}ue(c?.modalId)};ie(()=>{c?.bagnumber&&d({invoice:c?.bagnumber}),c?.hbl&&d({description:c?.hbl})});const Y=async i=>{let l=await ge(i),a=[];return Object.keys(l).map(n=>{a.push({id:n,label:l[n]?.name,code:l[n]?.code})}),a},G=async i=>{let l=`${_()?.id} ${e?.store}`,a=await he(l),n=0,u=0;ce(a)?.map(h=>{a[h]?.products?.map(v=>{_()?.id===v?.product?.id&&(n+=v?.price*1*v?.qty*1,u+=v?.qty*1)})});const s=n/u;if(u-e?.qty>=0){let h={product:_(),qty:e?.qty*-1,price:s};z([...p(),h]),d({qty:0}),d({price:0}),q(null)}else me({text:"Sin Existencia",timeout:3500,theme:"red",id:F()})},K=async i=>{};return(()=>{var i=fe(),l=i.firstChild,a=l.firstChild,n=a.firstChild,u=n.nextSibling,s=a.nextSibling,h=s.firstChild,v=h.nextSibling,R=v.nextSibling,w=R.nextSibling,J=w.nextSibling,U=J.nextSibling;return i.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),i.style.setProperty("overflow","auto"),i.style.setProperty("background","#ffffff"),i.style.setProperty("border-radius","13"),i.style.setProperty("padding","10px 19px"),o(u,t(g,{get when(){return ae(()=>!!(e?.invoice&&e?.store&&e?.type))()&&p()?.length>0},get children(){return t(W,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:Q})}})),s.style.setProperty("padding","16px"),o(h,t(D,{list:[{id:"SALES",label:"VENTAS"},{id:"TRANSFER",label:"TRANSFERENCIAS"}],lbl_empty:"Tipo de Salida",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>b("type",r.id),width:"260px"})),o(v,t($,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:r=>b("invoice",r)})),o(R,t(D,{get list(){return j()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return e?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>b("store",r.id),width:"360px"})),o(s,t(g,{get when(){return e?.type==="TRANSFER"},get children(){var r=E();return o(r,t(D,{get list(){return j()},lbl_empty:"Almacen Destino",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return e?.storeTo},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:m=>b("storeTo",m.id),width:"360px"})),r}}),w),o(w,t($,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:r=>b("description",r)})),o(U,t(Se,{callback:Y,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return _()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:q,width:"360px"})),o(s,t(g,{get when(){return _()?.id},get children(){return[(()=>{var r=E();return o(r,t($,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return e?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:m=>b("qty",m)})),r})(),t(g,{get when(){return e?.type==="SALES"},get children(){var r=E();return o(r,t($,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return e?.salePrice},placeholder:"Precio de Venta",colors:"#2b2b2b",handleClick:m=>b("salePrice",m)})),r}}),t(g,{get when(){return e?.type==="SALES"&&e?.salePrice&&e?.qty||e?.type!=="SALES"&&e?.qty},get children(){var r=_e();return o(r,t(W,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:G})),r}})]}}),null),o(l,t(g,{get when(){return p()},get children(){return t(ne,{get each(){return p()},children:(r,m)=>(()=>{var f=xe(),L=f.firstChild,X=L.firstChild,A=L.nextSibling,Z=A.firstChild,ee=Z.nextSibling,re=ee.firstChild,k=A.nextSibling;return o(X,()=>r?.product?.label),o(f,t(N,{}),A),o(re,()=>(r?.qty*1).toFixed(2)),o(f,t(N,{}),k),o(f,t(g,{get when(){return r?.salePrice},get children(){var O=ye(),te=O.firstChild,oe=te.nextSibling,V=oe.firstChild;return V.firstChild,o(V,()=>(r?.salePrice*1).toFixed(2),null),O}}),k),k.$$click=K,o(k,t(Ce,{name:"outline_delete",size:24})),f})()})}}),null),le(r=>(r=de()?"96vw":"920px")!=null?i.style.setProperty("width",r):i.style.removeProperty("width")),i})()}const T=async c=>{let e={ssg_inventory_key:F(),createDate:new Date().getTime(),businessId:M?.profile?.businessYId};e={...c,...e};let d={params:{businessId:M?.profile?.businessYId},form:e},I=pe(139003);d={...d,...I};const S=await be(d);return S?.data?.error?{}:S?.data};se(["click"]);export{Le as default};
