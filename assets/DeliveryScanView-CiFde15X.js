const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-cUMZ2E_9.js","assets/index-CAL5Ex2l.js","assets/index-CNMNPlHE.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ContainerElasticView-Df2dZI_f.js","assets/SVG-CZkOYNll.js","assets/ContainerElasticView-LzOd6fDI.css","assets/FlexSpace-Vz3uQAok.js"])))=>i.map(i=>d[i]);
import{c as V,l as S,_ as y,a as b,V as K,u as X,W as J,k as U,p as Y,q as Z,i as t,d as r,f as z,e as ee,t as c,j as te,S as $,y as F,O as M,F as N,X as W,h as f,g as w,s as re,B as ie}from"./index-CAL5Ex2l.js";import{OpenModal as ne}from"./DialogHRM-CaB18NFG.js";import{S as se}from"./ShowScanDeliveryManifest-BFc3BnqL.js";import{stop2Deliver as i}from"./DeliveryView-CXddaaFI.js";import"./html5-qrcode-scanner-De2pui9J.js";import"./DashManifest-ssQRFUrT.js";import"./App.module-CbHnVtRQ.js";import"./LinkManifest-D9f77eKG.js";import"./debounces-CzuKOako.js";import"./fontkit.es-CfiTgzL_.js";import"./InitPrintServices-KTwefJxh.js";var le=c("<h5 class=rpto>"),ae=c("<h5>"),oe=c('<div><div class=" flxWrp spaceAround centerBx"><h2>Completar Entrega</h2><div class="icon_status centerBx"></div></div><div style=padding:16px><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="icon_status centerBx"></div><div class=bagsNo></div></div><div><div class=vertseparator></div><div class=vertseparator></div><h4></h4></div></div><p class=" textleft "style=padding:18px>;</p><div>'),G=c("<div> <!>."),Q=c("<div> "),de=c('<div class="_dsplFlx flxWrp spaceAround "style=" margin:0 auto;;padding:8px 9px;">'),ce=c("<div class=bag_number style=max-width:120px;margin:8px;><h5>"),ue=c('<div><div class=separator></div><div><h5></h5><h4></h4><div class="_dsplFlx bottombx flxWrp spaceAround "><div class=""><h5></h5></div></div></div><div class="_dsplFlx bottombx flxWrp spaceAround ">');const[Be,Ie]=V(),T=S(()=>y(()=>import("./LoadingColorSpinner-cUMZ2E_9.js"),__vite__mapDeps([0,1,2,3])));S(()=>y(()=>import("./ContainerElasticView-Df2dZI_f.js"),__vite__mapDeps([4,1,2,5,6])));const O=S(()=>y(()=>import("./SVG-CZkOYNll.js"),__vite__mapDeps([5,1,2]))),pe=S(()=>y(()=>import("./FlexSpace-Vz3uQAok.js"),__vite__mapDeps([7,1,2]))),[we,Ee]=b("");function ke(d){b([]),V({}),K();const[u,n]=X();b(""),b(0);const s=J();U(()=>{C()}),Y(()=>{}),Z(async()=>{i?.stopD?.addressId||s(`/delivery-detail?dId=${u?.dId}`,{replace:!0})});function l(){return"geolocation"in navigator}function a(o){ie({latitude:o?.coords?.latitude,longitude:o?.coords?.longitude})}function C(){l()?navigator.geolocation.getCurrentPosition(a):showMessage("Geolocation isn't supported by your browser")}const D=o=>{},B=o=>{let _=te(),g={};g.id=_,g.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},g.content=r(se,{get item(){return i?.stopD},modalId:_,callback:D}),ne(g)};return console.log(i?.stopD),(()=>{var o=oe(),_=o.firstChild,g=_.firstChild,E=g.nextSibling,h=_.nextSibling,k=h.firstChild,P=k.firstChild,j=P.nextSibling,v=k.nextSibling,A=v.firstChild,R=A.nextSibling,q=R.nextSibling,I=h.nextSibling,H=I.firstChild,L=I.nextSibling;return E.$$click=B,t(E,r(O,{name:"qr_code",size:32,color:"#2b2b2b"})),t(P,r(O,{name:"open_package_file_outline",size:32})),t(j,()=>i?.stopD?.bagsNo),t(h,r(pe,{}),v),t(v,r($,{get when(){return i?.stopD?.consigneeInfo?.ybreparto},get children(){return[(()=>{var e=le();return t(e,()=>i?.stopD?.consigneeInfo?.ybreparto),e})(),"|"]}}),A),t(v,r($,{get when(){return i?.stopD?.city},get children(){return[(()=>{var e=ae();return t(e,()=>i?.stopD?.city),e})(),"|"]}}),R),t(q,()=>i?.stopD?.estate),t(I,()=>i?.stopD?.addressId,H),t(L,r(W,{fallback:e=>(()=>{var p=G(),m=p.firstChild,x=m.nextSibling;return x.nextSibling,t(p,()=>e.toString(),x),p})(),get children(){return r(F,{get fallback(){return(()=>{var e=Q();return e.firstChild,t(e,r(T,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r($,{get when(){return M(i?.stopD?.customers)?.length>0},get children(){return r(N,{get each(){return M(i?.stopD?.customers)},children:(e,p)=>r(_e,{get item(){return i?.stopD?.customers?.[e]}})})}})}})}})),z(e=>{var p=` ${f(),"centerBx"}  topbx `,m=` ${f(),"centerBx"} bottombx`,x=` ${f()?"":"width:94vw;"} margin: 0 auto; ; padding: 18px 29px;`;return p!==e.e&&w(h,e.e=p),m!==e.t&&w(v,e.t=m),e.a=re(L,x,e.a),e},{e:void 0,t:void 0,a:void 0}),o})()}const ge=d=>(()=>{var u=de();return t(u,r(W,{fallback:n=>(()=>{var s=G(),l=s.firstChild,a=l.nextSibling;return a.nextSibling,t(s,()=>n.toString(),a),s})(),get children(){return r(F,{get fallback(){return(()=>{var n=Q();return n.firstChild,t(n,r(T,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return r($,{get when(){return d?.list?.length>0},get children(){return r(N,{get each(){return d?.list},children:(n,s)=>(()=>{var l=ce(),a=l.firstChild;return t(a,n),l})()})}})}})}})),u})(),_e=d=>(()=>{var u=ue(),n=u.firstChild,s=n.nextSibling,l=s.firstChild,a=l.nextSibling,C=a.nextSibling,D=C.firstChild,B=D.firstChild,o=s.nextSibling;return t(l,()=>d?.item?.name),t(a,()=>d?.item?.phoneNumber),t(B,()=>d?.item?.tracking),t(o,r(ge,{get list(){return d?.item?.bagsNumb}})),z(()=>w(s,` ${f()?"":"centerBx"} bottombx`)),u})();ee(["click"]);export{ke as default,Be as scannedQRs,Ie as setScannedQRs,Ee as setStatus,we as status};
