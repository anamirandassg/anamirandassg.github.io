const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CUHt6r20.js","assets/index-DJb4pLvl.js","assets/index-BmzAZVve.css","assets/index-Ci0zXM0r.js","assets/InputHr-FKh1Xl-y.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-Bed2PUBD.js","assets/Util-C77m685E.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-BwOEnNrK.js","assets/debounces-B3S0x5Vu.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as c,_ as b,c as y,a as O,n as R,i as t,d,S as W,g as k,e as T,t as P,m as S}from"./index-DJb4pLvl.js";import{a as w,g as $,b as V,f as B,B as q}from"./Util-C77m685E.js";import{CloseModal as H}from"./DialogHRM-DKKGfX1K.js";import{u as Q}from"./debounces-B3S0x5Vu.js";import"./index-Ci0zXM0r.js";var Y=P('<div style="margin:15px 0"class=" spaceAround centerBx">'),z=P('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Producto</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>');c(()=>b(()=>import("./SVG-CUHt6r20.js"),__vite__mapDeps([0,1,2,3])));const s=c(()=>b(()=>import("./InputHr-FKh1Xl-y.js"),__vite__mapDeps([4,1,2,5]))),U=c(()=>b(()=>import("./ButonHrm-Bed2PUBD.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),A=c(()=>b(()=>import("./DropDwnSearch-BwOEnNrK.js"),__vite__mapDeps([9,1,2,10,0,3,11])));function Z(i){y();const[r,a]=y({name:"",description:"",code:"",brand:"",model:""}),[u,n]=O(""),I=Q(n,400),l=(o,p)=>{a({[o]:p}),I($())},D=async o=>{await j(r),H(i?.modalId),i?.refetch?.()};return R(()=>{let o=q();l("code",o)}),(()=>{var o=z(),p=o.firstChild,v=p.firstChild,E=v.firstChild,M=E.nextSibling,f=v.nextSibling,g=f.firstChild,m=g.firstChild,F=m.nextSibling,_=g.nextSibling,h=_.nextSibling,x=h.nextSibling,C=x.nextSibling,L=C.nextSibling;return o.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),o.style.setProperty("overflow","auto"),o.style.setProperty("background","#ffffff"),o.style.setProperty("border-radius","13"),o.style.setProperty("padding","10px 19px"),t(M,d(W,{get when(){return r?.unit&&r?.category&&r?.name&&r?.model},get children(){var e=Y();return t(e,d(U,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:D})),e}})),f.style.setProperty("padding","16px"),t(m,d(A,{get list(){return w("M023009")?.unitsList},lbl_empty:"Unidad",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.unit},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("unit",e.id),width:"260px"})),t(F,d(A,{get list(){return w("M023009")?.categoriesList},lbl_empty:"Categoria",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.category},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("category",e.id),width:"260px"})),t(_,d(s,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:e=>l("name",e)})),t(h,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.code},placeholder:"Code",colors:"#2b2b2b",handleClick:e=>l("code",e)})),t(x,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.brand},placeholder:"Marca",colors:"#2b2b2b",handleClick:e=>l("brand",e)})),t(C,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.model},placeholder:"Modelo",colors:"#2b2b2b",handleClick:e=>l("model",e)})),t(L,d(s,{get width(){return k()?"90vw":"620px"},backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"description...",colors:"#2b2b2b",handleClick:e=>l("description",e)})),T(e=>(e=k()?"96vw":"720px")!=null?o.style.setProperty("width",e):o.style.removeProperty("width")),o})()}const j=async i=>{let r={...i};r.ssg_product_key=$(),r.businessId=S?.profile?.businessYId;let a={params:{businessId:S?.profile?.businessYId},form:r},u=V(129003);a={...a,...u};const n=await B(a);return n?.data?.error?{}:n?.data};export{Z as default};
