const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Dv4k1B83.js","assets/index-DJb4pLvl.js","assets/index-BmzAZVve.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-BwOEnNrK.js","assets/debounces-B3S0x5Vu.js","assets/SVG-CUHt6r20.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-BXqKi982.js","assets/InputHr-FKh1Xl-y.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as B,_ as I,u as ee,c as M,a as z,o as te,j as re,n as ne,i as n,d as l,S as f,w as ie,F as se,E as ae,e as J,s as le,g as S,f as V,h as ce,t as _,x as T}from"./index-DJb4pLvl.js";import{x as oe,b as F,f as R,e as de,a as Q,O as me,z as H}from"./Util-C77m685E.js";import{u as ue}from"./debounces-B3S0x5Vu.js";import ge from"./ButonHrm-Bed2PUBD.js";import{P as fe}from"./ShowQRPrintLabel-CLBeE_bf.js";import"./index-Ci0zXM0r.js";/* empty css                 */import"./SVG-CUHt6r20.js";import"./PDFButton-B_0lS8EG.js";import"./fontkit.es-BqrvdTa9.js";import"./InitPrintServices-DzdLVHm-.js";import"./Toast-CqBaWA5c.js";var K=_("<h5>"),_e=_('<div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4>|<h4></h4><div class="icon_status centerBx">'),he=_("<div><div>"),Y=_("<div> "),be=_("<div> <!>."),ve=_('<div class="bottombx flxWrp spaceAround centerBx"><h4></h4><div class="icon_status centerBx">'),pe=_('<div class="bottombx flxWrp spaceAround centerBx"><h4>'),ye=_('<div class="icon_status centerBx">'),$e=_("<h5 class=rpto>"),ke=_('<div><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="bag_number centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5></div></div></div><div><p class=" textleft "></p><div class=vertseparator>');const G=B(()=>I(()=>import("./LoadingColorSpinner-Dv4k1B83.js"),__vite__mapDeps([0,1,2,3])));B(()=>I(()=>import("./DropDwnSearch-BwOEnNrK.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const W=B(()=>I(()=>import("./FlexSpace-BXqKi982.js"),__vite__mapDeps([9,1,2])));B(()=>I(()=>import("./InputHr-FKh1Xl-y.js"),__vite__mapDeps([10,1,2,11])));const E=B(()=>I(()=>import("./SVG-CUHt6r20.js"),__vite__mapDeps([6,1,2,7])));function Fe(){const[i,g]=ee(),[t,d]=M({search:""});M();const[$,o]=M(),[v,O]=z(0),[P,N]=M(),[C,L]=z("");ue(L,400),te(()=>{}),re(()=>{});const j=async()=>{if(i?.mId&&v()<H()){O(H()+7e3);let e={id:i?.mId},c=await Se(e);d("manifestObj",void 0),o("linked",void 0),d("manifestObj",c),o("linked",{...c?.linkedBags}),t?.province||(d("province",c?.province),d("city",c?.city))}};ne(async()=>{let e=[];[33,46,40,41,42,50,52,54,56].map(u=>{let r=u,m=Q("M023009")?.whStList?.[r];T?.roles?.[m?.id]?.isActive&&e.push(m)}),N("list",e);let s=[];Q("M023009")?.provincias.map(u=>{let r=u.label;T?.roles?.[r]?.isActive&&s.push(u)}),N("prov",s),j()});const k=async()=>{await we({ssg_manifest_key:i?.mId},{linkedBags:t?.manifestObj?.linkedBags}),j()},p=e=>e||"",h=e=>e?" "+e:"",a=e=>(p(e?.ybestate)+"_"+p(e?.ybcity)+"_"+p(e?.ybreparto)+"_"+p(e?.ybstreet)+"_"+p(e?.ybstreetNo)).toLowerCase(),b=e=>{let c=e?.consigneeInfo;return h(c?.firstName)+h(c?.middleName)+h(c?.lastName)+h(c?.lastName2)},y=e=>{let c=e?.consigneeInfo,s=h(c?.altPhoneNumber);return h(c?.phoneNumber)+(s?" |"+s:"")},U=async()=>{let e={},c={},s={};t?.manifestObj?.linkedBagsInfo?.map(r=>{if(r?.currentStatus!="YABA_99"){let m=a(r?.consigneeInfo),x=r.cidentity,A=r?.estate||r?.consigneeInfo?.ybestate,w=r?.city||r?.consigneeInfo?.ybcity,D=r?.consigneeInfo?.ybreparto;if(s[D]||(s[D]=1),c[w]||(c[w]=1),e[m]||(e[m]={city:w,estate:A,rpto:D,address:{ybstreetNo:r?.consigneeInfo?.ybstreetNo,ybstreet:r?.consigneeInfo?.ybstreet,ybapt:r?.consigneeInfo?.ybapt,ybbetwen1:r?.consigneeInfo?.ybbetwen1,ybbetwen2:r?.consigneeInfo?.ybbetwen2},currentStatus:r?.currentStatus,customers:{},bagsNo:0}),!e[m].customers[x]){let Z={name:b(r),phoneNumber:y(r),cid:r.cidentity},q={...r,...Z};q.bagsNumb={},e[m].customers[x]=q}let X={bagnumber:r?.bagnumber,idairguide:"all",tracking:r?.tracking};e[m].customers[x].bagsNumb[r?.ssg_track_key]=X,e[m].bagsNo+=1}});let u=await fe(me(e),e);window.open(u)};return(()=>{var e=he(),c=e.firstChild;return n(e,l(f,{get when(){return t?.manifestObj?.province},get fallback(){return(()=>{var s=Y();return s.firstChild,n(s,l(G,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){var s=_e(),u=s.firstChild,r=u.firstChild,m=r.nextSibling,x=m.nextSibling,A=x.nextSibling;return n(r,()=>t?.manifestObj?.name),n(u,l(f,{get when(){return t?.manifestObj?.city},get children(){return["|",(()=>{var w=K();return n(w,()=>t?.manifestObj?.city),w})()]}}),m),n(x,()=>t?.manifestObj?.province),A.$$click=U,n(A,l(E,{name:"printer",size:24,color:"firebrick"})),n(u,l(f,{get when(){return!oe(t?.manifestObj?.linkedBags,$?.linked)},get children(){return l(ge,{color:"#c8193c",label:"updManifest",handleClick:k})}}),null),s}}),c),n(c,l(ae,{fallback:s=>(()=>{var u=be(),r=u.firstChild,m=r.nextSibling;return m.nextSibling,n(u,()=>s.toString(),m),u})(),get children(){return l(ie,{get fallback(){return(()=>{var s=Y();return s.firstChild,n(s,l(G,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return l(f,{get when(){return t?.manifestObj?.linkedBagsInfo?.length>0},get children(){return l(se,{get each(){return t?.manifestObj?.linkedBagsInfo},children:s=>l(xe,{item:s,get city(){return t?.manifestObj?.city},get manifestObj(){return t?.manifestObj},get isAlready(){return t?.manifestObj?.linkedBags?.[s.ssg_track_key]},setFormsM:d})})}})}})}})),J(s=>le(c,` ${S(),"width:86vw;"} margin: 0 auto;`,s)),e})()}const xe=i=>{const g=()=>{let o=i?.item?.street.split(",");return o.slice(0,o.length-2).join(",")},t=o=>o?" "+o:"",d=()=>{let o=i?.item?.consigneeInfo;return t(o?.firstName)+t(o?.middleName)+t(o?.lastName)+t(o?.lastName2)},$=o=>{i?.item?.currentStatus!=="99"&&i?.setFormsM("manifestObj","linkedBags",i?.item?.ssg_track_key,void 0)};return l(f,{get when(){return i?.manifestObj?.linkedBags[i?.item?.ssg_track_key]},get children(){var o=ke(),v=o.firstChild,O=v.firstChild,P=O.firstChild,N=P.nextSibling,C=O.nextSibling,L=C.firstChild,j=L.firstChild,k=v.nextSibling,p=k.firstChild,h=p.nextSibling;return n(o,l(f,{get when(){return S()},get children(){var a=ve(),b=a.firstChild,y=b.nextSibling;return n(b,d),n(a,l(W,{}),y),y.$$click=$,n(y,l(E,{name:"outline_delete",size:28,color:"var(--background-red-ssg)"})),a}}),v),n(P,l(E,{name:"open_package_file_outline",size:20})),n(N,()=>i?.item?.bagnumber),n(v,l(f,{get when(){return!S()},get children(){var a=pe(),b=a.firstChild;return n(b,d),a}}),C),n(v,l(W,{}),C),n(j,()=>i?.item?.idairguide),n(v,l(f,{get when(){return!S()},get children(){var a=ye();return a.$$click=$,n(a,l(E,{get name(){return i?.item?.currentStatus==="YABA_99"?"check_circle":"outline_delete"},size:24,get color(){return i?.item?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)"}})),a}}),null),n(p,g),n(k,l(W,{}),h),n(k,l(f,{get when(){return i?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var a=$e();return n(a,()=>i?.item?.consigneeInfo?.ybreparto),a})(),"|"]}}),h),n(k,l(f,{get when(){return!i?.city&&i?.item?.city},get children(){var a=K();return n(a,()=>i?.item?.city),a}}),null),J(a=>{var b=`client_item_box gWXAaj jlytmu manifest ${S()?"isMobile":""}`,y=` ${S(),"centerBx"} bottombx flxWrp  centerBx`;return b!==a.e&&V(o,a.e=b),y!==a.t&&V(k,a.t=y),a},{e:void 0,t:void 0}),o}})},we=async(i,g)=>{let t={params:i,data2update:g},d=F(709002);return t={...t,...d},await R(t)},Se=async i=>{let g={params:i},t=F(703003);return g={...g,...t},await R(g)},Re=async i=>{let g=[];i.map(t=>{let d={params:{id:t?.ssg_track_key,idairguide:"all"}},$=F(802002);d={...d,...$},g.push(d)}),de(g,Be)},Be=async i=>{const t=await R(i);if(t)return t};ce(["click"]);export{Fe as default,Be as fetchCSVInve,Re as loadManifest,we as updLinkedBags};