const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-Bewp3QlQ.js","assets/index-B7uJhAZ1.js","assets/index-DvZYXudN.css","assets/FlexSpace-BY9IXGfm.js","assets/LoadingColorSpinner-DFcS8sbB.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-Bd0MuHGO.js","assets/ButonHrm-DAefuTrr.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-B_QCzE7e.js","assets/debounces-DysJ80D0.js","assets/ItemOnDeliveryList-Cn42MgBk.js","assets/DropDwnSearch-CgSoSk-F.js","assets/DropDwnSearch-DMkLkRPc.css","assets/InputHr-DpYOUodV.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifestList-BE3g3NS2.js","assets/DialogHRM-DFfRvl2F.js","assets/DialogHRM-V9_lZntj.css","assets/fontkit.es-DMZQb7kT.js","assets/InitPrintServices-Co-2QUN8.js","assets/DashManifest-CS7503bl.js","assets/App.module-CbHnVtRQ.js","assets/App-BDG5NEkI.css"])))=>i.map(i=>d[i]);
import{l as $,_ as k,e as te,p as re,q as ie,i as s,d as l,f as se,h as ne,t as b,n as _e,c as z,a as V,a8 as Ae,u as fe,k as be,o as K,j as U,S as E,O as D,y as ve,F as ye,E as xe,s as $e,B as Ce,b as Ie,W as Pe,a9 as De,L as J,aa as Le,a3 as Oe,a2 as Me,Y as Ee}from"./index-B7uJhAZ1.js";import{u as Be}from"./debounces-DysJ80D0.js";import{P as Te,f as ze,r as T}from"./fontkit.es-DMZQb7kT.js";import{i as Ne,t as P,b as Re}from"./InitPrintServices-Co-2QUN8.js";import{CloseModal as Fe,OpenModal as Ve}from"./DialogHRM-DFfRvl2F.js";import{H as je,a as qe}from"./html5-qrcode-scanner-B_QCzE7e.js";import{LookupManifets as We}from"./DashManifest-CS7503bl.js";const Ye=(e,d,t)=>{const r=d.widthOfTextAtSize(e,40),a=d.widthOfTextAtSize(e,10);return Math.floor(t/((r-a)/30))},He=async(e,d,t)=>{const r=await Te.create();r.registerFontkit(ze);const a=await Ne(r);let v=265,f=30,y=Math.ceil(e.length/f);Array.from(Array(y).keys()).map(S=>{let N=e.slice(S*f,(S+1)*f);const x=r.addPage(),{height:B}=x.getSize();let h=B-74;N.map((n,o)=>{let p=h;o%2&&x?.drawRectangle({x:10,y:p-15,width:580,height:24,color:T(.7,.7,.7)});let A=Ye(P(n?.state),a.roboto_bold,v),C=0;A>42&&(A=42,p=p-6);let u=n?.bagnumber;const w=a.Lexend_700.widthOfTextAtSize(P(u),5);x.drawText(P(u),{x:575-w,y:p-3,size:5,font:a.Lexend_700,color:T(0,0,0)});let L=n?.consigneeInfo?.ybcity+" | "+n?.consigneeInfo?.ybestate;const i=a.Lexend_700.widthOfTextAtSize(P(L),7);n?.cidentity&&x.drawText(P(n?.cidentity),{x:25,y:p+3,size:7,font:a.Lexend_700,color:T(0,0,0)}),n?.consigneeInfo?.ybestate&&x.drawText(P(L),{x:575-i,y:p+3,size:7,font:a.Lexend_700,color:T(0,0,0)});let c="";n?.hbls.map((m,g)=>{c+=(g>0?"  |  ":"")+m?.hbl}),x.drawText(P(c),{x:45,y:p-3,size:5,font:a.Lexend_700,color:T(0,0,0)}),C+=n?.pricePP*n?.totalWeight,h=p-18}),x.drawText("Guia: "+P(t?.guia),{x:17,y:B-22,size:12,font:a.Lexend_700,color:T(0,0,0)}),x.drawText("Fecha: "+P(t?.date),{x:19,y:B-35,size:10,font:a.Lexend_700,color:T(0,0,0)})});{const S=await r.save();return Re(S)}};var Qe=b('<div><div><div class="_dsplFlx bottombx lowbordr"><h5>Confirmar Entrega</h5><div class="icon_status centerBx"></div></div></div><div class=" flxWrp spaceAround centerBx"style="margin:30px 0"><div id=qr-reader style=width:220px>');const Ge=$(()=>k(()=>import("./SVG-Bewp3QlQ.js"),__vite__mapDeps([0,1,2]))),Ue=$(()=>k(()=>import("./FlexSpace-BY9IXGfm.js"),__vite__mapDeps([3,1,2])));let X;function Ke(e){re(()=>{X?.clear()}),ie(()=>{setTimeout(()=>{t()},90)});const d=async r=>{let a="kZxxLCeHlz8l3gU8";(await We(a))?.[a]&&(await le({ssg_manifest_key:a},{linkedUser:_e?.profile?.userId}),e?.callback({ssg_manifest_key:a,linkedUser:_e?.profile?.userId})),Fe(e?.modalId)},t=()=>{let r={fps:10,qrbox:{width:250,height:200},supportedScanTypes:[je.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0};X=new qe("qr-reader",r),X.render(d)};return(()=>{var r=Qe(),a=r.firstChild,v=a.firstChild,f=v.firstChild,y=f.nextSibling;return r.style.setProperty("max-height","80vh"),r.style.setProperty("overflow","auto"),r.style.setProperty("background","#ffffff"),r.style.setProperty("border-radius","13"),r.style.setProperty("padding","10px 19px"),f.$$click=d,s(v,l(Ue,{}),y),y.$$click=()=>{},s(y,l(Ge,{name:"keyboard",size:32,color:"#2b2b2b"})),se(S=>(S=ne()?"92vw":"420px")!=null?r.style.setProperty("width",S):r.style.removeProperty("width")),r})()}te(["click"]);var Ze=b("<h4>"),Je=b("<h5>"),Xe=b('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bottombx><h4></h4></div>|<div class=bag_number><h4>'),et=b('<div><div class=" flxWrp spaceAround centerBx"><h2>Delivery Manifest</h2><div class="icon_status centerBx"></div></div><div style=padding:16px></div><div>'),he=b("<div> "),tt=b("<div> <!>.");const[rt,it]=z(),pe=$(()=>k(()=>import("./LoadingColorSpinner-DFcS8sbB.js"),__vite__mapDeps([4,1,2,5])));$(()=>k(()=>import("./DeliveryCamera-Bd0MuHGO.js"),__vite__mapDeps([6,1,2,7,0,8,9,10,3])));const st=$(()=>k(()=>import("./ItemOnDeliveryList-Cn42MgBk.js"),__vite__mapDeps([11,1,2,10]))),nt=$(()=>k(()=>import("./SVG-Bewp3QlQ.js"),__vite__mapDeps([0,1,2])));$(()=>k(()=>import("./FlexSpace-BY9IXGfm.js"),__vite__mapDeps([3,1,2])));const[at,lt]=V("");function ot(){V([]);const[e,d]=z({});Ae();const[t,r]=fe(),[a,v]=V("");V(0),be(()=>{S()}),re(()=>{}),ie(async()=>{let h=await ae({id:t?.dId,checkAuth:!0});d("detail",h);let n={};h?.linkedBagsInfo?.map(o=>{let p=B(o),A=o.cidentity;if(n[p]||(n[p]={city:o?.city,estate:o?.estate,currentStatus:o?.currentStatus,customers:{},bagsNo:0}),!n[p].customers[A]){let C={name:ct(o),phoneNumber:dt(o),cid:o.cidentity},u={...o,...C};u.bagsNumb=[],n[p].customers[A]=u}n[p].customers[A].bagsNumb.push(o?.bagnumber),n[p].bagsNo+=1}),d("linkedBagsInfo",n),v(U())});function f(){return"geolocation"in navigator}function y(h){Ce({latitude:h?.coords?.latitude,longitude:h?.coords?.longitude})}function S(){f()?navigator.geolocation.getCurrentPosition(y):showMessage("Geolocation isn't supported by your browser")}const N=h=>{},x=h=>{let n=U(),o={};o.id=n,o.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},o.content=l(Ke,{get item(){return props?.item},modalId:n,callback:N}),Ve(o)},B=h=>{let n=h?.street.split(",");return n.slice(0,n.length-2).join(",")};return(()=>{var h=et(),n=h.firstChild,o=n.firstChild,p=o.nextSibling,A=n.nextSibling,C=A.nextSibling;return p.$$click=x,s(p,l(nt,{name:"qr_code",size:32,color:"#2b2b2b"})),s(h,l(E,{get when(){return e?.detail?.name},get fallback(){return(()=>{var u=he();return u.firstChild,s(u,l(pe,{stroke:"rgb(200 25 60 / 1)",size:62}),null),u})()},get children(){var u=Xe(),w=u.firstChild,L=w.firstChild,i=w.nextSibling,c=i.nextSibling,m=c.firstChild;return s(L,()=>e?.detail?.name),s(u,l(E,{get when(){return e?.detail?.city},get children(){return[(()=>{var g=Ze();return s(g,()=>e?.detail?.city),g})(),"|"]}}),c),s(u,l(E,{get when(){return e?.detail?.province},get children(){return[(()=>{var g=Je();return s(g,()=>e?.detail?.province),g})(),"|"]}}),c),s(m,()=>D(e?.linkedBagsInfo)?.length),u}}),C),s(C,l(xe,{fallback:u=>(()=>{var w=tt(),L=w.firstChild,i=L.nextSibling;return i.nextSibling,s(w,()=>u.toString(),i),w})(),get children(){return l(ve,{get fallback(){return(()=>{var u=he();return u.firstChild,s(u,l(pe,{stroke:"rgb(200 25 60 / 1)",size:62}),null),u})()},get children(){return l(E,{get when(){return D(e?.linkedBagsInfo)?.length>0},get children(){return l(ye,{get each(){return D(e?.linkedBagsInfo)},children:(u,w)=>l(st,{addressId:u,get item(){return e?.linkedBagsInfo?.[u]},get list(){return e?.linkedBagsInfo}})})}})}})}})),se(u=>$e(C,` ${ne()?"":"width:94vw;"} margin: 0 auto`,u)),h})()}const ae=async e=>await K({params:e,query:"getManifestOrderByKeyID"}),F=e=>e?" "+e:"",ct=e=>{let d=e?.consigneeInfo;return F(d?.firstName)+F(d?.middleName)+F(d?.lastName)+F(d?.lastName2)},dt=e=>{let d=e?.consigneeInfo,t=F(d?.altPhoneNumber);return F(d?.phoneNumber)+(t?" |"+t:"")};te(["click"]);const Ot=Object.freeze(Object.defineProperty({__proto__:null,LookupBagId:ae,default:ot,scannedQRs:rt,setScannedQRs:it,setStatus:lt,status:at},Symbol.toStringTag,{value:"Module"}));var ut=b("<h5>"),gt=b("<div style=padding:4px>"),_t=b('<div class="_dsplFlx hdr_bar purple"><div class="tr_bar tr_bar_5 align_itm centerBx"><div class="icon align_itm"></div></div><div class="tr_bar tr_bar_20 align_itm left_alg bottombx"><h5> / <!> Seleccionado(s)</h5></div><div class="tr_bar tr_bar_70"></div><div class="tr_bar tr_bar_05 align_itm centerBx"><div class="icon align_itm"></div></div><div class="tr_bar tr_bar_05 align_itm centerBx"><div class="icon align_itm">'),ht=b('<div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5><h4></h4><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div><div style=padding:4px></div></div><div>'),pt=b("<div> <!>."),mt=b("<div> ");const ft=$(()=>k(()=>import("./LoadingColorSpinner-DFcS8sbB.js"),__vite__mapDeps([4,1,2,5]))),me=$(()=>k(()=>import("./DropDwnSearch-CgSoSk-F.js"),__vite__mapDeps([12,1,2,10,0,13]))),bt=$(()=>k(()=>import("./InputHr-DpYOUodV.js"),__vite__mapDeps([14,1,2,15]))),ee=$(()=>k(()=>import("./SVG-Bewp3QlQ.js"),__vite__mapDeps([0,1,2]))),vt=$(()=>k(()=>import("./ItemOnManifestList-BE3g3NS2.js"),__vite__mapDeps([16,1,2,10,17,18,19,20,9,21,22,23]))),[R,G]=z({list:{}}),[yt,xt]=V("");function $t(){const[e,d]=fe(),[t,r]=z({search:""}),[a,v]=z(),[f,y]=z(),[S,N]=z(),[x,B]=V(""),h=Be(B,400),n=(i,c)=>{r({[i]:c}),h(U())};re(()=>{G("list",void 0)}),be(()=>{}),ie(async()=>{let i=[];[33,46,40,41,42,50,52,54,56].map(g=>{let I=De?.[g];J?.roles?.[I?.id]?.isActive&&i.push(I)}),N("list",i);let m=[];if(Le.map(g=>{let O=g.label;J?.roles?.[O]?.isActive&&m.push(g)}),N("prov",m),e?.mId){let g=await ae({id:e?.mId});r("province",g?.province),r("city",g?.city),r("manifestObj",g),y("linked",g?.linkedBags)}});const[o,{refetch:p}]=Ie(x,async i=>{let c=t?.manifest?.id,m=t?.province,g=m&&t?.city,O=[];console.log();const I=await kt(t.search,c,m,g);return v("bags",I),D(I).map(j=>{let q=I[j],Y=q.currentStatus;J?.roles?.[Y]?.isActive&&Y.split("_")?.[1]>=33&&O.push(q)}),O}),A=(i,c)=>{r({[i]:c}),h(U()),G("list",void 0)},C=()=>{let i={},c=0;D(R?.list)?.length!==o()?.length?(c=1,o().map(m=>{let g=m.ssg_track_key;i[g]=c})):o().map(m=>{let g=m.ssg_track_key;i[g]=void 0}),G("list",i)},u=async()=>{let i=f?.linked||{};D(R?.list).map(c=>{i?.[c]||(i[c]={idairguide:a?.bags?.[c]?.idairguide})}),y("linked",i),await le({ssg_manifest_key:e?.mId},{linkedBags:i})},w=()=>{let i=[];D(R?.list).map(c=>{a?.bags?.[c]&&i.push(a?.bags?.[c])}),L(i)},L=async i=>{let c=await He(i,!0,{guia:i[0]?.idairnumber,date:Ee()});window.open(c)};return(()=>{var i=ht(),c=i.firstChild,m=c.firstChild,g=m.firstChild,O=g.nextSibling,I=O.nextSibling,j=c.nextSibling,q=j.firstChild,Y=q.nextSibling,H=j.nextSibling;return s(g,()=>t?.manifestObj?.ssg_manifest_key),s(O,()=>t?.manifestObj?.name),s(m,l(E,{get when(){return t?.manifestObj?.city},get children(){return["|",(()=>{var _=ut();return s(_,()=>t?.manifestObj?.city),_})()]}}),I),s(I,()=>t?.manifestObj?.province),s(q,l(me,{list:Oe,lbl_empty:"Manifiesto",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return t?.manifest?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:_=>A("manifest",_),width:"260px"})),s(Y,l(me,{get list(){return S?.list},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return t?.warehouse?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:_=>n("warehouse",_),width:"260px"})),s(j,l(E,{get when(){return t?.manifest?.id},get children(){var _=gt();return s(_,l(bt,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:M=>n("search",M)})),_}}),null),s(H,l(E,{get when(){return Me(()=>!!t?.manifest?.id)()&&o().length>0},get children(){var _=_t(),M=_.firstChild,Q=M.firstChild,W=M.nextSibling,Z=W.firstChild,oe=Z.firstChild,ce=oe.nextSibling;ce.nextSibling;var Se=W.nextSibling,de=Se.nextSibling,ue=de.firstChild,we=de.nextSibling,ge=we.firstChild;return _.style.setProperty("margin","18px 0"),Q.$$click=C,s(Q,l(ee,{get name(){return D(R?.list)?.length<o()?.length?"minus-circle-outline":"check_circle_outline"},color:"var(--background-red-ssg)"})),s(Z,()=>D(R?.list)?.length,oe),s(Z,()=>o()?.length,ce),ue.$$click=u,s(ue,l(ee,{name:"link",color:"var(--background-red-ssg)"})),ge.$$click=w,s(ge,l(ee,{name:"printer",color:"var(--background-red-ssg)"})),_}}),null),s(H,l(xe,{fallback:_=>(()=>{var M=pt(),Q=M.firstChild,W=Q.nextSibling;return W.nextSibling,s(M,()=>_.toString(),W),M})(),get children(){return l(ve,{get fallback(){return(()=>{var _=mt();return _.firstChild,s(_,l(ft,{stroke:"rgb(200 25 60 / 1)",size:62}),null),_})()},get children(){return l(E,{get when(){return o()},get children(){return l(ye,{get each(){return o()},children:_=>l(vt,{item:_,get isAlready(){return f?.linked?.[_.ssg_track_key]}})})}})}})}}),null),se(_=>$e(H,` ${ne()?"":"width:94vw;"} margin: 0 auto;`,_)),i})()}const kt=async(e,d,t,r)=>{let a={params:{idairguide:d},query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2 AND !* contain :search3 AND !* contain :search4 AND !* contain :search5 AND currentStatus = :status AND estate = :estate AND city = :city"};e&&e.split(" ").map((f,y)=>{f&&(a.params[":search"+y]=f.trim())}),t&&(a.params[":estate"]=t),r&&(a.params[":city"]=r),console.log(a);const v=await K(a);return v?.error?{}:v},le=async(e,d)=>await K({params:e,query:"updateManifestYabaExpress",data2update:d}),St=async e=>{let d=[];e.map(t=>{let r={params:{id:t?.ssg_track_key,idairguide:t?.idairguide},query:"getLogisticOrderByKeyID"};d.push(r)}),Pe(d,ke)},ke=async e=>{const t=await K(e);if(t)return t};te(["click","mousemove","mouseout"]);const Mt=Object.freeze(Object.defineProperty({__proto__:null,default:$t,fetchCSVInve:ke,loadManifest:St,manifestObs:yt,selectedManifest:R,setManifestObs:xt,setSelectedManifest:G,updLinkedBags:le},Symbol.toStringTag,{value:"Module"}));export{Ot as D,ae as L,G as a,Mt as b,R as s,le as u};
