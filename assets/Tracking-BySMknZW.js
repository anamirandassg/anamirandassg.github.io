const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DeVmoFEr.js","assets/index-C30T7obI.js","assets/index-NFdrrltd.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as K,_ as J,u as U,c as C,a as m,h as X,o as Z,m as ee,d as a,e as te,i as r,S as _,f as x,s as T,F as re,g as se,n as ae,p as ne,t as u}from"./index-C30T7obI.js";import le from"./InputHr-8Iyf_bBC.js";import{O as ie,g as oe,t as A,a as y,p as ce,c as de,b as ue,f as ge,d as pe}from"./Util-DErZaF9J.js";import b from"./SVG-CWXuJfb2.js";import{l as he}from"./handelImagesServices-B4dR-IPl.js";import"./index-Ci0zXM0r.js";var ve=u('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),fe=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div></div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>'),me=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding-top:50px><div class="_dsplFlx flxWrp spaceAround centerBx"><div></div><div class="_dsplFlx bottombx"><h4> </h4><div class=vertseparator></div><h5>'),_e=u("<h5>el <!> a las "),xe=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div class=" bottombx"><div class="_dsplFlx bottombx spaceAround centerBx"><h5>Estado del envio: </h5><h4></h4></div><div class=" centerBx"><h4> '),be=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><img alt=sf style=width:320px>'),ye=u("<div> "),Se=u('<div class="icon_status centerBx">'),$e=u('<div class="icon_status centerBx trackFade">'),ke=u('<div class="icon_status centerBx ">');const Ce=K(()=>J(()=>import("./LoadingColorSpinner-DeVmoFEr.js"),__vite__mapDeps([0,1,2,3])));function Me(){const[p,v]=U(),[s,B]=C();C({lbs:"",price:0});const[M,R]=C({}),[z,D]=m(""),[S,w]=m(!1);m();const[$,H]=m(""),[we,I]=m(""),[P,E]=m(""),[O,k]=m("");X(()=>{}),Z(()=>{}),ee(()=>{p?.id?(k(!1),F(p?.id)):k(!0)});const W=(t,e)=>{H(e),I(t),setTimeout(()=>{I("")},300)},L=t=>{E(t),setTimeout(()=>{E("")},3e3)},F=async t=>{let e=t,n="^[0-9]{4}-[1-9]{4}";const g=new RegExp(n);let d=e.length===9&&g.test(e),o="^Y24[0-9]{6}";const c=new RegExp(o);let l=e.length===9&&c.test(e),h="^[0-9]";const i=new RegExp(h);let q=e.length>6&&e.length<11&&i.test(e),Q="^SS24[0-9]{6}";const N=new RegExp(Q);let V=e.length===10&&N.test(e);if(d&&e.slice(0,4),d||l||q||V){let Y=await Ae(e),f=Y?.[ie(Y)?.[0]];if(console.log(e),console.log(f),f){if(f?.currentStatus==="YABA_99"&&f?.deliveryProof){let G=await he(f?.deliveryProof);f.deliveryProofBlob=G}B("tracking",f),w(!0),v({id:e})}}else W("","error"),R({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),L(oe());k(!0)};let j=Array.from(Array(8).keys());return a(_,{get when(){return O()},get fallback(){return(()=>{var t=ye();return t.firstChild,r(t,a(Ce,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=fe(),e=t.firstChild,n=e.firstChild,g=n.nextSibling,d=g.firstChild;return r(n,a(_,{get when(){return P()},get children(){var o=ve(),c=o.firstChild,l=c.nextSibling;return r(c,a(b,{get name(){return A?.[$()]?.icon},size:32,get color(){return A?.[$()]?.svg}})),r(l,()=>M?.consigneeInfo?.ybestate),x(h=>T(o,A?.[$()],h)),o}})),r(e,a(_,{get when(){return!S()},get children(){return a(le,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return z()},placeholder:"Numero de envio ...",colors:"#2b2b2b",handleClick:D,onEnter:F})}}),g),g.$$click=()=>w(!1),r(d,()=>S()?"Rastrear otro numero de envio":"Escriba su numero de envio"),x(o=>T(n,`padding: 15px 0px; margin: 0 auto; display: ${P()?"block":"none"};`,o)),t})(),a(_,{get when(){return S()&&s?.tracking},get children(){return[(()=>{var t=me(),e=t.firstChild,n=e.firstChild,g=n.nextSibling,d=g.firstChild,o=d.firstChild,c=d.nextSibling,l=c.nextSibling;return r(e,a(re,{each:j,children:h=>y("M023009")?.statusIndex[s?.tracking?.currentStatus]!==0&&h===0?(()=>{var i=Se();return r(i,a(b,{name:"market",size:32,color:"var(--hrm-palette-neutral-variant30)"})),i})():h===y("M023009")?.statusIndex[s?.tracking?.currentStatus]?(()=>{var i=$e();return r(i,a(b,{get name(){return y("M023009")?.statusListIcons?.[s?.tracking?.currentStatus]},size:32,color:"var(--background-red-ssg)"})),i})():(()=>{var i=ke();return r(i,a(b,{name:"radio_unchecked",size:16,color:"var(--hrm-palette-neutral-variant30)"})),i})()}),n),r(n,a(b,{name:"map-marker-radius-outline",size:32,get color(){return s?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--hrm-palette-neutral-variant30)"}})),r(d,()=>s?.tracking?.consigneeInfo?.ybestate,o),r(l,()=>s?.tracking?.consigneeInfo?.ybcity),x(()=>se(n,`icon_status centerBx ${s?.tracking?.currentStatus==="YABA_99"?"trackFade":""} `)),t})(),(()=>{var t=xe(),e=t.firstChild,n=e.firstChild,g=n.firstChild,d=g.nextSibling,o=n.nextSibling,c=o.firstChild;return c.firstChild,r(d,()=>p?.id),r(c,()=>y("M023009")?.statusObjDesc?.[s?.tracking?.currentStatus],null),r(o,a(_,{get when(){return s?.tracking?.deliveryTime},get children(){var l=_e(),h=l.firstChild,i=h.nextSibling;return i.nextSibling,r(l,()=>ce(s?.tracking?.deliveryTime),i),r(l,()=>de(s?.tracking?.deliveryTime),null),l}}),null),x(l=>(l=s?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)")!=null?c.style.setProperty("color",l):c.style.removeProperty("color")),t})(),a(_,{get when(){return s?.tracking?.deliveryProofBlob},get children(){var t=be(),e=t.firstChild;return x(()=>ae(e,"src",s?.tracking?.deliveryProofBlob)),t}})]}})]}})}const Ae=async p=>{let v={params:{idairguide:"all",":search0":p},queryString:"tracking contain :tracking",fldsQry:["agency","idairguide","currentStatus","cidentity","ssg_track_key","tracking","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryProof","deliveryTime"]},s=ue(802001);return v={...v,...s},Be(v)},Be=async p=>ne()?await ge(p):(await pe(p))?.data;te(["click"]);export{Me as default};
