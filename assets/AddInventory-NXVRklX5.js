const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BJ_qoSGf.js","assets/index-BNKB1BTV.js","assets/index-W9fcnr7G.css","assets/index-Ci0zXM0r.js","assets/InputHr-BqSkaIZB.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-XTap7x75.js","assets/Util-D2YTzGDx.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-C5dKfYXJ.js","assets/debounces-CACMcMjk.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-Ayti0ImX.js"])))=>i.map(i=>d[i]);
import{l as g,_ as h,c as q,a as S,m as ie,i as o,d as l,f as se,U as de,e as ae,t as x,v as ne,j as ce,S as m,F as be,k as B}from"./index-BNKB1BTV.js";import{i as pe}from"./globalSignal-BHQpq0hk.js";import{a as Y,g as H,b as ue,f as ve}from"./Util-D2YTzGDx.js";import{CloseModal as ge}from"./DialogHRM-DOgx-q1k.js";import{u as he}from"./debounces-CACMcMjk.js";import{LookupProducts as _e}from"./DashProducts-hPqY1KVw.js";import O from"./FlexSpace-riHcCaph.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";var V=x("<div style=padding:4px>"),fe=x('<div style="margin:15px 0"class=" spaceAround centerBx">'),me=x('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Entradas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),xe=x('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="icon_status centerBx tr_bar_10">');const ye=g(()=>h(()=>import("./SVG-BJ_qoSGf.js"),__vite__mapDeps([0,1,2,3]))),v=g(()=>h(()=>import("./InputHr-BqSkaIZB.js"),__vite__mapDeps([4,1,2,5]))),L=g(()=>h(()=>import("./ButonHrm-XTap7x75.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),Ce=g(()=>h(()=>import("./DropDwnFetchSearch-C5dKfYXJ.js"),__vite__mapDeps([9,1,2,10,0,3,11]))),W=g(()=>h(()=>import("./DropDwnSearch-Ayti0ImX.js"),__vite__mapDeps([12,1,2,10,0,3,11])));function Re(c){const[d,b]=q(),[r,a]=q({invoice:"",seller:"",description:""}),[Se,N]=S(""),[y,w]=S(null),[u,A]=S([]),j=he(N,400),n=(t,i)=>{a({[t]:i}),j(H())},z=async t=>{let i={type:"ENTRY",invoice:r?.invoice,store:r?.store,seller:r?.seller,description:r?.description,products:u()};await ke(i),ge(c?.modalId)};ie(()=>{let t=[];Y("M023009")?.provincias.map(i=>{let s=i.label;ne?.roles?.[s]?.isActive&&t.push(i)}),b("prov",t)});const Q=async t=>{let i=await _e(t),s=[];return Object.keys(i).map(p=>{s.push({id:p,label:i[p]?.name,code:i[p]?.code})}),s},G=async t=>{let i={product:y(),qty:r?.qty,price:r?.price};A([...u(),i]),a({qty:0}),a({price:0}),w(null)},U=t=>{A(i=>i.filter((s,p)=>s.product.id!==t))};return(()=>{var t=me(),i=t.firstChild,s=i.firstChild,p=s.firstChild,J=p.nextSibling,C=s.nextSibling,P=C.firstChild,D=P.nextSibling,E=D.nextSibling,I=E.nextSibling,F=I.nextSibling,K=F.nextSibling,X=K.nextSibling;return t.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o(J,l(m,{get when(){return ce(()=>!!(r?.invoice&&r?.store&&r?.seller))()&&u()?.length>0},get children(){return l(L,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:z})}})),C.style.setProperty("padding","16px"),o(P,l(v,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>n("invoice",e)})),o(D,l(W,{list:[{id:"ENTRY",label:"ENTRADAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>n("type",e.id),width:"200px"})),o(E,l(W,{get list(){return $e()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return r?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>n("store",e.id),width:"260px"})),o(I,l(v,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.seller},placeholder:"Vendedor",colors:"#2b2b2b",handleClick:e=>n("seller",e)})),o(F,l(v,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>n("description",e)})),o(X,l(Ce,{callback:Q,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return y()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:w,width:"360px"})),o(C,l(m,{get when(){return y()?.id},get children(){return[(()=>{var e=V();return o(e,l(v,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:_=>n("qty",_)})),e})(),(()=>{var e=V();return o(e,l(v,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.price},placeholder:"Precio",colors:"#2b2b2b",handleClick:_=>n("price",_)})),e})(),l(m,{get when(){return r?.price&&r?.qty},get children(){var e=fe();return o(e,l(L,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:G})),e}})]}}),null),o(i,l(m,{get when(){return u()},get children(){return l(be,{get each(){return u()},children:(e,_)=>(()=>{var f=xe(),T=f.firstChild,Z=T.firstChild,k=T.nextSibling,ee=k.firstChild,re=ee.nextSibling,te=re.firstChild,$=k.nextSibling,oe=$.firstChild,le=oe.nextSibling,M=le.firstChild;M.firstChild;var R=$.nextSibling;return o(Z,()=>e?.product?.label),o(f,l(O,{}),k),o(te,()=>(e?.qty*1).toFixed(2)),o(f,l(O,{}),$),o(M,()=>(e?.price*1).toFixed(2),null),R.$$click=()=>U(e?.product?.id),o(R,l(ye,{name:"outline_delete",size:24})),f})()})}}),null),se(e=>(e=pe()?"96vw":"920px")!=null?t.style.setProperty("width",e):t.style.removeProperty("width")),t})()}const ke=async c=>{let d={ssg_inventory_key:H(),createDate:new Date().getTime(),businessId:B?.profile?.businessYId,type:"ENTRY"};d={...c,...d};let b={params:{businessId:B?.profile?.businessYId},form:d},r=ue(139003);b={...b,...r};const a=await ve(b);return console.log(b),console.log(a),a?.data?.error?{}:a?.data},$e=()=>{let c=[];return Y("M023009")?.stores.map(d=>{de()[d.id]&&c.push(d)}),c};ae(["click"]);export{Re as default,$e as validStores};