const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-B-pdVJPa.js","assets/index-CtKx0XWr.js","assets/index-DGHHyjai.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-B7Vax0gP.js","assets/debounces-D0TqFxOE.js","assets/SVG-DykKfUOd.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/InputHr-BU9AvXrf.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifestList-Cn7wlt8F.js","assets/Util-uEfv1z7O.js","assets/DialogHRM-ZoxhOS2G.js","assets/DialogHRM-V9_lZntj.css","assets/globalSignal-BeLJshGj.js","assets/PDFButton-B_0lS8EG.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CprHcwF4.js"])))=>i.map(i=>d[i]);
import{l as D,_ as z,c as P,a as ge,u as fe,D as me,o as be,h as pe,m as he,b as ve,i as c,d as u,f as ce,e as ye,t as M,v as X,S as q,j as xe,r as ke,F as we,E as $e,s as Se}from"./index-CtKx0XWr.js";import{b as E,f as T,O as $,e as Ce,a as Z,g as de,p as Me}from"./Util-uEfv1z7O.js";import{u as Ae}from"./debounces-D0TqFxOE.js";import{i as ee}from"./globalSignal-BeLJshGj.js";import{P as Le,r as w}from"./PDFButton-B_0lS8EG.js";import{f as Oe}from"./fontkit.es-BKe7DAJ7.js";import{i as Be,t as x,b as Pe}from"./InitPrintServices-CprHcwF4.js";import"./index-Ci0zXM0r.js";const De=(s,l,e)=>{const i=l.widthOfTextAtSize(s,40),n=l.widthOfTextAtSize(s,10);return Math.floor(e/((i-n)/30))},ze=async(s,l,e)=>{const i=await Le.create();i.registerFontkit(Oe);const n=await Be(i);let m=265,h=30,b=Math.ceil(s.length/h);Array.from(Array(b).keys()).map(k=>{let V=s.slice(k*h,(k+1)*h);const p=i.addPage(),{height:A}=p.getSize();let I=A-74;V.map((_,F)=>{let o=I;F%2&&p?.drawRectangle({x:10,y:o-15,width:580,height:24,color:w(.7,.7,.7)});let Y=De(x(_?.state),n.roboto_bold,m),N=0;Y>42&&(Y=42,o=o-6);let R=_?.bagnumber;const G=n.Lexend_700.widthOfTextAtSize(x(R),5);p.drawText(x(R),{x:575-G,y:o-3,size:5,font:n.Lexend_700,color:w(0,0,0)});let j=_?.consigneeInfo?.ybcity+" | "+_?.consigneeInfo?.ybestate;const H=n.Lexend_700.widthOfTextAtSize(x(j),7);_?.cidentity&&p.drawText(x(_?.cidentity),{x:25,y:o+3,size:7,font:n.Lexend_700,color:w(0,0,0)}),_?.consigneeInfo?.ybestate&&p.drawText(x(j),{x:575-H,y:o+3,size:7,font:n.Lexend_700,color:w(0,0,0)});let t="";_?.hbls.map((a,g)=>{t+=(g>0?"  |  ":"")+a?.hbl}),p.drawText(x(t),{x:45,y:o-3,size:5,font:n.Lexend_700,color:w(0,0,0)}),N+=_?.pricePP*_?.totalWeight,I=o-18}),p.drawText("Guia: "+x(e?.guia),{x:17,y:A-22,size:12,font:n.Lexend_700,color:w(0,0,0)}),p.drawText("Fecha: "+x(e?.date),{x:19,y:A-35,size:10,font:n.Lexend_700,color:w(0,0,0)})});{const k=await i.save();return Pe(k)}};var Ee=M("<h5>"),Te=M("<div style=padding:4px>"),Ie=M('<div class="_dsplFlx hdr_bar purple"><div class="tr_bar tr_bar_5 align_itm centerBx"><div class="icon align_itm"></div></div><div class="tr_bar tr_bar_20 align_itm left_alg bottombx"><h5> / <!> Seleccionado(s)</h5></div><div class="tr_bar tr_bar_70"></div><div><div class="icon align_itm"></div></div><div><div class="icon align_itm">'),Fe=M('<div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div><div style=padding:4px></div></div><div>'),Re=M("<div> <!>."),je=M("<div> ");const We=D(()=>z(()=>import("./LoadingColorSpinner-B-pdVJPa.js"),__vite__mapDeps([0,1,2,3]))),ue=D(()=>z(()=>import("./DropDwnSearch-B7Vax0gP.js"),__vite__mapDeps([4,1,2,5,6,7,8]))),qe=D(()=>z(()=>import("./InputHr-BU9AvXrf.js"),__vite__mapDeps([9,1,2,10]))),te=D(()=>z(()=>import("./SVG-DykKfUOd.js"),__vite__mapDeps([6,1,2,7]))),Qe=D(()=>z(()=>import("./ItemOnManifestList-Cn7wlt8F.js"),__vite__mapDeps([11,1,2,12,7,5,13,14,15,16,17,18]))),[B,Q]=P({list:{}}),[it,st]=ge("");function at(){const[s,l]=fe(),[e,i]=P({search:""}),[n,m]=P(),[h,b]=P(),k=me(),[V,p]=P(),[A,I]=ge(""),_=Ae(I,400),F=(t,a)=>{i({[t]:a}),_(de())};be(()=>{Q("list",void 0)}),pe(()=>{}),he(async()=>{let t=[];[33,46,40,41,42,50,52,54,56].map(d=>{let f=d,v=Z("M023009")?.whStList?.[f];X?.roles?.[v?.id]?.isActive&&t.push(v)}),p("list",t);let g=[];if(Z("M023009")?.provincias.map(d=>{let f=d.label;X?.roles?.[f]?.isActive&&g.push(d)}),p("prov",g),s?.mId){let d={id:s?.mId},f=await Ge(d);i("province",f?.province),i("city",f?.city),i("manifestObj",f),b("linked",f?.linkedBags)}});const[o,{refetch:Y}]=ve(A,async t=>{let a=e?.manifest?.id,g=e?.province,d=g&&e?.city,f=e?.warehouse?.id,v=[];if(a){const S=await Ve(e.search,a,g,d,f);m("bags",S),$(S).map(K=>{let C=S[K],r=C.currentStatus;X?.roles?.[r]?.isActive&&r.split("_")?.[1]>=33&&v.push(C)})}return v}),N=(t,a)=>{i({[t]:a}),_(de()),Q("list",void 0),setTimeout(()=>{Q("list",{})},670)},R=()=>{let t={},a=0;$(B?.list)?.length!==o()?.length?(a=1,o().map(g=>{let d=g.ssg_track_key;t[d]=a})):o().map(g=>{let d=g.ssg_track_key;t[d]=void 0}),Q("list",t)},G=async()=>{let t={...h?.linked};$(B?.list).map(a=>{t?.[a]||(t[a]={idairguide:"all"})}),b("linked",t),await Ye({ssg_manifest_key:s?.mId},{linkedBags:t}),k("/manifest",{replace:!0})},j=()=>{let t=[];$(B?.list).map(a=>{n?.bags?.[a]&&t.push(n?.bags?.[a])}),H(t)},H=async t=>{let a=await ze(t,!0,{guia:t[0]?.idairnumber,date:Me()});window.open(a)};return(()=>{var t=Fe(),a=t.firstChild,g=a.firstChild,d=g.firstChild,f=d.nextSibling,v=a.nextSibling,S=v.firstChild,K=S.nextSibling,C=v.nextSibling;return c(d,()=>e?.manifestObj?.name),c(g,u(q,{get when(){return e?.manifestObj?.city},get children(){return["|",(()=>{var r=Ee();return c(r,()=>e?.manifestObj?.city),r})()]}}),f),c(f,()=>e?.manifestObj?.province),c(S,u(ue,{get list(){return Z("M023009")?.manifestList},lbl_empty:"Guia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.manifest?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>N("manifest",r),width:"260px"})),c(K,u(ue,{get list(){return V?.list},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.warehouse?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>F("warehouse",r),width:"260px"})),c(v,u(q,{get when(){return e?.manifest?.id},get children(){var r=Te();return c(r,u(qe,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:y=>F("search",y)})),r}}),null),c(C,u(q,{get when(){return xe(()=>!!e?.manifest?.id)()&&o().length>0},get children(){var r=Ie(),y=r.firstChild,W=y.firstChild,L=y.nextSibling,U=L.firstChild,re=U.firstChild,ie=re.nextSibling;ie.nextSibling;var _e=L.nextSibling,J=_e.nextSibling,se=J.firstChild,ae=J.nextSibling,ne=ae.firstChild;return r.style.setProperty("margin","18px 0"),W.$$click=R,c(W,u(te,{get name(){return $(B?.list)?.length<o()?.length?"minus-circle-outline":"check_circle_outline"},color:"var(--background-red-ssg)"})),c(U,()=>$(B?.list)?.length,re),c(U,()=>o()?.length,ie),se.$$click=G,c(se,u(te,{name:"link",color:"var(--background-red-ssg)"})),ne.$$click=j,c(ne,u(te,{name:"printer",color:"var(--background-red-ssg)"})),ce(O=>{var le=` ${ee()?"tr_bar_15":"tr_bar_05"} tr_bar  align_itm centerBx"`,oe=` ${ee()?"tr_bar_10":"tr_bar_05"} tr_bar  align_itm centerBx"`;return le!==O.e&&(J.className=O.e=le),oe!==O.t&&(ae.className=O.t=oe),O},{e:void 0,t:void 0}),r}}),null),c(C,u($e,{fallback:r=>(()=>{var y=Re(),W=y.firstChild,L=W.nextSibling;return L.nextSibling,c(y,()=>r.toString(),L),y})(),get children(){return u(ke,{get fallback(){return(()=>{var r=je();return r.firstChild,c(r,u(We,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r})()},get children(){return u(q,{get when(){return o()},get children(){return u(we,{get each(){return o()},children:r=>u(Qe,{item:r,get isAlready(){return h?.linked?.[r.ssg_track_key]}})})}})}})}}),null),ce(r=>Se(C,` ${ee(),"width:86vw;"} margin: 0 auto;`,r)),t})()}const Ve=async(s,l,e,i,n)=>{let m={params:{idairguide:l,":store":n}};s&&s.split(" ").map((b,k)=>{b&&(m.params[":search"+k]=b.trim())}),e&&(m.params[":estate"]=e),i&&(m.params[":city"]=i);let h=E(802001);if(m={...m,...h},l&&n){const b=await T(m);return b?.error?{}:b}else return{}},Ye=async(s,l)=>{let e={params:s,data2update:l},i=E(709002);e={...e,...i};const n=await T(e),m=$(l?.linkedBags).map(async(h,b)=>{await Ne({ssg_track_key:h,idairguide:"all"},{currentManifestKey:s?.ssg_manifest_key})});return await Promise.all(m),n},Ne=async(s,l)=>{let e={params:s,data2update:l},i=E(809004);return e={...e,...i},await T(e)},Ge=async s=>{let l={params:s},e=E(703003);return l={...l,...e},await T(l)},nt=async s=>{let l=[];s.map(e=>{let i={params:{id:e?.ssg_track_key,idairguide:"all"}},n=E(802002);i={...i,...n},l.push(i)}),Ce(l,He)},He=async s=>{const e=await T(s);if(e)return e};ye(["click"]);export{at as default,He as fetchCSVInve,nt as loadManifest,it as manifestObs,B as selectedManifest,st as setManifestObs,Q as setSelectedManifest,Ye as updLinkedBags};
