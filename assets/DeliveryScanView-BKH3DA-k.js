const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Cv6MM0kl.js","assets/index-CS03C161.js","assets/index-DGHHyjai.css","assets/SVG-B-oNkerH.js","assets/index-Ci0zXM0r.js","assets/ShowQR-D4JZuOXg.js","assets/globalSignal-D66ipSOS.js","assets/ShowQRPrintLabel-BZBsG3jz.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-khaE0HRx.js","assets/Util-uEfv1z7O.js","assets/Toast-Cry8BLuA.js","assets/Toast-DLpFKn-Q.css","assets/ContainerElasticView-D37UU4Ya.js","assets/ContainerElasticView-LzOd6fDI.css","assets/LoadingColorSpinner-BL_D4XZ6.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/Item2Delivery-MMdrKnki.js","assets/handelImagesServices-BMK2DRun.js","assets/browser-image-compression-BVJ4p9S0.js","assets/ShowScanDeliveryManifest-Ciy1p8bb.js","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/DashManifest-pm27sUC9.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/DialogHRM-fuWvfnfl.js","assets/DialogHRM-V9_lZntj.css","assets/ManifestDetails-XfUSjwGK.js","assets/debounces-CH4RtgCJ.js","assets/ButonHrm-BUkLBhV3.js","assets/ButonHrm-BSeWNUGQ.css","assets/DeliveryView-B-KW-1-c.js","assets/components-BD3gCz_V.js","assets/ViewErrorsModal-BysV0DOo.js"])))=>i.map(i=>d[i]);
import{l as S,_ as y,e as J,c as G,a as Q,u as U,h as Y,d as t,i as e,S as b,f as E,g as B,E as N,q as W,F,s as Z,t as o,I as oe,D as ue,o as _e,m as ve,n as ee}from"./index-CS03C161.js";import{O as p,g as te,a as ge}from"./Util-uEfv1z7O.js";import{i as f,s as me}from"./globalSignal-D66ipSOS.js";import{OpenModal as re}from"./DialogHRM-fuWvfnfl.js";import{s as he,a as x}from"./DeliveryView-B-KW-1-c.js";import"./fontkit.es-DEjOtITv.js";import"./qrcode-C5vWJp7P.js";import"./Toast-Cry8BLuA.js";import{u as $e}from"./debounces-CH4RtgCJ.js";import{A as xe}from"./components-BD3gCz_V.js";var be=o('<div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="icon_status centerBx"></div><div class=bagsNo>'),fe=o('<p class=" textleft ">'),pe=o("<h5 class=rpto>"),Se=o("<h5>"),ye=o("<div><div class=vertseparator></div><div class=vertseparator></div><h4>"),Be=o("<div>"),Ce=o("<div><div style=padding:16px>"),ie=o("<div> <!>."),ne=o("<div> "),De=o('<div><div class=separator></div><div><div class=" centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=" centerBx"><div class="icon_status centerBx"></div><h4></h4></div><div class=" centerBx"><div class="icon_status centerBx"></div><h5></h5></div></div><div class="_dsplFlx bottombx flxWrp spaceAround ">'),Ie=o('<div class="_dsplFlx flxWrp spaceAround "style=" margin:0 auto;;padding:8px 9px;">'),Ee=o("<div class=bag_number style=max-width:120px;margin:8px;><h5>"),we=o('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),Ae=o('<div class="centerBx flxWrp">');const ke=S(()=>y(()=>import("./FlexSpace-Cv6MM0kl.js"),__vite__mapDeps([0,1,2]))),V=S(()=>y(()=>import("./SVG-B-oNkerH.js"),__vite__mapDeps([3,1,2,4])));S(()=>y(()=>import("./ShowQR-D4JZuOXg.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));const Oe=S(()=>y(()=>import("./ContainerElasticView-D37UU4Ya.js"),__vite__mapDeps([14,1,2,3,4,15])));function Pe(r){G({search:"",status:"AERO_33"});const[u,l]=Q("");$e(l,400);const[d,i]=U();Y(()=>{});const s=()=>{let g={...r?.item};g.addressId=r?.addressId,g.consigneeInfo=r?.item?.consigneeInfo,he("stopD",g)};return t(b,{get when(){return r?.item?.estate},get children(){var g=Ce(),$=g.firstChild;return $.$$click=s,e($,t(xe,{get href(){return`/delivery-scan?dId=${d?.dId}`},onClick:s,get children(){return[(()=>{var n=be(),c=n.firstChild,a=c.nextSibling;return e(c,t(V,{name:"open_package_file_outline",size:32})),e(a,()=>r?.item?.bagsNo),n})(),(()=>{var n=fe();return e(n,()=>q(r?.item?.address)),n})(),t(ke,{}),(()=>{var n=ye(),c=n.firstChild,a=c.nextSibling,h=a.nextSibling;return e(n,t(b,{get when(){return r?.item?.rpto},get children(){return[(()=>{var _=pe();return e(_,()=>r?.item?.rpto),_})(),"|"]}}),c),e(n,t(b,{get when(){return r?.item?.city},get children(){return[(()=>{var _=Se();return e(_,()=>r?.item?.city),_})(),"|"]}}),a),e(h,()=>r?.item?.estate),E(()=>B(n,` ${f(),"centerBx"} bottombx`)),n})()]}})),e(g,t(Oe,{get children(){var n=Be();return e(n,t(N,{fallback:c=>(()=>{var a=ie(),h=a.firstChild,_=h.nextSibling;return _.nextSibling,e(a,()=>c.toString(),_),a})(),get children(){return t(W,{get fallback(){return(()=>{var c=ne();return c.firstChild,e(c,t(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),c})()},get children(){return t(b,{get when(){return p(r?.item?.customers)?.length>0},get children(){return t(F,{get each(){return p(r?.item?.customers)},children:(c,a)=>t(ze,{get item(){return r?.item?.customers?.[c]}})})}})}})}})),E(c=>Z(n,` ${f()?"":"width:94vw;"} margin: 0 auto; ; padding: 18px 29px;`,c)),n}}),null),E(n=>{var c=`client_item_box gWXAaj jlytmu manifest ${f()?"isMobile":"--dsd"}`,a=` ${f()?"":"centerBx"}  topbx `;return c!==n.e&&B(g,n.e=c),a!==n.t&&B($,n.t=a),n},{e:void 0,t:void 0}),g}})}const ze=r=>(()=>{var u=De(),l=u.firstChild,d=l.nextSibling,i=d.firstChild,s=i.firstChild,g=s.nextSibling,$=i.nextSibling,n=$.firstChild,c=n.nextSibling,a=$.nextSibling,h=a.firstChild,_=h.nextSibling,C=d.nextSibling;return e(s,t(V,{name:"account",size:24})),e(g,()=>r?.item?.name),e(d,t(z,{}),$),e(n,t(V,{name:"cellphone",size:24})),e(c,()=>r?.item?.phoneNumber),e(d,t(z,{}),a),e(h,t(V,{name:"credit_card",size:24})),e(_,()=>r?.item?.cidentity),e(C,t(Me,{get list(){return r?.item?.bagsNumb}})),E(()=>B(d,` ${f()?"":"centerBx"} bottombx`)),u})(),Me=r=>(()=>{var u=Ie();return e(u,t(N,{fallback:l=>(()=>{var d=ie(),i=d.firstChild,s=i.nextSibling;return s.nextSibling,e(d,()=>l.toString(),s),d})(),get children(){return t(W,{get fallback(){return(()=>{var l=ne();return l.firstChild,e(l,t(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),l})()},get children(){return t(b,{get when(){return p(r?.list)?.length>0},get children(){return t(F,{get each(){return p(r?.list)},children:(l,d)=>(()=>{var i=Ee(),s=i.firstChild;return e(s,()=>r?.list?.[l]?.bagnumber),i})()})}})}})}})),u})(),R=(r,u)=>u?(()=>{var l=we(),d=l.firstChild,i=d.nextSibling;return e(d," "+r),e(i,u),l})():"",q=r=>(()=>{var u=Ae();return e(u,()=>R("Calle",r?.ybstreet),null),e(u,()=>R("#",r?.ybstreetNo),null),e(u,()=>R("E/",r?.ybbetwen1),null),e(u,()=>R("y",r?.ybbetwen2),null),u})();J(["click"]);const ot=Object.freeze(Object.defineProperty({__proto__:null,default:Pe,getAddress:q},Symbol.toStringTag,{value:"Module"}));var Le=o("<h5 class=rpto>"),Re=o("<h5>"),Ve=o('<div><div class=" flxWrp spaceAround centerBx"><h2>Completar Entrega</h2><div class="icon_status centerBx"></div></div><div style=padding:16px><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="icon_status centerBx"></div><div class=bagsNo></div></div><div><div class=vertseparator></div><div class=vertseparator></div><h4></h4></div></div><p class=" textleft "style=padding:18px></p><div>'),le=o("<div> <!>."),se=o("<div> "),Te=o('<div class="_dsplFlx flxWrp spaceAround "style=" margin:0 auto;;padding:8px 9px;">'),Ne=o('<div class="icon_status centerBx">'),We=o("<div style=max-width:160px;margin:8px;><h5>"),X=o('<div class="_dsplFlx bottombx flxWrp spaceAround ">'),Fe=o('<div><div class=separator></div><div class="spaceAround centerBx"><div class="icon_status centerBx"></div></div><div><div class=" centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=" centerBx"><div class="icon_status centerBx"></div><h4></h4></div><div class=" centerBx"><div class="icon_status centerBx"></div><h5>');const[je,Ge]=G(),ae=S(()=>y(()=>import("./LoadingColorSpinner-BL_D4XZ6.js"),__vite__mapDeps([16,1,2,17]))),Qe=S(()=>y(()=>import("./Item2Delivery-MMdrKnki.js"),__vite__mapDeps([18,1,2,11,4,19,20,15]))),I=S(()=>y(()=>import("./SVG-B-oNkerH.js"),__vite__mapDeps([3,1,2,4]))),de=S(()=>y(()=>import("./FlexSpace-Cv6MM0kl.js"),__vite__mapDeps([0,1,2]))),qe=S(()=>y(()=>import("./ShowScanDeliveryManifest-Ciy1p8bb.js"),__vite__mapDeps([21,1,2,22,4,23,24,25,11,26,27,28,29,6,30,3,31,32,20,8,9,12,13,33]))),He=S(()=>y(()=>import("./ViewErrorsModal-BysV0DOo.js"),__vite__mapDeps([34,1,2,6,11,4,26,27,12,13]))),[Ke,Xe]=Q(""),[T,Je]=G();function Ue(r){oe(),Q(0);const[u,l]=U(),d=ue();Y(()=>{g()}),_e(()=>{}),ve(async()=>{x?.stopD?.addressId||d(`/delivery-detail?dId=${u?.dId}`,{replace:!0})});function i(){return"geolocation"in navigator}function s(a){me({latitude:a?.coords?.latitude,longitude:a?.coords?.longitude})}function g(){i()?navigator.geolocation.getCurrentPosition(s):showMessage("Geolocation isn't supported by your browser")}const $=a=>{a.cidentity,{...x?.stopD}},n=a=>{ge("cameraScanDelivery")?.clear()},c=a=>{let h=te(),_={};_.id=h,_.closeEvent=n,_.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},_.content=t(qe,{get item(){return x?.stopD},modalId:h,callback:$}),re(_)};return(()=>{var a=Ve(),h=a.firstChild,_=h.firstChild,C=_.nextSibling,w=h.nextSibling,A=w.firstChild,k=A.firstChild,j=k.nextSibling,m=A.nextSibling,O=m.firstChild,P=O.nextSibling,ce=P.nextSibling,H=w.nextSibling,K=H.nextSibling;return C.$$click=c,e(C,t(I,{name:"qr_code",size:32,color:"#2b2b2b"})),e(k,t(I,{name:"open_package_file_outline",size:32})),e(j,()=>x?.stopD?.bagsNo),e(w,t(de,{}),m),e(m,t(b,{get when(){return x?.stopD?.consigneeInfo?.ybreparto},get children(){return[(()=>{var v=Le();return e(v,()=>x?.stopD?.consigneeInfo?.ybreparto),v})(),"|"]}}),O),e(m,t(b,{get when(){return x?.stopD?.city},get children(){return[(()=>{var v=Re();return e(v,()=>x?.stopD?.city),v})(),"|"]}}),P),e(ce,()=>x?.stopD?.estate),e(H,()=>q(x?.stopD?.address)),e(K,t(N,{fallback:v=>(()=>{var D=le(),M=D.firstChild,L=M.nextSibling;return L.nextSibling,e(D,()=>v.toString(),L),D})(),get children(){return t(W,{get fallback(){return(()=>{var v=se();return v.firstChild,e(v,t(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),v})()},get children(){return t(b,{get when(){return p(x?.stopD?.customers)?.length>0},get children(){return t(F,{get each(){return p(x?.stopD?.customers)},children:(v,D)=>t(Ze,{get item(){return x?.stopD?.customers?.[v]}})})}})}})}})),E(v=>{var D=` ${f(),"centerBx"}  topbx `,M=` ${f(),"centerBx"} bottombx`,L=` ${f()?"":"width:94vw;"} margin: 0 auto; ; padding: 18px 29px;`;return D!==v.e&&B(w,v.e=D),M!==v.t&&B(m,v.t=M),v.a=Z(K,L,v.a),v},{e:void 0,t:void 0,a:void 0}),a})()}const Ye=r=>(()=>{var u=Te();return e(u,t(N,{fallback:l=>(()=>{var d=le(),i=d.firstChild,s=i.nextSibling;return s.nextSibling,e(d,()=>l.toString(),s),d})(),get children(){return t(W,{get fallback(){return(()=>{var l=se();return l.firstChild,e(l,t(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),l})()},get children(){return t(b,{get when(){return p(r?.list)?.length>0},get children(){return t(F,{get each(){return p(r?.list)},children:(l,d)=>(()=>{var i=We(),s=i.firstChild;return ee(i,"data-id",`${l}`),e(i,t(b,{get when(){return T?.[r?.cid]?.[l]==="ST200"},get children(){var g=Ne();return e(g,t(I,{name:"success",size:32,color:"var(--hrm-palette-tertiary50)"})),g}}),s),e(s,()=>r?.list?.[l]?.bagnumber),E(()=>B(i,`bag_number centerBx ${T?.[r?.cid]?.[l]==="ST200"?"checked":""} `)),i})()})}})}})}})),u})(),Ze=r=>{const u=async()=>{},l=async()=>{let i=te(),s={};s.id=i,s.closeEvent=u,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=t(He,{get item(){return r?.item},modalId:i}),re(s)},d=()=>{let i=p(r?.item?.bagsNumb)?.length,s=p(T?.[r?.item?.cidentity])?.length;return i===s};return(()=>{var i=Fe(),s=i.firstChild,g=s.nextSibling,$=g.firstChild,n=g.nextSibling,c=n.firstChild,a=c.firstChild,h=a.nextSibling,_=c.nextSibling,C=_.firstChild,w=C.nextSibling,A=_.nextSibling,k=A.firstChild,j=k.nextSibling;return e(g,t(de,{}),$),$.$$click=l,e($,t(I,{name:"alert",size:32})),e(a,t(I,{name:"account",size:24})),e(h,()=>r?.item?.name),e(n,t(z,{}),_),e(C,t(I,{name:"cellphone",size:24})),e(w,()=>r?.item?.phoneNumber),e(n,t(z,{}),A),e(k,t(I,{name:"credit_card",size:24})),e(j,()=>r?.item?.cidentity),e(i,t(b,{get when(){return!d()},get children(){var m=X();return e(m,t(Ye,{get list(){return r?.item?.bagsNumb},get cid(){return r?.item?.cidentity}})),m}}),null),e(i,t(b,{get when(){return d()},get children(){var m=X();return e(m,t(Qe,{get list(){return r?.item?.bagsNumb},get cid(){return r?.item?.cidentity},get item(){return r?.item}})),m}}),null),E(m=>{var O=r?.item?.cidentity,P=` ${f()?"":"centerBx"} bottombx`;return O!==m.e&&ee(i,"data-cid",m.e=O),P!==m.t&&B(n,m.t=P),m},{e:void 0,t:void 0}),i})()},z=()=>t(b,{get when(){return!f()},children:"|"});J(["click"]);const ut=Object.freeze(Object.defineProperty({__proto__:null,SepOnMobile:z,default:Ue,scannedQRs:je,setScannedQRs:Ge,setStatus:Xe,setStatusD:Je,status:Ke,statusD:T},Symbol.toStringTag,{value:"Module"}));export{ut as D,ot as I,Je as s};
