const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DEbuPAan.js","assets/index-BMo9JdU5.js","assets/index-DeAzZMb6.css","assets/SVG-CKIz6gh5.js","assets/index-Ci0zXM0r.js","assets/ContainerElasticView-BNxedEzz.js","assets/ContainerElasticView-LzOd6fDI.css"])))=>i.map(i=>d[i]);
import{l as o,_ as g,d as r,i,S as n,F as f,f as b,g as C,t as h}from"./index-BMo9JdU5.js";import{O as w}from"./Util-D2YTzGDx.js";import{i as d}from"./globalSignal-BE-U1QCH.js";import{isValNum as a}from"./DashInventoryLoc-B6tOaEOV.js";import"./index-Ci0zXM0r.js";import"./DialogHRM-DWsJikP8.js";import"./AddInventory-BjD3Nkqg.js";import"./debounces-QlmEzmS6.js";import"./DashProducts-BTwvtEXO.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-DEbuPAan.js";var x=h('<p class=" textleft fullName_consigne">'),c=h('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),F=h('<div class="_dsplFlx bottombx tr_bar_15"><h5>'),P=h('<div class=" bottombx tr_bar_40">'),S=h('<div><div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">'),y=h('<div class="_dsplFlx bottombx tr_bar_40"><h5> lb</h5><h4>X</h4><h5>$'),E=h('<div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">');const u=o(()=>g(()=>import("./FlexSpace-DEbuPAan.js"),__vite__mapDeps([0,1,2])));o(()=>g(()=>import("./SVG-CKIz6gh5.js"),__vite__mapDeps([3,1,2,4])));const k=o(()=>g(()=>import("./ContainerElasticView-BNxedEzz.js"),__vite__mapDeps([5,1,2,3,4,6])));function X(e){return r(n,{get when(){return e?.item?.stock},get children(){var m=S(),_=m.firstChild,s=_.firstChild;return i(s,r(n,{get when(){return e?.item?.productName},get children(){var t=x();return i(t,()=>e?.item?.productName),t}})),i(_,r(u,{}),null),i(_,r(n,{get when(){return!d()&&e?.item?.shipingCost},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>e?.item?.shipingCost?.toFixed(2),null),t}}),null),i(_,r(u,{}),null),i(_,r(n,{get when(){return!d()&&e?.item?.stock&&!e?.isSales},get children(){var t=F(),l=t.firstChild;return i(l,()=>e?.item?.stock?.toFixed(2)),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.price&&!e?.isSales},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>(e?.item?.price/e?.item?.stock).toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.price&&!e?.isSales},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>(a(e?.item?.price)+a(e?.item?.shipingCost)).toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.price&&e?.isSales},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>(a(e?.item?.price)-a(e?.item?.shipingCost)).toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.salePrice&&e?.isSales},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>a(e?.item?.salePrice)?.toFixed(2),null),t}}),null),i(_,r(n,{get when(){return!d()&&e?.item?.salePrice&&e?.isSales},get children(){var t=c(),l=t.firstChild;return l.firstChild,i(l,()=>(a(e?.item?.salePrice)+(a(e?.item?.price)-a(e?.item?.shipingCost))).toFixed(2),null),t}}),null),i(m,r(k,{get children(){var t=P();return i(t,r(n,{get when(){return e?.item?.invoices},get children(){return r(f,{get each(){return w(e?.item?.invoices)},children:(l,$)=>r(I,{get item(){return e?.item?.invoices?.[l]},key:l})})}})),t}}),null),b(()=>C(m,`client_item_box gWXAaj jlytmu inventory ${d()?"isMobile":""}`)),m}})}const I=e=>r(n,{get when(){return e?.item?.weight},get children(){var m=E(),_=m.firstChild;return i(_,r(n,{get when(){return e?.key},get children(){var s=x();return i(s,()=>e?.key),s}})),i(m,r(u,{}),null),i(m,r(n,{get when(){return!d()&&e?.item?.weight&&e?.item?.pricePerPound},get children(){var s=y(),t=s.firstChild,l=t.firstChild,$=t.nextSibling,v=$.nextSibling;return v.firstChild,i(t,()=>e?.item?.weight,l),i(v,()=>e?.item?.pricePerPound?.toFixed(2),null),s}}),null),m}});export{X as default};
