const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DpAiMh2e.js","assets/index-C6vutg0M.js","assets/index-B8E-m_hz.css","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-wJvY1U3o.js","assets/debounces-DQr651iQ.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as D,_ as I,a as z,m as G,i as l,d as o,f as L,e as V,t as k,F as W,S as B}from"./index-C6vutg0M.js";import{i as j}from"./globalSignal-CDF0Ia_2.js";import{c as K}from"./ShowQRPrintLabel-DoEKzYNk.js";import{a as N,O as X}from"./Util-Bqo0w8TL.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-DEuVy0QW.js";import"./Toast-DBGfBEiY.js";var Z=k('<div class="centerBx bottombx"><h5 class="">Aranceles</h5><h4 class="">$</h4>'),q=k('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Resumen de la Guia</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div></div><div class=" flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4>'),H=k('<div class="centerBx bottombx wt65"><h5 class=tr_bar_10>$</h5>X<h4 class=tr_bar_15></h4>=<h5 class=tr_bar_20>$</h5>');const S=D(()=>I(()=>import("./SVG-DpAiMh2e.js"),__vite__mapDeps([0,1,2,3])));D(()=>I(()=>import("./DropDwnSearch-wJvY1U3o.js"),__vite__mapDeps([4,1,2,5,0,3,6])));const T=2.20462;function ne(b){z({});const[e,w]=z({totals:0,weight:0}),P=t=>{K(t)},C=t=>{let u=0,v=0,$=0,f=0,_=0,x=0,g=0,a={},d={};b?.list.map((y,F)=>{y?.hbls.map((n,E)=>{let r=n?.weight*T;f+=r;let s=n?.pricePerPound?n?.pricePerPound*1:0,p=n?.dutyFee?Number(n?.dutyFee):0;s&&!d[s]&&(d[s]=0),d[s]+=r*1,u+=r*1,v+=r*s+p,$+=r*3;let i=r*s+p-r*3;x+=i;let c=y?.billedBy||"anonymus";if(g+=p,!a[c]){let h=N("M023009")?.usersListSSG?.filter(m=>m.id===c);a[c]={total:0,name:h?.[0]?.label}}a[c].total+=r*s+p}),_+=1}),w({cost:$,sales:v,lbs:f,bulto:_,gross:x,billedBy:a,weight:u,prices:d,aranceles:g})};return G(()=>{C()}),(()=>{var t=q(),u=t.firstChild,v=u.firstChild,$=v.firstChild,f=$.nextSibling,_=f.firstChild,x=_.nextSibling,g=u.nextSibling,a=g.firstChild,d=a.firstChild,y=d.nextSibling,F=a.nextSibling,n=F.firstChild,E=n.nextSibling,r=F.nextSibling,s=r.firstChild,p=s.nextSibling;return t.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),_.$$click=()=>P(b?.item?.bagnumber),l(_,()=>b?.item?.bagnumber),x.$$click=C,l(x,o(S,{name:"printer",size:32})),g.style.setProperty("padding","16px"),l(d,o(S,{name:"open_package_file_outline",size:22})),l(y,()=>e()?.bulto?.toFixed(2)),l(n,o(S,{name:"weight-kilogram",size:22})),l(E,()=>e()?.weight?.toFixed(2)),l(s,o(S,{name:"weight-pound",size:22})),l(p,()=>(e()?.weight*T).toFixed(2)),l(t,o(B,{get when(){return e()?.bulto>0},get children(){return o(W,{get each(){return X(e()?.prices)},children:(i,c)=>o(B,{get when(){return e()?.prices?.[i]>0},get children(){var h=H(),m=h.firstChild;m.firstChild;var M=m.nextSibling,A=M.nextSibling,O=A.nextSibling,R=O.nextSibling;return R.firstChild,l(m,()=>(i*1).toFixed(2),null),l(A,()=>e()?.prices?.[i]?.toFixed(2)),l(R,()=>(e()?.prices?.[i]*i).toFixed(2),null),h}})})}}),null),l(t,o(B,{get when(){return e()?.aranceles>0},get children(){var i=Z(),c=i.firstChild,h=c.nextSibling;return h.firstChild,l(h,()=>e()?.aranceles?.toFixed(2),null),i}}),null),L(i=>(i=j()?"76vw":"320px")!=null?t.style.setProperty("width",i):t.style.removeProperty("width")),t})()}const oe=b=>{let e=b,w="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const P=new RegExp(w);return e.length===13&&P.test(e)&&(e=e.slice(3,12)),e};V(["click"]);export{ne as default,oe as parseTrcking};