const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-zvQ64kzB.js","assets/index-DO7hTAqt.js","assets/index-BRlA1Q7g.css","assets/SVG-DapLNFVN.js","assets/Util-BSJ3epRO.js","assets/ShowQR-L6PBpBq-.js","assets/ShowQRPrintLabel-Cb8RTj1J.js","assets/fontkit.es-CflJXqUP.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-Bhvm-3ED.js","assets/Toast-CtUtF4k_.js","assets/Toast-DLpFKn-Q.css","assets/ButonHrm-CnYpEWbd.js","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnConsigner-BhLXjC5_.js","assets/DialogHRM-uotkdwWe.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-CO8kbaVF.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ShowRemmitance-DjHs9OBM.js"])))=>i.map(i=>d[i]);
import{l as S,_ as C,h as F,e as n,i as t,S as v,j as k,f as V,k as J,m as ee,a as te,Q as M,z as E,U as ie,V as T,p as H,F as Q,t as u,W as ne}from"./index-DO7hTAqt.js";import{e as W,h as re,j as le,a as j,E as se,g as q,f as Y}from"./Util-BSJ3epRO.js";import{OpenModal as G}from"./DialogHRM-uotkdwWe.js";import ae from"./ContainerElasticView-CO8kbaVF.js";import{c as K}from"./ShowQRPrintLabel-Cb8RTj1J.js";import"./SVG-DapLNFVN.js";/* empty css                             */import"./fontkit.es-CflJXqUP.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-Bhvm-3ED.js";import"./Toast-CtUtF4k_.js";S(()=>C(()=>import("./FlexSpace-zvQ64kzB.js"),__vite__mapDeps([0,1,2])));S(()=>C(()=>import("./SVG-DapLNFVN.js"),__vite__mapDeps([3,1,2,4])));S(()=>C(()=>import("./ShowQR-L6PBpBq-.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));F(["click"]);var ce=u("<div class=guide_number><h5>"),de=u('<div class=" tr_bar_10 _dsplFlx">'),P=u("<div class=bag_number><h5>"),ue=u('<div><div></div><div class="centerBx bottombx flxWrp"><h4>'),me=u('<p class="tr_bar_30 textleft fullName_consigne">'),ge=u("<div style=margin-right:4vw>"),_e=u('<h4 class="tr_bar_20 textleft">'),oe=u("<div><div>"),he=u("<p>"),ve=u("<div class=separator> "),be=u('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),$e=u('<div><div class="_dsplFlx topbx centerBx"><div class="centerBx bottombx flxWrp"><h4></h4></div></div><div class="centerBx bottombx"><div class="centerBx bottombx flxWrp"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),xe=u('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Agency'),fe=u("<div class=tab>"),L=u("<div class=loader>Loading..."),U=u("<div>"),ye=u('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),Se=u('<div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4><h5> KG</h5>|<div class="icon_status centerBx"></div><h5> LB</h5>|<h4 class="">'),Ce=u("<div class=bottombx><div><h4></h4></div><div><h5>"),we=u("<div class=bottombx><div><h4>"),ke=u('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),Ie=u('<div class="centerBx flxWrp">');const p=S(()=>C(()=>import("./FlexSpace-zvQ64kzB.js"),__vite__mapDeps([0,1,2]))),I=S(()=>C(()=>import("./SVG-DapLNFVN.js"),__vite__mapDeps([3,1,2,4])));S(()=>C(()=>import("./ButonHrm-CnYpEWbd.js"),__vite__mapDeps([12,1,2,3,4,13])));const X=S(()=>C(()=>import("./ShowQR-L6PBpBq-.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));S(()=>C(()=>import("./ItemOnConsigner-BhLXjC5_.js"),__vite__mapDeps([14,1,2,4,15,16,17,3,18,7,8,10,11,12,13,19,6,9,0])));const Be=2.20462;function Ye(e){const i=s=>s?" "+s:"",c=()=>{let s=e?.item?.consigneeInfo;return i(s?.firstName)+i(s?.middleName)+i(s?.lastName)+i(s?.lastName2)},r=()=>{let s=e?.item?.consigneeInfo,a=i(s?.altPhoneNumber);return i(s?.phoneNumber)+(a?" |"+a:"")},l=()=>{let s=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let a=s.reduce((o,h)=>Math.min(o,h.timeStamp),1/0);return Math.floor((new Date().getTime()-a)/864e5)}else return null},m=s=>{let a="";e?.item?.hblS&&(a=e?.item?.hblS.split("/")?.[2]);let o={};o.id=j(),o.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},o.content=n(X,{val:a,get item(){return e?.item}}),G(o)},_=s=>{let a=s,o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const h=new RegExp(o);return a.length===13&&h.test(a)&&(a=a.slice(3,12)),a};return n(v,{get when(){return e?.item?.cidentity},get children(){var s=$e(),a=s.firstChild,o=a.firstChild,h=o.firstChild,f=a.nextSibling,w=f.firstChild,$=w.firstChild,D=$.nextSibling,N=D.nextSibling,B=N.nextSibling,O=B.nextSibling;return t(a,n(v,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var d=de();return t(d,n(v,{get when(){return l()},get children(){var g=ce(),b=g.firstChild;return t(b,l),g}})),d})(),n(v,{get when(){return k()},get children(){return[n(p,{}),(()=>{var d=ue(),g=d.firstChild,b=g.nextSibling,x=b.firstChild;return t(g,n(v,{get when(){return e?.item?.bagnumber},get children(){var y=P(),A=y.firstChild;return y.$$click=()=>m(e?.item?.bagnumber),t(A,()=>e?.item?.bagnumber),y}})),t(x,()=>e?.item?.cidentity),d})()]}}),n(v,{get when(){return!k()},get children(){return[(()=>{var d=me();return t(d,c),V(()=>J(d,"data-name",`${e?.item?.cidentity}`)),d})(),ge(),(()=>{var d=_e();return t(d,r),d})()]}})]}}),o),t(a,n(p,{}),o),h.$$click=()=>K(e?.item?.cidentity),t(h,()=>e?.item?.cidentity),t(a,n(p,{}),null),t(a,n(v,{get when(){return!k()},get children(){var d=oe(),g=d.firstChild;return t(g,n(v,{get when(){return e?.item?.bagnumber},get children(){var b=P(),x=b.firstChild;return b.$$click=()=>m(e?.item?.bagnumber),t(x,()=>_(e?.item?.bagnumber)),b}})),d}}),null),t(f,n(v,{get when(){return!k()&&e?.item?.consigneeInfo?.ybstreet},get children(){var d=he();return t(d,()=>z(e?.item?.consigneeInfo)),d}}),w),t(f,n(p,{}),w),t($,()=>e?.item?.consigneeInfo?.ybreparto),t(N,()=>e?.item?.consigneeInfo?.ybcity),t(O,()=>e?.item?.consigneeInfo?.ybestate),t(s,n(v,{get when(){return k()&&e?.item?.consigneeInfo?.ybcity},get children(){return[ve(),(()=>{var d=be(),g=d.firstChild,b=g.nextSibling,x=b.nextSibling,y=x.nextSibling;return t(g,c),t(x,r),t(y,()=>z(e?.item?.consigneeInfo)),d})()]}}),null),t(s,n(Ee,{get item(){return e?.item}}),null),V(()=>ee(s,`client_item_box gWXAaj jlytmu ${k()?"isMobile":""}`)),s}})}const Ee=e=>{const[i,c]=te(0),[r,l]=ne(),m=_=>()=>l(()=>c(_));return n(ae,{get children(){return[(()=>{var _=xe(),s=_.firstChild,a=s.firstChild,o=a.firstChild,h=s.nextSibling,f=h.firstChild,w=f.firstChild,$=h.nextSibling,D=$.firstChild,N=D.firstChild,B=$.nextSibling,O=B.firstChild,d=O.firstChild;return M(s,"click",m(1),!0),t(o,n(I,{name:"list_dot",size:24})),M(h,"click",m(2),!0),t(w,n(I,{name:"receipt",size:24})),M($,"click",m(3),!0),t(N,n(I,{name:"send",size:24})),M(B,"click",m(4),!0),t(d,n(I,{name:"store",size:24})),V(g=>{var b=i()===1,x=i()===2,y=i()===3,A=i()===4;return b!==g.e&&s.classList.toggle("selected",g.e=b),x!==g.t&&h.classList.toggle("selected",g.t=x),y!==g.a&&$.classList.toggle("selected",g.a=y),A!==g.o&&B.classList.toggle("selected",g.o=A),g},{e:void 0,t:void 0,a:void 0,o:void 0}),_})(),(()=>{var _=fe();return t(_,n(E,{get fallback(){return L()},get children(){return n(ie,{get children(){return[n(T,{get when(){return i()===1},get children(){return n(v,{get when(){return i()===1},get children(){return n(Le,{index:1,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key},get currentStatus(){return e?.item?.currentStatus}})}})}}),n(T,{get when(){return i()===2},get children(){return n(v,{get when(){return i()===2},get children(){return n(Ae,{index:2,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),n(T,{get when(){return i()===3},get children(){return n(v,{get when(){return i()===3},get children(){return n(Te,{index:3,get guia(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),n(T,{get when(){return i()===4},get children(){return n(v,{get when(){return i()===4},get children(){return n(pe,{index:4,get agency(){return e?.item?.agency},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),V(()=>_.classList.toggle("pending",!!r())),_})()]}})},Le=e=>{const[i,{refetch:c}]=H(e?.id,async r=>{const l=await Re(e?.idairguide,e?.id);return se(l)});return n(E,{get fallback(){return L()},get children(){var r=U();return t(r,n(Q,{get each(){return i()},children:l=>n(Ne,{item:l})})),r}})},Ne=e=>(()=>{var i=ye(),c=i.firstChild,r=c.nextSibling,l=r.firstChild,m=l.nextSibling,_=m.nextSibling,s=_.nextSibling;s.nextSibling;var a=r.nextSibling;return t(c,()=>W("M023009")?.statusObjDesc[e?.item?.statusId]),t(r,()=>re(e?.item?.timeStamp),m),t(r,()=>le(e?.item?.timeStamp),s),t(a,()=>e?.item?.userName),i})(),Ae=e=>{const[i,{refetch:c}]=H(e?.id,async r=>(await Z(e?.guia,e?.id,["hbls"]))?.hbls);return n(E,{get fallback(){return L()},get children(){var r=U();return t(r,n(Q,{get each(){return i()},children:l=>n(Me,{item:l})})),r}})},Me=e=>{const i=r=>{let l={};l.id=j(),l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=n(X,{get val(){return e?.item?.hbl},get item(){return e?.item}}),G(l)},c=r=>{K(r)};return(()=>{var r=Se(),l=r.firstChild,m=l.nextSibling,_=m.nextSibling,s=_.firstChild,a=_.nextSibling,o=a.nextSibling,h=o.nextSibling,f=h.firstChild,w=h.nextSibling,$=w.nextSibling;return l.$$click=i,t(l,n(I,{name:"qr_code",size:20})),m.$$click=()=>c(e?.item?.hbl),t(m,()=>e?.item?.hbl),t(_,()=>e?.item?.weight,s),t(o,n(I,{name:"weight-pound",size:20})),t(h,()=>(e?.item?.weight*Be).toFixed(2),f),t($,()=>e?.item?.namegood),r})()},Te=e=>{const[i,{refetch:c}]=H(e?.id,async r=>await Z(e?.guia,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return n(E,{get fallback(){return L()},get children(){var r=Ce(),l=r.firstChild,m=l.firstChild,_=l.nextSibling,s=_.firstChild;return t(m,()=>i()?.nameshipper),t(s,()=>i()?.shipperInfo?.phoneNumber),r}})},pe=e=>{const i=()=>W("M023009")?.[e?.agency];return n(E,{get fallback(){return L()},get children(){var c=we(),r=c.firstChild,l=r.firstChild;return t(l,()=>i()?.label),c}})},Z=async(e,i,c)=>{let r={params:{id:i,idairguide:e},fldsQry:c},l=q(802002);r={...r,...l};const m=await Y(r);return m?.data?.error?{}:m},R=(e,i)=>i?(()=>{var c=ke(),r=c.firstChild,l=r.nextSibling;return t(r," "+e),t(l,i),c})():"",z=e=>(()=>{var i=Ie();return t(i,()=>R("Calle",e?.ybstreet),null),t(i,()=>R("#",e?.ybstreetNo),null),t(i,()=>R("E/",e?.ybbetwen1),null),t(i,()=>R("y",e?.ybbetwen2),null),i})(),Re=async(e,i)=>{let c={params:{":search0":i,airguide:e}},r=q(815002);c={...c,...r};const l=await Y(c);return l?.data?.error?{}:l};F(["click"]);export{Ye as default,z as getAddress};
