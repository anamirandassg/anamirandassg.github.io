const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-ZuIl_VRM.js","assets/index-CMPFS5l3.js","assets/index-CaL-WNrg.css","assets/SVG-Bw-dPoFc.js","assets/Util-7ERmh4Cp.js","assets/ShowQRInventory-Dr-FXwr2.js","assets/ShowQRPrintLabel-dd3StqUp.js","assets/PDFButton-DXdwVZ_H.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-hw3Kqgbm.js","assets/InitPrintServices-C5c3gOIX.js","assets/Toast-DS_YK2AF.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as b,_ as f,f as l,i as t,S as o,j as v,w as x,h as w,m as E,d as I,t as d,g as A}from"./index-CMPFS5l3.js";import{h as C,e as T,a as D,g as F,f as R}from"./Util-7ERmh4Cp.js";import{OpenToast as O}from"./Toast-DS_YK2AF.js";import{A as Y}from"./components-CwIDaYvQ.js";var k=d('<p class="textleft fullName_consigne">'),B=d('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),L=d('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),y=d('<div class="icon_status centerBx ">'),N=d('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5></h5></div><div class="centerBx tr_bar_10">');const g=b(()=>f(()=>import("./FlexSpace-ZuIl_VRM.js"),__vite__mapDeps([0,1,2]))),$=b(()=>f(()=>import("./SVG-Bw-dPoFc.js"),__vite__mapDeps([3,1,2,4])));b(()=>f(()=>import("./ShowQRInventory-Dr-FXwr2.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function q(r){const _=async()=>{let i={id:r?.item?.ssg_sorder_key,businessId:A?.profile?.businessYId};x()?(await z(i),r?.refetch()):O({text:"No se puede eliminar",timeout:3500,theme:"red",id:D()})},h=i=>r?.item?.products?.reduce((m,a)=>m+a.price*a.qty,0),c=async i=>{};let p={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return l(o,{get when(){return r?.item?.invoice},get children(){var i=N(),n=i.firstChild,m=n.firstChild,a=m.nextSibling,S=a.firstChild,s=a.nextSibling;return t(m,l($,{get name(){return p[r?.item?.type]},size:24})),t(S,()=>C(r?.item?.createDate)),t(a,l(o,{get when(){return r?.item?.invoice},get children(){return l(Y,{get href(){return`/order-detail?mId=${r?.item?.ssg_sorder_key}`},get children(){var e=k();return t(e,()=>r?.item?.invoice),e}})}}),null),t(n,l(g,{}),s),t(n,l(o,{get when(){return!v()},get children(){var e=B(),u=e.firstChild;return t(u,()=>T("storeGroupBy")?.[r?.item?.store]?.label),e}}),s),t(n,l(g,{}),s),t(n,l(o,{get when(){return!v()},get children(){var e=L(),u=e.firstChild;return u.firstChild,t(u,()=>h()?.toFixed(2),null),e}}),s),t(n,l(g,{}),s),t(s,l(o,{get when(){return r?.item?.type==="SALES"},get children(){var e=y();return e.$$click=c,t(e,l($,{name:"printer",size:24})),e}}),null),t(s,l(o,{get when(){return x()},get children(){var e=y();return e.$$click=_,t(e,l($,{name:"outline_delete",size:24})),e}}),null),w(()=>E(i,`client_item_box gWXAaj jlytmu inventory sales ${v()?"isMobile":""}`)),i}})}const z=async r=>{let _={params:r},h=F(431009);_={..._,...h};const c=await R(_);return c?.data?.error?{}:c?.data};I(["click"]);export{q as default};
