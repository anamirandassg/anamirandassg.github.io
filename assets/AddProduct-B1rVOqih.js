const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CnRMbWAr.js","assets/index-C41AzTw0.js","assets/index-BmzAZVve.css","assets/InputHr-uqvF2xc2.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-BwyEjoxs.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-49dvRWqj.js","assets/debounces-BHS0nOMl.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as c,_ as b,c as C,a as O,s as R,i as t,d,S as W,o as k,g as S,e as T,t as P,j as $,n as w,p as V,q,ay as B}from"./index-C41AzTw0.js";import{CloseModal as H}from"./DialogHRM-DHLCj8Ah.js";import{u as Q}from"./debounces-BHS0nOMl.js";var Y=P('<div style="margin:15px 0"class=" spaceAround centerBx">'),j=P('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Producto</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px></div></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>');c(()=>b(()=>import("./SVG-CnRMbWAr.js"),__vite__mapDeps([0,1,2])));const s=c(()=>b(()=>import("./InputHr-uqvF2xc2.js"),__vite__mapDeps([3,1,2,4]))),z=c(()=>b(()=>import("./ButonHrm-BwyEjoxs.js"),__vite__mapDeps([5,1,2,0,6]))),A=c(()=>b(()=>import("./DropDwnSearch-49dvRWqj.js"),__vite__mapDeps([7,1,2,8,0,9])));function N(i){C();const[r,a]=C({name:"",description:"",code:"",brand:"",model:""}),[u,n]=O(""),I=Q(n,400),l=(o,p)=>{a({[o]:p}),I($())},D=async o=>{await U(r),H(i?.modalId),i?.refetch?.()};return R(()=>{let o=B();l("code",o)}),(()=>{var o=j(),p=o.firstChild,v=p.firstChild,E=v.firstChild,M=E.nextSibling,f=v.nextSibling,g=f.firstChild,_=g.firstChild,F=_.nextSibling,m=g.nextSibling,h=m.nextSibling,x=h.nextSibling,y=x.nextSibling,L=y.nextSibling;return o.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),o.style.setProperty("overflow","auto"),o.style.setProperty("background","#ffffff"),o.style.setProperty("border-radius","13"),o.style.setProperty("padding","10px 19px"),t(M,d(W,{get when(){return r?.unit&&r?.category&&r?.name&&r?.model},get children(){var e=Y();return t(e,d(z,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:D})),e}})),f.style.setProperty("padding","16px"),t(_,d(A,{get list(){return k("M023009")?.unitsList},lbl_empty:"Unidad",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.unit},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("unit",e.id),width:"260px"})),t(F,d(A,{get list(){return k("M023009")?.categoriesList},lbl_empty:"Categoria",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.category},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>l("category",e.id),width:"260px"})),t(m,d(s,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:e=>l("name",e)})),t(h,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.code},placeholder:"Code",colors:"#2b2b2b",handleClick:e=>l("code",e)})),t(x,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.brand},placeholder:"Marca",colors:"#2b2b2b",handleClick:e=>l("brand",e)})),t(y,d(s,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.model},placeholder:"Modelo",colors:"#2b2b2b",handleClick:e=>l("model",e)})),t(L,d(s,{get width(){return S()?"90vw":"620px"},backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.description},placeholder:"description...",colors:"#2b2b2b",handleClick:e=>l("description",e)})),T(e=>(e=S()?"96vw":"720px")!=null?o.style.setProperty("width",e):o.style.removeProperty("width")),o})()}const U=async i=>{let r={...i};r.ssg_product_key=$(),r.businessId=w?.profile?.businessYId;let a={params:{businessId:w?.profile?.businessYId},form:r},u=V(129003);a={...a,...u};const n=await q(a);return n?.data?.error?{}:n?.data};export{N as default};
