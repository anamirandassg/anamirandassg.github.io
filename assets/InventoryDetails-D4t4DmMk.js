const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-B1rJcwQ8.js","assets/index-B0GUc9u6.js","assets/index-BRlA1Q7g.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-DnHlQI4F.js","assets/debounces-iFxu0N2v.js","assets/SVG-BhS5E-Wo.js","assets/Util-DVoBpjwO.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-B8ztX12h.js","assets/ButonHrm-BbqqQLEH.js","assets/ButonHrm-BSeWNUGQ.css","assets/UpdInventory-DtVcHLjH.js","assets/DialogHRM-USu8E80H.js","assets/DialogHRM-V9_lZntj.css","assets/DashProducts-BPv4Jhrb.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InputHr-BzSowVot.js","assets/InputHr-BXFw4d2l.css"])))=>i.map(i=>d[i]);
import{l as p,_ as $,r as U,c as q,a as G,o as H,b as X,d as N,i as r,e as n,S as f,q as W,x as Y,F as J,f as K,s as Z,j as ee,h as te,t as u,g as re}from"./index-B0GUc9u6.js";import{e as ie,g as P,f as T,m as ne,a as se}from"./Util-DVoBpjwO.js";import{u as le}from"./debounces-iFxu0N2v.js";import{OpenModal as ae}from"./DialogHRM-USu8E80H.js";import{T as oe}from"./print_invoice_service-D9AjOh7j.js";import"./fontkit.es-CKP7Eug6.js";import"./InitPrintServices-DFq0sOo3.js";import"./qrcode-DHy8FFhS.js";import"./Toast-CP9W1pfV.js";var de=u('<div class="bottombx centerBx unit "><h5>Almacen:</h5><h4>'),ce=u('<div class="bottombx centerBx unit "><h5>Provedor:</h5><h4>'),he=u('<div class="bottombx centerBx unit "><h5>Hbl:</h5><h4>'),D=u('<div class="icon_status centerBx">'),_e=u('<div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="bottombx centerBx unit "><h5>Factura:</h5><h4></h4></div>|<div class="bottombx centerBx unit "><h5>Total:</h5><h4>$</h4></div></div><div class="bottombx centerBx unit "><h5>descripcion:</h5><h4>'),ue=u('<div><div><div class="bottombx centerBx unit "><h4>Productos:</h4></div><div class=hseparator>'),be=u("<div> "),me=u('<div class="bottombx centerBx unit"><div class=unitBx><h5></h5></div><div class=tr_bar_40><h5></h5></div><div class="bottombx centerBx unit tr_bar_15"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="bottombx centerBx unit tr_bar_15"><h5>Total:</h5><div class=unitBx><h5>$</h5></div></div><div class="bottombx centerBx unit tr_bar_15"><h5>Venta:</h5><div class=unitBx><h5>$');const ve=p(()=>$(()=>import("./LoadingColorSpinner-B1rJcwQ8.js"),__vite__mapDeps([0,1,2,3])));p(()=>$(()=>import("./DropDwnSearch-DnHlQI4F.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const j=p(()=>$(()=>import("./FlexSpace-B8ztX12h.js"),__vite__mapDeps([9,1,2])));p(()=>$(()=>import("./ButonHrm-BbqqQLEH.js"),__vite__mapDeps([10,1,2,6,7,11])));const fe=p(()=>$(()=>import("./UpdInventory-DtVcHLjH.js"),__vite__mapDeps([12,1,2,7,13,14,5,15,16,17,9])));p(()=>$(()=>import("./InputHr-BzSowVot.js"),__vite__mapDeps([18,1,2,19])));const F=p(()=>$(()=>import("./SVG-BhS5E-Wo.js"),__vite__mapDeps([6,1,2,7])));function we(){const[l,a]=U(),[e,o]=q({search:""});q();const[O,L]=G("");le(L,400),H(()=>{}),X(()=>{});const R=async()=>{if(l?.mId){let d={id:l?.mId,businessId:re?.profile?.businessYId},s=await pe(d);o("manifestObj",s)}};N(async()=>{R()});const I=d=>e?.manifestObj?.products?.reduce?.((b,t)=>b+t.price*t.qty,0),V=d=>{let s={...e?.manifestObj},b={...e?.manifestObj},t={};t.id=se(),t.closeEvent=()=>{},t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=n(fe,{frm1:s,frm2:b,get refetch(){return props?.refetch}}),ae(t)},M=async d=>{let s={...e?.manifestObj};s.amount=I();let b=await oe(s);window.open(b)};return(()=>{var d=ue(),s=d.firstChild,b=s.firstChild;return b.nextSibling,r(d,n(f,{get when(){return e?.manifestObj?.invoice},get fallback(){return(()=>{var t=be();return t.firstChild,r(t,n(ve,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){var t=_e(),c=t.firstChild,h=c.firstChild,S=h.firstChild,B=S.nextSibling,m=h.nextSibling,E=m.nextSibling,g=E.firstChild,y=g.nextSibling;y.firstChild;var w=c.nextSibling,C=w.firstChild,x=C.nextSibling;return r(B,()=>e?.manifestObj?.invoice),r(c,n(f,{get when(){return e?.manifestObj?.store},get children(){return["|",(()=>{var i=de(),v=i.firstChild,_=v.nextSibling;return r(_,()=>ie("storeGroupBy")?.[e?.manifestObj?.store]?.label),i})()]}}),m),r(c,n(f,{get when(){return e?.manifestObj?.seller},get children(){return["|",(()=>{var i=ce(),v=i.firstChild,_=v.nextSibling;return r(_,()=>e?.manifestObj?.seller),i})()]}}),m),r(c,n(f,{get when(){return e?.manifestObj?.hbl},get children(){return["|",(()=>{var i=he(),v=i.firstChild,_=v.nextSibling;return r(_,()=>e?.manifestObj?.hbl),i})()]}}),m),r(y,()=>I()?.toFixed(2),null),r(c,n(f,{get when(){return W(()=>e?.manifestObj?.type==="TRANSFER")()&&I()>0},get children(){var i=D();return i.$$click=M,r(i,n(F,{name:"printer",size:28,color:"var(--background-red-ssg)"})),i}}),null),r(c,n(f,{get when(){return Y()},get children(){var i=D();return i.$$click=V,r(i,n(F,{name:"outline_edit",size:28,color:"var(--background-red-ssg)"})),i}}),null),r(x,()=>e?.manifestObj?.description),t}}),s),r(s,n(f,{get when(){return e?.manifestObj?.products},get children(){return n(J,{get each(){return e?.manifestObj?.products},children:(t,c)=>(()=>{var h=me(),S=h.firstChild,B=S.firstChild,m=S.nextSibling,E=m.firstChild,g=m.nextSibling,y=g.firstChild,w=y.nextSibling,C=w.firstChild;C.firstChild;var x=g.nextSibling,i=x.firstChild,v=i.nextSibling,_=v.firstChild;_.firstChild;var k=x.nextSibling,z=k.firstChild,Q=z.nextSibling,A=Q.firstChild;return A.firstChild,r(B,()=>t?.qty*1),r(E,()=>t?.product?.label),r(h,n(j,{}),g),r(C,()=>(t?.price*1).toFixed(2),null),r(h,n(j,{}),x),r(_,()=>(t?.price*t?.qty).toFixed(2),null),r(h,n(j,{}),k),r(A,()=>t?.salePrice,null),h})()})}}),null),K(t=>Z(s,` ${ee(),"width:86vw;"} margin: 0 auto;`,t)),d})()}const je=async(l,a)=>{let e={params:l,data2update:a},o=P(709002);return e={...e,...o},await T(e)},pe=async l=>{let a={params:l},e=P(132002);return a={...a,...e},await T(a)},Pe=async l=>{let a=[];l.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},O=P(802002);o={...o,...O},a.push(o)}),ne(a,$e)},$e=async l=>{const e=await T(l);if(e)return e};te(["click"]);export{we as default,$e as fetchCSVInve,Pe as loadInventory,je as updLinkedBags};
