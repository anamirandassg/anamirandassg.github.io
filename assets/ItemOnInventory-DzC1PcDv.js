const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DYUkBgjK.js","assets/index-7ZM3jTwu.js","assets/index-BRlA1Q7g.css","assets/SVG-JQaKQi55.js","assets/Util-D6Peje1o.js","assets/ShowQRInventory-DU5QiSz_.js","assets/ShowQRPrintLabel-CXovudQK.js","assets/fontkit.es-jEU4QD-9.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-Y_2rRhtM.js","assets/Toast-B5mORVrG.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as $,_ as p,e as i,i as r,S as g,j as y,x as I,f as k,m as A,h as C,t as h,g as S,A as E}from"./index-7ZM3jTwu.js";import{h as F,e as O,a as P,O as R,g as x,f as w}from"./Util-D6Peje1o.js";import{OpenToast as T}from"./Toast-B5mORVrG.js";import{A as B}from"./components-Dn9OptO9.js";var D=h('<p class=" textleft fullName_consigne">'),Y=h('<div class="_dsplFlx bottombx tr_bar_30"><h4>'),q=h('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),L=h('<div class="icon_status centerBx ">'),j=h('<div class="centerBx tr_bar_10"><div class="icon_status centerBx ">'),N=h('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx "></div><div class="_dsplFlx bottombx tr_bar_40"><h5>');const b=$(()=>p(()=>import("./FlexSpace-DYUkBgjK.js"),__vite__mapDeps([0,1,2]))),f=$(()=>p(()=>import("./SVG-JQaKQi55.js"),__vite__mapDeps([3,1,2,4])));$(()=>p(()=>import("./ShowQRInventory-DU5QiSz_.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));function K(e){const d=async()=>{let a={id:e?.item?.ssg_inventory_key,businessId:S?.profile?.businessYId};I()?(await Q(a),e?.refetch()):T({text:"No se puede eliminar",timeout:3500,theme:"red",id:P()})},l=a=>e?.item?.products?.reduce((u,m)=>u+m.price*m.qty,0),n=async a=>{let u=`${e?.item?.hbl} ${e?.item?.invoice}`,m=await M(u),v=0,t=0;R(m)?.map(s=>{m[s]?.hbls?.map(_=>{_?.hbl===e?.item?.hbl&&(v=(_?.weight*2.20462).toFixed(2)*1,t=_?.pricePerPound*1)})}),await z(e?.item?.ssg_inventory_key,{weight:v,pricePerPound:t})};let c={ENTRY:"arrow_down_large",SALES:"money_outline",TRANSFER:"arrows_compare"};return i(g,{get when(){return e?.item?.invoice},get children(){var a=N(),o=a.firstChild,u=o.firstChild,m=u.nextSibling,v=m.firstChild;return r(u,i(f,{get name(){return c[e?.item?.type]},size:24})),r(v,()=>F(e?.item?.createDate||e?.item?.date)),r(m,i(g,{get when(){return e?.item?.invoice},get children(){return i(B,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var t=D();return r(t,()=>e?.item?.invoice),t}})}}),null),r(o,i(b,{}),null),r(o,i(g,{get when(){return!y()},get children(){var t=Y(),s=t.firstChild;return r(s,()=>O("storeGroupBy")?.[e?.item?.store]?.label),t}}),null),r(o,i(b,{}),null),r(o,i(g,{get when(){return!y()},get children(){var t=q(),s=t.firstChild;return s.firstChild,r(s,()=>l()?.toFixed(2),null),t}}),null),r(o,i(b,{}),null),r(o,i(g,{get when(){return I()},get children(){var t=j(),s=t.firstChild;return r(t,i(g,{get when(){return e?.item?.type==="SALES"},get children(){var _=L();return _.$$click=n,r(_,i(f,{name:"grid",size:24})),_}}),s),s.$$click=d,r(s,i(f,{name:"outline_delete",size:24})),t}}),null),k(()=>A(a,`client_item_box gWXAaj jlytmu inventory ${y()?"isMobile":""}`)),a}})}const Q=async e=>{let d={params:e},l=x(139005);d={...d,...l};const n=await w(d);return n?.data?.error?{}:n?.data},z=async(e,d)=>{let l={...d},n={params:{businessId:S?.profile?.businessYId,id:e},form:l},c=x(139004);n={...n,...c};{const a=await w(n);return a?.data?.error?{}:a?.data}},M=async(e,d)=>{let l={params:{idairguide:"all"},fldsQry:["agency","idairguide","currentStatus","ssg_track_key","hbls"]};e&&e.split(" ").map((c,a)=>{c&&(l.params[":search"+a]=c.trim())}),E?.roles?.agency&&(l.params[":agency"]=E?.roles?.agency+"");let n=x(802001);if(l={...l,...n},Object.keys(l.params)?.length>=2){const c=await w(l);return c?.data?.error?{}:c}return{}};C(["click"]);export{K as default};
