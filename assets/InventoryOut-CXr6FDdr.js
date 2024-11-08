const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BG3n_bzG.js","assets/index-rYb7uL3-.js","assets/index-NFdrrltd.css","assets/index-Ci0zXM0r.js","assets/InputHr-DjpmCi5U.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-Bi0S8p4s.js","assets/Util-DErZaF9J.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-D3RJ9X2c.js","assets/debounces-D86tEGjW.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-Du5VMHd1.js"])))=>i.map(i=>d[i]);
import{l as h,_ as m,c as O,a as w,m as ee,i as o,d as t,f as re,e as te,t as g,j as oe,S as p,F as le,k as L}from"./index-rYb7uL3-.js";import{i as ie}from"./globalSignal-BFrObJU0.js";import{g as P,O as ae,b as se,f as ne}from"./Util-DErZaF9J.js";import{CloseModal as de}from"./DialogHRM-BU1Zi4n8.js";import{u as ce}from"./debounces-D86tEGjW.js";import{LookupProducts as be}from"./DashProducts-Db7bZIf9.js";import R from"./FlexSpace-r3Vz7tHV.js";import{LookupInventory as pe}from"./DashInventory-NGtBeYCC.js";import{OpenToast as ue}from"./Toast-B5XMlhFC.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";var V=g("<div style=padding:4px>"),ve=g('<div style="margin:15px 0"class=" spaceAround centerBx">'),fe=g('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Salidas o Ventas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),_e=g('<div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$'),he=g('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="icon_status centerBx tr_bar_10">');const me=h(()=>m(()=>import("./SVG-BG3n_bzG.js"),__vite__mapDeps([0,1,2,3]))),S=h(()=>m(()=>import("./InputHr-DjpmCi5U.js"),__vite__mapDeps([4,1,2,5]))),B=h(()=>m(()=>import("./ButonHrm-Bi0S8p4s.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),ge=h(()=>m(()=>import("./DropDwnFetchSearch-D3RJ9X2c.js"),__vite__mapDeps([9,1,2,10,0,3,11]))),ye=h(()=>m(()=>import("./DropDwnSearch-Du5VMHd1.js"),__vite__mapDeps([12,1,2,10,0,3,11])));function qe(d){O();const[r,a]=O({invoice:"",description:""}),[A,y]=w(""),[u,E]=w(null),[v,M]=w([]),N=ce(y,400),f=(l,i)=>{a({[l]:i}),N(P())},j=async l=>{let i={invoice:r?.invoice,description:r?.description,products:v()};await xe(i),de(d?.modalId)};ee(()=>{d?.bagnumber&&a({invoice:d?.bagnumber}),d?.hbl&&a({description:d?.hbl})});const W=async l=>{let i=await be(l),n=[];return Object.keys(i).map(s=>{n.push({id:s,label:i[s]?.name,code:i[s]?.code})}),n},z=async l=>{let i=await pe(u()?.id),n=0,s=0;ae(i)?.map(c=>{i[c]?.products?.map(b=>{u()?.id===b?.product?.id&&(n+=b?.price*1*b?.qty*1,s+=b?.qty*1)})});const $=n/s;if(s-r?.qty>=0){let c={product:u(),qty:r?.qty*-1,price:$};M([...v(),c]),a({qty:0}),a({price:0}),E(null)}else ue({text:"Sin Existencia",timeout:3500,theme:"red",id:P()})},H=async l=>{};return(()=>{var l=fe(),i=l.firstChild,n=i.firstChild,s=n.firstChild,$=s.nextSibling,c=n.nextSibling,b=c.firstChild,I=b.nextSibling,D=I.nextSibling,Q=D.nextSibling,Y=Q.nextSibling;return l.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),o($,t(p,{get when(){return oe(()=>!!(r?.invoice&&r?.type))()&&v()?.length>0},get children(){return t(B,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:j})}})),c.style.setProperty("padding","16px"),o(b,t(ye,{list:[{id:"SALES",label:"VENTAS"},{id:"SEND",label:"ENVIO"},{id:"TRANSFER",label:"TRANSFERENCIAS"}],lbl_empty:"Tipo de Salida",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>f("type",e.id),width:"260px"})),o(I,t(S,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>f("invoice",e)})),o(D,t(S,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>f("description",e)})),o(Y,t(ge,{callback:W,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return u()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:E,width:"360px"})),o(c,t(p,{get when(){return u()?.id},get children(){return[(()=>{var e=V();return o(e,t(S,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:x=>f("qty",x)})),e})(),t(p,{get when(){return r?.type==="SALES"},get children(){var e=V();return o(e,t(S,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.salePrice},placeholder:"Precio de Venta",colors:"#2b2b2b",handleClick:x=>f("salePrice",x)})),e}}),t(p,{get when(){return r?.type==="SALES"&&r?.price&&r?.qty||r?.type!=="SALES"&&r?.qty},get children(){var e=ve();return o(e,t(B,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:z})),e}})]}}),null),o(i,t(p,{get when(){return v()},get children(){return t(le,{get each(){return v()},children:(e,x)=>(()=>{var _=he(),F=_.firstChild,G=F.firstChild,k=F.nextSibling,K=k.firstChild,J=K.nextSibling,U=J.firstChild,C=k.nextSibling;return o(G,()=>e?.product?.label),o(_,t(R,{}),k),o(U,()=>(e?.qty*1).toFixed(2)),o(_,t(R,{}),C),o(_,t(p,{get when(){return e?.salePrice},get children(){var q=_e(),X=q.firstChild,Z=X.nextSibling,T=Z.firstChild;return T.firstChild,o(T,()=>(e?.salePrice*1).toFixed(2),null),q}}),C),C.$$click=H,o(C,t(me,{name:"outline_delete",size:24})),_})()})}}),null),re(e=>(e=ie()?"96vw":"920px")!=null?l.style.setProperty("width",e):l.style.removeProperty("width")),l})()}const xe=async d=>{let r={ssg_inventory_key:P(),createDate:new Date().getTime(),businessId:L?.profile?.businessYId};r={...d,...r};let a={params:{businessId:L?.profile?.businessYId},form:r},A=se(139003);a={...a,...A};const y=await ne(a);return y?.data?.error?{}:y?.data};te(["click"]);export{qe as default};