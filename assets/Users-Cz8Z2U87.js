const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-DAX-cYVY.js","assets/index-BGxHyqTm.js","assets/index-BUHqikRO.css","assets/SVG-Kbn11ive.js","assets/index-Ci0zXM0r.js","assets/Util-DErZaF9J.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-wXEutGsL.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-wI-VyzkK.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-CJ2sLRPe.js","assets/debounces-IlVTt_TR.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as y,_ as x,c as M,a as G,b as T,i as o,d as s,e as V,t as b,S as v,F as $,f as P,g as H,h as W,j as S,k as L}from"./index-BGxHyqTm.js";import{u as j}from"./debounces-IlVTt_TR.js";import{g as z,a as d,O as I,b as w,f as D}from"./Util-DErZaF9J.js";import{OpenModal as J,CloseModal as K}from"./DialogHRM-Dmu10hHA.js";import{i as E}from"./globalSignal-CnHTewJd.js";import{c as Y}from"./ShowQRPrintLabel-C6EeIqcL.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-NgpjRc8z.js";import"./Toast-CyODNRbC.js";var Q=b('<div><div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>Buscar usuarios</h5></div></div><div style="width:94vw;margin:0 auto;">'),q=b('<div class="_dsplFlx bottombx "><div><h5></h5><h4>'),X=b('<div class="client_item_box gWXAaj jlytmu">'),Z=b('<div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),ee=b('<div><div class=" spaceAround centerBx"><div class=" bottombx lowbordr spaceAround centerBx"><h5>Actualizar Usuario</h5><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),F=b('<div class="_dsplFlx itmAc"><span class=checklabel>');const te=y(()=>x(()=>import("./ButonHrm-DAX-cYVY.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),O=y(()=>x(()=>import("./CheckBoxSlide-wXEutGsL.js"),__vite__mapDeps([7,1,2,8]))),re=y(()=>x(()=>import("./InputHr-wI-VyzkK.js"),__vite__mapDeps([9,1,2,10]))),C=y(()=>x(()=>import("./DropDwnSearch-CJ2sLRPe.js"),__vite__mapDeps([11,1,2,12,3,4,13]))),[u,p]=M({accessLogistic:{}}),[m,f]=M({priv:{}});function xe(){const[e,a]=G(""),r=j(a,400),[i,{refetch:l}]=T(e,async t=>await ce(t));return(()=>{var t=Q(),n=t.firstChild,g=n.firstChild,k=n.nextSibling;return o(n,s(re,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"usuarios ...",colors:"#2b2b2b",handleClick:r}),g),o(k,s(v,{get when(){return i()},get children(){return s(v,{get when(){return i()},get children(){return s($,{get each(){return i()},children:(h,_)=>s(ie,{item:h})})}})}})),t})()}const ie=e=>{const a=()=>{p("accessLogistic",void 0),f("priv",void 0),setTimeout(()=>{p("accessLogistic",e?.item?.accessLogistic);let l={ISADMIN:e?.item?.ISADMIN,HIDDE2O:e?.item?.HIDDE2O,IsSSGLogistic:e?.item?.IsSSGLogistic,workgroup:e?.item?.workgroup,businessYId:e?.item?.businessYId};f("priv",l)},700);let r=z(),i={};i.id=r,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=s(se,{get id(){return e?.item?.userId},modalId:r}),J(i)};return(()=>{var r=X();return o(r,s(v,{get when(){return e?.item?.email},get children(){var i=q(),l=i.firstChild,t=l.firstChild,n=t.nextSibling;return l.$$click=a,o(t,()=>e?.item?.name),o(n,()=>e?.item?.email),P(()=>H(l,` bottombx lowbordr spaceAround ${E()?"":"centerBx"}`)),i}})),r})()},se=e=>{const a=t=>{Y(t)},r=async()=>{let t=JSON.parse(JSON.stringify({accessLogistic:{...u?.accessLogistic}})),n=JSON.parse(JSON.stringify(m?.priv)),g={...t,...n};console.log(g),await ae(e?.id,g),K(e?.modalId)},i=t=>{u?.accessLogistic&&p("accessLogistic","agency",t.id)},l=(t,n)=>{f("priv",t,n)};return W(()=>{}),(()=>{var t=ee(),n=t.firstChild,g=n.firstChild,k=g.firstChild,h=k.nextSibling,_=n.nextSibling,B=_.firstChild,U=_.nextSibling,N=U.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),h.$$click=()=>a(e?.id),o(h,()=>e?.id),o(n,s(te,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:r}),null),o(t,s(v,{get when(){return S(()=>!!L?.profile?.isAdmin)()&&d("M023009")?.bussinesSSGList},get children(){var c=Z(),A=c.firstChild;return o(A,s(C,{get list(){return d("M023009")?.bussinesSSGList},lbl_empty:"Business",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return m?.priv?.businessYId},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:R=>l("businessYId",R.id),width:"260px"})),c}}),_),o(B,s(C,{get list(){return d("M023009")?.agencies},lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.accessLogistic?.agency?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:c=>i(c),width:"260px"})),o(N,s(C,{get list(){return d("M023009")?.workGroup},lbl_empty:"Work Group",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return m?.priv?.workgroup?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:c=>l("workgroup",c),width:"260px"})),o(t,()=>m?.workgroup?.label,null),o(t,s(v,{get when(){return S(()=>!!L?.profile?.isAdmin)()&&d("M023009")?.admLogistiFunc},get children(){return s($,{get each(){return I(d("M023009")?.admLogistiFunc)},children:(c,A)=>s(le,{key:c,get val(){return m?.[c]},get item(){return d("M023009")?.admLogistiFunc?.[c]},adm:!0})})}}),null),o(t,s(v,{get when(){return d("M023009")?.accessLogistiFunc},get children(){return s($,{get each(){return I(d("M023009")?.accessLogistiFunc)},children:(c,A)=>s(oe,{key:c,get val(){return u?.accessLogistic?.[c]},get item(){return d("M023009")?.accessLogistiFunc?.[c]}})})}}),null),P(c=>(c=E()?"90vw":"720px")!=null?t.style.setProperty("width",c):t.style.removeProperty("width")),t})()},le=e=>{const a=r=>{f("priv",e?.key,r)};return(()=>{var r=F(),i=r.firstChild;return o(i,()=>e?.item?.label),o(r,s(O,{get initValue(){return!!m?.priv?.[e?.key]},updChange:l=>a(l),color:"var(--background-red-ssg)"}),null),r})()},oe=e=>{const a=r=>{if(u?.accessLogistic||p("accessLogistic",{}),u?.accessLogistic?.[e?.key])p("accessLogistic",e?.key,"isActive",r);else{let i={...e?.item};i.isActive=r,u?.accessLogistic?p("accessLogistic",e?.key,i):e?.key+""}};return(()=>{var r=F(),i=r.firstChild;return o(i,()=>e?.item?.label),o(r,s(O,{get initValue(){return!!u?.accessLogistic?.[e?.key]?.isActive},updChange:l=>a(l),color:"var(--background-red-ssg)"}),null),r})()},ce=async e=>{e.length>0;let a={params:{limit:250}};e&&e.split(" ").map((t,n)=>{t&&(a.params[":search"+n]=t.trim())});let r=L?.profile?.isAdmin?w(992004):w(992006);a={...a,...r};const l=await D(a);return l&&!l.error?l:null},ae=async(e,a)=>{let r={params:{userId:e},data2update:a},i=w(999009);r={...r,...i};const t=await D(r);return t&&!t.error?t:null};V(["click"]);export{xe as default};
