const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-D78X_55H.js","assets/index-TdHlctG2.js","assets/index-lCkr9jrN.css","assets/Util-F67-CCle.js","assets/CheckBoxSlide-DvC5fQCp.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-BEl3PuId.js","assets/InputHr-M3rJ9grQ.css","assets/ButonHrm-RCUfBf9o.js","assets/ButonHrm-BSeWNUGQ.css","assets/DropDwnSearch-Bn2NNM_i.js","assets/debounces-CEbJ4Wcs.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as s,_ as i,h as S,a as y,n as w,i as l,d as o,v as E,S as A,e as k,g as $,t as D}from"./index-TdHlctG2.js";import{g as R,b as I,f as M}from"./Util-F67-CCle.js";import{C as F}from"./ShowQRPrintLabel-DEyt1MTW.js";import L from"./FlexSpace-DCKQapcO.js";var T=D('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Remesa</h5></div><div class="_dsplFlx bottombx "><h4></h4></div></div><div class="_dsplFlx bottombx "><div class="icon_status centerBx"></div></div><div class="_dsplFlx flxWrp spaceAround "></div><div class="_dsplFlx flxWrp spaceAround "></div><div class="_dsplFlx flxWrp spaceAround ">');const V=s(()=>i(()=>import("./SVG-D78X_55H.js"),__vite__mapDeps([0,1,2,3])));s(()=>i(()=>import("./CheckBoxSlide-DvC5fQCp.js"),__vite__mapDeps([4,1,2,5])));const O=s(()=>i(()=>import("./InputHr-BEl3PuId.js"),__vite__mapDeps([6,1,2,7]))),U=s(()=>i(()=>import("./ButonHrm-RCUfBf9o.js"),__vite__mapDeps([8,1,2,0,3,9]))),W=s(()=>i(()=>import("./DropDwnSearch-Bn2NNM_i.js"),__vite__mapDeps([10,1,2,11,0,3,12])));function H(a){const[p,f]=y(""),[_,g]=y(""),x=async e=>{let t={form:{ssg_remittance_key:R(),amount:p()*-1,currency:_(),date:new Date().getTime(),type:"REMITTANCE",customer:{name:a?.item?.name,cid:a?.item?.state}}},d=I(415005);t={...t,...d};const m=await M(t);return v(),m},v=async()=>{let e=a.item;e.amount=p(),e.currency=_(),console.log(e);let t=await F([e]);window.open(t)};return w(()=>{}),(()=>{var e=T(),t=e.firstChild,d=t.firstChild,m=d.firstChild,h=m.nextSibling,C=h.firstChild,n=d.nextSibling,c=n.firstChild,u=n.nextSibling,b=u.nextSibling,P=b.nextSibling;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),l(C,()=>a?.item?.name),l(n,o(L,{}),c),c.$$click=v,c.style.setProperty("padding","0 16px"),l(c,o(V,{name:"printer",size:32})),l(n,o(U,{color:"#047db7ff",icon:"money",label:"Agregar",handleClick:x}),null),u.style.setProperty("padding","16px"),l(u,o(A,{get when(){return E()},get children(){return o(W,{list:[{id:"MN",label:"MN"},{id:"USD",label:"USD"},{id:"MLC",label:"MLC"}],lbl_empty:"Moneda",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return _()},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:r=>g(r.id),width:"200px"})}})),b.style.setProperty("padding","16px"),l(b,o(O,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return p()},placeholder:"Monto",colors:"#2b2b2b",handleClick:r=>f(r)})),P.style.setProperty("padding","50px 16px"),k(r=>(r=$()?"96vw":"420px")!=null?e.style.setProperty("width",r):e.style.removeProperty("width")),e})()}S(["click"]);export{H as S};