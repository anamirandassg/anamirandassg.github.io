const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Dwy7tBKC.js","assets/index-Cr_XxNZy.js","assets/index-mNJWtuMT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-BjVwkYL_.js","assets/debounces-D5TyRSVD.js","assets/SVG-BGyfL4_I.js","assets/Util-DZlMHKqJ.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-DlHZv_N2.js","assets/ButonHrm-BZHD1iDa.js","assets/ButonHrm-BSeWNUGQ.css","assets/UpdInventory-CqRbCD8r.js","assets/DialogHRM-m0U22AiQ.js","assets/DialogHRM-V9_lZntj.css","assets/DashProducts-BONv2EMp.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/InputHr-BA9g9gt4.js","assets/InputHr-BXFw4d2l.css"])))=>i.map(i=>d[i]);
import{l as j,_ as A,c as E,r as be,a as se,o as _e,b as ge,e as ee,i as t,f as r,S as k,F as H,h as L,k as de,j as re,m as ne,p as $e,d as ve,t as y,g as U}from"./index-Cr_XxNZy.js";import{h as Ce,e as xe,g as V,f as T,m as ye,b as te,O as G,C as oe,a as W,P as Se}from"./Util-DZlMHKqJ.js";import{u as Ie}from"./debounces-D5TyRSVD.js";import"./DialogHRM-m0U22AiQ.js";import{g as ue,a as fe}from"./handelImagesServices-T-lfzj2e.js";import{LookupInventory as me}from"./DashInventoryMov-Cp7sZg2W.js";import{LookupProducts as z}from"./DashProducts-BONv2EMp.js";import{a as Oe}from"./print_invoice_service-8Dsy5ScN.js";import{OpenToast as K}from"./Toast-DTmDlija.js";import"./browser-image-compression-BVJ4p9S0.js";import"./App.module-CbHnVtRQ.js";import"./PDFButton-ClnWeH7R.js";import"./fontkit.es-DkuHxdU6.js";import"./InitPrintServices-QWHeDiid.js";import"./qrcode-DHy8FFhS.js";var we=y('<div style="padding:50px 0"><section class=qsuVSc><section class=bLl6je><section class=dvPdhb>'),ae=y('<div style=margin:15px class=" spaceAround centerBx">'),ke=y('<section class=KgyCAd><section class=WirBi><div class=EMijzc><p class=jhB0af>Agregar reserva</p><section class="Jm2qx centerBx flxWrp spaceAround "><span class=label aria-hidden=true>Mercancia:</span><select class=RIw0b aria-label=merchandise>'),qe=y('<section class=qsuVSc><section class=bLl6je><section class=dvPdhb></section></section><section class=rtS8wf><div class=X3QHFf><div class="LhAUHc evth2b">'),Ee=y("<option> "),Pe=y('<section class=rtS8wf><div class=X3QHFf><div class="LhAUHc evth2b"><div class=kDdWge><div class=QCNFEe><p class=jhB0af>Sumario de la orden</p></div><div class=qntUl><p class=B7xUP><span data-test-integ-cart-subtotal-label="">Subtotal</span><span data-test-integ-cart-subtotal-value="">$</span></p><p class=B7xUP><span data-test-integ-cart-subtotal-label="">Estimated tax</span><span data-test-integ-cart-subtotal-value="">$</span></p><p class=B7xUP><span data-test-integ-cart-subtotal-label=""class=OGw7rb>Estimated total</span><span data-test-integ-cart-subtotal-value=""class=OGw7rb> $</span></p></div></div><div class=oPYFfd><section class=BQHvme><section class=wo08ff><span class=PwY8l2>Fecha:</span><span class=PwY8l33> </span></section><section class=wo08ff><span class=PwY8l2>Invoice:</span><span class=PwY8l33></span></section><section class=wo08ff><span class=PwY8l2>Almacen:</span><span class=PwY8l33> </span></section></section></div><section class=JM2zDb>'),pe=y("<section class=dEfaq><section class=JpKBkb><button class=yjHiqb><span>Remove"),Be=y('<section class=kGEQJf><section class=Z722Ge><section class=VcJUVb><section class=h7Oog><span class=YdB1ac><img class=bwpkad alt=sf></span><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx><span aria-hidden=true>Qty:</span><span aria-hidden=true class=PwY8l33></span></section><p class=GehUpe data-test-line-item-price=""><span data-test-integ-cart-current-price="">$'),je=y("<span class=arancelSep> | "),Ae=y('<span class="arancel pricePq"> $'),De=y('<section class=kGEQJf><section class=Z722Ge><section class=VcJUVb><section class=h7Oog><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx><span aria-hidden=true>Qty:</span><span aria-hidden=true class=PwY8l33></span></section><p class=GehUpe data-test-line-item-price=""><span data-test-integ-cart-current-price=""class=pricePq>$</span>'),Ue=y("<h5 class=rpto>"),Fe=y("<h5>"),Ne=y('<div style=padding:8px><div class=" centerBx"><p class=jhB0af>Envia</p><div class="icon_status centerBx "style="margin:0 4px"></div></div><div class="bottombx flxWrp spaceAround centerBx"><h4 class=centerBx></h4><h4 class="centerBx phonesNum"></h4></div><div class=separator></div><div class=centerBx><p class=jhB0af>Recibe</p><div class="icon_status centerBx "style="margin:0 4px"></div></div><div class="bottombx flxWrp spaceAround centerBx"><h4></h4><h4 class=" textleft phonesNum"></h4></div><div class="bottombx flxWrp spaceAround centerBx"><p class="textleft "></p><h4></h4></div><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5></div></div></div><div><p class=" textleft "></p><div class=vertseparator>'),Le=y('<section class="h6rxkc ">'),Ve=y('<section class=KgyCAd><section class=WirBi><section class=""><div class=QCNFEe><p class=jhB0af>Agregar mercancias</p></div><section class="EMijzc centerBx"><div class="icon_status centerBx "style="margin:0 4px"></div><div class="icon_status centerBx "style="margin:0 4px">'),Te=y('<section class=kGEQJf><section class=Z722Ge><section class=VcJUVb><section class=h7Oog><span class=YdB1ac><img class=bwpkad alt=sf></span><section class=pFJUxe><section class=wDj5sf><span data-line-number=1><span class=XNnpOb href=#> </span></span></section><section class=DHk3Fe><section class=Jm2qx></section><p class=GehUpe data-test-line-item-price=""><span data-test-integ-cart-current-price="">$'),Qe=y('<div class="bottombx centerBx streetcmp"><h5></h5><h4>'),Re=y('<div class="centerBx flxWrp">');j(()=>A(()=>import("./LoadingColorSpinner-Dwy7tBKC.js"),__vite__mapDeps([0,1,2,3])));j(()=>A(()=>import("./DropDwnSearch-BjVwkYL_.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const M=j(()=>A(()=>import("./FlexSpace-DlHZv_N2.js"),__vite__mapDeps([9,1,2]))),X=j(()=>A(()=>import("./ButonHrm-BZHD1iDa.js"),__vite__mapDeps([10,1,2,6,7,11])));j(()=>A(()=>import("./UpdInventory-CqRbCD8r.js"),__vite__mapDeps([12,1,2,7,13,14,5,15,16,17,9])));const J=j(()=>A(()=>import("./InputHr-BA9g9gt4.js"),__vite__mapDeps([18,1,2,19]))),Z=j(()=>A(()=>import("./SVG-BGyfL4_I.js"),__vite__mapDeps([6,1,2,7]))),[I,P]=E({search:""});function pt(){const[e,i]=be();E(),E(),E();const[a,u]=se("");Ie(u,400),_e(()=>{}),ge(()=>{});const m=async()=>{if(e?.mId){let s={":search0":e?.mId,businessId:U?.profile?.businessYId},l=await he(s);P("manifestObj",l[e?.mId])}};return ee(async()=>{P("manifestObj",void 0),m()}),(()=>{var s=we(),l=s.firstChild,n=l.firstChild,_=n.firstChild;return t(s,r(k,{get when(){return I?.manifestObj?.packagesOrder},get children(){return r(Ye,{})}}),l),t(_,r(k,{get when(){return I?.manifestObj?.products},get children(){return r(H,{get each(){return I?.manifestObj?.products},children:($,p)=>r(Je,{itm:$})})}})),t(l,r(k,{get when(){return I?.manifestObj?.packagesOrder&&!I?.manifestObj?.isCompleted},get children(){return r(Ke,{})}}),null),t(l,r(Ge,{get item(){return I?.manifestObj},get list(){return I?.manifestObj}}),null),s})()}let Me=[{label:"escojer",id:""},{label:"MISCELANEAS",id:"MISCELANEAS"},{label:"UTILES DEL HOGAR",id:"UTILES DEL HOGAR"},{label:"VENTILADOR",id:"VENTILADOR"},{label:"TV",id:"TV"},{label:"BICI",id:"BICI"},{label:"GENERADOR",id:"GENERADOR"}];const Ye=e=>{const i={type:"",qty:0,arancel:0,price:0},[a,u]=E(i),m=(l,n)=>{u({[l]:n})},s=l=>{let n={...a};n.key=Se();let _=I?.manifestObj?.reservas||[],$=te(_);$.push(n),P("manifestObj","reservas",$),u("type",""),u("qty",""),u("price",""),u("arancel","")};return(()=>{var l=qe(),n=l.firstChild,_=n.firstChild,$=n.nextSibling,p=$.firstChild,g=p.firstChild;return t(_,r(k,{get when(){return I?.manifestObj?.reservas},get children(){return r(H,{get each(){return I?.manifestObj?.reservas},children:(h,d)=>r(He,{itm:h})})}})),t(l,r(k,{get when(){return!I?.manifestObj?.isCompleted},get children(){var h=ke(),d=h.firstChild,c=d.firstChild,b=c.firstChild,f=b.nextSibling,x=f.firstChild,C=x.nextSibling;return C.addEventListener("change",o=>{m("type",o?.target?.value)}),t(C,r(H,{each:Me,children:(o,v)=>(()=>{var O=Ee();return O.firstChild,t(O,()=>o.label,null),L(()=>O.selected=o.id===a?.type),L(()=>O.value=o.id),O})()})),t(f,r(J,{width:"80px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return a?.qty||""},label:"cantidad (lbs)",colors:"#2b2b2b",handleClick:o=>m("qty",o)}),null),t(c,r(k,{get when(){return a?.qty&&a?.type},get children(){var o=ae();return t(o,r(J,{width:"80px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return a?.price||""},label:"precio",colors:"#2b2b2b",handleClick:v=>m("price",v)}),null),t(o,r(J,{width:"80px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return a?.arancel||""},label:"Arancel",colors:"#2b2b2b",handleClick:v=>m("arancel",v)}),null),t(o,r(k,{get when(){return a?.price&&a?.qty&&a?.type},get children(){var v=ae();return t(v,r(X,{color:"#646cff",label:"Agregar",handleClick:s})),v}}),null),o}}),null),h}}),$),t(g,r(We,{get item(){return I?.manifestObj?.shipper_consignee}})),l})()},Ge=e=>{const i=m=>{let s=0;return e?.item?.products?.map(l=>{s+=N(l?.qty)*N(l?.salePrice)*-1}),e?.item?.reservas?.map(l=>{s+=N(l?.qty)*N(l?.price)+N(l?.arancel)}),s},a=async m=>{let s={...e?.item};s.amount=i();let l=await Oe(s);window.open(l)},u=async m=>{let s=te(e?.item);s.isCompleted=!0;let l={params:{businessId:U?.profile?.businessYId,id:s.ssg_sorder_key},form:s},n=V(431007);l={...l,...n},await T(l);let _={params:{businessId:U?.profile?.businessYId},form:s},$=V(139003);_={..._,...$},await T(_);let p={":search0":s.ssg_sorder_key,businessId:U?.profile?.businessYId},g=await he(p);P("manifestObj",g[s.ssg_sorder_key])};return(()=>{var m=Pe(),s=m.firstChild,l=s.firstChild,n=l.firstChild,_=n.firstChild,$=_.nextSibling,p=$.firstChild,g=p.firstChild,h=g.nextSibling;h.firstChild;var d=p.nextSibling,c=d.firstChild,b=c.nextSibling;b.firstChild;var f=d.nextSibling,x=f.firstChild,C=x.nextSibling;C.firstChild;var o=n.nextSibling,v=o.firstChild,O=v.firstChild,w=O.firstChild,S=w.nextSibling;S.firstChild;var D=O.nextSibling,le=D.firstChild,B=le.nextSibling,Q=D.nextSibling,R=Q.firstChild,q=R.nextSibling;q.firstChild;var F=o.nextSibling;return t(h,()=>i().toFixed(2),null),t(b,()=>(i()*.06).toFixed(2),null),t(C,()=>(i()*.06+i()).toFixed(2),null),t(S,()=>Ce(e?.item?.createDate),null),t(B,()=>e?.item?.invoice),t(q,()=>xe("storeGroupBy")?.[e?.item?.store]?.label,null),t(F,r(k,{get when(){return e?.item?.isCompleted},get children(){return r(X,{color:"#646cff",label:"Imprimir",handleClick:a})}}),null),t(F,r(k,{get when(){return!e?.item?.isCompleted},get children(){return r(X,{color:"#646cff",label:"Confirmar",handleClick:u})}}),null),m})()},Je=e=>{const[i,a]=E(),u=()=>i?.[e?.itm?.product?.id]?.productImageUrl?ue()+fe()+"/"+i?.[e?.itm?.product?.id]?.productImageUrl:null,m=async()=>{let l=e?.itm?.product?.id,n=`${l}`,_=await z(n);_?.[l]?.productImageUrl&&a(l,_?.[l])};ee(()=>{m()});const s=()=>{let l=te(I?.manifestObj?.products);delete l[e?.itm?.product?.id],P("manifestObj","products",l)};return(()=>{var l=Be(),n=l.firstChild,_=n.firstChild,$=_.firstChild,p=$.firstChild,g=p.firstChild,h=p.nextSibling,d=h.firstChild,c=d.firstChild,b=c.firstChild;b.firstChild;var f=d.nextSibling,x=f.firstChild,C=x.firstChild,o=C.nextSibling,v=x.nextSibling,O=v.firstChild;return O.firstChild,t(b,()=>e?.itm?.product?.label,null),t(o,()=>e?.itm?.qty*-1),t(O,()=>(e?.itm?.salePrice*1).toFixed(2),null),t(f,r(k,{get when(){return!I?.manifestObj?.isCompleted},get children(){var w=pe(),S=w.firstChild,D=S.firstChild;return D.$$click=s,w}}),null),L(()=>de(g,"src",u())),l})()},He=e=>{const[i,a]=E(),u=async()=>{let s=e?.itm?.product?.id,l=`${s}`,n=await z(l);n?.[s]?.productImageUrl&&a(s,n?.[s])};ee(()=>{u()});const m=()=>{let l=te(I?.manifestObj?.reservas).filter(n=>n.key!==e?.itm?.key);P("manifestObj","reservas",l)};return(()=>{var s=De(),l=s.firstChild,n=l.firstChild,_=n.firstChild,$=_.firstChild,p=$.firstChild,g=p.firstChild,h=g.firstChild;h.firstChild;var d=p.nextSibling,c=d.firstChild,b=c.firstChild,f=b.nextSibling,x=c.nextSibling,C=x.firstChild;return C.firstChild,t(h,()=>e?.itm?.type,null),t(f,()=>e?.itm?.qty*1),t(C,()=>(e?.itm?.price*1).toFixed(2),null),t(x,r(k,{get when(){return e?.itm?.arancel},get children(){return[je(),(()=>{var o=Ae();return o.firstChild,t(o,()=>(e?.itm?.arancel*1).toFixed(2),null),o})()]}}),null),t(d,r(k,{get when(){return!I?.manifestObj?.isCompleted},get children(){var o=pe(),v=o.firstChild,O=v.firstChild;return O.$$click=m,o}}),null),s})()},We=e=>{const i=s=>s?" "+s:"",a=s=>i(s?.firstName)+i(s?.middleName)+i(s?.lastName)+i(s?.lastName2),u=s=>{let l=i(s?.altPhoneNumber);return i(s?.phoneNumber)+(l?" |"+l:"")},m=s=>{};return r(k,{get when(){return e?.item?.name},get children(){var s=Ne(),l=s.firstChild,n=l.firstChild,_=n.nextSibling,$=l.nextSibling,p=$.firstChild,g=p.nextSibling,h=$.nextSibling,d=h.nextSibling,c=d.firstChild,b=c.nextSibling,f=d.nextSibling,x=f.firstChild,C=x.nextSibling,o=f.nextSibling,v=o.firstChild,O=v.nextSibling,w=o.nextSibling,S=w.firstChild,D=S.firstChild,le=D.firstChild,B=w.nextSibling,Q=B.firstChild,R=Q.nextSibling;return t(l,r(M,{}),_),_.$$click=m,t(_,r(Z,{name:"send",size:22,color:"#646cff"})),t(p,()=>e?.item?.name),t(g,()=>e?.item?.phoneNumberS),t(d,r(M,{}),b),b.$$click=m,t(b,r(Z,{name:"send",size:22,color:"#646cff"})),t(x,()=>a(e?.item)),t(C,()=>u(e?.item)),t(v,()=>ce(e?.item)),t(O,()=>e?.item?.ybreparto),t(w,r(M,{}),S),t(le,()=>e?.item?.idairguide),t(Q,ce),t(B,r(M,{}),R),t(B,r(k,{get when(){return e?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var q=Ue();return t(q,()=>e?.item?.consigneeInfo?.ybreparto),q})(),"|"]}}),R),t(B,r(k,{get when(){return!e?.city&&e?.item?.city},get children(){var q=Fe();return t(q,()=>e?.item?.city),q}}),null),L(q=>{var F=`    ${re()?"isMobile":""}`,ie=` ${re(),"centerBx"} bottombx flxWrp  centerBx`;return F!==q.e&&ne(s,q.e=F),ie!==q.t&&ne(B,q.t=ie),q},{e:void 0,t:void 0}),s}})},ht=async(e,i)=>{let a={params:e,data2update:i},u=V(431007);return a={...a,...u},await T(a)},he=async e=>{let i={params:e},a=V(431002);return i={...i,...a},await T(i)},bt=async e=>{let i=[];e.map(a=>{let u={params:{id:a?.ssg_track_key,idairguide:"all"}},m=V(802002);u={...u,...m},i.push(u)}),ye(i,ze)},ze=async e=>{const a=await T(e);if(a)return a},Ke=e=>{const[i,a]=se(""),[u,m]=se(1),s=()=>{u()===1&&i().length>8&&l(i())},l=async p=>{let g=U?.profile?.agencyStore?.id,h=`${p}`,d=await z(h),c=G(d)?.[0],b=`${c} ${g}`,f=await me(b),x=0,C=0;G(f)?.map(w=>{f[w]?.products?.map(S=>{c===S?.product?.id&&(x+=S?.price*1*S?.qty*1,C+=S?.qty*1)})});let o=1,v={};I?.manifestObj?.products?.map(w=>{let S={...w};c===w.product.id&&(S.qty=S.qty*-1),v[w.product.id]=S}),v?.[c]&&(o=v?.[c].qty*1+1);const O=C?x/C:0;if(C&&C-o>=0){if(v?.[c])v[c].qty=o*-1;else{let S={product:{id:c,label:d?.[c]?.name,code:d?.[c]?.code},qty:o*-1,price:O,salePrice:d?.[c]?.salePrice};v[c]=S}let w=oe(v);P("manifestObj","products",w),a(""),K({text:d?.[c]?.name+" agregado al carrito",timeout:3500,theme:"blue",id:W()})}else K({text:"Sin Existencia",timeout:3500,theme:"red",id:W()})},[n,{refetch:_}]=$e(i,async p=>{if(u()===2&&p.length>4){const g=await z(p);let h=[];return G(g).map(d=>{let c=g[d];h.push(c)}),h}else return[]}),$=()=>{a(""),m(1)};return(()=>{var p=Ve(),g=p.firstChild,h=g.firstChild,d=h.firstChild,c=d.nextSibling,b=c.firstChild,f=b.nextSibling;return t(h,r(k,{get when(){return n()?.length>0},get children(){var x=Le();return t(x,r(H,{get each(){return n()},children:(C,o)=>r(Xe,{itm:C,clearTx:$})})),x}}),c),t(c,r(J,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return i()},placeholder:"buscar productos ...",colors:"#2b2b2b",handleClick:a,onEnter:s}),b),b.$$click=()=>m(1),t(b,r(Z,{name:"qrcode-scan",size:22,get color(){return u()===1?"#646cff":""}})),f.$$click=()=>m(2),t(f,r(Z,{name:"keyboard",size:22,get color(){return u()===2?"#646cff":""}})),p})()},Xe=e=>{const[i,a]=E(),u=()=>i?.prod?.productImageUrl?ue()+fe()+"/"+i?.prod?.productImageUrl:null;ee(()=>{a("prod",e?.itm)}),Array.from(Array(10).keys());const m=async s=>{let l=U?.profile?.agencyStore?.id,n=i?.prod?.ssg_product_key,_=`${n} ${l}`,$=await me(_),p=0,g=0;G($)?.map(b=>{$[b]?.products?.map(f=>{n===f?.product?.id&&(p+=f?.price*1*f?.qty*1,g+=f?.qty*1)})});let h=1,d={};I?.manifestObj?.products?.map(b=>{let f={...b};n===b.product.id&&(f.qty=f.qty*-1),d[b.product.id]=f}),d?.[n]&&(h=d?.[n].qty*1+1);const c=g?p/g:0;if(console.log(c,g,p),g&&g-h>=0){if(d?.[n])d[n].qty=h*-1;else{let f={product:{id:n,label:i?.prod?.name,code:i?.prod?.code},qty:h*-1,price:c,salePrice:i?.prod?.salePrice};d[n]=f}let b=oe(d);P("manifestObj","products",b),e?.clearTx(),K({text:i?.prod?.name+" agregado al carrito",timeout:3500,theme:"blue",id:W()})}else e?.clearTx(),K({text:"Sin Existencia",timeout:3500,theme:"red",id:W()})};return(()=>{var s=Te(),l=s.firstChild,n=l.firstChild,_=n.firstChild,$=_.firstChild,p=$.firstChild,g=$.nextSibling,h=g.firstChild,d=h.firstChild,c=d.firstChild;c.firstChild;var b=h.nextSibling,f=b.firstChild,x=f.nextSibling,C=x.firstChild;return C.firstChild,t(c,()=>e?.itm?.name,null),t(f,r(X,{color:"#646cff",label:"Agregar",handleClick:m})),t(C,()=>(e?.itm?.salePrice*1).toFixed(2),null),L(()=>de(p,"src",u())),s})()},Y=(e,i)=>i?(()=>{var a=Qe(),u=a.firstChild,m=u.nextSibling;return t(u," "+e),t(m,i),a})():"",ce=e=>(()=>{var i=Re();return t(i,()=>Y("Calle",e?.ybstreet),null),t(i,()=>Y("#",e?.ybstreetNo),null),t(i,()=>Y("E/",e?.ybbetwen1),null),t(i,()=>Y("y",e?.ybbetwen2),null),i})(),N=e=>e?e*1:0;ve(["click"]);export{pt as default,ze as fetchCSVInve,ce as getAddress,N as isValNum,bt as loadInventory,ht as updConfirmSale};
