const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DmdG3UG5.js","assets/index-BarDAHU6.js","assets/index-CKmXtXsd.css","assets/ShowQR-B2T-UXIF.js"])))=>i.map(i=>d[i]);
import{l as w,_ as k,e as z,d as i,i as t,S as o,t as d,g as q,O as j,w as W,m as S,y as G,k as H,A as X,a as J,I as F,B,J as U,M,b as D,F as Y,x as Z,V as p,W as ee,K as te,n as K}from"./index-BarDAHU6.js";import ie from"./ContainerElasticView-CbrNrcBg.js";var ne=d('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx"></div><div class=bottombx><h5>'),le=d('<div><div class="icon_status centerBx">'),re=d('<div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),se=d("<div class=bag_number><h5>"),ae=d('<div class="_dsplFlx "><div class="_dsplFlx bottombx"><p></p></div><p class="tr_bar_30 textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class="tr_bar_20 textleft">'),ce=d('<div class="_dsplFlx bottombx"><h5>'),de=d('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx topbx centerBx">');const N=w(()=>k(()=>import("./FlexSpace-DmdG3UG5.js"),__vite__mapDeps([0,1,2]))),R=w(()=>k(()=>import("./index-BarDAHU6.js").then(e=>e.a6),__vite__mapDeps([1,2]))),ue=w(()=>k(()=>import("./ShowQR-B2T-UXIF.js"),__vite__mapDeps([3,1,2])));function me(e){const l=s=>s?" "+s:"",$=()=>{let s=e?.item?.consigneeInfo;return l(s?.firstName)+l(s?.middleName)+l(s?.lastName)+l(s?.lastName2)},c=()=>{let s=e?.item?.consigneeInfo,g=l(s?.altPhoneNumber);return l(s?.phoneNumber)+(g?" |"+g:"")},m=()=>{let s=e?.item?.street.split(",");return s.slice(0,s.length-2).join(",")},f=()=>{let s=e?.item?.hbls.length;const g=e?.item?.hbls.reduce((u,h)=>u+`${u?"/":""}${h.hbl}/${h.quantity}/${h.weight}`,"");let n=`${e?.item?.idairguide}/${e?.item?.cidentity}/${s}/${g}`,r={};r.id=q(),r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},r.content=i(ue,{val:n,get item(){return e?.item}}),j(r)};return i(o,{get when(){return e?.item?.tracking},get children(){var s=de(),g=s.firstChild;return t(g,i(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var n=ne(),r=n.firstChild,u=r.nextSibling,h=u.firstChild;return t(r,i(R,{name:"alert",size:32,color:"var(--background-red-ssg)"})),t(h,()=>e?.item?.idairnumber),n})(),(()=>{var n=le(),r=n.firstChild;return t(r,i(R,{name:"link-off",size:32,color:"var(--background-red-ssg)"})),n})(),(()=>{var n=re(),r=n.firstChild,u=r.nextSibling,h=u.nextSibling;return t(r,()=>e?.item?.consigneeInfo?.ybcity),t(h,()=>e?.item?.consigneeInfo?.ybestate),n})()]}}),null),t(g,i(N,{}),null),t(g,i(o,{get when(){return e?.item?.bagnumber},get children(){var n=se(),r=n.firstChild;return n.$$click=f,t(r,()=>e?.item?.bagnumber),n}}),null),t(s,i(o,{get when(){return e?.item?.consigneeInfo?.ybcity},get children(){var n=ae(),r=n.firstChild,u=r.firstChild,h=r.nextSibling,y=h.nextSibling,x=y.nextSibling;return t(u,m),t(n,i(N,{}),h),t(h,$),t(x,c),n}}),null),t(s,i(o,{when:!1,get children(){var n=ce(),r=n.firstChild;return t(n,i(N,{}),r),t(r,()=>e?.item?.nameshipper),t(n,i(N,{}),null),n}}),null),s}})}z(["click"]);var ge=d("<div class=guide_number><h5>"),_e=d('<div class=" tr_bar_10 _dsplFlx"><div class="icon_status centerBx">'),T=d("<div class=bag_number><h5>"),V=d("<div class=bottombx><h5>"),P=d("<div><div>"),he=d('<p class="tr_bar_30 textleft fullName_consigne">'),oe=d("<div style=margin-right:4vw>"),$e=d('<h4 class="tr_bar_20 textleft">'),ve=d('<div class="icon_status centerBx">'),be=d("<p>"),fe=d('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),xe=d('<div><div class="_dsplFlx topbx centerBx"></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ye=d('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador'),Se=d("<div class=tab>"),E=d("<div class=loader>Loading..."),Q=d("<div>"),we=d('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),ke=d('<div class="centerBx bottombx"><h4 class=""></h4><h5> KG</h5><h4 class="">'),Ce=d("<div class=bottombx><div><h4></h4></div><div><h5>");const A=w(()=>k(()=>import("./FlexSpace-DmdG3UG5.js"),__vite__mapDeps([0,1,2]))),C=w(()=>k(()=>import("./index-BarDAHU6.js").then(e=>e.a6),__vite__mapDeps([1,2]))),Ie=w(()=>k(()=>import("./ShowQR-B2T-UXIF.js"),__vite__mapDeps([3,1,2])));function Oe(e){const l=n=>n?" "+n:"",$=()=>{let n=e?.item?.consigneeInfo;return l(n?.firstName)+l(n?.middleName)+l(n?.lastName)+l(n?.lastName2)},c=()=>{let n=e?.item?.consigneeInfo,r=l(n?.altPhoneNumber);return l(n?.phoneNumber)+(r?" |"+r:"")},m=()=>{let n=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let r=n.reduce((u,h)=>Math.min(u,h.timeStamp),1/0);return Math.floor((new Date().getTime()-r)/864e5)}else return null},f=async()=>{let n={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.idairguide};await Ae(n),e?.refresh()},s=()=>{let n=e?.item?.street.split(",");return n.slice(0,n.length-2).join(",")},g=n=>{let r="";if(n)r=n;else if(e?.item?.hblS){let h=e?.item?.hblS;r=`${e?.item?.idairguide}/${e?.item?.cidentity}/${h}`}let u={};u.id=q(),u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=i(Ie,{val:r,get item(){return e?.item}}),j(u)};return e?.filter?i(me,{get item(){return e?.item},get filter(){return e?.filter}}):i(o,{get when(){return e?.item?.tracking},get children(){var n=xe(),r=n.firstChild,u=r.nextSibling,h=u.firstChild,y=h.firstChild,x=y.nextSibling,L=x.nextSibling;return t(r,i(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var a=_e(),v=a.firstChild;return t(v,i(C,{get name(){return W?.[e?.item?.currentStatus]},size:32})),t(a,i(o,{get when(){return m()},get children(){var _=ge(),b=_.firstChild;return t(b,m),_}}),null),a})(),i(o,{get when(){return S()&&e?.item?.tracking},get children(){return[i(A,{}),(()=>{var a=P(),v=a.firstChild;return t(v,i(o,{get when(){return e?.item?.bagnumber},get children(){var _=T(),b=_.firstChild;return _.$$click=()=>g(null),t(b,()=>e?.item?.bagnumber),_}})),t(a,i(o,{get when(){return e?.item?.tracking},get children(){var _=V(),b=_.firstChild;return _.$$click=()=>g(e?.item?.tracking),t(b,()=>e?.item?.tracking),_}}),null),a})()]}}),i(o,{get when(){return!S()},get children(){return[(()=>{var a=he();return t(a,$),a})(),oe(),(()=>{var a=$e();return t(a,c),a})()]}})]}}),null),t(r,i(A,{}),null),t(r,i(o,{get when(){return!S()&&e?.item?.tracking},get children(){var a=P(),v=a.firstChild;return t(v,i(o,{get when(){return e?.item?.bagnumber},get children(){var _=T(),b=_.firstChild;return _.$$click=()=>g(null),t(b,()=>e?.item?.bagnumber),_}})),t(a,i(o,{get when(){return e?.item?.tracking},get children(){var _=V(),b=_.firstChild;return _.$$click=()=>g(e?.item?.tracking),t(b,()=>e?.item?.tracking),_}}),null),a}}),null),t(r,i(o,{get when(){return!e?.item?.bagnumber||G?.profile?.isAdmin},get children(){var a=ve();return a.$$click=f,t(a,i(C,{name:"outline_delete",size:24})),a}}),null),t(u,i(o,{get when(){return!S()&&e?.item?.consigneeInfo?.ybcity},get children(){var a=be();return t(a,s),a}}),h),t(u,i(A,{}),h),t(y,()=>e?.item?.consigneeInfo?.ybcity),t(L,()=>e?.item?.consigneeInfo?.ybestate),t(n,i(o,{get when(){return S()&&e?.item?.consigneeInfo?.ybcity},get children(){var a=fe(),v=a.firstChild,_=v.nextSibling,b=_.nextSibling,I=b.nextSibling;return t(v,$),t(b,c),t(I,s),a}}),null),t(n,i(Ne,{get item(){return e?.item}}),null),H(()=>X(n,`client_item_box gWXAaj jlytmu ${S()?"isMobile":""}`)),n}})}const Ne=e=>{const[l,$]=J(0),[c,m]=te(),f=s=>()=>m(()=>$(s));return i(ie,{get children(){return[(()=>{var s=ye(),g=s.firstChild,n=g.firstChild,r=n.firstChild,u=g.nextSibling,h=u.firstChild,y=h.firstChild,x=u.nextSibling,L=x.firstChild,a=L.firstChild;return F(g,"click",f(1)),t(r,i(C,{name:"list_dot",size:24})),F(u,"click",f(2)),t(y,i(C,{name:"receipt",size:24})),F(x,"click",f(3)),t(a,i(C,{name:"send",size:24})),H(v=>{var _=l()===1,b=l()===2,I=l()===3;return _!==v.e&&g.classList.toggle("selected",v.e=_),b!==v.t&&u.classList.toggle("selected",v.t=b),I!==v.a&&x.classList.toggle("selected",v.a=I),v},{e:void 0,t:void 0,a:void 0}),s})(),(()=>{var s=Se();return t(s,i(B,{get fallback(){return E()},get children(){return i(U,{get children(){return[i(M,{get when(){return l()===1},get children(){return i(o,{get when(){return l()===1},get children(){return i(Be,{index:1,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),i(M,{get when(){return l()===2},get children(){return i(o,{get when(){return l()===2},get children(){return i(Le,{index:2,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),i(M,{get when(){return l()===3},get children(){return i(o,{get when(){return l()===3},get children(){return i(Me,{index:3,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),H(()=>s.classList.toggle("pending",!!c())),s})()]}})},Be=e=>{const[l,{refetch:$}]=D(e?.id,async c=>(await O(e?.idairguide,e?.id,["statusHistory"]))?.statusHistory);return i(B,{get fallback(){return E()},get children(){var c=Q();return t(c,i(Y,{get each(){return l()},children:m=>i(Ee,{item:m})})),c}})},Ee=e=>(()=>{var l=we(),$=l.firstChild,c=$.nextSibling,m=c.firstChild,f=m.nextSibling,s=f.nextSibling,g=s.nextSibling;g.nextSibling;var n=c.nextSibling;return t($,()=>Z[e?.item?.statusId]),t(c,()=>p(e?.item?.timeStamp),f),t(c,()=>ee(e?.item?.timeStamp),g),t(n,()=>e?.item?.userName),l})(),Le=e=>{const[l,{refetch:$}]=D(e?.id,async c=>(await O(e?.idairguide,e?.id,["hbls"]))?.hbls);return i(B,{get fallback(){return E()},get children(){var c=Q();return t(c,i(Y,{get each(){return l()},children:m=>i(Fe,{item:m})})),c}})},Fe=e=>(()=>{var l=ke(),$=l.firstChild,c=$.nextSibling,m=c.firstChild,f=c.nextSibling;return t($,()=>e?.item?.hbl),t(c,()=>e?.item?.weight,m),t(f,()=>e?.item?.namegood),l})(),Me=e=>{const[l,{refetch:$}]=D(e?.id,async c=>await O(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return i(B,{get fallback(){return E()},get children(){var c=Ce(),m=c.firstChild,f=m.firstChild,s=m.nextSibling,g=s.firstChild;return t(f,()=>l()?.nameshipper),t(g,()=>l()?.shipperInfo?.phoneNumber),c}})},Ae=async e=>(await K({params:e,query:"deleteLogisticYabaExpress"}))?.data,O=async(e,l,$)=>{const m=await K({params:{id:l,idairguide:e},fldsQry:$,query:"getLogisticOrderByKeyID"});return m?.data?.error?{}:m};z(["click"]);export{Oe as default};
