const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm--i1tuf3S.js","assets/index-BMo9JdU5.js","assets/index-DeAzZMb6.css","assets/SVG-CKIz6gh5.js","assets/index-Ci0zXM0r.js","assets/Util-D2YTzGDx.js","assets/ButonHrm-BSeWNUGQ.css","assets/InventoryOut-DUSff4Qb.js","assets/globalSignal-BE-U1QCH.js","assets/DialogHRM-DWsJikP8.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-QlmEzmS6.js","assets/DashProducts-BTwvtEXO.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-DEbuPAan.js","assets/DashInventory-4dS0EjIS.js","assets/Toast-BUEQhYLI.js","assets/Toast-DLpFKn-Q.css","assets/AddInventory-BjD3Nkqg.js","assets/InputHr-CaBboORT.js","assets/InputHr-M3rJ9grQ.css","assets/ShowQR-BmFWOykq.js","assets/ShowQRPrintLabel-XCr3YRC-.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-B3KIQnKW.js","assets/ItemOnConsigner-B3u9ZHk9.js","assets/ContainerElasticView-BNxedEzz.js","assets/ContainerElasticView-LzOd6fDI.css","assets/DropDwnSearch-CCVQe7_D.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-BFxqwoSN.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as I,_ as P,a as p,m as ge,i as t,d as r,S as b,f as O,t as o,e as _e,n as le,k as ae,j as be,q as te,g as ve,w as U,r as Q,x as ye,M as K,b as ie,F as oe,y as $e}from"./index-BMo9JdU5.js";import{O as R,g as G,a as q,p as fe,c as xe,b as W,f as Y}from"./Util-D2YTzGDx.js";import{OpenModal as J,CloseModal as ke}from"./DialogHRM-DWsJikP8.js";import we from"./ContainerElasticView-BNxedEzz.js";import{i as A}from"./globalSignal-BE-U1QCH.js";import{c as Se}from"./ShowQRPrintLabel-XCr3YRC-.js";import{LookupInventory as Ce}from"./DashInventory-4dS0EjIS.js";import"./index-Ci0zXM0r.js";import"./SVG-CKIz6gh5.js";/* empty css                             */import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-B3KIQnKW.js";import"./Toast-BUEQhYLI.js";import"./App.module-CbHnVtRQ.js";var se=o('<div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>'),Ie=o('<div class="_dsplFlx flxWrp spaceAround "><div class="bottombx centerBx unit "><div class=bag_number><h5></h5></div><h5 style=margin-left:9px>ya esta registrado en el inventario'),Pe=o('<div style="margin:15px 0"class=" spaceAround centerBx">'),Be=o("<div>");const Ae=I(()=>P(()=>import("./ButonHrm--i1tuf3S.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Ee=I(()=>P(()=>import("./InventoryOut-DUSff4Qb.js"),__vite__mapDeps([7,1,2,8,5,4,9,10,11,12,13,14,15,16,17,18,19])));function Ne(e){const[i,a]=p(null),c=async()=>{let s=`${e?.bagnumber} ${e?.hbl}`,l=await Ce(s),_=R(l);_?.length>0&&a(l[_?.[0]])};ge(()=>{c()});const u=()=>{let s=G(),l={};l.id=s,l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=r(Ee,{modalId:s,get bagnumber(){return e?.bagnumber},get hbl(){return e?.hbl}}),J(l)};return(()=>{var s=Be();return s.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),s.style.setProperty("overflow","auto"),s.style.setProperty("background","#fff"),s.style.setProperty("border-radius","13"),t(s,r(b,{get when(){return i()?.invoice},get children(){return[(()=>{var l=se(),_=l.firstChild,y=_.firstChild;return l.style.setProperty("padding","16px"),t(y,()=>i()?.invoice),l})(),(()=>{var l=Ie(),_=l.firstChild,y=_.firstChild,N=y.firstChild;return l.style.setProperty("padding","16px"),t(N,()=>e?.hbl),l})()]}}),null),t(s,r(b,{get when(){return!i()?.invoice},get children(){return[(()=>{var l=se(),_=l.firstChild,y=_.firstChild;return l.style.setProperty("padding","16px"),t(y,()=>e?.bagnumber),l})(),(()=>{var l=Pe();return t(l,r(Ae,{color:"#c8193c",icon:"send",label:"Enviar al Inventario",handleClick:u})),l})()]}}),null),O(l=>(l=A()?"96vw":"420px")!=null?s.style.setProperty("width",l):s.style.removeProperty("width")),s})()}var Me=o("<img width=48 height=24 class=picture-profile alt=ssg decoding=async>"),L=o('<div class="icon_status centerBx">'),De=o("<div class=guide_number><h5>"),He=o('<div class=" tr_bar_10 _dsplFlx">'),ce=o("<div class=bag_number><h5>"),Le=o("<div class=bottombx><h5>"),pe=o("<div><div>"),Oe=o('<p class="tr_bar_30 textleft fullName_consigne">'),Te=o("<div style=margin-right:4vw>"),ze=o('<h4 class="tr_bar_20 textleft">'),Ve=o("<div class=centerBx><div>"),Fe=o("<p>"),Re=o("<div class=separator> "),qe=o('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),Ge=o('<div class="centerBx bottombx"style=margin-top:10px;><h5>is SSG'),Qe=o('<div class="centerBx bottombx"style=margin-top:10px;><h5>is Paid'),re=o("<div style=padding:4px>"),We=o('<div><div class="_dsplFlx topbx centerBx"></div><div class="centerBx bottombx"><div class="centerBx bottombx flxWrp"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4></h4></div></div><div class="centerBx bottombx flxWrp">'),Ye=o('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Agency'),je=o("<div class=tab>"),j=o("<div class=loader>Loading..."),he=o("<div>"),Ue=o('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),Ke=o('<div class="centerBx bottombx"><h4 class=""></h4>|<div class="icon_status centerBx"></div><h5> KG</h5>|<div class="icon_status centerBx"></div><h5> LB</h5>|<h4 class=""></h4><div class="icon_status centerBx">'),Xe=o("<h5>"),Ze=o("<h4>"),Je=o("<div class=bottombx><div><h4></h4></div><div><h5>"),et=o("<div class=bottombx><div><h4>"),tt=o('<div><div style=max-height:220px></div><div class="centerBx flxWrp spaceAround ">'),rt=o('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),it=o('<div class="centerBx flxWrp">');const Z=I(()=>P(()=>import("./FlexSpace-DEbuPAan.js"),__vite__mapDeps([15,1,2]))),w=I(()=>P(()=>import("./SVG-CKIz6gh5.js"),__vite__mapDeps([3,1,2,4]))),nt=I(()=>P(()=>import("./ButonHrm--i1tuf3S.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),de=I(()=>P(()=>import("./InputHr-CaBboORT.js"),__vite__mapDeps([20,1,2,21]))),lt=I(()=>P(()=>import("./ShowQR-BmFWOykq.js"),__vite__mapDeps([22,1,2,8,23,24,4,25,26,27,5,17,18]))),at=I(()=>P(()=>import("./ItemOnConsigner-B3u9ZHk9.js"),__vite__mapDeps([28,1,2,5,4,9,10,29,3,30,8,24,25,26,17,18,0,6]))),st=I(()=>P(()=>import("./DropDwnSearch-CCVQe7_D.js"),__vite__mapDeps([31,1,2,11,3,4,32]))),ue=I(()=>P(()=>import("./CheckBoxSlide-BFxqwoSN.js"),__vite__mapDeps([33,1,2,34])));let ee={YABA_99:"check_circle"};function pt(e){const[i,a]=p(0),c=m=>m?" "+m:"",u=()=>{let m=e?.item?.consigneeInfo;return c(m?.firstName)+c(m?.middleName)+c(m?.lastName)+c(m?.lastName2)},s=()=>{let m=e?.item?.consigneeInfo,n=c(m?.altPhoneNumber);return c(m?.phoneNumber)+(n?" |"+n:"")},l=()=>{let m=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let n=m.reduce((g,$)=>Math.min(g,$.timeStamp),1/0);return Math.floor((new Date().getTime()-n)/864e5)}else return null},_=async()=>{let n={ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"};e?.item?.bagnumber&&await vt({id:e?.item?.bagnumber}),e?.item?.hbls?.map(async g=>{}),await bt(n),e?.refresh()},y=m=>{let n="";if(m)n=m,m.indexOf("/")>0&&(n=e?.item?.hblS.split("/")?.[2]);else if(e?.item?.hblS){let $=e?.item?.hblS;n=`${e?.item?.idairguide}/${e?.item?.cidentity}/${$}`}let g={};g.id=G(),g.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},g.content=r(lt,{val:n,get item(){return e?.item}}),J(g)},N=async m=>{let n=await yt(e?.item?.cidentity),g=R(n)?.[0],$=G(),S={};S.id=$,S.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},S.content=r($t,{get item(){return n?.[g]},get it(){return e?.item},modalId:$}),J(S)},C=m=>{let n=m,g="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const $=new RegExp(g);return n.length===13&&$.test(n)&&(n=n.slice(3,12)),n},V=async m=>{let n=await z({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{isSSG:m?"1":null}),g=R(n)?.[0];e?.updItm(e?.item?.ssg_track_key,g,n[g])},F=async m=>{let n=await z({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{isPaid:m?"isPaid":null}),g=R(n)?.[0];e?.updItm(e?.item?.ssg_track_key,g,n[g])},E=async m=>{let n=await z({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{billedBy:m}),g=R(n)?.[0];e?.updItm(e?.item?.ssg_track_key,g,n[g])};return r(b,{get when(){return e?.item?.cidentity},get children(){var m=We(),n=m.firstChild,g=n.nextSibling,$=g.firstChild,S=$.firstChild,x=S.nextSibling,M=x.nextSibling,T=M.nextSibling,D=T.nextSibling,B=g.nextSibling;return t(n,r(b,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var d=He();return t(d,r(b,{get when(){return e?.item?.isSSG},get children(){var h=Me();return O(()=>le(h,"src",q("SSG.webp"))),h}}),null),t(d,r(b,{get when(){return ee[e?.item?.currentStatus]},get children(){var h=L();return h.$$click=()=>a(!i()),t(h,r(w,{get name(){return ee?.[e?.item?.currentStatus]},size:32,color:"var(--hrm-palette-tertiary60)"})),h}}),null),t(d,r(b,{get when(){return e?.item?.isPaid},get children(){var h=L();return t(h,r(w,{name:"money_outline",size:32})),h}}),null),t(d,r(b,{get when(){return!ee[e?.item?.currentStatus]},get children(){var h=L();return h.$$click=()=>a(!i()),t(h,r(w,{get name(){return q("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),h}}),null),t(d,r(b,{get when(){return l()},get children(){var h=De(),f=h.firstChild;return t(f,l),h}}),null),d})(),r(b,{get when(){return A()},get children(){return[r(Z,{}),(()=>{var d=pe(),h=d.firstChild;return t(h,r(b,{get when(){return e?.item?.bagnumber},get children(){var f=ce(),k=f.firstChild;return f.$$click=()=>y(e?.item?.bagnumber),t(k,()=>e?.item?.bagnumber),f}})),t(d,r(b,{get when(){return e?.item?.tracking},get children(){var f=Le(),k=f.firstChild;return f.$$click=()=>y(C(e?.item?.tracking)),t(k,()=>C(e?.item?.tracking)),f}}),null),d})()]}}),r(b,{get when(){return!A()},get children(){return[(()=>{var d=Oe();return t(d,u),O(()=>le(d,"data-name",`${e?.item?.cidentity}`)),d})(),Te(),(()=>{var d=ze();return t(d,s),d})()]}})]}}),null),t(n,r(Z,{}),null),t(n,r(b,{get when(){return!A()},get children(){var d=Ve(),h=d.firstChild;return t(h,r(b,{get when(){return e?.item?.bagnumber},get children(){var f=ce(),k=f.firstChild;return f.$$click=()=>y(e?.item?.bagnumber),t(k,()=>C(e?.item?.bagnumber)),f}})),d}}),null),t(n,r(b,{get when(){return ae?.profile?.isAdmin},get children(){var d=L();return d.$$click=N,t(d,r(w,{name:"home",size:24})),d}}),null),t(n,r(b,{get when(){return!e?.item?.bagnumber||ae?.profile?.isAdmin},get children(){var d=L();return d.$$click=_,t(d,r(w,{name:"outline_delete",size:24})),d}}),null),t(g,r(b,{get when(){return!A()&&e?.item?.consigneeInfo?.ybstreet},get children(){var d=Fe();return t(d,()=>me(e?.item?.consigneeInfo)),d}}),$),t(g,r(Z,{}),$),t(S,()=>e?.item?.consigneeInfo?.ybreparto),t(M,()=>e?.item?.consigneeInfo?.ybcity),t(D,()=>e?.item?.consigneeInfo?.ybestate),t(m,r(b,{get when(){return A()&&e?.item?.consigneeInfo?.ybcity},get children(){return[Re(),(()=>{var d=qe(),h=d.firstChild,f=h.nextSibling,k=f.nextSibling,v=k.nextSibling;return t(h,u),t(k,s),t(v,()=>me(e?.item?.consigneeInfo)),d})()]}}),B),t(B,r(b,{get when(){return be(()=>!!(i()&&te()))()&&!A()},get children(){return[(()=>{var d=Ge(),h=d.firstChild;return t(d,r(ue,{get initValue(){return e?.item?.isSSG},updChange:V,color:"var(--background-red-ssg)"}),h),d})(),r(b,{get when(){return te()},get children(){return[(()=>{var d=Qe(),h=d.firstChild;return t(d,r(ue,{get initValue(){return e?.item?.isPaid},updChange:F,color:"var(--background-red-ssg)"}),h),d})(),(()=>{var d=re();return t(d,r(st,{get list(){return q("M023009")?.usersListSSG},lbl_empty:"Billed by",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.item?.billedBy},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:h=>E(h?.id),width:"260px"})),d})()]}})]}})),t(m,r(ct,{get item(){return e?.item}}),null),O(()=>ve(m,`client_item_box gWXAaj jlytmu ${A()?"isMobile":""}`)),m}})}const ct=e=>{const[i,a]=p(0),[c,u]=$e(),s=l=>()=>u(()=>a(l));return r(we,{get children(){return[(()=>{var l=Ye(),_=l.firstChild,y=_.firstChild,N=y.firstChild,C=_.nextSibling,V=C.firstChild,F=V.firstChild,E=C.nextSibling,m=E.firstChild,n=m.firstChild,g=E.nextSibling,$=g.firstChild,S=$.firstChild;return U(_,"click",s(1),!0),t(N,r(w,{name:"list_dot",size:24})),U(C,"click",s(2),!0),t(F,r(w,{name:"receipt",size:24})),U(E,"click",s(3),!0),t(n,r(w,{name:"send",size:24})),U(g,"click",s(4),!0),t(S,r(w,{name:"store",size:24})),O(x=>{var M=i()===1,T=i()===2,D=i()===3,B=i()===4;return M!==x.e&&_.classList.toggle("selected",x.e=M),T!==x.t&&C.classList.toggle("selected",x.t=T),D!==x.a&&E.classList.toggle("selected",x.a=D),B!==x.o&&g.classList.toggle("selected",x.o=B),x},{e:void 0,t:void 0,a:void 0,o:void 0}),l})(),(()=>{var l=je();return t(l,r(Q,{get fallback(){return j()},get children(){return r(ye,{get children(){return[r(K,{get when(){return i()===1},get children(){return r(b,{get when(){return i()===1},get children(){return r(dt,{index:1,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key},get currentStatus(){return e?.item?.currentStatus}})}})}}),r(K,{get when(){return i()===2},get children(){return r(b,{get when(){return i()===2},get children(){return r(mt,{index:2,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key},get bagnumber(){return e?.item?.bagnumber}})}})}}),r(K,{get when(){return i()===3},get children(){return r(b,{get when(){return i()===3},get children(){return r(ht,{index:3,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),r(K,{get when(){return i()===4},get children(){return r(b,{get when(){return i()===4},get children(){return r(_t,{index:4,get agency(){return e?.item?.agency},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),O(()=>l.classList.toggle("pending",!!c())),l})()]}})},dt=e=>{const[i,{refetch:a}]=ie(e?.id,async c=>{const u=await ne(e?.idairguide,e?.id,["statusHistory","deliveryUserName","deliveryTime"]);let s=u?.statusHistory;if(u?.deliveryTime){let l={statusId:e?.currentStatus,timeStamp:u?.deliveryTime,userName:u?.deliveryUserName};s.push(l)}return s});return r(Q,{get fallback(){return j()},get children(){var c=he();return t(c,r(oe,{get each(){return i()},children:u=>r(ut,{item:u})})),c}})},ut=e=>(()=>{var i=Ue(),a=i.firstChild,c=a.nextSibling,u=c.firstChild,s=u.nextSibling,l=s.nextSibling,_=l.nextSibling;_.nextSibling;var y=c.nextSibling;return t(a,()=>q("M023009")?.statusObjDesc[e?.item?.statusId]),t(c,()=>fe(e?.item?.timeStamp),s),t(c,()=>xe(e?.item?.timeStamp),_),t(y,()=>e?.item?.userName),i})(),mt=e=>{const[i,{refetch:a}]=ie(e?.id,async s=>(await ne(e?.idairguide,e?.id,["hbls"]))?.hbls),c=async(s,l)=>{let _=[];i().map(y=>{y.hbl===s&&(y={...y,...l}),_.push(y)}),await z({ssg_track_key:e?.id,idairguide:"all"},{hbls:_}),a()},u=async s=>{let l=[];i().map(_=>{_.hbl!==s&&l.push(_)}),await z({ssg_track_key:e?.id,idairguide:"all"},{hbls:l}),a()};return r(Q,{get fallback(){return j()},get children(){var s=he();return t(s,r(oe,{get each(){return i()},children:l=>r(ot,{item:l,get bagnumber(){return e?.bagnumber},updHbls:c,rmvHbls:u})})),s}})},gt=2.20462,ot=e=>{const[i,a]=p(0),[c,u]=p(0),[s,l]=p(0),[_,y]=p(0),N=n=>{Se(n)};ge(()=>{e?.item?.pricePerPound&&l(e?.item?.pricePerPound),e?.item?.dutyFee&&y(e?.item?.dutyFee)});const C=(n,g,$)=>{e?.updHbls(e?.item?.hbl,{[n]:g}),$?a(!1):u(!1)},V=()=>{let n=e?.item?.pricePerPound;return n?"$ "+(n*1).toFixed(2):" agregar precio por libra"},F=()=>{let n=e?.item?.dutyFee;return n?"$ "+(n*1).toFixed(2):" agregar aranceles"},E=()=>{e?.rmvHbls(e?.item?.hbl)},m=()=>{let n={};n.id=G(),n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=r(Ne,{get item(){return e?.item},get hbl(){return e?.item?.hbl},get bagnumber(){return e?.bagnumber}}),J(n)};return(()=>{var n=Ke(),g=n.firstChild,$=g.nextSibling,S=$.nextSibling,x=S.nextSibling,M=x.firstChild,T=x.nextSibling,D=T.nextSibling,B=D.nextSibling,d=B.firstChild,h=B.nextSibling,f=h.nextSibling,k=f.nextSibling;return g.$$click=()=>N(e?.item?.hbl),t(g,()=>e?.item?.hbl),t(S,r(w,{name:"weight-kilogram",size:20})),t(x,()=>e?.item?.weight,M),t(D,r(w,{name:"weight-pound",size:20})),t(B,()=>(e?.item?.weight*gt).toFixed(2),d),t(f,()=>e?.item?.namegood),t(n,r(b,{get when(){return i()},get fallback(){return["|",(()=>{var v=L();return t(v,r(w,{name:"money",size:20})),v})(),(()=>{var v=Xe();return v.$$click=()=>a(!i()),t(v,V),v})()]},get children(){var v=re();return t(v,r(de,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return s()},placeholder:"Precio por Libra",colors:"#2b2b2b",handleClick:H=>l(H),onEnter:H=>C("pricePerPound",H,1)})),v}}),k),t(n,r(b,{get when(){return c()},get fallback(){return["|",(()=>{var v=Ze();return v.$$click=()=>u(!c()),t(v,F),v})()]},get children(){var v=re();return t(v,r(de,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return _()},placeholder:"Aranceles",colors:"#2b2b2b",handleClick:H=>y(H),onEnter:H=>C("dutyFee",H)})),v}}),k),t(n,r(Z,{}),k),k.$$click=m,t(k,r(w,{name:"warehouse",size:20})),t(n,r(b,{get when(){return te()},get children(){var v=L();return v.$$click=E,t(v,r(w,{name:"outline_delete",size:20})),v}}),null),n})()},ht=e=>{const[i,{refetch:a}]=ie(e?.id,async c=>await ne(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return r(Q,{get fallback(){return j()},get children(){var c=Je(),u=c.firstChild,s=u.firstChild,l=u.nextSibling,_=l.firstChild;return t(s,()=>i()?.nameshipper),t(_,()=>i()?.shipperInfo?.phoneNumber),c}})},_t=e=>{const i=()=>q("M023009")?.agencies?.filter(c=>e?.agency===c?.id?.toString())?.[0];return r(Q,{get fallback(){return j()},get children(){var a=et(),c=a.firstChild,u=c.firstChild;return t(u,()=>i()?.label),a}})},bt=async e=>{let i={params:e},a=W(809005);return i={...i,...a},(await Y(i))?.data},vt=async e=>{let i={params:e},a=W(409098);return i={...i,...a},(await Y(i))?.data},ne=async(e,i,a)=>{let c={params:{id:i,idairguide:"all"},fldsQry:a},u=W(802002);c={...c,...u};const s=await Y(c);return s?.data?.error?{}:s},yt=async e=>{if(e.length>4){let i={params:{}};e&&e.split(" ").map((u,s)=>{u&&(i.params[":search"+s]=u.trim())});let a=W(401001);return i={...i,...a},await Y(i)}else return{}},z=async(e,i)=>{let a={params:e,data2update:i},c=W(809004);return a={...a,...c},await Y(a)},$t=e=>{const i=async()=>{let a={consigneeInfo:{cid:e?.item?.cid,firstName:e?.item?.firstName,lastName:e?.item?.lastName,lastName2:e?.item?.lastName2,middleName:e?.item?.middleName,phoneNumber:e?.item?.phoneNumber,ybapt:e?.item?.ybapt,ybbetwen1:e?.item?.ybbetwen1,ybbetwen2:e?.item?.ybbetwen2,ybcity:e?.item?.ybcity,ybestate:e?.item?.ybestate,ybreparto:e?.item?.ybreparto,ybstreet:e?.item?.ybstreet,ybstreetNo:e?.item?.ybstreetNo},city:e?.item?.ybcity,estate:e?.item?.ybestate};await z({ssg_track_key:e?.it?.ssg_track_key,idairguide:"all"},a),ke(e?.modalId)};return(()=>{var a=tt(),c=a.firstChild,u=c.nextSibling;return a.style.setProperty("height","clamp(20vh, 45vh, 80vh)"),a.style.setProperty("overflow","auto"),a.style.setProperty("background","#ffffff"),a.style.setProperty("border-radius","13"),a.style.setProperty("padding","10px 19px"),t(c,r(at,{get item(){return e?.item},refresh:()=>isOpenDebounced(G())})),t(u,r(nt,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:i})),O(s=>(s=A()?"96vw":"920px")!=null?a.style.setProperty("width",s):a.style.removeProperty("width")),a})()},X=(e,i)=>i?(()=>{var a=rt(),c=a.firstChild,u=c.nextSibling;return t(c," "+e),t(u,i),a})():"",me=e=>(()=>{var i=it();return t(i,()=>X("Calle",e?.ybstreet),null),t(i,()=>X("#",e?.ybstreetNo),null),t(i,()=>X("E/",e?.ybbetwen1),null),t(i,()=>X("y",e?.ybbetwen2),null),i})();_e(["click"]);export{pt as default,me as getAddress};
