const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-C47CCLgn.js","assets/index-DJKl8WNG.js","assets/index-lCkr9jrN.css","assets/DropDwnSearch-D6jn4hjo.js","assets/debounces-C3lNOb7L.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as _,_ as g,a as m,s as $,i as f,d as p,F as C,S as y,e as h,g as v,f as P,p as k,q as b,h as M,t as u,E,O as A,n as S}from"./index-DJKl8WNG.js";import{c as q}from"./ShowQRPrintLabel-CUoGz4sd.js";import{CloseModal as B}from"./DialogHRM-DFKWnIeT.js";import"./PDFButton-ViT1fFng.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-C36kLZ2K.js";import"./InitPrintServices-CjeaunaM.js";import"./Toast-DJ8KZrku.js";var F=u('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Associar a Manifiesto</h5></div><div class="_dsplFlx bottombx "><h4>'),I=u('<p class=" textleft fullName_consigne">'),L=u('<div><div class="_dsplFlx topbx centerBx">');_(()=>g(()=>import("./SVG-C47CCLgn.js"),__vite__mapDeps([0,1,2])));_(()=>g(()=>import("./DropDwnSearch-D6jn4hjo.js"),__vite__mapDeps([3,1,2,4,0,5])));function K(s){m({});const[e,r]=m([]);m({totals:0,weight:0});const l=t=>{q(t)},a=async t=>{let i={...t?.linkedBags};s?.list.map(c=>{let o=c.ssg_track_key;i?.[o]||(i[o]={idairguide:"all"})});let n=await T({ssg_manifest_key:t?.ssg_manifest_key},{linkedBags:i});E()&&console.log(n),B(s?.modalId)},x=async t=>{const i=await Q();let n=[];A(i).map(c=>{let o=i[c];n.push(o)}),r(n)};return $(()=>{x()}),(()=>{var t=F(),i=t.firstChild,n=i.firstChild,c=n.firstChild,o=c.nextSibling,w=o.firstChild;return t.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),w.$$click=()=>l(s?.item?.bagnumber),f(i,p(y,{get when(){return e()},get children(){return p(C,{get each(){return e()},children:d=>p(O,{item:d,select:a})})}}),null),h(d=>(d=v()?"86vw":"420px")!=null?t.style.setProperty("width",d):t.style.removeProperty("width")),t})()}const O=s=>(()=>{var e=L(),r=e.firstChild;return e.$$click=()=>s.select(s?.item),f(r,p(y,{get when(){return s?.item?.name},get children(){var l=I();return f(l,()=>s?.item?.name),l}})),h(()=>P(e,`client_item_box gWXAaj jlytmu manifest ${v()?"isMobile":""}`)),e})(),T=async(s,e)=>{let r={params:s,data2update:e},l=k(709002);return r={...r,...l},await b(r)},Q=async(s,e)=>{let r={params:{workgroup:S?.profile?.workgroup?.id},fldsQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending","linkedBags"],isCompleted:e},l=k(703001);r={...r,...l};const a=await b(r);return a?.error?{}:a},X=s=>{let e=s,r="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const l=new RegExp(r);return e.length===13&&l.test(e)&&(e=e.slice(3,12)),e};M(["click"]);export{K as default,X as parseTrcking,T as updLinkedBags};
