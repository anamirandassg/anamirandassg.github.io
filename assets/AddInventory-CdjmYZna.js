const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-a6bMPYQU.js","assets/index-CSXd_khH.js","assets/index-NFdrrltd.css","assets/index-Ci0zXM0r.js","assets/InputHr-CWD50emJ.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-XhxJLDLJ.js","assets/Util-DErZaF9J.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-CyeWL12r.js","assets/debounces-DIw3wWKm.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as _,_ as g,c as q,a as w,m as re,i as l,d as o,f as te,e as le,t as m,v as oe,j as ie,S as h,F as se,k as M}from"./index-CSXd_khH.js";import{i as ae}from"./globalSignal-BJem-C_J.js";import{a as de,g as T,b as ne,f as ce}from"./Util-DErZaF9J.js";import{CloseModal as be}from"./DialogHRM-jBOih_zX.js";import{u as pe}from"./debounces-DIw3wWKm.js";import{LookupProducts as ue}from"./DashProducts-DGPmx1lM.js";import B from"./FlexSpace-_HH178f7.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";var O=m("<div style=padding:4px>"),ve=m('<div style="margin:15px 0"class=" spaceAround centerBx">'),fe=m('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Entrada</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),he=m('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="icon_status centerBx tr_bar_10">');const _e=_(()=>g(()=>import("./SVG-a6bMPYQU.js"),__vite__mapDeps([0,1,2,3]))),p=_(()=>g(()=>import("./InputHr-CWD50emJ.js"),__vite__mapDeps([4,1,2,5]))),R=_(()=>g(()=>import("./ButonHrm-XhxJLDLJ.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),ge=_(()=>g(()=>import("./DropDwnFetchSearch-CyeWL12r.js"),__vite__mapDeps([9,1,2,10,0,3,11])));function De(x){const[u,d]=q(),[t,s]=q({invoice:"",seller:"",description:""}),[xe,V]=w(""),[y,S]=w(null),[n,L]=w([]),W=pe(V,400),c=(r,i)=>{s({[r]:i}),W(T())},H=async r=>{let i={invoice:t?.invoice,seller:t?.seller,description:t?.description,products:n()};await me(i),be(x?.modalId)};re(()=>{let r=[];de("M023009")?.provincias.map(i=>{let a=i.label;oe?.roles?.[a]?.isActive&&r.push(i)}),d("prov",r)});const j=async r=>{let i=await ue(r),a=[];return Object.keys(i).map(b=>{a.push({id:b,label:i[b]?.name,code:i[b]?.code})}),a},z=async r=>{let i={product:y(),qty:t?.qty,price:t?.price};L([...n(),i]),s({qty:0}),s({price:0}),S(null)},Q=async r=>{};return(()=>{var r=fe(),i=r.firstChild,a=i.firstChild,b=a.firstChild,Y=b.nextSibling,C=a.nextSibling,P=C.firstChild,A=P.nextSibling,I=A.nextSibling,G=I.nextSibling,J=G.nextSibling;return r.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),l(Y,o(h,{get when(){return ie(()=>!!(t?.invoice&&t?.seller))()&&n()?.length>0},get children(){return o(R,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:H})}})),C.style.setProperty("padding","16px"),l(P,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>c("invoice",e)})),l(A,o(p,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.seller},placeholder:"Vendedor",colors:"#2b2b2b",handleClick:e=>c("seller",e)})),l(I,o(p,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>c("description",e)})),l(J,o(ge,{callback:j,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return y()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:S,width:"360px"})),l(C,o(h,{get when(){return y()?.id},get children(){return[(()=>{var e=O();return l(e,o(p,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return t?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:v=>c("qty",v)})),e})(),(()=>{var e=O();return l(e,o(p,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return t?.price},placeholder:"Precio",colors:"#2b2b2b",handleClick:v=>c("price",v)})),e})(),o(h,{get when(){return t?.price&&t?.qty},get children(){var e=ve();return l(e,o(R,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:z})),e}})]}}),null),l(i,o(h,{get when(){return n()},get children(){return o(se,{get each(){return n()},children:(e,v)=>(()=>{var f=he(),D=f.firstChild,K=D.firstChild,$=D.nextSibling,N=$.firstChild,U=N.nextSibling,X=U.firstChild,k=$.nextSibling,Z=k.firstChild,ee=Z.nextSibling,E=ee.firstChild;E.firstChild;var F=k.nextSibling;return l(K,()=>e?.product?.label),l(f,o(B,{}),$),l(X,()=>(e?.qty*1).toFixed(2)),l(f,o(B,{}),k),l(E,()=>(e?.price*1).toFixed(2),null),F.$$click=Q,l(F,o(_e,{name:"outline_delete",size:24})),f})()})}}),null),te(e=>(e=ae()?"96vw":"920px")!=null?r.style.setProperty("width",e):r.style.removeProperty("width")),r})()}const me=async x=>{let u={ssg_inventory_key:T(),createDate:new Date().getTime(),businessId:M?.profile?.businessYId};u={...x,...u};let d={params:{businessId:M?.profile?.businessYId},form:u},t=ne(139003);d={...d,...t};const s=await ce(d);return console.log(d),console.log(s),s?.data?.error?{}:s?.data};le(["click"]);export{De as default};
