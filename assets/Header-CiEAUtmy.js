const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-D3IEEzk2.js","assets/index-ZuRdWjxZ.js","assets/index-BRlA1Q7g.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/SVG-B0O-UaJG.js","assets/Util-CJwQ4eI5.js","assets/CheckBoxSlide-_7GoFRP_.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ShowOfflinedata-x92mBT95.js","assets/DialogHRM-tsaHe75L.js","assets/DialogHRM-V9_lZntj.css","assets/ScanningServices-qZlCNBCv.js","assets/Toast-CMIWZgHk.js","assets/Toast-DLpFKn-Q.css","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css"])))=>i.map(i=>d[i]);
import{l as N,_ as q,a as M,d as J,i as t,e,S as h,t as m,B as Z,C as ee,D as te,G as le,H as $e,h as he,f as L,k as D,p as ye,j,b as ke,I as V,A as p,J as T,g as H,x as se,m as Y,K as xe,w as ae,L as Se,M as we,N as Ce}from"./index-ZuRdWjxZ.js";import G from"./SVG-B0O-UaJG.js";import{f as ie,e as re,q as z,u as P,r as Ae,v as U,k as ge,g as Ee,O as ve,w as K,x as Ie,y as fe,z as ne,A as Q,B as ce,C as Pe,c as Oe,a as B,d as oe,D as ue}from"./Util-CJwQ4eI5.js";import{d as Re}from"./InitPrintServices-tbDVtYPt.js";import{CloseModal as je,OpenModal as W}from"./DialogHRM-tsaHe75L.js";import{l as Le,s as Te}from"./ScanningServices-qZlCNBCv.js";import{a as Me,b as Be}from"./ShowQRPrintLabel-LwNql91u.js";import me from"./InputHr-D2AKaV_Q.js";import de from"./ButonHrm-aSfnD0Ck.js";import{OpenToast as X}from"./Toast-CMIWZgHk.js";import{handleListManifest as pe}from"./DashManifest-DPzjNa7O.js";import"./fontkit.es-yAesCE8D.js";import"./App.module-CbHnVtRQ.js";import"./qrcode-DHy8FFhS.js";/* empty css                 */var De=m("<div> "),Ne=m("<div class=loading_wapp><div id=buttonDiv></div>");const qe=N(()=>q(()=>import("./LoadingColorSpinner-D3IEEzk2.js"),__vite__mapDeps([0,1,2,3]))),be=async r=>{const d=await ie({query:"qcm42351987"});if(d&&!d.error){let g=re(z())||{},v=Object.assign({},g,d);P(z(),v)}return Ve(),1},Ve=async()=>{const l=await ie({query:"qml987lg1936"});if(l&&!l.error){Z("store",l),l?.stores&&P("storeGroupBy",Ae(l?.stores));let d={...l};d._id="M023009",d.qryStore=re(z()),U.get("M023009",function(v,k){v?U.post(d,function(n,x){n||console.log("Successfully posted dbParamsS")}):P("M023009",l)}),Re()}},He=async()=>{const l=await ge({query:"qml987lg1936"});l&&!l.error&&(Z("store",l.data),P("M023009",l.data))},_e=async r=>{let l=Ee(992002);if(l){l.params={tkn:r};let g=await ie(l);if(g?.userId){let v=[];ve(g.accessActivities).map(_=>{let n=g.accessActivities[_];n.isActive&&v.push({id:n.idCode,label:n.label})}),ee("profile",g);let k={...g};k._id="118238",K.get("118238",function(n,x){n&&K.post(k,function(c,o){console.log(c)})}),te(g?.picture),le("roles",g?.accessLogistic),re("M023009")?.statusAllList.map(_=>{g?.accessLogistic?.[_.id]?.isActive}),setTimeout(()=>{Ie("https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js"),setTimeout(()=>{fe()},1800)},1800)}}},Fe=()=>new Promise(async(r,l)=>{K.get("118238",function(g,v){if(!v){r(!1);return}U.get("M023009",function(_,n){if(_)r(!1);else{ee("profile",v);let x=[];ve(v.accessActivities).map(c=>{let o=v.accessActivities[c];o.isActive&&x.push({id:o.idCode,label:o.label})}),te(v?.picture),le("roles",v?.accessLogistic),P(z(),n?.qryStore),P("M023009",n),Z("store",n);let w=[];n?.statusAllList.map(c=>{v?.accessLogistic?.[c.id]?.isActive&&w.push(c)}),$e("list",w),r(!0)}})})});function Ge({did:r}){const[l,d]=M(!1),[g,v]=M(!1),k=async n=>{let x=n.credential?.slice(n.credential.toString().length-32,n.credential.toString().length-16);x=n.credential?.slice(0,16);let w={params:{id_token:n.credential},query:"getGoogleUserbyToken"};const c=await ge(w);if(c&&c.data){let o=new Date().getTime(),u=new Date(o+6e4*60*24*365),b=Q(),C=ne(c.data.split(":")[1],x);P("sectionKey",C),document.cookie=`${b}=${c.data}; expires=${u}; path=/;g_state = {"i_l":1,"i_p":${u}}; ssgl_access_tkn = ${n.credential}`,document.cookie=`ssgl_access_tkn = ${n.credential}; expires=${u};`,await be(),_e(c.data)}},_=()=>{let n=window.google;n&&!l()&&(n?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:k}),n?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large",shape:"pill"}),d(!0),g()&&clearInterval(g()))};return J(()=>{let n=setInterval(()=>{_()},120);_(),v(n)}),(()=>{var n=Ne(),x=n.firstChild;return t(n,e(h,{get when(){return!l()},get children(){var w=De();return w.firstChild,t(w,e(qe,{stroke:"rgb(200 25 60 / 1)",size:62}),null),w}}),x),n})()}var ze=m('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function Ue(r){const l=()=>{let d=Q();document.cookie=`${d}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",ee("profile",void 0),te(void 0),le("roles",void 0),je(r?.modalId),K.destroy(),U.destroy()};return(()=>{var d=ze(),g=d.firstChild,v=g.firstChild,k=v.firstChild,_=v.nextSibling,n=_.firstChild,x=n.nextSibling;return d.style.setProperty("max-height","80vh"),d.style.setProperty("width","350px"),d.style.setProperty("overflow","auto"),d.style.setProperty("background","#ffffff"),d.style.setProperty("border-radius","13"),d.style.setProperty("padding","10px 19px"),v.$$click=l,t(n,()=>r?.val?.email),t(x,()=>r?.val?.name),L(()=>D(k,"src",r?.val?.picture)),d})()}he(["click"]);var F=m('<div class="_dsplFlx bottombx flxWrp spaceAround txtWrap">'),Ke=m('<div><div class="telegram "><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Iniciar seccion con Telegram</h5><div class=" centerBx "></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr width=90px></div><div class="_dsplFlx bottombx circleNo"><span class=centerBx>1</span><p class=centerBx>necesita escanear este codigo para comenzar una conversacion con nuestro BOT en telegram</p></div><div class="_dsplFlx bottombx circleNo"><span class=" centerBx">2</span><p class=" centerBx">escriba su correo electronico y le enviaremos un codigo para verificar su cuenta');const Qe=N(()=>q(()=>import("./SVG-B0O-UaJG.js"),__vite__mapDeps([4,1,2,5])));N(()=>q(()=>import("./CheckBoxSlide-_7GoFRP_.js"),__vite__mapDeps([6,1,2,7])));function Ye(r){const[l,d]=M(!1),[g,v]=M(""),[k,_]=M(""),n=()=>{let u=g();return/^\S+@\S+\.\S+$/.test(u)},[x,{refetch:w}]=ye(r?.val,async u=>{let C=Me("https://t.me/Qvaremesa_bot");var O=await Be(C,"image/png");return URL.createObjectURL(O)});J(()=>{fe()});const c=async()=>{let b=await(await fetch(ce()+"gql_api/validate-telegram-code?code="+k())).json();if(b?.error)X({text:b.error,timeout:3500,theme:"red",id:B()}),_("");else{let C=ne(b,k()+k());if(Pe(C)){let O=JSON.parse(C),E=new Date().getTime(),a=new Date(E+6e4*60*24*365),s=O.access_token+Oe(256),I=Q();document.cookie=`${I}=${O.token}; expires=${a}; path=/;g_state = {"i_l":1,"i_p":${a}}; ssgl_access_tkn = ${s}`,document.cookie=`ssgl_access_tkn = ${s}; expires=${a};`,location.reload()}else X({text:b.error,timeout:3500,theme:"red",id:B()}),_("")}},o=async()=>{let b=await(await fetch(ce()+"gql_api/singwtelegram?email="+g())).json();b?.email?d(!0):X({text:b.error,timeout:3500,theme:"red",id:B()})};return(()=>{var u=Ke(),b=u.firstChild,C=b.firstChild,O=C.firstChild,E=O.firstChild,a=E.nextSibling,s=C.nextSibling,I=s.firstChild,i=s.nextSibling;return i.nextSibling,u.style.setProperty("max-height","80vh"),u.style.setProperty("overflow","auto"),u.style.setProperty("background","#ffffff"),u.style.setProperty("border-radius","13"),u.style.setProperty("padding","10px 19px"),t(a,e(Qe,{name:"telegram",size:24,color:"#229ED9"})),s.style.setProperty("padding","16px"),t(b,e(h,{get when(){return!l()},get children(){return[(()=>{var f=F();return f.style.setProperty("padding","16px"),t(f,e(me,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#229ED9",get value(){return g()},placeholder:"Correo electronico",label:"Correo electronico",colors:"#2b2b2b",handleClick:A=>v(A)})),f})(),e(h,{get when(){return n()},get children(){var f=F();return f.style.setProperty("padding","16px"),t(f,e(de,{color:"#229ED9",label:"Request code",icon:"send",handleClick:o})),f}})]}}),null),t(b,e(h,{get when(){return l()},get children(){return[(()=>{var f=F();return f.style.setProperty("padding","16px"),t(f,e(me,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#229ED9",get value(){return k()},placeholder:"Codigo",label:"Codigo",colors:"#2b2b2b",handleClick:A=>_(A?.toUpperCase())})),f})(),(()=>{var f=F();return f.style.setProperty("padding","16px"),t(f,e(de,{color:"#229ED9",label:"Verificar codigo",icon:"send",handleClick:c})),f})()]}}),null),L(f=>{var A=j()?"96vw":"420px",S=x();return A!==f.e&&((f.e=A)!=null?u.style.setProperty("width",A):u.style.removeProperty("width")),S!==f.t&&D(I,"src",f.t=S),f},{e:void 0,t:void 0}),u})()}var We=m('<p class="title-header centerBx">Stephanie Solution'),Xe=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),Je=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/reports><span>Reportes'),Ze=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Escanear'),et=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),tt=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),lt=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/inventory><span>Inventario'),it=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/products><span>Productos'),rt=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/expenses><span>Gastos'),nt=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/orders><span>Ordenes'),st=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/self-checkout><span>Self CheckOut'),at=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/beneficiaries><span>Beneficiaries'),ct=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/remittance><span>Remesas'),ot=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),ut=m('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),mt=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/scan><span>Escanear'),dt=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Entregas</span></a><ul class=sub-menu>'),pt=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Inventario</span></a><ul class=sub-menu>'),ht=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Ventas</span></a><ul class=sub-menu>'),gt=m('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Admin</span></a><ul class=sub-menu>'),vt=m('<div class=" main-navigation "><ul id=primary-menu class="no-list nav-menu lg:flex items-center "><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=#><span>Reportes</span></a><ul class=sub-menu>'),ft=m('<div class="icon_status centerBx">'),bt=m('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),_t=m("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),$t=m('<div class="telegram-singin centerBx"><div class=" centerBx ">'),yt=m('<header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async></a></div><div class="centerBx bottombx ">'),kt=m('<h5 class="">Offline'),xt=m('<li id=menu-item-7126 class="nav-solutions-retail menu-item menu-item-type-post_type menu-item-object-solutions mb-0"><a class=menu-link-with-svg><span>');const St=N(()=>q(()=>import("./CheckBoxSlide-_7GoFRP_.js"),__vite__mapDeps([6,1,2,7]))),wt=N(()=>q(()=>import("./ShowOfflinedata-x92mBT95.js"),__vite__mapDeps([8,1,2,5,9,10,11,12,13,14,15])));function Vt(){const[r,l]=M(!1),d=()=>{k(),g()},g=async()=>{let c=ue("ssgl_access_tkn"),o=ue(Q());if(c&&o&&o.length>10&&c.length>10){let u=c?.slice(c.toString().length-32,c.toString().length-16);u=c?.slice(0,16);let b=ne(o.split(":")[1],u);P("sectionKey",b),await Fe(),setTimeout(()=>{v(o)},850)}else He()},v=async c=>{await be(),await _e(c)},k=async()=>{let o=await(await fetch(`${oe("svgsSSL.json")}`)).json();return P("svgSymbols",o),Ce(o),o};J(async()=>{d(),Le(),pe(),Te()}),ke(()=>{});const _=()=>{let c=B(),o={};o.id=c,o.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},o.content=e(Ue,{get val(){return H?.profile},modalId:c}),W(o)},n=c=>{let o={},u=B();o.id=u,o.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},o.content=e(wt,{modalId:u}),W(o)},x=async c=>{let o={},u=B();o.id=u,o.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},o.content=e(Ye,{modalId:u,val:"k"}),W(o)},w=async c=>{pe(),we(c)};return(()=>{var c=yt(),o=c.firstChild,u=o.firstChild,b=u.firstChild,C=b.firstChild,O=C.firstChild,E=b.nextSibling;return t(C,e(h,{get when(){return!j()},get children(){return We()}}),null),t(u,e(h,{get when(){return j()||V()},get children(){var a=ut(),s=a.firstChild,I=s.firstChild;return I.$$click=()=>l(!r()),t(s,e(h,{get when(){return p?.roles?.SEARCH?.isActive},get children(){var i=Xe();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return p?.roles?.REPORT?.isActive},get children(){var i=Je();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return p?.roles?.SCANING?.isActive},get children(){var i=Ze();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return p?.roles?.HBL?.isActive},get children(){var i=et();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return T()&&p?.roles?.MANIFEST?.isActive},get children(){var i=tt();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return p?.roles?.INVENTORY?.isActive},get children(){var i=lt();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return p?.roles?.PRODUCTS?.isActive},get children(){var i=it();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return p?.roles?.EXPENSES?.isActive},get children(){var i=rt();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return p?.roles?.POS?.isActive},get children(){var i=nt();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return p?.roles?.STORE_SELFCHECK?.isActive&&H?.profile?.agency?.id},get children(){var i=st();return i.$$click=()=>l(!r()),i}}),null),t(s,e(h,{get when(){return se()},get children(){return[(()=>{var i=at();return i.$$click=()=>l(!r()),i})(),(()=>{var i=ct();return i.$$click=()=>l(!r()),i})(),(()=>{var i=ot();return i.$$click=()=>l(!r()),i})()]}}),null),L(()=>Y(a,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${r()?"is-open":""}`)),a}}),E),t(u,e(h,{get when(){return!(j()||V())},get children(){var a=vt(),s=a.firstChild,I=s.firstChild,i=I.nextSibling,f=i.firstChild,A=f.nextSibling;return t(A,e(y,{label:"Buscar",url:"/search",get validation(){return p?.roles?.SEARCH?.isActive}}),null),t(A,e(y,{label:"Reportes",url:"/reports",get validation(){return p?.roles?.REPORT?.isActive}}),null),t(A,e(y,{label:"HBL",url:"/findhbl",get validation(){return p?.roles?.HBL?.isActive}}),null),t(s,e(h,{get when(){return p?.roles?.SCANING?.isActive},get children(){return mt()}}),null),t(s,e(h,{get when(){return p?.roles?.DELIVERY?.isActive||p?.roles?.MANIFEST?.isActive},get children(){var S=dt(),R=S.firstChild,$=R.nextSibling;return t($,e(y,{label:"Entregas",url:"/delivery",get validation(){return p?.roles?.DELIVERY?.isActive}}),null),t($,e(y,{label:"Manifiestos",url:"/manifest",get validation(){return T()&&p?.roles?.MANIFEST?.isActive}}),null),S}}),null),t(s,e(h,{get when(){return xe()},get children(){var S=pt(),R=S.firstChild,$=R.nextSibling;return t($,e(y,{label:"Inventario",url:"/inventory",get validation(){return p?.roles?.INVENTORY?.isActive}}),null),t($,e(y,{label:"Productos",url:"/products",get validation(){return p?.roles?.PRODUCTS?.isActive}}),null),t($,e(y,{label:"Conteo de Productos",url:"/counting-products",get validation(){return p?.roles?.SCAN_INVENTORY?.isActive}}),null),t($,e(y,{label:"Gastos",url:"/expenses",get validation(){return p?.roles?.EXPENSES?.isActive}}),null),S}}),null),t(s,e(h,{get when(){return p?.roles?.POS?.isActive||p?.roles?.STORE_SELFCHECK?.isActive&&H?.profile?.agency?.id},get children(){var S=ht(),R=S.firstChild,$=R.nextSibling;return t($,e(y,{label:"POS",url:"/pos-sales",get validation(){return p?.roles?.POS?.isActive}}),null),t($,e(y,{label:"Ordenes",url:"/orders",get validation(){return p?.roles?.POS?.isActive}}),null),t($,e(y,{label:"Self CheckOut",url:"/self-checkout",get validation(){return p?.roles?.STORE_SELFCHECK?.isActive&&H?.profile?.agency?.id}}),null),S}}),null),t(s,e(h,{get when(){return se()},get children(){var S=gt(),R=S.firstChild,$=R.nextSibling;return t($,e(y,{label:"Beneficiarios",url:"/beneficiaries",validation:1}),null),t($,e(y,{label:"Remesas",url:"/remittance",get validation(){return p?.roles?.EXPENSES?.isActive}}),null),t($,e(y,{label:"Clientes",url:"/shippers",validation:1}),null),t($,e(y,{label:"Users",url:"/users",validation:1}),null),S}}),null),a}}),E),t(E,e(St,{get initValue(){return T()},updChange:()=>w(!T()),color:"var(--background-red-ssg)"}),null),t(E,e(h,{get when(){return j()},get fallback(){return(()=>{var a=kt();return a.$$click=n,a})()},get children(){var a=ft();return a.$$click=n,t(a,e(G,{get name(){return T()?"link-off":"link"},size:24,get color(){return T()?"var(--background-red-ssg)":"var(--hrm-palette-tertiary60)"}})),a}}),null),t(E,e(h,{get when(){return j()||V()},get children(){var a=bt(),s=a.firstChild;return s.$$click=()=>l(!r()),t(s,e(G,{get name(){return r()?"Xclose":"menu"},size:24,get color(){return r()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),L(()=>Y(s,`icon_status centerBx ${r()?"menu":"Xclose"}`)),a}}),null),t(u,e(h,{get when(){return ae()},get fallback(){return e(Ge,{})},get children(){var a=_t(),s=a.firstChild;return a.$$click=_,L(()=>D(s,"src",Se())),a}}),null),t(u,e(h,{get when(){return!ae()},get children(){var a=$t(),s=a.firstChild;return a.$$click=x,t(s,e(G,{name:"telegram",size:24,color:"#229ED9"})),a}}),null),L(a=>{var s=`site-header ${j()||V()?"isMobile":""}`,I=`${oe("SSG.webp")}`;return s!==a.e&&Y(c,a.e=s),I!==a.t&&D(O,"src",a.t=I),a},{e:void 0,t:void 0}),c})()}const y=r=>e(h,{get when(){return r?.validation},get children(){var l=xt(),d=l.firstChild,g=d.firstChild;return t(g,()=>r?.label),t(d,e(G,{get name(){return r?.icon}}),null),L(()=>D(d,"href",r?.url)),l}});he(["click"]);export{Vt as default};
