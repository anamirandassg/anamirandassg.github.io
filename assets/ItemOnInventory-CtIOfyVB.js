const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-jF4ydPKD.js","assets/index-BWNX0He3.js","assets/index-W9fcnr7G.css","assets/SVG-CQeJUfOS.js","assets/index-Ci0zXM0r.js","assets/ShowQRInventory-6QCgBosb.js","assets/globalSignal-CnE3yxf9.js","assets/ShowQRPrintLabel-DyukJffm.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-B3KIQnKW.js","assets/Util-D2YTzGDx.js","assets/Toast-B4uuJkQb.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as b,_ as f,d as r,e as x,i as t,S as m,f as p,g as E,t as u,k as I}from"./index-BWNX0He3.js";import{p as S,a as w,b as A,f as C}from"./Util-D2YTzGDx.js";import{i as h}from"./globalSignal-CnE3yxf9.js";import{A as D}from"./components-BY5PzMan.js";import"./index-Ci0zXM0r.js";var F=u('<p class=" textleft fullName_consigne">'),R=u('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),T=u('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),Y=u('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5></h5></div><div class="icon_status centerBx tr_bar_10">');const g=b(()=>f(()=>import("./FlexSpace-jF4ydPKD.js"),__vite__mapDeps([0,1,2]))),y=b(()=>f(()=>import("./SVG-CQeJUfOS.js"),__vite__mapDeps([3,1,2,4])));b(()=>f(()=>import("./ShowQRInventory-6QCgBosb.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function P(e){const o=async()=>{let l={id:e?.item?.ssg_inventory_key,businessId:I?.profile?.businessYId};await k(l),e?.refetch()},v=l=>e?.item?.products.reduce((c,a)=>c+a.price*a.qty,0);let _={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return r(m,{get when(){return e?.item?.invoice},get children(){var l=Y(),n=l.firstChild,c=n.firstChild,a=c.nextSibling,$=a.firstChild,s=a.nextSibling;return t(c,r(y,{get name(){return _[e?.item?.type]},size:24})),t($,()=>S(e?.item?.createDate)),t(a,r(m,{get when(){return e?.item?.invoice},get children(){return r(D,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var i=F();return t(i,()=>e?.item?.invoice),i}})}}),null),t(n,r(g,{}),s),t(n,r(m,{get when(){return!h()},get children(){var i=R(),d=i.firstChild;return t(d,()=>w("storeGroupBy")?.[e?.item?.store]?.label),i}}),s),t(n,r(g,{}),s),t(n,r(m,{get when(){return!h()},get children(){var i=T(),d=i.firstChild;return d.firstChild,t(d,()=>v()?.toFixed(2),null),i}}),s),s.$$click=o,t(s,r(y,{name:"outline_delete",size:24})),p(()=>E(l,`client_item_box gWXAaj jlytmu inventory ${h()?"isMobile":""}`)),l}})}const k=async e=>{let o={params:e},v=A(139005);o={...o,...v};const _=await C(o);return _?.data?.error?{}:_?.data};x(["click"]);export{P as default};
