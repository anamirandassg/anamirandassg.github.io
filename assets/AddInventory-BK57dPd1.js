const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-D1tkPU1F.js","assets/index-UAuAMgZc.js","assets/index-NFdrrltd.css","assets/index-Ci0zXM0r.js","assets/InputHr-D-P_u3J-.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-D5A3Hy-4.js","assets/Util-DErZaF9J.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-BZCoaxPi.js","assets/debounces-Ci2FfRSm.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-OCQnfdhi.js"])))=>i.map(i=>d[i]);
import{l as f,_,c as B,a as S,m as oe,i as l,d as i,f as le,U as ie,e as se,t as x,v as de,j as ae,S as m,F as ne,k as O}from"./index-UAuAMgZc.js";import{i as ce}from"./globalSignal-BHISgZ7b.js";import{a as L,g as W,b as be,f as pe}from"./Util-DErZaF9J.js";import{CloseModal as ue}from"./DialogHRM-BO4khs0-.js";import{u as ve}from"./debounces-Ci2FfRSm.js";import{LookupProducts as fe}from"./DashProducts-D41TtJDR.js";import R from"./FlexSpace-DxKagGrA.js";import"./index-Ci0zXM0r.js";import"./App.module-CbHnVtRQ.js";var T=x("<div style=padding:4px>"),_e=x('<div style="margin:15px 0"class=" spaceAround centerBx">'),he=x('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Entrada</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div class=hseparator></div><div style=padding:4px>'),ge=x('<div class="bottombx centerBx unit"><div class=tr_bar_50><h5></h5></div><div class="bottombx centerBx unit tr_bar_20"><h5>Cantidad:</h5><div class=bag_number><h5></h5></div></div><div class="bottombx centerBx unit tr_bar_20"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="icon_status centerBx tr_bar_10">');const me=f(()=>_(()=>import("./SVG-D1tkPU1F.js"),__vite__mapDeps([0,1,2,3]))),v=f(()=>_(()=>import("./InputHr-D-P_u3J-.js"),__vite__mapDeps([4,1,2,5]))),V=f(()=>_(()=>import("./ButonHrm-D5A3Hy-4.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),xe=f(()=>_(()=>import("./DropDwnFetchSearch-BZCoaxPi.js"),__vite__mapDeps([9,1,2,10,0,3,11]))),ye=f(()=>_(()=>import("./DropDwnSearch-OCQnfdhi.js"),__vite__mapDeps([12,1,2,10,0,3,11])));function qe(n){const[d,c]=B(),[t,a]=B({invoice:"",seller:"",description:""}),[$e,H]=S(""),[y,w]=S(null),[u,A]=S([]),j=ve(H,400),b=(r,o)=>{a({[r]:o}),j(W())},z=async r=>{let o={invoice:t?.invoice,store:t?.store,seller:t?.seller,description:t?.description,products:u()};await Ce(o),ue(n?.modalId)};oe(()=>{let r=[];L("M023009")?.provincias.map(o=>{let s=o.label;de?.roles?.[s]?.isActive&&r.push(o)}),c("prov",r)});const Q=async r=>{let o=await fe(r),s=[];return Object.keys(o).map(p=>{s.push({id:p,label:o[p]?.name,code:o[p]?.code})}),s},Y=async r=>{let o={product:y(),qty:t?.qty,price:t?.price};A([...u(),o]),a({qty:0}),a({price:0}),w(null)},G=r=>{A(o=>o.filter((s,p)=>s.product.id!==r))};return(()=>{var r=he(),o=r.firstChild,s=o.firstChild,p=s.firstChild,U=p.nextSibling,C=s.nextSibling,P=C.firstChild,D=P.nextSibling,I=D.nextSibling,E=I.nextSibling,J=E.nextSibling,K=J.nextSibling;return r.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),l(U,i(m,{get when(){return ae(()=>!!(t?.invoice&&t?.store&&t?.seller))()&&u()?.length>0},get children(){return i(V,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:z})}})),C.style.setProperty("padding","16px"),l(P,i(v,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.invoice},placeholder:"Factura",colors:"#2b2b2b",handleClick:e=>b("invoice",e)})),l(D,i(ye,{get list(){return ke()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return t?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>b("store",e.id),width:"360px"})),l(I,i(v,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.seller},placeholder:"Vendedor",colors:"#2b2b2b",handleClick:e=>b("seller",e)})),l(E,i(v,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>b("description",e)})),l(K,i(xe,{callback:Q,lbl_empty:"Productos",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return y()},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:w,width:"360px"})),l(C,i(m,{get when(){return y()?.id},get children(){return[(()=>{var e=T();return l(e,i(v,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return t?.qty},placeholder:"Cantidad",colors:"#2b2b2b",handleClick:h=>b("qty",h)})),e})(),(()=>{var e=T();return l(e,i(v,{width:"130px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return t?.price},placeholder:"Precio",colors:"#2b2b2b",handleClick:h=>b("price",h)})),e})(),i(m,{get when(){return t?.price&&t?.qty},get children(){var e=_e();return l(e,i(V,{color:"#041e49ff",icon:"plus",label:"Agregar",handleClick:Y})),e}})]}}),null),l(o,i(m,{get when(){return u()},get children(){return i(ne,{get each(){return u()},children:(e,h)=>(()=>{var g=ge(),F=g.firstChild,N=F.firstChild,k=F.nextSibling,X=k.firstChild,Z=X.nextSibling,ee=Z.firstChild,$=k.nextSibling,re=$.firstChild,te=re.nextSibling,M=te.firstChild;M.firstChild;var q=$.nextSibling;return l(N,()=>e?.product?.label),l(g,i(R,{}),k),l(ee,()=>(e?.qty*1).toFixed(2)),l(g,i(R,{}),$),l(M,()=>(e?.price*1).toFixed(2),null),q.$$click=()=>G(e?.product?.id),l(q,i(me,{name:"outline_delete",size:24})),g})()})}}),null),le(e=>(e=ce()?"96vw":"920px")!=null?r.style.setProperty("width",e):r.style.removeProperty("width")),r})()}const Ce=async n=>{let d={ssg_inventory_key:W(),createDate:new Date().getTime(),businessId:O?.profile?.businessYId};d={...n,...d};let c={params:{businessId:O?.profile?.businessYId},form:d},t=be(139003);c={...c,...t};const a=await pe(c);return console.log(c),console.log(a),a?.data?.error?{}:a?.data},ke=()=>{let n=[];return L("M023009")?.stores.map(d=>{ie()[d.id]&&n.push(d)}),n};se(["click"]);export{qe as default,ke as validStores};
