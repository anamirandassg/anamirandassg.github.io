const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-7dDJ9Chz.js","assets/index-CaW80A_h.js","assets/index-DEEWbFNK.css","assets/Util-CKCUAuLU.js","assets/InputHr-BBaKiPsK.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-DsEjvatv.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-Br1HU_TZ.js","assets/debounces-DUoJYmi8.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-Cqo-oxcj.js","assets/PickDate-gPJuf1B8.js","assets/DialogHRM-CvtZeFHI.js","assets/DialogHRM-V9_lZntj.css"])))=>i.map(i=>d[i]);
import{l as p,_ as u,c as q,a as w,b as ie,i as o,d as l,m as se,S as y,F as de,e as ae,f as ne,a5 as ce,h as be,t as x,y as pe,n as O}from"./index-CaW80A_h.js";import{d as Y,b as H,c as ue,f as ve}from"./Util-CKCUAuLU.js";import{CloseModal as _e}from"./DialogHRM-CvtZeFHI.js";import{u as he}from"./debounces-DUoJYmi8.js";import{LookupProducts as ge}from"./DashProducts-jcaqHz_W.js";import V from"./FlexSpace-D6w2aKoc.js";import"./App.module-CbHnVtRQ.js";var B=x("<div style=padding:4px>"),fe=x('<div style="margin:15px 0"class=" spaceAround centerBx">'),me=x('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Entradas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),ye=x('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="icon_status centerBx tr_bar_10">');const xe=p(()=>u(()=>import("./SVG-7dDJ9Chz.js"),__vite__mapDeps([0,1,2,3]))),h=p(()=>u(()=>import("./InputHr-BBaKiPsK.js"),__vite__mapDeps([4,1,2,5]))),L=p(()=>u(()=>import("./ButonHrm-DsEjvatv.js"),__vite__mapDeps([6,1,2,0,3,7]))),Ce=p(()=>u(()=>import("./DropDwnFetchSearch-Br1HU_TZ.js"),__vite__mapDeps([8,1,2,9,0,3,10]))),W=p(()=>u(()=>import("./DropDwnSearch-Cqo-oxcj.js"),__vite__mapDeps([11,1,2,9,0,3,10]))),ke=p(()=>u(()=>import("./PickDate-gPJuf1B8.js"),__vite__mapDeps([12,1,2,13,14,3])));function Te(n){const[a,v]=q(),[r,c]=q({invoice:"",seller:"",description:""}),[we,N]=w(""),[C,A]=w(null),[_,P]=w([]),z=he(N,400),d=(t,i)=>{c({[t]:i}),z(H())},Q=async t=>{let i={type:"ENTRY",invoice:r?.invoice,store:r?.store,seller:r?.seller,description:r?.description,date:r?.date,products:_()};await $e(i),_e(n?.modalId)};ie(()=>{let t=[];Y("M023009")?.provincias.map(i=>{let s=i.label;pe?.roles?.[s]?.isActive&&t.push(i)}),v("prov",t)});const j=async t=>{let i=await ge(t),s=[];return Object.keys(i).map(b=>{s.push({id:b,label:i[b]?.name,code:i[b]?.code})}),s},G=async t=>{let i={product:C(),qty:r?.qty,price:r?.price};P([..._(),i]),c({qty:0}),c({price:0}),A(null)},J=t=>{P(i=>i.filter((s,b)=>s.product.id!==t))};return(()=>{var t=me(),i=t.firstChild,s=i.firstChild,b=s.firstChild,K=b.nextSibling,g=s.nextSibling,k=g.firstChild,E=k.nextSibling,D=E.nextSibling,I=D.nextSibling,F=I.nextSibling,U=F.nextSibling,X=U.nextSibling;return t.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o(K,l(y,{get when(){return se(()=>!!(r?.invoice&&r?.store&&r?.seller))()&&_()?.length>0},get children(){return l(L,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:Q})}})),g.style.setProperty("padding","16px"),o(g,l(ke,{get init(){return r?.date},label:"Fecha",updDate:e=>d("date",e)}),k),o(k,l(h,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>d("invoice",e)})),o(E,l(W,{list:[{id:"ENTRY",label:"ENTRADAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>d("type",e.id),width:"200px"})),o(D,l(W,{get list(){return Se()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return r?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>d("store",e.id),width:"260px"})),o(I,l(h,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.seller},placeholder:"Vendedor",colors:"#2b2b2b",handleClick:e=>d("seller",e)})),o(F,l(h,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>d("description",e)})),o(X,l(Ce,{callback:j,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return C()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:A,width:"560px"})),o(g,l(y,{get when(){return C()?.id},get children(){return[(()=>{var e=B();return o(e,l(h,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:f=>d("qty",f)})),e})(),(()=>{var e=B();return o(e,l(h,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.price},placeholder:"Precio",colors:"#2b2b2b",handleClick:f=>d("price",f)})),e})(),l(y,{get when(){return r?.price&&r?.qty},get children(){var e=fe();return o(e,l(L,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:G})),e}})]}}),null),o(i,l(y,{get when(){return _()},get children(){return l(de,{get each(){return _()},children:(e,f)=>(()=>{var m=ye(),R=m.firstChild,Z=R.firstChild,$=R.nextSibling,ee=$.firstChild,re=ee.nextSibling,te=re.firstChild,S=$.nextSibling,oe=S.firstChild,le=oe.nextSibling,T=le.firstChild;T.firstChild;var M=S.nextSibling;return o(Z,()=>e?.product?.label),o(m,l(V,{}),$),o(te,()=>(e?.qty*1).toFixed(2)),o(m,l(V,{}),S),o(T,()=>(e?.price*1).toFixed(2),null),M.$$click=()=>J(e?.product?.id),o(M,l(xe,{name:"outline_delete",size:24})),m})()})}}),null),ae(e=>(e=ne()?"96vw":"920px")!=null?t.style.setProperty("width",e):t.style.removeProperty("width")),t})()}const $e=async n=>{let a={ssg_inventory_key:H(),businessId:O?.profile?.businessYId,type:"ENTRY"};a={...n,...a};let v={params:{businessId:O?.profile?.businessYId},form:a},r=ue(139003);v={...v,...r};const c=await ve(v);return c?.data?.error?{}:c?.data},Se=()=>{let n=[];return Y("M023009")?.stores.map(a=>{ce()[a.id]&&n.push(a)}),n};be(["click"]);export{Te as default,Se as validStores};
