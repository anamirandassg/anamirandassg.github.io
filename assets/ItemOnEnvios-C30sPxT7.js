const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Bo6p9169.js","assets/index-D_bcj_hq.js","assets/index-D4QuRvi-.css","assets/SVG-0zukjWw4.js","assets/index-Ci0zXM0r.js","assets/ShowQR-CnbaY78K.js","assets/globalSignal-Bhl_FzQI.js","assets/ShowQRPrintLabel-DHqhwbi3.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-Crm62MPj.js","assets/Util-Dktdagtb.js","assets/Toast-BfLIxSAO.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as C,_ as k,e as Y,d as i,i as t,S as o,t as m,f as I,n as V,j as p,g as ee,a as te,p as L,q as B,r as ie,M as H,b as z,F as G,v as re}from"./index-D_bcj_hq.js";import{g as W,a as E,p as ne,k as le,f as X,q as K}from"./Util-Dktdagtb.js";import{OpenModal as Z}from"./DialogHRM-CLsziKGA.js";import ae from"./ContainerElasticView-D8dT3BY9.js";import{i as S}from"./globalSignal-Bhl_FzQI.js";import{c as se}from"./ShowQRPrintLabel-DHqhwbi3.js";import"./index-Ci0zXM0r.js";import"./SVG-0zukjWw4.js";/* empty css                             */import"./fontkit.es-DEjOtITv.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-Crm62MPj.js";import"./Toast-BfLIxSAO.js";var ce=m('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx"></div><div class=bottombx><h5>'),de=m('<div><div class="icon_status centerBx">'),ue=m('<div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),me=m("<div class=bag_number><h5>"),ge=m('<div class="_dsplFlx "><div class="_dsplFlx bottombx"><p></p></div><p class="tr_bar_30 textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class="tr_bar_20 textleft">'),_e=m('<div class="_dsplFlx bottombx"><h5>'),he=m('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx topbx centerBx">');const N=C(()=>k(()=>import("./FlexSpace-Bo6p9169.js"),__vite__mapDeps([0,1,2]))),q=C(()=>k(()=>import("./SVG-0zukjWw4.js"),__vite__mapDeps([3,1,2,4]))),oe=C(()=>k(()=>import("./ShowQR-CnbaY78K.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));function $e(e){const n=l=>l?" "+l:"",$=()=>{let l=e?.item?.consigneeInfo;return n(l?.firstName)+n(l?.middleName)+n(l?.lastName)+n(l?.lastName2)},d=()=>{let l=e?.item?.consigneeInfo,_=n(l?.altPhoneNumber);return n(l?.phoneNumber)+(_?" |"+_:"")},g=()=>{let l=e?.item?.street.split(",");return l.slice(0,l.length-2).join(",")},b=()=>{let l=e?.item?.hbls.length;const _=e?.item?.hbls.reduce((s,u)=>s+`${s?"/":""}${u.hbl}/${u.quantity}/${u.weight}`,"");let c=`${e?.item?.idairguide}/${e?.item?.cidentity}/${l}/${_}`,r={};r.id=W(),r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=i(oe,{val:c,get item(){return e?.item}}),Z(r)};return i(o,{get when(){return e?.item?.tracking},get children(){var l=he(),_=l.firstChild;return t(_,i(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var c=ce(),r=c.firstChild,s=r.nextSibling,u=s.firstChild;return t(r,i(q,{name:"alert",size:32,color:"var(--background-red-ssg)"})),t(u,()=>e?.item?.idairnumber),c})(),(()=>{var c=de(),r=c.firstChild;return t(r,i(q,{name:"link-off",size:32,color:"var(--background-red-ssg)"})),c})(),(()=>{var c=ue(),r=c.firstChild,s=r.nextSibling,u=s.nextSibling;return t(r,()=>e?.item?.consigneeInfo?.ybcity),t(u,()=>e?.item?.consigneeInfo?.ybestate),c})()]}}),null),t(_,i(N,{}),null),t(_,i(o,{get when(){return e?.item?.bagnumber},get children(){var c=me(),r=c.firstChild;return c.$$click=b,t(r,()=>e?.item?.bagnumber),c}}),null),t(l,i(o,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var c=ge(),r=c.firstChild,s=r.firstChild,u=r.nextSibling,f=u.nextSibling,y=f.nextSibling;return t(s,g),t(c,i(N,{}),u),t(u,$),t(y,d),c}}),null),t(l,i(o,{when:!1,get children(){var c=_e(),r=c.firstChild;return t(c,i(N,{}),r),t(r,()=>e?.item?.nameshipper),t(c,i(N,{}),null),c}}),null),l}})}Y(["click"]);var T=m('<div class="icon_status centerBx">'),ve=m("<div class=guide_number><h5>"),be=m('<div class=" tr_bar_10 _dsplFlx">'),O=m("<div class=bag_number><h5>"),j=m("<div class=bottombx><h5>"),Q=m("<div><div>"),fe=m('<p class="tr_bar_30 textleft fullName_consigne">'),xe=m("<div style=margin-right:4vw>"),ye=m('<h4 class="tr_bar_20 textleft">'),Se=m("<p>"),we=m('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),Ce=m('<div><div class="_dsplFlx topbx centerBx"></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ke=m('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador'),Ie=m("<div class=tab>"),A=m("<div class=loader>Loading..."),J=m("<div>"),Ne=m('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),Be=m('<div class="centerBx bottombx"><h4 class=""></h4><h5> KG</h5><h4 class="">'),Ee=m("<div class=bottombx><div><h4></h4></div><div><h5>");const R=C(()=>k(()=>import("./FlexSpace-Bo6p9169.js"),__vite__mapDeps([0,1,2]))),w=C(()=>k(()=>import("./SVG-0zukjWw4.js"),__vite__mapDeps([3,1,2,4]))),Ae=C(()=>k(()=>import("./ShowQR-CnbaY78K.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));let D={YABA_99:"check_circle"};function Je(e){const n=r=>r?" "+r:"",$=()=>{let r=e?.item?.consigneeInfo;return n(r?.firstName)+n(r?.middleName)+n(r?.lastName)+n(r?.lastName2)},d=()=>{let r=e?.item?.consigneeInfo,s=n(r?.altPhoneNumber);return n(r?.phoneNumber)+(s?" |"+s:"")},g=()=>{let r=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let s=r.reduce((u,f)=>Math.min(u,f.timeStamp),1/0);return Math.floor((new Date().getTime()-s)/864e5)}else return null},b=async()=>{let r={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.idairguide};await De(r),e?.refresh()},l=()=>{let r=e?.item?.street.split(",");return r.slice(0,r.length-2).join(",")},_=r=>{let s="";if(r)s=r;else if(e?.item?.hblS){let f=e?.item?.hblS;s=`${e?.item?.idairguide}/${e?.item?.cidentity}/${f}`}let u={};u.id=W(),u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=i(Ae,{val:s,get item(){return e?.item}}),Z(u)},c=r=>{let s=r,u="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const f=new RegExp(u);return s.length===13&&f.test(s)&&(s=s.slice(3,12)),s};return e?.filter?i($e,{get item(){return e?.item},get filter(){return e?.filter}}):i(o,{get when(){return e?.item?.cidentity},get children(){var r=Ce(),s=r.firstChild,u=s.nextSibling,f=u.firstChild,y=f.firstChild,M=y.nextSibling,F=M.nextSibling;return t(s,i(o,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var a=be();return t(a,i(o,{get when(){return D[e?.item?.currentStatus]},get children(){var v=T();return t(v,i(w,{get name(){return D?.[e?.item?.currentStatus]},size:32,color:"var(--hrm-palette-tertiary60)"})),v}}),null),t(a,i(o,{get when(){return!D[e?.item?.currentStatus]},get children(){var v=T();return t(v,i(w,{get name(){return E("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),v}}),null),t(a,i(o,{get when(){return g()},get children(){var v=ve(),h=v.firstChild;return t(h,g),v}}),null),a})(),i(o,{get when(){return S()},get children(){return[i(R,{}),(()=>{var a=Q(),v=a.firstChild;return t(v,i(o,{get when(){return e?.item?.bagnumber},get children(){var h=O(),x=h.firstChild;return h.$$click=()=>_(e?.item?.bagnumber),t(x,()=>e?.item?.bagnumber),h}})),t(a,i(o,{get when(){return e?.item?.tracking},get children(){var h=j(),x=h.firstChild;return h.$$click=()=>_(c(e?.item?.tracking)),t(x,()=>c(e?.item?.tracking)),h}}),null),a})()]}}),i(o,{get when(){return!S()},get children(){return[(()=>{var a=fe();return t(a,$),I(()=>V(a,"data-name",`${e?.item?.cidentity}`)),a})(),xe(),(()=>{var a=ye();return t(a,d),a})()]}})]}}),null),t(s,i(R,{}),null),t(s,i(o,{get when(){return!S()},get children(){var a=Q(),v=a.firstChild;return t(v,i(o,{get when(){return e?.item?.bagnumber},get children(){var h=O(),x=h.firstChild;return h.$$click=()=>_(e?.item?.bagnumber),t(x,()=>c(e?.item?.bagnumber)),h}})),t(a,i(o,{get when(){return e?.item?.tracking},get children(){var h=j(),x=h.firstChild;return h.$$click=()=>_(c(e?.item?.tracking)),t(x,()=>c(e?.item?.tracking)),I(()=>V(h,"data-tracking",`${e?.item?.tracking}`)),h}}),null),a}}),null),t(s,i(o,{get when(){return!e?.item?.bagnumber||p?.profile?.isAdmin},get children(){var a=T();return a.$$click=b,t(a,i(w,{name:"outline_delete",size:24})),a}}),null),t(u,i(o,{get when(){return!S()&&e?.item?.consigneeInfo?.ybcity},get children(){var a=Se();return t(a,l),a}}),f),t(u,i(R,{}),f),t(y,()=>e?.item?.consigneeInfo?.ybcity),t(F,()=>e?.item?.consigneeInfo?.ybestate),t(r,i(o,{get when(){return S()&&e?.item?.consigneeInfo?.ybcity},get children(){var a=we(),v=a.firstChild,h=v.nextSibling,x=h.nextSibling,U=x.nextSibling;return t(v,$),t(x,d),t(U,l),a}}),null),t(r,i(Me,{get item(){return e?.item}}),null),I(()=>ee(r,`client_item_box gWXAaj jlytmu ${S()?"isMobile":""}`)),r}})}const Me=e=>{const[n,$]=te(0),[d,g]=re(),b=l=>()=>g(()=>$(l));return i(ae,{get children(){return[(()=>{var l=ke(),_=l.firstChild,c=_.firstChild,r=c.firstChild,s=_.nextSibling,u=s.firstChild,f=u.firstChild,y=s.nextSibling,M=y.firstChild,F=M.firstChild;return L(_,"click",b(1),!0),t(r,i(w,{name:"list_dot",size:24})),L(s,"click",b(2),!0),t(f,i(w,{name:"receipt",size:24})),L(y,"click",b(3),!0),t(F,i(w,{name:"send",size:24})),I(a=>{var v=n()===1,h=n()===2,x=n()===3;return v!==a.e&&_.classList.toggle("selected",a.e=v),h!==a.t&&s.classList.toggle("selected",a.t=h),x!==a.a&&y.classList.toggle("selected",a.a=x),a},{e:void 0,t:void 0,a:void 0}),l})(),(()=>{var l=Ie();return t(l,i(B,{get fallback(){return A()},get children(){return i(ie,{get children(){return[i(H,{get when(){return n()===1},get children(){return i(o,{get when(){return n()===1},get children(){return i(Fe,{index:1,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),i(H,{get when(){return n()===2},get children(){return i(o,{get when(){return n()===2},get children(){return i(He,{index:2,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),i(H,{get when(){return n()===3},get children(){return i(o,{get when(){return n()===3},get children(){return i(Re,{index:3,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),I(()=>l.classList.toggle("pending",!!d())),l})()]}})},Fe=e=>{const[n,{refetch:$}]=z(e?.id,async d=>(await P(e?.idairguide,e?.id,["statusHistory"]))?.statusHistory);return i(B,{get fallback(){return A()},get children(){var d=J();return t(d,i(G,{get each(){return n()},children:g=>i(Le,{item:g})})),d}})},Le=e=>(()=>{var n=Ne(),$=n.firstChild,d=$.nextSibling,g=d.firstChild,b=g.nextSibling,l=b.nextSibling,_=l.nextSibling;_.nextSibling;var c=d.nextSibling;return t($,()=>E("M023009")?.statusObjDesc[e?.item?.statusId]),t(d,()=>ne(e?.item?.timeStamp),b),t(d,()=>le(e?.item?.timeStamp),_),t(c,()=>e?.item?.userName),n})(),He=e=>{const[n,{refetch:$}]=z(e?.id,async d=>(await P(e?.idairguide,e?.id,["hbls"]))?.hbls);return i(B,{get fallback(){return A()},get children(){var d=J();return t(d,i(G,{get each(){return n()},children:g=>i(Te,{item:g})})),d}})},Te=e=>{const n=$=>{se($)};return(()=>{var $=Be(),d=$.firstChild,g=d.nextSibling,b=g.firstChild,l=g.nextSibling;return d.$$click=()=>n(e?.item?.hbl),t(d,()=>e?.item?.hbl),t(g,()=>e?.item?.weight,b),t(l,()=>e?.item?.namegood),$})()},Re=e=>{const[n,{refetch:$}]=z(e?.id,async d=>await P(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return i(B,{get fallback(){return A()},get children(){var d=Ee(),g=d.firstChild,b=g.firstChild,l=g.nextSibling,_=l.firstChild;return t(b,()=>n()?.nameshipper),t(_,()=>n()?.shipperInfo?.phoneNumber),d}})},De=async e=>{let n={params:e},$={...E(K())}[809005];return n={...n,...$},(await X(n))?.data},P=async(e,n,$)=>{let d={params:{id:n,idairguide:e},fldsQry:$},g={...E(K())}[802002];d={...d,...g};const b=await X(d);return b?.data?.error?{}:b};Y(["click"]);export{Je as default};
