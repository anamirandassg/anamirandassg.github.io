const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnHbl-TDhJG4P2.js","assets/index-DmFmaTv5.js","assets/index-CZc92aDX.css","assets/Util-D626lMiR.js","assets/index-Ci0zXM0r.js","assets/DialogHRM-Burb5_aj.js","assets/DialogHRM-V9_lZntj.css","assets/globalSignal-Dw2WW8Ev.js","assets/ShowQRPrintLabel-CCP_5kt8.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-B8VDxyV2.js","assets/Toast-CVhZ7HFi.js","assets/Toast-DLpFKn-Q.css","assets/InputHr-CQm7uYIX.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-CT3Z9Luo.js","assets/FlexSpace-CD8RWjDO.js","assets/CheckBoxSlide-Bqdy6XfZ.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as D,_ as z,a as s,u as ie,c as R,h as ne,o as ae,m as oe,i as t,d as r,f as O,e as ce,t as u,S as $,r as de,F as ue,g as be,E as he,s as ge}from"./index-DmFmaTv5.js";import T from"./InputHr-CQm7uYIX.js";import{g as M,i as me,a as pe,b as fe,f as _e,O as ve}from"./Util-D626lMiR.js";import xe from"./SVG-CT3Z9Luo.js";import{i as Q}from"./globalSignal-Dw2WW8Ev.js";import $e from"./FlexSpace-CD8RWjDO.js";import{OpenToast as Se}from"./Toast-CVhZ7HFi.js";import"./index-Ci0zXM0r.js";var j=u('<div style="padding:15px ">'),Ce=u('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div class="centerBx bottombx "><h5 class="">Mostrar QR</h5></div><div class="_dsplFlx bottombx spaceAround"><div class="_dsplFlx bottombx lowbordr spaceAround"><h5></h5><h5></h5></div></div></div></div><div></div><div class=scrollH>'),ye=u("<div> <!>."),we=u("<div> "),ke=u('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const Be=D(()=>z(()=>import("./ItemOnHbl-TDhJG4P2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))),Ee=D(()=>z(()=>import("./CheckBoxSlide-Bqdy6XfZ.js"),__vite__mapDeps([19,1,2,20]))),[V,De]=s([]);function ze(){const[b,n]=ie(),[m,c]=R(),[He,q]=R({}),[N,p]=s(""),[S,W]=s("23008"),[C,G]=s(!1),[f,_]=s(!1),[Ie,K]=s(""),[Pe,y]=s(""),[Fe,w]=s(""),[X,k]=s("");ne(()=>{}),ae(()=>{}),oe(()=>{b?.id&&B(b?.id)});const J=(l,i)=>{K(i),y(l),setTimeout(()=>{y("")},300)},U=l=>{w(l),setTimeout(()=>{w("")},3e3)},B=async l=>{let i=l,d=S()+""+i,a=await Ae(d);a?.cidentity?(k(d),c("hbl",a),_(!0),n({id:i}),p("")):(c("hbl",null),J("","error"),k(""),q({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),U(M()),Se({text:"No se encontro ningun registro",timeout:2500,theme:"red",id:M()}))},Y=()=>{_(!1),n({}),p("")};return Array.from(Array(8).keys()),(()=>{var l=Ce(),i=l.firstChild,d=i.firstChild,a=d.firstChild,Z=a.firstChild,E=a.nextSibling,A=E.firstChild,ee=A.firstChild,te=ee.nextSibling,v=i.nextSibling,re=v.nextSibling;return t(a,r(Ee,{get initValue(){return!!C()},updChange:G,color:"var(--background-red-ssg)"}),Z),t(d,r($,{get when(){return!f()},get children(){return[(()=>{var e=j();return t(e,r(T,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return S()},placeholder:"HBL",colors:"#2b2b2b",handleClick:W})),e})(),(()=>{var e=j();return t(e,r(T,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return N()},placeholder:"4 ultimos digitos del HBL",colors:"#2b2b2b",handleClick:p,onEnter:B})),e})()]}}),E),A.$$click=()=>_(!1),t(te,()=>f()?"Buscar Hbl":"Escriba los 4 ultimos digitos del HBL"),t(v,r($,{get when(){return f()},get children(){return r(Be,{get item(){return m?.hbl},newSear:Y,get showQR(){return C()},get currentHbl(){return X()}})}})),t(re,r(he,{fallback:e=>(()=>{var h=ye(),g=h.firstChild,o=g.nextSibling;return o.nextSibling,t(h,()=>e.toString(),o),h})(),get children(){return r(de,{get fallback(){return(()=>{var e=we();return e.firstChild,t(e,r(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r($,{get when(){return V()},get children(){return r(ue,{get each(){return me(V(),"timeStamp",0)},children:(e,h)=>(()=>{var g=ke(),o=g.firstChild,H=o.firstChild,I=H.firstChild,x=I.nextSibling,P=x.nextSibling,F=H.nextSibling,L=F.firstChild,se=L.nextSibling,le=se.nextSibling;return t(I,r(xe,{get name(){return pe("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),x.style.setProperty("padding","8px"),t(x,()=>e?.idairnumber),P.style.setProperty("padding","8px"),t(P,()=>e?.tracking),t(o,r($e,{}),F),t(L,()=>e?.city),t(le,()=>e?.estate),O(()=>be(o,`client_item_box gWXAaj jlytmu manifest  ${Q()?"isMobile":"centerBx"}`)),g})()})}})}})}})),O(e=>ge(v,` ${Q()?"":"width:94vw;"} margin: 0 auto;`,e)),l})()}const Ae=async b=>{let n={params:{idairguide:"all",":search0":b}},m=fe(802001);n={...n,...m};const c=await _e(n);return c?.[ve(c)?.[0]]};ce(["click"]);export{ze as default,De as setTasks,V as tasks};
