import{P as L,r as f}from"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import{f as v}from"./fontkit.es-BKe7DAJ7.js";import{i as P,t as i}from"./InitPrintServices-B3KIQnKW.js";import{OpenToast as B}from"./Toast-BUEQhYLI.js";import{g as C,a as _}from"./Util-D2YTzGDx.js";const I=o=>{let s=window?.DATAMatrix;return s?s({msg:o,dim:256,rct:0,pad:2,pal:["#000000","#ffffff"],vrb:1}):null},M=o=>{let r=o.cloneNode(!0).outerHTML,t=new Blob([r],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(t)},D=async(o,s)=>{const r=document.createElement("img");document.body.appendChild(r),r.onload=function(){const t=document.createElement("canvas");t.width=r.clientWidth,t.height=r.clientHeight,t.getContext("2d").drawImage(r,0,0);const w=t.toDataURL("image/png");document.body.removeChild(r),s(w)},r.src=o},W=o=>new Promise(async(s,r)=>{let t=I(o),e=t&&M(t);e&&D(e,async w=>{var d=await N(w,"image/png");let a=URL.createObjectURL(d);s(a)})}),N=async(o,s)=>{let t=await(await fetch(o)).blob();return t=t.slice(0,t.size,s),t},Y=o=>{window.navigator.clipboard.writeText(o),B({text:o+"  copiado",timeout:1500,id:C()})};function A(o){let s=new Blob([o],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(s)}const z=(o,s,r)=>{const t=s.widthOfTextAtSize(o,40),e=s.widthOfTextAtSize(o,10);return Math.floor(r/((t-e)/30))},q=async(o,s,r)=>{const t=await L.create();t.registerFontkit(v);const e=await P(t);let w=265;const d=o.map(async(a,u)=>{const n=t.addPage([426,284]),{height:b}=n.getSize();let l=b-34;const x=await fetch(a?.qr).then(c=>c.arrayBuffer()),m=await t.embedPng(x);n&&m&&n.drawImage(m,{x:10,y:b-220,width:150,height:150});let g=z(i(a?.state),e.roboto_bold,w);g>42&&(g=42,l=l-6);let y=i(a?.bulto).trim();const R=e.Lexend_700?.widthOfTextAtSize(i(y),40);if(r){a?.state&&n.drawText(i(a?.state),{x:5,y:l-6,size:g,font:e.roboto_bold,color:f(0,0,0)}),n.drawText(i(y),{x:18,y:b-270,size:40,font:e.GSansBold,color:f(0,0,0)});const c=await fetch(_("SSG-black.png")).then(T=>T.arrayBuffer()),h=await t.embedPng(c);n&&h&&n.drawImage(h,{x:210,y:b-232,width:190,height:190})}else{let c=z(i(a?.name),e.GSansItalic,w);var S=e.GSansItalic?.widthOfTextAtSize(i(a?.name),c);if(S>w&&(c=c-1,S=e.GSansItalic?.widthOfTextAtSize(i(a?.name),c)),c=300/S*21,c=c>25?25:c,n.drawText(i(a?.name),{x:10,y:l-0,size:c,font:e.GSansItalic,color:f(0,0,0)}),a?.state){const U=e.roboto_bold?.widthOfTextAtSize(i(a?.state),g);n.drawText(i(a?.state),{x:420-U,y:l-46,size:g,font:e.roboto_bold,color:f(0,0,0)}),l=l-c}let h=29;const T=e.Lexend_700?.widthOfTextAtSize(i(a?.phoneNumber),h);n.drawText(i(a?.phoneNumber),{x:400-T,y:l-70,size:h,font:e.Lexend_700,color:f(0,0,0)});const O=e.Lexend_700?.widthOfTextAtSize(i(a?.altPhoneNumber),h);n.drawText(i(a?.altPhoneNumber),{x:400-O,y:l-105,size:h,font:e.Lexend_700,color:f(0,0,0)}),n.drawText(i(y),{x:418-R,y:l-205,size:40,font:e.GSansBold,color:f(0,0,0)})}});await Promise.all(d);{const a=await t.save();return A(a)}},Q=async(o,s,r)=>{const t=await L.create();t.registerFontkit(v);const e=await P(t),w=o.map(async(d,a)=>{let u=2.795;const n=t.addPage([45*u,24*u]),{height:b}=n.getSize(),l=await fetch(d?.mtrx).then(p=>p.arrayBuffer()),x=await t.embedPng(l),m=await fetch(d?.mtrx2).then(p=>p.arrayBuffer()),g=await t.embedPng(m);n&&x&&n.drawImage(x,{x:0,y:b-32,width:30,height:30}),n.drawText(i(d?.lbl),{x:33,y:b-20,size:13,font:e.Lexend_700,color:f(0,0,0)}),n&&g&&n.drawImage(g,{x:0,y:b-66,width:30,height:30}),n.drawText(i(d?.lbl2),{x:33,y:b-56,size:13,font:e.Lexend_700,color:f(0,0,0)})});await Promise.all(w);{const d=await t.save();return A(d)}};export{q as S,Y as c,W as g,Q as l};
