import{a as b,i as u,e as g,S as p,f as h,s as v,t as F,h as y}from"./index-4u7VqULW.js";/* empty css                 */import C from"./SVG-BF2-O9ce.js";import{a as I}from"./Util-Lhm05d-h.js";function S({multiple:e=!1,accept:n=""}){const i=document.createElement("input");return i.type="file",i.accept=n,i.multiple=e,i}function E(e){const n=[];if(!e)return n;for(const i in e){const o=+i;if(isNaN(+o))continue;const l=e[o];if(!l)continue;const m={source:URL.createObjectURL(l),name:l.name,size:l.size,file:l};n.push(m)}return n}function $(e){const[n,i]=b([]);let o=()=>{};const l=async t=>{t.preventDefault(),t.stopPropagation();const r=t.currentTarget;let s=[];r.files&&(s=E(r.files)),r.removeEventListener("change",l),r.remove(),i(s);try{await o(s)}catch(f){console.error(f)}};return{files:n,selectFiles:t=>{t&&(o=t);const r=S(e||{});r.addEventListener("change",l),r.click()},removeFile:t=>{i(r=>r.filter(s=>s.name!==t))},clearFiles:()=>{i([])}}}var j=F('<div class=" jaqJnq_hrm1"><div class="gHAsFI_hrm1 dqn9fN jUrKkb upl"><h5></h5><div id=fileupload>');function H(e){const[n,i]=b(!1);let o={};if(e?.color){let{r:c,g:a,b:t}=L(e.color),r="rgba("+[c,a,t].join(",")+", 0.17 )",s="rgba("+[c,a,t].join(",")+", 0.21 )",f="rgba("+[c,a,t].join(",")+", 0.42 )";o={"--btn_bg_hrm2":r,"--btn_bg_hover_hrm2":s,"--btn_text_hrm2":e?.color,"--btn_border_hrm2":n()?e?.color:"transparent","--border-radius-8":"8px"},n()&&(o={"--btn_bg_hrm2":r,"--btn_bg_hover_hrm2":f,"--btn_text_hrm2":e?.color,"--btn_border_hrm2":e?.color,"--border-radius-8":"8px"})}const{files:l,selectFiles:m}=$({accept:"image/*"});return(()=>{var c=j(),a=c.firstChild,t=a.firstChild,r=t.nextSibling;return u(a,g(p,{get when(){return e?.icon},get children(){return g(C,{get name(){return e?.icon}})}}),t),u(t,()=>e.label),r.$$click=()=>{m(([{source:s,name:f,size:d,file:_}])=>{e?.handleClick?.({source:s,name:f,size:d,file:_})})},h(s=>v(c,o,s)),c})()}const w={attributes:!0,characterData:!0},R=async(e,n,i,o)=>{const l=new MutationObserver(c=>{c.forEach(a=>{if(a?.type==="attributes"){let t=a?.attributeName?.toString()?.trim(),r=e.toString().trim();t===r&&n&&n(I(),e)}})}),m=i||document.querySelector("html");l.observe(m,w)},L=e=>{e=e.replace("#",""),e.length!==6&&(e=N(e));const n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16);return{r:n,g:i,b:o}};function N(e){return e.length===4&&(e=e.replace("#","")),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e}y(["click"]);export{H as default,L as hex2rgb,R as observeTagAttr};
