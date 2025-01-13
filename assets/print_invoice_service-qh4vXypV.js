import{P as H,f as V,S as p,r as o}from"./fontkit.es-BHcUmD3g.js";import{e as w,h as U,b as rt}from"./Util-B8-DWw-6.js";import{i as at,b as J}from"./InitPrintServices-BhTuseMZ.js";import"./qrcode-DHy8FFhS.js";import"./Toast-D_AIkvVg.js";let t=0;const I=a=>a?a*1:0,C=a=>a?" "+a:"",nt=a=>C(a?.firstName)+C(a?.middleName)+C(a?.lastName)+C(a?.lastName2),dt=a=>{let d=C(a?.altPhoneNumber);return C(a?.phoneNumber)+(d?" |"+d:"")},z=(a,d)=>d?" "+a+" "+d:"",it=a=>`${z("Calle",a?.ybstreet)}${z("#",a?.ybstreetNo)}${z("E/",a?.ybbetwen1)}${z("y",a?.ybbetwen2)}, ${z("Reparto",a?.ybreparto)},${z("",a?.ybcity)},${z("",a?.ybestate)}`,wt=async a=>{const d=await H.create();d.registerFontkit(V),await d.embedFont(p.TimesRoman);var l=await d.embedFont(p.TimesRomanBold);if(await d.embedFont(p.TimesRomanBold),w("modernFontReport")){let i=w("Roboto-Bold.ttf");const S=await fetch(i).then(T=>T.arrayBuffer());l=await d.embedFont(S);let _=w("ggSans-Italic.ttf");const s=await fetch(_).then(T=>T.arrayBuffer());await d.embedFont(s);let b=w("ggSans-Medium.ttf");const c=await fetch(b).then(T=>T.arrayBuffer());await d.embedFont(c)}const e=await at(d);let r=d.addPage();const{width:X,height:g}=r.getSize(),n=10;t=g-40;const P=e.GSansBold.widthOfTextAtSize("Invoice: ",9),F=e.Lexend_700.widthOfTextAtSize(a?.invoice,10);r.drawText("Invoice: ",{x:580-F-P,y:t,size:9,font:e.GSansBold,color:o(0,0,0)}),r.drawText(a?.invoice,{x:580-F,y:t,size:10,font:e.Lexend_700,color:o(0,0,0)});let D=g-30,M=w("storeGroupBy")?.[a?.store]?.label||"";r.drawText(M,{x:20,y:D,size:13,font:l,color:o(0,0,0)}),t=t-20;let m=a?.createDate;const q=e.GSansBold.widthOfTextAtSize("Fecha: ",11),G=e.Lexend_700.widthOfTextAtSize(U(m)+"",12);r.drawText("Fecha: ",{x:580-q-G,y:t,size:11,font:e.GSansBold,color:o(0,0,0)}),r.drawText(U(m)+"",{x:580-G,y:t,size:12,font:e.Lexend_700,color:o(.06,.06,.06)}),t=t-20;let f=a?.shipper_consignee,x="";if(f){x=f?.name||"";let i=f?.phoneNumberS||"";r.drawText("Envia: ",{x:20,y:t,size:12,font:e.roboto_bold,color:o(0,0,0)}),t=t-12,r.drawText(x+"   |   "+i,{x:28,y:t,size:8,font:e.Lexend_700,color:o(0,0,0)}),t=t-20;let S=nt(f),_=dt(f),s=it(f);r.drawText("Recibe: ",{x:20,y:t,size:12,font:e.roboto_bold,color:o(0,0,0)}),t=t-13,r.drawText(f?.cid,{x:28,y:t,size:10,font:e.Lexend_700,color:o(0,0,0)}),t=t-13,r.drawText(S,{x:28,y:t,size:8,font:e.Lexend_700,color:o(0,0,0)}),t=t-13,r.drawText(_,{x:28,y:t,size:8,font:e.Lexend_700,color:o(0,0,0)}),t=t-13,r.drawText(s,{x:28,y:t,size:8,font:e.Lexend_700,color:o(0,0,0)})}if((a?.reservas||[])?.length>0){t=t-40,r.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),t=t-18,r.drawText("Tipo de envio",{x:20,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const i=l.widthOfTextAtSize("Lbs",11);r.drawText("Lbs",{x:320-i,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const S=l.widthOfTextAtSize("Precio",11);r.drawText("Precio",{x:400-S,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const _=l.widthOfTextAtSize("Aranceles",11);r.drawText("Aranceles",{x:480-_,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const s=l.widthOfTextAtSize("Total",11);r.drawText("Total",{x:560-s,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)}),t=t-8,r.drawRectangle({x:15,y:t+1,width:560,height:.95,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)});let b=a?.reservas||[];Array.isArray(b)&&b.map((c,T)=>{const E=c?.type;t=t-16,E&&r.drawText(E+"",{x:20,y:t,size:n,font:e.GSansBold,color:o(0,0,0)});let B=I(c?.qty)?.toFixed(2);const N=e.Lexend_700.widthOfTextAtSize(B+"",n);r.drawText(B+"",{x:320-N,y:t,size:n,font:e.Lexend_700,color:o(0,0,0)});let O=I(c?.price)?.toFixed(2);const u=e.Lexend_700.widthOfTextAtSize(O+"",n);r.drawText(O+"",{x:400-u,y:t,size:n,font:e.Lexend_700,color:o(0,0,0)});let W=I(c?.arancel)?.toFixed(2);const et=e.Lexend_700.widthOfTextAtSize(W+"",n);r.drawText(W+"",{x:480-et,y:t,size:n,font:e.Lexend_700,color:o(0,0,0)});let v=(I(c?.price)*I(c?.qty)+I(c?.arancel))?.toFixed(2);const ot=e.Lexend_700.widthOfTextAtSize(v+"",n);r.drawText(v+"",{x:560-ot,y:t,size:n,font:e.Lexend_700,color:o(0,0,0)})})}let A=rt(a?.products)||[];if(A.length>0){t=t-50,r.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),t=t-18,r.drawText("Producto",{x:20,y:t,size:12,font:e.roboto_bold,color:o(0,0,0)});const i=e.roboto_bold.widthOfTextAtSize("Qty",11);r.drawText("Qty",{x:400-i,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const S=e.roboto_bold.widthOfTextAtSize("Precio",11);r.drawText("Precio",{x:480-S,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)});const _=e.roboto_bold.widthOfTextAtSize("Total",11);r.drawText("Total",{x:560-_,y:t,size:11,font:e.roboto_bold,color:o(0,0,0)}),t=t-8,r.drawRectangle({x:15,y:t+1,width:560,height:.95,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),Array.isArray(A)&&A.map((s,b)=>{const c=s?.product?.label;t=t-16,c&&r.drawText(c+"",{x:20,y:t,size:n,font:e.GSansBold,color:o(0,0,0)});let T=s?.qty?(s?.qty*-1).toFixed(2):"0.00";const E=e.Lexend_700.widthOfTextAtSize(T+"",n);r.drawText(T+"",{x:400-E,y:t,size:n,font:e.Lexend_700,color:o(0,0,0)});let B=s?.qty?(s?.salePrice*1).toFixed(2):"0.00";const N=e.Lexend_700.widthOfTextAtSize(B+"",n);r.drawText(B+"",{x:480-N,y:t,size:n,font:e.Lexend_700,color:o(0,0,0)});let O=s?.qty?(s?.salePrice*s?.qty*-1).toFixed(2):"0.00";const u=e.Lexend_700.widthOfTextAtSize(O+"",n);r.drawText(O+"",{x:560-u,y:t,size:n,font:e.Lexend_700,color:o(0,0,0)})})}t=t-28,r.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)});let y=500;t=t-20;let L=a?.amount?a?.amount?.toFixed(2):"0.00";const R=e.Lexend_700.widthOfTextAtSize(L+"",n);r.drawText(L+"",{x:560-R,y:t,size:n,font:e.Lexend_700,color:o(.13,.13,.13)});const h=e.GSansBold.widthOfTextAtSize("SubTotal",n);r.drawText("SubTotal",{x:y-h,y:t,size:n,font:e.GSansBold,color:o(0,0,0)}),t=t-16;let Y=a?.hasTax?a?.hasTax?.toFixed(2):"0.00";const j=e.Lexend_700.widthOfTextAtSize(Y+"",n);r.drawText(Y+"",{x:560-j,y:t,size:n,font:e.Lexend_700,color:o(.13,.13,.13)});const K=e.GSansBold.widthOfTextAtSize("Taxes",n);r.drawText("Taxes",{x:y-K,y:t,size:n,font:e.GSansBold,color:o(0,0,0)});let $=a?.hasTax?a?.hasTax+a?.amount:a?.amount*1;t=t-16;let k=$?$?.toFixed(2):"0.00";const Z=e.Lexend_700.widthOfTextAtSize(k+"",11);r.drawText(k+"",{x:560-Z,y:t,size:11,font:e.Lexend_700,color:o(0,0,0)});const tt=e.GSansBold.widthOfTextAtSize("Total",11);if(r.drawText("Total",{x:y-tt,y:t,size:11,font:e.GSansBold,color:o(0,0,0)}),a?.packagesOrder){let i=40,S="CERTIFICO QUE NO ENVIO SUSTANCIAS NI PRODUCTOS PROHIBIDOS POR LAS LEYES Y LAS ADUANAS DE USA Y CUBA, COMO POR EJEMPLO DROGAS, ARMAS, EXPLOSIVOS,CIGARRILLOS ELECTRONICOS,",_="DRONES PROFESIONALES, JOYAS, PRENDAS, DINERO EN EFECTIVO, SEMILLAS, NARCOTICOS, FARMACOS CONTROLADOS, PRODUCTOS AGRICOLAS DE TIPO HERBICIDAS O ANTIFUNGUICIDAS, ",s="NINGUN TIPO DE PRODUCTO PERECEDERO QUE NECESITE REFRIGERACION. ENTIENDO QUE AL LLENAR ESTE FORMULARIO, AL ENVIAR ALGUNA DE LAS SUSTANCIAS O PRODUCTOS ANTES DESCRITOS",b="MI CARGA PUEDE SER DESCAMISADA COMPLETA O PARCIALMENTE POR LAS ADUANAS DE CUBA O USA SIN DERECHO A RECLAMO NI COMPENSACION, DE PARTE MIA COMO EMBARCADOR,",c="NI DE LA PERSONA A QUIEN ENVIO( CONSIGNATARIO )";r.drawText(S.toLowerCase(),{x:10,y:i+80,size:7,font:e?.GSansBold,color:o(0,0,0)}),r.drawText(_.toLowerCase(),{x:10,y:i+70,size:7,font:e.GSansBold,color:o(0,0,0)}),r.drawText(s.toLowerCase(),{x:10,y:i+60,size:7,font:e?.GSansBold,color:o(0,0,0)}),r.drawText(b.toLowerCase(),{x:10,y:i+50,size:7,font:e?.GSansBold,color:o(0,0,0)}),r.drawText(c.toLowerCase(),{x:10,y:i+40,size:7,font:e?.GSansBold,color:o(0,0,0)}),i=10;let T=x+"    ______________________________";const E=e.GSansBold.widthOfTextAtSize(T,8);r.drawText(T,{x:30,y:i+20,size:8,font:e?.GSansBold,color:o(0,0,0)}),r.drawText("Firmar       .",{x:E-30,y:i+10,size:8,font:e?.GSansBold,color:o(0,0,0)});const N="________________________",O=e.GSansBold.widthOfTextAtSize(N,8);r.drawText(N,{x:540-O,y:i+20,size:8,font:e?.GSansBold,color:o(0,0,0)});let u="Fecha";const W=e.GSansBold.widthOfTextAtSize(u,8);r.drawText(u,{x:540-W*2,y:i+10,size:8,font:e?.GSansBold,color:o(0,0,0)})}{const i=await d.save();return J(i)}},ht=async a=>{const d=await H.create();d.registerFontkit(V);var l=await d.embedFont(p.TimesRoman),e=await d.embedFont(p.TimesRomanBold);if(await d.embedFont(p.TimesRomanBold),w("modernFontReport")){let x=w("Roboto-Bold.ttf");const Q=await fetch(x).then(h=>h.arrayBuffer());e=await d.embedFont(Q);let A=w("ggSans-Italic.ttf");const y=await fetch(A).then(h=>h.arrayBuffer());l=await d.embedFont(y);let L=w("ggSans-Medium.ttf");const R=await fetch(L).then(h=>h.arrayBuffer());await d.embedFont(R)}let r=d.addPage();const{width:X,height:g}=r.getSize(),n=10;t=g-40;let P=g-30,F=w("storeGroupBy")?.[a?.store]?.label;r.drawText(F,{x:20,y:P,size:13,font:e,color:o(0,0,0)});let D=a?.createDate;const M=l.widthOfTextAtSize("Fecha: ",11),m=e.widthOfTextAtSize(U(D)+"",12);r.drawText("Fecha: ",{x:580-M-m,y:t,size:11,font:l,color:o(0,0,0)}),r.drawText(U(D)+"",{x:580-m,y:t,size:12,font:e,color:o(.06,.06,.06)}),t=t-20,t=t-20,r.drawRectangle({x:15,y:t+1,width:560,height:.85,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)}),t=t-18,r.drawText("Producto",{x:20,y:t,size:13,font:e,color:o(0,0,0)});const q=e.widthOfTextAtSize("Existencia",12);r.drawText("Existencia",{x:480-q,y:t,size:12,font:e,color:o(0,0,0)});const G=e.widthOfTextAtSize("Qty",12);r.drawText("Qty",{x:560-G,y:t,size:12,font:e,color:o(0,0,0)}),t=t-8,r.drawRectangle({x:15,y:t+1,width:560,height:.95,color:o(.53,.53,.53),borderColor:o(.53,.53,.53)});let f=a?.products||[];Array.isArray(f)&&f.map((x,Q)=>{const A=x?.product?.label;t=t-16,A&&r.drawText(A+"",{x:20,y:t,size:n,font:l,color:o(0,0,0)});let y=x?.stock?x?.stock*1:"0";const L=l.widthOfTextAtSize(y+"",n);r.drawText(y+"",{x:480-L,y:t,size:n,font:l,color:o(0,0,0)});let R=x?.qty?x?.qty*1:"0";const h=l.widthOfTextAtSize(R+"",n);r.drawText(R+"",{x:560-h,y:t,size:n,font:l,color:o(0,0,0)})});{const x=await d.save();return J(x)}};export{ht as I,wt as a};
