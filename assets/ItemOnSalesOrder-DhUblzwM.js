const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DK0Sss4S.js","assets/index-twYRq3uj.js","assets/index-DaYrm968.css","assets/SVG-CpHyQroA.js","assets/Util-B8-DWw-6.js","assets/ShowQRInventory-DBwVX0ex.js","assets/ShowQRPrintLabel-lg8RAxPK.js","assets/fontkit.es-BHcUmD3g.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-BhTuseMZ.js","assets/Toast-B1ZQpAb6.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as b,_ as x,f as r,i as e,S as _,j as p,x as y,h as E,m as w,d as I,t as c,g as C}from"./index-twYRq3uj.js";import{h as A,e as D,a as F,g as R,f as T}from"./Util-B8-DWw-6.js";import{OpenToast as B}from"./Toast-B1ZQpAb6.js";import{i as o}from"./DashOrdersOnSales-C7cRw1oZ.js";import{A as N}from"./components-CJBtVVNK.js";import"./App.module-CbHnVtRQ.js";import"./DialogHRM-B0ugz95c.js";import"./ShowQRPrintLabel-lg8RAxPK.js";import"./fontkit.es-BHcUmD3g.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-BhTuseMZ.js";import"./DashSalePOS-CY4dHpcW.js";import"./browser-image-compression-BVJ4p9S0.js";import"./handelImagesServices-B9p2PKdw.js";import"./DashInventoryMov-Bh6TlvM8.js";import"./DashInventory-BQcKYrF0.js";var O=c('<p class="textleft fullName_consigne">'),Y=c('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),k=c('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),L=c('<div class="icon_status centerBx ">'),P=c('<div class="centerBx tr_bar_10"><div class="icon_status centerBx ">'),V=c('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5>');const f=b(()=>x(()=>import("./FlexSpace-DK0Sss4S.js"),__vite__mapDeps([0,1,2]))),$=b(()=>x(()=>import("./SVG-CpHyQroA.js"),__vite__mapDeps([3,1,2,4])));b(()=>x(()=>import("./ShowQRInventory-DBwVX0ex.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));function le(t){const d=async()=>{let a={id:t?.item?.ssg_sorder_key,businessId:C?.profile?.businessYId};y()?(await q(a),t?.refetch()):B({text:"No se puede eliminar",timeout:3500,theme:"red",id:F()})},v=a=>{const l=t?.item?.products?.reduce?.((m,n)=>m+o(n.salePrice)*o(n.qty*-1),0),h=t?.item?.reservas?.reduce?.((m,n)=>m+o(n.qty)*o(n.price)+o(n.arancel),0);return o(l)+o(h)},u=async a=>{};let S={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return r(_,{get when(){return t?.item?.invoice},get children(){var a=V(),l=a.firstChild,h=l.firstChild,m=h.nextSibling,n=m.firstChild;return e(h,r($,{get name(){return S[t?.item?.type]},size:24})),e(n,()=>A(t?.item?.createDate)),e(m,r(_,{get when(){return t?.item?.invoice},get children(){return r(N,{get href(){return`/order-detail?mId=${t?.item?.ssg_sorder_key}`},get children(){var i=O();return e(i,()=>t?.item?.invoice),i}})}}),null),e(l,r(f,{}),null),e(l,r(_,{get when(){return!p()},get children(){var i=Y(),s=i.firstChild;return e(s,()=>D("storeGroupBy")?.[t?.item?.store]?.label),i}}),null),e(l,r(f,{}),null),e(l,r(_,{get when(){return!p()},get children(){var i=k(),s=i.firstChild;return s.firstChild,e(s,()=>v()?.toFixed(2),null),i}}),null),e(l,r(f,{}),null),e(l,r(_,{get when(){return y()},get children(){var i=P(),s=i.firstChild;return e(i,r(_,{get when(){return t?.item?.type==="SALES"},get children(){var g=L();return g.$$click=u,e(g,r($,{name:"printer",size:24})),g}}),s),s.$$click=d,e(s,r($,{name:"outline_delete",size:24})),i}}),null),E(()=>w(a,`client_item_box gWXAaj jlytmu inventory sales ${p()?"isMobile":""}`)),a}})}const q=async t=>{let d={params:t},v=R(431009);d={...d,...v};const u=await T(d);return u?.data?.error?{}:u?.data};I(["click"]);export{le as default};
