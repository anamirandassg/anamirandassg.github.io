const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ItemOnHbl-SRH6FtBQ.js","assets/index-DPaQ-zj4.js","assets/index-BmzAZVve.css","assets/Util-DemBMAwY.js","assets/DialogHRM-D9zgcINg.js","assets/DialogHRM-V9_lZntj.css","assets/ShowQRPrintLabel-CsaudiHv.js","assets/PDFButton-BbCPktZi.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-gRWPDBlG.js","assets/InitPrintServices-dskthxJh.js","assets/Toast-DN7GtXOe.js","assets/Toast-DLpFKn-Q.css","assets/InputHr-DYDGbXt3.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-CqLrL6N9.js","assets/FlexSpace-DL5xjonh.js","assets/ItemOnEnvios-CPRRQKTc.js","assets/ContainerElasticView-BTk01nRr.js","assets/ContainerElasticView-LzOd6fDI.css","assets/CheckBoxSlide-Bd6gae1Z.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as y,_ as k,a as l,u as me,c as K,j as pe,o as xe,n as Se,i as r,d as t,S as w,y as X,w as J,z as $e,M as U,F as Ce,e as Y,f as we,g as Z,E as ye,s as ke,h as Ee,t as u,A as Be}from"./index-DPaQ-zj4.js";import ee from"./InputHr-DYDGbXt3.js";import{i as Ae,a as Le,g as te,b as He,f as Ie,O as Pe}from"./Util-DemBMAwY.js";import Te from"./SVG-CqLrL6N9.js";import Re from"./FlexSpace-DL5xjonh.js";import{OpenToast as Fe}from"./Toast-DN7GtXOe.js";var re=u('<div style="padding:15px ">'),Oe=u('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div class="centerBx bottombx "><h5 class="">Mostrar QR</h5></div><div class="_dsplFlx bottombx spaceAround"><div class="_dsplFlx bottombx lowbordr spaceAround"><h5></h5><h5></h5></div></div></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><ul class=inline><li><div style=width:135px>Locacion</div></li><li><div style=width:135px>Detalles</div></li></ul></div><div><div class="centerBx100 "></div></div><div class=scrollH>'),Me=u("<div class=loader>Loading..."),Qe=u("<div> <!>."),je=u("<div> "),De=u('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const Ve=y(()=>k(()=>import("./ItemOnHbl-SRH6FtBQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),ze=y(()=>k(()=>import("./ItemOnEnvios-CPRRQKTc.js"),__vite__mapDeps([17,1,2,3,4,5,18,15,19,6,7,8,9,10,11,12]))),We=y(()=>k(()=>import("./CheckBoxSlide-Bd6gae1Z.js"),__vite__mapDeps([20,1,2,21]))),[se,rt]=l([]);function st(){const[c,h]=l(0),[_,v]=Be(),E=s=>()=>v(()=>h(s)),[B,A]=me(),[L,H]=K(),[Ne,le]=K({}),[ie,f]=l(""),[I,ne]=l("230"),[m,ae]=l(!1),[p,x]=l(!1),[Ge,oe]=l(""),[Ke,P]=l(""),[Xe,T]=l(""),[R,F]=l("");pe(()=>{}),xe(()=>{}),Se(()=>{B?.id&&O(B?.id)});const ce=(s,n)=>{oe(n),P(s),setTimeout(()=>{P("")},300)},de=s=>{T(s),setTimeout(()=>{T("")},3e3)},O=async s=>{let n=s,g=I()+""+n,d=await qe(g);d?.cidentity?(F(g),H("hbl",d),x(!0),A({id:n}),f("")):(H("hbl",null),ce("","error"),F(""),le({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),de(te()),Fe({text:"No se encontro ningun registro",timeout:2500,theme:"red",id:te()}))},M=()=>{x(!1),A({}),f("")};return Array.from(Array(8).keys()),(()=>{var s=Oe(),n=s.firstChild,g=n.firstChild,d=g.firstChild,ue=d.firstChild,Q=d.nextSibling,j=Q.firstChild,he=j.firstChild,ge=he.nextSibling,D=n.nextSibling,be=D.firstChild,S=be.firstChild,V=S.nextSibling,$=D.nextSibling,z=$.firstChild,ve=$.nextSibling;return r(d,t(We,{get initValue(){return!!m()},updChange:ae,color:"var(--background-red-ssg)"}),ue),r(g,t(w,{get when(){return!p()},get children(){return[(()=>{var e=re();return r(e,t(ee,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return I()},placeholder:"HBL",colors:"#2b2b2b",handleClick:ne})),e})(),(()=>{var e=re();return r(e,t(ee,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return ie()},placeholder:"4 ultimos digitos del HBL",colors:"#2b2b2b",handleClick:f,onEnter:O})),e})()]}}),Q),j.$$click=()=>x(!1),r(ge,()=>p()?"Buscar Hbl":"Escriba los 4 ultimos digitos del HBL"),X(S,"click",E(0),!0),X(V,"click",E(1),!0),r(z,t(w,{get when(){return p()},get children(){return t(J,{get fallback(){return Me()},get children(){return t($e,{get children(){return[t(U,{get when(){return c()===0},get children(){return t(Ve,{get item(){return L?.hbl},newSear:M,get showQR(){return m()},get currentHbl(){return R()}})}}),t(U,{get when(){return c()===1},get children(){return t(ze,{get item(){return L?.hbl},newSear:M,get showQR(){return m()},get currentHbl(){return R()}})}})]}})}})}})),r(ve,t(ye,{fallback:e=>(()=>{var a=Qe(),o=a.firstChild,i=o.nextSibling;return i.nextSibling,r(a,()=>e.toString(),i),a})(),get children(){return t(J,{get fallback(){return(()=>{var e=je();return e.firstChild,r(e,t(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return t(w,{get when(){return se()},get children(){return t(Ce,{get each(){return Ae(se(),"timeStamp",0)},children:(e,a)=>(()=>{var o=De(),i=o.firstChild,b=i.firstChild,W=b.firstChild,C=W.nextSibling,q=C.nextSibling,N=b.nextSibling,G=N.firstChild,_e=G.nextSibling,fe=_e.nextSibling;return r(W,t(Te,{get name(){return Le("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),C.style.setProperty("padding","8px"),r(C,()=>e?.idairnumber),q.style.setProperty("padding","8px"),r(q,()=>e?.tracking),r(i,t(Re,{}),N),r(G,()=>e?.city),r(fe,()=>e?.estate),Y(()=>we(i,`client_item_box gWXAaj jlytmu manifest  ${Z()?"isMobile":"centerBx"}`)),o})()})}})}})}})),Y(e=>{var a=c()===0,o=c()===1,i=` ${Z()?"":"width:94vw;"} margin: 0 auto;`,b=!!_();return a!==e.e&&S.classList.toggle("selected",e.e=a),o!==e.t&&V.classList.toggle("selected",e.t=o),e.a=ke($,i,e.a),b!==e.o&&z.classList.toggle("pending",e.o=b),e},{e:void 0,t:void 0,a:void 0,o:void 0}),s})()}const qe=async c=>{let h={params:{idairguide:"all",":search0":c}},_=He(802001);h={...h,..._};const v=await Ie(h);return v?.[Pe(v)?.[0]]};Ee(["click"]);export{st as default,rt as setTasks,se as tasks};
