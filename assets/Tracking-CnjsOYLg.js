const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DdRS_GH9.js","assets/index-CMPFS5l3.js","assets/index-CaL-WNrg.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as le,_ as ne,q as ae,c as E,a as h,b as ie,o as oe,e as ce,f as a,i as l,S as f,h as m,s as T,F as de,m as N,j as y,r as Y,k as ue,d as ge,t as p,v as pe}from"./index-CMPFS5l3.js";import he from"./InputHr-DWNR00eQ.js";import{t as z,h as ve,j as fe,a as D,g as me,f as _e,k as xe}from"./Util-7ERmh4Cp.js";import R from"./SVG-Bw-dPoFc.js";import{l as be}from"./handelImagesServices-CxXaAJtj.js";import{OpenToast as Q}from"./Toast-DS_YK2AF.js";/* empty css                */import"./browser-image-compression-BVJ4p9S0.js";var $e=p('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ye=p('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div></div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>'),Se=p('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding-top:50px><div class="_dsplFlx flxWrp spaceAround centerBx"><div>'),ke=p("<h5>el <!> a las "),Ce=p('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class=" bottombx"><div class="_dsplFlx bottombx spaceAround centerBx"><h5>Estado del envio: </h5><div class=" centerBx"><h4> </h4></div></div></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class=" bottombx"><div class="_dsplFlx bottombx spaceAround centerBx"><h5>Destino: </h5><div class=" centerBx"><div class="_dsplFlx bottombx"><h4> </h4><div class=vertseparator></div><h5>'),Ae=p('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><img alt=sf style=width:320px>'),Be=p("<div> "),we=p("<div>");const Fe=le(()=>ne(()=>import("./LoadingColorSpinner-DdRS_GH9.js"),__vite__mapDeps([0,1,2,3])));function Le(){const[i,_]=ae(),[r,V]=E();E({lbs:"",price:0});const[q,G]=E({}),[J,K]=h(""),[S,H]=h(!1);h();const[k,U]=h(""),[Ee,M]=h(""),[W,L]=h(""),[X,C]=h("");ie(()=>{}),oe(()=>{}),ce(()=>{i?.id?(C(!1),setTimeout(()=>{j(i?.id)},1600)):C(!0)});const Z=(t,e)=>{U(e),M(t),setTimeout(()=>{M("")},300)},ee=t=>{L(t),setTimeout(()=>{L("")},3e3)},j=async t=>{let e=t,n="^[0-9]{4}-[1-9]{4}";const s=new RegExp(n);let o=e?.length===9&&s.test(e),c="^Y24[0-9]{6}";const u=new RegExp(c);let x=e?.length===9&&u.test(e),b="^[0-9]";const A=new RegExp(b);let B=e?.length>6&&e?.length<11&&A.test(e),w="^SS24[0-9]{6}";const F=new RegExp(w);let $=e?.length===10&&F.test(e);if(o&&e.slice(0,4),o||x||B||$){let g=await Pe({":tracking":e,":search0":e});if(g){if(g?.currentStatus==="YABA_99"&&g?.deliveryProof){let P=await be(g?.deliveryProof);g.deliveryProofBlob=P}V("tracking",g),H(!0),_({id:e})}else Q({text:"Codigo Incorrecto",timeout:3500,theme:"red",id:D()})}else Z("","error"),G({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),ee(D()),Q({text:"Codigo Incorrecto",timeout:3500,theme:"red",id:D()});C(!0)},O=()=>Y?.store?.statusIndex?.[r?.tracking?.currentStatus],te=t=>Y?.store?.statusListIcons?.[r?.tracking?.currentStatus],re=t=>{let e=[];return Array.from(Array(10).keys())?.map(s=>{s===0&&O()!==0?e.push({icon:"market",color:"var(--hrm-palette-neutral-variant30)",class:"",size:y()?20:32}):s===O()?e.push({icon:te(),color:"var(--background-red-ssg)",class:"trackFade",size:y()?20:32}):e.push({icon:"radio_unchecked",color:"var(--hrm-palette-neutral-variant30)",class:"",size:y()?10:16})}),e};return a(f,{get when(){return X()},get fallback(){return(()=>{var t=Be();return t.firstChild,l(t,a(Fe,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=ye(),e=t.firstChild,n=e.firstChild,s=n.nextSibling,o=s.firstChild;return l(n,a(f,{get when(){return W()},get children(){var c=$e(),u=c.firstChild,x=u.nextSibling;return l(u,a(R,{get name(){return z?.[k()]?.icon},size:32,get color(){return z?.[k()]?.svg}})),l(x,()=>q?.consigneeInfo?.ybestate),m(b=>T(c,z?.[k()],b)),c}})),l(e,a(f,{get when(){return!S()},get children(){return a(he,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return J()},placeholder:"Numero de envio ...",colors:"#2b2b2b",handleClick:K,onEnter:j})}}),s),s.$$click=()=>H(!1),l(o,()=>S()?"Rastrear otro":"Numero de envio"),m(c=>T(n,`padding: 15px 0px; margin: 0 auto; display: ${W()?"block":"none"};`,c)),t})(),a(f,{get when(){return S()&&r?.tracking},get children(){return[(()=>{var t=Se(),e=t.firstChild,n=e.firstChild;return l(e,a(de,{get each(){return re()},children:s=>(()=>{var o=we();return l(o,a(R,{get name(){return s?.icon},get size(){return s?.size},get color(){return s?.color}})),m(()=>N(o,`icon_status centerBx ${s?.class?s?.class:""}`)),o})()}),n),l(n,a(R,{name:"map-marker-radius-outline",get size(){return y()?20:32},get color(){return r?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--hrm-palette-neutral-variant30)"}})),m(()=>N(n,`icon_status centerBx ${r?.tracking?.currentStatus==="YABA_99"?"trackFade":""} `)),t})(),(()=>{var t=Ce(),e=t.firstChild,n=e.firstChild,s=n.firstChild,o=s.firstChild,c=o.nextSibling,u=c.firstChild;u.firstChild;var x=e.nextSibling,b=x.firstChild,A=b.firstChild,B=A.firstChild,w=B.nextSibling,F=w.firstChild,$=F.firstChild,g=$.firstChild,P=$.nextSibling,se=P.nextSibling;return l(u,()=>Y?.store?.statusObjDesc?.[r?.tracking?.currentStatus],null),l(c,a(f,{get when(){return r?.tracking?.deliveryTime},get children(){var d=ke(),I=d.firstChild,v=I.nextSibling;return v.nextSibling,l(d,()=>ve(r?.tracking?.deliveryTime),v),l(d,()=>fe(r?.tracking?.deliveryTime),null),d}}),null),l($,()=>r?.tracking?.consigneeInfo?.ybestate,g),l(se,()=>r?.tracking?.consigneeInfo?.ybcity),m(d=>{var I=`padding: ${y()?"40px 10px":"50px"}`,v=r?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)";return d.e=T(t,I,d.e),v!==d.t&&((d.t=v)!=null?u.style.setProperty("color",v):u.style.removeProperty("color")),d},{e:void 0,t:void 0}),t})(),a(f,{get when(){return r?.tracking?.deliveryProofBlob},get children(){var t=Ae(),e=t.firstChild;return m(()=>ue(e,"src",r?.tracking?.deliveryProofBlob)),t}})]}})]}})}const Pe=async i=>Ie({params:i,fldsQry:["agency","idairguide","currentStatus","cidentity","guia","ssg_track_key","tracking","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryProof","deliveryTime"]}),Ie=async i=>{if(pe()){let _=me(9004009);return i={...i,..._},await _e(i)}else return i.query="tr504009",(await xe(i)).data};ge(["click"]);export{Le as default};
