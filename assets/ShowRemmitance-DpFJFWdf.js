const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-C1zA0ONa.js","assets/index-BSIjyJfa.js","assets/index-mNJWtuMT.css","assets/Util-7ERmh4Cp.js","assets/CheckBoxSlide-CI14GJCD.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-CP3C1gBK.js","assets/InputHr-BXFw4d2l.css","assets/ButonHrm-osw6qfti.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-DjFiBill.js","assets/debounces-DO19m0Lj.js","assets/DropDwnSearch-DMkLkRPc.css","assets/PickDate-DmolZmhX.js","assets/DialogHRM-BvlMAGRm.js","assets/DialogHRM-V9_lZntj.css"])))=>i.map(i=>d[i]);
import{l as d,_ as c,d as Y,a,e as J,i as l,f as r,q as K,S as b,x as Z,h as ee,j as te,t as y}from"./index-BSIjyJfa.js";import{a as T,g as re,f as V}from"./Util-7ERmh4Cp.js";import{C as le}from"./ShowQRPrintLabel-NdyrXERw.js";import oe from"./FlexSpace-706evcOF.js";import{CloseModal as se}from"./DialogHRM-BvlMAGRm.js";var W=y('<div class="_dsplFlx flxWrp spaceAround ">'),ae=y('<div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Pago Delivery'),ie=y('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Remesa</h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx "><div class="centerBx bottombx"style=margin-top:10px;><h5>Delivery</h5></div><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround "></div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Monto Remesa</h5></div></div><div class="_dsplFlx flxWrp spaceAround "></div><div class="_dsplFlx flxWrp spaceAround ">'),ne=y("<h4>$<!>X1");const de=d(()=>c(()=>import("./SVG-C1zA0ONa.js"),__vite__mapDeps([0,1,2,3]))),ce=d(()=>c(()=>import("./CheckBoxSlide-CI14GJCD.js"),__vite__mapDeps([4,1,2,5]))),S=d(()=>c(()=>import("./InputHr-CP3C1gBK.js"),__vite__mapDeps([6,1,2,7]))),pe=d(()=>c(()=>import("./ButonHrm-osw6qfti.js"),__vite__mapDeps([8,1,2,0,3,9]))),ue=d(()=>c(()=>import("./DropDwnSearch-DjFiBill.js"),__vite__mapDeps([10,1,2,11,0,3,12]))),be=d(()=>c(()=>import("./PickDate-DmolZmhX.js"),__vite__mapDeps([13,1,2,14,15,3])));let E={MN:295,USD:1,MLC:1};function ye(i){const[x,h]=a(""),[O,A]=a(!1),[_,N]=a(""),[o,U]=a(""),[C,q]=a(!1),[$,B]=a(300),[k,H]=a(new Date().getTime()),z=t=>{h(E[o()]),A(!0)},Q=t=>{U(t),h(E[t])},j=t=>{A(!1)},G=async t=>{let s=T(),n={form:{ssg_remittance_key:s,amount:_()*-1,currency:o(),rate:x()||E[o()],date:k(),type:"REMITTANCE",ssg_consignee_key:i?.itm?.ssg_consignee_key,customer:i?.item?.name}},m=re(415005);n={...n,...m};const P=await V(n);if(C()&&$()>0){let p={form:{ssg_remittance_key:T(),amount:$()*-1,currency:"MN",date:k(),type:"DELIVERY",remittance_ref:s,customer:i?.item?.name}};p={...p,...m},await V(p)}return R(),se(i?.modalId),P},R=async()=>{let t=i.item;t.amount=_(),t.currency=o();let s=await le([t]);window.open(s)};return J(()=>{}),(()=>{var t=ie(),s=t.firstChild,n=s.firstChild,m=n.firstChild,P=m.nextSibling,p=P.firstChild,v=n.nextSibling,w=v.firstChild,X=w.firstChild,g=w.nextSibling,f=v.nextSibling,M=f.nextSibling,F=M.firstChild;F.firstChild;var D=M.nextSibling,I=D.nextSibling;return t.style.setProperty("max-height","80vh"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),l(p,()=>i?.item?.name),l(w,r(ce,{get initValue(){return C()},updChange:e=>q(e),color:"var(--background-red-ssg)"}),X),l(v,r(oe,{}),g),g.$$click=R,g.style.setProperty("padding","0 16px"),l(g,r(de,{name:"printer",size:32})),l(v,r(b,{get when(){return K(()=>!!o())()&&_()},get children(){return r(pe,{color:"#047db7ff",icon:"money",label:"Agregar",handleClick:G})}}),null),f.style.setProperty("padding","16px"),l(f,r(be,{get init(){return k()},label:"Fecha",updDate:e=>H(e)}),null),l(f,r(b,{get when(){return Z()},get children(){return r(ue,{list:[{id:"MN",label:"MN"},{id:"USD",label:"USD"},{id:"MLC",label:"MLC"}],lbl_empty:"Moneda",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return o()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:e=>Q(e.id),width:"200px"})}}),null),l(F,r(b,{get when(){return o()},get children(){return r(b,{get when(){return O()},get fallback(){return(()=>{var e=ne(),u=e.firstChild,L=u.nextSibling;return L.nextSibling,e.$$click=z,l(e,x,L),e})()},get children(){var e=W();return e.style.setProperty("padding","16px"),l(e,r(S,{width:"120px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return x()},placeholder:"Rate",colors:"#2b2b2b",type:"number",handleClick:u=>h(u),onEnter:j})),e}})}}),null),D.style.setProperty("padding","16px"),l(D,r(S,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return _()},placeholder:"Monto",colors:"#2b2b2b",type:"number",handleClick:e=>N(e)})),l(s,r(b,{get when(){return C()},get children(){return[ae(),(()=>{var e=W();return e.style.setProperty("padding","16px"),l(e,r(S,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return $()},placeholder:"Pago Delivery",colors:"#2b2b2b",type:"number",handleClick:u=>B(u)})),e})()]}}),I),I.style.setProperty("padding","50px 16px"),ee(e=>(e=te()?"96vw":"620px")!=null?t.style.setProperty("width",e):t.style.removeProperty("width")),t})()}Y(["click"]);export{ye as S};
