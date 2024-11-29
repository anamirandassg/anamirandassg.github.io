import{P as O,r as l}from"./PDFButton-B_0lS8EG.js";import{f as N}from"./fontkit.es-BqrvdTa9.js";import{i as B,t as n}from"./InitPrintServices-DzdLVHm-.js";import{OpenToast as I}from"./Toast-puvEduR5.js";import{g as U,a as D,O as T}from"./Util-C77m685E.js";const F=s=>{let c=window?.DATAMatrix;return c?c({msg:s,dim:256,rct:0,pad:2,pal:["#000000","#ffffff"],vrb:1}):null},M=s=>{let w=s.cloneNode(!0).outerHTML,o=new Blob([w],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(o)},E=async(s,c)=>{const w=document.createElement("img");document.body.appendChild(w),w.onload=function(){const o=document.createElement("canvas");o.width=w.clientWidth,o.height=w.clientHeight,o.getContext("2d").drawImage(w,0,0);const g=o.toDataURL("image/png");document.body.removeChild(w),c(g)},w.src=s},q=s=>new Promise(async(c,w)=>{let o=F(s),t=o&&M(o);t&&E(t,async g=>{var f=await k(g,"image/png");let e=URL.createObjectURL(f);c(e)})}),k=async(s,c)=>{let o=await(await fetch(s)).blob();return o=o.slice(0,o.size,c),o},Q=s=>{window.navigator.clipboard.writeText(s),I({text:s+"  copiado",timeout:1500,id:U()})};function C(s){let c=new Blob([s],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(c)}const A=(s,c,w)=>{const o=c.widthOfTextAtSize(s,40),t=c.widthOfTextAtSize(s,10);return Math.floor(w/((o-t)/30))},K=async(s,c,w)=>{const o=await O.create();o.registerFontkit(N);const t=await B(o);let g=265;const f=s.map(async(e,m)=>{const a=o.addPage([426,284]),{height:i}=a.getSize();let r=i-34;const z=await fetch(e?.qr).then(h=>h.arrayBuffer()),d=await o.embedPng(z);a&&d&&a.drawImage(d,{x:10,y:i-220,width:150,height:150});let b=A(n(e?.state),t.roboto_bold,g);b>42&&(b=42,r=r-6);let y=n(e?.bulto).trim();const _=t.Lexend_700?.widthOfTextAtSize(n(y),40);if(e?.isSSG){e?.state&&a.drawText(n(e?.state),{x:5,y:r-6,size:b,font:t.roboto_bold,color:l(0,0,0)}),a.drawText(n(y),{x:18,y:i-270,size:40,font:t.GSansBold,color:l(0,0,0)});const h=await fetch(D("SSG-black.png")).then(S=>S.arrayBuffer()),u=await o.embedPng(h);a&&u&&a.drawImage(u,{x:210,y:i-232,width:190,height:190})}else{let h=A(n(e?.name),t.GSansItalic,g);var p=t.GSansItalic?.widthOfTextAtSize(n(e?.name),h);if(p>g&&(h=h-1,p=t.GSansItalic?.widthOfTextAtSize(n(e?.name),h)),h=300/p*21,h=h>25?25:h*1,a.drawText(n(e?.name),{x:10,y:r-0,size:h,font:t.GSansItalic,color:l(0,0,0)}),e?.state){const P=t.roboto_bold?.widthOfTextAtSize(n(e?.state),b);a.drawText(n(e?.state),{x:420-P,y:r-46,size:b,font:t.roboto_bold,color:l(0,0,0)}),r=r-h}let u=29;const S=t.Lexend_700?.widthOfTextAtSize(n(e?.phoneNumber),u);a.drawText(n(e?.phoneNumber),{x:400-S,y:r-70,size:u,font:t.Lexend_700,color:l(0,0,0)});const L=t.Lexend_700?.widthOfTextAtSize(n(e?.altPhoneNumber),u);a.drawText(n(e?.altPhoneNumber),{x:400-L,y:r-105,size:u,font:t.Lexend_700,color:l(0,0,0)}),a.drawText(n(y),{x:418-_,y:r-205,size:40,font:t.GSansBold,color:l(0,0,0)})}});await Promise.all(f);{const e=await o.save();return C(e)}},J=async(s,c,w)=>{const o=await O.create();o.registerFontkit(N);const t=await B(o),g=s.map(async(f,e)=>{let m=2.795;const a=o.addPage([45*m,24*m]),{height:i}=a.getSize(),r=await fetch(f?.mtrx).then(x=>x.arrayBuffer()),z=await o.embedPng(r),d=await fetch(f?.mtrx2).then(x=>x.arrayBuffer()),b=await o.embedPng(d);a&&z&&a.drawImage(z,{x:0,y:i-32,width:30,height:30}),a.drawText(n(f?.lbl),{x:33,y:i-20,size:13,font:t.Lexend_700,color:l(0,0,0)}),a&&b&&a.drawImage(b,{x:0,y:i-66,width:30,height:30}),a.drawText(n(f?.lbl2),{x:33,y:i-56,size:13,font:t.Lexend_700,color:l(0,0,0)})});await Promise.all(g);{const f=await o.save();return C(f)}},V=async(s,c,w)=>{const o=await O.create();o.registerFontkit(N);const t=await B(o);let g=265;const f=s.map(async(e,m)=>{const a=o.addPage([426,284]),{height:i}=a.getSize();let r=i-34,z=A(n(e?.state),t.roboto_bold,g);z>42&&(z=42,r=r-6);let b=n(e?.bulto).trim();a.drawText("$"+(n(e?.amount)*1).toFixed(2),{x:10,y:i-260,size:50,font:t.Lexend_700,color:l(0,0,0)});let x=A(n(e?.name),t.GSansItalic,g);var y=t.GSansItalic?.widthOfTextAtSize(n(e?.name),x);y>g&&(x=x-1,y=t.GSansItalic?.widthOfTextAtSize(n(e?.name),x)),x=300/y*21,x=x>25?25:x,a.drawText(n(e?.name),{x:10,y:r-0,size:x,font:t.GSansItalic,color:l(0,0,0)});let _=29;if(e?.state){let u="CID: "+e?.state;const S=t.roboto_bold?.widthOfTextAtSize(n(u),_);a.drawText(n(u),{x:410-S,y:r-46,size:_,font:t.roboto_bold,color:l(0,0,0)}),r=r-_}let p=29;const h=t.Lexend_700?.widthOfTextAtSize(n(e?.phoneNumber),p);a.drawText(n(e?.phoneNumber),{x:400-h,y:r-60,size:p,font:t.Lexend_700,color:l(0,0,0)}),a.drawText(n(b),{x:10,y:r-95,size:10,font:t.GSansBold,color:l(0,0,0)}),a.drawText(n(e?.rpto),{x:10,y:r-115,size:12,font:t.Lexend_700,color:l(0,0,0)}),a.drawText(n(e?.city),{x:10,y:r-135,size:15,font:t.roboto_bold,color:l(0,0,0)})});await Promise.all(f);{const e=await o.save();return C(e)}},v=(s,c)=>c?" "+s+" "+c:"",W=s=>`${v("Calle",s?.ybstreet)}${v("#",s?.ybstreetNo)}${v("E/",s?.ybbetwen1)}${v("y",s?.ybbetwen2)}`,X=async(s,c,w)=>{const o=await O.create();o.registerFontkit(N);const t=await B(o);let g=50,f=0,e={0:[]};s.map(m=>{let a=12,i=c[m];a+=T(i?.customers).length*14,T(i?.customers).map(r=>{a+=T(i?.customers?.[r]?.bagsNumb).length*13}),a+=13,g+a>870&&(f+=1,e[f]||(g=50,e[f]=[])),g+=a,i.height=a,e[f].push(i)}),console.log(e),T(e).map((m,a)=>{const i=o.addPage(),{height:r,width:z}=i.getSize();let d=r-34;e[m].map(async(b,x)=>{d-b.height,x%2&&i?.drawRectangle({x:5,y:d-b.height+15,width:585,height:b.height,color:l(.895,.895,.895)});let y=W(b?.address)+", Rpto "+n(b?.rpto)+" |  "+n(b?.city)+"  |  "+n(b?.estate);i.drawText(""+y.toUpperCase(),{x:13,y:d,size:7,font:t.roboto_bold,color:l(0,0,0)}),d=d-12,T(b?.customers).map(_=>{let p=b?.customers[_],h="Envia: "+p?.nameshipper,u="Recibe: "+_+" |  "+p?.phoneNumber+"  |  "+p?.name+":  ___________________";i.drawText(""+h,{x:23,y:d,size:7.5,font:t.Lexend_700,color:l(0,0,0)});var S=t.Lexend_700?.widthOfTextAtSize(u,7.5);i.drawText(""+u,{x:585-S,y:d,size:7.5,font:t.Lexend_700,color:l(0,0,0)}),d=d-14,T(p?.bagsNumb).map(L=>{let P=" "+p?.bagsNumb?.[L]?.bagnumber+";       HBLS: ";p?.bagsNumb?.[L]?.hbls.map(G=>{P+=G?.hbl+"; "});let R=" Bolso:"+P;i.drawText(""+R,{x:29,y:d,size:8,font:t.roboto_bold,color:l(0,0,0)}),d=d-13})}),d=d-13})});{const m=await o.save();return C(m)}};export{V as C,X as P,K as S,Q as c,q as g,J as l};
