const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Bhub-XBy.js","assets/index-JeM1UUlF.js","assets/index-lCkr9jrN.css","assets/SVG-tLQf-akW.js","assets/InputHr-B_DY6Ffw.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-RxwIk-9N.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-DDo8F7CA.js","assets/debounces-BsrWG7xD.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as I,_ as E,c as T,a as re,d as r,i as e,S as h,g as w,n as le,e as V,f as J,h as ie,t as v,j as q,Q as ne,s as ae,o as D,K as se,ag as oe,p as G,q as U,aF as de,O as me}from"./index-JeM1UUlF.js";import{OpenModal as K,CloseModal as ue}from"./DialogHRM-CVXfSPfa.js";import"./ContainerElasticView-DCagHpEi.js";import"./PDFButton-CVEa5i5b.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-BIcH_GNA.js";import"./Toast-DFxhib2M.js";import ce from"./ButonHrm-RxwIk-9N.js";import{S as be}from"./ShowRemmitance-TIE_X1iH.js";import"./SVG-tLQf-akW.js";/* empty css                             *//* empty css                 */import"./ShowQRPrintLabel-CEo9iPAS.js";import"./InitPrintServices-CJPpdbG7.js";var ve=v('<div class=" centerBx streetcmp"><h5></h5><h4>'),_e=v("<div class=centerBx>"),he=v('<h4 class="tr_bar_20 textleft">'),L=v('<h5 class="tr_bar_20 textleft">'),X=v("<div style=margin-right:4vw>"),R=v('<div class="icon_status centerBx">'),pe=v('<div class=bottombx bottombx><h4 class="tr_bar_20 textleft"></h4><h5 class="tr_bar_20 textleft"></h5><div style=margin-right:4vw></div><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum">'),ye=v('<div><div class="_dsplFlx bottombx centerBx"></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),A=v('<div class="_dsplFlx flxWrp spaceAround centerBx">'),ge=v("<div style=padding:4px>"),$e=v('<div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px>'),j=v("<div class=separator>"),xe=v('<div><div class=" bottombx "></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),fe=v("<div>"),we=v('<div style="padding:4px;max-width:300px "class=""><h4 class=" textleft centerBx">');const P=I(()=>E(()=>import("./FlexSpace-Bhub-XBy.js"),__vite__mapDeps([0,1,2]))),O=I(()=>E(()=>import("./SVG-tLQf-akW.js"),__vite__mapDeps([3,1,2]))),ke=I(()=>E(()=>import("./InputHr-B_DY6Ffw.js"),__vite__mapDeps([4,1,2,5])));I(()=>E(()=>import("./ButonHrm-RxwIk-9N.js"),__vite__mapDeps([6,1,2,3,7])));const Q=I(()=>E(()=>import("./DropDwnSearch-DDo8F7CA.js"),__vite__mapDeps([8,1,2,9,3,10]))),[a,N]=T();function He(t){const[p,_]=re(!1),c=l=>l?" "+l:"",y=()=>{let l=t?.item;return c(l?.firstName)+c(l?.middleName)+c(l?.lastName)+c(l?.lastName2)},m=()=>{let l=t?.item,n=c(l?.altPhoneNumber);return c(l?.phoneNumber)+(n?" |"+n:"")},k=(l,n)=>n?(()=>{var u=ve(),$=u.firstChild,x=$.nextSibling;return e($," "+l),e(x,n),u})():"",F=()=>{let l=t?.item;return(()=>{var n=_e();return e(n,()=>k("Calle",l?.ybstreet),null),e(n,()=>k("#",l?.ybstreetNo),null),e(n,()=>k("E/",l?.ybbetwen1),null),e(n,()=>k("y",l?.ybbetwen2),null),n})()},C=(l,n)=>n?" "+l+" "+n:"",o=()=>{let l=t?.item;return`${C("Calle",l?.ybstreet)}${C("#",l?.ybstreetNo)}${C("E/",l?.ybbetwen1)}${C("y",l?.ybbetwen2)}`},d=async()=>{let l={ssg_shipper_key:t?.item?.ssg_shipper_key};await Ne(l),t?.refresh()},g=()=>{let l=q(),n={id:t?.item?.shipperId,state:t?.item?.cid,name:y(),phoneNumber:m(),bulto:o(),rpto:"Rpto: "+t?.item?.ybreparto,city:t?.item?.ybcity+", "+t?.item?.ybestate,amount:0},u={};u.id=l,u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=r(be,{item:n,modalId:l}),K(u)},S=l=>{N("item",t?.item),ne("editBK",{...t?.item});let n=q(),u={};u.id=n,u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=r(Ce,{get item(){return t?.item},modalId:n}),K(u)};return r(h,{get when(){return!p()},get children(){var l=ye(),n=l.firstChild,u=n.nextSibling,$=u.nextSibling,x=$.firstChild,i=x.firstChild,M=i.nextSibling,f=M.nextSibling,B=f.nextSibling,Y=B.nextSibling;return e(n,r(h,{get when(){return t?.item?.name},get children(){return r(h,{get when(){return!w()},get children(){return[(()=>{var s=he();return e(s,()=>t?.item?.shipperId),s})(),(()=>{var s=L();return e(s,()=>t?.item?.name),s})(),X(),(()=>{var s=L();return e(s,m),s})()]}})}}),null),e(n,r(P,{}),null),e(n,r(h,{get when(){return!t?.item?.cid||le?.profile?.isAdmin},get children(){return[(()=>{var s=R();return s.$$click=g,e(s,r(O,{name:"money_outline",size:24})),s})(),(()=>{var s=R();return s.$$click=S,e(s,r(O,{name:"outline_edit",size:24})),s})(),(()=>{var s=R();return s.$$click=d,e(s,r(O,{name:"outline_delete",size:24})),s})()]}}),null),e(l,r(h,{get when(){return w()&&t?.item?.ybcity},get children(){var s=pe(),W=s.firstChild,z=W.nextSibling,Z=z.nextSibling,H=Z.nextSibling,ee=H.nextSibling,te=ee.nextSibling;return e(W,()=>t?.item?.shipperId),e(z,()=>t?.item?.cid),e(H,y),e(te,m),s}}),u),e($,r(h,{get when(){return!w()&&t?.item?.ybcity},get children(){return F()}}),x),e($,r(P,{}),x),e(i,()=>t?.item?.ybreparto),e(f,()=>t?.item?.ybcity),e(Y,()=>t?.item?.ybestate),V(()=>J(l,`client_item_box gWXAaj jlytmu ${w()?"isMobile":""}`)),l}})}const Ce=t=>{const[p,_]=T(),[c,y]=T(),m=(o,d)=>{N("item",[o],d)},k=(o,d)=>{y("item",[o],d),N("item","ybestate",d.label)},F=(o,d)=>{y("item",[o],d),N("item","ybcity",d.label)},C=async()=>{let o=de(me(a?.item),a?.item,D("editBK"));await Se({ssg_shipper_key:a?.item?.ssg_shipper_key},o.data),ue(t?.modalId)};return ae(()=>{let o=[];y("item",{}),N("item","province",void 0),N("item","cityId",void 0),D("M023009")?.provincias.map(d=>{let g=d.label;se?.roles?.[g]?.isActive&&(g==a?.item?.ybestate&&y("item","province",d),a?.item?.ybcity&&d?.cities.map(S=>{S?.label==a?.item?.ybcity&&y("item","citiId",S)}),o.push(d))}),_("prov",o)}),(()=>{var o=fe();return o.style.setProperty("max-height","80vh"),o.style.setProperty("overflow","auto"),o.style.setProperty("background","#ffffff"),o.style.setProperty("border-radius","13"),o.style.setProperty("padding","10px 19px"),e(o,r(h,{get when(){return t?.item?.shipperId},get children(){var d=xe(),g=d.firstChild,S=g.nextSibling,l=S.nextSibling,n=l.firstChild,u=n.firstChild,$=u.nextSibling,x=$.nextSibling;return e(g,r(h,{get when(){return t?.item?.cid},get children(){return[(()=>{var i=A();return e(i,r(b,{updForm:m,key:"shipperId",get value(){return a?.item?.shipperId},label:"shipperId"}),null),e(i,r(h,{get when(){return!oe(a?.item,D("editBK"))},get children(){return r(ce,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:C})}}),null),i})(),(()=>{var i=$e(),M=i.firstChild;return i.style.setProperty("padding","16px"),e(M,r(Q,{get list(){return p?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:f=>k("province",f),width:"260px"})),e(i,r(h,{get when(){return c?.item?.province?.id},get children(){var f=ge();return e(f,r(Q,{get list(){return c?.item?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.citiId?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:B=>F("citiId",B),width:"260px"})),f}}),null),i})(),r(h,{get when(){return!w()},get children(){return[(()=>{var i=A();return e(i,r(b,{updForm:m,key:"cid",get value(){return a?.item?.cid},label:"Carnet"}),null),e(i,r(b,{updForm:m,key:"email",get value(){return a?.item?.email},label:"Email"}),null),e(i,r(b,{updForm:m,key:"phoneNumber",get value(){return a?.item?.phoneNumber},label:"Telefono"}),null),e(i,r(b,{updForm:m,key:"altPhoneNumber",get value(){return a?.item?.altPhoneNumber},label:"Telefono 2"}),null),i})(),j(),(()=>{var i=A();return e(i,r(b,{updForm:m,key:"firstName",get value(){return a?.item?.firstName},label:"1er Nombre"}),null),e(i,r(b,{updForm:m,key:"middleName",get value(){return a?.item?.middleName},label:"2do Nombre"}),null),e(i,r(b,{updForm:m,key:"lastName",get value(){return a?.item?.lastName},label:"1er Apellido"}),null),e(i,r(b,{updForm:m,key:"lastName2",get value(){return a?.item?.lastName2},label:"2do Apellido"}),null),i})(),j(),(()=>{var i=A();return e(i,r(b,{updForm:m,key:"ybstreetNo",get value(){return a?.item?.ybstreetNo},label:"No"}),null),e(i,r(b,{updForm:m,key:"ybstreet",get value(){return a?.item?.ybstreet},label:"Calle"}),null),e(i,r(b,{updForm:m,key:"ybbetwen1",get value(){return a?.item?.ybbetwen1},label:"Entre 1"}),null),e(i,r(b,{updForm:m,key:"ybbetwen2",get value(){return a?.item?.ybbetwen2},label:"Entre 2"}),null),e(i,r(b,{updForm:m,key:"ybapt",get value(){return a?.item?.ybapt},label:"Apt"}),null),e(i,r(b,{updForm:m,key:"ybreparto",get value(){return a?.item?.ybreparto},label:"Reparto"}),null),i})(),X()]}})]}}),null),e(g,r(P,{}),null),e(l,r(P,{}),n),e(u,()=>a?.item?.ybcity),e(x,()=>a?.item?.ybestate),V(()=>J(d,` ${w()?"isMobile":""}`)),d}})),V(d=>(d=w()?"96vw":"920px")!=null?o.style.setProperty("width",d):o.style.removeProperty("width")),o})()},b=t=>(()=>{var p=we(),_=p.firstChild;return e(_,()=>t?.label),e(p,r(ke,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.value},get placeholder(){return t?.label},colors:"#2b2b2b",handleClick:c=>t?.updForm(t?.key,c)}),null),p})(),Se=async(t,p)=>{let _={params:t,data2update:p},c=G(429007);return _={..._,...c},await U(_)},Ne=async(t,p)=>{let _={params:t},c=G(429008);return _={..._,...c},await U(_)};ie(["click"]);export{He as default};