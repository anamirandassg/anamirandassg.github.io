const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DoAj3N5Q.js","assets/index-f9fOxBB0.js","assets/index-C8O1wSFC.css","assets/SVG-E76cUvOQ.js","assets/ShowQR-CzV0v_ic.js","assets/ShowQRPrintLabel-4aFjlodo.js","assets/fontkit.es-C7nlUBMr.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-Mm2SBvRF.js","assets/Toast-Dfh9Hq7W.js","assets/Toast-SmEZ1JuI.css"])))=>i.map(i=>d[i]);
import{l as w,_ as C,e as V,d as i,i as t,S as o,t as m,j as q,v as W,h as S,n as X,f as H,g as Z,a as J,x as F,y as N,z as U,M as A,b as R,F as j,w as p,Y as ee,Z as te,A as ie,o as Y}from"./index-f9fOxBB0.js";import{OpenModal as Q}from"./DialogHRM-B-gZDgUI.js";import ne from"./ContainerElasticView-DR3HO7iG.js";import"./SVG-E76cUvOQ.js";/* empty css                             */var le=m('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx"></div><div class=bottombx><h5>'),re=m('<div><div class="icon_status centerBx">'),se=m('<div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ae=m("<div class=bag_number><h5>"),ce=m('<div class="_dsplFlx "><div class="_dsplFlx bottombx"><p></p></div><p class="tr_bar_30 textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class="tr_bar_20 textleft">'),de=m('<div class="_dsplFlx bottombx"><h5>'),ue=m('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx topbx centerBx">');const I=w(()=>C(()=>import("./FlexSpace-DoAj3N5Q.js"),__vite__mapDeps([0,1,2]))),D=w(()=>C(()=>import("./SVG-E76cUvOQ.js"),__vite__mapDeps([3,1,2]))),me=w(()=>C(()=>import("./ShowQR-CzV0v_ic.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10])));function ge(e){const l=r=>r?" "+r:"",$=()=>{let r=e?.item?.consigneeInfo;return l(r?.firstName)+l(r?.middleName)+l(r?.lastName)+l(r?.lastName2)},d=()=>{let r=e?.item?.consigneeInfo,_=l(r?.altPhoneNumber);return l(r?.phoneNumber)+(_?" |"+_:"")},g=()=>{let r=e?.item?.street.split(",");return r.slice(0,r.length-2).join(",")},b=()=>{let r=e?.item?.hbls.length;const _=e?.item?.hbls.reduce((a,u)=>a+`${a?"/":""}${u.hbl}/${u.quantity}/${u.weight}`,"");let c=`${e?.item?.idairguide}/${e?.item?.cidentity}/${r}/${_}`,n={};n.id=q(),n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=i(me,{val:c,get item(){return e?.item}}),Q(n)};return i(o,{get when(){return e?.item?.tracking},get children(){var r=ue(),_=r.firstChild;return t(_,i(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var c=le(),n=c.firstChild,a=n.nextSibling,u=a.firstChild;return t(n,i(D,{name:"alert",size:32,color:"var(--background-red-ssg)"})),t(u,()=>e?.item?.idairnumber),c})(),(()=>{var c=re(),n=c.firstChild;return t(n,i(D,{name:"link-off",size:32,color:"var(--background-red-ssg)"})),c})(),(()=>{var c=se(),n=c.firstChild,a=n.nextSibling,u=a.nextSibling;return t(n,()=>e?.item?.consigneeInfo?.ybcity),t(u,()=>e?.item?.consigneeInfo?.ybestate),c})()]}}),null),t(_,i(I,{}),null),t(_,i(o,{get when(){return e?.item?.bagnumber},get children(){var c=ae(),n=c.firstChild;return c.$$click=b,t(n,()=>e?.item?.bagnumber),c}}),null),t(r,i(o,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var c=ce(),n=c.firstChild,a=n.firstChild,u=n.nextSibling,f=u.nextSibling,y=f.nextSibling;return t(a,g),t(c,i(I,{}),u),t(u,$),t(y,d),c}}),null),t(r,i(o,{when:!1,get children(){var c=de(),n=c.firstChild;return t(c,i(I,{}),n),t(n,()=>e?.item?.nameshipper),t(c,i(I,{}),null),c}}),null),r}})}V(["click"]);var _e=m("<div class=guide_number><h5>"),he=m('<div class=" tr_bar_10 _dsplFlx"><div class="icon_status centerBx">'),z=m("<div class=bag_number><h5>"),O=m("<div class=bottombx><h5>"),P=m("<div><div>"),oe=m('<p class="tr_bar_30 textleft fullName_consigne">'),$e=m("<div style=margin-right:4vw>"),ve=m('<h4 class="tr_bar_20 textleft">'),be=m('<div class="icon_status centerBx">'),fe=m("<p>"),xe=m('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),ye=m('<div><div class="_dsplFlx topbx centerBx"></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),Se=m('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador'),we=m("<div class=tab>"),B=m("<div class=loader>Loading..."),G=m("<div>"),Ce=m('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),ke=m('<div class="centerBx bottombx"><h4 class=""></h4><h5> KG</h5><h4 class="">'),Ie=m("<div class=bottombx><div><h4></h4></div><div><h5>");const M=w(()=>C(()=>import("./FlexSpace-DoAj3N5Q.js"),__vite__mapDeps([0,1,2]))),k=w(()=>C(()=>import("./SVG-E76cUvOQ.js"),__vite__mapDeps([3,1,2]))),Ne=w(()=>C(()=>import("./ShowQR-CzV0v_ic.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10])));function Pe(e){const l=n=>n?" "+n:"",$=()=>{let n=e?.item?.consigneeInfo;return l(n?.firstName)+l(n?.middleName)+l(n?.lastName)+l(n?.lastName2)},d=()=>{let n=e?.item?.consigneeInfo,a=l(n?.altPhoneNumber);return l(n?.phoneNumber)+(a?" |"+a:"")},g=()=>{let n=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let a=n.reduce((u,f)=>Math.min(u,f.timeStamp),1/0);return Math.floor((new Date().getTime()-a)/864e5)}else return null},b=async()=>{let n={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.idairguide};await He(n),e?.refresh()},r=()=>{let n=e?.item?.street.split(",");return n.slice(0,n.length-2).join(",")},_=n=>{let a="";if(n)a=n;else if(e?.item?.hblS){let f=e?.item?.hblS;a=`${e?.item?.idairguide}/${e?.item?.cidentity}/${f}`}let u={};u.id=q(),u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=i(Ne,{val:a,get item(){return e?.item}}),Q(u)},c=n=>{let a=n,u="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const f=new RegExp(u);return a.length===13&&f.test(a)&&(a=a.slice(3,12)),a};return e?.filter?i(ge,{get item(){return e?.item},get filter(){return e?.filter}}):i(o,{get when(){return e?.item?.tracking},get children(){var n=ye(),a=n.firstChild,u=a.nextSibling,f=u.firstChild,y=f.firstChild,E=y.nextSibling,L=E.nextSibling;return t(a,i(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var s=he(),x=s.firstChild;return t(x,i(k,{get name(){return W?.[e?.item?.currentStatus]},size:32})),t(s,i(o,{get when(){return g()},get children(){var h=_e(),v=h.firstChild;return t(v,g),h}}),null),s})(),i(o,{get when(){return S()&&e?.item?.tracking},get children(){return[i(M,{}),(()=>{var s=P(),x=s.firstChild;return t(x,i(o,{get when(){return e?.item?.bagnumber},get children(){var h=z(),v=h.firstChild;return h.$$click=()=>_(null),t(v,()=>e?.item?.bagnumber),h}})),t(s,i(o,{get when(){return e?.item?.tracking},get children(){var h=O(),v=h.firstChild;return h.$$click=()=>_(c(e?.item?.tracking)),t(v,()=>c(e?.item?.tracking)),h}}),null),s})()]}}),i(o,{get when(){return!S()},get children(){return[(()=>{var s=oe();return t(s,$),s})(),$e(),(()=>{var s=ve();return t(s,d),s})()]}})]}}),null),t(a,i(M,{}),null),t(a,i(o,{get when(){return!S()&&e?.item?.tracking},get children(){var s=P(),x=s.firstChild;return t(x,i(o,{get when(){return e?.item?.bagnumber},get children(){var h=z(),v=h.firstChild;return h.$$click=()=>_(null),t(v,()=>c(e?.item?.bagnumber)),h}})),t(s,i(o,{get when(){return e?.item?.tracking},get children(){var h=O(),v=h.firstChild;return h.$$click=()=>_(c(e?.item?.tracking)),t(v,()=>c(e?.item?.tracking)),h}}),null),s}}),null),t(a,i(o,{get when(){return!e?.item?.bagnumber||X?.profile?.isAdmin},get children(){var s=be();return s.$$click=b,t(s,i(k,{name:"outline_delete",size:24})),s}}),null),t(u,i(o,{get when(){return!S()&&e?.item?.consigneeInfo?.ybcity},get children(){var s=fe();return t(s,r),s}}),f),t(u,i(M,{}),f),t(y,()=>e?.item?.consigneeInfo?.ybcity),t(L,()=>e?.item?.consigneeInfo?.ybestate),t(n,i(o,{get when(){return S()&&e?.item?.consigneeInfo?.ybcity},get children(){var s=xe(),x=s.firstChild,h=x.nextSibling,v=h.nextSibling,K=v.nextSibling;return t(x,$),t(v,d),t(K,r),s}}),null),t(n,i(Be,{get item(){return e?.item}}),null),H(()=>Z(n,`client_item_box gWXAaj jlytmu ${S()?"isMobile":""}`)),n}})}const Be=e=>{const[l,$]=J(0),[d,g]=ie(),b=r=>()=>g(()=>$(r));return i(ne,{get children(){return[(()=>{var r=Se(),_=r.firstChild,c=_.firstChild,n=c.firstChild,a=_.nextSibling,u=a.firstChild,f=u.firstChild,y=a.nextSibling,E=y.firstChild,L=E.firstChild;return F(_,"click",b(1),!0),t(n,i(k,{name:"list_dot",size:24})),F(a,"click",b(2),!0),t(f,i(k,{name:"receipt",size:24})),F(y,"click",b(3),!0),t(L,i(k,{name:"send",size:24})),H(s=>{var x=l()===1,h=l()===2,v=l()===3;return x!==s.e&&_.classList.toggle("selected",s.e=x),h!==s.t&&a.classList.toggle("selected",s.t=h),v!==s.a&&y.classList.toggle("selected",s.a=v),s},{e:void 0,t:void 0,a:void 0}),r})(),(()=>{var r=we();return t(r,i(N,{get fallback(){return B()},get children(){return i(U,{get children(){return[i(A,{get when(){return l()===1},get children(){return i(o,{get when(){return l()===1},get children(){return i(Ee,{index:1,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),i(A,{get when(){return l()===2},get children(){return i(o,{get when(){return l()===2},get children(){return i(Fe,{index:2,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),i(A,{get when(){return l()===3},get children(){return i(o,{get when(){return l()===3},get children(){return i(Me,{index:3,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),H(()=>r.classList.toggle("pending",!!d())),r})()]}})},Ee=e=>{const[l,{refetch:$}]=R(e?.id,async d=>(await T(e?.idairguide,e?.id,["statusHistory"]))?.statusHistory);return i(N,{get fallback(){return B()},get children(){var d=G();return t(d,i(j,{get each(){return l()},children:g=>i(Le,{item:g})})),d}})},Le=e=>(()=>{var l=Ce(),$=l.firstChild,d=$.nextSibling,g=d.firstChild,b=g.nextSibling,r=b.nextSibling,_=r.nextSibling;_.nextSibling;var c=d.nextSibling;return t($,()=>p[e?.item?.statusId]),t(d,()=>ee(e?.item?.timeStamp),b),t(d,()=>te(e?.item?.timeStamp),_),t(c,()=>e?.item?.userName),l})(),Fe=e=>{const[l,{refetch:$}]=R(e?.id,async d=>(await T(e?.idairguide,e?.id,["hbls"]))?.hbls);return i(N,{get fallback(){return B()},get children(){var d=G();return t(d,i(j,{get each(){return l()},children:g=>i(Ae,{item:g})})),d}})},Ae=e=>(()=>{var l=ke(),$=l.firstChild,d=$.nextSibling,g=d.firstChild,b=d.nextSibling;return t($,()=>e?.item?.hbl),t(d,()=>e?.item?.weight,g),t(b,()=>e?.item?.namegood),l})(),Me=e=>{const[l,{refetch:$}]=R(e?.id,async d=>await T(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return i(N,{get fallback(){return B()},get children(){var d=Ie(),g=d.firstChild,b=g.firstChild,r=g.nextSibling,_=r.firstChild;return t(b,()=>l()?.nameshipper),t(_,()=>l()?.shipperInfo?.phoneNumber),d}})},He=async e=>(await Y({params:e,query:"deleteLogisticYabaExpress"}))?.data,T=async(e,l,$)=>{const g=await Y({params:{id:l,idairguide:e},fldsQry:$,query:"getLogisticOrderByKeyID"});return g?.data?.error?{}:g};V(["click"]);export{Pe as default};
