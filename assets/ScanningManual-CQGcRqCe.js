const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DQeHvyxi.js","assets/index-oNqpx5mP.js","assets/index-B8kuA055.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-kk1vKzg8.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-CS-6Om-s.js"])))=>i.map(i=>d[i]);
import{l as P,_ as R,a as y,c as J,k as U,p as ee,q as te,b as se,i,d as c,f as w,e as re,t as v,a2 as A,s as ne,S as z,y as ae,F as ie,a3 as le,v as oe,h as G,g as M,X as ce,C as V,n as de,j as h,K as ue,o as N}from"./index-oNqpx5mP.js";import{status as T,scannedQRs as ge}from"./Scanning-Ce2fuMDU.js";import pe from"./FlexSpace-RIPQKJa9.js";import"./App.module-CbHnVtRQ.js";var ye=v('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),be=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=scrollH>'),fe=v("<div> <!>."),_e=v("<div> "),he=v('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><p></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const ve=P(()=>R(()=>import("./LoadingColorSpinner-DQeHvyxi.js"),__vite__mapDeps([0,1,2,3]))),me=P(()=>R(()=>import("./InputHr-kk1vKzg8.js"),__vite__mapDeps([4,1,2,5]))),B=P(()=>R(()=>import("./SVG-CS-6Om-s.js"),__vite__mapDeps([6,1,2])));function Ae(m){const[d,I]=y([]),[D,u]=J({}),[L,C]=y(""),[W,$e]=y(""),[k,X]=y(""),[Ie,q]=y(""),[E,F]=y("");U(()=>{}),ee(()=>{}),te(()=>{});const b=(r,a)=>{X(a),q(r),setTimeout(()=>{q("")},300)},f=r=>{F(r),setTimeout(()=>{F("")},3e3)},Q=r=>{r||(r=L()),r=r.split("'").join("-"),C(""),E();let a={timeStamp:new Date().getTime(),latitude:V?.latitude,longitude:V?.longitude,statusId:T(),userId:de?.profile?.userId},t=r.split("/");r.split("-").length>3&&(t=r.split("-"));let e=t?.[0],g="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(g);let l=t.length>4&&e.length===12,o=e.length===13&&s.test(e),n={idairguide:t?.[0],":search0":t?.[1],":search1":t?.[3]};o&&(n={idairguide:"175-2383"+e.slice(3,7),":search0":e});let S="^[0-9]{4}-[1-9]{4}";const x=new RegExp(S);let p=e.length===9&&x.test(e);p&&(n={idairguide:"175-2383"+e.slice(0,4),":search0":e}),o||l||p?Y(n,a):(b("","error"),u({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),f(h()))},Y=async(r,a)=>{let t=await Se(r),e=Object.keys(t)?.[0];if(t[e]?.idairguide){let g=t[e]?.statusHistory||[];g.push(a),r.ssg_track_key=e;let s=t[e]?.estate||t[e]?.consigneeInfo?.ybestate,l=t[e]?.city||t[e]?.consigneeInfo?.ybcity,o={estate:s,city:l,tracking:t[e]?.tracking,currentStatus:T(),timeStamp:new Date().getTime()};if(u(""),u(t[e]),f(h()),b("","success"),!ue?.roles?.[s])b("","warning"),u({consigneeInfo:{ybestate:"Zona incorrecta"}}),f(h());else if(t[e]?.currentStatus!==a.statusId){let n={statusHistory:g,currentStatus:a.statusId};await xe(r,n),I([...d(),o])}else b("","warning"),u({consigneeInfo:{ybcity:"Fue escaneado",ybestate:t[e]?.consigneeInfo?.ybestate}}),f(h())}else b("","error"),u({consigneeInfo:{ybestate:"Error con manifiesto"}}),f(h())};return se(W,async r=>ge?.codes),(()=>{var r=be(),a=r.firstChild,t=a.nextSibling,e=t.firstChild,g=t.nextSibling;return a.style.setProperty("padding","16px"),i(a,c(z,{get when(){return E()},get children(){var s=ye(),l=s.firstChild,o=l.nextSibling;return i(l,c(B,{get name(){return A?.[k()]?.icon},size:32,get color(){return A?.[k()]?.svg}})),i(o,()=>D?.consigneeInfo?.ybestate),w(n=>ne(s,A?.[k()],n)),s}})),t.style.setProperty("padding","16px"),t.style.setProperty("margin-top","35px"),i(t,c(me,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return L()},placeholder:"codigo ...",colors:"#2b2b2b",handleClick:C,onEnter:Q}),e),e.$$click=()=>C(""),i(e,c(B,{name:"Xclose",size:32,color:"#2b2b2b"})),i(g,c(ce,{fallback:s=>(()=>{var l=fe(),o=l.firstChild,n=o.nextSibling;return n.nextSibling,i(l,()=>s.toString(),n),l})(),get children(){return c(ae,{get fallback(){return(()=>{var s=_e();return s.firstChild,i(s,c(ve,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return c(z,{get when(){return d()},get children(){return c(ie,{get each(){return le(d(),"timeStamp",0)},children:(s,l)=>(()=>{var o=he(),n=o.firstChild,S=n.firstChild,x=S.firstChild,p=x.nextSibling,$=S.nextSibling,j=$.firstChild,Z=j.nextSibling,K=Z.nextSibling;return i(x,c(B,{get name(){return oe?.[s?.currentStatus]},size:32})),p.style.setProperty("padding","8px"),i(p,()=>s?.tracking),i(n,c(pe,{}),$),i(j,()=>s?.city),i(K,()=>s?.estate),w(_=>{var H=`client_item_box gWXAaj jlytmu manifest  ${G()?"isMobile":"centerBx"}`,O=` title_scan centerBx ${G(),""} `;return H!==_.e&&M(n,_.e=H),O!==_.t&&M(p,_.t=O),_},{e:void 0,t:void 0}),o})()})}})}})}})),w(s=>(s=E()?"block":"none")!=null?a.style.setProperty("display",s):a.style.removeProperty("display")),r})()}const Se=async m=>await N({params:m,query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2",fldsQry:["idairguide","currentStatus","ssg_track_key","statusHistory","tracking","estate","city","cidentity","consigneeInfo:ybestate","consigneeInfo:ybcity"]}),xe=async(m,d)=>await N({params:m,query:"updateLogisticYabaExpress",data2update:d});re(["click"]);export{Ae as default};