const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-D8-oA992.js","assets/index-B7K4xcFN.js","assets/index-BRlA1Q7g.css","assets/Util-DVoBpjwO.js","assets/FlexSpace-7XCxG3Kj.js","assets/DropDwnSearch-BXth2F5Z.js","assets/debounces-Ge5CVe5o.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-ChTYPO2s.js","assets/html5-qrcode-scanner-BZ0_6iDx.js","assets/Toast-DuUkGCmm.js","assets/Toast-DLpFKn-Q.css","assets/ShowSSG-COBM32wF.js","assets/DialogHRM-Dp-nY404.js","assets/DialogHRM-V9_lZntj.css","assets/ShowScanAlert-BNsRJq0w.js","assets/ShowQRPrintLabel-DdkD5K2f.js","assets/fontkit.es-CKP7Eug6.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-DFq0sOo3.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ScanningManual-Dd9Sz3p3.js","assets/LoadingColorSpinner-Bank2l1E.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{X as T,g as V,B as le,A as W,Y as oe,c as X,l as y,_ as m,a as O,b as ce,o as de,d as ge,i as o,e as l,Q as z,f as $,z as ue,U as be,V as H,S as Q,F as fe,m as q,j as N,h as pe,t as S,W as _e,Z as ye,O as me}from"./index-B7K4xcFN.js";import{s as Se}from"./App.module-CbHnVtRQ.js";import{S as h,u as d,T as A,e as u,g as he,f as ve,a as ke,U as F,V as P,W as Z,I as U,O as B,X as Le,Y as we,Z as Y,q as J,$ as xe,a0 as Ie,H as De,G as $e}from"./Util-DVoBpjwO.js";import"./Toast-DuUkGCmm.js";let Be=[400,300,400,300,400],M=[300,80,300,80,300,80,300];const Ce=e=>{e.split("-").length>3&&(e=e.split("-").join("")),e?.split("/")?.length>=5&&(e=e?.split("/")?.[3]),e=e.split(",")?.[0]?.trim(),e=e.split("'").join("-"),e=e.split(",").join("-"),e=e.split(";").join("-");let t=e.split("/")?.[0];return t.indexOf("230")>=0&&(t="230"+(t.split("230")?.[1]).slice(0,6)),t.indexOf("231")>=0&&(t="231"+(t.split("231")?.[1]).slice(0,5)),{params:{":search0":t},code:1}},rt=async(e,a)=>{let t=Ce(e),s={timeStamp:new Date().getTime(),latitude:T?.latitude,longitude:T?.longitude,statusId:a,userId:V?.profile?.userId,userName:V?.profile?.name};if(a&&t?.params)return await Ee(t.params,s);{let n=t?.txt||t?.params?.[":search0"];return navigator.vibrate(M),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:n}}}}}},Ee=async(e,a)=>{let t=null;if(le()){let s=u("manifestByHbls")?.[e?.[":search0"]],n=u("manifestByKeys")?.[s];if(!n){let i={consigneeInfo:{ybcity:"Codigo no encontrado",ybestate:"actualice las guias sin coneccion"}};return navigator.vibrate(M),{error:{alert:"error",color:"rgb(200 25 60)",scanData:i}}}t=Me(n,a)}else t=await Oe(e);if(t?.code===203||t?.code===303)return navigator.vibrate(Be),{error:{alert:"warning",color:"#FF6F1D",scanData:t.data}};if(t?.code===200){navigator.vibrate(500);let s={...t.data};return s.tracking=e?.[":search0"],s.timeStamp=new Date().getTime(),se([...C(),s]),{error:{alert:"success",color:"#0f5223ff",scanData:t.data}}}else if(!t||t?.error){let s={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(M),{error:{alert:"error",color:"rgb(200 25 60)",scanData:s}}}},Me=(e,a)=>{let t={currentStatus:a?.statusId};if(e?.isSSG&&W?.roles?.SSG?.isActive,!W?.roles?.[e?.consigneeInfo?.ybestate]?.isActive)return{code:303,data:{ybestate:"Zona incorrecta",bagnumber:e?.bagnumber}};if(u("ScannedLocByKey")?.[e?.ssg_track_key]?.statusId===a.statusId)return{code:203,data:{consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate,bagnumber:e?.bagnumber}}};let s={idairguide:e?.idairguide,city:e?.consigneeInfo?.ybcity,estate:e?.consigneeInfo?.estate,consigneeInfo:{ybestate:e?.consigneeInfo?.ybestate,ybcity:e?.consigneeInfo?.ybcity},bagnumber:e?.bagnumber,isSSG:e?.isSSG},n={...a};n.ssg_track_key=e?.ssg_track_key,n.ssg_scan_key=xe();let i={form:n,itmN:s,params:{airguide:e?.guia},actionKey:815005};Fe(i);let b={...n};Ke(b);let w={...u("ScannedLocByKey")};return w[e?.ssg_track_key]=n,d("ScannedLocByKey",w),{code:200,data:{...s,...t}}},Oe=async(e,a)=>{let t={params:e},s=he(265002);return t={...t,...s},await ve(t)};let K=0;const Ae=()=>{K+450>new Date().getTime()&&A(U,Z,u("ScannedLocList"))},Fe=async e=>{K=new Date().getTime();let a={...u("ScannedLocList")};a[ke()]=e,d("ScannedLocList",a),setTimeout(()=>{Ae()},500)},Pe=()=>{K+450>new Date().getTime()&&A(P,F,u("ScannedList"))},Ke=async e=>{new Date().getTime();let a=await h(P,F),t=a||{};t[e?.ssg_scan_key]=e,setTimeout(()=>{Pe()},500)},je=async()=>{let e=await h(U,Z);Re(e)},Re=async e=>{let a={};e&&B(e)?.map(t=>{let s=e[t],n=s?.ssg_track_key,i=s?.data2update?.currentStatus;a[n]||(a[n]={}),a[n][i]||(a[n][i]=1)}),d("alredyScan",a),Ve(),oe(B(e)?.length)},ee=async()=>{let e=await h(we,Le),a={},t={},s={};return e&&B(e)?.map(n=>{let i=e?.[n];i?.hbls?.map(b=>{t[b?.hbl]||(t[b?.hbl]=i?.ssg_track_key,s[b?.hbl]=i)}),a[i?.ssg_track_key]||(a[i?.ssg_track_key]=i,a[i?.ssg_track_key].key=i?.key)}),d("manifestByKeys",a),d("manifestByHbls",t),d("hblsObjDBInd",s),a},Ge=async()=>{let e=await h(De,Ie),a={};e?.map(t=>{let s=t?.params?.ssg_manifest_key;a[s]||(a[s]=t)}),d("alinkM",a)},Te=async()=>{let e=await h(J,Y),a={};return e?.map(t=>{let s=t?.ssg_manifest_key;a[s]=t}),d("manifestList",a),a},lt=async()=>(A(J,Y,{}),1),Ve=async()=>{await te()},ot=async()=>{await Te(),await te(),await Ge(),ee()},te=async()=>{let e=await h(P,F),a={};return B(e)?.map(t=>{let s=e[t],n=s?.ssg_track_key;a[n]?a[n]?.timeStamp<s?.timeStamp&&(a[n]=s):a[n]=s}),d("ScannedLocList",e),d("ScannedLocByKey",a),e};var We=S('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),ze=S('<div class="centerBx100 ">'),He=S('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),Qe=S('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),qe=S("<div class=loader>Loading..."),Ne=S('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[Xe,Ze]=X(),E=y(()=>m(()=>import("./SVG-D8-oA992.js"),__vite__mapDeps([0,1,2,3]))),Ue=y(()=>m(()=>import("./FlexSpace-7XCxG3Kj.js"),__vite__mapDeps([4,1,2]))),Ye=y(()=>m(()=>import("./DropDwnSearch-BXth2F5Z.js"),__vite__mapDeps([5,1,2,6,0,3,7]))),Je=y(()=>m(()=>import("./ScanningCamera-ChTYPO2s.js"),__vite__mapDeps([8,1,2,3,9,6,10,11,12,13,14,15,16,17,18,19,20,21]))),et=y(()=>m(()=>import("./ScanningManual-Dd9Sz3p3.js"),__vite__mapDeps([22,1,2,3,13,14,20,21,10,11])));y(()=>m(()=>import("./LoadingColorSpinner-Bank2l1E.js"),__vite__mapDeps([23,1,2,24])));const[f,ae]=O(""),[C,se]=O([]);function tt(){X({});const[e,a]=O(1),[t,s]=_e(),n=c=>()=>s(()=>a(c));ce(()=>{w()}),de(()=>{}),ge(()=>{N()&&a(0),je(),ee()});function i(){return"geolocation"in navigator}function b(c){me({latitude:c?.coords?.latitude,longitude:c?.coords?.longitude})}function w(){i()?navigator.geolocation.getCurrentPosition(b):showMessage("Geolocation isn't supported by your browser")}const j=()=>ye?.list?.filter(c=>c.id);return(()=>{var c=Qe(),ne=c.firstChild,ie=ne.nextSibling,R=ie.nextSibling,G=R.nextSibling;return o(R,l(Ye,{get list(){return j()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return f()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:r=>ae(r.id),width:"260px"})),o(G,l(Q,{get when(){return f()},get children(){return[(()=>{var r=We(),v=r.firstChild,p=v.firstChild,x=p.firstChild,_=v.nextSibling,k=_.firstChild,I=k.firstChild;return z(v,"click",n(0),!0),o(x,l(E,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),z(_,"click",n(1),!0),o(I,l(E,{name:"keyboard",size:32,color:"#2b2b2b"})),$(g=>{var L=e()===0,D=e()===1;return L!==g.e&&v.classList.toggle("selected",g.e=L),D!==g.t&&_.classList.toggle("selected",g.t=D),g},{e:void 0,t:void 0}),r})(),(()=>{var r=ze();return o(r,l(ue,{get fallback(){return qe()},get children(){return l(be,{get children(){return[l(H,{get when(){return e()===0},get children(){return l(Je,{get status(){return f()},get locat(){return f()}})}}),l(H,{get when(){return e()===1},get children(){return l(et,{get status(){return f()},get locat(){return f()}})}})]}})}})),$(()=>r.classList.toggle("pending",!!t())),r})()]}}),null),o(G,l(Q,{get when(){return C()?.length>0},get children(){return[He(),l(fe,{get each(){return $e(C(),"timeStamp",0)},children:(r,v)=>(()=>{var p=Ne(),x=p.firstChild,_=x.firstChild,k=_.nextSibling,I=k.nextSibling,g=x.nextSibling,L=g.firstChild,D=L.nextSibling,re=D.nextSibling;return o(_,l(E,{get name(){return u("M023009")?.statusListIcons?.[r?.currentStatus]},size:32})),k.style.setProperty("padding","8px"),o(k,()=>r?.idairguide),I.style.setProperty("padding","8px"),o(I,()=>r?.tracking),o(p,l(Ue,{}),g),o(L,()=>r?.city),o(re,()=>r?.consigneeInfo?.ybestate),$(()=>q(p,`client_item_box gWXAaj jlytmu manifest  ${N()?"isMobile":"centerBx"}`)),p})()})]}}),null),$(()=>q(c,Se.App)),c})()}pe(["click"]);const ct=Object.freeze(Object.defineProperty({__proto__:null,default:tt,scannedQRs:Xe,setScannedQRs:Ze,setStatus:ae,setTaskScan:se,status:f,taskScan:C},Symbol.toStringTag,{value:"Module"}));export{ct as S,rt as a,je as b,lt as c,Te as h,ee as i,ot as l};
