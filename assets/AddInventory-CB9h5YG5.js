const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BGCtSUd4.js","assets/index-DmDoySfr.js","assets/index-BRlA1Q7g.css","assets/Util-BOZFT72w.js","assets/FloatInputText-Z3PMl8PQ.js","assets/FloatInputText-BnENulVO.css","assets/ButonHrm-CBj9aoO5.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-DD4LE261.js","assets/debounces-ExZ6bp-z.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-BhppWdgu.js","assets/PickDate-D1Bbzbnc.js","assets/DialogHRM-SXj3tVOC.js","assets/DialogHRM-V9_lZntj.css"])))=>i.map(i=>d[i]);
import{l as p,_ as u,h as ie,c as M,a as w,d as se,A as ae,i as o,e as l,q as de,S as x,F as ne,f as ce,j as be,R as pe,t as y,g as O}from"./index-DmDoySfr.js";import{e as Y,a as H,g as ue,f as ve}from"./Util-BOZFT72w.js";import{CloseModal as _e}from"./DialogHRM-SXj3tVOC.js";import{u as he}from"./debounces-ExZ6bp-z.js";import{LookupProducts as fe}from"./DashProducts-DHuQqpiv.js";import V from"./FlexSpace-ByaPbwm3.js";import"./App.module-CbHnVtRQ.js";var B=y("<div style=padding:4px>"),ge=y('<div style="margin:15px 0"class=" spaceAround centerBx">'),me=y('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Entradas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),xe=y('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="icon_status centerBx tr_bar_10">');const ye=p(()=>u(()=>import("./SVG-BGCtSUd4.js"),__vite__mapDeps([0,1,2,3]))),h=p(()=>u(()=>import("./FloatInputText-Z3PMl8PQ.js"),__vite__mapDeps([4,1,2,5]))),L=p(()=>u(()=>import("./ButonHrm-CBj9aoO5.js"),__vite__mapDeps([6,1,2,0,3,7]))),Ce=p(()=>u(()=>import("./DropDwnFetchSearch-DD4LE261.js"),__vite__mapDeps([8,1,2,9,0,3,10]))),W=p(()=>u(()=>import("./DropDwnSearch-BhppWdgu.js"),__vite__mapDeps([11,1,2,9,0,3,10]))),$e=p(()=>u(()=>import("./PickDate-D1Bbzbnc.js"),__vite__mapDeps([12,1,2,13,14,3])));function Te(n){const[d,v]=M(),[r,c]=M({invoice:"",seller:"",description:""}),[we,N]=w(""),[C,A]=w(null),[_,D]=w([]),j=he(N,400),a=(t,i)=>{c({[t]:i}),j(H())},z=async t=>{let i={type:"ENTRY",invoice:r?.invoice,store:r?.store,seller:r?.seller,description:r?.description,createDate:r?.createDate||new Date().getTime(),products:_()};await ke(i),_e(n?.modalId)};se(()=>{let t=[];Y("M023009")?.provincias.map(i=>{let s=i.label;ae?.roles?.[s]?.isActive&&t.push(i)}),v("prov",t)});const Q=async t=>{let i=await fe(t),s=[];return Object.keys(i).map(b=>{s.push({id:b,label:i[b]?.name,code:i[b]?.code})}),s},G=async t=>{let i={product:C(),qty:r?.qty,price:r?.price};D([..._(),i]),c({qty:0}),c({price:0}),A(null)},J=t=>{D(i=>i.filter((s,b)=>s.product.id!==t))};return(()=>{var t=me(),i=t.firstChild,s=i.firstChild,b=s.firstChild,K=b.nextSibling,f=s.nextSibling,$=f.firstChild,P=$.nextSibling,E=P.nextSibling,I=E.nextSibling,F=I.nextSibling,U=F.nextSibling,X=U.nextSibling;return t.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o(K,l(x,{get when(){return de(()=>!!(r?.invoice&&r?.store&&r?.seller))()&&_()?.length>0},get children(){return l(L,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:z})}})),f.style.setProperty("padding","16px"),o(f,l($e,{get init(){return r?.createDate},label:"Fecha",updDate:e=>a("createDate",e)}),$),o($,l(h,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#1a73e8",validations:{required:!0},index:1,get value(){return r?.invoice||""},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>a("invoice",e)})),o(P,l(W,{list:[{id:"ENTRY",label:"ENTRADAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>a("type",e.id),width:"200px"})),o(E,l(W,{get list(){return Se()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return r?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>a("store",e.id),width:"260px"})),o(I,l(h,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#1a73e8",index:2,get value(){return r?.seller||""},placeholder:"Vendedor",colors:"#2b2b2b",handleClick:e=>a("seller",e)})),o(F,l(h,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#1a73e8",index:3,get value(){return r?.description||""},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>a("description",e)})),o(X,l(Ce,{callback:Q,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return C()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:A,width:"560px"})),o(f,l(x,{get when(){return C()?.id},get children(){return[(()=>{var e=B();return o(e,l(h,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty||""},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:g=>a("qty",g)})),e})(),(()=>{var e=B();return o(e,l(h,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.price||""},placeholder:"Precio",colors:"#2b2b2b",handleClick:g=>a("price",g)})),e})(),l(x,{get when(){return r?.price&&r?.qty},get children(){var e=ge();return o(e,l(L,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:G})),e}})]}}),null),o(i,l(x,{get when(){return _()},get children(){return l(ne,{get each(){return _()},children:(e,g)=>(()=>{var m=xe(),R=m.firstChild,Z=R.firstChild,k=R.nextSibling,ee=k.firstChild,re=ee.nextSibling,te=re.firstChild,S=k.nextSibling,oe=S.firstChild,le=oe.nextSibling,T=le.firstChild;T.firstChild;var q=S.nextSibling;return o(Z,()=>e?.product?.label),o(m,l(V,{}),k),o(te,()=>(e?.qty*1).toFixed(2)),o(m,l(V,{}),S),o(T,()=>(e?.price*1).toFixed(2),null),q.$$click=()=>J(e?.product?.id),o(q,l(ye,{name:"outline_delete",size:24})),m})()})}}),null),ce(e=>(e=be()?"96vw":"920px")!=null?t.style.setProperty("width",e):t.style.removeProperty("width")),t})()}const ke=async n=>{let d={ssg_inventory_key:H(),businessId:O?.profile?.businessYId,type:"ENTRY"};d={...n,...d};let v={params:{businessId:O?.profile?.businessYId},form:d},r=ue(139003);v={...v,...r};const c=await ve(v);return c?.data?.error?{}:c?.data},Se=()=>{let n=[];return Y("M023009")?.stores.map(d=>{pe()[d.id]&&n.push(d)}),n};ie(["click"]);export{Te as default,Se as validStores};
