const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DEbu7_30.js","assets/index-DEC_qqAp.js","assets/index-DYvAu9Q1.css","assets/index-Ci0zXM0r.js","assets/InputHr-DnoOvHnE.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-mwJl-YOT.js","assets/Util-D886uaAp.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-BBcZMysH.js","assets/debounces-Ck-jflkm.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-Djrhmw-J.js","assets/PickDate-lnnkNtca.js","assets/DialogHRM-Cc3LhbYl.js","assets/DialogHRM-V9_lZntj.css"])))=>i.map(i=>d[i]);
import{l as p,_ as u,c as q,a as w,m as ie,i as o,d as l,f as se,U as de,e as ae,t as y,v as ne,j as ce,S as x,F as be,k as O}from"./index-DEC_qqAp.js";import{i as pe}from"./globalSignal-C3-NWSPW.js";import{a as Y,g as H,b as ue,f as ve}from"./Util-D886uaAp.js";import{CloseModal as _e}from"./DialogHRM-Cc3LhbYl.js";import{u as ge}from"./debounces-Ck-jflkm.js";import{LookupProducts as he}from"./DashProducts-DoTIfYdp.js";import V from"./FlexSpace-CmSbV51-.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";var B=y("<div style=padding:4px>"),fe=y('<div style="margin:15px 0"class=" spaceAround centerBx">'),me=y('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Entradas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),xe=y('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="icon_status centerBx tr_bar_10">');const ye=p(()=>u(()=>import("./SVG-DEbu7_30.js"),__vite__mapDeps([0,1,2,3]))),g=p(()=>u(()=>import("./InputHr-DnoOvHnE.js"),__vite__mapDeps([4,1,2,5]))),L=p(()=>u(()=>import("./ButonHrm-mwJl-YOT.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),Ce=p(()=>u(()=>import("./DropDwnFetchSearch-BBcZMysH.js"),__vite__mapDeps([9,1,2,10,0,3,11]))),W=p(()=>u(()=>import("./DropDwnSearch-Djrhmw-J.js"),__vite__mapDeps([12,1,2,10,0,3,11]))),ke=p(()=>u(()=>import("./PickDate-lnnkNtca.js"),__vite__mapDeps([13,1,2,14,15,7,3])));function qe(n){const[a,v]=q(),[r,c]=q({invoice:"",seller:"",description:""}),[we,N]=w(""),[C,A]=w(null),[_,P]=w([]),j=ge(N,400),d=(t,i)=>{c({[t]:i}),j(H())},z=async t=>{let i={type:"ENTRY",invoice:r?.invoice,store:r?.store,seller:r?.seller,description:r?.description,date:r?.date,products:_()};await $e(i),_e(n?.modalId)};ie(()=>{let t=[];Y("M023009")?.provincias.map(i=>{let s=i.label;ne?.roles?.[s]?.isActive&&t.push(i)}),v("prov",t)});const Q=async t=>{let i=await he(t),s=[];return Object.keys(i).map(b=>{s.push({id:b,label:i[b]?.name,code:i[b]?.code})}),s},G=async t=>{let i={product:C(),qty:r?.qty,price:r?.price};P([..._(),i]),c({qty:0}),c({price:0}),A(null)},U=t=>{P(i=>i.filter((s,b)=>s.product.id!==t))};return(()=>{var t=me(),i=t.firstChild,s=i.firstChild,b=s.firstChild,J=b.nextSibling,h=s.nextSibling,k=h.firstChild,E=k.nextSibling,D=E.nextSibling,I=D.nextSibling,F=I.nextSibling,K=F.nextSibling,X=K.nextSibling;return t.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o(J,l(x,{get when(){return ce(()=>!!(r?.invoice&&r?.store&&r?.seller))()&&_()?.length>0},get children(){return l(L,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:z})}})),h.style.setProperty("padding","16px"),o(h,l(ke,{get init(){return r?.date},label:"Fecha",updDate:e=>d("date",e)}),k),o(k,l(g,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>d("invoice",e)})),o(E,l(W,{list:[{id:"ENTRY",label:"ENTRADAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>d("type",e.id),width:"200px"})),o(D,l(W,{get list(){return Se()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return r?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>d("store",e.id),width:"260px"})),o(I,l(g,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.seller},placeholder:"Vendedor",colors:"#2b2b2b",handleClick:e=>d("seller",e)})),o(F,l(g,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>d("description",e)})),o(X,l(Ce,{callback:Q,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return C()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:A,width:"360px"})),o(h,l(x,{get when(){return C()?.id},get children(){return[(()=>{var e=B();return o(e,l(g,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:f=>d("qty",f)})),e})(),(()=>{var e=B();return o(e,l(g,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.price},placeholder:"Precio",colors:"#2b2b2b",handleClick:f=>d("price",f)})),e})(),l(x,{get when(){return r?.price&&r?.qty},get children(){var e=fe();return o(e,l(L,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:G})),e}})]}}),null),o(i,l(x,{get when(){return _()},get children(){return l(be,{get each(){return _()},children:(e,f)=>(()=>{var m=xe(),R=m.firstChild,Z=R.firstChild,$=R.nextSibling,ee=$.firstChild,re=ee.nextSibling,te=re.firstChild,S=$.nextSibling,oe=S.firstChild,le=oe.nextSibling,T=le.firstChild;T.firstChild;var M=S.nextSibling;return o(Z,()=>e?.product?.label),o(m,l(V,{}),$),o(te,()=>(e?.qty*1).toFixed(2)),o(m,l(V,{}),S),o(T,()=>(e?.price*1).toFixed(2),null),M.$$click=()=>U(e?.product?.id),o(M,l(ye,{name:"outline_delete",size:24})),m})()})}}),null),se(e=>(e=pe()?"96vw":"920px")!=null?t.style.setProperty("width",e):t.style.removeProperty("width")),t})()}const $e=async n=>{let a={ssg_inventory_key:H(),businessId:O?.profile?.businessYId,type:"ENTRY"};a={...n,...a};let v={params:{businessId:O?.profile?.businessYId},form:a},r=ue(139003);v={...v,...r};const c=await ve(v);return c?.data?.error?{}:c?.data},Se=()=>{let n=[];return Y("M023009")?.stores.map(a=>{de()[a.id]&&n.push(a)}),n};ae(["click"]);export{qe as default,Se as validStores};
