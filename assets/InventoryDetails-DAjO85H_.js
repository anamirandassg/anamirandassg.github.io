const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-BpQYRhzR.js","assets/index-vSzQxDt2.js","assets/index-mNJWtuMT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-BNP5sskI.js","assets/debounces-64T0P8om.js","assets/SVG-CmnSgbeE.js","assets/Util-DZlMHKqJ.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-DYZrbJwe.js","assets/ButonHrm-Cmzoo1ou.js","assets/ButonHrm-BSeWNUGQ.css","assets/UpdInventory-Dvg8UCPB.js","assets/DialogHRM-hAj9sT_z.js","assets/DialogHRM-V9_lZntj.css","assets/DashProducts-Cjri5YAu.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InputHr-Dy2qjIE7.js","assets/InputHr-BXFw4d2l.css"])))=>i.map(i=>d[i]);
import{l as f,_ as p,r as Q,c as E,a as z,o as H,b as G,e as U,i as r,f as n,S as m,x as X,F as J,h as N,s as W,j as Y,d as K,t as h,g as Z}from"./index-vSzQxDt2.js";import{e as ee,G as te,g as T,f as A,m as re,a as ie}from"./Util-DZlMHKqJ.js";import{u as ne}from"./debounces-64T0P8om.js";import{OpenModal as le}from"./DialogHRM-hAj9sT_z.js";var se=h('<div class="bottombx centerBx unit "><h5>Almacen:</h5><h4>'),ae=h('<div class="bottombx centerBx unit "><h5>Provedor:</h5><h4>'),oe=h('<div class="bottombx centerBx unit "><h5>Hbl:</h5><h4>'),de=h('<div class="icon_status centerBx">'),ce=h('<div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="bottombx centerBx unit "><h5>Factura:</h5><h4></h4></div>|<div class="bottombx centerBx unit "><h5>Total:</h5><h4>$</h4></div></div><div class="bottombx centerBx unit "><h5>descripcion:</h5><h4></h4></div><div class="bottombx centerBx unit "><h5>HBL:</h5><h4>'),he=h('<div><div><div class="bottombx centerBx unit "><h4>Productos:</h4></div><div class=hseparator>'),_e=h("<div> "),ue=h('<div class="bottombx centerBx unit"><div class=unitBx><h5></h5></div><div class=tr_bar_40><h5></h5></div><div class="bottombx centerBx unit tr_bar_15"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="bottombx centerBx unit tr_bar_15"><h5>Total:</h5><div class=unitBx><h5>$</h5></div></div><div class="bottombx centerBx unit tr_bar_15"><h5>Venta:</h5><div class=unitBx><h5>$');const be=f(()=>p(()=>import("./LoadingColorSpinner-BpQYRhzR.js"),__vite__mapDeps([0,1,2,3])));f(()=>p(()=>import("./DropDwnSearch-BNP5sskI.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const L=f(()=>p(()=>import("./FlexSpace-DYZrbJwe.js"),__vite__mapDeps([9,1,2]))),ve=f(()=>p(()=>import("./ButonHrm-Cmzoo1ou.js"),__vite__mapDeps([10,1,2,6,7,11]))),me=f(()=>p(()=>import("./UpdInventory-Dvg8UCPB.js"),__vite__mapDeps([12,1,2,7,13,14,5,15,16,17,9])));f(()=>p(()=>import("./InputHr-Dy2qjIE7.js"),__vite__mapDeps([18,1,2,19])));const fe=f(()=>p(()=>import("./SVG-CmnSgbeE.js"),__vite__mapDeps([6,1,2,7])));function Be(){const[l,s]=Q(),[e,o]=E({search:""});E();const[S,xe]=E();E();const[ge,q]=z("");ne(q,400),H(()=>{}),G(()=>{});const D=async()=>{if(l?.mId){let _={id:l?.mId,businessId:Z?.profile?.businessYId},a=await pe(_);o("manifestObj",a)}};U(async()=>{D()});const F=async()=>{},R=_=>e?.manifestObj?.products.reduce(($,t)=>$+t.price*t.qty,0),M=_=>{let a={...e?.manifestObj},$={...e?.manifestObj},t={};t.id=ie(),t.closeEvent=()=>{},t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=n(me,{frm1:a,frm2:$,get refetch(){return props?.refetch}}),le(t)};return(()=>{var _=he(),a=_.firstChild,$=a.firstChild;return $.nextSibling,r(_,n(m,{get when(){return e?.manifestObj?.invoice},get fallback(){return(()=>{var t=_e();return t.firstChild,r(t,n(be,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){var t=ce(),d=t.firstChild,c=d.firstChild,C=c.firstChild,j=C.nextSibling,u=c.nextSibling,w=u.nextSibling,x=w.firstChild,y=x.nextSibling;y.firstChild;var O=d.nextSibling,B=O.firstChild,g=B.nextSibling,P=O.nextSibling,k=P.firstChild,I=k.nextSibling;return r(j,()=>e?.manifestObj?.invoice),r(d,n(m,{get when(){return e?.manifestObj?.store},get children(){return["|",(()=>{var i=se(),b=i.firstChild,v=b.nextSibling;return r(v,()=>ee("storeGroupBy")?.[e?.manifestObj?.store]?.label),i})()]}}),u),r(d,n(m,{get when(){return e?.manifestObj?.seller},get children(){return["|",(()=>{var i=ae(),b=i.firstChild,v=b.nextSibling;return r(v,()=>e?.manifestObj?.seller),i})()]}}),u),r(d,n(m,{get when(){return e?.manifestObj?.hbl},get children(){return["|",(()=>{var i=oe(),b=i.firstChild,v=b.nextSibling;return r(v,()=>e?.manifestObj?.hbl),i})()]}}),u),r(y,()=>R()?.toFixed(2),null),r(d,n(m,{get when(){return X()},get children(){var i=de();return i.$$click=M,r(i,n(fe,{name:"outline_edit",size:28,color:"var(--background-red-ssg)"})),i}}),null),r(d,n(m,{get when(){return!te(e?.manifestObj?.linkedBags,S?.linked)},get children(){return n(ve,{color:"#c8193c",label:"updInventory",handleClick:F})}}),null),r(g,()=>e?.manifestObj?.description),r(I,()=>e?.manifestObj?.hbl),t}}),a),r(a,n(m,{get when(){return e?.manifestObj?.products},get children(){return n(J,{get each(){return e?.manifestObj?.products},children:(t,d)=>(()=>{var c=ue(),C=c.firstChild,j=C.firstChild,u=C.nextSibling,w=u.firstChild,x=u.nextSibling,y=x.firstChild,O=y.nextSibling,B=O.firstChild;B.firstChild;var g=x.nextSibling,P=g.firstChild,k=P.nextSibling,I=k.firstChild;I.firstChild;var i=g.nextSibling,b=i.firstChild,v=b.nextSibling,V=v.firstChild;return V.firstChild,r(j,()=>t?.qty*1),r(w,()=>t?.product?.label),r(c,n(L,{}),x),r(B,()=>(t?.price*1).toFixed(2),null),r(c,n(L,{}),g),r(I,()=>(t?.price*t?.qty).toFixed(2),null),r(c,n(L,{}),i),r(V,()=>t?.salePrice,null),c})()})}}),null),N(t=>W(a,` ${Y(),"width:86vw;"} margin: 0 auto;`,t)),_})()}const Ie=async(l,s)=>{let e={params:l,data2update:s},o=T(709002);return e={...e,...o},await A(e)},pe=async l=>{let s={params:l},e=T(132002);return s={...s,...e},await A(s)},Ee=async l=>{let s=[];l.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},S=T(802002);o={...o,...S},s.push(o)}),re(s,$e)},$e=async l=>{const e=await A(l);if(e)return e};K(["click"]);export{Be as default,$e as fetchCSVInve,Ee as loadInventory,Ie as updLinkedBags};
