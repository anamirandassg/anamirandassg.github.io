const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-BgridjWf.js","assets/index-CGT10uUT.js","assets/index-C1cQPolT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-DzWfk4jn.js","assets/debounces-CADX4diu.js","assets/SVG-DuL43edz.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-DTH_6eof.js","assets/ButonHrm-BdfjzuyR.js","assets/Util-D886uaAp.js","assets/ButonHrm-BSeWNUGQ.css","assets/UpdInventory-BB104W8t.js","assets/globalSignal-D56CQjAo.js","assets/DialogHRM-C6ttNAKg.js","assets/DialogHRM-V9_lZntj.css","assets/DashProducts-BUeLECwU.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InputHr-BCOyxZSv.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as p,_ as f,u as F,c as S,a as V,o as R,h as M,m as Q,i as r,d as i,f as z,e as H,t as u,S as v,q as G,F as U,s as X,k as J}from"./index-CGT10uUT.js";import{b as B,f as E,e as N,a as W,x as Y,g as K}from"./Util-D886uaAp.js";import{u as Z}from"./debounces-CADX4diu.js";import{i as ee}from"./globalSignal-D56CQjAo.js";import{OpenModal as te}from"./DialogHRM-C6ttNAKg.js";import"./index-Ci0zXM0r.js";var re=u('<div class="bottombx centerBx unit "><h5>Almacen:</h5><h4>'),ne=u('<div class="bottombx centerBx unit "><h5>Provedor:</h5><h4>'),ie=u('<div class="bottombx centerBx unit "><h5>Hbl:</h5><h4>'),se=u('<div class="icon_status centerBx">'),le=u('<div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="bottombx centerBx unit "><h5>Factura:</h5><h4></h4></div>|<div class="bottombx centerBx unit "><h5>Total:</h5><h4>$'),ae=u('<div><div><div class="bottombx centerBx unit "><h4>Productos:</h4></div><div class=hseparator>'),oe=u("<div> "),de=u('<div class="bottombx centerBx unit"><div class=unitBx><h5></h5></div><div class=tr_bar_40><h5></h5></div><div class="bottombx centerBx unit tr_bar_15"><h5>Precio:</h5><div class=unitBx><h5>$</h5></div></div><div class="bottombx centerBx unit tr_bar_15"><h5>Total:</h5><div class=unitBx><h5>$');const ce=p(()=>f(()=>import("./LoadingColorSpinner-BgridjWf.js"),__vite__mapDeps([0,1,2,3])));p(()=>f(()=>import("./DropDwnSearch-DzWfk4jn.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const j=p(()=>f(()=>import("./FlexSpace-DTH_6eof.js"),__vite__mapDeps([9,1,2]))),ue=p(()=>f(()=>import("./ButonHrm-BdfjzuyR.js"),__vite__mapDeps([10,1,2,6,7,11,12]))),_e=p(()=>f(()=>import("./UpdInventory-BB104W8t.js"),__vite__mapDeps([13,1,2,14,11,7,15,16,5,17,18,19,9])));p(()=>f(()=>import("./InputHr-BCOyxZSv.js"),__vite__mapDeps([20,1,2,21])));const he=p(()=>f(()=>import("./SVG-DuL43edz.js"),__vite__mapDeps([6,1,2,7])));function Se(){const[s,l]=F(),[e,o]=S({search:""});S();const[x,ve]=S();S();const[pe,k]=V("");Z(k,400),R(()=>{}),M(()=>{});const P=async()=>{if(s?.mId){let _={id:s?.mId,businessId:J?.profile?.businessYId},a=await be(_);o("manifestObj",a)}};Q(async()=>{P()});const L=async()=>{},T=_=>e?.manifestObj?.products.reduce((g,t)=>g+t.price*t.qty,0),q=_=>{let a={...e?.manifestObj},g={...e?.manifestObj},t={};t.id=K(),t.closeEvent=()=>{},t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=i(_e,{frm1:a,frm2:g,get refetch(){return props?.refetch}}),te(t)};return(()=>{var _=ae(),a=_.firstChild,g=a.firstChild;return g.nextSibling,r(_,i(v,{get when(){return e?.manifestObj?.invoice},get fallback(){return(()=>{var t=oe();return t.firstChild,r(t,i(ce,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){var t=le(),h=t.firstChild,b=h.firstChild,y=b.firstChild,O=y.nextSibling,m=b.nextSibling,I=m.nextSibling,$=I.firstChild,C=$.nextSibling;return C.firstChild,r(O,()=>e?.manifestObj?.invoice),r(h,i(v,{get when(){return e?.manifestObj?.store},get children(){return["|",(()=>{var n=re(),d=n.firstChild,c=d.nextSibling;return r(c,()=>W("storeGroupBy")?.[e?.manifestObj?.store]?.label),n})()]}}),m),r(h,i(v,{get when(){return e?.manifestObj?.seller},get children(){return["|",(()=>{var n=ne(),d=n.firstChild,c=d.nextSibling;return r(c,()=>e?.manifestObj?.seller),n})()]}}),m),r(h,i(v,{get when(){return e?.manifestObj?.hbl},get children(){return["|",(()=>{var n=ie(),d=n.firstChild,c=d.nextSibling;return r(c,()=>e?.manifestObj?.hbl),n})()]}}),m),r(C,()=>T()?.toFixed(2),null),r(h,i(v,{get when(){return G()},get children(){var n=se();return n.$$click=q,r(n,i(he,{name:"outline_edit",size:28,color:"var(--background-red-ssg)"})),n}}),null),r(h,i(v,{get when(){return!Y(e?.manifestObj?.linkedBags,x?.linked)},get children(){return i(ue,{color:"#c8193c",label:"updInventory",handleClick:L})}}),null),t}}),a),r(a,i(v,{get when(){return e?.manifestObj?.products},get children(){return i(U,{get each(){return e?.manifestObj?.products},children:(t,h)=>(()=>{var b=de(),y=b.firstChild,O=y.firstChild,m=y.nextSibling,I=m.firstChild,$=m.nextSibling,C=$.firstChild,n=C.nextSibling,d=n.firstChild;d.firstChild;var c=$.nextSibling,A=c.firstChild,D=A.nextSibling,w=D.firstChild;return w.firstChild,r(O,()=>t?.qty*1),r(I,()=>t?.product?.label),r(b,i(j,{}),$),r(d,()=>(t?.price*1).toFixed(2),null),r(b,i(j,{}),c),r(w,()=>(t?.price*t?.qty).toFixed(2),null),b})()})}}),null),z(t=>X(a,` ${ee(),"width:86vw;"} margin: 0 auto;`,t)),_})()}const Oe=async(s,l)=>{let e={params:s,data2update:l},o=B(709002);return e={...e,...o},await E(e)},be=async s=>{let l={params:s},e=B(132002);return l={...l,...e},await E(l)},Ie=async s=>{let l=[];s.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},x=B(802002);o={...o,...x},l.push(o)}),N(l,me)},me=async s=>{const e=await E(s);if(e)return e};H(["click"]);export{Se as default,me as fetchCSVInve,Ie as loadInventory,Oe as updLinkedBags};
