const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CheckBoxSlide-Brx0MFzj.js","assets/index-CjD_SJv6.js","assets/index-BRlA1Q7g.css","assets/CheckBoxSlide-uVD3DHDO.css","assets/ButonHrm-oe0_tTp-.js","assets/SVG-BTQp7fHh.js","assets/Util-CJwQ4eI5.js","assets/ButonHrm-BSeWNUGQ.css","assets/LoadingColorSpinner-CxI4rENH.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as Q,_ as T,c as se,a as G,d as re,i as o,e as p,a8 as f,S as E,F as ie,f as le,j as N,x as oe,g as ce,t as h,Y as U}from"./index-CjD_SJv6.js";import{g as C,f as I,O as x,I as de,X as M,e as W,m as S,T as F,W as K,G as R,a as k,Y as V,Z as z,a3 as pe,U as ue,V as ge,u as H}from"./Util-CJwQ4eI5.js";import"./DialogHRM-DL1Dh61x.js";import{a as Y,i as fe,b as be}from"./ScanningServices-B6N5JZ_M.js";import{OpenToast as P}from"./Toast-CfX-K1g6.js";import"./App.module-CbHnVtRQ.js";var me=h('<div class="_dsplFlx flxWrp spaceAround ">'),ye=h('<div class="centerBx bottombx spaceAround flxWrp"style=margin-top:20px><div style=padding:6px></div><div style=padding:6px></div><div style=padding:6px>'),he=h('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Subir Pendientes </h5></div></div><div class="_dsplFlx flxWrp spaceAround "style="padding:18px 0px 0"><div class="_dsplFlx bottombx lowbordr"><h5>Descargar Guias </h5></div></div><div class="centerBx bottombx grid2Col"></div></div><div class="_dsplFlx flxWrp spaceAround "style="padding:18px 0px 0"><div class="_dsplFlx bottombx lowbordr"><h5>'),_e=h('<div class="centerBx bottombx "><h5> subiendo al servidor <!> / <!> '),xe=h('<div class="centerBx spaceAround"><div class="centerBx bottombx "><h5 class="">'),ve=h('<div class="centerBx bottombx "><h5> descargando guias... ');const we=Q(()=>T(()=>import("./CheckBoxSlide-Brx0MFzj.js"),__vite__mapDeps([0,1,2,3]))),$=Q(()=>T(()=>import("./ButonHrm-oe0_tTp-.js"),__vite__mapDeps([4,1,2,5,6,7]))),Z=Q(()=>T(()=>import("./LoadingColorSpinner-CxI4rENH.js"),__vite__mapDeps([8,1,2,9])));function De(r){const[t,s]=se({}),[l,c]=G(!1),[u,m]=G(0),y=async()=>{let e=await F(ge,ue);H("dbScannedStore",e),U(x(e)?.length)};re(()=>{Y(),fe(),y()});let j=[2503,2504,2505,2506,2507,2508];const L=async e=>{if(m(f()),f()>30){let a=4,g=Array.from(Array(a).keys()),_=Math.ceil(f()/a);const B=g.map(async v=>{let n=_*v,i=_*(v+1)-1;i>f()&&(i=f()),await S(e.slice(n,i),O)});await Promise.all(B)}else await S(e,O);m(0)},O=async e=>{let a=W("dbScannedStore"),g=await Se(a?.[e]);return delete a[e],H("dbScannedStore",a),U(x(a)?.length),be(),g},X=async()=>{L(Object.keys(W("dbScannedStore")))};let A={};const J=async e=>{let a=await Pe("guia",e);A=Object.assign({},A,a)},ee=async()=>{let e=[];if(x(t).map(a=>{t[a]&&e.push(a)}),c(!0),e.length>0){await S(e,J);let a=await F(M,K),g=Object.assign({},a,A);R(M,K,g),P({text:"El modo offline esta listo para escanear",timeout:2500,id:k()})}else P({text:"Debe selecionar una guia",timeout:2500,id:k()});c(!1)};let D={};const te=async e=>{let a=await ke(e);D=Object.assign({},D,a)},ae=async()=>{let e=[];if(x(t).map(a=>{t[a]&&e.push(a)}),c(!0),e.length>0){await S(e,te);let a=await F(z,V),g=Object.assign({},a,D);R(z,V,g),P({text:"se descargo con exito la lista de escaneos",timeout:2500,id:k()})}else P({text:"Debe selecionar una guia",timeout:2500,id:k()});c(!1)},ne=()=>{pe(),setTimeout(()=>{Y()},600)};return(()=>{var e=he(),a=e.firstChild,g=a.firstChild,_=g.nextSibling,B=_.nextSibling,v=a.nextSibling;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),o(a,p(E,{get when(){return f()>0},get children(){return p(E,{get when(){return!u()},get fallback(){return(()=>{var n=_e(),i=n.firstChild,d=i.firstChild,b=d.nextSibling,w=b.nextSibling,q=w.nextSibling;return q.nextSibling,o(n,p(Z,{stroke:"rgb(200 25 60 / 1)",size:32}),i),o(i,()=>u()-f(),b),o(i,u,q),n})()},get children(){var n=me();return o(n,p($,{icon:"arrow_up_large",color:"#c8193c",get label(){return`Subir pendientes ${f()}`},handleClick:X})),n}})}}),_),o(B,p(ie,{each:j,children:(n,i)=>(()=>{var d=xe(),b=d.firstChild,w=b.firstChild;return o(b,p(we,{get initValue(){return t?.[n]},updChange:()=>s(n,!t?.[n]),color:"var(--background-red-ssg)"}),w),o(w,n),d})()})),o(e,p(E,{get when(){return!l()},get fallback(){return(()=>{var n=ve();return o(n,p(Z,{stroke:"rgb(200 25 60 / 1)",size:32}),null),n})()},get children(){var n=ye(),i=n.firstChild,d=i.nextSibling,b=d.nextSibling;return o(i,p($,{icon:"cancel",color:"#4a4a4a",label:"Limpiar",handleClick:ne})),o(d,p($,{icon:"arrow_down_large",color:"#c8193c",label:"Descargar Guias",handleClick:ee})),o(b,p($,{icon:"arrow_down_large",color:"#c8193c",label:"Descargar locaciones",handleClick:ae})),n}}),v),le(n=>{var i=N()?"86vw":"420px",d=N()?"15px 5px":"15px 25px";return i!==n.e&&((n.e=i)!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),d!==n.t&&((n.t=d)!=null?e.style.setProperty("padding",d):e.style.removeProperty("padding")),n},{e:void 0,t:void 0}),e})()}const Be=r=>{let t=r,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const l=new RegExp(s);return t.length===13&&l.test(t)&&(t=t.slice(3,12)),t},Se=async r=>{let t={};r?.params&&(t.params=r?.params),r?.data2update&&(t.data2update=r?.data2update),r?.form&&(t.form=r?.form);let s=C(r?.actionKey);return t={...t,...s},await I(t)},ke=async r=>{let t={params:{airguide:r,":search0":"ssg"}},s=C(815002);t={...t,...s};const l=await I(t);return l?.data?.error?{}:l},Pe=async(r,t)=>{let s={params:{idairguide:t},fldswQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","guia","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:lastName2","consigneeInfo:ybstreet","consigneeInfo:ybstreetNo","consigneeInfo:ybbetwen1","consigneeInfo:ybbetwen2","consigneeInfo:ybreparto","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryUserId","deliveryTime","isSSG","isLMH","isPaid","hbls","noteTag","nameshipper","billedBy"]};r.split(" ").map((u,m)=>{u&&(s.params[":search"+m]=u.trim())}),s.params[":guia"]=t+"";let l=C(802001);s={...s,...l};const c=await I(s);return c?.data?.error?{}:c},Ee=async(r,t)=>{let s={params:{":search0":" "},fldsjQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"]};oe()||(s.params.workgroup=ce?.profile?.workgroup?.id+"");let l=C(703001);s={...s,...l};const c=await I(s);if(c?.error)return{};{let u=[];return x(c).map(m=>{let y=c[m];y._id=y?.ssg_manifest_key,de.put(y,function(L,O){L||console.log("Successfully posted on manifest list")}),u.push(y)}),u}},Fe=()=>new Promise((r,t)=>{M.allDocs({include_docs:!0,descending:!0},function(s,l){r(l.rows)})});export{Ee as LookupManifets2,De as default,Fe as loadManifestOffline,Be as parseTrcking};
