const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Cod6xDRi.js","assets/index-CgMuzQKX.js","assets/index-DGHHyjai.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as J,_ as K,u as Q,c as C,a as m,h as U,o as X,m as Z,d as a,e as ee,i as r,S as f,f as _,s as I,F as te,g as re,n as se,p as ae,t as u}from"./index-CgMuzQKX.js";import ne from"./InputHr-CfOUHnpj.js";import{g as le,t as A,a as $,p as ie,c as oe,f as ce,d as de}from"./Util-uEfv1z7O.js";import x from"./SVG-D9rz6ETf.js";import{l as ue}from"./handelImagesServices-Dx1bsXvu.js";import"./index-Ci0zXM0r.js";import"./browser-image-compression-BVJ4p9S0.js";var pe=u('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ge=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div></div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>'),he=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding-top:50px><div class="_dsplFlx flxWrp spaceAround centerBx"><div></div><div class="_dsplFlx bottombx"><h4> </h4><div class=vertseparator></div><h5>'),me=u("<h5>el <!> a las "),ve=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div class=" bottombx"><div class="_dsplFlx bottombx spaceAround centerBx"><h5>Estado del envio: </h5><h4></h4></div><div class=" centerBx"><h4> '),fe=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><img alt=sf style=width:320px>'),_e=u("<div> "),xe=u('<div class="icon_status centerBx">'),be=u('<div class="icon_status centerBx trackFade">'),$e=u('<div class="icon_status centerBx ">');const Se=J(()=>K(()=>import("./LoadingColorSpinner-Cod6xDRi.js"),__vite__mapDeps([0,1,2,3])));function Ye(){const[g,b]=Q(),[s,Y]=C();C({lbs:"",price:0});const[T,M]=C({}),[H,R]=m(""),[S,w]=m(!1);m();const[y,z]=m(""),[Ce,B]=m(""),[P,E]=m(""),[D,k]=m("");U(()=>{}),X(()=>{}),Z(()=>{g?.id?(k(!1),F(g?.id)):k(!0)});const W=(t,e)=>{z(e),B(t),setTimeout(()=>{B("")},300)},L=t=>{E(t),setTimeout(()=>{E("")},3e3)},F=async t=>{let e=t,n="^[0-9]{4}-[1-9]{4}";const p=new RegExp(n);let d=e.length===9&&p.test(e),o="^Y24[0-9]{6}";const c=new RegExp(o);let l=e.length===9&&c.test(e),h="^[0-9]";const i=new RegExp(h);let j=e.length>6&&e.length<11&&i.test(e),q="^SS24[0-9]{6}";const N=new RegExp(q);let V=e.length===10&&N.test(e);if(d&&e.slice(0,4),d||l||j||V){let v=await ye(e);if(v){if(v?.currentStatus==="YABA_99"&&v?.deliveryProof){let G=await ue(v?.deliveryProof);v.deliveryProofBlob=G}Y("tracking",v),w(!0),b({id:e})}}else W("","error"),M({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),L(le());k(!0)};let O=Array.from(Array(8).keys());return a(f,{get when(){return D()},get fallback(){return(()=>{var t=_e();return t.firstChild,r(t,a(Se,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=ge(),e=t.firstChild,n=e.firstChild,p=n.nextSibling,d=p.firstChild;return r(n,a(f,{get when(){return P()},get children(){var o=pe(),c=o.firstChild,l=c.nextSibling;return r(c,a(x,{get name(){return A?.[y()]?.icon},size:32,get color(){return A?.[y()]?.svg}})),r(l,()=>T?.consigneeInfo?.ybestate),_(h=>I(o,A?.[y()],h)),o}})),r(e,a(f,{get when(){return!S()},get children(){return a(ne,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return H()},placeholder:"Numero de envio ...",colors:"#2b2b2b",handleClick:R,onEnter:F})}}),p),p.$$click=()=>w(!1),r(d,()=>S()?"Rastrear otro numero de envio":"Escriba su numero de envio"),_(o=>I(n,`padding: 15px 0px; margin: 0 auto; display: ${P()?"block":"none"};`,o)),t})(),a(f,{get when(){return S()&&s?.tracking},get children(){return[(()=>{var t=he(),e=t.firstChild,n=e.firstChild,p=n.nextSibling,d=p.firstChild,o=d.firstChild,c=d.nextSibling,l=c.nextSibling;return r(e,a(te,{each:O,children:h=>$("M023009")?.statusIndex[s?.tracking?.currentStatus]!==0&&h===0?(()=>{var i=xe();return r(i,a(x,{name:"market",size:32,color:"var(--hrm-palette-neutral-variant30)"})),i})():h===$("M023009")?.statusIndex[s?.tracking?.currentStatus]?(()=>{var i=be();return r(i,a(x,{get name(){return $("M023009")?.statusListIcons?.[s?.tracking?.currentStatus]},size:32,color:"var(--background-red-ssg)"})),i})():(()=>{var i=$e();return r(i,a(x,{name:"radio_unchecked",size:16,color:"var(--hrm-palette-neutral-variant30)"})),i})()}),n),r(n,a(x,{name:"map-marker-radius-outline",size:32,get color(){return s?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--hrm-palette-neutral-variant30)"}})),r(d,()=>s?.tracking?.consigneeInfo?.ybestate,o),r(l,()=>s?.tracking?.consigneeInfo?.ybcity),_(()=>re(n,`icon_status centerBx ${s?.tracking?.currentStatus==="YABA_99"?"trackFade":""} `)),t})(),(()=>{var t=ve(),e=t.firstChild,n=e.firstChild,p=n.firstChild,d=p.nextSibling,o=n.nextSibling,c=o.firstChild;return c.firstChild,r(d,()=>g?.id),r(c,()=>$("M023009")?.statusObjDesc?.[s?.tracking?.currentStatus],null),r(o,a(f,{get when(){return s?.tracking?.deliveryTime},get children(){var l=me(),h=l.firstChild,i=h.nextSibling;return i.nextSibling,r(l,()=>ie(s?.tracking?.deliveryTime),i),r(l,()=>oe(s?.tracking?.deliveryTime),null),l}}),null),_(l=>(l=s?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)")!=null?c.style.setProperty("color",l):c.style.removeProperty("color")),t})(),a(f,{get when(){return s?.tracking?.deliveryProofBlob},get children(){var t=fe(),e=t.firstChild;return _(()=>se(e,"src",s?.tracking?.deliveryProofBlob)),t}})]}})]}})}const ye=async g=>await ke({query:"tr504009",params:{id:g}}),ke=async g=>ae()?await ce(g):(await de(g))?.data;ee(["click"]);export{Ye as default};
