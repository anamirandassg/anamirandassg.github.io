const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CZ24ALRD.js","assets/index-_6QZOSty.js","assets/index-DaYrm968.css","assets/SVG-D6qf7RIp.js","assets/Util-B8-DWw-6.js","assets/LoadingColorSpinner-leAZOpHe.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-SATsEAd3.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-FSFl7x1c.js","assets/ButonHrm-BSeWNUGQ.css","assets/PickDate-Cp6RReDO.js","assets/DialogHRM-uAg9dn__.js","assets/DialogHRM-V9_lZntj.css"])))=>i.map(i=>d[i]);
import{d as q,l as A,_ as O,c as L,a as _,o as Z,b as ee,e as K,i as s,f as o,u as re,S as Q,g as S,h as J,s as te,t as y,j as oe}from"./index-_6QZOSty.js";import{g as B,f as I,i as le,a as $,b as j,O as W,c as se}from"./Util-B8-DWw-6.js";import"./browser-image-compression-BVJ4p9S0.js";import{OpenToast as D}from"./Toast-IeHJnJSd.js";import"./AddInventory-9OTbHYyH.js";import"./fontkit.es-BHcUmD3g.js";import"./qrcode-DHy8FFhS.js";import{u as T}from"./debounces-B0GFGtJ-.js";/* empty css                */import{OpenModal as ne,CloseModal as ae}from"./DialogHRM-uAg9dn__.js";import"./DashProducts-CiWEcouC.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-CZ24ALRD.js";q(["keydown","input"]);var ie=y('<div style="padding:50px 0 0 0"><section class="qsuVSc mainM">'),ce=y('<section class="bLl6je "><section class="dvPdhb "><div class="QCNFEe centerBx"><p class=jhB0af>Confirmar</p></div><section class="EMijzc centerBx">'),de=y('<section class="Mijzc12 blue_datepick">'),be=y('<section class=KgyCAd><section class=WirBi><div class="QCNFEe centerBx"><p class=jhB0af>Quien envia</p><section class=JpKBkb><button class=yjHiqb><span>Buscar coincidencias</span></button></section></div><section class="EMijzc "><section class="Mijzc12 "></section><section class=Mijzc12>'),w=y('<section class="Mijzc12 centerBx flxWrp spaceAround">'),V=y("<div class=separator>"),ue=y('<section class="rtS8wf InvE "><div class=X3QHFf><section class=WirBi><section class=""><div class="QCNFEe centerBx"><p class=jhB0af>Quien recibe</p><section class=dEfaq><section class=JpKBkb><button class=yjHiqb><span>Buscar coincidencias</span></button></section></section></div><div class=" centerBx flxWrp spaceAround"></div><section class="Mijzc12 centerBx "></section><section class="EMijzc centerBx"><section class=pFJUxe><section class=DHk3Fe>'),fe=y('<div class=save><div class="container savings"><div class="bento-text standardSubheading3">'),pe=y('<div><div class=QCNFEe><p class=jhB0af>Confirmar Orden</p></div><p class=B7xUP><span data-test-integ-cart-subtotal-label="">Desea enviar la orden</span></p><div class=separator></div><div style=margin:15px class=" spaceAround centerBx">');const M=A(()=>O(()=>import("./FlexSpace-CZ24ALRD.js"),__vite__mapDeps([0,1,2]))),me=A(()=>O(()=>import("./SVG-D6qf7RIp.js"),__vite__mapDeps([3,1,2,4])));A(()=>O(()=>import("./LoadingColorSpinner-leAZOpHe.js"),__vite__mapDeps([5,1,2,6])));const p=A(()=>O(()=>import("./InputHr-SATsEAd3.js"),__vite__mapDeps([7,1,2,8]))),U=A(()=>O(()=>import("./ButonHrm-FSFl7x1c.js"),__vite__mapDeps([9,1,2,3,4,10]))),ve=A(()=>O(()=>import("./PickDate-Cp6RReDO.js"),__vite__mapDeps([11,1,2,12,13,4]))),[Le,Qe]=L({items:{}}),Te="348723orh2idsffs";let he={name:"",phoneNumberS:"",dob:""},ge={firstName:"",lastName:"",lastName2:"",middleName:"",email:"",phoneNumber:"",altPhoneNumber:"",cid:"",ybstreetNo:"",ybstreet:"",ybbetwen1:"",ybbetwen2:"",ybapt:"",ybreparto:""};const[N,H]=L(he),[f,Y]=L(ge);function ze(){_(0),_("");const[n,t]=_("");T(t,400),Z(()=>{}),ee(()=>{}),K(()=>{l()});const l=async()=>{};return(()=>{var b=ie(),e=b.firstChild;return s(e,o(Ce,{}),null),s(e,o(_e,{}),null),s(e,o(ye,{}),null),b})()}const Ce=n=>{const t=re(),l=async r=>{let i=new Date,g=$(),u=Object.assign({},j(N),j(f)),k={type:"SALES",invoice:i.getFullYear()+se(12),description:"",store:S?.profile?.agencyStore?.id,ssg_inventory_key:g,ssg_sorder_key:g,createDate:i.getTime(),shipper_consignee:u,packagesOrder:!0,businessId:S?.profile?.businessYId},c={params:{businessId:S?.profile?.businessYId},form:k},m=B(431005),h={...c,...m};(await I(h))?.error||(ae(r),t("/orders",{replace:!0}))},b=()=>{let r=$(),i={};i.id=r,i.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},i.content=o($e,{modalId:r,completeOrder:()=>l(r)}),ne(i)},e=()=>{let r=Object.assign({},j(N),j(f));return r.name&&r.phoneNumberS&&r.phoneNumber&&r.cid&&r.firstName&&r.lastName&&r.lastName2&&r.ybstreet};return o(Q,{get when(){return e()},get children(){var r=ce(),i=r.firstChild,g=i.firstChild,u=g.nextSibling;return s(u,o(M,{}),null),s(u,o(U,{color:"#1967d2",label:"Enviar Orden",icon:"outline_cart",handleClick:b}),null),r}})},_e=n=>{const[t,l]=_(""),[b,e]=_(0),r=T(l,400),i=async()=>{let u=N?.phoneNumberS;if(!(typeof u!="number"&&!isNaN(u)&&u.length===10)){D({text:u+" no es un numero de telefono valido ",timeout:3500,theme:"red",id:$()}),e(1);return}let c=await ke(u),m=W(c)?.[0];if(c?.[m]?.name?.toLowerCase()?.indexOf(N?.name?.toLowerCase())>=0){let v=c?.[m]?.dob.split("-"),C=new Date(v[1]+"/"+v[2]+"/"+v[0]);H({dob:C,name:c?.[m]?.name,phoneNumberS:c?.[m]?.phoneNumber}),e(1)}else{D({text:" la informacion no coincide ",timeout:3500,theme:"red",id:$()}),e(1);return}},g=(u,k)=>{H({[u]:k}),r($())};return(()=>{var u=be(),k=u.firstChild,c=k.firstChild,m=c.firstChild,h=m.nextSibling,v=h.firstChild,C=c.nextSibling,E=C.firstChild,P=E.nextSibling;return s(c,o(M,{}),h),v.$$click=i,s(C,o(G,{label:"buscar coincidencias con su numero de telefono y apellido",icon:"info",backColor:"#edf4fd",color:"#1967d2"}),E),s(E,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"numero de telefono",colors:"#2b2b2b",type:"number",handleClick:x=>g("phoneNumberS",x),get value(){return N?.phoneNumberS}})),s(P,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"Apellido",colors:"#2b2b2b",handleClick:x=>g("name",x),get value(){return N?.name}})),s(C,o(Q,{get when(){return b()},get children(){var x=de();return s(x,o(ve,{get init(){return N?.dob},label:"Fecha de nacimiento",updDate:F=>g("dob",F)})),x}}),null),u})()},ye=n=>{const[t,l]=_(""),b=T(l,400),e=(c,m)=>{Y({[c]:m}),b($())};_("");const[r,i]=_(0),[g,u]=_("");K(()=>{u(S?.profile?.agencyStore?.id)});const k=async()=>{let c=f?.cid;if(!(typeof c!="number"&&!isNaN(c)&&c.length===11)){D({text:c+" no es un carnet de identidad valido ",timeout:3500,theme:"red",id:$()}),i(1);return}let h=await xe(c),v=W(h)?.[0];if(h[v]?.cid)console.log(h[v]),Y(h[v]),i(1);else{i(1),D({text:"no encontramos ninguna coincidencia ",timeout:3500,theme:"red",id:$()});return}};return(()=>{var c=ue(),m=c.firstChild,h=m.firstChild,v=h.firstChild,C=v.firstChild,E=C.firstChild,P=E.nextSibling,x=P.firstChild,F=x.firstChild,z=C.nextSibling,R=z.nextSibling,X=R.nextSibling;return s(C,o(M,{}),P),F.$$click=k,s(z,o(G,{label:"buscar coincidencias con el carnet identidad",icon:"info",backColor:"#edf4fd",color:"#1967d2"})),s(R,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",colors:"#2b2b2b",label:"carnet de identidad",handleClick:a=>e("cid",a),get value(){return f?.cid}})),s(v,o(Q,{get when(){return r()===1},get children(){return[(()=>{var a=w();return s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",colors:"#2b2b2b",label:"1er nombre",handleClick:d=>e("firstName",d),get value(){return f?.firstName}}),null),s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"2do nombre",colors:"#2b2b2b",handleClick:d=>e("middleName",d),get value(){return f?.middleName}}),null),a})(),(()=>{var a=w();return s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"1er Apellido",colors:"#2b2b2b",handleClick:d=>e("lastName",d),get value(){return f?.lastName}}),null),s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"2do Apellido",colors:"#2b2b2b",handleClick:d=>e("lastName2",d),get value(){return f?.lastName2}}),null),a})(),V(),(()=>{var a=w();return s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"Telefono Principal",colors:"#2b2b2b",handleClick:d=>e("phoneNumber",d),get value(){return f?.phoneNumber}}),null),s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"Telefono Alternativo",colors:"#2b2b2b",handleClick:d=>e("altPhoneNumber",d),get value(){return f?.altPhoneNumber}}),null),a})(),V(),(()=>{var a=w();return s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"Calle",colors:"#2b2b2b",handleClick:d=>e("ybstreet",d),get value(){return f?.ybstreet}}),null),s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"No",colors:"#2b2b2b",handleClick:d=>e("ybstreetNo",d),get value(){return f?.ybstreetNo}}),null),a})(),(()=>{var a=w();return s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"Entre calle",colors:"#2b2b2b",handleClick:d=>e("ybbetwen1",d),get value(){return f?.ybbetwen1}}),null),s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"Y calle",colors:"#2b2b2b",handleClick:d=>e("ybbetwen2",d),get value(){return f?.ybbetwen2}}),null),a})(),(()=>{var a=w();return s(a,o(p,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",label:"Reparto",colors:"#2b2b2b",handleClick:d=>e("ybreparto",d),get value(){return f?.ybreparto}})),a})()]}}),X),c})()},Re=async(n,t)=>{let l={params:{businessId:S?.profile?.businessYId}};n&&n.split(" ").map((r,i)=>{r&&(l.params[":search"+i]=r.trim())});let b=B(122001);l={...l,...b},l.params[":search0"];const e=await I(l);return e?.error?{}:e},Ve=n=>new Promise((t,l)=>{le.get(n,function(e,r){t(r)})}),He=async(n,t)=>{let l={params:{businessId:S?.profile?.businessYId,":store":t.trim()}};n&&n.split(" ").map((r,i)=>{r&&(l.params[":search"+i]=r.trim())});let b=B(132001);l={...l,...b},l.params[":search0"];const e=await I(l);return e?.error?{}:e},ke=async n=>{if(n.length===10){let t={params:{}};n&&n.split(" ").map((e,r)=>{e&&(t.params[":search"+r]=e.trim())});let l=B(421001);return t={...t,...l},await I(t)}else return{}},xe=async n=>{if(n.length===11){let t={params:{}};n&&n.split(" ").map((e,r)=>{e&&(t.params[":search"+r]=e.trim())});let l=B(401001);return t={...t,...l},await I(t)}else return{}},G=n=>{const t=()=>({"--bento-badge-background-color":n?.backColor,"--bento-badge-text-color":n?.color});return(()=>{var l=fe(),b=l.firstChild,e=b.firstChild;return s(b,o(me,{get name(){return n.icon},size:16,color:"var(--bento-badge-text-color)"}),e),s(e,()=>n.label),J(r=>te(l,t(),r)),l})()};function $e(n){return(()=>{var t=pe(),l=t.firstChild,b=l.nextSibling,e=b.nextSibling,r=e.nextSibling;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#fff"),t.style.setProperty("border-radius","11px"),t.style.setProperty("padding"," 0 21px"),s(r,o(M,{}),null),s(r,o(U,{color:"#646cff",icon:"send",label:"Completar Orden",get handleClick(){return n.completeOrder}}),null),J(i=>(i=oe()?"96vw":"420px")!=null?t.style.setProperty("width",i):t.style.removeProperty("width")),t})()}q(["click"]);export{He as LookupInventory,Re as LookupProducts,ze as default,Ve as getCartId,Le as inventoryItems,Te as inventoryKey,Qe as setInventoryItems};
