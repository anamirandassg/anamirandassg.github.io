import{a as T,i as m,e as v,F as x,s,q as C,f as g,h as E,t as h}from"./index-DFgipc_K.js";var y=h("<div>"),w=h("<div><div class=ltr-hoe9xz><div class=ltr-1wao6ny>");const[u,f]=T([]),b=()=>(()=>{var e=y();return m(e,v(x,{get each(){return u()},children:(t,l)=>v(z,{item:t})})),e})(),z=e=>{let t={};e?.item?.props?.height&&(t.heigth=e?.item?.props?.height),e?.item?.props?.zIndex&&(t["z-index"]=e?.item?.props?.zIndex-1);let l={"z-index":e?.item?.props?.zIndex},r=e?.item?.overlayTransparent?" transparent":"",i=e?.item?.overlayTransparent?" overlayTransparent":"",c=e?.item?.overlayColor?{background:e?.item?.overlayColor,opacity:.7}:null;return(()=>{var a=w(),$=a.firstChild,d=$.firstChild;return a.className=`ltr-1kbnjow ${r} `,s(a,t),m(d,()=>e?.item?.content),m(a,(()=>{var o=C(()=>!!e?.item?.props?.overlay);return()=>o()?(()=>{var n=y();return n.$$click=()=>{e?.item?.closeEvent?.(),N(e?.item?.id)},n.className=`DialogHRMOverlay active  ${i}  `,g(_=>s(n,c,_)),n})():null})(),null),g(o=>s(d,l,o)),a})()},k=e=>{document.getElementsByTagName("html")[0].classList.add("has-level-two");let l=document.getElementsByTagName("body")[0];l.style["overflow-y"]="hidden",f([...u(),e])},N=e=>{document.getElementsByTagName("html")[0].classList.remove("has-level-two");let l=document.getElementsByTagName("body")[0];l.style["overflow-y"]=null,f(r=>r.filter((i,c)=>i.id!==e))};E(["click"]);export{N as CloseModal,k as OpenModal,b as default,u as dialogList,f as setDialogList};
