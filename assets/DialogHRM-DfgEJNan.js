import{a as x,c as C,i as r,d as v,e as T,t as u,F as b,s as c,j as w,f as h}from"./index-Rccuw2q3.js";import{g as y}from"./Util-uEfv1z7O.js";import"./index-Ci0zXM0r.js";var f=u("<div>"),z=u("<div><div class=ltr-hoe9xz><div class=ltr-1wao6ny>");const[N,$]=x(""),[m,p]=C([]),L=()=>(()=>{var e=f();return r(e,()=>N()?" ":"",null),r(e,v(b,{get each(){return m?.dialogs},children:(t,l)=>v(D,{item:t})}),null),e})(),D=e=>{let t={};e?.item?.props?.height&&(t.heigth=e?.item?.props?.height),e?.item?.props?.zIndex&&(t["z-index"]=e?.item?.props?.zIndex-1);let l={"z-index":e?.item?.props?.zIndex},n=e?.item?.overlayTransparent?" transparent":"",s=e?.item?.overlayTransparent?" overlayTransparent":"",a=e?.item?.overlayColor?{background:e?.item?.overlayColor,opacity:.7}:null;return(()=>{var i=z(),E=i.firstChild,g=E.firstChild;return i.className=`ltr-1kbnjow ${n} `,c(i,t),r(g,()=>e?.item?.content),r(i,(()=>{var d=w(()=>!!e?.item?.props?.overlay);return()=>d()?(()=>{var o=f();return o.$$click=()=>{e?.item?.closeEvent?.(),I(e?.item?.id)},o.className=`DialogHRMOverlay active  ${s}  `,h(_=>c(o,a,_)),o})():null})(),null),h(d=>c(g,l,d)),i})()},O=e=>{let t=[];m.map(s=>{t.push(s)}),t.push(e),document.getElementsByTagName("html")[0].classList.add("has-level-two");let n=document.getElementsByTagName("body")[0];n.style["overflow-y"]="hidden",p("dialogs",t),$(y())},I=e=>{let t=[],l=null;m.map(a=>{l=a.id===e,a.id===e&&a?.closeEvent&&a?.closeEvent?.()}),m.splice(l,1),document.getElementsByTagName("html")[0].classList.remove("has-level-two");let s=document.getElementsByTagName("body")[0];s.style["overflow-y"]=null,p("dialogs",t),$(y())};T(["click"]);export{I as CloseModal,O as OpenModal,L as default,m as dialogList,N as dialogObs,p as setDialogList,$ as setDialogObs};
