const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CYTTjjhw.js","assets/index-Davks-F7.js","assets/index-DGHHyjai.css","assets/index-Ci0zXM0r.js","assets/InputHr-BD31HpNN.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-Dn34qKas.js","assets/Util-CHzs30Zz.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-DKmH3C8m.js","assets/debounces-khgXmkFO.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as p,_ as v,c as g,a as D,m as E,i as a,d as l,f as M,t as m,r as I,S as h,k as F}from"./index-Davks-F7.js";import{i as R}from"./globalSignal-hV27f7Qu.js";import{a as T,g as x,b as O,f as W}from"./Util-CHzs30Zz.js";import{CloseModal as H}from"./DialogHRM-D44MwW5Y.js";import{u as L}from"./debounces-khgXmkFO.js";import"./index-Ci0zXM0r.js";var V=m('<div style="margin:15px 0"class=" spaceAround centerBx">'),q=m("<div style=padding:4px>"),B=m('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Manifiesto</h5></div></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');p(()=>v(()=>import("./SVG-CYTTjjhw.js"),__vite__mapDeps([0,1,2,3])));const Q=p(()=>v(()=>import("./InputHr-BD31HpNN.js"),__vite__mapDeps([4,1,2,5]))),z=p(()=>v(()=>import("./ButonHrm-Dn34qKas.js"),__vite__mapDeps([6,1,2,0,3,7,8]))),y=p(()=>v(()=>import("./DropDwnSearch-DKmH3C8m.js"),__vite__mapDeps([9,1,2,10,0,3,11])));function Z(i){const[s,n]=g(),[r,d]=g({name:""}),[G,C]=D(""),w=L(C,400),u=(e,o)=>{d({[e]:o}),w(x())},k=async e=>{let o={province:r?.province?.label,city:r?.city?.label,name:r?.name};await j(o),H(i?.modalId),i?.refetch?.()};return E(()=>{let e=[];T("M023009")?.provincias.map(o=>{let c=o.label;I?.roles?.[c]?.isActive&&e.push(o)}),n("prov",e)}),(()=>{var e=B(),o=e.firstChild,c=o.firstChild,S=c.firstChild,f=S.nextSibling,P=f.firstChild,b=c.nextSibling,_=b.firstChild,A=_.nextSibling;return e.style.setProperty("height","clamp(40vh, 60vh, 80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),a(P,()=>i?.item?.bagnumber),a(f,l(h,{get when(){return r?.province?.id&&r?.name},get children(){var t=V();return a(t,l(z,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:k})),t}}),null),b.style.setProperty("padding","16px"),a(_,l(Q,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:t=>u("name",t)})),a(A,l(y,{get list(){return s?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>u("province",t),width:"260px"})),a(b,l(h,{get when(){return r?.province?.id},get children(){var t=q();return a(t,l(y,{get list(){return r?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.city?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:$=>u("city",$),width:"260px"})),t}}),null),M(t=>(t=R()?"96vw":"420px")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()}const j=async i=>{let s={ssg_manifest_key:x(),createDate:new Date().getTime(),status:"ST009",workgroup:F?.profile?.workgroup?.id};s={...i,...s};let n={form:s},r=O(709001);n={...n,...r};const d=await W(n);return d?.data?.error?{}:d?.data};export{Z as default};
