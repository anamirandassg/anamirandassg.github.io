const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DmV_0B-g.js","assets/index-Bnv1Z0K_.js","assets/index-mNJWtuMT.css","assets/Util-7ERmh4Cp.js","assets/InputHr-CKPx3Hi-.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-CVx_0cAy.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-BXsR6kr8.js","assets/debounces-Ck3v6PGk.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as c,_ as b,c as y,a as W,e as T,i as o,f as d,S as V,j as k,h as q,t as A,g as S}from"./index-Bnv1Z0K_.js";import{a as $,e as w,g as B,f as H,P as Q}from"./Util-7ERmh4Cp.js";import{CloseModal as Y}from"./DialogHRM-CVl-kr9_.js";import{u as j}from"./debounces-Ck3v6PGk.js";var z=A('<div style="margin:15px 0"class=" spaceAround centerBx">'),U=A('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Producto</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>');c(()=>b(()=>import("./SVG-DmV_0B-g.js"),__vite__mapDeps([0,1,2,3])));const s=c(()=>b(()=>import("./InputHr-CKPx3Hi-.js"),__vite__mapDeps([4,1,2,5]))),G=c(()=>b(()=>import("./ButonHrm-CVx_0cAy.js"),__vite__mapDeps([6,1,2,0,3,7]))),P=c(()=>b(()=>import("./DropDwnSearch-BXsR6kr8.js"),__vite__mapDeps([8,1,2,9,0,3,10])));function ee(i){y();const[r,a]=y({name:"",description:"",code:"",brand:"",model:""}),[u,n]=W(""),I=j(n,400),l=(t,p)=>{a({[t]:p}),I($())},D=async t=>{await J(r),Y(i?.modalId),i?.refetch?.()};T(()=>{let t=Q();l("code",t)});const E=()=>w("M023009")?.unitsList,M=()=>w("M023009")?.categoriesList;return(()=>{var t=U(),p=t.firstChild,v=p.firstChild,F=v.firstChild,L=F.nextSibling,f=v.nextSibling,g=f.firstChild,m=g.firstChild,O=m.nextSibling,_=g.nextSibling,h=_.nextSibling,x=h.nextSibling,C=x.nextSibling,R=C.nextSibling;return t.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o(L,d(V,{get when(){return r?.unit&&r?.category&&r?.name},get children(){var e=z();return o(e,d(G,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:D})),e}})),f.style.setProperty("padding","16px"),o(m,d(P,{get list(){return E()},lbl_empty:"Unidad",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.unit},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("unit",e.id),width:"260px"})),o(O,d(P,{get list(){return M()},lbl_empty:"Categoria",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.category},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("category",e.id),width:"260px"})),o(_,d(s,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:e=>l("name",e)})),o(h,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.code},placeholder:"Code",colors:"#2b2b2b",handleClick:e=>l("code",e)})),o(x,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.brand},placeholder:"Marca",colors:"#2b2b2b",handleClick:e=>l("brand",e)})),o(C,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.model},placeholder:"Modelo",colors:"#2b2b2b",handleClick:e=>l("model",e)})),o(R,d(s,{get width(){return k()?"90vw":"620px"},backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"description...",colors:"#2b2b2b",handleClick:e=>l("description",e)})),q(e=>(e=k()?"96vw":"720px")!=null?t.style.setProperty("width",e):t.style.removeProperty("width")),t})()}const J=async i=>{let r={...i};r.ssg_product_key=$(),r.businessId=S?.profile?.businessYId;let a={params:{businessId:S?.profile?.businessYId},form:r},u=B(129003);a={...a,...u};const n=await H(a);return n?.data?.error?{}:n?.data};export{ee as default};
