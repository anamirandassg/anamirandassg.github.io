const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DowtU6xW.js","assets/index-ulQ-TQRi.js","assets/index-lCkr9jrN.css","assets/SVG-HbM4daMy.js","assets/ShowQRInventory-Dj0BUj3P.js","assets/ShowQRPrintLabel-BYQ9prbT.js","assets/PDFButton-Dz6VzGAS.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-CsdXM_oZ.js","assets/InitPrintServices-Bo3sBUqm.js","assets/Toast-BqY88JNg.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as p,d as l,i as r,y as S,S as u,g as b,o as k,E as C,e as A,f as F,h as O,t as g,n as w,j as P,O as R,p as E,q as I,K as x}from"./index-ulQ-TQRi.js";import{OpenToast as T}from"./Toast-BqY88JNg.js";import{A as B}from"./components-BzcrQuqI.js";var D=g('<p class=" textleft fullName_consigne">'),Y=g('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),L=g('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),j=g('<div class="icon_status centerBx ">'),q=g('<div class="centerBx tr_bar_10"><div class="icon_status centerBx ">'),N=g('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5>');const y=$(()=>p(()=>import("./FlexSpace-DowtU6xW.js"),__vite__mapDeps([0,1,2]))),f=$(()=>p(()=>import("./SVG-HbM4daMy.js"),__vite__mapDeps([3,1,2])));$(()=>p(()=>import("./ShowQRInventory-Dj0BUj3P.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));function G(e){const h=async()=>{e?.item?.ssg_inventory_key,w?.profile?.businessYId,T({text:"No se puede eliminar",timeout:3500,theme:"red",id:P()})},n=i=>e?.item?.products.reduce((m,d)=>m+d.price*d.qty,0),c=async i=>{let m=`${e?.item?.hbl} ${e?.item?.invoice}`,d=await M(m),v=0,t=0;R(d)?.map(s=>{d[s]?.hbls?.map(_=>{_?.hbl===e?.item?.hbl&&(v=(_?.weight*2.20462).toFixed(2)*1,t=_?.pricePerPound*1)})}),await z(e?.item?.ssg_inventory_key,{weight:v,pricePerPound:t})};let a={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return l(u,{get when(){return e?.item?.invoice},get children(){var i=N(),o=i.firstChild,m=o.firstChild,d=m.nextSibling,v=d.firstChild;return r(m,l(f,{get name(){return a[e?.item?.type]},size:24})),r(v,()=>S(e?.item?.createDate)),r(d,l(u,{get when(){return e?.item?.invoice},get children(){return l(B,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var t=D();return r(t,()=>e?.item?.invoice),t}})}}),null),r(o,l(y,{}),null),r(o,l(u,{get when(){return!b()},get children(){var t=Y(),s=t.firstChild;return r(s,()=>k("storeGroupBy")?.[e?.item?.store]?.label),t}}),null),r(o,l(y,{}),null),r(o,l(u,{get when(){return!b()},get children(){var t=L(),s=t.firstChild;return s.firstChild,r(s,()=>n()?.toFixed(2),null),t}}),null),r(o,l(y,{}),null),r(o,l(u,{get when(){return C()},get children(){var t=q(),s=t.firstChild;return r(t,l(u,{get when(){return e?.item?.type==="SALES"},get children(){var _=j();return _.$$click=c,r(_,l(f,{name:"grid",size:24})),_}}),s),s.$$click=h,r(s,l(f,{name:"outline_delete",size:24})),t}}),null),A(()=>F(i,`client_item_box gWXAaj jlytmu inventory ${b()?"isMobile":""}`)),i}})}const z=async(e,h)=>{let n={...h},c={params:{businessId:w?.profile?.businessYId,id:e},form:n},a=E(139004);c={...c,...a};{const i=await I(c);return console.log(c),console.log(i),i?.data?.error?{}:i?.data}},M=async(e,h)=>{let n={params:{idairguide:"all"},fldsQry:["agency","idairguide","currentStatus","ssg_track_key","hbls"]};e&&e.split(" ").map((a,i)=>{a&&(n.params[":search"+i]=a.trim())}),x?.roles?.agency&&(n.params[":agency"]=x?.roles?.agency+"");let c=E(802001);if(n={...n,...c},Object.keys(n.params)?.length>=2){const a=await I(n);return a?.data?.error?{}:a}return{}};O(["click"]);export{G as default};