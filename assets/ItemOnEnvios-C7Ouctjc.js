const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BcNdFcwd.js","assets/index-BohYA11Y.js","assets/index-BRlA1Q7g.css","assets/SVG-DjC2J2vQ.js","assets/Util-B-FWhTQW.js","assets/ShowQR-CgxfTcnq.js","assets/ShowQRPrintLabel-D1csX2gH.js","assets/fontkit.es-Dye5NabB.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-ByvuCY7T.js","assets/Toast-DV07Bp4-.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-CMynCUBl.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnConsigner-CGv8B5Ka.js","assets/DialogHRM-CMbGjqUO.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-DJAbJbp3.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ShowRemmitance-zL4ZOKiH.js"])))=>i.map(i=>d[i]);
import{l as C,_ as k,h as X,e as n,i,S as _,j as I,f as B,k as j,g as Y,m as re,a as le,Q as z,z as L,U as ae,V as H,p as W,F as Z,t as m,W as se}from"./index-BohYA11Y.js";import{e as J,h as ce,j as de,a as Q,O as me,g as M,f as P,F as ue}from"./Util-B-FWhTQW.js";import{OpenModal as F,CloseModal as ge}from"./DialogHRM-CMbGjqUO.js";import he from"./ContainerElasticView-DJAbJbp3.js";import{c as p}from"./ShowQRPrintLabel-D1csX2gH.js";import"./SVG-DjC2J2vQ.js";/* empty css                             */import"./fontkit.es-Dye5NabB.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-ByvuCY7T.js";import"./Toast-DV07Bp4-.js";C(()=>k(()=>import("./FlexSpace-BcNdFcwd.js"),__vite__mapDeps([0,1,2])));C(()=>k(()=>import("./SVG-DjC2J2vQ.js"),__vite__mapDeps([3,1,2,4])));C(()=>k(()=>import("./ShowQR-CgxfTcnq.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));X(["click"]);var oe=m("<div class=guide_number><h5>"),_e=m('<div class=" tr_bar_10 _dsplFlx">'),K=m("<div class=bag_number><h5>"),be=m('<div><div></div><div class="centerBx bottombx flxWrp"><h4>'),ve=m('<p class="tr_bar_30 textleft fullName_consigne">'),$e=m("<div style=margin-right:4vw>"),ye=m('<h4 class="tr_bar_20 textleft">'),fe=m("<div class=bottombx><h5>"),xe=m("<div><div>"),G=m('<div class="icon_status centerBx">'),we=m("<p>"),Se=m("<div class=separator> "),Ce=m('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),ke=m('<div><div class="_dsplFlx topbx centerBx"><div class="centerBx bottombx flxWrp"><h4></h4></div></div><div class="centerBx bottombx"><div class="centerBx bottombx flxWrp"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),Ie=m('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Agency'),Be=m("<div class=tab>"),O=m("<div class=loader>Loading..."),ee=m("<div>"),Ne=m('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),Ee=m('<div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4><h5> KG</h5>|<div class="icon_status centerBx"></div><h5> LB</h5>|<h4 class="">'),Ae=m("<div class=bottombx><div><h4></h4></div><div><h5>"),Le=m("<div class=bottombx><div><h4>"),Me=m('<div><div style=max-height:220px></div><div class="centerBx flxWrp spaceAround ">'),Pe=m('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),Oe=m('<div class="centerBx flxWrp">');const R=C(()=>k(()=>import("./FlexSpace-BcNdFcwd.js"),__vite__mapDeps([0,1,2]))),S=C(()=>k(()=>import("./SVG-DjC2J2vQ.js"),__vite__mapDeps([3,1,2,4]))),De=C(()=>k(()=>import("./ButonHrm-CMynCUBl.js"),__vite__mapDeps([12,1,2,3,4,13]))),te=C(()=>k(()=>import("./ShowQR-CgxfTcnq.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11]))),Te=C(()=>k(()=>import("./ItemOnConsigner-CGv8B5Ka.js"),__vite__mapDeps([14,1,2,4,15,16,17,3,18,7,8,10,11,12,13,19,6,9,0]))),ze=2.20462;function st(e){const t=d=>d?" "+d:"",r=()=>{let d=e?.item?.consigneeInfo;return t(d?.firstName)+t(d?.middleName)+t(d?.lastName)+t(d?.lastName2)},l=()=>{let d=e?.item?.consigneeInfo,s=t(d?.altPhoneNumber);return t(d?.phoneNumber)+(s?" |"+s:"")},a=()=>{let d=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let s=d.reduce((h,$)=>Math.min(h,$.timeStamp),1/0);return Math.floor((new Date().getTime()-s)/864e5)}else return null},u=async()=>{let s={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia};e?.item?.bagnumber,e?.item?.hbls?.map(async h=>{}),await je(s),e?.refresh()},g=d=>{let s="";e?.item?.hblS&&(s=e?.item?.hblS.split("/")?.[2]);let h={};h.id=Q(),h.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},h.content=n(te,{val:s,get item(){return e?.item}}),F(h)},v=async d=>{let s=await Ye(e?.item?.cidentity),h=me(s)?.[0],$=Q(),b={};b.id=$,b.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},b.content=n(Ge,{get item(){return s?.[h]},get it(){return e?.item},modalId:$}),F(b)},w=d=>{let s=d,h="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const $=new RegExp(h);return s.length===13&&$.test(s)&&(s=s.slice(3,12)),s};return n(_,{get when(){return e?.item?.cidentity},get children(){var d=ke(),s=d.firstChild,h=s.firstChild,$=h.firstChild,b=s.nextSibling,N=b.firstChild,D=N.firstChild,E=D.nextSibling,T=E.nextSibling,q=T.nextSibling,f=q.nextSibling;return i(s,n(_,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var c=_e();return i(c,n(_,{get when(){return a()},get children(){var y=oe(),o=y.firstChild;return i(o,a),y}})),c})(),n(_,{get when(){return I()},get children(){return[n(R,{}),(()=>{var c=be(),y=c.firstChild,o=y.nextSibling,x=o.firstChild;return i(y,n(_,{get when(){return e?.item?.bagnumber},get children(){var A=K(),ne=A.firstChild;return A.$$click=()=>g(e?.item?.bagnumber),i(ne,()=>e?.item?.bagnumber),A}})),i(x,()=>e?.item?.cidentity),c})()]}}),n(_,{get when(){return!I()},get children(){return[(()=>{var c=ve();return i(c,r),B(()=>j(c,"data-name",`${e?.item?.cidentity}`)),c})(),$e(),(()=>{var c=ye();return i(c,l),c})()]}})]}}),h),i(s,n(R,{}),h),$.$$click=()=>p(e?.item?.cidentity),i($,()=>e?.item?.cidentity),i(s,n(R,{}),null),i(s,n(_,{get when(){return!I()},get children(){var c=xe(),y=c.firstChild;return i(y,n(_,{get when(){return e?.item?.bagnumber},get children(){var o=K(),x=o.firstChild;return o.$$click=()=>g(e?.item?.bagnumber),i(x,()=>w(e?.item?.bagnumber)),o}})),i(c,n(_,{get when(){return e?.item?.tracking},get children(){var o=fe(),x=o.firstChild;return o.$$click=()=>g(w(e?.item?.tracking)),i(x,()=>w(e?.item?.tracking)),B(()=>j(o,"data-tracking",`${e?.item?.tracking}`)),o}}),null),c}}),null),i(s,n(_,{get when(){return Y?.profile?.isAdmin},get children(){var c=G();return c.$$click=v,i(c,n(S,{name:"home",size:24})),c}}),null),i(s,n(_,{get when(){return!e?.item?.bagnumber||Y?.profile?.isAdmin},get children(){var c=G();return c.$$click=u,i(c,n(S,{name:"outline_delete",size:24})),c}}),null),i(b,n(_,{get when(){return!I()&&e?.item?.consigneeInfo?.ybstreet},get children(){var c=we();return i(c,()=>U(e?.item?.consigneeInfo)),c}}),N),i(b,n(R,{}),N),i(D,()=>e?.item?.consigneeInfo?.ybreparto),i(T,()=>e?.item?.consigneeInfo?.ybcity),i(f,()=>e?.item?.consigneeInfo?.ybestate),i(d,n(_,{get when(){return I()&&e?.item?.consigneeInfo?.ybcity},get children(){return[Se(),(()=>{var c=Ce(),y=c.firstChild,o=y.nextSibling,x=o.nextSibling,A=x.nextSibling;return i(y,r),i(x,l),i(A,()=>U(e?.item?.consigneeInfo)),c})()]}}),null),i(d,n(He,{get item(){return e?.item}}),null),B(()=>re(d,`client_item_box gWXAaj jlytmu ${I()?"isMobile":""}`)),d}})}const He=e=>{const[t,r]=le(0),[l,a]=se(),u=g=>()=>a(()=>r(g));return n(he,{get children(){return[(()=>{var g=Ie(),v=g.firstChild,w=v.firstChild,d=w.firstChild,s=v.nextSibling,h=s.firstChild,$=h.firstChild,b=s.nextSibling,N=b.firstChild,D=N.firstChild,E=b.nextSibling,T=E.firstChild,q=T.firstChild;return z(v,"click",u(1),!0),i(d,n(S,{name:"list_dot",size:24})),z(s,"click",u(2),!0),i($,n(S,{name:"receipt",size:24})),z(b,"click",u(3),!0),i(D,n(S,{name:"send",size:24})),z(E,"click",u(4),!0),i(q,n(S,{name:"store",size:24})),B(f=>{var c=t()===1,y=t()===2,o=t()===3,x=t()===4;return c!==f.e&&v.classList.toggle("selected",f.e=c),y!==f.t&&s.classList.toggle("selected",f.t=y),o!==f.a&&b.classList.toggle("selected",f.a=o),x!==f.o&&E.classList.toggle("selected",f.o=x),f},{e:void 0,t:void 0,a:void 0,o:void 0}),g})(),(()=>{var g=Be();return i(g,n(L,{get fallback(){return O()},get children(){return n(ae,{get children(){return[n(H,{get when(){return t()===1},get children(){return n(_,{get when(){return t()===1},get children(){return n(Re,{index:1,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key},get currentStatus(){return e?.item?.currentStatus}})}})}}),n(H,{get when(){return t()===2},get children(){return n(_,{get when(){return t()===2},get children(){return n(Qe,{index:2,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),n(H,{get when(){return t()===3},get children(){return n(_,{get when(){return t()===3},get children(){return n(Fe,{index:3,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),n(H,{get when(){return t()===4},get children(){return n(_,{get when(){return t()===4},get children(){return n(We,{index:4,get agency(){return e?.item?.agency},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),B(()=>g.classList.toggle("pending",!!l())),g})()]}})},Re=e=>{const[t,{refetch:r}]=W(e?.id,async l=>{const a=await Ue(e?.idairguide,e?.id);return ue(a)});return n(L,{get fallback(){return O()},get children(){var l=ee();return i(l,n(Z,{get each(){return t()},children:a=>n(Ve,{item:a})})),l}})},Ve=e=>(()=>{var t=Ne(),r=t.firstChild,l=r.nextSibling,a=l.firstChild,u=a.nextSibling,g=u.nextSibling,v=g.nextSibling;v.nextSibling;var w=l.nextSibling;return i(r,()=>J("M023009")?.statusObjDesc[e?.item?.statusId]),i(l,()=>ce(e?.item?.timeStamp),u),i(l,()=>de(e?.item?.timeStamp),v),i(w,()=>e?.item?.userName),t})(),Qe=e=>{const[t,{refetch:r}]=W(e?.id,async l=>(await ie(e?.guia,e?.id,["hbls"]))?.hbls);return n(L,{get fallback(){return O()},get children(){var l=ee();return i(l,n(Z,{get each(){return t()},children:a=>n(qe,{item:a})})),l}})},qe=e=>{const t=l=>{let a={};a.id=Q(),a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=n(te,{get val(){return e?.item?.hbl},get item(){return e?.item}}),F(a)},r=l=>{p(l)};return(()=>{var l=Ee(),a=l.firstChild,u=a.nextSibling,g=u.nextSibling,v=g.firstChild,w=g.nextSibling,d=w.nextSibling,s=d.nextSibling,h=s.firstChild,$=s.nextSibling,b=$.nextSibling;return a.$$click=t,i(a,n(S,{name:"qr_code",size:20})),u.$$click=()=>r(e?.item?.hbl),i(u,()=>e?.item?.hbl),i(g,()=>e?.item?.weight,v),i(d,n(S,{name:"weight-pound",size:20})),i(s,()=>(e?.item?.weight*ze).toFixed(2),h),i(b,()=>e?.item?.namegood),l})()},Fe=e=>{const[t,{refetch:r}]=W(e?.id,async l=>await ie(e?.guia,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return n(L,{get fallback(){return O()},get children(){var l=Ae(),a=l.firstChild,u=a.firstChild,g=a.nextSibling,v=g.firstChild;return i(u,()=>t()?.nameshipper),i(v,()=>t()?.shipperInfo?.phoneNumber),l}})},We=e=>{const t=()=>J("M023009")?.[e?.agency];return n(L,{get fallback(){return O()},get children(){var r=Le(),l=r.firstChild,a=l.firstChild;return i(a,()=>t()?.label),r}})},je=async e=>{let t={params:e},r=M(809005);return t={...t,...r},(await P(t))?.data},ie=async(e,t,r)=>{let l={params:{id:t,idairguide:e},fldsQry:r},a=M(802002);l={...l,...a};const u=await P(l);return u?.data?.error?{}:u},Ye=async e=>{if(e.length>4){let t={params:{}};e&&e.split(" ").map((a,u)=>{a&&(t.params[":search"+u]=a.trim())});let r=M(401001);return t={...t,...r},await P(t)}else return{}},Ke=async(e,t)=>{let r={params:e,data2update:t},l=M(809004);return r={...r,...l},await P(r)},Ge=e=>{const t=async()=>{let r={consigneeInfo:{cid:e?.item?.cid,firstName:e?.item?.firstName,lastName:e?.item?.lastName,lastName2:e?.item?.lastName2,middleName:e?.item?.middleName,phoneNumber:e?.item?.phoneNumber,ybapt:e?.item?.ybapt,ybbetwen1:e?.item?.ybbetwen1,ybbetwen2:e?.item?.ybbetwen2,ybcity:e?.item?.ybcity,ybestate:e?.item?.ybestate,ybreparto:e?.item?.ybreparto,ybstreet:e?.item?.ybstreet,ybstreetNo:e?.item?.ybstreetNo},city:e?.item?.ybcity,estate:e?.item?.ybestate};await Ke({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},r),ge(e?.modalId)};return(()=>{var r=Me(),l=r.firstChild,a=l.nextSibling;return r.style.setProperty("height","clamp(20vh, 45vh, 80vh)"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),i(l,n(Te,{get item(){return e?.item},refresh:()=>isOpenDebounced(Q())})),i(a,n(De,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:t})),B(u=>(u=I()?"96vw":"920px")!=null?r.style.setProperty("width",u):r.style.removeProperty("width")),r})()},V=(e,t)=>t?(()=>{var r=Pe(),l=r.firstChild,a=l.nextSibling;return i(l," "+e),i(a,t),r})():"",U=e=>(()=>{var t=Oe();return i(t,()=>V("Calle",e?.ybstreet),null),i(t,()=>V("#",e?.ybstreetNo),null),i(t,()=>V("E/",e?.ybbetwen1),null),i(t,()=>V("y",e?.ybbetwen2),null),t})(),Ue=async(e,t)=>{let r={params:{":search0":t,airguide:e}},l=M(815002);r={...r,...l};const a=await P(r);return a?.data?.error?{}:a};X(["click"]);export{st as default,U as getAddress};
