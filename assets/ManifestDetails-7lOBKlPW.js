const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-D2T-_-Bj.js","assets/index-BACe5BN8.js","assets/index-BRlA1Q7g.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/FlexSpace-CRTxrV1i.js","assets/SVG-CuEslQyg.js","assets/Util-CJwQ4eI5.js"])))=>i.map(i=>d[i]);
import{l as q,_ as H,r as se,c as G,a as Q,o as re,b as ae,d as ne,i as s,e as l,S as N,z as le,F as ce,E as de,f as R,j as C,k as T,s as oe,m as V,h as me,t as b,A as Y,T as ge}from"./index-BACe5BN8.js";import{e as O,g as J,f as Z,m as ue,u as ee,O as he,b as fe,G as _e,K as X,H as ve,I as pe}from"./Util-CJwQ4eI5.js";import{u as be}from"./debounces-CYfJt0-b.js";import"./ButonHrm-Xl3ZUK3i.js";import{P as $e}from"./ShowQRPrintLabel-RVymM_nw.js";import{handleListManifest as ye}from"./DashManifest-gOBMbauP.js";import{getAddressPSS as xe}from"./Reports-bkRbcm8Y.js";/* empty css                 */import"./SVG-CuEslQyg.js";import"./fontkit.es-yAesCE8D.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-tbDVtYPt.js";import"./Toast-CPo8ITIw.js";import"./App.module-CbHnVtRQ.js";import"./DialogHRM-Ul5bCxUP.js";import"./ScanningServices-DLJBT3No.js";var ke=b('<svg viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg height=22 width=22><path>'),te=b("<h5>"),Se=b('<div><div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4>|<h4></h4><div class="icon_status centerBx"><a class=centerBx></a></div>|<div class="icon_status centerBx"></div></div></div><div>'),we=b("<div> <!>."),Be=b("<div> "),Ne=b('<div class="bottombx flxWrp spaceAround centerBx"><h4></h4><div class="icon_status centerBx">'),Ae=b("<img width=48 height=24 class=picture-profile alt=ssg decoding=async>"),Ie=b('<div class="bottombx flxWrp spaceAround centerBx"><h4>'),Ce=b('<div class="icon_status centerBx">'),Oe=b("<h5 class=rpto>"),Le=b('<div><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="bag_number centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5></div></div></div><div><p class=" textleft "></p><div class=vertseparator>');const je=q(()=>H(()=>import("./LoadingColorSpinner-D2T-_-Bj.js"),__vite__mapDeps([0,1,2,3]))),U=q(()=>H(()=>import("./FlexSpace-CRTxrV1i.js"),__vite__mapDeps([4,1,2]))),j=q(()=>H(()=>import("./SVG-CuEslQyg.js"),__vite__mapDeps([5,1,2,6])));function Ze(){const[e,m]=se(),[i,o]=G({search:""}),[x,c]=G(),[g,L]=Q(0),[z,E]=G(),[M,F]=Q("");be(F,400),re(()=>{}),ae(()=>{});const W=async()=>{if(e?.mId&&g()<X()){L(X()+7e3);let t={id:e?.mId},d=await Me(t);o("manifestObj",void 0),c("linked",void 0),o("manifestObj",d),c("linked",{...d?.linkedBags}),i?.province||(o("province",d?.province),o("city",d?.city))}};ne(async()=>{let t=[];[33,46,40,41,42,50,52,54,56].map(h=>{let $=h,w=O("M023009")?.whStList?.[$];Y?.roles?.[w?.id]?.isActive&&t.push(w)}),E("list",t);let u=[];O("M023009")?.provincias.map(h=>{let $=h.label;Y?.roles?.[$]?.isActive&&u.push(h)}),E("prov",u),W()});const v=t=>t||"",k=t=>t?" "+t:"",P=t=>(v(t?.estate)+"_"+v(t?.city)+"_"+v(t?.rpto)+"_"+v(t?.streetName)+"_"+v(t?.streetNo)).toLowerCase(),r=t=>{let d=t?.consigneeInfo;return k(d?.firstName)+k(d?.middleName)+k(d?.lastName)+k(d?.lastName2)},S=t=>{let d=t?.consigneeInfo,u=k(d?.altPhoneNumber);return k(d?.phoneNumber)+(u?" |"+u:"")},A=t=>new Promise((d,u)=>{let h=(()=>{var _=ke(),B=_.firstChild;return R(()=>T(B,"d",ge?.[t])),_})(),$=h.cloneNode(!0);const w=new XMLSerializer().serializeToString($),y=`data:image/svg+xml;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(w)))}`,f=new Image;f.addEventListener("load",()=>{const _=h.getAttribute("width"),B=h.getAttribute("height"),n=document.createElement("canvas");n.setAttribute("width",_),n.setAttribute("height",B),n.getContext("2d").drawImage(f,0,0,_,B);const I=n.toDataURL("image/png");d(I)}),f.src=y}),ie=async()=>{let t={},d={},u={};const $=["cellphone","receipt","home","open_package_file_outline","user"].map(async a=>{let y=await A(a);ee("icon_"+a,y)});await Promise.all($),i?.manifestObj?.linkedBagsInfo?.map(a=>{if(a?.currentStatus!="YABA_99"){let y=a?.address;a?.isSSG&&(y={streetName:"ANGEL GUERRA",streetNo:"16A",rpto:"PERALTA",betwen:"ESQUINA FOMENTO",city:"HOLGUIN",estate:"HOLGUIN"});let f=P(y),_=a?.cidentity,B=a?.address?.estate,n=a?.address?.city,p=a?.address?.Rpto||a?.address?.rpto;if(u[p]||(u[p]=1),d[n]||(d[n]=1),t[f]||(t[f]={city:n,estate:B,rpto:p,address:y,currentStatus:a?.currentStatus,customers:{},bagsNo:0}),!t[f].customers[_]){let D={name:r(a),phoneNumber:S(a),cid:a?.cidentity,nameshipper:a?.nameshipper},K={...a,...D};K.bagsNumb={},t[f].customers[_]=K}let I={bagnumber:a?.bagnumber,idairguide:a?.guia,tracking:a?.tracking,hbls:a?.hbls};t[f].customers[_].bagsNumb[a?.ssg_track_key]=I,t[f].bagsNo+=1}});let w=await $e(he(t),t);window.open(w)};return(()=>{var t=Se(),d=t.firstChild,u=d.firstChild,h=u.firstChild,$=h.nextSibling,w=$.nextSibling,a=w.nextSibling,y=a.firstChild,f=a.nextSibling,_=f.nextSibling,B=d.nextSibling;return s(h,()=>i?.manifestObj?.name),s(u,l(N,{get when(){return i?.manifestObj?.city},get children(){return["|",(()=>{var n=te();return s(n,()=>i?.manifestObj?.city),n})()]}}),$),s(w,()=>i?.manifestObj?.province),a.$$click=()=>{},s(y,l(j,{name:"link",size:22})),_.$$click=ie,s(_,l(j,{name:"printer",size:24,color:"firebrick"})),s(B,l(de,{fallback:n=>(()=>{var p=we(),I=p.firstChild,D=I.nextSibling;return D.nextSibling,s(p,()=>n.toString(),D),p})(),get children(){return l(le,{get fallback(){return(()=>{var n=Be();return n.firstChild,s(n,l(je,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return l(N,{get when(){return i?.manifestObj?.linkedBagsInfo?.length>0},get children(){return l(ce,{get each(){return i?.manifestObj?.linkedBagsInfo},children:n=>l(Ee,{item:n,get city(){return i?.manifestObj?.city},get manifestObj(){return i?.manifestObj},get isAlready(){return i?.manifestObj?.linkedBags?.[n.ssg_track_key]},setFormsM:o,get mId(){return e?.mId}})})}})}})}})),R(n=>{var p=`/link-manifest?mId=${e?.mId}`,I=` ${C(),"width:86vw;"} margin: 0 auto;`;return p!==n.e&&T(y,"href",n.e=p),n.t=oe(B,I,n.t),n},{e:void 0,t:void 0}),t})()}const Ee=e=>{const m=()=>{xe(e?.item.street);let c=e?.item?.street.split(",");return c.slice(0,c.length-2).join(",")},i=c=>c?" "+c:"",o=()=>{let c=e?.item?.consigneeInfo;return i(c?.firstName)+i(c?.middleName)+i(c?.lastName)+i(c?.lastName2)},x=async c=>{if(e?.item?.currentStatus!=="99"){let g=fe(O("manifestList"));g[e?.mId].linkedBags[e?.item?.ssg_track_key]&&(delete g[e?.mId].linkedBags[e?.item?.ssg_track_key],ee("manifestList",g),await _e(pe,ve,g)),e?.setFormsM("manifestObj","linkedBags",e?.item?.ssg_track_key,void 0)}};return l(N,{get when(){return e?.manifestObj?.linkedBags[e?.item?.ssg_track_key]},get children(){var c=Le(),g=c.firstChild,L=g.firstChild,z=L.firstChild,E=z.nextSibling,M=L.nextSibling,F=M.firstChild,W=F.firstChild,v=g.nextSibling,k=v.firstChild,P=k.nextSibling;return s(c,l(N,{get when(){return C()},get children(){var r=Ne(),S=r.firstChild,A=S.nextSibling;return s(S,o),s(r,l(U,{}),A),A.$$click=x,s(A,l(j,{name:"outline_delete",size:28,color:"var(--background-red-ssg)"})),r}}),g),s(g,l(N,{get when(){return e?.item?.isSSG},get children(){var r=Ae();return R(()=>T(r,"src",O("SSG.webp"))),r}}),L),s(z,l(j,{name:"open_package_file_outline",size:20})),s(E,()=>e?.item?.bagnumber),s(g,l(N,{get when(){return!C()},get children(){var r=Ie(),S=r.firstChild;return s(S,o),r}}),M),s(g,l(U,{}),M),s(W,()=>e?.item?.idairguide),s(g,l(N,{get when(){return!C()},get children(){var r=Ce();return r.$$click=x,s(r,l(j,{get name(){return e?.item?.currentStatus==="YABA_99"?"check_circle":"outline_delete"},size:24,get color(){return e?.item?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)"}})),r}}),null),s(k,m),s(v,l(U,{}),P),s(v,l(N,{get when(){return e?.item?.address?.rpto},get children(){return[(()=>{var r=Oe();return s(r,()=>e?.item?.address?.rpto),r})(),"|"]}}),P),s(v,l(N,{get when(){return!e?.city&&e?.item?.address?.city},get children(){var r=te();return s(r,()=>e?.item?.address?.city),r}}),null),R(r=>{var S=`client_item_box gWXAaj jlytmu manifest ${C()?"isMobile":""}`,A=` ${C(),"centerBx"} bottombx flxWrp  centerBx`;return S!==r.e&&V(c,r.e=S),A!==r.t&&V(v,r.t=A),r},{e:void 0,t:void 0}),c}})},et=async(e,m)=>{let i={params:e,data2update:m},o=J(709002);return i={...i,...o},await Z(i)},Me=async e=>{let m={...O("manifestList")?.[e?.id]};m||(m=await ye());let i=[],o=m?.linkedBags;return o&&Object.keys(o)?.map(async x=>{if(x){let c=O("manifestByKeys")?.[x];i.push(c)}}),m.linkedBagsInfo=i,m},tt=async e=>{let m=[];e.map(i=>{let o={params:{id:i?.ssg_track_key,idairguide:"all"}},x=J(802002);o={...o,...x},m.push(o)}),ue(m,Pe)},Pe=async e=>{const i=await Z(e);if(i)return i};me(["click"]);export{Ze as default,Pe as fetchCSVInve,tt as loadManifest,et as updLinkedBags};
