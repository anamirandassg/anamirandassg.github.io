const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-D8CPn30t.js","assets/index-CHpRMMcL.js","assets/index-lCkr9jrN.css","assets/SVG-CJrcVamg.js","assets/AddInventory-CHg2M-Af.js","assets/DialogHRM-B26Xh0E8.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-DY3aBeyT.js","assets/DashProducts-DaVn2d--.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InventoryOut-D1UD7via.js","assets/DashInventory-BBzcqXGO.js","assets/Toast-DYKCeSqJ.js","assets/Toast-DLpFKn-Q.css","assets/DropDwnSearch-b-ybe5oC.js","assets/DropDwnSearch-DMkLkRPc.css","assets/LoadingColorSpinner-DNqbN189.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BKzQppQe.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-b_idW_uX.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnGroupInventory-BWFRqmBr.js"])))=>i.map(i=>d[i]);
import{l as v,_ as x,a as S,c as V,r as N,k as M,b as j,i as r,d as e,m as q,G as B,S as i,H,F as G,O as I,n as W,p as z,q as Q,g as c,e as A,f as F,t as a,j as X}from"./index-CHpRMMcL.js";import"./DialogHRM-B26Xh0E8.js";import{validStores as Y}from"./AddInventory-CHg2M-Af.js";import{u as K}from"./debounces-DY3aBeyT.js";import"./DashProducts-DaVn2d--.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-D8CPn30t.js";var J=a('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>'),U=a("<div> <!>."),Z=a("<div> "),D=a('<p class=" textleft fullName_consigne">Producto'),ee=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>'),te=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Existencia'),k=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Costo'),re=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Total'),T=a('<div><div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">'),le=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Envio'),ie=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Precio'),ne=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Venta'),se=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Ganancia'),w=a('<div class="_dsplFlx bottombx tr_bar_15 red"><h5>$'),oe=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),ae=a("<div><h5>$"),de=a('<div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40 "><h4>Resume</h4>');const C=v(()=>x(()=>import("./FlexSpace-D8CPn30t.js"),__vite__mapDeps([0,1,2])));v(()=>x(()=>import("./SVG-CJrcVamg.js"),__vite__mapDeps([3,1,2])));v(()=>x(()=>import("./AddInventory-CHg2M-Af.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,0])));v(()=>x(()=>import("./InventoryOut-D1UD7via.js"),__vite__mapDeps([11,1,2,5,6,7,8,9,10,0,12,13,14,4])));const L=v(()=>x(()=>import("./DropDwnSearch-b-ybe5oC.js"),__vite__mapDeps([15,1,2,7,3,16]))),ce=v(()=>x(()=>import("./LoadingColorSpinner-DNqbN189.js"),__vite__mapDeps([17,1,2,18]))),ue=v(()=>x(()=>import("./InputHr-BKzQppQe.js"),__vite__mapDeps([19,1,2,20])));v(()=>x(()=>import("./CheckBoxSlide-b_idW_uX.js"),__vite__mapDeps([21,1,2,22])));const _e=v(()=>x(()=>import("./ItemOnGroupInventory-BWFRqmBr.js"),__vite__mapDeps([23,1,2,5,6,4,7,8,9,10,0])));function ye(){const[t,s]=S({}),[n,y]=S({}),[l,$]=V({store:"",search:""}),[E,o]=S(""),d=K(o,400),P=(_,h)=>{$({[_]:h}),d(X())};return N(()=>{}),M(()=>{}),j(E,async _=>{let h=`${l?.store} ${l?.search} `;if(!l?.store)return[];const f=await me(h,l?.type);let m={},b={cost:0,shipingCost:0,salePrice:0};return I(f).map(O=>{let g=f[O];g.products.map(u=>{if(l?.type&&g?.type!==l?.type)return;m[u.product?.id]||(m[u.product?.id]={productName:u.product?.label,stock:0,invoices:{},cost:0,price:0,shipingCost:0,salePrice:0});let R=l?.type==="SALES"?-1:1;m[u.product?.id].stock+=p(u.qty),m[u.product?.id].salePrice+=p(u.salePrice),l?.type==="SALES"&&(b.cost+=p(u.price)*p(u.qty),b.shipingCost+=p(g.weight)*p(g.pricePerPound)*R,b.salePrice+=p(u.salePrice)),m[u.product?.id].price+=p(u.price)*p(u.qty),m[u.product?.id].shipingCost+=p(g.weight)*p(g.pricePerPound)*R,m[u.product?.id].invoices[g.invoice]={weight:g.weight,pricePerPound:g.pricePerPound}})}),y(b),s(m),[]}),[(()=>{var _=J(),h=_.firstChild,f=h.nextSibling,m=f.nextSibling;return r(h,e(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return l?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:b=>P("search",b)})),r(f,e(L,{list:[{id:"ENTRY",label:"ENTRADAS"},{id:"TRANSFER",label:"TRANSFERENCIAS"},{id:"SALES",label:"VENTAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return l?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:b=>P("type",b.id),width:"260px"})),r(m,e(L,{get list(){return Y()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return l?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:b=>P("store",b.id),width:"260px"})),_})(),e(i,{get when(){return q(()=>!!l?.store)()&&t()},get children(){return e(B,{fallback:_=>(()=>{var h=U(),f=h.firstChild,m=f.nextSibling;return m.nextSibling,r(h,()=>_.toString(),m),h})(),get children(){return[e(i,{get when(){return l?.type!=="SALES"},get children(){return e(he,{})}}),e(i,{get when(){return l?.type==="SALES"},get children(){return e(pe,{get item(){return n()}})}}),e(H,{get fallback(){return(()=>{var _=Z();return _.firstChild,r(_,e(ce,{stroke:"rgb(200 25 60 / 1)",size:62}),null),_})()},get children(){return e(i,{get when(){return t()},get children(){return e(G,{get each(){return I(t())},children:(_,h)=>e(_e,{get item(){return t()?.[_]},refetch:()=>{},get isSales(){return l?.type==="SALES"}})})}})}})]}})}})]}const me=async(t,s)=>{let n={params:{businessId:W?.profile?.businessYId}};t&&t.split(" ").map(($,E)=>{$&&(n.params[":search"+E]=$.trim())}),s&&(n.params[":type"]=s.trim());let y=z(132001);n={...n,...y};const l=await Q(n);return l?.error?{}:l},p=t=>t?t*1:0,he=()=>(()=>{var t=T(),s=t.firstChild,n=s.firstChild;return r(n,e(i,{when:1,get children(){return D()}})),r(s,e(C,{}),null),r(s,e(i,{get when(){return!c()},get children(){return ee()}}),null),r(s,e(C,{}),null),r(s,e(i,{get when(){return!c()},get children(){return te()}}),null),r(s,e(i,{get when(){return!c()},get children(){return k()}}),null),r(s,e(i,{get when(){return!c()},get children(){return re()}}),null),A(()=>F(t,`client_item_box gWXAaj jlytmu inventory ${c()?"isMobile":""}`)),t})(),pe=t=>(()=>{var s=T(),n=s.firstChild,y=n.firstChild;return r(y,e(i,{when:1,get children(){return D()}})),r(n,e(C,{}),null),r(n,e(i,{get when(){return!c()},get children(){return le()}}),null),r(n,e(C,{}),null),r(n,e(i,{get when(){return!c()},get children(){return ie()}}),null),r(n,e(i,{get when(){return!c()},get children(){return k()}}),null),r(n,e(i,{get when(){return!c()},get children(){return ne()}}),null),r(n,e(i,{get when(){return!c()},get children(){return se()}}),null),r(s,e(i,{get when(){return t?.item?.salePrice&&t?.item?.cost},get children(){var l=de(),$=l.firstChild,E=$.firstChild;return E.style.setProperty("color","#4d4d4d"),r(l,e(C,{}),null),r(l,e(i,{get when(){return!c()&&t?.item?.shipingCost},get children(){var o=w(),d=o.firstChild;return d.firstChild,r(d,()=>t?.item?.shipingCost?.toFixed(2),null),o}}),null),r(l,e(C,{}),null),r(l,e(i,{get when(){return!c()&&t?.item?.cost},get children(){var o=w(),d=o.firstChild;return d.firstChild,r(d,()=>t?.item?.cost?.toFixed(2),null),o}}),null),r(l,e(i,{get when(){return!c()&&t?.item?.cost&&t?.item?.shipingCost},get children(){var o=w(),d=o.firstChild;return d.firstChild,r(d,()=>(t?.item?.shipingCost+t?.item?.cost).toFixed(2),null),o}}),null),r(l,e(i,{get when(){return!c()&&t?.item?.salePrice},get children(){var o=oe(),d=o.firstChild;return d.firstChild,r(d,()=>t?.item?.salePrice?.toFixed(2),null),o}}),null),r(l,e(i,{get when(){return!c()&&t?.item?.salePrice&&t?.item?.shipingCost&&t?.item?.cost},get children(){var o=ae(),d=o.firstChild;return d.firstChild,r(d,()=>(t?.item?.salePrice+(t?.item?.shipingCost+t?.item?.cost)).toFixed(2),null),A(()=>F(o,`_dsplFlx bottombx tr_bar_15  ${t?.item?.salePrice-(t?.item?.shipingCost+t?.item?.cost)>0?"green":"red"}`)),o}}),null),l}}),null),A(()=>F(s,`client_item_box gWXAaj jlytmu inventory ${c()?"isMobile":""}`)),s})();export{me as LookupInventory,ye as default,p as isValNum};
