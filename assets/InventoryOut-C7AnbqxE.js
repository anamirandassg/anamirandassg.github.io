const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-a6bMPYQU.js","assets/index-CSXd_khH.js","assets/index-NFdrrltd.css","assets/index-Ci0zXM0r.js","assets/InputHr-CWD50emJ.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-XhxJLDLJ.js","assets/Util-DErZaF9J.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-CyeWL12r.js","assets/debounces-DIw3wWKm.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-BGTTOBLm.js"])))=>i.map(i=>d[i]);
import{l as h,_ as m,c as O,a as A,m as re,i,d as o,f as te,e as oe,t as y,v as le,j as ie,S as v,F as se,k as L}from"./index-CSXd_khH.js";import{i as ae}from"./globalSignal-BJem-C_J.js";import{a as ne,g as P,O as de,b as ce,f as pe}from"./Util-DErZaF9J.js";import{CloseModal as be}from"./DialogHRM-jBOih_zX.js";import{u as ue}from"./debounces-DIw3wWKm.js";import{LookupProducts as ve}from"./DashProducts-DGPmx1lM.js";import R from"./FlexSpace-_HH178f7.js";import{LookupInventory as _e}from"./DashInventory-BrZikXP-.js";import{OpenToast as fe}from"./Toast-C95evKrU.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";var V=y("<div style=padding:4px>"),ge=y('<div style="margin:15px 0"class=" spaceAround centerBx">'),he=y('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Salidas o Ventas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),me=y('<div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$'),ye=y('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="icon_status centerBx tr_bar_10">');const xe=h(()=>m(()=>import("./SVG-a6bMPYQU.js"),__vite__mapDeps([0,1,2,3]))),$=h(()=>m(()=>import("./InputHr-CWD50emJ.js"),__vite__mapDeps([4,1,2,5]))),M=h(()=>m(()=>import("./ButonHrm-XhxJLDLJ.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),Ce=h(()=>m(()=>import("./DropDwnFetchSearch-CyeWL12r.js"),__vite__mapDeps([9,1,2,10,0,3,11]))),Se=h(()=>m(()=>import("./DropDwnSearch-BGTTOBLm.js"),__vite__mapDeps([12,1,2,10,0,3,11])));function Re(k){const[x,c]=O(),[r,d]=O({invoice:"",description:""}),[ke,B]=A(""),[p,E]=A(null),[_,N]=A([]),W=ue(B,400),f=(t,l)=>{d({[t]:l}),W(P())},H=async t=>{let l={invoice:r?.invoice,description:r?.description,products:_()};await $e(l),be(k?.modalId)};re(()=>{let t=[];ne("M023009")?.provincias.map(l=>{let s=l.label;le?.roles?.[s]?.isActive&&t.push(l)}),c("prov",t)});const j=async t=>{let l=await ve(t),s=[];return Object.keys(l).map(a=>{s.push({id:a,label:l[a]?.name,code:l[a]?.code})}),s},z=async t=>{let l=await _e(p()?.id),s=de(l)?.[0],a=0,b=0;l[s]?.products?.map(n=>{p()?.id===n?.product?.id&&(a+=n?.price*1*n?.qty*1,b+=n?.qty*1)},0);const u=a/b;if(console.log(l,p()?.id,a,b,u),b-r?.qty>0){let n={product:p(),qty:r?.qty*-1,price:u};N([..._(),n]),d({qty:0}),d({price:0}),E(null)}else fe({text:"Sin Existencia",timeout:3500,theme:"red",id:P()})},Q=async t=>{};return(()=>{var t=he(),l=t.firstChild,s=l.firstChild,a=s.firstChild,b=a.nextSibling,u=s.nextSibling,n=u.firstChild,I=n.nextSibling,D=I.nextSibling,Y=D.nextSibling,G=Y.nextSibling;return t.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),i(b,o(v,{get when(){return ie(()=>!!(r?.invoice&&r?.type))()&&_()?.length>0},get children(){return o(M,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:H})}})),u.style.setProperty("padding","16px"),i(n,o(Se,{list:[{id:"SALES",label:"VENTAS"},{id:"SEND",label:"ENVIO"},{id:"TRANSFER",label:"TRANSFERENCIAS"}],lbl_empty:"Tipo de Salida",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>f("type",e.id),width:"260px"})),i(I,o($,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>f("invoice",e)})),i(D,o($,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>f("description",e)})),i(G,o(Ce,{callback:j,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return p()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:E,width:"360px"})),i(u,o(v,{get when(){return p()?.id},get children(){return[(()=>{var e=V();return i(e,o($,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:C=>f("qty",C)})),e})(),o(v,{get when(){return r?.type==="SALES"},get children(){var e=V();return i(e,o($,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.salePrice},placeholder:"Precio de Venta",colors:"#2b2b2b",handleClick:C=>f("salePrice",C)})),e}}),o(v,{get when(){return r?.type==="SALES"&&r?.price&&r?.qty||r?.type!=="SALES"&&r?.qty},get children(){var e=ge();return i(e,o(M,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:z})),e}})]}}),null),i(l,o(v,{get when(){return _()},get children(){return o(se,{get each(){return _()},children:(e,C)=>(()=>{var g=ye(),F=g.firstChild,K=F.firstChild,w=F.nextSibling,J=w.firstChild,U=J.nextSibling,X=U.firstChild,S=w.nextSibling;return i(K,()=>e?.product?.label),i(g,o(R,{}),w),i(X,()=>(e?.qty*1).toFixed(2)),i(g,o(R,{}),S),i(g,o(v,{get when(){return e?.salePrice},get children(){var q=me(),Z=q.firstChild,ee=Z.nextSibling,T=ee.firstChild;return T.firstChild,i(T,()=>(e?.salePrice*1).toFixed(2),null),q}}),S),S.$$click=Q,i(S,o(xe,{name:"outline_delete",size:24})),g})()})}}),null),te(e=>(e=ae()?"96vw":"920px")!=null?t.style.setProperty("width",e):t.style.removeProperty("width")),t})()}const $e=async k=>{let x={ssg_inventory_key:P(),createDate:new Date().getTime(),businessId:L?.profile?.businessYId};x={...k,...x};let c={params:{businessId:L?.profile?.businessYId},form:x},r=ce(139003);c={...c,...r};const d=await pe(c);return console.log(c),console.log(d),d?.data?.error?{}:d?.data};oe(["click"]);export{Re as default};
