const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DlHZv_N2.js","assets/index-Cr_XxNZy.js","assets/index-mNJWtuMT.css","assets/SVG-BGyfL4_I.js","assets/Util-DZlMHKqJ.js","assets/ContainerElasticView-DVlwvXsP.js","assets/ContainerElasticView-LzOd6fDI.css"])))=>i.map(i=>d[i]);
import{l as o,_ as g,f as r,i,S as n,j as d,h as v,m as x,F as C,t as a}from"./index-Cr_XxNZy.js";import{O as F}from"./Util-DZlMHKqJ.js";import{isValNum as h}from"./DashInventoryLoc-DiG1T666.js";import"./DialogHRM-m0U22AiQ.js";import"./AddInventory-DjpV8SKv.js";import"./debounces-D5TyRSVD.js";import"./DashProducts-BONv2EMp.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-DlHZv_N2.js";var f=a('<p class=" textleft fullName_consigne">'),c=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),w=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>'),P=a('<div class="_dsplFlx bottombx tr_bar_15 red"><h5>$'),S=a("<div><h5>$"),y=a('<div class=" bottombx tr_bar_40">'),E=a('<div><div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">'),k=a('<div class="_dsplFlx bottombx tr_bar_40"><h5> lb</h5><h4>X</h4><h5>$'),I=a('<div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">');const u=o(()=>g(()=>import("./FlexSpace-DlHZv_N2.js"),__vite__mapDeps([0,1,2])));o(()=>g(()=>import("./SVG-BGyfL4_I.js"),__vite__mapDeps([3,1,2,4])));const O=o(()=>g(()=>import("./ContainerElasticView-DVlwvXsP.js"),__vite__mapDeps([5,1,2,3,4,6])));function X(e){return r(n,{get when(){return e?.item?.stock},get children(){var m=E(),_=m.firstChild,s=_.firstChild;return i(s,r(n,{get when(){return e?.item?.productName},get children(){var t=f();return i(t,()=>e?.item?.productName),t}})),i(_,r(u,{}),null),i(_,r(n,{get when(){return!d()&&e?.item?.shipingCost&&e?.isSales},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>e?.item?.shipingCost?.toFixed(2),null),t}}),null),i(_,r(u,{}),null),i(_,r(n,{get when(){return!d()&&e?.item?.stock&&!e?.isSales},get children(){var t=w(),l=t.firstChild;return i(l,()=>e?.item?.stock?.toFixed(2)),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.price},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>(e?.item?.price/e?.item?.stock).toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.price&&!e?.isSales},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>e?.item?.price?.toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.salePrice&&e?.isSales},get children(){var t=P(),l=t.firstChild;return l.firstChild,i(l,()=>(h(e?.item?.price)+h(e?.item?.shipingCost)).toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.salePrice&&e?.isSales},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>h(e?.item?.salePrice)?.toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.salePrice&&e?.isSales},get children(){var t=S(),l=t.firstChild;return l.firstChild,i(l,()=>(h(e?.item?.salePrice)+(h(e?.item?.price)+h(e?.item?.shipingCost))).toFixed(2),null),v(()=>x(t,`_dsplFlx bottombx tr_bar_15  ${e?.item?.salePrice-(e?.item?.shipingCost+e?.item?.cost)>0?"green":"red"}`)),t}}),null),i(m,r(O,{get children(){var t=y();return i(t,r(n,{get when(){return e?.item?.invoices},get children(){return r(C,{get each(){return F(e?.item?.invoices)},children:(l,$)=>r(N,{get item(){return e?.item?.invoices?.[l]},key:l})})}})),t}}),null),v(()=>x(m,`client_item_box gWXAaj jlytmu inventory ${d()?"isMobile":""}`)),m}})}const N=e=>r(n,{get when(){return e?.item?.weight},get children(){var m=I(),_=m.firstChild;return i(_,r(n,{get when(){return e?.key},get children(){var s=f();return i(s,()=>e?.key),s}})),i(m,r(u,{}),null),i(m,r(n,{get when(){return!d()&&e?.item?.weight&&e?.item?.pricePerPound},get children(){var s=k(),t=s.firstChild,l=t.firstChild,$=t.nextSibling,b=$.nextSibling;return b.firstChild,i(t,()=>e?.item?.weight,l),i(b,()=>e?.item?.pricePerPound?.toFixed(2),null),s}}),null),m}});export{X as default};
