const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-De0F92t4.js","assets/index-DkkNlLnX.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/CheckBoxSlide-DZXApJd5.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ShowOfflinedata-DqAsQrb7.js","assets/DialogHRM-g_NvR9nw.js","assets/DialogHRM-V9_lZntj.css","assets/Scanning-DSbcd0rV.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-B8ER3c08.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as V,_ as q,a as T,s as Y,i as n,d as t,S as o,t as c,q as B,o as K,P as D,Q as w,R as X,T as se,C as W,p as ae,O as ce,U as Z,V as J,W as ee,X as ue,Y as me,Z as oe,$ as te,a0 as N,h as ne,e as x,A as L,k as de,g as A,a1 as R,K as d,M as C,E as G,f as P,a2 as he,a3 as pe,B as H,j as U,n as ge,a4 as z,a5 as F,a6 as ve}from"./index-DkkNlLnX.js";import O from"./SVG-7m5L1R9W.js";import{d as $e}from"./InitPrintServices-Br8uoi7y.js";import{CloseModal as fe,OpenModal as Q}from"./DialogHRM-g_NvR9nw.js";import{l as _e}from"./Scanning-DSbcd0rV.js";import"./PDFButton-Cb-vVOms.js";import"./App.module-CbHnVtRQ.js";import"./Toast-B8ER3c08.js";var be=c("<div> "),ye=c("<div class=loading_wapp><div id=buttonDiv></div>");const ke=V(()=>q(()=>import("./LoadingColorSpinner-De0F92t4.js"),__vite__mapDeps([0,1,2,3]))),ie=async r=>{const m=await B({query:"qcm42351987"});if(m&&!m.error){let h=K(D())||{},v=Object.assign({},h,m);w(D(),v)}return we(),1},we=async()=>{const i=await B({query:"qml987lg1936"});i&&!i.error&&(w("M023009",i),X("store",i),w("storeGroupBy",se(i?.stores)),$e())},Se=async()=>{const i=await W({query:"qml987lg1936"});i&&!i.error&&(X("store",i.data),w("M023009",i.data))},le=async r=>{let i=ae(992002);if(i){i.params={tkn:r};let h=await B(i);if(h?.userId){let v=[];ce(h.accessActivities).map(g=>{let e=h.accessActivities[g];e.isActive&&v.push({id:e.idCode,label:e.label})}),Z("profile",h),J(h?.picture),ee("roles",h?.accessLogistic);let b=[];K("M023009")?.statusAllList.map(g=>{h?.accessLogistic?.[g.id]?.isActive&&b.push(g)}),ue("list",b),setTimeout(()=>{me("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{oe()},1800)},1800)}}};function Ae({did:r}){const[i,m]=T(!1),[h,v]=T(!1),b=async e=>{let a=e.credential?.slice(e.credential.toString().length-32,e.credential.toString().length-16);a=e.credential?.slice(0,16);let p={params:{id_token:e.credential},query:"getGoogleUserbyToken"};const $=await W(p);if($&&$.data){let j=new Date().getTime(),E=new Date(j+6e4*60*24*365),k=N(),s=te($.data.split(":")[1],a);w("sectionKey",s),document.cookie=`${k}=${$.data}; expires=${E}; path=/;g_state = {"i_l":1,"i_p":${E}}; ssgl_access_tkn = ${e.credential}`,document.cookie=`ssgl_access_tkn = ${e.credential}; expires=${E};`,await ie(),console.log($),le($.data)}},g=()=>{let e=window.google;e&&!i()&&(e?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:b}),e?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),m(!0),h()&&clearInterval(h()))};return Y(()=>{let e=setInterval(()=>{g()},120);g(),v(e)}),(()=>{var e=ye(),a=e.firstChild;return n(e,t(o,{get when(){return!i()},get children(){var p=be();return p.firstChild,n(p,t(ke,{stroke:"rgb(200 25 60 / 1)",size:62}),null),p}}),a),e})()}var Ce=c('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function xe(r){const i=()=>{let m=N();document.cookie=`${m}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",Z("profile",void 0),J(void 0),ee("roles",void 0),fe(r?.modalId)};return(()=>{var m=Ce(),h=m.firstChild,v=h.firstChild,b=v.firstChild,g=v.nextSibling,e=g.firstChild,a=e.nextSibling;return m.style.setProperty("max-height","80vh"),m.style.setProperty("width","350px"),m.style.setProperty("overflow","auto"),m.style.setProperty("background","#ffffff"),m.style.setProperty("border-radius","13"),m.style.setProperty("padding","10px 19px"),v.$$click=i,n(e,()=>r?.val?.email),n(a,()=>r?.val?.name),x(()=>L(b,"src",r?.val?.picture)),m})()}ne(["click"]);var Ee=c('<p class="title-header centerBx">Stephanie Solution'),Ie=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),je=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Re=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Le=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),Me=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),Pe=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/delivery><span>Entregas'),Te=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/inventory><span>Inventario'),Oe=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),Ve=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/expenses><span>Gastos'),qe=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),Be=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),Ne=c('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),De=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Ge=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),He=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),Ue=c('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),ze=c('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),Fe=c('<div class="icon_status centerBx">'),Qe=c('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),Ye=c("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),Ke=c('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async></a></div><div class="centerBx bottombx ">'),Xe=c('<h5 class="">Offline'),We=c('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');const Ze=V(()=>q(()=>import("./CheckBoxSlide-DZXApJd5.js"),__vite__mapDeps([4,1,2,5]))),Je=V(()=>q(()=>import("./ShowOfflinedata-DqAsQrb7.js"),__vite__mapDeps([6,1,2,7,8,9,10,11,12,13])));function ct(){const[r,i]=T(!1),m=()=>{v();let e=F("ssgl_access_tkn"),a=F(N());if(e&&a&&a.length>10&&e.length>10){let p=e?.slice(e.toString().length-32,e.toString().length-16);p=e?.slice(0,16);let $=te(a.split(":")[1],p);w("sectionKey",$),h(a)}else Se()},h=async e=>{await ie(),await le(e)},v=async()=>{let a=await(await fetch(`${z("svgsSSL.json")}`)).json();return w("svgSymbols",a),ve(a),a};Y(async()=>{m(),_e()}),de(()=>{});const b=()=>{let e=U(),a={};a.id=e,a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=t(xe,{get val(){return ge?.profile},modalId:e}),Q(a)},g=e=>{let a={},p=U();a.id=p,a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=t(Je,{modalId:p}),Q(a)};return(()=>{var e=Ke(),a=e.firstChild,p=a.firstChild,$=p.firstChild,j=$.firstChild,E=j.firstChild,k=$.nextSibling;return n(j,t(o,{get when(){return!A()},get children(){return Ee()}}),null),n(p,t(o,{get when(){return A()||R()},get children(){var s=Ne(),u=s.firstChild,S=u.firstChild;return S.$$click=()=>i(!r()),n(u,t(o,{get when(){return d?.roles?.SEARCH?.isActive},get children(){var l=Ie();return l.$$click=()=>i(!r()),l}}),null),n(u,t(o,{get when(){return d?.roles?.REPORT?.isActive},get children(){var l=je();return l.$$click=()=>i(!r()),l}}),null),n(u,t(o,{get when(){return d?.roles?.SCANING?.isActive},get children(){var l=Re();return l.$$click=()=>i(!r()),l}}),null),n(u,t(o,{get when(){return d?.roles?.HBL?.isActive},get children(){var l=Le();return l.$$click=()=>i(!r()),l}}),null),n(u,t(o,{get when(){return C()&&d?.roles?.MANIFEST?.isActive},get children(){var l=Me();return l.$$click=()=>i(!r()),l}}),null),n(u,t(o,{get when(){return d?.roles?.DELIVERY?.isActive},get children(){var l=Pe();return l.$$click=()=>i(!r()),l}}),null),n(u,t(o,{get when(){return d?.roles?.INVENTORY?.isActive},get children(){var l=Te();return l.$$click=()=>i(!r()),l}}),null),n(u,t(o,{get when(){return d?.roles?.PRODUCTS?.isActive},get children(){var l=Oe();return l.$$click=()=>i(!r()),l}}),null),n(u,t(o,{get when(){return d?.roles?.EXPENSES?.isActive},get children(){var l=Ve();return l.$$click=()=>i(!r()),l}}),null),n(u,t(o,{get when(){return G()},get children(){return[(()=>{var l=qe();return l.$$click=()=>i(!r()),l})(),(()=>{var l=Be();return l.$$click=()=>i(!r()),l})()]}}),null),x(()=>P(s,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${r()?"is-open":""}`)),s}}),k),n(p,t(o,{get when(){return!(A()||R())},get children(){var s=ze(),u=s.firstChild,S=u.firstChild,l=S.nextSibling,re=l.firstChild,M=re.nextSibling;return n(M,t(f,{label:"Buscar",url:"/search",get validation(){return d?.roles?.SEARCH?.isActive}}),null),n(M,t(f,{label:"Reportes",url:"/reports",get validation(){return d?.roles?.REPORT?.isActive}}),null),n(M,t(f,{label:"HBL",url:"/findhbl",get validation(){return d?.roles?.HBL?.isActive}}),null),n(u,t(o,{get when(){return d?.roles?.SCANING?.isActive},get children(){return De()}}),null),n(u,t(o,{get when(){return d?.roles?.DELIVERY?.isActive||d?.roles?.MANIFEST?.isActive},get children(){var y=Ge(),I=y.firstChild,_=I.nextSibling;return n(_,t(f,{label:"Entregas",url:"/delivery",get validation(){return d?.roles?.DELIVERY?.isActive}}),null),n(_,t(f,{label:"Manifiestos",url:"/manifest",get validation(){return C()&&d?.roles?.MANIFEST?.isActive}}),null),y}}),null),n(u,t(o,{get when(){return he()},get children(){var y=He(),I=y.firstChild,_=I.nextSibling;return n(_,t(f,{label:"Inventario",url:"/inventory",get validation(){return d?.roles?.INVENTORY?.isActive}}),null),n(_,t(f,{label:"Productos",url:"/products",get validation(){return d?.roles?.PRODUCTS?.isActive}}),null),n(_,t(f,{label:"Gastos",url:"/expenses",get validation(){return d?.roles?.EXPENSES?.isActive}}),null),y}}),null),n(u,t(o,{get when(){return G()},get children(){var y=Ue(),I=y.firstChild,_=I.nextSibling;return n(_,t(f,{label:"Beneficiaries",url:"/beneficiaries",validation:1}),null),n(_,t(f,{label:"CLientes",url:"/shippers",validation:1}),null),n(_,t(f,{label:"Users",url:"/users",validation:1}),null),y}}),null),s}}),k),n(k,t(Ze,{get initValue(){return C()},updChange:()=>pe(!C()),color:"var(--background-red-ssg)"}),null),n(k,t(o,{get when(){return A()},get fallback(){return(()=>{var s=Xe();return s.$$click=g,s})()},get children(){var s=Fe();return s.$$click=g,n(s,t(O,{get name(){return C()?"link-off":"link"},size:24,get color(){return C()?"var(--background-red-ssg)":"var(--hrm-palette-tertiary60)"}})),s}}),null),n(k,t(o,{get when(){return A()||R()},get children(){var s=Qe(),u=s.firstChild;return u.$$click=()=>i(!r()),n(u,t(O,{get name(){return r()?"Xclose":"menu"},size:24,get color(){return r()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),x(()=>P(u,`icon_status centerBx ${r()?"menu":"Xclose"}`)),s}}),null),n(p,t(o,{get when(){return H()},get fallback(){return t(Ae,{})},get children(){var s=Ye(),u=s.firstChild;return s.$$click=b,x(()=>L(u,"src",H())),s}}),null),x(s=>{var u=`site-header ${A()||R()?"isMobile":""}`,S=`${z("SSG.webp")}`;return u!==s.e&&P(e,s.e=u),S!==s.t&&L(E,"src",s.t=S),s},{e:void 0,t:void 0}),e})()}const f=r=>t(o,{get when(){return r?.validation},get children(){var i=We(),m=i.firstChild,h=m.firstChild;return n(h,()=>r?.label),n(m,t(O,{get name(){return r?.icon}}),null),x(()=>L(m,"href",r?.url)),i}});ne(["click"]);export{ct as default};
