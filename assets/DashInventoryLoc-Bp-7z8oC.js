const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-ZuIl_VRM.js","assets/index-CMPFS5l3.js","assets/index-CaL-WNrg.css","assets/SVG-Bw-dPoFc.js","assets/Util-7ERmh4Cp.js","assets/AddInventory-DqMfkdtO.js","assets/DialogHRM-1fBgaf-_.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-B1ypXRVS.js","assets/DashProducts-5qP7Cp-q.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InventoryOut-anUGo9cI.js","assets/DashInventory-C7SYd6WF.js","assets/Toast-DS_YK2AF.js","assets/Toast-DLpFKn-Q.css","assets/DropDwnSearch-BIUDtEp0.js","assets/DropDwnSearch-DMkLkRPc.css","assets/LoadingColorSpinner-DdRS_GH9.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-DWNR00eQ.js","assets/InputHr-BXFw4d2l.css","assets/CheckBoxSlide-CcsmsH4k.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnGroupInventory-BUuI_wgD.js"])))=>i.map(i=>d[i]);
import{l as v,_ as x,a as S,c as V,o as N,b as M,n as j,i as r,f as e,p as q,E as B,S as i,x as H,F as W,g as z,j as c,h as A,m as F,t as a}from"./index-CMPFS5l3.js";import{O as I,g as G,f as Q,a as X}from"./Util-7ERmh4Cp.js";import"./DialogHRM-1fBgaf-_.js";import{validStores as Y}from"./AddInventory-DqMfkdtO.js";import{u as K}from"./debounces-B1ypXRVS.js";import"./DashProducts-5qP7Cp-q.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-ZuIl_VRM.js";var J=a('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>'),U=a("<div> <!>."),Z=a("<div> "),D=a('<p class=" textleft fullName_consigne">Producto'),ee=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>'),te=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Existencia'),T=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Costo'),re=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Total'),k=a('<div><div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">'),le=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Envio'),ie=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Precio'),ne=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Venta'),se=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Ganancia'),w=a('<div class="_dsplFlx bottombx tr_bar_15 red"><h5>$'),oe=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),ae=a("<div><h5>$"),de=a('<div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40 "><h4>Resume</h4>');const C=v(()=>x(()=>import("./FlexSpace-ZuIl_VRM.js"),__vite__mapDeps([0,1,2])));v(()=>x(()=>import("./SVG-Bw-dPoFc.js"),__vite__mapDeps([3,1,2,4])));v(()=>x(()=>import("./AddInventory-DqMfkdtO.js"),__vite__mapDeps([5,1,2,4,6,7,8,9,10,11,0])));v(()=>x(()=>import("./InventoryOut-anUGo9cI.js"),__vite__mapDeps([12,1,2,4,6,7,8,9,10,11,0,13,14,15,5])));const L=v(()=>x(()=>import("./DropDwnSearch-BIUDtEp0.js"),__vite__mapDeps([16,1,2,8,3,4,17]))),ce=v(()=>x(()=>import("./LoadingColorSpinner-DdRS_GH9.js"),__vite__mapDeps([18,1,2,19]))),ue=v(()=>x(()=>import("./InputHr-DWNR00eQ.js"),__vite__mapDeps([20,1,2,21])));v(()=>x(()=>import("./CheckBoxSlide-CcsmsH4k.js"),__vite__mapDeps([22,1,2,23])));const _e=v(()=>x(()=>import("./ItemOnGroupInventory-BUuI_wgD.js"),__vite__mapDeps([24,1,2,4,6,7,5,8,9,10,11,0])));function Ee(){const[t,s]=S({}),[n,y]=S({}),[l,$]=V({store:"",search:""}),[E,o]=S(""),d=K(o,400),P=(_,h)=>{$({[_]:h}),d(X())};return N(()=>{}),M(()=>{}),j(E,async _=>{let h=`${l?.store} ${l?.search} `;if(!l?.store)return[];const f=await me(h,l?.type);let m={},g={cost:0,shipingCost:0,salePrice:0};return I(f).map(O=>{let b=f[O];b.products.map(u=>{if(l?.type&&b?.type!==l?.type)return;m[u.product?.id]||(m[u.product?.id]={productName:u.product?.label,stock:0,invoices:{},cost:0,price:0,shipingCost:0,salePrice:0});let R=l?.type==="SALES"?-1:1;m[u.product?.id].stock+=p(u.qty),m[u.product?.id].salePrice+=p(u.salePrice),l?.type==="SALES"&&(g.cost+=p(u.price)*p(u.qty),g.shipingCost+=p(b.weight)*p(b.pricePerPound)*R,g.salePrice+=p(u.salePrice)),m[u.product?.id].price+=p(u.price)*p(u.qty),m[u.product?.id].shipingCost+=p(b.weight)*p(b.pricePerPound)*R,m[u.product?.id].invoices[b.invoice]={weight:b.weight,pricePerPound:b.pricePerPound}})}),y(g),s(m),[]}),[(()=>{var _=J(),h=_.firstChild,f=h.nextSibling,m=f.nextSibling;return r(h,e(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return l?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:g=>P("search",g)})),r(f,e(L,{list:[{id:"ENTRY",label:"ENTRADAS"},{id:"TRANSFER",label:"TRANSFERENCIAS"},{id:"SALES",label:"VENTAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return l?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:g=>P("type",g.id),width:"260px"})),r(m,e(L,{get list(){return Y()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return l?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:g=>P("store",g.id),width:"260px"})),_})(),e(i,{get when(){return q(()=>!!l?.store)()&&t()},get children(){return e(B,{fallback:_=>(()=>{var h=U(),f=h.firstChild,m=f.nextSibling;return m.nextSibling,r(h,()=>_.toString(),m),h})(),get children(){return[e(i,{get when(){return l?.type!=="SALES"},get children(){return e(he,{})}}),e(i,{get when(){return l?.type==="SALES"},get children(){return e(pe,{get item(){return n()}})}}),e(H,{get fallback(){return(()=>{var _=Z();return _.firstChild,r(_,e(ce,{stroke:"rgb(200 25 60 / 1)",size:62}),null),_})()},get children(){return e(i,{get when(){return t()},get children(){return e(W,{get each(){return I(t())},children:(_,h)=>e(_e,{get item(){return t()?.[_]},refetch:()=>{},get isSales(){return l?.type==="SALES"}})})}})}})]}})}})]}const me=async(t,s)=>{let n={params:{businessId:z?.profile?.businessYId}};t&&t.split(" ").map(($,E)=>{$&&(n.params[":search"+E]=$.trim())}),s&&(n.params[":type"]=s.trim());let y=G(132001);n={...n,...y};const l=await Q(n);return l?.error?{}:l},p=t=>t?t*1:0,he=()=>(()=>{var t=k(),s=t.firstChild,n=s.firstChild;return r(n,e(i,{when:1,get children(){return D()}})),r(s,e(C,{}),null),r(s,e(i,{get when(){return!c()},get children(){return ee()}}),null),r(s,e(C,{}),null),r(s,e(i,{get when(){return!c()},get children(){return te()}}),null),r(s,e(i,{get when(){return!c()},get children(){return T()}}),null),r(s,e(i,{get when(){return!c()},get children(){return re()}}),null),A(()=>F(t,`client_item_box gWXAaj jlytmu inventory ${c()?"isMobile":""}`)),t})(),pe=t=>(()=>{var s=k(),n=s.firstChild,y=n.firstChild;return r(y,e(i,{when:1,get children(){return D()}})),r(n,e(C,{}),null),r(n,e(i,{get when(){return!c()},get children(){return le()}}),null),r(n,e(C,{}),null),r(n,e(i,{get when(){return!c()},get children(){return ie()}}),null),r(n,e(i,{get when(){return!c()},get children(){return T()}}),null),r(n,e(i,{get when(){return!c()},get children(){return ne()}}),null),r(n,e(i,{get when(){return!c()},get children(){return se()}}),null),r(s,e(i,{get when(){return t?.item?.salePrice&&t?.item?.cost},get children(){var l=de(),$=l.firstChild,E=$.firstChild;return E.style.setProperty("color","#4d4d4d"),r(l,e(C,{}),null),r(l,e(i,{get when(){return!c()&&t?.item?.shipingCost},get children(){var o=w(),d=o.firstChild;return d.firstChild,r(d,()=>t?.item?.shipingCost?.toFixed(2),null),o}}),null),r(l,e(C,{}),null),r(l,e(i,{get when(){return!c()&&t?.item?.cost},get children(){var o=w(),d=o.firstChild;return d.firstChild,r(d,()=>t?.item?.cost?.toFixed(2),null),o}}),null),r(l,e(i,{get when(){return!c()&&t?.item?.cost&&t?.item?.shipingCost},get children(){var o=w(),d=o.firstChild;return d.firstChild,r(d,()=>(t?.item?.shipingCost+t?.item?.cost).toFixed(2),null),o}}),null),r(l,e(i,{get when(){return!c()&&t?.item?.salePrice},get children(){var o=oe(),d=o.firstChild;return d.firstChild,r(d,()=>t?.item?.salePrice?.toFixed(2),null),o}}),null),r(l,e(i,{get when(){return!c()&&t?.item?.salePrice&&t?.item?.shipingCost&&t?.item?.cost},get children(){var o=ae(),d=o.firstChild;return d.firstChild,r(d,()=>(t?.item?.salePrice+(t?.item?.shipingCost+t?.item?.cost)).toFixed(2),null),A(()=>F(o,`_dsplFlx bottombx tr_bar_15  ${t?.item?.salePrice-(t?.item?.shipingCost+t?.item?.cost)>0?"green":"red"}`)),o}}),null),l}}),null),A(()=>F(s,`client_item_box gWXAaj jlytmu inventory ${c()?"isMobile":""}`)),s})();export{me as LookupInventory,Ee as default,p as isValNum};
