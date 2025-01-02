import{P as L,r as l}from"./PDFButton-CCQT0yk3.js";import{q as R}from"./qrcode-DHy8FFhS.js";import{f as P}from"./fontkit.es-BaZy4qZc.js";import{i as v,t as n}from"./InitPrintServices-COQVt4ve.js";import{OpenToast as D}from"./Toast-BAZ9l--3.js";import{b as I,d as U,O as T}from"./Util-C4Gv2Rs-.js";const G=s=>{let r=window?.DATAMatrix;return r?r({msg:s,dim:256,rct:0,pad:2,pal:["#000000","#ffffff"],vrb:1}):null},F=s=>{let d=s.cloneNode(!0).outerHTML,o=new Blob([d],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(o)},M=async(s,r)=>{const d=document.createElement("img");document.body.appendChild(d),d.onload=function(){const o=document.createElement("canvas");o.width=d.clientWidth,o.height=d.clientHeight,o.getContext("2d").drawImage(d,0,0);const b=o.toDataURL("image/png");document.body.removeChild(d),r(b)},d.src=s},Y=s=>new Promise(async(r,d)=>{let o=G(s),e=o&&F(o);e&&M(e,async b=>{var f=await k(b,"image/png");let t=URL.createObjectURL(f);r(t)})}),Z=s=>new R.QRCodeCanvas(s+"").toDataUrl(),k=async(s,r)=>{let o=await(await fetch(s)).blob();return o=o.slice(0,o.size,r),o},K=s=>{window.navigator.clipboard.writeText(s),D({text:s+"  copiado",timeout:1500,id:I()})};function A(s){let r=new Blob([s],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(r)}const B=(s,r,d)=>{const o=r.widthOfTextAtSize(s,40),e=r.widthOfTextAtSize(s,10);return Math.floor(d/((o-e)/30))},J=async(s,r,d)=>{const o=await L.create();o.registerFontkit(P);const e=await v(o);let b=265;const f=s.map(async(t,p)=>{const a=o.addPage([426,284]),{height:i}=a.getSize();let c=i-34;const z=await fetch(t?.qr).then(h=>h.arrayBuffer()),w=await o.embedPng(z);a&&w&&a.drawImage(w,{x:10,y:i-220,width:150,height:150});let g=B(n(t?.state),e.roboto_bold,b);g>42&&(g=42,c=c-6);let m=n(t?.bulto).trim();const _=e.Lexend_700?.widthOfTextAtSize(n(m),40);if(t?.isSSG){t?.state&&a.drawText(n(t?.state),{x:5,y:c-6,size:g,font:e.roboto_bold,color:l(0,0,0)}),a.drawText(n(m),{x:18,y:i-270,size:40,font:e.GSansBold,color:l(0,0,0)});const h=await fetch(U("SSG-black.png")).then(S=>S.arrayBuffer()),u=await o.embedPng(h);a&&u&&a.drawImage(u,{x:210,y:i-232,width:190,height:190})}else{let h=B(n(t?.name),e.GSansItalic,b);var y=e.GSansItalic?.widthOfTextAtSize(n(t?.name),h);if(y>b&&(h=h-1,y=e.GSansItalic?.widthOfTextAtSize(n(t?.name),h)),h=300/y*21,h=h>25?25:h*1,a.drawText(n(t?.name),{x:10,y:c-0,size:h,font:e.GSansItalic,color:l(0,0,0)}),t?.state){const N=e.roboto_bold?.widthOfTextAtSize(n(t?.state),g);a.drawText(n(t?.state),{x:420-N,y:c-46,size:g,font:e.roboto_bold,color:l(0,0,0)}),c=c-h}let u=29;const S=e.Lexend_700?.widthOfTextAtSize(n(t?.phoneNumber),u);a.drawText(n(t?.phoneNumber),{x:400-S,y:c-70,size:u,font:e.Lexend_700,color:l(0,0,0)});const O=e.Lexend_700?.widthOfTextAtSize(n(t?.altPhoneNumber),u);a.drawText(n(t?.altPhoneNumber),{x:400-O,y:c-105,size:u,font:e.Lexend_700,color:l(0,0,0)}),a.drawText(n(m),{x:418-_,y:c-205,size:40,font:e.GSansBold,color:l(0,0,0)})}});await Promise.all(f);{const t=await o.save();return A(t)}},V=async(s,r,d)=>{const o=await L.create();o.registerFontkit(P);const e=await v(o),b=s.map(async(f,t)=>{let p=2.795;const a=o.addPage([45*p,24*p]),{height:i}=a.getSize(),c=await fetch(f?.mtrx).then(x=>x.arrayBuffer()),z=await o.embedPng(c),w=await fetch(f?.mtrx2).then(x=>x.arrayBuffer()),g=await o.embedPng(w);a&&z&&a.drawImage(z,{x:0,y:i-32,width:30,height:30}),a.drawText(n(f?.lbl),{x:33,y:i-20,size:13,font:e.Lexend_700,color:l(0,0,0)}),a&&g&&a.drawImage(g,{x:0,y:i-66,width:30,height:30}),a.drawText(n(f?.lbl2),{x:33,y:i-56,size:13,font:e.Lexend_700,color:l(0,0,0)})});await Promise.all(b);{const f=await o.save();return A(f)}},X=async(s,r,d)=>{const o=await L.create();o.registerFontkit(P);const e=await v(o);let b=265;const f=s.map(async(t,p)=>{const a=o.addPage([426,284]),{height:i}=a.getSize();let c=i-34,z=B(n(t?.state),e.roboto_bold,b);z>42&&(z=42,c=c-6);let g=n(t?.bulto).trim();a.drawText("("+t?.currency+") $"+(n(t?.amount)*1).toFixed(2),{x:10,y:i-260,size:45,font:e.Lexend_700,color:l(0,0,0)});let x=B(n(t?.name),e.GSansItalic,b);var m=e.GSansItalic?.widthOfTextAtSize(n(t?.name),x);m>b&&(x=x-1,m=e.GSansItalic?.widthOfTextAtSize(n(t?.name),x)),x=300/m*21,x=x>25?25:x,a.drawText(n(t?.name),{x:10,y:c-0,size:x,font:e.GSansItalic,color:l(0,0,0)});let _=29;if(t?.state){let u="CID: "+t?.state;const S=e.roboto_bold?.widthOfTextAtSize(n(u),_);a.drawText(n(u),{x:410-S,y:c-46,size:_,font:e.roboto_bold,color:l(0,0,0)}),c=c-_}let y=29;const h=e.Lexend_700?.widthOfTextAtSize(n(t?.phoneNumber),y);a.drawText(n(t?.phoneNumber),{x:400-h,y:c-60,size:y,font:e.Lexend_700,color:l(0,0,0)}),a.drawText(n(g),{x:10,y:c-95,size:10,font:e.GSansBold,color:l(0,0,0)}),a.drawText(n(t?.rpto),{x:10,y:c-115,size:12,font:e.Lexend_700,color:l(0,0,0)}),a.drawText(n(t?.city),{x:10,y:c-135,size:15,font:e.roboto_bold,color:l(0,0,0)})});await Promise.all(f);{const t=await o.save();return A(t)}},C=(s,r)=>r?" "+s+" "+r:"",q=s=>`${C("Calle",s?.ybstreet)}${C("#",s?.ybstreetNo)}${C("E/",s?.ybbetwen1)}${C("y",s?.ybbetwen2)}`,tt=async(s,r,d)=>{const o=await L.create();o.registerFontkit(P);const e=await v(o);let b=50,f=0,t={0:[]};s.map(p=>{let a=12,i=r[p];a+=T(i?.customers).length*14,T(i?.customers).map(c=>{a+=T(i?.customers?.[c]?.bagsNumb).length*13}),a+=13,b+a>870&&(f+=1,t[f]||(b=50,t[f]=[])),b+=a,i.height=a,t[f].push(i)}),T(t).map((p,a)=>{const i=o.addPage(),{height:c,width:z}=i.getSize();let w=c-34;t[p].map(async(g,x)=>{w-g.height,x%2&&i?.drawRectangle({x:5,y:w-g.height+15,width:585,height:g.height,color:l(.895,.895,.895)});let m=q(g?.address)+", Rpto "+n(g?.rpto)+" |  "+n(g?.city)+"  |  "+n(g?.estate);i.drawText(""+m.toUpperCase(),{x:13,y:w,size:7,font:e.roboto_bold,color:l(0,0,0)}),w=w-12,T(g?.customers).map(_=>{let y=g?.customers[_],h="Recibe: "+_+" |  "+y?.phoneNumber+"  |  "+y?.name+":  ___________________";i.drawText("",{x:23,y:w,size:7.5,font:e.Lexend_700,color:l(0,0,0)}),e.Lexend_700?.widthOfTextAtSize(h,7.5),i.drawText(""+h,{x:23,y:w,size:8.5,font:e.Lexend_700,color:l(0,0,0)}),w=w-14,T(y?.bagsNumb).map(u=>{let S="HBLS: ";y?.bagsNumb?.[u]?.hbls.map(N=>{S+=N?.hbl+"; "});let O=S+"    Bolso: "+y?.bagsNumb?.[u]?.bagnumber;i.drawText(""+O,{x:29,y:w,size:8,font:e.roboto_bold,color:l(0,0,0)}),w=w-13})}),w=w-13})});{const p=await o.save();return A(p)}},et=async s=>{const r=await L.create();r.registerFontkit(P);const d=await v(r),o=s.map(async(b,f)=>{const t=r.addPage([142,71]),{height:p}=t.getSize();if(b?.qr)try{const a=await fetch(b?.qr).then(c=>c.arrayBuffer()),i=await r.embedPng(a);i&&t.drawImage(i,{x:5,y:p-45,width:35,height:35})}catch(a){console.log(a)}t.drawText(n(b?.lbl),{x:50,y:p-27,size:9,font:d.Lexend_700,color:l(0,0,0)}),t.drawText(n(b?.lbl2),{x:4,y:p-62,size:7,font:d.Lexend_700,color:l(0,0,0)})});await Promise.all(o);const e=await r.save();return A(e)};export{X as C,tt as P,J as S,Z as a,k as b,K as c,et as d,Y as g,V as l};
