const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-hKEW-O6U.js","assets/index-CX08qMr9.js","assets/index-W9fcnr7G.css","assets/SVG-DBuw3s_z.js","assets/index-Ci0zXM0r.js","assets/ContainerElasticView-Bee_KcDd.js","assets/ContainerElasticView-LzOd6fDI.css"])))=>i.map(i=>d[i]);
import{l as u,_ as h,d as l,i,S as n,F as x,f,g as C,t as a}from"./index-CX08qMr9.js";import{O as w}from"./Util-D2YTzGDx.js";import{i as o}from"./globalSignal-wLi-6lpX.js";import{isValNum as v}from"./DashInventoryLoc-GjOfYj16.js";import"./index-Ci0zXM0r.js";import"./DialogHRM-Dg-o5fgk.js";import"./AddInventory-D3spAuF1.js";import"./debounces-Bxi15UZt.js";import"./DashProducts-CMcnyL0R.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-hKEW-O6U.js";var b=a('<p class=" textleft fullName_consigne">'),s=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),F=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>'),y=a('<div class=" bottombx tr_bar_40">'),E=a('<div><div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">'),P=a('<div class="_dsplFlx bottombx tr_bar_40"><h5> lb</h5><h4>X</h4><h5>$'),k=a('<div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">');const c=u(()=>h(()=>import("./FlexSpace-hKEW-O6U.js"),__vite__mapDeps([0,1,2])));u(()=>h(()=>import("./SVG-DBuw3s_z.js"),__vite__mapDeps([3,1,2,4])));const I=u(()=>h(()=>import("./ContainerElasticView-Bee_KcDd.js"),__vite__mapDeps([5,1,2,3,4,6])));function B(e){return l(n,{get when(){return e?.item?.stock},get children(){var _=E(),m=_.firstChild,d=m.firstChild;return i(d,l(n,{get when(){return e?.item?.productName},get children(){var t=b();return i(t,()=>e?.item?.productName),t}})),i(m,l(c,{}),null),i(m,l(n,{get when(){return!o()&&e?.item?.shipingCost},get children(){var t=s(),r=t.firstChild;return r.firstChild,i(r,()=>e?.item?.shipingCost?.toFixed(2),null),t}}),null),i(m,l(c,{}),null),i(m,l(n,{get when(){return!o()&&e?.item?.stock},get children(){var t=F(),r=t.firstChild;return i(r,()=>e?.item?.stock?.toFixed(2)),t}}),null),i(m,l(n,{get when(){return!o()&&e?.item?.price},get children(){var t=s(),r=t.firstChild;return r.firstChild,i(r,()=>(e?.item?.price/e?.item?.stock).toFixed(2),null),t}}),null),i(m,l(n,{get when(){return!o()&&e?.item?.price},get children(){var t=s(),r=t.firstChild;return r.firstChild,i(r,()=>(v(e?.item?.price)+v(e?.item?.shipingCost)).toFixed(2),null),t}}),null),i(_,l(I,{get children(){var t=y();return i(t,l(n,{get when(){return e?.item?.invoices},get children(){return l(x,{get each(){return w(e?.item?.invoices)},children:(r,g)=>l(O,{get item(){return e?.item?.invoices?.[r]},key:r})})}})),t}}),null),f(()=>C(_,`client_item_box gWXAaj jlytmu inventory ${o()?"isMobile":""}`)),_}})}const O=e=>l(n,{get when(){return e?.item?.weight},get children(){var _=k(),m=_.firstChild;return i(m,l(n,{get when(){return e?.key},get children(){var d=b();return i(d,()=>e?.key),d}})),i(_,l(c,{}),null),i(_,l(n,{get when(){return!o()&&e?.item?.weight&&e?.item?.pricePerPound},get children(){var d=P(),t=d.firstChild,r=t.firstChild,g=t.nextSibling,$=g.nextSibling;return $.firstChild,i(t,()=>e?.item?.weight,r),i($,()=>e?.item?.pricePerPound?.toFixed(2),null),d}}),null),_}});export{B as default};
