const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DfWzEOkU.js","assets/index-BRFxLudr.js","assets/index-BmzAZVve.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as ne,_ as ae,u as ie,c as Y,a as h,j as oe,o as ce,n as de,d as a,i as s,S as f,e as m,s as z,F as ue,f as N,g as y,p as D,q as ge,h as pe,t as p,r as he}from"./index-BRFxLudr.js";import ve from"./InputHr-CU42mU88.js";import{t as R,p as fe,c as me,O as _e,g as H,b as xe,f as be,d as $e}from"./Util-D-2Q9NLa.js";import M from"./SVG-BxnnaVKE.js";import{l as ye}from"./handelImagesServices-BdMWhNZ2.js";import{OpenToast as Q}from"./Toast-DYBFY36v.js";import"./browser-image-compression-BVJ4p9S0.js";var Se=p('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ke=p('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div></div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>'),Ce=p('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding-top:50px><div class="_dsplFlx flxWrp spaceAround centerBx"><div>'),Ae=p("<h5>el <!> a las "),Be=p('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class=" bottombx"><div class="_dsplFlx bottombx spaceAround centerBx"><h5>Estado del envio: </h5><div class=" centerBx"><h4> </h4></div></div></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class=" bottombx"><div class="_dsplFlx bottombx spaceAround centerBx"><h5>Destino: </h5><div class=" centerBx"><div class="_dsplFlx bottombx"><h4> </h4><div class=vertseparator></div><h5>'),we=p('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><img alt=sf style=width:320px>'),Fe=p("<div> "),Pe=p("<div>");const Ie=ne(()=>ae(()=>import("./LoadingColorSpinner-DfWzEOkU.js"),__vite__mapDeps([0,1,2,3])));function Le(){const[i,_]=ie(),[r,V]=Y();Y({lbs:"",price:0});const[G,K]=Y({}),[J,U]=h(""),[k,O]=h(!1);h();const[C,X]=h(""),[Ye,W]=h(""),[L,j]=h(""),[Z,A]=h("");oe(()=>{}),ce(()=>{}),de(()=>{i?.id?(A(!1),B(i?.id),setTimeout(()=>{B(i?.id)},2600)):A(!0)});const ee=(t,e)=>{X(e),W(t),setTimeout(()=>{W("")},300)},te=t=>{j(t),setTimeout(()=>{j("")},3e3)},B=async t=>{let e=t,l="^[0-9]{4}-[1-9]{4}";const n=new RegExp(l);let o=e.length===9&&n.test(e),c="^Y24[0-9]{6}";const u=new RegExp(c);let x=e.length===9&&u.test(e),b="^[0-9]";const w=new RegExp(b);let F=e.length>6&&e.length<11&&w.test(e),P="^SS24[0-9]{6}";const I=new RegExp(P);let $=e.length===10&&I.test(e);if(o&&e.slice(0,4),o||x||F||$){let S=await Ee(e),g=S?.[_e(S)?.[0]];if(g){if(g?.currentStatus==="YABA_99"&&g?.deliveryProof){let E=await ye(g?.deliveryProof);g.deliveryProofBlob=E}V("tracking",g),O(!0),_({id:e})}else Q({text:"Codigo Incorrecto",timeout:3500,theme:"red",id:H()})}else ee("","error"),K({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),te(H()),Q({text:"Codigo Incorrecto",timeout:3500,theme:"red",id:H()});A(!0)},q=()=>D?.store?.statusIndex?.[r?.tracking?.currentStatus],re=t=>D?.store?.statusListIcons?.[r?.tracking?.currentStatus],se=t=>{let e=[];return le?.map(l=>{l===0&&q()!==0?e.push({icon:"market",color:"var(--hrm-palette-neutral-variant30)",class:"",size:y()?20:32}):l===q()?e.push({icon:re(),color:"var(--background-red-ssg)",class:"trackFade",size:y()?20:32}):e.push({icon:"radio_unchecked",color:"var(--hrm-palette-neutral-variant30)",class:"",size:y()?10:16})}),e};let le=Array.from(Array(10).keys());return a(f,{get when(){return Z()},get fallback(){return(()=>{var t=Fe();return t.firstChild,s(t,a(Ie,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=ke(),e=t.firstChild,l=e.firstChild,n=l.nextSibling,o=n.firstChild;return s(l,a(f,{get when(){return L()},get children(){var c=Se(),u=c.firstChild,x=u.nextSibling;return s(u,a(M,{get name(){return R?.[C()]?.icon},size:32,get color(){return R?.[C()]?.svg}})),s(x,()=>G?.consigneeInfo?.ybestate),m(b=>z(c,R?.[C()],b)),c}})),s(e,a(f,{get when(){return!k()},get children(){return a(ve,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return J()},placeholder:"Numero de envio ...",colors:"#2b2b2b",handleClick:U,onEnter:B})}}),n),n.$$click=()=>O(!1),s(o,()=>k()?"Rastrear otro":"Numero de envio"),m(c=>z(l,`padding: 15px 0px; margin: 0 auto; display: ${L()?"block":"none"};`,c)),t})(),a(f,{get when(){return k()&&r?.tracking},get children(){return[(()=>{var t=Ce(),e=t.firstChild,l=e.firstChild;return s(e,a(ue,{get each(){return se()},children:n=>(()=>{var o=Pe();return s(o,a(M,{get name(){return n?.icon},get size(){return n?.size},get color(){return n?.color}})),m(()=>N(o,`icon_status centerBx ${n?.class?n?.class:""}`)),o})()}),l),s(l,a(M,{name:"map-marker-radius-outline",get size(){return y()?20:32},get color(){return r?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--hrm-palette-neutral-variant30)"}})),m(()=>N(l,`icon_status centerBx ${r?.tracking?.currentStatus==="YABA_99"?"trackFade":""} `)),t})(),(()=>{var t=Be(),e=t.firstChild,l=e.firstChild,n=l.firstChild,o=n.firstChild,c=o.nextSibling,u=c.firstChild;u.firstChild;var x=e.nextSibling,b=x.firstChild,w=b.firstChild,F=w.firstChild,P=F.nextSibling,I=P.firstChild,$=I.firstChild,S=$.firstChild,g=$.nextSibling,E=g.nextSibling;return s(u,()=>D?.store?.statusObjDesc?.[r?.tracking?.currentStatus],null),s(c,a(f,{get when(){return r?.tracking?.deliveryTime},get children(){var d=Ae(),T=d.firstChild,v=T.nextSibling;return v.nextSibling,s(d,()=>fe(r?.tracking?.deliveryTime),v),s(d,()=>me(r?.tracking?.deliveryTime),null),d}}),null),s($,()=>r?.tracking?.consigneeInfo?.ybestate,S),s(E,()=>r?.tracking?.consigneeInfo?.ybcity),m(d=>{var T=`padding: ${y()?"40px 10px":"50px"}`,v=r?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)";return d.e=z(t,T,d.e),v!==d.t&&((d.t=v)!=null?u.style.setProperty("color",v):u.style.removeProperty("color")),d},{e:void 0,t:void 0}),t})(),a(f,{get when(){return r?.tracking?.deliveryProofBlob},get children(){var t=we(),e=t.firstChild;return m(()=>ge(e,"src",r?.tracking?.deliveryProofBlob)),t}})]}})]}})}const Ee=async i=>Te({params:{idairguide:"all",":search0":i},queryString:"tracking contain :tracking",fldsQry:["agency","idairguide","currentStatus","cidentity","ssg_track_key","tracking","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryProof","deliveryTime"]}),Te=async i=>{if(he()){let _=xe(802001);return i={...i,..._},await be(i)}else return i.query="tr504009",await $e(i)};pe(["click"]);export{Le as default};
