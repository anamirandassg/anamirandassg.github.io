const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-B3M6J_R5.js","assets/index-DfnndQVu.js","assets/index-DGHHyjai.css","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-BcbcOMQN.js","assets/debounces-Bo9ZjQKA.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as S,_ as E,a as y,i as l,d as v,f as w,e as R,t as L}from"./index-DfnndQVu.js";import{i as O}from"./globalSignal-B85JDhH1.js";import{c as k}from"./ShowQRPrintLabel-NZ0q9ufT.js";import"./fontkit.es-DEjOtITv.js";import"./index-Ci0zXM0r.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-khaE0HRx.js";import"./Util-uEfv1z7O.js";import"./Toast-DVa0BnZN.js";var D=L('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Imprimir por Zona</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div></div><div class="_dsplFlx flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4>');const h=S(()=>E(()=>import("./SVG-B3M6J_R5.js"),__vite__mapDeps([0,1,2,3]))),U=S(()=>E(()=>import("./DropDwnSearch-BcbcOMQN.js"),__vite__mapDeps([4,1,2,5,0,3,6])));function J(i){const[t,_]=y({}),[d,m]=y({totals:0,weight:0}),$=e=>{k(e)},I=e=>{_(e),x()},x=e=>{let r=0,s=0;i?.list.map((o,f)=>{let a=o?.estate||o?.consigneeInfo?.ybestate;(t()||e)?.prov[a]&&((o?.hblS.split("2300")).map((A,p)=>{if(p>0){let n=A.split("/");s+=n?.[1]*n?.[2]}}),r+=1)}),m({totals:r,weight:s})};return(()=>{var e=D(),r=e.firstChild,s=r.firstChild,o=s.firstChild,f=o.nextSibling,a=f.firstChild,b=a.nextSibling,g=s.nextSibling,A=g.firstChild,p=r.nextSibling,n=p.firstChild,C=n.firstChild,P=C.nextSibling,T=n.nextSibling,u=T.firstChild,N=u.nextSibling;return e.style.setProperty("height","clamp(20vh, 40vh,  80vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),a.$$click=()=>$(i?.item?.bagnumber),l(a,()=>i?.item?.bagnumber),b.$$click=x,l(b,v(h,{name:"printer",size:32})),l(A,v(U,{list:B,lbl_empty:"Zona",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return t()?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:c=>I(c),width:"260px"})),p.style.setProperty("padding","16px"),l(C,v(h,{name:"weight-kilogram",size:22})),l(P,()=>d()?.weight?.toFixed(2)),l(u,v(h,{name:"open_package_file_outline",size:22})),l(N,()=>d()?.totals?.toFixed(2)),w(c=>(c=O()?"86vw":"420px")!=null?e.style.setProperty("width",c):e.style.removeProperty("width")),e})()}const Q=i=>{let t=i,_="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(_);return t.length===13&&d.test(t)&&(t=t.slice(3,12)),t};let B=[{id:"OCC",label:"OCC",prov:{"LA HABANA":1,MAYABEQUE:1,ARTEMISA:1,"PINAR DEL RIO":1,MATANZAS:1,"ISLA DE LA JUVENTUD":1}},{id:"CEN",label:"CEN",prov:{CAMAGUEY:1,"LAS TUNAS":1,"CIEGO DE AVILA":1,CIENFUEGOS:1,"SANCTI SPIRITUS":1,"VILLA CLARA":1}},{id:"ORT",label:"ORT",prov:{HOLGUIN:1,GUANTANAMO:1,GRANMA:1,"SANTIAGO DE CUBA":1}}];R(["click"]);export{J as default,Q as parseTrcking};
