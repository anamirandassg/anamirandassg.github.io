const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-CAyfbRTf.js","assets/index-DEu1n9fd.js","assets/index-BRlQ52V4.css","assets/SVG-BE2hHXui.js","assets/index-Ci0zXM0r.js","assets/Util-D2YTzGDx.js","assets/ButonHrm-BSeWNUGQ.css","assets/InventoryOut-CVcKbG4C.js","assets/globalSignal-CQa7yuH5.js","assets/DialogHRM-Cz4bVEPc.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-M5amJJ4g.js","assets/DashProducts-BVtoUorj.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/FlexSpace-BmiJQcE8.js","assets/DashInventory-COp6jcNl.js","assets/Toast-DTv7evvX.js","assets/Toast-DLpFKn-Q.css","assets/InputHr-ClArF7O9.js","assets/InputHr-M3rJ9grQ.css","assets/ShowQR-D8dDuS6b.js","assets/ShowQRPrintLabel-GeD929he.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-B3KIQnKW.js","assets/ItemOnConsigner-D77y286v.js","assets/ContainerElasticView-sTUgxT4q.js","assets/ContainerElasticView-LzOd6fDI.css","assets/DropDwnSearch-B257tq3H.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-C5hY0JqG.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as P,_ as B,a as L,m as ue,i as t,d as r,S as _,f as O,t as o,e as _e,n as ne,k as J,j as be,g as ve,w as j,r as G,x as ye,M as U,b as re,F as me,q as oe,y as $e}from"./index-DEu1n9fd.js";import{O as ge,g as q,a as R,p as fe,c as xe,b as Q,f as W}from"./Util-D2YTzGDx.js";import{OpenModal as Z,CloseModal as we}from"./DialogHRM-Cz4bVEPc.js";import ke from"./ContainerElasticView-sTUgxT4q.js";import{i as A}from"./globalSignal-CQa7yuH5.js";import{c as Se}from"./ShowQRPrintLabel-GeD929he.js";import{LookupInventory as Ce}from"./DashInventory-COp6jcNl.js";import"./index-Ci0zXM0r.js";import"./SVG-BE2hHXui.js";/* empty css                             */import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-B3KIQnKW.js";import"./Toast-DTv7evvX.js";import"./App.module-CbHnVtRQ.js";var le=o('<div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>'),Pe=o('<div class="_dsplFlx flxWrp spaceAround "><div class="bottombx centerBx unit "><div class=bag_number><h5></h5></div><h5 style=margin-left:9px>ya esta registrado en el inventario'),Be=o('<div style="margin:15px 0"class=" spaceAround centerBx">'),Ie=o("<div>");const Ae=P(()=>B(()=>import("./ButonHrm-CAyfbRTf.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Ee=P(()=>B(()=>import("./InventoryOut-CVcKbG4C.js"),__vite__mapDeps([7,1,2,8,5,4,9,10,11,12,13,14,15,16,17,18])));function pe(e){const[i,a]=L(null),c=async()=>{let s=`${e?.bagnumber} ${e?.hbl}`,n=await Ce(s),h=ge(n);h?.length>0&&a(n[h?.[0]])};ue(()=>{c()});const u=()=>{let s=q(),n={};n.id=s,n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},n.content=r(Ee,{modalId:s,get bagnumber(){return e?.bagnumber},get hbl(){return e?.hbl}}),Z(n)};return(()=>{var s=Ie();return s.style.setProperty("height","clamp(60vh, 70vh, 80vh)"),s.style.setProperty("overflow","auto"),s.style.setProperty("background","#fff"),s.style.setProperty("border-radius","13"),t(s,r(_,{get when(){return i()?.invoice},get children(){return[(()=>{var n=le(),h=n.firstChild,y=h.firstChild;return n.style.setProperty("padding","16px"),t(y,()=>i()?.invoice),n})(),(()=>{var n=Pe(),h=n.firstChild,y=h.firstChild,p=y.firstChild;return n.style.setProperty("padding","16px"),t(p,()=>e?.hbl),n})()]}}),null),t(s,r(_,{get when(){return!i()?.invoice},get children(){return[(()=>{var n=le(),h=n.firstChild,y=h.firstChild;return n.style.setProperty("padding","16px"),t(y,()=>e?.bagnumber),n})(),(()=>{var n=Be();return t(n,r(Ae,{color:"#c8193c",icon:"send",label:"Enviar al Inventario",handleClick:u})),n})()]}}),null),O(n=>(n=A()?"96vw":"420px")!=null?s.style.setProperty("width",n):s.style.removeProperty("width")),s})()}var Ne=o("<img width=48 height=24 class=picture-profile alt=ssg decoding=async>"),H=o('<div class="icon_status centerBx">'),Me=o("<div class=guide_number><h5>"),De=o('<div class=" tr_bar_10 _dsplFlx">'),ae=o("<div class=bag_number><h5>"),He=o("<div class=bottombx><h5>"),Le=o("<div><div>"),Oe=o('<p class="tr_bar_30 textleft fullName_consigne">'),Te=o("<div style=margin-right:4vw>"),ze=o('<h4 class="tr_bar_20 textleft">'),Ve=o("<div class=centerBx><div>"),Fe=o("<p>"),Re=o("<div class=separator> "),qe=o('<div class=bottombx bottombx><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum"></h4><p class="textleft ">'),Ge=o('<div class="centerBx bottombx"style=margin-top:10px;><h5>is SSG'),Qe=o('<div class="centerBx bottombx"style=margin-top:10px;><h5>is Paid'),te=o("<div style=padding:4px>"),We=o('<div><div class="_dsplFlx topbx centerBx"></div><div class="centerBx bottombx"><div class="centerBx bottombx flxWrp"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4></h4></div></div><div class="centerBx bottombx flxWrp">'),Ye=o('<ul class=inline><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Movimientos</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">HBLS</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Embarcador</span></div></li><li><div class=" centerBx"><div class="icon_status centerBx"></div><span class="icon_status centerBx">Agency'),je=o("<div class=tab>"),Y=o("<div class=loader>Loading..."),he=o("<div>"),Ue=o('<div class="centerBx bottombx"><h4 class=""></h4><h5>el <!> a las <!> por</h5><h4 class="">'),Ke=o('<div class="centerBx bottombx"><h4 class=""></h4>|<div class="icon_status centerBx"></div><h5> KG</h5>|<div class="icon_status centerBx"></div><h5> LB</h5>|<h4 class=""></h4><div class="icon_status centerBx">'),Xe=o("<h5>"),Ze=o("<h4>"),Je=o("<div class=bottombx><div><h4></h4></div><div><h5>"),et=o("<div class=bottombx><div><h4>"),tt=o('<div><div style=max-height:220px></div><div class="centerBx flxWrp spaceAround ">'),rt=o('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),it=o('<div class="centerBx flxWrp">');const X=P(()=>B(()=>import("./FlexSpace-BmiJQcE8.js"),__vite__mapDeps([15,1,2]))),k=P(()=>B(()=>import("./SVG-BE2hHXui.js"),__vite__mapDeps([3,1,2,4]))),nt=P(()=>B(()=>import("./ButonHrm-CAyfbRTf.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),se=P(()=>B(()=>import("./InputHr-ClArF7O9.js"),__vite__mapDeps([19,1,2,20]))),lt=P(()=>B(()=>import("./ShowQR-D8dDuS6b.js"),__vite__mapDeps([21,1,2,8,22,23,4,24,25,26,5,17,18]))),at=P(()=>B(()=>import("./ItemOnConsigner-D77y286v.js"),__vite__mapDeps([27,1,2,5,4,9,10,28,3,29,8,23,24,25,17,18,0,6]))),st=P(()=>B(()=>import("./DropDwnSearch-B257tq3H.js"),__vite__mapDeps([30,1,2,11,3,4,31]))),ce=P(()=>B(()=>import("./CheckBoxSlide-C5hY0JqG.js"),__vite__mapDeps([32,1,2,33])));let ee={YABA_99:"check_circle"};function Lt(e){const[i,a]=L(0),c=m=>m?" "+m:"",u=()=>{let m=e?.item?.consigneeInfo;return c(m?.firstName)+c(m?.middleName)+c(m?.lastName)+c(m?.lastName2)},s=()=>{let m=e?.item?.consigneeInfo,l=c(m?.altPhoneNumber);return c(m?.phoneNumber)+(l?" |"+l:"")},n=()=>{let m=e?.item?.statusHistory||[];if(e?.item?.statusHistory){let l=m.reduce((b,$)=>Math.min(b,$.timeStamp),1/0);return Math.floor((new Date().getTime()-l)/864e5)}else return null},h=async()=>{let l={ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"};e?.item?.bagnumber&&await vt({id:e?.item?.bagnumber}),e?.item?.hbls?.map(async b=>{}),await bt(l),e?.refresh()},y=m=>{let l="";if(m)l=m,m.indexOf("/")>0&&(l=e?.item?.hblS.split("/")?.[2]);else if(e?.item?.hblS){let $=e?.item?.hblS;l=`${e?.item?.idairguide}/${e?.item?.cidentity}/${$}`}let b={};b.id=q(),b.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},b.content=r(lt,{val:l,get item(){return e?.item}}),Z(b)},p=async m=>{let l=await yt(e?.item?.cidentity),b=ge(l)?.[0],$=q(),S={};S.id=$,S.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},S.content=r($t,{get item(){return l?.[b]},get it(){return e?.item},modalId:$}),Z(S)},C=m=>{let l=m,b="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const $=new RegExp(b);return l.length===13&&$.test(l)&&(l=l.slice(3,12)),l},V=async m=>{await z({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{isSSG:m?"1":null})},F=async m=>{await z({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{isPaid:m?"isPaid":null})},E=async m=>{await z({ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"},{billedBy:m})};return r(_,{get when(){return e?.item?.cidentity},get children(){var m=We(),l=m.firstChild,b=l.nextSibling,$=b.firstChild,S=$.firstChild,x=S.nextSibling,N=x.nextSibling,T=N.nextSibling,M=T.nextSibling,I=b.nextSibling;return t(l,r(_,{get when(){return e?.item?.cidentity},get children(){return[(()=>{var d=De();return t(d,r(_,{get when(){return e?.item?.isSSG},get children(){var g=Ne();return O(()=>ne(g,"src",R("SSG.webp"))),g}}),null),t(d,r(_,{get when(){return ee[e?.item?.currentStatus]},get children(){var g=H();return g.$$click=()=>a(!i()),t(g,r(k,{get name(){return ee?.[e?.item?.currentStatus]},size:32,color:"var(--hrm-palette-tertiary60)"})),g}}),null),t(d,r(_,{get when(){return e?.item?.isPaid},get children(){var g=H();return t(g,r(k,{name:"money_outline",size:32})),g}}),null),t(d,r(_,{get when(){return!ee[e?.item?.currentStatus]},get children(){var g=H();return g.$$click=()=>a(!i()),t(g,r(k,{get name(){return R("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),g}}),null),t(d,r(_,{get when(){return n()},get children(){var g=Me(),f=g.firstChild;return t(f,n),g}}),null),d})(),r(_,{get when(){return A()},get children(){return[r(X,{}),(()=>{var d=Le(),g=d.firstChild;return t(g,r(_,{get when(){return e?.item?.bagnumber},get children(){var f=ae(),w=f.firstChild;return f.$$click=()=>y(e?.item?.bagnumber),t(w,()=>e?.item?.bagnumber),f}})),t(d,r(_,{get when(){return e?.item?.tracking},get children(){var f=He(),w=f.firstChild;return f.$$click=()=>y(C(e?.item?.tracking)),t(w,()=>C(e?.item?.tracking)),f}}),null),d})()]}}),r(_,{get when(){return!A()},get children(){return[(()=>{var d=Oe();return t(d,u),O(()=>ne(d,"data-name",`${e?.item?.cidentity}`)),d})(),Te(),(()=>{var d=ze();return t(d,s),d})()]}})]}}),null),t(l,r(X,{}),null),t(l,r(_,{get when(){return!A()},get children(){var d=Ve(),g=d.firstChild;return t(g,r(_,{get when(){return e?.item?.bagnumber},get children(){var f=ae(),w=f.firstChild;return f.$$click=()=>y(e?.item?.bagnumber),t(w,()=>C(e?.item?.bagnumber)),f}})),d}}),null),t(l,r(_,{get when(){return J?.profile?.isAdmin},get children(){var d=H();return d.$$click=p,t(d,r(k,{name:"home",size:24})),d}}),null),t(l,r(_,{get when(){return!e?.item?.bagnumber||J?.profile?.isAdmin},get children(){var d=H();return d.$$click=h,t(d,r(k,{name:"outline_delete",size:24})),d}}),null),t(b,r(_,{get when(){return!A()&&e?.item?.consigneeInfo?.ybstreet},get children(){var d=Fe();return t(d,()=>de(e?.item?.consigneeInfo)),d}}),$),t(b,r(X,{}),$),t(S,()=>e?.item?.consigneeInfo?.ybreparto),t(N,()=>e?.item?.consigneeInfo?.ybcity),t(M,()=>e?.item?.consigneeInfo?.ybestate),t(m,r(_,{get when(){return A()&&e?.item?.consigneeInfo?.ybcity},get children(){return[Re(),(()=>{var d=qe(),g=d.firstChild,f=g.nextSibling,w=f.nextSibling,v=w.nextSibling;return t(g,u),t(w,s),t(v,()=>de(e?.item?.consigneeInfo)),d})()]}}),I),t(I,r(_,{get when(){return be(()=>!!(i()&&oe()))()&&!A()},get children(){return[(()=>{var d=Ge(),g=d.firstChild;return t(d,r(ce,{get initValue(){return e?.item?.isSSG},updChange:V,color:"var(--background-red-ssg)"}),g),d})(),r(_,{get when(){return J?.profile?.isAdmin},get children(){return[(()=>{var d=Qe(),g=d.firstChild;return t(d,r(ce,{get initValue(){return e?.item?.isPaid},updChange:F,color:"var(--background-red-ssg)"}),g),d})(),(()=>{var d=te();return t(d,r(st,{get list(){return R("M023009")?.usersListSSG},lbl_empty:"Billed by",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.item?.billedBy},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:g=>E(g?.id),width:"260px"})),d})()]}})]}})),t(m,r(ct,{get item(){return e?.item}}),null),O(()=>ve(m,`client_item_box gWXAaj jlytmu ${A()?"isMobile":""}`)),m}})}const ct=e=>{const[i,a]=L(0),[c,u]=$e(),s=n=>()=>u(()=>a(n));return r(ke,{get children(){return[(()=>{var n=Ye(),h=n.firstChild,y=h.firstChild,p=y.firstChild,C=h.nextSibling,V=C.firstChild,F=V.firstChild,E=C.nextSibling,m=E.firstChild,l=m.firstChild,b=E.nextSibling,$=b.firstChild,S=$.firstChild;return j(h,"click",s(1),!0),t(p,r(k,{name:"list_dot",size:24})),j(C,"click",s(2),!0),t(F,r(k,{name:"receipt",size:24})),j(E,"click",s(3),!0),t(l,r(k,{name:"send",size:24})),j(b,"click",s(4),!0),t(S,r(k,{name:"store",size:24})),O(x=>{var N=i()===1,T=i()===2,M=i()===3,I=i()===4;return N!==x.e&&h.classList.toggle("selected",x.e=N),T!==x.t&&C.classList.toggle("selected",x.t=T),M!==x.a&&E.classList.toggle("selected",x.a=M),I!==x.o&&b.classList.toggle("selected",x.o=I),x},{e:void 0,t:void 0,a:void 0,o:void 0}),n})(),(()=>{var n=je();return t(n,r(G,{get fallback(){return Y()},get children(){return r(ye,{get children(){return[r(U,{get when(){return i()===1},get children(){return r(_,{get when(){return i()===1},get children(){return r(dt,{index:1,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key},get currentStatus(){return e?.item?.currentStatus}})}})}}),r(U,{get when(){return i()===2},get children(){return r(_,{get when(){return i()===2},get children(){return r(mt,{index:2,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key},get bagnumber(){return e?.item?.bagnumber}})}})}}),r(U,{get when(){return i()===3},get children(){return r(_,{get when(){return i()===3},get children(){return r(ht,{index:3,get idairguide(){return e?.item?.idairguide},get id(){return e?.item?.ssg_track_key}})}})}}),r(U,{get when(){return i()===4},get children(){return r(_,{get when(){return i()===4},get children(){return r(_t,{index:4,get agency(){return e?.item?.agency},get id(){return e?.item?.ssg_track_key}})}})}})]}})}})),O(()=>n.classList.toggle("pending",!!c())),n})()]}})},dt=e=>{const[i,{refetch:a}]=re(e?.id,async c=>{const u=await ie(e?.idairguide,e?.id,["statusHistory","deliveryUserName","deliveryTime"]);let s=u?.statusHistory;if(u?.deliveryTime){let n={statusId:e?.currentStatus,timeStamp:u?.deliveryTime,userName:u?.deliveryUserName};s.push(n)}return s});return r(G,{get fallback(){return Y()},get children(){var c=he();return t(c,r(me,{get each(){return i()},children:u=>r(ut,{item:u})})),c}})},ut=e=>(()=>{var i=Ue(),a=i.firstChild,c=a.nextSibling,u=c.firstChild,s=u.nextSibling,n=s.nextSibling,h=n.nextSibling;h.nextSibling;var y=c.nextSibling;return t(a,()=>R("M023009")?.statusObjDesc[e?.item?.statusId]),t(c,()=>fe(e?.item?.timeStamp),s),t(c,()=>xe(e?.item?.timeStamp),h),t(y,()=>e?.item?.userName),i})(),mt=e=>{const[i,{refetch:a}]=re(e?.id,async s=>(await ie(e?.idairguide,e?.id,["hbls"]))?.hbls),c=async(s,n)=>{let h=[];i().map(y=>{y.hbl===s&&(y={...y,...n}),h.push(y)}),await z({ssg_track_key:e?.id,idairguide:"all"},{hbls:h}),a()},u=async s=>{let n=[];i().map(h=>{h.hbl!==s&&n.push(h)}),await z({ssg_track_key:e?.id,idairguide:"all"},{hbls:n}),a()};return r(G,{get fallback(){return Y()},get children(){var s=he();return t(s,r(me,{get each(){return i()},children:n=>r(gt,{item:n,get bagnumber(){return e?.bagnumber},updHbls:c,rmvHbls:u})})),s}})},ot=2.20462,gt=e=>{const[i,a]=L(0),[c,u]=L(0),[s,n]=L(0),[h,y]=L(0),p=l=>{Se(l)};ue(()=>{e?.item?.pricePerPound&&n(e?.item?.pricePerPound),e?.item?.dutyFee&&y(e?.item?.dutyFee)});const C=(l,b,$)=>{e?.updHbls(e?.item?.hbl,{[l]:b}),$?a(!1):u(!1)},V=()=>{let l=e?.item?.pricePerPound;return l?"$ "+(l*1).toFixed(2):" agregar precio por libra"},F=()=>{let l=e?.item?.dutyFee;return l?"$ "+(l*1).toFixed(2):" agregar aranceles"},E=()=>{e?.rmvHbls(e?.item?.hbl)},m=()=>{let l={};l.id=q(),l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=r(pe,{get item(){return e?.item},get hbl(){return e?.item?.hbl},get bagnumber(){return e?.bagnumber}}),Z(l)};return(()=>{var l=Ke(),b=l.firstChild,$=b.nextSibling,S=$.nextSibling,x=S.nextSibling,N=x.firstChild,T=x.nextSibling,M=T.nextSibling,I=M.nextSibling,d=I.firstChild,g=I.nextSibling,f=g.nextSibling,w=f.nextSibling;return b.$$click=()=>p(e?.item?.hbl),t(b,()=>e?.item?.hbl),t(S,r(k,{name:"weight-kilogram",size:20})),t(x,()=>e?.item?.weight,N),t(M,r(k,{name:"weight-pound",size:20})),t(I,()=>(e?.item?.weight*ot).toFixed(2),d),t(f,()=>e?.item?.namegood),t(l,r(_,{get when(){return i()},get fallback(){return["|",(()=>{var v=H();return t(v,r(k,{name:"money",size:20})),v})(),(()=>{var v=Xe();return v.$$click=()=>a(!i()),t(v,V),v})()]},get children(){var v=te();return t(v,r(se,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return s()},placeholder:"Precio por Libra",colors:"#2b2b2b",handleClick:D=>n(D),onEnter:D=>C("pricePerPound",D,1)})),v}}),w),t(l,r(_,{get when(){return c()},get fallback(){return["|",(()=>{var v=Ze();return v.$$click=()=>u(!c()),t(v,F),v})()]},get children(){var v=te();return t(v,r(se,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",type:"number",borderActiveColor:"var(--background-red-ssg)",get value(){return h()},placeholder:"Aranceles",colors:"#2b2b2b",handleClick:D=>y(D),onEnter:D=>C("dutyFee",D)})),v}}),w),t(l,r(X,{}),w),w.$$click=m,t(w,r(k,{name:"warehouse",size:20})),t(l,r(_,{get when(){return oe()},get children(){var v=H();return v.$$click=E,t(v,r(k,{name:"outline_delete",size:20})),v}}),null),l})()},ht=e=>{const[i,{refetch:a}]=re(e?.id,async c=>await ie(e?.idairguide,e?.id,["nameshipper","shipperInfo:phoneNumber"]));return r(G,{get fallback(){return Y()},get children(){var c=Je(),u=c.firstChild,s=u.firstChild,n=u.nextSibling,h=n.firstChild;return t(s,()=>i()?.nameshipper),t(h,()=>i()?.shipperInfo?.phoneNumber),c}})},_t=e=>{const i=()=>R("M023009")?.agencies?.filter(c=>e?.agency===c?.id?.toString())?.[0];return r(G,{get fallback(){return Y()},get children(){var a=et(),c=a.firstChild,u=c.firstChild;return t(u,()=>i()?.label),a}})},bt=async e=>{let i={params:e},a=Q(809005);return i={...i,...a},(await W(i))?.data},vt=async e=>{let i={params:e},a=Q(409098);return i={...i,...a},(await W(i))?.data},ie=async(e,i,a)=>{let c={params:{id:i,idairguide:"all"},fldsQry:a},u=Q(802002);c={...c,...u};const s=await W(c);return s?.data?.error?{}:s},yt=async e=>{if(e.length>4){let i={params:{}};e&&e.split(" ").map((u,s)=>{u&&(i.params[":search"+s]=u.trim())});let a=Q(401001);return i={...i,...a},await W(i)}else return{}},z=async(e,i)=>{let a={params:e,data2update:i},c=Q(809004);return a={...a,...c},await W(a)},$t=e=>{const i=async()=>{let a={consigneeInfo:{cid:e?.item?.cid,firstName:e?.item?.firstName,lastName:e?.item?.lastName,lastName2:e?.item?.lastName2,middleName:e?.item?.middleName,phoneNumber:e?.item?.phoneNumber,ybapt:e?.item?.ybapt,ybbetwen1:e?.item?.ybbetwen1,ybbetwen2:e?.item?.ybbetwen2,ybcity:e?.item?.ybcity,ybestate:e?.item?.ybestate,ybreparto:e?.item?.ybreparto,ybstreet:e?.item?.ybstreet,ybstreetNo:e?.item?.ybstreetNo},city:e?.item?.ybcity,estate:e?.item?.ybestate};await z({ssg_track_key:e?.it?.ssg_track_key,idairguide:"all"},a),we(e?.modalId)};return(()=>{var a=tt(),c=a.firstChild,u=c.nextSibling;return a.style.setProperty("height","clamp(20vh, 45vh, 80vh)"),a.style.setProperty("overflow","auto"),a.style.setProperty("background","#ffffff"),a.style.setProperty("border-radius","13"),a.style.setProperty("padding","10px 19px"),t(c,r(at,{get item(){return e?.item},refresh:()=>isOpenDebounced(q())})),t(u,r(nt,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:i})),O(s=>(s=A()?"96vw":"920px")!=null?a.style.setProperty("width",s):a.style.removeProperty("width")),a})()},K=(e,i)=>i?(()=>{var a=rt(),c=a.firstChild,u=c.nextSibling;return t(c," "+e),t(u,i),a})():"",de=e=>(()=>{var i=it();return t(i,()=>K("Calle",e?.ybstreet),null),t(i,()=>K("#",e?.ybstreetNo),null),t(i,()=>K("E/",e?.ybbetwen1),null),t(i,()=>K("y",e?.ybbetwen2),null),i})();_e(["click"]);export{Lt as default,de as getAddress};
