const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CpHyQroA.js","assets/index-twYRq3uj.js","assets/index-DaYrm968.css","assets/Util-B8-DWw-6.js","assets/InputHr-SJJYSczn.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-K6YXT_l_.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-DOASs3Ju.js","assets/debounces-DDQWqeGf.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as u,_ as v,c as y,a as M,e as E,i as l,f as i,S as x,h as I,j as F,t as g,z as O,g as R,A as T}from"./index-twYRq3uj.js";import{a as w,e as H,o as L,H as W,g as V,f as B}from"./Util-B8-DWw-6.js";import{CloseModal as q}from"./DialogHRM-B0ugz95c.js";import{u as z}from"./debounces-DDQWqeGf.js";import{l as Q}from"./Scanning-D9q39eCv.js";import"./App.module-CbHnVtRQ.js";import"./Toast-B1ZQpAb6.js";var j=g('<div style="margin:15px 0"class=" spaceAround centerBx">'),K=g("<div style=padding:4px>"),G=g('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Manifiesto</h5></div></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');u(()=>v(()=>import("./SVG-CpHyQroA.js"),__vite__mapDeps([0,1,2,3])));const J=u(()=>v(()=>import("./InputHr-SJJYSczn.js"),__vite__mapDeps([4,1,2,5]))),N=u(()=>v(()=>import("./ButonHrm-K6YXT_l_.js"),__vite__mapDeps([6,1,2,0,3,7]))),C=u(()=>v(()=>import("./DropDwnSearch-DOASs3Ju.js"),__vite__mapDeps([8,1,2,9,0,3,10])));function ae(n){const[o,d]=y(),[r,s]=y({name:""}),[c,b]=M(""),k=z(b,400),f=(e,a)=>{s({[e]:a}),k(w())},S=async e=>{let a={province:r?.province?.label,city:r?.city?.label,name:r?.name};await U(a),q(n?.modalId),n?.refetch?.()};return E(()=>{let e=[];H("M023009")?.provincias.map(a=>{let p=a.label;O?.roles?.[p]?.isActive&&e.push(a)}),d("prov",e)}),(()=>{var e=G(),a=e.firstChild,p=a.firstChild,A=p.firstChild,_=A.nextSibling,P=_.firstChild,m=p.nextSibling,h=m.firstChild,D=h.nextSibling;return e.style.setProperty("height","clamp(40vh, 60vh, 80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),l(P,()=>n?.item?.bagnumber),l(_,i(x,{get when(){return r?.name},get children(){var t=j();return l(t,i(N,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:S})),t}}),null),m.style.setProperty("padding","16px"),l(h,i(J,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:t=>f("name",t)})),l(D,i(C,{get list(){return o?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>f("province",t),width:"260px"})),l(m,i(x,{get when(){return r?.province?.id},get children(){var t=K();return l(t,i(C,{get list(){return r?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.city?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:$=>f("city",$),width:"260px"})),t}}),null),I(t=>(t=F()?"96vw":"420px")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()}const U=async n=>{let o={ssg_manifest_key:w(),createDate:new Date().getTime(),status:"ST009",workgroup:R?.profile?.workgroup?.id};o={...n,...o};let d={form:o};if(T()){let r={form:o,params:{idairguide:"all"},actionKey:709001};return L.post(o,function(c,b){c||console.log("manifest successfully posted")}),W.post(r,function(c,b){c||console.log("added 2 upload")}),Q(),o}else{let r=V(709001);d={...d,...r};const s=await B(d);return s?.data?.error?{}:s?.data}};export{ae as default};
