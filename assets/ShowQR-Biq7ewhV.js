const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BG1XGd9a.js","assets/index-DHvNTsK7.css"])))=>i.map(i=>d[i]);
import{l as $,_ as k,i as v,d as C,k as w,m as N,R,e as S,t as A}from"./index-BG1XGd9a.js";import{g as x,c as F,b as I,S as E}from"./ShowQRPrintLabel-3dyhF4U3.js";var L=A('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const W=$(()=>k(()=>import("./index-BG1XGd9a.js").then(t=>t.a7),__vite__mapDeps([0,1])));function Q(t){const y=e=>{F(t?.val)},a=e=>e?" "+e:"",n=e=>{let l=e,r="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(r);return l.length===13&&s.test(l)&&(l=l.slice(3,12)),l},p=()=>{let e=t?.item?.consigneeInfo;return a(e?.firstName)+a(e?.middleName)+a(e?.lastName)+a(e?.lastName2)},_=async()=>{let e=n(t?.val);var l=await I(qr,"image/png");URL.createObjectURL(l);let r={state:t?.item?.consigneeInfo?.ybestate,name:p(),phoneNumber:t?.item?.consigneeInfo?.phoneNumber,altPhoneNumber:t?.item?.consigneeInfo?.altPhoneNumber,guiaWeek:t?.item?.guia,bulto:t?.item?.bagnumber,tracking:e,qr:x(e)},s=await E([r]);window.open(s)};return(()=>{var e=L(),l=e.firstChild,r=l.firstChild,s=r.firstChild,f=s.nextSibling,g=f.firstChild,b=g.nextSibling,d=r.nextSibling,P=d.firstChild,u=d.nextSibling,o=u.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),v(g,()=>t?.item?.bagnumber),b.$$click=_,v(b,C(W,{name:"printer",size:32})),d.style.setProperty("padding","16px"),u.style.setProperty("padding","16px"),o.$$click=y,v(o,()=>n(t?.val)),w(i=>{var c=N()?"96vw":"420px",h=x(n(t?.val)),m=300/n(t?.val)?.length*1.82+"px";return c!==i.e&&((i.e=c)!=null?e.style.setProperty("width",c):e.style.removeProperty("width")),h!==i.t&&R(P,"src",i.t=h),m!==i.a&&((i.a=m)!=null?o.style.setProperty("font-size",m):o.style.removeProperty("font-size")),i},{e:void 0,t:void 0,a:void 0}),e})()}S(["click"]);export{Q as default};
