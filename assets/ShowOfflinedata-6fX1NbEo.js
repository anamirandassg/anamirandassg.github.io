const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CheckBoxSlide-qwRvA13J.js","assets/index-Bi7WmJMv.js","assets/index-lCkr9jrN.css","assets/CheckBoxSlide-uVD3DHDO.css","assets/ButonHrm-B31-k5Bb.js","assets/SVG-t32KrDyi.js","assets/ButonHrm-BSeWNUGQ.css","assets/LoadingColorSpinner-ClZ3-B0p.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as L,_ as O,c as K,a as q,i as l,d as c,ap as m,S as I,F as H,e as Z,g as T,E as J,n as X,p as F,q as M,O as E,N as Y,t as _,ad as G,I as C,o as ee,j as R,am as te}from"./index-Bi7WmJMv.js";import"./DialogHRM-C7nnZ4rp.js";import{c as se,i as re,b as A,d as B}from"./Scanning-DPmi_jKU.js";import{OpenToast as j}from"./Toast-6yD9BVdp.js";import"./App.module-CbHnVtRQ.js";var ae=_('<div class="_dsplFlx flxWrp spaceAround ">'),ne=_('<div class="centerBx bottombx spaceAround"style=margin-top:20px>'),ie=_('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Subir Pendientes </h5></div></div><div class="_dsplFlx flxWrp spaceAround "style="padding:18px 0px 0"><div class="_dsplFlx bottombx lowbordr"><h5>Descargar Guias </h5></div></div><div class="centerBx bottombx grid2Col"></div></div><div class="_dsplFlx flxWrp spaceAround "style="padding:18px 0px 0"><div class="_dsplFlx bottombx lowbordr"><h5>Descargar Manifiestos </h5></div></div><div class="centerBx bottombx spaceAround"style=margin-top:20px>'),le=_('<div class="centerBx bottombx "><h5> subiendo al servidor <!> / <!> '),oe=_('<div class="centerBx spaceAround"><div class="centerBx bottombx "><h5 class="">'),ce=_('<div class="centerBx bottombx "><h5> descargando guias... ');const de=L(()=>O(()=>import("./CheckBoxSlide-qwRvA13J.js"),__vite__mapDeps([0,1,2,3]))),D=L(()=>O(()=>import("./ButonHrm-B31-k5Bb.js"),__vite__mapDeps([4,1,2,5,6]))),z=L(()=>O(()=>import("./LoadingColorSpinner-ClZ3-B0p.js"),__vite__mapDeps([7,1,2,8])));function he(n){const[s,a]=K({}),[f,o]=q(!1),[d,b]=q(0);let y=[42,43,44,45];const Q=async t=>{if(b(m()),m()>30){let r=4,i=Array.from(Array(r).keys()),p=Math.ceil(m()/r);const w=i.map(async v=>{let $=p*v,e=p*(v+1)-1;e>m()&&(e=m()),await C(t.slice($,e),P)});await Promise.all(w)}else await C(t,P);A(B),b(0)},S=async t=>{G.allDocs({include_docs:!0,descending:!0},function(r,i){Q(i.rows)})},P=async t=>{let r=await pe(t?.doc);return G.remove(t?.doc,function(p,w){p||(console.log(" successfully removed "),A(B))}),r};let h={};const U=async t=>{let r=await ue("guia",t);h=Object.assign({},h,r)},V=async()=>{let t=[];E(s).map(r=>{s[r]&&t.push(r)}),o(!0),t.length>0?(await C(t,U),E(h).map(r=>{let i={...h[r]};i.id=i.ssg_track_key,ee("manifestByKeys")[i?.ssg_track_key]||W(h[r])}),await re(),A(B),j({text:"El modo offline esta listo para escanear",timeout:2500,id:R()})):j({text:"Debe selecionar una guia",timeout:2500,id:R()}),o(!1)},W=async t=>{te.post(t,function(i,p){i||console.log("Successfully posted")})};return(()=>{var t=ie(),r=t.firstChild,i=r.firstChild,p=i.nextSibling,w=p.nextSibling,v=r.nextSibling,$=v.nextSibling;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),l(r,c(I,{get when(){return m()>0},get children(){return c(I,{get when(){return!d()},get fallback(){return(()=>{var e=le(),u=e.firstChild,g=u.firstChild,x=g.nextSibling,k=x.nextSibling,N=k.nextSibling;return N.nextSibling,l(e,c(z,{stroke:"rgb(200 25 60 / 1)",size:32}),u),l(u,()=>d()-m(),x),l(u,d,N),e})()},get children(){var e=ae();return l(e,c(D,{icon:"arrow_up_large",color:"#c8193c",label:"Subir pendientes",handleClick:S})),e}})}}),p),l(w,c(H,{each:y,children:(e,u)=>(()=>{var g=oe(),x=g.firstChild,k=x.firstChild;return l(x,c(de,{get initValue(){return s?.[e]},updChange:()=>a(e,!s?.[e]),color:"var(--background-red-ssg)"}),k),l(k,e),g})()})),l(t,c(I,{get when(){return!f()},get fallback(){return(()=>{var e=ce();return l(e,c(z,{stroke:"rgb(200 25 60 / 1)",size:32}),null),e})()},get children(){var e=ne();return l(e,c(D,{icon:"arrow_down_large",color:"#c8193c",label:"Descargar",handleClick:V})),e}}),v),l($,c(D,{icon:"arrow_down_large",color:"#c8193c",label:"Descargar",handleClick:fe})),Z(e=>{var u=T()?"86vw":"420px",g=T()?"15px 5px":"15px 25px";return u!==e.e&&((e.e=u)!=null?t.style.setProperty("width",u):t.style.removeProperty("width")),g!==e.t&&((e.t=g)!=null?t.style.setProperty("padding",g):t.style.removeProperty("padding")),e},{e:void 0,t:void 0}),t})()}const ve=n=>{let s=n,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const f=new RegExp(a);return s.length===13&&f.test(s)&&(s=s.slice(3,12)),s},pe=async n=>{let s={};n?.params&&(s.params=n?.params),n?.data2update&&(s.data2update=n?.data2update),n?.form&&(s.form=n?.form);let a=F(n?.actionKey);return s={...s,...a},await M(s)},ue=async(n,s)=>{let a={params:{idairguide:s},fldswQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","guia","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:lastName2","consigneeInfo:ybstreet","consigneeInfo:ybstreetNo","consigneeInfo:ybbetwen1","consigneeInfo:ybbetwen2","consigneeInfo:ybreparto","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryUserId","deliveryTime","isSSG","isLMH","isPaid","hbls","noteTag","nameshipper","billedBy"]};n.split(" ").map((d,b)=>{d&&(a.params[":search"+b]=d.trim())}),a.params[":guia"]=s+"";let f=F(802001);a={...a,...f};const o=await M(a);return o?.data?.error?{}:o},fe=async(n,s)=>{await se();let a={params:{":search0":" "},fldsjQry:["createDate","linkedUser","status","name","city","province","workgroup","ssg_manifest_key","isPending"]};J()||(a.params.workgroup=X?.profile?.workgroup?.id+"");let f=F(703001);a={...a,...f};const o=await M(a);if(o?.error)return{};{let d=[];return E(o).map(b=>{let y=o[b];y._id=y?.ssg_manifest_key,Y.put(y,function(S,P){S||console.log("Successfully posted on manifest list")}),d.push(y)}),d}};export{fe as LookupManifets,he as default,ve as parseTrcking};
