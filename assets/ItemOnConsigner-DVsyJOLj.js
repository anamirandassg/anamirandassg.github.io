const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-0m9x4Phg.js","assets/index-BBgEX8qK.js","assets/index-DGHHyjai.css","assets/SVG-BppETs5S.js","assets/index-Ci0zXM0r.js","assets/InputHr-DH6TRhjx.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-PoHfxQpy.js","assets/Util-uEfv1z7O.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-DCvB5UnG.js","assets/debounces-BPPgGH_j.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as C,_ as k,c as M,a as X,d as l,e as Y,i as e,S as _,k as Z,f as O,g as K,t as u,m as ee,v as te}from"./index-BBgEX8qK.js";import{u as le,g as re,a as D,v as ie,b as j,f as Q,w as ne,O as ae}from"./Util-uEfv1z7O.js";import{OpenModal as se,CloseModal as oe}from"./DialogHRM-DrSw4v_m.js";import"./ContainerElasticView-9kVE9I-7.js";import{i as x}from"./globalSignal-pV0T0plg.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-VwmOL3SI.js";import de from"./ButonHrm-PoHfxQpy.js";import"./index-Ci0zXM0r.js";import"./SVG-BppETs5S.js";/* empty css                             *//* empty css                 */var me=u('<div class=" centerBx streetcmp"><h5></h5><h4>'),ue=u("<div class=centerBx>"),ce=u('<h4 class="tr_bar_20 textleft">'),W=u('<h5 class="tr_bar_20 textleft">'),R=u("<div style=margin-right:4vw>"),be=u('<p class="tr_bar_30 textleft fullName_consigne">'),z=u('<div class="icon_status centerBx">'),ve=u('<div class=bottombx bottombx><h4 class="tr_bar_20 textleft"></h4><h5 class="tr_bar_20 textleft"></h5><div style=margin-right:4vw></div><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum">'),ge=u('<div><div class="_dsplFlx bottombx centerBx"></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),I=u('<div class="_dsplFlx flxWrp spaceAround centerBx">'),_e=u("<div style=padding:4px>"),ye=u('<div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px>'),H=u("<div class=separator>"),he=u('<div><div class=" bottombx "></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),pe=u("<div>"),xe=u('<div style="padding:4px;max-width:300px "class=""><h4 class=" textleft centerBx">');const E=C(()=>k(()=>import("./FlexSpace-0m9x4Phg.js"),__vite__mapDeps([0,1,2]))),L=C(()=>k(()=>import("./SVG-BppETs5S.js"),__vite__mapDeps([3,1,2,4]))),$e=C(()=>k(()=>import("./InputHr-DH6TRhjx.js"),__vite__mapDeps([5,1,2,6])));C(()=>k(()=>import("./ButonHrm-PoHfxQpy.js"),__vite__mapDeps([7,1,2,3,4,8,9])));const q=C(()=>k(()=>import("./DropDwnSearch-DCvB5UnG.js"),__vite__mapDeps([10,1,2,11,3,4,12]))),[s,f]=M();function Ve(r){const[y,v]=X(!1),m=t=>t?" "+t:"",g=()=>{let t=r?.item;return m(t?.firstName)+m(t?.middleName)+m(t?.lastName)+m(t?.lastName2)},d=()=>{let t=r?.item,a=m(t?.altPhoneNumber);return m(t?.phoneNumber)+(a?" |"+a:"")},$=(t,a)=>a?(()=>{var c=me(),h=c.firstChild,p=h.nextSibling;return e(h," "+t),e(p,a),c})():"",P=()=>{let t=r?.item;return(()=>{var a=ue();return e(a,()=>$("Calle",t?.ybstreet),null),e(a,()=>$("#",t?.ybstreetNo),null),e(a,()=>$("E/",t?.ybbetwen1),null),e(a,()=>$("y",t?.ybbetwen2),null),a})()},A=async()=>{let t={ssg_consignee_key:r?.item?.ssg_consignee_key};await Ce(t),r?.refresh()},o=t=>{f("item",r?.item),le("editBK",{...r?.item});let a=re(),c={};c.id=a,c.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},c.content=l(fe,{get item(){return r?.item},modalId:a}),se(c)};return console.log(r?.item),l(_,{get when(){return!y()},get children(){var t=ge(),a=t.firstChild,c=a.nextSibling,h=c.nextSibling,p=h.firstChild,w=p.firstChild,F=w.nextSibling,N=F.nextSibling,i=N.nextSibling,B=i.nextSibling;return e(a,l(_,{get when(){return r?.item?.cid},get children(){return l(_,{get when(){return!x()},get children(){return[(()=>{var n=ce();return e(n,()=>r?.item?.consigneeId),n})(),(()=>{var n=W();return e(n,()=>r?.item?.cid),n})(),R(),(()=>{var n=be();return e(n,g),n})(),R(),(()=>{var n=W();return e(n,d),n})()]}})}}),null),e(a,l(E,{}),null),e(a,l(_,{get when(){return!r?.item?.cid||Z?.profile?.isAdmin},get children(){return[(()=>{var n=z();return n.$$click=o,e(n,l(L,{name:"outline_edit",size:24})),n})(),(()=>{var n=z();return n.$$click=A,e(n,l(L,{name:"outline_delete",size:24})),n})()]}}),null),e(t,l(_,{get when(){return x()&&r?.item?.ybcity},get children(){var n=ve(),S=n.firstChild,T=S.nextSibling,J=T.nextSibling,V=J.nextSibling,G=V.nextSibling,U=G.nextSibling;return e(S,()=>r?.item?.consigneeId),e(T,()=>r?.item?.cid),e(V,g),e(U,d),n}}),c),e(h,l(_,{get when(){return!x()&&r?.item?.ybcity},get children(){return P()}}),p),e(h,l(E,{}),p),e(w,()=>r?.item?.ybreparto),e(N,()=>r?.item?.ybcity),e(B,()=>r?.item?.ybestate),O(()=>K(t,`client_item_box gWXAaj jlytmu ${x()?"isMobile":""}`)),t}})}const fe=r=>{const[y,v]=M(),[m,g]=M(),d=(o,t)=>{f("item",[o],t)},$=(o,t)=>{g("item",[o],t),f("item","ybestate",t.label)},P=(o,t)=>{g("item",[o],t),f("item","ybcity",t.label)},A=async()=>{let o=ne(ae(s?.item),s?.item,D("editBK"));await we({ssg_consignee_key:s?.item?.ssg_consignee_key},o.data),oe(r?.modalId)};return ee(()=>{let o=[];g("item",{}),f("item","province",void 0),f("item","cityId",void 0),D("M023009")?.provincias.map(t=>{let a=t.label;te?.roles?.[a]?.isActive&&(a==s?.item?.ybestate&&g("item","province",t),s?.item?.ybcity&&t?.cities.map(c=>{c?.label==s?.item?.ybcity&&g("item","citiId",c)}),o.push(t))}),v("prov",o)}),(()=>{var o=pe();return o.style.setProperty("max-height","80vh"),o.style.setProperty("overflow","auto"),o.style.setProperty("background","#ffffff"),o.style.setProperty("border-radius","13"),o.style.setProperty("padding","10px 19px"),e(o,l(_,{get when(){return r?.item?.consigneeId},get children(){var t=he(),a=t.firstChild,c=a.nextSibling,h=c.nextSibling,p=h.firstChild,w=p.firstChild,F=w.nextSibling,N=F.nextSibling;return e(a,l(_,{get when(){return r?.item?.cid},get children(){return[(()=>{var i=I();return e(i,l(b,{updForm:d,key:"consigneeId",get value(){return s?.item?.consigneeId},label:"consigneeId"}),null),e(i,l(_,{get when(){return!ie(s?.item,D("editBK"))},get children(){return l(de,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:A})}}),null),i})(),(()=>{var i=ye(),B=i.firstChild;return i.style.setProperty("padding","16px"),e(B,l(q,{get list(){return y?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return m?.item?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:n=>$("province",n),width:"260px"})),e(i,l(_,{get when(){return m?.item?.province?.id},get children(){var n=_e();return e(n,l(q,{get list(){return m?.item?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return m?.item?.citiId?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:S=>P("citiId",S),width:"260px"})),n}}),null),i})(),l(_,{get when(){return!x()},get children(){return[(()=>{var i=I();return e(i,l(b,{updForm:d,key:"cid",get value(){return s?.item?.cid},label:"Carnet"}),null),e(i,l(b,{updForm:d,key:"email",get value(){return s?.item?.email},label:"Email"}),null),e(i,l(b,{updForm:d,key:"phoneNumber",get value(){return s?.item?.phoneNumber},label:"Telefono"}),null),e(i,l(b,{updForm:d,key:"altPhoneNumber",get value(){return s?.item?.altPhoneNumber},label:"Telefono 2"}),null),i})(),H(),(()=>{var i=I();return e(i,l(b,{updForm:d,key:"firstName",get value(){return s?.item?.firstName},label:"1er Nombre"}),null),e(i,l(b,{updForm:d,key:"middleName",get value(){return s?.item?.middleName},label:"2do Nombre"}),null),e(i,l(b,{updForm:d,key:"lastName",get value(){return s?.item?.lastName},label:"1er Apellido"}),null),e(i,l(b,{updForm:d,key:"lastName2",get value(){return s?.item?.lastName2},label:"2do Apellido"}),null),i})(),H(),(()=>{var i=I();return e(i,l(b,{updForm:d,key:"ybstreetNo",get value(){return s?.item?.ybstreetNo},label:"No"}),null),e(i,l(b,{updForm:d,key:"ybstreet",get value(){return s?.item?.ybstreet},label:"Calle"}),null),e(i,l(b,{updForm:d,key:"ybbetwen1",get value(){return s?.item?.ybbetwen1},label:"Entre 1"}),null),e(i,l(b,{updForm:d,key:"ybbetwen2",get value(){return s?.item?.ybbetwen2},label:"Entre 2"}),null),e(i,l(b,{updForm:d,key:"ybapt",get value(){return s?.item?.ybapt},label:"Apt"}),null),e(i,l(b,{updForm:d,key:"ybreparto",get value(){return s?.item?.ybreparto},label:"Reparto"}),null),i})(),R()]}})]}}),null),e(a,l(E,{}),null),e(h,l(E,{}),p),e(w,()=>s?.item?.ybcity),e(N,()=>s?.item?.ybestate),O(()=>K(t,` ${x()?"isMobile":""}`)),t}})),O(t=>(t=x()?"96vw":"920px")!=null?o.style.setProperty("width",t):o.style.removeProperty("width")),o})()},b=r=>(()=>{var y=xe(),v=y.firstChild;return e(v,()=>r?.label),e(y,l($e,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return r?.value},get placeholder(){return r?.label},colors:"#2b2b2b",handleClick:m=>r?.updForm(r?.key,m)}),null),y})(),we=async(r,y)=>{let v={params:r,data2update:y},m=j(409007);v={...v,...m};const g=await Q(v);return console.log(v),console.log(g),g},Ce=async(r,y)=>{let v={params:r},m=j(409008);return v={...v,...m},await Q(v)};Y(["click"]);export{Ve as default};
