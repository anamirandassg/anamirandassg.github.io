const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-5Oo_iRr4.js","assets/index-dnI_iE0A.js","assets/index-DeAzZMb6.css","assets/index-Ci0zXM0r.js","assets/InputHr-CvJUcARd.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-BvHjjoFJ.js","assets/Util-D886uaAp.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-D6SUOe4W.js","assets/debounces-Bh3CFYre.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-B-x7NcIs.js"])))=>i.map(i=>d[i]);
import{l as g,_,c as q,a as S,m as ie,i as o,d as l,f as se,U as de,e as ae,t as x,v as ne,j as ce,S as m,F as be,k as O}from"./index-dnI_iE0A.js";import{i as pe}from"./globalSignal-B9EglViJ.js";import{a as W,g as Y,b as ue}from"./Util-D886uaAp.js";import{CloseModal as ve}from"./DialogHRM-CldwCDHO.js";import{u as ge}from"./debounces-Bh3CFYre.js";import{LookupProducts as _e}from"./DashProducts-DYI_4WBQ.js";import B from"./FlexSpace-DoVqLsOR.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";var V=x("<div style=padding:4px>"),he=x('<div style="margin:15px 0"class=" spaceAround centerBx">'),fe=x('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Entradas</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),me=x('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="icon_status centerBx tr_bar_10">');const xe=g(()=>_(()=>import("./SVG-5Oo_iRr4.js"),__vite__mapDeps([0,1,2,3]))),v=g(()=>_(()=>import("./InputHr-CvJUcARd.js"),__vite__mapDeps([4,1,2,5]))),L=g(()=>_(()=>import("./ButonHrm-BvHjjoFJ.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),ye=g(()=>_(()=>import("./DropDwnFetchSearch-D6SUOe4W.js"),__vite__mapDeps([9,1,2,10,0,3,11]))),N=g(()=>_(()=>import("./DropDwnSearch-B-x7NcIs.js"),__vite__mapDeps([12,1,2,10,0,3,11])));function Me(c){const[d,p]=q(),[r,a]=q({invoice:"",seller:"",description:""}),[$e,H]=S(""),[y,w]=S(null),[u,A]=S([]),j=ge(H,400),n=(t,i)=>{a({[t]:i}),j(Y())},z=async t=>{let i={type:"ENTRY",invoice:r?.invoice,store:r?.store,seller:r?.seller,description:r?.description,products:u()};await Ce(i),ve(c?.modalId)};ie(()=>{let t=[];W("M023009")?.provincias.map(i=>{let s=i.label;ne?.roles?.[s]?.isActive&&t.push(i)}),p("prov",t)});const Q=async t=>{let i=await _e(t),s=[];return Object.keys(i).map(b=>{s.push({id:b,label:i[b]?.name,code:i[b]?.code})}),s},G=async t=>{let i={product:y(),qty:r?.qty,price:r?.price};A([...u(),i]),a({qty:0}),a({price:0}),w(null)},J=t=>{A(i=>i.filter((s,b)=>s.product.id!==t))};return(()=>{var t=fe(),i=t.firstChild,s=i.firstChild,b=s.firstChild,U=b.nextSibling,C=s.nextSibling,P=C.firstChild,D=P.nextSibling,E=D.nextSibling,I=E.nextSibling,F=I.nextSibling,K=F.nextSibling,X=K.nextSibling;return t.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o(U,l(m,{get when(){return ce(()=>!!(r?.invoice&&r?.store&&r?.seller))()&&u()?.length>0},get children(){return l(L,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:z})}})),C.style.setProperty("padding","16px"),o(P,l(v,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>n("invoice",e)})),o(D,l(N,{list:[{id:"ENTRY",label:"ENTRADAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>n("type",e.id),width:"200px"})),o(E,l(N,{get list(){return ke()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return r?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>n("store",e.id),width:"260px"})),o(I,l(v,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.seller},placeholder:"Vendedor",colors:"#2b2b2b",handleClick:e=>n("seller",e)})),o(F,l(v,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>n("description",e)})),o(X,l(ye,{callback:Q,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return y()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:w,width:"360px"})),o(C,l(m,{get when(){return y()?.id},get children(){return[(()=>{var e=V();return o(e,l(v,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:h=>n("qty",h)})),e})(),(()=>{var e=V();return o(e,l(v,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return r?.price},placeholder:"Precio",colors:"#2b2b2b",handleClick:h=>n("price",h)})),e})(),l(m,{get when(){return r?.price&&r?.qty},get children(){var e=he();return o(e,l(L,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:G})),e}})]}}),null),o(i,l(m,{get when(){return u()},get children(){return l(be,{get each(){return u()},children:(e,h)=>(()=>{var f=me(),T=f.firstChild,Z=T.firstChild,k=T.nextSibling,ee=k.firstChild,re=ee.nextSibling,te=re.firstChild,$=k.nextSibling,oe=$.firstChild,le=oe.nextSibling,M=le.firstChild;M.firstChild;var R=$.nextSibling;return o(Z,()=>e?.product?.label),o(f,l(B,{}),k),o(te,()=>(e?.qty*1).toFixed(2)),o(f,l(B,{}),$),o(M,()=>(e?.price*1).toFixed(2),null),R.$$click=()=>J(e?.product?.id),o(R,l(xe,{name:"outline_delete",size:24})),f})()})}}),null),se(e=>(e=pe()?"96vw":"920px")!=null?t.style.setProperty("width",e):t.style.removeProperty("width")),t})()}const Ce=async c=>{let d={ssg_inventory_key:Y(),createDate:new Date().getTime(),businessId:O?.profile?.businessYId,type:"ENTRY"};d={...c,...d};let p={params:{businessId:O?.profile?.businessYId},form:d},r=ue(139003);p={...p,...r};const a={};return console.log(JSON.stringify(p,null,4)),console.log(a),a?.data?.error?{}:a?.data},ke=()=>{let c=[];return W("M023009")?.stores.map(d=>{de()[d.id]&&c.push(d)}),c};ae(["click"]);export{Me as default,ke as validStores};
