const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BP1xokXW.js","assets/index-D0zGioQA.js","assets/index-DvBVPk7j.css","assets/SVG-BDd4Tgjc.js","assets/Util-C4Gv2Rs-.js","assets/ShowQRInventory-BI99mUpV.js","assets/ShowQRPrintLabel-DppArMya.js","assets/PDFButton-CCQT0yk3.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BaZy4qZc.js","assets/InitPrintServices-COQVt4ve.js","assets/Toast-vo5gGSTV.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as f,d as i,i as t,S as o,f as v,w as x,e as w,g as E,h as I,t as c,n as A}from"./index-D0zGioQA.js";import{e as C,d as T,b as D,c as F,f as R}from"./Util-C4Gv2Rs-.js";import{OpenToast as O}from"./Toast-vo5gGSTV.js";import{A as Y}from"./components-um3Ola3P.js";var k=c('<p class="textleft fullName_consigne">'),B=c('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),L=c('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),y=c('<div class="icon_status centerBx ">'),N=c('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5></h5></div><div class="centerBx tr_bar_10">');const g=$(()=>f(()=>import("./FlexSpace-BP1xokXW.js"),__vite__mapDeps([0,1,2]))),b=$(()=>f(()=>import("./SVG-BDd4Tgjc.js"),__vite__mapDeps([3,1,2,4])));$(()=>f(()=>import("./ShowQRInventory-BI99mUpV.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function X(r){const _=async()=>{let l={id:r?.item?.ssg_inventory_key,businessId:A?.profile?.businessYId};x()?(await z(l),r?.refetch()):O({text:"No se puede eliminar",timeout:3500,theme:"red",id:D()})},h=l=>r?.item?.products.reduce((m,a)=>m+a.price*a.qty,0),d=async l=>{};let p={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return i(o,{get when(){return r?.item?.invoice},get children(){var l=N(),n=l.firstChild,m=n.firstChild,a=m.nextSibling,S=a.firstChild,s=a.nextSibling;return t(m,i(b,{get name(){return p[r?.item?.type]},size:24})),t(S,()=>C(r?.item?.createDate)),t(a,i(o,{get when(){return r?.item?.invoice},get children(){return i(Y,{get href(){return`/order-detail?mId=${r?.item?.ssg_sorder_key}`},get children(){var e=k();return t(e,()=>r?.item?.invoice),e}})}}),null),t(n,i(g,{}),s),t(n,i(o,{get when(){return!v()},get children(){var e=B(),u=e.firstChild;return t(u,()=>T("storeGroupBy")?.[r?.item?.store]?.label),e}}),s),t(n,i(g,{}),s),t(n,i(o,{get when(){return!v()},get children(){var e=L(),u=e.firstChild;return u.firstChild,t(u,()=>h()?.toFixed(2),null),e}}),s),t(n,i(g,{}),s),t(s,i(o,{get when(){return r?.item?.type==="SALES"},get children(){var e=y();return e.$$click=d,t(e,i(b,{name:"printer",size:24})),e}}),null),t(s,i(o,{get when(){return x()},get children(){var e=y();return e.$$click=_,t(e,i(b,{name:"outline_delete",size:24})),e}}),null),w(()=>E(l,`client_item_box gWXAaj jlytmu inventory ${v()?"isMobile":""}`)),l}})}const z=async r=>{let _={params:r},h=F(139005);_={..._,...h};const d=await R(_);return d?.data?.error?{}:d?.data};I(["click"]);export{X as default};
