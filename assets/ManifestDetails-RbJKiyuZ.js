const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-I2krCRsu.js","assets/index-DO7hTAqt.js","assets/index-BRlA1Q7g.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/FlexSpace-zvQ64kzB.js","assets/SVG-DapLNFVN.js","assets/Util-BSJ3epRO.js"])))=>i.map(i=>d[i]);
import{l as q,_ as z,r as ne,c as D,a as H,o as ie,b as se,d as re,i as s,e as l,S as v,z as ae,F as le,E as ce,f as G,s as oe,j as I,m as K,h as de,t as p,A as T,J as me}from"./index-DO7hTAqt.js";import{g as R,f as Q,m as ue,e as w,u as J,G as U,O as ge,b as fe,K as Y,H as X,I as Z}from"./Util-BSJ3epRO.js";import{u as _e}from"./debounces-B6tY0Rlw.js";import he from"./ButonHrm-CnYpEWbd.js";import{P as be}from"./ShowQRPrintLabel-Cb8RTj1J.js";/* empty css                 */import"./SVG-DapLNFVN.js";import"./fontkit.es-CflJXqUP.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-Bhvm-3ED.js";import"./Toast-CtUtF4k_.js";var ee=p("<h5>"),ye=p('<div><div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4>|<h4></h4><div class="icon_status centerBx"></div></div></div><div>'),ve=p("<div> <!>."),pe=p("<div> "),ke=p('<div class="bottombx flxWrp spaceAround centerBx"><h4></h4><div class="icon_status centerBx">'),$e=p('<div class="bottombx flxWrp spaceAround centerBx"><h4>'),xe=p('<div class="icon_status centerBx">'),Be=p("<h5 class=rpto>"),Se=p('<div><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="bag_number centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5></div></div></div><div><p class=" textleft "></p><div class=vertseparator>');const Ie=q(()=>z(()=>import("./LoadingColorSpinner-I2krCRsu.js"),__vite__mapDeps([0,1,2,3]))),F=q(()=>z(()=>import("./FlexSpace-zvQ64kzB.js"),__vite__mapDeps([4,1,2]))),L=q(()=>z(()=>import("./SVG-DapLNFVN.js"),__vite__mapDeps([5,1,2,6])));function ze(){const[t,u]=ne(),[n,o]=D({search:""}),[_,a]=D(),[m,N]=H(0),[P,O]=D(),[C,E]=H("");_e(E,400),ie(()=>{}),se(()=>{});const j=async()=>{if(t?.mId&&m()<Y()){N(Y()+7e3);let e={id:t?.mId},c=await Ne(e);o("manifestObj",void 0),a("linked",void 0),o("manifestObj",c),a("linked",{...c?.linkedBags}),n?.province||(o("province",c?.province),o("city",c?.city))}};re(async()=>{let e=[];[33,46,40,41,42,50,52,54,56].map(y=>{let i=y,f=w("M023009")?.whStList?.[i];T?.roles?.[f?.id]?.isActive&&e.push(f)}),O("list",e);let g=[];w("M023009")?.provincias.map(y=>{let i=y.label;T?.roles?.[i]?.isActive&&g.push(y)}),O("prov",g),j()});const x=async()=>{let e={...w("manifestList")};e[t?.mId].linkedBags=n?.manifestObj?.linkedBags,J("manifestList",e),U(Z,X,e),j()},k=e=>e||"",h=e=>e?" "+e:"",r=e=>(k(e?.ybestate)+"_"+k(e?.ybcity)+"_"+k(e?.ybreparto)+"_"+k(e?.ybstreet)+"_"+k(e?.ybstreetNo)).toLowerCase(),b=e=>{let c=e?.consigneeInfo;return h(c?.firstName)+h(c?.middleName)+h(c?.lastName)+h(c?.lastName2)},$=e=>{let c=e?.consigneeInfo,g=h(c?.altPhoneNumber);return h(c?.phoneNumber)+(g?" |"+g:"")},te=async()=>{let e={},c={},g={};n?.manifestObj?.linkedBagsInfo?.map(i=>{if(i?.currentStatus!="YABA_99"){let f=r(i?.consigneeInfo),B=i?.cidentity,A=i?.estate||i?.consigneeInfo?.ybestate,d=i?.city||i?.consigneeInfo?.ybcity,S=i?.consigneeInfo?.ybreparto;if(g[S]||(g[S]=1),c[d]||(c[d]=1),e[f]||(e[f]={city:d,estate:A,rpto:S,address:{ybstreetNo:i?.consigneeInfo?.ybstreetNo,ybstreet:i?.consigneeInfo?.ybstreet,ybapt:i?.consigneeInfo?.ybapt,ybbetwen1:i?.consigneeInfo?.ybbetwen1,ybbetwen2:i?.consigneeInfo?.ybbetwen2},currentStatus:i?.currentStatus,customers:{},bagsNo:0}),!e[f].customers[B]){let M={name:b(i),phoneNumber:$(i),cid:i?.cidentity,nameshipper:i?.nameshipper},V={...i,...M};V.bagsNumb={},e[f].customers[B]=V}let W={bagnumber:i?.bagnumber,idairguide:"all",tracking:i?.tracking,hbls:i?.hbls};e[f].customers[B].bagsNumb[i?.ssg_track_key]=W,e[f].bagsNo+=1}});let y=await be(ge(e),e);window.open(y)};return(()=>{var e=ye(),c=e.firstChild,g=c.firstChild,y=g.firstChild,i=y.nextSibling,f=i.nextSibling,B=f.nextSibling,A=c.nextSibling;return s(y,()=>n?.manifestObj?.name),s(g,l(v,{get when(){return n?.manifestObj?.city},get children(){return["|",(()=>{var d=ee();return s(d,()=>n?.manifestObj?.city),d})()]}}),i),s(f,()=>n?.manifestObj?.province),s(g,l(v,{get when(){return 0},get children(){return l(he,{color:"#c8193c",label:"updManifest",handleClick:x})}}),B),B.$$click=te,s(B,l(L,{name:"printer",size:24,color:"firebrick"})),s(A,l(ce,{fallback:d=>(()=>{var S=ve(),W=S.firstChild,M=W.nextSibling;return M.nextSibling,s(S,()=>d.toString(),M),S})(),get children(){return l(ae,{get fallback(){return(()=>{var d=pe();return d.firstChild,s(d,l(Ie,{stroke:"rgb(200 25 60 / 1)",size:62}),null),d})()},get children(){return l(v,{get when(){return n?.manifestObj?.linkedBagsInfo?.length>0},get children(){return l(le,{get each(){return n?.manifestObj?.linkedBagsInfo},children:d=>l(we,{item:d,get city(){return n?.manifestObj?.city},get manifestObj(){return n?.manifestObj},get isAlready(){return n?.manifestObj?.linkedBags?.[d.ssg_track_key]},setFormsM:o,get mId(){return t?.mId}})})}})}})}})),G(d=>oe(A,` ${I(),"width:86vw;"} margin: 0 auto;`,d)),e})()}const we=t=>{const u=()=>{let a=t?.item?.street.split(",");return a.slice(0,a.length-2).join(",")},n=a=>a?" "+a:"",o=()=>{let a=t?.item?.consigneeInfo;return n(a?.firstName)+n(a?.middleName)+n(a?.lastName)+n(a?.lastName2)},_=a=>{if(t?.item?.currentStatus!=="99"){let m=fe(w("manifestList"));m[t?.mId].linkedBags[t?.item?.ssg_track_key]&&(delete m[t?.mId].linkedBags[t?.item?.ssg_track_key],J("manifestList",m),U(Z,X,m)),t?.setFormsM("manifestObj","linkedBags",t?.item?.ssg_track_key,void 0)}};return l(v,{get when(){return t?.manifestObj?.linkedBags[t?.item?.ssg_track_key]},get children(){var a=Se(),m=a.firstChild,N=m.firstChild,P=N.firstChild,O=P.nextSibling,C=N.nextSibling,E=C.firstChild,j=E.firstChild,x=m.nextSibling,k=x.firstChild,h=k.nextSibling;return s(a,l(v,{get when(){return I()},get children(){var r=ke(),b=r.firstChild,$=b.nextSibling;return s(b,o),s(r,l(F,{}),$),$.$$click=_,s($,l(L,{name:"outline_delete",size:28,color:"var(--background-red-ssg)"})),r}}),m),s(P,l(L,{name:"open_package_file_outline",size:20})),s(O,()=>t?.item?.bagnumber),s(m,l(v,{get when(){return!I()},get children(){var r=$e(),b=r.firstChild;return s(b,o),r}}),C),s(m,l(F,{}),C),s(j,()=>t?.item?.idairguide),s(m,l(v,{get when(){return!I()},get children(){var r=xe();return r.$$click=_,s(r,l(L,{get name(){return t?.item?.currentStatus==="YABA_99"?"check_circle":"outline_delete"},size:24,get color(){return t?.item?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)"}})),r}}),null),s(k,u),s(x,l(F,{}),h),s(x,l(v,{get when(){return t?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var r=Be();return s(r,()=>t?.item?.consigneeInfo?.ybreparto),r})(),"|"]}}),h),s(x,l(v,{get when(){return!t?.city&&t?.item?.city},get children(){var r=ee();return s(r,()=>t?.item?.city),r}}),null),G(r=>{var b=`client_item_box gWXAaj jlytmu manifest ${I()?"isMobile":""}`,$=` ${I(),"centerBx"} bottombx flxWrp  centerBx`;return b!==r.e&&K(a,r.e=b),$!==r.t&&K(x,r.t=$),r},{e:void 0,t:void 0}),a}})},Re=async(t,u)=>{let n={params:t,data2update:u},o=R(709002);return n={...n,...o},await Q(n)},Ne=async t=>{let u={params:t};if(me()){let n={...w("manifestList")?.[t?.id]},o=[],_=n?.linkedBags;return _&&Object.keys(_)?.map(async a=>{if(a){let m=w("manifestByKeys")?.[a];o.push(m)}}),n.linkedBagsInfo=o,n}else{let n=R(703003);return u={...u,...n},await Q(u)}},Qe=async t=>{let u=[];t.map(n=>{let o={params:{id:n?.ssg_track_key,idairguide:"all"}},_=R(802002);o={...o,..._},u.push(o)}),ue(u,Oe)},Oe=async t=>{const n=await Q(t);if(n)return n};de(["click"]);export{ze as default,Oe as fetchCSVInve,Qe as loadManifest,Re as updLinkedBags};
