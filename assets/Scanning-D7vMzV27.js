const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-D6qf7RIp.js","assets/index-_6QZOSty.js","assets/index-DaYrm968.css","assets/Util-B8-DWw-6.js","assets/FlexSpace-CZ24ALRD.js","assets/DropDwnSearch--x-t2nZt.js","assets/debounces-B0GFGtJ-.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningCamera-D1IejARC.js","assets/html5-qrcode-scanner-CMLH6P8J.js","assets/Toast-IeHJnJSd.js","assets/Toast-DLpFKn-Q.css","assets/ShowSSG-DIDAUmpq.js","assets/DialogHRM-uAg9dn__.js","assets/DialogHRM-V9_lZntj.css","assets/ShowScanAlert-B6ibgxjY.js","assets/ShowQRPrintLabel-D90YVrMl.js","assets/fontkit.es-BHcUmD3g.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-BhTuseMZ.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ScanningManual-DwqXIgt5.js","assets/LoadingColorSpinner-leAZOpHe.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{T as A,g as j,A as ne,z as R,U as z,V as re,c as H,l as _,_ as p,a as M,b as ie,o as le,e as oe,i as o,f as i,P as G,h as $,y as ce,W as de,X as V,S as W,F as ue,m as q,j as Q,d as ge,t as y,Y as be,Z as fe,N as _e}from"./index-_6QZOSty.js";import{s as pe}from"./App.module-CbHnVtRQ.js";import{u as g,o as ye,Q as K,e as w,O as he,H as D,g as E,f as N,R as me,G as ve,F as ke}from"./Util-B8-DWw-6.js";import"./Toast-IeHJnJSd.js";let Se=[400,300,400,300,400],T=[300,80,300,80,300,80,300];const we=e=>{e.split("-").length>3&&(e=e.split("-").join("")),e?.split("/")?.length>=5&&(e=e?.split("/")?.[3]),e=e.split(",")?.[0]?.trim(),e=e.split("'").join("-"),e=e.split(",").join("-"),e=e.split(";").join("-");let t=e.split("/")?.[0];return t.indexOf("230")>=0&&(t="230"+(t.split("230")?.[1]).slice(0,6)),t.indexOf("231")>=0&&(t="231"+(t.split("231")?.[1]).slice(0,5)),{params:{":search0":t},code:1}},Ze=async(e,a)=>{let t=we(e),s={timeStamp:new Date().getTime(),latitude:A?.latitude,longitude:A?.longitude,statusId:a,userId:j?.profile?.userId,userName:j?.profile?.name};if(a&&t?.params)return await xe(t.params,s);{let n=t?.txt||t?.params?.[":search0"];return navigator.vibrate(T),{error:{alert:"error",color:"rgb(200 25 60)",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto",bagnumber:n}}}}}},xe=async(e,a)=>{let t=null;if(ne()){let s=w("manifestByHbls")?.[e?.[":search0"]],n=w("manifestByKeys")?.[s];t=Ie(n,a)}else{let s=await $e(e),n=he(s)?.[0];s?.[n]?.guia&&(t=(await Le({":search0":n,idairguide:s?.[n]?.guia},a))?.data)}if(t?.code===203||t?.code===303)return navigator.vibrate(Se),{error:{alert:"warning",color:"#FF6F1D",scanData:t.data}};if(t?.code===200){navigator.vibrate(500);let s={...t.data};return s.tracking=e?.[":search0"],s.timeStamp=new Date().getTime(),ee([...C(),s]),{error:{alert:"success",color:"#0f5223ff",scanData:t.data}}}else if(!t||t?.error){let s={consigneeInfo:{ybestate:"Codigo Incorrecto"}};return navigator.vibrate(T),{error:{alert:"error",color:"rgb(200 25 60)",scanData:s}}}},Ie=(e,a)=>{let t={currentStatus:a?.statusId};if(e?.isSSG&&R?.roles?.SSG?.isActive,!R?.roles?.[e?.consigneeInfo?.ybestate]?.isActive)return{code:303,data:{ybestate:"Zona incorrecta",bagnumber:e?.bagnumber}};if(w("alredyScan")?.[a.statusId]?.[e?.ssg_track_key])return{code:203,data:{consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate,bagnumber:e?.bagnumber}}};if(e?.currentStatus===a.statusId)return{code:203,data:{consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate,bagnumber:e?.bagnumber}}};let s={idairguide:e?.idairguide,city:e?.consigneeInfo?.ybcity,estate:e?.consigneeInfo?.estate,consigneeInfo:{ybestate:e?.consigneeInfo?.ybestate,ybcity:e?.consigneeInfo?.ybcity},bagnumber:e?.bagnumber,isSSG:e?.isSSG},n={data2update:t,itmN:s,ssg_track_key:e?.ssg_track_key,params:{ssg_track_key:e?.ssg_track_key,idairguide:e?.guia},actionKey:809004};D.post(n,function(m,l){m||console.log("successfully posted on queue")});let c={...a};c.ssg_track_key=e?.ssg_track_key,c.ssg_scan_key=me();let O={form:c,itmN:s,params:{airguide:e?.guia},actionKey:815005};return D.post(O,function(m,l){m||console.log("successfully posted on queue")}),Ce(e?.ssg_track_key,a.statusId),{code:200,data:{...s,...t}}},Le=async(e,a)=>{let t={params:e,form:a},s=E(802001);return s=E(802008),t={...t,...s},await N(t)},$e=async(e,a)=>{let t={params:e},s=E(265002);return t={...t,...s},await N(t)},X=async e=>{D.allDocs({include_docs:!0,descending:!0},function(a,t){e(t.rows)})},Z=e=>{let a={};e?.map(t=>{let s=t?.doc?.ssg_track_key,n=t?.doc?.data2update?.currentStatus;a[n]||(a[n]={}),a[n][s]||(a[n][s]=1)}),g("alredyScan",a),z(e?.length)},Ce=(e,a)=>{let t=w("alredyScan")||{};t[a]||(t[a]={}),t[a][e]||(t[a][e]=1),g("alredyScan",t),z(re()+1)},U=async()=>{let e=await Oe(),a={},t={},s={};return e.map(n=>{n?.doc?.hbls?.map(c=>{t[c?.hbl]||(t[c?.hbl]=n?.doc?.ssg_track_key,s[c?.hbl]=n?.doc)}),a[n?.doc?.ssg_track_key]||(a[n?.doc?.ssg_track_key]=n?.doc,a[n?.doc?.ssg_track_key].key=n?.key)}),g("manifestByKeys",a),g("manifestByHbls",t),g("hblsObjDBInd",s),a},Oe=()=>new Promise((e,a)=>{K.allDocs({include_docs:!0,descending:!0},function(t,s){e(s.rows)})}),Be=async()=>{let e=await De(),a={};e?.map(t=>{let s=t?.doc?.params?.ssg_manifest_key;a[s]||(a[s]=t?.doc)}),g("alinkM",a)},De=()=>new Promise((e,a)=>{ve.allDocs({include_docs:!0,descending:!0},function(t,s){e(s.rows)})}),Ee=async()=>{let e=await Y(),a={};return e?.map(t=>{let s=t?.doc?.ssg_manifest_key;a[s]=t?.doc}),g("manifestList",a),a},Y=()=>new Promise((e,a)=>{ye.allDocs({include_docs:!0,descending:!0},function(t,s){e(s.rows)})}),Ue=async()=>((await Y())?.map(a=>{K.remove(a?.doc,function(s,n){})}),1),Ye=async()=>{await Ee(),await Be(),X(Z),U()};var Me=y('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Camara</div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div style=width:135px>Escaner RF'),Pe=y('<div class="centerBx100 ">'),Fe=y('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),Ae=y('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Escanear</h2></div><div style=padding:16px></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=centerBx100 style=margin-top:20px>'),je=y("<div class=loader>Loading..."),Re=y('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[Ge,Ve]=H(),B=_(()=>p(()=>import("./SVG-D6qf7RIp.js"),__vite__mapDeps([0,1,2,3]))),We=_(()=>p(()=>import("./FlexSpace-CZ24ALRD.js"),__vite__mapDeps([4,1,2]))),qe=_(()=>p(()=>import("./DropDwnSearch--x-t2nZt.js"),__vite__mapDeps([5,1,2,6,0,3,7]))),Qe=_(()=>p(()=>import("./ScanningCamera-D1IejARC.js"),__vite__mapDeps([8,1,2,3,9,6,10,11,12,13,14,15,16,17,18,19,20,21]))),ze=_(()=>p(()=>import("./ScanningManual-DwqXIgt5.js"),__vite__mapDeps([22,1,2,3,13,14,20,21,10,11])));_(()=>p(()=>import("./LoadingColorSpinner-leAZOpHe.js"),__vite__mapDeps([23,1,2,24])));const[u,J]=M(""),[C,ee]=M([]);function He(){H({});const[e,a]=M(1),[t,s]=be(),n=l=>()=>s(()=>a(l));ie(()=>{h()}),le(()=>{}),oe(()=>{Q()&&a(0),X(Z),U()});function c(){return"geolocation"in navigator}function O(l){_e({latitude:l?.coords?.latitude,longitude:l?.coords?.longitude})}function h(){c()?navigator.geolocation.getCurrentPosition(O):showMessage("Geolocation isn't supported by your browser")}const m=()=>fe?.list?.filter(l=>l.id);return(()=>{var l=Ae(),te=l.firstChild,ae=te.nextSibling,P=ae.nextSibling,F=P.nextSibling;return o(P,i(qe,{get list(){return m()},lbl_empty:"Funciones de Escaneado",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",hasDebounce:!1,onSelect:r=>J(r.id),width:"260px"})),o(F,i(W,{get when(){return u()},get children(){return[(()=>{var r=Me(),v=r.firstChild,b=v.firstChild,x=b.firstChild,f=v.nextSibling,k=f.firstChild,I=k.firstChild;return G(v,"click",n(0),!0),o(x,i(B,{name:"qrcode-scan",size:32,color:"#2b2b2b"})),G(f,"click",n(1),!0),o(I,i(B,{name:"keyboard",size:32,color:"#2b2b2b"})),$(d=>{var S=e()===0,L=e()===1;return S!==d.e&&v.classList.toggle("selected",d.e=S),L!==d.t&&f.classList.toggle("selected",d.t=L),d},{e:void 0,t:void 0}),r})(),(()=>{var r=Pe();return o(r,i(ce,{get fallback(){return je()},get children(){return i(de,{get children(){return[i(V,{get when(){return e()===0},get children(){return i(Qe,{get status(){return u()},get locat(){return u()}})}}),i(V,{get when(){return e()===1},get children(){return i(ze,{get status(){return u()},get locat(){return u()}})}})]}})}})),$(()=>r.classList.toggle("pending",!!t())),r})()]}}),null),o(F,i(W,{get when(){return C()?.length>0},get children(){return[Fe(),i(ue,{get each(){return ke(C(),"timeStamp",0)},children:(r,v)=>(()=>{var b=Re(),x=b.firstChild,f=x.firstChild,k=f.nextSibling,I=k.nextSibling,d=x.nextSibling,S=d.firstChild,L=S.nextSibling,se=L.nextSibling;return o(f,i(B,{get name(){return w("M023009")?.statusListIcons?.[r?.currentStatus]},size:32})),k.style.setProperty("padding","8px"),o(k,()=>r?.idairguide),I.style.setProperty("padding","8px"),o(I,()=>r?.tracking),o(b,i(We,{}),d),o(S,()=>r?.city),o(se,()=>r?.consigneeInfo?.ybestate),$(()=>q(b,`client_item_box gWXAaj jlytmu manifest  ${Q()?"isMobile":"centerBx"}`)),b})()})]}}),null),$(()=>q(l,pe.App)),l})()}ge(["click"]);const Je=Object.freeze(Object.defineProperty({__proto__:null,default:He,scannedQRs:Ge,setScannedQRs:Ve,setStatus:J,setTaskScan:ee,status:u,taskScan:C},Symbol.toStringTag,{value:"Module"}));export{Je as S,Ze as a,X as b,Ue as c,Z as d,Ee as h,U as i,Ye as l};
