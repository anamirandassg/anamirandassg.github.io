const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-C6ROFSSp.js","assets/index-Do4nhdU0.js","assets/index-C1cQPolT.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as te,_ as re,u as se,c as k,a as m,h as ne,o as ae,m as le,d as o,e as ie,i as n,S as v,f as _,s as z,F as oe,g as R,n as ce,p as de,t as h}from"./index-Do4nhdU0.js";import ue from"./InputHr-Bx1C19XD.js";import{O as ge,g as C,t as A,p as pe,c as he,b as me,f as fe,d as ve}from"./Util-D886uaAp.js";import w from"./SVG-1hx_1_9D.js";import{l as _e}from"./handelImagesServices-BF_k9_pF.js";import{m as B}from"./globalSignal-DbwDqxNx.js";import{OpenToast as D}from"./Toast-BG6UuY1Q.js";import"./index-Ci0zXM0r.js";import"./browser-image-compression-BVJ4p9S0.js";var xe=h('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),be=h('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div></div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>'),ye=h('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding-top:50px><div class="_dsplFlx flxWrp spaceAround centerBx"><div></div><div class="_dsplFlx bottombx"><h4> </h4><div class=vertseparator></div><h5>'),Se=h("<h5>el <!> a las "),$e=h('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div class=" bottombx"><div class="_dsplFlx bottombx spaceAround centerBx"><h5>Estado del envio: </h5><h4></h4></div><div class=" centerBx"><h4> '),ke=h('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><img alt=sf style=width:320px>'),Ce=h("<div> "),Ae=h("<div>");const we=te(()=>re(()=>import("./LoadingColorSpinner-C6ROFSSp.js"),__vite__mapDeps([0,1,2,3])));function Le(){const[l,x]=se(),[r,H]=k();k({lbs:"",price:0});const[O,L]=k({}),[M,W]=m(""),[b,P]=m(!1);m();const[y,j]=m(""),[Ee,E]=m(""),[F,I]=m(""),[Q,S]=m("");ne(()=>{}),ae(()=>{}),le(()=>{l?.id?(S(!1),$(l?.id),setTimeout(()=>{$(l?.id)},2600)):S(!0)});const q=(t,e)=>{j(e),E(t),setTimeout(()=>{E("")},300)},N=t=>{I(t),setTimeout(()=>{I("")},3e3)},$=async t=>{let e=t,s="^[0-9]{4}-[1-9]{4}";const g=new RegExp(s);let u=e.length===9&&g.test(e),i="^Y24[0-9]{6}";const c=new RegExp(i);let a=e.length===9&&c.test(e),d="^[0-9]";const p=new RegExp(d);let J=e.length>6&&e.length<11&&p.test(e),U="^SS24[0-9]{6}";const X=new RegExp(U);let Z=e.length===10&&X.test(e);if(u&&e.slice(0,4),u||a||J||Z){let Y=await Be(e),f=Y?.[ge(Y)?.[0]];if(f){if(f?.currentStatus==="YABA_99"&&f?.deliveryProof){let ee=await _e(f?.deliveryProof);f.deliveryProofBlob=ee}H("tracking",f),P(!0),x({id:e})}else D({text:"Codigo Incorrecto",timeout:3500,theme:"red",id:C()})}else q("","error"),L({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),N(C()),D({text:"Codigo Incorrecto",timeout:3500,theme:"red",id:C()});S(!0)},T=()=>B?.store?.statusIndex?.[r?.tracking?.currentStatus],V=t=>B?.store?.statusListIcons?.[r?.tracking?.currentStatus],G=t=>{let e=[];return K?.map(s=>{s===0&&T()!==0?e.push({icon:"market",color:"var(--hrm-palette-neutral-variant30)",class:"",size:32}):s===T()?e.push({icon:V(),color:"var(--background-red-ssg)",class:"trackFade",size:32}):e.push({icon:"radio_unchecked",color:"var(--hrm-palette-neutral-variant30)",class:"",size:16})}),e};let K=Array.from(Array(10).keys());return o(v,{get when(){return Q()},get fallback(){return(()=>{var t=Ce();return t.firstChild,n(t,o(we,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=be(),e=t.firstChild,s=e.firstChild,g=s.nextSibling,u=g.firstChild;return n(s,o(v,{get when(){return F()},get children(){var i=xe(),c=i.firstChild,a=c.nextSibling;return n(c,o(w,{get name(){return A?.[y()]?.icon},size:32,get color(){return A?.[y()]?.svg}})),n(a,()=>O?.consigneeInfo?.ybestate),_(d=>z(i,A?.[y()],d)),i}})),n(e,o(v,{get when(){return!b()},get children(){return o(ue,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return M()},placeholder:"Numero de envio ...",colors:"#2b2b2b",handleClick:W,onEnter:$})}}),g),g.$$click=()=>P(!1),n(u,()=>b()?"Rastrear otro numero de envio":"Escriba su numero de envio"),_(i=>z(s,`padding: 15px 0px; margin: 0 auto; display: ${F()?"block":"none"};`,i)),t})(),o(v,{get when(){return b()&&r?.tracking},get children(){return[(()=>{var t=ye(),e=t.firstChild,s=e.firstChild,g=s.nextSibling,u=g.firstChild,i=u.firstChild,c=u.nextSibling,a=c.nextSibling;return n(e,o(oe,{get each(){return G()},children:d=>(()=>{var p=Ae();return n(p,o(w,{get name(){return d?.icon},get size(){return d?.size},get color(){return d?.color}})),_(()=>R(p,`icon_status centerBx ${d?.class?d?.class:""}`)),p})()}),s),n(s,o(w,{name:"map-marker-radius-outline",size:32,get color(){return r?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--hrm-palette-neutral-variant30)"}})),n(u,()=>r?.tracking?.consigneeInfo?.ybestate,i),n(a,()=>r?.tracking?.consigneeInfo?.ybcity),_(()=>R(s,`icon_status centerBx ${r?.tracking?.currentStatus==="YABA_99"?"trackFade":""} `)),t})(),(()=>{var t=$e(),e=t.firstChild,s=e.firstChild,g=s.firstChild,u=g.nextSibling,i=s.nextSibling,c=i.firstChild;return c.firstChild,n(u,()=>l?.id),n(c,()=>B?.store?.statusObjDesc?.[r?.tracking?.currentStatus],null),n(i,o(v,{get when(){return r?.tracking?.deliveryTime},get children(){var a=Se(),d=a.firstChild,p=d.nextSibling;return p.nextSibling,n(a,()=>pe(r?.tracking?.deliveryTime),p),n(a,()=>he(r?.tracking?.deliveryTime),null),a}}),null),_(a=>(a=r?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)")!=null?c.style.setProperty("color",a):c.style.removeProperty("color")),t})(),o(v,{get when(){return r?.tracking?.deliveryProofBlob},get children(){var t=ke(),e=t.firstChild;return _(()=>ce(e,"src",r?.tracking?.deliveryProofBlob)),t}})]}})]}})}const Be=async l=>Pe({params:{idairguide:"all",":search0":l},queryString:"tracking contain :tracking",fldsQry:["agency","idairguide","currentStatus","cidentity","ssg_track_key","tracking","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryProof","deliveryTime"]}),Pe=async l=>{if(de()){let x=me(802001);return l={...l,...x},await fe(l)}else return l.query="tr504009",await ve(l)};ie(["click"]);export{Le as default};
