const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-BlbKX0tS.js","assets/index-TdHlctG2.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-Bn2NNM_i.js","assets/debounces-CEbJ4Wcs.js","assets/SVG-D78X_55H.js","assets/Util-F67-CCle.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-DCKQapcO.js","assets/ButonHrm-RCUfBf9o.js","assets/ButonHrm-BSeWNUGQ.css","assets/UpdInventory-CnmCkPDX.js","assets/DialogHRM-CmkjR6EB.js","assets/DialogHRM-V9_lZntj.css","assets/DashProducts-DH6YoiMI.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InputHr-BEl3PuId.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as p,_ as f,u as F,c as S,a as V,o as R,j as M,n as Q,i as r,d as i,S as v,v as z,F as H,e as G,s as U,g as X,h as J,t as u,m as N}from"./index-TdHlctG2.js";import{a as W,C as Y,b as B,f as E,e as K,g as Z}from"./Util-F67-CCle.js";import{u as ee}from"./debounces-CEbJ4Wcs.js";import{OpenModal as te}from"./DialogHRM-CmkjR6EB.js";var re=u('<div class="bottombx centerBx unit "><h5>Almacen:</h5><h4>'),ne=u('<div class="bottombx centerBx unit "><h5>Provedor:</h5><h4>'),ie=u('<div class="bottombx centerBx unit "><h5>Hbl:</h5><h4>'),se=u('<div class="icon_status centerBx">'),le=u('<div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="bottombx centerBx unit "><h5>Factura:</h5><h4></h4></div>|<div class="bottombx centerBx unit "><h5>Total:</h5><h4>$'),ae=u('<div><div><div class="bottombx centerBx unit "><h4>Productos:</h4></div><div class=hseparator>'),oe=u("<div> "),de=u('<div class="bottombx centerBx unit"><div class=unitBx><h5></h5></div><div class=tr_bar_40><h5></h5></div><div class="bottombx centerBx unit tr_bar_15"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="bottombx centerBx unit tr_bar_15"><h5>Total:</h5><div class=unitBx><h5>$');const ce=p(()=>f(()=>import("./LoadingColorSpinner-BlbKX0tS.js"),__vite__mapDeps([0,1,2,3])));p(()=>f(()=>import("./DropDwnSearch-Bn2NNM_i.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const w=p(()=>f(()=>import("./FlexSpace-DCKQapcO.js"),__vite__mapDeps([9,1,2]))),ue=p(()=>f(()=>import("./ButonHrm-RCUfBf9o.js"),__vite__mapDeps([10,1,2,6,7,11]))),_e=p(()=>f(()=>import("./UpdInventory-CnmCkPDX.js"),__vite__mapDeps([12,1,2,7,13,14,5,15,16,17,9])));p(()=>f(()=>import("./InputHr-BEl3PuId.js"),__vite__mapDeps([18,1,2,19])));const he=p(()=>f(()=>import("./SVG-D78X_55H.js"),__vite__mapDeps([6,1,2,7])));function ye(){const[s,l]=F(),[e,o]=S({search:""});S();const[x,ve]=S();S();const[pe,k]=V("");ee(k,400),R(()=>{}),M(()=>{});const P=async()=>{if(s?.mId){let _={id:s?.mId,businessId:N?.profile?.businessYId},a=await be(_);o("manifestObj",a)}};Q(async()=>{P()});const L=async()=>{},T=_=>e?.manifestObj?.products.reduce((g,t)=>g+t.price*t.qty,0),A=_=>{let a={...e?.manifestObj},g={...e?.manifestObj},t={};t.id=Z(),t.closeEvent=()=>{},t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=i(_e,{frm1:a,frm2:g,get refetch(){return props?.refetch}}),te(t)};return(()=>{var _=ae(),a=_.firstChild,g=a.firstChild;return g.nextSibling,r(_,i(v,{get when(){return e?.manifestObj?.invoice},get fallback(){return(()=>{var t=oe();return t.firstChild,r(t,i(ce,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){var t=le(),h=t.firstChild,b=h.firstChild,y=b.firstChild,O=y.nextSibling,m=b.nextSibling,I=m.nextSibling,$=I.firstChild,C=$.nextSibling;return C.firstChild,r(O,()=>e?.manifestObj?.invoice),r(h,i(v,{get when(){return e?.manifestObj?.store},get children(){return["|",(()=>{var n=re(),d=n.firstChild,c=d.nextSibling;return r(c,()=>W("storeGroupBy")?.[e?.manifestObj?.store]?.label),n})()]}}),m),r(h,i(v,{get when(){return e?.manifestObj?.seller},get children(){return["|",(()=>{var n=ne(),d=n.firstChild,c=d.nextSibling;return r(c,()=>e?.manifestObj?.seller),n})()]}}),m),r(h,i(v,{get when(){return e?.manifestObj?.hbl},get children(){return["|",(()=>{var n=ie(),d=n.firstChild,c=d.nextSibling;return r(c,()=>e?.manifestObj?.hbl),n})()]}}),m),r(C,()=>T()?.toFixed(2),null),r(h,i(v,{get when(){return z()},get children(){var n=se();return n.$$click=A,r(n,i(he,{name:"outline_edit",size:28,color:"var(--background-red-ssg)"})),n}}),null),r(h,i(v,{get when(){return!Y(e?.manifestObj?.linkedBags,x?.linked)},get children(){return i(ue,{color:"#c8193c",label:"updInventory",handleClick:L})}}),null),t}}),a),r(a,i(v,{get when(){return e?.manifestObj?.products},get children(){return i(H,{get each(){return e?.manifestObj?.products},children:(t,h)=>(()=>{var b=de(),y=b.firstChild,O=y.firstChild,m=y.nextSibling,I=m.firstChild,$=m.nextSibling,C=$.firstChild,n=C.nextSibling,d=n.firstChild;d.firstChild;var c=$.nextSibling,q=c.firstChild,D=q.nextSibling,j=D.firstChild;return j.firstChild,r(O,()=>t?.qty*1),r(I,()=>t?.product?.label),r(b,i(w,{}),$),r(d,()=>(t?.price*1).toFixed(2),null),r(b,i(w,{}),c),r(j,()=>(t?.price*t?.qty).toFixed(2),null),b})()})}}),null),G(t=>U(a,` ${X(),"width:86vw;"} margin: 0 auto;`,t)),_})()}const Ce=async(s,l)=>{let e={params:s,data2update:l},o=B(709002);return e={...e,...o},await E(e)},be=async s=>{let l={params:s},e=B(132002);return l={...l,...e},await E(l)},Se=async s=>{let l=[];s.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},x=B(802002);o={...o,...x},l.push(o)}),K(l,me)},me=async s=>{const e=await E(s);if(e)return e};J(["click"]);export{ye as default,me as fetchCSVInve,Se as loadInventory,Ce as updLinkedBags};
