const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DQGmi-MW.js","assets/index-CGo5jeZ2.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/CheckBoxSlide-BoFS6EwH.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ShowOfflinedata-BTmgzJ-O.js","assets/Util-B95KFj0U.js","assets/DialogHRM-DlnlrJ34.js","assets/DialogHRM-V9_lZntj.css","assets/Scanning-2HjSCCSL.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-BTTT3uJk.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as G,_ as H,a as B,b as ie,i as t,d as e,S as v,t as u,A as V,B as z,C as U,D as F,G as oe,h as ne,e as I,s as M,k as me,f as x,H as R,y as g,z as E,w as Y,g as N,I as de,J as he,v as J,n as pe,K as ge}from"./index-CGo5jeZ2.js";import D from"./SVG-DQuQBPEs.js";import{f as K,d as Q,q as P,u as k,n as ve,o as L,i as le,c as fe,O as se,r as T,v as $e,w as be,x as re,y as X,b as W,a as Z,z as ee}from"./Util-B95KFj0U.js";import{d as _e}from"./InitPrintServices-CRUpqvaO.js";import{CloseModal as ye,OpenModal as te}from"./DialogHRM-DlnlrJ34.js";import{l as ke}from"./Scanning-2HjSCCSL.js";import"./PDFButton-CdQgLQHP.js";import"./App.module-CbHnVtRQ.js";import"./Toast-BTTT3uJk.js";var Se=u("<div> "),we=u("<div class=loading_wapp><div id=buttonDiv></div>");const Ae=G(()=>H(()=>import("./LoadingColorSpinner-DQGmi-MW.js"),__vite__mapDeps([0,1,2,3]))),ae=async n=>{const a=await K({query:"qcm42351987"});if(a&&!a.error){let h=Q(P())||{},p=Object.assign({},h,a);k(P(),p)}return Ce(),1},Ce=async()=>{const i=await K({query:"qml987lg1936"});if(i&&!i.error){V("store",i),k("storeGroupBy",ve(i?.stores));let a={...i};a._id="M023009",a.qryStore=Q(P()),L.get("M023009",function(p,y){p?L.post(a,function(l,c){l||console.log("Successfully posted dbParamsS")}):k("M023009",i)}),_e()}},xe=async()=>{const i=await le({query:"qml987lg1936"});i&&!i.error&&(V("store",i.data),k("M023009",i.data))},ce=async n=>{let i=fe(992002);if(i){i.params={tkn:n};let h=await K(i);if(h?.userId){let p=[];se(h.accessActivities).map(f=>{let l=h.accessActivities[f];l.isActive&&p.push({id:l.idCode,label:l.label})}),z("profile",h);let y={...h};y._id="118238",T.get("118238",function(l,c){l&&T.post(y,function(d,_){console.log(d)})}),U(h?.picture),F("roles",h?.accessLogistic),Q("M023009")?.statusAllList.map(f=>{h?.accessLogistic?.[f.id]?.isActive}),setTimeout(()=>{$e("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{be()},1800)},1800)}}},Ee=()=>new Promise(async(n,i)=>{T.get("118238",function(h,p){if(!p){n(!1);return}L.get("M023009",function(f,l){if(f)n(!1);else{z("profile",p);let c=[];se(p.accessActivities).map(d=>{let _=p.accessActivities[d];_.isActive&&c.push({id:_.idCode,label:_.label})}),U(p?.picture),F("roles",p?.accessLogistic),k(P(),l?.qryStore),k("M023009",l),V("store",l);let r=[];l?.statusAllList.map(d=>{p?.accessLogistic?.[d.id]?.isActive&&r.push(d)}),oe("list",r),n(!0)}})})});function Ie({did:n}){const[i,a]=B(!1),[h,p]=B(!1),y=async l=>{let c=l.credential?.slice(l.credential.toString().length-32,l.credential.toString().length-16);c=l.credential?.slice(0,16);let r={params:{id_token:l.credential},query:"getGoogleUserbyToken"};const d=await le(r);if(d&&d.data){let _=new Date().getTime(),A=new Date(_+6e4*60*24*365),O=X(),w=re(d.data.split(":")[1],c);k("sectionKey",w),document.cookie=`${O}=${d.data}; expires=${A}; path=/;g_state = {"i_l":1,"i_p":${A}}; ssgl_access_tkn = ${l.credential}`,document.cookie=`ssgl_access_tkn = ${l.credential}; expires=${A};`,await ae(),ce(d.data)}},f=()=>{let l=window.google;l&&!i()&&(l?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:y}),l?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),a(!0),h()&&clearInterval(h()))};return ie(()=>{let l=setInterval(()=>{f()},120);f(),p(l)}),(()=>{var l=we(),c=l.firstChild;return t(l,e(v,{get when(){return!i()},get children(){var r=Se();return r.firstChild,t(r,e(Ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r}}),c),l})()}var je=u('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function Re(n){const i=()=>{let a=X();document.cookie=`${a}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",z("profile",void 0),U(void 0),F("roles",void 0),ye(n?.modalId),T.destroy(),L.destroy()};return(()=>{var a=je(),h=a.firstChild,p=h.firstChild,y=p.firstChild,f=p.nextSibling,l=f.firstChild,c=l.nextSibling;return a.style.setProperty("max-height","80vh"),a.style.setProperty("width","350px"),a.style.setProperty("overflow","auto"),a.style.setProperty("background","#ffffff"),a.style.setProperty("border-radius","13"),a.style.setProperty("padding","10px 19px"),p.$$click=i,t(l,()=>n?.val?.email),t(c,()=>n?.val?.name),I(()=>M(y,"src",n?.val?.picture)),a})()}ne(["click"]);var Me=u('<p class="title-header centerBx">Stephanie Solution'),Pe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),Le=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Te=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Oe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),qe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),Ne=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/inventory><span>Inventario'),Be=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),De=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/expenses><span>Gastos'),Ge=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),He=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/remittance><span>Remesas'),Ve=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),ze=u('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),Ue=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Fe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),Ke=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),Qe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),Xe=u('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),Ye=u('<div class="icon_status centerBx">'),Je=u('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),We=u("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),Ze=u('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async></a></div><div class="centerBx bottombx ">'),et=u('<h5 class="">Offline'),tt=u('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');const it=G(()=>H(()=>import("./CheckBoxSlide-BoFS6EwH.js"),__vite__mapDeps([4,1,2,5]))),nt=G(()=>H(()=>import("./ShowOfflinedata-BTmgzJ-O.js"),__vite__mapDeps([6,1,2,7,8,9,10,11,12,13,14])));function ht(){const[n,i]=B(!1),a=()=>{y(),h()},h=async()=>{let c=ee("ssgl_access_tkn"),r=ee(X());if(c&&r&&r.length>10&&c.length>10){let d=c?.slice(c.toString().length-32,c.toString().length-16);d=c?.slice(0,16);let _=re(r.split(":")[1],d);k("sectionKey",_),await Ee(),setTimeout(()=>{p(r)},850)}else xe()},p=async c=>{await ae(),await ce(c)},y=async()=>{let r=await(await fetch(`${Z("svgsSSL.json")}`)).json();return k("svgSymbols",r),ge(r),r};ie(async()=>{a(),ke()}),me(()=>{});const f=()=>{let c=W(),r={};r.id=c,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=e(Re,{get val(){return pe?.profile},modalId:c}),te(r)},l=c=>{let r={},d=W();r.id=d,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=e(nt,{modalId:d}),te(r)};return(()=>{var c=Ze(),r=c.firstChild,d=r.firstChild,_=d.firstChild,A=_.firstChild,O=A.firstChild,w=_.nextSibling;return t(A,e(v,{get when(){return!x()},get children(){return Me()}}),null),t(d,e(v,{get when(){return x()||R()},get children(){var o=ze(),m=o.firstChild,C=m.firstChild;return C.$$click=()=>i(!n()),t(m,e(v,{get when(){return g?.roles?.SEARCH?.isActive},get children(){var s=Pe();return s.$$click=()=>i(!n()),s}}),null),t(m,e(v,{get when(){return g?.roles?.REPORT?.isActive},get children(){var s=Le();return s.$$click=()=>i(!n()),s}}),null),t(m,e(v,{get when(){return g?.roles?.SCANING?.isActive},get children(){var s=Te();return s.$$click=()=>i(!n()),s}}),null),t(m,e(v,{get when(){return g?.roles?.HBL?.isActive},get children(){var s=Oe();return s.$$click=()=>i(!n()),s}}),null),t(m,e(v,{get when(){return E()&&g?.roles?.MANIFEST?.isActive},get children(){var s=qe();return s.$$click=()=>i(!n()),s}}),null),t(m,e(v,{get when(){return g?.roles?.INVENTORY?.isActive},get children(){var s=Ne();return s.$$click=()=>i(!n()),s}}),null),t(m,e(v,{get when(){return g?.roles?.PRODUCTS?.isActive},get children(){var s=Be();return s.$$click=()=>i(!n()),s}}),null),t(m,e(v,{get when(){return g?.roles?.EXPENSES?.isActive},get children(){var s=De();return s.$$click=()=>i(!n()),s}}),null),t(m,e(v,{get when(){return Y()},get children(){return[(()=>{var s=Ge();return s.$$click=()=>i(!n()),s})(),(()=>{var s=He();return s.$$click=()=>i(!n()),s})(),(()=>{var s=Ve();return s.$$click=()=>i(!n()),s})()]}}),null),I(()=>N(o,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${n()?"is-open":""}`)),o}}),w),t(d,e(v,{get when(){return!(x()||R())},get children(){var o=Xe(),m=o.firstChild,C=m.firstChild,s=C.nextSibling,ue=s.firstChild,q=ue.nextSibling;return t(q,e($,{label:"Buscar",url:"/search",get validation(){return g?.roles?.SEARCH?.isActive}}),null),t(q,e($,{label:"Reportes",url:"/reports",get validation(){return g?.roles?.REPORT?.isActive}}),null),t(q,e($,{label:"HBL",url:"/findhbl",get validation(){return g?.roles?.HBL?.isActive}}),null),t(m,e(v,{get when(){return g?.roles?.SCANING?.isActive},get children(){return Ue()}}),null),t(m,e(v,{get when(){return g?.roles?.DELIVERY?.isActive||g?.roles?.MANIFEST?.isActive},get children(){var S=Fe(),j=S.firstChild,b=j.nextSibling;return t(b,e($,{label:"Entregas",url:"/delivery",get validation(){return g?.roles?.DELIVERY?.isActive}}),null),t(b,e($,{label:"Manifiestos",url:"/manifest",get validation(){return E()&&g?.roles?.MANIFEST?.isActive}}),null),S}}),null),t(m,e(v,{get when(){return de()},get children(){var S=Ke(),j=S.firstChild,b=j.nextSibling;return t(b,e($,{label:"Inventario",url:"/inventory",get validation(){return g?.roles?.INVENTORY?.isActive}}),null),t(b,e($,{label:"Productos",url:"/products",get validation(){return g?.roles?.PRODUCTS?.isActive}}),null),t(b,e($,{label:"Conteo de Productos",url:"/counting-products",get validation(){return g?.roles?.PRODUCTS?.isActive}}),null),t(b,e($,{label:"Gastos",url:"/expenses",get validation(){return g?.roles?.EXPENSES?.isActive}}),null),S}}),null),t(m,e(v,{get when(){return Y()},get children(){var S=Qe(),j=S.firstChild,b=j.nextSibling;return t(b,e($,{label:"Beneficiarios",url:"/beneficiaries",validation:1}),null),t(b,e($,{label:"Remesas",url:"/remittance",get validation(){return g?.roles?.EXPENSES?.isActive}}),null),t(b,e($,{label:"Clientes",url:"/shippers",validation:1}),null),t(b,e($,{label:"Users",url:"/users",validation:1}),null),S}}),null),o}}),w),t(w,e(it,{get initValue(){return E()},updChange:()=>he(!E()),color:"var(--background-red-ssg)"}),null),t(w,e(v,{get when(){return x()},get fallback(){return(()=>{var o=et();return o.$$click=l,o})()},get children(){var o=Ye();return o.$$click=l,t(o,e(D,{get name(){return E()?"link-off":"link"},size:24,get color(){return E()?"var(--background-red-ssg)":"var(--hrm-palette-tertiary60)"}})),o}}),null),t(w,e(v,{get when(){return x()||R()},get children(){var o=Je(),m=o.firstChild;return m.$$click=()=>i(!n()),t(m,e(D,{get name(){return n()?"Xclose":"menu"},size:24,get color(){return n()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),I(()=>N(m,`icon_status centerBx ${n()?"menu":"Xclose"}`)),o}}),null),t(d,e(v,{get when(){return J()},get fallback(){return e(Ie,{})},get children(){var o=We(),m=o.firstChild;return o.$$click=f,I(()=>M(m,"src",J())),o}}),null),I(o=>{var m=`site-header ${x()||R()?"isMobile":""}`,C=`${Z("SSG.webp")}`;return m!==o.e&&N(c,o.e=m),C!==o.t&&M(O,"src",o.t=C),o},{e:void 0,t:void 0}),c})()}const $=n=>e(v,{get when(){return n?.validation},get children(){var i=tt(),a=i.firstChild,h=a.firstChild;return t(h,()=>n?.label),t(a,e(D,{get name(){return n?.icon}}),null),I(()=>M(a,"href",n?.url)),i}});ne(["click"]);export{ht as default};
