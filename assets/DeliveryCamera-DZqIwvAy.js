import{a as p,c as K,j as U,o as V,n as X,d as l,S as A,a3 as ee,i as n,e as te,f as L,t as E,y as Z,m as se,x as re}from"./index-C3nuwiPu.js";import"./ButonHrm-sS30ll-S.js";import{g as b,b as ne,f as oe}from"./Util-Dlxe-mBA.js";import{H as le,a as ie}from"./html5-qrcode-scanner-U4lUiSae.js";import{u as ae}from"./debounces-BWTJVc88.js";import y from"./FlexSpace-CfpwBNks.js";/* empty css                 */import"./SVG-BKtEPdQ8.js";var ce=E('<div class=scanWrp><div><div class=" _dsplFlx"><h3 class="errTxt err centerBx "></h3></div><div class=" _dsplFlx"><h3 class="errTxt ybcity centerBx"></h3></div><div class=" _dsplFlx"><h3 class="errTxt centerBx"></h3></div></div><div></div><div id=qr-reader style=width:300px>'),ue=E("<slot name=plans style=margin-top:35px><div>"),de=E("<div>esta funcion es solo para dispositivos mobiles"),$;function we(R){p([]);const[i,a]=K({}),[k,M]=p(""),[z,B]=p(),[N,F]=p(),[T,Y]=p(""),[q,D]=p(""),[w,Q]=p("");U(()=>{}),V(()=>{B(!1),$?.clear()}),X(()=>{setTimeout(()=>{J()},90)});const h=(e,o)=>{Y(o),D(e),setTimeout(()=>{D("")},1300)},v=e=>{Q(e),setTimeout(()=>{Q("")},2e3)},j=(e,o)=>{e!==N()&&(F(e),setTimeout(()=>{F("")},3e3),W(e))},W=e=>{if(e||(e=k()),e=e.split("'").join("-"),M(""),w())return;let o={timeStamp:new Date().getTime(),latitude:Z?.latitude,longitude:Z?.longitude,statusId:"YABA_99",userId:se?.profile?.userId},r=e.split("/");e.split("-").length>3&&(r=e.split("-").join);let t=r?.[0],c="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const f=new RegExp(c);let u=t.length===13&&f.test(t),g="^[0-9]{4}-[1-9]{4}";const m=new RegExp(g);let d=t.length===9&&m.test(t),S=r.length>4&&t.length===12,s={idairguide:"all",":search0":r?.[1],":search1":r?.[3]};u&&(t.slice(3,7),s={idairguide:"all",":search0":t}),d&&(t.slice(0,4),s={idairguide:"all",":search0":t}),u||S||d?G(s,o):(h("","error"),a({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),v(b()))},G=async(e,o)=>{let r=await pe(e),t=Object.keys(r)?.[0];r[t]?.cidentity?((r[t]?.statusHistory||[]).push(o),e.ssg_track_key=t,a(""),a(r[t]),v(b()),h("","success"),re?.roles?.[r[t]?.consigneeInfo?.ybestate]?.isActive?r[t]?.currentStatus!==o.statusId||(h("","warning"),a({consigneeInfo:{ybcity:"Fue escaneado",ybestate:r[t]?.consigneeInfo?.ybestate}}),v(b())):(h("","warning"),a({consigneeInfo:{ybestate:"Zona incorrecta"}}),v(b()))):(h("","error"),a({consigneeInfo:{ybestate:"Error con manifiesto"}}),v(b()))},J=()=>{B(!0);let e={fps:10,qrbox:{width:250,height:200},supportedScanTypes:[le.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0};$=new ie("qr-reader",e),$.render(j)};return ae(j,400),l(A,{when:!0,get fallback(){return de()},get children(){return l(A,{get when(){return z()},get children(){var e=ue(),o=e.firstChild;return e._$owner=ee(),n(e,l(A,{get when(){return z()},style:"margin-top: 35px",get children(){var r=ce(),t=r.firstChild,c=t.firstChild,f=c.firstChild,u=c.nextSibling,g=u.firstChild,m=u.nextSibling,d=m.firstChild,S=t.nextSibling;return n(c,l(y,{}),f),n(f,q),n(c,l(y,{}),null),n(u,l(y,{}),g),n(g,()=>i?.consigneeInfo?.ybcity),n(u,l(y,{}),null),n(m,l(y,{}),d),n(d,()=>i?.consigneeInfo?.ybestate),n(m,l(y,{}),null),te(s=>{var H=`scanOverlayFront ${T()}`,I=w()?"block":"none",x=300/q()?.length*1.73+"px",C=300/i?.consigneeInfo?.ybcity?.length*1.13+"px",_=300/i?.consigneeInfo?.ybestate?.length*1.23+"px",O=`scanOverlay  ${T()} `,P=w()?"block":"none";return H!==s.e&&L(t,s.e=H),I!==s.t&&((s.t=I)!=null?t.style.setProperty("display",I):t.style.removeProperty("display")),x!==s.a&&((s.a=x)!=null?f.style.setProperty("font-size",x):f.style.removeProperty("font-size")),C!==s.o&&((s.o=C)!=null?g.style.setProperty("font-size",C):g.style.removeProperty("font-size")),_!==s.i&&((s.i=_)!=null?d.style.setProperty("font-size",_):d.style.removeProperty("font-size")),O!==s.n&&L(S,s.n=O),P!==s.s&&((s.s=P)!=null?S.style.setProperty("display",P):S.style.removeProperty("display")),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),r}}),o),e}})}})}const pe=async R=>{let i={params:R},a=ne(802001);return i={...i,...a},await oe(i)};export{we as default};
