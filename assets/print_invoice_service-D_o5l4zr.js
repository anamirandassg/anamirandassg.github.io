import{P as j,f as K,S as E,r as o}from"./fontkit.es-yAesCE8D.js";import{e as _,h as Y,b as et}from"./Util-CJwQ4eI5.js";import{i as ot,b as Z}from"./InitPrintServices-tbDVtYPt.js";import"./qrcode-DHy8FFhS.js";import"./Toast-4RNGB2fR.js";let t=0;const $=r=>r?r*1:0,Q=r=>r?" "+r:"",nt=r=>Q(r?.firstName)+Q(r?.middleName)+Q(r?.lastName)+Q(r?.lastName2),dt=r=>{let n=Q(r?.altPhoneNumber);return Q(r?.phoneNumber)+(n?" |"+n:"")},P=(r,n)=>n?" "+r+" "+n:"",it=r=>`${P("Calle",r?.ybstreet)}${P("#",r?.ybstreetNo)}${P("E/",r?.ybbetwen1)}${P("y",r?.ybbetwen2)}, ${P("Reparto",r?.ybreparto)},${P("",r?.ybcity)},${P("",r?.ybestate)}`,_t=async r=>{const n=await j.create();n.registerFontkit(K),await n.embedFont(E.TimesRoman);var c=await n.embedFont(E.TimesRomanBold);if(await n.embedFont(E.TimesRomanBold),_("modernFontReport")){let i=_("Roboto-Bold.ttf");const y=await fetch(i).then(A=>A.arrayBuffer());c=await n.embedFont(y);let b=_("ggSans-Italic.ttf");const R=await fetch(b).then(A=>A.arrayBuffer());await n.embedFont(R);let T=_("ggSans-Medium.ttf");const z=await fetch(T).then(A=>A.arrayBuffer());await n.embedFont(z)}const e=await ot(n);let a=n.addPage();const{width:H,height:N}=a.getSize(),d=10;t=N-40;const O=e.GSansBold.widthOfTextAtSize("Invoice: ",9),C=e.Lexend_700.widthOfTextAtSize(r?.invoice,10);a.drawText("Invoice: ",{x:580-C-O,y:t,size:9,font:e.GSansBold,color:o(0,0,0)}),a.drawText(r?.invoice,{x:580-C,y:t,size:10,font:e.Lexend_700,color:o(0,0,0)});let l=N-30,M=_("storeGroupBy")?.[r?.store]?.label||"";a.drawText(M,{x:20,y:l,size:13,font:c,color:o(0,0,0)}),t=t-20;let L=r?.createDate;const B=e.GSansBold.widthOfTextAtSize("Fecha: ",11),w=e.Lexend_700.widthOfTextAtSize(Y(L)+"",12);a.drawText("Fecha: ",{x:580-B-w,y:t,size:11,font:e.GSansBold,color:o(0,0,0)}),a.drawText(Y(L)+"",{x:580-w,y:t,size:12,font:e.Lexend_700,color:o(.06,.06,.06)}),t=t-20;let h=r?.shipper_consignee,F="";if(h){F=h?.name||"";let i=h?.phoneNumberS||"";a.drawText("Envia: ",{x:20,y:t,size:12,font:e.roboto_bold,color:o(0,0,0)}),t=t-12,a.drawText(F+"   |   "+i,{x:28,y:t,size:8,font:e.Lexend_700,color:o(0,0,0)}),t=t-20;let y=nt(h),b=dt(h),R=it(h);a.drawText("Recibe: ",{x:20,y:t,size:12,font:e.roboto_bold,color:o(0,0,0)}),t=t-13,a.drawText(h?.cid,{x:28,y:t,size:10,font:e.Lexend_700,color:o(0,0,0)}),t=t-13,a.drawText(y,{x:28,y:t,size:8,font:e.Lexend_700,color:o(0,0,0)}),t=t-13,a.drawText(b,{x:28,y:t,size:8,font:e.Lexend_700,color:o(0,0,0)}),t=t-13,a.drawText(R,{x:28,y:t,size:8,font:e.Lexend_700,color:o(0,0,0)})}if((r?.reservas||[])?.length>0){t=t-40,a.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),t=t-18,a.drawText("Tipo de envio",{x:20,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const i=c.widthOfTextAtSize("Lbs",11);a.drawText("Lbs",{x:320-i,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const y=c.widthOfTextAtSize("Precio",11);a.drawText("Precio",{x:400-y,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const b=c.widthOfTextAtSize("Aranceles",11);a.drawText("Aranceles",{x:480-b,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const R=c.widthOfTextAtSize("Total",11);a.drawText("Total",{x:560-R,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)}),t=t-8,a.drawRectangle({x:15,y:t+1,width:560,height:.95,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)});let T=r?.reservas||[];Array.isArray(T)&&T.map((z,A)=>{const W=z?.type;t=t-16,W&&a.drawText(W+"",{x:20,y:t,size:d,font:e.GSansBold,color:o(0,0,0)});let X=$(z?.qty)?.toFixed(2);const D=e.Lexend_700.widthOfTextAtSize(X+"",d);a.drawText(X+"",{x:320-D,y:t,size:d,font:e.Lexend_700,color:o(0,0,0)});let v=$(z?.price)?.toFixed(2);const U=e.Lexend_700.widthOfTextAtSize(v+"",d);a.drawText(v+"",{x:400-U,y:t,size:d,font:e.Lexend_700,color:o(0,0,0)});let k=$(z?.arancel)?.toFixed(2);const at=e.Lexend_700.widthOfTextAtSize(k+"",d);a.drawText(k+"",{x:480-at,y:t,size:d,font:e.Lexend_700,color:o(0,0,0)});let tt=($(z?.price)*$(z?.qty)+$(z?.arancel))?.toFixed(2);const rt=e.Lexend_700.widthOfTextAtSize(tt+"",d);a.drawText(tt+"",{x:560-rt,y:t,size:d,font:e.Lexend_700,color:o(0,0,0)})})}let q=r?.products||[];if(Array.isArray(q)&&q.length>0){t=t-50,a.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),t=t-18,a.drawText("Producto",{x:20,y:t,size:12,font:e.roboto_bold,color:o(0,0,0)});const i=e.roboto_bold.widthOfTextAtSize("Qty",11);a.drawText("Qty",{x:400-i,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const y=e.roboto_bold.widthOfTextAtSize("Precio",11);a.drawText("Precio",{x:480-y,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const b=e.roboto_bold.widthOfTextAtSize("Total",11);a.drawText("Total",{x:560-b,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)}),t=t-8,a.drawRectangle({x:15,y:t+1,width:560,height:.95,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),(et(r?.products)||[]).map((T,z)=>{const A=T?.product?.label;t=t-16,A&&a.drawText(A+"",{x:20,y:t,size:d,font:e.GSansBold,color:o(0,0,0)});let W=T?.qty?(T?.qty*-1).toFixed(2):"0.00";const X=e.Lexend_700.widthOfTextAtSize(W+"",d);a.drawText(W+"",{x:400-X,y:t,size:d,font:e.Lexend_700,color:o(0,0,0)});let D=T?.qty?(T?.salePrice*1).toFixed(2):"0.00";const v=e.Lexend_700.widthOfTextAtSize(D+"",d);a.drawText(D+"",{x:480-v,y:t,size:d,font:e.Lexend_700,color:o(0,0,0)});let U=T?.qty?(T?.salePrice*T?.qty*-1).toFixed(2):"0.00";const k=e.Lexend_700.widthOfTextAtSize(U+"",d);a.drawText(U+"",{x:560-k,y:t,size:d,font:e.Lexend_700,color:o(0,0,0)})})}t=t-28,a.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)});let I=500;t=t-20;let x=r?.amount?r?.amount?.toFixed(2):"0.00";const u=e.Lexend_700.widthOfTextAtSize(x+"",d);a.drawText(x+"",{x:560-u,y:t,size:d,font:e.Lexend_700,color:o(.13,.13,.13)});const g=e.GSansBold.widthOfTextAtSize("SubTotal",d);a.drawText("SubTotal",{x:I-g,y:t,size:d,font:e.GSansBold,color:o(0,0,0)}),t=t-16;let m=r?.hasTax?r?.hasTax?.toFixed(2):"0.00";const f=e.Lexend_700.widthOfTextAtSize(m+"",d);a.drawText(m+"",{x:560-f,y:t,size:d,font:e.Lexend_700,color:o(.13,.13,.13)});const s=e.GSansBold.widthOfTextAtSize("Taxes",d);a.drawText("Taxes",{x:I-s,y:t,size:d,font:e.GSansBold,color:o(0,0,0)});let S=r?.hasTax?r?.hasTax+r?.amount:r?.amount*1;t=t-16;let p=S?S?.toFixed(2):"0.00";const G=e.Lexend_700.widthOfTextAtSize(p+"",11);a.drawText(p+"",{x:560-G,y:t,size:11,font:e.Lexend_700,color:o(0,0,0)});const J=e.GSansBold.widthOfTextAtSize("Total",11);if(a.drawText("Total",{x:I-J,y:t,size:11,font:e.GSansBold,color:o(0,0,0)}),r?.packagesOrder){let i=40,y="CERTIFICO QUE NO ENVIO SUSTANCIAS NI PRODUCTOS PROHIBIDOS POR LAS LEYES Y LAS ADUANAS DE USA Y CUBA, COMO POR EJEMPLO DROGAS, ARMAS, EXPLOSIVOS,CIGARRILLOS ELECTRONICOS,",b="DRONES PROFESIONALES, JOYAS, PRENDAS, DINERO EN EFECTIVO, SEMILLAS, NARCOTICOS, FARMACOS CONTROLADOS, PRODUCTOS AGRICOLAS DE TIPO HERBICIDAS O ANTIFUNGUICIDAS, ",R="NINGUN TIPO DE PRODUCTO PERECEDERO QUE NECESITE REFRIGERACION. ENTIENDO QUE AL LLENAR ESTE FORMULARIO, AL ENVIAR ALGUNA DE LAS SUSTANCIAS O PRODUCTOS ANTES DESCRITOS",T="MI CARGA PUEDE SER DESCAMISADA COMPLETA O PARCIALMENTE POR LAS ADUANAS DE CUBA O USA SIN DERECHO A RECLAMO NI COMPENSACION, DE PARTE MIA COMO EMBARCADOR,",z="NI DE LA PERSONA A QUIEN ENVIO( CONSIGNATARIO )";a.drawText(y.toLowerCase(),{x:10,y:i+80,size:7,font:e?.GSansBold,color:o(0,0,0)}),a.drawText(b.toLowerCase(),{x:10,y:i+70,size:7,font:e.GSansBold,color:o(0,0,0)}),a.drawText(R.toLowerCase(),{x:10,y:i+60,size:7,font:e?.GSansBold,color:o(0,0,0)}),a.drawText(T.toLowerCase(),{x:10,y:i+50,size:7,font:e?.GSansBold,color:o(0,0,0)}),a.drawText(z.toLowerCase(),{x:10,y:i+40,size:7,font:e?.GSansBold,color:o(0,0,0)}),i=10;let A=F+"    ______________________________";const W=e.GSansBold.widthOfTextAtSize(A,8);a.drawText(A,{x:30,y:i+20,size:8,font:e?.GSansBold,color:o(0,0,0)}),a.drawText("Firmar       .",{x:W-30,y:i+10,size:8,font:e?.GSansBold,color:o(0,0,0)});const D="________________________",v=e.GSansBold.widthOfTextAtSize(D,8);a.drawText(D,{x:540-v,y:i+20,size:8,font:e?.GSansBold,color:o(0,0,0)});let U="Fecha";const k=e.GSansBold.widthOfTextAtSize(U,8);a.drawText(U,{x:540-k*2,y:i+10,size:8,font:e?.GSansBold,color:o(0,0,0)})}{const i=await n.save();return Z(i)}},ht=async r=>{const n=await j.create();n.registerFontkit(K);var c=await n.embedFont(E.TimesRoman),e=await n.embedFont(E.TimesRomanBold);if(await n.embedFont(E.TimesRomanBold),_("modernFontReport")){let O=_("Roboto-Bold.ttf");const C=await fetch(O).then(w=>w.arrayBuffer());e=await n.embedFont(C);let l=_("ggSans-Italic.ttf");const M=await fetch(l).then(w=>w.arrayBuffer());c=await n.embedFont(M);let L=_("ggSans-Medium.ttf");const B=await fetch(L).then(w=>w.arrayBuffer());await n.embedFont(B)}let a=r?.products||[],H=44,N=Math.ceil(a.length/H),d=Array.from(Array(N).keys());d.map(async(O,C)=>{let l=n.addPage();const{width:M,height:L}=l.getSize(),B=10;t=L-40;let w=H*O,h=H*(O+1)-1;h>a.length&&(h=a.length);let F=a.slice(w,h)||[],V=L-30,q=_("storeGroupBy")?.[r?.store]?.label;l.drawText(q,{x:20,y:V,size:13,font:e,color:o(0,0,0)});let I=`${O+1} / ${d?.length}`;l.drawText(I,{x:560,y:L-20,size:10,font:e,color:o(0,0,0)});let x=r?.createDate;const u=c.widthOfTextAtSize("Fecha: ",11),g=e.widthOfTextAtSize(Y(x)+"",12);l.drawText("Fecha: ",{x:580-u-g,y:t,size:11,font:c,color:o(0,0,0)}),l.drawText(Y(x)+"",{x:580-g,y:t,size:12,font:e,color:o(.06,.06,.06)}),t=t-20,l.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),t=t-18,l.drawText("Producto",{x:20,y:t,size:13,font:e,color:o(0,0,0)});const m=e.widthOfTextAtSize("Existencia",12);l.drawText("Existencia",{x:480-m,y:t,size:12,font:e,color:o(0,0,0)});const f=e.widthOfTextAtSize("Conteo",12);l.drawText("Conteo",{x:560-f,y:t,size:12,font:e,color:o(0,0,0)}),t=t-8,l.drawRectangle({x:15,y:t+1,width:560,height:.95,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),Array.isArray(F)&&F.map((s,S)=>{const p=s?.product?.label;t=t-16,p&&l.drawText(p+"",{x:20,y:t,size:B,font:c,color:o(0,0,0)});let G=s?.stock?s?.stock*1:"0";const J=c.widthOfTextAtSize(G+"",B);l.drawText(G+"",{x:480-J,y:t,size:B,font:c,color:o(0,0,0)});let i=s?.qty?s?.qty*1:"0";const y=c.widthOfTextAtSize(i+"",B);l.drawText(i+"",{x:560-y,y:t,size:B,font:c,color:o(0,0,0)})})});{const O=await n.save();return Z(O)}},wt=async r=>{const n=await j.create();n.registerFontkit(K),await n.embedFont(E.TimesRoman);var c=await n.embedFont(E.TimesRomanBold);if(await n.embedFont(E.TimesRomanBold),_("modernFontReport")){let x=_("Roboto-Bold.ttf");const u=await fetch(x).then(S=>S.arrayBuffer());c=await n.embedFont(u);let g=_("ggSans-Italic.ttf");const m=await fetch(g).then(S=>S.arrayBuffer());await n.embedFont(m);let f=_("ggSans-Medium.ttf");const s=await fetch(f).then(S=>S.arrayBuffer());await n.embedFont(s)}const e=await ot(n);let a=n.addPage();const{width:H,height:N}=a.getSize(),d=10;t=N-40;const O=e.GSansBold.widthOfTextAtSize("Invoice: ",9),C=e.Lexend_700.widthOfTextAtSize(r?.invoice,10);a.drawText("Invoice: ",{x:580-C-O,y:t,size:9,font:e.GSansBold,color:o(0,0,0)}),a.drawText(r?.invoice,{x:580-C,y:t,size:10,font:e.Lexend_700,color:o(0,0,0)});let l=N-30,M=_("storeGroupBy")?.[r?.store]?.label||"";a.drawText(M,{x:20,y:l,size:13,font:c,color:o(0,0,0)}),t=t-20;let L=r?.createDate;const B=e.GSansBold.widthOfTextAtSize("Fecha: ",11),w=e.Lexend_700.widthOfTextAtSize(Y(L)+"",12);a.drawText("Fecha: ",{x:580-B-w,y:t,size:11,font:e.GSansBold,color:o(0,0,0)}),a.drawText(Y(L)+"",{x:580-w,y:t,size:12,font:e.Lexend_700,color:o(.06,.06,.06)});let h=r?.products||[];if(Array.isArray(h)&&h.length>0){t=t-50,a.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),t=t-18,a.drawText("Producto",{x:20,y:t,size:12,font:e.roboto_bold,color:o(0,0,0)});const x=e.roboto_bold.widthOfTextAtSize("Qty",11);a.drawText("Qty",{x:400-x,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const u=e.roboto_bold.widthOfTextAtSize("Precio",11);a.drawText("Precio",{x:480-u,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const g=e.roboto_bold.widthOfTextAtSize("Total",11);a.drawText("Total",{x:560-g,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)}),t=t-8,a.drawRectangle({x:15,y:t+1,width:560,height:.95,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)});let m=et(r?.products)||[],f=9;m.map((s,S)=>{const p=s?.product?.label;t=t-16,p&&a.drawText(p+"",{x:20,y:t,size:9,font:e.GSansBold,color:o(0,0,0)});let G=s?.qty?(s?.qty*1).toFixed(2):"0.00";const J=e.Lexend_700.widthOfTextAtSize(G+"",f);a.drawText(G+"",{x:400-J,y:t,size:f,font:e.Lexend_700,color:o(0,0,0)});let i=s?.qty?(s?.price*1).toFixed(2):"0.00";const y=e.Lexend_700.widthOfTextAtSize(i+"",f);a.drawText(i+"",{x:480-y,y:t,size:f,font:e.Lexend_700,color:o(0,0,0)});let b=s?.qty?(s?.price*s?.qty*1).toFixed(2):"0.00";const R=e.Lexend_700.widthOfTextAtSize(b+"",f);a.drawText(b+"",{x:560-R,y:t,size:f,font:e.Lexend_700,color:o(0,0,0)})})}t=t-28,a.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)});let F=500;t=t-20;let V=r?.amount?r?.amount?.toFixed(2):"0.00";const q=e.Lexend_700.widthOfTextAtSize(V+"",d);a.drawText(V+"",{x:560-q,y:t,size:d,font:e.Lexend_700,color:o(.13,.13,.13)});const I=e.GSansBold.widthOfTextAtSize("Total",d);if(a.drawText("Total",{x:F-I,y:t,size:d,font:e.GSansBold,color:o(0,0,0)}),r?.packagesOrder){let x=40,u=shippName+"    ______________________________";const g=e.GSansBold.widthOfTextAtSize(u,8);a.drawText(u,{x:30,y:x+20,size:8,font:e?.GSansBold,color:o(0,0,0)}),a.drawText("Firmar       .",{x:g-30,y:x+10,size:8,font:e?.GSansBold,color:o(0,0,0)});const f="________________________",s=e.GSansBold.widthOfTextAtSize(f,8);a.drawText(f,{x:540-s,y:x+20,size:8,font:e?.GSansBold,color:o(0,0,0)});let S="Fecha";const p=e.GSansBold.widthOfTextAtSize(S,8);a.drawText(S,{x:540-p*2,y:x+10,size:8,font:e?.GSansBold,color:o(0,0,0)})}{const x=await n.save();return Z(x)}};export{ht as I,wt as T,_t as a};
