const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnHbl-DbSuw1Yn.js","assets/index-CFUY4uOd.js","assets/index-DGHHyjai.css","assets/Util-uEfv1z7O.js","assets/index-Ci0zXM0r.js","assets/DialogHRM-D8S84T5k.js","assets/DialogHRM-V9_lZntj.css","assets/globalSignal-CsSzoQh8.js","assets/ShowQRPrintLabel-BFMwFot3.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-khaE0HRx.js","assets/Toast-CHTYjclQ.js","assets/Toast-DLpFKn-Q.css","assets/InputHr-BEXyF6ab.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-joP20i3P.js","assets/FlexSpace-D-GAA8Qq.js","assets/CheckBoxSlide-DFHQ0duZ.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as D,_ as q,a as s,u as ne,c as R,h as ie,o as ae,m as oe,i as t,d as r,f as T,e as ce,t as d,S as $,q as de,F as ue,g as be,E as he,s as ge}from"./index-CFUY4uOd.js";import M from"./InputHr-BEXyF6ab.js";import{g as Q,i as me,a as pe,b as fe,f as _e}from"./Util-uEfv1z7O.js";import ve from"./SVG-joP20i3P.js";import{i as O}from"./globalSignal-CsSzoQh8.js";import xe from"./FlexSpace-D-GAA8Qq.js";import{OpenToast as $e}from"./Toast-CHTYjclQ.js";import"./index-Ci0zXM0r.js";var V=d('<div style="padding:15px ">'),Se=d('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div class="centerBx bottombx "><h5 class="">Mostrar QR</h5></div><div class="_dsplFlx bottombx spaceAround"><div class="_dsplFlx bottombx lowbordr spaceAround"><h5></h5><h5></h5></div></div></div></div><div></div><div class=scrollH>'),Ce=d("<div> <!>."),ye=d("<div> "),we=d('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const ke=D(()=>q(()=>import("./ItemOnHbl-DbSuw1Yn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))),Be=D(()=>q(()=>import("./CheckBoxSlide-DFHQ0duZ.js"),__vite__mapDeps([18,1,2,19]))),[j,je]=s([]);function De(){const[u,i]=ne(),[b,m]=R(),[Ae,z]=R({}),[N,p]=s(""),[S,W]=s("23008"),[C,G]=s(!1),[f,_]=s(!1),[He,X]=s(""),[Ie,y]=s(""),[Pe,w]=s(""),[J,k]=s("");ie(()=>{}),ae(()=>{}),oe(()=>{u?.id&&B(u?.id)});const K=(l,n)=>{X(n),y(l),setTimeout(()=>{y("")},300)},U=l=>{w(l),setTimeout(()=>{w("")},3e3)},B=async l=>{let n=l,c=S()+""+n,a=await Ee(c);a?.cidentity?(k(c),m("hbl",a),_(!0),i({id:n}),p("")):(m("hbl",null),K("","error"),k(""),z({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),U(Q()),$e({text:"No se encontro ningun registro",timeout:2500,theme:"red",id:Q()}))},Y=()=>{_(!1),i({}),p("")};return Array.from(Array(8).keys()),(()=>{var l=Se(),n=l.firstChild,c=n.firstChild,a=c.firstChild,Z=a.firstChild,E=a.nextSibling,A=E.firstChild,ee=A.firstChild,te=ee.nextSibling,v=n.nextSibling,re=v.nextSibling;return t(a,r(Be,{get initValue(){return!!C()},updChange:G,color:"var(--background-red-ssg)"}),Z),t(c,r($,{get when(){return!f()},get children(){return[(()=>{var e=V();return t(e,r(M,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return S()},placeholder:"HBL",colors:"#2b2b2b",handleClick:W})),e})(),(()=>{var e=V();return t(e,r(M,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return N()},placeholder:"4 ultimos digitos del HBL",colors:"#2b2b2b",handleClick:p,onEnter:B})),e})()]}}),E),A.$$click=()=>_(!1),t(te,()=>f()?"Buscar Hbl":"Escriba los 4 ultimos digitos del HBL"),t(v,r($,{get when(){return f()&&b?.hbl?.bagnumber},get children(){return r(ke,{get item(){return b?.hbl},newSear:Y,get showQR(){return C()},get currentHbl(){return J()}})}})),t(re,r(he,{fallback:e=>(()=>{var h=Ce(),g=h.firstChild,o=g.nextSibling;return o.nextSibling,t(h,()=>e.toString(),o),h})(),get children(){return r(de,{get fallback(){return(()=>{var e=ye();return e.firstChild,t(e,r(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r($,{get when(){return j()},get children(){return r(ue,{get each(){return me(j(),"timeStamp",0)},children:(e,h)=>(()=>{var g=we(),o=g.firstChild,H=o.firstChild,I=H.firstChild,x=I.nextSibling,P=x.nextSibling,F=H.nextSibling,L=F.firstChild,se=L.nextSibling,le=se.nextSibling;return t(I,r(ve,{get name(){return pe("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),x.style.setProperty("padding","8px"),t(x,()=>e?.idairnumber),P.style.setProperty("padding","8px"),t(P,()=>e?.tracking),t(o,r(xe,{}),F),t(L,()=>e?.city),t(le,()=>e?.estate),T(()=>be(o,`client_item_box gWXAaj jlytmu manifest  ${O()?"isMobile":"centerBx"}`)),g})()})}})}})}})),T(e=>ge(v,` ${O()?"":"width:94vw;"} margin: 0 auto;`,e)),l})()}const Ee=async u=>{let i={params:{id:u}},b=fe(803001);return i={...i,...b},await _e(i)};ce(["click"]);export{De as default,je as setTasks,j as tasks};
