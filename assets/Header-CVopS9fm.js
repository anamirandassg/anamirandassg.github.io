const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-BL_D4XZ6.js","assets/index-CS03C161.js","assets/index-DGHHyjai.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as U,_ as F,a as w,m as N,i as l,d as r,S as u,t as m,y as P,z as T,A as H,e as D,f as _,n as S,h as X,r as v,B as x,g as I,p as j,C as Y,k as W}from"./index-CS03C161.js";import J from"./SVG-B-oNkerH.js";import{f as A,a as z,q as E,u as y,b as Z,O as ee,l as te,j as ie,d as ne,k as O,m as C,n as L,o as M,g as se}from"./Util-uEfv1z7O.js";import{s as re,i as q}from"./globalSignal-D66ipSOS.js";import{CloseModal as le,OpenModal as ae}from"./DialogHRM-fuWvfnfl.js";import"./index-Ci0zXM0r.js";var ce=m("<div> "),oe=m("<div class=loading_wapp><div id=buttonDiv></div>");const me=U(()=>F(()=>import("./LoadingColorSpinner-BL_D4XZ6.js"),__vite__mapDeps([0,1,2,3]))),Q=async n=>{const c=await A({query:"qcm42351987"});if(c&&!c.error){let p=z(E())||{},g=Object.assign({},p,c);y(E(),g)}return ue(),1},ue=async()=>{const s=await A({query:"qml987lg1936"});s&&!s.error&&y("M023009",s)},K=async n=>{let a=Z(992002);if(a){a.params={tkn:n};const c=await A(a);if(c&&c.userId){let p=[];ee(c.accessActivities).map(t=>{let e=c.accessActivities[t];e.isActive&&p.push({id:e.idCode,label:e.label})}),P("profile",c),T(c?.picture),H("roles",c?.accessLogistic);let g=[];z("M023009")?.statusAllList.map(t=>{c?.accessLogistic?.[t.id]?.isActive&&g.push(t)}),re("list",g),setTimeout(()=>{te("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{ie()},1800)},1800)}}};function de({did:n}){const[a,s]=w(!1),[c,p]=w(!1),g=async e=>{let h=e.credential?.slice(e.credential.toString().length-32,e.credential.toString().length-16);h=e.credential?.slice(0,16);let f={params:{id_token:e.credential},query:"getGoogleUserbyToken"};const $=await ne(f);if($&&$.data){let b=new Date().getTime(),i=new Date(b+6e4*60*24*365),d=C(),k=O($.data.split(":")[1],h);y("sectionKey",k),document.cookie=`${d}=${$.data}; expires=${i}; path=/;g_state = {"i_l":1,"i_p":${i}}; ssgl_access_tkn = ${e.credential}`,document.cookie=`ssgl_access_tkn = ${e.credential}; expires=${i};`,await Q(),K($.data)}},t=()=>{let e=window.google;e&&!a()&&(e?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:g}),e?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),s(!0),c()&&clearInterval(c()))};return N(()=>{let e=setInterval(()=>{t()},120);t(),p(e)}),(()=>{var e=oe(),h=e.firstChild;return l(e,r(u,{get when(){return!a()},get children(){var f=ce();return f.firstChild,l(f,r(me,{stroke:"rgb(200 25 60 / 1)",size:62}),null),f}}),h),e})()}var he=m('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function pe(n){const a=()=>{let s=C();document.cookie=`${s}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",P("profile",void 0),T(void 0),H("roles",void 0),le(n?.modalId)};return(()=>{var s=he(),c=s.firstChild,p=c.firstChild,g=p.firstChild,t=p.nextSibling,e=t.firstChild,h=e.nextSibling;return s.style.setProperty("max-height","80vh"),s.style.setProperty("width","350px"),s.style.setProperty("overflow","auto"),s.style.setProperty("background","#ffffff"),s.style.setProperty("border-radius","13"),s.style.setProperty("padding","10px 19px"),p.$$click=a,l(e,()=>n?.val?.email),l(h,()=>n?.val?.name),_(()=>S(g,"src",n?.val?.picture)),s})()}D(["click"]);var ge=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),ve=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),V=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),G=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),R=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/delivery><span>Entregas'),B=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),fe=m('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),$e=m('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),_e=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/search><span>Buscar'),ye=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),be=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),ke=m('<ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear'),we=m("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),Se=m('<header class=site-header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async><p class="title-header centerBx">Stephanie Solution');function Le(){const[n,a]=w(!1),s=()=>{p();let t=M("ssgl_access_tkn"),e=M(C());if(t&&e&&e.length>10&&t.length>10){let h=t?.slice(t.toString().length-32,t.toString().length-16);h=t?.slice(0,16);let f=O(e.split(":")[1],h);y("sectionKey",f),c(e)}},c=async t=>{await Q(),await K(t)},p=async()=>{let e=await(await fetch(`${L("svgsSSL.json")}`)).json();return y("svgSymbols",e),Y(e),e};N(s),X(()=>{});const g=()=>{let t=se(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=r(pe,{get val(){return W?.profile},modalId:t}),ae(e)};return(()=>{var t=Se(),e=t.firstChild,h=e.firstChild,f=h.firstChild,$=f.firstChild,b=$.firstChild;return l(h,r(u,{get when(){return q()},get children(){return[(()=>{var i=fe(),d=i.firstChild,k=d.firstChild;return k.$$click=()=>a(!n()),l(d,r(u,{get when(){return v?.roles?.SEARCH?.isActive},get children(){var o=ge();return o.$$click=()=>a(!n()),o}}),null),l(d,r(u,{get when(){return v?.roles?.SCANING?.isActive},get children(){var o=ve();return o.$$click=()=>a(!n()),o}}),null),l(d,r(u,{get when(){return v?.roles?.HBL?.isActive},get children(){var o=V();return o.$$click=()=>a(!n()),o}}),null),l(d,r(u,{get when(){return v?.roles?.MANIFEST?.isActive},get children(){var o=G();return o.$$click=()=>a(!n()),o}}),null),l(d,r(u,{get when(){return v?.roles?.DELIVERY?.isActive},get children(){var o=R();return o.$$click=()=>a(!n()),o}}),null),l(d,r(u,{get when(){return x()},get children(){var o=B();return o.$$click=()=>a(!n()),o}}),null),_(()=>I(i,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${n()?"is-open":""}`)),i})(),(()=>{var i=$e(),d=i.firstChild;return d.$$click=()=>a(!n()),l(d,r(J,{get name(){return n()?"Xclose":"menu"},size:24,get color(){return n()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),_(()=>I(d,`icon_status centerBx ${n()?"menu":"Xclose"}`)),i})()]}}),null),l(h,r(u,{get when(){return!q()},get children(){var i=ke();return i.firstChild,l(i,r(u,{get when(){return v?.roles?.SEARCH?.isActive},get children(){return _e()}}),null),l(i,r(u,{get when(){return v?.roles?.SCANING?.isActive},get children(){return ye()}}),null),l(i,r(u,{get when(){return v?.roles?.HBL?.isActive},get children(){return V()}}),null),l(i,r(u,{get when(){return v?.roles?.MANIFEST?.isActive},get children(){return G()}}),null),l(i,r(u,{get when(){return v?.roles?.DELIVERY?.isActive},get children(){return R()}}),null),l(i,r(u,{get when(){return x()},get children(){return[be(),B()]}}),null),i}}),null),l(h,r(u,{get when(){return j()},get fallback(){return r(de,{})},get children(){var i=we(),d=i.firstChild;return i.$$click=g,_(()=>S(d,"src",j())),i}}),null),_(()=>S(b,"src",`${L("SSG.webp")}`)),t})()}D(["click"]);export{Le as default};
