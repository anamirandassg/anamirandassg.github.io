const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-HbM4daMy.js","assets/index-ulQ-TQRi.js","assets/index-lCkr9jrN.css","assets/InputHr-DLMHK3tB.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-BqLyfWia.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-COtwgE1z.js","assets/debounces-CvBw6x0E.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as u,_ as v,c as y,a as M,s as E,i as l,d as i,S as x,e as I,g as F,t as g,j as w,o as O,K as R,n as T,M as L,N as W,ad as H,p as V,q}from"./index-ulQ-TQRi.js";import{CloseModal as B}from"./DialogHRM-DZp4S579.js";import{u as K}from"./debounces-CvBw6x0E.js";import{l as Q}from"./Scanning-BkSkQjw8.js";import"./App.module-CbHnVtRQ.js";import"./Toast-BqY88JNg.js";var j=g('<div style="margin:15px 0"class=" spaceAround centerBx">'),z=g("<div style=padding:4px>"),N=g('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Manifiesto</h5></div></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');u(()=>v(()=>import("./SVG-HbM4daMy.js"),__vite__mapDeps([0,1,2])));const G=u(()=>v(()=>import("./InputHr-DLMHK3tB.js"),__vite__mapDeps([3,1,2,4]))),J=u(()=>v(()=>import("./ButonHrm-BqLyfWia.js"),__vite__mapDeps([5,1,2,0,6]))),C=u(()=>v(()=>import("./DropDwnSearch-COtwgE1z.js"),__vite__mapDeps([7,1,2,8,0,9])));function oe(n){const[o,d]=y(),[r,s]=y({name:""}),[c,b]=M(""),k=K(b,400),f=(e,a)=>{s({[e]:a}),k(w())},S=async e=>{let a={province:r?.province?.label,city:r?.city?.label,name:r?.name};await U(a),B(n?.modalId),n?.refetch?.()};return E(()=>{let e=[];O("M023009")?.provincias.map(a=>{let p=a.label;R?.roles?.[p]?.isActive&&e.push(a)}),d("prov",e)}),(()=>{var e=N(),a=e.firstChild,p=a.firstChild,P=p.firstChild,_=P.nextSibling,A=_.firstChild,m=p.nextSibling,h=m.firstChild,D=h.nextSibling;return e.style.setProperty("height","clamp(40vh, 60vh, 80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),l(A,()=>n?.item?.bagnumber),l(_,i(x,{get when(){return r?.name},get children(){var t=j();return l(t,i(J,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:S})),t}}),null),m.style.setProperty("padding","16px"),l(h,i(G,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:t=>f("name",t)})),l(D,i(C,{get list(){return o?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>f("province",t),width:"260px"})),l(m,i(x,{get when(){return r?.province?.id},get children(){var t=z();return l(t,i(C,{get list(){return r?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.city?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:$=>f("city",$),width:"260px"})),t}}),null),I(t=>(t=F()?"96vw":"420px")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()}const U=async n=>{let o={ssg_manifest_key:w(),createDate:new Date().getTime(),status:"ST009",workgroup:T?.profile?.workgroup?.id};o={...n,...o};let d={form:o};if(L()){let r={form:o,params:{idairguide:"all"},actionKey:709001};return W.post(o,function(c,b){c||console.log("manifest successfully posted")}),H.post(r,function(c,b){c||console.log("added 2 upload")}),Q(),o}else{let r=V(709001);d={...d,...r};const s=await q(d);return s?.data?.error?{}:s?.data}};export{oe as default};
