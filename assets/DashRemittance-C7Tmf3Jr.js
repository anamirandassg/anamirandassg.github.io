const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-B-5iyLtm.js","assets/index-BKy_S-Nn.js","assets/index-lCkr9jrN.css","assets/Util-F67-CCle.js","assets/InputHr-Dp8o9I0k.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-YOGkItX8.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-DuxW_F5N.js","assets/debounces-B46jN5Z-.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-B5C1hTwO.js","assets/PickDate-COIu2l05.js","assets/DialogHRM-CgIthEbm.js","assets/DialogHRM-V9_lZntj.css","assets/FlexSpace-BwhTX3J3.js","assets/AddProduct-B2ctADh_.js","assets/LoadingColorSpinner-BCniINeC.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ItemOnRemittance-DW8SHpbL.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-C3JRIq_B.js","assets/Toast-DLpFKn-Q.css","assets/PDFButton-CYzToAIH.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BUYa1DnD.js"])))=>i.map(i=>d[i]);
import{l as i,_ as n,c as I,a as C,n as A,x as T,i as c,d as l,S as w,e as R,g as O,t as P,o as V,j as F,b as W,w as H,F as B,E as j,f as Q,s as q}from"./index-BKy_S-Nn.js";import{s as N}from"./App.module-CbHnVtRQ.js";import{a as z,g as S,b as $,f as L,e as U,d as J,O as K}from"./Util-F67-CCle.js";import{CloseModal as G,OpenModal as X}from"./DialogHRM-CgIthEbm.js";import{u as Y}from"./debounces-B46jN5Z-.js";import"./DashProducts-pHH1B_2Z.js";var Z=P('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Inject Money</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');i(()=>n(()=>import("./SVG-B-5iyLtm.js"),__vite__mapDeps([0,1,2,3])));const k=i(()=>n(()=>import("./InputHr-Dp8o9I0k.js"),__vite__mapDeps([4,1,2,5]))),ee=i(()=>n(()=>import("./ButonHrm-YOGkItX8.js"),__vite__mapDeps([6,1,2,0,3,7])));i(()=>n(()=>import("./DropDwnFetchSearch-DuxW_F5N.js"),__vite__mapDeps([8,1,2,9,0,3,10])));const te=i(()=>n(()=>import("./DropDwnSearch-B5C1hTwO.js"),__vite__mapDeps([11,1,2,9,0,3,10]))),re=i(()=>n(()=>import("./PickDate-COIu2l05.js"),__vite__mapDeps([12,1,2,13,14,3])));function oe(p){const[m,a]=I(),[o,v]=I({currency:"",amount:"",description:""}),[f,h]=C("");C([]);const u=Y(h,400),s=(e,t)=>{v({[e]:t}),u(S())};A(()=>{let e=[];z("M023009")?.provincias.map(t=>{let b=t.label;T?.roles?.[b]?.isActive&&e.push(t)}),a("prov",e)});const g=async e=>{let t={form:{...o}};t.form.ssg_remittance_key=S(),t.form.type="INJECT";let b=$(415005);t={...t,...b},await L(t),G(p?.modalId)};return(()=>{var e=Z(),t=e.firstChild,b=t.firstChild,E=b.firstChild,r=E.nextSibling,d=b.nextSibling,y=d.firstChild,x=d.nextSibling,D=x.firstChild,M=D.nextSibling;return e.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),c(r,l(w,{get when(){return o?.amount&&o?.currency},get children(){return l(ee,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:g})}})),d.style.setProperty("padding","16px"),c(d,l(re,{get init(){return o?.date},label:"Fecha",updDate:_=>s("date",_)}),y),c(y,l(te,{list:[{id:"MN",label:"MN"},{id:"USD",label:"USD"},{id:"MLC",label:"MLC"}],lbl_empty:"Moneda",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return o?.currency},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:_=>s("currency",_.id),width:"200px"})),x.style.setProperty("padding","16px"),c(D,l(k,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return o?.amount},placeholder:"amount",colors:"#2b2b2b",handleClick:_=>s("amount",_)})),c(M,l(k,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return o?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:_=>s("description",_)})),R(_=>(_=O()?"96vw":"920px")!=null?e.style.setProperty("width",_):e.style.removeProperty("width")),e})()}var se=P('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Remesas</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list">'),le=P("<div> <!>."),ae=P("<div> ");const ie=i(()=>n(()=>import("./FlexSpace-BwhTX3J3.js"),__vite__mapDeps([15,1,2])));i(()=>n(()=>import("./SVG-B-5iyLtm.js"),__vite__mapDeps([0,1,2,3])));i(()=>n(()=>import("./AddProduct-B2ctADh_.js"),__vite__mapDeps([16,1,2,3,13,14,9])));const ne=i(()=>n(()=>import("./LoadingColorSpinner-BCniINeC.js"),__vite__mapDeps([17,1,2,18]))),de=i(()=>n(()=>import("./InputHr-Dp8o9I0k.js"),__vite__mapDeps([4,1,2,5]))),ce=i(()=>n(()=>import("./ButonHrm-YOGkItX8.js"),__vite__mapDeps([6,1,2,0,3,7]))),pe=i(()=>n(()=>import("./ItemOnRemittance-DW8SHpbL.js"),__vite__mapDeps([19,1,2,3,9,13,14,20,21,22,23,24,25])));function ye(){const[p,m]=C(0);C(0);const[a,o]=C("");V(()=>{}),A(()=>{setTimeout(()=>{o(" ")},950)}),F(()=>{});const v=()=>{let u=S(),s={};s.id=u,s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=l(oe,{modalId:u,refetch:h}),X(s)},[f,{refetch:h}]=W(a,async u=>{const s=await ue(u,p());let g=[];return K(s).map(e=>{let t=s[e];g.push(t)}),g});return A(()=>{}),(()=>{var u=se(),s=u.firstChild,g=s.firstChild,e=g.nextSibling,t=s.nextSibling,b=t.firstChild,E=t.nextSibling;return c(s,l(ie,{}),e),c(e,l(ce,{color:"#37be5fff",icon:"money",label:"Injectar dinero",handleClick:v})),c(b,l(de,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return a()},placeholder:"search...",colors:"#2b2b2b",handleClick:r=>o(r)})),c(E,l(j,{fallback:r=>(()=>{var d=le(),y=d.firstChild,x=y.nextSibling;return x.nextSibling,c(d,()=>r.toString(),x),d})(),get children(){return l(H,{get fallback(){return(()=>{var r=ae();return r.firstChild,c(r,l(ne,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r})()},get children(){return l(w,{get when(){return f()},get children(){return l(B,{get each(){return f()},children:(r,d)=>l(pe,{item:r,refetch:h})})}})}})}})),R(r=>{var d=N.App,y=`padding:16px ${O()?"1vw":"5vw"}  `;return d!==r.e&&Q(u,r.e=d),r.t=q(E,y,r.t),r},{e:void 0,t:void 0}),u})()}const ue=async(p,m)=>{let a={params:{":search5":" "}};p&&p.split(" ").map((f,h)=>{f&&(a.params[":search"+h]=f.trim())});let o=$(415002);a={...a,...o};const v=await L(a);return console.log(a),console.log(v),v?.error?{}:v},xe=async p=>{let m=[];p.map(a=>{let o={params:{id:a?.ssg_track_key,idairguide:"all"}},v=$(802002);o={...o,...v},m.push(o)}),U(m,_e)},_e=async p=>{const a=await J(p);if(a)return a};export{ue as LookupProducts,ye as default,_e as fetchCSVInve,xe as loadProduct};