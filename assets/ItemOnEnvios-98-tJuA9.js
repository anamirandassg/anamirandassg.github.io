const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CcqdCYJx.js","assets/index-DnSgefUF.js","assets/index-BRlA1Q7g.css","assets/SVG-Dszn9Bd5.js","assets/Util-BFTPhrO4.js","assets/ShowQR-DwXmTPo2.js","assets/ShowQRPrintLabel-CkhfJg9S.js","assets/fontkit.es-CdiTDqf_.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-DU4P7h91.js","assets/Toast-CE13NV0_.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-Dd6M86xi.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnConsigner-D7hxbLyO.js","assets/DialogHRM-Be-ouSwh.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-DTjBgbrc.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ShowRemmitance-D9rt1C91.js"])))=>i.map(i=>d[i]);
import{l as C,_ as k,h as J,e as r,i as t,S as _,j as I,f as B,k as G,g as U,m as le,a as ae,Q as T,z as L,U as se,V as H,p as Y,F as p,t as m,W as ce}from"./index-DnSgefUF.js";import{e as K,h as de,j as me,a as q,O as ue,g as M,f as P,E as ge}from"./Util-BFTPhrO4.js";import{OpenModal as j,CloseModal as he}from"./DialogHRM-Be-ouSwh.js";import oe from"./ContainerElasticView-DTjBgbrc.js";import{c as ee}from"./ShowQRPrintLabel-CkhfJg9S.js";import"./SVG-Dszn9Bd5.js";/* empty css                             */import"./fontkit.es-CdiTDqf_.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-DU4P7h91.js";import"./Toast-CE13NV0_.js";C(()=>k(()=>import("./FlexSpace-CcqdCYJx.js"),__vite__mapDeps([0,1,2])));C(()=>k(()=>import("./SVG-Dszn9Bd5.js"),__vite__mapDeps([3,1,2,4])));C(()=>k(()=>import("./ShowQR-DwXmTPo2.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));J(["click"]);var R=m('<div class="icon_status centerBx">'),_e=m("<div class=guide_number><h5>"),be=m('<div class=" tr_bar_10 _dsplFlx">'),X=m("<div class=bag_number><h5>"),ve=m('<div><div></div><div class="centerBx bottombx flxWrp"><h4>'),$e=m('<p class="tr_bar_30 textleft fullName_consigne">'),ye=m("<div style=margin-right:4vw>"),fe=m('<h4 class="tr_bar_20 textleft">'),xe=m("<div class=bottombx><h5>"),we=m("<div><div>"),Se=m("<p>"),Ce=m("<div class=separator> "),ke=m('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),Ie=m('<div><div class="_dsplFlx topbx centerBx"><div class="centerBx bottombx flxWrp"><h4></h4></div></div><div class="centerBx bottombx"><div class="centerBx bottombx flxWrp"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),Be=m('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Agency'),Ne=m("<div class=tab>"),D=m("<div class=loader>Loading..."),te=m("<div>"),Ee=m('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),Ae=m('<div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4><h5> KG</h5>|<div class="icon_status centerBx"></div><h5> LB</h5>|<h4 class="">'),Le=m("<div class=bottombx><div><h4></h4></div><div><h5>"),Me=m("<div class=bottombx><div><h4>"),Pe=m('<div><div style=max-height:220px></div><div class="centerBx flxWrp spaceAround ">'),De=m('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),Oe=m('<div class="centerBx flxWrp">');const V=C(()=>k(()=>import("./FlexSpace-CcqdCYJx.js"),__vite__mapDeps([0,1,2]))),w=C(()=>k(()=>import("./SVG-Dszn9Bd5.js"),__vite__mapDeps([3,1,2,4]))),ze=C(()=>k(()=>import("./ButonHrm-Dd6M86xi.js"),__vite__mapDeps([12,1,2,3,4,13]))),ie=C(()=>k(()=>import("./ShowQR-DwXmTPo2.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11]))),Te=C(()=>k(()=>import("./ItemOnConsigner-D7hxbLyO.js"),__vite__mapDeps([14,1,2,4,15,16,17,3,18,7,8,10,11,12,13,19,6,9,0])));let W={YABA_99:"check_circle"};const He=2.20462;function ct(e){const i=d=>d?" "+d:"",n=()=>{let d=e?.item?.consigneeInfo;return i(d?.firstName)+i(d?.middleName)+i(d?.lastName)+i(d?.lastName2)},l=()=>{let d=e?.item?.consigneeInfo,s=i(d?.altPhoneNumber);return i(d?.phoneNumber)+(s?" |"+s:"")},a=()=>{let d=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let s=d.reduce((h,y)=>Math.min(h,y.timeStamp),1/0);return Math.floor((new Date().getTime()-s)/864e5)}else return null},u=async()=>{let s={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia};e?.item?.bagnumber,e?.item?.hbls?.map(async h=>{}),await Ye(s),e?.refresh()},g=d=>{let s="";e?.item?.hblS&&(s=e?.item?.hblS.split("/")?.[2]);let h={};h.id=q(),h.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},h.content=r(ie,{val:s,get item(){return e?.item}}),j(h)},$=async d=>{let s=await Ke(e?.item?.cidentity),h=ue(s)?.[0],y=q(),v={};v.id=y,v.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},v.content=r(Ue,{get item(){return s?.[h]},get it(){return e?.item},modalId:y}),j(v)},S=d=>{let s=d,h="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const y=new RegExp(h);return s.length===13&&y.test(s)&&(s=s.slice(3,12)),s};return r(_,{get when(){return e?.item?.cidentity},get children(){var d=Ie(),s=d.firstChild,h=s.firstChild,y=h.firstChild,v=s.nextSibling,N=v.firstChild,O=N.firstChild,E=O.nextSibling,z=E.nextSibling,F=z.nextSibling,f=F.nextSibling;return t(s,r(_,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var c=be();return t(c,r(_,{get when(){return W[e?.item?.currentStatus]},get children(){var o=R();return t(o,r(w,{get name(){return W?.[e?.item?.currentStatus]},size:32,color:"var(--hrm-palette-tertiary60)"})),o}}),null),t(c,r(_,{get when(){return!W[e?.item?.currentStatus]},get children(){var o=R();return t(o,r(w,{get name(){return K("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),o}}),null),t(c,r(_,{get when(){return a()},get children(){var o=_e(),b=o.firstChild;return t(b,a),o}}),null),c})(),r(_,{get when(){return I()},get children(){return[r(V,{}),(()=>{var c=ve(),o=c.firstChild,b=o.nextSibling,x=b.firstChild;return t(o,r(_,{get when(){return e?.item?.bagnumber},get children(){var A=X(),ne=A.firstChild;return A.$$click=()=>g(e?.item?.bagnumber),t(ne,()=>e?.item?.bagnumber),A}})),t(x,()=>e?.item?.cidentity),c})()]}}),r(_,{get when(){return!I()},get children(){return[(()=>{var c=$e();return t(c,n),B(()=>G(c,"data-name",`${e?.item?.cidentity}`)),c})(),ye(),(()=>{var c=fe();return t(c,l),c})()]}})]}}),h),t(s,r(V,{}),h),y.$$click=()=>ee(e?.item?.cidentity),t(y,()=>e?.item?.cidentity),t(s,r(V,{}),null),t(s,r(_,{get when(){return!I()},get children(){var c=we(),o=c.firstChild;return t(o,r(_,{get when(){return e?.item?.bagnumber},get children(){var b=X(),x=b.firstChild;return b.$$click=()=>g(e?.item?.bagnumber),t(x,()=>S(e?.item?.bagnumber)),b}})),t(c,r(_,{get when(){return e?.item?.tracking},get children(){var b=xe(),x=b.firstChild;return b.$$click=()=>g(S(e?.item?.tracking)),t(x,()=>S(e?.item?.tracking)),B(()=>G(b,"data-tracking",`${e?.item?.tracking}`)),b}}),null),c}}),null),t(s,r(_,{get when(){return U?.profile?.isAdmin},get children(){var c=R();return c.$$click=$,t(c,r(w,{name:"home",size:24})),c}}),null),t(s,r(_,{get when(){return!e?.item?.bagnumber||U?.profile?.isAdmin},get children(){var c=R();return c.$$click=u,t(c,r(w,{name:"outline_delete",size:24})),c}}),null),t(v,r(_,{get when(){return!I()&&e?.item?.consigneeInfo?.ybstreet},get children(){var c=Se();return t(c,()=>Z(e?.item?.consigneeInfo)),c}}),N),t(v,r(V,{}),N),t(O,()=>e?.item?.consigneeInfo?.ybreparto),t(z,()=>e?.item?.consigneeInfo?.ybcity),t(f,()=>e?.item?.consigneeInfo?.ybestate),t(d,r(_,{get when(){return I()&&e?.item?.consigneeInfo?.ybcity},get children(){return[Ce(),(()=>{var c=ke(),o=c.firstChild,b=o.nextSibling,x=b.nextSibling,A=x.nextSibling;return t(o,n),t(x,l),t(A,()=>Z(e?.item?.consigneeInfo)),c})()]}}),null),t(d,r(Re,{get item(){return e?.item}}),null),B(()=>le(d,`client_item_box gWXAaj jlytmu ${I()?"isMobile":""}`)),d}})}const Re=e=>{const[i,n]=ae(0),[l,a]=ce(),u=g=>()=>a(()=>n(g));return r(oe,{get children(){return[(()=>{var g=Be(),$=g.firstChild,S=$.firstChild,d=S.firstChild,s=$.nextSibling,h=s.firstChild,y=h.firstChild,v=s.nextSibling,N=v.firstChild,O=N.firstChild,E=v.nextSibling,z=E.firstChild,F=z.firstChild;return T($,"click",u(1),!0),t(d,r(w,{name:"list_dot",size:24})),T(s,"click",u(2),!0),t(y,r(w,{name:"receipt",size:24})),T(v,"click",u(3),!0),t(O,r(w,{name:"send",size:24})),T(E,"click",u(4),!0),t(F,r(w,{name:"store",size:24})),B(f=>{var c=i()===1,o=i()===2,b=i()===3,x=i()===4;return c!==f.e&&$.classList.toggle("selected",f.e=c),o!==f.t&&s.classList.toggle("selected",f.t=o),b!==f.a&&v.classList.toggle("selected",f.a=b),x!==f.o&&E.classList.toggle("selected",f.o=x),f},{e:void 0,t:void 0,a:void 0,o:void 0}),g})(),(()=>{var g=Ne();return t(g,r(L,{get fallback(){return D()},get children(){return r(se,{get children(){return[r(H,{get when(){return i()===1},get children(){return r(_,{get when(){return i()===1},get children(){return r(Ve,{index:1,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key},get currentStatus(){return e?.item?.currentStatus}})}})}}),r(H,{get when(){return i()===2},get children(){return r(_,{get when(){return i()===2},get children(){return r(qe,{index:2,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),r(H,{get when(){return i()===3},get children(){return r(_,{get when(){return i()===3},get children(){return r(We,{index:3,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),r(H,{get when(){return i()===4},get children(){return r(_,{get when(){return i()===4},get children(){return r(je,{index:4,get agency(){return e?.item?.agency},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),B(()=>g.classList.toggle("pending",!!l())),g})()]}})},Ve=e=>{const[i,{refetch:n}]=Y(e?.id,async l=>{const a=await Xe(e?.idairguide,e?.id);return ge(a)});return r(L,{get fallback(){return D()},get children(){var l=te();return t(l,r(p,{get each(){return i()},children:a=>r(Qe,{item:a})})),l}})},Qe=e=>(()=>{var i=Ee(),n=i.firstChild,l=n.nextSibling,a=l.firstChild,u=a.nextSibling,g=u.nextSibling,$=g.nextSibling;$.nextSibling;var S=l.nextSibling;return t(n,()=>K("M023009")?.statusObjDesc[e?.item?.statusId]),t(l,()=>de(e?.item?.timeStamp),u),t(l,()=>me(e?.item?.timeStamp),$),t(S,()=>e?.item?.userName),i})(),qe=e=>{const[i,{refetch:n}]=Y(e?.id,async l=>(await re(e?.guia,e?.id,["hbls"]))?.hbls);return r(L,{get fallback(){return D()},get children(){var l=te();return t(l,r(p,{get each(){return i()},children:a=>r(Fe,{item:a})})),l}})},Fe=e=>{const i=l=>{let a={};a.id=q(),a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=r(ie,{get val(){return e?.item?.hbl},get item(){return e?.item}}),j(a)},n=l=>{ee(l)};return(()=>{var l=Ae(),a=l.firstChild,u=a.nextSibling,g=u.nextSibling,$=g.firstChild,S=g.nextSibling,d=S.nextSibling,s=d.nextSibling,h=s.firstChild,y=s.nextSibling,v=y.nextSibling;return a.$$click=i,t(a,r(w,{name:"qr_code",size:20})),u.$$click=()=>n(e?.item?.hbl),t(u,()=>e?.item?.hbl),t(g,()=>e?.item?.weight,$),t(d,r(w,{name:"weight-pound",size:20})),t(s,()=>(e?.item?.weight*He).toFixed(2),h),t(v,()=>e?.item?.namegood),l})()},We=e=>{const[i,{refetch:n}]=Y(e?.id,async l=>await re(e?.guia,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return r(L,{get fallback(){return D()},get children(){var l=Le(),a=l.firstChild,u=a.firstChild,g=a.nextSibling,$=g.firstChild;return t(u,()=>i()?.nameshipper),t($,()=>i()?.shipperInfo?.phoneNumber),l}})},je=e=>{const i=()=>K("M023009")?.[e?.agency];return r(L,{get fallback(){return D()},get children(){var n=Me(),l=n.firstChild,a=l.firstChild;return t(a,()=>i()?.label),n}})},Ye=async e=>{let i={params:e},n=M(809005);return i={...i,...n},(await P(i))?.data},re=async(e,i,n)=>{let l={params:{id:i,idairguide:e},fldsQry:n},a=M(802002);l={...l,...a};const u=await P(l);return u?.data?.error?{}:u},Ke=async e=>{if(e.length>4){let i={params:{}};e&&e.split(" ").map((a,u)=>{a&&(i.params[":search"+u]=a.trim())});let n=M(401001);return i={...i,...n},await P(i)}else return{}},Ge=async(e,i)=>{let n={params:e,data2update:i},l=M(809004);return n={...n,...l},await P(n)},Ue=e=>{const i=async()=>{let n={consigneeInfo:{cid:e?.item?.cid,firstName:e?.item?.firstName,lastName:e?.item?.lastName,lastName2:e?.item?.lastName2,middleName:e?.item?.middleName,phoneNumber:e?.item?.phoneNumber,ybapt:e?.item?.ybapt,ybbetwen1:e?.item?.ybbetwen1,ybbetwen2:e?.item?.ybbetwen2,ybcity:e?.item?.ybcity,ybestate:e?.item?.ybestate,ybreparto:e?.item?.ybreparto,ybstreet:e?.item?.ybstreet,ybstreetNo:e?.item?.ybstreetNo},city:e?.item?.ybcity,estate:e?.item?.ybestate};await Ge({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},n),he(e?.modalId)};return(()=>{var n=Pe(),l=n.firstChild,a=l.nextSibling;return n.style.setProperty("height","clamp(20vh, 45vh, 80vh)"),n.style.setProperty("overflow","auto"),n.style.setProperty("background","#ffffff"),n.style.setProperty("border-radius","13"),n.style.setProperty("padding","10px 19px"),t(l,r(Te,{get item(){return e?.item},refresh:()=>isOpenDebounced(q())})),t(a,r(ze,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:i})),B(u=>(u=I()?"96vw":"920px")!=null?n.style.setProperty("width",u):n.style.removeProperty("width")),n})()},Q=(e,i)=>i?(()=>{var n=De(),l=n.firstChild,a=l.nextSibling;return t(l," "+e),t(a,i),n})():"",Z=e=>(()=>{var i=Oe();return t(i,()=>Q("Calle",e?.ybstreet),null),t(i,()=>Q("#",e?.ybstreetNo),null),t(i,()=>Q("E/",e?.ybbetwen1),null),t(i,()=>Q("y",e?.ybbetwen2),null),i})(),Xe=async(e,i)=>{let n={params:{":search0":i,airguide:e}},l=M(815002);n={...n,...l};const a=await P(n);return a?.data?.error?{}:a};J(["click"]);export{ct as default,Z as getAddress};
