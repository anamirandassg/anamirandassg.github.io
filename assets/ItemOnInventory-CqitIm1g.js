const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CfpwBNks.js","assets/index-C3nuwiPu.js","assets/index-BmzAZVve.css","assets/SVG-BKtEPdQ8.js","assets/ShowQRInventory-26J-gxwe.js","assets/ShowQRPrintLabel-Bu-LBqpt.js","assets/PDFButton-Bkj4cawg.js","assets/fontkit.es-BRvkp4mY.js","assets/InitPrintServices-nkIhHp6G.js","assets/Util-Dlxe-mBA.js","assets/Toast-D8yVWZQ9.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as p,d as l,i as r,S as u,g as b,v as S,e as k,f as C,h as A,t as g,m as w,x}from"./index-C3nuwiPu.js";import{p as F,a as O,g as P,O as R,b as I,f as E}from"./Util-Dlxe-mBA.js";import{OpenToast as T}from"./Toast-D8yVWZQ9.js";import{A as B}from"./components-CAou3LXP.js";var D=g('<p class=" textleft fullName_consigne">'),Y=g('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),L=g('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),N=g('<div class="icon_status centerBx ">'),j=g('<div class="centerBx tr_bar_10"><div class="icon_status centerBx ">'),q=g('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5>');const y=$(()=>p(()=>import("./FlexSpace-CfpwBNks.js"),__vite__mapDeps([0,1,2]))),f=$(()=>p(()=>import("./SVG-BKtEPdQ8.js"),__vite__mapDeps([3,1,2])));$(()=>p(()=>import("./ShowQRInventory-26J-gxwe.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11])));function H(e){const h=async()=>{e?.item?.ssg_inventory_key,w?.profile?.businessYId,T({text:"No se puede eliminar",timeout:3500,theme:"red",id:P()})},n=i=>e?.item?.products.reduce((m,d)=>m+d.price*d.qty,0),c=async i=>{let m=`${e?.item?.hbl} ${e?.item?.invoice}`,d=await M(m),v=0,t=0;R(d)?.map(s=>{d[s]?.hbls?.map(_=>{_?.hbl===e?.item?.hbl&&(v=(_?.weight*2.20462).toFixed(2)*1,t=_?.pricePerPound*1)})}),await z(e?.item?.ssg_inventory_key,{weight:v,pricePerPound:t})};let a={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return l(u,{get when(){return e?.item?.invoice},get children(){var i=q(),o=i.firstChild,m=o.firstChild,d=m.nextSibling,v=d.firstChild;return r(m,l(f,{get name(){return a[e?.item?.type]},size:24})),r(v,()=>F(e?.item?.createDate)),r(d,l(u,{get when(){return e?.item?.invoice},get children(){return l(B,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var t=D();return r(t,()=>e?.item?.invoice),t}})}}),null),r(o,l(y,{}),null),r(o,l(u,{get when(){return!b()},get children(){var t=Y(),s=t.firstChild;return r(s,()=>O("storeGroupBy")?.[e?.item?.store]?.label),t}}),null),r(o,l(y,{}),null),r(o,l(u,{get when(){return!b()},get children(){var t=L(),s=t.firstChild;return s.firstChild,r(s,()=>n()?.toFixed(2),null),t}}),null),r(o,l(y,{}),null),r(o,l(u,{get when(){return S()},get children(){var t=j(),s=t.firstChild;return r(t,l(u,{get when(){return e?.item?.type==="SALES"},get children(){var _=N();return _.$$click=c,r(_,l(f,{name:"grid",size:24})),_}}),s),s.$$click=h,r(s,l(f,{name:"outline_delete",size:24})),t}}),null),k(()=>C(i,`client_item_box gWXAaj jlytmu inventory ${b()?"isMobile":""}`)),i}})}const z=async(e,h)=>{let n={...h},c={params:{businessId:w?.profile?.businessYId,id:e},form:n},a=I(139004);c={...c,...a};{const i=await E(c);return console.log(c),console.log(i),i?.data?.error?{}:i?.data}},M=async(e,h)=>{let n={params:{idairguide:"all"},fldsQry:["agency","idairguide","currentStatus","ssg_track_key","hbls"]};e&&e.split(" ").map((a,i)=>{a&&(n.params[":search"+i]=a.trim())}),x?.roles?.agency&&(n.params[":agency"]=x?.roles?.agency+"");let c=I(802001);if(n={...n,...c},Object.keys(n.params)?.length>=2){const a=await E(n);return a?.data?.error?{}:a}return{}};A(["click"]);export{H as default};
