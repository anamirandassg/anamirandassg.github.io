const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Fg1Oj9ZI.js","assets/index-COVb01tO.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-C6WD8N3E.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-B3SV77JW.js","assets/Util-B95KFj0U.js"])))=>i.map(i=>d[i]);
import{l as u,_ as g,a as n,c as $,o as I,b as A,i as o,d as p,e as v,q as B,S as O,h as j,t as k,z as w}from"./index-COVb01tO.js";import{t as _,d as S,b as D,c as x,f as M,O as R}from"./Util-B95KFj0U.js";import"./DialogHRM-Otqzy6Yq.js";import{OpenToast as z}from"./Toast-DCI3E2vh.js";import{setManifestScan as L,manifestScan as V}from"./LinkScanManifest-_pmkKkER.js";import"./Scanning-CwrvIy0P.js";import"./App.module-CbHnVtRQ.js";var q=k('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),F=k('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx">');u(()=>g(()=>import("./LoadingColorSpinner-Fg1Oj9ZI.js"),__vite__mapDeps([0,1,2,3])));const H=u(()=>g(()=>import("./InputHr-C6WD8N3E.js"),__vite__mapDeps([4,1,2,5]))),d=u(()=>g(()=>import("./SVG-B3SV77JW.js"),__vite__mapDeps([6,1,2,7])));function T(y){n([]);const[l,b]=$({}),[c,m]=n("");n("");const[f,G]=n("");n("");const[h,K]=n("");I(()=>{}),A(()=>{});const C=async t=>{t.split("-").length>3&&(t=t.split("-").join("")),t?.split("/")?.length>=5&&(t=t?.split("/")?.[3]),t=t.split(",")?.[0]?.trim(),t=t.split("'").join("-"),t=t.split(",").join("-"),t=t.split(";").join("-");let s=t.split("/")?.[0]?.trim(),a=s,e=null;if(w()){let r=S("manifestByHbls")?.[a];e=S("manifestByKeys")?.[r]}else e=await W(a);if(e?.cidentity){let r={};r.tracking=s,r.idairguide=e?.idairguide,r.ssg_track_key=e?.ssg_track_key,r.consigneeInfo=e?.consigneeInfo,r.timeStamp=new Date().getTime(),L([...V(),r]),m("")}else z({text:"No se encontro ningun registro",timeout:2500,theme:"red",id:D()})};return(()=>{var t=F(),i=t.firstChild,s=i.nextSibling,a=s.firstChild;return i.style.setProperty("padding","16px"),o(i,p(O,{get when(){return h()},get children(){var e=q(),r=e.firstChild,E=r.nextSibling;return o(r,p(d,{get name(){return _?.[f()]?.icon},size:32,get color(){return _?.[f()]?.svg}})),o(E,()=>l?.consigneeInfo?.ybestate),v(P=>B(e,_?.[f()],P)),e}})),s.style.setProperty("padding","16px"),s.style.setProperty("margin-top","35px"),o(s,p(H,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return c()},placeholder:"escanear o escribir hbl...",colors:"#2b2b2b",handleClick:m,onEnter:C}),a),a.$$click=()=>m(""),o(a,p(d,{name:"Xclose",size:32,color:"#2b2b2b"})),v(e=>(e=h()?"block":"none")!=null?i.style.setProperty("display",e):i.style.removeProperty("display")),t})()}const W=async y=>{let l={params:{idairguide:"all",":search0":y}},b=x(802001);l={...l,...b};const c=await M(l);return c?.[R(c)?.[0]]};j(["click"]);export{T as default};
