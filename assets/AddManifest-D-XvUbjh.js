const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-B-5iyLtm.js","assets/index-BKy_S-Nn.js","assets/index-lCkr9jrN.css","assets/Util-F67-CCle.js","assets/InputHr-Dp8o9I0k.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-YOGkItX8.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-B5C1hTwO.js","assets/debounces-B46jN5Z-.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as u,_ as b,c as h,a as M,n as E,i as l,d as i,S as x,e as I,g as F,t as g,x as O,m as R,y as T}from"./index-BKy_S-Nn.js";import{g as w,a as L,i as W,B,b as H,f as V}from"./Util-F67-CCle.js";import{CloseModal as q}from"./DialogHRM-CgIthEbm.js";import{u as Q}from"./debounces-B46jN5Z-.js";import{l as z}from"./Scanning-BGYGkbwF.js";import"./App.module-CbHnVtRQ.js";import"./Toast-C3JRIq_B.js";var K=g('<div style="margin:15px 0"class=" spaceAround centerBx">'),j=g("<div style=padding:4px>"),G=g('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Crear Manifiesto</h5></div></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');u(()=>b(()=>import("./SVG-B-5iyLtm.js"),__vite__mapDeps([0,1,2,3])));const J=u(()=>b(()=>import("./InputHr-Dp8o9I0k.js"),__vite__mapDeps([4,1,2,5]))),N=u(()=>b(()=>import("./ButonHrm-YOGkItX8.js"),__vite__mapDeps([6,1,2,0,3,7]))),C=u(()=>b(()=>import("./DropDwnSearch-B5C1hTwO.js"),__vite__mapDeps([8,1,2,9,0,3,10])));function ae(n){const[o,d]=h(),[r,s]=h({name:""}),[c,v]=M(""),k=Q(v,400),m=(e,a)=>{s({[e]:a}),k(w())},S=async e=>{let a={province:r?.province?.label,city:r?.city?.label,name:r?.name};await U(a),q(n?.modalId),n?.refetch?.()};return E(()=>{let e=[];L("M023009")?.provincias.map(a=>{let p=a.label;O?.roles?.[p]?.isActive&&e.push(a)}),d("prov",e)}),(()=>{var e=G(),a=e.firstChild,p=a.firstChild,P=p.firstChild,_=P.nextSibling,A=_.firstChild,f=p.nextSibling,y=f.firstChild,D=y.nextSibling;return e.style.setProperty("height","clamp(40vh, 60vh, 80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),l(A,()=>n?.item?.bagnumber),l(_,i(x,{get when(){return r?.name},get children(){var t=K();return l(t,i(N,{color:"#37be5fff",icon:"save",label:"Salvar",handleClick:S})),t}}),null),f.style.setProperty("padding","16px"),l(y,i(J,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.name},placeholder:"name...",colors:"#2b2b2b",handleClick:t=>m("name",t)})),l(D,i(C,{get list(){return o?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>m("province",t),width:"260px"})),l(f,i(x,{get when(){return r?.province?.id},get children(){var t=j();return l(t,i(C,{get list(){return r?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r?.city?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:$=>m("city",$),width:"260px"})),t}}),null),I(t=>(t=F()?"96vw":"420px")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()}const U=async n=>{let o={ssg_manifest_key:w(),createDate:new Date().getTime(),status:"ST009",workgroup:R?.profile?.workgroup?.id};o={...n,...o};let d={form:o};if(T()){let r={form:o,params:{idairguide:"all"},actionKey:709001};return W.post(o,function(c,v){c||console.log("manifest successfully posted")}),B.post(r,function(c,v){c||console.log("added 2 upload")}),z(),o}else{let r=H(709001);d={...d,...r};const s=await V(d);return s?.data?.error?{}:s?.data}};export{ae as default};
