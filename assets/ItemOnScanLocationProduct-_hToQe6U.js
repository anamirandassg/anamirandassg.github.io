const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BTgTYXhz.js","assets/index-COVb01tO.js","assets/index-lCkr9jrN.css","assets/SVG-B3SV77JW.js","assets/Util-B95KFj0U.js","assets/ShowQRProducts-dCGKlWjT.js","assets/ShowQRPrintLabel-CmSbNO4V.js","assets/PDFButton-CdQgLQHP.js","assets/qrcode-DHy8FFhS.js","assets/fontkit.es-bQScJb-G.js","assets/InitPrintServices-CRUpqvaO.js","assets/Toast-DCI3E2vh.js","assets/Toast-DLpFKn-Q.css","assets/InputHr-C6WD8N3E.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as c,_,c as E,a as f,d as a,i as l,S as s,e as h,s as A,f as b,g as p,t as n}from"./index-COVb01tO.js";import"./Util-B95KFj0U.js";import{u as P}from"./debounces-D9ZBve1Z.js";import"./DialogHRM-Otqzy6Yq.js";import{g as U,a as y}from"./handelImagesServices-Dl35KfPo.js";import"./Toast-DCI3E2vh.js";import{a as R,b as S,d as L}from"./ShowQRPrintLabel-CmSbNO4V.js";import"./browser-image-compression-BVJ4p9S0.js";import"./PDFButton-CdQgLQHP.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-bQScJb-G.js";import"./InitPrintServices-CRUpqvaO.js";var O=n("<div style=width:100px;position:relative; class=tr_bar_10><img alt=sf>"),B=n('<p class=" textleft fullName_consigne">'),D=n('<h5 class="rpto centerBx">'),$=n("<div class=vertseparator>"),k=n('<div class="_dsplFlx bottombx tr_bar_30 ">'),V=n("<h5>"),F=n('<div><div class=tr_bar_90><div class="_dsplFlx topbx centerBx"><div></div></div><div class=" bottombx centerBx">');const T=c(()=>_(()=>import("./FlexSpace-BTgTYXhz.js"),__vite__mapDeps([0,1,2])));c(()=>_(()=>import("./SVG-B3SV77JW.js"),__vite__mapDeps([3,1,2,4])));c(()=>_(()=>import("./ShowQRProducts-dCGKlWjT.js"),__vite__mapDeps([5,1,2,6,7,4,8,9,10,11,12])));const j=c(()=>_(()=>import("./InputHr-C6WD8N3E.js"),__vite__mapDeps([13,1,2,14])));function tt(e){E({search:"",status:"AERO_33"});const[M,x]=f("");P(x,400);const[w,C]=f(""),v=()=>e?.item?.productImageUrl?U()+y()+"/"+e?.item?.productImageUrl:null,I=async()=>{let i=e?.item?.UPC||e?.item?.ASIN||e?.item?.code,m=R(i);var o=await S(m,"image/png");let u={qr:URL.createObjectURL(o),lbl:i,lbl2:e?.item?.name?.toUpperCase()},t=await L([u]);window.open(t)};return a(s,{get when(){return e?.item?.name},get children(){var i=F(),m=i.firstChild,o=m.firstChild,d=o.firstChild,u=o.nextSibling;return l(i,a(s,{get when(){return v()},get children(){var t=O(),r=t.firstChild;return h(()=>A(r,"src",v())),t}}),m),l(d,a(s,{get when(){return e?.item?.name},get children(){var t=B();return l(t,()=>e?.item?.name?.toUpperCase()),t}})),l(o,a(T,{}),null),l(o,a(s,{get when(){return!b()},get children(){var t=k();return l(t,a(s,{get when(){return e?.item?.unit},get children(){return[(()=>{var r=D();return l(r,()=>e?.item?.unit),r})(),$(),a(j,{width:"100px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",type:"number",get value(){return w()},placeholder:"Qty",colors:"#2b2b2b",handleClick:r=>C(r),onEnter:I})]}})),t}}),null),l(u,a(s,{get when(){return e?.item?.category},get children(){return[(()=>{var t=V();return l(t,()=>e?.item?.category),t})(),$()]}})),h(t=>{var r=`client_item_box gWXAaj jlytmu product centerBx ${b()?"isMobile":""}`,g=`${b()?"":"tr_bar_60"} centerBx`;return r!==t.e&&p(i,t.e=r),g!==t.t&&p(d,t.t=g),t},{e:void 0,t:void 0}),i}})}export{tt as default};