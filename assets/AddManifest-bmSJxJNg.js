const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DMQC_3si.js","assets/index-DLm-qbVb.js","assets/index-DGSEMnLR.css","assets/index-Ci0zXM0r.js","assets/InputHr-CzkegoSq.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-Xix89h7D.js","assets/Util-R0w8Fgio.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-B6X7A5rV.js","assets/debounces-_rTXI1rL.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as d,_ as c,c as _,a as D,m as E,i as a,d as i,f as M,t as m,z as I,S as g}from"./index-DLm-qbVb.js";import{i as F}from"./globalSignal-DG1rgUS8.js";import"./fontkit.es-DEjOtITv.js";import"./qrcode-C5vWJp7P.js";import{g as y,f as R}from"./Util-R0w8Fgio.js";import"./Toast-Dm0lmTlX.js";import{CloseModal as T}from"./DialogHRM-D2-DGr3N.js";import{u as O}from"./debounces-_rTXI1rL.js";import{p as W}from"./manifestList-CSHEgbpJ.js";import"./index-Ci0zXM0r.js";var H=m('<div style="margin:15px 0"class=" spaceAround centerBx">'),L=m("<div style=padding:4px>"),V=m('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Manifiesto</h5></div></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');d(()=>c(()=>import("./SVG-DMQC_3si.js"),__vite__mapDeps([0,1,2,3])));const q=d(()=>c(()=>import("./InputHr-CzkegoSq.js"),__vite__mapDeps([4,1,2,5]))),z=d(()=>c(()=>import("./ButonHrm-Xix89h7D.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),h=d(()=>c(()=>import("./DropDwnSearch-B6X7A5rV.js"),__vite__mapDeps([9,1,2,10,0,3,11])));function re(l){const[s,b]=_(),[r,x]=_({name:""}),[Y,C]=D(""),w=O(C,400),p=(e,o)=>{x({[e]:o}),w(y())},P=async e=>{let o={province:r?.province?.label,city:r?.city?.label,name:r?.name};await B(o),T(l?.modalId),l?.refetch?.()};return E(()=>{let e=[];W.map(o=>{let n=o.label;I?.roles?.[n]?.isActive&&e.push(o)}),b("prov",e)}),(()=>{var e=V(),o=e.firstChild,n=o.firstChild,S=n.firstChild,u=S.nextSibling,$=u.firstChild,v=n.nextSibling,f=v.firstChild,k=f.nextSibling;return e.style.setProperty("height","clamp(40vh, 60vh, 80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),a($,()=>l?.item?.bagnumber),a(u,i(g,{get when(){return r?.province?.id&&r?.name},get children(){var t=H();return a(t,i(z,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:P})),t}}),null),v.style.setProperty("padding","16px"),a(f,i(q,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:t=>p("name",t)})),a(k,i(h,{get list(){return s?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>p("province",t),width:"260px"})),a(v,i(g,{get when(){return r?.province?.id},get children(){var t=L();return a(t,i(h,{get list(){return r?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.city?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:A=>p("city",A),width:"260px"})),t}}),null),M(t=>(t=F()?"96vw":"420px")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()}const B=async l=>{let s={ssg_manifest_key:y(),createDate:new Date().getTime(),status:"ST009"};s={...l,...s};const r=await R({form:s,query:"addManifestYabaExpress"});return r?.data?.error?{}:r?.data};export{re as default};
