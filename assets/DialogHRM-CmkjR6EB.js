import{a as T,i as m,d as v,F as x,s,k as C,e as g,h as E,t as h}from"./index-TdHlctG2.js";var y=h("<div>"),w=h("<div><div class=ltr-hoe9xz><div class=ltr-1wao6ny>");const[u,$]=T([]),M=()=>(()=>{var e=y();return m(e,v(x,{get each(){return u()},children:(t,l)=>v(z,{item:t})})),e})(),z=e=>{let t={};e?.item?.props?.height&&(t.heigth=e?.item?.props?.height),e?.item?.props?.zIndex&&(t["z-index"]=e?.item?.props?.zIndex-1);let l={"z-index":e?.item?.props?.zIndex},r=e?.item?.overlayTransparent?" transparent":"",i=e?.item?.overlayTransparent?" overlayTransparent":"",d=e?.item?.overlayColor?{background:e?.item?.overlayColor,opacity:.7}:null;return(()=>{var a=w(),f=a.firstChild,c=f.firstChild;return a.className=`ltr-1kbnjow ${r} `,s(a,t),m(c,()=>e?.item?.content),m(a,(()=>{var o=C(()=>!!e?.item?.props?.overlay);return()=>o()?(()=>{var n=y();return n.$$click=()=>{e?.item?.closeEvent?.(),N(e?.item?.id)},n.className=`DialogHRMOverlay active  ${i}  `,g(_=>s(n,d,_)),n})():null})(),null),g(o=>s(c,l,o)),a})()},b=e=>{document.getElementsByTagName("html")[0].classList.add("has-level-two");let l=document.getElementsByTagName("body")[0];l.style["overflow-y"]="hidden",$([...u(),e])},N=e=>{document.getElementsByTagName("html")[0].classList.remove("has-level-two");let l=document.getElementsByTagName("body")[0];l.style["overflow-y"]=null,$(r=>r.filter((i,d)=>i.id!==e))};E(["click"]);export{N as CloseModal,b as OpenModal,M as default,u as dialogList,$ as setDialogList};
