const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnHbl-bX68fPkv.js","assets/index-Rccuw2q3.js","assets/index-DGHHyjai.css","assets/Util-uEfv1z7O.js","assets/index-Ci0zXM0r.js","assets/DialogHRM-DfgEJNan.js","assets/DialogHRM-V9_lZntj.css","assets/globalSignal-CC0MEE7D.js","assets/ShowQRPrintLabel-l0Yqce82.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CprHcwF4.js","assets/Toast-CSyLyW-o.js","assets/Toast-DLpFKn-Q.css","assets/InputHr-DHbZUREC.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-Du7hed5P.js","assets/FlexSpace-1TOOwbz-.js","assets/CheckBoxSlide-MHSXms_j.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as D,_ as q,a as s,u as ne,c as R,h as ie,o as oe,m as ae,i as t,d as r,f as T,e as ce,t as u,S as $,q as de,F as ue,g as be,E as he,s as ge}from"./index-Rccuw2q3.js";import M from"./InputHr-DHbZUREC.js";import{g as Q,i as me,a as pe,b as fe,f as _e}from"./Util-uEfv1z7O.js";import ve from"./SVG-Du7hed5P.js";import{i as O}from"./globalSignal-CC0MEE7D.js";import xe from"./FlexSpace-1TOOwbz-.js";import{OpenToast as $e}from"./Toast-CSyLyW-o.js";import"./index-Ci0zXM0r.js";var V=u('<div style="padding:15px ">'),Se=u('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div class="centerBx bottombx "><h5 class="">Mostrar QR</h5></div><div class="_dsplFlx bottombx spaceAround"><div class="_dsplFlx bottombx lowbordr spaceAround"><h5></h5><h5></h5></div></div></div></div><div></div><div class=scrollH>'),Ce=u("<div> <!>."),ye=u("<div> "),we=u('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const ke=D(()=>q(()=>import("./ItemOnHbl-bX68fPkv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))),Be=D(()=>q(()=>import("./CheckBoxSlide-MHSXms_j.js"),__vite__mapDeps([19,1,2,20]))),[j,je]=s([]);function De(){const[b,n]=ne(),[m,c]=R(),[Ae,z]=R({}),[N,p]=s(""),[S,W]=s("23008"),[C,G]=s(!1),[f,_]=s(!1),[He,X]=s(""),[Ie,y]=s(""),[Pe,w]=s(""),[J,k]=s("");ie(()=>{}),oe(()=>{}),ae(()=>{b?.id&&B(b?.id)});const K=(l,i)=>{X(i),y(l),setTimeout(()=>{y("")},300)},U=l=>{w(l),setTimeout(()=>{w("")},3e3)},B=async l=>{let i=l,d=S()+""+i,o=await Ee(d);o?.cidentity?(k(d),c("hbl",o),_(!0),n({id:i}),p("")):(c("hbl",null),K("","error"),k(""),z({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),U(Q()),$e({text:"No se encontro ningun registro",timeout:2500,theme:"red",id:Q()}))},Y=()=>{_(!1),n({}),p("")};return Array.from(Array(8).keys()),(()=>{var l=Se(),i=l.firstChild,d=i.firstChild,o=d.firstChild,Z=o.firstChild,E=o.nextSibling,A=E.firstChild,ee=A.firstChild,te=ee.nextSibling,v=i.nextSibling,re=v.nextSibling;return t(o,r(Be,{get initValue(){return!!C()},updChange:G,color:"var(--background-red-ssg)"}),Z),t(d,r($,{get when(){return!f()},get children(){return[(()=>{var e=V();return t(e,r(M,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return S()},placeholder:"HBL",colors:"#2b2b2b",handleClick:W})),e})(),(()=>{var e=V();return t(e,r(M,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return N()},placeholder:"4 ultimos digitos del HBL",colors:"#2b2b2b",handleClick:p,onEnter:B})),e})()]}}),E),A.$$click=()=>_(!1),t(te,()=>f()?"Buscar Hbl":"Escriba los 4 ultimos digitos del HBL"),t(v,r($,{get when(){return f()},get children(){return r(ke,{get item(){return m?.hbl},newSear:Y,get showQR(){return C()},get currentHbl(){return J()}})}})),t(re,r(he,{fallback:e=>(()=>{var h=Ce(),g=h.firstChild,a=g.nextSibling;return a.nextSibling,t(h,()=>e.toString(),a),h})(),get children(){return r(de,{get fallback(){return(()=>{var e=ye();return e.firstChild,t(e,r(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r($,{get when(){return j()},get children(){return r(ue,{get each(){return me(j(),"timeStamp",0)},children:(e,h)=>(()=>{var g=we(),a=g.firstChild,H=a.firstChild,I=H.firstChild,x=I.nextSibling,P=x.nextSibling,F=H.nextSibling,L=F.firstChild,se=L.nextSibling,le=se.nextSibling;return t(I,r(ve,{get name(){return pe("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),x.style.setProperty("padding","8px"),t(x,()=>e?.idairnumber),P.style.setProperty("padding","8px"),t(P,()=>e?.tracking),t(a,r(xe,{}),F),t(L,()=>e?.city),t(le,()=>e?.estate),T(()=>be(a,`client_item_box gWXAaj jlytmu manifest  ${O()?"isMobile":"centerBx"}`)),g})()})}})}})}})),T(e=>ge(v,` ${O()?"":"width:94vw;"} margin: 0 auto;`,e)),l})()}const Ee=async b=>{let n={params:{id:b}},m=fe(803001);n={...n,...m};const c=await _e(n);return console.log(n),console.log(c),c};ce(["click"]);export{De as default,je as setTasks,j as tasks};
