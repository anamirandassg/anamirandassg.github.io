const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-CRjo2tMO.js","assets/index-NKUnsseI.js","assets/index-D76Q4b_C.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-W8nthyWp.js","assets/debounces-CWEG2LlI.js","assets/SVG-CRIwODTH.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-BCzomOF5.js","assets/InputHr-BxMK7wO-.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifestList-C-M7B3he.js","assets/DialogHRM-CuXqTZeR.js","assets/DialogHRM-V9_lZntj.css","assets/fontkit.es-D3_o5DR4.js","assets/ButonHrm-1_QD__M-.js","assets/ButonHrm-BSeWNUGQ.css"])))=>i.map(i=>d[i]);
import{l as x,_ as k,c as B,a as P,u as V,p as F,k as T,q as z,b as K,i as s,d as n,f as q,o as j,W as H,e as Y,t as h,a8 as G,K as D,a9 as J,S as f,aa as Q,y as X,F as U,V as Z,s as ee,h as $,g as W,O as te}from"./index-NKUnsseI.js";import{u as ie}from"./debounces-CWEG2LlI.js";import"./fontkit.es-D3_o5DR4.js";import se from"./ButonHrm-1_QD__M-.js";/* empty css                 */import"./SVG-CRIwODTH.js";var R=h("<h5>"),re=h('<div><div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4>|<h4></h4></div></div><div>'),ne=h("<div> <!>."),ae=h("<div> "),le=h('<div class="bottombx flxWrp spaceAround centerBx"><h4></h4><div class="icon_status centerBx">'),ce=h('<div class="bottombx flxWrp spaceAround centerBx"><h4>'),oe=h('<div class="icon_status centerBx">'),de=h("<h5 class=rpto>"),me=h('<div><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="bag_number centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5></div></div></div><div><p class=" textleft "></p><div class=vertseparator>');const ue=x(()=>k(()=>import("./LoadingColorSpinner-CRjo2tMO.js"),__vite__mapDeps([0,1,2,3])));x(()=>k(()=>import("./DropDwnSearch-W8nthyWp.js"),__vite__mapDeps([4,1,2,5,6,7])));const E=x(()=>k(()=>import("./FlexSpace-BCzomOF5.js"),__vite__mapDeps([8,1,2])));x(()=>k(()=>import("./InputHr-BxMK7wO-.js"),__vite__mapDeps([9,1,2,10])));const M=x(()=>k(()=>import("./SVG-CRIwODTH.js"),__vite__mapDeps([6,1,2])));x(()=>k(()=>import("./ItemOnManifestList-C-M7B3he.js"),__vite__mapDeps([11,1,2,5,12,13,14,15,6,16])));const[Be,_e]=B({list:{}}),[Se,we]=P("");function Ae(){const[i,m]=V(),[e,o]=B({search:""}),[g,r]=B(),[u,b]=B(),[C,S]=B(),[O,I]=P("");ie(I,400),F(()=>{_e("list",void 0)}),T(()=>{});const w=async()=>{if(i?.mId){let _={id:i?.mId},d=await ve(_);o("province",d?.province),o("city",d?.city),o("manifestObj",void 0),b("linked",void 0),o("manifestObj",d),b("linked",{...d?.linkedBags})}};z(async()=>{let _=[];[33,46,40,41,42,50,52,54,56].map(a=>{let v=G?.[a];D?.roles?.[v?.id]?.isActive&&_.push(v)}),S("list",_);let t=[];J.map(a=>{let c=a.label;D?.roles?.[c]?.isActive&&t.push(a)}),S("prov",t),w()}),K(O,async _=>{let d=e?.manifest?.id,t=e?.province,a=t&&e?.city,c=[];if(d){const v=await fe(e.search,d,t,a);r("bags",v),te(v).map(A=>{let l=v[A],y=l.currentStatus;D?.roles?.[y]?.isActive&&y.split("_")?.[1]>=33&&c.push(l)})}return c});const p=async()=>{await he({ssg_manifest_key:i?.mId},{linkedBags:e?.manifestObj?.linkedBags}),w()};return(()=>{var _=re(),d=_.firstChild,t=d.firstChild,a=t.firstChild,c=a.nextSibling,v=c.nextSibling,A=d.nextSibling;return s(a,()=>e?.manifestObj?.name),s(t,n(f,{get when(){return e?.manifestObj?.city},get children(){return["|",(()=>{var l=R();return s(l,()=>e?.manifestObj?.city),l})()]}}),c),s(v,()=>e?.manifestObj?.province),s(t,n(f,{get when(){return!Q(e?.manifestObj?.linkedBags,u?.linked)},get children(){return n(se,{color:"#c8193c",label:"updManifest",handleClick:p})}}),null),s(A,n(Z,{fallback:l=>(()=>{var y=ne(),N=y.firstChild,L=N.nextSibling;return L.nextSibling,s(y,()=>l.toString(),L),y})(),get children(){return n(X,{get fallback(){return(()=>{var l=ae();return l.firstChild,s(l,n(ue,{stroke:"rgb(200 25 60 / 1)",size:62}),null),l})()},get children(){return n(f,{get when(){return e?.manifestObj?.linkedBagsInfo?.length>0},get children(){return n(U,{get each(){return e?.manifestObj?.linkedBagsInfo},children:l=>n(ge,{item:l,get city(){return e?.manifestObj?.city},get manifestObj(){return e?.manifestObj},get isAlready(){return e?.manifestObj?.linkedBags?.[l.ssg_track_key]},setFormsM:o})})}})}})}})),q(l=>ee(A,` ${$(),"width:86vw;"} margin: 0 auto;`,l)),_})()}const ge=i=>{const m=()=>{let r=i?.item?.street.split(",");return r.slice(0,r.length-2).join(",")},e=r=>r?" "+r:"",o=()=>{let r=i?.item?.consigneeInfo;return e(r?.firstName)+e(r?.middleName)+e(r?.lastName)+e(r?.lastName2)},g=r=>{i?.setFormsM("manifestObj","linkedBags",i?.item?.ssg_track_key,void 0)};return n(f,{get when(){return i?.manifestObj?.linkedBags[i?.item?.ssg_track_key]},get children(){var r=me(),u=r.firstChild,b=u.firstChild,C=b.firstChild,S=C.nextSibling,O=b.nextSibling,I=O.firstChild,w=I.firstChild,p=u.nextSibling,_=p.firstChild,d=_.nextSibling;return s(r,n(f,{get when(){return $()},get children(){var t=le(),a=t.firstChild,c=a.nextSibling;return s(a,o),s(t,n(E,{}),c),c.$$click=g,s(c,n(M,{name:"outline_delete",size:28,color:"var(--background-red-ssg)"})),t}}),u),s(C,n(M,{name:"open_package_file_outline",size:20})),s(S,()=>i?.item?.bagnumber),s(u,n(f,{get when(){return!$()},get children(){var t=ce(),a=t.firstChild;return s(a,o),t}}),O),s(u,n(E,{}),O),s(w,()=>i?.item?.idairguide),s(u,n(f,{get when(){return!$()},get children(){var t=oe();return t.$$click=g,s(t,n(M,{name:"outline_delete",size:24,color:"var(--background-red-ssg)"})),t}}),null),s(_,m),s(p,n(E,{}),d),s(p,n(f,{get when(){return i?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var t=de();return s(t,()=>i?.item?.consigneeInfo?.ybreparto),t})(),"|"]}}),d),s(p,n(f,{get when(){return!i?.city&&i?.item?.city},get children(){var t=R();return s(t,()=>i?.item?.city),t}}),null),q(t=>{var a=`client_item_box gWXAaj jlytmu manifest ${$()?"isMobile":""}`,c=` ${$(),"centerBx"} bottombx flxWrp  centerBx`;return a!==t.e&&W(r,t.e=a),c!==t.t&&W(p,t.t=c),t},{e:void 0,t:void 0}),r}})},fe=async(i,m,e,o)=>{let g={params:{idairguide:m},query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2 AND !* contain :search3 AND !* contain :search4 AND !* contain :search5 AND currentStatus = :status AND estate = :estate AND city = :city"};i&&i.split(" ").map((u,b)=>{u&&(g.params[":search"+b]=u.trim())}),e&&(g.params[":estate"]=e),o&&(g.params[":city"]=o),console.log(g);const r=await j(g);return r?.error?{}:r},he=async(i,m)=>await j({params:i,query:"updateManifestYabaExpress",data2update:m}),ve=async i=>{let m={params:i,query:"getManifestOrderByKeyID"};console.log(m);const e=await j(m);return console.log(e),e},je=async i=>{let m=[];i.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:e?.idairguide},query:"getLogisticOrderByKeyID"};m.push(o)}),H(m,be)},be=async i=>{const e=await j(i);if(e)return e};Y(["click"]);export{Ae as default,be as fetchCSVInve,je as loadManifest,Se as manifestObs,Be as selectedManifest,we as setManifestObs,_e as setSelectedManifest,he as updLinkedBags};
