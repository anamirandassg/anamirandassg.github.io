const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D3ljtz2L.js","assets/index-DLm-qbVb.js","assets/index-DGSEMnLR.css","assets/SVG-DMQC_3si.js","assets/index-Ci0zXM0r.js","assets/ShowQR-brnziTZl.js","assets/globalSignal-DG1rgUS8.js","assets/ShowQRPrintLabel-Bk6Cpfac.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-CHWoTnax.js","assets/Util-R0w8Fgio.js","assets/Toast-Dm0lmTlX.js","assets/Toast-SmEZ1JuI.css"])))=>i.map(i=>d[i]);
import{l as k,_ as C,e as Y,d as i,i as t,S as o,t as m,f as I,n as O,j as J,g as U,a as p,p as F,q as B,r as ee,M,b as T,F as Q,v as te}from"./index-DLm-qbVb.js";import{g as G,p as ie,i as ne,f as K}from"./Util-R0w8Fgio.js";import{b as re,c as le}from"./manifestList-CSHEgbpJ.js";import{OpenModal as W}from"./DialogHRM-D2-DGr3N.js";import ae from"./ContainerElasticView-DQ4H8Gym.js";import{i as S}from"./globalSignal-DG1rgUS8.js";import"./index-Ci0zXM0r.js";import"./SVG-DMQC_3si.js";/* empty css                             */var se=m('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx"></div><div class=bottombx><h5>'),ce=m('<div><div class="icon_status centerBx">'),de=m('<div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ue=m("<div class=bag_number><h5>"),me=m('<div class="_dsplFlx "><div class="_dsplFlx bottombx"><p></p></div><p class="tr_bar_30 textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class="tr_bar_20 textleft">'),ge=m('<div class="_dsplFlx bottombx"><h5>'),_e=m('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx topbx centerBx">');const N=k(()=>C(()=>import("./FlexSpace-D3ljtz2L.js"),__vite__mapDeps([0,1,2]))),P=k(()=>C(()=>import("./SVG-DMQC_3si.js"),__vite__mapDeps([3,1,2,4]))),he=k(()=>C(()=>import("./ShowQR-brnziTZl.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));function oe(e){const r=a=>a?" "+a:"",$=()=>{let a=e?.item?.consigneeInfo;return r(a?.firstName)+r(a?.middleName)+r(a?.lastName)+r(a?.lastName2)},d=()=>{let a=e?.item?.consigneeInfo,_=r(a?.altPhoneNumber);return r(a?.phoneNumber)+(_?" |"+_:"")},g=()=>{let a=e?.item?.street.split(",");return a.slice(0,a.length-2).join(",")},b=()=>{let a=e?.item?.hbls.length;const _=e?.item?.hbls.reduce((s,u)=>s+`${s?"/":""}${u.hbl}/${u.quantity}/${u.weight}`,"");let c=`${e?.item?.idairguide}/${e?.item?.cidentity}/${a}/${_}`,n={};n.id=G(),n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=i(he,{val:c,get item(){return e?.item}}),W(n)};return i(o,{get when(){return e?.item?.tracking},get children(){var a=_e(),_=a.firstChild;return t(_,i(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var c=se(),n=c.firstChild,s=n.nextSibling,u=s.firstChild;return t(n,i(P,{name:"alert",size:32,color:"var(--background-red-ssg)"})),t(u,()=>e?.item?.idairnumber),c})(),(()=>{var c=ce(),n=c.firstChild;return t(n,i(P,{name:"link-off",size:32,color:"var(--background-red-ssg)"})),c})(),(()=>{var c=de(),n=c.firstChild,s=n.nextSibling,u=s.nextSibling;return t(n,()=>e?.item?.consigneeInfo?.ybcity),t(u,()=>e?.item?.consigneeInfo?.ybestate),c})()]}}),null),t(_,i(N,{}),null),t(_,i(o,{get when(){return e?.item?.bagnumber},get children(){var c=ue(),n=c.firstChild;return c.$$click=b,t(n,()=>e?.item?.bagnumber),c}}),null),t(a,i(o,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var c=me(),n=c.firstChild,s=n.firstChild,u=n.nextSibling,f=u.nextSibling,y=f.nextSibling;return t(s,g),t(c,i(N,{}),u),t(u,$),t(y,d),c}}),null),t(a,i(o,{when:!1,get children(){var c=ge(),n=c.firstChild;return t(c,i(N,{}),n),t(n,()=>e?.item?.nameshipper),t(c,i(N,{}),null),c}}),null),a}})}Y(["click"]);var H=m('<div class="icon_status centerBx">'),$e=m("<div class=guide_number><h5>"),ve=m('<div class=" tr_bar_10 _dsplFlx">'),V=m("<div class=bag_number><h5>"),q=m("<div class=bottombx><h5>"),j=m("<div><div>"),be=m('<p class="tr_bar_30 textleft fullName_consigne">'),fe=m("<div style=margin-right:4vw>"),xe=m('<h4 class="tr_bar_20 textleft">'),ye=m("<p>"),Se=m('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),we=m('<div><div class="_dsplFlx topbx centerBx"></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ke=m('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador'),Ce=m("<div class=tab>"),E=m("<div class=loader>Loading..."),X=m("<div>"),Ie=m('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),Ne=m('<div class="centerBx bottombx"><h4 class=""></h4><h5> KG</h5><h4 class="">'),Be=m("<div class=bottombx><div><h4></h4></div><div><h5>");const D=k(()=>C(()=>import("./FlexSpace-D3ljtz2L.js"),__vite__mapDeps([0,1,2]))),w=k(()=>C(()=>import("./SVG-DMQC_3si.js"),__vite__mapDeps([3,1,2,4]))),Ee=k(()=>C(()=>import("./ShowQR-brnziTZl.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));let R={YABA_99:"check_circle"};function Ge(e){const r=n=>n?" "+n:"",$=()=>{let n=e?.item?.consigneeInfo;return r(n?.firstName)+r(n?.middleName)+r(n?.lastName)+r(n?.lastName2)},d=()=>{let n=e?.item?.consigneeInfo,s=r(n?.altPhoneNumber);return r(n?.phoneNumber)+(s?" |"+s:"")},g=()=>{let n=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let s=n.reduce((u,f)=>Math.min(u,f.timeStamp),1/0);return Math.floor((new Date().getTime()-s)/864e5)}else return null},b=async()=>{let n={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.idairguide};await Re(n),e?.refresh()},a=()=>{let n=e?.item?.street.split(",");return n.slice(0,n.length-2).join(",")},_=n=>{let s="";if(n)s=n;else if(e?.item?.hblS){let f=e?.item?.hblS;s=`${e?.item?.idairguide}/${e?.item?.cidentity}/${f}`}let u={};u.id=G(),u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=i(Ee,{val:s,get item(){return e?.item}}),W(u)},c=n=>{let s=n,u="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const f=new RegExp(u);return s.length===13&&f.test(s)&&(s=s.slice(3,12)),s};return e?.filter?i(oe,{get item(){return e?.item},get filter(){return e?.filter}}):i(o,{get when(){return e?.item?.tracking},get children(){var n=we(),s=n.firstChild,u=s.nextSibling,f=u.firstChild,y=f.firstChild,A=y.nextSibling,L=A.nextSibling;return t(s,i(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var l=ve();return t(l,i(o,{get when(){return R[e?.item?.currentStatus]},get children(){var v=H();return t(v,i(w,{get name(){return R?.[e?.item?.currentStatus]},size:32,color:"var(--hrm-palette-tertiary60)"})),v}}),null),t(l,i(o,{get when(){return!R[e?.item?.currentStatus]},get children(){var v=H();return t(v,i(w,{get name(){return re?.[e?.item?.currentStatus]},size:32})),v}}),null),t(l,i(o,{get when(){return g()},get children(){var v=$e(),h=v.firstChild;return t(h,g),v}}),null),l})(),i(o,{get when(){return S()&&e?.item?.tracking},get children(){return[i(D,{}),(()=>{var l=j(),v=l.firstChild;return t(v,i(o,{get when(){return e?.item?.bagnumber},get children(){var h=V(),x=h.firstChild;return h.$$click=()=>_(null),t(x,()=>e?.item?.bagnumber),h}})),t(l,i(o,{get when(){return e?.item?.tracking},get children(){var h=q(),x=h.firstChild;return h.$$click=()=>_(c(e?.item?.tracking)),t(x,()=>c(e?.item?.tracking)),h}}),null),l})()]}}),i(o,{get when(){return!S()},get children(){return[(()=>{var l=be();return t(l,$),I(()=>O(l,"data-name",`${e?.item?.cidentity}`)),l})(),fe(),(()=>{var l=xe();return t(l,d),l})()]}})]}}),null),t(s,i(D,{}),null),t(s,i(o,{get when(){return!S()&&e?.item?.tracking},get children(){var l=j(),v=l.firstChild;return t(v,i(o,{get when(){return e?.item?.bagnumber},get children(){var h=V(),x=h.firstChild;return h.$$click=()=>_(null),t(x,()=>c(e?.item?.bagnumber)),h}})),t(l,i(o,{get when(){return e?.item?.tracking},get children(){var h=q(),x=h.firstChild;return h.$$click=()=>_(c(e?.item?.tracking)),t(x,()=>c(e?.item?.tracking)),I(()=>O(h,"data-tracking",`${e?.item?.tracking}`)),h}}),null),l}}),null),t(s,i(o,{get when(){return!e?.item?.bagnumber||J?.profile?.isAdmin},get children(){var l=H();return l.$$click=b,t(l,i(w,{name:"outline_delete",size:24})),l}}),null),t(u,i(o,{get when(){return!S()&&e?.item?.consigneeInfo?.ybcity},get children(){var l=ye();return t(l,a),l}}),f),t(u,i(D,{}),f),t(y,()=>e?.item?.consigneeInfo?.ybcity),t(L,()=>e?.item?.consigneeInfo?.ybestate),t(n,i(o,{get when(){return S()&&e?.item?.consigneeInfo?.ybcity},get children(){var l=Se(),v=l.firstChild,h=v.nextSibling,x=h.nextSibling,Z=x.nextSibling;return t(v,$),t(x,d),t(Z,a),l}}),null),t(n,i(Ae,{get item(){return e?.item}}),null),I(()=>U(n,`client_item_box gWXAaj jlytmu ${S()?"isMobile":""}`)),n}})}const Ae=e=>{const[r,$]=p(0),[d,g]=te(),b=a=>()=>g(()=>$(a));return i(ae,{get children(){return[(()=>{var a=ke(),_=a.firstChild,c=_.firstChild,n=c.firstChild,s=_.nextSibling,u=s.firstChild,f=u.firstChild,y=s.nextSibling,A=y.firstChild,L=A.firstChild;return F(_,"click",b(1),!0),t(n,i(w,{name:"list_dot",size:24})),F(s,"click",b(2),!0),t(f,i(w,{name:"receipt",size:24})),F(y,"click",b(3),!0),t(L,i(w,{name:"send",size:24})),I(l=>{var v=r()===1,h=r()===2,x=r()===3;return v!==l.e&&_.classList.toggle("selected",l.e=v),h!==l.t&&s.classList.toggle("selected",l.t=h),x!==l.a&&y.classList.toggle("selected",l.a=x),l},{e:void 0,t:void 0,a:void 0}),a})(),(()=>{var a=Ce();return t(a,i(B,{get fallback(){return E()},get children(){return i(ee,{get children(){return[i(M,{get when(){return r()===1},get children(){return i(o,{get when(){return r()===1},get children(){return i(Le,{index:1,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),i(M,{get when(){return r()===2},get children(){return i(o,{get when(){return r()===2},get children(){return i(Me,{index:2,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),i(M,{get when(){return r()===3},get children(){return i(o,{get when(){return r()===3},get children(){return i(De,{index:3,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),I(()=>a.classList.toggle("pending",!!d())),a})()]}})},Le=e=>{const[r,{refetch:$}]=T(e?.id,async d=>(await z(e?.idairguide,e?.id,["statusHistory"]))?.statusHistory);return i(B,{get fallback(){return E()},get children(){var d=X();return t(d,i(Q,{get each(){return r()},children:g=>i(Fe,{item:g})})),d}})},Fe=e=>(()=>{var r=Ie(),$=r.firstChild,d=$.nextSibling,g=d.firstChild,b=g.nextSibling,a=b.nextSibling,_=a.nextSibling;_.nextSibling;var c=d.nextSibling;return t($,()=>le[e?.item?.statusId]),t(d,()=>ie(e?.item?.timeStamp),b),t(d,()=>ne(e?.item?.timeStamp),_),t(c,()=>e?.item?.userName),r})(),Me=e=>{const[r,{refetch:$}]=T(e?.id,async d=>(await z(e?.idairguide,e?.id,["hbls"]))?.hbls);return i(B,{get fallback(){return E()},get children(){var d=X();return t(d,i(Q,{get each(){return r()},children:g=>i(He,{item:g})})),d}})},He=e=>(()=>{var r=Ne(),$=r.firstChild,d=$.nextSibling,g=d.firstChild,b=d.nextSibling;return t($,()=>e?.item?.hbl),t(d,()=>e?.item?.weight,g),t(b,()=>e?.item?.namegood),r})(),De=e=>{const[r,{refetch:$}]=T(e?.id,async d=>await z(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return i(B,{get fallback(){return E()},get children(){var d=Be(),g=d.firstChild,b=g.firstChild,a=g.nextSibling,_=a.firstChild;return t(b,()=>r()?.nameshipper),t(_,()=>r()?.shipperInfo?.phoneNumber),d}})},Re=async e=>(await K({params:e,query:"deleteLogisticYabaExpress"}))?.data,z=async(e,r,$)=>{const g=await K({params:{id:r,idairguide:e},fldsQry:$,query:"getLogisticOrderByKeyID"});return g?.data?.error?{}:g};Y(["click"]);export{Ge as default};
