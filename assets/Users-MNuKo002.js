const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-C134OIi0.js","assets/index-PZmRD6qC.js","assets/index-W9fcnr7G.css","assets/SVG-krqrZGgX.js","assets/index-Ci0zXM0r.js","assets/Util-D2YTzGDx.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-DkFF1oEp.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-Deo2BvUO.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-BGJCIsvQ.js","assets/debounces-C7XBI1hQ.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as S,_ as $,c as O,a as K,b as W,i as o,d as i,e as j,t as h,S as g,F as x,f as U,g as z,h as Y,j as B,k as w}from"./index-PZmRD6qC.js";import{u as Q}from"./debounces-C7XBI1hQ.js";import{g as q,a as d,O as N,b as L,f as R}from"./Util-D2YTzGDx.js";import{OpenModal as X,CloseModal as Z}from"./DialogHRM-B5L-ljS7.js";import{i as V}from"./globalSignal-AlJRtNUL.js";import{c as ee}from"./ShowQRPrintLabel-Bh1mIHxi.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-B3KIQnKW.js";import"./Toast-AsO8pjPO.js";var te=h('<div><div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>Buscar usuarios</h5></div></div><div style="width:94vw;margin:0 auto;">'),re=h('<div class="_dsplFlx bottombx "><div><h5></h5><h4>'),se=h('<div class="client_item_box gWXAaj jlytmu">'),ie=h('<div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),oe=h('<div><div class=" spaceAround centerBx"><div class=" bottombx lowbordr spaceAround centerBx"><h5>Actualizar Usuario</h5><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class=hseparator></div><div class="bottombx lowbordr centerBx"><h5>Permisos</h5></div><div class=hseparator></div><div class=" bottombx lowbordr centerBx"><h5>Almacenes'),P=h('<div class="_dsplFlx itmAc"><span class=checklabel>');const le=S(()=>$(()=>import("./ButonHrm-C134OIi0.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),D=S(()=>$(()=>import("./CheckBoxSlide-DkFF1oEp.js"),__vite__mapDeps([7,1,2,8]))),ce=S(()=>$(()=>import("./InputHr-Deo2BvUO.js"),__vite__mapDeps([9,1,2,10]))),C=S(()=>$(()=>import("./DropDwnSearch-BGJCIsvQ.js"),__vite__mapDeps([11,1,2,12,3,4,13]))),[u,b]=O({accessLogistic:{}}),[I,M]=O({stores:{}}),[m,k]=O({priv:{}});function we(){const[e,a]=K(""),r=Q(a,400),[s,{refetch:l}]=W(e,async t=>await ge(t));return(()=>{var t=te(),n=t.firstChild,p=n.firstChild,v=n.nextSibling;return o(n,i(ce,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"usuarios ...",colors:"#2b2b2b",handleClick:r}),p),o(v,i(g,{get when(){return s()},get children(){return i(g,{get when(){return s()},get children(){return i(x,{get each(){return s()},children:(_,f)=>i(ae,{item:_})})}})}})),t})()}const ae=e=>{const a=()=>{M("stores",void 0),b("accessLogistic",void 0),k("priv",void 0),setTimeout(()=>{b("accessLogistic",e?.item?.accessLogistic),M("stores",e?.item?.accessStores||{});let l={ISADMIN:e?.item?.ISADMIN,HIDDE2O:e?.item?.HIDDE2O,IsSSGLogistic:e?.item?.IsSSGLogistic,workgroup:e?.item?.workgroup,businessYId:e?.item?.businessYId};k("priv",l)},700);let r=q(),s={};s.id=r,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=i(ne,{get id(){return e?.item?.userId},modalId:r}),X(s)};return(()=>{var r=se();return o(r,i(g,{get when(){return e?.item?.email},get children(){var s=re(),l=s.firstChild,t=l.firstChild,n=t.nextSibling;return l.$$click=a,o(t,()=>e?.item?.name),o(n,()=>e?.item?.email),U(()=>z(l,` bottombx lowbordr spaceAround ${V()?"":"centerBx"}`)),s}})),r})()},ne=e=>{const a=t=>{ee(t)},r=async()=>{let t=JSON.parse(JSON.stringify({accessLogistic:{...u?.accessLogistic}})),n=JSON.parse(JSON.stringify(m?.priv)),p=JSON.parse(JSON.stringify({accessStores:{...I?.stores}})),v={...t,...n,...p};console.log(v),await ve(e?.id,v),Z(e?.modalId)},s=t=>{u?.accessLogistic&&b("accessLogistic","agency",t.id)},l=(t,n)=>{k("priv",t,n)};return Y(()=>{}),(()=>{var t=oe(),n=t.firstChild,p=n.firstChild,v=p.firstChild,_=v.nextSibling,f=n.nextSibling,G=f.firstChild,E=f.nextSibling,J=E.firstChild,A=E.nextSibling,T=A.nextSibling,F=T.nextSibling;return F.nextSibling,t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),_.$$click=()=>a(e?.id),o(_,()=>e?.id),o(n,i(le,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:r}),null),o(t,i(g,{get when(){return B(()=>!!w?.profile?.isAdmin)()&&d("M023009")?.bussinesSSGList},get children(){var c=ie(),y=c.firstChild;return o(y,i(C,{get list(){return d("M023009")?.bussinesSSGList},lbl_empty:"Business",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return m?.priv?.businessYId},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:H=>l("businessYId",H.id),width:"260px"})),c}}),f),o(G,i(C,{get list(){return d("M023009")?.agencies},lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.accessLogistic?.agency?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:c=>s(c),width:"260px"})),o(J,i(C,{get list(){return d("M023009")?.workGroup},lbl_empty:"Work Group",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return m?.priv?.workgroup?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:c=>l("workgroup",c),width:"260px"})),o(t,()=>m?.workgroup?.label,A),o(t,i(g,{get when(){return B(()=>!!w?.profile?.isAdmin)()&&d("M023009")?.admLogistiFunc},get children(){return i(x,{get each(){return N(d("M023009")?.admLogistiFunc)},children:(c,y)=>i(de,{key:c,get val(){return m?.[c]},get item(){return d("M023009")?.admLogistiFunc?.[c]},adm:!0})})}}),A),o(t,i(g,{get when(){return d("M023009")?.accessLogistiFunc},get children(){return i(x,{get each(){return N(d("M023009")?.accessLogistiFunc)},children:(c,y)=>i(ue,{key:c,get val(){return u?.accessLogistic?.[c]},get item(){return d("M023009")?.accessLogistiFunc?.[c]}})})}}),F),o(t,i(g,{get when(){return d("M023009")?.stores},get children(){return i(x,{get each(){return d("M023009")?.stores},children:(c,y)=>i(me,{get key(){return c.id},get val(){return I?.stores},item:c})})}}),null),U(c=>(c=V()?"90vw":"720px")!=null?t.style.setProperty("width",c):t.style.removeProperty("width")),t})()},de=e=>{const a=r=>{k("priv",e?.key,r)};return(()=>{var r=P(),s=r.firstChild;return o(s,()=>e?.item?.label),o(r,i(D,{get initValue(){return!!m?.priv?.[e?.key]},updChange:l=>a(l),color:"var(--background-red-ssg)"}),null),r})()},ue=e=>{const a=r=>{if(u?.accessLogistic||b("accessLogistic",{}),u?.accessLogistic?.[e?.key])b("accessLogistic",e?.key,"isActive",r);else{let s={...e?.item};s.isActive=r,u?.accessLogistic?b("accessLogistic",e?.key,s):e?.key+""}};return(()=>{var r=P(),s=r.firstChild;return o(s,()=>e?.item?.label),o(r,i(D,{get initValue(){return!!u?.accessLogistic?.[e?.key]?.isActive},updChange:l=>a(l),color:"var(--background-red-ssg)"}),null),r})()},ge=async e=>{e.length>0;let a={params:{limit:250}};e&&e.split(" ").map((t,n)=>{t&&(a.params[":search"+n]=t.trim())});let r=w?.profile?.isAdmin?L(992004):L(992006);a={...a,...r};const l=await R(a);return l&&!l.error?l:null},ve=async(e,a)=>{let r={params:{userId:e},data2update:a},s=L(999009);r={...r,...s};const t=await R(r);return t&&!t.error?t:null},me=e=>{const a=r=>{M("stores",e?.key,r||void 0)};return(()=>{var r=P(),s=r.firstChild;return o(s,()=>e?.item?.label),o(r,i(D,{get initValue(){return I?.stores?.[e?.key]},updChange:l=>a(l),color:"var(--background-red-ssg)"}),null),r})()};j(["click"]);export{we as default};
