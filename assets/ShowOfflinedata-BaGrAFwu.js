const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CheckBoxSlide-OsiQbuk4.js","assets/index-DJKl8WNG.js","assets/index-lCkr9jrN.css","assets/CheckBoxSlide-uVD3DHDO.css","assets/ButonHrm-Dyl11UFc.js","assets/SVG-C47CCLgn.js","assets/ButonHrm-BSeWNUGQ.css","assets/LoadingColorSpinner-Cx6_GSZO.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as S,_ as $,c as q,a as I,i as s,d as c,aB as h,S as x,F as z,e as G,g as B,t as b,ab as O,O as A,o as V,j,ad as K,p as F,q as L}from"./index-DJKl8WNG.js";import{CloseModal as W}from"./DialogHRM-DFKWnIeT.js";import{i as H,b as w,c as P}from"./Scanning-CaFGjxCj.js";import{OpenToast as U}from"./Toast-DJ8KZrku.js";import"./App.module-CbHnVtRQ.js";var Z=b('<div class="_dsplFlx flxWrp spaceAround ">'),J=b('<div class="centerBx bottombx spaceAround"style=margin-top:20px><div style=padding:1px>'),X=b('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Subir Pendientes </h5></div></div><div class="_dsplFlx flxWrp spaceAround "style="padding:18px 0px 0"><div class="_dsplFlx bottombx lowbordr"><h5>Descargar Guias </h5></div></div><div class="centerBx bottombx grid2Col">'),Y=b('<div class="centerBx bottombx "><h5> subiendo al servidor <!> / <!> '),ee=b('<div class="centerBx spaceAround"><div class="centerBx bottombx "><h5 class="">'),te=b('<div class="centerBx bottombx "><h5> descargando guias... ');const ne=S(()=>$(()=>import("./CheckBoxSlide-OsiQbuk4.js"),__vite__mapDeps([0,1,2,3]))),k=S(()=>$(()=>import("./ButonHrm-Dyl11UFc.js"),__vite__mapDeps([4,1,2,5,6]))),E=S(()=>$(()=>import("./LoadingColorSpinner-Cx6_GSZO.js"),__vite__mapDeps([7,1,2,8])));function de(r){const[t,l]=q({}),[u,f]=I(!1),[m,_]=I(0),D=()=>{W(r?.modalId)};let N=[42,43,44,45];const T=async n=>{_(h());const a=n.map(async o=>{await re(o?.doc),O.remove(o?.doc,function(p,e){p||(console.log("dbScanned successfully removed "),w(P))})});await Promise.all(a),w(P),_(0)},Q=async n=>{O.allDocs({include_docs:!0,descending:!0},function(a,o){T(o.rows)})},M=async()=>{let n=A(t);f(!0);let a={};const o=n.map(async d=>{let p=await ae("guia",d);a=Object.assign({},a,p)});await Promise.all(o),A(a).map(d=>{let p={...a[d]};p.id=p.ssg_track_key,V("manifestByKeys")[p?.ssg_track_key]||R(a[d])}),await H(),w(P),U({text:"El modo offline esta listo para escanear",timeout:2500,id:j()}),f(!1)},R=async n=>{K.post(n,function(o,d){o||console.log("Successfully posted")})};return(()=>{var n=X(),a=n.firstChild,o=a.firstChild,d=o.nextSibling,p=d.nextSibling;return n.style.setProperty("max-height","80vh"),n.style.setProperty("overflow","auto"),n.style.setProperty("background","#ffffff"),n.style.setProperty("border-radius","13"),s(a,c(x,{get when(){return h()>0},get children(){return c(x,{get when(){return!m()},get fallback(){return(()=>{var e=Y(),i=e.firstChild,g=i.firstChild,y=g.nextSibling,v=y.nextSibling,C=v.nextSibling;return C.nextSibling,s(e,c(E,{stroke:"rgb(200 25 60 / 1)",size:32}),i),s(i,()=>m()-h(),y),s(i,m,C),e})()},get children(){var e=Z();return s(e,c(k,{icon:"arrow_up_large",color:"#c8193c",label:"Subir pendientes",handleClick:Q})),e}})}}),d),s(p,c(z,{each:N,children:(e,i)=>(()=>{var g=ee(),y=g.firstChild,v=y.firstChild;return s(y,c(ne,{get initValue(){return t?.[e]},updChange:()=>l(e,!t?.[e]),color:"var(--background-red-ssg)"}),v),s(v,e),g})()})),s(n,c(x,{get when(){return!u()},get fallback(){return(()=>{var e=te();return s(e,c(E,{stroke:"rgb(200 25 60 / 1)",size:32}),null),e})()},get children(){var e=J(),i=e.firstChild;return s(e,c(k,{icon:"cancel",color:"#7d7d7d",label:"Cancelar",handleClick:D}),i),s(e,c(k,{icon:"arrow_down_large",color:"#c8193c",label:"Descargar",handleClick:M}),null),e}}),null),G(e=>{var i=B()?"86vw":"420px",g=B()?"15px 5px":"15px 25px";return i!==e.e&&((e.e=i)!=null?n.style.setProperty("width",i):n.style.removeProperty("width")),g!==e.t&&((e.t=g)!=null?n.style.setProperty("padding",g):n.style.removeProperty("padding")),e},{e:void 0,t:void 0}),n})()}const pe=r=>{let t=r,l="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const u=new RegExp(l);return t.length===13&&u.test(t)&&(t=t.slice(3,12)),t},re=async r=>{let t={};r?.params&&(t.params=r?.params),r?.data2update&&(t.data2update=r?.data2update),r?.form&&(t.form=r?.form);let l=F(r?.actionKey);return t={...t,...l},await L(t)},ae=async(r,t)=>{let l={params:{idairguide:"all"},fldswQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","guia","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:lastName2","consigneeInfo:ybstreet","consigneeInfo:ybstreetNo","consigneeInfo:ybbetwen1","consigneeInfo:ybbetwen2","consigneeInfo:ybreparto","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryUserId","deliveryTime","isSSG","isLMH","isPaid","hbls","noteTag","nameshipper","billedBy"]};r.split(" ").map((m,_)=>{m&&(l.params[":search"+_]=m.trim())}),l.params[":guia"]=t+"";let u=F(802001);l={...l,...u};const f=await L(l);return f?.data?.error?{}:f};export{de as default,pe as parseTrcking};
