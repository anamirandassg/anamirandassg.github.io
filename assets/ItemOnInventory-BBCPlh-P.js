const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-a1At56JQ.js","assets/index-D16NH-Ha.js","assets/index-BRlA1Q7g.css","assets/SVG-BFZDkuHM.js","assets/Util-CugZcr5q.js","assets/ShowQRInventory-BunISVtv.js","assets/ShowQRPrintLabel-C2QRNPhp.js","assets/fontkit.es-Bw_0IftY.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-kIHy6xNl.js","assets/Toast-DR5ncfch.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as x,e as i,i as r,S as _,j as v,x as p,f as C,m as A,h as F,t as h,g as k,A as E}from"./index-D16NH-Ha.js";import{h as D,e as O,a as P,O as R,g as w,f as I}from"./Util-CugZcr5q.js";import{OpenToast as T}from"./Toast-DR5ncfch.js";import{A as B}from"./components-DY77s8I7.js";var Y=h('<p class=" textleft fullName_consigne">'),q=h('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),S=h('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),L=h('<div class="icon_status centerBx ">'),j=h('<div class="centerBx tr_bar_10"><div class="icon_status centerBx ">'),N=h('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5>');const y=$(()=>x(()=>import("./FlexSpace-a1At56JQ.js"),__vite__mapDeps([0,1,2]))),b=$(()=>x(()=>import("./SVG-BFZDkuHM.js"),__vite__mapDeps([3,1,2,4])));$(()=>x(()=>import("./ShowQRInventory-BunISVtv.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));function K(e){const d=async()=>{let a={id:e?.item?.ssg_inventory_key,businessId:k?.profile?.businessYId};p()?(await Q(a),e?.refetch()):T({text:"No se puede eliminar",timeout:3500,theme:"red",id:P()})},n=a=>{const s=e?.item?.products?.reduce((g,m)=>g+m.price*m.qty,0);return e?.item?.transport&&e?.item?.transport*1,s},c=async a=>{let g=`${e?.item?.hbl} ${e?.item?.invoice}`,m=await M(g),f=0,t=0;R(m)?.map(l=>{m[l]?.hbls?.map(u=>{u?.hbl===e?.item?.hbl&&(f=(u?.weight*2.20462).toFixed(2)*1,t=u?.pricePerPound*1)})}),await z(e?.item?.ssg_inventory_key,{weight:f,pricePerPound:t})};let o={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return e?.item?.createDate||console.log(e?.item),i(_,{get when(){return e?.item?.invoice},get children(){var a=N(),s=a.firstChild,g=s.firstChild,m=g.nextSibling,f=m.firstChild;return r(g,i(b,{get name(){return o[e?.item?.type]},size:24})),r(f,()=>D(e?.item?.createDate||e?.item?.date||1734674400800)),r(m,i(_,{get when(){return e?.item?.invoice},get children(){return i(B,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var t=Y();return r(t,()=>e?.item?.invoice),t}})}}),null),r(s,i(y,{}),null),r(s,i(_,{get when(){return!v()},get children(){var t=q(),l=t.firstChild;return r(l,()=>O("storeGroupBy")?.[e?.item?.store]?.label),t}}),null),r(s,i(y,{}),null),r(s,i(_,{get when(){return!v()},get children(){var t=S(),l=t.firstChild;return l.firstChild,r(l,()=>n()?.toFixed(2),null),t}}),null),r(s,i(_,{get when(){return!v()&&e?.item?.hasTransportExp},get children(){var t=S(),l=t.firstChild;return l.firstChild,r(l,()=>(e?.item?.transport?e?.item?.transport*1:0)?.toFixed(2),null),t}}),null),r(s,i(y,{}),null),r(s,i(_,{get when(){return p()},get children(){var t=j(),l=t.firstChild;return r(t,i(_,{get when(){return e?.item?.type==="SALES"},get children(){var u=L();return u.$$click=c,r(u,i(b,{name:"grid",size:24})),u}}),l),l.$$click=d,r(l,i(b,{name:"outline_delete",size:24})),t}}),null),C(()=>A(a,`client_item_box gWXAaj jlytmu inventory ${v()?"isMobile":""}`)),a}})}const Q=async e=>{let d={params:e},n=w(139005);d={...d,...n};const c=await I(d);return c?.data?.error?{}:c?.data},z=async(e,d)=>{let n={...d},c={params:{businessId:k?.profile?.businessYId,id:e},form:n},o=w(139004);c={...c,...o};{const a=await I(c);return a?.data?.error?{}:a?.data}},M=async(e,d)=>{let n={params:{idairguide:"all"},fldsQry:["agency","idairguide","currentStatus","ssg_track_key","hbls"]};e&&e.split(" ").map((o,a)=>{o&&(n.params[":search"+a]=o.trim())}),E?.roles?.agency&&(n.params[":agency"]=E?.roles?.agency+"");let c=w(802001);if(n={...n,...c},Object.keys(n.params)?.length>=2){const o=await I(n);return o?.data?.error?{}:o}return{}};F(["click"]);export{K as default};
