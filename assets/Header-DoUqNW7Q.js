const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-z20TwnGL.js","assets/index-D3-TnOrJ.js","assets/index-DeAzZMb6.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as Z,_ as ee,a as L,m as B,i as n,d as i,S as h,t as m,z as O,A as D,B as H,e as U,f as S,n as C,h as te,v as d,q as P,g as E,C as ie,p as T,D as ne,k as le}from"./index-D3-TnOrJ.js";import z from"./SVG-ChkZ6H0_.js";import{f as M,a as F,q as N,u as w,j as se,d as Q,b as re,O as ae,k as ce,m as ue,n as K,o as q,r as V,v as G,g as me}from"./Util-D886uaAp.js";import{a as Y,s as oe,i as j,b as R}from"./globalSignal-BFEhR4Mp.js";import{d as de}from"./InitPrintServices-BbVI7Xg0.js";import{CloseModal as he,OpenModal as pe}from"./DialogHRM-CtuYI4ix.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";var ge=m("<div> "),ve=m("<div class=loading_wapp><div id=buttonDiv></div>");const fe=Z(()=>ee(()=>import("./LoadingColorSpinner-z20TwnGL.js"),__vite__mapDeps([0,1,2,3]))),X=async l=>{const c=await M({query:"qcm42351987"});if(c&&!c.error){let o=F(N())||{},g=Object.assign({},o,c);w(N(),g)}return $e(),1},$e=async()=>{const t=await M({query:"qml987lg1936"});t&&!t.error&&(w("M023009",t),Y("store",t),w("storeGroupBy",se(t?.stores)),de())},be=async()=>{const t=await Q({query:"qml987lg1936"});t&&!t.error&&(Y("store",t.data),w("M023009",t.data))},W=async l=>{let t=re(992002);if(t){t.params={tkn:l};let o=await M(t);if(o?.userId){let g=[];ae(o.accessActivities).map(s=>{let e=o.accessActivities[s];e.isActive&&g.push({id:e.idCode,label:e.label})}),O("profile",o),D(o?.picture),H("roles",o?.accessLogistic);let b=[];F("M023009")?.statusAllList.map(s=>{o?.accessLogistic?.[s.id]?.isActive&&b.push(s)}),oe("list",b),setTimeout(()=>{ce("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{ue()},1800)},1800)}}};function _e({did:l}){const[t,c]=L(!1),[o,g]=L(!1),b=async e=>{let p=e.credential?.slice(e.credential.toString().length-32,e.credential.toString().length-16);p=e.credential?.slice(0,16);let f={params:{id_token:e.credential},query:"getGoogleUserbyToken"};const _=await Q(f);if(_&&_.data){let x=new Date().getTime(),u=new Date(x+6e4*60*24*365),r=q(),y=K(_.data.split(":")[1],p);w("sectionKey",y),document.cookie=`${r}=${_.data}; expires=${u}; path=/;g_state = {"i_l":1,"i_p":${u}}; ssgl_access_tkn = ${e.credential}`,document.cookie=`ssgl_access_tkn = ${e.credential}; expires=${u};`,await X(),console.log(_),W(_.data)}},s=()=>{let e=window.google;e&&!t()&&(e?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:b}),e?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),c(!0),o()&&clearInterval(o()))};return B(()=>{let e=setInterval(()=>{s()},120);s(),g(e)}),(()=>{var e=ve(),p=e.firstChild;return n(e,i(h,{get when(){return!t()},get children(){var f=ge();return f.firstChild,n(f,i(fe,{stroke:"rgb(200 25 60 / 1)",size:62}),null),f}}),p),e})()}var ye=m('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function ke(l){const t=()=>{let c=q();document.cookie=`${c}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",O("profile",void 0),D(void 0),H("roles",void 0),he(l?.modalId)};return(()=>{var c=ye(),o=c.firstChild,g=o.firstChild,b=g.firstChild,s=g.nextSibling,e=s.firstChild,p=e.nextSibling;return c.style.setProperty("max-height","80vh"),c.style.setProperty("width","350px"),c.style.setProperty("overflow","auto"),c.style.setProperty("background","#ffffff"),c.style.setProperty("border-radius","13"),c.style.setProperty("padding","10px 19px"),g.$$click=t,n(e,()=>l?.val?.email),n(p,()=>l?.val?.name),S(()=>C(b,"src",l?.val?.picture)),c})()}U(["click"]);var we=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),Se=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Ae=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Ce=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),xe=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),Ie=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/delivery><span>Entregas'),Ee=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),je=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),Re=m('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),Le=m('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),Me=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),qe=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),Pe=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),Te=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),Ne=m('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),Ve=m("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),Ge=m('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async><p class="title-header centerBx">Stephanie Solution'),Be=m('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');function Ye(){const[l,t]=L(!1),c=()=>{g();let s=V("ssgl_access_tkn"),e=V(q());if(s&&e&&e.length>10&&s.length>10){let p=s?.slice(s.toString().length-32,s.toString().length-16);p=s?.slice(0,16);let f=K(e.split(":")[1],p);w("sectionKey",f),o(e)}else be()},o=async s=>{await X(),await W(s)},g=async()=>{let e=await(await fetch(`${G("svgsSSL.json")}`)).json();return w("svgSymbols",e),ne(e),e};B(c),te(()=>{});const b=()=>{let s=me(),e={};e.id=s,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=i(ke,{get val(){return le?.profile},modalId:s}),pe(e)};return(()=>{var s=Ge(),e=s.firstChild,p=e.firstChild,f=p.firstChild,_=f.firstChild,x=_.firstChild;return n(p,i(h,{get when(){return j()||R()},get children(){return[(()=>{var u=Re(),r=u.firstChild,y=r.firstChild;return y.$$click=()=>t(!l()),n(r,i(h,{get when(){return d?.roles?.SEARCH?.isActive},get children(){var a=we();return a.$$click=()=>t(!l()),a}}),null),n(r,i(h,{get when(){return d?.roles?.REPORT?.isActive},get children(){var a=Se();return a.$$click=()=>t(!l()),a}}),null),n(r,i(h,{get when(){return d?.roles?.SCANING?.isActive},get children(){var a=Ae();return a.$$click=()=>t(!l()),a}}),null),n(r,i(h,{get when(){return d?.roles?.HBL?.isActive},get children(){var a=Ce();return a.$$click=()=>t(!l()),a}}),null),n(r,i(h,{get when(){return d?.roles?.MANIFEST?.isActive},get children(){var a=xe();return a.$$click=()=>t(!l()),a}}),null),n(r,i(h,{get when(){return d?.roles?.DELIVERY?.isActive},get children(){var a=Ie();return a.$$click=()=>t(!l()),a}}),null),n(r,i(h,{get when(){return d?.roles?.PRODUCTS?.isActive},get children(){var a=Ee();return a.$$click=()=>t(!l()),a}}),null),n(r,i(h,{get when(){return P()},get children(){var a=je();return a.$$click=()=>t(!l()),a}}),null),S(()=>E(u,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${l()?"is-open":""}`)),u})(),(()=>{var u=Le(),r=u.firstChild;return r.$$click=()=>t(!l()),n(r,i(z,{get name(){return l()?"Xclose":"menu"},size:24,get color(){return l()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),S(()=>E(r,`icon_status centerBx ${l()?"menu":"Xclose"}`)),u})()]}}),null),n(p,i(h,{get when(){return!(j()||R())},get children(){var u=Ne(),r=u.firstChild,y=r.firstChild,a=y.nextSibling,J=a.firstChild,I=J.nextSibling;return n(I,i(v,{label:"Buscar",url:"/search",get validation(){return d?.roles?.SEARCH?.isActive}}),null),n(I,i(v,{label:"Reportes",url:"/reports",get validation(){return d?.roles?.REPORT?.isActive}}),null),n(I,i(v,{label:"HBL",url:"/findhbl",get validation(){return d?.roles?.HBL?.isActive}}),null),n(r,i(h,{get when(){return d?.roles?.SCANING?.isActive},get children(){return Me()}}),null),n(r,i(h,{get when(){return d?.roles?.DELIVERY?.isActive||d?.roles?.MANIFEST?.isActive},get children(){var k=qe(),A=k.firstChild,$=A.nextSibling;return n($,i(v,{label:"Entregas",url:"/delivery",get validation(){return d?.roles?.DELIVERY?.isActive}}),null),n($,i(v,{label:"Manifiestos",url:"/manifest",get validation(){return d?.roles?.MANIFEST?.isActive}}),null),k}}),null),n(r,i(h,{get when(){return ie()},get children(){var k=Pe(),A=k.firstChild,$=A.nextSibling;return n($,i(v,{label:"Inventario",url:"/inventory",get validation(){return d?.roles?.INVENTORY?.isActive}}),null),n($,i(v,{label:"Productos",url:"/products",get validation(){return d?.roles?.PRODUCTS?.isActive}}),null),n($,i(v,{label:"Gastos",url:"/expenses",get validation(){return d?.roles?.EXPENSES?.isActive}}),null),k}}),null),n(r,i(h,{get when(){return P()},get children(){var k=Te(),A=k.firstChild,$=A.nextSibling;return n($,i(v,{label:"Beneficiaries",url:"/beneficiaries",validation:1}),null),n($,i(v,{label:"Users",url:"/users",validation:1}),null),k}}),null),u}}),null),n(p,i(h,{get when(){return T()},get fallback(){return i(_e,{})},get children(){var u=Ve(),r=u.firstChild;return u.$$click=b,S(()=>C(r,"src",T())),u}}),null),S(u=>{var r=`site-header ${j()||R()?"isMobile":""}`,y=`${G("SSG.webp")}`;return r!==u.e&&E(s,u.e=r),y!==u.t&&C(x,"src",u.t=y),u},{e:void 0,t:void 0}),s})()}const v=l=>i(h,{get when(){return l?.validation},get children(){var t=Be(),c=t.firstChild,o=c.firstChild;return n(o,()=>l?.label),n(c,i(z,{get name(){return l?.icon}}),null),S(()=>C(c,"href",l?.url)),t}});U(["click"]);export{Ye as default};
