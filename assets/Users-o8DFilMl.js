const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-CQwlFjWI.js","assets/index-Du-T8lqp.js","assets/index-DvBVPk7j.css","assets/SVG-uh0oN_E0.js","assets/Util-C4Gv2Rs-.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-BJdUaxQW.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-XdlhAl07.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-BUiUSj-h.js","assets/debounces-BaDtmQbF.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as $,_ as A,c as O,a as j,j as z,i as o,d as i,S as v,F as S,e as R,g as Y,f as V,h as Q,t as h,k as q,m as N,n as w}from"./index-Du-T8lqp.js";import{u as X}from"./debounces-BaDtmQbF.js";import{b as Z,d,O as U,c as L,f as G}from"./Util-C4Gv2Rs-.js";import{OpenModal as ee,CloseModal as re}from"./DialogHRM-B5-a-GR7.js";import{c as te}from"./ShowQRPrintLabel-CTqwIhoc.js";import"./PDFButton-CCQT0yk3.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BaZy4qZc.js";import"./InitPrintServices-COQVt4ve.js";import"./Toast-BuOEiF8b.js";var se=h('<div><div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>Buscar usuarios</h5></div></div><div style="width:94vw;margin:0 auto;">'),ie=h('<div class="_dsplFlx bottombx "><div><h5></h5><h4>'),le=h('<div class="client_item_box gWXAaj jlytmu">'),oe=h('<div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),ce=h('<div><div class=" spaceAround centerBx"><div class=" bottombx lowbordr spaceAround centerBx"><h5>Actualizar Usuario</h5><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class=hseparator></div><div class="bottombx lowbordr centerBx"><h5>Permisos</h5></div><div class=hseparator></div><div class=" bottombx lowbordr centerBx"><h5>Almacenes'),P=h('<div class="_dsplFlx itmAc"><span class=checklabel>');const ae=$(()=>A(()=>import("./ButonHrm-CQwlFjWI.js"),__vite__mapDeps([0,1,2,3,4,5]))),F=$(()=>A(()=>import("./CheckBoxSlide-BJdUaxQW.js"),__vite__mapDeps([6,1,2,7]))),ne=$(()=>A(()=>import("./InputHr-XdlhAl07.js"),__vite__mapDeps([8,1,2,9]))),x=$(()=>A(()=>import("./DropDwnSearch-BUiUSj-h.js"),__vite__mapDeps([10,1,2,11,3,4,12]))),[u,m]=O({accessLogistic:{}}),[I,M]=O({stores:{}}),[g,k]=O({priv:{}});function we(){const[e,a]=j(""),t=X(a,400),[s,{refetch:c}]=z(e,async r=>await be(r));return(()=>{var r=se(),n=r.firstChild,p=n.firstChild,b=n.nextSibling;return o(n,i(ne,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"usuarios ...",colors:"#2b2b2b",handleClick:t}),p),o(b,i(v,{get when(){return s()},get children(){return i(v,{get when(){return s()},get children(){return i(S,{get each(){return s()},children:(_,y)=>i(de,{item:_})})}})}})),r})()}const de=e=>{const a=()=>{M("stores",void 0),m("accessLogistic",void 0),k("priv",void 0),setTimeout(()=>{m("accessLogistic",e?.item?.accessLogistic),M("stores",e?.item?.accessStores||{});let c={ISADMIN:e?.item?.ISADMIN,HIDDE2O:e?.item?.HIDDE2O,IsSSGLogistic:e?.item?.IsSSGLogistic,workgroup:e?.item?.workgroup,agencyStore:e?.item?.agencyStore,businessYId:e?.item?.businessYId};k("priv",c)},700);let t=Z(),s={};s.id=t,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=i(ue,{get id(){return e?.item?.userId},modalId:t}),ee(s)};return(()=>{var t=le();return o(t,i(v,{get when(){return e?.item?.email},get children(){var s=ie(),c=s.firstChild,r=c.firstChild,n=r.nextSibling;return c.$$click=a,o(r,()=>e?.item?.name),o(n,()=>e?.item?.email),R(()=>Y(c,` bottombx lowbordr spaceAround ${V()?"":"centerBx"}`)),s}})),t})()},ue=e=>{const a=r=>{te(r)},t=async()=>{let r=JSON.parse(JSON.stringify({accessLogistic:{...u?.accessLogistic}})),n=JSON.parse(JSON.stringify(g?.priv)),p=JSON.parse(JSON.stringify({accessStores:{...I?.stores}})),b={...r,...n,...p};console.log(b),await me(e?.id,b),re(e?.modalId)},s=r=>{u?.accessLogistic&&m("accessLogistic","agency",r.id)},c=(r,n)=>{k("priv",r,n)};return q(()=>{}),(()=>{var r=ce(),n=r.firstChild,p=n.firstChild,b=p.firstChild,_=b.nextSibling,y=n.nextSibling,J=y.firstChild,D=y.nextSibling,T=D.firstChild,E=D.nextSibling,W=E.firstChild,C=E.nextSibling,H=C.nextSibling,B=H.nextSibling;return B.nextSibling,r.style.setProperty("max-height","80vh"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),_.$$click=()=>a(e?.id),o(_,()=>e?.id),o(n,i(ae,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:t}),null),o(r,i(v,{get when(){return N(()=>!!w?.profile?.isAdmin)()&&d("M023009")?.bussinesSSGList},get children(){var l=oe(),f=l.firstChild;return o(f,i(x,{get list(){return d("M023009")?.bussinesSSGList},lbl_empty:"Business",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return g?.priv?.businessYId},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:K=>c("businessYId",K.id),width:"260px"})),l}}),y),o(J,i(x,{get list(){return d("M023009")?.agencies},lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.accessLogistic?.agency?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:l=>s(l),width:"260px"})),o(T,i(x,{get list(){return d("M023009")?.workGroup},lbl_empty:"Work Group",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return g?.priv?.workgroup?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:l=>c("workgroup",l),width:"260px"})),o(W,i(x,{get list(){return d("M023009")?.stores},lbl_empty:"Agency Store Id",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return g?.priv?.agencyStore?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:l=>c("agencyStore",l),width:"260px"})),o(r,()=>g?.workgroup?.label,C),o(r,i(v,{get when(){return N(()=>!!w?.profile?.isAdmin)()&&d("M023009")?.admLogistiFunc},get children(){return i(S,{get each(){return U(d("M023009")?.admLogistiFunc)},children:(l,f)=>i(ge,{key:l,get val(){return g?.[l]},get item(){return d("M023009")?.admLogistiFunc?.[l]},adm:!0})})}}),C),o(r,i(v,{get when(){return d("M023009")?.accessLogistiFunc},get children(){return i(S,{get each(){return U(d("M023009")?.accessLogistiFunc)},children:(l,f)=>i(ve,{key:l,get val(){return u?.accessLogistic?.[l]},get item(){return d("M023009")?.accessLogistiFunc?.[l]}})})}}),B),o(r,i(v,{get when(){return d("M023009")?.stores},get children(){return i(S,{get each(){return d("M023009")?.stores},children:(l,f)=>i(he,{get key(){return l.id},get val(){return I?.stores},item:l})})}}),null),R(l=>(l=V()?"90vw":"720px")!=null?r.style.setProperty("width",l):r.style.removeProperty("width")),r})()},ge=e=>{const a=t=>{k("priv",e?.key,t)};return(()=>{var t=P(),s=t.firstChild;return o(s,()=>e?.item?.label),o(t,i(F,{get initValue(){return!!g?.priv?.[e?.key]},updChange:c=>a(c),color:"var(--background-red-ssg)"}),null),t})()},ve=e=>{const a=t=>{if(u?.accessLogistic||m("accessLogistic",{}),u?.accessLogistic?.[e?.key])m("accessLogistic",e?.key,"isActive",t);else{let s={...e?.item};s.isActive=t,u?.accessLogistic?m("accessLogistic",e?.key,s):e?.key+""}};return(()=>{var t=P(),s=t.firstChild;return o(s,()=>e?.item?.label),o(t,i(F,{get initValue(){return!!u?.accessLogistic?.[e?.key]?.isActive},updChange:c=>a(c),color:"var(--background-red-ssg)"}),null),t})()},be=async e=>{e.length>0;let a={params:{limit:250}};e&&e.split(" ").map((r,n)=>{r&&(a.params[":search"+n]=r.trim())});let t=w?.profile?.isAdmin?L(992004):L(992006);a={...a,...t};const c=await G(a);return c&&!c.error?c:null},me=async(e,a)=>{let t={params:{userId:e},data2update:a},s=L(999009);t={...t,...s};const r=await G(t);return r&&!r.error?r:null},he=e=>{const a=t=>{M("stores",e?.key,t||void 0)};return(()=>{var t=P(),s=t.firstChild;return o(s,()=>e?.item?.label),o(t,i(F,{get initValue(){return I?.stores?.[e?.key]},updChange:c=>a(c),color:"var(--background-red-ssg)"}),null),t})()};Q(["click"]);export{we as default};
