const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DJaoqm4Q.js","assets/index-CXqMZ4Du.js","assets/index-DEEWbFNK.css","assets/Util-CKCUAuLU.js","assets/DropDwnSearch-CQPtYbhG.js","assets/debounces-5I5nlVM3.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as T,_ as D,a as z,b as K,i,d as o,F as M,S as k,e as O,f as L,h as V,t as E}from"./index-CXqMZ4Du.js";import{c as W}from"./ShowQRPrintLabel-CYlJmIMH.js";import{O as j,d as N}from"./Util-CKCUAuLU.js";import"./PDFButton-DzKPI8bv.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-xY8_R9eo.js";import"./InitPrintServices-Cu6eu-iZ.js";import"./Toast-DNEVDXHB.js";var X=E('<div class="centerBx bottombx"><h5 class="">Aranceles</h5><h4 class="">$</h4>'),Z=E('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Resumen de la Guia</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div></div><div class=" flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4>'),q=E('<div class="centerBx bottombx wt65"><h5 class=tr_bar_10>$</h5>X<h4 class=tr_bar_15></h4>=<h5 class=tr_bar_20>$</h5>');const w=T(()=>D(()=>import("./SVG-DJaoqm4Q.js"),__vite__mapDeps([0,1,2,3])));T(()=>D(()=>import("./DropDwnSearch-CQPtYbhG.js"),__vite__mapDeps([4,1,2,5,0,3,6])));const H=2.20462;function se(_){z({});const[e,S]=z({totals:0,weight:0,weightKG:0}),P=l=>{W(l)},C=l=>{let p=0,m=0,$=0,f=0,c=0,b=0,u=0,g=0,d={},h={};_?.list.map((x,F)=>{x?.hbls.map((a,A)=>{m+=a?.weight*1;let s=a?.weight*H;c+=s;let n=a?.pricePerPound?a?.pricePerPound*1:0,t=a?.dutyFee?Number(a?.dutyFee):0;n&&!h[n]&&(h[n]=0),h[n]+=s*1,p+=s*1,$+=s*n+t,f+=s*3;let y=s*n+t-s*3;u+=y;let r=x?.billedBy||"anonymus";if(g+=t,!d[r]){let v=N("M023009")?.usersListSSG?.filter(B=>B.id===r);d[r]={total:0,name:v?.[0]?.label}}d[r].total+=s*n+t}),b+=1}),S({cost:f,sales:$,lbs:c,bulto:b,gross:u,billedBy:d,weight:p,prices:h,aranceles:g,weightKG:m})};return K(()=>{C()}),(()=>{var l=Z(),p=l.firstChild,m=p.firstChild,$=m.firstChild,f=$.nextSibling,c=f.firstChild,b=c.nextSibling,u=p.nextSibling,g=u.firstChild,d=g.firstChild,h=d.nextSibling,x=g.nextSibling,F=x.firstChild,a=F.nextSibling,A=x.nextSibling,s=A.firstChild,n=s.nextSibling;return l.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),c.$$click=()=>P(_?.item?.bagnumber),i(c,()=>_?.item?.bagnumber),b.$$click=C,i(b,o(w,{name:"printer",size:32})),u.style.setProperty("padding","16px"),i(d,o(w,{name:"open_package_file_outline",size:22})),i(h,()=>e()?.bulto?.toFixed(2)),i(F,o(w,{name:"weight-kilogram",size:22})),i(a,()=>e()?.weightKG?.toFixed(2)),i(s,o(w,{name:"weight-pound",size:22})),i(n,()=>e()?.weight?.toFixed(2)),i(l,o(k,{get when(){return e()?.bulto>0},get children(){return o(M,{get each(){return j(e()?.prices)},children:(t,y)=>o(k,{get when(){return e()?.prices?.[t]>0},get children(){var r=q(),v=r.firstChild;v.firstChild;var B=v.nextSibling,G=B.nextSibling,I=G.nextSibling,R=I.nextSibling;return R.firstChild,i(v,()=>(t*1).toFixed(2),null),i(G,()=>e()?.prices?.[t]?.toFixed(2)),i(R,()=>(e()?.prices?.[t]*t).toFixed(2),null),r}})})}}),null),i(l,o(k,{get when(){return e()?.aranceles>0},get children(){var t=X(),y=t.firstChild,r=y.nextSibling;return r.firstChild,i(r,()=>e()?.aranceles?.toFixed(2),null),t}}),null),O(t=>(t=L()?"76vw":"320px")!=null?l.style.setProperty("width",t):l.style.removeProperty("width")),l})()}const re=_=>{let e=_,S="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const P=new RegExp(S);return e.length===13&&P.test(e)&&(e=e.slice(3,12)),e};V(["click"]);export{se as default,re as parseTrcking};
