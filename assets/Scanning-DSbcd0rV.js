const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-BhSed9HW.js","assets/index-DkkNlLnX.js","assets/index-lCkr9jrN.css","assets/debounces-BOP31X7v.js","assets/SVG-7m5L1R9W.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-CfVCvnbP.js","assets/html5-qrcode-scanner-Dh6-P_8S.js","assets/Toast-B8ER3c08.js","assets/Toast-DLpFKn-Q.css","assets/ShowScanAlert-BANnv4E4.js","assets/ShowQRPrintLabel-CkIpyv0G.js","assets/PDFButton-Cb-vVOms.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-Usf72ANN.js","assets/InitPrintServices-Br8uoi7y.js","assets/DialogHRM-g_NvR9nw.js","assets/DialogHRM-V9_lZntj.css","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ScanningManual-DNzvT2hc.js","assets/FlexSpace-C14yKP74.js","assets/LoadingColorSpinner-De0F92t4.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{Q as v,N as ee,ac as E,n as j,M as te,o as $,K as R,ab as H,p as G,q as se,ad as ae,ae as ne,aa as re,c as K,l as b,_ as f,a as D,k as ie,r as le,s as oe,i as l,d as i,af as V,e as I,H as ce,ag as de,ah as W,S as Q,F as ue,a9 as ge,f as q,g as z,h as be,t as p,ai as fe,X as pe}from"./index-DkkNlLnX.js";import{s as _e}from"./App.module-CbHnVtRQ.js";import"./Toast-B8ER3c08.js";let ye=[400,300,400,300,400],N=[300,80,300,80,300,80,300];const he=e=>{e.split("-").length>3&&(e=e.split("-").join("")),e?.split("/")?.length>=5&&(e=e?.split("/")?.[3]),e=e.split(",")?.[0]?.trim(),e=e.split("'").join("-"),e=e.split(",").join("-"),e=e.split(";").join("-");let t=e.split("/")?.[0];return t.indexOf("230")>=0&&(t="230"+(t.split("230")?.[1]).slice(0,6)),t.indexOf("231")>=0&&(t="231"+(t.split("231")?.[1]).slice(0,5)),{params:{idairguide:"all",":search0":t},code:1}},qe=async(e,a)=>{let t=he(e),s={timeStamp:new Date().getTime(),latitude:E?.latitude,longitude:E?.longitude,statusId:a,userId:j?.profile?.userId,userName:j?.profile?.name};if(t?.params)return await ve(t.params,s);{let n=t?.txt||t?.params?.search0;return navigator.vibrate(N),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:n}}}}}},ve=async(e,a)=>{let t=null;if(te()){let s=$("manifestByHbls")?.[e?.[":search0"]],n=$("manifestByKeys")?.[s];t=me(n,a)}else t=(await Se(e,a))?.data;if(t?.code===203||t?.code===303)return navigator.vibrate(ye),{error:{alert:"warning",color:"#FF6F1D",scanData:t.data}};if(t?.code===200){navigator.vibrate(500);let s={...t.data};return s.tracking=e?.[":search0"],s.timeStamp=new Date().getTime(),Z([...L(),s]),{error:{alert:"success",color:"#0f5223ff",scanData:t.data}}}else if(!t||t?.error){let s={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(N),{error:{alert:"error",color:"rgb(200 25 60)",scanData:s}}}},me=(e,a)=>{let t=e?.statusHistory||[];t.push(a);let s={statusHistory:t,currentStatus:a?.statusId};if(e?.isSSG&&R?.roles?.SSG?.isActive,!R?.roles?.[e?.consigneeInfo?.ybestate]?.isActive)return{code:303,data:{ybestate:"Zona incorrecta",bagnumber:e?.bagnumber}};if($("alredyScan")?.[a.statusId]?.[e?.ssg_track_key])return{code:203,data:{consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate,bagnumber:e?.bagnumber}}};if(e?.currentStatus===a.statusId)return{code:203,data:{consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate,bagnumber:e?.bagnumber}}};let n={idairguide:e?.idairguide,city:e?.consigneeInfo?.ybcity,estate:e?.consigneeInfo?.estate,consigneeInfo:{ybestate:e?.consigneeInfo?.ybestate,ybcity:e?.consigneeInfo?.ybcity},bagnumber:e?.bagnumber,isSSG:e?.isSSG},m={data2update:s,itmN:n,ssg_track_key:e?.ssg_track_key,params:{ssg_track_key:e?.ssg_track_key,idairguide:"all"},actionKey:809004};return H.post(m,function(C,O){C||console.log("successfully posted on queue")}),M(F),{code:200,data:{...n,...s}}},Se=async(e,a)=>{let t={params:e,form:a},s=G(802001);return s=G(802008),t={...t,...s},await se(t)},M=async e=>{H.allDocs({include_docs:!0,descending:!0},function(a,t){e(t.rows)})},F=e=>{let a={};e?.map(t=>{let s=t?.doc?.ssg_track_key,n=t?.doc?.data2update?.currentStatus;a[n]||(a[n]={}),a[n][s]||(a[n][s]=1)}),v("alredyScan",a),ne(e?.length)},X=async()=>{let e=await ke(),a={},t={};return e.map(s=>{s?.doc?.hbls?.map(n=>{t[n?.hbl]||(t[n?.hbl]=s?.doc?.ssg_track_key)}),a[s?.doc?.ssg_track_key]||(a[s?.doc?.ssg_track_key]=s?.doc,a[s?.doc?.ssg_track_key].key=s?.key)}),v("manifestByKeys",a),v("manifestByHbls",t),a},ke=()=>new Promise((e,a)=>{ae.allDocs({include_docs:!0,descending:!0},function(t,s){e(s.rows)})}),xe=async()=>{let e=await we(),a={};e?.map(t=>{let s=t?.doc?.params?.ssg_manifest_key;a[s]||(a[s]=t?.doc)}),v("alinkM",a)},we=()=>new Promise((e,a)=>{re.allDocs({include_docs:!0,descending:!0},function(t,s){e(s.rows)})}),Ie=async()=>{let e=await $e(),a={};return e?.map(t=>{let s=t?.doc?.ssg_manifest_key;a[s]=t?.doc}),v("manifestList",a),a},$e=()=>new Promise((e,a)=>{ee.allDocs({include_docs:!0,descending:!0},function(t,s){e(s.rows)})}),ze=async()=>{await Ie(),await xe(),M(F),X()};var Le=p('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),Ce=p('<div class="centerBx100 ">'),Be=p('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),Ee=p('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),De=p("<div class=loader>Loading..."),Me=p('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[Fe,Oe]=K(),Pe=b(()=>f(()=>import("./DropDwnSearch-BhSed9HW.js"),__vite__mapDeps([0,1,2,3,4,5]))),Ae=b(()=>f(()=>import("./ScanningCamera-CfVCvnbP.js"),__vite__mapDeps([6,1,2,7,3,8,9,10,11,12,13,14,15,16,17,18,19]))),je=b(()=>f(()=>import("./ScanningManual-DNzvT2hc.js"),__vite__mapDeps([20,1,2,8,9,10,11,12,13,14,15,16,17,18,19]))),B=b(()=>f(()=>import("./SVG-7m5L1R9W.js"),__vite__mapDeps([4,1,2]))),Re=b(()=>f(()=>import("./FlexSpace-C14yKP74.js"),__vite__mapDeps([21,1,2])));b(()=>f(()=>import("./LoadingColorSpinner-De0F92t4.js"),__vite__mapDeps([22,1,2,23])));const[d,T]=D(""),[L,Z]=D([]);function Ge(){K({});const[e,a]=D(1),[t,s]=fe(),n=o=>()=>s(()=>a(o));ie(()=>{C()}),le(()=>{}),oe(()=>{z()&&a(0),M(F),X()});function m(){return"geolocation"in navigator}function S(o){pe({latitude:o?.coords?.latitude,longitude:o?.coords?.longitude})}function C(){m()?navigator.geolocation.getCurrentPosition(S):showMessage("Geolocation isn't supported by your browser")}const O=()=>E?.list?.filter(o=>o.id);return(()=>{var o=Ee(),J=o.firstChild,U=J.nextSibling,P=U.nextSibling,A=P.nextSibling;return l(P,i(Pe,{get list(){return O()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return d()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:r=>T(r.id),width:"260px"})),l(A,i(Q,{get when(){return d()},get children(){return[(()=>{var r=Le(),_=r.firstChild,u=_.firstChild,k=u.firstChild,g=_.nextSibling,y=g.firstChild,x=y.firstChild;return V(_,"click",n(0),!0),l(k,i(B,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),V(g,"click",n(1),!0),l(x,i(B,{name:"keyboard",size:32,color:"#2b2b2b"})),I(c=>{var h=e()===0,w=e()===1;return h!==c.e&&_.classList.toggle("selected",c.e=h),w!==c.t&&g.classList.toggle("selected",c.t=w),c},{e:void 0,t:void 0}),r})(),(()=>{var r=Ce();return l(r,i(ce,{get fallback(){return De()},get children(){return i(de,{get children(){return[i(W,{get when(){return e()===0},get children(){return i(Ae,{get status(){return d()},get locat(){return d()}})}}),i(W,{get when(){return e()===1},get children(){return i(je,{get status(){return d()},get locat(){return d()}})}})]}})}})),I(()=>r.classList.toggle("pending",!!t())),r})()]}}),null),l(A,i(Q,{get when(){return L()?.length>0},get children(){return[Be(),i(ue,{get each(){return ge(L(),"timeStamp",0)},children:(r,_)=>(()=>{var u=Me(),k=u.firstChild,g=k.firstChild,y=g.nextSibling,x=y.nextSibling,c=k.nextSibling,h=c.firstChild,w=h.nextSibling,Y=w.nextSibling;return l(g,i(B,{get name(){return $("M023009")?.statusListIcons?.[r?.currentStatus]},size:32})),y.style.setProperty("padding","8px"),l(y,()=>r?.idairguide),x.style.setProperty("padding","8px"),l(x,()=>r?.tracking),l(u,i(Re,{}),c),l(h,()=>r?.city),l(Y,()=>r?.consigneeInfo?.ybestate),I(()=>q(u,`client_item_box gWXAaj jlytmu manifest  ${z()?"isMobile":"centerBx"}`)),u})()})]}}),null),I(()=>q(o,_e.App)),o})()}be(["click"]);const He=Object.freeze(Object.defineProperty({__proto__:null,default:Ge,scannedQRs:Fe,setScannedQRs:Oe,setStatus:T,setTaskScan:Z,status:d,taskScan:L},Symbol.toStringTag,{value:"Module"}));export{He as S,qe as a,M as b,F as c,Ie as h,X as i,ze as l};
