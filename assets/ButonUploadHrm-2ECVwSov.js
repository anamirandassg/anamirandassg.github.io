import{a as d,i as f,d as g,f as p,t as v,j as h,e as F,S as y,s as C}from"./index-iC7Xub7Q.js";/* empty css                 */import I from"./SVG-ZQnsUnAA.js";function S({multiple:e=!1,accept:n=""}){const i=document.createElement("input");return i.type="file",i.accept=n,i.multiple=e,i}function j(e){const n=[];if(!e)return n;for(const i in e){const o=+i;if(isNaN(+o))continue;const l=e[o];if(!l)continue;const m={source:URL.createObjectURL(l),name:l.name,size:l.size,file:l};n.push(m)}return n}function E(e){const[n,i]=d([]);let o=()=>{};const l=async t=>{t.preventDefault(),t.stopPropagation();const r=t.currentTarget;let s=[];r.files&&(s=j(r.files)),r.removeEventListener("change",l),r.remove(),i(s);try{await o(s)}catch(u){console.error(u)}};return{files:n,selectFiles:t=>{t&&(o=t);const r=S(e||{});r.addEventListener("change",l),r.click()},removeFile:t=>{i(r=>r.filter(s=>s.name!==t))},clearFiles:()=>{i([])}}}var $=v('<div class=" jaqJnq_hrm1"><div class="gHAsFI_hrm1 dqn9fN jUrKkb upl"><h5></h5><div id=fileupload>');function A(e){const[n,i]=d(!1);let o={};if(e?.color){let{r:c,g:a,b:t}=L(e.color),r="rgba("+[c,a,t].join(",")+", 0.17 )",s="rgba("+[c,a,t].join(",")+", 0.21 )",u="rgba("+[c,a,t].join(",")+", 0.42 )";o={"--btn_bg_hrm2":r,"--btn_bg_hover_hrm2":s,"--btn_text_hrm2":e?.color,"--btn_border_hrm2":n()?e?.color:"transparent","--border-radius-8":"8px"},n()&&(o={"--btn_bg_hrm2":r,"--btn_bg_hover_hrm2":u,"--btn_text_hrm2":e?.color,"--btn_border_hrm2":e?.color,"--border-radius-8":"8px"})}const{files:l,selectFiles:m}=E({accept:"image/*"});return(()=>{var c=$(),a=c.firstChild,t=a.firstChild,r=t.nextSibling;return f(a,g(y,{get when(){return e?.icon},get children(){return g(I,{get name(){return e?.icon}})}}),t),f(t,()=>e.label),r.$$click=()=>{m(([{source:s,name:u,size:b,file:_}])=>{e?.handleClick?.({source:s,name:u,size:b,file:_})})},p(s=>C(c,o,s)),c})()}const w={attributes:!0,characterData:!0},H=async(e,n,i,o)=>{const l=new MutationObserver(c=>{c.forEach(a=>{if(a?.type==="attributes"){let t=a?.attributeName?.toString()?.trim(),r=e.toString().trim();t===r&&n&&n(h(),e)}})}),m=i||document.querySelector("html");l.observe(m,w)},L=e=>{e=e.replace("#",""),e.length!==6&&(e=N(e));const n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16);return{r:n,g:i,b:o}};function N(e){return e.length===4&&(e=e.replace("#","")),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e}F(["click"]);export{A as default,L as hex2rgb,H as observeTagAttr};
