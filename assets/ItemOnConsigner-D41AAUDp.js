const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-WSsWzutN.js","assets/index-0eJ7-OrP.js","assets/index-lCkr9jrN.css","assets/SVG-Ce4FG4Q1.js","assets/InputHr-C5QRTw4e.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-LnAh_pRm.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-CP7D_N4J.js","assets/debounces-cv8fpWeM.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as I,_ as E,c as O,a as re,d as l,i as e,S as y,g as f,n as ie,e as T,f as G,h as ne,t as b,j as q,Q as ae,s as se,o as D,K as oe,ag as de,p as U,q as X,aF as me,O as ce}from"./index-0eJ7-OrP.js";import{OpenModal as K,CloseModal as ue}from"./DialogHRM-DaQ-U4km.js";import"./ContainerElasticView-BXdQkpSD.js";import"./PDFButton-BO_UckCw.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-CezEXbW-.js";import"./Toast-wKVUNZIn.js";import be from"./ButonHrm-LnAh_pRm.js";import{S as ve}from"./ShowRemmitance-vL2KtwQ7.js";import"./SVG-Ce4FG4Q1.js";/* empty css                             *//* empty css                 */import"./ShowQRPrintLabel-vx39upxv.js";import"./InitPrintServices-BOTX22OK.js";var _e=b('<div class=" centerBx streetcmp"><h5></h5><h4>'),ge=b("<div class=centerBx>"),ye=b('<h4 class="tr_bar_20 textleft">'),L=b('<h5 class="tr_bar_20 textleft">'),V=b("<div style=margin-right:4vw>"),he=b('<p class="tr_bar_30 textleft fullName_consigne">'),j=b('<div class="icon_status centerBx">'),pe=b('<div class=bottombx bottombx><h4 class="tr_bar_20 textleft"></h4><h5 class="tr_bar_20 textleft"></h5><div style=margin-right:4vw></div><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum">'),$e=b('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx"></div></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),F=b('<div class="_dsplFlx flxWrp spaceAround centerBx">'),xe=b("<div style=padding:4px>"),fe=b('<div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px>'),Q=b("<div class=separator>"),we=b('<div><div class=" bottombx "></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),Ce=b("<div>"),ke=b('<div style="padding:4px;max-width:300px "class=""><h4 class=" textleft centerBx">');const B=I(()=>E(()=>import("./FlexSpace-WSsWzutN.js"),__vite__mapDeps([0,1,2]))),R=I(()=>E(()=>import("./SVG-Ce4FG4Q1.js"),__vite__mapDeps([3,1,2]))),Se=I(()=>E(()=>import("./InputHr-C5QRTw4e.js"),__vite__mapDeps([4,1,2,5])));I(()=>E(()=>import("./ButonHrm-LnAh_pRm.js"),__vite__mapDeps([6,1,2,3,7])));const J=I(()=>E(()=>import("./DropDwnSearch-CP7D_N4J.js"),__vite__mapDeps([8,1,2,9,3,10]))),[a,N]=O();function Ke(t){const[h,_]=re(!1),u=r=>r?" "+r:"",g=()=>{let r=t?.item;return u(r?.firstName)+u(r?.middleName)+u(r?.lastName)+u(r?.lastName2)},c=()=>{let r=t?.item,n=u(r?.altPhoneNumber);return u(r?.phoneNumber)+(n?" |"+n:"")},w=(r,n)=>n?(()=>{var m=_e(),$=m.firstChild,x=$.nextSibling;return e($," "+r),e(x,n),m})():"",M=()=>{let r=t?.item;return(()=>{var n=ge();return e(n,()=>w("Calle",r?.ybstreet),null),e(n,()=>w("#",r?.ybstreetNo),null),e(n,()=>w("E/",r?.ybbetwen1),null),e(n,()=>w("y",r?.ybbetwen2),null),n})()},C=(r,n)=>n?" "+r+" "+n:"",s=()=>{let r=t?.item;return`${C("Calle",r?.ybstreet)}${C("#",r?.ybstreetNo)}${C("E/",r?.ybbetwen1)}${C("y",r?.ybbetwen2)}`},d=async()=>{let r={ssg_consignee_key:t?.item?.ssg_consignee_key};await Ee(r),t?.refresh()},p=()=>{let r=q(),n={id:t?.item?.consigneeId,state:t?.item?.cid,name:g(),phoneNumber:c(),bulto:s(),rpto:"Rpto: "+t?.item?.ybreparto,city:t?.item?.ybcity+", "+t?.item?.ybestate,amount:0},m={};m.id=r,m.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},m.content=l(ve,{item:n,modalId:r}),K(m)},k=r=>{N("item",t?.item),ae("editBK",{...t?.item});let n=q(),m={};m.id=n,m.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},m.content=l(Ne,{get item(){return t?.item},modalId:n}),K(m)};return l(y,{get when(){return!h()},get children(){var r=$e(),n=r.firstChild,m=n.firstChild,$=n.nextSibling,x=$.nextSibling,i=x.firstChild,A=i.firstChild,S=A.nextSibling,P=S.nextSibling,Y=P.nextSibling,Z=Y.nextSibling;return e(n,l(y,{get when(){return t?.item?.cid},get children(){return l(y,{get when(){return!f()},get children(){return[(()=>{var o=ye();return e(o,()=>t?.item?.consigneeId),o})(),(()=>{var o=L();return e(o,()=>t?.item?.cid),o})(),V(),(()=>{var o=he();return e(o,g),o})(),V(),(()=>{var o=L();return e(o,c),o})()]}})}}),m),e(n,l(B,{}),m),m.$$click=p,e(m,l(R,{name:"money_outline",size:24})),e(n,l(y,{get when(){return!t?.item?.cid||ie?.profile?.isAdmin},get children(){return[(()=>{var o=j();return o.$$click=k,e(o,l(R,{name:"outline_edit",size:24})),o})(),(()=>{var o=j();return o.$$click=d,e(o,l(R,{name:"outline_delete",size:24})),o})()]}}),null),e(r,l(y,{get when(){return f()&&t?.item?.ybcity},get children(){var o=pe(),W=o.firstChild,z=W.nextSibling,ee=z.nextSibling,H=ee.nextSibling,te=H.nextSibling,le=te.nextSibling;return e(W,()=>t?.item?.consigneeId),e(z,()=>t?.item?.cid),e(H,g),e(le,c),o}}),$),e(x,l(y,{get when(){return!f()&&t?.item?.ybcity},get children(){return M()}}),i),e(x,l(B,{}),i),e(A,()=>t?.item?.ybreparto),e(P,()=>t?.item?.ybcity),e(Z,()=>t?.item?.ybestate),T(()=>G(r,`client_item_box gWXAaj jlytmu ${f()?"isMobile":""}`)),r}})}const Ne=t=>{const[h,_]=O(),[u,g]=O(),c=(s,d)=>{N("item",[s],d)},w=(s,d)=>{g("item",[s],d),N("item","ybestate",d.label)},M=(s,d)=>{g("item",[s],d),N("item","ybcity",d.label)},C=async()=>{let s=me(ce(a?.item),a?.item,D("editBK"));await Ie({ssg_consignee_key:a?.item?.ssg_consignee_key},s.data),ue(t?.modalId)};return se(()=>{let s=[];g("item",{}),N("item","province",void 0),N("item","cityId",void 0),D("M023009")?.provincias.map(d=>{let p=d.label;oe?.roles?.[p]?.isActive&&(p==a?.item?.ybestate&&g("item","province",d),a?.item?.ybcity&&d?.cities.map(k=>{k?.label==a?.item?.ybcity&&g("item","citiId",k)}),s.push(d))}),_("prov",s)}),(()=>{var s=Ce();return s.style.setProperty("max-height","80vh"),s.style.setProperty("overflow","auto"),s.style.setProperty("background","#ffffff"),s.style.setProperty("border-radius","13"),s.style.setProperty("padding","10px 19px"),e(s,l(y,{get when(){return t?.item?.consigneeId},get children(){var d=we(),p=d.firstChild,k=p.nextSibling,r=k.nextSibling,n=r.firstChild,m=n.firstChild,$=m.nextSibling,x=$.nextSibling;return e(p,l(y,{get when(){return t?.item?.cid},get children(){return[(()=>{var i=F();return e(i,l(v,{updForm:c,key:"consigneeId",get value(){return a?.item?.consigneeId},label:"consigneeId"}),null),e(i,l(y,{get when(){return!de(a?.item,D("editBK"))},get children(){return l(be,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:C})}}),null),i})(),(()=>{var i=fe(),A=i.firstChild;return i.style.setProperty("padding","16px"),e(A,l(J,{get list(){return h?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.item?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:S=>w("province",S),width:"260px"})),e(i,l(y,{get when(){return u?.item?.province?.id},get children(){var S=xe();return e(S,l(J,{get list(){return u?.item?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.item?.citiId?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:P=>M("citiId",P),width:"260px"})),S}}),null),i})(),l(y,{get when(){return!f()},get children(){return[(()=>{var i=F();return e(i,l(v,{updForm:c,key:"cid",get value(){return a?.item?.cid},label:"Carnet"}),null),e(i,l(v,{updForm:c,key:"email",get value(){return a?.item?.email},label:"Email"}),null),e(i,l(v,{updForm:c,key:"phoneNumber",get value(){return a?.item?.phoneNumber},label:"Telefono"}),null),e(i,l(v,{updForm:c,key:"altPhoneNumber",get value(){return a?.item?.altPhoneNumber},label:"Telefono 2"}),null),i})(),Q(),(()=>{var i=F();return e(i,l(v,{updForm:c,key:"firstName",get value(){return a?.item?.firstName},label:"1er Nombre"}),null),e(i,l(v,{updForm:c,key:"middleName",get value(){return a?.item?.middleName},label:"2do Nombre"}),null),e(i,l(v,{updForm:c,key:"lastName",get value(){return a?.item?.lastName},label:"1er Apellido"}),null),e(i,l(v,{updForm:c,key:"lastName2",get value(){return a?.item?.lastName2},label:"2do Apellido"}),null),i})(),Q(),(()=>{var i=F();return e(i,l(v,{updForm:c,key:"ybstreetNo",get value(){return a?.item?.ybstreetNo},label:"No"}),null),e(i,l(v,{updForm:c,key:"ybstreet",get value(){return a?.item?.ybstreet},label:"Calle"}),null),e(i,l(v,{updForm:c,key:"ybbetwen1",get value(){return a?.item?.ybbetwen1},label:"Entre 1"}),null),e(i,l(v,{updForm:c,key:"ybbetwen2",get value(){return a?.item?.ybbetwen2},label:"Entre 2"}),null),e(i,l(v,{updForm:c,key:"ybapt",get value(){return a?.item?.ybapt},label:"Apt"}),null),e(i,l(v,{updForm:c,key:"ybreparto",get value(){return a?.item?.ybreparto},label:"Reparto"}),null),i})(),V()]}})]}}),null),e(p,l(B,{}),null),e(r,l(B,{}),n),e(m,()=>a?.item?.ybcity),e(x,()=>a?.item?.ybestate),T(()=>G(d,` ${f()?"isMobile":""}`)),d}})),T(d=>(d=f()?"96vw":"920px")!=null?s.style.setProperty("width",d):s.style.removeProperty("width")),s})()},v=t=>(()=>{var h=ke(),_=h.firstChild;return e(_,()=>t?.label),e(h,l(Se,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.value},get placeholder(){return t?.label},colors:"#2b2b2b",handleClick:u=>t?.updForm(t?.key,u)}),null),h})(),Ie=async(t,h)=>{let _={params:t,data2update:h},u=U(409007);return _={..._,...u},await X(_)},Ee=async(t,h)=>{let _={params:t},u=U(409008);return _={..._,...u},await X(_)};ne(["click"]);export{Ke as default};
