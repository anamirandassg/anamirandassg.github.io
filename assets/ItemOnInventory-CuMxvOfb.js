const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BOQdCgpR.js","assets/index-CNK7zAgA.js","assets/index-lCkr9jrN.css","assets/SVG-CK7FhKom.js","assets/Util-D2O-IqKB.js","assets/ShowQRInventory-DaWzfkeM.js","assets/ShowQRPrintLabel-D3D_T4tZ.js","assets/PDFButton-85Y0gBbC.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-AFz-JHBR.js","assets/InitPrintServices-DgotkDNu.js","assets/Toast-B9Xe7Jmw.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as p,d as i,i as r,S as g,g as y,v as I,e as k,f as C,h as A,t as h,m as S,x as E}from"./index-CNK7zAgA.js";import{p as F,a as O,g as P,O as R,b as x,f as w}from"./Util-D2O-IqKB.js";import{OpenToast as T}from"./Toast-B9Xe7Jmw.js";import{A as B}from"./components--Vg9pjGq.js";var D=h('<p class=" textleft fullName_consigne">'),Y=h('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),q=h('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),L=h('<div class="icon_status centerBx ">'),N=h('<div class="centerBx tr_bar_10"><div class="icon_status centerBx ">'),Q=h('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5>');const b=$(()=>p(()=>import("./FlexSpace-BOQdCgpR.js"),__vite__mapDeps([0,1,2]))),f=$(()=>p(()=>import("./SVG-CK7FhKom.js"),__vite__mapDeps([3,1,2,4])));$(()=>p(()=>import("./ShowQRInventory-DaWzfkeM.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));function K(e){const d=async()=>{let l={id:e?.item?.ssg_inventory_key,businessId:S?.profile?.businessYId};I()?(await j(l),e?.refetch()):T({text:"No se puede eliminar",timeout:3500,theme:"red",id:P()})},n=l=>e?.item?.products.reduce((u,m)=>u+m.price*m.qty,0),a=async l=>{let u=`${e?.item?.hbl} ${e?.item?.invoice}`,m=await M(u),v=0,t=0;R(m)?.map(s=>{m[s]?.hbls?.map(_=>{_?.hbl===e?.item?.hbl&&(v=(_?.weight*2.20462).toFixed(2)*1,t=_?.pricePerPound*1)})}),await z(e?.item?.ssg_inventory_key,{weight:v,pricePerPound:t})};let o={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return i(g,{get when(){return e?.item?.invoice},get children(){var l=Q(),c=l.firstChild,u=c.firstChild,m=u.nextSibling,v=m.firstChild;return r(u,i(f,{get name(){return o[e?.item?.type]},size:24})),r(v,()=>F(e?.item?.createDate)),r(m,i(g,{get when(){return e?.item?.invoice},get children(){return i(B,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var t=D();return r(t,()=>e?.item?.invoice),t}})}}),null),r(c,i(b,{}),null),r(c,i(g,{get when(){return!y()},get children(){var t=Y(),s=t.firstChild;return r(s,()=>O("storeGroupBy")?.[e?.item?.store]?.label),t}}),null),r(c,i(b,{}),null),r(c,i(g,{get when(){return!y()},get children(){var t=q(),s=t.firstChild;return s.firstChild,r(s,()=>n()?.toFixed(2),null),t}}),null),r(c,i(b,{}),null),r(c,i(g,{get when(){return I()},get children(){var t=N(),s=t.firstChild;return r(t,i(g,{get when(){return e?.item?.type==="SALES"},get children(){var _=L();return _.$$click=a,r(_,i(f,{name:"grid",size:24})),_}}),s),s.$$click=d,r(s,i(f,{name:"outline_delete",size:24})),t}}),null),k(()=>C(l,`client_item_box gWXAaj jlytmu inventory ${y()?"isMobile":""}`)),l}})}const j=async e=>{let d={params:e},n=x(139005);d={...d,...n};const a=await w(d);return a?.data?.error?{}:a?.data},z=async(e,d)=>{let n={...d},a={params:{businessId:S?.profile?.businessYId,id:e},form:n},o=x(139004);a={...a,...o};{const l=await w(a);return console.log(a),console.log(l),l?.data?.error?{}:l?.data}},M=async(e,d)=>{let n={params:{idairguide:"all"},fldsQry:["agency","idairguide","currentStatus","ssg_track_key","hbls"]};e&&e.split(" ").map((o,l)=>{o&&(n.params[":search"+l]=o.trim())}),E?.roles?.agency&&(n.params[":agency"]=E?.roles?.agency+"");let a=x(802001);if(n={...n,...a},Object.keys(n.params)?.length>=2){const o=await w(n);return o?.data?.error?{}:o}return{}};A(["click"]);export{K as default};
