const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-oDSq8ri8.js","assets/index-CMRsWGOd.js","assets/index-DaYrm968.css","assets/SVG-B6VmFfhN.js","assets/Util-B8-DWw-6.js","assets/ShowQRInventory-C2nHdamD.js","assets/ShowQRPrintLabel-DRA9nXSa.js","assets/fontkit.es-BHcUmD3g.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-BhTuseMZ.js","assets/Toast-DW6JLgQU.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as p,e as i,i as r,S as g,j as y,x as I,f as k,m as C,h as A,t as h,g as S,z as E}from"./index-CMRsWGOd.js";import{h as F,e as O,a as P,O as R,g as x,f as w}from"./Util-B8-DWw-6.js";import{OpenToast as T}from"./Toast-DW6JLgQU.js";import{A as B}from"./components-BPBifD7v.js";var D=h('<p class=" textleft fullName_consigne">'),Y=h('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),q=h('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),L=h('<div class="icon_status centerBx ">'),j=h('<div class="centerBx tr_bar_10"><div class="icon_status centerBx ">'),z=h('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5>');const b=$(()=>p(()=>import("./FlexSpace-oDSq8ri8.js"),__vite__mapDeps([0,1,2]))),f=$(()=>p(()=>import("./SVG-B6VmFfhN.js"),__vite__mapDeps([3,1,2,4])));$(()=>p(()=>import("./ShowQRInventory-C2nHdamD.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));function K(e){const d=async()=>{let l={id:e?.item?.ssg_inventory_key,businessId:S?.profile?.businessYId};I()?(await N(l),e?.refetch()):T({text:"No se puede eliminar",timeout:3500,theme:"red",id:P()})},n=l=>e?.item?.products?.reduce((u,m)=>u+m.price*m.qty,0),a=async l=>{let u=`${e?.item?.hbl} ${e?.item?.invoice}`,m=await M(u),v=0,t=0;R(m)?.map(s=>{m[s]?.hbls?.map(_=>{_?.hbl===e?.item?.hbl&&(v=(_?.weight*2.20462).toFixed(2)*1,t=_?.pricePerPound*1)})}),await Q(e?.item?.ssg_inventory_key,{weight:v,pricePerPound:t})};let o={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return i(g,{get when(){return e?.item?.invoice},get children(){var l=z(),c=l.firstChild,u=c.firstChild,m=u.nextSibling,v=m.firstChild;return r(u,i(f,{get name(){return o[e?.item?.type]},size:24})),r(v,()=>F(e?.item?.createDate||e?.item?.date)),r(m,i(g,{get when(){return e?.item?.invoice},get children(){return i(B,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var t=D();return r(t,()=>e?.item?.invoice),t}})}}),null),r(c,i(b,{}),null),r(c,i(g,{get when(){return!y()},get children(){var t=Y(),s=t.firstChild;return r(s,()=>O("storeGroupBy")?.[e?.item?.store]?.label),t}}),null),r(c,i(b,{}),null),r(c,i(g,{get when(){return!y()},get children(){var t=q(),s=t.firstChild;return s.firstChild,r(s,()=>n()?.toFixed(2),null),t}}),null),r(c,i(b,{}),null),r(c,i(g,{get when(){return I()},get children(){var t=j(),s=t.firstChild;return r(t,i(g,{get when(){return e?.item?.type==="SALES"},get children(){var _=L();return _.$$click=a,r(_,i(f,{name:"grid",size:24})),_}}),s),s.$$click=d,r(s,i(f,{name:"outline_delete",size:24})),t}}),null),k(()=>C(l,`client_item_box gWXAaj jlytmu inventory ${y()?"isMobile":""}`)),l}})}const N=async e=>{let d={params:e},n=x(139005);d={...d,...n};const a=await w(d);return a?.data?.error?{}:a?.data},Q=async(e,d)=>{let n={...d},a={params:{businessId:S?.profile?.businessYId,id:e},form:n},o=x(139004);a={...a,...o};{const l=await w(a);return console.log(a),console.log(l),l?.data?.error?{}:l?.data}},M=async(e,d)=>{let n={params:{idairguide:"all"},fldsQry:["agency","idairguide","currentStatus","ssg_track_key","hbls"]};e&&e.split(" ").map((o,l)=>{o&&(n.params[":search"+l]=o.trim())}),E?.roles?.agency&&(n.params[":agency"]=E?.roles?.agency+"");let a=x(802001);if(n={...n,...a},Object.keys(n.params)?.length>=2){const o=await w(n);return o?.data?.error?{}:o}return{}};A(["click"]);export{K as default};
