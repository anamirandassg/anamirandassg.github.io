const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CgaNqNB-.js","assets/index-BcPxdzNG.js","assets/index-DGHHyjai.css","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-D_W-rrDn.js","assets/debounces-nsG59_FJ.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as E,_ as I,a as $,m as L,i as t,d as v,f as O,e as B,t as D}from"./index-BcPxdzNG.js";import{i as F}from"./globalSignal-CTzzE19b.js";import{c as U}from"./ShowQRPrintLabel-CJbZOt5B.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-CprHcwF4.js";import"./Util-uEfv1z7O.js";import"./Toast-CR1M38zn.js";var M=D('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Imprimir por Zona</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div></div><div class="_dsplFlx flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4>');const h=E(()=>I(()=>import("./SVG-CgaNqNB-.js"),__vite__mapDeps([0,1,2,3]))),z=E(()=>I(()=>import("./DropDwnSearch-D_W-rrDn.js"),__vite__mapDeps([4,1,2,5,0,3,6]))),G=2.20462;function ee(a){const[i,_]=$({}),[d,g]=$({totals:0,weight:0}),P=e=>{U(e)},w=e=>{_(e),m()},m=e=>{let s=0,r=0;a?.list.map((o,f)=>{let p=o?.estate||o?.consigneeInfo?.ybestate;(i()||e)?.prov?.[p]?((o?.hblS.split("2300")).map((c,n)=>{if(n>0){let l=c.split("/");r+=l?.[1]*l?.[2]}}),s+=1):((o?.hblS.split("2300")).map((c,n)=>{if(n>0){let l=c.split("/");r+=l?.[1]*l?.[2]}}),s+=1)}),g({totals:s,weight:r})};return L(()=>{m()}),(()=>{var e=M(),s=e.firstChild,r=s.firstChild,o=r.firstChild,f=o.nextSibling,p=f.firstChild,x=p.nextSibling,A=r.nextSibling,c=A.firstChild,n=s.nextSibling,l=n.firstChild,u=l.firstChild,T=u.nextSibling,C=l.nextSibling,S=C.firstChild,N=S.nextSibling,R=C.nextSibling,y=R.firstChild,k=y.nextSibling;return e.style.setProperty("height","clamp(20vh, 40vh,  80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),p.$$click=()=>P(a?.item?.bagnumber),t(p,()=>a?.item?.bagnumber),x.$$click=m,t(x,v(h,{name:"printer",size:32})),t(c,v(z,{list:V,lbl_empty:"Zona",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return i()?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:b=>w(b),width:"260px"})),n.style.setProperty("padding","16px"),t(u,v(h,{name:"weight-kilogram",size:22})),t(T,()=>d()?.weight?.toFixed(2)),t(S,v(h,{name:"weight-pound",size:22})),t(N,()=>(d()?.weight*G).toFixed(2)),t(y,v(h,{name:"open_package_file_outline",size:22})),t(k,()=>d()?.totals?.toFixed(2)),O(b=>(b=F()?"86vw":"420px")!=null?e.style.setProperty("width",b):e.style.removeProperty("width")),e})()}const te=a=>{let i=a,_="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(_);return i.length===13&&d.test(i)&&(i=i.slice(3,12)),i};let V=[{id:"OCC",label:"OCC",prov:{"LA HABANA":1,MAYABEQUE:1,ARTEMISA:1,"PINAR DEL RIO":1,MATANZAS:1,"ISLA DE LA JUVENTUD":1}},{id:"CEN",label:"CEN",prov:{CAMAGUEY:1,"LAS TUNAS":1,"CIEGO DE AVILA":1,CIENFUEGOS:1,"SANCTI SPIRITUS":1,"VILLA CLARA":1}},{id:"ORT",label:"ORT",prov:{HOLGUIN:1,GUANTANAMO:1,GRANMA:1,"SANTIAGO DE CUBA":1}}];B(["click"]);export{ee as default,te as parseTrcking};
