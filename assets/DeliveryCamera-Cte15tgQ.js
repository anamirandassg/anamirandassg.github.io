import{a as n,c as q,b as H,o as O,d as Q,e as s,S as x,a7 as M,i as t,f as N,m as A,t as w}from"./index-B9XtfwEX.js";import"./ButonHrm-peOL9M4H.js";import"./Util-BSJ3epRO.js";import{H as L,a as W}from"./html5-qrcode-scanner-Zs_6rKxE.js";import{u as Y}from"./debounces-B6fqrYGB.js";import o from"./FlexSpace-Cm-9PswZ.js";/* empty css                 */import"./SVG-BRKkFrCC.js";var Z=w('<div class=scanWrp><div><div class=" _dsplFlx"><h3 class="errTxt err centerBx "></h3></div><div class=" _dsplFlx"><h3 class="errTxt ybcity centerBx"></h3></div><div class=" _dsplFlx"><h3 class="errTxt centerBx"></h3></div></div><div></div><div id=qr-reader style=width:300px>'),j=w("<slot name=plans style=margin-top:35px><div>"),G=w("<div>esta funcion es solo para dispositivos mobiles"),b;function ae(J){n([]);const[i,K]=q({});n("");const[_,P]=n(),[B,C]=n(),[$,U]=n(""),[T,V]=n(""),[z,X]=n("");H(()=>{}),O(()=>{P(!1),b?.clear()}),Q(()=>{setTimeout(()=>{D()},90)});const I=(r,E)=>{r!==B()&&(C(r),setTimeout(()=>{C("")},3e3))},D=()=>{P(!0);let r={fps:10,qrbox:{width:250,height:200},supportedScanTypes:[L.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0};b=new W("qr-reader",r),b.render(I)};return Y(I,400),s(x,{when:!0,get fallback(){return G()},get children(){return s(x,{get when(){return _()},get children(){var r=j(),E=r.firstChild;return r._$owner=M(),t(r,s(x,{get when(){return _()},style:"margin-top: 35px",get children(){var F=Z(),l=F.firstChild,a=l.firstChild,c=a.firstChild,d=a.nextSibling,v=d.firstChild,u=d.nextSibling,p=u.firstChild,y=l.nextSibling;return t(a,s(o,{}),c),t(c,T),t(a,s(o,{}),null),t(d,s(o,{}),v),t(v,()=>i?.consigneeInfo?.ybcity),t(d,s(o,{}),null),t(u,s(o,{}),p),t(p,()=>i?.consigneeInfo?.ybestate),t(u,s(o,{}),null),N(e=>{var R=`scanOverlayFront ${$()}`,m=z()?"block":"none",f=300/T()?.length*1.73+"px",h=300/i?.consigneeInfo?.ybcity?.length*1.13+"px",g=300/i?.consigneeInfo?.ybestate?.length*1.23+"px",k=`scanOverlay  ${$()} `,S=z()?"block":"none";return R!==e.e&&A(l,e.e=R),m!==e.t&&((e.t=m)!=null?l.style.setProperty("display",m):l.style.removeProperty("display")),f!==e.a&&((e.a=f)!=null?c.style.setProperty("font-size",f):c.style.removeProperty("font-size")),h!==e.o&&((e.o=h)!=null?v.style.setProperty("font-size",h):v.style.removeProperty("font-size")),g!==e.i&&((e.i=g)!=null?p.style.setProperty("font-size",g):p.style.removeProperty("font-size")),k!==e.n&&A(y,e.n=k),S!==e.s&&((e.s=S)!=null?y.style.setProperty("display",S):y.style.removeProperty("display")),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),F}}),E),r}})}})}export{ae as default};
