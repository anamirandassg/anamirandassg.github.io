const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CUDbzSyD.js","assets/index-Do4nhdU0.js","assets/index-C1cQPolT.css","assets/SVG-1hx_1_9D.js","assets/index-Ci0zXM0r.js","assets/InputHr-Bx1C19XD.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-7yfFFyua.js","assets/Util-D886uaAp.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-CsvwQ_MN.js","assets/debounces-p-E4fWEF.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as I,_ as E,c as T,a as re,d as r,e as le,i as e,S as p,k as ie,f as V,g as J,t as v,m as ne,v as ae}from"./index-Do4nhdU0.js";import{g as L,u as se,a as D,x as oe,b as G,f as U,y as me,O as de}from"./Util-D886uaAp.js";import{OpenModal as q,CloseModal as ue}from"./DialogHRM-DOKMp4nk.js";import"./ContainerElasticView-EOONFDHj.js";import{i as w}from"./globalSignal-DbwDqxNx.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-BG6UuY1Q.js";import ce from"./ButonHrm-7yfFFyua.js";import{S as be}from"./ShowRemmitance-DJIN8QEs.js";import"./index-Ci0zXM0r.js";import"./SVG-1hx_1_9D.js";/* empty css                             *//* empty css                 */import"./ShowQRPrintLabel-Cav7TXbw.js";import"./InitPrintServices-BbVI7Xg0.js";var ve=v('<div class=" centerBx streetcmp"><h5></h5><h4>'),_e=v("<div class=centerBx>"),pe=v('<h4 class="tr_bar_20 textleft">'),K=v('<h5 class="tr_bar_20 textleft">'),X=v("<div style=margin-right:4vw>"),R=v('<div class="icon_status centerBx">'),he=v('<div class=bottombx bottombx><h4 class="tr_bar_20 textleft"></h4><h5 class="tr_bar_20 textleft"></h5><div style=margin-right:4vw></div><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum">'),ye=v('<div><div class="_dsplFlx bottombx centerBx"></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),A=v('<div class="_dsplFlx flxWrp spaceAround centerBx">'),ge=v("<div style=padding:4px>"),$e=v('<div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px>'),j=v("<div class=separator>"),xe=v('<div><div class=" bottombx "></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),fe=v("<div>"),we=v('<div style="padding:4px;max-width:300px "class=""><h4 class=" textleft centerBx">');const P=I(()=>E(()=>import("./FlexSpace-CUDbzSyD.js"),__vite__mapDeps([0,1,2]))),O=I(()=>E(()=>import("./SVG-1hx_1_9D.js"),__vite__mapDeps([3,1,2,4]))),ke=I(()=>E(()=>import("./InputHr-Bx1C19XD.js"),__vite__mapDeps([5,1,2,6])));I(()=>E(()=>import("./ButonHrm-7yfFFyua.js"),__vite__mapDeps([7,1,2,3,4,8,9])));const Q=I(()=>E(()=>import("./DropDwnSearch-CsvwQ_MN.js"),__vite__mapDeps([10,1,2,11,3,4,12]))),[a,N]=T();function Ke(t){const[h,_]=re(!1),c=l=>l?" "+l:"",y=()=>{let l=t?.item;return c(l?.firstName)+c(l?.middleName)+c(l?.lastName)+c(l?.lastName2)},d=()=>{let l=t?.item,n=c(l?.altPhoneNumber);return c(l?.phoneNumber)+(n?" |"+n:"")},k=(l,n)=>n?(()=>{var u=ve(),$=u.firstChild,x=$.nextSibling;return e($," "+l),e(x,n),u})():"",C=(l,n)=>n?" "+l+" "+n:"",F=()=>{let l=t?.item;return(()=>{var n=_e();return e(n,()=>k("Calle",l?.ybstreet),null),e(n,()=>k("#",l?.ybstreetNo),null),e(n,()=>k("E/",l?.ybbetwen1),null),e(n,()=>k("y",l?.ybbetwen2),null),n})()},o=()=>{let l=t?.item;return`${C("Calle",l?.ybstreet)}${C("#",l?.ybstreetNo)}${C("E/",l?.ybbetwen1)}${C("y",l?.ybbetwen2)}`},m=async()=>{let l={ssg_shipper_key:t?.item?.ssg_shipper_key};await Ne(l),t?.refresh()},g=()=>{let l=L(),n={id:t?.item?.shipperId,state:t?.item?.cid,name:y(),phoneNumber:d(),bulto:o(),rpto:"Rpto: "+t?.item?.ybreparto,city:t?.item?.ybcity+", "+t?.item?.ybestate,amount:0},u={};u.id=l,u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=r(be,{item:n,modalId:l}),q(u)},S=l=>{N("item",t?.item),se("editBK",{...t?.item});let n=L(),u={};u.id=n,u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=r(Ce,{get item(){return t?.item},modalId:n}),q(u)};return r(p,{get when(){return!h()},get children(){var l=ye(),n=l.firstChild,u=n.nextSibling,$=u.nextSibling,x=$.firstChild,i=x.firstChild,M=i.nextSibling,f=M.nextSibling,B=f.nextSibling,Y=B.nextSibling;return e(n,r(p,{get when(){return t?.item?.name},get children(){return r(p,{get when(){return!w()},get children(){return[(()=>{var s=pe();return e(s,()=>t?.item?.shipperId),s})(),(()=>{var s=K();return e(s,()=>t?.item?.name),s})(),X(),(()=>{var s=K();return e(s,d),s})()]}})}}),null),e(n,r(P,{}),null),e(n,r(p,{get when(){return!t?.item?.cid||ie?.profile?.isAdmin},get children(){return[(()=>{var s=R();return s.$$click=g,e(s,r(O,{name:"money_outline",size:24})),s})(),(()=>{var s=R();return s.$$click=S,e(s,r(O,{name:"outline_edit",size:24})),s})(),(()=>{var s=R();return s.$$click=m,e(s,r(O,{name:"outline_delete",size:24})),s})()]}}),null),e(l,r(p,{get when(){return w()&&t?.item?.ybcity},get children(){var s=he(),W=s.firstChild,z=W.nextSibling,Z=z.nextSibling,H=Z.nextSibling,ee=H.nextSibling,te=ee.nextSibling;return e(W,()=>t?.item?.shipperId),e(z,()=>t?.item?.cid),e(H,y),e(te,d),s}}),u),e($,r(p,{get when(){return!w()&&t?.item?.ybcity},get children(){return F()}}),x),e($,r(P,{}),x),e(i,()=>t?.item?.ybreparto),e(f,()=>t?.item?.ybcity),e(Y,()=>t?.item?.ybestate),V(()=>J(l,`client_item_box gWXAaj jlytmu ${w()?"isMobile":""}`)),l}})}const Ce=t=>{const[h,_]=T(),[c,y]=T(),d=(o,m)=>{N("item",[o],m)},k=(o,m)=>{y("item",[o],m),N("item","ybestate",m.label)},C=(o,m)=>{y("item",[o],m),N("item","ybcity",m.label)},F=async()=>{let o=me(de(a?.item),a?.item,D("editBK"));await Se({ssg_shipper_key:a?.item?.ssg_shipper_key},o.data),ue(t?.modalId)};return ne(()=>{let o=[];y("item",{}),N("item","province",void 0),N("item","cityId",void 0),D("M023009")?.provincias.map(m=>{let g=m.label;ae?.roles?.[g]?.isActive&&(g==a?.item?.ybestate&&y("item","province",m),a?.item?.ybcity&&m?.cities.map(S=>{S?.label==a?.item?.ybcity&&y("item","citiId",S)}),o.push(m))}),_("prov",o)}),(()=>{var o=fe();return o.style.setProperty("max-height","80vh"),o.style.setProperty("overflow","auto"),o.style.setProperty("background","#ffffff"),o.style.setProperty("border-radius","13"),o.style.setProperty("padding","10px 19px"),e(o,r(p,{get when(){return t?.item?.shipperId},get children(){var m=xe(),g=m.firstChild,S=g.nextSibling,l=S.nextSibling,n=l.firstChild,u=n.firstChild,$=u.nextSibling,x=$.nextSibling;return e(g,r(p,{get when(){return t?.item?.cid},get children(){return[(()=>{var i=A();return e(i,r(b,{updForm:d,key:"shipperId",get value(){return a?.item?.shipperId},label:"shipperId"}),null),e(i,r(p,{get when(){return!oe(a?.item,D("editBK"))},get children(){return r(ce,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:F})}}),null),i})(),(()=>{var i=$e(),M=i.firstChild;return i.style.setProperty("padding","16px"),e(M,r(Q,{get list(){return h?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:f=>k("province",f),width:"260px"})),e(i,r(p,{get when(){return c?.item?.province?.id},get children(){var f=ge();return e(f,r(Q,{get list(){return c?.item?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.citiId?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:B=>C("citiId",B),width:"260px"})),f}}),null),i})(),r(p,{get when(){return!w()},get children(){return[(()=>{var i=A();return e(i,r(b,{updForm:d,key:"cid",get value(){return a?.item?.cid},label:"Carnet"}),null),e(i,r(b,{updForm:d,key:"email",get value(){return a?.item?.email},label:"Email"}),null),e(i,r(b,{updForm:d,key:"phoneNumber",get value(){return a?.item?.phoneNumber},label:"Telefono"}),null),e(i,r(b,{updForm:d,key:"altPhoneNumber",get value(){return a?.item?.altPhoneNumber},label:"Telefono 2"}),null),i})(),j(),(()=>{var i=A();return e(i,r(b,{updForm:d,key:"firstName",get value(){return a?.item?.firstName},label:"1er Nombre"}),null),e(i,r(b,{updForm:d,key:"middleName",get value(){return a?.item?.middleName},label:"2do Nombre"}),null),e(i,r(b,{updForm:d,key:"lastName",get value(){return a?.item?.lastName},label:"1er Apellido"}),null),e(i,r(b,{updForm:d,key:"lastName2",get value(){return a?.item?.lastName2},label:"2do Apellido"}),null),i})(),j(),(()=>{var i=A();return e(i,r(b,{updForm:d,key:"ybstreetNo",get value(){return a?.item?.ybstreetNo},label:"No"}),null),e(i,r(b,{updForm:d,key:"ybstreet",get value(){return a?.item?.ybstreet},label:"Calle"}),null),e(i,r(b,{updForm:d,key:"ybbetwen1",get value(){return a?.item?.ybbetwen1},label:"Entre 1"}),null),e(i,r(b,{updForm:d,key:"ybbetwen2",get value(){return a?.item?.ybbetwen2},label:"Entre 2"}),null),e(i,r(b,{updForm:d,key:"ybapt",get value(){return a?.item?.ybapt},label:"Apt"}),null),e(i,r(b,{updForm:d,key:"ybreparto",get value(){return a?.item?.ybreparto},label:"Reparto"}),null),i})(),X()]}})]}}),null),e(g,r(P,{}),null),e(l,r(P,{}),n),e(u,()=>a?.item?.ybcity),e(x,()=>a?.item?.ybestate),V(()=>J(m,` ${w()?"isMobile":""}`)),m}})),V(m=>(m=w()?"96vw":"920px")!=null?o.style.setProperty("width",m):o.style.removeProperty("width")),o})()},b=t=>(()=>{var h=we(),_=h.firstChild;return e(_,()=>t?.label),e(h,r(ke,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.value},get placeholder(){return t?.label},colors:"#2b2b2b",handleClick:c=>t?.updForm(t?.key,c)}),null),h})(),Se=async(t,h)=>{let _={params:t,data2update:h},c=G(429007);return _={..._,...c},await U(_)},Ne=async(t,h)=>{let _={params:t},c=G(429008);return _={..._,...c},await U(_)};le(["click"]);export{Ke as default};
