const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BAwyYzEz.js","assets/index-BlMn_6j_.js","assets/index-DEEWbFNK.css","assets/Util-C4Gv2Rs-.js","assets/FlexSpace-CkYJ8wom.js","assets/DropDwnSearch-Bo0Z9pXT.js","assets/debounces-DjkTlD9V.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-C3jJ4UDF.js","assets/html5-qrcode-scanner-BGtARNDN.js","assets/Toast-DGx5X4GD.js","assets/Toast-DLpFKn-Q.css","assets/ShowSSG-DvBqe4V_.js","assets/DialogHRM-CJILU5pJ.js","assets/DialogHRM-V9_lZntj.css","assets/ShowScanAlert-lc4cn7Pk.js","assets/ShowQRPrintLabel-BC5P5SWG.js","assets/PDFButton-CCQT0yk3.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BaZy4qZc.js","assets/InitPrintServices-COQVt4ve.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ScanningManual-oYo6L92L.js","assets/LoadingColorSpinner-CfVeazlZ.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{Q as A,n as j,z as ne,y as R,R as z,T as re,c as H,l as _,_ as p,a as E,k as ie,o as le,b as oe,i as o,d as i,O as G,e as $,x as ce,U as de,V,S as W,F as ue,g as q,f as Q,h as ge,t as y,W as fe,X as be,M as _e}from"./index-BlMn_6j_.js";import{s as pe}from"./App.module-CbHnVtRQ.js";import{u as b,m as ye,M as K,d as w,O as me,D as O,c as D,f as N,N as ve,C as he,B as ke}from"./Util-C4Gv2Rs-.js";import"./Toast-DGx5X4GD.js";let Se=[400,300,400,300,400],T=[300,80,300,80,300,80,300];const we=e=>{e.split("-").length>3&&(e=e.split("-").join("")),e?.split("/")?.length>=5&&(e=e?.split("/")?.[3]),e=e.split(",")?.[0]?.trim(),e=e.split("'").join("-"),e=e.split(",").join("-"),e=e.split(";").join("-");let t=e.split("/")?.[0];return t.indexOf("230")>=0&&(t="230"+(t.split("230")?.[1]).slice(0,6)),t.indexOf("231")>=0&&(t="231"+(t.split("231")?.[1]).slice(0,5)),{params:{":search0":t},code:1}},Ue=async(e,a)=>{let t=we(e),s={timeStamp:new Date().getTime(),latitude:A?.latitude,longitude:A?.longitude,statusId:a,userId:j?.profile?.userId,userName:j?.profile?.name};if(a&&t?.params)return await xe(t.params,s);{let n=t?.txt||t?.params?.[":search0"];return navigator.vibrate(T),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:n}}}}}},xe=async(e,a)=>{let t=null;if(ne()){let s=w("manifestByHbls")?.[e?.[":search0"]],n=w("manifestByKeys")?.[s];t=Ie(n,a)}else{let s=await $e(e),n=me(s)?.[0];s?.[n]?.guia&&(t=(await Le({":search0":n,idairguide:s?.[n]?.guia},a))?.data)}if(t?.code===203||t?.code===303)return navigator.vibrate(Se),{error:{alert:"warning",color:"#FF6F1D",scanData:t.data}};if(t?.code===200){navigator.vibrate(500);let s={...t.data};return s.tracking=e?.[":search0"],s.timeStamp=new Date().getTime(),ee([...C(),s]),{error:{alert:"success",color:"#0f5223ff",scanData:t.data}}}else if(!t||t?.error){let s={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(T),{error:{alert:"error",color:"rgb(200 25 60)",scanData:s}}}},Ie=(e,a)=>{let t={currentStatus:a?.statusId};if(e?.isSSG&&R?.roles?.SSG?.isActive,!R?.roles?.[e?.consigneeInfo?.ybestate]?.isActive)return{code:303,data:{ybestate:"Zona incorrecta",bagnumber:e?.bagnumber}};if(w("alredyScan")?.[a.statusId]?.[e?.ssg_track_key])return{code:203,data:{consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate,bagnumber:e?.bagnumber}}};if(e?.currentStatus===a.statusId)return{code:203,data:{consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate,bagnumber:e?.bagnumber}}};let s={idairguide:e?.idairguide,city:e?.consigneeInfo?.ybcity,estate:e?.consigneeInfo?.estate,consigneeInfo:{ybestate:e?.consigneeInfo?.ybestate,ybcity:e?.consigneeInfo?.ybcity},bagnumber:e?.bagnumber,isSSG:e?.isSSG},n={data2update:t,itmN:s,ssg_track_key:e?.ssg_track_key,params:{ssg_track_key:e?.ssg_track_key,idairguide:e?.guia},actionKey:809004};O.post(n,function(v,l){v||console.log("successfully posted on queue")});let d={...a};d.ssg_track_key=e?.ssg_track_key,d.ssg_scan_key=ve();let B={form:d,itmN:s,params:{airguide:e?.guia},actionKey:815005};return O.post(B,function(v,l){v||console.log("successfully posted on queue")}),Ce(e?.ssg_track_key,a.statusId),{code:200,data:{...s,...t}}},Le=async(e,a)=>{let t={params:e,form:a},s=D(802001);return s=D(802008),t={...t,...s},await N(t)},$e=async(e,a)=>{let t={params:e},s=D(265002);return t={...t,...s},await N(t)},X=async e=>{O.allDocs({include_docs:!0,descending:!0},function(a,t){e(t.rows)})},U=e=>{let a={};e?.map(t=>{let s=t?.doc?.ssg_track_key,n=t?.doc?.data2update?.currentStatus;a[n]||(a[n]={}),a[n][s]||(a[n][s]=1)}),b("alredyScan",a),z(e?.length)},Ce=(e,a)=>{let t=w("alredyScan")||{};t[a]||(t[a]={}),t[a][e]||(t[a][e]=1),b("alredyScan",t),z(re()+1)},Z=async()=>{let e=await Be(),a={},t={};return e.map(s=>{s?.doc?.hbls?.map(n=>{t[n?.hbl]||(t[n?.hbl]=s?.doc?.ssg_track_key)}),a[s?.doc?.ssg_track_key]||(a[s?.doc?.ssg_track_key]=s?.doc,a[s?.doc?.ssg_track_key].key=s?.key)}),b("manifestByKeys",a),b("manifestByHbls",t),a},Be=()=>new Promise((e,a)=>{K.allDocs({include_docs:!0,descending:!0},function(t,s){e(s.rows)})}),Me=async()=>{let e=await Oe(),a={};e?.map(t=>{let s=t?.doc?.params?.ssg_manifest_key;a[s]||(a[s]=t?.doc)}),b("alinkM",a)},Oe=()=>new Promise((e,a)=>{he.allDocs({include_docs:!0,descending:!0},function(t,s){e(s.rows)})}),De=async()=>{let e=await J(),a={};return e?.map(t=>{let s=t?.doc?.ssg_manifest_key;a[s]=t?.doc}),b("manifestList",a),a},J=()=>new Promise((e,a)=>{ye.allDocs({include_docs:!0,descending:!0},function(t,s){e(s.rows)})}),Ze=async()=>((await J())?.map(a=>{K.remove(a?.doc,function(s,n){})}),1),Je=async()=>{await De(),await Me(),X(U),Z()};var Ee=y('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),Pe=y('<div class="centerBx100 ">'),Fe=y('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),Ae=y('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),je=y("<div class=loader>Loading..."),Re=y('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[Ge,Ve]=H(),M=_(()=>p(()=>import("./SVG-BAwyYzEz.js"),__vite__mapDeps([0,1,2,3]))),We=_(()=>p(()=>import("./FlexSpace-CkYJ8wom.js"),__vite__mapDeps([4,1,2]))),qe=_(()=>p(()=>import("./DropDwnSearch-Bo0Z9pXT.js"),__vite__mapDeps([5,1,2,6,0,3,7]))),Qe=_(()=>p(()=>import("./ScanningCamera-C3jJ4UDF.js"),__vite__mapDeps([8,1,2,3,9,6,10,11,12,13,14,15,16,17,18,19,20,21,22]))),ze=_(()=>p(()=>import("./ScanningManual-oYo6L92L.js"),__vite__mapDeps([23,1,2,3,13,14,21,22,10,11])));_(()=>p(()=>import("./LoadingColorSpinner-CfVeazlZ.js"),__vite__mapDeps([24,1,2,25])));const[u,Y]=E(""),[C,ee]=E([]);function He(){H({});const[e,a]=E(1),[t,s]=fe(),n=l=>()=>s(()=>a(l));ie(()=>{m()}),le(()=>{}),oe(()=>{Q()&&a(0),X(U),Z()});function d(){return"geolocation"in navigator}function B(l){_e({latitude:l?.coords?.latitude,longitude:l?.coords?.longitude})}function m(){d()?navigator.geolocation.getCurrentPosition(B):showMessage("Geolocation isn't supported by your browser")}const v=()=>be?.list?.filter(l=>l.id);return(()=>{var l=Ae(),te=l.firstChild,ae=te.nextSibling,P=ae.nextSibling,F=P.nextSibling;return o(P,i(qe,{get list(){return v()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:r=>Y(r.id),width:"260px"})),o(F,i(W,{get when(){return u()},get children(){return[(()=>{var r=Ee(),h=r.firstChild,g=h.firstChild,x=g.firstChild,f=h.nextSibling,k=f.firstChild,I=k.firstChild;return G(h,"click",n(0),!0),o(x,i(M,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),G(f,"click",n(1),!0),o(I,i(M,{name:"keyboard",size:32,color:"#2b2b2b"})),$(c=>{var S=e()===0,L=e()===1;return S!==c.e&&h.classList.toggle("selected",c.e=S),L!==c.t&&f.classList.toggle("selected",c.t=L),c},{e:void 0,t:void 0}),r})(),(()=>{var r=Pe();return o(r,i(ce,{get fallback(){return je()},get children(){return i(de,{get children(){return[i(V,{get when(){return e()===0},get children(){return i(Qe,{get status(){return u()},get locat(){return u()}})}}),i(V,{get when(){return e()===1},get children(){return i(ze,{get status(){return u()},get locat(){return u()}})}})]}})}})),$(()=>r.classList.toggle("pending",!!t())),r})()]}}),null),o(F,i(W,{get when(){return C()?.length>0},get children(){return[Fe(),i(ue,{get each(){return ke(C(),"timeStamp",0)},children:(r,h)=>(()=>{var g=Re(),x=g.firstChild,f=x.firstChild,k=f.nextSibling,I=k.nextSibling,c=x.nextSibling,S=c.firstChild,L=S.nextSibling,se=L.nextSibling;return o(f,i(M,{get name(){return w("M023009")?.statusListIcons?.[r?.currentStatus]},size:32})),k.style.setProperty("padding","8px"),o(k,()=>r?.idairguide),I.style.setProperty("padding","8px"),o(I,()=>r?.tracking),o(g,i(We,{}),c),o(S,()=>r?.city),o(se,()=>r?.consigneeInfo?.ybestate),$(()=>q(g,`client_item_box gWXAaj jlytmu manifest  ${Q()?"isMobile":"centerBx"}`)),g})()})]}}),null),$(()=>q(l,pe.App)),l})()}ge(["click"]);const Ye=Object.freeze(Object.defineProperty({__proto__:null,default:He,scannedQRs:Ge,setScannedQRs:Ve,setStatus:Y,setTaskScan:ee,status:u,taskScan:C},Symbol.toStringTag,{value:"Module"}));export{Ye as S,Ue as a,X as b,Ze as c,U as d,De as h,Z as i,Je as l};
