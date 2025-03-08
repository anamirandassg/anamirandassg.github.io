import{P,f as B,r as l}from"./fontkit.es-CKP7Eug6.js";import{q as R}from"./qrcode-DHy8FFhS.js";import{i as v,t as n}from"./InitPrintServices-DFq0sOo3.js";import{OpenToast as F}from"./Toast-DuUkGCmm.js";import{a as D,e as G,O as T}from"./Util-DVoBpjwO.js";const I=s=>{let i=window?.DATAMatrix;return i?i({msg:s,dim:256,rct:0,pad:2,pal:["#000000","#ffffff"],vrb:1}):null},U=s=>{let d=s.cloneNode(!0).outerHTML,a=new Blob([d],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(a)},M=async(s,i)=>{const d=document.createElement("img");document.body.appendChild(d),d.onload=function(){const a=document.createElement("canvas");a.width=d.clientWidth,a.height=d.clientHeight,a.getContext("2d").drawImage(d,0,0);const b=a.toDataURL("image/png");document.body.removeChild(d),i(b)},d.src=s},H=s=>new Promise(async(i,d)=>{let a=I(s),e=a&&U(a);e&&M(e,async b=>{var h=await k(b,"image/png");let t=URL.createObjectURL(h);i(t)})}),Y=s=>new R.QRCodeCanvas(s+"").toDataUrl(),k=async(s,i)=>{let a=await(await fetch(s)).blob();return a=a.slice(0,a.size,i),a},Z=s=>{window.navigator.clipboard.writeText(s),F({text:s+"  copiado",timeout:1500,id:D()})};function A(s){let i=new Blob([s],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(i)}const C=(s,i,d)=>{const a=i.widthOfTextAtSize(s,40),e=i.widthOfTextAtSize(s,10);return Math.floor(d/((a-e)/30))},K=async(s,i,d)=>{const a=await P.create();a.registerFontkit(B);const e=await v(a);let b=265;const h=s.map(async(t,p)=>{const o=a.addPage([426,284]),{height:c}=o.getSize();let r=c-34;const S=await fetch(t?.qr).then(f=>f.arrayBuffer()),w=await a.embedPng(S);o&&w&&o.drawImage(w,{x:10,y:c-220,width:150,height:150});let x=C(n(t?.state),e.roboto_bold,b);x>42&&(x=42,r=r-6);let z=n(t?.bulto).trim();const _=e.Lexend_700?.widthOfTextAtSize(n(z),33);if(t?.isSSG){t?.state&&o.drawText(n(t?.state),{x:5,y:r-6,size:x,font:e.roboto_bold,color:l(0,0,0)}),o.drawText(n(z),{x:18,y:c-270,size:40,font:e.GSansBold,color:l(0,0,0)});const f=await fetch(G("SSG-black.png")).then(m=>m.arrayBuffer()),u=await a.embedPng(f);if(o&&u&&o.drawImage(u,{x:210,y:c-232,width:190,height:190}),t?.lbss){const m=e.Lexend_700?.widthOfTextAtSize("LBS: "+n(t?.lbss?.toFixed(2)),32);o.drawText("LBS: "+n(t?.lbss?.toFixed(2)),{x:418-m,y:r-8,size:32,font:e.Lexend_700,color:l(0,0,0)})}}else{let f=C(n(t?.name),e.GSansItalic,b);var y=e.GSansItalic?.widthOfTextAtSize(n(t?.name),f);if(y>b&&(f=f-1,y=e.GSansItalic?.widthOfTextAtSize(n(t?.name),f)),f=300/y*21,f=f>25?25:f*1,o.drawText(n(t?.name),{x:10,y:r-0,size:f,font:e.GSansItalic,color:l(0,0,0)}),t?.state){const L=e.roboto_bold?.widthOfTextAtSize(n(t?.state),x);o.drawText(n(t?.state),{x:420-L,y:r-46,size:x,font:e.roboto_bold,color:l(0,0,0)}),r=r-f}let u=29;const m=e.Lexend_700?.widthOfTextAtSize(n(t?.phoneNumber),u);o.drawText(n(t?.phoneNumber),{x:400-m,y:r-70,size:u,font:e.Lexend_700,color:l(0,0,0)});const N=e.Lexend_700?.widthOfTextAtSize(n(t?.altPhoneNumber),u);if(o.drawText(n(t?.altPhoneNumber),{x:400-N,y:r-105,size:u,font:e.Lexend_700,color:l(0,0,0)}),t?.lbss){const L=e.Lexend_700?.widthOfTextAtSize("LBS: "+n(t?.lbss?.toFixed(2)),32);o.drawText("LBS: "+n(t?.lbss?.toFixed(2)),{x:418-L,y:r-155,size:32,font:e.Lexend_700,color:l(0,0,0)})}o.drawText(n(z),{x:418-_,y:r-165,size:33,font:e.GSansBold,color:l(0,0,0)}),o.drawText(n(t?.street),{x:18,y:r-205,size:9,font:e.GSansBold,color:l(0,0,0)})}});await Promise.all(h);{const t=await a.save();return A(t)}},J=async(s,i,d)=>{const a=await P.create();a.registerFontkit(B);const e=await v(a),b=s.map(async(h,t)=>{let p=2.795;const o=a.addPage([45*p,24*p]),{height:c}=o.getSize(),r=await fetch(h?.mtrx).then(g=>g.arrayBuffer()),S=await a.embedPng(r),w=await fetch(h?.mtrx2).then(g=>g.arrayBuffer()),x=await a.embedPng(w);o&&S&&o.drawImage(S,{x:0,y:c-32,width:30,height:30}),o.drawText(n(h?.lbl),{x:33,y:c-20,size:13,font:e.Lexend_700,color:l(0,0,0)}),o&&x&&o.drawImage(x,{x:0,y:c-66,width:30,height:30}),o.drawText(n(h?.lbl2),{x:33,y:c-56,size:13,font:e.Lexend_700,color:l(0,0,0)})});await Promise.all(b);{const h=await a.save();return A(h)}},V=async(s,i,d)=>{const a=await P.create();a.registerFontkit(B);const e=await v(a);let b=265;const h=s.map(async(t,p)=>{const o=a.addPage([426,284]),{height:c}=o.getSize();let r=c-34,S=C(n(t?.state),e.roboto_bold,b);S>42&&(S=42,r=r-6);let x=n(t?.bulto).trim();o.drawText("("+t?.currency+") $"+(n(t?.amount)*1).toFixed(2),{x:10,y:c-260,size:45,font:e.Lexend_700,color:l(0,0,0)});let g=C(n(t?.name),e.GSansItalic,b);var z=e.GSansItalic?.widthOfTextAtSize(n(t?.name),g);z>b&&(g=g-1,z=e.GSansItalic?.widthOfTextAtSize(n(t?.name),g)),g=300/z*21,g=g>25?25:g,o.drawText(n(t?.name),{x:10,y:r-0,size:g,font:e.GSansItalic,color:l(0,0,0)});let _=29;if(t?.state){let u="CID: "+t?.state;const m=e.roboto_bold?.widthOfTextAtSize(n(u),_);o.drawText(n(u),{x:410-m,y:r-46,size:_,font:e.roboto_bold,color:l(0,0,0)}),r=r-_}let y=29;const f=e.Lexend_700?.widthOfTextAtSize(n(t?.phoneNumber),y);o.drawText(n(t?.phoneNumber),{x:400-f,y:r-60,size:y,font:e.Lexend_700,color:l(0,0,0)}),o.drawText(n(x),{x:10,y:r-95,size:10,font:e.GSansBold,color:l(0,0,0)}),o.drawText(n(t?.rpto),{x:10,y:r-115,size:12,font:e.Lexend_700,color:l(0,0,0)}),o.drawText(n(t?.city),{x:10,y:r-135,size:15,font:e.roboto_bold,color:l(0,0,0)})});await Promise.all(h);{const t=await a.save();return A(t)}},O=(s,i)=>i?" "+s+" "+i:"",q=s=>`${O("Calle",s?.ybstreet)}${O("#",s?.ybstreetNo)}${O("E/",s?.ybbetwen1)}${O("y",s?.ybbetwen2)}`,X=async(s,i,d)=>{const a=await P.create();a.registerFontkit(B);const e=await v(a);let b=50,h=0,t={0:[]};s.map(p=>{let o=12,c=i[p];o+=T(c?.customers).length*14,T(c?.customers).map(r=>{o+=T(c?.customers?.[r]?.bagsNumb).length*13}),o+=13,b+o>870&&(h+=1,t[h]||(b=50,t[h]=[])),b+=o,c.height=o,t[h].push(c)}),T(t).map((p,o)=>{const c=a.addPage(),{height:r,width:S}=c.getSize();let w=r-34;t[p].map(async(x,g)=>{w-x.height,g%2&&c?.drawRectangle({x:5,y:w-x.height+15,width:585,height:x.height,color:l(.895,.895,.895)});let z=q(x?.address)+", Rpto "+n(x?.rpto)+" |  "+n(x?.city)+"  |  "+n(x?.estate);c.drawText(""+z.toUpperCase(),{x:13,y:w,size:7,font:e.roboto_bold,color:l(0,0,0)}),w=w-12,T(x?.customers).map(_=>{let y=x?.customers[_],f="Recibe: "+_+" |  "+y?.phoneNumber+"  |  "+y?.name+":  ___________________";c.drawText("",{x:23,y:w,size:7.5,font:e.Lexend_700,color:l(0,0,0)}),e.Lexend_700?.widthOfTextAtSize(f,7.5),c.drawText(""+f,{x:23,y:w,size:8.5,font:e.Lexend_700,color:l(0,0,0)}),w=w-14,T(y?.bagsNumb).map(u=>{let m="HBLS: ";y?.bagsNumb?.[u]?.hbls.map(L=>{m+=L?.hbl+"; "});let N=m+"    Bolso: "+y?.bagsNumb?.[u]?.bagnumber;c.drawText(""+N,{x:29,y:w,size:8,font:e.roboto_bold,color:l(0,0,0)}),w=w-13})}),w=w-13})});{const p=await a.save();return A(p)}},tt=async s=>{const i=await P.create();i.registerFontkit(B);const d=await v(i),a=s.map(async(b,h)=>{const t=i.addPage([142,71]),{height:p}=t.getSize();if(b?.qr)try{const o=await fetch(b?.qr).then(r=>r.arrayBuffer()),c=await i.embedPng(o);c&&t.drawImage(c,{x:5,y:p-45,width:35,height:35})}catch(o){console.log(o)}t.drawText(n(b?.lbl),{x:50,y:p-27,size:9,font:d.Lexend_700,color:l(0,0,0)}),t.drawText(n(b?.lbl2),{x:4,y:p-62,size:7,font:d.Lexend_700,color:l(0,0,0)})});await Promise.all(a);const e=await i.save();return A(e)};export{V as C,X as P,K as S,Y as a,k as b,Z as c,tt as d,H as g,J as l};
