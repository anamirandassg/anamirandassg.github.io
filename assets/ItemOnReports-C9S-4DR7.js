const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-BTqmP-Fh.js","assets/index-Bw9zjTY_.js","assets/index-lCkr9jrN.css","assets/SVG-BaZuCb4a.js","assets/Util-D2O-IqKB.js","assets/ButonHrm-BSeWNUGQ.css","assets/InventoryOut-CHo7QTXR.js","assets/DialogHRM-C941CJHx.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BAQxtSR9.js","assets/DashProducts-DVKQc4Qh.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-DaEmXyNl.js","assets/DashInventory-BWfT6lMo.js","assets/Toast-CacXzZdD.js","assets/Toast-DLpFKn-Q.css","assets/AddInventory-C_e-gJ6y.js","assets/InputHr-CdLCZs0_.js","assets/InputHr-M3rJ9grQ.css","assets/ShowQR-BG-RmlkB.js","assets/ShowQRPrintLabel-3TqYO2zP.js","assets/PDFButton-85Y0gBbC.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-AFz-JHBR.js","assets/InitPrintServices-DgotkDNu.js","assets/ItemOnConsigner-CPg4eZz5.js","assets/ContainerElasticView-BmYmZ_8G.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ShowRemmitance-XVeQ24Mb.js","assets/DropDwnSearch-Dma0ZOpG.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-yBWjUd0b.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as E,_ as T,a as L,n as re,i as t,d as i,S as f,e as O,g as N,t as m,q as de,m as ue,k as ye,f as $e,N as Y,w as q,U as fe,V as K,b as ne,F as le,v as ae,h as xe,W as ke}from"./index-Bw9zjTY_.js";import{O as M,g as V,a as R,p as we,c as Se,b as W,f as Q}from"./Util-D2O-IqKB.js";import{OpenModal as G,CloseModal as Ce}from"./DialogHRM-C941CJHx.js";import Ie from"./ContainerElasticView-BmYmZ_8G.js";import{c as Be}from"./ShowQRPrintLabel-3TqYO2zP.js";import{LookupInventory as Pe}from"./DashInventory-BWfT6lMo.js";import{OpenToast as Ae}from"./Toast-CacXzZdD.js";import"./SVG-BaZuCb4a.js";/* empty css                             */import"./PDFButton-85Y0gBbC.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-AFz-JHBR.js";import"./InitPrintServices-DgotkDNu.js";import"./App.module-CbHnVtRQ.js";var me=m('<div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>'),Ee=m('<div class="_dsplFlx flxWrp spaceAround "><div class="bottombx centerBx unit "><div class=bag_number><h5></h5></div><h5 style=margin-left:9px>ya esta registrado en el inventario'),Te=m('<div style="margin:15px 0"class=" spaceAround centerBx">'),Ne=m("<div>");const Le=E(()=>T(()=>import("./ButonHrm-BTqmP-Fh.js"),__vite__mapDeps([0,1,2,3,4,5]))),Me=E(()=>T(()=>import("./InventoryOut-CHo7QTXR.js"),__vite__mapDeps([6,1,2,4,7,8,9,10,11,12,13,14,15,16,17])));function He(e){const[r,l]=L(null),a=async()=>{let s=`${e?.bagnumber} ${e?.hbl}`,n=await Pe(s),v=M(n);v?.length>0&&l(n[v?.[0]])};re(()=>{a()});const u=()=>{let s=V(),n={};n.id=s,n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=i(Me,{modalId:s,get bagnumber(){return e?.bagnumber},get hbl(){return e?.hbl}}),G(n)};return(()=>{var s=Ne();return s.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),s.style.setProperty("overflow","auto"),s.style.setProperty("background","#fff"),s.style.setProperty("border-radius","13"),t(s,i(f,{get when(){return r()?.invoice},get children(){return[(()=>{var n=me(),v=n.firstChild,x=v.firstChild;return n.style.setProperty("padding","16px"),t(x,()=>r()?.invoice),n})(),(()=>{var n=Ee(),v=n.firstChild,x=v.firstChild,I=x.firstChild;return n.style.setProperty("padding","16px"),t(I,()=>e?.hbl),n})()]}}),null),t(s,i(f,{get when(){return!r()?.invoice},get children(){return[(()=>{var n=me(),v=n.firstChild,x=v.firstChild;return n.style.setProperty("padding","16px"),t(x,()=>e?.bagnumber),n})(),(()=>{var n=Te();return t(n,i(Le,{color:"#c8193c",icon:"send",label:"Enviar al Inventario",handleClick:u})),n})()]}}),null),O(n=>(n=N()?"96vw":"420px")!=null?s.style.setProperty("width",n):s.style.removeProperty("width")),s})()}var De=m("<img width=48 height=24 class=picture-profile alt=ssg decoding=async>"),z=m('<div class="icon_status centerBx">'),ze=m("<div class=guide_number><h5>"),Oe=m('<div class=" tr_bar_10 _dsplFlx">'),ge=m("<div class=bag_number><h5>"),Ve=m("<div class=bottombx><h5>"),Fe=m("<div><div>"),Re=m('<p class="tr_bar_30 textleft fullName_consigne">'),Ge=m("<div style=margin-right:4vw>"),qe=m('<h4 class="tr_bar_20 textleft">'),We=m("<div class=centerBx><div>"),Qe=m("<p>"),Ue=m("<div class=separator> "),je=m('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),Ye=m('<div><div class="_dsplFlx topbx centerBx"></div><div class="centerBx bottombx"><div class="centerBx bottombx flxWrp"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),Ke=m('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Agency'),Xe=m("<div class=tab>"),U=m("<div class=loader>Loading..."),he=m("<div>"),Ze=m('<div class="centerBx bottombx"style=margin-top:10px;><h5>is Paid'),Je=m('<div class="centerBx bottombx"style=margin-top:10px;><h5>is LMH'),J=m("<div style=padding:4px>"),pe=m('<div class="centerBx bottombx flxWrp">'),et=m('<div><div class="centerBx bottombx flxWrp"><div class="centerBx bottombx"style=margin-top:10px;><h5>is SSG'),tt=m('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),it=m('<div class="centerBx bag_number"><h5 class=""></h5><div class="icon_status centerBx">'),rt=m('<div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4>|<div class="icon_status centerBx"></div><h5> KG</h5>|<div class="icon_status centerBx"></div><h5> LB</h5>|<h4 class=""></h4><div class="icon_status centerBx">'),nt=m("<h5>"),lt=m("<h4>"),at=m("<div class=bottombx><div><h4></h4></div><div><h5>"),st=m("<div class=bottombx><div><h4>"),ct=m('<div><div style=max-height:220px></div><div class="centerBx flxWrp spaceAround ">'),dt=m('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),ut=m('<div class="centerBx flxWrp">');const Z=E(()=>T(()=>import("./FlexSpace-DaEmXyNl.js"),__vite__mapDeps([13,1,2]))),C=E(()=>T(()=>import("./SVG-BaZuCb4a.js"),__vite__mapDeps([3,1,2,4]))),mt=E(()=>T(()=>import("./ButonHrm-BTqmP-Fh.js"),__vite__mapDeps([0,1,2,3,4,5]))),ie=E(()=>T(()=>import("./InputHr-CdLCZs0_.js"),__vite__mapDeps([18,1,2,19]))),_e=E(()=>T(()=>import("./ShowQR-BG-RmlkB.js"),__vite__mapDeps([20,1,2,21,22,4,23,24,25,15,16]))),gt=E(()=>T(()=>import("./ItemOnConsigner-CPg4eZz5.js"),__vite__mapDeps([26,1,2,4,7,8,27,3,28,22,23,24,15,16,0,5,29,21,25,13]))),ot=E(()=>T(()=>import("./DropDwnSearch-Dma0ZOpG.js"),__vite__mapDeps([30,1,2,9,3,4,31]))),ee=E(()=>T(()=>import("./CheckBoxSlide-yBWjUd0b.js"),__vite__mapDeps([32,1,2,33])));let te={YABA_99:"check_circle"};function Gt(e){const[r,l]=L(0),a=y=>y?" "+y:"",u=()=>{let y=e?.item?.consigneeInfo;return a(y?.firstName)+a(y?.middleName)+a(y?.lastName)+a(y?.lastName2)},s=()=>{let y=e?.item?.consigneeInfo,h=a(y?.altPhoneNumber);return a(y?.phoneNumber)+(h?" |"+h:"")},n=()=>{let y=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let h=y.reduce((c,g)=>Math.min(c,g.timeStamp),1/0);return Math.floor((new Date().getTime()-h)/864e5)}else return null},v=async()=>{let h={ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia};e?.item?.bagnumber&&await Ct({id:e?.item?.bagnumber}),e?.item?.hbls?.map(async c=>{}),await St(h),e?.refresh()},x=y=>{let h="";e?.item?.hblS&&(h=e?.item?.hblS.split("/")?.[2]);let c={};c.id=V(),c.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},c.content=i(_e,{val:h,get item(){return e?.item}}),G(c)},I=async y=>{let h=await It(e?.item?.cidentity),c=M(h)?.[0],g=V(),b={};b.id=g,b.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},b.content=i(Bt,{get item(){return h?.[c]},get it(){return e?.item},modalId:g}),G(b)},P=y=>{let h=y,c="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const g=new RegExp(c);return h.length===13&&g.test(h)&&(h=h.slice(3,12)),h};return i(f,{get when(){return e?.item?.cidentity},get children(){var y=Ye(),h=y.firstChild,c=h.nextSibling,g=c.firstChild,b=g.firstChild,o=b.nextSibling,_=o.nextSibling,k=_.nextSibling,B=k.nextSibling;return t(h,i(f,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var d=Oe();return t(d,i(f,{get when(){return e?.item?.isSSG},get children(){var $=De();return O(()=>de($,"src",R("SSG.webp"))),$}}),null),t(d,i(f,{get when(){return te[e?.item?.currentStatus]},get children(){var $=z();return $.$$click=()=>l(!r()),t($,i(C,{get name(){return te?.[e?.item?.currentStatus]},size:32,color:"var(--hrm-palette-tertiary60)"})),$}}),null),t(d,i(f,{get when(){return e?.item?.isPaid},get children(){var $=z();return t($,i(C,{name:"money_outline",size:32})),$}}),null),t(d,i(f,{get when(){return!te[e?.item?.currentStatus]},get children(){var $=z();return $.$$click=()=>l(!r()),t($,i(C,{get name(){return R("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),$}}),null),t(d,i(f,{get when(){return n()},get children(){var $=ze(),w=$.firstChild;return t(w,n),$}}),null),d})(),i(f,{get when(){return N()},get children(){return[i(Z,{}),(()=>{var d=Fe(),$=d.firstChild;return t($,i(f,{get when(){return e?.item?.bagnumber},get children(){var w=ge(),A=w.firstChild;return w.$$click=()=>x(e?.item?.bagnumber),t(A,()=>e?.item?.bagnumber),w}})),t(d,i(f,{get when(){return e?.item?.tracking},get children(){var w=Ve(),A=w.firstChild;return w.$$click=()=>x(P(e?.item?.tracking)),t(A,()=>P(e?.item?.tracking)),w}}),null),d})()]}}),i(f,{get when(){return!N()},get children(){return[(()=>{var d=Re();return t(d,u),O(()=>de(d,"data-name",`${e?.item?.cidentity}`)),d})(),Ge(),(()=>{var d=qe();return t(d,s),d})()]}})]}}),null),t(h,i(Z,{}),null),t(h,i(f,{get when(){return!N()},get children(){var d=We(),$=d.firstChild;return t($,i(f,{get when(){return e?.item?.bagnumber},get children(){var w=ge(),A=w.firstChild;return w.$$click=()=>x(e?.item?.bagnumber),t(A,()=>P(e?.item?.bagnumber)),w}})),d}}),null),t(h,i(f,{get when(){return ue?.profile?.isAdmin},get children(){var d=z();return d.$$click=I,t(d,i(C,{name:"home",size:24})),d}}),null),t(h,i(f,{get when(){return!e?.item?.bagnumber||ue?.profile?.isAdmin},get children(){var d=z();return d.$$click=v,t(d,i(C,{name:"outline_delete",size:24})),d}}),null),t(c,i(f,{get when(){return!N()&&e?.item?.consigneeInfo?.ybstreet},get children(){var d=Qe();return t(d,()=>oe(e?.item?.consigneeInfo)),d}}),g),t(c,i(Z,{}),g),t(b,()=>e?.item?.consigneeInfo?.ybreparto),t(_,()=>e?.item?.consigneeInfo?.ybcity),t(B,()=>e?.item?.consigneeInfo?.ybestate),t(y,i(f,{get when(){return N()&&e?.item?.consigneeInfo?.ybcity},get children(){return[Ue(),(()=>{var d=je(),$=d.firstChild,w=$.nextSibling,A=w.nextSibling,j=A.nextSibling;return t($,u),t(A,s),t(j,()=>oe(e?.item?.consigneeInfo)),d})()]}}),null),t(y,i(f,{get when(){return ye(()=>!!(r()&&ae()))()&&!N()},get children(){return i(bt,{get item(){return e?.item},get updItm(){return e?.updItm},get tags(){return e?.item?.noteTag}})}}),null),t(y,i(ht,{get item(){return e?.item}}),null),O(()=>$e(y,`client_item_box gWXAaj jlytmu ${N()?"isMobile":""}`)),y}})}const ht=e=>{const[r,l]=L(0),[a,u]=ke(),s=n=>()=>u(()=>l(n));return i(Ie,{get children(){return[(()=>{var n=Ke(),v=n.firstChild,x=v.firstChild,I=x.firstChild,P=v.nextSibling,y=P.firstChild,h=y.firstChild,c=P.nextSibling,g=c.firstChild,b=g.firstChild,o=c.nextSibling,_=o.firstChild,k=_.firstChild;return Y(v,"click",s(1),!0),t(I,i(C,{name:"list_dot",size:24})),Y(P,"click",s(2),!0),t(h,i(C,{name:"receipt",size:24})),Y(c,"click",s(3),!0),t(b,i(C,{name:"send",size:24})),Y(o,"click",s(4),!0),t(k,i(C,{name:"store",size:24})),O(B=>{var d=r()===1,$=r()===2,w=r()===3,A=r()===4;return d!==B.e&&v.classList.toggle("selected",B.e=d),$!==B.t&&P.classList.toggle("selected",B.t=$),w!==B.a&&c.classList.toggle("selected",B.a=w),A!==B.o&&o.classList.toggle("selected",B.o=A),B},{e:void 0,t:void 0,a:void 0,o:void 0}),n})(),(()=>{var n=Xe();return t(n,i(q,{get fallback(){return U()},get children(){return i(fe,{get children(){return[i(K,{get when(){return r()===1},get children(){return i(f,{get when(){return r()===1},get children(){return i(_t,{index:1,get idairguide(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key},get currentStatus(){return e?.item?.currentStatus}})}})}}),i(K,{get when(){return r()===2},get children(){return i(f,{get when(){return r()===2},get children(){return i($t,{index:2,get idairguide(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key},get bagnumber(){return e?.item?.bagnumber}})}})}}),i(K,{get when(){return r()===3},get children(){return i(f,{get when(){return r()===3},get children(){return i(kt,{index:3,get idairguide(){return e?.item?.guia},get id(){return e?.item?.ssg_track_key}})}})}}),i(K,{get when(){return r()===4},get children(){return i(f,{get when(){return r()===4},get children(){return i(wt,{index:4,get agency(){return e?.item?.agency},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),O(()=>n.classList.toggle("pending",!!a())),n})()]}})},_t=e=>{const[r,{refetch:l}]=ne(e?.id,async a=>{const u=await se(e?.idairguide,e?.id,["statusHistory","deliveryUserName","deliveryTime"]);let s=u?.statusHistory;if(u?.deliveryTime){let n={statusId:e?.currentStatus,timeStamp:u?.deliveryTime,userName:u?.deliveryUserName};s.push(n)}return s});return i(q,{get fallback(){return U()},get children(){var a=he();return t(a,i(le,{get each(){return r()},children:u=>i(vt,{item:u})})),a}})},bt=e=>{const[r,l]=L({}),[a,u]=L(""),s=async c=>{let g=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},{isSSG:c?"1":null}),b=M(g)?.[0];e?.updItm(e?.item?.ssg_track_key,b,g[b])},n=async c=>{let g=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},{isPaid:c?"isPaid":null}),b=M(g)?.[0];e?.updItm(e?.item?.ssg_track_key,b,g[b])},v=async c=>{let g=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},{billedBy:c}),b=M(g)?.[0];e?.updItm(e?.item?.ssg_track_key,b,g[b])},x=async c=>{let g=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},{isLMH:c?"isLMH":null}),b=M(g)?.[0];e?.updItm(e?.item?.ssg_track_key,b,g[b])},I=async c=>{let g={noteTag:c};typeof e?.item?.guia=="number"&&(g.guia=e?.item?.guia+"");let b=await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},g),o=M(b)?.[0];e?.updItm(e?.item?.ssg_track_key,o,b[o]),Ae({text:"Tag Actualizado",timeout:2500,id:V()}),u(""),l(b[o])};re(()=>{typeof e?.item?.noteTag=="object"&&e?.item?.noteTag&&l(e?.item?.noteTag)});const P=()=>{let c={...r()};typeof c!="object"&&(c={}),c[a()]=1,I(c)},y=c=>{let g={...r()};g[c]=void 0,I(g)},h=()=>{let c={...r()};return typeof c!="object"&&(c={}),M(c)};return(()=>{var c=et(),g=c.firstChild,b=g.firstChild,o=b.firstChild;return t(b,i(ee,{get initValue(){return e?.item?.isSSG},updChange:s,color:"var(--background-red-ssg)"}),o),t(g,i(f,{get when(){return ae()},get children(){return[(()=>{var _=Ze(),k=_.firstChild;return t(_,i(ee,{get initValue(){return e?.item?.isPaid},updChange:n,color:"var(--background-red-ssg)"}),k),_})(),(()=>{var _=Je(),k=_.firstChild;return t(_,i(ee,{get initValue(){return e?.item?.isLMH},updChange:x,color:"var(--background-red-ssg)"}),k),_})(),(()=>{var _=J();return t(_,i(ot,{get list(){return R("M023009")?.usersListSSG},lbl_empty:"Billed by",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.item?.billedBy},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:k=>v(k?.id),width:"260px"})),_})(),(()=>{var _=J();return t(_,i(ie,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return a()},placeholder:"Tags",colors:"#2b2b2b",handleClick:k=>u(k),onEnter:k=>P()})),_})()]}}),null),t(c,i(f,{get when(){return h()},get children(){var _=pe();return t(_,i(le,{get each(){return h()},children:(k,B)=>i(yt,{text:k,rmv:y})})),_}}),null),c})()},vt=e=>(()=>{var r=tt(),l=r.firstChild,a=l.nextSibling,u=a.firstChild,s=u.nextSibling,n=s.nextSibling,v=n.nextSibling;v.nextSibling;var x=a.nextSibling;return t(l,()=>R("M023009")?.statusObjDesc[e?.item?.statusId]),t(a,()=>we(e?.item?.timeStamp),s),t(a,()=>Se(e?.item?.timeStamp),v),t(x,()=>e?.item?.userName),r})(),yt=e=>(()=>{var r=it(),l=r.firstChild,a=l.nextSibling;return t(l,()=>e?.text),a.$$click=()=>e?.rmv(e?.text),t(a,i(C,{name:"Xclose",size:18})),r})(),$t=e=>{const[r,{refetch:l}]=ne(e?.id,async s=>(await se(e?.idairguide,e?.id,["hbls"]))?.hbls),a=async(s,n)=>{let v=[];r().map(I=>{I.hbl===s&&(I={...I,...n}),v.push(I)});let x={hbls:v};typeof e?.item?.guia=="number"&&(x.guia=e?.item?.guia+""),await H({ssg_track_key:e?.id,idairguide:e?.item?.guia},x),l()},u=async s=>{let n=[];r().map(v=>{v.hbl!==s&&n.push(v)}),await H({ssg_track_key:e?.id,idairguide:e?.item?.guia},{hbls:n}),l()};return i(q,{get fallback(){return U()},get children(){var s=he();return t(s,i(le,{get each(){return r()},children:n=>i(xt,{item:n,get bagnumber(){return e?.bagnumber},updHbls:a,rmvHbls:u})})),s}})},ft=2.20462,xt=e=>{const[r,l]=L(0),[a,u]=L(0),[s,n]=L(0),[v,x]=L(0),I=o=>{Be(o)};re(()=>{e?.item?.pricePerPound&&n(e?.item?.pricePerPound),e?.item?.dutyFee&&x(e?.item?.dutyFee)});const P=(o,_,k)=>{e?.updHbls(e?.item?.hbl,{[o]:_}),k?l(!1):u(!1)},y=()=>{let o=e?.item?.pricePerPound;return o?"$ "+(o*1).toFixed(2):" agregar precio por libra"},h=()=>{let o=e?.item?.dutyFee;return o?"$ "+(o*1).toFixed(2):" agregar aranceles"},c=()=>{e?.rmvHbls(e?.item?.hbl)},g=()=>{let o={};o.id=V(),o.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},o.content=i(He,{get item(){return e?.item},get hbl(){return e?.item?.hbl},get bagnumber(){return e?.bagnumber}}),G(o)},b=o=>{let _={};_.id=V(),_.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},_.content=i(_e,{get val(){return e?.item?.hbl},get item(){return e?.item}}),G(_)};return(()=>{var o=rt(),_=o.firstChild,k=_.nextSibling,B=k.nextSibling,d=B.nextSibling,$=d.nextSibling,w=$.firstChild,A=$.nextSibling,j=A.nextSibling,p=j.nextSibling,be=p.firstChild,ve=p.nextSibling,ce=ve.nextSibling,F=ce.nextSibling;return _.$$click=b,t(_,i(C,{name:"qr_code",size:20})),k.$$click=()=>I(e?.item?.hbl),t(k,()=>e?.item?.hbl),t(d,i(C,{name:"weight-kilogram",size:20})),t($,()=>e?.item?.weight,w),t(j,i(C,{name:"weight-pound",size:20})),t(p,()=>(e?.item?.weight*ft).toFixed(2),be),t(ce,()=>e?.item?.namegood),t(o,i(f,{get when(){return r()},get fallback(){return["|",(()=>{var S=z();return t(S,i(C,{name:"money",size:20})),S})(),(()=>{var S=nt();return S.$$click=()=>l(!r()),t(S,y),S})()]},get children(){var S=J();return t(S,i(ie,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return s()},placeholder:"Precio por Libra",colors:"#2b2b2b",handleClick:D=>n(D),onEnter:D=>P("pricePerPound",D,1)})),S}}),F),t(o,i(f,{get when(){return a()},get fallback(){return["|",(()=>{var S=lt();return S.$$click=()=>u(!a()),t(S,h),S})()]},get children(){var S=J();return t(S,i(ie,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return v()},placeholder:"Aranceles",colors:"#2b2b2b",handleClick:D=>x(D),onEnter:D=>P("dutyFee",D)})),S}}),F),t(o,i(Z,{}),F),F.$$click=g,t(F,i(C,{name:"warehouse",size:20})),t(o,i(f,{get when(){return ae()},get children(){var S=z();return S.$$click=c,t(S,i(C,{name:"outline_delete",size:20})),S}}),null),o})()},kt=e=>{const[r,{refetch:l}]=ne(e?.id,async a=>await se(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return i(q,{get fallback(){return U()},get children(){var a=at(),u=a.firstChild,s=u.firstChild,n=u.nextSibling,v=n.firstChild;return t(s,()=>r()?.nameshipper),t(v,()=>r()?.shipperInfo?.phoneNumber),a}})},wt=e=>{const r=()=>R("M023009")?.agencies?.filter(a=>e?.agency===a?.id?.toString())?.[0];return i(q,{get fallback(){return U()},get children(){var l=st(),a=l.firstChild,u=a.firstChild;return t(u,()=>r()?.label),l}})},St=async e=>{let r={params:e},l=W(809005);return r={...r,...l},(await Q(r))?.data},Ct=async e=>{let r={params:e},l=W(409098);return r={...r,...l},(await Q(r))?.data},se=async(e,r,l)=>{let a={params:{id:r,idairguide:e},fldsQry:l},u=W(802002);a={...a,...u};const s=await Q(a);return s?.data?.error?{}:s},It=async e=>{if(e.length>4){let r={params:{}};e&&e.split(" ").map((u,s)=>{u&&(r.params[":search"+s]=u.trim())});let l=W(401001);return r={...r,...l},await Q(r)}else return{}},H=async(e,r)=>{let l={params:e,data2update:r},a=W(809004);return l={...l,...a},await Q(l)},Bt=e=>{const r=async()=>{let l={consigneeInfo:{cid:e?.item?.cid,firstName:e?.item?.firstName,lastName:e?.item?.lastName,lastName2:e?.item?.lastName2,middleName:e?.item?.middleName,phoneNumber:e?.item?.phoneNumber,ybapt:e?.item?.ybapt,ybbetwen1:e?.item?.ybbetwen1,ybbetwen2:e?.item?.ybbetwen2,ybcity:e?.item?.ybcity,ybestate:e?.item?.ybestate,ybreparto:e?.item?.ybreparto,ybstreet:e?.item?.ybstreet,ybstreetNo:e?.item?.ybstreetNo},city:e?.item?.ybcity,estate:e?.item?.ybestate};await H({ssg_track_key:e?.item?.ssg_track_key,idairguide:e?.item?.guia},l),Ce(e?.modalId)};return(()=>{var l=ct(),a=l.firstChild,u=a.nextSibling;return l.style.setProperty("height","clamp(20vh, 45vh, 80vh)"),l.style.setProperty("overflow","auto"),l.style.setProperty("background","#ffffff"),l.style.setProperty("border-radius","13"),l.style.setProperty("padding","10px 19px"),t(a,i(gt,{get item(){return e?.item},refresh:()=>isOpenDebounced(V())})),t(u,i(mt,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:r})),O(s=>(s=N()?"96vw":"920px")!=null?l.style.setProperty("width",s):l.style.removeProperty("width")),l})()},X=(e,r)=>r?(()=>{var l=dt(),a=l.firstChild,u=a.nextSibling;return t(a," "+e),t(u,r),l})():"",oe=e=>(()=>{var r=ut();return t(r,()=>X("Calle",e?.ybstreet),null),t(r,()=>X("#",e?.ybstreetNo),null),t(r,()=>X("E/",e?.ybbetwen1),null),t(r,()=>X("y",e?.ybbetwen2),null),r})();xe(["click"]);export{Gt as default,oe as getAddress};
