const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-hKEW-O6U.js","assets/index-CX08qMr9.js","assets/index-W9fcnr7G.css","assets/SVG-DBuw3s_z.js","assets/index-Ci0zXM0r.js","assets/ShowQRInventory-B5ADfM8k.js","assets/globalSignal-wLi-6lpX.js","assets/ShowQRPrintLabel-CV2sHnHo.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-B3KIQnKW.js","assets/Util-D2YTzGDx.js","assets/Toast-BM5u4LI0.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as y,_ as p,d as i,e as E,i as r,S as u,q as S,f as C,g as A,t as g,k as w,v as $}from"./index-CX08qMr9.js";import{p as F,a as O,g as P,O as R,b as I,f as k}from"./Util-D2YTzGDx.js";import{i as b}from"./globalSignal-wLi-6lpX.js";import{OpenToast as T}from"./Toast-BM5u4LI0.js";import{A as B}from"./components-DCJzUiqN.js";import"./index-Ci0zXM0r.js";var D=g('<p class=" textleft fullName_consigne">'),Y=g('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),q=g('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),L=g('<div class="icon_status centerBx ">'),N=g('<div class="centerBx tr_bar_10"><div class="icon_status centerBx ">'),j=g('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5>');const x=y(()=>p(()=>import("./FlexSpace-hKEW-O6U.js"),__vite__mapDeps([0,1,2]))),f=y(()=>p(()=>import("./SVG-DBuw3s_z.js"),__vite__mapDeps([3,1,2,4])));y(()=>p(()=>import("./ShowQRInventory-B5ADfM8k.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function U(e){const v=async()=>{e?.item?.ssg_inventory_key,w?.profile?.businessYId,T({text:"No se puede eliminar",timeout:3500,theme:"red",id:P()})},l=n=>e?.item?.products.reduce((_,d)=>_+d.price*d.qty,0),o=async n=>{let _=`${e?.item?.description} ${e?.item?.invoice}`,d=await M(_),h=0,t=0;R(d)?.map(s=>{d[s]?.hbls?.map(m=>{m?.hbl===e?.item?.description&&(h=(m?.weight*2.20462).toFixed(2)*1,t=m?.pricePerPound*1)})}),await z(e?.item?.ssg_inventory_key,{weight:h,pricePerPound:t})};let a={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return i(u,{get when(){return e?.item?.invoice},get children(){var n=j(),c=n.firstChild,_=c.firstChild,d=_.nextSibling,h=d.firstChild;return r(_,i(f,{get name(){return a[e?.item?.type]},size:24})),r(h,()=>F(e?.item?.createDate)),r(d,i(u,{get when(){return e?.item?.invoice},get children(){return i(B,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var t=D();return r(t,()=>e?.item?.invoice),t}})}}),null),r(c,i(x,{}),null),r(c,i(u,{get when(){return!b()},get children(){var t=Y(),s=t.firstChild;return r(s,()=>O("storeGroupBy")?.[e?.item?.store]?.label),t}}),null),r(c,i(x,{}),null),r(c,i(u,{get when(){return!b()},get children(){var t=q(),s=t.firstChild;return s.firstChild,r(s,()=>l()?.toFixed(2),null),t}}),null),r(c,i(u,{get when(){return S()},get children(){var t=N(),s=t.firstChild;return r(t,i(u,{get when(){return l()>0},get children(){var m=L();return m.$$click=o,r(m,i(f,{name:"grid",size:24})),m}}),s),s.$$click=v,r(s,i(f,{name:"outline_delete",size:24})),t}}),null),C(()=>A(n,`client_item_box gWXAaj jlytmu inventory ${b()?"isMobile":""}`)),n}})}const z=async(e,v)=>{let l={...v},o={params:{businessId:w?.profile?.businessYId,id:e},form:l},a=I(139004);o={...o,...a};{const n=await k(o);return console.log(o),console.log(n),n?.data?.error?{}:n?.data}},M=async(e,v)=>{let l={params:{idairguide:"all"},fldsQry:["agency","idairguide","currentStatus","ssg_track_key","hbls"]};e&&e.split(" ").map((a,n)=>{a&&(l.params[":search"+n]=a.trim())}),$?.roles?.agency&&(l.params[":agency"]=$?.roles?.agency+"");let o=I(802001);if(l={...l,...o},Object.keys(l.params)?.length>=2){const a=await k(l);return a?.data?.error?{}:a}return{}};E(["click"]);export{U as default};