import{a as p,c as J,k as U,r as V,s as X,d as l,S as A,aE as ee,i as n,e as te,f as L,t as $,an as Z,n as se,j as b,K as re,p as ne,q as oe}from"./index-CbyE4LeZ.js";import"./ButonHrm-ZVRLJPUn.js";import{H as le,a as ie}from"./html5-qrcode-scanner-BY837Got.js";import{u as ae}from"./debounces-DRT-KIHx.js";import f from"./FlexSpace-D8ZW1KWZ.js";/* empty css                 */import"./SVG-BnlDMkmC.js";var ce=$('<div class=scanWrp><div><div class=" _dsplFlx"><h3 class="errTxt err centerBx "></h3></div><div class=" _dsplFlx"><h3 class="errTxt ybcity centerBx"></h3></div><div class=" _dsplFlx"><h3 class="errTxt centerBx"></h3></div></div><div></div><div id=qr-reader style=width:300px>'),ue=$("<slot name=plans style=margin-top:35px><div>"),de=$("<div>esta funcion es solo para dispositivos mobiles"),E;function be(k){p([]);const[i,a]=J({}),[R,M]=p(""),[q,z]=p(),[N,B]=p(),[F,Y]=p(""),[T,D]=p(""),[w,Q]=p("");U(()=>{}),V(()=>{z(!1),E?.clear()}),X(()=>{setTimeout(()=>{G()},90)});const h=(e,o)=>{Y(o),D(e),setTimeout(()=>{D("")},1300)},v=e=>{Q(e),setTimeout(()=>{Q("")},2e3)},j=(e,o)=>{e!==N()&&(B(e),setTimeout(()=>{B("")},3e3),K(e))},K=e=>{if(e||(e=R()),e=e.split("'").join("-"),M(""),w())return;let o={timeStamp:new Date().getTime(),latitude:Z?.latitude,longitude:Z?.longitude,statusId:"YABA_99",userId:se?.profile?.userId},r=e.split("/");e.split("-").length>3&&(r=e.split("-").join);let t=r?.[0],c="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const g=new RegExp(c);let u=t.length===13&&g.test(t),y="^[0-9]{4}-[1-9]{4}";const m=new RegExp(y);let d=t.length===9&&m.test(t),S=r.length>4&&t.length===12,s={idairguide:"all",":search0":r?.[1],":search1":r?.[3]};u&&(t.slice(3,7),s={idairguide:"all",":search0":t}),d&&(t.slice(0,4),s={idairguide:"all",":search0":t}),u||S||d?W(s,o):(h("","error"),a({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),v(b()))},W=async(e,o)=>{let r=await pe(e),t=Object.keys(r)?.[0];r[t]?.cidentity?((r[t]?.statusHistory||[]).push(o),e.ssg_track_key=t,a(""),a(r[t]),v(b()),h("","success"),re?.roles?.[r[t]?.consigneeInfo?.ybestate]?.isActive?r[t]?.currentStatus!==o.statusId||(h("","warning"),a({consigneeInfo:{ybcity:"Fue escaneado",ybestate:r[t]?.consigneeInfo?.ybestate}}),v(b())):(h("","warning"),a({consigneeInfo:{ybestate:"Zona incorrecta"}}),v(b()))):(h("","error"),a({consigneeInfo:{ybestate:"Error con manifiesto"}}),v(b()))},G=()=>{z(!0);let e={fps:10,qrbox:{width:250,height:200},supportedScanTypes:[le.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0};E=new ie("qr-reader",e),E.render(j)};return ae(j,400),l(A,{when:!0,get fallback(){return de()},get children(){return l(A,{get when(){return q()},get children(){var e=ue(),o=e.firstChild;return e._$owner=ee(),n(e,l(A,{get when(){return q()},style:"margin-top: 35px",get children(){var r=ce(),t=r.firstChild,c=t.firstChild,g=c.firstChild,u=c.nextSibling,y=u.firstChild,m=u.nextSibling,d=m.firstChild,S=t.nextSibling;return n(c,l(f,{}),g),n(g,T),n(c,l(f,{}),null),n(u,l(f,{}),y),n(y,()=>i?.consigneeInfo?.ybcity),n(u,l(f,{}),null),n(m,l(f,{}),d),n(d,()=>i?.consigneeInfo?.ybestate),n(m,l(f,{}),null),te(s=>{var H=`scanOverlayFront ${F()}`,I=w()?"block":"none",C=300/T()?.length*1.73+"px",x=300/i?.consigneeInfo?.ybcity?.length*1.13+"px",_=300/i?.consigneeInfo?.ybestate?.length*1.23+"px",O=`scanOverlay  ${F()} `,P=w()?"block":"none";return H!==s.e&&L(t,s.e=H),I!==s.t&&((s.t=I)!=null?t.style.setProperty("display",I):t.style.removeProperty("display")),C!==s.a&&((s.a=C)!=null?g.style.setProperty("font-size",C):g.style.removeProperty("font-size")),x!==s.o&&((s.o=x)!=null?y.style.setProperty("font-size",x):y.style.removeProperty("font-size")),_!==s.i&&((s.i=_)!=null?d.style.setProperty("font-size",_):d.style.removeProperty("font-size")),O!==s.n&&L(S,s.n=O),P!==s.s&&((s.s=P)!=null?S.style.setProperty("display",P):S.style.removeProperty("display")),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),r}}),o),e}})}})}const pe=async k=>{let i={params:k},a=ne(802001);return i={...i,...a},await oe(i)};export{be as default};
