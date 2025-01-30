import{P,f as B,r as l}from"./fontkit.es-CdiTDqf_.js";import{q as F}from"./qrcode-DHy8FFhS.js";import{i as v,t as n}from"./InitPrintServices-DU4P7h91.js";import{OpenToast as D}from"./Toast-CE13NV0_.js";import{a as I,e as U,O as T}from"./Util-BFTPhrO4.js";const G=s=>{let i=window?.DATAMatrix;return i?i({msg:s,dim:256,rct:0,pad:2,pal:["#000000","#ffffff"],vrb:1}):null},M=s=>{let d=s.cloneNode(!0).outerHTML,a=new Blob([d],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(a)},k=async(s,i)=>{const d=document.createElement("img");document.body.appendChild(d),d.onload=function(){const a=document.createElement("canvas");a.width=d.clientWidth,a.height=d.clientHeight,a.getContext("2d").drawImage(d,0,0);const b=a.toDataURL("image/png");document.body.removeChild(d),i(b)},d.src=s},Y=s=>new Promise(async(i,d)=>{let a=G(s),e=a&&M(a);e&&k(e,async b=>{var f=await q(b,"image/png");let t=URL.createObjectURL(f);i(t)})}),Z=s=>new F.QRCodeCanvas(s+"").toDataUrl(),q=async(s,i)=>{let a=await(await fetch(s)).blob();return a=a.slice(0,a.size,i),a},K=s=>{window.navigator.clipboard.writeText(s),D({text:s+"  copiado",timeout:1500,id:I()})};function A(s){let i=new Blob([s],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(i)}const C=(s,i,d)=>{const a=i.widthOfTextAtSize(s,40),e=i.widthOfTextAtSize(s,10);return Math.floor(d/((a-e)/30))},J=async(s,i,d)=>{const a=await P.create();a.registerFontkit(B);const e=await v(a);let b=265;const f=s.map(async(t,p)=>{const o=a.addPage([426,284]),{height:c}=o.getSize();let r=c-34;const z=await fetch(t?.qr).then(h=>h.arrayBuffer()),w=await a.embedPng(z);o&&w&&o.drawImage(w,{x:10,y:c-220,width:150,height:150});let x=C(n(t?.state),e.roboto_bold,b);x>42&&(x=42,r=r-6);let m=n(t?.bulto).trim();const S=e.Lexend_700?.widthOfTextAtSize(n(m),40);if(t?.isSSG){t?.state&&o.drawText(n(t?.state),{x:5,y:r-6,size:x,font:e.roboto_bold,color:l(0,0,0)}),o.drawText(n(m),{x:18,y:c-270,size:40,font:e.GSansBold,color:l(0,0,0)});const h=await fetch(U("SSG-black.png")).then(L=>L.arrayBuffer()),u=await a.embedPng(h);o&&u&&o.drawImage(u,{x:210,y:c-232,width:190,height:190});const _=e.Lexend_700?.widthOfTextAtSize("LBS: "+n(t?.lbss?.toFixed(2)),32);o.drawText("LBS: "+n(t?.lbss?.toFixed(2)),{x:418-_,y:r-8,size:32,font:e.Lexend_700,color:l(0,0,0)})}else{let h=C(n(t?.name),e.GSansItalic,b);var y=e.GSansItalic?.widthOfTextAtSize(n(t?.name),h);if(y>b&&(h=h-1,y=e.GSansItalic?.widthOfTextAtSize(n(t?.name),h)),h=300/y*21,h=h>25?25:h*1,o.drawText(n(t?.name),{x:10,y:r-0,size:h,font:e.GSansItalic,color:l(0,0,0)}),t?.state){const R=e.roboto_bold?.widthOfTextAtSize(n(t?.state),x);o.drawText(n(t?.state),{x:420-R,y:r-46,size:x,font:e.roboto_bold,color:l(0,0,0)}),r=r-h}let u=29;const _=e.Lexend_700?.widthOfTextAtSize(n(t?.phoneNumber),u);o.drawText(n(t?.phoneNumber),{x:400-_,y:r-70,size:u,font:e.Lexend_700,color:l(0,0,0)});const L=e.Lexend_700?.widthOfTextAtSize(n(t?.altPhoneNumber),u);o.drawText(n(t?.altPhoneNumber),{x:400-L,y:r-105,size:u,font:e.Lexend_700,color:l(0,0,0)});const N=e.Lexend_700?.widthOfTextAtSize("LBS: "+n(t?.lbss?.toFixed(2)),32);o.drawText("LBS: "+n(t?.lbss?.toFixed(2)),{x:418-N,y:r-155,size:32,font:e.Lexend_700,color:l(0,0,0)}),o.drawText(n(m),{x:418-S,y:r-205,size:40,font:e.GSansBold,color:l(0,0,0)})}});await Promise.all(f);{const t=await a.save();return A(t)}},V=async(s,i,d)=>{const a=await P.create();a.registerFontkit(B);const e=await v(a),b=s.map(async(f,t)=>{let p=2.795;const o=a.addPage([45*p,24*p]),{height:c}=o.getSize(),r=await fetch(f?.mtrx).then(g=>g.arrayBuffer()),z=await a.embedPng(r),w=await fetch(f?.mtrx2).then(g=>g.arrayBuffer()),x=await a.embedPng(w);o&&z&&o.drawImage(z,{x:0,y:c-32,width:30,height:30}),o.drawText(n(f?.lbl),{x:33,y:c-20,size:13,font:e.Lexend_700,color:l(0,0,0)}),o&&x&&o.drawImage(x,{x:0,y:c-66,width:30,height:30}),o.drawText(n(f?.lbl2),{x:33,y:c-56,size:13,font:e.Lexend_700,color:l(0,0,0)})});await Promise.all(b);{const f=await a.save();return A(f)}},X=async(s,i,d)=>{const a=await P.create();a.registerFontkit(B);const e=await v(a);let b=265;const f=s.map(async(t,p)=>{const o=a.addPage([426,284]),{height:c}=o.getSize();let r=c-34,z=C(n(t?.state),e.roboto_bold,b);z>42&&(z=42,r=r-6);let x=n(t?.bulto).trim();o.drawText("("+t?.currency+") $"+(n(t?.amount)*1).toFixed(2),{x:10,y:c-260,size:45,font:e.Lexend_700,color:l(0,0,0)});let g=C(n(t?.name),e.GSansItalic,b);var m=e.GSansItalic?.widthOfTextAtSize(n(t?.name),g);m>b&&(g=g-1,m=e.GSansItalic?.widthOfTextAtSize(n(t?.name),g)),g=300/m*21,g=g>25?25:g,o.drawText(n(t?.name),{x:10,y:r-0,size:g,font:e.GSansItalic,color:l(0,0,0)});let S=29;if(t?.state){let u="CID: "+t?.state;const _=e.roboto_bold?.widthOfTextAtSize(n(u),S);o.drawText(n(u),{x:410-_,y:r-46,size:S,font:e.roboto_bold,color:l(0,0,0)}),r=r-S}let y=29;const h=e.Lexend_700?.widthOfTextAtSize(n(t?.phoneNumber),y);o.drawText(n(t?.phoneNumber),{x:400-h,y:r-60,size:y,font:e.Lexend_700,color:l(0,0,0)}),o.drawText(n(x),{x:10,y:r-95,size:10,font:e.GSansBold,color:l(0,0,0)}),o.drawText(n(t?.rpto),{x:10,y:r-115,size:12,font:e.Lexend_700,color:l(0,0,0)}),o.drawText(n(t?.city),{x:10,y:r-135,size:15,font:e.roboto_bold,color:l(0,0,0)})});await Promise.all(f);{const t=await a.save();return A(t)}},O=(s,i)=>i?" "+s+" "+i:"",E=s=>`${O("Calle",s?.ybstreet)}${O("#",s?.ybstreetNo)}${O("E/",s?.ybbetwen1)}${O("y",s?.ybbetwen2)}`,tt=async(s,i,d)=>{const a=await P.create();a.registerFontkit(B);const e=await v(a);let b=50,f=0,t={0:[]};s.map(p=>{let o=12,c=i[p];o+=T(c?.customers).length*14,T(c?.customers).map(r=>{o+=T(c?.customers?.[r]?.bagsNumb).length*13}),o+=13,b+o>870&&(f+=1,t[f]||(b=50,t[f]=[])),b+=o,c.height=o,t[f].push(c)}),T(t).map((p,o)=>{const c=a.addPage(),{height:r,width:z}=c.getSize();let w=r-34;t[p].map(async(x,g)=>{w-x.height,g%2&&c?.drawRectangle({x:5,y:w-x.height+15,width:585,height:x.height,color:l(.895,.895,.895)});let m=E(x?.address)+", Rpto "+n(x?.rpto)+" |  "+n(x?.city)+"  |  "+n(x?.estate);c.drawText(""+m.toUpperCase(),{x:13,y:w,size:7,font:e.roboto_bold,color:l(0,0,0)}),w=w-12,T(x?.customers).map(S=>{let y=x?.customers[S],h="Recibe: "+S+" |  "+y?.phoneNumber+"  |  "+y?.name+":  ___________________";c.drawText("",{x:23,y:w,size:7.5,font:e.Lexend_700,color:l(0,0,0)}),e.Lexend_700?.widthOfTextAtSize(h,7.5),c.drawText(""+h,{x:23,y:w,size:8.5,font:e.Lexend_700,color:l(0,0,0)}),w=w-14,T(y?.bagsNumb).map(u=>{let _="HBLS: ";y?.bagsNumb?.[u]?.hbls.map(N=>{_+=N?.hbl+"; "});let L=_+"    Bolso: "+y?.bagsNumb?.[u]?.bagnumber;c.drawText(""+L,{x:29,y:w,size:8,font:e.roboto_bold,color:l(0,0,0)}),w=w-13})}),w=w-13})});{const p=await a.save();return A(p)}},et=async s=>{const i=await P.create();i.registerFontkit(B);const d=await v(i),a=s.map(async(b,f)=>{const t=i.addPage([142,71]),{height:p}=t.getSize();if(b?.qr)try{const o=await fetch(b?.qr).then(r=>r.arrayBuffer()),c=await i.embedPng(o);c&&t.drawImage(c,{x:5,y:p-45,width:35,height:35})}catch(o){console.log(o)}t.drawText(n(b?.lbl),{x:50,y:p-27,size:9,font:d.Lexend_700,color:l(0,0,0)}),t.drawText(n(b?.lbl2),{x:4,y:p-62,size:7,font:d.Lexend_700,color:l(0,0,0)})});await Promise.all(a);const e=await i.save();return A(e)};export{X as C,tt as P,J as S,Z as a,q as b,K as c,et as d,Y as g,V as l};
