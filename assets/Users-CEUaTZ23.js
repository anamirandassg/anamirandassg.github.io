const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-BQqysGbN.js","assets/index-C7oM_mOn.js","assets/index-BRlA1Q7g.css","assets/SVG-C-3eDiKf.js","assets/Util-B-FWhTQW.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-XaAbdvId.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-Bhh_X5ks.js","assets/InputHr-BXFw4d2l.css","assets/DropDwnSearch-UFDcv-ly.js","assets/debounces-BumeuoSD.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as C,_ as $,c as M,a as j,p as z,i as o,e as s,S as g,F as S,f as U,m as K,j as R,h as Q,t as m,b as q,q as N,g as k}from"./index-C7oM_mOn.js";import{u as X}from"./debounces-BumeuoSD.js";import{a as Z,e as c,O as T,g as w,f as V}from"./Util-B-FWhTQW.js";import{OpenModal as ee,CloseModal as re}from"./DialogHRM-ZtVsyUqE.js";import{c as te}from"./ShowQRPrintLabel-MKCyo4QR.js";import"./fontkit.es-Dye5NabB.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-ByvuCY7T.js";import"./Toast-BLB8QB9E.js";var ie=m('<div><div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>Buscar usuarios</h5></div></div><div style="width:94vw;margin:0 auto;">'),se=m('<div class="_dsplFlx bottombx "><div><h5></h5><h4>'),le=m('<div class="client_item_box gWXAaj jlytmu">'),oe=m('<div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),ae=m('<div><div class=" spaceAround centerBx"><div class=" bottombx lowbordr spaceAround centerBx"><h5>Actualizar Usuario</h5><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class=hseparator></div><div class="bottombx lowbordr centerBx"><h5>Permisos</h5></div><div class=hseparator></div><div class=" bottombx lowbordr centerBx"><h5>Almacenes'),O=m('<div class="_dsplFlx itmAc"><span class=checklabel>');const ne=C(()=>$(()=>import("./ButonHrm-BQqysGbN.js"),__vite__mapDeps([0,1,2,3,4,5]))),P=C(()=>$(()=>import("./CheckBoxSlide-XaAbdvId.js"),__vite__mapDeps([6,1,2,7]))),G=C(()=>$(()=>import("./InputHr-Bhh_X5ks.js"),__vite__mapDeps([8,1,2,9]))),x=C(()=>$(()=>import("./DropDwnSearch-UFDcv-ly.js"),__vite__mapDeps([10,1,2,11,3,4,12]))),[b,p]=M({accessLogistic:{}}),[I,L]=M({stores:{}}),[u,A]=M({priv:{}});function Ce(){const[e,n]=j(""),t=X(n,400),[i,{refetch:r}]=z(e,async a=>await ve(a));return(()=>{var a=ie(),d=a.firstChild,v=d.firstChild,_=d.nextSibling;return o(d,s(G,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"usuarios ...",colors:"#2b2b2b",handleClick:t}),v),o(_,s(g,{get when(){return i()},get children(){return s(g,{get when(){return i()},get children(){return s(S,{get each(){return i()},children:(h,D)=>s(ce,{item:h})})}})}})),a})()}const ce=e=>{const n=()=>{L("stores",void 0),p("accessLogistic",void 0),A("priv",void 0),setTimeout(()=>{p("accessLogistic",e?.item?.accessLogistic),L("stores",e?.item?.accessStores||{});let r={ISADMIN:e?.item?.ISADMIN,isAlexYaba:e?.item?.isAlexYaba,HIDDE2O:e?.item?.HIDDE2O,IsSSGLogistic:e?.item?.IsSSGLogistic,workgroup:e?.item?.workgroup,agency:e?.item?.agency,agencyStore:e?.item?.agencyStore,businessYId:e?.item?.businessYId,telegramId:e?.item?.telegramId||""};A("priv",r)},700);let t=Z(),i={};i.id=t,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=s(de,{get id(){return e?.item?.userId},modalId:t}),ee(i)};return(()=>{var t=le();return o(t,s(g,{get when(){return e?.item?.email},get children(){var i=se(),r=i.firstChild,a=r.firstChild,d=a.nextSibling;return r.$$click=n,o(a,()=>e?.item?.name),o(d,()=>e?.item?.email),U(()=>K(r,` bottombx lowbordr spaceAround ${R()?"":"centerBx"}`)),i}})),t})()},de=e=>{const n=r=>{te(r)},t=async()=>{let r=JSON.parse(JSON.stringify({accessLogistic:{...b?.accessLogistic}})),a=JSON.parse(JSON.stringify(u?.priv)),d=JSON.parse(JSON.stringify({accessStores:{...I?.stores}})),v={...r,...a,...d};console.log(v),await be(e?.id,v),re(e?.modalId)},i=(r,a)=>{A("priv",r,a)};return q(()=>{}),(()=>{var r=ae(),a=r.firstChild,d=a.firstChild,v=d.firstChild,_=v.nextSibling,h=a.nextSibling,D=h.firstChild,E=h.nextSibling,J=E.firstChild,F=E.nextSibling,W=F.firstChild,f=F.nextSibling,Y=f.nextSibling,B=Y.nextSibling;return B.nextSibling,r.style.setProperty("max-height","80vh"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),_.$$click=()=>n(e?.id),o(_,()=>e?.id),o(a,s(ne,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:t}),null),o(r,s(g,{get when(){return N(()=>!!k?.profile?.isAdmin)()&&c("M023009")?.bussinesSSGList},get children(){var l=oe(),y=l.firstChild;return o(y,s(x,{get list(){return c("M023009")?.bussinesSSGList},lbl_empty:"Business",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.priv?.businessYId},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:H=>i("businessYId",H.id),width:"260px"})),l}}),h),o(D,s(x,{get list(){return c("M023009")?.agencies},lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.priv?.agency?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:l=>i("agency",l),width:"260px"})),o(J,s(x,{get list(){return c("M023009")?.workGroup},lbl_empty:"Work Group",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.priv?.workgroup?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:l=>i("workgroup",l),width:"260px"})),o(W,s(x,{get list(){return c("M023009")?.stores},lbl_empty:"Agency Store Id",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.priv?.agencyStore?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:l=>i("agencyStore",l),width:"260px"})),o(r,()=>u?.workgroup?.label,f),o(r,s(g,{get when(){return k?.profile?.isAdmin},get children(){return s(G,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"#229ED9",get value(){return u?.priv?.telegramId},placeholder:"Telegram Id",label:"Telegram Id",colors:"#2b2b2b",handleClick:l=>i("telegramId",l)})}}),f),o(r,s(g,{get when(){return N(()=>!!k?.profile?.isAdmin)()&&c("M023009")?.admLogistiFunc},get children(){return s(S,{get each(){return T(c("M023009")?.admLogistiFunc)},children:(l,y)=>s(ue,{key:l,get val(){return u?.[l]},get item(){return c("M023009")?.admLogistiFunc?.[l]},adm:!0})})}}),f),o(r,s(g,{get when(){return c("M023009")?.accessLogistiFunc},get children(){return s(S,{get each(){return T(c("M023009")?.accessLogistiFunc)},children:(l,y)=>s(ge,{key:l,get val(){return b?.accessLogistic?.[l]},get item(){return c("M023009")?.accessLogistiFunc?.[l]}})})}}),B),o(r,s(g,{get when(){return c("M023009")?.stores},get children(){return s(S,{get each(){return c("M023009")?.stores},children:(l,y)=>s(me,{get key(){return l.id},get val(){return I?.stores},item:l})})}}),null),U(l=>(l=R()?"90vw":"720px")!=null?r.style.setProperty("width",l):r.style.removeProperty("width")),r})()},ue=e=>{const n=t=>{A("priv",e?.key,t)};return(()=>{var t=O(),i=t.firstChild;return o(i,()=>e?.item?.label),o(t,s(P,{get initValue(){return!!u?.priv?.[e?.key]},updChange:r=>n(r),color:"var(--background-red-ssg)"}),null),t})()},ge=e=>{const n=t=>{if(b?.accessLogistic||p("accessLogistic",{}),b?.accessLogistic?.[e?.key])p("accessLogistic",e?.key,"isActive",t);else{let i={...e?.item};i.isActive=t,b?.accessLogistic?p("accessLogistic",e?.key,i):e?.key+""}};return(()=>{var t=O(),i=t.firstChild;return o(i,()=>e?.item?.label),o(t,s(P,{get initValue(){return!!b?.accessLogistic?.[e?.key]?.isActive},updChange:r=>n(r),color:"var(--background-red-ssg)"}),null),t})()},ve=async e=>{e.length>0;let n={params:{limit:250}};e&&e.split(" ").map((a,d)=>{a&&(n.params[":search"+d]=a.trim())});let t=k?.profile?.isAdmin?w(992004):w(992006);n={...n,...t};const r=await V(n);return r&&!r.error?r:null},be=async(e,n)=>{let t={params:{userId:e},data2update:n},i=w(999009);t={...t,...i};const a=await V(t);return a&&!a.error?a:null},me=e=>{const n=t=>{L("stores",e?.key,t||void 0)};return(()=>{var t=O(),i=t.firstChild;return o(i,()=>e?.item?.label),o(t,s(P,{get initValue(){return I?.stores?.[e?.key]},updChange:r=>n(r),color:"var(--background-red-ssg)"}),null),t})()};Q(["click"]);export{Ce as default};
