const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Beo7zloT.js","assets/index-_PH4TKcl.js","assets/index-BRlA1Q7g.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-D_-i_aPs.js","assets/InputHr-BXFw4d2l.css","assets/SVG-CQDwSTDp.js","assets/Util-CJwQ4eI5.js"])))=>i.map(i=>d[i]);
import{l as g,_ as u,a as n,c as $,o as I,d as A,i as o,e as p,f as v,s as B,S as O,h as j,t as k,J as w}from"./index-_PH4TKcl.js";import{t as _,e as S,a as D,g as x,f as M,O as R}from"./Util-CJwQ4eI5.js";import"./DialogHRM-BmJ_288a.js";import{OpenToast as L}from"./Toast-4RNGB2fR.js";import{setManifestScan as V,manifestScan as z}from"./LinkScanManifest-Ds1Kc-DF.js";import"./DashManifest-D5xqIp4O.js";import"./App.module-CbHnVtRQ.js";var F=k('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),H=k('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx">');g(()=>u(()=>import("./LoadingColorSpinner-Beo7zloT.js"),__vite__mapDeps([0,1,2,3])));const W=g(()=>u(()=>import("./InputHr-D_-i_aPs.js"),__vite__mapDeps([4,1,2,5]))),d=g(()=>u(()=>import("./SVG-CQDwSTDp.js"),__vite__mapDeps([6,1,2,7])));function T(y){n([]);const[l,b]=$({}),[c,m]=n("");n("");const[f,G]=n("");n("");const[h,K]=n("");I(()=>{}),A(()=>{});const C=async t=>{t.split("-").length>3&&(t=t.split("-").join("")),t?.split("/")?.length>=5&&(t=t?.split("/")?.[3]),t=t.split(",")?.[0]?.trim(),t=t.split("'").join("-"),t=t.split(",").join("-"),t=t.split(";").join("-");let s=t.split("/")?.[0]?.trim(),i=s,e=null;if(w()){let r=S("manifestByHbls")?.[i];e=S("manifestByKeys")?.[r]}else e=await q(i);if(e?.cidentity){let r={};r.tracking=s,r.idairguide=e?.idairguide,r.ssg_track_key=e?.ssg_track_key,r.consigneeInfo=e?.consigneeInfo,r.timeStamp=new Date().getTime(),V([...z(),r]),m("")}else L({text:"No se encontro ningun registro",timeout:2500,theme:"red",id:D()})};return(()=>{var t=H(),a=t.firstChild,s=a.nextSibling,i=s.firstChild;return a.style.setProperty("padding","16px"),o(a,p(O,{get when(){return h()},get children(){var e=F(),r=e.firstChild,E=r.nextSibling;return o(r,p(d,{get name(){return _?.[f()]?.icon},size:32,get color(){return _?.[f()]?.svg}})),o(E,()=>l?.consigneeInfo?.ybestate),v(P=>B(e,_?.[f()],P)),e}})),s.style.setProperty("padding","16px"),s.style.setProperty("margin-top","35px"),o(s,p(W,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return c()},placeholder:"escanear o escribir hbl...",colors:"#2b2b2b",handleClick:m,onEnter:C}),i),i.$$click=()=>m(""),o(i,p(d,{name:"Xclose",size:32,color:"#2b2b2b"})),v(e=>(e=h()?"block":"none")!=null?a.style.setProperty("display",e):a.style.removeProperty("display")),t})()}const q=async y=>{let l={params:{idairguide:"all",":search0":y}},b=x(802001);l={...l,...b};const c=await M(l);return c?.[R(c)?.[0]]};j(["click"]);export{T as default};
