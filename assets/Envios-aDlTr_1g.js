const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-BMTUS73i.js","assets/index-ClNVsa9Q.js","assets/index-fN3cNkmN.css","assets/DropDwnSearch-BnRIcUw4.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ContainerElasticView-DQZ-zcua.js","assets/ContainerElasticView-LzOd6fDI.css","assets/ButonHrm-BdApXVMY.js","assets/ButonHrm-BPLzySnX.css","assets/CheckBoxSlide-4KleLIxE.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-m10dSpmy.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnEnvios-CU0tD41h.js","assets/ItemOnEnviosMobile-D017YBTn.js","assets/isMobile-BkMSgOMa.js"])))=>i.map(i=>d[i]);
import{l as x,_ as k,c as q,a as w,u as _e,p as he,f as me,b as fe,i as r,d as t,y as Q,S as u,z as ve,F as P,j as G,m as R,A as X,g as I,E as ye,x as V,k as W,w as U,B as J,D as be,n as H,e as $e,t as g,Z as pe,G as z,H as xe}from"./index-ClNVsa9Q.js";var ke=g("<div style=padding:4px>"),Ce=g('<div class="icon_status centerBx">'),Se=g('<div class="centerBx bottombx"style=margin-top:10px;><h5>Duplicados'),Ie=g('<div><div class="centerBx bottombx "><h5 class="">Manifiesto Incorrecto'),we=g('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx flxWrp spaceAround "><div class="icon_status centerBx">'),Ae=g('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx flxWrp spaceAround ">'),Ee=g('<div class="client_item_box gWXAaj jlytmu centerBx"><div class="centerBx100 centerBx"><div class=plans></div></div><div class="icon_status centerBx">'),De=g('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Envios</h2></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div style="width:94vw;margin:0 auto;">'),Ge=g("<div> <!>."),Be=g("<div> "),Me=g("<div class=icon_info><div class=boxOpenInfo><div class=boxInfo><span>"),ee=g("<h5 class=totalBagsNo> <!> / "),te=g('<div><div class="icon_status centerBx"></div><h5 class=""></h5>'),re=g("<div class=leftMrg> "),Ne=g("<div class=bottombx><h4>"),Le=g("<div>"),Oe=g('<div class="_dsplFlx bottombx lowbordr"><div class=" bottombx spaceAround centerBx"><h5> :</h5><h4>'),Fe=g("<div style=padding:16px;margin-left:20px;>"),Pe=g('<div class="bottombx left centerBx"style=text-align:left;><h4></h4><h5>');const Y=x(()=>k(()=>import("./LoadingColorSpinner-BMTUS73i.js"),__vite__mapDeps([0,1,2]))),Re=x(()=>k(()=>import("./DropDwnSearch-BnRIcUw4.js"),__vite__mapDeps([3,1,2,4]))),Ve=x(()=>k(()=>import("./ContainerElasticView-DQZ-zcua.js"),__vite__mapDeps([5,1,2,6]))),ze=x(()=>k(()=>import("./ButonHrm-BdApXVMY.js"),__vite__mapDeps([7,1,2,8]))),Z=x(()=>k(()=>import("./CheckBoxSlide-4KleLIxE.js"),__vite__mapDeps([9,1,2,10]))),Te=x(()=>k(()=>import("./InputHr-m10dSpmy.js"),__vite__mapDeps([11,1,2,12]))),N=x(()=>k(()=>import("./index-ClNVsa9Q.js").then(e=>e.a6),__vite__mapDeps([1,2]))),je=x(()=>k(()=>import("./ItemOnEnvios-CU0tD41h.js"),__vite__mapDeps([13,1,2,5,6]))),qe=x(()=>k(()=>import("./ItemOnEnviosMobile-D017YBTn.js"),__vite__mapDeps([14,1,2,5,6,15])));function tt(){const[e,l]=q({list:{manifest:{id:"175-23834613",label:""},search:"",status:""}}),[n,d]=q({}),[o,a]=q({}),[_,b]=w(""),[h,A]=w(64),[E,C]=w(!1),[$,D]=w(!1),[T,L]=w(""),S=_e(b,400),B=(m,f)=>{l("list",{[m]:f}),S(I())},ne=()=>{C(!E()),S(I())},se=()=>{D(!$()),S(I())};he(()=>{}),me(()=>{});const ie=()=>{A(m=>m+64)},le=m=>{let f=Math.ceil(m?.length/64);xe(ie,1250,f)},[M,{refetch:Je}]=fe(_,async m=>{let f=e?.list?.manifest?.id;T()!==f&&L(f);const v=await He(e?.list?.search,f,e?.list?.status,e?.list?.estate,e?.list?.city),j=await Ye(f);d(j),a("prov",void 0),A(0);let p=[],s={};return E()?G(v).map(c=>{let i=v[c];pe?.[i?.zone]?.[i?.consigneeInfo?.ybestate]||p.push(i)}):$()?G(v).map(c=>{let i=v[c];i?.currentStatus||p.push(i)}):(G(v).map(c=>{let i=v[c];s[i?.consigneeInfo?.ybestate]||(s[i?.consigneeInfo?.ybestate]={cities:{},total:0}),s[i?.consigneeInfo?.ybestate].cities?.[i?.consigneeInfo?.ybcity]||(s[i?.consigneeInfo?.ybestate].cities[i?.consigneeInfo?.ybcity]=0),s[i?.consigneeInfo?.ybestate].cities[i?.consigneeInfo?.ybcity]+=1,s[i?.consigneeInfo?.ybestate].total+=1,p.push(i)}),a("prov",s)),le(p),p}),K=()=>M()?.length,ae=m=>{l("list",{manifest:m,status:void 0}),S(I())},ce=()=>{Ke(M())},oe=()=>{Qe(M())},ue=()=>{e.status},de=(m,f)=>{m&&B("estate",m),f&&B("city",f)},ge=(m,f)=>{l("list",{estate:void 0,city:void 0}),S(I())};return(()=>{var m=De(),f=m.firstChild,v=f.nextSibling,j=v.firstChild,p=v.nextSibling;return r(m,t(u,{get when(){return Q?.profile?.isAdmin},get children(){return t(ze,{color:"rgb(200 25 60 / 1)",label:"updManifest",handleClick:ce})}}),v),r(j,t(Re,{list:ve,lbl_empty:"Manifiesto",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.list?.manifest?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:s=>ae(s),width:"260px"})),r(v,t(u,{get when(){return e?.list?.manifest?.id},get children(){return[(()=>{var s=ke();return r(s,t(Te,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:c=>B("search",c)})),s})(),(()=>{var s=Ie(),c=s.firstChild,i=c.firstChild;return r(c,t(Z,{get initValue(){return E()},updChange:ne,color:"var(--background-red-ssg)"}),i),r(s,t(u,{get when(){return Q?.profile?.isAdmin},get children(){var y=Se(),O=y.firstChild;return r(y,t(Z,{get initValue(){return $()},updChange:se,color:"var(--background-red-ssg)"}),O),r(y,t(u,{get when(){return $()},get children(){var F=Ce();return F.$$click=oe,r(F,t(N,{name:"outline_delete",size:24})),F}}),null),y}}),null),s})()]}}),null),r(p,t(u,{get when(){return!1},get children(){var s=we(),c=s.firstChild,i=c.firstChild;return i.$$click=ue,r(i,t(N,{name:"outline_renew",size:24})),s}}),null),r(p,t(u,{get when(){return e?.list?.manifest?.id},get children(){var s=Ae(),c=s.firstChild;return r(c,t(u,{get when(){return n?.total},get children(){return t(P,{get each(){return G(n)},children:(i,y)=>R()?t(Xe,{keyG:i,total:K,get status(){return e?.list?.status},get amount(){return n?.[i]},updForm:B}):t(We,{keyG:i,total:K,get status(){return e?.list?.status},get amount(){return n?.[i]},updForm:B})})}})),s}}),null),r(p,t(u,{get when(){return o?.prov},get children(){var s=Ee(),c=s.firstChild,i=c.firstChild,y=c.nextSibling;return r(i,t(u,{get when(){return o?.prov},get children(){return t(P,{get each(){return G(o?.prov)},children:(O,F)=>t(Ue,{ism:O,get item(){return o?.prov?.[O]},updS:de})})}})),y.$$click=ge,r(y,t(N,{name:"Xclose",size:22})),s}}),null),r(p,t(ye,{fallback:s=>(()=>{var c=Ge(),i=c.firstChild,y=i.nextSibling;return y.nextSibling,r(c,()=>s.toString(),y),c})(),get children(){return t(X,{get fallback(){return(()=>{var s=Be();return s.firstChild,r(s,t(Y,{stroke:"rgb(200 25 60 / 1)",size:62}),null),s})()},get children(){return t(u,{get when(){return M()},get children(){return t(P,{get each(){return M()?.slice(0,h())},children:(s,c)=>[t(u,{get when(){return!R()},get children(){return t(je,{item:s,refresh:()=>S(I())})}}),t(u,{get when(){return R()},get children(){return t(qe,{item:s,refresh:()=>S(I())})}})]})}})}})}}),null),m})()}const We=e=>{const[l,n]=w(!1),[d,o]=w(0),a=()=>{let h=e?.keyG;e?.keyG==="total"&&(h=null),e?.updForm("status",h)},_=()=>{l()||!R()&&e?.keyG!=="total"&&(o(V?.[e?.keyG]?.length*8.5+"px"),n(!0))},b=()=>{o("0px"),l()&&n(!1)};return t(u,{get when(){return e?.amount>0},get children(){return t(X,{get fallback(){return(()=>{var h=re();return h.firstChild,r(h,t(Y,{stroke:"rgb(200 25 60 / 1)",size:32}),null),h})()},get children(){var h=te(),A=h.firstChild,E=A.nextSibling;return h.$$mouseout=b,h.$$mousemove=_,h.$$click=a,r(h,t(u,{get when(){return l()},get children(){var C=Me(),$=C.firstChild,D=$.firstChild,T=D.firstChild;return r(T,()=>V?.[e?.keyG]),W(L=>(L=d())!=null?$.style.setProperty("width",L):$.style.removeProperty("width")),C}}),A),r(A,t(N,{get name(){return U?.[e?.keyG]},size:22})),r(h,t(u,{get when(){return e?.keyG==="total"},get children(){var C=ee(),$=C.firstChild,D=$.nextSibling;return D.nextSibling,r(C,()=>e?.total(),D),C}}),E),r(E,()=>e?.amount),W(()=>J(h,`resumeStatus centerBx ${e?.keyG==="total"?"witXs":""}  ${e?.status===e?.keyG?"active":""}`)),h}})}})},Xe=e=>{const l=()=>{let n=e?.keyG;e?.keyG==="total"&&(n=null),e?.updForm("status",n)};return t(u,{get when(){return e?.amount>0},get children(){return t(X,{get fallback(){return(()=>{var n=re();return n.firstChild,r(n,t(Y,{stroke:"rgb(200 25 60 / 1)",size:32}),null),n})()},get children(){var n=te(),d=n.firstChild,o=d.nextSibling;return n.$$click=l,r(d,t(N,{get name(){return U?.[e?.keyG]},size:22})),r(n,t(u,{get when(){return V?.[e?.keyG]},get children(){var a=Ne(),_=a.firstChild;return r(_,()=>V?.[e?.keyG]),a}}),o),r(n,t(u,{get when(){return e?.keyG==="total"},get children(){var a=ee(),_=a.firstChild,b=_.nextSibling;return b.nextSibling,r(a,()=>e?.total(),b),a}}),o),r(o,()=>e?.amount),W(()=>J(n,`resumeStatus centerBx  spaceAround ${e?.status===e?.keyG?"active":""}`)),n}})}})},He=async(e,l,n,d,o)=>{let a={params:{idairguide:l,":search5":l},fldsQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:ybestate","consigneeInfo:ybcity"],query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2 AND !* contain :search3 AND !* contain :search4 AND !* contain :search5 AND currentStatus = :status AND agency = :agency AND estate = :estate AND city = :city"};if(e&&e.split(" ").map((_,b)=>{_&&(a.params[":search"+b]=_.trim())}),n&&(a.params[":status"]=n),d&&(a.params[":estate"]=d),o&&(a.params[":city"]=o),z?.roles?.agency&&(a.params[":agency"]=z?.roles?.agency+""),l&&Object.keys(a.params).length>=2){const _=await H(a);return _?.data?.error?{}:_}return{}},Ye=async e=>{let l={params:{idairguide:e},query:"getGroupStatusLogisticYabaExpress",queryString:"agency = :agency"};z?.roles?.agency&&(l.params[":agency"]=z?.roles?.agency+"");const n=await H(l);return n?.data?.error?{}:n},Ke=async e=>{e.map(l=>{l?.ssg_track_key,l?.idairguide})},Qe=async e=>{e.map(l=>{l?.ssg_track_key,l?.idairguide})},rt=async(e,l)=>{let n=[];e.map(d=>{let o={params:{ssg_track_key:d?.ssg_track_key,idairguide:d?.idairguide},data2update:{currentStatus:l},query:"updateLogisticYabaExpress"};n.push(o)}),be(n,Ze)},Ze=async e=>{const n=await H(e);if(n)return n},Ue=e=>(()=>{var l=Le();return r(l,t(u,{get when(){return e?.item?.total>0},get children(){var n=Oe(),d=n.firstChild,o=d.firstChild,a=o.firstChild,_=o.nextSibling;return d.$$click=()=>e?.updS(e?.ism),r(o,()=>e?.ism,a),r(_,()=>e?.item?.total),n}}),null),r(l,t(Ve,{get children(){var n=Fe();return r(n,t(u,{get when(){return e?.item?.cities},get children(){return t(P,{get each(){return G(e?.item?.cities)},children:(d,o)=>(()=>{var a=Pe(),_=a.firstChild,b=_.nextSibling;return a.$$click=()=>e?.updS(e?.ism,d),r(_,d),r(b,()=>e?.item?.cities?.[d]),a})()})}})),n}}),null),l})();$e(["click","mousemove","mouseout"]);export{tt as default,Qe as deleteManifest,Ze as fetchCSVInve,Ke as loadManifest,rt as updateManifest};
