const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-BDZAIrpN.js","assets/index-zvI0Sb2M.js","assets/index-BmzAZVve.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as Z,_ as ee,a as L,n as O,i,d as n,S as d,t as c,D as B,G as D,H,I as U,C as te,h as z,e as S,q as C,j as ne,g as E,J as j,x as o,v as P,f as R,K as ie,r as N,m as le,L as se}from"./index-zvI0Sb2M.js";import F from"./SVG-39-WtnmX.js";import{f as M,a as K,q as T,u as w,j as re,d as Q,b as ae,O as ce,k as me,m as ue,n as Y,o as q,g as oe,r as G,v as V}from"./Util-BwLP_5oJ.js";import{d as de}from"./InitPrintServices-8lwggMm8.js";import{CloseModal as he,OpenModal as pe}from"./DialogHRM-BeTfDOH9.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";var ge=c("<div> "),ve=c("<div class=loading_wapp><div id=buttonDiv></div>");const $e=Z(()=>ee(()=>import("./LoadingColorSpinner-BDZAIrpN.js"),__vite__mapDeps([0,1,2,3]))),X=async s=>{const m=await M({query:"qcm42351987"});if(m&&!m.error){let h=K(T())||{},g=Object.assign({},h,m);w(T(),g)}return fe(),1},fe=async()=>{const t=await M({query:"qml987lg1936"});t&&!t.error&&(w("M023009",t),B("store",t),w("storeGroupBy",re(t?.stores)),de())},be=async()=>{const t=await Q({query:"qml987lg1936"});t&&!t.error&&(B("store",t.data),w("M023009",t.data))},J=async s=>{let t=ae(992002);if(t){t.params={tkn:s};let h=await M(t);if(h?.userId){let g=[];ce(h.accessActivities).map(a=>{let e=h.accessActivities[a];e.isActive&&g.push({id:e.idCode,label:e.label})}),D("profile",h),H(h?.picture),U("roles",h?.accessLogistic);let b=[];K("M023009")?.statusAllList.map(a=>{h?.accessLogistic?.[a.id]?.isActive&&b.push(a)}),te("list",b),setTimeout(()=>{me("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{ue()},1800)},1800)}}};function _e({did:s}){const[t,m]=L(!1),[h,g]=L(!1),b=async e=>{let p=e.credential?.slice(e.credential.toString().length-32,e.credential.toString().length-16);p=e.credential?.slice(0,16);let f={params:{id_token:e.credential},query:"getGoogleUserbyToken"};const _=await Q(f);if(_&&_.data){let x=new Date().getTime(),u=new Date(x+6e4*60*24*365),r=q(),y=Y(_.data.split(":")[1],p);w("sectionKey",y),document.cookie=`${r}=${_.data}; expires=${u}; path=/;g_state = {"i_l":1,"i_p":${u}}; ssgl_access_tkn = ${e.credential}`,document.cookie=`ssgl_access_tkn = ${e.credential}; expires=${u};`,await X(),console.log(_),J(_.data)}},a=()=>{let e=window.google;e&&!t()&&(e?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:b}),e?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),m(!0),h()&&clearInterval(h()))};return O(()=>{let e=setInterval(()=>{a()},120);a(),g(e)}),(()=>{var e=ve(),p=e.firstChild;return i(e,n(d,{get when(){return!t()},get children(){var f=ge();return f.firstChild,i(f,n($e,{stroke:"rgb(200 25 60 / 1)",size:62}),null),f}}),p),e})()}var ye=c('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function ke(s){const t=()=>{let m=q();document.cookie=`${m}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",D("profile",void 0),H(void 0),U("roles",void 0),he(s?.modalId)};return(()=>{var m=ye(),h=m.firstChild,g=h.firstChild,b=g.firstChild,a=g.nextSibling,e=a.firstChild,p=e.nextSibling;return m.style.setProperty("max-height","80vh"),m.style.setProperty("width","350px"),m.style.setProperty("overflow","auto"),m.style.setProperty("background","#ffffff"),m.style.setProperty("border-radius","13"),m.style.setProperty("padding","10px 19px"),g.$$click=t,i(e,()=>s?.val?.email),i(p,()=>s?.val?.name),S(()=>C(b,"src",s?.val?.picture)),m})()}z(["click"]);var we=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),Se=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Ae=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Ce=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),xe=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),Ie=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/delivery><span>Entregas'),Ee=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/inventory><span>Inventario'),je=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),Re=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/expenses><span>Gastos'),Le=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),Me=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),qe=c('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),Pe=c('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),Ne=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Te=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),Ge=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),Ve=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),Oe=c('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),Be=c("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),De=c('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async><p class="title-header centerBx">Stephanie Solution'),He=c('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');function Je(){const[s,t]=L(!1),m=()=>{g();let a=V("ssgl_access_tkn"),e=V(q());if(a&&e&&e.length>10&&a.length>10){let p=a?.slice(a.toString().length-32,a.toString().length-16);p=a?.slice(0,16);let f=Y(e.split(":")[1],p);w("sectionKey",f),h(e)}else be()},h=async a=>{await X(),await J(a)},g=async()=>{let e=await(await fetch(`${G("svgsSSL.json")}`)).json();return w("svgSymbols",e),se(e),e};O(m),ne(()=>{});const b=()=>{let a=oe(),e={};e.id=a,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=n(ke,{get val(){return le?.profile},modalId:a}),pe(e)};return(()=>{var a=De(),e=a.firstChild,p=e.firstChild,f=p.firstChild,_=f.firstChild,x=_.firstChild;return i(p,n(d,{get when(){return E()||j()},get children(){return[(()=>{var u=qe(),r=u.firstChild,y=r.firstChild;return y.$$click=()=>t(!s()),i(r,n(d,{get when(){return o?.roles?.SEARCH?.isActive},get children(){var l=we();return l.$$click=()=>t(!s()),l}}),null),i(r,n(d,{get when(){return o?.roles?.REPORT?.isActive},get children(){var l=Se();return l.$$click=()=>t(!s()),l}}),null),i(r,n(d,{get when(){return o?.roles?.SCANING?.isActive},get children(){var l=Ae();return l.$$click=()=>t(!s()),l}}),null),i(r,n(d,{get when(){return o?.roles?.HBL?.isActive},get children(){var l=Ce();return l.$$click=()=>t(!s()),l}}),null),i(r,n(d,{get when(){return o?.roles?.MANIFEST?.isActive},get children(){var l=xe();return l.$$click=()=>t(!s()),l}}),null),i(r,n(d,{get when(){return o?.roles?.DELIVERY?.isActive},get children(){var l=Ie();return l.$$click=()=>t(!s()),l}}),null),i(r,n(d,{get when(){return o?.roles?.INVENTORY?.isActive},get children(){var l=Ee();return l.$$click=()=>t(!s()),l}}),null),i(r,n(d,{get when(){return o?.roles?.PRODUCTS?.isActive},get children(){var l=je();return l.$$click=()=>t(!s()),l}}),null),i(r,n(d,{get when(){return o?.roles?.EXPENSES?.isActive},get children(){var l=Re();return l.$$click=()=>t(!s()),l}}),null),i(r,n(d,{get when(){return P()},get children(){return[(()=>{var l=Le();return l.$$click=()=>t(!s()),l})(),(()=>{var l=Me();return l.$$click=()=>t(!s()),l})()]}}),null),S(()=>R(u,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${s()?"is-open":""}`)),u})(),(()=>{var u=Pe(),r=u.firstChild;return r.$$click=()=>t(!s()),i(r,n(F,{get name(){return s()?"Xclose":"menu"},size:24,get color(){return s()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),S(()=>R(r,`icon_status centerBx ${s()?"menu":"Xclose"}`)),u})()]}}),null),i(p,n(d,{get when(){return!(E()||j())},get children(){var u=Oe(),r=u.firstChild,y=r.firstChild,l=y.nextSibling,W=l.firstChild,I=W.nextSibling;return i(I,n(v,{label:"Buscar",url:"/search",get validation(){return o?.roles?.SEARCH?.isActive}}),null),i(I,n(v,{label:"Reportes",url:"/reports",get validation(){return o?.roles?.REPORT?.isActive}}),null),i(I,n(v,{label:"HBL",url:"/findhbl",get validation(){return o?.roles?.HBL?.isActive}}),null),i(r,n(d,{get when(){return o?.roles?.SCANING?.isActive},get children(){return Ne()}}),null),i(r,n(d,{get when(){return o?.roles?.DELIVERY?.isActive||o?.roles?.MANIFEST?.isActive},get children(){var k=Te(),A=k.firstChild,$=A.nextSibling;return i($,n(v,{label:"Entregas",url:"/delivery",get validation(){return o?.roles?.DELIVERY?.isActive}}),null),i($,n(v,{label:"Manifiestos",url:"/manifest",get validation(){return o?.roles?.MANIFEST?.isActive}}),null),k}}),null),i(r,n(d,{get when(){return ie()},get children(){var k=Ge(),A=k.firstChild,$=A.nextSibling;return i($,n(v,{label:"Inventario",url:"/inventory",get validation(){return o?.roles?.INVENTORY?.isActive}}),null),i($,n(v,{label:"Productos",url:"/products",get validation(){return o?.roles?.PRODUCTS?.isActive}}),null),i($,n(v,{label:"Gastos",url:"/expenses",get validation(){return o?.roles?.EXPENSES?.isActive}}),null),k}}),null),i(r,n(d,{get when(){return P()},get children(){var k=Ve(),A=k.firstChild,$=A.nextSibling;return i($,n(v,{label:"Beneficiaries",url:"/beneficiaries",validation:1}),null),i($,n(v,{label:"CLientes",url:"/shippers",validation:1}),null),i($,n(v,{label:"Users",url:"/users",validation:1}),null),k}}),null),u}}),null),i(p,n(d,{get when(){return N()},get fallback(){return n(_e,{})},get children(){var u=Be(),r=u.firstChild;return u.$$click=b,S(()=>C(r,"src",N())),u}}),null),S(u=>{var r=`site-header ${E()||j()?"isMobile":""}`,y=`${G("SSG.webp")}`;return r!==u.e&&R(a,u.e=r),y!==u.t&&C(x,"src",u.t=y),u},{e:void 0,t:void 0}),a})()}const v=s=>n(d,{get when(){return s?.validation},get children(){var t=He(),m=t.firstChild,h=m.firstChild;return i(h,()=>s?.label),i(m,n(F,{get name(){return s?.icon}}),null),S(()=>C(m,"href",s?.url)),t}});z(["click"]);export{Je as default};
