const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BQZCrK97.js","assets/index-BXk4djaH.js","assets/index-BmzAZVve.css","assets/SVG-9G4wpA9m.js","assets/ShowQR-DqO0Xipe.js","assets/ShowQRPrintLabel-DUeA2Wk3.js","assets/PDFButton-BPwQOm6a.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-j4QB5RW3.js","assets/InitPrintServices-D3KYFGNf.js","assets/Util-ZZYG9kF2.js","assets/Toast-CQGOdk3V.js","assets/Toast-DLpFKn-Q.css","assets/ButonUploadHrm-C_AY12VR.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-DBbqFrad.js","assets/LoadingColorSpinner-jScghAPM.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-2DG-zejX.js","assets/debounces-BkvUtFaP.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as y,_ as x,h as G,a as A,u as te,N as re,n as Y,d as a,i,S as g,k as U,e as k,q as Z,s as K,t as u,m as D,c as ie,b as ae,g as C,x as M,F as le,f as W,B as O}from"./index-BXk4djaH.js";import{t as P,g as S,z as ne,b as X,f as J,a as se}from"./Util-ZZYG9kF2.js";import{OpenModal as ce}from"./DialogHRM-PW5MDw4F.js";import{g as oe}from"./ShowQRPrintLabel-DUeA2Wk3.js";import{setTasks as ue,tasks as de}from"./FindHBL-CRK80cIz.js";/* empty css                             */import{c as me,i as ge,b as _e,u as he,a as ve}from"./handelImagesServices-DWIQTdlt.js";import"./PDFButton-BPwQOm6a.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-j4QB5RW3.js";import"./InitPrintServices-D3KYFGNf.js";import"./Toast-CQGOdk3V.js";import"./InputHr-DEWKJB1O.js";import"./SVG-9G4wpA9m.js";import"./FlexSpace-BQZCrK97.js";import"./browser-image-compression-BVJ4p9S0.js";var be=u('<div class="elastic_view_bx show"><div class=" spaceAround centerBx">'),fe=u("<div><img alt=sf>"),$e=u('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),ye=u("<div>"),xe=u("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen");y(()=>x(()=>import("./FlexSpace-BQZCrK97.js"),__vite__mapDeps([0,1,2])));const we=y(()=>x(()=>import("./SVG-9G4wpA9m.js"),__vite__mapDeps([3,1,2])));y(()=>x(()=>import("./ShowQR-DqO0Xipe.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12])));const pe=y(()=>x(()=>import("./ButonUploadHrm-C_AY12VR.js"),__vite__mapDeps([13,1,2,3,10,14]))),Ie=y(()=>x(()=>import("./ButonHrm-DBbqFrad.js"),__vite__mapDeps([15,1,2,3,10,14]))),Se=y(()=>x(()=>import("./LoadingColorSpinner-jScghAPM.js"),__vite__mapDeps([16,1,2,17])));y(()=>x(()=>import("./DropDwnSearch-2DG-zejX.js"),__vite__mapDeps([18,1,2,19,3,20])));function Ee(e){const[b,c]=A(null),[_,p]=A(!1),[q,E]=A(!1);te(),re(),Y(()=>{});const R=async(n,d)=>{let h=await _e(n.type,d);if(await he(h,n)){let I={deliveryProof:ve()+"/"+d,currentStatus:"YABA_99",deliveryUserId:D?.profile?.userId,deliveryUserName:D?.profile?.name,wasDelivery:"OK",deliveryTime:ne()},V={ssg_track_key:e?.item?.ssg_track_key,idairguide:"all"};await Be(V,I),E(!1),p(!1)}else E(!1)},T=async()=>{E(!0);let n=await me(b()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),d=await ge(n),w=await(await fetch(d)).blob(),I=e?.cid+"/"+S()+S()+".webp";R(w,I)},B=n=>{c(n),p(!0)},L=()=>{c(null),p(!1)};return[a(g,{get when(){return!_()||!b()?.source},get children(){var n=be(),d=n.firstChild;return i(d,a(pe,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:B})),n}}),a(g,{get when(){return U(()=>!!_())()&&b()?.source},get children(){return[(()=>{var n=fe(),d=n.firstChild;return k(()=>Z(d,"src",b()?.source)),n})(),a(g,{get when(){return U(()=>!!_())()&&!q()},get fallback(){return(()=>{var n=xe(),d=n.firstChild;return i(n,a(Se,{stroke:"rgb(200 25 60 / 1)",size:32}),d),n})()},get children(){var n=$e(),d=n.firstChild,h=d.nextSibling,w=h.firstChild;return i(d,a(Ie,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:L})),h.$$click=T,i(w,a(we,{name:"success",size:32,get color(){return P?.success?.svg}})),k(I=>K(h,P?.success,I)),n}}),ye()]}})]}const Be=async(e,b)=>{let c={params:e,data2update:b},_=X(809004);return c={...c,..._},await J(c)};G(["click"]);var Ce=u('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),ke=u('<div class="centerBx bottombx"><h5>'),Ae=u('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),Pe=u('<p class="tr_bar_30 textleft fullName_consigne">'),Re=u("<div style=margin-right:4vw>"),Te=u("<div class=bag_number><h5>"),De=u("<div><div>"),Le=u("<div>"),Ve=u('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),Fe=u('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),Ne=u('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>');const j=y(()=>x(()=>import("./FlexSpace-BQZCrK97.js"),__vite__mapDeps([0,1,2]))),H=y(()=>x(()=>import("./SVG-9G4wpA9m.js"),__vite__mapDeps([3,1,2]))),Me=y(()=>x(()=>import("./ShowQR-DqO0Xipe.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12])));function lt(e){const[b,c]=ie({}),[_,p]=A(""),[q,E]=A(""),[R,T]=A(""),B=r=>r?" "+r:"",L=()=>{let r=e?.item?.consigneeInfo;return B(r?.firstName)+B(r?.middleName)+B(r?.lastName)+B(r?.lastName2)},n=r=>{let l="";if(e?.item?.hblS){let f=e?.item?.hblS;l=`${e?.item?.idairguide}/${e?.item?.cidentity}/${f}`}let s={};s.id=S(),s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=a(Me,{val:l,get item(){return e?.item}}),ce(s)},d=r=>{let l=r,s="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const f=new RegExp(s);return l.length===13&&f.test(l)&&(l=l.slice(3,12)),l},h=(r,l)=>{p(l),E(r),setTimeout(()=>{E("")},300)},w=r=>{T(r),setTimeout(()=>{T("")},3e3)},I=async r=>{let l={timeStamp:new Date().getTime(),latitude:O?.latitude,longitude:O?.longitude,statusId:r,userId:D?.profile?.userId,userName:D?.profile?.name};if(e?.item?.idairguide){let s=e?.item?.statusHistory||[];s.push(l);let f={idairguide:"all",ssg_track_key:e?.item?.ssg_track_key},$=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,F=e?.item?.city||e?.item?.consigneeInfo?.ybcity,N={idairnumber:e?.item?.idairnumber,estate:$,city:F,tracking:e?.currentHbl,currentStatus:r,timeStamp:new Date().getTime()};if(c(""),c(e?.item),w(S()),h("","success"),!M?.roles?.[$])h("","warning"),c({consigneeInfo:{ybestate:"Zona incorrecta"}}),w(S());else if(e?.item?.currentStatus!==l.statusId){let t={statusHistory:s,currentStatus:l.statusId};typeof e?.item?.guia=="number"&&(t.guia=e?.item?.guia+""),await Oe(f,t),ue([...de(),N]),e?.newSear()}else h("","warning"),c({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),w(S())}else h("","error"),c({consigneeInfo:{ybestate:"Error con manifiesto"}}),w(S())};Y(()=>{});const z=()=>O?.list?.filter(r=>r.id),[V,{refetch:He}]=ae(e?.item?.bagnumber,async()=>{let r=e?.item?.hbls,l=r.map($=>`${$.hbl}/${$.quantity}/${$.weight}`).join(""),s=`${e?.item?.idairguide}/${e?.item?.cidentity}/${r.length}/${l}`;return await oe(s)});return a(g,{get when(){return e?.item?.idairguide},get children(){var r=Fe(),l=r.firstChild,s=l.nextSibling,f=s.firstChild,$=f.firstChild,F=$.nextSibling,N=F.nextSibling;return l.style.setProperty("padding","16px"),i(l,a(g,{get when(){return R()},get children(){var t=Ce(),o=t.firstChild,m=o.nextSibling;return i(o,a(H,{get name(){return P?.[_()]?.icon},size:32,get color(){return P?.[_()]?.svg}})),i(m,()=>b?.consigneeInfo?.ybestate),k(v=>K(t,P?.[_()],v)),t}})),i(s,a(g,{get when(){return e?.item?.idairnumber},get children(){return[(()=>{var t=Ae(),o=t.firstChild;return i(o,a(H,{get name(){return se("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),i(t,a(g,{get when(){return!C()&&e?.item?.idairnumber},get children(){var m=ke(),v=m.firstChild;return i(v,()=>e?.item?.idairnumber),m}}),null),t})(),a(g,{get when(){return!C()},get children(){return[(()=>{var t=Pe();return i(t,L),t})(),Re()]}})]}}),f),i(s,a(j,{}),f),i($,()=>e?.item?.consigneeInfo?.ybcity),i(N,()=>e?.item?.consigneeInfo?.ybestate),i(s,a(j,{}),null),i(s,a(g,{get when(){return!C()&&e?.item?.bagnumber},get children(){var t=De(),o=t.firstChild;return i(o,a(g,{get when(){return e?.item?.bagnumber},get children(){var m=Te(),v=m.firstChild;return m.$$click=()=>n(),i(v,()=>d(e?.item?.bagnumber)),m}})),t}}),null),i(r,a(g,{get when(){return!e?.showQR&&M?.roles?.HBLUPD?.isActive},get children(){var t=Le();return i(t,a(le,{get each(){return z()},children:(o,m)=>(()=>{var v=Ne(),Q=v.firstChild,ee=Q.firstChild;return v.$$click=qe=>I(o.id),v.style.setProperty("padding","9px"),i(v,a(H,{get name(){return o.icon},size:24}),Q),i(ee,()=>C()?o.label:o.tag),v})()})),k(()=>W(t,C()?"":" bottombx flxWrp spaceAround centerBx")),t}}),null),i(r,a(g,{get when(){return e?.showQR},get children(){var t=Ve(),o=t.firstChild;return t.style.setProperty("padding","16px"),k(()=>Z(o,"src",V())),t}}),null),i(r,a(g,{get when(){return M?.roles?.HBLCMPL?.isActive},get children(){return a(Ee,{get item(){return e?.item}})}}),null),k(t=>{var o=`client_item_box gWXAaj jlytmu ${C()?"isMobile":""}`,m=R()?"block":"none";return o!==t.e&&W(r,t.e=o),m!==t.t&&((t.t=m)!=null?l.style.setProperty("display",m):l.style.removeProperty("display")),t},{e:void 0,t:void 0}),r}})}const Oe=async(e,b)=>{let c={params:e,data2update:b},_=X(809004);return c={...c,..._},await J(c)};G(["click"]);export{lt as default};
