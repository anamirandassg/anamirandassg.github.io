const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-B5ccXALh.js","assets/index-PZmRD6qC.js","assets/index-W9fcnr7G.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as W,_ as J,a as L,m as B,i,d as t,S as h,t as m,z as O,A as D,B as H,e as U,f as S,n as C,h as Z,v as d,q as T,g as E,C as ee,p as q,D as te,k as ie}from"./index-PZmRD6qC.js";import z from"./SVG-krqrZGgX.js";import{f as M,a as F,q as N,u as w,j as ne,b as le,O as se,k as re,m as ae,d as ce,n as Q,o as P,r as V,v as G,g as ue}from"./Util-D2YTzGDx.js";import{s as me,i as j,a as R}from"./globalSignal-AlJRtNUL.js";import{d as oe}from"./InitPrintServices-B3KIQnKW.js";import{CloseModal as de,OpenModal as he}from"./DialogHRM-B5L-ljS7.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";var pe=m("<div> "),ge=m("<div class=loading_wapp><div id=buttonDiv></div>");const ve=W(()=>J(()=>import("./LoadingColorSpinner-B5ccXALh.js"),__vite__mapDeps([0,1,2,3]))),K=async n=>{const c=await M({query:"qcm42351987"});if(c&&!c.error){let o=F(N())||{},g=Object.assign({},o,c);w(N(),g)}return $e(),1},$e=async()=>{const l=await M({query:"qml987lg1936"});l&&!l.error&&(w("M023009",l),w("storeGroupBy",ne(l?.stores)),oe())},Y=async n=>{let l=le(992002);if(l){l.params={tkn:n};let o=await M(l);if(o?.userId){let g=[];se(o.accessActivities).map(s=>{let e=o.accessActivities[s];e.isActive&&g.push({id:e.idCode,label:e.label})}),O("profile",o),D(o?.picture),H("roles",o?.accessLogistic);let _=[];F("M023009")?.statusAllList.map(s=>{o?.accessLogistic?.[s.id]?.isActive&&_.push(s)}),me("list",_),setTimeout(()=>{re("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{ae()},1800)},1800)}}};function fe({did:n}){const[l,c]=L(!1),[o,g]=L(!1),_=async e=>{let p=e.credential?.slice(e.credential.toString().length-32,e.credential.toString().length-16);p=e.credential?.slice(0,16);let $={params:{id_token:e.credential},query:"getGoogleUserbyToken"};const b=await ce($);if(b&&b.data){let x=new Date().getTime(),u=new Date(x+6e4*60*24*365),r=P(),y=Q(b.data.split(":")[1],p);w("sectionKey",y),document.cookie=`${r}=${b.data}; expires=${u}; path=/;g_state = {"i_l":1,"i_p":${u}}; ssgl_access_tkn = ${e.credential}`,document.cookie=`ssgl_access_tkn = ${e.credential}; expires=${u};`,await K(),console.log(b),Y(b.data)}},s=()=>{let e=window.google;e&&!l()&&(e?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:_}),e?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),c(!0),o()&&clearInterval(o()))};return B(()=>{let e=setInterval(()=>{s()},120);s(),g(e)}),(()=>{var e=ge(),p=e.firstChild;return i(e,t(h,{get when(){return!l()},get children(){var $=pe();return $.firstChild,i($,t(ve,{stroke:"rgb(200 25 60 / 1)",size:62}),null),$}}),p),e})()}var _e=m('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function be(n){const l=()=>{let c=P();document.cookie=`${c}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",O("profile",void 0),D(void 0),H("roles",void 0),de(n?.modalId)};return(()=>{var c=_e(),o=c.firstChild,g=o.firstChild,_=g.firstChild,s=g.nextSibling,e=s.firstChild,p=e.nextSibling;return c.style.setProperty("max-height","80vh"),c.style.setProperty("width","350px"),c.style.setProperty("overflow","auto"),c.style.setProperty("background","#ffffff"),c.style.setProperty("border-radius","13"),c.style.setProperty("padding","10px 19px"),g.$$click=l,i(e,()=>n?.val?.email),i(p,()=>n?.val?.name),S(()=>C(_,"src",n?.val?.picture)),c})()}U(["click"]);var ye=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),ke=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Se=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),we=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),Ae=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),Ce=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/delivery><span>Entregas'),xe=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),Ie=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),Ee=m('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),je=m('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),Re=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Le=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),Me=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),Pe=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),Te=m('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),qe=m("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),Ne=m('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async><p class="title-header centerBx">Stephanie Solution'),Ve=m('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');function Qe(){const[n,l]=L(!1),c=()=>{g();let s=V("ssgl_access_tkn"),e=V(P());if(s&&e&&e.length>10&&s.length>10){let p=s?.slice(s.toString().length-32,s.toString().length-16);p=s?.slice(0,16);let $=Q(e.split(":")[1],p);w("sectionKey",$),o(e)}},o=async s=>{await K(),await Y(s)},g=async()=>{let e=await(await fetch(`${G("svgsSSL.json")}`)).json();return w("svgSymbols",e),te(e),e};B(c),Z(()=>{});const _=()=>{let s=ue(),e={};e.id=s,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=t(be,{get val(){return ie?.profile},modalId:s}),he(e)};return(()=>{var s=Ne(),e=s.firstChild,p=e.firstChild,$=p.firstChild,b=$.firstChild,x=b.firstChild;return i(p,t(h,{get when(){return j()||R()},get children(){return[(()=>{var u=Ee(),r=u.firstChild,y=r.firstChild;return y.$$click=()=>l(!n()),i(r,t(h,{get when(){return d?.roles?.SEARCH?.isActive},get children(){var a=ye();return a.$$click=()=>l(!n()),a}}),null),i(r,t(h,{get when(){return d?.roles?.REPORT?.isActive},get children(){var a=ke();return a.$$click=()=>l(!n()),a}}),null),i(r,t(h,{get when(){return d?.roles?.SCANING?.isActive},get children(){var a=Se();return a.$$click=()=>l(!n()),a}}),null),i(r,t(h,{get when(){return d?.roles?.HBL?.isActive},get children(){var a=we();return a.$$click=()=>l(!n()),a}}),null),i(r,t(h,{get when(){return d?.roles?.MANIFEST?.isActive},get children(){var a=Ae();return a.$$click=()=>l(!n()),a}}),null),i(r,t(h,{get when(){return d?.roles?.DELIVERY?.isActive},get children(){var a=Ce();return a.$$click=()=>l(!n()),a}}),null),i(r,t(h,{get when(){return d?.roles?.PRODUCTS?.isActive},get children(){var a=xe();return a.$$click=()=>l(!n()),a}}),null),i(r,t(h,{get when(){return T()},get children(){var a=Ie();return a.$$click=()=>l(!n()),a}}),null),S(()=>E(u,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${n()?"is-open":""}`)),u})(),(()=>{var u=je(),r=u.firstChild;return r.$$click=()=>l(!n()),i(r,t(z,{get name(){return n()?"Xclose":"menu"},size:24,get color(){return n()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),S(()=>E(r,`icon_status centerBx ${n()?"menu":"Xclose"}`)),u})()]}}),null),i(p,t(h,{get when(){return!(j()||R())},get children(){var u=Te(),r=u.firstChild,y=r.firstChild,a=y.nextSibling,X=a.firstChild,I=X.nextSibling;return i(I,t(v,{label:"Buscar",url:"/search",get validation(){return d?.roles?.SEARCH?.isActive}}),null),i(I,t(v,{label:"Reportes",url:"/reports",get validation(){return d?.roles?.REPORT?.isActive}}),null),i(I,t(v,{label:"HBL",url:"/findhbl",get validation(){return d?.roles?.HBL?.isActive}}),null),i(r,t(h,{get when(){return d?.roles?.SCANING?.isActive},get children(){return Re()}}),null),i(r,t(h,{get when(){return d?.roles?.DELIVERY?.isActive||d?.roles?.MANIFEST?.isActive},get children(){var k=Le(),A=k.firstChild,f=A.nextSibling;return i(f,t(v,{label:"Entregas",url:"/delivery",get validation(){return d?.roles?.DELIVERY?.isActive}}),null),i(f,t(v,{label:"Manifiestos",url:"/manifest",get validation(){return d?.roles?.MANIFEST?.isActive}}),null),k}}),null),i(r,t(h,{get when(){return ee()},get children(){var k=Me(),A=k.firstChild,f=A.nextSibling;return i(f,t(v,{label:"Inventario",url:"/inventory",get validation(){return d?.roles?.INVENTORY?.isActive}}),null),i(f,t(v,{label:"Productos",url:"/products",get validation(){return d?.roles?.PRODUCTS?.isActive}}),null),i(f,t(v,{label:"Gastos",url:"/expenses",get validation(){return d?.roles?.EXPENSES?.isActive}}),null),k}}),null),i(r,t(h,{get when(){return T()},get children(){var k=Pe(),A=k.firstChild,f=A.nextSibling;return i(f,t(v,{label:"Beneficiaries",url:"/beneficiaries",validation:1}),null),i(f,t(v,{label:"Users",url:"/users",validation:1}),null),k}}),null),u}}),null),i(p,t(h,{get when(){return q()},get fallback(){return t(fe,{})},get children(){var u=qe(),r=u.firstChild;return u.$$click=_,S(()=>C(r,"src",q())),u}}),null),S(u=>{var r=`site-header ${j()||R()?"isMobile":""}`,y=`${G("SSG.webp")}`;return r!==u.e&&E(s,u.e=r),y!==u.t&&C(x,"src",u.t=y),u},{e:void 0,t:void 0}),s})()}const v=n=>t(h,{get when(){return n?.validation},get children(){var l=Ve(),c=l.firstChild,o=c.firstChild;return i(o,()=>n?.label),i(c,t(z,{get name(){return n?.icon}}),null),S(()=>C(c,"href",n?.url)),l}});U(["click"]);export{Qe as default};
