const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CSSerAjY.js","assets/index-dqKcxXDx.js","assets/index-DEEWbFNK.css","assets/Util-C4Gv2Rs-.js","assets/InputHr-qthB2fMY.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-pdeS58tf.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnFetchSearch-BQFXHLBL.js","assets/debounces-DoXmuWlk.js","assets/DropDwnSearch-DMkLkRPc.css","assets/DropDwnSearch-DmFUGNvp.js","assets/PickDate-CuTSXqqh.js","assets/DialogHRM-CIe1SfVn.js","assets/DialogHRM-V9_lZntj.css","assets/FlexSpace-CRp4kLNy.js","assets/AddProduct-CjuFjuwB.js","assets/LoadingColorSpinner-CWMkyEAF.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/ItemOnRemittance-hBuV9Va9.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-BAZ9l--3.js","assets/Toast-DLpFKn-Q.css","assets/ShowQRPrintLabel-CS0JAcN0.js","assets/PDFButton-CCQT0yk3.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BaZy4qZc.js","assets/InitPrintServices-COQVt4ve.js"])))=>i.map(i=>d[i]);
import{l as p,_,c as I,a as $,b as S,y as Q,i as n,d as r,S as w,e as V,f as W,t as E,o as q,k as z,j as N,F as M,x as B,E as G,g as U,q as J}from"./index-dqKcxXDx.js";import{s as K}from"./App.module-CbHnVtRQ.js";import{d as X,b as D,c as R,f as H,O as F,j as Y,i as Z,B as ee}from"./Util-C4Gv2Rs-.js";import{CloseModal as re,OpenModal as te}from"./DialogHRM-CIe1SfVn.js";import{u as se}from"./debounces-DoXmuWlk.js";import"./DashProducts-Lj0sJOkP.js";var le=E('<div><div><div class="_dsplFlx flxWrp spaceAround "><div><div class="_dsplFlx bottombx lowbordr"><h5>Inject Money</h5></div></div><div class="_dsplFlx bottombx "></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div><div style=padding:4px>');p(()=>_(()=>import("./SVG-CSSerAjY.js"),__vite__mapDeps([0,1,2,3])));const T=p(()=>_(()=>import("./InputHr-qthB2fMY.js"),__vite__mapDeps([4,1,2,5]))),oe=p(()=>_(()=>import("./ButonHrm-pdeS58tf.js"),__vite__mapDeps([6,1,2,0,3,7])));p(()=>_(()=>import("./DropDwnFetchSearch-BQFXHLBL.js"),__vite__mapDeps([8,1,2,9,0,3,10])));const ie=p(()=>_(()=>import("./DropDwnSearch-DmFUGNvp.js"),__vite__mapDeps([11,1,2,9,0,3,10]))),ne=p(()=>_(()=>import("./PickDate-CuTSXqqh.js"),__vite__mapDeps([12,1,2,13,14,3])));function ae(a){const[u,t]=I(),[l,v]=I({currency:"",amount:"",description:""}),[g,y]=$("");$([]);const P=se(y,400),x=(s,d)=>{v({[s]:d}),P(D())};S(()=>{let s=[];X("M023009")?.provincias.map(d=>{let o=d.label;Q?.roles?.[o]?.isActive&&s.push(d)}),t("prov",s)});const O=async s=>{let d={form:{...l}};d.form.ssg_remittance_key=D(),d.form.type="INJECT";let o=R(415005);d={...d,...o},await H(d),re(a?.modalId)};return(()=>{var s=le(),d=s.firstChild,o=d.firstChild,i=o.firstChild,m=i.nextSibling,c=o.nextSibling,h=c.firstChild,b=c.nextSibling,C=b.firstChild,k=C.nextSibling;return s.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),s.style.setProperty("overflow","auto"),s.style.setProperty("background","#ffffff"),s.style.setProperty("border-radius","13"),s.style.setProperty("padding","10px 19px"),n(m,r(w,{get when(){return l?.amount&&l?.currency},get children(){return r(oe,{color:"#047db7ff",icon:"save",label:"Salvar",handleClick:O})}})),c.style.setProperty("padding","16px"),n(c,r(ne,{get init(){return l?.date},label:"Fecha",updDate:e=>x("date",e)}),h),n(h,r(ie,{list:[{id:"MN",label:"MN"},{id:"USD",label:"USD"},{id:"MLC",label:"MLC"}],lbl_empty:"Moneda",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return l?.currency},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:e=>x("currency",e.id),width:"200px"})),b.style.setProperty("padding","16px"),n(C,r(T,{width:"360px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return l?.amount},placeholder:"amount",colors:"#2b2b2b",handleClick:e=>x("amount",e)})),n(k,r(T,{width:"460px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return l?.description},placeholder:"Descripcion",colors:"#2b2b2b",handleClick:e=>x("description",e)})),V(e=>(e=W()?"96vw":"920px")!=null?s.style.setProperty("width",e):s.style.removeProperty("width")),s})()}var de=E('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Remesas</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list"><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px>'),ce=E("<div> <!>."),ue=E("<div> "),pe=E('<div class=" centerBx bottombx"><div class="icon_status centerBx bag_number"><h4></h4></div><h5 class="">$</h5>'),_e=E("<div class=leftMrg> ");const ve=p(()=>_(()=>import("./FlexSpace-CRp4kLNy.js"),__vite__mapDeps([15,1,2])));p(()=>_(()=>import("./SVG-CSSerAjY.js"),__vite__mapDeps([0,1,2,3])));p(()=>_(()=>import("./AddProduct-CjuFjuwB.js"),__vite__mapDeps([16,1,2,3,13,14,9])));const j=p(()=>_(()=>import("./LoadingColorSpinner-CWMkyEAF.js"),__vite__mapDeps([17,1,2,18]))),be=p(()=>_(()=>import("./InputHr-qthB2fMY.js"),__vite__mapDeps([4,1,2,5]))),me=p(()=>_(()=>import("./ButonHrm-pdeS58tf.js"),__vite__mapDeps([6,1,2,0,3,7]))),fe=p(()=>_(()=>import("./ItemOnRemittance-hBuV9Va9.js"),__vite__mapDeps([19,1,2,3,9,13,14,20,21,22,23,24,25,26,27])));function Ae(){const[a,u]=$(0),[t,l]=$({});$(0);const[v,g]=I({}),[y,P]=$("");q(()=>{}),S(()=>{setTimeout(()=>{P(" ")},950)}),z(()=>{});const x=()=>{let o=D(),i={};i.id=o,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=r(ae,{modalId:o,refetch:s}),te(i)},[O,{refetch:s}]=N(y,async o=>{const i=await he(o,a());let m=[],c={};return F(i).map(h=>{let b=i[h];c[b?.currency]||(c[b?.currency]=0),c[b?.currency]+=b?.amount*1,m.push(b)}),g("result",ee(m,"date",0)),l(c),[]}),d=async(o,i,m)=>{g("result",c=>c.ssg_remittance_key===o,i,m)};return S(()=>{}),(()=>{var o=de(),i=o.firstChild,m=i.firstChild,c=m.nextSibling,h=i.nextSibling,b=h.firstChild,C=h.nextSibling,k=C.firstChild;return n(i,r(ve,{}),c),n(c,r(me,{color:"#37be5fff",icon:"money",label:"Injectar dinero",handleClick:x})),n(b,r(be,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return y()},placeholder:"search...",colors:"#2b2b2b",handleClick:e=>P(e)})),n(k,r(M,{get each(){return F(t())},children:(e,f)=>r(ye,{keyG:e,get amount(){return t()?.[e]}})})),n(C,r(G,{fallback:e=>(()=>{var f=ce(),A=f.firstChild,L=A.nextSibling;return L.nextSibling,n(f,()=>e.toString(),L),f})(),get children(){return r(B,{get fallback(){return(()=>{var e=ue();return e.firstChild,n(e,r(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(w,{get when(){return v?.result},get children(){return r(M,{get each(){return v?.result},children:(e,f)=>r(fe,{item:e,refetch:s,updItm:d})})}})}})}}),null),V(e=>{var f=K.App,A=`padding:16px ${W()?"1vw":"5vw"}  `;return f!==e.e&&U(o,e.e=f),e.t=J(C,A,e.t),e},{e:void 0,t:void 0}),o})()}const he=async(a,u)=>{let t={params:{":search5":" "}};a&&a.split(" ").map((g,y)=>{g&&(t.params[":search"+y]=g.trim())});let l=R(415002);t={...t,...l};const v=await H(t);return v?.error?{}:v},Ie=async a=>{let u=[];a.map(t=>{let l={params:{id:t?.ssg_track_key,idairguide:"all"}},v=R(802002);l={...l,...v},u.push(l)}),Y(u,ge)},ge=async a=>{const t=await Z(a);if(t)return t},ye=a=>r(w,{get when(){return a?.amount},get children(){return r(B,{get fallback(){return(()=>{var u=_e();return u.firstChild,n(u,r(j,{stroke:"rgb(200 25 60 / 1)",size:32}),null),u})()},get children(){var u=pe(),t=u.firstChild,l=t.firstChild,v=t.nextSibling;return v.firstChild,t.style.setProperty("color","rgb(200 25 60 / 1)"),t.style.setProperty("background","#fff"),t.style.setProperty("margin-right","8px"),n(l,()=>a?.keyG),n(v,()=>a?.amount?.toFixed(2),null),u}})}});export{he as LookupProducts,Ae as default,ge as fetchCSVInve,Ie as loadProduct};
