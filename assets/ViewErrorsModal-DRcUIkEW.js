const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-62f2Cd9T.js","assets/index-1gVGLN4L.js","assets/index-DEEWbFNK.css","assets/Util-CKCUAuLU.js","assets/InputHr-3rvNUIL0.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as k,_ as P,a as f,o as A,b as B,i as l,d as i,S as $,f as C,e as T,F as R,h as I,t as s}from"./index-1gVGLN4L.js";import{d as M,b as V}from"./Util-CKCUAuLU.js";import{CloseModal as z}from"./DialogHRM-BtE96Xvz.js";import{OpenToast as F}from"./Toast-DDJEGs_z.js";var N=s('<div class=" ">'),O=s("<div style=padding:4px>"),L=s("<div style=margin:10px;>"),W=s('<div class="centerBx flxWrp spaceAround "style=padding:14px><button class="_2vPs0 _3YAke "><span>Enviar Reporte'),X=s('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Reportar Problema con la entrega</h5></div></div></div><div></div><div style=margin:30px;>'),G=s('<div class="centerBx bottombx lowbordr spaceAround"style=padding:14px;><div class="icon_status centerBx"></div><h5></h5><div class="icon_status centerBx">'),H=s('<div><div class=" centerBx"style=padding:2px><div class="icon_status centerBx"></div><h4></h4></div><div></div><div>'),K=s('<div style="padding:6px;margin:0 0 0 10% ;cursor:pointer;"class="centerBx bottombx lowbordr"><h5>');const y=k(()=>P(()=>import("./SVG-62f2Cd9T.js"),__vite__mapDeps([0,1,2,3]))),Y=k(()=>P(()=>import("./InputHr-3rvNUIL0.js"),__vite__mapDeps([4,1,2,5])));function U(r){const[c,v]=f(""),[a,d]=f(""),[o,u]=f("");A(()=>{M("cameraScanManifest")?.clear()}),B(()=>{setTimeout(()=>{},90)});const m=async e=>{},x=()=>{z(r?.modalId),F({text:"  Reporte enviado a la agencia ...",timeout:3500,id:V()})},g=()=>{v(null),d(null),u("")},p=e=>{e===c()?v(""):v(e),d(null)};return(()=>{var e=X(),h=e.firstChild,D=h.firstChild,E=D.firstChild,b=h.nextSibling;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),E.$$click=m,l(e,i($,{get when(){return!a()},get fallback(){return(()=>{var t=G(),n=t.firstChild,_=n.nextSibling,w=_.nextSibling;return l(n,i(y,{get name(){return c()},size:24})),l(_,a),w.$$click=g,l(w,i(y,{name:"Xclose",size:24})),t})()},get children(){var t=N();return l(t,i(S,{icon:"cellphone",key:"Telefono",list:["Numero incorrecto","No responden","Se necesita otro numero"],get type(){return c()},update:p,get idetail(){return a()},updDetailTp:d}),null),l(t,i(S,{icon:"home",key:"Direccion",list:["Direccion incorrecta","Direccion no existe","Se necesita una referencia"],get idetail(){return a()},updDetailTp:d,get type(){return c()},update:p}),null),t}}),b),l(b,i($,{get when(){return a()},get children(){return[(()=>{var t=O();return l(t,i(Y,{get width(){return C()?"70vw":"360px"},backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return o()},placeholder:"commentario ...",colors:"#2b2b2b",handleClick:n=>u(n)})),t})(),L(),i($,{get when(){return o()?.length>2},get children(){var t=W(),n=t.firstChild;return n.$$click=x,t}})]}})),T(t=>{var n=C()?"88vw":"420px",_=`elastic_view_bx ${a()?"show":""}`;return n!==t.e&&((t.e=n)!=null?e.style.setProperty("width",n):e.style.removeProperty("width")),_!==t.t&&(b.className=t.t=_),t},{e:void 0,t:void 0}),e})()}const S=r=>{const[c,v]=f(!1),a=o=>{r?.updDetailTp(o)},d=()=>{r?.update(r?.icon),v(!c()),r?.updDetailTp(null)};return(()=>{var o=H(),u=o.firstChild,m=u.firstChild,x=m.nextSibling,g=u.nextSibling;return u.$$click=d,l(m,i(y,{get name(){return r?.type===r?.icon?"Xclose":r?.icon},size:24})),l(x,()=>r?.key),l(g,i($,{get when(){return r?.type===r?.icon},get children(){return i(R,{get each(){return r?.list},children:p=>(()=>{var e=K(),h=e.firstChild;return e.$$click=()=>a(p),l(h,p),e})()})}})),T(()=>g.className=`elastic_view_bx ${r?.type===r?.icon?"show":""}`),o})()};I(["click"]);export{U as default};
