const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-rC2iZnZW.js","assets/index-DSkC3y7k.js","assets/index-mNJWtuMT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/CheckBoxSlide-C5YX6gzf.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ShowOfflinedata-B9t4AJJF.js","assets/Util-DZlMHKqJ.js","assets/DialogHRM-BNKgGTXg.js","assets/DialogHRM-V9_lZntj.css","assets/Scanning-CUDizAfB.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-BzWQxcnD.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as H,_ as V,a as D,e as ne,i as t,f as e,S as h,t as a,B as z,C as F,D as K,G as U,H as oe,d as le,h as j,k as R,b as de,j as x,I as O,z as o,A as I,g as P,x as J,m as B,J as he,K as pe,w as W,L as ge}from"./index-DSkC3y7k.js";import G from"./SVG-CVXLQdHd.js";import{f as Y,e as Q,q as L,u as S,r as ve,v as M,k as se,g as fe,O as re,w as T,x as $e,y as be,z as ae,A as X,a as Z,d as ee,B as te}from"./Util-DZlMHKqJ.js";import{d as _e}from"./InitPrintServices-QWHeDiid.js";import{CloseModal as ye,OpenModal as ie}from"./DialogHRM-BNKgGTXg.js";import{l as ke}from"./Scanning-CUDizAfB.js";import"./PDFButton-ClnWeH7R.js";import"./App.module-CbHnVtRQ.js";import"./Toast-BzWQxcnD.js";var Se=a("<div> "),Ae=a("<div class=loading_wapp><div id=buttonDiv></div>");const we=H(()=>V(()=>import("./LoadingColorSpinner-rC2iZnZW.js"),__vite__mapDeps([0,1,2,3]))),ce=async l=>{const c=await Y({query:"qcm42351987"});if(c&&!c.error){let g=Q(L())||{},v=Object.assign({},g,c);S(L(),v)}return Ce(),1},Ce=async()=>{const i=await Y({query:"qml987lg1936"});if(i&&!i.error){z("store",i),S("storeGroupBy",ve(i?.stores));let c={...i};c._id="M023009",c.qryStore=Q(L()),M.get("M023009",function(v,k){v?M.post(c,function(s,u){s||console.log("Successfully posted dbParamsS")}):S("M023009",i)}),_e()}},Ee=async()=>{const i=await se({query:"qml987lg1936"});i&&!i.error&&(z("store",i.data),S("M023009",i.data))},ue=async l=>{let i=fe(992002);if(i){i.params={tkn:l};let g=await Y(i);if(g?.userId){let v=[];re(g.accessActivities).map(b=>{let s=g.accessActivities[b];s.isActive&&v.push({id:s.idCode,label:s.label})}),F("profile",g);let k={...g};k._id="118238",T.get("118238",function(s,u){s&&T.post(k,function(p,_){console.log(p)})}),K(g?.picture),U("roles",g?.accessLogistic),Q("M023009")?.statusAllList.map(b=>{g?.accessLogistic?.[b.id]?.isActive}),setTimeout(()=>{$e("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{be()},1800)},1800)}}},xe=()=>new Promise(async(l,i)=>{T.get("118238",function(g,v){if(!v){l(!1);return}M.get("M023009",function(b,s){if(b)l(!1);else{F("profile",v);let u=[];re(v.accessActivities).map(p=>{let _=v.accessActivities[p];_.isActive&&u.push({id:_.idCode,label:_.label})}),K(v?.picture),U("roles",v?.accessLogistic),S(L(),s?.qryStore),S("M023009",s),z("store",s);let r=[];s?.statusAllList.map(p=>{v?.accessLogistic?.[p.id]?.isActive&&r.push(p)}),oe("list",r),l(!0)}})})});function Ie({did:l}){const[i,c]=D(!1),[g,v]=D(!1),k=async s=>{let u=s.credential?.slice(s.credential.toString().length-32,s.credential.toString().length-16);u=s.credential?.slice(0,16);let r={params:{id_token:s.credential},query:"getGoogleUserbyToken"};const p=await se(r);if(p&&p.data){let _=new Date().getTime(),C=new Date(_+6e4*60*24*365),N=X(),A=ae(p.data.split(":")[1],u);S("sectionKey",A),document.cookie=`${N}=${p.data}; expires=${C}; path=/;g_state = {"i_l":1,"i_p":${C}}; ssgl_access_tkn = ${s.credential}`,document.cookie=`ssgl_access_tkn = ${s.credential}; expires=${C};`,await ce(),ue(p.data)}},b=()=>{let s=window.google;s&&!i()&&(s?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:k}),s?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),c(!0),g()&&clearInterval(g()))};return ne(()=>{let s=setInterval(()=>{b()},120);b(),v(s)}),(()=>{var s=Ae(),u=s.firstChild;return t(s,e(h,{get when(){return!i()},get children(){var r=Se();return r.firstChild,t(r,e(we,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r}}),u),s})()}var je=a('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function Oe(l){const i=()=>{let c=X();document.cookie=`${c}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",F("profile",void 0),K(void 0),U("roles",void 0),ye(l?.modalId),T.destroy(),M.destroy()};return(()=>{var c=je(),g=c.firstChild,v=g.firstChild,k=v.firstChild,b=v.nextSibling,s=b.firstChild,u=s.nextSibling;return c.style.setProperty("max-height","80vh"),c.style.setProperty("width","350px"),c.style.setProperty("overflow","auto"),c.style.setProperty("background","#ffffff"),c.style.setProperty("border-radius","13"),c.style.setProperty("padding","10px 19px"),v.$$click=i,t(s,()=>l?.val?.email),t(u,()=>l?.val?.name),j(()=>R(k,"src",l?.val?.picture)),c})()}le(["click"]);var Pe=a('<p class="title-header centerBx">Stephanie Solution'),Re=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),Le=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Me=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Te=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),Ne=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),qe=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/inventory><span>Inventario'),Be=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),De=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/expenses><span>Gastos'),Ge=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/orders><span>Ordenes'),He=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/self-checkout><span>Self CheckOut'),Ve=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),ze=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/remittance><span>Remesas'),Fe=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),Ke=a('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),Ue=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Ye=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),Qe=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),Xe=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Ventas</span></a><ul class=sub-menu>'),Je=a('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),We=a('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),Ze=a('<div class="icon_status centerBx">'),et=a('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),tt=a("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),it=a('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async></a></div><div class="centerBx bottombx ">'),nt=a('<h5 class="">Offline'),lt=a('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');const st=H(()=>V(()=>import("./CheckBoxSlide-C5YX6gzf.js"),__vite__mapDeps([4,1,2,5]))),rt=H(()=>V(()=>import("./ShowOfflinedata-B9t4AJJF.js"),__vite__mapDeps([6,1,2,7,8,9,10,11,12,13,14])));function vt(){const[l,i]=D(!1),c=()=>{k(),g()},g=async()=>{let u=te("ssgl_access_tkn"),r=te(X());if(u&&r&&r.length>10&&u.length>10){let p=u?.slice(u.toString().length-32,u.toString().length-16);p=u?.slice(0,16);let _=ae(r.split(":")[1],p);S("sectionKey",_),await xe(),setTimeout(()=>{v(r)},850)}else Ee()},v=async u=>{await ce(),await ue(u)},k=async()=>{let r=await(await fetch(`${ee("svgsSSL.json")}`)).json();return S("svgSymbols",r),ge(r),r};ne(async()=>{c(),ke()}),de(()=>{});const b=()=>{let u=Z(),r={};r.id=u,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=e(Oe,{get val(){return P?.profile},modalId:u}),ie(r)},s=u=>{let r={},p=Z();r.id=p,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=e(rt,{modalId:p}),ie(r)};return(()=>{var u=it(),r=u.firstChild,p=r.firstChild,_=p.firstChild,C=_.firstChild,N=C.firstChild,A=_.nextSibling;return t(C,e(h,{get when(){return!x()},get children(){return Pe()}}),null),t(p,e(h,{get when(){return x()||O()},get children(){var d=Ke(),m=d.firstChild,E=m.firstChild;return E.$$click=()=>i(!l()),t(m,e(h,{get when(){return o?.roles?.SEARCH?.isActive},get children(){var n=Re();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return o?.roles?.REPORT?.isActive},get children(){var n=Le();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return o?.roles?.SCANING?.isActive},get children(){var n=Me();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return o?.roles?.HBL?.isActive},get children(){var n=Te();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return I()&&o?.roles?.MANIFEST?.isActive},get children(){var n=Ne();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return o?.roles?.INVENTORY?.isActive},get children(){var n=qe();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return o?.roles?.PRODUCTS?.isActive},get children(){var n=Be();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return o?.roles?.EXPENSES?.isActive},get children(){var n=De();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return o?.roles?.POS?.isActive},get children(){var n=Ge();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return o?.roles?.STORE_SELFCHECK?.isActive&&P?.profile?.agency?.id},get children(){var n=He();return n.$$click=()=>i(!l()),n}}),null),t(m,e(h,{get when(){return J()},get children(){return[(()=>{var n=Ve();return n.$$click=()=>i(!l()),n})(),(()=>{var n=ze();return n.$$click=()=>i(!l()),n})(),(()=>{var n=Fe();return n.$$click=()=>i(!l()),n})()]}}),null),j(()=>B(d,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${l()?"is-open":""}`)),d}}),A),t(p,e(h,{get when(){return!(x()||O())},get children(){var d=We(),m=d.firstChild,E=m.firstChild,n=E.nextSibling,me=n.firstChild,q=me.nextSibling;return t(q,e($,{label:"Buscar",url:"/search",get validation(){return o?.roles?.SEARCH?.isActive}}),null),t(q,e($,{label:"Reportes",url:"/reports",get validation(){return o?.roles?.REPORT?.isActive}}),null),t(q,e($,{label:"HBL",url:"/findhbl",get validation(){return o?.roles?.HBL?.isActive}}),null),t(m,e(h,{get when(){return o?.roles?.SCANING?.isActive},get children(){return Ue()}}),null),t(m,e(h,{get when(){return o?.roles?.DELIVERY?.isActive||o?.roles?.MANIFEST?.isActive},get children(){var y=Ye(),w=y.firstChild,f=w.nextSibling;return t(f,e($,{label:"Entregas",url:"/delivery",get validation(){return o?.roles?.DELIVERY?.isActive}}),null),t(f,e($,{label:"Manifiestos",url:"/manifest",get validation(){return I()&&o?.roles?.MANIFEST?.isActive}}),null),y}}),null),t(m,e(h,{get when(){return he()},get children(){var y=Qe(),w=y.firstChild,f=w.nextSibling;return t(f,e($,{label:"Inventario",url:"/inventory",get validation(){return o?.roles?.INVENTORY?.isActive}}),null),t(f,e($,{label:"Productos",url:"/products",get validation(){return o?.roles?.PRODUCTS?.isActive}}),null),t(f,e($,{label:"Conteo de Productos",url:"/counting-products",get validation(){return o?.roles?.SCAN_INVENTORY?.isActive}}),null),t(f,e($,{label:"Gastos",url:"/expenses",get validation(){return o?.roles?.EXPENSES?.isActive}}),null),y}}),null),t(m,e(h,{get when(){return o?.roles?.POS?.isActive||o?.roles?.STORE_SELFCHECK?.isActive&&P?.profile?.agency?.id},get children(){var y=Xe(),w=y.firstChild,f=w.nextSibling;return t(f,e($,{label:"POS",url:"/pos-sales",get validation(){return o?.roles?.POS?.isActive}}),null),t(f,e($,{label:"Ordenes",url:"/orders",get validation(){return o?.roles?.POS?.isActive}}),null),t(f,e($,{label:"Self CheckOut",url:"/self-checkout",get validation(){return o?.roles?.STORE_SELFCHECK?.isActive&&P?.profile?.agency?.id}}),null),y}}),null),t(m,e(h,{get when(){return J()},get children(){var y=Je(),w=y.firstChild,f=w.nextSibling;return t(f,e($,{label:"Beneficiarios",url:"/beneficiaries",validation:1}),null),t(f,e($,{label:"Remesas",url:"/remittance",get validation(){return o?.roles?.EXPENSES?.isActive}}),null),t(f,e($,{label:"Clientes",url:"/shippers",validation:1}),null),t(f,e($,{label:"Users",url:"/users",validation:1}),null),y}}),null),d}}),A),t(A,e(st,{get initValue(){return I()},updChange:()=>pe(!I()),color:"var(--background-red-ssg)"}),null),t(A,e(h,{get when(){return x()},get fallback(){return(()=>{var d=nt();return d.$$click=s,d})()},get children(){var d=Ze();return d.$$click=s,t(d,e(G,{get name(){return I()?"link-off":"link"},size:24,get color(){return I()?"var(--background-red-ssg)":"var(--hrm-palette-tertiary60)"}})),d}}),null),t(A,e(h,{get when(){return x()||O()},get children(){var d=et(),m=d.firstChild;return m.$$click=()=>i(!l()),t(m,e(G,{get name(){return l()?"Xclose":"menu"},size:24,get color(){return l()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),j(()=>B(m,`icon_status centerBx ${l()?"menu":"Xclose"}`)),d}}),null),t(p,e(h,{get when(){return W()},get fallback(){return e(Ie,{})},get children(){var d=tt(),m=d.firstChild;return d.$$click=b,j(()=>R(m,"src",W())),d}}),null),j(d=>{var m=`site-header ${x()||O()?"isMobile":""}`,E=`${ee("SSG.webp")}`;return m!==d.e&&B(u,d.e=m),E!==d.t&&R(N,"src",d.t=E),d},{e:void 0,t:void 0}),u})()}const $=l=>e(h,{get when(){return l?.validation},get children(){var i=lt(),c=i.firstChild,g=c.firstChild;return t(g,()=>l?.label),t(c,e(G,{get name(){return l?.icon}}),null),j(()=>R(c,"href",l?.url)),i}});le(["click"]);export{vt as default};
