const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Dun5KutO.js","assets/index-DmDoySfr.js","assets/index-BRlA1Q7g.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/SVG-BGCtSUd4.js","assets/Util-BOZFT72w.js","assets/CheckBoxSlide-BVIN5Dsm.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ShowOfflinedata-BCfDXmpI.js","assets/DialogHRM-SXj3tVOC.js","assets/DialogHRM-V9_lZntj.css","assets/Scanning-92oAhgQA.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/Toast-BJQvOdvw.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as B,_ as D,a as T,d as X,i as t,e,S as p,t as o,C as J,D as Z,G as ee,H as te,I as be,h as de,f as R,k as M,p as _e,j as O,b as $e,J as N,A as d,B as j,g as q,x as ne,m as Q,K as ye,L as ke,w as se,M as xe,N as Se}from"./index-DmDoySfr.js";import H from"./SVG-BGCtSUd4.js";import{f as le,e as ie,q as F,u as P,r as we,v as G,k as pe,g as Ce,O as he,w as z,x as Ae,y as ge,z as re,A as U,B as ae,C as Ee,c as Ie,a as L,d as ce,D as oe}from"./Util-BOZFT72w.js";import{d as Pe}from"./InitPrintServices-UY5jJIsn.js";import{CloseModal as Oe,OpenModal as Y}from"./DialogHRM-SXj3tVOC.js";import{l as Re}from"./Scanning-92oAhgQA.js";import{a as je,b as Te}from"./ShowQRPrintLabel-BNoPY3HL.js";import ue from"./InputHr-BUa8fRxy.js";import me from"./ButonHrm-CBj9aoO5.js";import{OpenToast as W}from"./Toast-BJQvOdvw.js";import"./fontkit.es-B5wvfXt7.js";import"./App.module-CbHnVtRQ.js";import"./qrcode-DHy8FFhS.js";/* empty css                 */var Le=o("<div> "),Me=o("<div class=loading_wapp><div id=buttonDiv></div>");const Be=B(()=>D(()=>import("./LoadingColorSpinner-Dun5KutO.js"),__vite__mapDeps([0,1,2,3]))),ve=async r=>{const u=await le({query:"qcm42351987"});if(u&&!u.error){let h=ie(F())||{},v=Object.assign({},h,u);P(F(),v)}return De(),1},De=async()=>{const l=await le({query:"qml987lg1936"});if(l&&!l.error){J("store",l),l?.stores&&P("storeGroupBy",we(l?.stores));let u={...l};u._id="M023009",u.qryStore=ie(F()),G.get("M023009",function(v,S){v?G.post(u,function(s,w){s||console.log("Successfully posted dbParamsS")}):P("M023009",l)}),Pe()}},Ne=async()=>{const l=await pe({query:"qml987lg1936"});l&&!l.error&&(J("store",l.data),P("M023009",l.data))},fe=async r=>{let l=Ce(992002);if(l){l.params={tkn:r};let h=await le(l);if(h?.userId){let v=[];he(h.accessActivities).map($=>{let s=h.accessActivities[$];s.isActive&&v.push({id:s.idCode,label:s.label})}),Z("profile",h);let S={...h};S._id="118238",z.get("118238",function(s,w){s&&z.post(S,function(n,f){console.log(n)})}),ee(h?.picture),te("roles",h?.accessLogistic),ie("M023009")?.statusAllList.map($=>{h?.accessLogistic?.[$.id]?.isActive}),setTimeout(()=>{Ae("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{ge()},1800)},1800)}}},qe=()=>new Promise(async(r,l)=>{z.get("118238",function(h,v){if(!v){r(!1);return}G.get("M023009",function($,s){if($)r(!1);else{Z("profile",v);let w=[];he(v.accessActivities).map(n=>{let f=v.accessActivities[n];f.isActive&&w.push({id:f.idCode,label:f.label})}),ee(v?.picture),te("roles",v?.accessLogistic),P(F(),s?.qryStore),P("M023009",s),J("store",s);let m=[];s?.statusAllList.map(n=>{v?.accessLogistic?.[n.id]?.isActive&&m.push(n)}),be("list",m),r(!0)}})})});function Ve({did:r}){const[l,u]=T(!1),[h,v]=T(!1),S=async s=>{let w=s.credential?.slice(s.credential.toString().length-32,s.credential.toString().length-16);w=s.credential?.slice(0,16);let m={params:{id_token:s.credential},query:"getGoogleUserbyToken"};const n=await pe(m);if(n&&n.data){let f=new Date().getTime(),b=new Date(f+6e4*60*24*365),y=U(),E=re(n.data.split(":")[1],w);P("sectionKey",E),document.cookie=`${y}=${n.data}; expires=${b}; path=/;g_state = {"i_l":1,"i_p":${b}}; ssgl_access_tkn = ${s.credential}`,document.cookie=`ssgl_access_tkn = ${s.credential}; expires=${b};`,await ve(),fe(n.data)}},$=()=>{let s=window.google;s&&!l()&&(s?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:S}),s?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large",shape:"pill"}),u(!0),h()&&clearInterval(h()))};return X(()=>{let s=setInterval(()=>{$()},120);$(),v(s)}),(()=>{var s=Me(),w=s.firstChild;return t(s,e(p,{get when(){return!l()},get children(){var m=Le();return m.firstChild,t(m,e(Be,{stroke:"rgb(200 25 60 / 1)",size:62}),null),m}}),w),s})()}var He=o('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function Fe(r){const l=()=>{let u=U();document.cookie=`${u}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",Z("profile",void 0),ee(void 0),te("roles",void 0),Oe(r?.modalId),z.destroy(),G.destroy()};return(()=>{var u=He(),h=u.firstChild,v=h.firstChild,S=v.firstChild,$=v.nextSibling,s=$.firstChild,w=s.nextSibling;return u.style.setProperty("max-height","80vh"),u.style.setProperty("width","350px"),u.style.setProperty("overflow","auto"),u.style.setProperty("background","#ffffff"),u.style.setProperty("border-radius","13"),u.style.setProperty("padding","10px 19px"),v.$$click=l,t(s,()=>r?.val?.email),t(w,()=>r?.val?.name),R(()=>M(S,"src",r?.val?.picture)),u})()}de(["click"]);var V=o('<div class="_dsplFlx bottombx flxWrp spaceAround txtWrap">'),Ge=o('<div><div class="telegram "><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Iniciar seccion con Telegram</h5><div class=" centerBx "></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr width=90px></div><div class="_dsplFlx bottombx circleNo"><span class=centerBx>1</span><p class=centerBx>necesita escanear este codigo para comenzar una conversacion con nuestro BOT en telegram</p></div><div class="_dsplFlx bottombx circleNo"><span class=" centerBx">2</span><p class=" centerBx">escriba su correo electronico y le enviaremos un codigo para verificar su cuenta');const ze=B(()=>D(()=>import("./SVG-BGCtSUd4.js"),__vite__mapDeps([4,1,2,5])));B(()=>D(()=>import("./CheckBoxSlide-BVIN5Dsm.js"),__vite__mapDeps([6,1,2,7])));function Ue(r){const[l,u]=T(!1),[h,v]=T(""),[S,$]=T(""),s=()=>{let b=h();return/^\S+@\S+\.\S+$/.test(b)},[w,{refetch:m}]=_e(r?.val,async b=>{let E=je("https://t.me/Qvaremesa_bot");var A=await Te(E,"image/png");return URL.createObjectURL(A)});X(()=>{ge()});const n=async()=>{let y=await(await fetch(ae()+"gql_api/validate-telegram-code?code="+S())).json();if(y?.error)W({text:y.error,timeout:3500,theme:"red",id:L()}),$("");else{let E=re(y,S()+S());if(Ee(E)){let A=JSON.parse(E),c=new Date().getTime(),a=new Date(c+6e4*60*24*365),C=A.access_token+Ie(256),i=U();document.cookie=`${i}=${A.token}; expires=${a}; path=/;g_state = {"i_l":1,"i_p":${a}}; ssgl_access_tkn = ${C}`,document.cookie=`ssgl_access_tkn = ${C}; expires=${a};`,location.reload()}else W({text:y.error,timeout:3500,theme:"red",id:L()}),$("")}},f=async()=>{let y=await(await fetch(ae()+"gql_api/singwtelegram?email="+h())).json();y?.email?u(!0):W({text:y.error,timeout:3500,theme:"red",id:L()})};return(()=>{var b=Ge(),y=b.firstChild,E=y.firstChild,A=E.firstChild,c=A.firstChild,a=c.nextSibling,C=E.nextSibling,i=C.firstChild,K=C.nextSibling;return K.nextSibling,b.style.setProperty("max-height","80vh"),b.style.setProperty("overflow","auto"),b.style.setProperty("background","#ffffff"),b.style.setProperty("border-radius","13"),b.style.setProperty("padding","10px 19px"),t(a,e(ze,{name:"telegram",size:24,color:"#229ED9"})),C.style.setProperty("padding","16px"),t(y,e(p,{get when(){return!l()},get children(){return[(()=>{var g=V();return g.style.setProperty("padding","16px"),t(g,e(ue,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#229ED9",get value(){return h()},placeholder:"Correo electronico",label:"Correo electronico",colors:"#2b2b2b",handleClick:_=>v(_)})),g})(),e(p,{get when(){return s()},get children(){var g=V();return g.style.setProperty("padding","16px"),t(g,e(me,{color:"#229ED9",label:"Request code",icon:"send",handleClick:f})),g}})]}}),null),t(y,e(p,{get when(){return l()},get children(){return[(()=>{var g=V();return g.style.setProperty("padding","16px"),t(g,e(ue,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#229ED9",get value(){return S()},placeholder:"Codigo",label:"Codigo",colors:"#2b2b2b",handleClick:_=>$(_?.toUpperCase())})),g})(),(()=>{var g=V();return g.style.setProperty("padding","16px"),t(g,e(me,{color:"#229ED9",label:"Verificar codigo",icon:"send",handleClick:n})),g})()]}}),null),R(g=>{var _=O()?"96vw":"420px",I=w();return _!==g.e&&((g.e=_)!=null?b.style.setProperty("width",_):b.style.removeProperty("width")),I!==g.t&&M(i,"src",g.t=I),g},{e:void 0,t:void 0}),b})()}var Ke=o('<p class="title-header centerBx">Stephanie Solution'),Qe=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),Ye=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),We=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),Xe=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),Je=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),Ze=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/inventory><span>Inventario'),et=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),tt=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/expenses><span>Gastos'),lt=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/orders><span>Ordenes'),it=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/self-checkout><span>Self CheckOut'),rt=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),nt=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/remittance><span>Remesas'),st=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),at=o('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),ct=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),ot=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),ut=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),mt=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Ventas</span></a><ul class=sub-menu>'),dt=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),pt=o('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),ht=o('<div class="icon_status centerBx">'),gt=o('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),vt=o("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),ft=o('<div class="telegram-singin centerBx"><div class=" centerBx ">'),bt=o('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async></a></div><div class="centerBx bottombx ">'),_t=o('<h5 class="">Offline'),$t=o('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');const yt=B(()=>D(()=>import("./CheckBoxSlide-BVIN5Dsm.js"),__vite__mapDeps([6,1,2,7]))),kt=B(()=>D(()=>import("./ShowOfflinedata-BCfDXmpI.js"),__vite__mapDeps([8,1,2,5,9,10,11,12,13,14,15])));function Bt(){const[r,l]=T(!1),u=()=>{S(),h()},h=async()=>{let m=oe("ssgl_access_tkn"),n=oe(U());if(m&&n&&n.length>10&&m.length>10){let f=m?.slice(m.toString().length-32,m.toString().length-16);f=m?.slice(0,16);let b=re(n.split(":")[1],f);P("sectionKey",b),await qe(),setTimeout(()=>{v(n)},850)}else Ne()},v=async m=>{await ve(),await fe(m)},S=async()=>{let n=await(await fetch(`${ce("svgsSSL.json")}`)).json();return P("svgSymbols",n),Se(n),n};X(async()=>{u(),Re()}),$e(()=>{});const $=()=>{let m=L(),n={};n.id=m,n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=e(Fe,{get val(){return q?.profile},modalId:m}),Y(n)},s=m=>{let n={},f=L();n.id=f,n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=e(kt,{modalId:f}),Y(n)},w=async m=>{let n={},f=L();n.id=f,n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=e(Ue,{modalId:f,val:"k"}),Y(n)};return(()=>{var m=bt(),n=m.firstChild,f=n.firstChild,b=f.firstChild,y=b.firstChild,E=y.firstChild,A=b.nextSibling;return t(y,e(p,{get when(){return!O()},get children(){return Ke()}}),null),t(f,e(p,{get when(){return O()||N()},get children(){var c=at(),a=c.firstChild,C=a.firstChild;return C.$$click=()=>l(!r()),t(a,e(p,{get when(){return d?.roles?.SEARCH?.isActive},get children(){var i=Qe();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return d?.roles?.REPORT?.isActive},get children(){var i=Ye();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return d?.roles?.SCANING?.isActive},get children(){var i=We();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return d?.roles?.HBL?.isActive},get children(){var i=Xe();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return j()&&d?.roles?.MANIFEST?.isActive},get children(){var i=Je();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return d?.roles?.INVENTORY?.isActive},get children(){var i=Ze();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return d?.roles?.PRODUCTS?.isActive},get children(){var i=et();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return d?.roles?.EXPENSES?.isActive},get children(){var i=tt();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return d?.roles?.POS?.isActive},get children(){var i=lt();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return d?.roles?.STORE_SELFCHECK?.isActive&&q?.profile?.agency?.id},get children(){var i=it();return i.$$click=()=>l(!r()),i}}),null),t(a,e(p,{get when(){return ne()},get children(){return[(()=>{var i=rt();return i.$$click=()=>l(!r()),i})(),(()=>{var i=nt();return i.$$click=()=>l(!r()),i})(),(()=>{var i=st();return i.$$click=()=>l(!r()),i})()]}}),null),R(()=>Q(c,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${r()?"is-open":""}`)),c}}),A),t(f,e(p,{get when(){return!(O()||N())},get children(){var c=pt(),a=c.firstChild,C=a.firstChild,i=C.nextSibling,K=i.firstChild,g=K.nextSibling;return t(g,e(x,{label:"Buscar",url:"/search",get validation(){return d?.roles?.SEARCH?.isActive}}),null),t(g,e(x,{label:"Reportes",url:"/reports",get validation(){return d?.roles?.REPORT?.isActive}}),null),t(g,e(x,{label:"HBL",url:"/findhbl",get validation(){return d?.roles?.HBL?.isActive}}),null),t(a,e(p,{get when(){return d?.roles?.SCANING?.isActive},get children(){return ct()}}),null),t(a,e(p,{get when(){return d?.roles?.DELIVERY?.isActive||d?.roles?.MANIFEST?.isActive},get children(){var _=ot(),I=_.firstChild,k=I.nextSibling;return t(k,e(x,{label:"Entregas",url:"/delivery",get validation(){return d?.roles?.DELIVERY?.isActive}}),null),t(k,e(x,{label:"Manifiestos",url:"/manifest",get validation(){return j()&&d?.roles?.MANIFEST?.isActive}}),null),_}}),null),t(a,e(p,{get when(){return ye()},get children(){var _=ut(),I=_.firstChild,k=I.nextSibling;return t(k,e(x,{label:"Inventario",url:"/inventory",get validation(){return d?.roles?.INVENTORY?.isActive}}),null),t(k,e(x,{label:"Productos",url:"/products",get validation(){return d?.roles?.PRODUCTS?.isActive}}),null),t(k,e(x,{label:"Conteo de Productos",url:"/counting-products",get validation(){return d?.roles?.SCAN_INVENTORY?.isActive}}),null),t(k,e(x,{label:"Gastos",url:"/expenses",get validation(){return d?.roles?.EXPENSES?.isActive}}),null),_}}),null),t(a,e(p,{get when(){return d?.roles?.POS?.isActive||d?.roles?.STORE_SELFCHECK?.isActive&&q?.profile?.agency?.id},get children(){var _=mt(),I=_.firstChild,k=I.nextSibling;return t(k,e(x,{label:"POS",url:"/pos-sales",get validation(){return d?.roles?.POS?.isActive}}),null),t(k,e(x,{label:"Ordenes",url:"/orders",get validation(){return d?.roles?.POS?.isActive}}),null),t(k,e(x,{label:"Self CheckOut",url:"/self-checkout",get validation(){return d?.roles?.STORE_SELFCHECK?.isActive&&q?.profile?.agency?.id}}),null),_}}),null),t(a,e(p,{get when(){return ne()},get children(){var _=dt(),I=_.firstChild,k=I.nextSibling;return t(k,e(x,{label:"Beneficiarios",url:"/beneficiaries",validation:1}),null),t(k,e(x,{label:"Remesas",url:"/remittance",get validation(){return d?.roles?.EXPENSES?.isActive}}),null),t(k,e(x,{label:"Clientes",url:"/shippers",validation:1}),null),t(k,e(x,{label:"Users",url:"/users",validation:1}),null),_}}),null),c}}),A),t(A,e(yt,{get initValue(){return j()},updChange:()=>ke(!j()),color:"var(--background-red-ssg)"}),null),t(A,e(p,{get when(){return O()},get fallback(){return(()=>{var c=_t();return c.$$click=s,c})()},get children(){var c=ht();return c.$$click=s,t(c,e(H,{get name(){return j()?"link-off":"link"},size:24,get color(){return j()?"var(--background-red-ssg)":"var(--hrm-palette-tertiary60)"}})),c}}),null),t(A,e(p,{get when(){return O()||N()},get children(){var c=gt(),a=c.firstChild;return a.$$click=()=>l(!r()),t(a,e(H,{get name(){return r()?"Xclose":"menu"},size:24,get color(){return r()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),R(()=>Q(a,`icon_status centerBx ${r()?"menu":"Xclose"}`)),c}}),null),t(f,e(p,{get when(){return se()},get fallback(){return e(Ve,{})},get children(){var c=vt(),a=c.firstChild;return c.$$click=$,R(()=>M(a,"src",xe())),c}}),null),t(f,e(p,{get when(){return!se()},get children(){var c=ft(),a=c.firstChild;return c.$$click=w,t(a,e(H,{name:"telegram",size:24,color:"#229ED9"})),c}}),null),R(c=>{var a=`site-header ${O()||N()?"isMobile":""}`,C=`${ce("SSG.webp")}`;return a!==c.e&&Q(m,c.e=a),C!==c.t&&M(E,"src",c.t=C),c},{e:void 0,t:void 0}),m})()}const x=r=>e(p,{get when(){return r?.validation},get children(){var l=$t(),u=l.firstChild,h=u.firstChild;return t(h,()=>r?.label),t(u,e(H,{get name(){return r?.icon}}),null),R(()=>M(u,"href",r?.url)),l}});de(["click"]);export{Bt as default};
