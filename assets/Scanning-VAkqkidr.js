const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CAKwlgPS.js","assets/index-QyFZRsay.js","assets/index-BRlA1Q7g.css","assets/Util-84vxEF7d.js","assets/FlexSpace-CxbxncVK.js","assets/DropDwnSearch-C7drp5vq.js","assets/debounces-CPySIorQ.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-D7FmF5nl.js","assets/html5-qrcode-scanner-CJFMvONd.js","assets/Toast-DA0Z0m64.js","assets/Toast-DLpFKn-Q.css","assets/ShowSSG-B_lMpTTD.js","assets/DialogHRM-CZlDCplu.js","assets/DialogHRM-V9_lZntj.css","assets/ShowScanAlert-zimSCGT3.js","assets/ShowQRPrintLabel-Bikis3Zu.js","assets/fontkit.es-DqBWNyQn.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-IUGNA4E5.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ScanningManual-CpZFaOXh.js","assets/LoadingColorSpinner-CtccZnzM.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{X as M,g as T,J as ie,A as V,Y as oe,c as X,l as y,_ as S,a as A,b as le,o as ce,d as de,i as l,e as o,Q as W,f as I,z as ge,U as ue,V as z,S as Q,F as be,m as H,j as q,h as fe,t as v,W as pe,Z as _e,O as ye}from"./index-QyFZRsay.js";import{s as Se}from"./App.module-CbHnVtRQ.js";import{e as u,u as g,g as N,f as ve,a as me,S as C,T as F,U as P,V as Z,W as U,O as B,X as he,Y as ke,Z as Le,G as Y,F as xe}from"./Util-84vxEF7d.js";import"./Toast-DA0Z0m64.js";let we=[400,300,400,300,400],O=[300,80,300,80,300,80,300];const De=e=>{e.split("-").length>3&&(e=e.split("-").join("")),e?.split("/")?.length>=5&&(e=e?.split("/")?.[3]),e=e.split(",")?.[0]?.trim(),e=e.split("'").join("-"),e=e.split(",").join("-"),e=e.split(";").join("-");let t=e.split("/")?.[0];return t.indexOf("230")>=0&&(t="230"+(t.split("230")?.[1]).slice(0,6)),t.indexOf("231")>=0&&(t="231"+(t.split("231")?.[1]).slice(0,5)),{params:{":search0":t},code:1}},et=async(e,a)=>{let t=De(e),n={timeStamp:new Date().getTime(),latitude:M?.latitude,longitude:M?.longitude,statusId:a,userId:T?.profile?.userId,userName:T?.profile?.name};if(a&&t?.params)return await Ie(t.params,n);{let s=t?.txt||t?.params?.[":search0"];return navigator.vibrate(O),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:s}}}}}},Ie=async(e,a)=>{let t=null;if(ie()){let n=u("manifestByHbls")?.[e?.[":search0"]],s=u("manifestByKeys")?.[n];if(!s){let r={consigneeInfo:{ybcity:"Codigo no encontrado",ybestate:"actualice las guias sin coneccion"}};return navigator.vibrate(O),{error:{alert:"error",color:"rgb(200 25 60)",scanData:r}}}t=Be(s,a)}else t=await $e(e,a);if(t?.code===203||t?.code===303)return navigator.vibrate(we),{error:{alert:"warning",color:"#FF6F1D",scanData:t.data}};if(t?.code===200){navigator.vibrate(500);let n={...t.data};return n.tracking=e?.[":search0"],n.timeStamp=new Date().getTime(),ae([...$(),n]),{error:{alert:"success",color:"#0f5223ff",scanData:t.data}}}else if(!t||t?.error){let n={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(O),{error:{alert:"error",color:"rgb(200 25 60)",scanData:n}}}},Be=(e,a)=>{let t={currentStatus:a?.statusId};if(e?.isSSG&&V?.roles?.SSG?.isActive,!V?.roles?.[e?.consigneeInfo?.ybestate]?.isActive)return{code:303,data:{ybestate:"Zona incorrecta",bagnumber:e?.bagnumber}};if(u("ScannedLocByKey")?.[e?.ssg_track_key]?.statusId===a.statusId)return{code:203,data:{consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate,bagnumber:e?.bagnumber}}};let n={idairguide:e?.idairguide,city:e?.consigneeInfo?.ybcity,estate:e?.consigneeInfo?.estate,consigneeInfo:{ybestate:e?.consigneeInfo?.ybestate,ybcity:e?.consigneeInfo?.ybcity},bagnumber:e?.bagnumber,isSSG:e?.isSSG},s={...a};s.ssg_track_key=e?.ssg_track_key,s.ssg_scan_key=Le();let r={form:s,itmN:n,params:{airguide:e?.guia},actionKey:815005};Ee(r);let b={...s};Ae(b);let L={...u("ScannedLocByKey")};return L[e?.ssg_track_key]=s,g("ScannedLocByKey",L),{code:200,data:{...n,...t}}},$e=async(e,a)=>{let t={params:e,form:a},n=N(802001);return n=N(802008),t={...t,...n},(await ve(t))?.data};let j=0;const Ce=()=>{j+450>new Date().getTime()&&Y(U,Z,u("ScannedLocList"))},Ee=async e=>{j=new Date().getTime();let a={...u("ScannedLocList")};a[me()]=e,g("ScannedLocList",a),setTimeout(()=>{Ce()},500)},Oe=()=>{j+450>new Date().getTime()&&Y(P,F,u("ScannedList"))},Ae=async e=>{new Date().getTime();let a=await C(P,F),t=a||{};t[e?.ssg_scan_key]=e,setTimeout(()=>{Oe()},500)},Fe=async()=>{let e=await C(U,Z);Pe(e)},Pe=async e=>{let a={};e&&B(e)?.map(t=>{let n=e[t],s=n?.ssg_track_key,r=n?.data2update?.currentStatus;a[s]||(a[s]={}),a[s][r]||(a[s][r]=1)}),g("alredyScan",a),je(),oe(B(e)?.length)},J=async()=>{let e=await C(ke,he),a={},t={},n={};return e&&B(e)?.map(s=>{let r=e?.[s];r?.hbls?.map(b=>{t[b?.hbl]||(t[b?.hbl]=r?.ssg_track_key,n[b?.hbl]=r)}),a[r?.ssg_track_key]||(a[r?.ssg_track_key]=r,a[r?.ssg_track_key].key=r?.key)}),g("manifestByKeys",a),g("manifestByHbls",t),g("hblsObjDBInd",n),a},je=async()=>{await ee()},tt=async()=>{await ee(),J()},ee=async()=>{let e=await C(P,F),a={};return B(e)?.map(t=>{let n=e[t],s=n?.ssg_track_key;a[s]?a[s]?.timeStamp<n?.timeStamp&&(a[s]=n):a[s]=n}),g("ScannedLocList",e),g("ScannedLocByKey",a),e};var Ke=v('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),Re=v('<div class="centerBx100 ">'),Ge=v('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),Me=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),Te=v("<div class=loader>Loading..."),Ve=v('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[We,ze]=X(),E=y(()=>S(()=>import("./SVG-CAKwlgPS.js"),__vite__mapDeps([0,1,2,3]))),Qe=y(()=>S(()=>import("./FlexSpace-CxbxncVK.js"),__vite__mapDeps([4,1,2]))),He=y(()=>S(()=>import("./DropDwnSearch-C7drp5vq.js"),__vite__mapDeps([5,1,2,6,0,3,7]))),qe=y(()=>S(()=>import("./ScanningCamera-D7FmF5nl.js"),__vite__mapDeps([8,1,2,3,9,6,10,11,12,13,14,15,16,17,18,19,20,21]))),Ne=y(()=>S(()=>import("./ScanningManual-CpZFaOXh.js"),__vite__mapDeps([22,1,2,3,13,14,20,21,10,11])));y(()=>S(()=>import("./LoadingColorSpinner-CtccZnzM.js"),__vite__mapDeps([23,1,2,24])));const[f,te]=A(""),[$,ae]=A([]);function Xe(){X({});const[e,a]=A(1),[t,n]=pe(),s=c=>()=>n(()=>a(c));le(()=>{L()}),ce(()=>{}),de(()=>{q()&&a(0),Fe(),J()});function r(){return"geolocation"in navigator}function b(c){ye({latitude:c?.coords?.latitude,longitude:c?.coords?.longitude})}function L(){r()?navigator.geolocation.getCurrentPosition(b):showMessage("Geolocation isn't supported by your browser")}const K=()=>_e?.list?.filter(c=>c.id);return(()=>{var c=Me(),ne=c.firstChild,se=ne.nextSibling,R=se.nextSibling,G=R.nextSibling;return l(R,o(He,{get list(){return K()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return f()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:i=>te(i.id),width:"260px"})),l(G,o(Q,{get when(){return f()},get children(){return[(()=>{var i=Ke(),m=i.firstChild,p=m.firstChild,x=p.firstChild,_=m.nextSibling,h=_.firstChild,w=h.firstChild;return W(m,"click",s(0),!0),l(x,o(E,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),W(_,"click",s(1),!0),l(w,o(E,{name:"keyboard",size:32,color:"#2b2b2b"})),I(d=>{var k=e()===0,D=e()===1;return k!==d.e&&m.classList.toggle("selected",d.e=k),D!==d.t&&_.classList.toggle("selected",d.t=D),d},{e:void 0,t:void 0}),i})(),(()=>{var i=Re();return l(i,o(ge,{get fallback(){return Te()},get children(){return o(ue,{get children(){return[o(z,{get when(){return e()===0},get children(){return o(qe,{get status(){return f()},get locat(){return f()}})}}),o(z,{get when(){return e()===1},get children(){return o(Ne,{get status(){return f()},get locat(){return f()}})}})]}})}})),I(()=>i.classList.toggle("pending",!!t())),i})()]}}),null),l(G,o(Q,{get when(){return $()?.length>0},get children(){return[Ge(),o(be,{get each(){return xe($(),"timeStamp",0)},children:(i,m)=>(()=>{var p=Ve(),x=p.firstChild,_=x.firstChild,h=_.nextSibling,w=h.nextSibling,d=x.nextSibling,k=d.firstChild,D=k.nextSibling,re=D.nextSibling;return l(_,o(E,{get name(){return u("M023009")?.statusListIcons?.[i?.currentStatus]},size:32})),h.style.setProperty("padding","8px"),l(h,()=>i?.idairguide),w.style.setProperty("padding","8px"),l(w,()=>i?.tracking),l(p,o(Qe,{}),d),l(k,()=>i?.city),l(re,()=>i?.consigneeInfo?.ybestate),I(()=>H(p,`client_item_box gWXAaj jlytmu manifest  ${q()?"isMobile":"centerBx"}`)),p})()})]}}),null),I(()=>H(c,Se.App)),c})()}fe(["click"]);const at=Object.freeze(Object.defineProperty({__proto__:null,default:Xe,scannedQRs:We,setScannedQRs:ze,setStatus:te,setTaskScan:ae,status:f,taskScan:$},Symbol.toStringTag,{value:"Module"}));export{at as S,Fe as a,et as h,J as i,tt as l};
