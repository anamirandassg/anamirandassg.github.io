const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CQCqG7HI.js","assets/index-DjfzCh1Q.js","assets/index-BmzAZVve.css","assets/CheckBoxSlide-Bn8Je-iZ.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-DlcsQAW6.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l,_ as s,h as u,a as x,n as h,i as o,d as _,e as y,g,t as P}from"./index-DjfzCh1Q.js";import{C}from"./ShowQRPrintLabel-Cv0XIPAx.js";var w=P('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Remesa</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround ">');const $=l(()=>s(()=>import("./SVG-CQCqG7HI.js"),__vite__mapDeps([0,1,2])));l(()=>s(()=>import("./CheckBoxSlide-Bn8Je-iZ.js"),__vite__mapDeps([3,1,2,4])));const k=l(()=>s(()=>import("./InputHr-DlcsQAW6.js"),__vite__mapDeps([5,1,2,6])));function S(i){const[a,f]=x(""),m=async()=>{let e=i.item;e.amount=a(),console.log(e);let r=await C([e]);window.open(r)};return h(()=>{}),(()=>{var e=w(),r=e.firstChild,n=r.firstChild,v=n.firstChild,b=v.nextSibling,d=b.firstChild,p=d.nextSibling,c=n.nextSibling;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),o(d,()=>i?.item?.name),p.$$click=m,o(p,_($,{name:"printer",size:32})),c.style.setProperty("padding","16px"),o(c,_(k,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return a()},placeholder:"Monto",colors:"#2b2b2b",handleClick:t=>f(t)})),y(t=>(t=g()?"96vw":"420px")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()}u(["click"]);export{S};