const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DXd_FWvw.js","assets/index-CUN7jLOh.js","assets/index-lCkr9jrN.css","assets/SVG-FbxMcwLj.js","assets/Util-D2O-IqKB.js","assets/AddProduct-DbSSCecN.js","assets/DialogHRM-BplFnNhK.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BisIIeUN.js","assets/LoadingColorSpinner-CKKQI4Ys.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-B_NbEaFK.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-BREcL4CT.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnRemittance-DuVYze8K.js","assets/browser-image-compression-BVJ4p9S0.js","assets/Toast-DFm3ct9f.js","assets/Toast-DLpFKn-Q.css","assets/ShowQRPrintLabel-BcOywmsN.js","assets/PDFButton-85Y0gBbC.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-AFz-JHBR.js","assets/InitPrintServices-DgotkDNu.js"])))=>i.map(i=>d[i]);
import{l as _,_ as f,a as b,o as L,n as k,j as B,b as T,i,d as r,F as P,w as A,S as O,E as V,e as F,g as M,f as j,s as z,t as h}from"./index-CUN7jLOh.js";import{s as H}from"./App.module-CbHnVtRQ.js";import{O as S,b as R,f as Q,e as W,d as G,g as q,z as K}from"./Util-D2O-IqKB.js";import{OpenModal as N}from"./DialogHRM-BplFnNhK.js";var J=h('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Remesas</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div></div><div class=" flxWrp spaceAround product-list"><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px>'),U=h("<div> <!>."),X=h("<div> "),Y=h('<div class=" centerBx bottombx"><div class="icon_status centerBx bag_number"><h4></h4></div><h5 class="">$</h5>'),Z=h("<div class=leftMrg> ");const ee=_(()=>f(()=>import("./FlexSpace-DXd_FWvw.js"),__vite__mapDeps([0,1,2])));_(()=>f(()=>import("./SVG-FbxMcwLj.js"),__vite__mapDeps([3,1,2,4])));_(()=>f(()=>import("./AddProduct-DbSSCecN.js"),__vite__mapDeps([5,1,2,4,6,7,8])));const w=_(()=>f(()=>import("./LoadingColorSpinner-CKKQI4Ys.js"),__vite__mapDeps([9,1,2,10]))),te=_(()=>f(()=>import("./InputHr-B_NbEaFK.js"),__vite__mapDeps([11,1,2,12]))),re=_(()=>f(()=>import("./ButonHrm-BREcL4CT.js"),__vite__mapDeps([13,1,2,3,4,14]))),se=_(()=>f(()=>import("./ItemOnRemittance-DuVYze8K.js"),__vite__mapDeps([15,1,2,4,8,6,7,16,17,18,19,20,21,22,23])));function ue(){const[s,n]=b(0),[e,o]=b({});b(0);const[l,m]=b("");L(()=>{}),k(()=>{setTimeout(()=>{m(" ")},950)}),B(()=>{});const y=()=>{let c=q(),a={};a.id=c,a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=r(InjectRemittance,{modalId:c,refetch:E}),N(a)},[$,{refetch:E}]=T(l,async c=>{const a=await ne(c,s());let g=[],u={};return S(a).map(v=>{let p=a[v];u[p?.currency]||(u[p?.currency]=0),u[p?.currency]+=p?.amount*1,g.push(p)}),o(u),K(g,"date",0)});return k(()=>{}),(()=>{var c=J(),a=c.firstChild,g=a.firstChild,u=g.nextSibling,v=a.nextSibling,p=v.firstChild,x=v.nextSibling,D=x.firstChild;return i(a,r(ee,{}),u),i(u,r(re,{color:"#37be5fff",icon:"money",label:"Injectar dinero",handleClick:y})),i(p,r(te,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return l()},placeholder:"search...",colors:"#2b2b2b",handleClick:t=>m(t)})),i(D,r(P,{get each(){return S(e())},children:(t,d)=>r(le,{keyG:t,get amount(){return e()?.[t]}})})),i(x,r(V,{fallback:t=>(()=>{var d=U(),C=d.firstChild,I=C.nextSibling;return I.nextSibling,i(d,()=>t.toString(),I),d})(),get children(){return r(A,{get fallback(){return(()=>{var t=X();return t.firstChild,i(t,r(w,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return r(O,{get when(){return $()},get children(){return r(P,{get each(){return $()},children:(t,d)=>r(se,{item:t,refetch:E})})}})}})}}),null),F(t=>{var d=H.App,C=`padding:16px ${M()?"1vw":"5vw"}  `;return d!==t.e&&j(c,t.e=d),t.t=z(x,C,t.t),t},{e:void 0,t:void 0}),c})()}const ne=async(s,n)=>{let e={params:{":search5":" "}};s&&s.split(" ").map((m,y)=>{m&&(e.params[":search"+y]=m.trim())});let o=R(415002);e={...e,...o};const l=await Q(e);return l?.error?{}:l},pe=async s=>{let n=[];s.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},l=R(802002);o={...o,...l},n.push(o)}),W(n,ae)},ae=async s=>{const e=await G(s);if(e)return e},le=s=>r(O,{get when(){return s?.amount},get children(){return r(A,{get fallback(){return(()=>{var n=Z();return n.firstChild,i(n,r(w,{stroke:"rgb(200 25 60 / 1)",size:32}),null),n})()},get children(){var n=Y(),e=n.firstChild,o=e.firstChild,l=e.nextSibling;return l.firstChild,e.style.setProperty("color","rgb(200 25 60 / 1)"),e.style.setProperty("background","#fff"),e.style.setProperty("margin-right","8px"),i(o,()=>s?.keyG),i(l,()=>s?.amount?.toFixed(2),null),n}})}});export{ne as LookupProducts,ue as default,ae as fetchCSVInve,pe as loadProduct};
