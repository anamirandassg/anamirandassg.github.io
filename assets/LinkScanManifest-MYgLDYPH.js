const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropDwnSearch-aINwt5k7.js","assets/index-CEZmhTqZ.js","assets/index-BRlA1Q7g.css","assets/debounces-CcaEeBWg.js","assets/SVG-DLWu1Pum.js","assets/Util-BvnLaC1J.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ScanningManifestManual-BQZ-L0Cy.js","assets/DialogHRM-D_JrzI8M.js","assets/DialogHRM-V9_lZntj.css","assets/Toast-BVnTl0uP.js","assets/Toast-DLpFKn-Q.css","assets/DashManifest-B1oefv4-.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-_LC45Isv.js","assets/LoadingColorSpinner-BqE7FqiY.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ButonHrm-C-2YmiFW.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-C5tDzCkq.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{c as u,l as o,_ as l,a as f,r as V,u as Q,b as j,o as q,d as G,i as n,e as d,F as K,f as z,m as N,j as W,S as H,t as k,J as w,U as J}from"./index-CEZmhTqZ.js";import{E as U,e as S,g as B,f as M,O as X,u as Y,M as Z,Q as tt,R as et}from"./Util-BvnLaC1J.js";import{handleListManifest as st}from"./DashManifest-B1oefv4-.js";import"./App.module-CbHnVtRQ.js";import"./DialogHRM-D_JrzI8M.js";var at=k('<div class=" bottombx lowbordr centerBx "style=padding-top:26px;><h5>Escaneados'),it=k('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Associar a el Manifiesto </h2></div><div class=centerBx100 style=margin-top:20px>'),nt=k('<div style=background:#FFF;width:90%><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const[xt,St]=u();o(()=>l(()=>import("./DropDwnSearch-aINwt5k7.js"),__vite__mapDeps([0,1,2,3,4,5,6])));const rt=o(()=>l(()=>import("./ScanningManifestManual-BQZ-L0Cy.js"),__vite__mapDeps([7,1,2,5,8,9,10,11,12,13,14]))),ot=o(()=>l(()=>import("./SVG-DLWu1Pum.js"),__vite__mapDeps([4,1,2,5]))),lt=o(()=>l(()=>import("./FlexSpace-_LC45Isv.js"),__vite__mapDeps([15,1,2])));o(()=>l(()=>import("./LoadingColorSpinner-BqE7FqiY.js"),__vite__mapDeps([16,1,2,17])));const ct=o(()=>l(()=>import("./ButonHrm-C-2YmiFW.js"),__vite__mapDeps([18,1,2,4,5,19])));o(()=>l(()=>import("./CheckBoxSlide-C5tDzCkq.js"),__vite__mapDeps([20,1,2,21])));const[kt,Bt]=f(""),[x,dt]=f([]);function Mt(){u({});const[t,i]=V(),[a,c]=u({search:""});u();const[_,m]=u(),y=Q();u();const[b,gt]=f(""),[pt,A]=f("");j(()=>{C()}),q(()=>{}),G(async()=>{if(await st(),t?.mId){let s={id:t?.mId},r=await ut(s);A(t?.mId),c("manifestObj",r),m("linked",r?.linkedBags)}});function O(){return"geolocation"in navigator}function R(s){J({latitude:s?.coords?.latitude,longitude:s?.coords?.longitude})}function C(){O()?navigator.geolocation.getCurrentPosition(R):showMessage("Geolocation isn't supported by your browser")}const D=async()=>{let s={..._?.linked};x().map(e=>{let h=e.ssg_track_key;s?.[h]||(s[h]={idairguide:e?.guia})}),m("linked",s);let r={ssg_manifest_key:t?.mId},g={linkedBags:s};if(w()){let e={...S("manifestList")};e?.[t?.mId]?.linkedBags||(e[t?.mId].linkedBags={}),e[t?.mId].linkedBags=s,Y("manifestList",e),await Z(et,tt,e)}else await _t(r,g);y(`/manifest-detail?mId=${t?.mId}`,{replace:!0}),setTimeout(()=>{dt([])},450)};return(()=>{var s=it(),r=s.firstChild;r.firstChild;var g=r.nextSibling;return n(r,d(ct,{color:"#c8193c",label:"Associar Manifiesto",handleClick:D}),null),n(g,d(rt,{get status(){return b()},get locat(){return b()}}),null),n(g,d(H,{get when(){return x()?.length>0},get children(){return[at(),d(K,{get each(){return U(x(),"timeStamp",0)},children:(e,h)=>(()=>{var p=nt(),I=p.firstChild,L=I.firstChild,v=L.nextSibling,E=v.nextSibling,P=I.nextSibling,$=P.firstChild,F=$.nextSibling,T=F.nextSibling;return n(L,d(ot,{get name(){return S("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),v.style.setProperty("padding","8px"),n(v,()=>e?.idairguide),E.style.setProperty("padding","8px"),n(E,()=>e?.tracking),n(p,d(lt,{}),P),n($,()=>e?.city),n(T,()=>e?.consigneeInfo?.ybestate),z(()=>N(p,`client_item_box gWXAaj jlytmu manifest  ${W()?"isMobile":"centerBx"}`)),p})()})]}}),null),s})()}const ut=async t=>{let i={params:t};if(w())return{...S("manifestList")?.[t?.id]};{let a=B(703003);return i={...i,...a},await M(i)}},_t=async(t,i)=>{let a={params:t,data2update:i},c=B(709002);a={...a,...c};const _=await M(a),m=X(i?.linkedBags).map(async(y,b)=>{await mt({ssg_track_key:y,idairguide:"all"},{currentManifestKey:t?.ssg_manifest_key})});return await Promise.all(m),_},mt=async(t,i)=>{let a={params:t,data2update:i},c=B(809004);return a={...a,...c},await M(a)};export{Mt as default,x as manifestScan,xt as scannedQRs,dt as setManifestScan,St as setScannedQRs,Bt as setStatus,kt as status,_t as updLinkedBags};
