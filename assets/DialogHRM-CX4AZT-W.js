import{a as T,i as m,d as v,F as w,w as s,m as x,e as g,h as C,t as h}from"./index-MWcyRJ7Y.js";var y=h("<div>"),E=h("<div><div class=ltr-hoe9xz><div class=ltr-1wao6ny>");const[u,$]=T([]),b=()=>(()=>{var e=y();return m(e,v(w,{get each(){return u()},children:(t,l)=>v(z,{item:t})})),e})(),z=e=>{let t={};e?.item?.props?.height&&(t.heigth=e?.item?.props?.height),e?.item?.props?.zIndex&&(t["z-index"]=e?.item?.props?.zIndex-1);let l={"z-index":e?.item?.props?.zIndex},r=e?.item?.overlayTransparent?" transparent":"",i=e?.item?.overlayTransparent?" overlayTransparent":"",d=e?.item?.overlayColor?{background:e?.item?.overlayColor,opacity:.7}:null;return(()=>{var a=E(),f=a.firstChild,c=f.firstChild;return a.className=`ltr-1kbnjow ${r} `,s(a,t),m(c,()=>e?.item?.content),m(a,(()=>{var o=x(()=>!!e?.item?.props?.overlay);return()=>o()?(()=>{var n=y();return n.$$click=()=>{e?.item?.closeEvent?.(),N(e?.item?.id)},n.className=`DialogHRMOverlay active  ${i}  `,g(_=>s(n,d,_)),n})():null})(),null),g(o=>s(c,l,o)),a})()},k=e=>{document.getElementsByTagName("html")[0].classList.add("has-level-two");let l=document.getElementsByTagName("body")[0];l.style["overflow-y"]="hidden",$([...u(),e])},N=e=>{document.getElementsByTagName("html")[0].classList.remove("has-level-two");let l=document.getElementsByTagName("body")[0];l.style["overflow-y"]=null,$(r=>r.filter((i,d)=>i.id!==e))};C(["click"]);export{N as CloseModal,k as OpenModal,b as default,u as dialogList,$ as setDialogList};