import{P,r as d}from"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import{f as v}from"./fontkit.es-BKe7DAJ7.js";import{i as _,t as a}from"./InitPrintServices-BbVI7Xg0.js";import{OpenToast as B}from"./Toast-DXw_AnMu.js";import{g as C,a as R}from"./Util-D886uaAp.js";const G=r=>{let c=window?.DATAMatrix;return c?c({msg:r,dim:256,rct:0,pad:2,pal:["#000000","#ffffff"],vrb:1}):null},U=r=>{let i=r.cloneNode(!0).outerHTML,o=new Blob([i],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(o)},D=async(r,c)=>{const i=document.createElement("img");document.body.appendChild(i),i.onload=function(){const o=document.createElement("canvas");o.width=i.clientWidth,o.height=i.clientHeight,o.getContext("2d").drawImage(i,0,0);const b=o.toDataURL("image/png");document.body.removeChild(i),c(b)},i.src=r},Y=r=>new Promise(async(c,i)=>{let o=G(r),t=o&&U(o);t&&D(t,async b=>{var f=await N(b,"image/png");let e=URL.createObjectURL(f);c(e)})}),N=async(r,c)=>{let o=await(await fetch(r)).blob();return o=o.slice(0,o.size,c),o},H=r=>{window.navigator.clipboard.writeText(r),B({text:r+"  copiado",timeout:1500,id:C()})};function A(r){let c=new Blob([r],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(c)}const L=(r,c,i)=>{const o=c.widthOfTextAtSize(r,40),t=c.widthOfTextAtSize(r,10);return Math.floor(i/((o-t)/30))},Z=async(r,c,i)=>{const o=await P.create();o.registerFontkit(v);const t=await _(o);let b=265;const f=r.map(async(e,S)=>{const n=o.addPage([426,284]),{height:x}=n.getSize();let s=x-34;const p=await fetch(e?.qr).then(l=>l.arrayBuffer()),y=await o.embedPng(p);n&&y&&n.drawImage(y,{x:10,y:x-220,width:150,height:150});let g=L(a(e?.state),t.roboto_bold,b);g>42&&(g=42,s=s-6);let u=a(e?.bulto).trim();const z=t.Lexend_700?.widthOfTextAtSize(a(u),40);if(i){e?.state&&n.drawText(a(e?.state),{x:5,y:s-6,size:g,font:t.roboto_bold,color:d(0,0,0)}),n.drawText(a(u),{x:18,y:x-270,size:40,font:t.GSansBold,color:d(0,0,0)});const l=await fetch(R("SSG-black.png")).then(T=>T.arrayBuffer()),h=await o.embedPng(l);n&&h&&n.drawImage(h,{x:210,y:x-232,width:190,height:190})}else{let l=L(a(e?.name),t.GSansItalic,b);var m=t.GSansItalic?.widthOfTextAtSize(a(e?.name),l);if(m>b&&(l=l-1,m=t.GSansItalic?.widthOfTextAtSize(a(e?.name),l)),l=300/m*21,l=l>25?25:l,n.drawText(a(e?.name),{x:10,y:s-0,size:l,font:t.GSansItalic,color:d(0,0,0)}),e?.state){const I=t.roboto_bold?.widthOfTextAtSize(a(e?.state),g);n.drawText(a(e?.state),{x:420-I,y:s-46,size:g,font:t.roboto_bold,color:d(0,0,0)}),s=s-l}let h=29;const T=t.Lexend_700?.widthOfTextAtSize(a(e?.phoneNumber),h);n.drawText(a(e?.phoneNumber),{x:400-T,y:s-70,size:h,font:t.Lexend_700,color:d(0,0,0)});const O=t.Lexend_700?.widthOfTextAtSize(a(e?.altPhoneNumber),h);n.drawText(a(e?.altPhoneNumber),{x:400-O,y:s-105,size:h,font:t.Lexend_700,color:d(0,0,0)}),n.drawText(a(u),{x:418-z,y:s-205,size:40,font:t.GSansBold,color:d(0,0,0)})}});await Promise.all(f);{const e=await o.save();return A(e)}},q=async(r,c,i)=>{const o=await P.create();o.registerFontkit(v);const t=await _(o),b=r.map(async(f,e)=>{let S=2.795;const n=o.addPage([45*S,24*S]),{height:x}=n.getSize(),s=await fetch(f?.mtrx).then(w=>w.arrayBuffer()),p=await o.embedPng(s),y=await fetch(f?.mtrx2).then(w=>w.arrayBuffer()),g=await o.embedPng(y);n&&p&&n.drawImage(p,{x:0,y:x-32,width:30,height:30}),n.drawText(a(f?.lbl),{x:33,y:x-20,size:13,font:t.Lexend_700,color:d(0,0,0)}),n&&g&&n.drawImage(g,{x:0,y:x-66,width:30,height:30}),n.drawText(a(f?.lbl2),{x:33,y:x-56,size:13,font:t.Lexend_700,color:d(0,0,0)})});await Promise.all(b);{const f=await o.save();return A(f)}},Q=async(r,c,i)=>{const o=await P.create();o.registerFontkit(v);const t=await _(o);let b=265;const f=r.map(async(e,S)=>{const n=o.addPage([426,284]),{height:x}=n.getSize();let s=x-34,p=L(a(e?.state),t.roboto_bold,b);p>42&&(p=42,s=s-6);let g=a(e?.bulto).trim();n.drawText("$"+(a(e?.amount)*1).toFixed(2),{x:10,y:x-260,size:50,font:t.Lexend_700,color:d(0,0,0)});let w=L(a(e?.name),t.GSansItalic,b);var u=t.GSansItalic?.widthOfTextAtSize(a(e?.name),w);u>b&&(w=w-1,u=t.GSansItalic?.widthOfTextAtSize(a(e?.name),w)),w=300/u*21,w=w>25?25:w,n.drawText(a(e?.name),{x:10,y:s-0,size:w,font:t.GSansItalic,color:d(0,0,0)});let z=29;if(e?.state){let h="CID: "+e?.state;const T=t.roboto_bold?.widthOfTextAtSize(a(h),z);n.drawText(a(h),{x:410-T,y:s-46,size:z,font:t.roboto_bold,color:d(0,0,0)}),s=s-z}let m=29;const l=t.Lexend_700?.widthOfTextAtSize(a(e?.phoneNumber),m);n.drawText(a(e?.phoneNumber),{x:400-l,y:s-60,size:m,font:t.Lexend_700,color:d(0,0,0)}),n.drawText(a(g),{x:10,y:s-95,size:10,font:t.GSansBold,color:d(0,0,0)}),n.drawText(a(e?.rpto),{x:10,y:s-115,size:12,font:t.Lexend_700,color:d(0,0,0)}),n.drawText(a(e?.city),{x:10,y:s-135,size:15,font:t.roboto_bold,color:d(0,0,0)})});await Promise.all(f);{const e=await o.save();return A(e)}};export{Q as C,Z as S,H as c,Y as g,q as l};
