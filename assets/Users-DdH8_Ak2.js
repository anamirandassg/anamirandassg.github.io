const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-BMLveCv_.js","assets/index-BGOIoX1m.js","assets/index-DGHHyjai.css","assets/SVG-CwIR7Sbw.js","assets/index-Ci0zXM0r.js","assets/Util-uEfv1z7O.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-C2txW7TR.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-C1ESPhJ_.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-B9ichYpF.js","assets/debounces-DPu4ciPj.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as f,_ as y,c as w,a as N,b as R,i as a,d as s,e as T,t as h,S as p,F as A,f as S,g as V,h as H,j,k as I}from"./index-BGOIoX1m.js";import{u as z}from"./debounces-DPu4ciPj.js";import{g as G,a as d,O as $,b as L,f as M}from"./Util-uEfv1z7O.js";import{OpenModal as J,CloseModal as K}from"./DialogHRM-wi4aFdap.js";import{i as P}from"./globalSignal-DReTlKO1.js";import{c as W}from"./ShowQRPrintLabel-DQih0po7.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-CprHcwF4.js";import"./Toast-B5drWTWD.js";var Q=h('<div><div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>Buscar usuarios</h5></div></div><div style="width:94vw;margin:0 auto;">'),q=h('<div class="_dsplFlx bottombx "><div><h5></h5><h4>'),X=h('<div class="client_item_box gWXAaj jlytmu">'),Y=h('<div><div class=" spaceAround centerBx"><div class=" bottombx lowbordr spaceAround centerBx"><h5>Actualizar Usuario</h5><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),D=h('<div class="_dsplFlx itmAc"><span class=checklabel>');const Z=f(()=>y(()=>import("./ButonHrm-BMLveCv_.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),E=f(()=>y(()=>import("./CheckBoxSlide-C2txW7TR.js"),__vite__mapDeps([7,1,2,8]))),ee=f(()=>y(()=>import("./InputHr-C1ESPhJ_.js"),__vite__mapDeps([9,1,2,10]))),C=f(()=>y(()=>import("./DropDwnSearch-B9ichYpF.js"),__vite__mapDeps([11,1,2,12,3,4,13]))),[u,m]=w({accessLogistic:{}}),[v,_]=w({priv:{}});function fe(){const[e,o]=N(""),r=z(o,400),[i,{refetch:c}]=R(e,async t=>await ce(t));return(()=>{var t=Q(),l=t.firstChild,g=l.firstChild,k=l.nextSibling;return a(l,s(ee,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"usuarios ...",colors:"#2b2b2b",handleClick:r}),g),a(k,s(p,{get when(){return i()},get children(){return s(p,{get when(){return i()},get children(){return s(A,{get each(){return i()},children:(b,x)=>s(te,{item:b})})}})}})),t})()}const te=e=>{const o=()=>{m("accessLogistic",void 0),_("priv",void 0),setTimeout(()=>{m("accessLogistic",e?.item?.accessLogistic);let c={ISADMIN:e?.item?.ISADMIN,HIDDE2O:e?.item?.HIDDE2O,IsSSGLogistic:e?.item?.IsSSGLogistic,workgroup:e?.item?.workgroup};_("priv",c)},700);let r=G(),i={};i.id=r,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=s(re,{get id(){return e?.item?.userId},modalId:r}),J(i)};return(()=>{var r=X();return a(r,s(p,{get when(){return e?.item?.email},get children(){var i=q(),c=i.firstChild,t=c.firstChild,l=t.nextSibling;return c.$$click=o,a(t,()=>e?.item?.name),a(l,()=>e?.item?.email),S(()=>V(c,` bottombx lowbordr spaceAround ${P()?"":"centerBx"}`)),i}})),r})()},re=e=>{const o=t=>{W(t)},r=async()=>{let t=JSON.parse(JSON.stringify({accessLogistic:{...u?.accessLogistic}})),l=JSON.parse(JSON.stringify(v?.priv)),g={...t,...l};console.log(g),await oe(e?.id,g),K(e?.modalId)},i=t=>{u?.accessLogistic&&m("accessLogistic","agency",t.id)},c=(t,l)=>{_("priv",t,l)};return H(()=>{}),(()=>{var t=Y(),l=t.firstChild,g=l.firstChild,k=g.firstChild,b=k.nextSibling,x=l.nextSibling,O=x.firstChild,F=x.nextSibling,B=F.firstChild;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),b.$$click=()=>o(e?.id),a(b,()=>e?.id),a(l,s(Z,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:r}),null),a(O,s(C,{get list(){return d("M023009")?.agencies},lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.accessLogistic?.agency?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:n=>i(n),width:"260px"})),a(B,s(C,{get list(){return d("M023009")?.workGroup},lbl_empty:"Work Group",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return v?.priv?.workgroup?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:n=>c("workgroup",n),width:"260px"})),a(t,()=>v?.workgroup?.label,null),a(t,s(p,{get when(){return j(()=>!!I?.profile?.isAdmin)()&&d("M023009")?.admLogistiFunc},get children(){return s(A,{get each(){return $(d("M023009")?.admLogistiFunc)},children:(n,U)=>s(ie,{key:n,get val(){return v?.[n]},get item(){return d("M023009")?.admLogistiFunc?.[n]},adm:!0})})}}),null),a(t,s(p,{get when(){return d("M023009")?.accessLogistiFunc},get children(){return s(A,{get each(){return $(d("M023009")?.accessLogistiFunc)},children:(n,U)=>s(se,{key:n,get val(){return u?.accessLogistic?.[n]},get item(){return d("M023009")?.accessLogistiFunc?.[n]}})})}}),null),S(n=>(n=P()?"90vw":"720px")!=null?t.style.setProperty("width",n):t.style.removeProperty("width")),t})()},ie=e=>{const o=r=>{_("priv",e?.key,r)};return(()=>{var r=D(),i=r.firstChild;return a(i,()=>e?.item?.label),a(r,s(E,{get initValue(){return!!v?.priv?.[e?.key]},updChange:c=>o(c),color:"var(--background-red-ssg)"}),null),r})()},se=e=>{const o=r=>{if(u?.accessLogistic||m("accessLogistic",{}),u?.accessLogistic?.[e?.key])m("accessLogistic",e?.key,"isActive",r);else{let i={...e?.item};i.isActive=r,u?.accessLogistic?m("accessLogistic",e?.key,i):e?.key+""}};return(()=>{var r=D(),i=r.firstChild;return a(i,()=>e?.item?.label),a(r,s(E,{get initValue(){return!!u?.accessLogistic?.[e?.key]?.isActive},updChange:c=>o(c),color:"var(--background-red-ssg)"}),null),r})()},ce=async e=>{e.length>0;let o={params:{limit:250}};e&&e.split(" ").map((t,l)=>{t&&(o.params[":search"+l]=t.trim())});let r=I?.profile?.isAdmin?L(992004):L(992006);o={...o,...r};const c=await M(o);return c&&!c.error?c:null},oe=async(e,o)=>{let r={params:{userId:e},data2update:o},i=L(999009);r={...r,...i};const t=await M(r);return t&&!t.error?t:null};T(["click"]);export{fe as default};
