const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D7M8rCrF.js","assets/index-BnQZZ72n.js","assets/index-BRlA1Q7g.css","assets/SVG-B-_GsH4b.js","assets/Util-DCAGxQXf.js","assets/InputHr-DdE5WK8Z.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-CyZNw82T.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-BphXUvRN.js","assets/debounces-DUPjjIVA.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ItemOnConsigner-DTo5yttN.js","assets/DialogHRM-ts0cJGWB.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-B_SifqGn.js","assets/ContainerElasticView-LzOd6fDI.css","assets/fontkit.es-bSs4huUp.js","assets/qrcode-DHy8FFhS.js","assets/Toast-CkzLo8WE.js","assets/Toast-DLpFKn-Q.css","assets/ShowRemmitance-CKCh_AvT.js","assets/ShowQRPrintLabel-C_f7T3iS.js","assets/InitPrintServices-DJ_AIouE.js","assets/LoadingColorSpinner-Chl4NC-B.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as y,_,c as E,d as Q,A as j,i as t,e,S as k,j as N,f as T,m as q,t as v,a as K,b as U,p as G,E as J,z as X,F as Y,s as Z}from"./index-BnQZZ72n.js";import ee from"./InputHr-DdE5WK8Z.js";import{e as te,a as A,g as W,f as L,F as re}from"./Util-DCAGxQXf.js";import{u as le}from"./debounces-DUPjjIVA.js";import{CloseModal as ie,OpenModal as ae}from"./DialogHRM-ts0cJGWB.js";import"./ContainerElasticView-B_SifqGn.js";import"./fontkit.es-bSs4huUp.js";import"./qrcode-DHy8FFhS.js";import"./Toast-CkzLo8WE.js";import V from"./ButonHrm-CyZNw82T.js";import"./ShowRemmitance-CKCh_AvT.js";import ne from"./FlexSpace-D7M8rCrF.js";import"./SVG-B-_GsH4b.js";/* empty css                             *//* empty css                 */import"./ShowQRPrintLabel-C_f7T3iS.js";import"./InitPrintServices-DJ_AIouE.js";var oe=v("<div style=padding:4px>"),P=v('<div class="_dsplFlx flxWrp spaceAround centerBx">'),M=v("<div class=separator>"),se=v("<div style=margin-right:4vw>"),de=v('<div><div><div class=" bottombx "><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div></div></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ue=v('<div style="padding:4px;max-width:300px "class=""><h4 class=" textleft centerBx">');const R=y(()=>_(()=>import("./FlexSpace-D7M8rCrF.js"),__vite__mapDeps([0,1,2])));y(()=>_(()=>import("./SVG-B-_GsH4b.js"),__vite__mapDeps([3,1,2,4])));const me=y(()=>_(()=>import("./InputHr-DdE5WK8Z.js"),__vite__mapDeps([5,1,2,6])));y(()=>_(()=>import("./ButonHrm-CyZNw82T.js"),__vite__mapDeps([7,1,2,3,4,8])));const B=y(()=>_(()=>import("./DropDwnSearch-BphXUvRN.js"),__vite__mapDeps([9,1,2,10,3,4,11]))),[i,I]=E({item:{firstName:"",lastName:"",lastName2:"",middleName:"",email:"",phoneNumber:"",altPhoneNumber:"",cid:"",ybstreetNo:"",ybstreet:"",ybbetwen1:"",ybbetwen2:"",ybapt:"",ybreparto:""}}),ce=o=>{const[s,b]=E(),[c,p]=E(),n=(r,a)=>{I("item",[r],a)},S=(r,a)=>{p("item",[r],a),I("item","ybestate",a.label)},x=(r,a)=>{p("item",[r],a),I("item","ybcity",a.label)},F=async()=>{let r={...i?.item};r.ssg_consignee_key=A(),r.consigneeId=r.ssg_consignee_key,await be(r),ie(o?.modalId)};return Q(()=>{let r=[];te("M023009")?.provincias.map(a=>{let d=a.label;j?.roles?.[d]?.isActive&&r.push(a)}),b("prov",r),p("item",{})}),(()=>{var r=de(),a=r.firstChild,d=a.firstChild,h=d.firstChild,g=h.nextSibling,m=g.firstChild,f=d.nextSibling,w=f.nextSibling,$=w.firstChild,D=$.firstChild,H=D.nextSibling,z=H.nextSibling;return r.style.setProperty("max-height","80vh"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),t(h,()=>i?.item?.ybestate&&i?.item?.ybcity&&i?.item?.firstName&&i?.item?.lastName&&i?.item?.phoneNumber?"OK":"--",null),t(h,e(k,{get when(){return i?.item?.ybestate&&i?.item?.ybcity&&i?.item?.firstName&&i?.item?.lastName&&i?.item?.phoneNumber},get children(){return e(V,{color:"rgb(200 25 60 / 1)",label:"Agregar",icon:"plus",handleClick:F})}}),null),g.style.setProperty("padding","16px"),t(m,e(B,{get list(){return s?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:l=>S("province",l),width:"260px"})),t(g,e(k,{get when(){return c?.item?.province?.id},get children(){var l=oe();return t(l,e(B,{get list(){return c?.item?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.citiId?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:C=>x("citiId",C),width:"260px"})),l}}),null),t(d,e(k,{get when(){return!N()},get children(){return[(()=>{var l=P();return t(l,e(u,{updForm:n,key:"cid",get value(){return i?.item?.cid},label:"Carnet"}),null),t(l,e(u,{updForm:n,key:"email",get value(){return i?.item?.email},label:"Email"}),null),t(l,e(u,{updForm:n,key:"phoneNumber",get value(){return i?.item?.phoneNumber},label:"Telefono"}),null),t(l,e(u,{updForm:n,key:"altPhoneNumber",get value(){return i?.item?.altPhoneNumber},label:"Telefono 2"}),null),l})(),M(),(()=>{var l=P();return t(l,e(u,{updForm:n,key:"firstName",get value(){return i?.item?.firstName},label:"1er Nombre"}),null),t(l,e(u,{updForm:n,key:"middleName",get value(){return i?.item?.middleName},label:"2do Nombre"}),null),t(l,e(u,{updForm:n,key:"lastName",get value(){return i?.item?.lastName},label:"1er Apellido"}),null),t(l,e(u,{updForm:n,key:"lastName2",get value(){return i?.item?.lastName2},label:"2do Apellido"}),null),l})(),M(),(()=>{var l=P();return t(l,e(u,{updForm:n,key:"ybstreetNo",get value(){return i?.item?.ybstreetNo},label:"No"}),null),t(l,e(u,{updForm:n,key:"ybstreet",get value(){return i?.item?.ybstreet},label:"Calle"}),null),t(l,e(u,{updForm:n,key:"ybbetwen1",get value(){return i?.item?.ybbetwen1},label:"Entre 1"}),null),t(l,e(u,{updForm:n,key:"ybbetwen2",get value(){return i?.item?.ybbetwen2},label:"Entre 2"}),null),t(l,e(u,{updForm:n,key:"ybapt",get value(){return i?.item?.ybapt},label:"Apt"}),null),t(l,e(u,{updForm:n,key:"ybreparto",get value(){return i?.item?.ybreparto},label:"Reparto"}),null),l})(),se()]}}),null),t(d,e(R,{}),null),t(w,e(R,{}),$),t(D,()=>i?.item?.ybcity),t(z,()=>i?.item?.ybestate),T(l=>{var C=N()?"96vw":"920px",O=` ${N()?"isMobile":""}`;return C!==l.e&&((l.e=C)!=null?r.style.setProperty("width",C):r.style.removeProperty("width")),O!==l.t&&q(a,l.t=O),l},{e:void 0,t:void 0}),r})()},u=o=>(()=>{var s=ue(),b=s.firstChild;return t(b,()=>o?.label),t(s,e(me,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return o?.value},get placeholder(){return o?.label},colors:"#2b2b2b",handleClick:c=>o?.updForm(o?.key,c)}),null),s})(),be=async o=>{let s={form:o},b=W(409006);return s={...s,...b},await L(s)};var pe=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Beneficiarios</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div>'),ve=v("<div> <!>."),ge=v("<div> ");const ye=y(()=>_(()=>import("./ItemOnConsigner-DTo5yttN.js"),__vite__mapDeps([12,1,2,4,13,14,15,3,16,17,18,19,20,7,8,21,22,23,0]))),_e=y(()=>_(()=>import("./LoadingColorSpinner-Chl4NC-B.js"),__vite__mapDeps([24,1,2,25])));function Be(){const[o,s]=E({list:{search:""}}),[b,c]=K(""),p=le(c,500),n=(r,a)=>{s("list",{[r]:a}),p(A())};U(()=>{});const S=r=>{let a=A(),d={};d.id=a,d.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},d.content=e(ce,{modalId:a}),ae(d)},[x,{refetch:F}]=G(b,async r=>{const a=await he(o?.list?.search);return re(a)});return(()=>{var r=pe(),a=r.firstChild,d=a.firstChild,h=d.nextSibling,g=a.nextSibling;return t(a,e(ne,{}),h),t(h,e(V,{color:"#37be5fff",icon:"plus",label:"Agregar",handleClick:S})),t(r,e(ee,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return o?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:m=>n("search",m)}),g),t(g,e(k,{get when(){return x()},get children(){return e(J,{fallback:m=>(()=>{var f=ve(),w=f.firstChild,$=w.nextSibling;return $.nextSibling,t(f,()=>m.toString(),$),f})(),get children(){return e(X,{get fallback(){return(()=>{var m=ge();return m.firstChild,t(m,e(_e,{stroke:"rgb(200 25 60 / 1)",size:62}),null),m})()},get children(){return e(k,{get when(){return x()},get children(){return e(Y,{get each(){return x()},children:(m,f)=>e(ye,{item:m,refresh:()=>p(A())})})}})}})}})}})),T(m=>Z(g,` ${N()?"":"width:94vw;"} margin: 0 auto;`,m)),r})()}const he=async o=>{if(o.length>4){let s={params:{}};o&&o.split(" ").map((p,n)=>{p&&(s.params[":search"+n]=p.trim())});let b=W(401001);return s={...s,...b},await L(s)}else return{}};export{Be as default};
