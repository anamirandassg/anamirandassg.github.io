const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-CD5bEVxt.js","assets/index-CUMqyv7M.js","assets/index-NFdrrltd.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch---PZlY10.js","assets/debounces-CWZEP-ZR.js","assets/SVG-DIuptYEy.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-BDhRA3_j.js","assets/ButonUploadHrm-CDrvCrvU.js","assets/Util-DErZaF9J.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-BmYcS9GA.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-DHXL4V7J.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as v,_ as f,u as le,c as j,a as g,o as ae,h as se,m as ie,i as t,d as r,k as G,e as ne,t as c,S as h,f as T,n as W,g as oe,j as ce}from"./index-CUMqyv7M.js";import{b as D,f as L,e as de,g as P}from"./Util-DErZaF9J.js";import{u as ue}from"./debounces-CWZEP-ZR.js";import"./globalSignal-DV4goPGp.js";import"./ButonHrm-B1uWNt_J.js";import{g as pe,a as me,c as be,i as _e,b as ge,u as he}from"./handelImagesServices-C3Q8P7pG.js";import"./index-Ci0zXM0r.js";/* empty css                 */import"./SVG-DIuptYEy.js";var ve=c('<div class="icon_status centerBx">'),fe=c("<div style=width:300px;position:relative;><img alt=sf><div>"),$e=c("<div style=width:300px;position:relative;><img alt=sf>"),ye=c('<div><div class=" spaceAround centerBx"><div class=bottombx style=padding:16px><h4></h4><div class="centerBx bottombx "><h5 class="">Publicar</h5></div></div></div><div class="elastic_view_bx show"><div class=" spaceAround centerBx"></div></div><div class=" flxWrp spaceAround "><div class="centerBx flxWrp "style=margin:16px>'),xe=c("<div>"),we=c("<div> "),Ce=c("<div class=centerBx><h5 style=margin-left:12px>Subiendo imagen"),z=c("<div style=margin:8px>"),Ie=c('<div class="centerBx flxWrp "><div class="bottombx centerBx unit"><h5>'),Se=c("<div class=unitBx><h5>"),ke=c('<div class="centerBx flxWrp "><div class="bottombx centerBx unit"><h5></h5><div class=bag_number><h5>');const Q=v(()=>f(()=>import("./LoadingColorSpinner-CD5bEVxt.js"),__vite__mapDeps([0,1,2,3])));v(()=>f(()=>import("./DropDwnSearch---PZlY10.js"),__vite__mapDeps([4,1,2,5,6,7,8])));v(()=>f(()=>import("./FlexSpace-BDhRA3_j.js"),__vite__mapDeps([9,1,2])));const Ee=v(()=>f(()=>import("./ButonUploadHrm-CDrvCrvU.js"),__vite__mapDeps([10,1,2,6,7,11,12]))),Pe=v(()=>f(()=>import("./CheckBoxSlide-BmYcS9GA.js"),__vite__mapDeps([13,1,2,14]))),Be=v(()=>f(()=>import("./InputHr-DHXL4V7J.js"),__vite__mapDeps([15,1,2,16]))),Oe=v(()=>f(()=>import("./SVG-DIuptYEy.js"),__vite__mapDeps([6,1,2,7])));function Qe(l){const[a,n]=le(),[e,u]=j({search:""});j(),j();const[d,B]=g(null),[$,x]=g(!1),[w,p]=g(!1),[I,J]=g(""),[De,K]=g("");ue(K,400),ae(()=>{}),se(()=>{});const M=async()=>{if(a?.mId){e?.productObj;let s={id:a?.mId,businessId:G?.profile?.businessYId},i=await je(s);J(pe()+me()+"/"+i?.productImageUrl),u("productObj",i)}};ie(async()=>{M()});const O=async s=>{await Ae(a?.mId,s),M()},q=async(s,i)=>{let m=await ge(s.type,i);if(await he(m,s)){let b={...e?.productObj?.thumbnails};b[i]=1,await O({productImageUrl:i,thumbnails:b}),p(!1),x(!1)}else p(!1)},X=async()=>{if(p(!0),d()?.name.split(".").pop()==="webp"){let s=e?.productObj?.code+"/"+P()+P()+".webp";q(d()?.file,s)}else{let s=await be(d()?.file,{maxSizeMB:.5,maxWidthOrHeight:1080}),i=await _e(s),y=await(await fetch(i)).blob(),b=e?.productObj?.code+"/"+P()+P()+".webp";q(y,b)}},Z=s=>{B(s),x(!0)},N=s=>{O({isPublic:s?"9":null})},S=async(s,i)=>{O({[s]:i})};return(()=>{var s=xe();return t(s,r(h,{get when(){return e?.productObj?.code},get fallback(){return(()=>{var i=we();return i.firstChild,t(i,r(Q,{stroke:"rgb(200 25 60 / 1)",size:62}),null),i})()},get children(){var i=ye(),m=i.firstChild,y=m.firstChild,b=y.firstChild,A=b.nextSibling,ee=A.firstChild,R=m.nextSibling,te=R.firstChild,re=R.nextSibling,_=re.firstChild;return t(m,r(h,{get when(){return d()?.source},get children(){var C=fe(),k=C.firstChild,U=k.nextSibling;return t(U,r(h,{get when(){return!w()},get fallback(){return(()=>{var o=Ce(),E=o.firstChild;return t(o,r(Q,{stroke:"rgb(200 25 60 / 1)",size:32}),E),o})()},get children(){var o=ve();return o.$$click=X,t(o,r(Oe,{name:"arrow_up_large",size:24})),o}})),T(o=>{var E=d()?.source,F=w()?"floatBtn loading":"floatBtn ";return E!==o.e&&W(k,"src",o.e=E),F!==o.t&&oe(U,o.t=F),o},{e:void 0,t:void 0}),C}}),y),t(m,r(h,{get when(){return ce(()=>!!I())()&&!d()?.source},get children(){var C=$e(),k=C.firstChild;return T(()=>W(k,"src",I())),C}}),y),t(b,()=>e?.productObj?.name),t(A,r(Pe,{get initValue(){return e?.productObj?.isPublic},updChange:N,color:"var(--background-red-ssg)"}),ee),t(te,r(Ee,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:Z})),t(_,r(Y,{get value(){return e?.productObj?.category},label:"Categoria:",key:"category",updItem:S}),null),t(_,r(V,{}),null),t(_,r(Y,{get value(){return e?.productObj?.unit},label:"U/M:",key:"unit",updItem:S}),null),t(_,r(V,{}),null),t(_,r(H,{get value(){return e?.productObj?.brand},label:"Marca:",key:"brand",updItem:S}),null),t(_,r(V,{}),null),t(_,r(H,{get value(){return e?.productObj?.model},label:"Model:",key:"model",updItem:S}),null),i}})),s})()}const V=()=>[z(),"|",z()],H=l=>{const[a,n]=g(!1),[e,u]=g(""),d=()=>{l?.updItem(l?.key,e()),n(!1)},B=()=>{let $=a();$||u(l?.value),n(!$)};return r(h,{get when(){return l?.value},get children(){var $=Ie(),x=$.firstChild,w=x.firstChild;return w.$$click=B,t(w,()=>l?.label),t(x,r(h,{get when(){return a()},get fallback(){return(()=>{var p=Se(),I=p.firstChild;return t(I,()=>l?.value),p})()},get children(){return r(Be,{width:"160px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"Modelo",colors:"#2b2b2b",handleClick:p=>u(p),onEnter:d})}}),null),$}})},Y=l=>r(h,{get when(){return l?.value},get children(){var a=ke(),n=a.firstChild,e=n.firstChild,u=e.nextSibling,d=u.firstChild;return t(e,()=>l?.label),t(d,()=>l?.value),a}}),Ae=async(l,a)=>{let n={params:{id:l,businessId:G?.profile?.businessYId},form:a},e=D(129004);return n={...n,...e},await L(n)},je=async l=>{let a={params:l},n=D(122002);return a={...a,...n},await L(a)},He=async l=>{let a=[];l.map(n=>{let e={params:{id:n?.ssg_track_key,idairguide:"all"}},u=D(802002);e={...e,...u},a.push(e)}),de(a,Ve)},Ve=async l=>{const n=await L(l);if(n)return n};ne(["click"]);export{Qe as default,Ve as fetchCSVInve,He as loadProduct,Ae as updProducts};
