const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-DkQy7UMp.js","assets/index-BVr2E-gh.js","assets/index-DGSEMnLR.css","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as $,_ as w,b as C,i as g,d as N,f as S,e as R,t as A,n as F}from"./index-BVr2E-gh.js";import{i as I}from"./globalSignal-DRtGCXio.js";import{c as E,g as p,S as W}from"./ShowQRPrintLabel-DU-PtRrt.js";import"./fontkit.es-DEjOtITv.js";import"./index-Ci0zXM0r.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-BI_Od3nu.js";import"./Util-dbxHFpkD.js";import"./Toast-B1WewHIY.js";var z=A('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const L=$(()=>w(()=>import("./SVG-DkQy7UMp.js"),__vite__mapDeps([0,1,2,3])));function Z(t){const i=e=>{E(e)},l=e=>e?" "+e:"",d=()=>{let e=t?.item?.consigneeInfo;return l(e?.firstName)+l(e?.middleName)+l(e?.lastName)+l(e?.lastName2)},b=async()=>{let e=o(t?.item?.tracking||t?.val),a=await p(e),s={state:t?.item?.consigneeInfo?.ybestate,name:d(),phoneNumber:t?.item?.consigneeInfo?.phoneNumber,altPhoneNumber:t?.item?.consigneeInfo?.altPhoneNumber,guiaWeek:t?.item?.guia,bulto:t?.item?.bagnumber,tracking:e,qr:a},c=await W([s]);window.open(c)},[_,{refetch:Q}]=C(t?.val,async e=>{let a=o(t?.item?.tracking||t?.val);return await p(a)});return(()=>{var e=z(),a=e.firstChild,s=a.firstChild,c=s.firstChild,P=c.nextSibling,m=P.firstChild,x=m.nextSibling,u=s.nextSibling,k=u.firstChild,y=u.nextSibling,n=y.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),m.$$click=()=>i(t?.item?.bagnumber),g(m,()=>t?.item?.bagnumber),x.$$click=b,g(x,N(L,{name:"printer",size:32})),u.style.setProperty("padding","16px"),y.style.setProperty("padding","16px"),n.$$click=()=>i(t?.val),g(n,()=>o(t?.val)),S(r=>{var f=I()?"96vw":"420px",h=_(),v=300/o(t?.val)?.length*1.82+"px";return f!==r.e&&((r.e=f)!=null?e.style.setProperty("width",f):e.style.removeProperty("width")),h!==r.t&&F(k,"src",r.t=h),v!==r.a&&((r.a=v)!=null?n.style.setProperty("font-size",v):n.style.removeProperty("font-size")),r},{e:void 0,t:void 0,a:void 0}),e})()}const o=t=>{let i=t,l="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const d=new RegExp(l);return i.length===13&&d.test(i)&&(i=i.slice(3,12)),i};R(["click"]);export{Z as default,o as parseTrcking};