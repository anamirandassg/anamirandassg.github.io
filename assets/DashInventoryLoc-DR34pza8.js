const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-DxE3mQXi.js","assets/index-DjfzCh1Q.js","assets/index-BmzAZVve.css","assets/SVG-CQCqG7HI.js","assets/AddInventory-DkIP6A9h.js","assets/Util-JtLJw1Vf.js","assets/DialogHRM-DRvzMvld.js","assets/DialogHRM-V9_lZntj.css","assets/debounces-BrrxaB09.js","assets/DashProducts-N16ubWmU.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InventoryOut-BmrJOKho.js","assets/DashInventory-BX3H1hNB.js","assets/Toast-ByeAacnd.js","assets/Toast-DLpFKn-Q.css","assets/DropDwnSearch-h8faozQl.js","assets/DropDwnSearch-DMkLkRPc.css","assets/LoadingColorSpinner-C7cgwQQf.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-DlcsQAW6.js","assets/InputHr-M3rJ9grQ.css","assets/CheckBoxSlide-Bn8Je-iZ.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnGroupInventory-PR6OdnhF.js"])))=>i.map(i=>d[i]);
import{l as v,_ as x,a as S,c as V,o as N,j as M,b as j,i as r,d as e,k as q,E as B,S as i,w as H,F as W,m as z,g as c,e as A,f as F,t as a}from"./index-DjfzCh1Q.js";import{O as I,b as G,f as Q,g as X}from"./Util-JtLJw1Vf.js";import"./DialogHRM-DRvzMvld.js";import{validStores as Y}from"./AddInventory-DkIP6A9h.js";import{u as K}from"./debounces-BrrxaB09.js";import"./DashProducts-N16ubWmU.js";import"./App.module-CbHnVtRQ.js";import"./FlexSpace-DxE3mQXi.js";var J=a('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:16px><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>'),U=a("<div> <!>."),Z=a("<div> "),D=a('<p class=" textleft fullName_consigne">Producto'),ee=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>'),te=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Existencia'),k=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Costo'),re=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Total'),T=a('<div><div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40">'),le=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Envio'),ie=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Precio'),ne=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Venta'),se=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>Ganancia'),w=a('<div class="_dsplFlx bottombx tr_bar_15 red"><h5>$'),oe=a('<div class="_dsplFlx bottombx tr_bar_15"><h5>$'),ae=a("<div><h5>$"),de=a('<div class="_dsplFlx bottombx centerBx"><div class="_dsplFlx bottombx tr_bar_40 "><h4>Resume</h4>');const C=v(()=>x(()=>import("./FlexSpace-DxE3mQXi.js"),__vite__mapDeps([0,1,2])));v(()=>x(()=>import("./SVG-CQCqG7HI.js"),__vite__mapDeps([3,1,2])));v(()=>x(()=>import("./AddInventory-DkIP6A9h.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,0])));v(()=>x(()=>import("./InventoryOut-BmrJOKho.js"),__vite__mapDeps([12,1,2,5,6,7,8,9,10,11,0,13,14,15,4])));const L=v(()=>x(()=>import("./DropDwnSearch-h8faozQl.js"),__vite__mapDeps([16,1,2,8,3,17]))),ce=v(()=>x(()=>import("./LoadingColorSpinner-C7cgwQQf.js"),__vite__mapDeps([18,1,2,19]))),ue=v(()=>x(()=>import("./InputHr-DlcsQAW6.js"),__vite__mapDeps([20,1,2,21])));v(()=>x(()=>import("./CheckBoxSlide-Bn8Je-iZ.js"),__vite__mapDeps([22,1,2,23])));const _e=v(()=>x(()=>import("./ItemOnGroupInventory-PR6OdnhF.js"),__vite__mapDeps([24,1,2,5,6,7,4,8,9,10,11,0])));function Ee(){const[t,s]=S({}),[n,y]=S({}),[l,$]=V({store:"",search:""}),[E,o]=S(""),d=K(o,400),P=(_,h)=>{$({[_]:h}),d(X())};return N(()=>{}),M(()=>{}),j(E,async _=>{let h=`${l?.store} ${l?.search} `;if(!l?.store)return[];const f=await me(h,l?.type);let m={},g={cost:0,shipingCost:0,salePrice:0};return I(f).map(O=>{let p=f[O];p.products.map(u=>{if(l?.type&&p?.type!==l?.type)return;m[u.product?.id]||(m[u.product?.id]={productName:u.product?.label,stock:0,invoices:{},cost:0,price:0,shipingCost:0,salePrice:0});let R=l?.type==="SALES"?-1:1;m[u.product?.id].stock+=b(u.qty),m[u.product?.id].salePrice+=b(u.salePrice),l?.type==="SALES"&&(g.cost+=b(u.price)*b(u.qty),g.shipingCost+=b(p.weight)*b(p.pricePerPound)*R,g.salePrice+=b(u.salePrice)),m[u.product?.id].price+=b(u.price)*b(u.qty),m[u.product?.id].shipingCost+=b(p.weight)*b(p.pricePerPound)*R,m[u.product?.id].invoices[p.invoice]={weight:p.weight,pricePerPound:p.pricePerPound}})}),y(g),s(m),[]}),[(()=>{var _=J(),h=_.firstChild,f=h.nextSibling,m=f.nextSibling;return r(h,e(ue,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return l?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:g=>P("search",g)})),r(f,e(L,{list:[{id:"ENTRY",label:"ENTRADAS"},{id:"TRANSFER",label:"TRANSFERENCIAS"},{id:"SALES",label:"VENTAS"}],lbl_empty:"Tipo de Movimiento",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return l?.type},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:g=>P("type",g.id),width:"260px"})),r(m,e(L,{get list(){return Y()},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",borderColor:"#b2b2b2",get value(){return l?.store},hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:g=>P("store",g.id),width:"260px"})),_})(),e(i,{get when(){return q(()=>!!l?.store)()&&t()},get children(){return e(B,{fallback:_=>(()=>{var h=U(),f=h.firstChild,m=f.nextSibling;return m.nextSibling,r(h,()=>_.toString(),m),h})(),get children(){return[e(i,{get when(){return l?.type!=="SALES"},get children(){return e(he,{})}}),e(i,{get when(){return l?.type==="SALES"},get children(){return e(be,{get item(){return n()}})}}),e(H,{get fallback(){return(()=>{var _=Z();return _.firstChild,r(_,e(ce,{stroke:"rgb(200 25 60 / 1)",size:62}),null),_})()},get children(){return e(i,{get when(){return t()},get children(){return e(W,{get each(){return I(t())},children:(_,h)=>e(_e,{get item(){return t()?.[_]},refetch:()=>{},get isSales(){return l?.type==="SALES"}})})}})}})]}})}})]}const me=async(t,s)=>{let n={params:{businessId:z?.profile?.businessYId}};t&&t.split(" ").map(($,E)=>{$&&(n.params[":search"+E]=$.trim())}),s&&(n.params[":type"]=s.trim());let y=G(132001);n={...n,...y};const l=await Q(n);return l?.error?{}:l},b=t=>t?t*1:0,he=()=>(()=>{var t=T(),s=t.firstChild,n=s.firstChild;return r(n,e(i,{when:1,get children(){return D()}})),r(s,e(C,{}),null),r(s,e(i,{get when(){return!c()},get children(){return ee()}}),null),r(s,e(C,{}),null),r(s,e(i,{get when(){return!c()},get children(){return te()}}),null),r(s,e(i,{get when(){return!c()},get children(){return k()}}),null),r(s,e(i,{get when(){return!c()},get children(){return re()}}),null),A(()=>F(t,`client_item_box gWXAaj jlytmu inventory ${c()?"isMobile":""}`)),t})(),be=t=>(()=>{var s=T(),n=s.firstChild,y=n.firstChild;return r(y,e(i,{when:1,get children(){return D()}})),r(n,e(C,{}),null),r(n,e(i,{get when(){return!c()},get children(){return le()}}),null),r(n,e(C,{}),null),r(n,e(i,{get when(){return!c()},get children(){return ie()}}),null),r(n,e(i,{get when(){return!c()},get children(){return k()}}),null),r(n,e(i,{get when(){return!c()},get children(){return ne()}}),null),r(n,e(i,{get when(){return!c()},get children(){return se()}}),null),r(s,e(i,{get when(){return t?.item?.salePrice&&t?.item?.cost},get children(){var l=de(),$=l.firstChild,E=$.firstChild;return E.style.setProperty("color","#4d4d4d"),r(l,e(C,{}),null),r(l,e(i,{get when(){return!c()&&t?.item?.shipingCost},get children(){var o=w(),d=o.firstChild;return d.firstChild,r(d,()=>t?.item?.shipingCost?.toFixed(2),null),o}}),null),r(l,e(C,{}),null),r(l,e(i,{get when(){return!c()&&t?.item?.cost},get children(){var o=w(),d=o.firstChild;return d.firstChild,r(d,()=>t?.item?.cost?.toFixed(2),null),o}}),null),r(l,e(i,{get when(){return!c()&&t?.item?.cost&&t?.item?.shipingCost},get children(){var o=w(),d=o.firstChild;return d.firstChild,r(d,()=>(t?.item?.shipingCost+t?.item?.cost).toFixed(2),null),o}}),null),r(l,e(i,{get when(){return!c()&&t?.item?.salePrice},get children(){var o=oe(),d=o.firstChild;return d.firstChild,r(d,()=>t?.item?.salePrice?.toFixed(2),null),o}}),null),r(l,e(i,{get when(){return!c()&&t?.item?.salePrice&&t?.item?.shipingCost&&t?.item?.cost},get children(){var o=ae(),d=o.firstChild;return d.firstChild,r(d,()=>(t?.item?.salePrice+(t?.item?.shipingCost+t?.item?.cost)).toFixed(2),null),A(()=>F(o,`_dsplFlx bottombx tr_bar_15  ${t?.item?.salePrice-(t?.item?.shipingCost+t?.item?.cost)>0?"green":"red"}`)),o}}),null),l}}),null),A(()=>F(s,`client_item_box gWXAaj jlytmu inventory ${c()?"isMobile":""}`)),s})();export{me as LookupInventory,Ee as default,b as isValNum};
