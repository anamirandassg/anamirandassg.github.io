const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-D475H7BK.js","assets/index-BnhUWhFw.js","assets/index-PRcoyGS_.css","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DWoDIVoR.js","assets/debounces-x6XSEqns.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as T,_ as D,a as z,m as K,i,d as a,f as M,e as O,t as E,F as L,S as k}from"./index-BnhUWhFw.js";import{i as V}from"./globalSignal-Dkctqzbo.js";import{c as W}from"./ShowQRPrintLabel-CT2QqEZk.js";import{a as j,O as N}from"./Util-D886uaAp.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-BbVI7Xg0.js";import"./Toast-DzTQahTr.js";var X=E('<div class="centerBx bottombx"><h5 class="">Aranceles</h5><h4 class="">$</h4>'),Z=E('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Resumen de la Guia</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div></div><div class=" flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4>'),q=E('<div class="centerBx bottombx wt65"><h5 class=tr_bar_10>$</h5>X<h4 class=tr_bar_15></h4>=<h5 class=tr_bar_20>$</h5>');const w=T(()=>D(()=>import("./SVG-D475H7BK.js"),__vite__mapDeps([0,1,2,3])));T(()=>D(()=>import("./DropDwnSearch-DWoDIVoR.js"),__vite__mapDeps([4,1,2,5,0,3,6])));const H=2.20462;function ne(_){z({});const[e,S]=z({totals:0,weight:0,weightKG:0}),P=l=>{W(l)},C=l=>{let p=0,v=0,$=0,f=0,c=0,b=0,u=0,g=0,d={},h={};_?.list.map((x,F)=>{x?.hbls.map((o,A)=>{v+=o?.weight*1;let r=o?.weight*H;c+=r;let n=o?.pricePerPound?o?.pricePerPound*1:0,t=o?.dutyFee?Number(o?.dutyFee):0;n&&!h[n]&&(h[n]=0),h[n]+=r*1,p+=r*1,$+=r*n+t,f+=r*3;let y=r*n+t-r*3;u+=y;let s=x?.billedBy||"anonymus";if(g+=t,!d[s]){let m=j("M023009")?.usersListSSG?.filter(B=>B.id===s);d[s]={total:0,name:m?.[0]?.label}}d[s].total+=r*n+t}),b+=1}),S({cost:f,sales:$,lbs:c,bulto:b,gross:u,billedBy:d,weight:p,prices:h,aranceles:g,weightKG:v})};return K(()=>{C()}),(()=>{var l=Z(),p=l.firstChild,v=p.firstChild,$=v.firstChild,f=$.nextSibling,c=f.firstChild,b=c.nextSibling,u=p.nextSibling,g=u.firstChild,d=g.firstChild,h=d.nextSibling,x=g.nextSibling,F=x.firstChild,o=F.nextSibling,A=x.nextSibling,r=A.firstChild,n=r.nextSibling;return l.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),c.$$click=()=>P(_?.item?.bagnumber),i(c,()=>_?.item?.bagnumber),b.$$click=C,i(b,a(w,{name:"printer",size:32})),u.style.setProperty("padding","16px"),i(d,a(w,{name:"open_package_file_outline",size:22})),i(h,()=>e()?.bulto?.toFixed(2)),i(F,a(w,{name:"weight-kilogram",size:22})),i(o,()=>e()?.weightKG?.toFixed(2)),i(r,a(w,{name:"weight-pound",size:22})),i(n,()=>e()?.weight?.toFixed(2)),i(l,a(k,{get when(){return e()?.bulto>0},get children(){return a(L,{get each(){return N(e()?.prices)},children:(t,y)=>a(k,{get when(){return e()?.prices?.[t]>0},get children(){var s=q(),m=s.firstChild;m.firstChild;var B=m.nextSibling,G=B.nextSibling,I=G.nextSibling,R=I.nextSibling;return R.firstChild,i(m,()=>(t*1).toFixed(2),null),i(G,()=>e()?.prices?.[t]?.toFixed(2)),i(R,()=>(e()?.prices?.[t]*t).toFixed(2),null),s}})})}}),null),i(l,a(k,{get when(){return e()?.aranceles>0},get children(){var t=X(),y=t.firstChild,s=y.nextSibling;return s.firstChild,i(s,()=>e()?.aranceles?.toFixed(2),null),t}}),null),M(t=>(t=V()?"76vw":"320px")!=null?l.style.setProperty("width",t):l.style.removeProperty("width")),l})()}const oe=_=>{let e=_,S="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const P=new RegExp(S);return e.length===13&&P.test(e)&&(e=e.slice(3,12)),e};O(["click"]);export{ne as default,oe as parseTrcking};
