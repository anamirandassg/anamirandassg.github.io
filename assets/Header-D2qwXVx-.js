const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-B6NChX0j.js","assets/index-DRpz4y-S.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/CheckBoxSlide-CjKIGAIN.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ShowOfflinedata-CK0Z_veX.js","assets/DialogHRM-BwujtE47.js","assets/DialogHRM-V9_lZntj.css","assets/Scanning-CbZksjFP.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-B9ChhmfU.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as G,_ as V,a as N,s as ie,i as t,d as e,S as g,t as u,q as H,o as U,P as L,Q as k,R as z,T as ue,U as R,C as ne,p as me,O as le,V as F,W as P,X as Q,Y,Z as de,$ as he,a0 as pe,a1 as se,a2 as K,h as re,e as E,A as T,k as ge,g as x,a3 as M,K as v,M as I,E as X,f as B,a4 as ve,a5 as fe,B as W,j as Z,n as $e,a6 as J,a7 as ee,a8 as _e}from"./index-DRpz4y-S.js";import D from"./SVG-CNsBYLwQ.js";import{d as be}from"./InitPrintServices-pmhW66Dq.js";import{CloseModal as ye,OpenModal as te}from"./DialogHRM-BwujtE47.js";import{l as ke}from"./Scanning-CbZksjFP.js";import"./PDFButton-C1E5fvKc.js";import"./App.module-CbHnVtRQ.js";import"./Toast-B9ChhmfU.js";var Se=u("<div> "),we=u("<div class=loading_wapp><div id=buttonDiv></div>");const Ae=G(()=>V(()=>import("./LoadingColorSpinner-B6NChX0j.js"),__vite__mapDeps([0,1,2,3]))),ae=async n=>{const a=await H({query:"qcm42351987"});if(a&&!a.error){let h=U(L())||{},p=Object.assign({},h,a);k(L(),p)}return Ce(),1},Ce=async()=>{const i=await H({query:"qml987lg1936"});if(i&&!i.error){z("store",i),k("storeGroupBy",ue(i?.stores));let a={...i};a._id="M023009",a.qryStore=U(L()),R.get("M023009",function(p,b){p?R.post(a,function(l,c){l||console.log("Successfully posted dbParamsS")}):k("M023009",i)}),be()}},xe=async()=>{const i=await ne({query:"qml987lg1936"});i&&!i.error&&(z("store",i.data),k("M023009",i.data))},ce=async n=>{let i=me(992002);if(i){i.params={tkn:n};let h=await H(i);if(h?.userId){let p=[];le(h.accessActivities).map(f=>{let l=h.accessActivities[f];l.isActive&&p.push({id:l.idCode,label:l.label})}),F("profile",h);let b={...h};b._id="118238",P.get("118238",function(l,c){l&&P.post(b,function(d,$){console.log(d)})}),Q(h?.picture),Y("roles",h?.accessLogistic),U("M023009")?.statusAllList.map(f=>{h?.accessLogistic?.[f.id]?.isActive}),setTimeout(()=>{de("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{he()},1800)},1800)}}},Ie=()=>new Promise(async(n,i)=>{P.get("118238",function(h,p){if(!p){n(!1);return}R.get("M023009",function(f,l){if(f)n(!1);else{F("profile",p);let c=[];le(p.accessActivities).map(d=>{let $=p.accessActivities[d];$.isActive&&c.push({id:$.idCode,label:$.label})}),Q(p?.picture),Y("roles",p?.accessLogistic),k(L(),l?.qryStore),k("M023009",l),z("store",l);let r=[];l?.statusAllList.map(d=>{p?.accessLogistic?.[d.id]?.isActive&&r.push(d)}),pe("list",r),n(!0)}})})});function Ee({did:n}){const[i,a]=N(!1),[h,p]=N(!1),b=async l=>{let c=l.credential?.slice(l.credential.toString().length-32,l.credential.toString().length-16);c=l.credential?.slice(0,16);let r={params:{id_token:l.credential},query:"getGoogleUserbyToken"};const d=await ne(r);if(d&&d.data){let $=new Date().getTime(),A=new Date($+6e4*60*24*365),q=K(),w=se(d.data.split(":")[1],c);k("sectionKey",w),document.cookie=`${q}=${d.data}; expires=${A}; path=/;g_state = {"i_l":1,"i_p":${A}}; ssgl_access_tkn = ${l.credential}`,document.cookie=`ssgl_access_tkn = ${l.credential}; expires=${A};`,await ae(),ce(d.data)}},f=()=>{let l=window.google;l&&!i()&&(l?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:b}),l?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),a(!0),h()&&clearInterval(h()))};return ie(()=>{let l=setInterval(()=>{f()},120);f(),p(l)}),(()=>{var l=we(),c=l.firstChild;return t(l,e(g,{get when(){return!i()},get children(){var r=Se();return r.firstChild,t(r,e(Ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r}}),c),l})()}var je=u('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function Me(n){const i=()=>{let a=K();document.cookie=`${a}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",F("profile",void 0),Q(void 0),Y("roles",void 0),ye(n?.modalId),P.destroy(),R.destroy()};return(()=>{var a=je(),h=a.firstChild,p=h.firstChild,b=p.firstChild,f=p.nextSibling,l=f.firstChild,c=l.nextSibling;return a.style.setProperty("max-height","80vh"),a.style.setProperty("width","350px"),a.style.setProperty("overflow","auto"),a.style.setProperty("background","#ffffff"),a.style.setProperty("border-radius","13"),a.style.setProperty("padding","10px 19px"),p.$$click=i,t(l,()=>n?.val?.email),t(c,()=>n?.val?.name),E(()=>T(b,"src",n?.val?.picture)),a})()}re(["click"]);var Le=u('<p class="title-header centerBx">Stephanie Solution'),Re=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),Pe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Te=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),qe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),Oe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),Be=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/inventory><span>Inventario'),Ne=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),De=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/expenses><span>Gastos'),Ge=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),Ve=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),He=u('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),Ue=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),ze=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),Fe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),Qe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),Ye=u('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),Ke=u('<div class="icon_status centerBx">'),Xe=u('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),We=u("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),Ze=u('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async></a></div><div class="centerBx bottombx ">'),Je=u('<h5 class="">Offline'),et=u('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');const tt=G(()=>V(()=>import("./CheckBoxSlide-CjKIGAIN.js"),__vite__mapDeps([4,1,2,5]))),it=G(()=>V(()=>import("./ShowOfflinedata-CK0Z_veX.js"),__vite__mapDeps([6,1,2,7,8,9,10,11,12,13])));function mt(){const[n,i]=N(!1),a=()=>{b(),h()},h=async()=>{let c=ee("ssgl_access_tkn"),r=ee(K());if(c&&r&&r.length>10&&c.length>10){let d=c?.slice(c.toString().length-32,c.toString().length-16);d=c?.slice(0,16);let $=se(r.split(":")[1],d);k("sectionKey",$),await Ie(),setTimeout(()=>{p(r)},850)}else xe()},p=async c=>{await ae(),await ce(c)},b=async()=>{let r=await(await fetch(`${J("svgsSSL.json")}`)).json();return k("svgSymbols",r),_e(r),r};ie(async()=>{a(),ke()}),ge(()=>{});const f=()=>{let c=Z(),r={};r.id=c,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=e(Me,{get val(){return $e?.profile},modalId:c}),te(r)},l=c=>{let r={},d=Z();r.id=d,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=e(it,{modalId:d}),te(r)};return(()=>{var c=Ze(),r=c.firstChild,d=r.firstChild,$=d.firstChild,A=$.firstChild,q=A.firstChild,w=$.nextSibling;return t(A,e(g,{get when(){return!x()},get children(){return Le()}}),null),t(d,e(g,{get when(){return x()||M()},get children(){var o=He(),m=o.firstChild,C=m.firstChild;return C.$$click=()=>i(!n()),t(m,e(g,{get when(){return v?.roles?.SEARCH?.isActive},get children(){var s=Re();return s.$$click=()=>i(!n()),s}}),null),t(m,e(g,{get when(){return v?.roles?.REPORT?.isActive},get children(){var s=Pe();return s.$$click=()=>i(!n()),s}}),null),t(m,e(g,{get when(){return v?.roles?.SCANING?.isActive},get children(){var s=Te();return s.$$click=()=>i(!n()),s}}),null),t(m,e(g,{get when(){return v?.roles?.HBL?.isActive},get children(){var s=qe();return s.$$click=()=>i(!n()),s}}),null),t(m,e(g,{get when(){return I()&&v?.roles?.MANIFEST?.isActive},get children(){var s=Oe();return s.$$click=()=>i(!n()),s}}),null),t(m,e(g,{get when(){return v?.roles?.INVENTORY?.isActive},get children(){var s=Be();return s.$$click=()=>i(!n()),s}}),null),t(m,e(g,{get when(){return v?.roles?.PRODUCTS?.isActive},get children(){var s=Ne();return s.$$click=()=>i(!n()),s}}),null),t(m,e(g,{get when(){return v?.roles?.EXPENSES?.isActive},get children(){var s=De();return s.$$click=()=>i(!n()),s}}),null),t(m,e(g,{get when(){return X()},get children(){return[(()=>{var s=Ge();return s.$$click=()=>i(!n()),s})(),(()=>{var s=Ve();return s.$$click=()=>i(!n()),s})()]}}),null),E(()=>B(o,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${n()?"is-open":""}`)),o}}),w),t(d,e(g,{get when(){return!(x()||M())},get children(){var o=Ye(),m=o.firstChild,C=m.firstChild,s=C.nextSibling,oe=s.firstChild,O=oe.nextSibling;return t(O,e(_,{label:"Buscar",url:"/search",get validation(){return v?.roles?.SEARCH?.isActive}}),null),t(O,e(_,{label:"Reportes",url:"/reports",get validation(){return v?.roles?.REPORT?.isActive}}),null),t(O,e(_,{label:"HBL",url:"/findhbl",get validation(){return v?.roles?.HBL?.isActive}}),null),t(m,e(g,{get when(){return v?.roles?.SCANING?.isActive},get children(){return Ue()}}),null),t(m,e(g,{get when(){return v?.roles?.DELIVERY?.isActive||v?.roles?.MANIFEST?.isActive},get children(){var S=ze(),j=S.firstChild,y=j.nextSibling;return t(y,e(_,{label:"Entregas",url:"/delivery",get validation(){return v?.roles?.DELIVERY?.isActive}}),null),t(y,e(_,{label:"Manifiestos",url:"/manifest",get validation(){return I()&&v?.roles?.MANIFEST?.isActive}}),null),S}}),null),t(m,e(g,{get when(){return ve()},get children(){var S=Fe(),j=S.firstChild,y=j.nextSibling;return t(y,e(_,{label:"Inventario",url:"/inventory",get validation(){return v?.roles?.INVENTORY?.isActive}}),null),t(y,e(_,{label:"Productos",url:"/products",get validation(){return v?.roles?.PRODUCTS?.isActive}}),null),t(y,e(_,{label:"Gastos",url:"/expenses",get validation(){return v?.roles?.EXPENSES?.isActive}}),null),S}}),null),t(m,e(g,{get when(){return X()},get children(){var S=Qe(),j=S.firstChild,y=j.nextSibling;return t(y,e(_,{label:"Beneficiaries",url:"/beneficiaries",validation:1}),null),t(y,e(_,{label:"CLientes",url:"/shippers",validation:1}),null),t(y,e(_,{label:"Users",url:"/users",validation:1}),null),S}}),null),o}}),w),t(w,e(tt,{get initValue(){return I()},updChange:()=>fe(!I()),color:"var(--background-red-ssg)"}),null),t(w,e(g,{get when(){return x()},get fallback(){return(()=>{var o=Je();return o.$$click=l,o})()},get children(){var o=Ke();return o.$$click=l,t(o,e(D,{get name(){return I()?"link-off":"link"},size:24,get color(){return I()?"var(--background-red-ssg)":"var(--hrm-palette-tertiary60)"}})),o}}),null),t(w,e(g,{get when(){return x()||M()},get children(){var o=Xe(),m=o.firstChild;return m.$$click=()=>i(!n()),t(m,e(D,{get name(){return n()?"Xclose":"menu"},size:24,get color(){return n()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),E(()=>B(m,`icon_status centerBx ${n()?"menu":"Xclose"}`)),o}}),null),t(d,e(g,{get when(){return W()},get fallback(){return e(Ee,{})},get children(){var o=We(),m=o.firstChild;return o.$$click=f,E(()=>T(m,"src",W())),o}}),null),E(o=>{var m=`site-header ${x()||M()?"isMobile":""}`,C=`${J("SSG.webp")}`;return m!==o.e&&B(c,o.e=m),C!==o.t&&T(q,"src",o.t=C),o},{e:void 0,t:void 0}),c})()}const _=n=>e(g,{get when(){return n?.validation},get children(){var i=et(),a=i.firstChild,h=a.firstChild;return t(h,()=>n?.label),t(a,e(D,{get name(){return n?.icon}}),null),E(()=>T(a,"href",n?.url)),i}});re(["click"]);export{mt as default};
