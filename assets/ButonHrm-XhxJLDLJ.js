import{a as f,h,i as m,d as g,f as w,t as v,m as y,e as C,S as I,s as S}from"./index-CSXd_khH.js";/* empty css                 */import $ from"./SVG-a6bMPYQU.js";import{g as j}from"./Util-DErZaF9J.js";import"./index-Ci0zXM0r.js";var k=v('<div class=" jaqJnq_hrm1"><button class="gHAsFI_hrm1 dqn9fN jUrKkb"type=button><h5>');function T(t){f(0);const[n,i]=f(!1),a=()=>{t?.handleClick?.()},b=e=>{i(e)};let s={};if(t?.color){let{r:e,g:r,b:o}=D(t.color),c="rgba("+[e,r,o].join(",")+", 0.17 )",u="rgba("+[e,r,o].join(",")+", 0.21 )",_="rgba("+[e,r,o].join(",")+", 0.42 )";s={"--btn_bg_hrm2":c,"--btn_bg_hover_hrm2":u,"--btn_text_hrm2":t?.color,"--btn_border_hrm2":n()?t?.color:"transparent","--border-radius-8":"8px"},n()&&(s={"--btn_bg_hrm2":c,"--btn_bg_hover_hrm2":_,"--btn_text_hrm2":t?.color,"--btn_border_hrm2":t?.color,"--border-radius-8":"8px"})}function d(){const[e,r]=f(!1);return y(()=>{r(typeof window<"u")}),e}const l=d();return h(()=>{l()&&A("obs-theme",b,null)}),(()=>{var e=k(),r=e.firstChild,o=r.firstChild;return r.$$click=a,m(r,g(I,{get when(){return t?.icon},get children(){return g($,{get name(){return t?.icon}})}}),o),m(o,()=>t.label),w(c=>S(e,s,c)),e})()}const q={attributes:!0,characterData:!0},A=async(t,n,i,a)=>{const b=new MutationObserver(d=>{d.forEach(l=>{if(l?.type==="attributes"){let e=l?.attributeName?.toString()?.trim(),r=t.toString().trim();e===r&&n&&n(j(),t)}})}),s=i||document.querySelector("html");b.observe(s,q)},D=t=>{t=t.replace("#",""),t.length!==6&&(t=E(t));const n=parseInt(t.slice(0,2),16),i=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);return{r:n,g:i,b:a}};function E(t){return t.length===4&&(t=t.replace("#","")),t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t}C(["click"]);export{T as default,D as hex2rgb,A as observeTagAttr};
