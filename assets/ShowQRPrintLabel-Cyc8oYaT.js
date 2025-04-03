import{P as O,f as C,r as d}from"./fontkit.es-yAesCE8D.js";import{q as Z}from"./qrcode-DHy8FFhS.js";import{i as N,t as a}from"./InitPrintServices-tbDVtYPt.js";import{OpenToast as K}from"./Toast-CfX-K1g6.js";import{a as J,e as A,O as B}from"./Util-CJwQ4eI5.js";const V=s=>{let i=window?.DATAMatrix;return i?i({msg:s,dim:256,rct:0,pad:2,pal:["#000000","#ffffff"],vrb:1}):null},X=s=>{let h=s.cloneNode(!0).outerHTML,o=new Blob([h],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(o)},tt=async(s,i)=>{const h=document.createElement("img");document.body.appendChild(h),h.onload=function(){const o=document.createElement("canvas");o.width=h.clientWidth,o.height=h.clientHeight,o.getContext("2d").drawImage(h,0,0);const f=o.toDataURL("image/png");document.body.removeChild(h),i(f)},h.src=s},dt=s=>new Promise(async(i,h)=>{let o=V(s),t=o&&X(o);t&&tt(t,async f=>{var p=await et(f,"image/png");let e=URL.createObjectURL(p);i(e)})}),lt=s=>new Z.QRCodeCanvas(s+"").toDataUrl(),et=async(s,i)=>{let o=await(await fetch(s)).blob();return o=o.slice(0,o.size,i),o},ht=s=>{window.navigator.clipboard.writeText(s),K({text:s+"  copiado",timeout:1500,id:J()})};function I(s){let i=new Blob([s],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(i)}const R=(s,i,h)=>{const o=i.widthOfTextAtSize(s,40),t=i.widthOfTextAtSize(s,10);return Math.floor(h/((o-t)/30))},wt=async(s,i,h)=>{const o=await O.create();o.registerFontkit(C);const t=await N(o);let f=265;const p=s.map(async(e,m)=>{const n=o.addPage([426,284]),{height:g}=n.getSize();let r=g-34;const z=await fetch(e?.qr).then(l=>l.arrayBuffer()),P=await o.embedPng(z);n&&P&&n.drawImage(P,{x:10,y:g-220,width:150,height:150});let u=R(a(e?.state),t.roboto_bold,f);u>42&&(u=42,r=r-6);let y=a(e?.bulto).trim();const _=t.Lexend_700?.widthOfTextAtSize(a(y),33);if(e?.isSSG){e?.state&&n.drawText(a(e?.state),{x:5,y:r-6,size:u,font:t.roboto_bold,color:d(0,0,0)}),n.drawText(a(y),{x:18,y:g-270,size:40,font:t.GSansBold,color:d(0,0,0)});const l=await fetch(A("SSG-black.png")).then(S=>S.arrayBuffer()),c=await o.embedPng(l);if(n&&c&&n.drawImage(c,{x:210,y:g-232,width:190,height:190}),e?.lbss){const S=t.Lexend_700?.widthOfTextAtSize("LBS: "+a(e?.lbss?.toFixed(2)),32);n.drawText("LBS: "+a(e?.lbss?.toFixed(2)),{x:418-S,y:r-8,size:32,font:t.Lexend_700,color:d(0,0,0)})}}else{let l=R(a(e?.name),t.GSansItalic,f);var w=t.GSansItalic?.widthOfTextAtSize(a(e?.name),l);if(w>f&&(l=l-1,w=t.GSansItalic?.widthOfTextAtSize(a(e?.name),l)),l=300/w*21,l=l>25?25:l*1,n.drawText(a(e?.name),{x:10,y:r-0,size:l,font:t.GSansItalic,color:d(0,0,0)}),e?.state){const b=t.roboto_bold?.widthOfTextAtSize(a(e?.state),u);n.drawText(a(e?.state),{x:420-b,y:r-46,size:u,font:t.roboto_bold,color:d(0,0,0)}),r=r-l}let c=29;const S=t.Lexend_700?.widthOfTextAtSize(a(e?.phoneNumber),c);n.drawText(a(e?.phoneNumber),{x:400-S,y:r-70,size:c,font:t.Lexend_700,color:d(0,0,0)});const D=t.Lexend_700?.widthOfTextAtSize(a(e?.altPhoneNumber),c);if(n.drawText(a(e?.altPhoneNumber),{x:400-D,y:r-105,size:c,font:t.Lexend_700,color:d(0,0,0)}),e?.lbss){const b=t.Lexend_700?.widthOfTextAtSize("LBS: "+a(e?.lbss?.toFixed(2)),32);n.drawText("LBS: "+a(e?.lbss?.toFixed(2)),{x:418-b,y:r-155,size:32,font:t.Lexend_700,color:d(0,0,0)})}n.drawText(a(y),{x:418-_,y:r-160,size:33,font:t.GSansBold,color:d(0,0,0)}),n.drawText(a(e?.street),{x:2,y:r-189,size:12,font:t.GSansBold,color:d(0,0,0)}),n.drawText(a(e?.city),{x:2,y:r-209,size:12,font:t.GSansBold,color:d(0,0,0)})}});await Promise.all(p);{const e=await o.save();return I(e)}},bt=async(s,i,h)=>{const o=await O.create();o.registerFontkit(C);const t=await N(o),f=s.map(async(p,e)=>{let m=2.795;const n=o.addPage([45*m,24*m]),{height:g}=n.getSize(),r=await fetch(p?.mtrx).then(x=>x.arrayBuffer()),z=await o.embedPng(r),P=await fetch(p?.mtrx2).then(x=>x.arrayBuffer()),u=await o.embedPng(P);n&&z&&n.drawImage(z,{x:0,y:g-32,width:30,height:30}),n.drawText(a(p?.lbl),{x:33,y:g-20,size:13,font:t.Lexend_700,color:d(0,0,0)}),n&&u&&n.drawImage(u,{x:0,y:g-66,width:30,height:30}),n.drawText(a(p?.lbl2),{x:33,y:g-56,size:13,font:t.Lexend_700,color:d(0,0,0)})});await Promise.all(f);{const p=await o.save();return I(p)}},ft=async(s,i,h)=>{const o=await O.create();o.registerFontkit(C);const t=await N(o);let f=265;const p=s.map(async(e,m)=>{const n=o.addPage([426,284]),{height:g}=n.getSize();let r=g-34,z=R(a(e?.state),t.roboto_bold,f);z>42&&(z=42,r=r-6);let u=a(e?.bulto).trim();n.drawText("("+e?.currency+") $"+(a(e?.amount)*1).toFixed(2),{x:10,y:g-260,size:45,font:t.Lexend_700,color:d(0,0,0)});let x=R(a(e?.name),t.GSansItalic,f);var y=t.GSansItalic?.widthOfTextAtSize(a(e?.name),x);y>f&&(x=x-1,y=t.GSansItalic?.widthOfTextAtSize(a(e?.name),x)),x=300/y*21,x=x>25?25:x,n.drawText(a(e?.name),{x:10,y:r-0,size:x,font:t.GSansItalic,color:d(0,0,0)});let _=29;if(e?.state){let c="CID: "+e?.state;const S=t.roboto_bold?.widthOfTextAtSize(a(c),_);n.drawText(a(c),{x:410-S,y:r-46,size:_,font:t.roboto_bold,color:d(0,0,0)}),r=r-_}let w=29;const l=t.Lexend_700?.widthOfTextAtSize(a(e?.phoneNumber),w);n.drawText(a(e?.phoneNumber),{x:400-l,y:r-60,size:w,font:t.Lexend_700,color:d(0,0,0)}),n.drawText(a(u),{x:10,y:r-95,size:10,font:t.GSansBold,color:d(0,0,0)}),n.drawText(a(e?.rpto),{x:10,y:r-115,size:12,font:t.Lexend_700,color:d(0,0,0)}),n.drawText(a(e?.city),{x:10,y:r-135,size:15,font:t.roboto_bold,color:d(0,0,0)})});await Promise.all(p);{const e=await o.save();return I(e)}},G=(s,i)=>i?" "+s+" "+i:"",ot=s=>`${G("Calle",s?.streetName)}${G("#",s?.streetNo)}${G("E/",s?.betwen)}`,gt=async(s,i,h)=>{const o=await O.create();o.registerFontkit(C);const t=await N(o),f=await fetch(A("icon_cellphone")).then(w=>w.arrayBuffer()),p=await o.embedPng(f),e=await fetch(A("icon_receipt")).then(w=>w.arrayBuffer()),m=await o.embedPng(e),n=await fetch(A("icon_home")).then(w=>w.arrayBuffer()),g=await o.embedPng(n),r=await fetch(A("icon_open_package_file_outline")).then(w=>w.arrayBuffer()),z=await o.embedPng(r),P=await fetch(A("icon_user")).then(w=>w.arrayBuffer()),u=await o.embedPng(P);let x=50,y=0,_={0:[]};s.map(w=>{let l=12,c=i[w];l+=B(c?.customers).length*14,B(c?.customers).map(S=>{l+=B(c?.customers?.[S]?.bagsNumb).length*13}),l+=13,x+l>870&&(y+=1,_[y]||(x=50,_[y]=[])),x+=l,c.height=l,_[y].push(c)}),B(_).map((w,l)=>{const c=o.addPage(),{height:S,width:D}=c.getSize();let b=S-34;_[w].map(async(T,M)=>{b-T.height,M%2&&c?.drawRectangle({x:5,y:b-T.height+15,width:585,height:T.height,color:d(.895,.895,.895)});const W=(v,L)=>v?L+v:"";let q=ot(T?.address)+W(T?.rpto,", Rpto ")+" |  "+a(T?.city)+"  |  "+a(T?.estate);c.drawText(""+q.toUpperCase(),{x:24,y:b,size:7,font:t.roboto_bold,color:d(0,0,0)}),g&&c.drawImage(g,{x:10,y:b-3,width:12,height:12}),b=b-12,B(T?.customers).map(v=>{let L=T?.customers[v],E="Recibe:     "+L?.phoneNumber+"       "+v+" | "+L?.name+":  ___________________";var U=t.Lexend_700?.widthOfTextAtSize("Recibe: ",8.5);c.drawText(""+E,{x:23,y:b,size:8.5,font:t.Lexend_700,color:d(0,0,0)}),p&&c.drawImage(p,{x:U+23,y:b-2.5,width:10,height:10});let Q="     "+L?.phoneNumber;var j=t.Lexend_700?.widthOfTextAtSize(Q,8.5);u&&c.drawImage(u,{x:U+23+j,y:b-2.5,width:10,height:10}),b=b-14,B(L?.bagsNumb).map(k=>{let F="HBLS: ";L?.bagsNumb?.[k]?.hbls.map($=>{F+=$?.hbl+"; "});let H=F+"         Bolso: "+L?.bagsNumb?.[k]?.bagnumber;m&&c.drawImage(m,{x:27,y:b-2,width:9,height:9}),c.drawText(""+H,{x:39,y:b,size:8,font:t.roboto_bold,color:d(0,0,0)});var Y=t.roboto_bold?.widthOfTextAtSize(F+"  ",8);z&&c.drawImage(z,{x:Y+39,y:b-2,width:9,height:9}),b=b-13})}),b=b-13})});{const w=await o.save();return I(w)}},xt=async s=>{const i=await O.create();i.registerFontkit(C);const h=await N(i),o=s.map(async(f,p)=>{const e=i.addPage([142,71]),{height:m}=e.getSize();if(f?.qr)try{const n=await fetch(f?.qr).then(r=>r.arrayBuffer()),g=await i.embedPng(n);g&&e.drawImage(g,{x:5,y:m-45,width:35,height:35})}catch(n){console.log(n)}e.drawText(a(f?.lbl),{x:50,y:m-27,size:9,font:h.Lexend_700,color:d(0,0,0)}),e.drawText(a(f?.lbl2),{x:4,y:m-62,size:7,font:h.Lexend_700,color:d(0,0,0)})});await Promise.all(o);const t=await i.save();return I(t)};export{ft as C,gt as P,wt as S,lt as a,et as b,ht as c,xt as d,dt as g,bt as l};
