const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-Kbn11ive.js","assets/index-BGxHyqTm.js","assets/index-BUHqikRO.css","assets/index-Ci0zXM0r.js","assets/InputHr-wI-VyzkK.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-DAX-cYVY.js","assets/Util-DErZaF9J.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-CJ2sLRPe.js","assets/debounces-IlVTt_TR.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as p,_ as v,c as g,a as D,m as E,i as a,d as l,f as M,t as m,v as I,S as h,k as F}from"./index-BGxHyqTm.js";import{i as R}from"./globalSignal-CnHTewJd.js";import{a as T,g as x,b as O,f as W}from"./Util-DErZaF9J.js";import{CloseModal as H}from"./DialogHRM-Dmu10hHA.js";import{u as L}from"./debounces-IlVTt_TR.js";import"./index-Ci0zXM0r.js";var V=m('<div style="margin:15px 0"class=" spaceAround centerBx">'),q=m("<div style=padding:4px>"),B=m('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Manifiesto</h5></div></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');p(()=>v(()=>import("./SVG-Kbn11ive.js"),__vite__mapDeps([0,1,2,3])));const Q=p(()=>v(()=>import("./InputHr-wI-VyzkK.js"),__vite__mapDeps([4,1,2,5]))),z=p(()=>v(()=>import("./ButonHrm-DAX-cYVY.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),y=p(()=>v(()=>import("./DropDwnSearch-CJ2sLRPe.js"),__vite__mapDeps([9,1,2,10,0,3,11])));function Z(i){const[s,n]=g(),[r,d]=g({name:""}),[G,C]=D(""),w=L(C,400),u=(e,o)=>{d({[e]:o}),w(x())},k=async e=>{let o={province:r?.province?.label,city:r?.city?.label,name:r?.name};await j(o),H(i?.modalId),i?.refetch?.()};return E(()=>{let e=[];T("M023009")?.provincias.map(o=>{let c=o.label;I?.roles?.[c]?.isActive&&e.push(o)}),n("prov",e)}),(()=>{var e=B(),o=e.firstChild,c=o.firstChild,S=c.firstChild,f=S.nextSibling,P=f.firstChild,b=c.nextSibling,_=b.firstChild,A=_.nextSibling;return e.style.setProperty("height","clamp(40vh, 60vh, 80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),a(P,()=>i?.item?.bagnumber),a(f,l(h,{get when(){return r?.province?.id&&r?.name},get children(){var t=V();return a(t,l(z,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:k})),t}}),null),b.style.setProperty("padding","16px"),a(_,l(Q,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:t=>u("name",t)})),a(A,l(y,{get list(){return s?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>u("province",t),width:"260px"})),a(b,l(h,{get when(){return r?.province?.id},get children(){var t=q();return a(t,l(y,{get list(){return r?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.city?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:$=>u("city",$),width:"260px"})),t}}),null),M(t=>(t=R()?"96vw":"420px")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()}const j=async i=>{let s={ssg_manifest_key:x(),createDate:new Date().getTime(),status:"ST009",workgroup:F?.profile?.workgroup?.id};s={...i,...s};let n={form:s},r=O(709001);n={...n,...r};const d=await W(n);return d?.data?.error?{}:d?.data};export{Z as default};
