const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-ByMz39bD.js","assets/index-DFllEmGK.js","assets/index-BRlA1Q7g.css","assets/SVG-BJgx9GLA.js","assets/Util-DCAGxQXf.js","assets/ShowQR-Dd7EJHzv.js","assets/ShowQRPrintLabel-BRqlj31R.js","assets/fontkit.es-bSs4huUp.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-DJ_AIouE.js","assets/Toast-E0cBWHcm.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-B-J2yQLQ.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnConsigner-D1ehk59X.js","assets/DialogHRM-BrdwGl49.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-BGG79mTA.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ShowRemmitance-Dp4hn_nk.js"])))=>i.map(i=>d[i]);
import{l as C,_ as k,h as X,e as n,i as t,S as _,j as I,f as B,k as q,g as Y,m as re,a as le,Q as D,z as L,U as ae,V as T,p as j,F as Z,t as m,W as se}from"./index-DFllEmGK.js";import{e as J,h as ce,j as de,a as R,O as me,g as V,f as F,F as ue}from"./Util-DCAGxQXf.js";import{OpenModal as W,CloseModal as ge}from"./DialogHRM-BrdwGl49.js";import he from"./ContainerElasticView-BGG79mTA.js";import{c as p}from"./ShowQRPrintLabel-BRqlj31R.js";import"./SVG-BJgx9GLA.js";/* empty css                             */import"./fontkit.es-bSs4huUp.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-DJ_AIouE.js";import"./Toast-E0cBWHcm.js";C(()=>k(()=>import("./FlexSpace-ByMz39bD.js"),__vite__mapDeps([0,1,2])));C(()=>k(()=>import("./SVG-BJgx9GLA.js"),__vite__mapDeps([3,1,2,4])));C(()=>k(()=>import("./ShowQR-Dd7EJHzv.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));X(["click"]);var oe=m("<div class=guide_number><h5>"),_e=m('<div class=" tr_bar_10 _dsplFlx">'),K=m("<div class=bag_number><h5>"),be=m('<div><div></div><div class="centerBx bottombx flxWrp"><h4>'),ve=m('<p class="tr_bar_30 textleft fullName_consigne">'),$e=m("<div style=margin-right:4vw>"),ye=m('<h4 class="tr_bar_20 textleft">'),fe=m("<div class=bottombx><h5>"),xe=m("<div><div>"),G=m('<div class="icon_status centerBx">'),we=m("<p>"),Se=m("<div class=separator> "),Ce=m('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),ke=m('<div><div class="_dsplFlx topbx centerBx"><div class="centerBx bottombx flxWrp"><h4></h4></div></div><div class="centerBx bottombx"><div class="centerBx bottombx flxWrp"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),Ie=m('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Agency'),Be=m("<div class=tab>"),M=m("<div class=loader>Loading..."),ee=m("<div>"),Ne=m('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),Ee=m('<div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4><h5> KG</h5>|<div class="icon_status centerBx"></div><h5> LB</h5>|<h4 class="">'),Ae=m("<div class=bottombx><div><h4></h4></div><div><h5>"),Le=m("<div class=bottombx><div><h4>"),Me=m('<div><div style=max-height:220px></div><div class="centerBx flxWrp spaceAround ">'),Pe=m('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),Oe=m('<div class="centerBx flxWrp">');const z=C(()=>k(()=>import("./FlexSpace-ByMz39bD.js"),__vite__mapDeps([0,1,2]))),S=C(()=>k(()=>import("./SVG-BJgx9GLA.js"),__vite__mapDeps([3,1,2,4]))),De=C(()=>k(()=>import("./ButonHrm-B-J2yQLQ.js"),__vite__mapDeps([12,1,2,3,4,13]))),te=C(()=>k(()=>import("./ShowQR-Dd7EJHzv.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11]))),Te=C(()=>k(()=>import("./ItemOnConsigner-D1ehk59X.js"),__vite__mapDeps([14,1,2,4,15,16,17,3,18,7,8,10,11,12,13,19,6,9,0]))),ze=2.20462;function at(e){const i=d=>d?" "+d:"",l=()=>{let d=e?.item?.consigneeInfo;return i(d?.firstName)+i(d?.middleName)+i(d?.lastName)+i(d?.lastName2)},r=()=>{let d=e?.item?.consigneeInfo,s=i(d?.altPhoneNumber);return i(d?.phoneNumber)+(s?" |"+s:"")},a=()=>{let d=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let s=d.reduce((h,$)=>Math.min(h,$.timeStamp),1/0);return Math.floor((new Date().getTime()-s)/864e5)}else return null},u=async()=>{let d=e?.item?.ssg_track_key;e?.item?.guia,e?.item?.bagnumber,e?.item?.hbls?.map(async s=>{})},g=d=>{let s="";e?.item?.hblS&&(s=e?.item?.hblS.split("/")?.[2]);let h={};h.id=R(),h.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},h.content=n(te,{val:s,get item(){return e?.item}}),W(h)},v=async d=>{let s=await qe(e?.item?.cidentity),h=me(s)?.[0],$=R(),b={};b.id=$,b.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},b.content=n(Ke,{get item(){return s?.[h]},get it(){return e?.item},modalId:$}),W(b)},w=d=>{let s=d,h="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const $=new RegExp(h);return s.length===13&&$.test(s)&&(s=s.slice(3,12)),s};return n(_,{get when(){return e?.item?.cidentity},get children(){var d=ke(),s=d.firstChild,h=s.firstChild,$=h.firstChild,b=s.nextSibling,N=b.firstChild,P=N.firstChild,E=P.nextSibling,O=E.nextSibling,Q=O.nextSibling,f=Q.nextSibling;return t(s,n(_,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var c=_e();return t(c,n(_,{get when(){return a()},get children(){var y=oe(),o=y.firstChild;return t(o,a),y}})),c})(),n(_,{get when(){return I()},get children(){return[n(z,{}),(()=>{var c=be(),y=c.firstChild,o=y.nextSibling,x=o.firstChild;return t(y,n(_,{get when(){return e?.item?.bagnumber},get children(){var A=K(),ne=A.firstChild;return A.$$click=()=>g(e?.item?.bagnumber),t(ne,()=>e?.item?.bagnumber),A}})),t(x,()=>e?.item?.cidentity),c})()]}}),n(_,{get when(){return!I()},get children(){return[(()=>{var c=ve();return t(c,l),B(()=>q(c,"data-name",`${e?.item?.cidentity}`)),c})(),$e(),(()=>{var c=ye();return t(c,r),c})()]}})]}}),h),t(s,n(z,{}),h),$.$$click=()=>p(e?.item?.cidentity),t($,()=>e?.item?.cidentity),t(s,n(z,{}),null),t(s,n(_,{get when(){return!I()},get children(){var c=xe(),y=c.firstChild;return t(y,n(_,{get when(){return e?.item?.bagnumber},get children(){var o=K(),x=o.firstChild;return o.$$click=()=>g(e?.item?.bagnumber),t(x,()=>w(e?.item?.bagnumber)),o}})),t(c,n(_,{get when(){return e?.item?.tracking},get children(){var o=fe(),x=o.firstChild;return o.$$click=()=>g(w(e?.item?.tracking)),t(x,()=>w(e?.item?.tracking)),B(()=>q(o,"data-tracking",`${e?.item?.tracking}`)),o}}),null),c}}),null),t(s,n(_,{get when(){return Y?.profile?.isAdmin},get children(){var c=G();return c.$$click=v,t(c,n(S,{name:"home",size:24})),c}}),null),t(s,n(_,{get when(){return!e?.item?.bagnumber||Y?.profile?.isAdmin},get children(){var c=G();return c.$$click=u,t(c,n(S,{name:"outline_delete",size:24})),c}}),null),t(b,n(_,{get when(){return!I()&&e?.item?.consigneeInfo?.ybstreet},get children(){var c=we();return t(c,()=>U(e?.item?.consigneeInfo)),c}}),N),t(b,n(z,{}),N),t(P,()=>e?.item?.consigneeInfo?.ybreparto),t(O,()=>e?.item?.consigneeInfo?.ybcity),t(f,()=>e?.item?.consigneeInfo?.ybestate),t(d,n(_,{get when(){return I()&&e?.item?.consigneeInfo?.ybcity},get children(){return[Se(),(()=>{var c=Ce(),y=c.firstChild,o=y.nextSibling,x=o.nextSibling,A=x.nextSibling;return t(y,l),t(x,r),t(A,()=>U(e?.item?.consigneeInfo)),c})()]}}),null),t(d,n(He,{get item(){return e?.item}}),null),B(()=>re(d,`client_item_box gWXAaj jlytmu ${I()?"isMobile":""}`)),d}})}const He=e=>{const[i,l]=le(0),[r,a]=se(),u=g=>()=>a(()=>l(g));return n(he,{get children(){return[(()=>{var g=Ie(),v=g.firstChild,w=v.firstChild,d=w.firstChild,s=v.nextSibling,h=s.firstChild,$=h.firstChild,b=s.nextSibling,N=b.firstChild,P=N.firstChild,E=b.nextSibling,O=E.firstChild,Q=O.firstChild;return D(v,"click",u(1),!0),t(d,n(S,{name:"list_dot",size:24})),D(s,"click",u(2),!0),t($,n(S,{name:"receipt",size:24})),D(b,"click",u(3),!0),t(P,n(S,{name:"send",size:24})),D(E,"click",u(4),!0),t(Q,n(S,{name:"store",size:24})),B(f=>{var c=i()===1,y=i()===2,o=i()===3,x=i()===4;return c!==f.e&&v.classList.toggle("selected",f.e=c),y!==f.t&&s.classList.toggle("selected",f.t=y),o!==f.a&&b.classList.toggle("selected",f.a=o),x!==f.o&&E.classList.toggle("selected",f.o=x),f},{e:void 0,t:void 0,a:void 0,o:void 0}),g})(),(()=>{var g=Be();return t(g,n(L,{get fallback(){return M()},get children(){return n(ae,{get children(){return[n(T,{get when(){return i()===1},get children(){return n(_,{get when(){return i()===1},get children(){return n(Re,{index:1,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key},get currentStatus(){return e?.item?.currentStatus}})}})}}),n(T,{get when(){return i()===2},get children(){return n(_,{get when(){return i()===2},get children(){return n(Fe,{index:2,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),n(T,{get when(){return i()===3},get children(){return n(_,{get when(){return i()===3},get children(){return n(We,{index:3,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),n(T,{get when(){return i()===4},get children(){return n(_,{get when(){return i()===4},get children(){return n(je,{index:4,get agency(){return e?.item?.agency},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),B(()=>g.classList.toggle("pending",!!r())),g})()]}})},Re=e=>{const[i,{refetch:l}]=j(e?.id,async r=>{const a=await Ge(e?.idairguide,e?.id);return ue(a)});return n(L,{get fallback(){return M()},get children(){var r=ee();return t(r,n(Z,{get each(){return i()},children:a=>n(Ve,{item:a})})),r}})},Ve=e=>(()=>{var i=Ne(),l=i.firstChild,r=l.nextSibling,a=r.firstChild,u=a.nextSibling,g=u.nextSibling,v=g.nextSibling;v.nextSibling;var w=r.nextSibling;return t(l,()=>J("M023009")?.statusObjDesc[e?.item?.statusId]),t(r,()=>ce(e?.item?.timeStamp),u),t(r,()=>de(e?.item?.timeStamp),v),t(w,()=>e?.item?.userName),i})(),Fe=e=>{const[i,{refetch:l}]=j(e?.id,async r=>(await ie(e?.guia,e?.id,["hbls"]))?.hbls);return n(L,{get fallback(){return M()},get children(){var r=ee();return t(r,n(Z,{get each(){return i()},children:a=>n(Qe,{item:a})})),r}})},Qe=e=>{const i=r=>{let a={};a.id=R(),a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=n(te,{get val(){return e?.item?.hbl},get item(){return e?.item}}),W(a)},l=r=>{p(r)};return(()=>{var r=Ee(),a=r.firstChild,u=a.nextSibling,g=u.nextSibling,v=g.firstChild,w=g.nextSibling,d=w.nextSibling,s=d.nextSibling,h=s.firstChild,$=s.nextSibling,b=$.nextSibling;return a.$$click=i,t(a,n(S,{name:"qr_code",size:20})),u.$$click=()=>l(e?.item?.hbl),t(u,()=>e?.item?.hbl),t(g,()=>e?.item?.weight,v),t(d,n(S,{name:"weight-pound",size:20})),t(s,()=>(e?.item?.weight*ze).toFixed(2),h),t(b,()=>e?.item?.namegood),r})()},We=e=>{const[i,{refetch:l}]=j(e?.id,async r=>await ie(e?.guia,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return n(L,{get fallback(){return M()},get children(){var r=Ae(),a=r.firstChild,u=a.firstChild,g=a.nextSibling,v=g.firstChild;return t(u,()=>i()?.nameshipper),t(v,()=>i()?.shipperInfo?.phoneNumber),r}})},je=e=>{const i=()=>J("M023009")?.[e?.agency];return n(L,{get fallback(){return M()},get children(){var l=Le(),r=l.firstChild,a=r.firstChild;return t(a,()=>i()?.label),l}})},ie=async(e,i,l)=>{let r={params:{id:i,idairguide:e},fldsQry:l},a=V(802002);r={...r,...a};const u=await F(r);return u?.data?.error?{}:u},qe=async e=>{if(e.length>4){let i={params:{}};e&&e.split(" ").map((a,u)=>{a&&(i.params[":search"+u]=a.trim())});let l=V(401001);return i={...i,...l},await F(i)}else return{}},Ye=async(e,i)=>{let l={params:e,data2update:i},r=V(809004);return l={...l,...r},await F(l)},Ke=e=>{const i=async()=>{let l={consigneeInfo:{cid:e?.item?.cid,firstName:e?.item?.firstName,lastName:e?.item?.lastName,lastName2:e?.item?.lastName2,middleName:e?.item?.middleName,phoneNumber:e?.item?.phoneNumber,ybapt:e?.item?.ybapt,ybbetwen1:e?.item?.ybbetwen1,ybbetwen2:e?.item?.ybbetwen2,ybcity:e?.item?.ybcity,ybestate:e?.item?.ybestate,ybreparto:e?.item?.ybreparto,ybstreet:e?.item?.ybstreet,ybstreetNo:e?.item?.ybstreetNo},city:e?.item?.ybcity,estate:e?.item?.ybestate};await Ye({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},l),ge(e?.modalId)};return(()=>{var l=Me(),r=l.firstChild,a=r.nextSibling;return l.style.setProperty("height","clamp(20vh, 45vh, 80vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),t(r,n(Te,{get item(){return e?.item},refresh:()=>isOpenDebounced(R())})),t(a,n(De,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:i})),B(u=>(u=I()?"96vw":"920px")!=null?l.style.setProperty("width",u):l.style.removeProperty("width")),l})()},H=(e,i)=>i?(()=>{var l=Pe(),r=l.firstChild,a=r.nextSibling;return t(r," "+e),t(a,i),l})():"",U=e=>(()=>{var i=Oe();return t(i,()=>H("Calle",e?.ybstreet),null),t(i,()=>H("#",e?.ybstreetNo),null),t(i,()=>H("E/",e?.ybbetwen1),null),t(i,()=>H("y",e?.ybbetwen2),null),i})(),Ge=async(e,i)=>{let l={params:{":search0":i,airguide:e}},r=V(815002);l={...l,...r};const a=await F(l);return a?.data?.error?{}:a};X(["click"]);export{at as default,U as getAddress};
