const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnHbl-DUvqfSGl.js","assets/index-Ba5Julcs.js","assets/index-BmzAZVve.css","assets/Util-C77m685E.js","assets/index-Ci0zXM0r.js","assets/DialogHRM-DGEH4ki8.js","assets/DialogHRM-V9_lZntj.css","assets/ShowQRPrintLabel-wUjJaD-g.js","assets/PDFButton-B_0lS8EG.js","assets/fontkit.es-BqrvdTa9.js","assets/InitPrintServices-DzdLVHm-.js","assets/Toast-puvEduR5.js","assets/Toast-DLpFKn-Q.css","assets/InputHr-EMLHNGJk.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-XC4K0ehX.js","assets/FlexSpace-Du55TtJp.js","assets/CheckBoxSlide-ey1bc5t3.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as D,_ as z,a as s,u as ne,c as R,j as ie,o as ae,n as oe,i as t,d as r,S as $,w as ce,F as de,e as O,f as ue,g as T,E as be,s as he,h as ge,t as u}from"./index-Ba5Julcs.js";import j from"./InputHr-EMLHNGJk.js";import{i as pe,a as fe,g as M,b as me,f as _e,O as ve}from"./Util-C77m685E.js";import xe from"./SVG-XC4K0ehX.js";import $e from"./FlexSpace-Du55TtJp.js";import{OpenToast as Se}from"./Toast-puvEduR5.js";import"./index-Ci0zXM0r.js";var Q=u('<div style="padding:15px ">'),Ce=u('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div class="centerBx bottombx "><h5 class="">Mostrar QR</h5></div><div class="_dsplFlx bottombx spaceAround"><div class="_dsplFlx bottombx lowbordr spaceAround"><h5></h5><h5></h5></div></div></div></div><div></div><div class=scrollH>'),ye=u("<div> <!>."),we=u("<div> "),ke=u('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const Be=D(()=>z(()=>import("./ItemOnHbl-DUvqfSGl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),Ee=D(()=>z(()=>import("./CheckBoxSlide-ey1bc5t3.js"),__vite__mapDeps([17,1,2,18]))),[V,Ve]=s([]);function De(){const[b,i]=ne(),[p,c]=R(),[He,q]=R({}),[N,f]=s(""),[S,W]=s("23009"),[C,G]=s(!1),[m,_]=s(!1),[Ie,K]=s(""),[Pe,y]=s(""),[Fe,w]=s(""),[X,k]=s("");ie(()=>{}),ae(()=>{}),oe(()=>{b?.id&&B(b?.id)});const J=(l,n)=>{K(n),y(l),setTimeout(()=>{y("")},300)},U=l=>{w(l),setTimeout(()=>{w("")},3e3)},B=async l=>{let n=l,d=S()+""+n,a=await Ae(d);a?.cidentity?(k(d),c("hbl",a),_(!0),i({id:n}),f("")):(c("hbl",null),J("","error"),k(""),q({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),U(M()),Se({text:"No se encontro ningun registro",timeout:2500,theme:"red",id:M()}))},Y=()=>{_(!1),i({}),f("")};return Array.from(Array(8).keys()),(()=>{var l=Ce(),n=l.firstChild,d=n.firstChild,a=d.firstChild,Z=a.firstChild,E=a.nextSibling,A=E.firstChild,ee=A.firstChild,te=ee.nextSibling,v=n.nextSibling,re=v.nextSibling;return t(a,r(Ee,{get initValue(){return!!C()},updChange:G,color:"var(--background-red-ssg)"}),Z),t(d,r($,{get when(){return!m()},get children(){return[(()=>{var e=Q();return t(e,r(j,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return S()},placeholder:"HBL",colors:"#2b2b2b",handleClick:W})),e})(),(()=>{var e=Q();return t(e,r(j,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return N()},placeholder:"4 ultimos digitos del HBL",colors:"#2b2b2b",handleClick:f,onEnter:B})),e})()]}}),E),A.$$click=()=>_(!1),t(te,()=>m()?"Buscar Hbl":"Escriba los 4 ultimos digitos del HBL"),t(v,r($,{get when(){return m()},get children(){return r(Be,{get item(){return p?.hbl},newSear:Y,get showQR(){return C()},get currentHbl(){return X()}})}})),t(re,r(be,{fallback:e=>(()=>{var h=ye(),g=h.firstChild,o=g.nextSibling;return o.nextSibling,t(h,()=>e.toString(),o),h})(),get children(){return r(ce,{get fallback(){return(()=>{var e=we();return e.firstChild,t(e,r(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r($,{get when(){return V()},get children(){return r(de,{get each(){return pe(V(),"timeStamp",0)},children:(e,h)=>(()=>{var g=ke(),o=g.firstChild,H=o.firstChild,I=H.firstChild,x=I.nextSibling,P=x.nextSibling,F=H.nextSibling,L=F.firstChild,se=L.nextSibling,le=se.nextSibling;return t(I,r(xe,{get name(){return fe("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),x.style.setProperty("padding","8px"),t(x,()=>e?.idairnumber),P.style.setProperty("padding","8px"),t(P,()=>e?.tracking),t(o,r($e,{}),F),t(L,()=>e?.city),t(le,()=>e?.estate),O(()=>ue(o,`client_item_box gWXAaj jlytmu manifest  ${T()?"isMobile":"centerBx"}`)),g})()})}})}})}})),O(e=>he(v,` ${T()?"":"width:94vw;"} margin: 0 auto;`,e)),l})()}const Ae=async b=>{let i={params:{idairguide:"all",":search0":b}},p=me(802001);i={...i,...p};const c=await _e(i);return c?.[ve(c)?.[0]]};ge(["click"]);export{De as default,Ve as setTasks,V as tasks};
