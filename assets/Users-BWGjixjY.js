const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-D6QdGWB_.js","assets/index-CaXA0mR0.js","assets/index-D4QuRvi-.css","assets/SVG-DEfsU4Im.js","assets/index-Ci0zXM0r.js","assets/Util-D7b_hj3C.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-D-Va3JWb.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-Ov8gpAjA.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-Ena0jYS0.js","assets/debounces-C7Wz-qd_.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as g,_ as f,c as B,a as $,b as k,i as c,d as a,e as x,t as b,S as u,F as I,f as D,g as Y,h as w,j as U}from"./index-CaXA0mR0.js";import{u as H}from"./debounces-C7Wz-qd_.js";import{g as V,O as N,a as L,q as S,f as T}from"./Util-D7b_hj3C.js";import{OpenModal as P,CloseModal as F}from"./DialogHRM-DNoXdE5V.js";import{i as O}from"./globalSignal-wMqKMl0q.js";import{a as q}from"./manifestList-CT6VCobT.js";import{c as z}from"./ShowQRPrintLabel-DnvvB_mE.js";import"./index-Ci0zXM0r.js";import"./fontkit.es-DEjOtITv.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices--pV7_9n8.js";import"./Toast-DXo7WFrx.js";var j=b('<div><div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>Buscar usuarios</h5></div></div><div style="width:94vw;margin:0 auto;">'),K=b('<div class="_dsplFlx bottombx "><div><h5></h5><h4>'),Q=b('<div class="client_item_box gWXAaj jlytmu">'),J=b('<div><div class=" spaceAround centerBx"><div class=" bottombx lowbordr spaceAround centerBx"><h5>Actualizar Usuario</h5><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),M=b('<div class="_dsplFlx itmAc"><span class=checklabel>');const Z=g(()=>f(()=>import("./ButonHrm-D6QdGWB_.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),G=g(()=>f(()=>import("./CheckBoxSlide-D-Va3JWb.js"),__vite__mapDeps([7,1,2,8]))),W=g(()=>f(()=>import("./InputHr-Ov8gpAjA.js"),__vite__mapDeps([9,1,2,10]))),X=g(()=>f(()=>import("./DropDwnSearch-Ena0jYS0.js"),__vite__mapDeps([11,1,2,12,3,4,13]))),[A,n]=B({accessLogistic:{}}),[E,p]=B({priv:{}});function Ce(){const[e,r]=$(""),t=H(r,400),[l,{refetch:i}]=k(e,async s=>await se(s));return(()=>{var s=j(),d=s.firstChild,m=d.firstChild,v=d.nextSibling;return c(d,a(W,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"usuarios ...",colors:"#2b2b2b",handleClick:t}),m),c(v,a(u,{get when(){return l()},get children(){return a(u,{get when(){return l()},get children(){return a(I,{get each(){return l()},children:(C,y)=>a(ee,{item:C})})}})}})),s})()}const ee=e=>{const r=()=>{n("accessLogistic",void 0),p("priv",void 0),setTimeout(()=>{n("accessLogistic",e?.item?.accessLogistic);let i={ISADMIN:e?.item?.ISADMIN,HIDDE2O:e?.item?.HIDDE2O,IsSSGLogistic:e?.item?.IsSSGLogistic};p("priv",i)},300);let t=V(),l={};l.id=t,l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=a(ie,{get id(){return e?.item?.userId},modalId:t}),P(l)};return(()=>{var t=Q();return c(t,a(u,{get when(){return e?.item?.email},get children(){var l=K(),i=l.firstChild,s=i.firstChild,d=s.nextSibling;return i.$$click=r,c(s,()=>e?.item?.name),c(d,()=>e?.item?.email),D(()=>Y(i,` bottombx lowbordr spaceAround ${O()?"":"centerBx"}`)),l}})),t})()},ie=e=>{const r=i=>{z(i)},t=async()=>{let s={...{accessLogistic:{...A?.accessLogistic}},...E?.priv};await ae(e?.id,s),F(e?.modalId)},l=i=>{A?.accessLogistic&&n("accessLogistic","agency",i.id)};return w(()=>{}),(()=>{var i=J(),s=i.firstChild,d=s.firstChild,m=d.firstChild,v=m.nextSibling,C=s.nextSibling,y=C.firstChild;return i.style.setProperty("max-height","80vh"),i.style.setProperty("overflow","auto"),i.style.setProperty("background","#ffffff"),i.style.setProperty("border-radius","13"),i.style.setProperty("padding","10px 19px"),v.$$click=()=>r(e?.id),c(v,()=>e?.id),c(s,a(Z,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:t}),null),c(y,a(X,{list:q,lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return A?.accessLogistic?.agency},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:o=>l(o),width:"260px"})),c(i,a(u,{get when(){return U?.profile?.isAdmin&&_},get children(){return a(I,{get each(){return N(_)},children:(o,R)=>a(te,{key:o,get val(){return E?.[o]},get item(){return _?.[o]},adm:!0})})}}),null),c(i,a(u,{when:h,get children(){return a(I,{get each(){return N(h)},children:(o,R)=>a(le,{key:o,get val(){return A?.accessLogistic?.[o]},get item(){return h?.[o]}})})}}),null),D(o=>(o=O()?"90vw":"720px")!=null?i.style.setProperty("width",o):i.style.removeProperty("width")),i})()},te=e=>{const r=t=>{p("priv",e?.key,t)};return(()=>{var t=M(),l=t.firstChild;return c(l,()=>e?.item?.label),c(t,a(G,{get initValue(){return!!E?.priv?.[e?.key]},updChange:i=>r(i),color:"var(--background-red-ssg)"}),null),t})()},le=e=>{const r=t=>{if(A?.accessLogistic||n("accessLogistic",{}),A?.accessLogistic?.[e?.key])n("accessLogistic",e?.key,"isActive",t);else{let l={...e?.item};l.isActive=t,A?.accessLogistic?n("accessLogistic",e?.key,l):e?.key+""}};return(()=>{var t=M(),l=t.firstChild;return c(l,()=>e?.item?.label),c(t,a(G,{get initValue(){return!!A?.accessLogistic?.[e?.key]?.isActive},updChange:i=>r(i),color:"var(--background-red-ssg)"}),null),t})()},se=async e=>{if(e.length>0){let r={params:{limit:250,":search":e}},t=U?.profile?.isAdmin?{...L(S())}[992004]:{...L(S())}[992006];r={...r,...t};const i=await T(r);if(i&&!i.error)return i}return null},ae=async(e,r)=>{let t={params:{userId:e},data2update:r},l={...L(S())}[999009];t={...t,...l};const s=await T(t);return s&&!s.error?s:null},_={ISADMIN:{label:"ISADMIN",idCode:"99",isActive:!1},IsSSGLogistic:{label:"IsSSGLogistic",idCode:"98",isActive:!1},HIDDE2O:{label:"HIDDE2O",idCode:"93",isActive:!1}},h={SCANING:{label:"Scaning",idCode:"50",isActive:!1},MANIFEST:{label:"Manifest",idCode:"51",isActive:!1},SEARCH:{label:"Dashboard",idCode:"52",isActive:!1},DELIVERY:{label:"Delivery",idCode:"53",isActive:!1},HBL:{label:"Hbls",idCode:"73",isActive:!1},HBLUPD:{label:"Hbl update",idCode:"75",isActive:!1},YABA_09:{label:"Recogida en Tienda",idCode:"63",isActive:!1},YABA_11:{label:"En transito para FL",idCode:"54",isActive:!1},YABA_22:{label:"Entrega a la aerolinea",idCode:"55",isActive:!1},AERO_28:{label:"En AeroVaradero",idCode:"56",isActive:!1},AERO_33:{label:"Recogidos de AeroVaradero",idCode:"57",isActive:!1},YABA_46:{id:"YABA_46",label:"Transporte HAV",icon:"car-hatchback"},YABA_40:{id:"YABA_40",label:"Transporte CAV",icon:"car-hatchback"},YABA_41:{id:"YABA_41",label:"Transporte CMG",icon:"car-hatchback"},YABA_42:{id:"YABA_42",label:"Transporte HLG",icon:"car-hatchback"},YABA_50:{id:"YABA_50",label:"Almacen HAV",icon:"store"},YABA_52:{id:"YABA_52",label:"Almacen CAV",icon:"store"},YABA_54:{id:"YABA_54",label:"Almacen CMG",icon:"store"},YABA_56:{id:"YABA_56",label:"Almacen HLG",icon:"store"},YABA_70:{label:"Organizados por Locaciones",idCode:"59",isActive:!1},YABA_78:{label:"Saliendo para entregar",idCode:"60",isActive:!1},"ISLA DE LA JUVENTUD":{label:"ISLA DE LA JUVENTUD",idCode:"ISLA DE LA JUVENTUD",isActive:!1},"PINAR DEL RIO":{label:"PINAR DEL RIO",idCode:"PINAR DEL RIO",isActive:!1},ARTEMISA:{label:"ARTEMISA",idCode:"ARTEMISA",isActive:!1},"LA HABANA":{label:"LA HABANA",idCode:"LA HABANA",isActive:!1},MAYABEQUE:{label:"MAYABEQUE",idCode:"MAYABEQUE",isActive:!1},MATANZAS:{label:"MATANZAS",idCode:"MATANZAS",isActive:!1},"VILLA CLARA":{label:"VILLA CLARA",idCode:"VILLA CLARA",isActive:!1},CIENFUEGOS:{label:"CIENFUEGOS",idCode:"CIENFUEGOS",isActive:!1},"SANCTI SPIRITUS":{label:"SANCTI SPIRITUS",idCode:"SANCTI SPIRITUS",isActive:!1},"CIEGO DE AVILA":{label:"CIEGO DE AVILA",idCode:"CIEGO DE AVILA",isActive:!1},CAMAGUEY:{label:"CAMAGUEY",idCode:"CAMAGUEY",isActive:!1},"LAS TUNAS":{label:"LAS TUNAS",idCode:"LAS TUNAS",isActive:!1},HOLGUIN:{label:"HOLGUIN",idCode:"HOLGUIN",isActive:!1},GRANMA:{label:"GRANMA",idCode:"GRANMA",isActive:!1},"SANTIAGO DE CUBA":{label:"SANTIAGO DE CUBA",idCode:"SANTIAGO DE CUBA",isActive:!1},GUANTANAMO:{label:"GUANTANAMO",idCode:"GUANTANAMO",isActive:!1}};x(["click"]);export{Ce as default};
