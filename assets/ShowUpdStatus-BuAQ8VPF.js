const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DjZZaUDK.js","assets/index-U4LQJf5v.js","assets/index-D70Llg4J.css","assets/Util-C4Gv2Rs-.js","assets/DropDwnSearch-B1X4Wyq5.js","assets/debounces-Dl2-DoiH.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as v,_,a as u,b as x,i as b,d as P,e as k,f as A,X as $,h as E,t as R}from"./index-U4LQJf5v.js";import{c as D}from"./ShowQRPrintLabel-68sk0Grw.js";import{O as F,j as f}from"./Util-C4Gv2Rs-.js";import{a as O}from"./Scanning-9ssIAwZ8.js";import"./PDFButton-CCQT0yk3.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BaZy4qZc.js";import"./InitPrintServices-COQVt4ve.js";import"./Toast-Pqhcu8pz.js";import"./App.module-CbHnVtRQ.js";var j=R('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Actualizar Locaciones</h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx">');v(()=>_(()=>import("./SVG-DjZZaUDK.js"),__vite__mapDeps([0,1,2,3])));const L=v(()=>_(()=>import("./DropDwnSearch-B1X4Wyq5.js"),__vite__mapDeps([4,1,2,5,0,3,6])));function G(l){u({});const[r,c]=u();u({totals:0,weight:0});const d=t=>{D(t)},m=t=>{c(t);let a={};l?.list.map((e,i)=>{e.guia,e.hbls?.[0]?.hbl,e.hbls.map((n,o)=>{a[n?.hbl]=1})}),F(U).map((e,i)=>{e.guia}),g(y,y?.length,w)},g=async(t,a,e)=>{if(a>30){let i=6,n=Array.from(Array(i).keys()),o=Math.ceil(a/i);const p=n.map(async s=>{let C=o*s,h=o*(s+1)-1;h>a&&(h=a),await f(t.slice(C,h),e)});await Promise.all(p)}else await f(t,e)},w=async t=>t?(t=t+"",t=t.split("'").join("-"),await S(t),1):0,S=async t=>{(await O(t,r()))?.data};return x(()=>{console.log("ShowUpdStatus")}),(()=>{var t=j(),a=t.firstChild,e=a.firstChild,i=e.firstChild,n=i.nextSibling,o=n.firstChild,p=e.nextSibling;return t.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o.$$click=()=>d(l?.item?.bagnumber),b(o,r),b(p,P(L,{get list(){return M()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:s=>m(s.id),width:"260px"})),k(s=>(s=A()?"86vw":"420px")!=null?t.style.setProperty("width",s):t.style.removeProperty("width")),t})()}const H=l=>{let r=l,c="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(c);return r.length===13&&d.test(r)&&(r=r.slice(3,12)),r},M=()=>$?.list?.filter(l=>l.id);let U={},y=[];E(["click"]);export{G as default,H as parseTrcking};
