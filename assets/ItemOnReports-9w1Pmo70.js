const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-DBbqFrad.js","assets/index-BXk4djaH.js","assets/index-BmzAZVve.css","assets/SVG-9G4wpA9m.js","assets/Util-ZZYG9kF2.js","assets/ButonHrm-BSeWNUGQ.css","assets/InventoryOut-DixmVfAm.js","assets/DialogHRM-PW5MDw4F.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BkvUtFaP.js","assets/DashProducts-CpxGqbME.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-BQZCrK97.js","assets/DashInventory-D9TD2Afj.js","assets/Toast-CQGOdk3V.js","assets/Toast-DLpFKn-Q.css","assets/AddInventory-CCmY7CpM.js","assets/InputHr-DEWKJB1O.js","assets/InputHr-M3rJ9grQ.css","assets/ShowQR-DqO0Xipe.js","assets/ShowQRPrintLabel-DUeA2Wk3.js","assets/PDFButton-BPwQOm6a.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-j4QB5RW3.js","assets/InitPrintServices-D3KYFGNf.js","assets/ItemOnConsigner-DmoY6rZx.js","assets/ContainerElasticView-BOkUVupW.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ShowRemmitance-CGRe3eeM.js","assets/DropDwnSearch-2DG-zejX.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-_tE90ARs.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as E,_ as T,a as M,n as re,i as t,d as i,S as f,e as O,g as N,t as m,q as de,m as ue,k as ye,f as $e,y as U,w as q,z as fe,M as Y,b as ne,F as le,v as ae,h as xe,A as ke}from"./index-BXk4djaH.js";import{O as L,g as V,a as R,p as we,c as Se,b as Q,f as W}from"./Util-ZZYG9kF2.js";import{OpenModal as G,CloseModal as Ce}from"./DialogHRM-PW5MDw4F.js";import Ie from"./ContainerElasticView-BOkUVupW.js";import{c as Be}from"./ShowQRPrintLabel-DUeA2Wk3.js";import{LookupInventory as Pe}from"./DashInventory-D9TD2Afj.js";import{OpenToast as Ae}from"./Toast-CQGOdk3V.js";import"./SVG-9G4wpA9m.js";/* empty css                             */import"./PDFButton-BPwQOm6a.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-j4QB5RW3.js";import"./InitPrintServices-D3KYFGNf.js";import"./App.module-CbHnVtRQ.js";var me=m('<div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>'),Ee=m('<div class="_dsplFlx flxWrp spaceAround "><div class="bottombx centerBx unit "><div class=bag_number><h5></h5></div><h5 style=margin-left:9px>ya esta registrado en el inventario'),Te=m('<div style="margin:15px 0"class=" spaceAround centerBx">'),Ne=m("<div>");const Me=E(()=>T(()=>import("./ButonHrm-DBbqFrad.js"),__vite__mapDeps([0,1,2,3,4,5]))),Le=E(()=>T(()=>import("./InventoryOut-DixmVfAm.js"),__vite__mapDeps([6,1,2,4,7,8,9,10,11,12,13,14,15,16,17])));function He(e){const[r,l]=M(null),a=async()=>{let s=`${e?.bagnumber} ${e?.hbl}`,n=await Pe(s),y=L(n);y?.length>0&&l(n[y?.[0]])};re(()=>{a()});const u=()=>{let s=V(),n={};n.id=s,n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=i(Le,{modalId:s,get bagnumber(){return e?.bagnumber},get hbl(){return e?.hbl}}),G(n)};return(()=>{var s=Ne();return s.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),s.style.setProperty("overflow","auto"),s.style.setProperty("background","#fff"),s.style.setProperty("border-radius","13"),t(s,i(f,{get when(){return r()?.invoice},get children(){return[(()=>{var n=me(),y=n.firstChild,x=y.firstChild;return n.style.setProperty("padding","16px"),t(x,()=>r()?.invoice),n})(),(()=>{var n=Ee(),y=n.firstChild,x=y.firstChild,I=x.firstChild;return n.style.setProperty("padding","16px"),t(I,()=>e?.hbl),n})()]}}),null),t(s,i(f,{get when(){return!r()?.invoice},get children(){return[(()=>{var n=me(),y=n.firstChild,x=y.firstChild;return n.style.setProperty("padding","16px"),t(x,()=>e?.bagnumber),n})(),(()=>{var n=Te();return t(n,i(Me,{color:"#c8193c",icon:"send",label:"Enviar al Inventario",handleClick:u})),n})()]}}),null),O(n=>(n=N()?"96vw":"420px")!=null?s.style.setProperty("width",n):s.style.removeProperty("width")),s})()}var De=m("<img width=48 height=24 class=picture-profile alt=ssg decoding=async>"),z=m('<div class="icon_status centerBx">'),ze=m("<div class=guide_number><h5>"),Oe=m('<div class=" tr_bar_10 _dsplFlx">'),ge=m("<div class=bag_number><h5>"),Ve=m("<div class=bottombx><h5>"),Fe=m("<div><div>"),Re=m('<p class="tr_bar_30 textleft fullName_consigne">'),Ge=m("<div style=margin-right:4vw>"),qe=m('<h4 class="tr_bar_20 textleft">'),Qe=m("<div class=centerBx><div>"),We=m("<p>"),je=m("<div class=separator> "),pe=m('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),Ue=m('<div><div class="_dsplFlx topbx centerBx"></div><div class="centerBx bottombx"><div class="centerBx bottombx flxWrp"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),Ye=m('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Agency'),Ke=m("<div class=tab>"),j=m("<div class=loader>Loading..."),he=m("<div>"),Xe=m('<div class="centerBx bottombx"style=margin-top:10px;><h5>is Paid'),Ze=m('<div class="centerBx bottombx"style=margin-top:10px;><h5>is LMH'),Z=m("<div style=padding:4px>"),Je=m('<div class="centerBx bottombx flxWrp">'),et=m('<div><div class="centerBx bottombx flxWrp"><div class="centerBx bottombx"style=margin-top:10px;><h5>is SSG'),tt=m('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),it=m('<div class="centerBx bag_number"><h5 class=""></h5><div class="icon_status centerBx">'),rt=m('<div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4>|<div class="icon_status centerBx"></div><h5> KG</h5>|<div class="icon_status centerBx"></div><h5> LB</h5>|<h4 class=""></h4><div class="icon_status centerBx">'),nt=m("<h5>"),lt=m("<h4>"),at=m("<div class=bottombx><div><h4></h4></div><div><h5>"),st=m("<div class=bottombx><div><h4>"),ct=m('<div><div style=max-height:220px></div><div class="centerBx flxWrp spaceAround ">'),dt=m('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),ut=m('<div class="centerBx flxWrp">');const X=E(()=>T(()=>import("./FlexSpace-BQZCrK97.js"),__vite__mapDeps([13,1,2]))),C=E(()=>T(()=>import("./SVG-9G4wpA9m.js"),__vite__mapDeps([3,1,2]))),mt=E(()=>T(()=>import("./ButonHrm-DBbqFrad.js"),__vite__mapDeps([0,1,2,3,4,5]))),ie=E(()=>T(()=>import("./InputHr-DEWKJB1O.js"),__vite__mapDeps([18,1,2,19]))),_e=E(()=>T(()=>import("./ShowQR-DqO0Xipe.js"),__vite__mapDeps([20,1,2,21,22,23,24,25,4,15,16]))),gt=E(()=>T(()=>import("./ItemOnConsigner-DmoY6rZx.js"),__vite__mapDeps([26,1,2,4,7,8,27,3,28,22,23,24,15,16,0,5,29,21,25]))),ot=E(()=>T(()=>import("./DropDwnSearch-2DG-zejX.js"),__vite__mapDeps([30,1,2,9,3,31]))),ee=E(()=>T(()=>import("./CheckBoxSlide-_tE90ARs.js"),__vite__mapDeps([32,1,2,33])));let te={YABA_99:"check_circle"};function Gt(e){const[r,l]=M(0),a=_=>_?" "+_:"",u=()=>{let _=e?.item?.consigneeInfo;return a(_?.firstName)+a(_?.middleName)+a(_?.lastName)+a(_?.lastName2)},s=()=>{let _=e?.item?.consigneeInfo,o=a(_?.altPhoneNumber);return a(_?.phoneNumber)+(o?" |"+o:"")},n=()=>{let _=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let o=_.reduce((c,g)=>Math.min(c,g.timeStamp),1/0);return Math.floor((new Date().getTime()-o)/864e5)}else return null},y=async()=>{let o={ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"};e?.item?.bagnumber&&await Ct({id:e?.item?.bagnumber}),e?.item?.hbls?.map(async c=>{}),await St(o),e?.refresh()},x=_=>{let o="";if(_)o=_,_.indexOf("/")>0&&(o=e?.item?.hblS.split("/")?.[2]);else if(e?.item?.hblS){let g=e?.item?.hblS;o=`${e?.item?.idairguide}/${e?.item?.cidentity}/${g}`}let c={};c.id=V(),c.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},c.content=i(_e,{val:o,get item(){return e?.item}}),G(c)},I=async _=>{let o=await It(e?.item?.cidentity),c=L(o)?.[0],g=V(),v={};v.id=g,v.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},v.content=i(Bt,{get item(){return o?.[c]},get it(){return e?.item},modalId:g}),G(v)},P=_=>{let o=_,c="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const g=new RegExp(c);return o.length===13&&g.test(o)&&(o=o.slice(3,12)),o};return i(f,{get when(){return e?.item?.cidentity},get children(){var _=Ue(),o=_.firstChild,c=o.nextSibling,g=c.firstChild,v=g.firstChild,h=v.nextSibling,b=h.nextSibling,k=b.nextSibling,B=k.nextSibling;return t(o,i(f,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var d=Oe();return t(d,i(f,{get when(){return e?.item?.isSSG},get children(){var $=De();return O(()=>de($,"src",R("SSG.webp"))),$}}),null),t(d,i(f,{get when(){return te[e?.item?.currentStatus]},get children(){var $=z();return $.$$click=()=>l(!r()),t($,i(C,{get name(){return te?.[e?.item?.currentStatus]},size:32,color:"var(--hrm-palette-tertiary60)"})),$}}),null),t(d,i(f,{get when(){return e?.item?.isPaid},get children(){var $=z();return t($,i(C,{name:"money_outline",size:32})),$}}),null),t(d,i(f,{get when(){return!te[e?.item?.currentStatus]},get children(){var $=z();return $.$$click=()=>l(!r()),t($,i(C,{get name(){return R("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),$}}),null),t(d,i(f,{get when(){return n()},get children(){var $=ze(),w=$.firstChild;return t(w,n),$}}),null),d})(),i(f,{get when(){return N()},get children(){return[i(X,{}),(()=>{var d=Fe(),$=d.firstChild;return t($,i(f,{get when(){return e?.item?.bagnumber},get children(){var w=ge(),A=w.firstChild;return w.$$click=()=>x(e?.item?.bagnumber),t(A,()=>e?.item?.bagnumber),w}})),t(d,i(f,{get when(){return e?.item?.tracking},get children(){var w=Ve(),A=w.firstChild;return w.$$click=()=>x(P(e?.item?.tracking)),t(A,()=>P(e?.item?.tracking)),w}}),null),d})()]}}),i(f,{get when(){return!N()},get children(){return[(()=>{var d=Re();return t(d,u),O(()=>de(d,"data-name",`${e?.item?.cidentity}`)),d})(),Ge(),(()=>{var d=qe();return t(d,s),d})()]}})]}}),null),t(o,i(X,{}),null),t(o,i(f,{get when(){return!N()},get children(){var d=Qe(),$=d.firstChild;return t($,i(f,{get when(){return e?.item?.bagnumber},get children(){var w=ge(),A=w.firstChild;return w.$$click=()=>x(e?.item?.bagnumber),t(A,()=>P(e?.item?.bagnumber)),w}})),d}}),null),t(o,i(f,{get when(){return ue?.profile?.isAdmin},get children(){var d=z();return d.$$click=I,t(d,i(C,{name:"home",size:24})),d}}),null),t(o,i(f,{get when(){return!e?.item?.bagnumber||ue?.profile?.isAdmin},get children(){var d=z();return d.$$click=y,t(d,i(C,{name:"outline_delete",size:24})),d}}),null),t(c,i(f,{get when(){return!N()&&e?.item?.consigneeInfo?.ybstreet},get children(){var d=We();return t(d,()=>oe(e?.item?.consigneeInfo)),d}}),g),t(c,i(X,{}),g),t(v,()=>e?.item?.consigneeInfo?.ybreparto),t(b,()=>e?.item?.consigneeInfo?.ybcity),t(B,()=>e?.item?.consigneeInfo?.ybestate),t(_,i(f,{get when(){return N()&&e?.item?.consigneeInfo?.ybcity},get children(){return[je(),(()=>{var d=pe(),$=d.firstChild,w=$.nextSibling,A=w.nextSibling,p=A.nextSibling;return t($,u),t(A,s),t(p,()=>oe(e?.item?.consigneeInfo)),d})()]}}),null),t(_,i(f,{get when(){return ye(()=>!!(r()&&ae()))()&&!N()},get children(){return i(bt,{get item(){return e?.item},get updItm(){return e?.updItm},get tags(){return e?.item?.noteTag}})}}),null),t(_,i(ht,{get item(){return e?.item}}),null),O(()=>$e(_,`client_item_box gWXAaj jlytmu ${N()?"isMobile":""}`)),_}})}const ht=e=>{const[r,l]=M(0),[a,u]=ke(),s=n=>()=>u(()=>l(n));return i(Ie,{get children(){return[(()=>{var n=Ye(),y=n.firstChild,x=y.firstChild,I=x.firstChild,P=y.nextSibling,_=P.firstChild,o=_.firstChild,c=P.nextSibling,g=c.firstChild,v=g.firstChild,h=c.nextSibling,b=h.firstChild,k=b.firstChild;return U(y,"click",s(1),!0),t(I,i(C,{name:"list_dot",size:24})),U(P,"click",s(2),!0),t(o,i(C,{name:"receipt",size:24})),U(c,"click",s(3),!0),t(v,i(C,{name:"send",size:24})),U(h,"click",s(4),!0),t(k,i(C,{name:"store",size:24})),O(B=>{var d=r()===1,$=r()===2,w=r()===3,A=r()===4;return d!==B.e&&y.classList.toggle("selected",B.e=d),$!==B.t&&P.classList.toggle("selected",B.t=$),w!==B.a&&c.classList.toggle("selected",B.a=w),A!==B.o&&h.classList.toggle("selected",B.o=A),B},{e:void 0,t:void 0,a:void 0,o:void 0}),n})(),(()=>{var n=Ke();return t(n,i(q,{get fallback(){return j()},get children(){return i(fe,{get children(){return[i(Y,{get when(){return r()===1},get children(){return i(f,{get when(){return r()===1},get children(){return i(_t,{index:1,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key},get currentStatus(){return e?.item?.currentStatus}})}})}}),i(Y,{get when(){return r()===2},get children(){return i(f,{get when(){return r()===2},get children(){return i($t,{index:2,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key},get bagnumber(){return e?.item?.bagnumber}})}})}}),i(Y,{get when(){return r()===3},get children(){return i(f,{get when(){return r()===3},get children(){return i(kt,{index:3,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),i(Y,{get when(){return r()===4},get children(){return i(f,{get when(){return r()===4},get children(){return i(wt,{index:4,get agency(){return e?.item?.agency},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),O(()=>n.classList.toggle("pending",!!a())),n})()]}})},_t=e=>{const[r,{refetch:l}]=ne(e?.id,async a=>{const u=await se(e?.idairguide,e?.id,["statusHistory","deliveryUserName","deliveryTime"]);let s=u?.statusHistory;if(u?.deliveryTime){let n={statusId:e?.currentStatus,timeStamp:u?.deliveryTime,userName:u?.deliveryUserName};s.push(n)}return s});return i(q,{get fallback(){return j()},get children(){var a=he();return t(a,i(le,{get each(){return r()},children:u=>i(vt,{item:u})})),a}})},bt=e=>{const[r,l]=M({}),[a,u]=M(""),s=async c=>{let g=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{isSSG:c?"1":null}),v=L(g)?.[0];e?.updItm(e?.item?.ssg_track_key,v,g[v])},n=async c=>{let g=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{isPaid:c?"isPaid":null}),v=L(g)?.[0];e?.updItm(e?.item?.ssg_track_key,v,g[v])},y=async c=>{let g=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{billedBy:c}),v=L(g)?.[0];e?.updItm(e?.item?.ssg_track_key,v,g[v])},x=async c=>{let g=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{isLMH:c?"isLMH":null}),v=L(g)?.[0];e?.updItm(e?.item?.ssg_track_key,v,g[v])},I=async c=>{let g={noteTag:c};typeof e?.item?.guia=="number"&&(g.guia=e?.item?.guia+"");let v=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},g),h=L(v)?.[0];e?.updItm(e?.item?.ssg_track_key,h,v[h]),Ae({text:"Tag Actualizado",timeout:2500,id:V()}),u(""),l(v[h])};re(()=>{typeof e?.item?.noteTag=="object"&&e?.item?.noteTag&&l(e?.item?.noteTag)});const P=()=>{let c={...r()};typeof c!="object"&&(c={}),c[a()]=1,I(c)},_=c=>{let g={...r()};g[c]=void 0,I(g)},o=()=>{let c={...r()};return typeof c!="object"&&(c={}),L(c)};return(()=>{var c=et(),g=c.firstChild,v=g.firstChild,h=v.firstChild;return t(v,i(ee,{get initValue(){return e?.item?.isSSG},updChange:s,color:"var(--background-red-ssg)"}),h),t(g,i(f,{get when(){return ae()},get children(){return[(()=>{var b=Xe(),k=b.firstChild;return t(b,i(ee,{get initValue(){return e?.item?.isPaid},updChange:n,color:"var(--background-red-ssg)"}),k),b})(),(()=>{var b=Ze(),k=b.firstChild;return t(b,i(ee,{get initValue(){return e?.item?.isLMH},updChange:x,color:"var(--background-red-ssg)"}),k),b})(),(()=>{var b=Z();return t(b,i(ot,{get list(){return R("M023009")?.usersListSSG},lbl_empty:"Billed by",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.item?.billedBy},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:k=>y(k?.id),width:"260px"})),b})(),(()=>{var b=Z();return t(b,i(ie,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return a()},placeholder:"Tags",colors:"#2b2b2b",handleClick:k=>u(k),onEnter:k=>P()})),b})()]}}),null),t(c,i(f,{get when(){return o()},get children(){var b=Je();return t(b,i(le,{get each(){return o()},children:(k,B)=>i(yt,{text:k,rmv:_})})),b}}),null),c})()},vt=e=>(()=>{var r=tt(),l=r.firstChild,a=l.nextSibling,u=a.firstChild,s=u.nextSibling,n=s.nextSibling,y=n.nextSibling;y.nextSibling;var x=a.nextSibling;return t(l,()=>R("M023009")?.statusObjDesc[e?.item?.statusId]),t(a,()=>we(e?.item?.timeStamp),s),t(a,()=>Se(e?.item?.timeStamp),y),t(x,()=>e?.item?.userName),r})(),yt=e=>(()=>{var r=it(),l=r.firstChild,a=l.nextSibling;return t(l,()=>e?.text),a.$$click=()=>e?.rmv(e?.text),t(a,i(C,{name:"Xclose",size:18})),r})(),$t=e=>{const[r,{refetch:l}]=ne(e?.id,async s=>(await se(e?.idairguide,e?.id,["hbls"]))?.hbls),a=async(s,n)=>{let y=[];r().map(I=>{I.hbl===s&&(I={...I,...n}),y.push(I)});let x={hbls:y};typeof e?.item?.guia=="number"&&(x.guia=e?.item?.guia+""),await H({ssg_track_key:e?.id,idairguide:"all"},x),l()},u=async s=>{let n=[];r().map(y=>{y.hbl!==s&&n.push(y)}),await H({ssg_track_key:e?.id,idairguide:"all"},{hbls:n}),l()};return i(q,{get fallback(){return j()},get children(){var s=he();return t(s,i(le,{get each(){return r()},children:n=>i(xt,{item:n,get bagnumber(){return e?.bagnumber},updHbls:a,rmvHbls:u})})),s}})},ft=2.20462,xt=e=>{const[r,l]=M(0),[a,u]=M(0),[s,n]=M(0),[y,x]=M(0),I=h=>{Be(h)};re(()=>{e?.item?.pricePerPound&&n(e?.item?.pricePerPound),e?.item?.dutyFee&&x(e?.item?.dutyFee)});const P=(h,b,k)=>{e?.updHbls(e?.item?.hbl,{[h]:b}),k?l(!1):u(!1)},_=()=>{let h=e?.item?.pricePerPound;return h?"$ "+(h*1).toFixed(2):" agregar precio por libra"},o=()=>{let h=e?.item?.dutyFee;return h?"$ "+(h*1).toFixed(2):" agregar aranceles"},c=()=>{e?.rmvHbls(e?.item?.hbl)},g=()=>{let h={};h.id=V(),h.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},h.content=i(He,{get item(){return e?.item},get hbl(){return e?.item?.hbl},get bagnumber(){return e?.bagnumber}}),G(h)},v=h=>{let b={};b.id=V(),b.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},b.content=i(_e,{get val(){return e?.item?.hbl},get item(){return e?.item}}),G(b)};return(()=>{var h=rt(),b=h.firstChild,k=b.nextSibling,B=k.nextSibling,d=B.nextSibling,$=d.nextSibling,w=$.firstChild,A=$.nextSibling,p=A.nextSibling,J=p.nextSibling,be=J.firstChild,ve=J.nextSibling,ce=ve.nextSibling,F=ce.nextSibling;return b.$$click=v,t(b,i(C,{name:"qr_code",size:20})),k.$$click=()=>I(e?.item?.hbl),t(k,()=>e?.item?.hbl),t(d,i(C,{name:"weight-kilogram",size:20})),t($,()=>e?.item?.weight,w),t(p,i(C,{name:"weight-pound",size:20})),t(J,()=>(e?.item?.weight*ft).toFixed(2),be),t(ce,()=>e?.item?.namegood),t(h,i(f,{get when(){return r()},get fallback(){return["|",(()=>{var S=z();return t(S,i(C,{name:"money",size:20})),S})(),(()=>{var S=nt();return S.$$click=()=>l(!r()),t(S,_),S})()]},get children(){var S=Z();return t(S,i(ie,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return s()},placeholder:"Precio por Libra",colors:"#2b2b2b",handleClick:D=>n(D),onEnter:D=>P("pricePerPound",D,1)})),S}}),F),t(h,i(f,{get when(){return a()},get fallback(){return["|",(()=>{var S=lt();return S.$$click=()=>u(!a()),t(S,o),S})()]},get children(){var S=Z();return t(S,i(ie,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return y()},placeholder:"Aranceles",colors:"#2b2b2b",handleClick:D=>x(D),onEnter:D=>P("dutyFee",D)})),S}}),F),t(h,i(X,{}),F),F.$$click=g,t(F,i(C,{name:"warehouse",size:20})),t(h,i(f,{get when(){return ae()},get children(){var S=z();return S.$$click=c,t(S,i(C,{name:"outline_delete",size:20})),S}}),null),h})()},kt=e=>{const[r,{refetch:l}]=ne(e?.id,async a=>await se(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return i(q,{get fallback(){return j()},get children(){var a=at(),u=a.firstChild,s=u.firstChild,n=u.nextSibling,y=n.firstChild;return t(s,()=>r()?.nameshipper),t(y,()=>r()?.shipperInfo?.phoneNumber),a}})},wt=e=>{const r=()=>R("M023009")?.agencies?.filter(a=>e?.agency===a?.id?.toString())?.[0];return i(q,{get fallback(){return j()},get children(){var l=st(),a=l.firstChild,u=a.firstChild;return t(u,()=>r()?.label),l}})},St=async e=>{let r={params:e},l=Q(809005);return r={...r,...l},(await W(r))?.data},Ct=async e=>{let r={params:e},l=Q(409098);return r={...r,...l},(await W(r))?.data},se=async(e,r,l)=>{let a={params:{id:r,idairguide:"all"},fldsQry:l},u=Q(802002);a={...a,...u};const s=await W(a);return s?.data?.error?{}:s},It=async e=>{if(e.length>4){let r={params:{}};e&&e.split(" ").map((u,s)=>{u&&(r.params[":search"+s]=u.trim())});let l=Q(401001);return r={...r,...l},await W(r)}else return{}},H=async(e,r)=>{let l={params:e,data2update:r},a=Q(809004);return l={...l,...a},await W(l)},Bt=e=>{const r=async()=>{let l={consigneeInfo:{cid:e?.item?.cid,firstName:e?.item?.firstName,lastName:e?.item?.lastName,lastName2:e?.item?.lastName2,middleName:e?.item?.middleName,phoneNumber:e?.item?.phoneNumber,ybapt:e?.item?.ybapt,ybbetwen1:e?.item?.ybbetwen1,ybbetwen2:e?.item?.ybbetwen2,ybcity:e?.item?.ybcity,ybestate:e?.item?.ybestate,ybreparto:e?.item?.ybreparto,ybstreet:e?.item?.ybstreet,ybstreetNo:e?.item?.ybstreetNo},city:e?.item?.ybcity,estate:e?.item?.ybestate};await H({ssg_track_key:e?.it?.ssg_track_key,idairguide:"all"},l),Ce(e?.modalId)};return(()=>{var l=ct(),a=l.firstChild,u=a.nextSibling;return l.style.setProperty("height","clamp(20vh, 45vh, 80vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),t(a,i(gt,{get item(){return e?.item},refresh:()=>isOpenDebounced(V())})),t(u,i(mt,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:r})),O(s=>(s=N()?"96vw":"920px")!=null?l.style.setProperty("width",s):l.style.removeProperty("width")),l})()},K=(e,r)=>r?(()=>{var l=dt(),a=l.firstChild,u=a.nextSibling;return t(a," "+e),t(u,r),l})():"",oe=e=>(()=>{var r=ut();return t(r,()=>K("Calle",e?.ybstreet),null),t(r,()=>K("#",e?.ybstreetNo),null),t(r,()=>K("E/",e?.ybbetwen1),null),t(r,()=>K("y",e?.ybbetwen2),null),r})();xe(["click"]);export{Gt as default,oe as getAddress};
