const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Bhub-XBy.js","assets/index-JeM1UUlF.js","assets/index-lCkr9jrN.css","assets/SVG-tLQf-akW.js","assets/ContainerElasticView-DCagHpEi.js","assets/ContainerElasticView-LzOd6fDI.css"])))=>i.map(i=>d[i]);
import{l as g,_ as o,d as r,i,S as n,g as m,e as v,f as x,F as C,O as F,t as a}from"./index-JeM1UUlF.js";import{isValNum as c}from"./DashInventoryLoc-DwIdGmla.js";import"./DialogHRM-CVXfSPfa.js";import"./AddInventory-RTXWOEjl.js";import"./debounces-BsrWG7xD.js";import"./DashProducts-C7s_1-sB.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-Bhub-XBy.js";var f=a('<p class=" textleft fullName_consigne">'),h=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),w=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>'),P=a('<div class="_dsplFlx bottombx tr_bar_15 red"><h5>$'),S=a("<div><h5>$"),y=a('<div class=" bottombx tr_bar_40">'),E=a('<div><div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">'),k=a('<div class="_dsplFlx bottombx tr_bar_40"><h5> lb</h5><h4>X</h4><h5>$'),I=a('<div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">');const u=g(()=>o(()=>import("./FlexSpace-Bhub-XBy.js"),__vite__mapDeps([0,1,2])));g(()=>o(()=>import("./SVG-tLQf-akW.js"),__vite__mapDeps([3,1,2])));const O=g(()=>o(()=>import("./ContainerElasticView-DCagHpEi.js"),__vite__mapDeps([4,1,2,3,5])));function B(e){return r(n,{get when(){return e?.item?.stock},get children(){var d=E(),_=d.firstChild,s=_.firstChild;return i(s,r(n,{get when(){return e?.item?.productName},get children(){var t=f();return i(t,()=>e?.item?.productName),t}})),i(_,r(u,{}),null),i(_,r(n,{get when(){return!m()&&e?.item?.shipingCost&&e?.isSales},get children(){var t=h(),l=t.firstChild;return l.firstChild,i(l,()=>e?.item?.shipingCost?.toFixed(2),null),t}}),null),i(_,r(u,{}),null),i(_,r(n,{get when(){return!m()&&e?.item?.stock&&!e?.isSales},get children(){var t=w(),l=t.firstChild;return i(l,()=>e?.item?.stock?.toFixed(2)),t}}),null),i(_,r(n,{get when(){return!m()&&e?.item?.price},get children(){var t=h(),l=t.firstChild;return l.firstChild,i(l,()=>(e?.item?.price/e?.item?.stock).toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!m()&&e?.item?.price&&!e?.isSales},get children(){var t=h(),l=t.firstChild;return l.firstChild,i(l,()=>e?.item?.price?.toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!m()&&e?.item?.salePrice&&e?.isSales},get children(){var t=P(),l=t.firstChild;return l.firstChild,i(l,()=>(c(e?.item?.price)+c(e?.item?.shipingCost)).toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!m()&&e?.item?.salePrice&&e?.isSales},get children(){var t=h(),l=t.firstChild;return l.firstChild,i(l,()=>c(e?.item?.salePrice)?.toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!m()&&e?.item?.salePrice&&e?.isSales},get children(){var t=S(),l=t.firstChild;return l.firstChild,i(l,()=>(c(e?.item?.salePrice)+(c(e?.item?.price)+c(e?.item?.shipingCost))).toFixed(2),null),v(()=>x(t,`_dsplFlx bottombx tr_bar_15  ${e?.item?.salePrice-(e?.item?.shipingCost+e?.item?.cost)>0?"green":"red"}`)),t}}),null),i(d,r(O,{get children(){var t=y();return i(t,r(n,{get when(){return e?.item?.invoices},get children(){return r(C,{get each(){return F(e?.item?.invoices)},children:(l,$)=>r(N,{get item(){return e?.item?.invoices?.[l]},key:l})})}})),t}}),null),v(()=>x(d,`client_item_box gWXAaj jlytmu inventory ${m()?"isMobile":""}`)),d}})}const N=e=>r(n,{get when(){return e?.item?.weight},get children(){var d=I(),_=d.firstChild;return i(_,r(n,{get when(){return e?.key},get children(){var s=f();return i(s,()=>e?.key),s}})),i(d,r(u,{}),null),i(d,r(n,{get when(){return!m()&&e?.item?.weight&&e?.item?.pricePerPound},get children(){var s=k(),t=s.firstChild,l=t.firstChild,$=t.nextSibling,b=$.nextSibling;return b.firstChild,i(t,()=>e?.item?.weight,l),i(b,()=>e?.item?.pricePerPound?.toFixed(2),null),s}}),null),d}});export{B as default};
