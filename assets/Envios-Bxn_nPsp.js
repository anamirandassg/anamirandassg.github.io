const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-lBBaGVw4.js","assets/index-Dqo_j541.js","assets/index-IeDM_K18.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-qQqQY3oI.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-CzxGeISJ.js","assets/DropDwnSearch-Bgqfdodd.js","assets/debounces-ClZ-2WVf.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ContainerElasticView-TIcgFwa6.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ButonHrm-5ePACS6n.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-BQiJq8nD.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnEnvios-D138zvdN.js","assets/DialogHRM-DoyCFp-E.js","assets/DialogHRM-V9_lZntj.css","assets/ItemOnEnviosMobile-Cw9XlFaR.js"])))=>i.map(i=>d[i]);
import{l as I,_ as A,c as Z,a as S,p as Ne,k as De,b as Pe,i as r,d as t,f as R,V as Be,o as te,e as Ge,t as f,n as J,S as h,Y as Le,$ as se,y as X,F as Y,O as V,h as q,g as H,j as B,s as Me,w as K,v as de,a6 as Oe,K as U,a7 as Fe}from"./index-Dqo_j541.js";import{u as Ve}from"./debounces-ClZ-2WVf.js";import{g as le,S as ze,l as Re}from"./ShowQRPrintLabel-ChtuqCg5.js";import{OpenToast as Te}from"./Toast-DrEpDlGi.js";import"./fontkit.es-BgZByb7N.js";import"./qrcode-C5vWJp7P.js";import"./InitPrintServices-B25V_wn1.js";var qe=f("<div style=padding:4px>"),ee=f('<div class="icon_status centerBx">'),je=f('<div class="centerBx bottombx"style=margin-top:10px;><h5>Duplicados'),We=f('<div><div class="centerBx bottombx "><h5 class="">Manifiesto Incorrecto'),Ye=f('<div><div class="_dsplFlx flxWrp spaceAround ">'),Xe=f('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx flxWrp spaceAround "><div class="icon_status centerBx">'),He=f('<div><div class="centerBx100 centerBx"><div class=plans></div></div><div class="icon_status centerBx">'),Ke=f('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Envios</h2><div class="centerBx bottombx"style=margin-top:10px;><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div>'),ae=f("<div> <!>."),oe=f("<div> "),ce=f("<div class=centerBx><h5 style=margin-left:12px>generando etiquetas"),Ue=f("<div class=icon_info><div class=boxOpenInfo><div class=boxInfo><span>"),ge=f("<h5 class=totalBagsNo> <!> / "),me=f('<div><div class="icon_status centerBx"></div><h5 class=""></h5>'),_e=f("<div class=leftMrg> "),Qe=f("<div class=bottombx><h4>"),Ze=f("<div>"),Je=f('<div class="_dsplFlx bottombx lowbordr"><div class=" bottombx spaceAround centerBx"><h5> :</h5><h4>'),et=f("<div style=padding:16px;margin-left:20px;>"),tt=f('<div class="bottombx left centerBx"style=text-align:left;><h4></h4><h5>');const z=I(()=>A(()=>import("./LoadingColorSpinner-lBBaGVw4.js"),__vite__mapDeps([0,1,2,3]))),rt=I(()=>A(()=>import("./InputHr-qQqQY3oI.js"),__vite__mapDeps([4,1,2,5]))),G=I(()=>A(()=>import("./SVG-CzxGeISJ.js"),__vite__mapDeps([6,1,2]))),nt=I(()=>A(()=>import("./DropDwnSearch-Bgqfdodd.js"),__vite__mapDeps([7,1,2,8,6,9]))),it=I(()=>A(()=>import("./ContainerElasticView-TIcgFwa6.js"),__vite__mapDeps([10,1,2,6,11]))),st=I(()=>A(()=>import("./ButonHrm-5ePACS6n.js"),__vite__mapDeps([12,1,2,6,13]))),ue=I(()=>A(()=>import("./CheckBoxSlide-BQiJq8nD.js"),__vite__mapDeps([14,1,2,15]))),lt=I(()=>A(()=>import("./ItemOnEnvios-D138zvdN.js"),__vite__mapDeps([16,1,2,17,18,10,6,11])));I(()=>A(()=>import("./ItemOnEnviosMobile-Cw9XlFaR.js"),__vite__mapDeps([19,1,2,17,18,10,6,11,8])));function xt(){const[e,l]=Z({list:{manifest:{id:"175-23834613",label:""},search:"",status:""}}),[i,v]=Z({}),[m,o]=Z({}),[b,x]=S(""),[$,L]=S(64),[M,E]=S(!1),[C,O]=S(!1),[Q,j]=S(""),F=Ve(x,500),[he,re]=S(!1),[fe,ne]=S(!1),T=(a,c)=>{l("list",{[a]:c}),F(B())},ve=()=>{E(!M()),F(B())},be=()=>{O(!C()),F(B())};Ne(()=>{}),De(()=>{});const $e=()=>{L(a=>a+64)},pe=a=>{let c=Math.ceil(a?.length/64);Fe($e,1250,c)},[D,{refetch:ht}]=Pe(b,async a=>{let c=e?.list?.manifest?.id;Q()!==c&&j(c);const N=await ut(c);v(N);let k=[],_={};var y={};return y=await ct(e?.list?.search,c,e?.list?.status,e?.list?.estate,e?.list?.city),o("prov",void 0),L(0),M()?V(y).map(p=>{let d=y[p],n=d?.estate||d?.consigneeInfo?.ybestate;Oe?.[d?.zone]?.[n]||k.push(d)}):C()?V(y).map(p=>{let d=y[p];d?.currentStatus||k.push(d)}):(V(y).map(p=>{let d=y[p],n=d?.estate||d?.consigneeInfo?.ybestate,u=d?.city||d?.consigneeInfo?.ybcity;_[n]||(_[n]={cities:{},total:0}),_[n].cities?.[u]||(_[n].cities[u]=0),_[n].cities[u]+=1,_[n].total+=1,k.push(d)}),o("prov",_)),pe(k),k}),ie=()=>D()?.length,ye=a=>{l("list",{manifest:a,status:void 0}),F(B())},ke=()=>{dt(D())},xe=()=>{gt(D())},Ce=()=>{},we=(a,c)=>{T("estate",a),T("city",c)},Se=(a,c)=>{l("list",{estate:void 0,city:void 0}),F(B())},W=a=>a?" "+a:"",Ie=a=>{let c=a?.consigneeInfo;return W(c?.firstName)+W(c?.middleName)+W(c?.lastName)+W(c?.lastName2)},Ae=async()=>{let a=[],c=360;if(re(!0),D().length<c){const N=D().map(async(_,y)=>{let p=_?.tracking,d="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const n=new RegExp(d);p.length===13&&n.test(p)&&(p=p.slice(3,12));let g=await le(p),s={state:_?.consigneeInfo?.ybestate,name:Ie(_),phoneNumber:_?.consigneeInfo?.phoneNumber,altPhoneNumber:_?.consigneeInfo?.altPhoneNumber,guiaWeek:_?.guia,bulto:_?.bagnumber,tracking:p,qr:g};a.push(s)});await Promise.all(N);let k=await ze(a);window.open(k),re(!1)}else Te({text:`El limite de etiquetas a imprimir es de ${c}`,timeout:2500,id:B()})},Ee=async()=>{let a=[];ne(!0),setTimeout(async()=>{let c=3,N=301602,k=N+c,_=[],y=new Date().getFullYear().toString().slice(2,4);for(let n=N;n<k;n++)_.push("Y"+y+n);const p=_.map(async(n,u)=>{let s={mtrx:await le(n),lbl:n};a.push(s)});await Promise.all(p);let d=await Re(a);window.open(d),ne(!1)},760)};return(()=>{var a=Ke(),c=a.firstChild,N=c.firstChild,k=N.nextSibling,_=k.firstChild,y=c.nextSibling,p=y.firstChild,d=y.nextSibling;return r(_,()=>e?.list?.manifest?.id),r(a,t(h,{get when(){return J?.profile?.isAdmin},get children(){return t(st,{color:"rgb(200 25 60 / 1)",label:"updManifest",handleClick:ke})}}),y),r(p,t(nt,{list:Le,lbl_empty:"Manifiesto",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.list?.manifest?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:n=>ye(n),width:"260px"})),r(y,t(h,{get when(){return e?.list?.manifest?.id},get children(){return[(()=>{var n=qe();return r(n,t(rt,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:u=>T("search",u)})),n})(),(()=>{var n=We(),u=n.firstChild,g=u.firstChild;return r(u,t(ue,{get initValue(){return M()},updChange:ve,color:"var(--background-red-ssg)"}),g),r(n,t(h,{get when(){return J?.profile?.isAdmin},get children(){var s=je(),w=s.firstChild;return r(s,t(ue,{get initValue(){return C()},updChange:be,color:"var(--background-red-ssg)"}),w),r(s,t(h,{get when(){return C()},get children(){var P=ee();return P.$$click=xe,r(P,t(G,{name:"outline_delete",size:24})),P}}),null),s}}),null),n})()]}}),null),r(d,t(h,{get when(){return e?.list?.manifest?.id},get children(){var n=Ye(),u=n.firstChild;return r(u,t(se,{fallback:g=>(()=>{var s=ae(),w=s.firstChild,P=w.nextSibling;return P.nextSibling,r(s,()=>g.toString(),P),s})(),get children(){return t(X,{get fallback(){return(()=>{var g=oe();return g.firstChild,r(g,t(z,{stroke:"rgb(200 25 60 / 1)",size:62}),null),g})()},get children(){return t(h,{get when(){return i?.total},get children(){return t(Y,{get each(){return V(i)},children:(g,s)=>q()?t(ot,{keyG:g,total:ie,get status(){return e?.list?.status},get amount(){return i?.[g]},updForm:T}):t(at,{keyG:g,total:ie,get status(){return e?.list?.status},get amount(){return i?.[g]},updForm:T})})}})}})}})),R(()=>H(n,`client_item_box gWXAaj jlytmu ${q()?"isMobile":""}`)),n}}),null),r(d,t(h,{get when(){return J?.profile?.isAdmin},get children(){var n=Xe(),u=n.firstChild,g=u.firstChild;return r(u,t(h,{get when(){return!fe()},get fallback(){return(()=>{var s=ce(),w=s.firstChild;return r(s,t(z,{stroke:"rgb(200 25 60 / 1)",size:32}),w),s})()},get children(){var s=ee();return s.$$click=Ee,r(s,t(G,{name:"printer",size:24,color:"firebrick"})),s}}),g),g.$$click=Ce,r(g,t(G,{name:"outline_renew",size:24})),r(u,t(h,{get when(){return!he()},get fallback(){return(()=>{var s=ce(),w=s.firstChild;return r(s,t(z,{stroke:"rgb(200 25 60 / 1)",size:32}),w),s})()},get children(){var s=ee();return s.$$click=Ae,r(s,t(G,{name:"printer",size:32})),s}}),null),n}}),null),r(d,t(h,{get when(){return m?.prov},get children(){var n=He(),u=n.firstChild,g=u.firstChild,s=u.nextSibling;return r(g,t(h,{get when(){return m?.prov},get children(){return t(Y,{get each(){return V(m?.prov)},children:(w,P)=>t(_t,{ism:w,get item(){return m?.prov?.[w]},updS:we})})}})),s.$$click=Se,r(s,t(G,{name:"Xclose",size:22})),R(()=>H(n,`client_item_box gWXAaj jlytmu ${q()?"isMobile":""}`)),n}}),null),r(d,t(se,{fallback:n=>(()=>{var u=ae(),g=u.firstChild,s=g.nextSibling;return s.nextSibling,r(u,()=>n.toString(),s),u})(),get children(){return t(X,{get fallback(){return(()=>{var n=oe();return n.firstChild,r(n,t(z,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return t(h,{get when(){return D()},get children(){return t(Y,{get each(){return D()?.slice(0,$())},children:(n,u)=>t(lt,{item:n,refresh:()=>F(B())})})}})}})}}),null),R(n=>Me(d,` ${q()?"":"width:94vw;"} margin: 0 auto;`,n)),a})()}const at=e=>{const[l,i]=S(!1),[v,m]=S(0),o=()=>{let $=e?.keyG;e?.keyG==="total"&&($=null),e?.updForm("status",$)},b=()=>{l()||!q()&&e?.keyG!=="total"&&(m(K?.[e?.keyG]?.length*8.5+"px"),i(!0))},x=()=>{m("0px"),l()&&i(!1)};return t(h,{get when(){return e?.amount>0},get children(){return t(X,{get fallback(){return(()=>{var $=_e();return $.firstChild,r($,t(z,{stroke:"rgb(200 25 60 / 1)",size:32}),null),$})()},get children(){var $=me(),L=$.firstChild,M=L.nextSibling;return $.$$mouseout=x,$.$$mousemove=b,$.$$click=o,r($,t(h,{get when(){return l()},get children(){var E=Ue(),C=E.firstChild,O=C.firstChild,Q=O.firstChild;return r(Q,()=>K?.[e?.keyG]),R(j=>(j=v())!=null?C.style.setProperty("width",j):C.style.removeProperty("width")),E}}),L),r(L,t(G,{get name(){return de?.[e?.keyG]},size:22})),r($,t(h,{get when(){return e?.keyG==="total"},get children(){var E=ge(),C=E.firstChild,O=C.nextSibling;return O.nextSibling,r(E,()=>e?.total(),O),E}}),M),r(M,()=>e?.amount),R(()=>H($,`resumeStatus centerBx ${e?.keyG==="total"?"witXs":""}  ${e?.status===e?.keyG?"active":""}`)),$}})}})},ot=e=>{const l=()=>{let i=e?.keyG;e?.keyG==="total"&&(i=null),e?.updForm("status",i)};return t(h,{get when(){return e?.amount>0},get children(){return t(X,{get fallback(){return(()=>{var i=_e();return i.firstChild,r(i,t(z,{stroke:"rgb(200 25 60 / 1)",size:32}),null),i})()},get children(){var i=me(),v=i.firstChild,m=v.nextSibling;return i.$$click=l,r(v,t(G,{get name(){return de?.[e?.keyG]},size:22})),r(i,t(h,{get when(){return K?.[e?.keyG]},get children(){var o=Qe(),b=o.firstChild;return r(b,()=>K?.[e?.keyG]),o}}),m),r(i,t(h,{get when(){return e?.keyG==="total"},get children(){var o=ge(),b=o.firstChild,x=b.nextSibling;return x.nextSibling,r(o,()=>e?.total(),x),o}}),m),r(m,()=>e?.amount),R(()=>H(i,`resumeStatus centerBx  spaceAround ${e?.status===e?.keyG?"active":""}`)),i}})}})},ct=async(e,l,i,v,m)=>{let o={params:{idairguide:l,":search5":l},fldsQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:ybestate","consigneeInfo:ybcity"],query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2 AND !* contain :search3 AND !* contain :search4 AND !* contain :search5 AND currentStatus = :status AND agency = :agency AND estate = :estate AND city = :city"};if(e&&e.split(" ").map((b,x)=>{b&&(o.params[":search"+x]=b.trim())}),i&&(o.params[":status"]=i),v&&(o.params[":estate"]=v),m&&(o.params[":city"]=m),U?.roles?.agency&&(o.params[":agency"]=U?.roles?.agency+""),l&&Object.keys(o.params).length>=2){const b=await te(o);return b?.data?.error?{}:b}return{}},ut=async e=>{let l={params:{idairguide:e},query:"getGroupStatusLogisticYabaExpress",queryString:"agency = :agency"};U?.roles?.agency&&(l.params[":agency"]=U?.roles?.agency+"");const i=await te(l);return i?.data?.error?{}:i},dt=async e=>{e.map(l=>{l?.ssg_track_key,l?.idairguide})},gt=async e=>{e.map(l=>{l?.ssg_track_key,l?.idairguide})},Ct=async(e,l)=>{let i=[];e.map(v=>{let m={params:{ssg_track_key:v?.ssg_track_key,idairguide:v?.idairguide},data2update:{currentStatus:l},query:"updateLogisticYabaExpress"};i.push(m)}),Be(i,mt)},mt=async e=>{const i=await te(e);if(i)return i},_t=e=>(()=>{var l=Ze();return r(l,t(h,{get when(){return e?.item?.total>0},get children(){var i=Je(),v=i.firstChild,m=v.firstChild,o=m.firstChild,b=m.nextSibling;return v.$$click=()=>e?.updS(e?.ism),r(m,()=>e?.ism,o),r(b,()=>e?.item?.total),i}}),null),r(l,t(it,{get children(){var i=et();return r(i,t(h,{get when(){return e?.item?.cities},get children(){return t(Y,{get each(){return V(e?.item?.cities)},children:(v,m)=>(()=>{var o=tt(),b=o.firstChild,x=b.nextSibling;return o.$$click=()=>e?.updS(e?.ism,v),r(b,v),r(x,()=>e?.item?.cities?.[v]),o})()})}})),i}}),null),l})();Ge(["click","mousemove","mouseout"]);export{at as StatusGroupItem,xt as default,gt as deleteManifest,mt as fetchCSVInve,dt as loadManifest,Ct as updateManifest};
