const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-yxzIRufo.js","assets/index-CD4f1kvY.js","assets/index-DHvNTsK7.css","assets/InputHr-DMdc1Irk.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as B,_ as P,a as y,c as K,f as J,p as U,q as ee,b as te,i,d as c,k as w,s as se,S as O,z as re,F as ne,a1 as ae,w as ie,m as j,B as G,K as le,e as oe,t as m,H as M,I as ce,g as v,P as de,n as T}from"./index-CD4f1kvY.js";import{status as V,scannedQRs as ue}from"./Scanning-CLbYXlF9.js";import ge from"./FlexSpace-DjCBl-re.js";var pe=m('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),be=m('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div><div class=scrollH>'),ye=m("<div> <!>."),fe=m("<div> "),he=m('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><p></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const _e=B(()=>P(()=>import("./LoadingColorSpinner-yxzIRufo.js"),__vite__mapDeps([0,1,2]))),ve=B(()=>P(()=>import("./InputHr-DMdc1Irk.js"),__vite__mapDeps([3,1,2,4]))),A=B(()=>P(()=>import("./index-CD4f1kvY.js").then(d=>d.a8),__vite__mapDeps([1,2])));function Ee(d){const[u,I]=y([]),[R,g]=K({}),[D,C]=y(""),[N,xe]=y(""),[k,W]=y(""),[$e,L]=y(""),[E,q]=y("");J(()=>{}),U(()=>{}),ee(()=>{});const f=(r,a)=>{W(a),L(r),setTimeout(()=>{L("")},300)},h=r=>{q(r),setTimeout(()=>{q("")},3e3)},Q=r=>{r||(r=D()),r=r.split("'").join("-"),C(""),E();let a={timeStamp:new Date().getTime(),latitude:M?.latitude,longitude:M?.longitude,statusId:V(),userId:ce?.profile?.userId},t=r.split("/");r.split("-").length>3&&(t=r.split("-"));let e=t?.[0],p="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(p);let l=t.length>4&&e.length===12,o=e.length===13&&s.test(e),n={idairguide:t?.[0],":search0":t?.[1],":search1":t?.[3]};o&&(n={idairguide:"175-2383"+e.slice(3,7),":search0":e});let S="^[0-9]{4}-[1-9]{4}";const x=new RegExp(S);let b=e.length===9&&x.test(e);b&&(n={idairguide:"175-2383"+e.slice(0,4),":search0":e}),o||l||b?X(n,a):(f("","error"),g({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),h(v()))},X=async(r,a)=>{let t=await me(r),e=Object.keys(t)?.[0];if(t[e]?.idairguide){let p=t[e]?.statusHistory||[];p.push(a),r.ssg_track_key=e;let s=t[e]?.estate||t[e]?.consigneeInfo?.ybestate,l=t[e]?.city||t[e]?.consigneeInfo?.ybcity,o={estate:s,city:l,tracking:t[e]?.tracking,currentStatus:V(),timeStamp:new Date().getTime()};if(g(""),g(t[e]),h(v()),f("","success"),!de?.roles?.[s])f("","warning"),g({consigneeInfo:{ybestate:"Zona incorrecta"}}),h(v());else if(t[e]?.currentStatus!==a.statusId){let n={statusHistory:p,currentStatus:a.statusId};await Se(r,n),I([...u(),o])}else f("","warning"),g({consigneeInfo:{ybcity:"Fue escaneado",ybestate:t[e]?.consigneeInfo?.ybestate}}),h(v())}else f("","error"),g({consigneeInfo:{ybestate:"Error con manifiesto"}}),h(v())};return te(N,async r=>ue?.codes),(()=>{var r=be(),a=r.firstChild,t=a.nextSibling,e=t.firstChild,p=t.nextSibling;return a.style.setProperty("padding","16px"),i(a,c(O,{get when(){return E()},get children(){var s=pe(),l=s.firstChild,o=l.nextSibling;return i(l,c(A,{get name(){return themeAlert?.[k()]?.icon},size:32,get color(){return themeAlert?.[k()]?.svg}})),i(o,()=>R?.consigneeInfo?.ybestate),w(n=>se(s,themeAlert?.[k()],n)),s}})),t.style.setProperty("padding","16px"),t.style.setProperty("margin-top","35px"),i(t,c(ve,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--hrm-palette-tertiary80)",get value(){return D()},placeholder:"codigo ...",colors:"#2b2b2b",handleClick:C,onEnter:Q}),e),e.$$click=()=>C(""),i(e,c(A,{name:"Xclose",size:32,color:"#2b2b2b"})),i(p,c(le,{fallback:s=>(()=>{var l=ye(),o=l.firstChild,n=o.nextSibling;return n.nextSibling,i(l,()=>s.toString(),n),l})(),get children(){return c(re,{get fallback(){return(()=>{var s=fe();return s.firstChild,i(s,c(_e,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return c(O,{get when(){return u()},get children(){return c(ne,{get each(){return ae(u(),"timeStamp",0)},children:(s,l)=>(()=>{var o=he(),n=o.firstChild,S=n.firstChild,x=S.firstChild,b=x.nextSibling,$=S.nextSibling,F=$.firstChild,Y=F.nextSibling,Z=Y.nextSibling;return i(x,c(A,{get name(){return ie?.[s?.currentStatus]},size:32})),b.style.setProperty("padding","8px"),i(b,()=>s?.tracking),i(n,c(ge,{}),$),i(F,()=>s?.city),i(Z,()=>s?.estate),w(_=>{var H=`client_item_box gWXAaj jlytmu manifest  ${j()?"isMobile":"centerBx"}`,z=` title_scan centerBx ${j(),""} `;return H!==_.e&&G(n,_.e=H),z!==_.t&&G(b,_.t=z),_},{e:void 0,t:void 0}),o})()})}})}})}})),w(s=>(s=E()?"block":"none")!=null?a.style.setProperty("display",s):a.style.removeProperty("display")),r})()}const me=async d=>await T({params:d,query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2",fldsQry:["idairguide","currentStatus","ssg_track_key","statusHistory","tracking","estate","city","cidentity","consigneeInfo:ybestate","consigneeInfo:ybcity"]}),Se=async(d,u)=>await T({params:d,query:"updateLogisticYabaExpress",data2update:u});oe(["click"]);export{Ee as default};