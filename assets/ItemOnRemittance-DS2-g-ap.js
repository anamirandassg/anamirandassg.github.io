const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Cm-9PswZ.js","assets/index-B9XtfwEX.js","assets/index-BRlA1Q7g.css","assets/SVG-BRKkFrCC.js","assets/Util-BSJ3epRO.js","assets/ShowQRProducts-C2prX4a-.js","assets/ShowQRPrintLabel-0a3Ep8UM.js","assets/fontkit.es-CflJXqUP.js","assets/qrcode-DHy8FFhS.js","assets/InitPrintServices-Bhvm-3ED.js","assets/Toast-DcmCjBIL.js","assets/Toast-DLpFKn-Q.css","assets/InputHr-CQXdx0b9.js","assets/InputHr-BXFw4d2l.css","assets/DropDwnSearch-BqBXRm5x.js","assets/debounces-B6fqrYGB.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-CBddDYxQ.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as x,_ as C,c as j,a as A,e as a,i as n,S as u,j as E,g as q,f as z,m as P,d as G,x as Y,F as Q,h as J,t as o}from"./index-B9XtfwEX.js";import{h as U,e as W,g as N,f as R,O as k,a as H}from"./Util-BSJ3epRO.js";import{u as X}from"./debounces-B6fqrYGB.js";import"./DialogHRM-aP-iD2kX.js";import"./browser-image-compression-BVJ4p9S0.js";import{OpenToast as K}from"./Toast-DcmCjBIL.js";import{C as Z}from"./ShowQRPrintLabel-0a3Ep8UM.js";import"./fontkit.es-CflJXqUP.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-Bhvm-3ED.js";var ee=o('<div class="_dsplFlx bottombx tr_bar_10 "><h5>'),M=o('<p class=" textleft fullName_consigne">'),$=o('<h5 class="rpto centerBx">'),L=o("<div class=vertseparator>"),O=o('<h4 class="rpto centerBx">/'),te=o('<div class="_dsplFlx bottombx tr_bar_30 ">'),V=o('<div class="icon_status ">'),re=o('<div class="_dsplFlx bottombx ">'),ne=o('<div><div class=""><div class="_dsplFlx topbx centerBx"><div class="icon_status centerBx bag_number"style=margin-right:12px></div><div></div><div class="icon_status centerBx tr_bar_05">'),ie=o('<div class="centerBx bottombx"style=margin-top:10px;><h5>is Paid'),ae=o('<div class="centerBx bottombx"style=margin-top:10px;><h5>is Completed'),p=o("<div style=padding:4px>"),le=o('<div class="centerBx bottombx flxWrp">'),se=o('<div><div class="centerBx bottombx flxWrp">'),ce=o('<div class="centerBx bag_number"><h5 class=""></h5><div class="icon_status centerBx">');const me=x(()=>C(()=>import("./FlexSpace-Cm-9PswZ.js"),__vite__mapDeps([0,1,2]))),S=x(()=>C(()=>import("./SVG-BRKkFrCC.js"),__vite__mapDeps([3,1,2,4])));x(()=>C(()=>import("./ShowQRProducts-C2prX4a-.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11])));const ue=x(()=>C(()=>import("./InputHr-CQXdx0b9.js"),__vite__mapDeps([12,1,2,13]))),oe=x(()=>C(()=>import("./DropDwnSearch-BqBXRm5x.js"),__vite__mapDeps([14,1,2,15,3,4,16]))),F=x(()=>C(()=>import("./CheckBoxSlide-CBddDYxQ.js"),__vite__mapDeps([17,1,2,18])));function Ae(e){j({search:"",status:"AERO_33"});const[l,d]=A("");X(d,400);const _=async()=>{await de(e?.item?.ssg_remittance_key),e?.refetch()},w=async()=>{let b=e.item,g={params:{":search5":e?.item?.ssg_consignee_key}},h=N(401001);g={...g,...h};let c=(await R(g))[e?.item?.ssg_consignee_key],y={id:c?.consigneeId,state:c?.cid,name:be(c),phoneNumber:he(c),bulto:ye(c),rpto:"Rpto: "+c?.ybreparto,city:c?.ybcity+", "+c?.ybestate,amount:b?.amount*-1,currency:b?.currency},r=await Z([y]);window.open(r)};let D={INJECT:"arrow_down_large",REMITTANCE:"money_outline",DELIVERY:"moped"};return a(u,{get when(){return e?.item?.amount},get children(){var b=ne(),g=b.firstChild,h=g.firstChild,v=h.firstChild,c=v.nextSibling,y=c.nextSibling;return g.style.setProperty("width","100%"),n(v,a(S,{get name(){return D[e?.item?.type]},size:24,color:"var(--background-red-ssg)"})),n(h,a(u,{get when(){return!E()},get children(){var r=ee(),t=r.firstChild;return n(t,()=>U(e?.item?.date)),r}}),c),n(c,a(u,{get when(){return e?.item?.type!=="INJECT"&&(e?.item?.customer||e?.item?.customer?.name)},get children(){var r=M();return n(r,()=>e?.item?.customer||e?.item?.customer?.name),r}}),null),n(c,a(u,{get when(){return e?.item?.type==="INJECT"&&e?.item?.description},get children(){var r=M();return n(r,()=>e?.item?.description),r}}),null),n(h,a(me,{}),y),n(h,a(u,{get when(){return!E()},get children(){var r=te();return n(r,a(u,{get when(){return e?.item?.currency},get children(){return[(()=>{var t=$();return n(t,()=>e?.item?.currency),t})(),L(),(()=>{var t=$();return n(t,()=>e?.item?.amount),t})(),a(u,{get when(){return e?.item?.type==="REMITTANCE"},get children(){return[O(),(()=>{var t=$();return n(t,()=>e?.item?.rate),t})()]}})]}})),r}}),y),n(y,a(u,{get when(){return e?.item?.type==="REMITTANCE"},get children(){var r=V();return r.$$click=w,n(r,a(S,{name:"printer",size:22})),r}}),null),n(y,a(u,{get when(){return q?.profile?.isAdmin},get children(){var r=V();return r.$$click=_,n(r,a(S,{name:"outline_delete",size:22})),r}}),null),n(g,a(u,{get when(){return E()},get children(){var r=re();return n(r,a(u,{get when(){return e?.item?.currency},get children(){return[(()=>{var t=$();return n(t,()=>e?.item?.currency),t})(),L(),(()=>{var t=$();return n(t,()=>e?.item?.amount),t})(),a(u,{get when(){return e?.item?.type==="REMITTANCE"},get children(){return[O(),(()=>{var t=$();return n(t,()=>e?.item?.rate),t})()]}})]}})),r}}),null),n(g,a(u,{get when(){return e?.item?.type==="REMITTANCE"},get children(){return a(_e,{get item(){return e?.item},get updItm(){return e?.updItm}})}}),null),z(r=>{var t=`client_item_box gWXAaj jlytmu product centerBx ${E()?"isMobile":""}`,m=`${E()?"":"tr_bar_60"} centerBx`;return t!==r.e&&P(b,r.e=t),m!==r.t&&P(c,r.t=m),r},{e:void 0,t:void 0}),b}})}const de=async e=>{let l={params:{ssg_remittance_key:e}},d=N(415009);l={...l,...d};const _=await R(l);return _?.data?.error?{}:_?.data},_e=e=>{const[l,d]=A({}),[_,w]=A(""),[D,b]=A(""),g=async(t,m)=>{let i=await B({ssg_remittance_key:e?.item?.ssg_remittance_key},{[t]:m?t:null}),s=k(i)?.[0];console.log(e?.item?.ssg_remittance_key,s,i[s]),e?.updItm(e?.item?.ssg_remittance_key,s,i[s])},h=async t=>{let m=await B({ssg_remittance_key:e?.item?.ssg_remittance_key},{billedBy:t}),i=k(m)?.[0];e?.updItm(e?.item?.ssg_remittance_key,i,m[i])},v=async t=>{let m={noteTag:t};typeof e?.item?.guia=="number"&&(m.guia=e?.item?.guia+"");let i=await B({ssg_remittance_key:e?.item?.ssg_remittance_key},m),s=k(i)?.[0];e?.updItm(e?.item?.ssg_remittance_key,s,i[s]),K({text:"Tag Actualizado",timeout:2500,id:H()}),w(""),d(i[s])};G(()=>{typeof e?.item?.noteTag=="object"&&e?.item?.noteTag&&d(e?.item?.noteTag),e?.item?.rate&&b(e?.item?.rate)});const c=()=>{let t={...l()};typeof t!="object"&&(t={}),t[_()]=1,v(t)},y=t=>{let m={...l()};m[t]=void 0,v(m)},r=()=>{let t={...l()};return typeof t!="object"&&(t={}),k(t)};return(()=>{var t=se(),m=t.firstChild;return n(m,a(u,{get when(){return Y()},get children(){return[(()=>{var i=ie(),s=i.firstChild;return n(i,a(F,{get initValue(){return e?.item?.isPaid},updChange:T=>g("isPaid",T),color:"var(--background-red-ssg)"}),s),i})(),(()=>{var i=ae(),s=i.firstChild;return n(i,a(F,{get initValue(){return e?.item?.isCompleted},updChange:T=>g("isCompleted",T),color:"var(--background-red-ssg)"}),s),i})(),(()=>{var i=p();return n(i,a(oe,{get list(){return W("M023009")?.usersListSSG},lbl_empty:"Billed by",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.item?.billedBy},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:s=>h(s?.id),width:"260px"})),i})(),(()=>{var i=p();return n(i,a(ue,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return _()},placeholder:"Tags",colors:"#2b2b2b",handleClick:s=>w(s),onEnter:s=>c()})),i})()]}})),n(t,a(u,{get when(){return r()},get children(){var i=le();return n(i,a(Q,{get each(){return r()},children:(s,T)=>a(ge,{text:s,rmv:y})})),i}}),null),t})()},B=async(e,l)=>{let d={params:e,data2update:l},_=N(415007);return d={...d,..._},await R(d)},ge=e=>(()=>{var l=ce(),d=l.firstChild,_=d.nextSibling;return n(d,()=>e?.text),_.$$click=()=>e?.rmv(e?.text),n(_,a(S,{name:"Xclose",size:18})),l})(),f=e=>e?" "+e:"",be=e=>f(e?.firstName)+f(e?.middleName)+f(e?.lastName)+f(e?.lastName2),he=e=>{let l=f(e?.altPhoneNumber);return f(e?.phoneNumber)+(l?" |"+l:"")},I=(e,l)=>l?" "+e+" "+l:"",ye=e=>`${I("Calle",e?.ybstreet)}${I("#",e?.ybstreetNo)}${I("E/",e?.ybbetwen1)}${I("y",e?.ybbetwen2)}`;J(["click"]);export{Ae as default};
