const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-C9zwVUTC.js","assets/index-CugTcERi.js","assets/index-BRlA1Q7g.css","assets/SVG-BzHIEW3p.js","assets/Util-C5OVcyIb.js","assets/AddInventory-VjaVwJhM.js","assets/DialogHRM-OkcrDpyp.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-CNmLc5iq.js","assets/DashProducts-OVV0N4Cx.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InventoryOut-Bp2paSZ6.js","assets/DashInventory-BqEQwqUj.js","assets/Toast-CzTcWu2I.js","assets/Toast-DLpFKn-Q.css","assets/LoadingColorSpinner-CDWYIu0E.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-DSQyw-5i.js","assets/InputHr-BXFw4d2l.css","assets/CheckBoxSlide-n0IIulEN.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnInventory-Dbh4ePY5.js","assets/components-BvgOYoGQ.js","assets/DropDwnSearch-Dz7tXha4.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as n,_ as d,a as b,c as D,o as x,b as I,p as $,i as p,e as s,j as T,S,z as R,F as O,E as k,g as L,t as v}from"./index-CugTcERi.js";import{g as F,f as P,a as V,S as h,O as w,F as M}from"./Util-C5OVcyIb.js";import"./DialogHRM-OkcrDpyp.js";import{validStores as N}from"./AddInventory-VjaVwJhM.js";import{u as z}from"./debounces-CNmLc5iq.js";import"./DashProducts-OVV0N4Cx.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-C9zwVUTC.js";var q=v('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),B=v('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>'),Q=v("<div> <!>."),Y=v("<div> ");n(()=>d(()=>import("./FlexSpace-C9zwVUTC.js"),__vite__mapDeps([0,1,2])));n(()=>d(()=>import("./SVG-BzHIEW3p.js"),__vite__mapDeps([3,1,2,4])));n(()=>d(()=>import("./AddInventory-VjaVwJhM.js"),__vite__mapDeps([5,1,2,4,6,7,8,9,10,11,0])));n(()=>d(()=>import("./InventoryOut-Bp2paSZ6.js"),__vite__mapDeps([12,1,2,4,6,7,8,9,10,11,0,13,14,15,5])));const j=n(()=>d(()=>import("./LoadingColorSpinner-CDWYIu0E.js"),__vite__mapDeps([16,1,2,17]))),H=n(()=>d(()=>import("./InputHr-DSQyw-5i.js"),__vite__mapDeps([18,1,2,19])));n(()=>d(()=>import("./CheckBoxSlide-n0IIulEN.js"),__vite__mapDeps([20,1,2,21])));const K=n(()=>d(()=>import("./ItemOnInventory-Dbh4ePY5.js"),__vite__mapDeps([22,1,2,4,14,15,23]))),y=n(()=>d(()=>import("./DropDwnSearch-Dz7tXha4.js"),__vite__mapDeps([24,1,2,8,3,4,25])));function oe(){b(0),b(0),b("");const[a,f]=D({store:"",search:""});x(()=>{}),I(()=>{});const[c,g]=b(""),m=z(g,400),u=(e,r)=>{f({[e]:r}),m(V())},[_,{refetch:A}]=$(c,async e=>{console.log(a);let r=`${h(a?.search)} ${h(a?.store)} ${h(a?.type)}`;console.log(r);const o=await W(r);let l=[];return w(o).map(t=>{let i=o[t];i?.createDate||(i.createDate=i?.date||1734674400800),l.push(i)}),M(l,"createDate",1)}),C=e=>{let r=0;return _()?.map(o=>{let l=o?.transport?o?.transport*1:0,t=o?.products?.reduce((i,E)=>i+E.price*E.qty,0);r+=t+l}),r};return[(()=>{var e=B(),r=e.firstChild,o=r.nextSibling,l=o.nextSibling;return p(r,s(H,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return a?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:t=>u("search",t)})),p(o,s(y,{list:[{id:"ENTRY",label:"ENTRADAS"},{id:"TRANSFER",label:"TRANSFERENCIAS"},{id:"SALES",label:"VENTAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return a?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>u("type",t.id),width:"260px"})),p(l,s(y,{get list(){return N()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return a?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>u("store",t.id),width:"260px"})),p(e,s(S,{get when(){return!T()},get children(){var t=q(),i=t.firstChild;return i.firstChild,p(i,()=>C()?.toFixed(2),null),t}}),null),e})(),s(k,{fallback:e=>(()=>{var r=Q(),o=r.firstChild,l=o.nextSibling;return l.nextSibling,p(r,()=>e.toString(),l),r})(),get children(){return s(R,{get fallback(){return(()=>{var e=Y();return e.firstChild,p(e,s(j,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return s(S,{get when(){return _()},get children(){return s(O,{get each(){return _()},children:(e,r)=>s(K,{item:e,refetch:A})})}})}})}})]}const W=async(a,f)=>{let c={params:{businessId:L?.profile?.businessYId}};a&&a.split(" ").map((u,_)=>{u&&(c.params[":search"+_]=u.trim())});let g=F(132001);c={...c,...g},c.params[":search0"];const m=await P(c);return m?.error?{}:m};export{W as LookupInventory,oe as default};
