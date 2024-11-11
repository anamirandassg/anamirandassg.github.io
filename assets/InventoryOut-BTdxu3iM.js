const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CvC3scd9.js","assets/index-CQ7LNxaB.js","assets/index-NFdrrltd.css","assets/index-Ci0zXM0r.js","assets/InputHr-Dn7BvEkL.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-BVVtuOAh.js","assets/Util-DErZaF9J.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-KYqtaypc.js","assets/debounces-Bud72QmB.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-CjTu4j1Z.js"])))=>i.map(i=>d[i]);
import{l as f,_ as h,c as L,a as w,m as te,i as o,d as t,f as oe,e as le,t as m,j as ie,S as u,F as ae,k as R}from"./index-CQ7LNxaB.js";import{i as se}from"./globalSignal-CZuww2AS.js";import{a as ne,g as A,O as de,b as ce,f as be}from"./Util-DErZaF9J.js";import{CloseModal as pe}from"./DialogHRM-CFsJT5DH.js";import{u as ue}from"./debounces-Bud72QmB.js";import{LookupProducts as ve}from"./DashProducts-Dpl1Gt1b.js";import V from"./FlexSpace-BgaoLnqk.js";import{LookupInventory as ge}from"./DashInventory-DlHESRR4.js";import{OpenToast as _e}from"./Toast-B4VeSPfQ.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";var M=m("<div style=padding:4px>"),fe=m('<div style="margin:15px 0"class=" spaceAround centerBx">'),he=m('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Salidas o Ventas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),me=m('<div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$'),ye=m('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="icon_status centerBx tr_bar_10">');const xe=f(()=>h(()=>import("./SVG-CvC3scd9.js"),__vite__mapDeps([0,1,2,3]))),S=f(()=>h(()=>import("./InputHr-Dn7BvEkL.js"),__vite__mapDeps([4,1,2,5]))),B=f(()=>h(()=>import("./ButonHrm-BVVtuOAh.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),Ce=f(()=>h(()=>import("./DropDwnFetchSearch-KYqtaypc.js"),__vite__mapDeps([9,1,2,10,0,3,11]))),N=f(()=>h(()=>import("./DropDwnSearch-CjTu4j1Z.js"),__vite__mapDeps([12,1,2,10,0,3,11])));function Oe(d){L();const[r,a]=L({invoice:"",description:""}),[P,y]=w(""),[v,E]=w(null),[g,j]=w([]),W=ue(y,400),p=(l,i)=>{a({[l]:i}),W(A())},z=async l=>{let i={invoice:r?.invoice,description:r?.description,products:g()};await Se(i),pe(d?.modalId)};te(()=>{d?.bagnumber&&a({invoice:d?.bagnumber}),d?.hbl&&a({description:d?.hbl})});const H=async l=>{let i=await ve(l),n=[];return Object.keys(i).map(s=>{n.push({id:s,label:i[s]?.name,code:i[s]?.code})}),n},Q=async l=>{let i=await ge(v()?.id),n=0,s=0;de(i)?.map(c=>{i[c]?.products?.map(b=>{v()?.id===b?.product?.id&&(n+=b?.price*1*b?.qty*1,s+=b?.qty*1)})});const k=n/s;if(s-r?.qty>=0){let c={product:v(),qty:r?.qty*-1,price:k};j([...g(),c]),a({qty:0}),a({price:0}),E(null)}else _e({text:"Sin Existencia",timeout:3500,theme:"red",id:A()})},Y=async l=>{};return(()=>{var l=he(),i=l.firstChild,n=i.firstChild,s=n.firstChild,k=s.nextSibling,c=n.nextSibling,b=c.firstChild,D=b.nextSibling,I=D.nextSibling,F=I.nextSibling,G=F.nextSibling,K=G.nextSibling;return l.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),o(k,t(u,{get when(){return ie(()=>!!(r?.invoice&&r?.store&&r?.type))()&&g()?.length>0},get children(){return t(B,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:z})}})),c.style.setProperty("padding","16px"),o(b,t(N,{list:[{id:"SALES",label:"VENTAS"},{id:"SEND",label:"ENVIO"},{id:"TRANSFER",label:"TRANSFERENCIAS"}],lbl_empty:"Tipo de Salida",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>p("type",e.id),width:"260px"})),o(D,t(N,{get list(){return ne("M023009")?.stores},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return r?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>p("store",e.id),width:"360px"})),o(I,t(S,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>p("invoice",e)})),o(F,t(S,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>p("description",e)})),o(K,t(Ce,{callback:H,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return v()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:E,width:"360px"})),o(c,t(u,{get when(){return v()?.id},get children(){return[(()=>{var e=M();return o(e,t(S,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:x=>p("qty",x)})),e})(),t(u,{get when(){return r?.type==="SALES"},get children(){var e=M();return o(e,t(S,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.salePrice},placeholder:"Precio de Venta",colors:"#2b2b2b",handleClick:x=>p("salePrice",x)})),e}}),t(u,{get when(){return r?.type==="SALES"&&r?.price&&r?.qty||r?.type!=="SALES"&&r?.qty},get children(){var e=fe();return o(e,t(B,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:Q})),e}})]}}),null),o(i,t(u,{get when(){return g()},get children(){return t(ae,{get each(){return g()},children:(e,x)=>(()=>{var _=ye(),q=_.firstChild,J=q.firstChild,$=q.nextSibling,U=$.firstChild,X=U.nextSibling,Z=X.firstChild,C=$.nextSibling;return o(J,()=>e?.product?.label),o(_,t(V,{}),$),o(Z,()=>(e?.qty*1).toFixed(2)),o(_,t(V,{}),C),o(_,t(u,{get when(){return e?.salePrice},get children(){var T=me(),ee=T.firstChild,re=ee.nextSibling,O=re.firstChild;return O.firstChild,o(O,()=>(e?.salePrice*1).toFixed(2),null),T}}),C),C.$$click=Y,o(C,t(xe,{name:"outline_delete",size:24})),_})()})}}),null),oe(e=>(e=se()?"96vw":"920px")!=null?l.style.setProperty("width",e):l.style.removeProperty("width")),l})()}const Se=async d=>{let r={ssg_inventory_key:A(),createDate:new Date().getTime(),businessId:R?.profile?.businessYId};r={...d,...r};let a={params:{businessId:R?.profile?.businessYId},form:r},P=ce(139003);a={...a,...P};const y=await be(a);return y?.data?.error?{}:y?.data};le(["click"]);export{Oe as default};