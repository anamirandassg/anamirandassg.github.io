import{a as d,c as K,k as U,p as V,q as X,d as i,S as $,$ as ee,i as n,f as te,g as H,t as k,C as N,n as se,j as b,L as re,o as ne}from"./index-f9fOxBB0.js";import"./ButonHrm-VBikVM6W.js";import{H as oe,a as ie}from"./html5-qrcode-scanner-Ftkb535h.js";import{u as ae}from"./debounces-CARLR0_K.js";import h from"./FlexSpace-DoAj3N5Q.js";/* empty css                 */import"./SVG-E76cUvOQ.js";var le=k('<div class=scanWrp><div><div class=" _dsplFlx"><h3 class="errTxt err centerBx "></h3></div><div class=" _dsplFlx"><h3 class="errTxt ybcity centerBx"></h3></div><div class=" _dsplFlx"><h3 class="errTxt centerBx"></h3></div></div><div></div><div id=qr-reader style=width:300px>'),ce=k("<slot name=plans style=margin-top:35px><div>"),ue=k("<div>esta funcion es solo para dispositivos mobiles"),E;function Se(R){d([]);const[y,a]=K({}),[O,Q]=d(""),[q,D]=d(),[Y,z]=d(),[B,Z]=d(""),[F,T]=d(""),[I,L]=d("");U(()=>{}),V(()=>{D(!1),E?.clear()}),X(()=>{setTimeout(()=>{J()},90)});const f=(e,o)=>{Z(o),T(e),setTimeout(()=>{T("")},1300)},v=e=>{L(e),setTimeout(()=>{L("")},2e3)},j=(e,o)=>{e!==Y()&&(z(e),setTimeout(()=>{z("")},3e3),M(e))},M=e=>{if(e||(e=O()),e=e.split("'").join("-"),Q(""),I())return;let o={timeStamp:new Date().getTime(),latitude:N?.latitude,longitude:N?.longitude,statusId:"YABA_99",userId:se?.profile?.userId},r=e.split("/");e.split("-").length>3&&(r=e.split("-").join);let t=r?.[0],l="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const g=new RegExp(l);let c=t.length===13&&g.test(t),p="^[0-9]{4}-[1-9]{4}";const m=new RegExp(p);let u=t.length===9&&m.test(t),S=r.length>4&&t.length===12,s={idairguide:r?.[0],":search0":r?.[1],":search1":r?.[3]};c&&(s={idairguide:"175-2383"+t.slice(3,7),":search0":t}),u&&(s={idairguide:"175-2383"+t.slice(0,4),":search0":t}),c||S||u?W(s,o):(f("","error"),a({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),v(b()))},W=async(e,o)=>{let r=await de(e),t=Object.keys(r)?.[0];r[t]?.cidentity?((r[t]?.statusHistory||[]).push(o),e.ssg_track_key=t,a(""),a(r[t]),v(b()),f("","success"),re?.roles?.[r[t]?.consigneeInfo?.ybestate]?.isActive?r[t]?.currentStatus!==o.statusId||(f("","warning"),a({consigneeInfo:{ybcity:"Fue escaneado",ybestate:r[t]?.consigneeInfo?.ybestate}}),v(b())):(f("","warning"),a({consigneeInfo:{ybestate:"Zona incorrecta"}}),v(b()))):(f("","error"),a({consigneeInfo:{ybestate:"Error con manifiesto"}}),v(b()))},J=()=>{D(!0);let e={fps:10,qrbox:{width:250,height:200},supportedScanTypes:[oe.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0};E=new ie("qr-reader",e),E.render(j)};return ae(j,400),i($,{when:!0,get fallback(){return ue()},get children(){return i($,{get when(){return q()},get children(){var e=ce(),o=e.firstChild;return e._$owner=ee(),n(e,i($,{get when(){return q()},style:"margin-top: 35px",get children(){var r=le(),t=r.firstChild,l=t.firstChild,g=l.firstChild,c=l.nextSibling,p=c.firstChild,m=c.nextSibling,u=m.firstChild,S=t.nextSibling;return n(l,i(h,{}),g),n(g,F),n(l,i(h,{}),null),n(c,i(h,{}),p),n(p,()=>y?.consigneeInfo?.ybcity),n(c,i(h,{}),null),n(m,i(h,{}),u),n(u,()=>y?.consigneeInfo?.ybestate),n(m,i(h,{}),null),te(s=>{var w=`scanOverlayFront ${B()}`,x=I()?"block":"none",C=300/F()?.length*1.73+"px",_=300/y?.consigneeInfo?.ybcity?.length*1.13+"px",P=300/y?.consigneeInfo?.ybestate?.length*1.23+"px",G=`scanOverlay  ${B()} `,A=I()?"block":"none";return w!==s.e&&H(t,s.e=w),x!==s.t&&((s.t=x)!=null?t.style.setProperty("display",x):t.style.removeProperty("display")),C!==s.a&&((s.a=C)!=null?g.style.setProperty("font-size",C):g.style.removeProperty("font-size")),_!==s.o&&((s.o=_)!=null?p.style.setProperty("font-size",_):p.style.removeProperty("font-size")),P!==s.i&&((s.i=P)!=null?u.style.setProperty("font-size",P):u.style.removeProperty("font-size")),G!==s.n&&H(S,s.n=G),A!==s.s&&((s.s=A)!=null?S.style.setProperty("display",A):S.style.removeProperty("display")),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),r}}),o),e}})}})}const de=async R=>await ne({params:R,query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2"});export{Se as default};
