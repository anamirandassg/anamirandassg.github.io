const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CheckBoxSlide-ElX2WoO_.js","assets/index-C-1XLrnY.js","assets/index-CJxZRJNk.css","assets/CheckBoxSlide-uVD3DHDO.css","assets/ButonHrm-CfHlo3jl.js","assets/SVG-b2O7CS5i.js","assets/Util-Df9CfxGL.js","assets/ButonHrm-BSeWNUGQ.css","assets/LoadingColorSpinner-C1IaWTFV.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as O,_ as E,c as H,a as N,i,d as o,T as m,S as D,F as Z,e as J,f as q,w as X,n as Y,t as _}from"./index-C-1XLrnY.js";import{c as F,f as M,O as L,m as ee,D as G,j as B,d as te,b as R,N as se,S as re}from"./Util-Df9CfxGL.js";import"./DialogHRM-BKOGqijo.js";import{c as ae,i as ne,b as S,d as P}from"./Scanning-8mG6OULy.js";import{OpenToast as j}from"./Toast-DjPnEMIN.js";import"./App.module-CbHnVtRQ.js";var ie=_('<div class="_dsplFlx flxWrp spaceAround ">'),le=_('<div class="centerBx bottombx spaceAround"style=margin-top:20px>'),oe=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Subir Pendientes </h5></div></div><div class="_dsplFlx flxWrp spaceAround "style="padding:18px 0px 0"><div class="_dsplFlx bottombx lowbordr"><h5>Descargar Guias </h5></div></div><div class="centerBx bottombx grid2Col"></div></div><div class="_dsplFlx flxWrp spaceAround "style="padding:18px 0px 0"><div class="_dsplFlx bottombx lowbordr"><h5>Descargar Manifiestos </h5></div></div><div class="centerBx bottombx spaceAround"style=margin-top:20px>'),ce=_('<div class="centerBx bottombx "><h5> subiendo al servidor <!> / <!> '),de=_('<div class="centerBx spaceAround"><div class="centerBx bottombx "><h5 class="">'),pe=_('<div class="centerBx bottombx "><h5> descargando guias... ');const ue=O(()=>E(()=>import("./CheckBoxSlide-ElX2WoO_.js"),__vite__mapDeps([0,1,2,3]))),$=O(()=>E(()=>import("./ButonHrm-CfHlo3jl.js"),__vite__mapDeps([4,1,2,5,6,7]))),z=O(()=>E(()=>import("./LoadingColorSpinner-C1IaWTFV.js"),__vite__mapDeps([8,1,2,9])));function we(n){const[s,a]=H({}),[f,c]=N(!1),[d,b]=N(0);let y=[43,44,45,46];const Q=async t=>{if(b(m()),m()>30){let r=4,l=Array.from(Array(r).keys()),p=Math.ceil(m()/r);const w=l.map(async v=>{let A=p*v,e=p*(v+1)-1;e>m()&&(e=m()),await B(t.slice(A,e),I)});await Promise.all(w)}else await B(t,I);S(P),b(0)},C=async t=>{G.allDocs({include_docs:!0,descending:!0},function(r,l){Q(l.rows)})},I=async t=>{let r=await fe(t?.doc);return G.remove(t?.doc,function(p,w){p||(console.log(" successfully removed "),S(P))}),r};let h={};const U=async t=>{let r=await ge("guia",t);h=Object.assign({},h,r)},V=async()=>{let t=[];L(s).map(r=>{s[r]&&t.push(r)}),c(!0),t.length>0?(await B(t,U),L(h).map(r=>{let l={...h[r]};l.id=l.ssg_track_key,te("manifestByKeys")[l?.ssg_track_key]||W(h[r])}),await ne(),S(P),j({text:"El modo offline esta listo para escanear",timeout:2500,id:R()})):j({text:"Debe selecionar una guia",timeout:2500,id:R()}),c(!1)},W=async t=>{se.post(t,function(l,p){l||console.log("Successfully posted")})},K=()=>{re(),setTimeout(()=>{S(P)},600)};return(()=>{var t=oe(),r=t.firstChild,l=r.firstChild,p=l.nextSibling,w=p.nextSibling,v=r.nextSibling,A=v.nextSibling;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),i(r,o(D,{get when(){return m()>0},get children(){return o(D,{get when(){return!d()},get fallback(){return(()=>{var e=ce(),u=e.firstChild,g=u.firstChild,x=g.nextSibling,k=x.nextSibling,T=k.nextSibling;return T.nextSibling,i(e,o(z,{stroke:"rgb(200 25 60 / 1)",size:32}),u),i(u,()=>d()-m(),x),i(u,d,T),e})()},get children(){var e=ie();return i(e,o($,{icon:"arrow_up_large",color:"#c8193c",label:"Subir pendientes",handleClick:C})),e}})}}),p),i(w,o(Z,{each:y,children:(e,u)=>(()=>{var g=de(),x=g.firstChild,k=x.firstChild;return i(x,o(ue,{get initValue(){return s?.[e]},updChange:()=>a(e,!s?.[e]),color:"var(--background-red-ssg)"}),k),i(k,e),g})()})),i(t,o(D,{get when(){return!f()},get fallback(){return(()=>{var e=pe();return i(e,o(z,{stroke:"rgb(200 25 60 / 1)",size:32}),null),e})()},get children(){var e=le();return i(e,o($,{icon:"cancel",color:"#cacaca",label:"Limpiar",handleClick:K}),null),i(e,o($,{icon:"arrow_down_large",color:"#c8193c",label:"Descargar",handleClick:V}),null),e}}),v),i(A,o($,{icon:"arrow_down_large",color:"#c8193c",label:"Descargar",handleClick:me})),J(e=>{var u=q()?"86vw":"420px",g=q()?"15px 5px":"15px 25px";return u!==e.e&&((e.e=u)!=null?t.style.setProperty("width",u):t.style.removeProperty("width")),g!==e.t&&((e.t=g)!=null?t.style.setProperty("padding",g):t.style.removeProperty("padding")),e},{e:void 0,t:void 0}),t})()}const ke=n=>{let s=n,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const f=new RegExp(a);return s.length===13&&f.test(s)&&(s=s.slice(3,12)),s},fe=async n=>{let s={};n?.params&&(s.params=n?.params),n?.data2update&&(s.data2update=n?.data2update),n?.form&&(s.form=n?.form);let a=F(n?.actionKey);return s={...s,...a},await M(s)},ge=async(n,s)=>{let a={params:{idairguide:s},fldswQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","guia","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:lastName2","consigneeInfo:ybstreet","consigneeInfo:ybstreetNo","consigneeInfo:ybbetwen1","consigneeInfo:ybbetwen2","consigneeInfo:ybreparto","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryUserId","deliveryTime","isSSG","isLMH","isPaid","hbls","noteTag","nameshipper","billedBy"]};n.split(" ").map((d,b)=>{d&&(a.params[":search"+b]=d.trim())}),a.params[":guia"]=s+"";let f=F(802001);a={...a,...f};const c=await M(a);return c?.data?.error?{}:c},me=async(n,s)=>{await ae();let a={params:{":search0":" "},fldsjQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"]};X()||(a.params.workgroup=Y?.profile?.workgroup?.id+"");let f=F(703001);a={...a,...f};const c=await M(a);if(c?.error)return{};{let d=[];return L(c).map(b=>{let y=c[b];y._id=y?.ssg_manifest_key,ee.put(y,function(C,I){C||console.log("Successfully posted on manifest list")}),d.push(y)}),d}};export{me as LookupManifets,we as default,ke as parseTrcking};
