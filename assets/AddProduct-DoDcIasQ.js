const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-B-5yn0I7.js","assets/index-DUg-L_Uo.js","assets/index-lCkr9jrN.css","assets/InputHr-BTTM87GM.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-dIGrLDkM.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-CJ--Q6uy.js","assets/debounces-CBZKqaaQ.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as c,_ as b,c as y,a as W,s as T,i as o,d,S as V,g as k,e as q,t as P,j as $,o as S,n as w,p as B,q as H,aG as Q}from"./index-DUg-L_Uo.js";import{CloseModal as Y}from"./DialogHRM-DRleNzWL.js";import{u as j}from"./debounces-CBZKqaaQ.js";var z=P('<div style="margin:15px 0"class=" spaceAround centerBx">'),G=P('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Producto</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>');c(()=>b(()=>import("./SVG-B-5yn0I7.js"),__vite__mapDeps([0,1,2])));const s=c(()=>b(()=>import("./InputHr-BTTM87GM.js"),__vite__mapDeps([3,1,2,4]))),U=c(()=>b(()=>import("./ButonHrm-dIGrLDkM.js"),__vite__mapDeps([5,1,2,0,6]))),A=c(()=>b(()=>import("./DropDwnSearch-CJ--Q6uy.js"),__vite__mapDeps([7,1,2,8,0,9])));function Z(i){y();const[r,a]=y({name:"",description:"",code:"",brand:"",model:""}),[u,n]=W(""),I=j(n,400),l=(t,p)=>{a({[t]:p}),I($())},D=async t=>{await J(r),Y(i?.modalId),i?.refetch?.()};T(()=>{let t=Q();l("code",t)});const E=()=>S("M023009")?.unitsList,M=()=>S("M023009")?.categoriesList;return(()=>{var t=G(),p=t.firstChild,v=p.firstChild,F=v.firstChild,L=F.nextSibling,g=v.nextSibling,f=g.firstChild,_=f.firstChild,O=_.nextSibling,m=f.nextSibling,h=m.nextSibling,x=h.nextSibling,C=x.nextSibling,R=C.nextSibling;return t.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o(L,d(V,{get when(){return r?.unit&&r?.category&&r?.name},get children(){var e=z();return o(e,d(U,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:D})),e}})),g.style.setProperty("padding","16px"),o(_,d(A,{get list(){return E()},lbl_empty:"Unidad",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.unit},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("unit",e.id),width:"260px"})),o(O,d(A,{get list(){return M()},lbl_empty:"Categoria",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.category},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("category",e.id),width:"260px"})),o(m,d(s,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:e=>l("name",e)})),o(h,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.code},placeholder:"Code",colors:"#2b2b2b",handleClick:e=>l("code",e)})),o(x,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.brand},placeholder:"Marca",colors:"#2b2b2b",handleClick:e=>l("brand",e)})),o(C,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.model},placeholder:"Modelo",colors:"#2b2b2b",handleClick:e=>l("model",e)})),o(R,d(s,{get width(){return k()?"90vw":"620px"},backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"description...",colors:"#2b2b2b",handleClick:e=>l("description",e)})),q(e=>(e=k()?"96vw":"720px")!=null?t.style.setProperty("width",e):t.style.removeProperty("width")),t})()}const J=async i=>{let r={...i};r.ssg_product_key=$(),r.businessId=w?.profile?.businessYId;let a={params:{businessId:w?.profile?.businessYId},form:r},u=B(129003);a={...a,...u};const n=await H(a);return n?.data?.error?{}:n?.data};export{Z as default};
