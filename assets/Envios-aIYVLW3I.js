const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-YiPGaW88.js","assets/index-Cj6AZogZ.js","assets/index-DHvNTsK7.css","assets/InputHr-Dzi2e0bG.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-BjKrZO5d.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ContainerElasticView-KiIqDELJ.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ButonHrm-BAfiny4Q.js","assets/ButonHrm-BPLzySnX.css","assets/CheckBoxSlide-CHUZW0b5.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnEnvios-B8Mxlsz1.js","assets/ItemOnEnviosMobile-Cm9U9Via.js"])))=>i.map(i=>d[i]);
import{l as S,_ as A,c as Q,a as B,u as ye,p as xe,f as ke,b as Ce,i,d as t,I as U,S as f,J as we,F as Y,j as F,m as V,k as G,B as z,z as Z,g as N,K as Se,s as Ae,x as X,w as ne,L as Ie,n as J,e as Ee,t as _,Z as Ne,N as Be,P as H,Q as De}from"./index-Cj6AZogZ.js";import{g as re,S as Ge,l as Pe}from"./ShowQRPrintLabel-WMkUsZsc.js";var Le=_("<div style=padding:4px>"),Me=_('<div class="icon_status centerBx">'),Oe=_('<div class="centerBx bottombx"style=margin-top:10px;><h5>Duplicados'),Fe=_('<div><div class="centerBx bottombx "><h5 class="">Manifiesto Incorrecto'),Ve=_('<div><div class="_dsplFlx flxWrp spaceAround ">'),Re=_('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx flxWrp spaceAround "><div class="icon_status centerBx"></div><div class="icon_status centerBx">'),ze=_('<div><div class="centerBx100 centerBx"><div class=plans></div></div><div class="icon_status centerBx">'),je=_('<div><div class="_dsplFlx flxWrp spaceAround "><div class="icon_status centerBx">'),Te=_('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Envios</h2><div class="centerBx bottombx"style=margin-top:10px;><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div>'),We=_("<div> <!>."),qe=_("<div> "),Ye=_("<div class=icon_info><div class=boxOpenInfo><div class=boxInfo><span>"),se=_("<h5 class=totalBagsNo> <!> / "),le=_('<div><div class="icon_status centerBx"></div><h5 class=""></h5>'),ae=_("<div class=leftMrg> "),Xe=_("<div class=bottombx><h4>"),He=_("<div>"),Ke=_('<div class="_dsplFlx bottombx lowbordr"><div class=" bottombx spaceAround centerBx"><h5> :</h5><h4>'),Qe=_("<div style=padding:16px;margin-left:20px;>"),Ue=_('<div class="bottombx left centerBx"style=text-align:left;><h4></h4><h5>');const ee=S(()=>A(()=>import("./LoadingColorSpinner-YiPGaW88.js"),__vite__mapDeps([0,1,2]))),Ze=S(()=>A(()=>import("./InputHr-Dzi2e0bG.js"),__vite__mapDeps([3,1,2,4]))),D=S(()=>A(()=>import("./index-Cj6AZogZ.js").then(e=>e.a8),__vite__mapDeps([1,2]))),Je=S(()=>A(()=>import("./DropDwnSearch-BjKrZO5d.js"),__vite__mapDeps([5,1,2,6]))),et=S(()=>A(()=>import("./ContainerElasticView-KiIqDELJ.js"),__vite__mapDeps([7,1,2,8]))),tt=S(()=>A(()=>import("./ButonHrm-BAfiny4Q.js"),__vite__mapDeps([9,1,2,10]))),ie=S(()=>A(()=>import("./CheckBoxSlide-CHUZW0b5.js"),__vite__mapDeps([11,1,2,12]))),rt=S(()=>A(()=>import("./ItemOnEnvios-B8Mxlsz1.js"),__vite__mapDeps([13,1,2,7,8])));S(()=>A(()=>import("./ItemOnEnviosMobile-Cm9U9Via.js"),__vite__mapDeps([14,1,2,7,8])));function _t(){const[e,s]=Q({list:{manifest:{id:"175-23834635",label:""},search:"",status:""}}),[n,h]=Q({}),[d,c]=Q({}),[v,k]=B(""),[p,P]=B(64),[L,I]=B(!1),[C,M]=B(!1),[K,j]=B(""),O=ye(k,500),R=(a,u)=>{s("list",{[a]:u}),O(N())},ce=()=>{I(!L()),O(N())},oe=()=>{M(!C()),O(N())};xe(()=>{}),ke(()=>{});const ue=()=>{P(a=>a+64)},de=a=>{let u=Math.ceil(a?.length/64);De(ue,1250,u)},[E,{refetch:dt}]=Ce(v,async a=>{let u=e?.list?.manifest?.id;K()!==u&&j(u);const y=await st(e?.list?.search,u,e?.list?.status,e?.list?.estate,e?.list?.city),b=await lt(u);h(b),c("prov",void 0),P(0);let w=[],g={};return L()?F(y).map(x=>{let l=y[x],r=l?.estate||l?.consigneeInfo?.ybestate;Ne?.[l?.zone]?.[r]||w.push(l)}):C()?F(y).map(x=>{let l=y[x];l?.currentStatus||w.push(l)}):(F(y).map(x=>{let l=y[x],r=l?.estate||l?.consigneeInfo?.ybestate,o=l?.city||l?.consigneeInfo?.ybcity;g[r]||(g[r]={cities:{},total:0}),g[r].cities?.[o]||(g[r].cities[o]=0),g[r].cities[o]+=1,g[r].total+=1,w.push(l)}),c("prov",g)),de(w),w}),te=()=>E()?.length,ge=a=>{s("list",{manifest:a,status:void 0}),O(N())},me=()=>{at(E())},_e=()=>{ct(E())},he=()=>{},fe=(a,u)=>{R("estate",a),R("city",u)},ve=(a,u)=>{s("list",{estate:void 0,city:void 0}),O(N())},T=a=>a?" "+a:"",pe=a=>{let u=a?.consigneeInfo;return T(u?.firstName)+T(u?.middleName)+T(u?.lastName)+T(u?.lastName2)},be=async()=>{let a=[];if(E().length<80){const u=E().map(async(b,w)=>{let g=b?.tracking,x="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const l=new RegExp(x);g.length===13&&l.test(g)&&(g=g.slice(3,12));let o=await re(g),m={state:b?.consigneeInfo?.ybestate,name:pe(b),phoneNumber:b?.consigneeInfo?.phoneNumber,altPhoneNumber:b?.consigneeInfo?.altPhoneNumber,guiaWeek:b?.guia,bulto:b?.bagnumber,tracking:g,qr:o};a.push(m)});await Promise.all(u);let y=await Ge(a);window.open(y)}else Be({text:"El limite de etiquetas a imprimir es de 80",timeout:2500,id:N()})},$e=async()=>{let a=[],u=210080,y=u+5,b=[],w=new Date().getFullYear().toString().slice(2,4);for(let l=u;l<y;l++)b.push("Y"+w+l);const g=b.map(async(l,r)=>{let m={mtrx:await re(l),lbl:l};a.push(m)});await Promise.all(g);let x=await Pe(a);window.open(x)};return(()=>{var a=Te(),u=a.firstChild,y=u.firstChild,b=y.nextSibling,w=b.firstChild,g=u.nextSibling,x=g.firstChild,l=g.nextSibling;return i(w,()=>e?.list?.manifest?.id),i(a,t(f,{get when(){return U?.profile?.isAdmin},get children(){return t(tt,{color:"rgb(200 25 60 / 1)",label:"updManifest",handleClick:me})}}),g),i(x,t(Je,{list:we,lbl_empty:"Manifiesto",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.list?.manifest?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:r=>ge(r),width:"260px"})),i(g,t(f,{get when(){return e?.list?.manifest?.id},get children(){return[(()=>{var r=Le();return i(r,t(Ze,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:o=>R("search",o)})),r})(),(()=>{var r=Fe(),o=r.firstChild,m=o.firstChild;return i(o,t(ie,{get initValue(){return L()},updChange:ce,color:"var(--background-red-ssg)"}),m),i(r,t(f,{get when(){return U?.profile?.isAdmin},get children(){var $=Oe(),W=$.firstChild;return i($,t(ie,{get initValue(){return C()},updChange:oe,color:"var(--background-red-ssg)"}),W),i($,t(f,{get when(){return C()},get children(){var q=Me();return q.$$click=_e,i(q,t(D,{name:"outline_delete",size:24})),q}}),null),$}}),null),r})()]}}),null),i(a,t(f,{get when(){return e?.list?.manifest?.id},get children(){var r=Ve(),o=r.firstChild;return i(o,t(f,{get when(){return n?.total},get children(){return t(Y,{get each(){return F(n)},children:(m,$)=>V()?t(nt,{keyG:m,total:te,get status(){return e?.list?.status},get amount(){return n?.[m]},updForm:R}):t(it,{keyG:m,total:te,get status(){return e?.list?.status},get amount(){return n?.[m]},updForm:R})})}})),G(()=>z(r,`client_item_box gWXAaj jlytmu ${V()?"isMobile":""}`)),r}}),l),i(l,t(f,{get when(){return U?.profile?.isAdmin},get children(){var r=Re(),o=r.firstChild,m=o.firstChild,$=m.nextSibling;return m.$$click=$e,i(m,t(D,{name:"printer",size:24,color:"firebrick"})),$.$$click=he,i($,t(D,{name:"outline_renew",size:24})),r}}),null),i(l,t(f,{get when(){return d?.prov},get children(){var r=ze(),o=r.firstChild,m=o.firstChild,$=o.nextSibling;return i(m,t(f,{get when(){return d?.prov},get children(){return t(Y,{get each(){return F(d?.prov)},children:(W,q)=>t(ut,{ism:W,get item(){return d?.prov?.[W]},updS:fe})})}})),$.$$click=ve,i($,t(D,{name:"Xclose",size:22})),G(()=>z(r,`client_item_box gWXAaj jlytmu ${V()?"isMobile":""}`)),r}}),null),i(l,t(f,{get when(){return e?.list?.manifest?.id},get children(){var r=je(),o=r.firstChild,m=o.firstChild;return m.$$click=be,i(m,t(D,{name:"printer",size:32})),G(()=>z(r,`client_item_box gWXAaj jlytmu ${V()?"isMobile":""}`)),r}}),null),i(l,t(Se,{fallback:r=>(()=>{var o=We(),m=o.firstChild,$=m.nextSibling;return $.nextSibling,i(o,()=>r.toString(),$),o})(),get children(){return t(Z,{get fallback(){return(()=>{var r=qe();return r.firstChild,i(r,t(ee,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r})()},get children(){return t(f,{get when(){return E()},get children(){return t(Y,{get each(){return E()?.slice(0,p())},children:(r,o)=>t(rt,{item:r,refresh:()=>O(N())})})}})}})}}),null),G(r=>Ae(l,` ${V()?"":"width:94vw;"} margin: 0 auto;`,r)),a})()}const it=e=>{const[s,n]=B(!1),[h,d]=B(0),c=()=>{let p=e?.keyG;e?.keyG==="total"&&(p=null),e?.updForm("status",p)},v=()=>{s()||!V()&&e?.keyG!=="total"&&(d(X?.[e?.keyG]?.length*8.5+"px"),n(!0))},k=()=>{d("0px"),s()&&n(!1)};return t(f,{get when(){return e?.amount>0},get children(){return t(Z,{get fallback(){return(()=>{var p=ae();return p.firstChild,i(p,t(ee,{stroke:"rgb(200 25 60 / 1)",size:32}),null),p})()},get children(){var p=le(),P=p.firstChild,L=P.nextSibling;return p.$$mouseout=k,p.$$mousemove=v,p.$$click=c,i(p,t(f,{get when(){return s()},get children(){var I=Ye(),C=I.firstChild,M=C.firstChild,K=M.firstChild;return i(K,()=>X?.[e?.keyG]),G(j=>(j=h())!=null?C.style.setProperty("width",j):C.style.removeProperty("width")),I}}),P),i(P,t(D,{get name(){return ne?.[e?.keyG]},size:22})),i(p,t(f,{get when(){return e?.keyG==="total"},get children(){var I=se(),C=I.firstChild,M=C.nextSibling;return M.nextSibling,i(I,()=>e?.total(),M),I}}),L),i(L,()=>e?.amount),G(()=>z(p,`resumeStatus centerBx ${e?.keyG==="total"?"witXs":""}  ${e?.status===e?.keyG?"active":""}`)),p}})}})},nt=e=>{const s=()=>{let n=e?.keyG;e?.keyG==="total"&&(n=null),e?.updForm("status",n)};return t(f,{get when(){return e?.amount>0},get children(){return t(Z,{get fallback(){return(()=>{var n=ae();return n.firstChild,i(n,t(ee,{stroke:"rgb(200 25 60 / 1)",size:32}),null),n})()},get children(){var n=le(),h=n.firstChild,d=h.nextSibling;return n.$$click=s,i(h,t(D,{get name(){return ne?.[e?.keyG]},size:22})),i(n,t(f,{get when(){return X?.[e?.keyG]},get children(){var c=Xe(),v=c.firstChild;return i(v,()=>X?.[e?.keyG]),c}}),d),i(n,t(f,{get when(){return e?.keyG==="total"},get children(){var c=se(),v=c.firstChild,k=v.nextSibling;return k.nextSibling,i(c,()=>e?.total(),k),c}}),d),i(d,()=>e?.amount),G(()=>z(n,`resumeStatus centerBx  spaceAround ${e?.status===e?.keyG?"active":""}`)),n}})}})},st=async(e,s,n,h,d)=>{let c={params:{idairguide:s,":search5":s},fldsQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:ybestate","consigneeInfo:ybcity"],query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2 AND !* contain :search3 AND !* contain :search4 AND !* contain :search5 AND currentStatus = :status AND agency = :agency AND estate = :estate AND city = :city"};if(e&&e.split(" ").map((v,k)=>{v&&(c.params[":search"+k]=v.trim())}),n&&(c.params[":status"]=n),h&&(c.params[":estate"]=h),d&&(c.params[":city"]=d),H?.roles?.agency&&(c.params[":agency"]=H?.roles?.agency+""),s&&Object.keys(c.params).length>=2){const v=await J(c);return v?.data?.error?{}:v}return{}},lt=async e=>{let s={params:{idairguide:e},query:"getGroupStatusLogisticYabaExpress",queryString:"agency = :agency"};H?.roles?.agency&&(s.params[":agency"]=H?.roles?.agency+"");const n=await J(s);return n?.data?.error?{}:n},at=async e=>{e.map(s=>{s?.ssg_track_key,s?.idairguide})},ct=async e=>{e.map(s=>{s?.ssg_track_key,s?.idairguide})},ht=async(e,s)=>{let n=[];e.map(h=>{let d={params:{ssg_track_key:h?.ssg_track_key,idairguide:h?.idairguide},data2update:{currentStatus:s},query:"updateLogisticYabaExpress"};n.push(d)}),Ie(n,ot)},ot=async e=>{const n=await J(e);if(n)return n},ut=e=>(()=>{var s=He();return i(s,t(f,{get when(){return e?.item?.total>0},get children(){var n=Ke(),h=n.firstChild,d=h.firstChild,c=d.firstChild,v=d.nextSibling;return h.$$click=()=>e?.updS(e?.ism),i(d,()=>e?.ism,c),i(v,()=>e?.item?.total),n}}),null),i(s,t(et,{get children(){var n=Qe();return i(n,t(f,{get when(){return e?.item?.cities},get children(){return t(Y,{get each(){return F(e?.item?.cities)},children:(h,d)=>(()=>{var c=Ue(),v=c.firstChild,k=v.nextSibling;return c.$$click=()=>e?.updS(e?.ism,h),i(v,h),i(k,()=>e?.item?.cities?.[h]),c})()})}})),n}}),null),s})();Ee(["click","mousemove","mouseout"]);export{it as StatusGroupItem,_t as default,ct as deleteManifest,ot as fetchCSVInve,at as loadManifest,ht as updateManifest};
