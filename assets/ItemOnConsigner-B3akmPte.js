const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BCeyyQ_j.js","assets/index-DJfVqtsP.js","assets/index-W9fcnr7G.css","assets/SVG-CasmjzOP.js","assets/index-Ci0zXM0r.js","assets/InputHr-5kZmxe8J.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-ba8BGIG5.js","assets/Util-D2YTzGDx.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-C9AJgptp.js","assets/debounces-ClyzUcuw.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as k,_ as N,c as R,a as ee,d as t,e as te,i as e,S as y,k as le,f as T,g as J,t as c,m as re,v as ie}from"./index-DJfVqtsP.js";import{g as L,u as ne,a as B,x as ae,b as G,f as U,y as se,O as oe}from"./Util-D2YTzGDx.js";import{OpenModal as q,CloseModal as de}from"./DialogHRM-CkeVCoK5.js";import"./ContainerElasticView-Djli9wnX.js";import{i as x}from"./globalSignal-CBLhnySe.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-Brz0fCnt.js";import me from"./ButonHrm-ba8BGIG5.js";import"./index-Ci0zXM0r.js";import"./SVG-CasmjzOP.js";/* empty css                             *//* empty css                 */var ue=c('<div class=" centerBx streetcmp"><h5></h5><h4>'),ce=c("<div class=centerBx>"),be=c('<h4 class="tr_bar_20 textleft">'),K=c('<h5 class="tr_bar_20 textleft">'),V=c("<div style=margin-right:4vw>"),ve=c('<p class="tr_bar_30 textleft fullName_consigne">'),D=c('<div class="icon_status centerBx">'),ge=c('<div class=bottombx bottombx><h4 class="tr_bar_20 textleft"></h4><h5 class="tr_bar_20 textleft"></h5><div style=margin-right:4vw></div><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum">'),_e=c('<div><div class="_dsplFlx bottombx centerBx"></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),I=c('<div class="_dsplFlx flxWrp spaceAround centerBx">'),ye=c("<div style=padding:4px>"),he=c('<div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px>'),j=c("<div class=separator>"),pe=c('<div><div class=" bottombx "></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),$e=c("<div>"),xe=c('<div style="padding:4px;max-width:300px "class=""><h4 class=" textleft centerBx">');const E=k(()=>N(()=>import("./FlexSpace-BCeyyQ_j.js"),__vite__mapDeps([0,1,2]))),O=k(()=>N(()=>import("./SVG-CasmjzOP.js"),__vite__mapDeps([3,1,2,4]))),fe=k(()=>N(()=>import("./InputHr-5kZmxe8J.js"),__vite__mapDeps([5,1,2,6])));k(()=>N(()=>import("./ButonHrm-ba8BGIG5.js"),__vite__mapDeps([7,1,2,3,4,8,9])));const Q=k(()=>N(()=>import("./DropDwnSearch-C9AJgptp.js"),__vite__mapDeps([10,1,2,11,3,4,12]))),[s,C]=R();function We(l){const[h,v]=ee(!1),u=r=>r?" "+r:"",_=()=>{let r=l?.item;return u(r?.firstName)+u(r?.middleName)+u(r?.lastName)+u(r?.lastName2)},m=()=>{let r=l?.item,n=u(r?.altPhoneNumber);return u(r?.phoneNumber)+(n?" |"+n:"")},f=(r,n)=>n?(()=>{var g=ue(),p=g.firstChild,$=p.nextSibling;return e(p," "+r),e($,n),g})():"",P=()=>{let r=l?.item;return(()=>{var n=ce();return e(n,()=>f("Calle",r?.ybstreet),null),e(n,()=>f("#",r?.ybstreetNo),null),e(n,()=>f("E/",r?.ybbetwen1),null),e(n,()=>f("y",r?.ybbetwen2),null),n})()},A=async()=>{let r={ssg_consignee_key:l?.item?.ssg_consignee_key};await ke(r),l?.refresh()},o=()=>{let r=L(),n={};n.id=r,n.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},q(n)},d=r=>{C("item",l?.item),ne("editBK",{...l?.item});let n=L(),g={};g.id=n,g.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},g.content=t(we,{get item(){return l?.item},modalId:n}),q(g)};return console.log(l?.item),t(y,{get when(){return!h()},get children(){var r=_e(),n=r.firstChild,g=n.nextSibling,p=g.nextSibling,$=p.firstChild,S=$.firstChild,F=S.nextSibling,i=F.nextSibling,M=i.nextSibling,w=M.nextSibling;return e(n,t(y,{get when(){return l?.item?.cid},get children(){return t(y,{get when(){return!x()},get children(){return[(()=>{var a=be();return e(a,()=>l?.item?.consigneeId),a})(),(()=>{var a=K();return e(a,()=>l?.item?.cid),a})(),V(),(()=>{var a=ve();return e(a,_),a})(),V(),(()=>{var a=K();return e(a,m),a})()]}})}}),null),e(n,t(E,{}),null),e(n,t(y,{get when(){return!l?.item?.cid||le?.profile?.isAdmin},get children(){return[(()=>{var a=D();return a.$$click=o,e(a,t(O,{name:"money_outline",size:24})),a})(),(()=>{var a=D();return a.$$click=d,e(a,t(O,{name:"outline_edit",size:24})),a})(),(()=>{var a=D();return a.$$click=A,e(a,t(O,{name:"outline_delete",size:24})),a})()]}}),null),e(r,t(y,{get when(){return x()&&l?.item?.ybcity},get children(){var a=ge(),W=a.firstChild,z=W.nextSibling,X=z.nextSibling,H=X.nextSibling,Y=H.nextSibling,Z=Y.nextSibling;return e(W,()=>l?.item?.consigneeId),e(z,()=>l?.item?.cid),e(H,_),e(Z,m),a}}),g),e(p,t(y,{get when(){return!x()&&l?.item?.ybcity},get children(){return P()}}),$),e(p,t(E,{}),$),e(S,()=>l?.item?.ybreparto),e(i,()=>l?.item?.ybcity),e(w,()=>l?.item?.ybestate),T(()=>J(r,`client_item_box gWXAaj jlytmu ${x()?"isMobile":""}`)),r}})}const we=l=>{const[h,v]=R(),[u,_]=R(),m=(o,d)=>{C("item",[o],d)},f=(o,d)=>{_("item",[o],d),C("item","ybestate",d.label)},P=(o,d)=>{_("item",[o],d),C("item","ybcity",d.label)},A=async()=>{let o=se(oe(s?.item),s?.item,B("editBK"));await Ce({ssg_consignee_key:s?.item?.ssg_consignee_key},o.data),de(l?.modalId)};return re(()=>{let o=[];_("item",{}),C("item","province",void 0),C("item","cityId",void 0),B("M023009")?.provincias.map(d=>{let r=d.label;ie?.roles?.[r]?.isActive&&(r==s?.item?.ybestate&&_("item","province",d),s?.item?.ybcity&&d?.cities.map(n=>{n?.label==s?.item?.ybcity&&_("item","citiId",n)}),o.push(d))}),v("prov",o)}),(()=>{var o=$e();return o.style.setProperty("max-height","80vh"),o.style.setProperty("overflow","auto"),o.style.setProperty("background","#ffffff"),o.style.setProperty("border-radius","13"),o.style.setProperty("padding","10px 19px"),e(o,t(y,{get when(){return l?.item?.consigneeId},get children(){var d=pe(),r=d.firstChild,n=r.nextSibling,g=n.nextSibling,p=g.firstChild,$=p.firstChild,S=$.nextSibling,F=S.nextSibling;return e(r,t(y,{get when(){return l?.item?.cid},get children(){return[(()=>{var i=I();return e(i,t(b,{updForm:m,key:"consigneeId",get value(){return s?.item?.consigneeId},label:"consigneeId"}),null),e(i,t(y,{get when(){return!ae(s?.item,B("editBK"))},get children(){return t(me,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:A})}}),null),i})(),(()=>{var i=he(),M=i.firstChild;return i.style.setProperty("padding","16px"),e(M,t(Q,{get list(){return h?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.item?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:w=>f("province",w),width:"260px"})),e(i,t(y,{get when(){return u?.item?.province?.id},get children(){var w=ye();return e(w,t(Q,{get list(){return u?.item?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.item?.citiId?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:a=>P("citiId",a),width:"260px"})),w}}),null),i})(),t(y,{get when(){return!x()},get children(){return[(()=>{var i=I();return e(i,t(b,{updForm:m,key:"cid",get value(){return s?.item?.cid},label:"Carnet"}),null),e(i,t(b,{updForm:m,key:"email",get value(){return s?.item?.email},label:"Email"}),null),e(i,t(b,{updForm:m,key:"phoneNumber",get value(){return s?.item?.phoneNumber},label:"Telefono"}),null),e(i,t(b,{updForm:m,key:"altPhoneNumber",get value(){return s?.item?.altPhoneNumber},label:"Telefono 2"}),null),i})(),j(),(()=>{var i=I();return e(i,t(b,{updForm:m,key:"firstName",get value(){return s?.item?.firstName},label:"1er Nombre"}),null),e(i,t(b,{updForm:m,key:"middleName",get value(){return s?.item?.middleName},label:"2do Nombre"}),null),e(i,t(b,{updForm:m,key:"lastName",get value(){return s?.item?.lastName},label:"1er Apellido"}),null),e(i,t(b,{updForm:m,key:"lastName2",get value(){return s?.item?.lastName2},label:"2do Apellido"}),null),i})(),j(),(()=>{var i=I();return e(i,t(b,{updForm:m,key:"ybstreetNo",get value(){return s?.item?.ybstreetNo},label:"No"}),null),e(i,t(b,{updForm:m,key:"ybstreet",get value(){return s?.item?.ybstreet},label:"Calle"}),null),e(i,t(b,{updForm:m,key:"ybbetwen1",get value(){return s?.item?.ybbetwen1},label:"Entre 1"}),null),e(i,t(b,{updForm:m,key:"ybbetwen2",get value(){return s?.item?.ybbetwen2},label:"Entre 2"}),null),e(i,t(b,{updForm:m,key:"ybapt",get value(){return s?.item?.ybapt},label:"Apt"}),null),e(i,t(b,{updForm:m,key:"ybreparto",get value(){return s?.item?.ybreparto},label:"Reparto"}),null),i})(),V()]}})]}}),null),e(r,t(E,{}),null),e(g,t(E,{}),p),e($,()=>s?.item?.ybcity),e(F,()=>s?.item?.ybestate),T(()=>J(d,` ${x()?"isMobile":""}`)),d}})),T(d=>(d=x()?"96vw":"920px")!=null?o.style.setProperty("width",d):o.style.removeProperty("width")),o})()},b=l=>(()=>{var h=xe(),v=h.firstChild;return e(v,()=>l?.label),e(h,t(fe,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return l?.value},get placeholder(){return l?.label},colors:"#2b2b2b",handleClick:u=>l?.updForm(l?.key,u)}),null),h})(),Ce=async(l,h)=>{let v={params:l,data2update:h},u=G(409007);v={...v,...u};const _=await U(v);return console.log(v),console.log(_),_},ke=async(l,h)=>{let v={params:l},u=G(409008);return v={...v,...u},await U(v)};te(["click"]);export{We as default};
