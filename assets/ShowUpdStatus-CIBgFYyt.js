const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-oly4o2jj.js","assets/index-Dc7YZiIm.js","assets/index-BRlA1Q7g.css","assets/Util-BYKUtUWx.js","assets/DropDwnSearch-BscVucwa.js","assets/debounces-CVw3Smgq.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as v,_,a as u,d as P,i as f,e as k,f as A,j as $,U as E,h as R,t as D}from"./index-Dc7YZiIm.js";import{c as F}from"./ShowQRPrintLabel-QV5HSli8.js";import{O,m as b}from"./Util-BYKUtUWx.js";import{h as j}from"./ScanningServices-OoN2PdI5.js";import"./fontkit.es-ChJNFk3u.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-oS5Dp5Wa.js";import"./Toast-Bj2qIk-8.js";import"./App.module-CbHnVtRQ.js";let y=[230116441,230118141,230118144,230118145,230118146,230118147,230118122,230117470,230117526];var L=D('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Actualizar Locaciones</h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx">');v(()=>_(()=>import("./SVG-oly4o2jj.js"),__vite__mapDeps([0,1,2,3])));const M=v(()=>_(()=>import("./DropDwnSearch-BscVucwa.js"),__vite__mapDeps([4,1,2,5,0,3,6])));function G(i){u({});const[r,c]=u();u({totals:0,weight:0});const d=t=>{F(t)},m=t=>{c(t);let a={};i?.list.map((e,l)=>{e.guia,e.hbls?.[0]?.hbl,e.hbls.map((n,o)=>{a[n?.hbl]=1})}),O(z).map((e,l)=>{e.guia}),g(y,y?.length,w)},g=async(t,a,e)=>{if(a>30){let l=6,n=Array.from(Array(l).keys()),o=Math.ceil(a/l);const p=n.map(async s=>{let S=o*s,h=o*(s+1)-1;h>a&&(h=a),await b(t.slice(S,h),e)});await Promise.all(p)}else await b(t,e)},w=async t=>t?(t=t+"",t=t.split("'").join("-"),await C(t),1):0,C=async t=>{(await j(t,r()))?.data},x=async t=>{};return P(()=>{setTimeout(()=>{x()},450)}),(()=>{var t=L(),a=t.firstChild,e=a.firstChild,l=e.firstChild,n=l.nextSibling,o=n.firstChild,p=e.nextSibling;return t.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o.$$click=()=>d(i?.item?.bagnumber),f(o,r),f(p,k(M,{get list(){return U()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return r()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:s=>m(s.id),width:"260px"})),A(s=>(s=$()?"86vw":"420px")!=null?t.style.setProperty("width",s):t.style.removeProperty("width")),t})()}const H=i=>{let r=i,c="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(c);return r.length===13&&d.test(r)&&(r=r.slice(3,12)),r},U=()=>E?.list?.filter(i=>i.id);let z={};R(["click"]);export{G as default,H as parseTrcking};
