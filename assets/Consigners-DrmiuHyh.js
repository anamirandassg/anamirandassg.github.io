const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-aeboa_dN.js","assets/index-U4LQJf5v.js","assets/index-D70Llg4J.css","assets/SVG-DjZZaUDK.js","assets/Util-C4Gv2Rs-.js","assets/InputHr-B-evoigG.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-C7HS8wJT.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-B1X4Wyq5.js","assets/debounces-Dl2-DoiH.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ItemOnConsigner-R0RBGmTC.js","assets/DialogHRM-BQ3zfsNq.js","assets/DialogHRM-V9_lZntj.css","assets/ContainerElasticView-DcRSwdT6.js","assets/ContainerElasticView-LzOd6fDI.css","assets/PDFButton-CCQT0yk3.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-BaZy4qZc.js","assets/Toast-Pqhcu8pz.js","assets/Toast-DLpFKn-Q.css","assets/ShowRemmitance-CNr9xwQy.js","assets/ShowQRPrintLabel-68sk0Grw.js","assets/InitPrintServices-COQVt4ve.js","assets/LoadingColorSpinner-CVlJW4fu.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as y,_,c as E,b as Q,y as j,i as t,d as e,S as k,f as N,e as T,g as q,t as v,a as K,k as U,j as G,E as J,x as X,F as Y,q as Z}from"./index-U4LQJf5v.js";import ee from"./InputHr-B-evoigG.js";import{d as te,b as A,c as W,f as L,A as re}from"./Util-C4Gv2Rs-.js";import{u as le}from"./debounces-Dl2-DoiH.js";import{CloseModal as ie,OpenModal as ae}from"./DialogHRM-BQ3zfsNq.js";import"./ContainerElasticView-DcRSwdT6.js";import"./PDFButton-CCQT0yk3.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BaZy4qZc.js";import"./Toast-Pqhcu8pz.js";import V from"./ButonHrm-C7HS8wJT.js";import"./ShowRemmitance-CNr9xwQy.js";import ne from"./FlexSpace-aeboa_dN.js";import"./SVG-DjZZaUDK.js";/* empty css                             *//* empty css                 */import"./ShowQRPrintLabel-68sk0Grw.js";import"./InitPrintServices-COQVt4ve.js";var oe=v("<div style=padding:4px>"),P=v('<div class="_dsplFlx flxWrp spaceAround centerBx">'),M=v("<div class=separator>"),se=v("<div style=margin-right:4vw>"),de=v('<div><div><div class=" bottombx "><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div></div></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),ue=v('<div style="padding:4px;max-width:300px "class=""><h4 class=" textleft centerBx">');const R=y(()=>_(()=>import("./FlexSpace-aeboa_dN.js"),__vite__mapDeps([0,1,2])));y(()=>_(()=>import("./SVG-DjZZaUDK.js"),__vite__mapDeps([3,1,2,4])));const me=y(()=>_(()=>import("./InputHr-B-evoigG.js"),__vite__mapDeps([5,1,2,6])));y(()=>_(()=>import("./ButonHrm-C7HS8wJT.js"),__vite__mapDeps([7,1,2,3,4,8])));const B=y(()=>_(()=>import("./DropDwnSearch-B1X4Wyq5.js"),__vite__mapDeps([9,1,2,10,3,4,11]))),[i,I]=E({item:{firstName:"",lastName:"",lastName2:"",middleName:"",email:"",phoneNumber:"",altPhoneNumber:"",cid:"",ybstreetNo:"",ybstreet:"",ybbetwen1:"",ybbetwen2:"",ybapt:"",ybreparto:""}}),ce=o=>{const[s,b]=E(),[c,p]=E(),n=(r,a)=>{I("item",[r],a)},S=(r,a)=>{p("item",[r],a),I("item","ybestate",a.label)},x=(r,a)=>{p("item",[r],a),I("item","ybcity",a.label)},D=async()=>{let r={...i?.item};r.ssg_consignee_key=A(),r.consigneeId=r.ssg_consignee_key,await be(r),ie(o?.modalId)};return Q(()=>{let r=[];te("M023009")?.provincias.map(a=>{let d=a.label;j?.roles?.[d]?.isActive&&r.push(a)}),b("prov",r),p("item",{})}),(()=>{var r=de(),a=r.firstChild,d=a.firstChild,h=d.firstChild,g=h.nextSibling,m=g.firstChild,f=d.nextSibling,w=f.nextSibling,$=w.firstChild,F=$.firstChild,H=F.nextSibling,z=H.nextSibling;return r.style.setProperty("max-height","80vh"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),t(h,()=>i?.item?.ybestate&&i?.item?.ybcity&&i?.item?.firstName&&i?.item?.lastName&&i?.item?.phoneNumber?"OK":"--",null),t(h,e(k,{get when(){return i?.item?.ybestate&&i?.item?.ybcity&&i?.item?.firstName&&i?.item?.lastName&&i?.item?.phoneNumber},get children(){return e(V,{color:"rgb(200 25 60 / 1)",label:"Agregar",icon:"plus",handleClick:D})}}),null),g.style.setProperty("padding","16px"),t(m,e(B,{get list(){return s?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:l=>S("province",l),width:"260px"})),t(g,e(k,{get when(){return c?.item?.province?.id},get children(){var l=oe();return t(l,e(B,{get list(){return c?.item?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.citiId?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:C=>x("citiId",C),width:"260px"})),l}}),null),t(d,e(k,{get when(){return!N()},get children(){return[(()=>{var l=P();return t(l,e(u,{updForm:n,key:"cid",get value(){return i?.item?.cid},label:"Carnet"}),null),t(l,e(u,{updForm:n,key:"email",get value(){return i?.item?.email},label:"Email"}),null),t(l,e(u,{updForm:n,key:"phoneNumber",get value(){return i?.item?.phoneNumber},label:"Telefono"}),null),t(l,e(u,{updForm:n,key:"altPhoneNumber",get value(){return i?.item?.altPhoneNumber},label:"Telefono 2"}),null),l})(),M(),(()=>{var l=P();return t(l,e(u,{updForm:n,key:"firstName",get value(){return i?.item?.firstName},label:"1er Nombre"}),null),t(l,e(u,{updForm:n,key:"middleName",get value(){return i?.item?.middleName},label:"2do Nombre"}),null),t(l,e(u,{updForm:n,key:"lastName",get value(){return i?.item?.lastName},label:"1er Apellido"}),null),t(l,e(u,{updForm:n,key:"lastName2",get value(){return i?.item?.lastName2},label:"2do Apellido"}),null),l})(),M(),(()=>{var l=P();return t(l,e(u,{updForm:n,key:"ybstreetNo",get value(){return i?.item?.ybstreetNo},label:"No"}),null),t(l,e(u,{updForm:n,key:"ybstreet",get value(){return i?.item?.ybstreet},label:"Calle"}),null),t(l,e(u,{updForm:n,key:"ybbetwen1",get value(){return i?.item?.ybbetwen1},label:"Entre 1"}),null),t(l,e(u,{updForm:n,key:"ybbetwen2",get value(){return i?.item?.ybbetwen2},label:"Entre 2"}),null),t(l,e(u,{updForm:n,key:"ybapt",get value(){return i?.item?.ybapt},label:"Apt"}),null),t(l,e(u,{updForm:n,key:"ybreparto",get value(){return i?.item?.ybreparto},label:"Reparto"}),null),l})(),se()]}}),null),t(d,e(R,{}),null),t(w,e(R,{}),$),t(F,()=>i?.item?.ybcity),t(z,()=>i?.item?.ybestate),T(l=>{var C=N()?"96vw":"920px",O=` ${N()?"isMobile":""}`;return C!==l.e&&((l.e=C)!=null?r.style.setProperty("width",C):r.style.removeProperty("width")),O!==l.t&&q(a,l.t=O),l},{e:void 0,t:void 0}),r})()},u=o=>(()=>{var s=ue(),b=s.firstChild;return t(b,()=>o?.label),t(s,e(me,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return o?.value},get placeholder(){return o?.label},colors:"#2b2b2b",handleClick:c=>o?.updForm(o?.key,c)}),null),s})(),be=async o=>{let s={form:o},b=W(409006);return s={...s,...b},await L(s)};var pe=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style="padding:16px 4vw"><h2>Beneficiarios</h2><div style="margin:15px 0"class=" spaceAround centerBx"></div></div><div>'),ve=v("<div> <!>."),ge=v("<div> ");const ye=y(()=>_(()=>import("./ItemOnConsigner-R0RBGmTC.js"),__vite__mapDeps([12,1,2,4,13,14,15,3,16,17,18,19,20,21,7,8,22,23,24,0]))),_e=y(()=>_(()=>import("./LoadingColorSpinner-CVlJW4fu.js"),__vite__mapDeps([25,1,2,26])));function Te(){const[o,s]=E({list:{search:""}}),[b,c]=K(""),p=le(c,500),n=(r,a)=>{s("list",{[r]:a}),p(A())};U(()=>{});const S=r=>{let a=A(),d={};d.id=a,d.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},d.content=e(ce,{modalId:a}),ae(d)},[x,{refetch:D}]=G(b,async r=>{const a=await he(o?.list?.search);return re(a)});return(()=>{var r=pe(),a=r.firstChild,d=a.firstChild,h=d.nextSibling,g=a.nextSibling;return t(a,e(ne,{}),h),t(h,e(V,{color:"#37be5fff",icon:"plus",label:"Agregar",handleClick:S})),t(r,e(ee,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return o?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:m=>n("search",m)}),g),t(g,e(k,{get when(){return x()},get children(){return e(J,{fallback:m=>(()=>{var f=ve(),w=f.firstChild,$=w.nextSibling;return $.nextSibling,t(f,()=>m.toString(),$),f})(),get children(){return e(X,{get fallback(){return(()=>{var m=ge();return m.firstChild,t(m,e(_e,{stroke:"rgb(200 25 60 / 1)",size:62}),null),m})()},get children(){return e(k,{get when(){return x()},get children(){return e(Y,{get each(){return x()},children:(m,f)=>e(ye,{item:m,refresh:()=>p(A())})})}})}})}})}})),T(m=>Z(g,` ${N()?"":"width:94vw;"} margin: 0 auto;`,m)),r})()}const he=async o=>{if(o.length>4){let s={params:{}};o&&o.split(" ").map((p,n)=>{p&&(s.params[":search"+n]=p.trim())});let b=W(401001);return s={...s,...b},await L(s)}else return{}};export{Te as default};
