const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-Bd9VkjMy.js","assets/index-BlJEgkX3.js","assets/index-96-BciZA.css","assets/ButonHrm-BPLzySnX.css","assets/CheckBoxSlide-cXGIte8_.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-Dqjp3_jU.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-DJMNyTTB.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as v,_ as g,c as E,a as I,u as m,b as p,i as c,d as s,S as b,F as f,e as S,t as u,g as y,O as N,f as U,h as B,j as T,k as R,m as O,n as h,C as Y}from"./index-BlJEgkX3.js";var x=u('<div><div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>Buscar usuarios</h5></div></div><div style="width:94vw;margin:0 auto;">'),D=u('<div class="_dsplFlx bottombx "><div class=" bottombx lowbordr spaceAround centerBx"><h5></h5><h4>'),M=u('<div class="client_item_box gWXAaj jlytmu">'),G=u('<div><div class=" spaceAround centerBx"><div class=" bottombx lowbordr spaceAround centerBx"><h5>Actualizar Usuario</h5></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),k=u('<div class="_dsplFlx itmAc"><span class=checklabel>');const w=v(()=>g(()=>import("./ButonHrm-Bd9VkjMy.js"),__vite__mapDeps([0,1,2,3]))),V=v(()=>g(()=>import("./CheckBoxSlide-cXGIte8_.js"),__vite__mapDeps([4,1,2,5]))),$=v(()=>g(()=>import("./InputHr-Dqjp3_jU.js"),__vite__mapDeps([6,1,2,7]))),P=v(()=>g(()=>import("./DropDwnSearch-DJMNyTTB.js"),__vite__mapDeps([8,1,2,9]))),[d,n]=E({accessLogistic:{}});function Z(){const[t,l]=I(""),i=m(l,400),[e,{refetch:a}]=p(t,async A=>await z(A));return(()=>{var A=x(),o=A.firstChild,r=o.firstChild,_=o.nextSibling;return c(o,s($,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t()},placeholder:"usuarios ...",colors:"#2b2b2b",handleClick:i}),r),c(_,s(b,{get when(){return e()},get children(){return s(b,{get when(){return e()},get children(){return s(f,{get each(){return e()},children:(L,J)=>s(H,{item:L})})}})}})),A})()}const H=t=>{const l=()=>{n("accessLogistic",t?.item?.accessLogistic);let i=y(),e={};e.id=i,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=s(F,{get id(){return t?.item?.userId},modalId:i}),N(e)};return(()=>{var i=M();return c(i,s(b,{get when(){return t?.item?.email},get children(){var e=D(),a=e.firstChild,A=a.firstChild,o=A.nextSibling;return a.$$click=l,c(A,()=>t?.item?.name),c(o,()=>t?.item?.email),e}})),i})()},F=t=>{const l=async()=>{await j(t?.id,{...d?.accessLogistic}),Y(t?.modalId)},i=e=>{d?.accessLogistic&&n("accessLogistic","agency",e.id)};return U(()=>{}),(()=>{var e=G(),a=e.firstChild;a.firstChild;var A=a.nextSibling,o=A.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),c(a,s(w,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:l}),null),c(o,s(P,{list:B,lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return d?.accessLogistic?.agency},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:r=>i(r),width:"260px"})),c(e,s(b,{when:C,get children(){return s(f,{get each(){return T(C)},children:(r,_)=>s(q,{key:r,get val(){return d?.accessLogistic?.[r]},get item(){return C?.[r]}})})}}),null),R(r=>(r=O()?"90vw":"720px")!=null?e.style.setProperty("width",r):e.style.removeProperty("width")),e})()},q=t=>{const l=i=>{if(d?.accessLogistic||n("accessLogistic",{}),d?.accessLogistic?.[t?.key])n("accessLogistic",t?.key,"isActive",i);else{let e={...t?.item};e.isActive=i,d?.accessLogistic?n("accessLogistic",t?.key,e):t?.key+""}};return(()=>{var i=k(),e=i.firstChild;return c(e,()=>t.item.label),c(i,s(V,{get initValue(){return!!d?.accessLogistic?.[t?.key]?.isActive},updChange:a=>l(a),color:"var(--background-red-ssg)"}),null),i})()},z=async t=>{if(t.length>2){const e=await h({query:"getUsersByParams",params:{limit:250,":search":t},queryString:"!* contain :search"});if(e&&!e.error)return e}return null},j=async(t,l)=>{const a=await h({query:"updateUserDetails",params:{userId:t},data2update:{accessLogistic:l}});return a&&!a.error?a:null},C={SCANING:{label:"Scaning",idCode:"50",isActive:!1},MANIFEST:{label:"Manifest",idCode:"51",isActive:!1},SEARCH:{label:"Dashboard",idCode:"52",isActive:!1},DELIVERY:{label:"Delivery",idCode:"53",isActive:!1},YABA_09:{label:"Recogida en Tienda",idCode:"63",isActive:!1},YABA_11:{label:"En transito para FL",idCode:"54",isActive:!1},YABA_22:{label:"Entrega a la aerolinea",idCode:"55",isActive:!1},AERO_28:{label:"En AeroVaradero",idCode:"56",isActive:!1},AERO_33:{label:"Recogidos de AeroVaradero",idCode:"57",isActive:!1},YABA_46:{id:"YABA_46",label:"Transporte HAV",icon:"car-hatchback"},YABA_40:{id:"YABA_40",label:"Transporte CAV",icon:"car-hatchback"},YABA_41:{id:"YABA_41",label:"Transporte CMG",icon:"car-hatchback"},YABA_42:{id:"YABA_42",label:"Transporte HLG",icon:"car-hatchback"},YABA_50:{id:"YABA_50",label:"Almacen HAV",icon:"store"},YABA_52:{id:"YABA_52",label:"Almacen CAV",icon:"store"},YABA_54:{id:"YABA_54",label:"Almacen CMG",icon:"store"},YABA_56:{id:"YABA_56",label:"Almacen HLG",icon:"store"},YABA_70:{label:"Organizados por Locaciones",idCode:"59",isActive:!1},YABA_78:{label:"Saliendo para entregar",idCode:"60",isActive:!1},"ISLA DE LA JUVENTUD":{label:"ISLA DE LA JUVENTUD",idCode:"ISLA DE LA JUVENTUD",isActive:!1},"PINAR DEL RIO":{label:"PINAR DEL RIO",idCode:"PINAR DEL RIO",isActive:!1},ARTEMISA:{label:"ARTEMISA",idCode:"ARTEMISA",isActive:!1},"LA HABANA":{label:"LA HABANA",idCode:"LA HABANA",isActive:!1},MAYABEQUE:{label:"MAYABEQUE",idCode:"MAYABEQUE",isActive:!1},MATANZAS:{label:"MATANZAS",idCode:"MATANZAS",isActive:!1},"VILLA CLARA":{label:"VILLA CLARA",idCode:"VILLA CLARA",isActive:!1},CIENFUEGOS:{label:"CIENFUEGOS",idCode:"CIENFUEGOS",isActive:!1},"SANCTI SPIRITUS":{label:"SANCTI SPIRITUS",idCode:"SANCTI SPIRITUS",isActive:!1},"CIEGO DE AVILA":{label:"CIEGO DE AVILA",idCode:"CIEGO DE AVILA",isActive:!1},CAMAGUEY:{label:"CAMAGUEY",idCode:"CAMAGUEY",isActive:!1},"LAS TUNAS":{label:"LAS TUNAS",idCode:"LAS TUNAS",isActive:!1},HOLGUIN:{label:"HOLGUIN",idCode:"HOLGUIN",isActive:!1},GRANMA:{label:"GRANMA",idCode:"GRANMA",isActive:!1},"SANTIAGO DE CUBA":{label:"SANTIAGO DE CUBA",idCode:"SANTIAGO DE CUBA",isActive:!1},GUANTANAMO:{label:"GUANTANAMO",idCode:"GUANTANAMO",isActive:!1}};S(["click"]);export{Z as default};