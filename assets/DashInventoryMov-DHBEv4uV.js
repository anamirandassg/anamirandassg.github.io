const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CoS-w3fX.js","assets/index-CSWRe9WA.js","assets/index-lCkr9jrN.css","assets/SVG-CnpMu39j.js","assets/AddInventory-Dia5SHcA.js","assets/DialogHRM-xd_ePV8O.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-Hafqhk5o.js","assets/DashProducts-htRZDRFN.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InventoryOut-B_KbD6kV.js","assets/DashInventory-CPjNB7Ow.js","assets/Toast-CZ1R9Tq2.js","assets/Toast-DLpFKn-Q.css","assets/LoadingColorSpinner-BjsgGquL.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-udbEPdHr.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-GQ70eDyU.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnInventory-CAZC3CA9.js","assets/components-Ca4eQAjW.js"])))=>i.map(i=>d[i]);
import{l as s,_ as a,a as p,r as h,k as b,b as g,i as u,d as n,H as E,S as I,F as y,G as C,n as A,p as O,q as D,t as m,O as L}from"./index-CSWRe9WA.js";import"./DialogHRM-xd_ePV8O.js";var x=m('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px>'),P=m("<div> <!>."),R=m("<div> ");s(()=>a(()=>import("./FlexSpace-CoS-w3fX.js"),__vite__mapDeps([0,1,2])));s(()=>a(()=>import("./SVG-CnpMu39j.js"),__vite__mapDeps([3,1,2])));s(()=>a(()=>import("./AddInventory-Dia5SHcA.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,0])));s(()=>a(()=>import("./InventoryOut-B_KbD6kV.js"),__vite__mapDeps([11,1,2,5,6,7,8,9,10,0,12,13,14,4])));const S=s(()=>a(()=>import("./LoadingColorSpinner-BjsgGquL.js"),__vite__mapDeps([15,1,2,16]))),$=s(()=>a(()=>import("./InputHr-udbEPdHr.js"),__vite__mapDeps([17,1,2,18])));s(()=>a(()=>import("./CheckBoxSlide-GQ70eDyU.js"),__vite__mapDeps([19,1,2,20])));const k=s(()=>a(()=>import("./ItemOnInventory-CAZC3CA9.js"),__vite__mapDeps([21,1,2,13,14,22])));function F(){const[l,f]=p(0);p(0);const[t,d]=p("");h(()=>{}),b(()=>{});const[i,{refetch:_}]=g(t,async e=>{const r=await T(e,l());let o=[];return L(r).map(c=>{let v=r[c];o.push(v)}),o});return[(()=>{var e=x(),r=e.firstChild;return u(r,n($,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t()},placeholder:"search...",colors:"#2b2b2b",handleClick:o=>d(o)})),e})(),n(C,{fallback:e=>(()=>{var r=P(),o=r.firstChild,c=o.nextSibling;return c.nextSibling,u(r,()=>e.toString(),c),r})(),get children(){return n(E,{get fallback(){return(()=>{var e=R();return e.firstChild,u(e,n(S,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return n(I,{get when(){return i()},get children(){return n(y,{get each(){return i()},children:(e,r)=>n(k,{item:e,refetch:_})})}})}})}})]}const T=async(l,f)=>{let t={params:{businessId:A?.profile?.businessYId}};l&&l.split(" ").map((_,e)=>{_&&(t.params[":search"+e]=_.trim())});let d=O(132001);t={...t,...d},t.params[":search0"];const i=await D(t);return i?.error?{}:i};export{T as LookupInventory,F as default};