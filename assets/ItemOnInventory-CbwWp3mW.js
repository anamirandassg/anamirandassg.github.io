const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CYEOxF3r.js","assets/index-D3-TnOrJ.js","assets/index-DeAzZMb6.css","assets/SVG-ChkZ6H0_.js","assets/index-Ci0zXM0r.js","assets/ShowQRInventory-GpQHT956.js","assets/globalSignal-BFEhR4Mp.js","assets/ShowQRPrintLabel-BQgWBKXg.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-BbVI7Xg0.js","assets/Util-D886uaAp.js","assets/Toast-XizzrJX6.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as p,d as l,e as E,i as r,S as u,q as S,f as C,g as A,t as g,k as w,v as x}from"./index-D3-TnOrJ.js";import{p as F,a as O,g as P,O as R,b as I,f as k}from"./Util-D886uaAp.js";import{i as b}from"./globalSignal-BFEhR4Mp.js";import{OpenToast as T}from"./Toast-XizzrJX6.js";import{A as B}from"./components-CJmVQGIH.js";import"./index-Ci0zXM0r.js";var D=g('<p class=" textleft fullName_consigne">'),Y=g('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),L=g('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),q=g('<div class="icon_status centerBx ">'),N=g('<div class="centerBx tr_bar_10"><div class="icon_status centerBx ">'),j=g('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5>');const f=$(()=>p(()=>import("./FlexSpace-CYEOxF3r.js"),__vite__mapDeps([0,1,2]))),y=$(()=>p(()=>import("./SVG-ChkZ6H0_.js"),__vite__mapDeps([3,1,2,4])));$(()=>p(()=>import("./ShowQRInventory-GpQHT956.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function U(e){const h=async()=>{e?.item?.ssg_inventory_key,w?.profile?.businessYId,T({text:"No se puede eliminar",timeout:3500,theme:"red",id:P()})},n=i=>e?.item?.products.reduce((_,d)=>_+d.price*d.qty,0),c=async i=>{let _=`${e?.item?.hbl} ${e?.item?.invoice}`,d=await M(_),v=0,t=0;R(d)?.map(s=>{d[s]?.hbls?.map(m=>{m?.hbl===e?.item?.hbl&&(v=(m?.weight*2.20462).toFixed(2)*1,t=m?.pricePerPound*1)})}),await z(e?.item?.ssg_inventory_key,{weight:v,pricePerPound:t})};let a={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return l(u,{get when(){return e?.item?.invoice},get children(){var i=j(),o=i.firstChild,_=o.firstChild,d=_.nextSibling,v=d.firstChild;return r(_,l(y,{get name(){return a[e?.item?.type]},size:24})),r(v,()=>F(e?.item?.createDate)),r(d,l(u,{get when(){return e?.item?.invoice},get children(){return l(B,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var t=D();return r(t,()=>e?.item?.invoice),t}})}}),null),r(o,l(f,{}),null),r(o,l(u,{get when(){return!b()},get children(){var t=Y(),s=t.firstChild;return r(s,()=>O("storeGroupBy")?.[e?.item?.store]?.label),t}}),null),r(o,l(f,{}),null),r(o,l(u,{get when(){return!b()},get children(){var t=L(),s=t.firstChild;return s.firstChild,r(s,()=>n()?.toFixed(2),null),t}}),null),r(o,l(f,{}),null),r(o,l(u,{get when(){return S()},get children(){var t=N(),s=t.firstChild;return r(t,l(u,{get when(){return e?.item?.type==="SALES"},get children(){var m=q();return m.$$click=c,r(m,l(y,{name:"grid",size:24})),m}}),s),s.$$click=h,r(s,l(y,{name:"outline_delete",size:24})),t}}),null),C(()=>A(i,`client_item_box gWXAaj jlytmu inventory ${b()?"isMobile":""}`)),i}})}const z=async(e,h)=>{let n={...h},c={params:{businessId:w?.profile?.businessYId,id:e},form:n},a=I(139004);c={...c,...a};{const i=await k(c);return console.log(c),console.log(i),i?.data?.error?{}:i?.data}},M=async(e,h)=>{let n={params:{idairguide:"all"},fldsQry:["agency","idairguide","currentStatus","ssg_track_key","hbls"]};e&&e.split(" ").map((a,i)=>{a&&(n.params[":search"+i]=a.trim())}),x?.roles?.agency&&(n.params[":agency"]=x?.roles?.agency+"");let c=I(802001);if(n={...n,...c},Object.keys(n.params)?.length>=2){const a=await k(n);return a?.data?.error?{}:a}return{}};E(["click"]);export{U as default};
