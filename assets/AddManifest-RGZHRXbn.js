const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-oly4o2jj.js","assets/index-Dc7YZiIm.js","assets/index-BRlA1Q7g.css","assets/Util-BYKUtUWx.js","assets/InputHr-M3T31TG4.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-DWS0phzH.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-BscVucwa.js","assets/debounces-CVw3Smgq.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as c,_ as p,c as _,a as M,d as E,i as s,e as i,S as g,f as I,j as L,t as b,A as F,g as R,J as T}from"./index-Dc7YZiIm.js";import{a as y,e as x,u as H,G as O,H as W,I as V}from"./Util-BYKUtUWx.js";import{CloseModal as B}from"./DialogHRM-BYRPM6Pg.js";import{u as j}from"./debounces-CVw3Smgq.js";var z=b('<div style="margin:15px 0"class=" spaceAround centerBx">'),G=b("<div style=padding:4px>"),J=b('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Manifiesto</h5></div></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');c(()=>p(()=>import("./SVG-oly4o2jj.js"),__vite__mapDeps([0,1,2,3])));const K=c(()=>p(()=>import("./InputHr-M3T31TG4.js"),__vite__mapDeps([4,1,2,5]))),q=c(()=>p(()=>import("./ButonHrm-DWS0phzH.js"),__vite__mapDeps([6,1,2,0,3,7]))),h=c(()=>p(()=>import("./DropDwnSearch-BscVucwa.js"),__vite__mapDeps([8,1,2,9,0,3,10])));function ee(l){const[a,n]=_(),[r,C]=_({name:""}),[Q,w]=M(""),k=j(w,400),v=(e,o)=>{C({[e]:o}),k(y())},P=async e=>{let o={province:r?.province?.label,city:r?.city?.label,name:r?.name};await N(o),B(l?.modalId),l?.refetch?.()};return E(()=>{let e=[];x("M023009")?.provincias.map(o=>{let d=o.label;F?.roles?.[d]?.isActive&&e.push(o)}),n("prov",e)}),(()=>{var e=J(),o=e.firstChild,d=o.firstChild,S=d.firstChild,m=S.nextSibling,A=m.firstChild,u=d.nextSibling,f=u.firstChild,D=f.nextSibling;return e.style.setProperty("height","clamp(40vh, 60vh, 80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),s(A,()=>l?.item?.bagnumber),s(m,i(g,{get when(){return r?.name},get children(){var t=z();return s(t,i(q,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:P})),t}}),null),u.style.setProperty("padding","16px"),s(f,i(K,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:t=>v("name",t)})),s(D,i(h,{get list(){return a?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>v("province",t),width:"260px"})),s(u,i(g,{get when(){return r?.province?.id},get children(){var t=G();return s(t,i(h,{get list(){return r?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.city?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:$=>v("city",$),width:"260px"})),t}}),null),I(t=>(t=L()?"96vw":"420px")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()}const N=async l=>{let a={ssg_manifest_key:y(),createDate:new Date().getTime(),status:"ST009",workgroup:R?.profile?.workgroup?.id};if(a={...l,...a},T()){let n={...x("manifestList")};return n[a?.ssg_manifest_key]=a,H("manifestList",n),await O(V,W,n),a}};export{ee as default};
