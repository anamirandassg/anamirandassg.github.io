const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BZahoQfp.js","assets/index-Dez0Dxi3.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js","assets/DropDwnSearch-C_0OSrMr.js","assets/debounces-C0h_1GX3.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as h,_ as g,a as _,e as $,i as p,f as m,F as w,S as y,h as b,j as v,m as C,d as M,t as u}from"./index-Dez0Dxi3.js";import{c as P}from"./ShowQRPrintLabel-HKJeyxrW.js";import{g as E,f as A,E as F,F as S,O as L}from"./Util-DZlMHKqJ.js";import{CloseModal as B}from"./DialogHRM-DDA_FmH0.js";import{h as O}from"./Scanning-CoYBtFjx.js";import"./PDFButton-ClnWeH7R.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-DkuHxdU6.js";import"./InitPrintServices-QWHeDiid.js";import"./Toast-BPGUKZfs.js";import"./App.module-CbHnVtRQ.js";var T=u('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar a Manifiesto</h5></div><div class="_dsplFlx bottombx "><h4>'),j=u('<p class=" textleft fullName_consigne">'),R=u('<div><div class="_dsplFlx topbx centerBx">');h(()=>g(()=>import("./SVG-BZahoQfp.js"),__vite__mapDeps([0,1,2,3])));h(()=>g(()=>import("./DropDwnSearch-C_0OSrMr.js"),__vite__mapDeps([4,1,2,5,0,3,6])));function G(s){_({});const[e,l]=_([]),i=t=>{P(t)},f=async t=>{let r={...t?.linkedBags};s?.list.map(o=>{let a=o.ssg_track_key;r?.[a]||(r[a]={idairguide:o?.guia})});let n={params:{ssg_manifest_key:t?.ssg_manifest_key},data2update:{linkedBags:r},actionKey:709002};F.post(n,function(a,x){a||console.log("successfully posted on manifest link")}),S.post(n,function(a,x){a||console.log("added to queue upload")}),B(s?.modalId)},k=async t=>{let r=await O(),c=[];L(r).map(d=>{let n=r[d];c.push(n)}),l(c)};return $(()=>{k()}),(()=>{var t=T(),r=t.firstChild,c=r.firstChild,d=c.firstChild,n=d.nextSibling,o=n.firstChild;return t.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),o.$$click=()=>i(s?.item?.bagnumber),p(r,m(y,{get when(){return e()},get children(){return m(w,{get each(){return e()},children:a=>m(q,{item:a,select:f})})}}),null),b(a=>(a=v()?"86vw":"420px")!=null?t.style.setProperty("width",a):t.style.removeProperty("width")),t})()}const q=s=>(()=>{var e=R(),l=e.firstChild;return e.$$click=()=>s.select(s?.item),p(l,m(y,{get when(){return s?.item?.name},get children(){var i=j();return p(i,()=>s?.item?.name),i}})),b(()=>C(e,`client_item_box gWXAaj jlytmu manifest ${v()?"isMobile":""}`)),e})(),H=async(s,e)=>{let l={params:s,data2update:e},i=E(709002);return l={...l,...i},await A(l)},J=s=>{let e=s,l="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const i=new RegExp(l);return e.length===13&&i.test(e)&&(e=e.slice(3,12)),e};M(["click"]);export{G as default,J as parseTrcking,H as updLinkedBags};
