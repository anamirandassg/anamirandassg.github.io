const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-87w8c03J.js","assets/index-9Aucx7lX.js","assets/index-DHvNTsK7.css","assets/InputHr-DPC1zQgQ.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-BGISo22_.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ContainerElasticView-BtZ3oKPN.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ButonHrm-CSQNmlZL.js","assets/ButonHrm-BPLzySnX.css","assets/CheckBoxSlide-BGxJXG2W.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnEnvios-BC14yA_T.js","assets/ItemOnEnviosMobile-ShYVEP9O.js"])))=>i.map(i=>d[i]);
import{l as S,_ as A,c as Q,a as D,u as $e,p as ye,f as xe,b as ke,i as n,d as t,y as Z,S as f,z as Ce,F as Y,j as R,m as V,k as G,A as j,B as K,g as B,E as we,s as Se,x as X,w as ne,D as Ae,n as J,e as Ie,t as _,Z as Ee,G as Be,H,I as De}from"./index-9Aucx7lX.js";import{g as Ne,b as Ge,S as Le,a as Pe,c as Me,l as Oe}from"./ShowQRPrintLabel-BDCzsEn0.js";var Fe=_("<div style=padding:4px>"),Re=_('<div class="icon_status centerBx">'),Ve=_('<div class="centerBx bottombx"style=margin-top:10px;><h5>Duplicados'),ze=_('<div><div class="centerBx bottombx "><h5 class="">Manifiesto Incorrecto'),je=_('<div><div class="_dsplFlx flxWrp spaceAround ">'),qe=_('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx flxWrp spaceAround "><div class="icon_status centerBx"></div><div class="icon_status centerBx">'),Te=_('<div><div class="centerBx100 centerBx"><div class=plans></div></div><div class="icon_status centerBx">'),We=_('<div><div class="_dsplFlx flxWrp spaceAround "><div class="icon_status centerBx">'),Ye=_('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Envios</h2><div class="centerBx bottombx"style=margin-top:10px;><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div>'),Xe=_("<div> <!>."),He=_("<div> "),Ue=_("<div class=icon_info><div class=boxOpenInfo><div class=boxInfo><span>"),ie=_("<h5 class=totalBagsNo> <!> / "),se=_('<div><div class="icon_status centerBx"></div><h5 class=""></h5>'),le=_("<div class=leftMrg> "),Qe=_("<div class=bottombx><h4>"),Ze=_("<div>"),Ke=_('<div class="_dsplFlx bottombx lowbordr"><div class=" bottombx spaceAround centerBx"><h5> :</h5><h4>'),Je=_("<div style=padding:16px;margin-left:20px;>"),et=_('<div class="bottombx left centerBx"style=text-align:left;><h4></h4><h5>');const ee=S(()=>A(()=>import("./LoadingColorSpinner-87w8c03J.js"),__vite__mapDeps([0,1,2]))),tt=S(()=>A(()=>import("./InputHr-DPC1zQgQ.js"),__vite__mapDeps([3,1,2,4]))),N=S(()=>A(()=>import("./index-9Aucx7lX.js").then(e=>e.a7),__vite__mapDeps([1,2]))),rt=S(()=>A(()=>import("./DropDwnSearch-BGISo22_.js"),__vite__mapDeps([5,1,2,6]))),nt=S(()=>A(()=>import("./ContainerElasticView-BtZ3oKPN.js"),__vite__mapDeps([7,1,2,8]))),it=S(()=>A(()=>import("./ButonHrm-CSQNmlZL.js"),__vite__mapDeps([9,1,2,10]))),re=S(()=>A(()=>import("./CheckBoxSlide-BGxJXG2W.js"),__vite__mapDeps([11,1,2,12]))),st=S(()=>A(()=>import("./ItemOnEnvios-BC14yA_T.js"),__vite__mapDeps([13,1,2,7,8])));S(()=>A(()=>import("./ItemOnEnviosMobile-ShYVEP9O.js"),__vite__mapDeps([14,1,2,7,8])));function vt(){const[e,l]=Q({list:{manifest:{id:"175-23834635",label:""},search:"",status:""}}),[i,h]=Q({}),[d,o]=Q({}),[v,k]=D(""),[p,L]=D(64),[P,I]=D(!1),[C,M]=D(!1),[U,q]=D(""),O=$e(k,500),z=(a,u)=>{l("list",{[a]:u}),O(B())},ae=()=>{I(!P()),O(B())},ce=()=>{M(!C()),O(B())};ye(()=>{}),xe(()=>{});const oe=()=>{L(a=>a+64)},ue=a=>{let u=Math.ceil(a?.length/64);De(oe,1250,u)},[E,{refetch:_t}]=ke(v,async a=>{let u=e?.list?.manifest?.id;U()!==u&&q(u);const y=await ct(e?.list?.search,u,e?.list?.status,e?.list?.estate,e?.list?.city),$=await ot(u);h($),o("prov",void 0),L(0);let w=[],g={};return P()?R(y).map(x=>{let s=y[x],r=s?.estate||s?.consigneeInfo?.ybestate;Ee?.[s?.zone]?.[r]||w.push(s)}):C()?R(y).map(x=>{let s=y[x];s?.currentStatus||w.push(s)}):(R(y).map(x=>{let s=y[x],r=s?.estate||s?.consigneeInfo?.ybestate,c=s?.city||s?.consigneeInfo?.ybcity;g[r]||(g[r]={cities:{},total:0}),g[r].cities?.[c]||(g[r].cities[c]=0),g[r].cities[c]+=1,g[r].total+=1,w.push(s)}),o("prov",g)),ue(w),w}),te=()=>E()?.length,de=a=>{l("list",{manifest:a,status:void 0}),O(B())},ge=()=>{ut(E())},me=()=>{dt(E())},_e=()=>{},he=(a,u)=>{z("estate",a),z("city",u)},fe=(a,u)=>{l("list",{estate:void 0,city:void 0}),O(B())},T=a=>a?" "+a:"",ve=a=>{let u=a?.consigneeInfo;return T(u?.firstName)+T(u?.middleName)+T(u?.lastName)+T(u?.lastName2)},be=async()=>{let a=[];if(E().length<80){const u=E().map(async($,w)=>{let g=$?.tracking,x="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(x);g.length===13&&s.test(g)&&(g=g.slice(3,12));let c=Ne(g);var m=await Ge(c,"image/png");let b=URL.createObjectURL(m),F={state:$?.consigneeInfo?.ybestate,name:ve($),phoneNumber:$?.consigneeInfo?.phoneNumber,altPhoneNumber:$?.consigneeInfo?.altPhoneNumber,guiaWeek:$?.guia,bulto:$?.bagnumber,tracking:g,qr:b};a.push(F)});await Promise.all(u);let y=await Le(a);window.open(y)}else Be({text:"El limite de etiquetas a imprimir es de 80",timeout:2500,id:B()})},pe=async()=>{let a=[],u=210080,y=u+5,$=[],w=new Date().getFullYear().toString().slice(2,4);for(let s=u;s<y;s++)$.push("Y"+w+s);const g=$.map(async(s,r)=>{const c=await Pe(s);let b={mtrx:await Me(s),lbl:s,qr:c};console.log(c),a.push(b)});await Promise.all(g);let x=await Oe(a);window.open(x)};return(()=>{var a=Ye(),u=a.firstChild,y=u.firstChild,$=y.nextSibling,w=$.firstChild,g=u.nextSibling,x=g.firstChild,s=g.nextSibling;return n(w,()=>e?.list?.manifest?.id),n(a,t(f,{get when(){return Z?.profile?.isAdmin},get children(){return t(it,{color:"rgb(200 25 60 / 1)",label:"updManifest",handleClick:ge})}}),g),n(x,t(rt,{list:Ce,lbl_empty:"Manifiesto",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.list?.manifest?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:r=>de(r),width:"260px"})),n(g,t(f,{get when(){return e?.list?.manifest?.id},get children(){return[(()=>{var r=Fe();return n(r,t(tt,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:c=>z("search",c)})),r})(),(()=>{var r=ze(),c=r.firstChild,m=c.firstChild;return n(c,t(re,{get initValue(){return P()},updChange:ae,color:"var(--background-red-ssg)"}),m),n(r,t(f,{get when(){return Z?.profile?.isAdmin},get children(){var b=Ve(),F=b.firstChild;return n(b,t(re,{get initValue(){return C()},updChange:ce,color:"var(--background-red-ssg)"}),F),n(b,t(f,{get when(){return C()},get children(){var W=Re();return W.$$click=me,n(W,t(N,{name:"outline_delete",size:24})),W}}),null),b}}),null),r})()]}}),null),n(a,t(f,{get when(){return e?.list?.manifest?.id},get children(){var r=je(),c=r.firstChild;return n(c,t(f,{get when(){return i?.total},get children(){return t(Y,{get each(){return R(i)},children:(m,b)=>V()?t(at,{keyG:m,total:te,get status(){return e?.list?.status},get amount(){return i?.[m]},updForm:z}):t(lt,{keyG:m,total:te,get status(){return e?.list?.status},get amount(){return i?.[m]},updForm:z})})}})),G(()=>j(r,`client_item_box gWXAaj jlytmu ${V()?"isMobile":""}`)),r}}),s),n(s,t(f,{get when(){return Z?.profile?.isAdmin},get children(){var r=qe(),c=r.firstChild,m=c.firstChild,b=m.nextSibling;return m.$$click=pe,n(m,t(N,{name:"printer",size:24,color:"firebrick"})),b.$$click=_e,n(b,t(N,{name:"outline_renew",size:24})),r}}),null),n(s,t(f,{get when(){return d?.prov},get children(){var r=Te(),c=r.firstChild,m=c.firstChild,b=c.nextSibling;return n(m,t(f,{get when(){return d?.prov},get children(){return t(Y,{get each(){return R(d?.prov)},children:(F,W)=>t(mt,{ism:F,get item(){return d?.prov?.[F]},updS:he})})}})),b.$$click=fe,n(b,t(N,{name:"Xclose",size:22})),G(()=>j(r,`client_item_box gWXAaj jlytmu ${V()?"isMobile":""}`)),r}}),null),n(s,t(f,{get when(){return e?.list?.manifest?.id},get children(){var r=We(),c=r.firstChild,m=c.firstChild;return m.$$click=be,n(m,t(N,{name:"printer",size:32})),G(()=>j(r,`client_item_box gWXAaj jlytmu ${V()?"isMobile":""}`)),r}}),null),n(s,t(we,{fallback:r=>(()=>{var c=Xe(),m=c.firstChild,b=m.nextSibling;return b.nextSibling,n(c,()=>r.toString(),b),c})(),get children(){return t(K,{get fallback(){return(()=>{var r=He();return r.firstChild,n(r,t(ee,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r})()},get children(){return t(f,{get when(){return E()},get children(){return t(Y,{get each(){return E()?.slice(0,p())},children:(r,c)=>t(st,{item:r,refresh:()=>O(B())})})}})}})}}),null),G(r=>Se(s,` ${V()?"":"width:94vw;"} margin: 0 auto;`,r)),a})()}const lt=e=>{const[l,i]=D(!1),[h,d]=D(0),o=()=>{let p=e?.keyG;e?.keyG==="total"&&(p=null),e?.updForm("status",p)},v=()=>{l()||!V()&&e?.keyG!=="total"&&(d(X?.[e?.keyG]?.length*8.5+"px"),i(!0))},k=()=>{d("0px"),l()&&i(!1)};return t(f,{get when(){return e?.amount>0},get children(){return t(K,{get fallback(){return(()=>{var p=le();return p.firstChild,n(p,t(ee,{stroke:"rgb(200 25 60 / 1)",size:32}),null),p})()},get children(){var p=se(),L=p.firstChild,P=L.nextSibling;return p.$$mouseout=k,p.$$mousemove=v,p.$$click=o,n(p,t(f,{get when(){return l()},get children(){var I=Ue(),C=I.firstChild,M=C.firstChild,U=M.firstChild;return n(U,()=>X?.[e?.keyG]),G(q=>(q=h())!=null?C.style.setProperty("width",q):C.style.removeProperty("width")),I}}),L),n(L,t(N,{get name(){return ne?.[e?.keyG]},size:22})),n(p,t(f,{get when(){return e?.keyG==="total"},get children(){var I=ie(),C=I.firstChild,M=C.nextSibling;return M.nextSibling,n(I,()=>e?.total(),M),I}}),P),n(P,()=>e?.amount),G(()=>j(p,`resumeStatus centerBx ${e?.keyG==="total"?"witXs":""}  ${e?.status===e?.keyG?"active":""}`)),p}})}})},at=e=>{const l=()=>{let i=e?.keyG;e?.keyG==="total"&&(i=null),e?.updForm("status",i)};return t(f,{get when(){return e?.amount>0},get children(){return t(K,{get fallback(){return(()=>{var i=le();return i.firstChild,n(i,t(ee,{stroke:"rgb(200 25 60 / 1)",size:32}),null),i})()},get children(){var i=se(),h=i.firstChild,d=h.nextSibling;return i.$$click=l,n(h,t(N,{get name(){return ne?.[e?.keyG]},size:22})),n(i,t(f,{get when(){return X?.[e?.keyG]},get children(){var o=Qe(),v=o.firstChild;return n(v,()=>X?.[e?.keyG]),o}}),d),n(i,t(f,{get when(){return e?.keyG==="total"},get children(){var o=ie(),v=o.firstChild,k=v.nextSibling;return k.nextSibling,n(o,()=>e?.total(),k),o}}),d),n(d,()=>e?.amount),G(()=>j(i,`resumeStatus centerBx  spaceAround ${e?.status===e?.keyG?"active":""}`)),i}})}})},ct=async(e,l,i,h,d)=>{let o={params:{idairguide:l,":search5":l},fldsQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:ybestate","consigneeInfo:ybcity"],query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2 AND !* contain :search3 AND !* contain :search4 AND !* contain :search5 AND currentStatus = :status AND agency = :agency AND estate = :estate AND city = :city"};if(e&&e.split(" ").map((v,k)=>{v&&(o.params[":search"+k]=v.trim())}),i&&(o.params[":status"]=i),h&&(o.params[":estate"]=h),d&&(o.params[":city"]=d),H?.roles?.agency&&(o.params[":agency"]=H?.roles?.agency+""),l&&Object.keys(o.params).length>=2){const v=await J(o);return v?.data?.error?{}:v}return{}},ot=async e=>{let l={params:{idairguide:e},query:"getGroupStatusLogisticYabaExpress",queryString:"agency = :agency"};H?.roles?.agency&&(l.params[":agency"]=H?.roles?.agency+"");const i=await J(l);return i?.data?.error?{}:i},ut=async e=>{e.map(l=>{l?.ssg_track_key,l?.idairguide})},dt=async e=>{e.map(l=>{l?.ssg_track_key,l?.idairguide})},bt=async(e,l)=>{let i=[];e.map(h=>{let d={params:{ssg_track_key:h?.ssg_track_key,idairguide:h?.idairguide},data2update:{currentStatus:l},query:"updateLogisticYabaExpress"};i.push(d)}),Ae(i,gt)},gt=async e=>{const i=await J(e);if(i)return i},mt=e=>(()=>{var l=Ze();return n(l,t(f,{get when(){return e?.item?.total>0},get children(){var i=Ke(),h=i.firstChild,d=h.firstChild,o=d.firstChild,v=d.nextSibling;return h.$$click=()=>e?.updS(e?.ism),n(d,()=>e?.ism,o),n(v,()=>e?.item?.total),i}}),null),n(l,t(nt,{get children(){var i=Je();return n(i,t(f,{get when(){return e?.item?.cities},get children(){return t(Y,{get each(){return R(e?.item?.cities)},children:(h,d)=>(()=>{var o=et(),v=o.firstChild,k=v.nextSibling;return o.$$click=()=>e?.updS(e?.ism,h),n(v,h),n(k,()=>e?.item?.cities?.[h]),o})()})}})),i}}),null),l})();Ie(["click","mousemove","mouseout"]);export{vt as default,dt as deleteManifest,gt as fetchCSVInve,ut as loadManifest,bt as updateManifest};
