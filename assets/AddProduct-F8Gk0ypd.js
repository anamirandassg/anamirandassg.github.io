const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-JQaKQi55.js","assets/index-7ZM3jTwu.js","assets/index-BRlA1Q7g.css","assets/Util-D6Peje1o.js","assets/InputHr-Bxcva9Ox.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-CFrXzA_f.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-vk6aKseW.js","assets/debounces-kmK87E1s.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as c,_ as b,c as x,a as F,d as N,i as d,e as l,S as O,f as R,j as W,t as P,g as y}from"./index-7ZM3jTwu.js";import{a as S,e as C,g as T,f as V,L as q,J as B}from"./Util-D6Peje1o.js";import{CloseModal as H}from"./DialogHRM-Pn91f8dh.js";import{u as Q}from"./debounces-kmK87E1s.js";var Y=P('<div style="margin:15px 0"class=" spaceAround centerBx">'),j=P('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Producto</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>');c(()=>b(()=>import("./SVG-JQaKQi55.js"),__vite__mapDeps([0,1,2,3])));const p=c(()=>b(()=>import("./InputHr-Bxcva9Ox.js"),__vite__mapDeps([4,1,2,5]))),z=c(()=>b(()=>import("./ButonHrm-CFrXzA_f.js"),__vite__mapDeps([6,1,2,0,3,7]))),k=c(()=>b(()=>import("./DropDwnSearch-vk6aKseW.js"),__vite__mapDeps([8,1,2,9,0,3,10])));function Z(i){x();const[t,s]=x({name:"",description:"",code:"",brand:"",model:"",codeN:""}),[u,n]=F(""),w=Q(n,400),o=(r,a)=>{s({[r]:a}),w(S())},A=async r=>{await J(t),H(i?.modalId),i?.refetch?.()};N(()=>{let r=q(),a="9209"+B(8);o("code",r),o("codeN",a)});const $=()=>C("M023009")?.unitsList,I=()=>C("M023009")?.categoriesList;return(()=>{var r=j(),a=r.firstChild,v=a.firstChild,D=v.firstChild,E=D.nextSibling,g=v.nextSibling,f=g.firstChild,m=f.firstChild,L=m.nextSibling,_=f.nextSibling,h=_.nextSibling,M=h.nextSibling;return r.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),d(E,l(O,{get when(){return t?.unit&&t?.category&&t?.name},get children(){var e=Y();return d(e,l(z,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:A})),e}})),g.style.setProperty("padding","16px"),d(m,l(k,{get list(){return $()},lbl_empty:"Unidad",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return t?.unit||""},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>o("unit",e.id),width:"260px"})),d(L,l(k,{get list(){return I()},lbl_empty:"Categoria",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return t?.category||""},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>o("category",e.id),width:"260px"})),d(_,l(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.name||""},placeholder:"Nombre",colors:"#2b2b2b",handleClick:e=>o("name",e)})),d(h,l(p,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.brand||""},placeholder:"Marca",colors:"#2b2b2b",handleClick:e=>o("brand",e)})),d(M,l(p,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.model||""},placeholder:"Modelo",colors:"#2b2b2b",handleClick:e=>o("model",e)})),R(e=>(e=W()?"96vw":"720px")!=null?r.style.setProperty("width",e):r.style.removeProperty("width")),r})()}const J=async i=>{let t={...i};t.ssg_product_key=S(),t.businessId=y?.profile?.businessYId;let s={params:{businessId:y?.profile?.businessYId},form:t},u=T(129003);s={...s,...u};const n=await V(s);return n?.data?.error?{}:n?.data};export{Z as default};
