const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-kVFHgFwY.js","assets/index-BVr2E-gh.js","assets/index-DGSEMnLR.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{k as L,l as Q,_ as J,u as X,c as A,a as f,h as Z,o as ee,m as te,d as o,e as re,i as n,S as h,f as _,s as T,F as ae,g as se,n as ne,t as v}from"./index-BVr2E-gh.js";import ie from"./InputHr-BvGt9Kc-.js";import{f as Y,a as q,O as le,g as oe}from"./Util-dbxHFpkD.js";import y from"./SVG-DkQy7UMp.js";import{s as R,b as ce,c as de}from"./manifestList-CSHEgbpJ.js";import"./index-Ci0zXM0r.js";let pe={webp:"image/webp",jpg:"image/jpg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",ts:"video/MP2T",m3u8:"application/x-mpegURL",mp4:"video/MP4",m4a:"audio/MP4",webm:"video/webm",weba:"audio/webm",m4s:"text/plain",txt:"text/plain",srt:"text/plain",vtt:"text/plain",js:"application/javascript; charset=UTF-8",css:"text/css; charset=utf-8",mpd:"video/vnd.mpeg.dash.mpd",aac:"audio/aac",mp3:"audio/mpeg",wav:"audio/wav",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",pdf:"application/pdf","7z":"application/x-7z-compressed",zip:"application/zip",xml:"application/xml",json:"application/json",html:"text/html; charset=UTF-8"};const ue=r=>r&&r.split(".").pop().toLowerCase(),ge=r=>{let s=ue(r);return pe[s]},me=async(r,s)=>{let p=await(await fetch(r)).blob();return s&&(p=p.slice(0,p.size,s)),URL.createObjectURL(p)},ve=async r=>{let s={query:"getSignedUrl",params:{fileName:r}};var e;return L()?e=await Y(s):e=(await q(s))?.data,e?.url?e:null},fe=async r=>{let s=ge(r);var e=await ve(r);console.log(e);var p=await me(e?.url,s);return p};var xe=v('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),be=v('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div></div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>'),he=v('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding-top:50px><div class="_dsplFlx flxWrp spaceAround centerBx"><div></div><div class="_dsplFlx bottombx"><h4> </h4><div class=vertseparator></div><h5>'),_e=v('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div class=" bottombx"><div class="_dsplFlx bottombx spaceAround centerBx"><h5>Estado del envio: </h5><h4></h4></div><h4> '),ye=v('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><img alt=sf style=width:320px>'),ke=v("<div> "),we=v('<div class="icon_status centerBx">'),$e=v('<div class="icon_status centerBx trackFade">'),Se=v('<div class="icon_status centerBx ">');const Ce=Q(()=>J(()=>import("./LoadingColorSpinner-kVFHgFwY.js"),__vite__mapDeps([0,1,2,3])));function Re(){const[r,s]=X(),[e,p]=A();A({lbs:"",price:0});const[U,O]=A({}),[D,W]=f(""),[w,B]=f(!1);f();const[$,M]=f(""),[Fe,F]=f(""),[P,E]=f(""),[G,S]=f("");Z(()=>{}),ee(()=>{}),te(()=>{r?.id?(S(!1),I(r?.id)):S(!0)});const N=(a,t)=>{M(t),F(a),setTimeout(()=>{F("")},300)},V=a=>{E(a),setTimeout(()=>{E("")},3e3)},I=async a=>{let t=a,l="^[0-9]{4}-[1-9]{4}";const u=new RegExp(l);let c=t.length===9&&u.test(t),i="^Y24[0-9]{6}";const g=new RegExp(i);let x=t.length===9&&g.test(t),b="^[0-9]";const d=new RegExp(b);let j=t.length>6&&t.length<11&&d.test(t),z={};if(c&&(z={idairguide:"175-2383"+t.slice(0,4),":tracking":t}),c||x||j){let m;if(x||j)m=await Be(t);else{let k=await Ae(z);m=k?.[le(k)?.[0]]}if(m){if(m?.currentStatus==="YABA_99"&&m?.deliveryProof){let k=await fe(m?.deliveryProof);m[idTRa].deliveryProofBlob=k}p("tracking",m),B(!0),s({id:t})}}else N("","error"),O({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),V(oe());S(!0)};let C={error:{"--err-bx-color":"var(--background-red-ssg)","--err-bx-bgcolor":"var(--background-red35-ssg)",svg:"var(--err-bx-color)",icon:"alert"},success:{"--err-bx-color":"var(--hrm-palette-tertiary60)","--err-bx-bgcolor":"var(--hrm-palette-tertiary90)",svg:"var(--err-bx-color)",icon:"success"},warning:{"--err-bx-color":"#FF6F1D","--err-bx-bgcolor":"#ffdb99",svg:"var(--err-bx-color)",icon:"info"}},K=Array.from(Array(8).keys());return o(h,{get when(){return G()},get fallback(){return(()=>{var a=ke();return a.firstChild,n(a,o(Ce,{stroke:"rgb(200 25 60 / 1)",size:62}),null),a})()},get children(){return[(()=>{var a=be(),t=a.firstChild,l=t.firstChild,u=l.nextSibling,c=u.firstChild;return n(l,o(h,{get when(){return P()},get children(){var i=xe(),g=i.firstChild,x=g.nextSibling;return n(g,o(y,{get name(){return C?.[$()]?.icon},size:32,get color(){return C?.[$()]?.svg}})),n(x,()=>U?.consigneeInfo?.ybestate),_(b=>T(i,C?.[$()],b)),i}})),n(t,o(h,{get when(){return!w()},get children(){return o(ie,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return D()},placeholder:"Numero de envio ...",colors:"#2b2b2b",handleClick:W,onEnter:I})}}),u),u.$$click=()=>B(!1),n(c,()=>w()?"Rastrear otro numero de envio":"Escriba su numero de envio"),_(i=>T(l,`padding: 15px 0px; margin: 0 auto; display: ${P()?"block":"none"};`,i)),a})(),o(h,{get when(){return w()&&e?.tracking},get children(){return[(()=>{var a=he(),t=a.firstChild,l=t.firstChild,u=l.nextSibling,c=u.firstChild,i=c.firstChild,g=c.nextSibling,x=g.nextSibling;return n(t,o(ae,{each:K,children:b=>R[e?.tracking?.currentStatus]!==0&&b===0?(()=>{var d=we();return n(d,o(y,{name:"market",size:32,color:"var(--hrm-palette-neutral-variant30)"})),d})():b===R[e?.tracking?.currentStatus]?(()=>{var d=$e();return n(d,o(y,{get name(){return ce?.[e?.tracking?.currentStatus]},size:32,color:"var(--background-red-ssg)"})),d})():(()=>{var d=Se();return n(d,o(y,{name:"radio_unchecked",size:16,color:"var(--hrm-palette-neutral-variant30)"})),d})()}),l),n(l,o(y,{name:"map-marker-radius-outline",size:32,get color(){return e?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--hrm-palette-neutral-variant30)"}})),n(c,()=>e?.tracking?.consigneeInfo?.ybestate,i),n(x,()=>e?.tracking?.consigneeInfo?.ybcity),_(()=>se(l,`icon_status centerBx ${e?.tracking?.currentStatus==="YABA_99"?"trackFade":""} `)),a})(),(()=>{var a=_e(),t=a.firstChild,l=t.firstChild,u=l.firstChild,c=u.nextSibling,i=l.nextSibling;return i.firstChild,n(c,()=>e?.tracking?.tracking),n(i,()=>de?.[e?.tracking?.currentStatus],null),_(g=>(g=e?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)")!=null?i.style.setProperty("color",g):i.style.removeProperty("color")),a})(),o(h,{get when(){return e?.tracking?.deliveryProofBlob},get children(){var a=ye(),t=a.firstChild;return _(()=>ne(t,"src",e?.tracking?.deliveryProofBlob)),a}})]}})]}})}const Ae=async r=>H({params:r,query:"getScanLogisticYabaExpress",queryString:"tracking contain :tracking",fldsQry:["agency","idairguide","currentStatus","cidentity","ssg_track_key","tracking","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryProof"]}),Be=async r=>H({params:{id:r},query:"getHblsIndex"}),H=async r=>L()?await Y(r):(await q(r))?.data;re(["click"]);export{Re as default};