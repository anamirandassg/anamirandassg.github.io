const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-Kbn11ive.js","assets/index-BGxHyqTm.js","assets/index-BUHqikRO.css","assets/index-Ci0zXM0r.js","assets/InputHr-wI-VyzkK.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-DAX-cYVY.js","assets/Util-DErZaF9J.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-CJ2sLRPe.js","assets/debounces-IlVTt_TR.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as c,_ as b,c as y,a as O,m as R,i as t,d,f as W,t as P,S as T,k}from"./index-BGxHyqTm.js";import{i as S}from"./globalSignal-CnHTewJd.js";import{a as w,g as $,b as V,f as q,z}from"./Util-DErZaF9J.js";import{CloseModal as B}from"./DialogHRM-Dmu10hHA.js";import{u as H}from"./debounces-IlVTt_TR.js";import"./index-Ci0zXM0r.js";var Q=P('<div style="margin:15px 0"class=" spaceAround centerBx">'),Y=P('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Producto</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>');c(()=>b(()=>import("./SVG-Kbn11ive.js"),__vite__mapDeps([0,1,2,3])));const s=c(()=>b(()=>import("./InputHr-wI-VyzkK.js"),__vite__mapDeps([4,1,2,5]))),U=c(()=>b(()=>import("./ButonHrm-DAX-cYVY.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),A=c(()=>b(()=>import("./DropDwnSearch-CJ2sLRPe.js"),__vite__mapDeps([9,1,2,10,0,3,11])));function ee(i){y();const[r,a]=y({name:"",description:"",code:"",brand:"",model:""}),[u,n]=O(""),I=H(n,400),l=(o,p)=>{a({[o]:p}),I($())},D=async o=>{await j(r),B(i?.modalId),i?.refetch?.()};return R(()=>{let o=z();l("code",o)}),(()=>{var o=Y(),p=o.firstChild,v=p.firstChild,E=v.firstChild,M=E.nextSibling,f=v.nextSibling,g=f.firstChild,m=g.firstChild,F=m.nextSibling,_=g.nextSibling,h=_.nextSibling,x=h.nextSibling,C=x.nextSibling,L=C.nextSibling;return o.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),o.style.setProperty("overflow","auto"),o.style.setProperty("background","#ffffff"),o.style.setProperty("border-radius","13"),o.style.setProperty("padding","10px 19px"),t(M,d(T,{get when(){return r?.unit&&r?.category&&r?.name&&r?.model},get children(){var e=Q();return t(e,d(U,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:D})),e}})),f.style.setProperty("padding","16px"),t(m,d(A,{get list(){return w("M023009")?.unitsList},lbl_empty:"Unidad",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.unit},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("unit",e.id),width:"260px"})),t(F,d(A,{get list(){return w("M023009")?.categoriesList},lbl_empty:"Categoria",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.category},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("category",e.id),width:"260px"})),t(_,d(s,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:e=>l("name",e)})),t(h,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.code},placeholder:"Code",colors:"#2b2b2b",handleClick:e=>l("code",e)})),t(x,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.brand},placeholder:"Marca",colors:"#2b2b2b",handleClick:e=>l("brand",e)})),t(C,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.model},placeholder:"Modelo",colors:"#2b2b2b",handleClick:e=>l("model",e)})),t(L,d(s,{get width(){return S()?"90vw":"620px"},backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"description...",colors:"#2b2b2b",handleClick:e=>l("description",e)})),W(e=>(e=S()?"96vw":"720px")!=null?o.style.setProperty("width",e):o.style.removeProperty("width")),o})()}const j=async i=>{let r={...i};r.ssg_product_key=$(),r.businessId=k?.profile?.businessYId;let a={params:{businessId:k?.profile?.businessYId},form:r},u=V(129003);a={...a,...u};const n=await q(a);return n?.data?.error?{}:n?.data};export{ee as default};