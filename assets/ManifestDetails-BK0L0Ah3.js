const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-BV0gCbdN.js","assets/index-CaW80A_h.js","assets/index-DEEWbFNK.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/FlexSpace-D6w2aKoc.js","assets/SVG-7dDJ9Chz.js","assets/Util-CKCUAuLU.js"])))=>i.map(i=>d[i]);
import{l as D,_ as z,p as X,c as W,a as T,o as Z,k as ee,b as te,i as r,d as l,S as p,x as ne,F as ie,E as re,e as G,q as se,f as I,g as H,h as ae,t as v,y as Y,z as le}from"./index-CaW80A_h.js";import{E as ce,c as R,f as Q,j as oe,d as N,O as de,F as K}from"./Util-CKCUAuLU.js";import{u as me}from"./debounces-DUoJYmi8.js";import ue from"./ButonHrm-DsEjvatv.js";import{P as ge}from"./ShowQRPrintLabel-DJymcF2p.js";/* empty css                 */import"./SVG-7dDJ9Chz.js";import"./PDFButton-DzKPI8bv.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-xY8_R9eo.js";import"./InitPrintServices-Cu6eu-iZ.js";import"./Toast-B6X5D4cW.js";var J=v("<h5>"),fe=v('<div><div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4>|<h4></h4><div class="icon_status centerBx"></div></div></div><div>'),_e=v("<div> <!>."),he=v("<div> "),be=v('<div class="bottombx flxWrp spaceAround centerBx"><h4></h4><div class="icon_status centerBx">'),ye=v('<div class="bottombx flxWrp spaceAround centerBx"><h4>'),pe=v('<div class="icon_status centerBx">'),ve=v("<h5 class=rpto>"),ke=v('<div><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="bag_number centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5></div></div></div><div><p class=" textleft "></p><div class=vertseparator>');const $e=D(()=>z(()=>import("./LoadingColorSpinner-BV0gCbdN.js"),__vite__mapDeps([0,1,2,3]))),q=D(()=>z(()=>import("./FlexSpace-D6w2aKoc.js"),__vite__mapDeps([4,1,2]))),E=D(()=>z(()=>import("./SVG-7dDJ9Chz.js"),__vite__mapDeps([5,1,2,6])));function qe(){const[n,m]=X(),[e,o]=W({search:""}),[_,a]=W(),[f,w]=T(0),[P,O]=W(),[j,L]=T("");me(L,400),Z(()=>{}),ee(()=>{});const C=async()=>{if(n?.mId&&f()<K()){w(K()+7e3);let t={id:n?.mId},c=await Se(t);o("manifestObj",void 0),a("linked",void 0),o("manifestObj",c),a("linked",{...c?.linkedBags}),e?.province||(o("province",c?.province),o("city",c?.city))}};te(async()=>{let t=[];[33,46,40,41,42,50,52,54,56].map(y=>{let i=y,g=N("M023009")?.whStList?.[i];Y?.roles?.[g?.id]?.isActive&&t.push(g)}),O("list",t);let u=[];N("M023009")?.provincias.map(y=>{let i=y.label;Y?.roles?.[i]?.isActive&&u.push(y)}),O("prov",u),C()});const x=async()=>{await Be({ssg_manifest_key:n?.mId},{linkedBags:e?.manifestObj?.linkedBags}),C()},k=t=>t||"",h=t=>t?" "+t:"",s=t=>(k(t?.ybestate)+"_"+k(t?.ybcity)+"_"+k(t?.ybreparto)+"_"+k(t?.ybstreet)+"_"+k(t?.ybstreetNo)).toLowerCase(),b=t=>{let c=t?.consigneeInfo;return h(c?.firstName)+h(c?.middleName)+h(c?.lastName)+h(c?.lastName2)},$=t=>{let c=t?.consigneeInfo,u=h(c?.altPhoneNumber);return h(c?.phoneNumber)+(u?" |"+u:"")},U=async()=>{let t={},c={},u={};e?.manifestObj?.linkedBagsInfo?.map(i=>{if(i?.currentStatus!="YABA_99"){let g=s(i?.consigneeInfo),B=i?.cidentity,A=i?.estate||i?.consigneeInfo?.ybestate,d=i?.city||i?.consigneeInfo?.ybcity,S=i?.consigneeInfo?.ybreparto;if(u[S]||(u[S]=1),c[d]||(c[d]=1),t[g]||(t[g]={city:d,estate:A,rpto:S,address:{ybstreetNo:i?.consigneeInfo?.ybstreetNo,ybstreet:i?.consigneeInfo?.ybstreet,ybapt:i?.consigneeInfo?.ybapt,ybbetwen1:i?.consigneeInfo?.ybbetwen1,ybbetwen2:i?.consigneeInfo?.ybbetwen2},currentStatus:i?.currentStatus,customers:{},bagsNo:0}),!t[g].customers[B]){let M={name:b(i),phoneNumber:$(i),cid:i?.cidentity,nameshipper:i?.nameshipper},V={...i,...M};V.bagsNumb={},t[g].customers[B]=V}let F={bagnumber:i?.bagnumber,idairguide:"all",tracking:i?.tracking,hbls:i?.hbls};t[g].customers[B].bagsNumb[i?.ssg_track_key]=F,t[g].bagsNo+=1}});let y=await ge(de(t),t);window.open(y)};return(()=>{var t=fe(),c=t.firstChild,u=c.firstChild,y=u.firstChild,i=y.nextSibling,g=i.nextSibling,B=g.nextSibling,A=c.nextSibling;return r(y,()=>e?.manifestObj?.name),r(u,l(p,{get when(){return e?.manifestObj?.city},get children(){return["|",(()=>{var d=J();return r(d,()=>e?.manifestObj?.city),d})()]}}),i),r(g,()=>e?.manifestObj?.province),r(u,l(p,{get when(){return!ce(e?.manifestObj?.linkedBags,_?.linked)},get children(){return l(ue,{color:"#c8193c",label:"updManifest",handleClick:x})}}),B),B.$$click=U,r(B,l(E,{name:"printer",size:24,color:"firebrick"})),r(A,l(re,{fallback:d=>(()=>{var S=_e(),F=S.firstChild,M=F.nextSibling;return M.nextSibling,r(S,()=>d.toString(),M),S})(),get children(){return l(ne,{get fallback(){return(()=>{var d=he();return d.firstChild,r(d,l($e,{stroke:"rgb(200 25 60 / 1)",size:62}),null),d})()},get children(){return l(p,{get when(){return e?.manifestObj?.linkedBagsInfo?.length>0},get children(){return l(ie,{get each(){return e?.manifestObj?.linkedBagsInfo},children:d=>l(xe,{item:d,get city(){return e?.manifestObj?.city},get manifestObj(){return e?.manifestObj},get isAlready(){return e?.manifestObj?.linkedBags?.[d.ssg_track_key]},setFormsM:o})})}})}})}})),G(d=>se(A,` ${I(),"width:86vw;"} margin: 0 auto;`,d)),t})()}const xe=n=>{const m=()=>{let a=n?.item?.street.split(",");return a.slice(0,a.length-2).join(",")},e=a=>a?" "+a:"",o=()=>{let a=n?.item?.consigneeInfo;return e(a?.firstName)+e(a?.middleName)+e(a?.lastName)+e(a?.lastName2)},_=a=>{n?.item?.currentStatus!=="99"&&n?.setFormsM("manifestObj","linkedBags",n?.item?.ssg_track_key,void 0)};return l(p,{get when(){return n?.manifestObj?.linkedBags[n?.item?.ssg_track_key]},get children(){var a=ke(),f=a.firstChild,w=f.firstChild,P=w.firstChild,O=P.nextSibling,j=w.nextSibling,L=j.firstChild,C=L.firstChild,x=f.nextSibling,k=x.firstChild,h=k.nextSibling;return r(a,l(p,{get when(){return I()},get children(){var s=be(),b=s.firstChild,$=b.nextSibling;return r(b,o),r(s,l(q,{}),$),$.$$click=_,r($,l(E,{name:"outline_delete",size:28,color:"var(--background-red-ssg)"})),s}}),f),r(P,l(E,{name:"open_package_file_outline",size:20})),r(O,()=>n?.item?.bagnumber),r(f,l(p,{get when(){return!I()},get children(){var s=ye(),b=s.firstChild;return r(b,o),s}}),j),r(f,l(q,{}),j),r(C,()=>n?.item?.idairguide),r(f,l(p,{get when(){return!I()},get children(){var s=pe();return s.$$click=_,r(s,l(E,{get name(){return n?.item?.currentStatus==="YABA_99"?"check_circle":"outline_delete"},size:24,get color(){return n?.item?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)"}})),s}}),null),r(k,m),r(x,l(q,{}),h),r(x,l(p,{get when(){return n?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var s=ve();return r(s,()=>n?.item?.consigneeInfo?.ybreparto),s})(),"|"]}}),h),r(x,l(p,{get when(){return!n?.city&&n?.item?.city},get children(){var s=J();return r(s,()=>n?.item?.city),s}}),null),G(s=>{var b=`client_item_box gWXAaj jlytmu manifest ${I()?"isMobile":""}`,$=` ${I(),"centerBx"} bottombx flxWrp  centerBx`;return b!==s.e&&H(a,s.e=b),$!==s.t&&H(x,s.t=$),s},{e:void 0,t:void 0}),a}})},Be=async(n,m)=>{let e={params:n,data2update:m},o=R(709002);return e={...e,...o},await Q(e)},Se=async n=>{let m={params:n};if(le()){let e={...N("manifestList")?.[n?.id]},o=[],_=N("alinkM")?.[n?.id]?.data2update?.linkedBags||{},a=Object.assign({},e?.linkedBags,_);return e.linkedBags=a,a&&Object.keys(a)?.map(async f=>{if(f){let w=N("manifestByKeys")?.[f];o.push(w)}}),e.linkedBagsInfo=o,e}else{let e=R(703003);return m={...m,...e},await Q(m)}},De=async n=>{let m=[];n.map(e=>{let o={params:{id:e?.ssg_track_key,idairguide:"all"}},_=R(802002);o={...o,..._},m.push(o)}),oe(m,we)},we=async n=>{const e=await Q(n);if(e)return e};ae(["click"]);export{qe as default,we as fetchCSVInve,De as loadManifest,Be as updLinkedBags};
