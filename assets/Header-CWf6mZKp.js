const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-hMnmkBAW.js","assets/index-oju9DPd2.js","assets/index-B8E-m_hz.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as U,_ as X,a as w,m as P,i as a,d as l,S as u,t as m,z as T,A as H,B as z,e as D,f as _,n as S,h as Y,v as g,q as x,g as I,p as j,C as W,k as J}from"./index-oju9DPd2.js";import Z from"./SVG-BIkIVnTe.js";import{f as A,a as O,q as E,u as b,b as ee,O as te,j as ne,k as ie,d as re,m as Q,n as C,o as L,r as q,g as se}from"./Util-Dx3vfczV.js";import{s as le,i as M,a as R}from"./globalSignal-Dx2wg24B.js";import{d as ae}from"./InitPrintServices-BiO_tIgN.js";import{CloseModal as ce,OpenModal as me}from"./DialogHRM-BO8J7Tvl.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";var oe=m("<div> "),ue=m("<div class=loading_wapp><div id=buttonDiv></div>");const de=U(()=>X(()=>import("./LoadingColorSpinner-hMnmkBAW.js"),__vite__mapDeps([0,1,2,3]))),F=async n=>{const c=await A({query:"qcm42351987"});if(c&&!c.error){let o=O(E())||{},p=Object.assign({},o,c);b(E(),p)}return he(),1},he=async()=>{const i=await A({query:"qml987lg1936"});i&&!i.error&&(b("M023009",i),ae())},K=async n=>{let i=ee(992002);if(i){i.params={tkn:n};let o=await A(i);if(o?.userId){let p=[];te(o.accessActivities).map(t=>{let e=o.accessActivities[t];e.isActive&&p.push({id:e.idCode,label:e.label})}),T("profile",o),H(o?.picture),z("roles",o?.accessLogistic);let f=[];O("M023009")?.statusAllList.map(t=>{o?.accessLogistic?.[t.id]?.isActive&&f.push(t)}),le("list",f),setTimeout(()=>{ne("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{ie()},1800)},1800)}}};function pe({did:n}){const[i,c]=w(!1),[o,p]=w(!1),f=async e=>{let h=e.credential?.slice(e.credential.toString().length-32,e.credential.toString().length-16);h=e.credential?.slice(0,16);let v={params:{id_token:e.credential},query:"getGoogleUserbyToken"};const $=await re(v);if($&&$.data){let y=new Date().getTime(),r=new Date(y+6e4*60*24*365),d=C(),k=Q($.data.split(":")[1],h);b("sectionKey",k),document.cookie=`${d}=${$.data}; expires=${r}; path=/;g_state = {"i_l":1,"i_p":${r}}; ssgl_access_tkn = ${e.credential}`,document.cookie=`ssgl_access_tkn = ${e.credential}; expires=${r};`,await F(),console.log($),K($.data)}},t=()=>{let e=window.google;e&&!i()&&(e?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:f}),e?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),c(!0),o()&&clearInterval(o()))};return P(()=>{let e=setInterval(()=>{t()},120);t(),p(e)}),(()=>{var e=ue(),h=e.firstChild;return a(e,l(u,{get when(){return!i()},get children(){var v=oe();return v.firstChild,a(v,l(de,{stroke:"rgb(200 25 60 / 1)",size:62}),null),v}}),h),e})()}var ge=m('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function ve(n){const i=()=>{let c=C();document.cookie=`${c}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",T("profile",void 0),H(void 0),z("roles",void 0),ce(n?.modalId)};return(()=>{var c=ge(),o=c.firstChild,p=o.firstChild,f=p.firstChild,t=p.nextSibling,e=t.firstChild,h=e.nextSibling;return c.style.setProperty("max-height","80vh"),c.style.setProperty("width","350px"),c.style.setProperty("overflow","auto"),c.style.setProperty("background","#ffffff"),c.style.setProperty("border-radius","13"),c.style.setProperty("padding","10px 19px"),p.$$click=i,a(e,()=>n?.val?.email),a(h,()=>n?.val?.name),_(()=>S(f,"src",n?.val?.picture)),c})()}D(["click"]);var fe=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),$e=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),_e=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),V=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),G=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),B=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/delivery><span>Entregas'),N=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),be=m('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),ye=m('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),ke=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/search><span>Buscar'),we=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Se=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Ae=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),Ce=m('<ul id=primary-menu class="no-list nav-menu lg:flex items-center menu_hrz"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear'),xe=m("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),Ie=m('<header class=site-header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async><p class="title-header centerBx">Stephanie Solution');function Be(){const[n,i]=w(!1),c=()=>{p();let t=q("ssgl_access_tkn"),e=q(C());if(t&&e&&e.length>10&&t.length>10){let h=t?.slice(t.toString().length-32,t.toString().length-16);h=t?.slice(0,16);let v=Q(e.split(":")[1],h);b("sectionKey",v),o(e)}},o=async t=>{await F(),await K(t)},p=async()=>{let e=await(await fetch(`${L("svgsSSL.json")}`)).json();return b("svgSymbols",e),W(e),e};P(c),Y(()=>{});const f=()=>{let t=se(),e={};e.id=t,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=l(ve,{get val(){return J?.profile},modalId:t}),me(e)};return(()=>{var t=Ie(),e=t.firstChild,h=e.firstChild,v=h.firstChild,$=v.firstChild,y=$.firstChild;return a(h,l(u,{get when(){return M()||R()},get children(){return[(()=>{var r=be(),d=r.firstChild,k=d.firstChild;return k.$$click=()=>i(!n()),a(d,l(u,{get when(){return g?.roles?.SEARCH?.isActive},get children(){return[(()=>{var s=fe();return s.$$click=()=>i(!n()),s})(),(()=>{var s=$e();return s.$$click=()=>i(!n()),s})()]}}),null),a(d,l(u,{get when(){return g?.roles?.SCANING?.isActive},get children(){var s=_e();return s.$$click=()=>i(!n()),s}}),null),a(d,l(u,{get when(){return g?.roles?.HBL?.isActive},get children(){var s=V();return s.$$click=()=>i(!n()),s}}),null),a(d,l(u,{get when(){return g?.roles?.MANIFEST?.isActive},get children(){var s=G();return s.$$click=()=>i(!n()),s}}),null),a(d,l(u,{get when(){return g?.roles?.DELIVERY?.isActive},get children(){var s=B();return s.$$click=()=>i(!n()),s}}),null),a(d,l(u,{get when(){return x()},get children(){var s=N();return s.$$click=()=>i(!n()),s}}),null),_(()=>I(r,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${n()?"is-open":""}`)),r})(),(()=>{var r=ye(),d=r.firstChild;return d.$$click=()=>i(!n()),a(d,l(Z,{get name(){return n()?"Xclose":"menu"},size:24,get color(){return n()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),_(()=>I(d,`icon_status centerBx ${n()?"menu":"Xclose"}`)),r})()]}}),null),a(h,l(u,{get when(){return!(M()||R())},get children(){var r=Ce();return r.firstChild,a(r,l(u,{get when(){return g?.roles?.SEARCH?.isActive},get children(){return[ke(),we()]}}),null),a(r,l(u,{get when(){return g?.roles?.SCANING?.isActive},get children(){return Se()}}),null),a(r,l(u,{get when(){return g?.roles?.HBL?.isActive},get children(){return V()}}),null),a(r,l(u,{get when(){return g?.roles?.MANIFEST?.isActive},get children(){return G()}}),null),a(r,l(u,{get when(){return g?.roles?.DELIVERY?.isActive},get children(){return B()}}),null),a(r,l(u,{get when(){return x()},get children(){return[Ae(),N()]}}),null),r}}),null),a(h,l(u,{get when(){return j()},get fallback(){return l(pe,{})},get children(){var r=xe(),d=r.firstChild;return r.$$click=f,_(()=>S(d,"src",j())),r}}),null),_(()=>S(y,"src",`${L("SSG.webp")}`)),t})()}D(["click"]);export{Be as default};
