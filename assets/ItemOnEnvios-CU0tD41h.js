const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-KKCFmHVf.js","assets/index-ClNVsa9Q.js","assets/index-fN3cNkmN.css","assets/ShowQR-Boijkild.js"])))=>i.map(i=>d[i]);
import{l as f,_ as x,e as O,d as n,i as t,S as o,t as u,g as P,O as T,w as j,y as Y,a as Q,M as B,k as R,A as C,N as G,P as E,b as F,F as V,x as K,Y as W,$ as X,R as J,n as z}from"./index-ClNVsa9Q.js";import U from"./ContainerElasticView-DQZ-zcua.js";var Z=u('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx"></div><div class=bottombx><h5>'),p=u('<div><div class="icon_status centerBx">'),ee=u('<div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),te=u("<div class=bag_number><h5>"),ie=u('<div class="_dsplFlx "><div class="_dsplFlx bottombx"><p></p></div><p class="tr_bar_30 textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class="tr_bar_20 textleft">'),ne=u('<div class="_dsplFlx bottombx"><h5>'),le=u('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx topbx centerBx">');const S=f(()=>x(()=>import("./FlexSpace-KKCFmHVf.js"),__vite__mapDeps([0,1,2]))),D=f(()=>x(()=>import("./index-ClNVsa9Q.js").then(e=>e.a6),__vite__mapDeps([1,2]))),re=f(()=>x(()=>import("./ShowQR-Boijkild.js"),__vite__mapDeps([3,1,2])));function se(e){const r=a=>a?" "+a:"",g=()=>{let a=e?.item?.consigneeInfo;return r(a?.firstName)+r(a?.middleName)+r(a?.lastName)+r(a?.lastName2)},c=()=>{let a=e?.item?.consigneeInfo,_=r(a?.altPhoneNumber);return r(a?.phoneNumber)+(_?" |"+_:"")},m=()=>{let a=e?.item?.street.split(",");return a.slice(0,a.length-2).join(",")},$=()=>{let a=e?.item?.hbls.length;const _=e?.item?.hbls.reduce((l,d)=>l+`${l?"/":""}${d.hbl}/${d.quantity}/${d.weight}`,"");let i=`${e?.item?.idairguide}/${e?.item?.cidentity}/${a}/${_}`,s={};s.id=P(),s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=n(re,{val:i,get item(){return e?.item}}),T(s)};return n(o,{get when(){return e?.item?.tracking},get children(){var a=le(),_=a.firstChild;return t(_,n(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var i=Z(),s=i.firstChild,l=s.nextSibling,d=l.firstChild;return t(s,n(D,{name:"alert",size:32,color:"var(--background-red-ssg)"})),t(d,()=>e?.item?.idairnumber),i})(),(()=>{var i=p(),s=i.firstChild;return t(s,n(D,{name:"link-off",size:32,color:"var(--background-red-ssg)"})),i})(),(()=>{var i=ee(),s=i.firstChild,l=s.nextSibling,d=l.nextSibling;return t(s,()=>e?.item?.consigneeInfo?.ybcity),t(d,()=>e?.item?.consigneeInfo?.ybestate),i})()]}}),null),t(_,n(S,{}),null),t(_,n(o,{get when(){return e?.item?.bagnumber},get children(){var i=te(),s=i.firstChild;return i.$$click=$,t(s,()=>e?.item?.bagnumber),i}}),null),t(a,n(o,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var i=ie(),s=i.firstChild,l=s.firstChild,d=s.nextSibling,h=d.nextSibling,v=h.nextSibling;return t(l,m),t(i,n(S,{}),d),t(d,g),t(v,c),i}}),null),t(a,n(o,{when:!1,get children(){var i=ne(),s=i.firstChild;return t(i,n(S,{}),s),t(s,()=>e?.item?.nameshipper),t(i,n(S,{}),null),i}}),null),a}})}O(["click"]);var ae=u("<div class=guide_number><h5>"),ce=u('<div class=" tr_bar_10 _dsplFlx"><div class="icon_status centerBx">'),de=u('<p class="tr_bar_30 textleft fullName_consigne">'),ue=u("<div style=margin-right:4vw>"),me=u('<h4 class="tr_bar_20 textleft">'),_e=u("<div class=bag_number><h5>"),ge=u("<div class=bottombx><h5>"),he=u("<div><div>"),oe=u('<div class="icon_status centerBx">'),$e=u('<div class="_dsplFlx bottombx"><p></p><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ve=u('<div class="_dsplFlx bottombx"><h5>'),be=u('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx topbx centerBx">'),fe=u('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador'),xe=u("<div class=tab>"),k=u("<div class=loader>Loading..."),q=u("<div>"),ye=u('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),Se=u('<div class="centerBx bottombx"><h4 class=""></h4><h5> KG</h5><h4 class="">'),we=u("<div class=bottombx><div><h4></h4></div><div><h5>");const w=f(()=>x(()=>import("./FlexSpace-KKCFmHVf.js"),__vite__mapDeps([0,1,2]))),y=f(()=>x(()=>import("./index-ClNVsa9Q.js").then(e=>e.a6),__vite__mapDeps([1,2]))),Ce=f(()=>x(()=>import("./ShowQR-Boijkild.js"),__vite__mapDeps([3,1,2])));function Me(e){const r=i=>i?" "+i:"",g=()=>{let i=e?.item?.consigneeInfo;return r(i?.firstName)+r(i?.middleName)+r(i?.lastName)+r(i?.lastName2)},c=()=>{let i=e?.item?.consigneeInfo,s=r(i?.altPhoneNumber);return r(i?.phoneNumber)+(s?" |"+s:"")},m=()=>{let i=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let s=i.reduce((l,d)=>Math.min(l,d.timeStamp),1/0);return Math.floor((new Date().getTime()-s)/864e5)}else return null},$=async()=>{let i={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.idairguide};await Le(i),e?.refresh()},a=()=>{let i=e?.item?.street.split(",");return i.slice(0,i.length-2).join(",")},_=i=>{let s="";if(i)s=i;else if(e?.item?.hblS){let d=e?.item?.hblS;s=`${e?.item?.idairguide}/${e?.item?.cidentity}/${d}`}let l={};l.id=P(),l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=n(Ce,{val:s,get item(){return e?.item}}),T(l)};return e?.filter?n(se,{get item(){return e?.item},get filter(){return e?.filter}}):n(o,{get when(){return e?.item?.tracking},get children(){var i=be(),s=i.firstChild;return t(s,n(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var l=ce(),d=l.firstChild;return t(d,n(y,{get name(){return j?.[e?.item?.currentStatus]},size:32})),t(l,n(o,{get when(){return m()},get children(){var h=ae(),v=h.firstChild;return t(v,m),h}}),null),l})(),(()=>{var l=de();return t(l,g),l})(),ue(),(()=>{var l=me();return t(l,c),l})()]}}),null),t(s,n(w,{}),null),t(s,n(o,{get when(){return e?.item?.tracking},get children(){var l=he(),d=l.firstChild;return t(d,n(o,{get when(){return e?.item?.bagnumber},get children(){var h=_e(),v=h.firstChild;return h.$$click=()=>_(null),t(v,()=>e?.item?.bagnumber),h}})),t(l,n(o,{get when(){return e?.item?.tracking},get children(){var h=ge(),v=h.firstChild;return h.$$click=()=>_(e?.item?.tracking),t(v,()=>e?.item?.tracking),h}}),null),l}}),null),t(s,n(o,{get when(){return!e?.item?.bagnumber||Y?.profile?.isAdmin},get children(){var l=oe();return l.$$click=$,t(l,n(y,{name:"outline_delete",size:24})),l}}),null),t(i,n(o,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var l=$e(),d=l.firstChild,h=d.nextSibling,v=h.firstChild,I=v.nextSibling,N=I.nextSibling;return t(d,a),t(l,n(w,{}),h),t(v,()=>e?.item?.consigneeInfo?.ybcity),t(N,()=>e?.item?.consigneeInfo?.ybestate),l}}),null),t(i,n(o,{when:!1,get children(){var l=ve(),d=l.firstChild;return t(l,n(w,{}),d),t(d,()=>e?.item?.nameshipper),t(l,n(w,{}),null),l}}),null),t(i,n(ke,{get item(){return e?.item}}),null),i}})}const ke=e=>{const[r,g]=Q(0),[c,m]=J(),$=a=>()=>m(()=>g(a));return n(U,{get children(){return[(()=>{var a=fe(),_=a.firstChild,i=_.firstChild,s=i.firstChild,l=_.nextSibling,d=l.firstChild,h=d.firstChild,v=l.nextSibling,I=v.firstChild,N=I.firstChild;return B(_,"click",$(1)),t(s,n(y,{name:"list_dot",size:24})),B(l,"click",$(2)),t(h,n(y,{name:"receipt",size:24})),B(v,"click",$(3)),t(N,n(y,{name:"send",size:24})),R(b=>{var A=r()===1,H=r()===2,M=r()===3;return A!==b.e&&_.classList.toggle("selected",b.e=A),H!==b.t&&l.classList.toggle("selected",b.t=H),M!==b.a&&v.classList.toggle("selected",b.a=M),b},{e:void 0,t:void 0,a:void 0}),a})(),(()=>{var a=xe();return t(a,n(C,{get fallback(){return k()},get children(){return n(G,{get children(){return[n(E,{get when(){return r()===1},get children(){return n(o,{get when(){return r()===1},get children(){return n(Ie,{index:1,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),n(E,{get when(){return r()===2},get children(){return n(o,{get when(){return r()===2},get children(){return n(Be,{index:2,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),n(E,{get when(){return r()===3},get children(){return n(o,{get when(){return r()===3},get children(){return n(Fe,{index:3,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),R(()=>a.classList.toggle("pending",!!c())),a})()]}})},Ie=e=>{const[r,{refetch:g}]=F(e?.id,async c=>(await L(e?.idairguide,e?.id,["statusHistory"]))?.statusHistory);return n(C,{get fallback(){return k()},get children(){var c=q();return t(c,n(V,{get each(){return r()},children:m=>n(Ne,{item:m})})),c}})},Ne=e=>(()=>{var r=ye(),g=r.firstChild,c=g.nextSibling,m=c.firstChild,$=m.nextSibling,a=$.nextSibling,_=a.nextSibling;_.nextSibling;var i=c.nextSibling;return t(g,()=>K[e?.item?.statusId]),t(c,()=>W(e?.item?.timeStamp),$),t(c,()=>X(e?.item?.timeStamp),_),t(i,()=>e?.item?.userName),r})(),Be=e=>{const[r,{refetch:g}]=F(e?.id,async c=>(await L(e?.idairguide,e?.id,["hbls"]))?.hbls);return n(C,{get fallback(){return k()},get children(){var c=q();return t(c,n(V,{get each(){return r()},children:m=>n(Ee,{item:m})})),c}})},Ee=e=>(()=>{var r=Se(),g=r.firstChild,c=g.nextSibling,m=c.firstChild,$=c.nextSibling;return t(g,()=>e?.item?.hbl),t(c,()=>e?.item?.weight,m),t($,()=>e?.item?.namegood),r})(),Fe=e=>{const[r,{refetch:g}]=F(e?.id,async c=>await L(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return n(C,{get fallback(){return k()},get children(){var c=we(),m=c.firstChild,$=m.firstChild,a=m.nextSibling,_=a.firstChild;return t($,()=>r()?.nameshipper),t(_,()=>r()?.shipperInfo?.phoneNumber),c}})},Le=async e=>(await z({params:e,query:"deleteLogisticYabaExpress"}))?.data,L=async(e,r,g)=>{const m=await z({params:{id:r,idairguide:e},fldsQry:g,query:"getLogisticOrderByKeyID"});return m?.data?.error?{}:m};O(["click"]);export{Me as default};
