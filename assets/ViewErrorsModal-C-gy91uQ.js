const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-MWXDsfjm.js","assets/index-8-XoMm4f.js","assets/index-lCkr9jrN.css","assets/InputHr-CokapjAB.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as k,_ as P,a as $,r as A,s as B,i as l,d as n,S as f,g as C,e as T,F as R,h as I,t as s,o as M,j as V}from"./index-8-XoMm4f.js";import{CloseModal as z}from"./DialogHRM-DBDxQTtL.js";import{OpenToast as F}from"./Toast-BeTg-Dsm.js";var N=s('<div class=" ">'),O=s("<div style=padding:4px>"),L=s("<div style=margin:10px;>"),W=s('<div class="centerBx flxWrp spaceAround "style=padding:14px><button class="_2vPs0 _3YAke "><span>Enviar Reporte'),X=s('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Reportar Problema con la entrega</h5></div></div></div><div></div><div style=margin:30px;>'),j=s('<div class="centerBx bottombx lowbordr spaceAround"style=padding:14px;><div class="icon_status centerBx"></div><h5></h5><div class="icon_status centerBx">'),G=s('<div><div class=" centerBx"style=padding:2px><div class="icon_status centerBx"></div><h4></h4></div><div></div><div>'),H=s('<div style="padding:6px;margin:0 0 0 10% ;cursor:pointer;"class="centerBx bottombx lowbordr"><h5>');const b=k(()=>P(()=>import("./SVG-MWXDsfjm.js"),__vite__mapDeps([0,1,2]))),K=k(()=>P(()=>import("./InputHr-CokapjAB.js"),__vite__mapDeps([3,1,2,4])));function Q(r){const[c,v]=$(""),[a,d]=$(""),[o,u]=$("");A(()=>{M("cameraScanManifest")?.clear()}),B(()=>{setTimeout(()=>{},90)});const g=async e=>{},x=()=>{z(r?.modalId),F({text:"  Reporte enviado a la agencia ...",timeout:3500,id:V()})},m=()=>{v(null),d(null),u("")},p=e=>{e===c()?v(""):v(e),d(null)};return(()=>{var e=X(),h=e.firstChild,D=h.firstChild,E=D.firstChild,y=h.nextSibling;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),E.$$click=g,l(e,n(f,{get when(){return!a()},get fallback(){return(()=>{var t=j(),i=t.firstChild,_=i.nextSibling,w=_.nextSibling;return l(i,n(b,{get name(){return c()},size:24})),l(_,a),w.$$click=m,l(w,n(b,{name:"Xclose",size:24})),t})()},get children(){var t=N();return l(t,n(S,{icon:"cellphone",key:"Telefono",list:["Numero incorrecto","No responden","Se necesita otro numero"],get type(){return c()},update:p,get idetail(){return a()},updDetailTp:d}),null),l(t,n(S,{icon:"home",key:"Direccion",list:["Direccion incorrecta","Direccion no existe","Se necesita una referencia"],get idetail(){return a()},updDetailTp:d,get type(){return c()},update:p}),null),t}}),y),l(y,n(f,{get when(){return a()},get children(){return[(()=>{var t=O();return l(t,n(K,{get width(){return C()?"70vw":"360px"},backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return o()},placeholder:"commentario ...",colors:"#2b2b2b",handleClick:i=>u(i)})),t})(),L(),n(f,{get when(){return o()?.length>2},get children(){var t=W(),i=t.firstChild;return i.$$click=x,t}})]}})),T(t=>{var i=C()?"88vw":"420px",_=`elastic_view_bx ${a()?"show":""}`;return i!==t.e&&((t.e=i)!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),_!==t.t&&(y.className=t.t=_),t},{e:void 0,t:void 0}),e})()}const S=r=>{const[c,v]=$(!1),a=o=>{r?.updDetailTp(o)},d=()=>{r?.update(r?.icon),v(!c()),r?.updDetailTp(null)};return(()=>{var o=G(),u=o.firstChild,g=u.firstChild,x=g.nextSibling,m=u.nextSibling;return u.$$click=d,l(g,n(b,{get name(){return r?.type===r?.icon?"Xclose":r?.icon},size:24})),l(x,()=>r?.key),l(m,n(f,{get when(){return r?.type===r?.icon},get children(){return n(R,{get each(){return r?.list},children:p=>(()=>{var e=H(),h=e.firstChild;return e.$$click=()=>a(p),l(h,p),e})()})}})),T(()=>m.className=`elastic_view_bx ${r?.type===r?.icon?"show":""}`),o})()};I(["click"]);export{Q as default};
