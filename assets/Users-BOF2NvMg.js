const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-DfR_XzXK.js","assets/index--_JNbh3-.js","assets/index-BmzAZVve.css","assets/SVG-BmNDMg15.js","assets/index-Ci0zXM0r.js","assets/Util-BwLP_5oJ.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-CvRD8oA-.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-CjxRX0vb.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-CogZkccc.js","assets/debounces-CeDK_p4p.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as S,_ as $,c as O,a as K,b as W,i as l,d as i,S as g,F as x,e as U,f as j,g as R,h as z,t as h,j as Y,k as B,m as w}from"./index--_JNbh3-.js";import{u as Q}from"./debounces-CeDK_p4p.js";import{g as q,a as d,O as N,b as L,f as V}from"./Util-BwLP_5oJ.js";import{OpenModal as X,CloseModal as Z}from"./DialogHRM-Cs1wyHmw.js";import{c as ee}from"./ShowQRPrintLabel-DQ1OwyjB.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";import"./fontkit.es-BqrvdTa9.js";import"./InitPrintServices-8lwggMm8.js";import"./Toast-CS0gWLuA.js";var te=h('<div><div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>Buscar usuarios</h5></div></div><div style="width:94vw;margin:0 auto;">'),re=h('<div class="_dsplFlx bottombx "><div><h5></h5><h4>'),se=h('<div class="client_item_box gWXAaj jlytmu">'),ie=h('<div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),le=h('<div><div class=" spaceAround centerBx"><div class=" bottombx lowbordr spaceAround centerBx"><h5>Actualizar Usuario</h5><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class=hseparator></div><div class="bottombx lowbordr centerBx"><h5>Permisos</h5></div><div class=hseparator></div><div class=" bottombx lowbordr centerBx"><h5>Almacenes'),P=h('<div class="_dsplFlx itmAc"><span class=checklabel>');const oe=S(()=>$(()=>import("./ButonHrm-DfR_XzXK.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),D=S(()=>$(()=>import("./CheckBoxSlide-CvRD8oA-.js"),__vite__mapDeps([7,1,2,8]))),ce=S(()=>$(()=>import("./InputHr-CjxRX0vb.js"),__vite__mapDeps([9,1,2,10]))),C=S(()=>$(()=>import("./DropDwnSearch-CogZkccc.js"),__vite__mapDeps([11,1,2,12,3,4,13]))),[u,b]=O({accessLogistic:{}}),[I,M]=O({stores:{}}),[m,k]=O({priv:{}});function Ae(){const[e,a]=K(""),r=Q(a,400),[s,{refetch:o}]=W(e,async t=>await ge(t));return(()=>{var t=te(),n=t.firstChild,p=n.firstChild,v=n.nextSibling;return l(n,i(ce,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"usuarios ...",colors:"#2b2b2b",handleClick:r}),p),l(v,i(g,{get when(){return s()},get children(){return i(g,{get when(){return s()},get children(){return i(x,{get each(){return s()},children:(_,f)=>i(ae,{item:_})})}})}})),t})()}const ae=e=>{const a=()=>{M("stores",void 0),b("accessLogistic",void 0),k("priv",void 0),setTimeout(()=>{b("accessLogistic",e?.item?.accessLogistic),M("stores",e?.item?.accessStores||{});let o={ISADMIN:e?.item?.ISADMIN,HIDDE2O:e?.item?.HIDDE2O,IsSSGLogistic:e?.item?.IsSSGLogistic,workgroup:e?.item?.workgroup,businessYId:e?.item?.businessYId};k("priv",o)},700);let r=q(),s={};s.id=r,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=i(ne,{get id(){return e?.item?.userId},modalId:r}),X(s)};return(()=>{var r=se();return l(r,i(g,{get when(){return e?.item?.email},get children(){var s=re(),o=s.firstChild,t=o.firstChild,n=t.nextSibling;return o.$$click=a,l(t,()=>e?.item?.name),l(n,()=>e?.item?.email),U(()=>j(o,` bottombx lowbordr spaceAround ${R()?"":"centerBx"}`)),s}})),r})()},ne=e=>{const a=t=>{ee(t)},r=async()=>{let t=JSON.parse(JSON.stringify({accessLogistic:{...u?.accessLogistic}})),n=JSON.parse(JSON.stringify(m?.priv)),p=JSON.parse(JSON.stringify({accessStores:{...I?.stores}})),v={...t,...n,...p};console.log(v),await ve(e?.id,v),Z(e?.modalId)},s=t=>{u?.accessLogistic&&b("accessLogistic","agency",t.id)},o=(t,n)=>{k("priv",t,n)};return Y(()=>{}),(()=>{var t=le(),n=t.firstChild,p=n.firstChild,v=p.firstChild,_=v.nextSibling,f=n.nextSibling,G=f.firstChild,E=f.nextSibling,J=E.firstChild,A=E.nextSibling,T=A.nextSibling,F=T.nextSibling;return F.nextSibling,t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),_.$$click=()=>a(e?.id),l(_,()=>e?.id),l(n,i(oe,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:r}),null),l(t,i(g,{get when(){return B(()=>!!w?.profile?.isAdmin)()&&d("M023009")?.bussinesSSGList},get children(){var c=ie(),y=c.firstChild;return l(y,i(C,{get list(){return d("M023009")?.bussinesSSGList},lbl_empty:"Business",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return m?.priv?.businessYId},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:H=>o("businessYId",H.id),width:"260px"})),c}}),f),l(G,i(C,{get list(){return d("M023009")?.agencies},lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.accessLogistic?.agency?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:c=>s(c),width:"260px"})),l(J,i(C,{get list(){return d("M023009")?.workGroup},lbl_empty:"Work Group",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return m?.priv?.workgroup?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:c=>o("workgroup",c),width:"260px"})),l(t,()=>m?.workgroup?.label,A),l(t,i(g,{get when(){return B(()=>!!w?.profile?.isAdmin)()&&d("M023009")?.admLogistiFunc},get children(){return i(x,{get each(){return N(d("M023009")?.admLogistiFunc)},children:(c,y)=>i(de,{key:c,get val(){return m?.[c]},get item(){return d("M023009")?.admLogistiFunc?.[c]},adm:!0})})}}),A),l(t,i(g,{get when(){return d("M023009")?.accessLogistiFunc},get children(){return i(x,{get each(){return N(d("M023009")?.accessLogistiFunc)},children:(c,y)=>i(ue,{key:c,get val(){return u?.accessLogistic?.[c]},get item(){return d("M023009")?.accessLogistiFunc?.[c]}})})}}),F),l(t,i(g,{get when(){return d("M023009")?.stores},get children(){return i(x,{get each(){return d("M023009")?.stores},children:(c,y)=>i(me,{get key(){return c.id},get val(){return I?.stores},item:c})})}}),null),U(c=>(c=R()?"90vw":"720px")!=null?t.style.setProperty("width",c):t.style.removeProperty("width")),t})()},de=e=>{const a=r=>{k("priv",e?.key,r)};return(()=>{var r=P(),s=r.firstChild;return l(s,()=>e?.item?.label),l(r,i(D,{get initValue(){return!!m?.priv?.[e?.key]},updChange:o=>a(o),color:"var(--background-red-ssg)"}),null),r})()},ue=e=>{const a=r=>{if(u?.accessLogistic||b("accessLogistic",{}),u?.accessLogistic?.[e?.key])b("accessLogistic",e?.key,"isActive",r);else{let s={...e?.item};s.isActive=r,u?.accessLogistic?b("accessLogistic",e?.key,s):e?.key+""}};return(()=>{var r=P(),s=r.firstChild;return l(s,()=>e?.item?.label),l(r,i(D,{get initValue(){return!!u?.accessLogistic?.[e?.key]?.isActive},updChange:o=>a(o),color:"var(--background-red-ssg)"}),null),r})()},ge=async e=>{e.length>0;let a={params:{limit:250}};e&&e.split(" ").map((t,n)=>{t&&(a.params[":search"+n]=t.trim())});let r=w?.profile?.isAdmin?L(992004):L(992006);a={...a,...r};const o=await V(a);return o&&!o.error?o:null},ve=async(e,a)=>{let r={params:{userId:e},data2update:a},s=L(999009);r={...r,...s};const t=await V(r);return t&&!t.error?t:null},me=e=>{const a=r=>{M("stores",e?.key,r||void 0)};return(()=>{var r=P(),s=r.firstChild;return l(s,()=>e?.item?.label),l(r,i(D,{get initValue(){return I?.stores?.[e?.key]},updChange:o=>a(o),color:"var(--background-red-ssg)"}),null),r})()};z(["click"]);export{Ae as default};
