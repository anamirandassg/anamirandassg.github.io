const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-YUCBU2fv.js","assets/index-CX_vPFGW.js","assets/index-D4QuRvi-.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as U,_ as F,a as k,m as B,i as l,d as s,S as u,t as d,y as H,z as D,A as T,e as z,f as _,n as w,h as X,x as v,B as j,g as E,k as L,C as Y,j as W}from"./index-CX_vPFGW.js";import J from"./SVG-DXhNGyQd.js";import{f as C,a as S,q as A,u as y,O as Z,b as ee,h as O,i as x,j as q,k as M,g as te}from"./Util-ATVR_Ai5.js";import{s as ne,i as V}from"./globalSignal-D9hd0NN6.js";import{CloseModal as ie,OpenModal as re}from"./DialogHRM-DwDXnu5o.js";import"./index-Ci0zXM0r.js";var se=d("<div> "),le=d("<div class=loading_wapp><div id=buttonDiv></div>");const ae=U(()=>F(()=>import("./LoadingColorSpinner-YUCBU2fv.js"),__vite__mapDeps([0,1,2,3]))),K=async n=>{const c=await C({query:"qcm42351987"});if(c&&!c.error){let g=S(A())||{},p=Object.assign({},g,c);y(A(),p)}return ce(),1},ce=async()=>{const r=await C({query:"qml987lg1936"});r&&!r.error&&y("M023009",r)},Q=async n=>{let a={...S(A())}[992002];if(a){a.params={tkn:n};const c=await C(a);if(c&&c.userId){let g=[];Z(c.accessActivities).map(t=>{let e=c.accessActivities[t];e.isActive&&g.push({id:e.idCode,label:e.label})}),H("profile",c),D(c?.picture),T("roles",c?.accessLogistic);let p=[];S("M023009")?.statusAllList.map(t=>{c?.accessLogistic?.[t.id]?.isActive&&p.push(t)}),ne("list",p)}}};function oe({did:n}){const[a,r]=k(!1),[c,g]=k(!1),p=async e=>{let h=e.credential?.slice(e.credential.toString().length-32,e.credential.toString().length-16);h=e.credential?.slice(0,16);let f={params:{id_token:e.credential},query:"getGoogleUserbyToken"};const $=await ee(f);if($&&$.data){let i=new Date().getTime(),m=new Date(i+6e4*60*24*365),b=x(),o=O($.data.split(":")[1],h);y("sectionKey",o),document.cookie=`${b}=${$.data}; expires=${m}; path=/;g_state = {"i_l":1,"i_p":${m}}; ssgl_access_tkn = ${e.credential}`,document.cookie=`ssgl_access_tkn = ${e.credential}; expires=${m};`,await K(),Q($.data)}},t=()=>{let e=window.google;e&&!a()&&(e?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:p}),e?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),r(!0),c()&&clearInterval(c()))};return B(()=>{let e=setInterval(()=>{t()},120);t(),g(e)}),(()=>{var e=le(),h=e.firstChild;return l(e,s(u,{get when(){return!a()},get children(){var f=se();return f.firstChild,l(f,s(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),f}}),h),e})()}var me=d('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function ue(n){const a=()=>{let r=x();document.cookie=`${r}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",H("profile",void 0),D(void 0),T("roles",void 0),ie(n?.modalId)};return(()=>{var r=me(),c=r.firstChild,g=c.firstChild,p=g.firstChild,t=g.nextSibling,e=t.firstChild,h=e.nextSibling;return r.style.setProperty("max-height","80vh"),r.style.setProperty("width","350px"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),g.$$click=a,l(e,()=>n?.val?.email),l(h,()=>n?.val?.name),_(()=>w(p,"src",n?.val?.picture)),r})()}z(["click"]);var de=d('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),he=d('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),G=d('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),R=d('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),N=d('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/delivery><span>Entregas'),P=d('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),ge=d('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),pe=d('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),ve=d('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/search><span>Buscar'),fe=d('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),$e=d('<ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear'),_e=d("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),ye=d('<header class=site-header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async><p class="title-header centerBx">Stephanie Solution');function xe(){const[n,a]=k(!1),r=()=>{g();let t=M("ssgl_access_tkn"),e=M(x());if(t&&e&&e.length>10&&t.length>10){let h=t?.slice(t.toString().length-32,t.toString().length-16);h=t?.slice(0,16);let f=O(e.split(":")[1],h);y("sectionKey",f),c(e)}},c=async t=>{await K(),await Q(t)},g=async()=>{let e=await(await fetch(`${q("svgs.json")}`)).json();return y("svgSymbols",e),Y(e),e};B(r),X(()=>{});const p=()=>{let t=te(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=s(ue,{get val(){return W?.profile},modalId:t}),re(e)};return(()=>{var t=ye(),e=t.firstChild,h=e.firstChild,f=h.firstChild,I=f.firstChild,$=I.firstChild;return l(h,s(u,{get when(){return V()},get children(){return[(()=>{var i=ge(),m=i.firstChild,b=m.firstChild;return b.$$click=()=>a(!n()),l(m,s(u,{get when(){return v?.roles?.SEARCH?.isActive},get children(){var o=de();return o.$$click=()=>a(!n()),o}}),null),l(m,s(u,{get when(){return v?.roles?.SCANING?.isActive},get children(){var o=he();return o.$$click=()=>a(!n()),o}}),null),l(m,s(u,{get when(){return v?.roles?.HBL?.isActive},get children(){var o=G();return o.$$click=()=>a(!n()),o}}),null),l(m,s(u,{get when(){return v?.roles?.MANIFEST?.isActive},get children(){var o=R();return o.$$click=()=>a(!n()),o}}),null),l(m,s(u,{get when(){return v?.roles?.DELIVERY?.isActive},get children(){var o=N();return o.$$click=()=>a(!n()),o}}),null),l(m,s(u,{get when(){return j()},get children(){var o=P();return o.$$click=()=>a(!n()),o}}),null),_(()=>E(i,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${n()?"is-open":""}`)),i})(),(()=>{var i=pe(),m=i.firstChild;return m.$$click=()=>a(!n()),l(m,s(J,{get name(){return n()?"Xclose":"menu"},size:24,get color(){return n()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),_(()=>E(m,`icon_status centerBx ${n()?"menu":"Xclose"}`)),i})()]}}),null),l(h,s(u,{get when(){return!V()},get children(){var i=$e();return i.firstChild,l(i,s(u,{get when(){return v?.roles?.SEARCH?.isActive},get children(){return ve()}}),null),l(i,s(u,{get when(){return v?.roles?.SCANING?.isActive},get children(){return fe()}}),null),l(i,s(u,{get when(){return v?.roles?.HBL?.isActive},get children(){return G()}}),null),l(i,s(u,{get when(){return v?.roles?.MANIFEST?.isActive},get children(){return R()}}),null),l(i,s(u,{get when(){return v?.roles?.DELIVERY?.isActive},get children(){return N()}}),null),l(i,s(u,{get when(){return j()},get children(){return P()}}),null),i}}),null),l(h,s(u,{get when(){return L()},get fallback(){return s(oe,{})},get children(){var i=_e(),m=i.firstChild;return i.$$click=p,_(()=>w(m,"src",L())),i}}),null),_(()=>w($,"src",`${q("SSG.png")}`)),t})()}z(["click"]);export{xe as default};
