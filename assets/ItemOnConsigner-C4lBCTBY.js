const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Bsn1oucm.js","assets/index-CKxyOcUx.js","assets/index-CJxZRJNk.css","assets/SVG-DWkWHlsl.js","assets/Util-Df9CfxGL.js","assets/InputHr-wkEf-SuX.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-DxY4MFrU.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-CWyk24qY.js","assets/debounces-BNCaZIia.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as I,_ as E,c as T,a as re,d as r,i as e,S as p,f as C,n as ie,e as W,g as U,b as ne,h as ae,t as v,y as se}from"./index-CKxyOcUx.js";import{F as oe,d as R,b as q,u as de,R as me,O as ce,c as X,f as Y}from"./Util-Df9CfxGL.js";import{OpenModal as K,CloseModal as ue}from"./DialogHRM-CShc2Jye.js";import"./ContainerElasticView-mBNWMC97.js";import"./PDFButton-BDIa4If0.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-6TA5hJ2T.js";import"./Toast-DI-xWLq6.js";import be from"./ButonHrm-DxY4MFrU.js";import{S as ve}from"./ShowRemmitance-DeVrml_e.js";import"./SVG-DWkWHlsl.js";/* empty css                             *//* empty css                 */import"./ShowQRPrintLabel-DCpI_j9i.js";import"./InitPrintServices-BR2Uf5F7.js";import"./FlexSpace-Bsn1oucm.js";var _e=v('<div class=" centerBx streetcmp"><h5></h5><h4>'),ge=v("<div class=centerBx>"),ye=v('<h4 class="tr_bar_20 textleft">'),j=v('<h5 class="tr_bar_20 textleft">'),V=v("<div style=margin-right:4vw>"),he=v('<p class="tr_bar_30 textleft fullName_consigne">'),J=v('<div class="icon_status centerBx">'),pe=v('<div class=bottombx bottombx><h4 class="tr_bar_20 textleft"></h4><h5 class="tr_bar_20 textleft"></h5><div style=margin-right:4vw></div><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum">'),xe=v('<div><div class="_dsplFlx bottombx centerBx"><div class="icon_status centerBx"></div></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),$e=v("<div style=padding:4px>"),D=v('<div class="_dsplFlx flxWrp spaceAround centerBx">'),Q=v("<div class=separator>"),fe=v('<div><div class=" bottombx "><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px></div></div></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),Ce=v("<div>"),we=v('<div style="padding:4px;max-width:300px "class=""><h4 class=" textleft centerBx">');const P=I(()=>E(()=>import("./FlexSpace-Bsn1oucm.js"),__vite__mapDeps([0,1,2]))),O=I(()=>E(()=>import("./SVG-DWkWHlsl.js"),__vite__mapDeps([3,1,2,4]))),ke=I(()=>E(()=>import("./InputHr-wkEf-SuX.js"),__vite__mapDeps([5,1,2,6])));I(()=>E(()=>import("./ButonHrm-DxY4MFrU.js"),__vite__mapDeps([7,1,2,3,4,8])));const G=I(()=>E(()=>import("./DropDwnSearch-CWyk24qY.js"),__vite__mapDeps([9,1,2,10,3,4,11]))),[a,N]=T();function Ke(t){const[y,_]=re(!1),u=l=>l?" "+l:"",g=()=>{let l=t?.item;return u(l?.firstName)+u(l?.middleName)+u(l?.lastName)+u(l?.lastName2)},m=()=>{let l=t?.item,i=u(l?.altPhoneNumber);return u(l?.phoneNumber)+(i?" |"+i:"")},w=(l,i)=>i?(()=>{var c=_e(),$=c.firstChild,f=$.nextSibling;return e($," "+l),e(f,i),c})():"",F=()=>{let l=t?.item;return(()=>{var i=ge();return e(i,()=>w("Calle",l?.ybstreet),null),e(i,()=>w("#",l?.ybstreetNo),null),e(i,()=>w("E/",l?.ybbetwen1),null),e(i,()=>w("y",l?.ybbetwen2),null),i})()},k=(l,i)=>i?" "+l+" "+i:"",s=()=>{let l=t?.item;return`${k("Calle",l?.ybstreet)}${k("#",l?.ybstreetNo)}${k("E/",l?.ybbetwen1)}${k("y",l?.ybbetwen2)}`},d=async()=>{let l={ssg_consignee_key:t?.item?.ssg_consignee_key};await Ie(l),t?.refresh()},h=()=>{let l=q(),i={id:t?.item?.consigneeId,state:t?.item?.cid,name:g(),phoneNumber:m(),bulto:s(),rpto:"Rpto: "+t?.item?.ybreparto,city:t?.item?.ybcity+", "+t?.item?.ybestate,amount:0},c={};c.id=l,c.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},c.content=r(ve,{item:i,get itm(){return t?.item},modalId:l}),K(c)},x=l=>{N("item",t?.item),de("editBK",{...t?.item});let i=q(),c={};c.id=i,c.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},c.content=r(Se,{get item(){return t?.item},modalId:i}),K(c)};return r(p,{get when(){return!y()},get children(){var l=xe(),i=l.firstChild,c=i.firstChild,$=i.nextSibling,f=$.nextSibling,S=f.firstChild,A=S.firstChild,B=A.nextSibling,n=B.nextSibling,M=n.nextSibling,Z=M.nextSibling;return e(i,r(p,{get when(){return!C()},get children(){return[(()=>{var o=ye();return e(o,()=>t?.item?.consigneeId),o})(),(()=>{var o=j();return e(o,()=>t?.item?.cid),o})(),V(),(()=>{var o=he();return e(o,g),o})(),V(),(()=>{var o=j();return e(o,m),o})()]}}),c),e(i,r(P,{}),c),c.$$click=h,e(c,r(O,{name:"money_outline",size:24})),e(i,r(p,{get when(){return!t?.item?.cid||ie?.profile?.isAdmin},get children(){return[(()=>{var o=J();return o.$$click=x,e(o,r(O,{name:"outline_edit",size:24})),o})(),(()=>{var o=J();return o.$$click=d,e(o,r(O,{name:"outline_delete",size:24})),o})()]}}),null),e(l,r(p,{get when(){return C()&&t?.item?.ybcity},get children(){var o=pe(),z=o.firstChild,H=z.nextSibling,ee=H.nextSibling,L=ee.nextSibling,te=L.nextSibling,le=te.nextSibling;return e(z,()=>t?.item?.consigneeId),e(H,()=>t?.item?.cid),e(L,g),e(le,m),o}}),$),e(f,r(p,{get when(){return!C()&&t?.item?.ybcity},get children(){return F()}}),S),e(f,r(P,{}),S),e(A,()=>t?.item?.ybreparto),e(n,()=>t?.item?.ybcity),e(Z,()=>t?.item?.ybestate),W(()=>U(l,`client_item_box gWXAaj jlytmu ${C()?"isMobile":""}`)),l}})}const Se=t=>{const[y,_]=T(),[u,g]=T(),m=(s,d)=>{N("item",[s],d)},w=(s,d)=>{g("item",[s],d),N("item","ybestate",d.label)},F=(s,d)=>{g("item",[s],d),N("item","ybcity",d.label)},k=async()=>{let s=me(ce(a?.item),a?.item,R("editBK"));await Ne({ssg_consignee_key:a?.item?.ssg_consignee_key},s.data),ue(t?.modalId)};return ne(()=>{let s=[];g("item",{}),N("item","province",void 0),N("item","cityId",void 0),R("M023009")?.provincias.map(d=>{let h=d.label;se?.roles?.[h]?.isActive&&(h==a?.item?.ybestate&&g("item","province",d),a?.item?.ybcity&&d?.cities.map(x=>{x?.label==a?.item?.ybcity&&g("item","citiId",x)}),s.push(d))}),_("prov",s)}),console.log(JSON.stringify(t?.item)),(()=>{var s=Ce();return s.style.setProperty("max-height","80vh"),s.style.setProperty("overflow","auto"),s.style.setProperty("background","#ffffff"),s.style.setProperty("border-radius","13"),s.style.setProperty("padding","10px 19px"),e(s,r(p,{get when(){return t?.item?.consigneeId||t?.item?.ssg_consignee_key},get children(){var d=fe(),h=d.firstChild,x=h.firstChild,l=x.nextSibling,i=l.firstChild,c=h.nextSibling,$=c.nextSibling,f=$.firstChild,S=f.firstChild,A=S.nextSibling,B=A.nextSibling;return e(x,r(b,{updForm:m,key:"consigneeId",get value(){return a?.item?.consigneeId},label:"consigneeId"}),null),e(x,r(p,{get when(){return!oe(a?.item,R("editBK"))},get children(){return r(be,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:k})}}),null),l.style.setProperty("padding","16px"),e(i,r(G,{get list(){return y?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.item?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:n=>w("province",n),width:"260px"})),e(l,r(p,{get when(){return u?.item?.province?.id},get children(){var n=$e();return e(n,r(G,{get list(){return u?.item?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return u?.item?.citiId?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:M=>F("citiId",M),width:"260px"})),n}}),null),e(h,r(p,{get when(){return!C()},get children(){return[(()=>{var n=D();return e(n,r(b,{updForm:m,key:"cid",get value(){return a?.item?.cid},label:"Carnet"}),null),e(n,r(b,{updForm:m,key:"email",get value(){return a?.item?.email},label:"Email"}),null),e(n,r(b,{updForm:m,key:"phoneNumber",get value(){return a?.item?.phoneNumber},label:"Telefono"}),null),e(n,r(b,{updForm:m,key:"altPhoneNumber",get value(){return a?.item?.altPhoneNumber},label:"Telefono 2"}),null),n})(),Q(),(()=>{var n=D();return e(n,r(b,{updForm:m,key:"firstName",get value(){return a?.item?.firstName},label:"1er Nombre"}),null),e(n,r(b,{updForm:m,key:"middleName",get value(){return a?.item?.middleName},label:"2do Nombre"}),null),e(n,r(b,{updForm:m,key:"lastName",get value(){return a?.item?.lastName},label:"1er Apellido"}),null),e(n,r(b,{updForm:m,key:"lastName2",get value(){return a?.item?.lastName2},label:"2do Apellido"}),null),n})(),Q(),(()=>{var n=D();return e(n,r(b,{updForm:m,key:"ybstreetNo",get value(){return a?.item?.ybstreetNo},label:"No"}),null),e(n,r(b,{updForm:m,key:"ybstreet",get value(){return a?.item?.ybstreet},label:"Calle"}),null),e(n,r(b,{updForm:m,key:"ybbetwen1",get value(){return a?.item?.ybbetwen1},label:"Entre 1"}),null),e(n,r(b,{updForm:m,key:"ybbetwen2",get value(){return a?.item?.ybbetwen2},label:"Entre 2"}),null),e(n,r(b,{updForm:m,key:"ybapt",get value(){return a?.item?.ybapt},label:"Apt"}),null),e(n,r(b,{updForm:m,key:"ybreparto",get value(){return a?.item?.ybreparto},label:"Reparto"}),null),n})(),V()]}}),null),e(h,r(P,{}),null),e($,r(P,{}),f),e(S,()=>a?.item?.ybcity),e(B,()=>a?.item?.ybestate),W(()=>U(d,` ${C()?"isMobile":""}`)),d}})),W(d=>(d=C()?"96vw":"920px")!=null?s.style.setProperty("width",d):s.style.removeProperty("width")),s})()},b=t=>(()=>{var y=we(),_=y.firstChild;return e(_,()=>t?.label),e(y,r(ke,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.value},get placeholder(){return t?.label},colors:"#2b2b2b",handleClick:u=>t?.updForm(t?.key,u)}),null),y})(),Ne=async(t,y)=>{let _={params:t,data2update:y},u=X(409007);return _={..._,...u},await Y(_)},Ie=async(t,y)=>{let _={params:t},u=X(409008);return _={..._,...u},await Y(_)};ae(["click"]);export{Se as ItemEditConsigner,Ke as default};