const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DmOd9vSB.js","assets/index-fVyAceyB.js","assets/index-C1cQPolT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-H4HkoUGr.js","assets/debounces-BpmXSa3J.js","assets/SVG-DM7keoXx.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-Xz1xttWC.js","assets/InputHr-DrQs0Nry.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as x,_ as y,u as N,c as k,a as R,o as V,h as q,m as z,i,d as a,f as D,e as Q,t as g,v as E,S as _,r as T,F as H,E as Y,s as G,g as M}from"./index-fVyAceyB.js";import{b as j,f as A,e as J,a as L,x as X}from"./Util-D886uaAp.js";import{u as K}from"./debounces-BpmXSa3J.js";import{i as p}from"./globalSignal-BmUjh8Kw.js";import U from"./ButonHrm-CzR7AfPm.js";import"./index-Ci0zXM0r.js";/* empty css                 */import"./SVG-DM7keoXx.js";var F=g("<h5>"),Z=g('<div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4>|<h4>'),ee=g("<div><div>"),W=g("<div> "),te=g("<div> <!>."),re=g('<div class="bottombx flxWrp spaceAround centerBx"><h4></h4><div class="icon_status centerBx">'),ie=g('<div class="bottombx flxWrp spaceAround centerBx"><h4>'),ne=g('<div class="icon_status centerBx">'),ae=g("<h5 class=rpto>"),se=g('<div><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="bag_number centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5></div></div></div><div><p class=" textleft "></p><div class=vertseparator>');const P=x(()=>y(()=>import("./LoadingColorSpinner-DmOd9vSB.js"),__vite__mapDeps([0,1,2,3])));x(()=>y(()=>import("./DropDwnSearch-H4HkoUGr.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const w=x(()=>y(()=>import("./FlexSpace-Xz1xttWC.js"),__vite__mapDeps([9,1,2])));x(()=>y(()=>import("./InputHr-DrQs0Nry.js"),__vite__mapDeps([10,1,2,11])));const C=x(()=>y(()=>import("./SVG-DM7keoXx.js"),__vite__mapDeps([6,1,2,7])));function pe(){const[r,m]=N(),[t,l]=k({search:""});k();const[h,s]=k(),[v,$]=k(),[B,S]=R("");K(S,400),V(()=>{}),q(()=>{});const b=async()=>{if(r?.mId&&!t?.province){let u={id:r?.mId},o=await oe(u);l("province",o?.province),l("city",o?.city),l("manifestObj",void 0),s("linked",void 0),l("manifestObj",o),s("linked",{...o?.linkedBags})}};z(async()=>{let u=[];[33,46,40,41,42,50,52,54,56].map(d=>{let e=d,c=L("M023009")?.whStList?.[e];E?.roles?.[c?.id]?.isActive&&u.push(c)}),$("list",u);let n=[];L("M023009")?.provincias.map(d=>{let e=d.label;E?.roles?.[e]?.isActive&&n.push(d)}),$("prov",n),b()});const O=async()=>{await ce({ssg_manifest_key:r?.mId},{linkedBags:t?.manifestObj?.linkedBags}),b()};return(()=>{var u=ee(),o=u.firstChild;return i(u,a(_,{get when(){return t?.manifestObj?.province},get fallback(){return(()=>{var n=W();return n.firstChild,i(n,a(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){var n=Z(),d=n.firstChild,e=d.firstChild,c=e.nextSibling,f=c.nextSibling;return i(e,()=>t?.manifestObj?.name),i(d,a(_,{get when(){return t?.manifestObj?.city},get children(){return["|",(()=>{var I=F();return i(I,()=>t?.manifestObj?.city),I})()]}}),c),i(f,()=>t?.manifestObj?.province),i(d,a(_,{get when(){return!X(t?.manifestObj?.linkedBags,h?.linked)},get children(){return a(U,{color:"#c8193c",label:"updManifest",handleClick:O})}}),null),n}}),o),i(o,a(Y,{fallback:n=>(()=>{var d=te(),e=d.firstChild,c=e.nextSibling;return c.nextSibling,i(d,()=>n.toString(),c),d})(),get children(){return a(T,{get fallback(){return(()=>{var n=W();return n.firstChild,i(n,a(P,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return a(_,{get when(){return t?.manifestObj?.linkedBagsInfo?.length>0},get children(){return a(H,{get each(){return t?.manifestObj?.linkedBagsInfo},children:n=>a(le,{item:n,get city(){return t?.manifestObj?.city},get manifestObj(){return t?.manifestObj},get isAlready(){return t?.manifestObj?.linkedBags?.[n.ssg_track_key]},setFormsM:l})})}})}})}})),D(n=>G(o,` ${p(),"width:86vw;"} margin: 0 auto;`,n)),u})()}const le=r=>{const m=()=>{let s=r?.item?.street.split(",");return s.slice(0,s.length-2).join(",")},t=s=>s?" "+s:"",l=()=>{let s=r?.item?.consigneeInfo;return t(s?.firstName)+t(s?.middleName)+t(s?.lastName)+t(s?.lastName2)},h=s=>{r?.item?.currentStatus!=="99"&&r?.setFormsM("manifestObj","linkedBags",r?.item?.ssg_track_key,void 0)};return a(_,{get when(){return r?.manifestObj?.linkedBags[r?.item?.ssg_track_key]},get children(){var s=se(),v=s.firstChild,$=v.firstChild,B=$.firstChild,S=B.nextSibling,b=$.nextSibling,O=b.firstChild,u=O.firstChild,o=v.nextSibling,n=o.firstChild,d=n.nextSibling;return i(s,a(_,{get when(){return p()},get children(){var e=re(),c=e.firstChild,f=c.nextSibling;return i(c,l),i(e,a(w,{}),f),f.$$click=h,i(f,a(C,{name:"outline_delete",size:28,color:"var(--background-red-ssg)"})),e}}),v),i(B,a(C,{name:"open_package_file_outline",size:20})),i(S,()=>r?.item?.bagnumber),i(v,a(_,{get when(){return!p()},get children(){var e=ie(),c=e.firstChild;return i(c,l),e}}),b),i(v,a(w,{}),b),i(u,()=>r?.item?.idairguide),i(v,a(_,{get when(){return!p()},get children(){var e=ne();return e.$$click=h,i(e,a(C,{get name(){return r?.item?.currentStatus==="YABA_99"?"check_circle":"outline_delete"},size:24,get color(){return r?.item?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)"}})),e}}),null),i(n,m),i(o,a(w,{}),d),i(o,a(_,{get when(){return r?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var e=ae();return i(e,()=>r?.item?.consigneeInfo?.ybreparto),e})(),"|"]}}),d),i(o,a(_,{get when(){return!r?.city&&r?.item?.city},get children(){var e=F();return i(e,()=>r?.item?.city),e}}),null),D(e=>{var c=`client_item_box gWXAaj jlytmu manifest ${p()?"isMobile":""}`,f=` ${p(),"centerBx"} bottombx flxWrp  centerBx`;return c!==e.e&&M(s,e.e=c),f!==e.t&&M(o,e.t=f),e},{e:void 0,t:void 0}),s}})},ce=async(r,m)=>{let t={params:r,data2update:m},l=j(709002);return t={...t,...l},await A(t)},oe=async r=>{let m={params:r},t=j(703003);m={...m,...t};const l=await A(m);return console.log(m),console.log(l),l},$e=async r=>{let m=[];r.map(t=>{let l={params:{id:t?.ssg_track_key,idairguide:"all"}},h=j(802002);l={...l,...h},m.push(l)}),J(m,de)},de=async r=>{const t=await A(r);if(t)return t};Q(["click"]);export{pe as default,de as fetchCSVInve,$e as loadManifest,ce as updLinkedBags};
