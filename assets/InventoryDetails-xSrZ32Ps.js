const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-De0F92t4.js","assets/index-DkkNlLnX.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-BhSed9HW.js","assets/debounces-BOP31X7v.js","assets/SVG-7m5L1R9W.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-C14yKP74.js","assets/ButonHrm-BXRgqw6I.js","assets/ButonHrm-BSeWNUGQ.css","assets/UpdInventory-Baq1QajE.js","assets/DialogHRM-g_NvR9nw.js","assets/DialogHRM-V9_lZntj.css","assets/DashProducts-BXrbV9XP.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InputHr-BpD5MfYX.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as p,_ as f,u as F,c as S,a as V,r as R,k as M,s as Q,i as r,d as i,S as m,o as z,E as H,ak as G,F as U,e as X,w as J,g as N,p as B,q as E,I as W,h as Y,t as u,j as K,n as Z}from"./index-DkkNlLnX.js";import{u as ee}from"./debounces-BOP31X7v.js";import{OpenModal as te}from"./DialogHRM-g_NvR9nw.js";var re=u('<div class="bottombx centerBx unit "><h5>Almacen:</h5><h4>'),ne=u('<div class="bottombx centerBx unit "><h5>Provedor:</h5><h4>'),ie=u('<div class="bottombx centerBx unit "><h5>Hbl:</h5><h4>'),se=u('<div class="icon_status centerBx">'),le=u('<div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="bottombx centerBx unit "><h5>Factura:</h5><h4></h4></div>|<div class="bottombx centerBx unit "><h5>Total:</h5><h4>$'),ae=u('<div><div><div class="bottombx centerBx unit "><h4>Productos:</h4></div><div class=hseparator>'),oe=u("<div> "),de=u('<div class="bottombx centerBx unit"><div class=unitBx><h5></h5></div><div class=tr_bar_40><h5></h5></div><div class="bottombx centerBx unit tr_bar_15"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="bottombx centerBx unit tr_bar_15"><h5>Total:</h5><div class=unitBx><h5>$');const ce=p(()=>f(()=>import("./LoadingColorSpinner-De0F92t4.js"),__vite__mapDeps([0,1,2,3])));p(()=>f(()=>import("./DropDwnSearch-BhSed9HW.js"),__vite__mapDeps([4,1,2,5,6,7])));const j=p(()=>f(()=>import("./FlexSpace-C14yKP74.js"),__vite__mapDeps([8,1,2]))),ue=p(()=>f(()=>import("./ButonHrm-BXRgqw6I.js"),__vite__mapDeps([9,1,2,6,10]))),_e=p(()=>f(()=>import("./UpdInventory-Baq1QajE.js"),__vite__mapDeps([11,1,2,12,13,5,14,15,16,8])));p(()=>f(()=>import("./InputHr-BpD5MfYX.js"),__vite__mapDeps([17,1,2,18])));const he=p(()=>f(()=>import("./SVG-7m5L1R9W.js"),__vite__mapDeps([6,1,2])));function xe(){const[s,l]=F(),[e,o]=S({search:""});S();const[x,me]=S();S();const[pe,k]=V("");ee(k,400),R(()=>{}),M(()=>{});const P=async()=>{if(s?.mId){let _={id:s?.mId,businessId:Z?.profile?.businessYId},a=await be(_);o("manifestObj",a)}};Q(async()=>{P()});const L=async()=>{},T=_=>e?.manifestObj?.products.reduce((g,t)=>g+t.price*t.qty,0),q=_=>{let a={...e?.manifestObj},g={...e?.manifestObj},t={};t.id=K(),t.closeEvent=()=>{},t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=i(_e,{frm1:a,frm2:g,get refetch(){return props?.refetch}}),te(t)};return(()=>{var _=ae(),a=_.firstChild,g=a.firstChild;return g.nextSibling,r(_,i(m,{get when(){return e?.manifestObj?.invoice},get fallback(){return(()=>{var t=oe();return t.firstChild,r(t,i(ce,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){var t=le(),h=t.firstChild,b=h.firstChild,y=b.firstChild,I=y.nextSibling,v=b.nextSibling,O=v.nextSibling,$=O.firstChild,C=$.nextSibling;return C.firstChild,r(I,()=>e?.manifestObj?.invoice),r(h,i(m,{get when(){return e?.manifestObj?.store},get children(){return["|",(()=>{var n=re(),d=n.firstChild,c=d.nextSibling;return r(c,()=>z("storeGroupBy")?.[e?.manifestObj?.store]?.label),n})()]}}),v),r(h,i(m,{get when(){return e?.manifestObj?.seller},get children(){return["|",(()=>{var n=ne(),d=n.firstChild,c=d.nextSibling;return r(c,()=>e?.manifestObj?.seller),n})()]}}),v),r(h,i(m,{get when(){return e?.manifestObj?.hbl},get children(){return["|",(()=>{var n=ie(),d=n.firstChild,c=d.nextSibling;return r(c,()=>e?.manifestObj?.hbl),n})()]}}),v),r(C,()=>T()?.toFixed(2),null),r(h,i(m,{get when(){return H()},get children(){var n=se();return n.$$click=q,r(n,i(he,{name:"outline_edit",size:28,color:"var(--background-red-ssg)"})),n}}),null),r(h,i(m,{get when(){return!G(e?.manifestObj?.linkedBags,x?.linked)},get children(){return i(ue,{color:"#c8193c",label:"updInventory",handleClick:L})}}),null),t}}),a),r(a,i(m,{get when(){return e?.manifestObj?.products},get children(){return i(U,{get each(){return e?.manifestObj?.products},children:(t,h)=>(()=>{var b=de(),y=b.firstChild,I=y.firstChild,v=y.nextSibling,O=v.firstChild,$=v.nextSibling,C=$.firstChild,n=C.nextSibling,d=n.firstChild;d.firstChild;var c=$.nextSibling,A=c.firstChild,D=A.nextSibling,w=D.firstChild;return w.firstChild,r(I,()=>t?.qty*1),r(O,()=>t?.product?.label),r(b,i(j,{}),$),r(d,()=>(t?.price*1).toFixed(2),null),r(b,i(j,{}),c),r(w,()=>(t?.price*t?.qty).toFixed(2),null),b})()})}}),null),X(t=>J(a,` ${N(),"width:86vw;"} margin: 0 auto;`,t)),_})()}const ye=async(s,l)=>{let e={params:s,data2update:l},o=B(709002);return e={...e,...o},await E(e)},be=async s=>{let l={params:s},e=B(132002);return l={...l,...e},await E(l)},Ce=async s=>{let l=[];s.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},x=B(802002);o={...o,...x},l.push(o)}),W(l,ve)},ve=async s=>{const e=await E(s);if(e)return e};Y(["click"]);export{xe as default,ve as fetchCSVInve,Ce as loadInventory,ye as updLinkedBags};
