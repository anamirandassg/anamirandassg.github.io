const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DW4SzQXa.js","assets/index-CzfKLxBa.js","assets/index-PRcoyGS_.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as Z,_ as ee,a as L,m as O,i,d as n,S as d,t as u,z as B,A as D,B as H,e as U,f as S,n as C,h as te,v as o,q as P,g as I,C as ne,p as N,D as ie,k as le}from"./index-CzfKLxBa.js";import z from"./SVG-zE3qDjnm.js";import{f as M,a as F,q as T,u as w,j as se,d as Q,b as re,O as ae,k as ce,m as me,n as Y,o as q,r as V,v as G,g as ue}from"./Util-D886uaAp.js";import{a as K,s as oe,i as j,b as R}from"./globalSignal-OLwNkv5r.js";import{d as de}from"./InitPrintServices-BbVI7Xg0.js";import{CloseModal as he,OpenModal as pe}from"./DialogHRM-w3xL4z2O.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";var ge=u("<div> "),ve=u("<div class=loading_wapp><div id=buttonDiv></div>");const $e=Z(()=>ee(()=>import("./LoadingColorSpinner-DW4SzQXa.js"),__vite__mapDeps([0,1,2,3]))),X=async l=>{const c=await M({query:"qcm42351987"});if(c&&!c.error){let h=F(T())||{},g=Object.assign({},h,c);w(T(),g)}return fe(),1},fe=async()=>{const t=await M({query:"qml987lg1936"});t&&!t.error&&(w("M023009",t),K("store",t),w("storeGroupBy",se(t?.stores)),de())},be=async()=>{const t=await Q({query:"qml987lg1936"});t&&!t.error&&(K("store",t.data),w("M023009",t.data))},W=async l=>{let t=re(992002);if(t){t.params={tkn:l};let h=await M(t);if(h?.userId){let g=[];ae(h.accessActivities).map(a=>{let e=h.accessActivities[a];e.isActive&&g.push({id:e.idCode,label:e.label})}),B("profile",h),D(h?.picture),H("roles",h?.accessLogistic);let b=[];F("M023009")?.statusAllList.map(a=>{h?.accessLogistic?.[a.id]?.isActive&&b.push(a)}),oe("list",b),setTimeout(()=>{ce("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{me()},1800)},1800)}}};function _e({did:l}){const[t,c]=L(!1),[h,g]=L(!1),b=async e=>{let p=e.credential?.slice(e.credential.toString().length-32,e.credential.toString().length-16);p=e.credential?.slice(0,16);let $={params:{id_token:e.credential},query:"getGoogleUserbyToken"};const _=await Q($);if(_&&_.data){let x=new Date().getTime(),m=new Date(x+6e4*60*24*365),r=q(),y=Y(_.data.split(":")[1],p);w("sectionKey",y),document.cookie=`${r}=${_.data}; expires=${m}; path=/;g_state = {"i_l":1,"i_p":${m}}; ssgl_access_tkn = ${e.credential}`,document.cookie=`ssgl_access_tkn = ${e.credential}; expires=${m};`,await X(),console.log(_),W(_.data)}},a=()=>{let e=window.google;e&&!t()&&(e?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:b}),e?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),c(!0),h()&&clearInterval(h()))};return O(()=>{let e=setInterval(()=>{a()},120);a(),g(e)}),(()=>{var e=ve(),p=e.firstChild;return i(e,n(d,{get when(){return!t()},get children(){var $=ge();return $.firstChild,i($,n($e,{stroke:"rgb(200 25 60 / 1)",size:62}),null),$}}),p),e})()}var ye=u('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function ke(l){const t=()=>{let c=q();document.cookie=`${c}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",B("profile",void 0),D(void 0),H("roles",void 0),he(l?.modalId)};return(()=>{var c=ye(),h=c.firstChild,g=h.firstChild,b=g.firstChild,a=g.nextSibling,e=a.firstChild,p=e.nextSibling;return c.style.setProperty("max-height","80vh"),c.style.setProperty("width","350px"),c.style.setProperty("overflow","auto"),c.style.setProperty("background","#ffffff"),c.style.setProperty("border-radius","13"),c.style.setProperty("padding","10px 19px"),g.$$click=t,i(e,()=>l?.val?.email),i(p,()=>l?.val?.name),S(()=>C(b,"src",l?.val?.picture)),c})()}U(["click"]);var we=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),Se=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Ae=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Ce=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),xe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),Ee=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/delivery><span>Entregas'),Ie=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/inventory><span>Inventario'),je=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),Re=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/expenses><span>Gastos'),Le=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),Me=u('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),qe=u('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),Pe=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Ne=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),Te=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),Ve=u('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),Ge=u('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),Oe=u("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),Be=u('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async><p class="title-header centerBx">Stephanie Solution'),De=u('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');function We(){const[l,t]=L(!1),c=()=>{g();let a=V("ssgl_access_tkn"),e=V(q());if(a&&e&&e.length>10&&a.length>10){let p=a?.slice(a.toString().length-32,a.toString().length-16);p=a?.slice(0,16);let $=Y(e.split(":")[1],p);w("sectionKey",$),h(e)}else be()},h=async a=>{await X(),await W(a)},g=async()=>{let e=await(await fetch(`${G("svgsSSL.json")}`)).json();return w("svgSymbols",e),ie(e),e};O(c),te(()=>{});const b=()=>{let a=ue(),e={};e.id=a,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=n(ke,{get val(){return le?.profile},modalId:a}),pe(e)};return(()=>{var a=Be(),e=a.firstChild,p=e.firstChild,$=p.firstChild,_=$.firstChild,x=_.firstChild;return i(p,n(d,{get when(){return j()||R()},get children(){return[(()=>{var m=Me(),r=m.firstChild,y=r.firstChild;return y.$$click=()=>t(!l()),i(r,n(d,{get when(){return o?.roles?.SEARCH?.isActive},get children(){var s=we();return s.$$click=()=>t(!l()),s}}),null),i(r,n(d,{get when(){return o?.roles?.REPORT?.isActive},get children(){var s=Se();return s.$$click=()=>t(!l()),s}}),null),i(r,n(d,{get when(){return o?.roles?.SCANING?.isActive},get children(){var s=Ae();return s.$$click=()=>t(!l()),s}}),null),i(r,n(d,{get when(){return o?.roles?.HBL?.isActive},get children(){var s=Ce();return s.$$click=()=>t(!l()),s}}),null),i(r,n(d,{get when(){return o?.roles?.MANIFEST?.isActive},get children(){var s=xe();return s.$$click=()=>t(!l()),s}}),null),i(r,n(d,{get when(){return o?.roles?.DELIVERY?.isActive},get children(){var s=Ee();return s.$$click=()=>t(!l()),s}}),null),i(r,n(d,{get when(){return o?.roles?.INVENTORY?.isActive},get children(){var s=Ie();return s.$$click=()=>t(!l()),s}}),null),i(r,n(d,{get when(){return o?.roles?.PRODUCTS?.isActive},get children(){var s=je();return s.$$click=()=>t(!l()),s}}),null),i(r,n(d,{get when(){return o?.roles?.EXPENSES?.isActive},get children(){var s=Re();return s.$$click=()=>t(!l()),s}}),null),i(r,n(d,{get when(){return P()},get children(){var s=Le();return s.$$click=()=>t(!l()),s}}),null),S(()=>I(m,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${l()?"is-open":""}`)),m})(),(()=>{var m=qe(),r=m.firstChild;return r.$$click=()=>t(!l()),i(r,n(z,{get name(){return l()?"Xclose":"menu"},size:24,get color(){return l()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),S(()=>I(r,`icon_status centerBx ${l()?"menu":"Xclose"}`)),m})()]}}),null),i(p,n(d,{get when(){return!(j()||R())},get children(){var m=Ge(),r=m.firstChild,y=r.firstChild,s=y.nextSibling,J=s.firstChild,E=J.nextSibling;return i(E,n(v,{label:"Buscar",url:"/search",get validation(){return o?.roles?.SEARCH?.isActive}}),null),i(E,n(v,{label:"Reportes",url:"/reports",get validation(){return o?.roles?.REPORT?.isActive}}),null),i(E,n(v,{label:"HBL",url:"/findhbl",get validation(){return o?.roles?.HBL?.isActive}}),null),i(r,n(d,{get when(){return o?.roles?.SCANING?.isActive},get children(){return Pe()}}),null),i(r,n(d,{get when(){return o?.roles?.DELIVERY?.isActive||o?.roles?.MANIFEST?.isActive},get children(){var k=Ne(),A=k.firstChild,f=A.nextSibling;return i(f,n(v,{label:"Entregas",url:"/delivery",get validation(){return o?.roles?.DELIVERY?.isActive}}),null),i(f,n(v,{label:"Manifiestos",url:"/manifest",get validation(){return o?.roles?.MANIFEST?.isActive}}),null),k}}),null),i(r,n(d,{get when(){return ne()},get children(){var k=Te(),A=k.firstChild,f=A.nextSibling;return i(f,n(v,{label:"Inventario",url:"/inventory",get validation(){return o?.roles?.INVENTORY?.isActive}}),null),i(f,n(v,{label:"Productos",url:"/products",get validation(){return o?.roles?.PRODUCTS?.isActive}}),null),i(f,n(v,{label:"Gastos",url:"/expenses",get validation(){return o?.roles?.EXPENSES?.isActive}}),null),k}}),null),i(r,n(d,{get when(){return P()},get children(){var k=Ve(),A=k.firstChild,f=A.nextSibling;return i(f,n(v,{label:"Beneficiaries",url:"/beneficiaries",validation:1}),null),i(f,n(v,{label:"Users",url:"/users",validation:1}),null),k}}),null),m}}),null),i(p,n(d,{get when(){return N()},get fallback(){return n(_e,{})},get children(){var m=Oe(),r=m.firstChild;return m.$$click=b,S(()=>C(r,"src",N())),m}}),null),S(m=>{var r=`site-header ${j()||R()?"isMobile":""}`,y=`${G("SSG.webp")}`;return r!==m.e&&I(a,m.e=r),y!==m.t&&C(x,"src",m.t=y),m},{e:void 0,t:void 0}),a})()}const v=l=>n(d,{get when(){return l?.validation},get children(){var t=De(),c=t.firstChild,h=c.firstChild;return i(h,()=>l?.label),i(c,n(z,{get name(){return l?.icon}}),null),S(()=>C(c,"href",l?.url)),t}});U(["click"]);export{We as default};
