const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CheckBoxSlide-DjPFOW0B.js","assets/index-DDHcSRy_.js","assets/index-mNJWtuMT.css","assets/CheckBoxSlide-uVD3DHDO.css","assets/ButonHrm-BkP9p0bQ.js","assets/SVG-B55pLqwj.js","assets/Util-DZlMHKqJ.js","assets/ButonHrm-BSeWNUGQ.css","assets/LoadingColorSpinner-CRP5t5zs.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as L,_ as F,c as X,a as j,e as Y,i as l,f,U as v,S as B,F as ee,h as te,j as q,x as se,g as re,t as w}from"./index-DDHcSRy_.js";import{g as E,f as N,O as D,o as ne,N as W,F as G,m as S,e as ae,R as ie,a as R,S as le}from"./Util-DZlMHKqJ.js";import"./DialogHRM-Brz9h3wQ.js";import{c as oe,i as H,b as C,d as I}from"./Scanning-DCy1Eb4g.js";import{OpenToast as U}from"./Toast-Dv7c-d-M.js";import"./App.module-CbHnVtRQ.js";var ce=w('<div class="_dsplFlx flxWrp spaceAround ">'),de=w('<div class="centerBx bottombx spaceAround"style=margin-top:20px>'),pe=w('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Subir Pendientes </h5></div></div><div class="_dsplFlx flxWrp spaceAround "style="padding:18px 0px 0"><div class="_dsplFlx bottombx lowbordr"><h5>Descargar Guias </h5></div></div><div class="centerBx bottombx grid2Col"></div></div><div class="_dsplFlx flxWrp spaceAround "style="padding:18px 0px 0"><div class="_dsplFlx bottombx lowbordr"><h5>Descargar Manifiestos </h5></div></div><div class="centerBx bottombx spaceAround"style=margin-top:20px>'),ue=w('<div class="centerBx bottombx "><h5> subiendo al servidor <!> / <!> '),fe=w('<div class="centerBx spaceAround"><div class="centerBx bottombx "><h5 class="">'),ge=w('<div class="centerBx bottombx "><h5> descargando guias... ');const me=L(()=>F(()=>import("./CheckBoxSlide-DjPFOW0B.js"),__vite__mapDeps([0,1,2,3]))),A=L(()=>F(()=>import("./ButonHrm-BkP9p0bQ.js"),__vite__mapDeps([4,1,2,5,6,7]))),z=L(()=>F(()=>import("./LoadingColorSpinner-CRP5t5zs.js"),__vite__mapDeps([8,1,2,9])));function Pe(r){const[s,n]=X({}),[o,i]=j(!1),[p,b]=j(0);Y(()=>{H()});let y=[43,44,45,46,47,2501];const x=async t=>{if(b(v()),v()>30){let a=4,u=Array.from(Array(a).keys()),g=Math.ceil(v()/a);const c=u.map(async d=>{let h=g*d,e=g*(d+1)-1;e>v()&&(e=v()),await S(t.slice(h,e),M)});await Promise.all(c)}else await S(t,M);C(I),b(0)},O=async t=>{G.allDocs({include_docs:!0,descending:!0},function(a,u){x(u.rows)})},M=async t=>{let a=await be(t?.doc);return G.remove(t?.doc,function(g,c){g||(console.log(" successfully removed "),C(I))}),a};let P={};const K=async t=>{let a=await ye("guia",t);P=Object.assign({},P,a)},J=async()=>{let t=[];if(D(s).map(a=>{s[a]&&t.push(a)}),i(!0),t.length>0){await S(t,K);let a=[],u=[];D(P).map(g=>{let c={...P[g]},d=c.hbls[0]?.hbl;c.id=d,c._id=d;let h=ae("hblsObjDBInd");if(!h[d])a.push(c);else{let e={key:1,_id:1,id:1,_rev:1};c._rev=h[d]._rev,ie(D(h[d]),c,h[d],e)?.hasChange&&u.push(c)}}),V(a,Q),V(u,Q),C(I),U({text:"El modo offline esta listo para escanear",timeout:2500,id:R()})}else U({text:"Debe selecionar una guia",timeout:2500,id:R()});i(!1)},Q=async t=>{W.put(t,function(u,g){u||console.log("Successfully posted")})},Z=()=>{le(),setTimeout(()=>{C(I)},600)};return(()=>{var t=pe(),a=t.firstChild,u=a.firstChild,g=u.nextSibling,c=g.nextSibling,d=a.nextSibling,h=d.nextSibling;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),l(a,f(B,{get when(){return v()>0},get children(){return f(B,{get when(){return!p()},get fallback(){return(()=>{var e=ue(),m=e.firstChild,_=m.firstChild,k=_.nextSibling,$=k.nextSibling,T=$.nextSibling;return T.nextSibling,l(e,f(z,{stroke:"rgb(200 25 60 / 1)",size:32}),m),l(m,()=>p()-v(),k),l(m,p,T),e})()},get children(){var e=ce();return l(e,f(A,{icon:"arrow_up_large",color:"#c8193c",label:"Subir pendientes",handleClick:O})),e}})}}),g),l(c,f(ee,{each:y,children:(e,m)=>(()=>{var _=fe(),k=_.firstChild,$=k.firstChild;return l(k,f(me,{get initValue(){return s?.[e]},updChange:()=>n(e,!s?.[e]),color:"var(--background-red-ssg)"}),$),l($,e),_})()})),l(t,f(B,{get when(){return!o()},get fallback(){return(()=>{var e=ge();return l(e,f(z,{stroke:"rgb(200 25 60 / 1)",size:32}),null),e})()},get children(){var e=de();return l(e,f(A,{icon:"cancel",color:"#cacaca",label:"Limpiar",handleClick:Z}),null),l(e,f(A,{icon:"arrow_down_large",color:"#c8193c",label:"Descargar",handleClick:J}),null),e}}),d),l(h,f(A,{icon:"arrow_down_large",color:"#c8193c",label:"Descargar",handleClick:he})),te(e=>{var m=q()?"86vw":"420px",_=q()?"15px 5px":"15px 25px";return m!==e.e&&((e.e=m)!=null?t.style.setProperty("width",m):t.style.removeProperty("width")),_!==e.t&&((e.t=_)!=null?t.style.setProperty("padding",_):t.style.removeProperty("padding")),e},{e:void 0,t:void 0}),t})()}const $e=r=>{let s=r,n="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const o=new RegExp(n);return s.length===13&&o.test(s)&&(s=s.slice(3,12)),s},be=async r=>{let s={};r?.params&&(s.params=r?.params),r?.data2update&&(s.data2update=r?.data2update),r?.form&&(s.form=r?.form);let n=E(r?.actionKey);return s={...s,...n},await N(s)},ye=async(r,s)=>{let n={params:{idairguide:s},fldswQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","guia","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:lastName2","consigneeInfo:ybstreet","consigneeInfo:ybstreetNo","consigneeInfo:ybbetwen1","consigneeInfo:ybbetwen2","consigneeInfo:ybreparto","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryUserId","deliveryTime","isSSG","isLMH","isPaid","hbls","noteTag","nameshipper","billedBy"]};r.split(" ").map((p,b)=>{p&&(n.params[":search"+b]=p.trim())}),n.params[":guia"]=s+"";let o=E(802001);n={...n,...o};const i=await N(n);return i?.data?.error?{}:i},he=async(r,s)=>{await oe();let n={params:{":search0":" "},fldsjQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"]};se()||(n.params.workgroup=re?.profile?.workgroup?.id+"");let o=E(703001);n={...n,...o};const i=await N(n);if(i?.error)return{};{let p=[];return D(i).map(b=>{let y=i[b];y._id=y?.ssg_manifest_key,ne.put(y,function(O,M){O||console.log("Successfully posted on manifest list")}),p.push(y)}),p}},V=async(r,s)=>{if(r.length>30){let n=10,o=Array.from(Array(n).keys()),i=Math.ceil(r.length/n);const p=o.map(async b=>{let y=i*b,x=i*(b+1)-1;x>r.length&&(x=r.length),await S(r.slice(y,x),s)});await Promise.all(p)}else await S(r,s);return H(),1},Ce=()=>new Promise((r,s)=>{W.allDocs({include_docs:!0,descending:!0},function(n,o){r(o.rows)})});export{he as LookupManifets,Pe as default,Ce as loadManifestOffline,$e as parseTrcking};
