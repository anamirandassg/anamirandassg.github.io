const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-q_kPwgUU.js","assets/index-BAL7cYef.js","assets/index-BRlA1Q7g.css","assets/SVG-B6dmaFWV.js","assets/Util-BFTPhrO4.js","assets/ButonHrm-BSeWNUGQ.css","assets/InventoryOut-CCKQfnAW.js","assets/DialogHRM-CEowjsne.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-tcqQvHjx.js","assets/DashProducts-CAmLvuWW.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-BFjYYo8L.js","assets/DashInventory-qHKysI4P.js","assets/Toast-BCkrdaLA.js","assets/Toast-DLpFKn-Q.css","assets/AddInventory-C_aCEfhs.js","assets/InputHr-BMadI7Ex.js","assets/InputHr-BXFw4d2l.css","assets/ShowQR--gE0dqYz.js","assets/ShowQRPrintLabel-CK2LWj9n.js","assets/fontkit.es-CdiTDqf_.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-DU4P7h91.js","assets/ItemOnConsigner-GX7uAcrs.js","assets/ContainerElasticView-BZQi30Nr.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ShowRemmitance-CKwm1FaK.js","assets/DropDwnSearch-DO5TqWeH.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-CGG18YJz.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as E,_ as T,a as M,d as re,i as t,e as i,S as f,f as O,j as L,t as g,k as ce,g as de,q as ye,m as $e,Q as Y,z as j,U as fe,V as K,p as ne,F as le,x as ae,h as xe,W as ke}from"./index-BAL7cYef.js";import{O as N,a as V,e as G,h as we,j as Ce,g as F,f as R,E as Se}from"./Util-BFTPhrO4.js";import{OpenModal as Q,CloseModal as Ie}from"./DialogHRM-CEowjsne.js";import Be from"./ContainerElasticView-BZQi30Nr.js";import{c as Pe}from"./ShowQRPrintLabel-CK2LWj9n.js";import{LookupInventory as Ae}from"./DashInventory-qHKysI4P.js";import{OpenToast as Ee}from"./Toast-BCkrdaLA.js";import"./SVG-B6dmaFWV.js";/* empty css                             */import"./fontkit.es-CdiTDqf_.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-DU4P7h91.js";import"./App.module-CbHnVtRQ.js";var ue=g('<div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>'),Te=g('<div class="_dsplFlx flxWrp spaceAround "><div class="bottombx centerBx unit "><div class=bag_number><h5></h5></div><h5 style=margin-left:9px>ya esta registrado en el inventario'),Le=g('<div style="margin:15px 0"class=" spaceAround centerBx">'),Me=g("<div>");const Ne=E(()=>T(()=>import("./ButonHrm-q_kPwgUU.js"),__vite__mapDeps([0,1,2,3,4,5]))),He=E(()=>T(()=>import("./InventoryOut-CCKQfnAW.js"),__vite__mapDeps([6,1,2,4,7,8,9,10,11,12,13,14,15,16,17])));function De(e){const[r,n]=M(null),l=async()=>{let s=`${e?.bagnumber} ${e?.hbl}`,a=await Ae(s),v=N(a);v?.length>0&&n(a[v?.[0]])};re(()=>{l()});const u=()=>{let s=V(),a={};a.id=s,a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=i(He,{modalId:s,get bagnumber(){return e?.bagnumber},get hbl(){return e?.hbl}}),Q(a)};return(()=>{var s=Me();return s.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),s.style.setProperty("overflow","auto"),s.style.setProperty("background","#fff"),s.style.setProperty("border-radius","13"),t(s,i(f,{get when(){return r()?.invoice},get children(){return[(()=>{var a=ue(),v=a.firstChild,x=v.firstChild;return a.style.setProperty("padding","16px"),t(x,()=>r()?.invoice),a})(),(()=>{var a=Te(),v=a.firstChild,x=v.firstChild,I=x.firstChild;return a.style.setProperty("padding","16px"),t(I,()=>e?.hbl),a})()]}}),null),t(s,i(f,{get when(){return!r()?.invoice},get children(){return[(()=>{var a=ue(),v=a.firstChild,x=v.firstChild;return a.style.setProperty("padding","16px"),t(x,()=>e?.bagnumber),a})(),(()=>{var a=Le();return t(a,i(Ne,{color:"#c8193c",icon:"send",label:"Enviar al Inventario",handleClick:u})),a})()]}}),null),O(a=>(a=L()?"96vw":"420px")!=null?s.style.setProperty("width",a):s.style.removeProperty("width")),s})()}var ze=g("<img width=48 height=24 class=picture-profile alt=ssg decoding=async>"),z=g('<div class="icon_status centerBx">'),Oe=g("<div class=guide_number><h5>"),Ve=g('<div class=" tr_bar_10 _dsplFlx">'),ge=g("<div class=bag_number><h5>"),Fe=g("<div class=bottombx><h5>"),Re=g("<div><div>"),qe=g('<p class="tr_bar_30 textleft fullName_consigne">'),Ge=g("<div style=margin-right:4vw>"),Qe=g('<h4 class="tr_bar_20 textleft">'),je=g("<div class=centerBx><div>"),We=g("<p>"),Ue=g("<div class=separator> "),Ye=g('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),Ke=g('<div><div class="_dsplFlx topbx centerBx"></div><div class="centerBx bottombx"><div class="centerBx bottombx flxWrp"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),Xe=g('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Agency'),Ze=g("<div class=tab>"),W=g("<div class=loader>Loading..."),oe=g("<div>"),Je=g('<div class="centerBx bottombx"style=margin-top:10px;><h5>is Paid'),pe=g('<div class="centerBx bottombx"style=margin-top:10px;><h5>is LMH'),J=g("<div style=padding:4px>"),et=g('<div class="centerBx bottombx flxWrp">'),tt=g('<div><div class="centerBx bottombx flxWrp"><div class="centerBx bottombx"style=margin-top:10px;><h5>is SSG'),it=g('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),rt=g('<div class="centerBx bag_number"><h5 class=""></h5><div class="icon_status centerBx">'),nt=g('<div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4>|<div class="icon_status centerBx"></div><h5> KG</h5>|<div class="icon_status centerBx"></div><h5> LB</h5>|<h4 class=""></h4><div class="icon_status centerBx">'),lt=g("<h5>"),at=g("<h4>"),st=g("<div class=bottombx><div><h4></h4></div><div><h5>"),ct=g("<div class=bottombx><div><h4>"),dt=g('<div><div style=max-height:220px></div><div class="centerBx flxWrp spaceAround ">'),ut=g('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),gt=g('<div class="centerBx flxWrp">');const Z=E(()=>T(()=>import("./FlexSpace-BFjYYo8L.js"),__vite__mapDeps([13,1,2]))),S=E(()=>T(()=>import("./SVG-B6dmaFWV.js"),__vite__mapDeps([3,1,2,4]))),mt=E(()=>T(()=>import("./ButonHrm-q_kPwgUU.js"),__vite__mapDeps([0,1,2,3,4,5]))),ie=E(()=>T(()=>import("./InputHr-BMadI7Ex.js"),__vite__mapDeps([18,1,2,19]))),he=E(()=>T(()=>import("./ShowQR--gE0dqYz.js"),__vite__mapDeps([20,1,2,21,22,4,23,24,15,16]))),ot=E(()=>T(()=>import("./ItemOnConsigner-GX7uAcrs.js"),__vite__mapDeps([25,1,2,4,7,8,26,3,27,22,23,15,16,0,5,28,21,24,13]))),ht=E(()=>T(()=>import("./DropDwnSearch-DO5TqWeH.js"),__vite__mapDeps([29,1,2,9,3,4,30]))),ee=E(()=>T(()=>import("./CheckBoxSlide-CGG18YJz.js"),__vite__mapDeps([31,1,2,32])));let te={YABA_99:"check_circle"};function Gt(e){const[r,n]=M(0),l=y=>y?" "+y:"",u=()=>{let y=e?.item?.consigneeInfo;return l(y?.firstName)+l(y?.middleName)+l(y?.lastName)+l(y?.lastName2)},s=()=>{let y=e?.item?.consigneeInfo,h=l(y?.altPhoneNumber);return l(y?.phoneNumber)+(h?" |"+h:"")},a=()=>{let y=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let h=y.reduce((c,m)=>Math.min(c,m.timeStamp),1/0);return Math.floor((new Date().getTime()-h)/864e5)}else return null},v=async()=>{let h={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia};e?.item?.bagnumber&&await It({id:e?.item?.bagnumber}),e?.item?.hbls?.map(async c=>{}),await St(h),e?.refresh()},x=y=>{let h="";e?.item?.hblS&&(h=e?.item?.hblS.split("/")?.[2]);let c={};c.id=V(),c.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},c.content=i(he,{val:h,get item(){return e?.item}}),Q(c)},I=async y=>{let h=await Pt(e?.item?.cidentity),c=N(h)?.[0],m=V(),b={};b.id=m,b.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},b.content=i(At,{get item(){return h?.[c]},get it(){return e?.item},modalId:m}),Q(b)},P=y=>{let h=y,c="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const m=new RegExp(c);return h.length===13&&m.test(h)&&(h=h.slice(3,12)),h};return i(f,{get when(){return e?.item?.cidentity},get children(){var y=Ke(),h=y.firstChild,c=h.nextSibling,m=c.firstChild,b=m.firstChild,o=b.nextSibling,_=o.nextSibling,k=_.nextSibling,B=k.nextSibling;return t(h,i(f,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var d=Ve();return t(d,i(f,{get when(){return e?.item?.isSSG},get children(){var $=ze();return O(()=>ce($,"src",G("SSG.webp"))),$}}),null),t(d,i(f,{get when(){return te[e?.item?.currentStatus]},get children(){var $=z();return $.$$click=()=>n(!r()),t($,i(S,{get name(){return te?.[e?.item?.currentStatus]},size:32,color:"var(--hrm-palette-tertiary60)"})),$}}),null),t(d,i(f,{get when(){return e?.item?.isPaid},get children(){var $=z();return t($,i(S,{name:"money_outline",size:32})),$}}),null),t(d,i(f,{get when(){return!te[e?.item?.currentStatus]},get children(){var $=z();return $.$$click=()=>n(!r()),t($,i(S,{get name(){return G("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),$}}),null),t(d,i(f,{get when(){return a()},get children(){var $=Oe(),w=$.firstChild;return t(w,a),$}}),null),d})(),i(f,{get when(){return L()},get children(){return[i(Z,{}),(()=>{var d=Re(),$=d.firstChild;return t($,i(f,{get when(){return e?.item?.bagnumber},get children(){var w=ge(),A=w.firstChild;return w.$$click=()=>x(e?.item?.bagnumber),t(A,()=>e?.item?.bagnumber),w}})),t(d,i(f,{get when(){return e?.item?.tracking},get children(){var w=Fe(),A=w.firstChild;return w.$$click=()=>x(P(e?.item?.tracking)),t(A,()=>P(e?.item?.tracking)),w}}),null),d})()]}}),i(f,{get when(){return!L()},get children(){return[(()=>{var d=qe();return t(d,u),O(()=>ce(d,"data-name",`${e?.item?.cidentity}`)),d})(),Ge(),(()=>{var d=Qe();return t(d,s),d})()]}})]}}),null),t(h,i(Z,{}),null),t(h,i(f,{get when(){return!L()},get children(){var d=je(),$=d.firstChild;return t($,i(f,{get when(){return e?.item?.bagnumber},get children(){var w=ge(),A=w.firstChild;return w.$$click=()=>x(e?.item?.bagnumber),t(A,()=>P(e?.item?.bagnumber)),w}})),d}}),null),t(h,i(f,{get when(){return de?.profile?.isAdmin},get children(){var d=z();return d.$$click=I,t(d,i(S,{name:"home",size:24})),d}}),null),t(h,i(f,{get when(){return!e?.item?.bagnumber||de?.profile?.isAdmin},get children(){var d=z();return d.$$click=v,t(d,i(S,{name:"outline_delete",size:24})),d}}),null),t(c,i(f,{get when(){return!L()&&e?.item?.consigneeInfo?.ybstreet},get children(){var d=We();return t(d,()=>me(e?.item?.consigneeInfo)),d}}),m),t(c,i(Z,{}),m),t(b,()=>e?.item?.consigneeInfo?.ybreparto),t(_,()=>e?.item?.consigneeInfo?.ybcity),t(B,()=>e?.item?.consigneeInfo?.ybestate),t(y,i(f,{get when(){return L()&&e?.item?.consigneeInfo?.ybcity},get children(){return[Ue(),(()=>{var d=Ye(),$=d.firstChild,w=$.nextSibling,A=w.nextSibling,U=A.nextSibling;return t($,u),t(A,s),t(U,()=>me(e?.item?.consigneeInfo)),d})()]}}),null),t(y,i(f,{get when(){return ye(()=>!!(r()&&ae()))()&&!L()},get children(){return i(vt,{get item(){return e?.item},get updItm(){return e?.updItm},get tags(){return e?.item?.noteTag}})}}),null),t(y,i(_t,{get item(){return e?.item}}),null),O(()=>$e(y,`client_item_box gWXAaj jlytmu ${L()?"isMobile":""}`)),y}})}const _t=e=>{const[r,n]=M(0),[l,u]=ke(),s=a=>()=>u(()=>n(a));return i(Be,{get children(){return[(()=>{var a=Xe(),v=a.firstChild,x=v.firstChild,I=x.firstChild,P=v.nextSibling,y=P.firstChild,h=y.firstChild,c=P.nextSibling,m=c.firstChild,b=m.firstChild,o=c.nextSibling,_=o.firstChild,k=_.firstChild;return Y(v,"click",s(1),!0),t(I,i(S,{name:"list_dot",size:24})),Y(P,"click",s(2),!0),t(h,i(S,{name:"receipt",size:24})),Y(c,"click",s(3),!0),t(b,i(S,{name:"send",size:24})),Y(o,"click",s(4),!0),t(k,i(S,{name:"store",size:24})),O(B=>{var d=r()===1,$=r()===2,w=r()===3,A=r()===4;return d!==B.e&&v.classList.toggle("selected",B.e=d),$!==B.t&&P.classList.toggle("selected",B.t=$),w!==B.a&&c.classList.toggle("selected",B.a=w),A!==B.o&&o.classList.toggle("selected",B.o=A),B},{e:void 0,t:void 0,a:void 0,o:void 0}),a})(),(()=>{var a=Ze();return t(a,i(j,{get fallback(){return W()},get children(){return i(fe,{get children(){return[i(K,{get when(){return r()===1},get children(){return i(f,{get when(){return r()===1},get children(){return i(bt,{index:1,get idairguide(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key},get currentStatus(){return e?.item?.currentStatus}})}})}}),i(K,{get when(){return r()===2},get children(){return i(f,{get when(){return r()===2},get children(){return i(ft,{index:2,get idairguide(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key},get bagnumber(){return e?.item?.bagnumber}})}})}}),i(K,{get when(){return r()===3},get children(){return i(f,{get when(){return r()===3},get children(){return i(wt,{index:3,get idairguide(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),i(K,{get when(){return r()===4},get children(){return i(f,{get when(){return r()===4},get children(){return i(Ct,{index:4,get agency(){return e?.item?.agency},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),O(()=>a.classList.toggle("pending",!!l())),a})()]}})},bt=e=>{const[r,{refetch:n}]=ne(e?.id,async l=>{const u=await Bt(e?.idairguide,e?.id);return Se(u)});return i(j,{get fallback(){return W()},get children(){var l=oe();return t(l,i(le,{get each(){return r()},children:u=>i(yt,{item:u})})),l}})},vt=e=>{const[r,n]=M({}),[l,u]=M(""),s=async c=>{let m=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},{isSSG:c?"1":null}),b=N(m)?.[0];e?.updItm(e?.item?.ssg_track_key,b,m[b])},a=async c=>{let m=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},{isPaid:c?"isPaid":null}),b=N(m)?.[0];e?.updItm(e?.item?.ssg_track_key,b,m[b])},v=async c=>{let m=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},{billedBy:c}),b=N(m)?.[0];e?.updItm(e?.item?.ssg_track_key,b,m[b])},x=async c=>{let m=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},{isLMH:c?"isLMH":null}),b=N(m)?.[0];e?.updItm(e?.item?.ssg_track_key,b,m[b])},I=async c=>{let m={noteTag:c};typeof e?.item?.guia=="number"&&(m.guia=e?.item?.guia+"");let b=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},m),o=N(b)?.[0];e?.updItm(e?.item?.ssg_track_key,o,b[o]),Ee({text:"Tag Actualizado",timeout:2500,id:V()}),u(""),n(b[o])};re(()=>{typeof e?.item?.noteTag=="object"&&e?.item?.noteTag&&n(e?.item?.noteTag)});const P=()=>{let c={...r()};typeof c!="object"&&(c={}),c[l()]=1,I(c)},y=c=>{let m={...r()};m[c]=void 0,I(m)},h=()=>{let c={...r()};return typeof c!="object"&&(c={}),N(c)};return(()=>{var c=tt(),m=c.firstChild,b=m.firstChild,o=b.firstChild;return t(b,i(ee,{get initValue(){return e?.item?.isSSG},updChange:s,color:"var(--background-red-ssg)"}),o),t(m,i(f,{get when(){return ae()},get children(){return[(()=>{var _=Je(),k=_.firstChild;return t(_,i(ee,{get initValue(){return e?.item?.isPaid},updChange:a,color:"var(--background-red-ssg)"}),k),_})(),(()=>{var _=pe(),k=_.firstChild;return t(_,i(ee,{get initValue(){return e?.item?.isLMH},updChange:x,color:"var(--background-red-ssg)"}),k),_})(),(()=>{var _=J();return t(_,i(ht,{get list(){return G("M023009")?.usersListSSG},lbl_empty:"Billed by",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.item?.billedBy},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:k=>v(k?.id),width:"260px"})),_})(),(()=>{var _=J();return t(_,i(ie,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return l()},placeholder:"Tags",colors:"#2b2b2b",handleClick:k=>u(k),onEnter:k=>P()})),_})()]}}),null),t(c,i(f,{get when(){return h()},get children(){var _=et();return t(_,i(le,{get each(){return h()},children:(k,B)=>i($t,{text:k,rmv:y})})),_}}),null),c})()},yt=e=>(()=>{var r=it(),n=r.firstChild,l=n.nextSibling,u=l.firstChild,s=u.nextSibling,a=s.nextSibling,v=a.nextSibling;v.nextSibling;var x=l.nextSibling;return t(n,()=>G("M023009")?.statusObjDesc[e?.item?.statusId]),t(l,()=>we(e?.item?.timeStamp),s),t(l,()=>Ce(e?.item?.timeStamp),v),t(x,()=>e?.item?.userName),r})(),$t=e=>(()=>{var r=rt(),n=r.firstChild,l=n.nextSibling;return t(n,()=>e?.text),l.$$click=()=>e?.rmv(e?.text),t(l,i(S,{name:"Xclose",size:18})),r})(),ft=e=>{const[r,{refetch:n}]=ne(e?.id,async s=>(await _e(e?.idairguide,e?.id,["hbls"]))?.hbls),l=async(s,a)=>{let v=[];r().map(I=>{I.hbl===s&&(I={...I,...a}),v.push(I)});let x={hbls:v};typeof e?.item?.guia=="number"&&(x.guia=e?.item?.guia+""),await H({ssg_track_key:e?.id,idairguide:e?.idairguide},x),n()},u=async s=>{let a=[];r().map(v=>{v.hbl!==s&&a.push(v)}),await H({ssg_track_key:e?.id,idairguide:e?.idairguide},{hbls:a}),n()};return i(j,{get fallback(){return W()},get children(){var s=oe();return t(s,i(le,{get each(){return r()},children:a=>i(kt,{item:a,get bagnumber(){return e?.bagnumber},updHbls:l,rmvHbls:u})})),s}})},xt=2.20462,kt=e=>{const[r,n]=M(0),[l,u]=M(0),[s,a]=M(0),[v,x]=M(0),I=o=>{Pe(o)};re(()=>{e?.item?.pricePerPound&&a(e?.item?.pricePerPound),e?.item?.dutyFee&&x(e?.item?.dutyFee)});const P=(o,_,k)=>{e?.updHbls(e?.item?.hbl,{[o]:_}),k?n(!1):u(!1)},y=()=>{let o=e?.item?.pricePerPound;return o?"$ "+(o*1).toFixed(2):" agregar precio por libra"},h=()=>{let o=e?.item?.dutyFee;return o?"$ "+(o*1).toFixed(2):" agregar aranceles"},c=()=>{e?.rmvHbls(e?.item?.hbl)},m=()=>{let o={};o.id=V(),o.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},o.content=i(De,{get item(){return e?.item},get hbl(){return e?.item?.hbl},get bagnumber(){return e?.bagnumber}}),Q(o)},b=o=>{let _={};_.id=V(),_.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},_.content=i(he,{get val(){return e?.item?.hbl},get item(){return e?.item}}),Q(_)};return(()=>{var o=nt(),_=o.firstChild,k=_.nextSibling,B=k.nextSibling,d=B.nextSibling,$=d.nextSibling,w=$.firstChild,A=$.nextSibling,U=A.nextSibling,p=U.nextSibling,be=p.firstChild,ve=p.nextSibling,se=ve.nextSibling,q=se.nextSibling;return _.$$click=b,t(_,i(S,{name:"qr_code",size:20})),k.$$click=()=>I(e?.item?.hbl),t(k,()=>e?.item?.hbl),t(d,i(S,{name:"weight-kilogram",size:20})),t($,()=>e?.item?.weight,w),t(U,i(S,{name:"weight-pound",size:20})),t(p,()=>(e?.item?.weight*xt).toFixed(2),be),t(se,()=>e?.item?.namegood),t(o,i(f,{get when(){return r()},get fallback(){return["|",(()=>{var C=z();return t(C,i(S,{name:"money",size:20})),C})(),(()=>{var C=lt();return C.$$click=()=>n(!r()),t(C,y),C})()]},get children(){var C=J();return t(C,i(ie,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return s()},placeholder:"Precio por Libra",colors:"#2b2b2b",handleClick:D=>a(D),onEnter:D=>P("pricePerPound",D,1)})),C}}),q),t(o,i(f,{get when(){return l()},get fallback(){return["|",(()=>{var C=at();return C.$$click=()=>u(!l()),t(C,h),C})()]},get children(){var C=J();return t(C,i(ie,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return v()},placeholder:"Aranceles",colors:"#2b2b2b",handleClick:D=>x(D),onEnter:D=>P("dutyFee",D)})),C}}),q),t(o,i(Z,{}),q),q.$$click=m,t(q,i(S,{name:"warehouse",size:20})),t(o,i(f,{get when(){return ae()},get children(){var C=z();return C.$$click=c,t(C,i(S,{name:"outline_delete",size:20})),C}}),null),o})()},wt=e=>{const[r,{refetch:n}]=ne(e?.id,async l=>await _e(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return i(j,{get fallback(){return W()},get children(){var l=st(),u=l.firstChild,s=u.firstChild,a=u.nextSibling,v=a.firstChild;return t(s,()=>r()?.nameshipper),t(v,()=>r()?.shipperInfo?.phoneNumber),l}})},Ct=e=>{const r=()=>G("M023009")?.agencies?.filter(l=>e?.agency===l?.id?.toString())?.[0];return i(j,{get fallback(){return W()},get children(){var n=ct(),l=n.firstChild,u=l.firstChild;return t(u,()=>r()?.label),n}})},St=async e=>{let r={params:e},n=F(809005);return r={...r,...n},(await R(r))?.data},It=async e=>{let r={params:e},n=F(409098);return r={...r,...n},(await R(r))?.data},_e=async(e,r,n)=>{let l={params:{id:r,idairguide:e},fldsQry:n},u=F(802002);l={...l,...u};const s=await R(l);return s?.data?.error?{}:s},Bt=async(e,r)=>{let n={params:{":search0":r,airguide:e}},l=F(815002);n={...n,...l};const u=await R(n);return u?.data?.error?{}:u},Pt=async e=>{if(e.length>4){let r={params:{}};e&&e.split(" ").map((u,s)=>{u&&(r.params[":search"+s]=u.trim())});let n=F(401001);return r={...r,...n},await R(r)}else return{}},H=async(e,r)=>{let n={params:e,data2update:r},l=F(809004);return n={...n,...l},await R(n)},At=e=>{const r=async()=>{let n={consigneeInfo:{cid:e?.item?.cid,firstName:e?.item?.firstName,lastName:e?.item?.lastName,lastName2:e?.item?.lastName2,middleName:e?.item?.middleName,phoneNumber:e?.item?.phoneNumber,ybapt:e?.item?.ybapt,ybbetwen1:e?.item?.ybbetwen1,ybbetwen2:e?.item?.ybbetwen2,ybcity:e?.item?.ybcity,ybestate:e?.item?.ybestate,ybreparto:e?.item?.ybreparto,ybstreet:e?.item?.ybstreet,ybstreetNo:e?.item?.ybstreetNo},city:e?.item?.ybcity,estate:e?.item?.ybestate};await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},n),Ie(e?.modalId)};return(()=>{var n=dt(),l=n.firstChild,u=l.nextSibling;return n.style.setProperty("height","clamp(20vh, 45vh, 80vh)"),n.style.setProperty("overflow","auto"),n.style.setProperty("background","#ffffff"),n.style.setProperty("border-radius","13"),n.style.setProperty("padding","10px 19px"),t(l,i(ot,{get item(){return e?.item},refresh:()=>isOpenDebounced(V())})),t(u,i(mt,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:r})),O(s=>(s=L()?"96vw":"920px")!=null?n.style.setProperty("width",s):n.style.removeProperty("width")),n})()},X=(e,r)=>r?(()=>{var n=ut(),l=n.firstChild,u=l.nextSibling;return t(l," "+e),t(u,r),n})():"",me=e=>(()=>{var r=gt();return t(r,()=>X("Calle",e?.ybstreet),null),t(r,()=>X("#",e?.ybstreetNo),null),t(r,()=>X("E/",e?.ybbetwen1),null),t(r,()=>X("y",e?.ybbetwen2),null),r})();xe(["click"]);export{Gt as default,me as getAddress};
