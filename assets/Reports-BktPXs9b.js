const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-ccCeZ7vA.js","assets/index-BqDbKQoA.js","assets/index-NFdrrltd.css","assets/index-Ci0zXM0r.js","assets/LoadingColorSpinner-95Jlb_HW.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-BiVeiBlI.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-B4u6BMAe.js","assets/debounces-CQsk2Gla.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ContainerElasticView-hKpc6BzQ.js","assets/ContainerElasticView-LzOd6fDI.css","assets/CheckBoxSlide-DaB8LZ_n.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/ItemOnReports-B-szSkoN.js","assets/Util-DErZaF9J.js","assets/DialogHRM-Can0AQN2.js","assets/DialogHRM-V9_lZntj.css","assets/globalSignal-C5WWW7Ov.js","assets/ShowQRPrintLabel-DW8qbrMg.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-NgpjRc8z.js","assets/Toast-TqHXJgEe.js","assets/Toast-DLpFKn-Q.css","assets/DashInventory-BWhRm5u8.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css","assets/ShowPdfResume-CxpDpH3Z.js"])))=>i.map(i=>d[i]);
import{l as H,_ as U,e as Re,a as I,m as De,i as t,d as r,F as me,S as m,f as T,n as Xe,g as j,t as h,c as Be,o as He,h as Ue,b as Je,j as Fe,q as Ge,E as Me,r as we,s as Ke,v as Ie}from"./index-BqDbKQoA.js";import{O as ne,a as R,b as ve,e as Ve,f as Pe,l as Ze,g as Y,h as Ye,s as et}from"./Util-DErZaF9J.js";import{u as tt}from"./debounces-CQsk2Gla.js";import{i as E}from"./globalSignal-C5WWW7Ov.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-TqHXJgEe.js";import{OpenModal as Ae}from"./DialogHRM-Can0AQN2.js";import{c as rt}from"./ShowQRPrintLabel-DW8qbrMg.js";import lt from"./FlexSpace-D8p7kWcf.js";import"./index-Ci0zXM0r.js";import"./InitPrintServices-NgpjRc8z.js";var it=h('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Resume de Ingresos y Pagos</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div></div><div class="_dsplFlx flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div></div><div class="_dsplFlx flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=""></h5></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><p></p>'),st=h('<div class="centerBx bottombx"><h5 class=""></h5><h4 class="">$</h4>'),nt=h("<img width=48 height=24 class=picture-profile alt=ssg decoding=async>"),at=h('<div class=itm0hist><div><div class="centerBx bottombx"><p></p><h4></h4></div><div class="centerBx bottombx"><h5></h5><h4></h4><p>');const be=H(()=>U(()=>import("./SVG-ccCeZ7vA.js"),__vite__mapDeps([0,1,2,3]))),ot=2.20462;function ct(e){const[u,i]=I([]),o=n=>{i([...u(),n])};I({});const[c,d]=I({cost:0,sales:0,lbs:0,bulto:0,gross:0}),x=n=>{rt(n)},f=n=>{let z=0,W=0,w=0,G=0,M=0,J=[],A={},K={};e?.list.map((D,Z)=>{let oe=0,ce=0,te=0;D?.hbls.map((N,_e)=>{let P=N?.weight*ot;w+=P;let v=N?.pricePerPound?Number(N?.pricePerPound):0,q=N?.dutyFee?Number(N?.dutyFee):0;v&&!K[v]&&(K[v]=0),K[v]+=P*v,z+=P*v+q,W+=P*3;let re=P*v+q-P*3;M+=re,te+=re,oe+=P*v+q,ce+=P*3;let Q=D?.billedBy||"anonymus";if(!A[Q]){let V=R("M023009")?.usersListSSG?.filter(pe=>pe.id===Q);A[Q]={total:0,name:V?.[0]?.label}}A[Q].total+=P*v+q}),G+=1,J&&te!==0&&o({bagnumber:D?.bagnumber,total:te,totalC:ce,totalS:oe,shipper:D?.nameshipper,isSSG:D?.isSSG})}),d({cost:W,sales:z,lbs:w,bulto:G,gross:M,billedBy:A})};return De(()=>{f()}),(()=>{var n=it(),z=n.firstChild,W=z.firstChild,w=W.firstChild,G=w.nextSibling,M=G.firstChild,J=M.nextSibling,A=z.nextSibling,K=A.firstChild,D=K.firstChild,Z=D.nextSibling,oe=K.nextSibling,ce=oe.firstChild,te=ce.nextSibling,N=A.nextSibling,_e=N.firstChild,P=_e.firstChild,v=P.nextSibling,q=_e.nextSibling,re=q.firstChild,Q=re.nextSibling,V=q.nextSibling,pe=V.firstChild,de=pe.nextSibling;return n.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),n.style.setProperty("overflow","auto"),n.style.setProperty("background","#ffffff"),n.style.setProperty("border-radius","13"),n.style.setProperty("padding","10px 19px"),M.$$click=()=>x(e?.item?.bagnumber),t(M,()=>e?.item?.bagnumber),J.$$click=f,t(J,r(be,{name:"printer",size:32})),A.style.setProperty("padding","16px"),t(D,r(be,{name:"open_package_file_outline",size:22})),t(Z,()=>c()?.bulto?.toFixed(2)),t(ce,r(be,{name:"weight-pound",size:22})),t(te,()=>c()?.lbs?.toFixed(2)),N.style.setProperty("padding","16px"),t(P,r(be,{name:"money",size:22})),t(v,()=>c()?.sales?.toFixed(2)),t(re,r(be,{name:"money",size:22})),t(Q,()=>c()?.cost?.toFixed(2)),t(pe,r(be,{name:"money",size:22})),de.style.setProperty("padding","8px"),t(de,()=>(c()?.sales-c()?.cost).toFixed(2)),t(n,r(m,{get when(){return c()?.bulto>0},get children(){return r(me,{get each(){return ne(c()?.billedBy)},children:(_,le)=>(()=>{var L=st(),X=L.firstChild,B=X.nextSibling;return B.firstChild,t(X,()=>c()?.billedBy?.[_]?.name||_),t(B,()=>c()?.billedBy?.[_]?.total?.toFixed(2),null),L})()})}}),null),t(n,r(m,{get when(){return c()?.bulto>0},get children(){return r(me,{get each(){return u()},children:(_,le)=>(()=>{var L=at(),X=L.firstChild,B=X.firstChild,ue=B.firstChild,fe=ue.nextSibling,xe=B.nextSibling,Se=xe.firstChild,ke=Se.nextSibling,$e=ke.nextSibling;return t(X,r(m,{get when(){return _?.isSSG},get children(){var a=nt();return T(()=>Xe(a,"src",R("SSG.webp"))),a}}),B),ue.style.setProperty("padding","8px"),t(ue,()=>_?.bagnumber),fe.style.setProperty("padding","8px"),t(fe,()=>_?.shipper),t(X,r(lt,{}),xe),t(Se,()=>_?.totalS?.toFixed(2)),t(ke,()=>_?.totalC?.toFixed(2)),$e.style.setProperty("padding","8px"),t($e,()=>_?.total?.toFixed(2)),T(a=>{var s=`client_item_box gWXAaj jlytmu manifest  ${E()?"isMobile":"centerBx"}`,F=` title_scan centerBx ${E(),""} `,S=` title_scan centerBx ${E(),""} `,k=` title_scan centerBx ${E(),""} `;return s!==a.e&&j(X,a.e=s),F!==a.t&&j(ue,a.t=F),S!==a.a&&j(fe,a.a=S),k!==a.o&&j($e,a.o=k),a},{e:void 0,t:void 0,a:void 0,o:void 0}),L})()})}}),null),T(_=>{var le=E()?"86vw":"920px",L=` title_scan centerBx ${E(),""} `;return le!==_.e&&((_.e=le)!=null?n.style.setProperty("width",le):n.style.removeProperty("width")),L!==_.t&&j(de,_.t=L),_},{e:void 0,t:void 0}),n})()}Re(["click"]);var dt=h("<div style=padding:4px>"),Le=h("<div>"),ut=h('<div><div class="_dsplFlx flxWrp spaceAround "><div class="centerBx bottombx "><h5 class="">is SSG</h5></div><div style=padding:4px></div><div style=padding:4px></div><div style=padding:4px>'),gt=h('<div><div class="_dsplFlx flxWrp spaceAround ">'),ye=h('<div class="icon_status centerBx">'),ht=h('<div class="client_item_box gWXAaj jlytmu"><div class="_dsplFlx flxWrp spaceAround ">'),bt=h('<div><div class="centerBx100 centerBx"><div class=plans></div></div><div class="icon_status centerBx">'),mt=h('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Reportes</h2><div class="centerBx bottombx"style=margin-top:10px;></div><div class="centerBx bottombx "><h5 class="">Mostrar Reports</h5></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div></div><div>'),Ee=h("<div> <!>."),ze=h("<div> "),vt=h("<div class=centerBx><h5 style=margin-left:12px>generando excel"),Ne=h("<div class=centerBx><h5 style=margin-left:12px>generando etiquetas"),_t=h("<div class=icon_info><div class=boxOpenInfo><div class=boxInfo><span>"),je=h("<h5 class=totalBagsNo> <!> / "),Te=h('<div><div class="icon_status centerBx"></div><h5 class=""></h5>'),We=h("<div class=leftMrg> "),pt=h("<div class=bottombx><h4>"),ft=h('<div class="_dsplFlx bottombx lowbordr"><div class=" bottombx spaceAround centerBx"><h5> :</h5><h4>'),$t=h("<div style=padding:16px;margin-left:20px;>"),yt=h('<div class="bottombx left centerBx"style=text-align:left;><h4></h4><h5>');const ae=H(()=>U(()=>import("./LoadingColorSpinner-95Jlb_HW.js"),__vite__mapDeps([4,1,2,5]))),xt=H(()=>U(()=>import("./InputHr-BiVeiBlI.js"),__vite__mapDeps([6,1,2,7]))),ee=H(()=>U(()=>import("./SVG-ccCeZ7vA.js"),__vite__mapDeps([0,1,2,3]))),Ce=H(()=>U(()=>import("./DropDwnSearch-B4u6BMAe.js"),__vite__mapDeps([8,1,2,9,0,3,10]))),St=H(()=>U(()=>import("./ContainerElasticView-hKpc6BzQ.js"),__vite__mapDeps([11,1,2,0,3,12]))),Oe=H(()=>U(()=>import("./CheckBoxSlide-DaB8LZ_n.js"),__vite__mapDeps([13,1,2,14]))),kt=H(()=>U(()=>import("./ItemOnReports-B-szSkoN.js"),__vite__mapDeps([15,1,2,16,3,17,18,11,0,12,19,20,21,22,23,24,25,26,27,28,29]))),Ct=H(()=>U(()=>import("./ShowPdfResume-CxpDpH3Z.js"),__vite__mapDeps([30,1,2,19,20,21,3,22,23,24,16,25,26]))),wt=2.20462;function Qt(){const[e,u]=Be({list:{manifest:{id:"",label:""},search:"",status:""}}),[i,o]=Be({}),[c,d]=Be({}),[x,f]=I(""),[n,z]=I(!1),[W,w]=I(64),[G,M]=I(!1),[J,A]=I(!1),[K,D]=I(""),Z=tt(f,500),[oe,ce]=I(!1),[te,N]=I(!1),[_e,P]=I(!1),v=(a,s)=>{u("list",{[a]:s}),Z(Y())},q=()=>{z(!n()),Z(Y())};He(()=>{}),Ue(()=>{});const re=()=>{w(a=>a+64)},Q=a=>{let s=Math.ceil(a?.length/64);et(re,1250,s)},[V,{refetch:pe}]=Je(x,async a=>{o(void 0),d("prov",void 0);let s=e?.list?.manifest?.id;K()!==s&&D(s);let F={},S=[],k={};var C={};if(s&&(F=await Ft(s,e?.list?.agency?.id,e?.list?.isSSG)),!n())o(F?.sumary),d("prov",F?.provinceGroup);else{C=await Bt(e?.list?.search,s,e?.list?.agency?.id,e?.list?.isSSG,e?.list?.billedby?.id),o(F?.sumary),w(0);let ge={};G()?ne(C).map(O=>{let b=C[O],$=b?.estate||b?.consigneeInfo?.ybestate;ge[O]?S.push(b):ge[O]=1,R("M023009")?.ZoneCity?.[b?.zone]?.[$]||S.push(b)}):J()?ne(C).map(O=>{let b=C[O];b?.estate||b?.consigneeInfo?.ybestate||S.push(b),b?.bagnumber||S.push(b)}):(ne(C).map(O=>{let b=C[O],$=b?.estate||b?.consigneeInfo?.ybestate,g=b?.city||b?.consigneeInfo?.ybcity;($||g)&&(k[$]||(k[$]={cities:{},total:0}),k[$].cities?.[g]||(k[$].cities[g]=0),k[$].cities[g]+=1,k[$].total+=1),e?.list?.isPaid?.id?(e?.list?.isPaid?.id===2&&b?.isPaid||e?.list?.isPaid?.id===3&&!b?.isPaid)&&S.push(b):S.push(b)}),d("prov",k)),e?.list?.search?.length>2?Q(S):Q([])}return S}),de=()=>V()?.length,_=a=>{u("list",{manifest:a,status:void 0}),Z(Y())},le=()=>{},L=(a,s)=>{v("estate",a),v("city",s)},X=(a,s)=>{u("list",{estate:void 0,city:void 0}),Z(Y())},B=a=>a?" "+a:"",ue=a=>{let s=a?.consigneeInfo;return B(s?.firstName)+B(s?.middleName)+B(s?.lastName)+B(s?.lastName2)},fe=a=>{let s=a?.consigneeInfo,F=B(s?.altPhoneNumber);return B(s?.phoneNumber)+(F?" | "+F:"")},xe=async()=>{N(!0);let a=[];V().map(async(s,F)=>{let S=s?.estate||s?.consigneeInfo?.ybestate,k=s?.city||s?.consigneeInfo?.ybcity;s.hbls.map(C=>{let ge={envia:s?.nameshipper,"telefono de quien envia":s?.shipperInfo?.phoneNumber,provincia:S,ciudad:k,nombre:ue(s),telefonos:fe(s),bulto:s?.bagnumber,hbl:C.hbl,descripcion:C.namegood,libras:(C.weight*wt).toFixed(2),"precio por libra":C.pricePerPound,aranceles:C.dutyFee};a.push(ge)})}),Ye(`resumen_guia_actual_${Y()}.csv`,a),N(!1)},Se=a=>{let s={};s.id=Y(),s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=r(Ct,{get list(){return V()}}),Ae(s)},ke=a=>{let s={};s.id=Y(),s.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},s.content=r(ct,{get list(){return V()}}),Ae(s)},$e=async a=>{await Gt(e?.list?.manifest?.id)};return De(()=>{}),(()=>{var a=mt(),s=a.firstChild,F=s.firstChild,S=F.nextSibling,k=S.nextSibling,C=k.firstChild,ge=s.nextSibling,O=ge.nextSibling,b=O.firstChild,$=O.nextSibling;return t(k,r(Oe,{get initValue(){return n()},updChange:q,color:"var(--background-red-ssg)"}),C),t(b,r(Ce,{get list(){return Ze()},lbl_empty:"Guia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.list?.manifest?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:g=>_(g),width:"260px"})),t(O,r(m,{get when(){return Fe(()=>!!e?.list?.manifest?.id)()&&n()},get children(){return[(()=>{var g=dt();return t(g,r(xt,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:y=>v("search",y)})),g})(),Le()]}}),null),t($,r(m,{get when(){return Fe(()=>!!(e?.list?.manifest?.id&&n()))()&&Ge()},get children(){var g=ut(),y=g.firstChild,l=y.firstChild,p=l.firstChild,ie=l.nextSibling,he=ie.nextSibling,Qe=he.nextSibling;return t(l,r(Oe,{get initValue(){return e?.list?.isSSG},updChange:se=>v("isSSG",se?1:null),color:"var(--background-red-ssg)"}),p),t(ie,r(Ce,{get list(){return R("M023009")?.agencies},lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.list?.agency?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:se=>v("agency",se),width:"260px"})),t(he,r(Ce,{get list(){return R("M023009")?.usersListSSG},lbl_empty:"Billed by",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.list?.billedby?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:se=>v("billedby",se),width:"260px"})),t(Qe,r(Ce,{list:[{id:null,label:"none"},{id:2,label:"isPaid"},{id:3,label:"Pending"}],lbl_empty:"is Paid",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.list?.isPaid?.id},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:se=>v("isPaid",se),width:"260px"})),T(()=>j(g,`client_item_box gWXAaj jlytmu ${E()?"isMobile":""}`)),g}}),null),t($,r(m,{get when(){return e?.list?.manifest?.id},get children(){var g=gt(),y=g.firstChild;return t(y,r(Me,{fallback:l=>(()=>{var p=Ee(),ie=p.firstChild,he=ie.nextSibling;return he.nextSibling,t(p,()=>l.toString(),he),p})(),get children(){return r(we,{get fallback(){return(()=>{var l=ze();return l.firstChild,t(l,r(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),l})()},get children(){return r(m,{get when(){return i?.total},get children(){return r(me,{get each(){return ne(i)},children:(l,p)=>E()?r(Pt,{keyG:l,total:de,get status(){return e?.list?.status},get amount(){return i?.[l]},get showItems(){return n()},updForm:v}):r(It,{keyG:l,total:de,get showItems(){return n()},get status(){return e?.list?.status},get amount(){return i?.[l]},updForm:v})})}})}})}})),T(()=>j(g,`client_item_box gWXAaj jlytmu ${E()?"isMobile":""}`)),g}}),null),t($,r(m,{get when(){return n()},get children(){var g=ht(),y=g.firstChild;return t(y,r(m,{get when(){return!te()},get fallback(){return(()=>{var l=vt(),p=l.firstChild;return t(l,r(ae,{stroke:"rgb(200 25 60 / 1)",size:32}),p),l})()},get children(){var l=ye();return l.$$click=xe,t(l,r(ee,{name:"grid",size:24,color:"firebrick"})),l}}),null),t(y,r(m,{get when(){return Ge()},get children(){return[r(m,{get when(){return!_e()},get fallback(){return(()=>{var l=Ne(),p=l.firstChild;return t(l,r(ae,{stroke:"rgb(200 25 60 / 1)",size:32}),p),l})()},get children(){var l=ye();return l.$$click=ke,t(l,r(ee,{name:"receipt",size:24})),l}}),(()=>{var l=ye();return l.$$click=$e,t(l,r(ee,{name:"graph_sprite",size:24})),l})(),(()=>{var l=ye();return l.$$click=le,t(l,r(ee,{name:"outline_renew",size:24})),l})()]}}),null),t(y,r(m,{get when(){return!oe()},get fallback(){return(()=>{var l=Ne(),p=l.firstChild;return t(l,r(ae,{stroke:"rgb(200 25 60 / 1)",size:32}),p),l})()},get children(){var l=ye();return l.$$click=Se,t(l,r(ee,{name:"printer",size:32})),l}}),null),g}}),null),t($,r(m,{get when(){return c?.prov},get children(){var g=bt(),y=g.firstChild,l=y.firstChild,p=y.nextSibling;return t(l,r(m,{get when(){return c?.prov},get children(){return r(me,{get each(){return ne(c?.prov)},children:(ie,he)=>r(Mt,{ism:ie,get item(){return c?.prov?.[ie]},updS:L})})}})),p.$$click=X,t(p,r(ee,{name:"Xclose",size:22})),T(()=>j(g,`client_item_box gWXAaj jlytmu ${E()?"isMobile":""}`)),g}}),null),t($,r(Me,{fallback:g=>(()=>{var y=Ee(),l=y.firstChild,p=l.nextSibling;return p.nextSibling,t(y,()=>g.toString(),p),y})(),get children(){return r(we,{get fallback(){return(()=>{var g=ze();return g.firstChild,t(g,r(ae,{stroke:"rgb(200 25 60 / 1)",size:62}),null),g})()},get children(){return r(m,{get when(){return Fe(()=>e?.list?.search?.length>2)()&&V()},get children(){return r(me,{get each(){return V()?.slice(0,W())},children:(g,y)=>r(kt,{item:g,refresh:()=>Z(Y())})})}})}})}}),null),T(g=>Ke($,` ${E()?"":"width:94vw;"} margin: 0 auto;`,g)),a})()}const It=e=>{const[u,i]=I(!1),[o,c]=I(0),d=()=>{let n=e?.keyG;e?.keyG==="total"&&(n=null),e?.updForm("status",n)},x=()=>{u()||!E()&&e?.keyG!=="total"&&(c(R("M023009")?.statusObjDesc?.[e?.keyG]?.length*8.5+"px"),i(!0))},f=()=>{c("0px"),u()&&i(!1)};return r(m,{get when(){return e?.amount>0},get children(){return r(we,{get fallback(){return(()=>{var n=We();return n.firstChild,t(n,r(ae,{stroke:"rgb(200 25 60 / 1)",size:32}),null),n})()},get children(){var n=Te(),z=n.firstChild,W=z.nextSibling;return n.$$mouseout=f,n.$$mousemove=x,n.$$click=d,t(n,r(m,{get when(){return u()},get children(){var w=_t(),G=w.firstChild,M=G.firstChild,J=M.firstChild;return t(J,()=>R("M023009")?.statusObjDesc?.[e?.keyG]),T(A=>(A=o())!=null?G.style.setProperty("width",A):G.style.removeProperty("width")),w}}),z),t(z,r(ee,{get name(){return R("M023009")?.statusListIcons?.[e?.keyG]},size:22})),t(n,r(m,{get when(){return e?.keyG==="total"&&e?.showItems},get children(){var w=je(),G=w.firstChild,M=G.nextSibling;return M.nextSibling,t(w,()=>e?.total(),M),w}}),W),t(W,()=>e?.amount),T(()=>j(n,`resumeStatus centerBx ${e?.keyG==="total"?"witXs":""}  ${e?.status===e?.keyG?"active":""}`)),n}})}})},Pt=e=>{const u=()=>{let i=e?.keyG;e?.keyG==="total"&&(i=null),e?.updForm("status",i)};return r(m,{get when(){return e?.amount>0},get children(){return r(we,{get fallback(){return(()=>{var i=We();return i.firstChild,t(i,r(ae,{stroke:"rgb(200 25 60 / 1)",size:32}),null),i})()},get children(){var i=Te(),o=i.firstChild,c=o.nextSibling;return i.$$click=u,t(o,r(ee,{get name(){return R("M023009")?.statusListIcons?.[e?.keyG]},size:22})),t(i,r(m,{get when(){return R("M023009")?.statusObjDesc?.[e?.keyG]},get children(){var d=pt(),x=d.firstChild;return t(x,()=>R("M023009")?.statusObjDesc?.[e?.keyG]),d}}),c),t(i,r(m,{get when(){return e?.keyG==="total"&&e?.showItems},get children(){var d=je(),x=d.firstChild,f=x.nextSibling;return f.nextSibling,t(d,()=>e?.total(),f),d}}),c),t(c,()=>e?.amount),T(()=>j(i,`resumeStatus centerBx  spaceAround ${e?.status===e?.keyG?"active":""}`)),i}})}})},Bt=async(e,u,i,o,c)=>{let d={params:{idairguide:"all"},fldsQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:lastName2","consigneeInfo:ybstreet","consigneeInfo:ybstreetNo","consigneeInfo:ybbetwen1","consigneeInfo:ybbetwen2","consigneeInfo:ybreparto","consigneeInfo:ybestate","consigneeInfo:ybcity","deliveryUserId","deliveryTime","isSSG","isPaid","hbls","nameshipper","shipperInfo:phoneNumber","billedBy"]};e&&e.split(" ").map((f,n)=>{f&&(d.params[":search"+n]=f.trim())}),u&&(d.params[":guia"]=u+""),o&&(d.params[":isSSG"]=o+""),c&&(d.params[":billedBy"]=c+""),Ie?.roles?.agency?d.params[":agency"]=Ie?.roles?.agency+"":i&&(d.params[":agency"]=i);let x=ve(802001);if(d={...d,...x},u&&Object.keys(d.params)?.length>=2){const f=await Pe(d);return f?.data?.error?{}:f}return{}},Ft=async(e,u,i)=>{let o={params:{idairguide:"all"}},c=ve(802004);o={...o,...c},Ie?.roles?.agency?o.params[":agency"]=Ie?.roles?.agency+"":u&&(o.params[":agency"]=u),e&&(o.params[":guia"]=e+""),i&&(o.params[":isSSG"]=i+"");const d=await Pe(o);return d?.error?{}:d},Gt=async e=>{let u={params:{idairguide:e,":search5":e,checkDuplicate:!0},fldsQry:["street"]},i=ve(802001);u={...u,...i};const o=await Pe(u);return o?.error?{}:o},Xt=async e=>{e.map(u=>{let i={params:{id:u?.ssg_track_key,idairguide:"all"}},o=ve(802002);i={...i,...o}})},Ht=async e=>{let u=[];e.map(i=>{let o={params:{ssg_track_key:i?.ssg_track_key,idairguide:"all"}},c=ve(809005);o={...o,...c},u.push(o)}),Ve(u,qe)},Ut=async(e,u)=>{let i=[];e.map(o=>{let c={params:{ssg_track_key:o?.ssg_track_key,idairguide:"all"},data2update:{currentStatus:u}},d=ve(802004);c={...c,...d},i.push(c)}),Ve(i,qe)},qe=async e=>{const i=await Pe(e);if(i)return i},Mt=e=>(()=>{var u=Le();return t(u,r(m,{get when(){return e?.item?.total>0},get children(){var i=ft(),o=i.firstChild,c=o.firstChild,d=c.firstChild,x=c.nextSibling;return o.$$click=()=>e?.updS(e?.ism),t(c,()=>e?.ism,d),t(x,()=>e?.item?.total),i}}),null),t(u,r(St,{get children(){var i=$t();return t(i,r(m,{get when(){return e?.item?.cities},get children(){return r(me,{get each(){return ne(e?.item?.cities)},children:(o,c)=>(()=>{var d=yt(),x=d.firstChild,f=x.nextSibling;return d.$$click=()=>e?.updS(e?.ism,o),t(x,o),t(f,()=>e?.item?.cities?.[o]),d})()})}})),i}}),null),u})();Re(["click","mousemove","mouseout"]);export{It as StatusGroupItem,Qt as default,Ht as deleteManifest,qe as fetchCSVInve,Xt as loadManifest,Ut as updateManifest};
