const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-RIPQKJa9.js","assets/index-oNqpx5mP.js","assets/index-B8kuA055.css","assets/SVG-CS-6Om-s.js","assets/ShowQR-CJ1wVHMk.js","assets/ShowQRPrintLabel-DyBnQCRt.js","assets/fontkit.es-Dm5sQXoE.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-BPbmddtO.js","assets/Toast-DX8o-ePW.js","assets/Toast-SmEZ1JuI.css","assets/ButonUploadHrm-5pisR7Vh.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-DmHyr_Dh.js","assets/DropDwnSearch-jxdDmIV7.js","assets/debounces-BeVlCSYs.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as f,_ as p,a as $,c as ae,q as ce,b as de,h as F,i as e,d as n,f as x,e as oe,t as o,S as m,ab as me,D as _e,a2 as w,s as X,g as ge,j as ue}from"./index-oNqpx5mP.js";/* empty css                             */import{OpenModal as ve}from"./DialogHRM-D2aLVq9a.js";import{g as he}from"./ShowQRPrintLabel-DyBnQCRt.js";import"./FindHBL-BNHmWtTw.js";import"./fontkit.es-Dm5sQXoE.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-BPbmddtO.js";import"./Toast-DX8o-ePW.js";import"./InputHr-kk1vKzg8.js";import"./SVG-CS-6Om-s.js";import"./Envios-C9JjqMax.js";import"./debounces-BeVlCSYs.js";import"./FlexSpace-RIPQKJa9.js";var G=o("<div class=bag_number><h5>"),U=o("<div class=bottombx><h5>"),$e=o('<div class=" spaceAround centerBx"><button class="_2vPs0 _3YAke success"><span>Entregado'),xe=o('<div><div class=" spaceAround centerBx"><div>|</div>'),be=o("<div><img alt=sf>"),fe=o('<div><div class=" "><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),pe=o("<div>"),ye=o('<div class="client_item_box WXAaj2 jlytmu isMobile"><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=" centerBx"><div></div></div><div class=bottombx><p class=" textleft fullName_consigne"></p><h5 class=" textleft"style=margin:20px></h5><div class="centerBx bottombx"><div class=centerBx>Carnet:</div><h4 class=" textleft"></h4></div></div><div class=separator></div><div class="_dsplFlx bottombx"><p class=" textleft"></p></div><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4></h4></div><div class=separator>'),Ce=o('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),Se=o('<p class="tr_bar_30 textleft fullName_consigne">'),ke=o("<div style=margin-right:4vw>"),we=o("<div><div>"),Ae=o('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5 class=" textleft"></h5></div></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5 class=" textleft"></h5></div><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>');const b=f(()=>p(()=>import("./FlexSpace-RIPQKJa9.js"),__vite__mapDeps([0,1,2]))),Y=f(()=>p(()=>import("./SVG-CS-6Om-s.js"),__vite__mapDeps([3,1,2]))),Ie=f(()=>p(()=>import("./ShowQR-CJ1wVHMk.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10]))),Z=f(()=>p(()=>import("./ButonUploadHrm-5pisR7Vh.js"),__vite__mapDeps([11,1,2,3,12]))),Be=f(()=>p(()=>import("./ButonHrm-DmHyr_Dh.js"),__vite__mapDeps([13,1,2,3,12])));f(()=>p(()=>import("./DropDwnSearch-jxdDmIV7.js"),__vite__mapDeps([14,1,2,15,3,16])));function Xe(l){const[N,L]=$(null),[J,Ee]=ae({}),[D,Pe]=$("");$("");const[R,Fe]=$(""),[T,K]=$(!1),[H,M]=$(!1),v=t=>t?" "+t:"",z=()=>{let t=l?.item?.consigneeInfo;return v(t?.firstName)+v(t?.middleName)+v(t?.lastName)+v(t?.lastName2)},W=()=>{let t=l?.item?.consigneeInfo,i=v(t?.altPhoneNumber);return v(t?.phoneNumber)+(i?" |"+i:"")},q=()=>{let t=l?.item?.street.split(",");return t.slice(0,t.length-2).join(",")},A=t=>{let i="";if(t)i=t;else if(l?.item?.hblS){let _=l?.item?.hblS;i=`${l?.item?.idairguide}/${l?.item?.cidentity}/${_}`}let s={};s.id=ue(),s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=n(Ie,{val:i,get item(){return l?.item}}),ve(s)},h=t=>{let i=t,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const _=new RegExp(s);return i.length===13&&_.test(i)&&(i=i.slice(3,12)),i};ce(()=>{}),de(l?.item?.tracking,async()=>{let t=h(l?.item?.tracking);return await he(t)});const ee=()=>{},te=t=>{K(!1),M(!1)},le=t=>{L(t),M(!0)},ie=()=>{L(null),M(!1)};return F()?(()=>{var t=ye(),i=t.firstChild,s=i.nextSibling,_=s.firstChild,y=s.nextSibling,C=y.firstChild,S=C.nextSibling,V=S.nextSibling,I=V.firstChild,B=I.nextSibling,O=y.nextSibling,E=O.nextSibling,a=E.firstChild,g=E.nextSibling,c=g.firstChild,u=c.nextSibling,re=u.nextSibling;return g.nextSibling,i.style.setProperty("padding","16px"),e(s,n(b,{}),_),e(_,n(m,{get when(){return l?.item?.bagnumber},get children(){var r=G(),d=r.firstChild;return r.$$click=()=>A(null),e(d,()=>l?.item?.bagnumber),r}})),e(s,n(b,{}),null),e(s,n(m,{get when(){return l?.item?.tracking},get children(){var r=U(),d=r.firstChild;return r.$$click=()=>A(h(l?.item?.tracking)),e(d,()=>h(l?.item?.tracking)),r}}),null),e(s,n(b,{}),null),e(C,z),e(S,W),e(B,()=>l?.item?.cidentity),e(a,q),e(c,()=>l?.item?.consigneeInfo?.ybcity),e(re,()=>l?.item?.consigneeInfo?.ybestate),e(t,n(m,{get when(){return!T()},get children(){var r=$e(),d=r.firstChild;return d.$$click=ee,r}}),null),e(t,n(m,{get when(){return!H()||!N()?.source},get children(){var r=xe(),d=r.firstChild,P=d.firstChild;return e(d,n(Z,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:le}),P),e(d,n(Z,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"progress-upload",label:"Subir Imagen mas tarde",handleClick:()=>{}}),null),x(()=>r.className=`elastic_view_bx ${T()?"show":""}`),r}}),null),e(t,n(m,{get when(){return me(()=>!!H())()&&N()?.source},get children(){return[(()=>{var r=be(),d=r.firstChild;return x(()=>_e(d,"src",N()?.source)),r})(),(()=>{var r=fe(),d=r.firstChild,P=d.firstChild,j=P.nextSibling,ne=j.firstChild;return e(P,n(Be,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:ie})),j.$$click=te,e(ne,n(Y,{name:"success",size:32,get color(){return w?.success?.svg}})),x(k=>{var Q=`elastic_view_bx ${T()?"show":""}`,se=w?.success;return Q!==k.e&&(r.className=k.e=Q),k.t=X(j,se,k.t),k},{e:void 0,t:void 0}),r})(),pe()]}}),null),x(r=>(r=R()?"block":"none")!=null?i.style.setProperty("display",r):i.style.removeProperty("display")),t})():n(m,{get when(){return l?.item?.tracking},get children(){var t=Ae(),i=t.firstChild,s=i.nextSibling,_=s.firstChild,y=_.firstChild,C=s.nextSibling,S=C.firstChild,V=S.firstChild,I=S.nextSibling,B=I.firstChild,O=B.nextSibling,E=O.nextSibling;return i.style.setProperty("padding","16px"),e(i,n(m,{get when(){return R()},get children(){var a=Ce(),g=a.firstChild,c=g.nextSibling;return e(g,n(Y,{get name(){return w?.[D()]?.icon},size:32,get color(){return w?.[D()]?.svg}})),e(c,()=>J?.consigneeInfo?.ybestate),x(u=>X(a,w?.[D()],u)),a}})),e(s,n(m,{get when(){return l?.item?.tracking},get children(){return n(m,{get when(){return!F()},get children(){return[(()=>{var a=Se();return e(a,z),a})(),ke()]}})}}),_),e(s,n(b,{}),_),e(y,W),e(s,n(b,{}),null),e(s,n(m,{get when(){return!F()&&l?.item?.tracking},get children(){var a=we(),g=a.firstChild;return e(g,n(m,{get when(){return l?.item?.bagnumber},get children(){var c=G(),u=c.firstChild;return c.$$click=()=>A(null),e(u,()=>h(l?.item?.bagnumber)),c}})),e(a,n(m,{get when(){return l?.item?.tracking},get children(){var c=U(),u=c.firstChild;return c.$$click=()=>A(h(l?.item?.tracking)),e(u,()=>h(l?.item?.tracking)),c}}),null),a}}),null),e(V,q),e(C,n(b,{}),I),e(B,()=>l?.item?.consigneeInfo?.ybcity),e(E,()=>l?.item?.consigneeInfo?.ybestate),x(a=>{var g=`client_item_box gWXAaj jlytmu ${F()?"isMobile":""}`,c=R()?"block":"none";return g!==a.e&&ge(t,a.e=g),c!==a.t&&((a.t=c)!=null?i.style.setProperty("display",c):i.style.removeProperty("display")),a},{e:void 0,t:void 0}),t}})}oe(["click"]);export{Xe as default};