const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Dqpc8-Wj.js","assets/index-Ce-I5KUz.js","assets/index-NFdrrltd.css","assets/SVG-3xaf9-9Q.js","assets/index-Ci0zXM0r.js","assets/ShowQRInventory-C6iT8akY.js","assets/globalSignal-DoH-l5IW.js","assets/ShowQRPrintLabel-B2aTUbW6.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-NgpjRc8z.js","assets/Util-DErZaF9J.js","assets/Toast-C6jBQTLz.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as u,_ as v,c as y,a as $,d as i,e as p,i as t,S as d,f as x,g as I,t as f,k as E}from"./index-Ce-I5KUz.js";import{p as S,b as D,f as A}from"./Util-DErZaF9J.js";import{u as w}from"./debounces-wN__sdFl.js";import"./DialogHRM-BmiVfgEe.js";import{i as g}from"./globalSignal-DoH-l5IW.js";import{A as C}from"./components-Do7Yl8SB.js";import"./index-Ci0zXM0r.js";var k=f('<p class=" textleft fullName_consigne">'),O=f('<div class="_dsplFlx bottombx"><h4>$'),R=f('<div><div class="_dsplFlx bottombx centerBx"><h5></h5><div></div><div class="icon_status centerBx tr_bar_10">');const T=u(()=>v(()=>import("./FlexSpace-Dqpc8-Wj.js"),__vite__mapDeps([0,1,2]))),Y=u(()=>v(()=>import("./SVG-3xaf9-9Q.js"),__vite__mapDeps([3,1,2,4])));u(()=>v(()=>import("./ShowQRInventory-C6iT8akY.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function z(e){y({search:"",status:"AERO_33"});const[n,m]=$("");w(m,400);const s=async()=>{let r={id:e?.item?.ssg_inventory_key,businessId:E?.profile?.businessYId};await F(r),e?.refetch()},b=r=>e?.item?.products.reduce((c,l)=>c+l.price*l.qty,0);return i(d,{get when(){return e?.item?.invoice},get children(){var r=R(),a=r.firstChild,c=a.firstChild,l=c.nextSibling,_=l.nextSibling;return t(c,()=>S(e?.item?.createDate)),t(a,i(d,{get when(){return e?.item?.invoice},get children(){return i(C,{get href(){return`/inventory-detail?mId=${e?.item?.ssg_inventory_key}`},get children(){var o=k();return t(o,()=>e?.item?.invoice),o}})}}),l),t(a,i(T,{}),_),t(a,i(d,{get when(){return!g()},get children(){var o=O(),h=o.firstChild;return h.firstChild,t(h,()=>b()?.toFixed(2),null),o}}),_),_.$$click=s,t(_,i(Y,{name:"outline_delete",size:24})),x(()=>I(r,`client_item_box gWXAaj jlytmu  ${g()?"isMobile":""}`)),r}})}const F=async e=>{let n={params:e},m=D(139005);n={...n,...m};const s=await A(n);return console.log(n),console.log(s),s?.data?.error?{}:s?.data};p(["click"]);export{z as default};