const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-jqJgTjDq.js","assets/index-DH8C3qs7.js","assets/index-DEEWbFNK.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/CheckBoxSlide-Bd5YO33o.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ShowOfflinedata-WvCI11-i.js","assets/Util-CKCUAuLU.js","assets/DialogHRM-CvD8NJGp.js","assets/DialogHRM-V9_lZntj.css","assets/Scanning-BuyqB6Qz.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-BlUV_0we.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as G,_ as V,a as B,b as ie,i as t,d as e,S as p,t as a,A as H,B as z,C as U,D as F,G as oe,h as ne,e as P,s as R,k as me,f as E,H as j,y as d,z as I,w as Y,g as N,I as de,J as he,v as J,n as pe,K as ge}from"./index-DH8C3qs7.js";import D from"./SVG-CAmOGkx7.js";import{f as K,d as Q,q as M,u as S,n as ve,o as O,i as le,c as fe,O as se,r as L,v as $e,w as be,x as re,y as X,b as W,a as Z,z as ee}from"./Util-CKCUAuLU.js";import{d as _e}from"./InitPrintServices-Cu6eu-iZ.js";import{CloseModal as ye,OpenModal as te}from"./DialogHRM-CvD8NJGp.js";import{l as ke}from"./Scanning-BuyqB6Qz.js";import"./PDFButton-DzKPI8bv.js";import"./App.module-CbHnVtRQ.js";import"./Toast-BlUV_0we.js";var Se=a("<div> "),we=a("<div class=loading_wapp><div id=buttonDiv></div>");const Ae=G(()=>V(()=>import("./LoadingColorSpinner-jqJgTjDq.js"),__vite__mapDeps([0,1,2,3]))),ae=async n=>{const c=await K({query:"qcm42351987"});if(c&&!c.error){let g=Q(M())||{},v=Object.assign({},g,c);S(M(),v)}return Ce(),1},Ce=async()=>{const i=await K({query:"qml987lg1936"});if(i&&!i.error){H("store",i),S("storeGroupBy",ve(i?.stores));let c={...i};c._id="M023009",c.qryStore=Q(M()),O.get("M023009",function(v,k){v?O.post(c,function(s,u){s||console.log("Successfully posted dbParamsS")}):S("M023009",i)}),_e()}},xe=async()=>{const i=await le({query:"qml987lg1936"});i&&!i.error&&(H("store",i.data),S("M023009",i.data))},ce=async n=>{let i=fe(992002);if(i){i.params={tkn:n};let g=await K(i);if(g?.userId){let v=[];se(g.accessActivities).map(b=>{let s=g.accessActivities[b];s.isActive&&v.push({id:s.idCode,label:s.label})}),z("profile",g);let k={...g};k._id="118238",L.get("118238",function(s,u){s&&L.post(k,function(h,_){console.log(h)})}),U(g?.picture),F("roles",g?.accessLogistic),Q("M023009")?.statusAllList.map(b=>{g?.accessLogistic?.[b.id]?.isActive}),setTimeout(()=>{$e("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{be()},1800)},1800)}}},Ee=()=>new Promise(async(n,i)=>{L.get("118238",function(g,v){if(!v){n(!1);return}O.get("M023009",function(b,s){if(b)n(!1);else{z("profile",v);let u=[];se(v.accessActivities).map(h=>{let _=v.accessActivities[h];_.isActive&&u.push({id:_.idCode,label:_.label})}),U(v?.picture),F("roles",v?.accessLogistic),S(M(),s?.qryStore),S("M023009",s),H("store",s);let r=[];s?.statusAllList.map(h=>{v?.accessLogistic?.[h.id]?.isActive&&r.push(h)}),oe("list",r),n(!0)}})})});function Ie({did:n}){const[i,c]=B(!1),[g,v]=B(!1),k=async s=>{let u=s.credential?.slice(s.credential.toString().length-32,s.credential.toString().length-16);u=s.credential?.slice(0,16);let r={params:{id_token:s.credential},query:"getGoogleUserbyToken"};const h=await le(r);if(h&&h.data){let _=new Date().getTime(),C=new Date(_+6e4*60*24*365),T=X(),w=re(h.data.split(":")[1],u);S("sectionKey",w),document.cookie=`${T}=${h.data}; expires=${C}; path=/;g_state = {"i_l":1,"i_p":${C}}; ssgl_access_tkn = ${s.credential}`,document.cookie=`ssgl_access_tkn = ${s.credential}; expires=${C};`,await ae(),ce(h.data)}},b=()=>{let s=window.google;s&&!i()&&(s?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:k}),s?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),c(!0),g()&&clearInterval(g()))};return ie(()=>{let s=setInterval(()=>{b()},120);b(),v(s)}),(()=>{var s=we(),u=s.firstChild;return t(s,e(p,{get when(){return!i()},get children(){var r=Se();return r.firstChild,t(r,e(Ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r}}),u),s})()}var Pe=a('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function je(n){const i=()=>{let c=X();document.cookie=`${c}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",z("profile",void 0),U(void 0),F("roles",void 0),ye(n?.modalId),L.destroy(),O.destroy()};return(()=>{var c=Pe(),g=c.firstChild,v=g.firstChild,k=v.firstChild,b=v.nextSibling,s=b.firstChild,u=s.nextSibling;return c.style.setProperty("max-height","80vh"),c.style.setProperty("width","350px"),c.style.setProperty("overflow","auto"),c.style.setProperty("background","#ffffff"),c.style.setProperty("border-radius","13"),c.style.setProperty("padding","10px 19px"),v.$$click=i,t(s,()=>n?.val?.email),t(u,()=>n?.val?.name),P(()=>R(k,"src",n?.val?.picture)),c})()}ne(["click"]);var Re=a('<p class="title-header centerBx">Stephanie Solution'),Me=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),Oe=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Le=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Te=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),qe=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),Ne=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/inventory><span>Inventario'),Be=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),De=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/expenses><span>Gastos'),Ge=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/orders><span>Ordenes'),Ve=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),He=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/remittance><span>Remesas'),ze=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),Ue=a('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),Fe=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Ke=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),Qe=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),Xe=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Ventas</span></a><ul class=sub-menu>'),Ye=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),Je=a('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),We=a('<div class="icon_status centerBx">'),Ze=a('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),et=a("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),tt=a('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async></a></div><div class="centerBx bottombx ">'),it=a('<h5 class="">Offline'),nt=a('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');const lt=G(()=>V(()=>import("./CheckBoxSlide-Bd5YO33o.js"),__vite__mapDeps([4,1,2,5]))),st=G(()=>V(()=>import("./ShowOfflinedata-WvCI11-i.js"),__vite__mapDeps([6,1,2,7,8,9,10,11,12,13,14])));function gt(){const[n,i]=B(!1),c=()=>{k(),g()},g=async()=>{let u=ee("ssgl_access_tkn"),r=ee(X());if(u&&r&&r.length>10&&u.length>10){let h=u?.slice(u.toString().length-32,u.toString().length-16);h=u?.slice(0,16);let _=re(r.split(":")[1],h);S("sectionKey",_),await Ee(),setTimeout(()=>{v(r)},850)}else xe()},v=async u=>{await ae(),await ce(u)},k=async()=>{let r=await(await fetch(`${Z("svgsSSL.json")}`)).json();return S("svgSymbols",r),ge(r),r};ie(async()=>{c(),ke()}),me(()=>{});const b=()=>{let u=W(),r={};r.id=u,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=e(je,{get val(){return pe?.profile},modalId:u}),te(r)},s=u=>{let r={},h=W();r.id=h,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=e(st,{modalId:h}),te(r)};return(()=>{var u=tt(),r=u.firstChild,h=r.firstChild,_=h.firstChild,C=_.firstChild,T=C.firstChild,w=_.nextSibling;return t(C,e(p,{get when(){return!E()},get children(){return Re()}}),null),t(h,e(p,{get when(){return E()||j()},get children(){var m=Ue(),o=m.firstChild,x=o.firstChild;return x.$$click=()=>i(!n()),t(o,e(p,{get when(){return d?.roles?.SEARCH?.isActive},get children(){var l=Me();return l.$$click=()=>i(!n()),l}}),null),t(o,e(p,{get when(){return d?.roles?.REPORT?.isActive},get children(){var l=Oe();return l.$$click=()=>i(!n()),l}}),null),t(o,e(p,{get when(){return d?.roles?.SCANING?.isActive},get children(){var l=Le();return l.$$click=()=>i(!n()),l}}),null),t(o,e(p,{get when(){return d?.roles?.HBL?.isActive},get children(){var l=Te();return l.$$click=()=>i(!n()),l}}),null),t(o,e(p,{get when(){return I()&&d?.roles?.MANIFEST?.isActive},get children(){var l=qe();return l.$$click=()=>i(!n()),l}}),null),t(o,e(p,{get when(){return d?.roles?.INVENTORY?.isActive},get children(){var l=Ne();return l.$$click=()=>i(!n()),l}}),null),t(o,e(p,{get when(){return d?.roles?.PRODUCTS?.isActive},get children(){var l=Be();return l.$$click=()=>i(!n()),l}}),null),t(o,e(p,{get when(){return d?.roles?.EXPENSES?.isActive},get children(){var l=De();return l.$$click=()=>i(!n()),l}}),null),t(o,e(p,{get when(){return d?.roles?.POS?.isActive},get children(){var l=Ge();return l.$$click=()=>i(!n()),l}}),null),t(o,e(p,{get when(){return Y()},get children(){return[(()=>{var l=Ve();return l.$$click=()=>i(!n()),l})(),(()=>{var l=He();return l.$$click=()=>i(!n()),l})(),(()=>{var l=ze();return l.$$click=()=>i(!n()),l})()]}}),null),P(()=>N(m,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${n()?"is-open":""}`)),m}}),w),t(h,e(p,{get when(){return!(E()||j())},get children(){var m=Je(),o=m.firstChild,x=o.firstChild,l=x.nextSibling,ue=l.firstChild,q=ue.nextSibling;return t(q,e($,{label:"Buscar",url:"/search",get validation(){return d?.roles?.SEARCH?.isActive}}),null),t(q,e($,{label:"Reportes",url:"/reports",get validation(){return d?.roles?.REPORT?.isActive}}),null),t(q,e($,{label:"HBL",url:"/findhbl",get validation(){return d?.roles?.HBL?.isActive}}),null),t(o,e(p,{get when(){return d?.roles?.SCANING?.isActive},get children(){return Fe()}}),null),t(o,e(p,{get when(){return d?.roles?.DELIVERY?.isActive||d?.roles?.MANIFEST?.isActive},get children(){var y=Ke(),A=y.firstChild,f=A.nextSibling;return t(f,e($,{label:"Entregas",url:"/delivery",get validation(){return d?.roles?.DELIVERY?.isActive}}),null),t(f,e($,{label:"Manifiestos",url:"/manifest",get validation(){return I()&&d?.roles?.MANIFEST?.isActive}}),null),y}}),null),t(o,e(p,{get when(){return de()},get children(){var y=Qe(),A=y.firstChild,f=A.nextSibling;return t(f,e($,{label:"Inventario",url:"/inventory",get validation(){return d?.roles?.INVENTORY?.isActive}}),null),t(f,e($,{label:"Productos",url:"/products",get validation(){return d?.roles?.PRODUCTS?.isActive}}),null),t(f,e($,{label:"Conteo de Productos",url:"/counting-products",get validation(){return d?.roles?.PRODUCTS?.isActive}}),null),t(f,e($,{label:"Gastos",url:"/expenses",get validation(){return d?.roles?.EXPENSES?.isActive}}),null),y}}),null),t(o,e(p,{get when(){return d?.roles?.POS?.isActive},get children(){var y=Xe(),A=y.firstChild,f=A.nextSibling;return t(f,e($,{label:"POS",url:"/pos-sales",get validation(){return d?.roles?.POS?.isActive}}),null),t(f,e($,{label:"Ordenes",url:"/orders",get validation(){return d?.roles?.POS?.isActive}}),null),y}}),null),t(o,e(p,{get when(){return Y()},get children(){var y=Ye(),A=y.firstChild,f=A.nextSibling;return t(f,e($,{label:"Beneficiarios",url:"/beneficiaries",validation:1}),null),t(f,e($,{label:"Remesas",url:"/remittance",get validation(){return d?.roles?.EXPENSES?.isActive}}),null),t(f,e($,{label:"Clientes",url:"/shippers",validation:1}),null),t(f,e($,{label:"Users",url:"/users",validation:1}),null),y}}),null),m}}),w),t(w,e(lt,{get initValue(){return I()},updChange:()=>he(!I()),color:"var(--background-red-ssg)"}),null),t(w,e(p,{get when(){return E()},get fallback(){return(()=>{var m=it();return m.$$click=s,m})()},get children(){var m=We();return m.$$click=s,t(m,e(D,{get name(){return I()?"link-off":"link"},size:24,get color(){return I()?"var(--background-red-ssg)":"var(--hrm-palette-tertiary60)"}})),m}}),null),t(w,e(p,{get when(){return E()||j()},get children(){var m=Ze(),o=m.firstChild;return o.$$click=()=>i(!n()),t(o,e(D,{get name(){return n()?"Xclose":"menu"},size:24,get color(){return n()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),P(()=>N(o,`icon_status centerBx ${n()?"menu":"Xclose"}`)),m}}),null),t(h,e(p,{get when(){return J()},get fallback(){return e(Ie,{})},get children(){var m=et(),o=m.firstChild;return m.$$click=b,P(()=>R(o,"src",J())),m}}),null),P(m=>{var o=`site-header ${E()||j()?"isMobile":""}`,x=`${Z("SSG.webp")}`;return o!==m.e&&N(u,m.e=o),x!==m.t&&R(T,"src",m.t=x),m},{e:void 0,t:void 0}),u})()}const $=n=>e(p,{get when(){return n?.validation},get children(){var i=nt(),c=i.firstChild,g=c.firstChild;return t(g,()=>n?.label),t(c,e(D,{get name(){return n?.icon}}),null),P(()=>R(c,"href",n?.url)),i}});ne(["click"]);export{gt as default};
