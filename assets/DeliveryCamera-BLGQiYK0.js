import{a as p,c as K,h as U,o as V,m as X,d as i,S as $,G as ee,i as n,f as te,g as j,t as E,k as se,r as re}from"./index-B8K3ByHh.js";import"./ButonHrm-COD68OCk.js";import{g as b,b as ne,f as oe}from"./Util-uEfv1z7O.js";import{H as ie,a as le}from"./html5-qrcode-scanner-Cl8XE5pu.js";import{u as ae}from"./debounces-XeQf352o.js";import y from"./FlexSpace-CW2r0w84.js";import{g as L}from"./globalSignal-3qkZqgvF.js";/* empty css                 */import"./SVG-higPq2wD.js";import"./index-Ci0zXM0r.js";var ce=E('<div class=scanWrp><div><div class=" _dsplFlx"><h3 class="errTxt err centerBx "></h3></div><div class=" _dsplFlx"><h3 class="errTxt ybcity centerBx"></h3></div><div class=" _dsplFlx"><h3 class="errTxt centerBx"></h3></div></div><div></div><div id=qr-reader style=width:300px>'),ue=E("<slot name=plans style=margin-top:35px><div>"),de=E("<div>esta funcion es solo para dispositivos mobiles"),k;function Ce(R){p([]);const[l,a]=K({}),[z,Z]=p(""),[B,F]=p(),[M,T]=p(),[q,N]=p(""),[D,G]=p(""),[I,Q]=p("");U(()=>{}),V(()=>{F(!1),k?.clear()}),X(()=>{setTimeout(()=>{J()},90)});const h=(e,o)=>{N(o),G(e),setTimeout(()=>{G("")},1300)},m=e=>{Q(e),setTimeout(()=>{Q("")},2e3)},H=(e,o)=>{e!==M()&&(T(e),setTimeout(()=>{T("")},3e3),Y(e))},Y=e=>{if(e||(e=z()),e=e.split("'").join("-"),Z(""),I())return;let o={timeStamp:new Date().getTime(),latitude:L?.latitude,longitude:L?.longitude,statusId:"YABA_99",userId:se?.profile?.userId},r=e.split("/");e.split("-").length>3&&(r=e.split("-").join);let t=r?.[0],c="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const g=new RegExp(c);let u=t.length===13&&g.test(t),f="^[0-9]{4}-[1-9]{4}";const v=new RegExp(f);let d=t.length===9&&v.test(t),S=r.length>4&&t.length===12,s={idairguide:r?.[0],":search0":r?.[1],":search1":r?.[3]};u&&(s={idairguide:"175-2383"+t.slice(3,7),":search0":t}),d&&(s={idairguide:"175-2383"+t.slice(0,4),":search0":t}),u||S||d?W(s,o):(h("","error"),a({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),m(b()))},W=async(e,o)=>{let r=await pe(e),t=Object.keys(r)?.[0];r[t]?.cidentity?((r[t]?.statusHistory||[]).push(o),e.ssg_track_key=t,a(""),a(r[t]),m(b()),h("","success"),re?.roles?.[r[t]?.consigneeInfo?.ybestate]?.isActive?r[t]?.currentStatus!==o.statusId||(h("","warning"),a({consigneeInfo:{ybcity:"Fue escaneado",ybestate:r[t]?.consigneeInfo?.ybestate}}),m(b())):(h("","warning"),a({consigneeInfo:{ybestate:"Zona incorrecta"}}),m(b()))):(h("","error"),a({consigneeInfo:{ybestate:"Error con manifiesto"}}),m(b()))},J=()=>{F(!0);let e={fps:10,qrbox:{width:250,height:200},supportedScanTypes:[ie.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0};k=new le("qr-reader",e),k.render(H)};return ae(H,400),i($,{when:!0,get fallback(){return de()},get children(){return i($,{get when(){return B()},get children(){var e=ue(),o=e.firstChild;return e._$owner=ee(),n(e,i($,{get when(){return B()},style:"margin-top: 35px",get children(){var r=ce(),t=r.firstChild,c=t.firstChild,g=c.firstChild,u=c.nextSibling,f=u.firstChild,v=u.nextSibling,d=v.firstChild,S=t.nextSibling;return n(c,i(y,{}),g),n(g,D),n(c,i(y,{}),null),n(u,i(y,{}),f),n(f,()=>l?.consigneeInfo?.ybcity),n(u,i(y,{}),null),n(v,i(y,{}),d),n(d,()=>l?.consigneeInfo?.ybestate),n(v,i(y,{}),null),te(s=>{var w=`scanOverlayFront ${q()}`,C=I()?"block":"none",x=300/D()?.length*1.73+"px",_=300/l?.consigneeInfo?.ybcity?.length*1.13+"px",P=300/l?.consigneeInfo?.ybestate?.length*1.23+"px",O=`scanOverlay  ${q()} `,A=I()?"block":"none";return w!==s.e&&j(t,s.e=w),C!==s.t&&((s.t=C)!=null?t.style.setProperty("display",C):t.style.removeProperty("display")),x!==s.a&&((s.a=x)!=null?g.style.setProperty("font-size",x):g.style.removeProperty("font-size")),_!==s.o&&((s.o=_)!=null?f.style.setProperty("font-size",_):f.style.removeProperty("font-size")),P!==s.i&&((s.i=P)!=null?d.style.setProperty("font-size",P):d.style.removeProperty("font-size")),O!==s.n&&j(S,s.n=O),A!==s.s&&((s.s=A)!=null?S.style.setProperty("display",A):S.style.removeProperty("display")),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),r}}),o),e}})}})}const pe=async R=>{let l={params:R},a=ne(802001);return l={...l,...a},await oe(l)};export{Ce as default};
