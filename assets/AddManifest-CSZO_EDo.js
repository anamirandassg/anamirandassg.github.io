const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-ZQnsUnAA.js","assets/index-iC7Xub7Q.js","assets/index-C8O1wSFC.css","assets/InputHr-DfRgT_jg.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-Dlhp27V8.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-CitXXbHS.js","assets/debounces-CuOg7ZI_.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as d,_ as c,c as f,a as D,q as E,i as a,d as l,f as M,t as b,ab as I,K as F,S as h,h as R,j as y,o as T}from"./index-iC7Xub7Q.js";import"./fontkit.es-BaBbEI0u.js";import"./qrcode-C5vWJp7P.js";import"./Toast-DoxUcL-J.js";import{CloseModal as O}from"./DialogHRM-_jPyme3S.js";import{u as W}from"./debounces-CuOg7ZI_.js";var q=b('<div style="margin:15px 0"class=" spaceAround centerBx">'),H=b("<div style=padding:4px>"),L=b('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Manifiesto</h5></div></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');d(()=>c(()=>import("./SVG-ZQnsUnAA.js"),__vite__mapDeps([0,1,2])));const V=d(()=>c(()=>import("./InputHr-DfRgT_jg.js"),__vite__mapDeps([3,1,2,4]))),B=d(()=>c(()=>import("./ButonHrm-Dlhp27V8.js"),__vite__mapDeps([5,1,2,0,6]))),g=d(()=>c(()=>import("./DropDwnSearch-CitXXbHS.js"),__vite__mapDeps([7,1,2,8,0,9])));function U(i){const[s,u]=f(),[r,x]=f({name:""}),[z,C]=D(""),w=W(C,400),p=(e,o)=>{x({[e]:o}),w(y())},P=async e=>{let o={province:r?.province?.label,city:r?.city?.label,name:r?.name};await j(o),O(i?.modalId)};return E(()=>{let e=[];I.map(o=>{let n=o.label;F?.roles?.[n]?.isActive&&e.push(o)}),u("prov",e)}),(()=>{var e=L(),o=e.firstChild,n=o.firstChild,S=n.firstChild,m=S.nextSibling,$=m.firstChild,v=n.nextSibling,_=v.firstChild,k=_.nextSibling;return e.style.setProperty("height","clamp(40vh, 60vh, 80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),a($,()=>i?.item?.bagnumber),a(m,l(h,{get when(){return r?.province?.id&&r?.name},get children(){var t=q();return a(t,l(B,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:P})),t}}),null),v.style.setProperty("padding","16px"),a(_,l(V,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:t=>p("name",t)})),a(k,l(g,{get list(){return s?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>p("province",t),width:"260px"})),a(v,l(h,{get when(){return r?.province?.id},get children(){var t=H();return a(t,l(g,{get list(){return r?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.city?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:A=>p("city",A),width:"260px"})),t}}),null),M(t=>(t=R()?"96vw":"420px")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()}const j=async i=>{let s={ssg_manifest_key:y(),createDate:new Date().getTime(),status:"ST009"};s={...i,...s};const r=await T({form:s,query:"addManifestYabaExpress"});return r?.data?.error?{}:r?.data};export{U as default};
