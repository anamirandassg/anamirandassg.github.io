const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-CmSbV51-.js","assets/index-DEC_qqAp.js","assets/index-DYvAu9Q1.css","assets/SVG-DEbu7_30.js","assets/index-Ci0zXM0r.js","assets/InputHr-DnoOvHnE.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-mwJl-YOT.js","assets/Util-D886uaAp.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-Djrhmw-J.js","assets/debounces-Ck-jflkm.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as I,_ as E,c as T,a as le,d as l,e as re,i as e,S as y,k as ie,f as V,g as G,t as b,m as ne,v as ae}from"./index-DEC_qqAp.js";import{g as q,u as se,a as D,x as oe,b as U,f as X,y as me,O as de}from"./Util-D886uaAp.js";import{OpenModal as K,CloseModal as ue}from"./DialogHRM-Cc3LhbYl.js";import"./ContainerElasticView-ZeFge5Td.js";import{i as w}from"./globalSignal-C3-NWSPW.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-B3yg-0aH.js";import ce from"./ButonHrm-mwJl-YOT.js";import{S as be}from"./ShowRemmitance-D3gzPsSQ.js";import"./index-Ci0zXM0r.js";import"./SVG-DEbu7_30.js";/* empty css                             *//* empty css                 */import"./ShowQRPrintLabel-Cs-8FCfv.js";import"./InitPrintServices-BbVI7Xg0.js";var ve=b('<div class=" centerBx streetcmp"><h5></h5><h4>'),_e=b("<div class=centerBx>"),ge=b('<h4 class="tr_bar_20 textleft">'),j=b('<h5 class="tr_bar_20 textleft">'),W=b("<div style=margin-right:4vw>"),ye=b('<p class="tr_bar_30 textleft fullName_consigne">'),R=b('<div class="icon_status centerBx">'),he=b('<div class=bottombx bottombx><h4 class="tr_bar_20 textleft"></h4><h5 class="tr_bar_20 textleft"></h5><div style=margin-right:4vw></div><p class=" textleft fullName_consigne"></p><div style=margin-right:4vw></div><h4 class=" textleft phonesNum">'),pe=b('<div><div class="_dsplFlx bottombx centerBx"></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h4></h4><div class=vertseparator></div><h5></h5><div class=vertseparator></div><h4>'),A=b('<div class="_dsplFlx flxWrp spaceAround centerBx">'),$e=b("<div style=padding:4px>"),xe=b('<div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><div style=padding:4px>'),Q=b("<div class=separator>"),fe=b('<div><div class=" bottombx "></div><div class=separator></div><div class="_dsplFlx bottombx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>'),we=b("<div>"),ke=b('<div style="padding:4px;max-width:300px "class=""><h4 class=" textleft centerBx">');const P=I(()=>E(()=>import("./FlexSpace-CmSbV51-.js"),__vite__mapDeps([0,1,2]))),O=I(()=>E(()=>import("./SVG-DEbu7_30.js"),__vite__mapDeps([3,1,2,4]))),Ce=I(()=>E(()=>import("./InputHr-DnoOvHnE.js"),__vite__mapDeps([5,1,2,6])));I(()=>E(()=>import("./ButonHrm-mwJl-YOT.js"),__vite__mapDeps([7,1,2,3,4,8,9])));const J=I(()=>E(()=>import("./DropDwnSearch-Djrhmw-J.js"),__vite__mapDeps([10,1,2,11,3,4,12]))),[s,N]=T();function je(t){const[h,_]=le(!1),c=r=>r?" "+r:"",g=()=>{let r=t?.item;return c(r?.firstName)+c(r?.middleName)+c(r?.lastName)+c(r?.lastName2)},d=()=>{let r=t?.item,n=c(r?.altPhoneNumber);return c(r?.phoneNumber)+(n?" |"+n:"")},k=(r,n)=>n?(()=>{var u=ve(),$=u.firstChild,x=$.nextSibling;return e($," "+r),e(x,n),u})():"",C=(r,n)=>n?" "+r+" "+n:"",F=()=>{let r=t?.item;return(()=>{var n=_e();return e(n,()=>k("Calle",r?.ybstreet),null),e(n,()=>k("#",r?.ybstreetNo),null),e(n,()=>k("E/",r?.ybbetwen1),null),e(n,()=>k("y",r?.ybbetwen2),null),n})()},o=()=>{let r=t?.item;return`${C("Calle",r?.ybstreet)}${C("#",r?.ybstreetNo)}${C("E/",r?.ybbetwen1)}${C("y",r?.ybbetwen2)}`},m=async()=>{let r={ssg_consignee_key:t?.item?.ssg_consignee_key};await Ie(r),t?.refresh()},p=()=>{let r=q(),n={id:t?.item?.consigneeId,state:t?.item?.cid,name:g(),phoneNumber:d(),bulto:o(),rpto:"Rpto: "+t?.item?.ybreparto,city:t?.item?.ybcity+", "+t?.item?.ybestate,amount:0},u={};u.id=r,u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=l(be,{item:n,modalId:r}),K(u)},S=r=>{N("item",t?.item),se("editBK",{...t?.item});let n=q(),u={};u.id=n,u.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},u.content=l(Se,{get item(){return t?.item},modalId:n}),K(u)};return l(y,{get when(){return!h()},get children(){var r=pe(),n=r.firstChild,u=n.nextSibling,$=u.nextSibling,x=$.firstChild,i=x.firstChild,M=i.nextSibling,f=M.nextSibling,B=f.nextSibling,Y=B.nextSibling;return e(n,l(y,{get when(){return t?.item?.cid},get children(){return l(y,{get when(){return!w()},get children(){return[(()=>{var a=ge();return e(a,()=>t?.item?.consigneeId),a})(),(()=>{var a=j();return e(a,()=>t?.item?.cid),a})(),W(),(()=>{var a=ye();return e(a,g),a})(),W(),(()=>{var a=j();return e(a,d),a})()]}})}}),null),e(n,l(P,{}),null),e(n,l(y,{get when(){return!t?.item?.cid||ie?.profile?.isAdmin},get children(){return[(()=>{var a=R();return a.$$click=p,e(a,l(O,{name:"money_outline",size:24})),a})(),(()=>{var a=R();return a.$$click=S,e(a,l(O,{name:"outline_edit",size:24})),a})(),(()=>{var a=R();return a.$$click=m,e(a,l(O,{name:"outline_delete",size:24})),a})()]}}),null),e(r,l(y,{get when(){return w()&&t?.item?.ybcity},get children(){var a=he(),z=a.firstChild,H=z.nextSibling,Z=H.nextSibling,L=Z.nextSibling,ee=L.nextSibling,te=ee.nextSibling;return e(z,()=>t?.item?.consigneeId),e(H,()=>t?.item?.cid),e(L,g),e(te,d),a}}),u),e($,l(y,{get when(){return!w()&&t?.item?.ybcity},get children(){return F()}}),x),e($,l(P,{}),x),e(i,()=>t?.item?.ybreparto),e(f,()=>t?.item?.ybcity),e(Y,()=>t?.item?.ybestate),V(()=>G(r,`client_item_box gWXAaj jlytmu ${w()?"isMobile":""}`)),r}})}const Se=t=>{const[h,_]=T(),[c,g]=T(),d=(o,m)=>{N("item",[o],m)},k=(o,m)=>{g("item",[o],m),N("item","ybestate",m.label)},C=(o,m)=>{g("item",[o],m),N("item","ybcity",m.label)},F=async()=>{let o=me(de(s?.item),s?.item,D("editBK"));await Ne({ssg_consignee_key:s?.item?.ssg_consignee_key},o.data),ue(t?.modalId)};return ne(()=>{let o=[];g("item",{}),N("item","province",void 0),N("item","cityId",void 0),D("M023009")?.provincias.map(m=>{let p=m.label;ae?.roles?.[p]?.isActive&&(p==s?.item?.ybestate&&g("item","province",m),s?.item?.ybcity&&m?.cities.map(S=>{S?.label==s?.item?.ybcity&&g("item","citiId",S)}),o.push(m))}),_("prov",o)}),(()=>{var o=we();return o.style.setProperty("max-height","80vh"),o.style.setProperty("overflow","auto"),o.style.setProperty("background","#ffffff"),o.style.setProperty("border-radius","13"),o.style.setProperty("padding","10px 19px"),e(o,l(y,{get when(){return t?.item?.consigneeId},get children(){var m=fe(),p=m.firstChild,S=p.nextSibling,r=S.nextSibling,n=r.firstChild,u=n.firstChild,$=u.nextSibling,x=$.nextSibling;return e(p,l(y,{get when(){return t?.item?.cid},get children(){return[(()=>{var i=A();return e(i,l(v,{updForm:d,key:"consigneeId",get value(){return s?.item?.consigneeId},label:"consigneeId"}),null),e(i,l(y,{get when(){return!oe(s?.item,D("editBK"))},get children(){return l(ce,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:F})}}),null),i})(),(()=>{var i=xe(),M=i.firstChild;return i.style.setProperty("padding","16px"),e(M,l(J,{get list(){return h?.prov},lbl_empty:"Provincia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.province?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:f=>k("province",f),width:"260px"})),e(i,l(y,{get when(){return c?.item?.province?.id},get children(){var f=$e();return e(f,l(J,{get list(){return c?.item?.province?.cities},lbl_empty:"Cities",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return c?.item?.citiId?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:B=>C("citiId",B),width:"260px"})),f}}),null),i})(),l(y,{get when(){return!w()},get children(){return[(()=>{var i=A();return e(i,l(v,{updForm:d,key:"cid",get value(){return s?.item?.cid},label:"Carnet"}),null),e(i,l(v,{updForm:d,key:"email",get value(){return s?.item?.email},label:"Email"}),null),e(i,l(v,{updForm:d,key:"phoneNumber",get value(){return s?.item?.phoneNumber},label:"Telefono"}),null),e(i,l(v,{updForm:d,key:"altPhoneNumber",get value(){return s?.item?.altPhoneNumber},label:"Telefono 2"}),null),i})(),Q(),(()=>{var i=A();return e(i,l(v,{updForm:d,key:"firstName",get value(){return s?.item?.firstName},label:"1er Nombre"}),null),e(i,l(v,{updForm:d,key:"middleName",get value(){return s?.item?.middleName},label:"2do Nombre"}),null),e(i,l(v,{updForm:d,key:"lastName",get value(){return s?.item?.lastName},label:"1er Apellido"}),null),e(i,l(v,{updForm:d,key:"lastName2",get value(){return s?.item?.lastName2},label:"2do Apellido"}),null),i})(),Q(),(()=>{var i=A();return e(i,l(v,{updForm:d,key:"ybstreetNo",get value(){return s?.item?.ybstreetNo},label:"No"}),null),e(i,l(v,{updForm:d,key:"ybstreet",get value(){return s?.item?.ybstreet},label:"Calle"}),null),e(i,l(v,{updForm:d,key:"ybbetwen1",get value(){return s?.item?.ybbetwen1},label:"Entre 1"}),null),e(i,l(v,{updForm:d,key:"ybbetwen2",get value(){return s?.item?.ybbetwen2},label:"Entre 2"}),null),e(i,l(v,{updForm:d,key:"ybapt",get value(){return s?.item?.ybapt},label:"Apt"}),null),e(i,l(v,{updForm:d,key:"ybreparto",get value(){return s?.item?.ybreparto},label:"Reparto"}),null),i})(),W()]}})]}}),null),e(p,l(P,{}),null),e(r,l(P,{}),n),e(u,()=>s?.item?.ybcity),e(x,()=>s?.item?.ybestate),V(()=>G(m,` ${w()?"isMobile":""}`)),m}})),V(m=>(m=w()?"96vw":"920px")!=null?o.style.setProperty("width",m):o.style.removeProperty("width")),o})()},v=t=>(()=>{var h=ke(),_=h.firstChild;return e(_,()=>t?.label),e(h,l(Ce,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.value},get placeholder(){return t?.label},colors:"#2b2b2b",handleClick:c=>t?.updForm(t?.key,c)}),null),h})(),Ne=async(t,h)=>{let _={params:t,data2update:h},c=U(409007);return _={..._,...c},await X(_)},Ie=async(t,h)=>{let _={params:t},c=U(409008);return _={..._,...c},await X(_)};re(["click"]);export{je as default};
