const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-B-_GsH4b.js","assets/index-BnQZZ72n.js","assets/index-BRlA1Q7g.css","assets/Util-DCAGxQXf.js","assets/DropDwnSearch-BphXUvRN.js","assets/debounces-DUPjjIVA.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as h,_ as g,a as _,d as $,i as p,e as m,F as w,S as y,f as b,j as v,m as C,h as M,t as u}from"./index-BnQZZ72n.js";import{c as P}from"./ShowQRPrintLabel-C_f7T3iS.js";import{g as E,f as A,H as S,I as F,O as L}from"./Util-DCAGxQXf.js";import{CloseModal as B}from"./DialogHRM-ts0cJGWB.js";import{h as O}from"./Scanning-DmSqSnL8.js";import"./fontkit.es-bSs4huUp.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-DJ_AIouE.js";import"./Toast-CkzLo8WE.js";import"./App.module-CbHnVtRQ.js";var T=u('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar a Manifiesto</h5></div><div class="_dsplFlx bottombx "><h4>'),j=u('<p class=" textleft fullName_consigne">'),I=u('<div><div class="_dsplFlx topbx centerBx">');h(()=>g(()=>import("./SVG-B-_GsH4b.js"),__vite__mapDeps([0,1,2,3])));h(()=>g(()=>import("./DropDwnSearch-BphXUvRN.js"),__vite__mapDeps([4,1,2,5,0,3,6])));function X(s){_({});const[e,l]=_([]),i=t=>{P(t)},f=async t=>{let r={...t?.linkedBags};s?.list.map(o=>{let a=o.ssg_track_key;r?.[a]||(r[a]={idairguide:o?.guia})});let n={params:{ssg_manifest_key:t?.ssg_manifest_key},data2update:{linkedBags:r},actionKey:709002};S.post(n,function(a,x){a||console.log("successfully posted on manifest link")}),F.post(n,function(a,x){a||console.log("added to queue upload")}),B(s?.modalId)},k=async t=>{let r=await O(),c=[];L(r).map(d=>{let n=r[d];c.push(n)}),l(c)};return $(()=>{k()}),(()=>{var t=T(),r=t.firstChild,c=r.firstChild,d=c.firstChild,n=d.nextSibling,o=n.firstChild;return t.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o.$$click=()=>i(s?.item?.bagnumber),p(r,m(y,{get when(){return e()},get children(){return m(w,{get each(){return e()},children:a=>m(R,{item:a,select:f})})}}),null),b(a=>(a=v()?"86vw":"420px")!=null?t.style.setProperty("width",a):t.style.removeProperty("width")),t})()}const R=s=>(()=>{var e=I(),l=e.firstChild;return e.$$click=()=>s.select(s?.item),p(l,m(y,{get when(){return s?.item?.name},get children(){var i=j();return p(i,()=>s?.item?.name),i}})),b(()=>C(e,`client_item_box gWXAaj jlytmu manifest ${v()?"isMobile":""}`)),e})(),Z=async(s,e)=>{let l={params:s,data2update:e},i=E(709002);return l={...l,...i},await A(l)},G=s=>{let e=s,l="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const i=new RegExp(l);return e.length===13&&i.test(e)&&(e=e.slice(3,12)),e};M(["click"]);export{X as default,G as parseTrcking,Z as updLinkedBags};
