const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-G-WmWEXT.js","assets/index-CHhWjs6m.js","assets/index-DGHHyjai.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-Dybp7Mb_.js","assets/debounces-vVpQhEnY.js","assets/SVG-BC-snJ5L.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/InputHr-BBcqJ1sx.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifestList-Bm3MYzsf.js","assets/Util-uEfv1z7O.js","assets/DialogHRM-CbrqI9P3.js","assets/DialogHRM-V9_lZntj.css","assets/globalSignal-Krv1agtC.js","assets/PDFButton-B_0lS8EG.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CprHcwF4.js"])))=>i.map(i=>d[i]);
import{l as D,_ as z,c as P,a as _e,u as fe,D as me,o as pe,h as he,m as ve,b as ye,i as o,d as g,f as de,e as xe,t as M,r as Z,S as V,j as ke,q as we,F as $e,E as Se,s as Ce}from"./index-CHhWjs6m.js";import{b as E,f as T,O as S,e as Me,a as ee,g as ge,p as Oe}from"./Util-uEfv1z7O.js";import{u as Ae}from"./debounces-vVpQhEnY.js";import{i as te}from"./globalSignal-Krv1agtC.js";import{P as Le,r as $}from"./PDFButton-B_0lS8EG.js";import{f as Be}from"./fontkit.es-BKe7DAJ7.js";import{i as Pe,t as v,b as De}from"./InitPrintServices-CprHcwF4.js";import"./index-Ci0zXM0r.js";const ze=(a,l,e)=>{const i=l.widthOfTextAtSize(a,40),n=l.widthOfTextAtSize(a,10);return Math.floor(e/((i-n)/30))},Ee=async(a,l,e)=>{const i=await Le.create();i.registerFontkit(Be);const n=await Pe(i);let f=265,m=30,p=Math.ceil(a.length/m);Array.from(Array(p).keys()).map(y=>{let N=a.slice(y*m,(y+1)*m);const h=i.addPage(),{height:O}=h.getSize();let F=O-74;N.map((_,I)=>{let c=F;I%2&&h?.drawRectangle({x:10,y:c-15,width:580,height:24,color:$(.7,.7,.7)});let G=ze(v(_?.state),n.roboto_bold,f),H=0;G>42&&(G=42,c=c-6);let j=_?.bagnumber;const K=n.Lexend_700.widthOfTextAtSize(v(j),5);h.drawText(v(j),{x:575-K,y:c-3,size:5,font:n.Lexend_700,color:$(0,0,0)});let R=_?.consigneeInfo?.ybcity+" | "+_?.consigneeInfo?.ybestate;const U=n.Lexend_700.widthOfTextAtSize(v(R),7);_?.cidentity&&h.drawText(v(_?.cidentity),{x:25,y:c+3,size:7,font:n.Lexend_700,color:$(0,0,0)}),_?.consigneeInfo?.ybestate&&h.drawText(v(R),{x:575-U,y:c+3,size:7,font:n.Lexend_700,color:$(0,0,0)});let t="";_?.hbls.map((s,u)=>{t+=(u>0?"  |  ":"")+s?.hbl}),h.drawText(v(t),{x:45,y:c-3,size:5,font:n.Lexend_700,color:$(0,0,0)}),H+=_?.pricePP*_?.totalWeight,F=c-18}),h.drawText("Guia: "+v(e?.guia),{x:17,y:O-22,size:12,font:n.Lexend_700,color:$(0,0,0)}),h.drawText("Fecha: "+v(e?.date),{x:19,y:O-35,size:10,font:n.Lexend_700,color:$(0,0,0)})});{const y=await i.save();return De(y)}};var Te=M("<h5>"),Fe=M("<div style=padding:4px>"),Ie=M('<div class="_dsplFlx hdr_bar purple"><div class="tr_bar tr_bar_5 align_itm centerBx"><div class="icon align_itm"></div></div><div class="tr_bar tr_bar_20 align_itm left_alg bottombx"><h5> / <!> Seleccionado(s)</h5></div><div class="tr_bar tr_bar_70"></div><div><div class="icon align_itm"></div></div><div><div class="icon align_itm">'),je=M('<div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5><h4></h4><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div><div style=padding:4px></div></div><div>'),Re=M("<div> <!>."),qe=M("<div> ");const We=D(()=>z(()=>import("./LoadingColorSpinner-G-WmWEXT.js"),__vite__mapDeps([0,1,2,3]))),ue=D(()=>z(()=>import("./DropDwnSearch-Dybp7Mb_.js"),__vite__mapDeps([4,1,2,5,6,7,8]))),Qe=D(()=>z(()=>import("./InputHr-BBcqJ1sx.js"),__vite__mapDeps([9,1,2,10]))),re=D(()=>z(()=>import("./SVG-BC-snJ5L.js"),__vite__mapDeps([6,1,2,7]))),Ve=D(()=>z(()=>import("./ItemOnManifestList-Bm3MYzsf.js"),__vite__mapDeps([11,1,2,12,7,5,13,14,15,16,17,18]))),[B,Y]=P({list:{}}),[st,at]=_e("");function nt(){const[a,l]=fe(),[e,i]=P({search:""}),[n,f]=P(),[m,p]=P(),y=me(),[N,h]=P(),[O,F]=_e(""),_=Ae(F,400),I=(t,s)=>{i({[t]:s}),_(ge())};pe(()=>{Y("list",void 0)}),he(()=>{}),ve(async()=>{let t=[];[33,46,40,41,42,50,52,54,56].map(d=>{let b=d,x=ee("M023009")?.whStList?.[b];Z?.roles?.[x?.id]?.isActive&&t.push(x)}),h("list",t);let u=[];if(ee("M023009")?.provincias.map(d=>{let b=d.label;Z?.roles?.[b]?.isActive&&u.push(d)}),h("prov",u),a?.mId){let d={id:a?.mId},b=await He(d);i("province",b?.province),i("city",b?.city),i("manifestObj",b),p("linked",b?.linkedBags)}});const[c,{refetch:G}]=ye(O,async t=>{let s=e?.manifest?.id,u=e?.province,d=u&&e?.city,b=e?.warehouse?.id,x=[];if(s){const w=await Ye(e.search,s,u,d,b);f("bags",w),S(w).map(q=>{let W=w[q],C=W.currentStatus;Z?.roles?.[C]?.isActive&&C.split("_")?.[1]>=33&&x.push(W)})}return x}),H=(t,s)=>{i({[t]:s}),_(ge()),Y("list",void 0),setTimeout(()=>{Y("list",{})},670)},j=()=>{let t={},s=0;S(B?.list)?.length!==c()?.length?(s=1,c().map(u=>{let d=u.ssg_track_key;t[d]=s})):c().map(u=>{let d=u.ssg_track_key;t[d]=void 0}),Y("list",t)},K=async()=>{let t={...m?.linked};S(B?.list).map(s=>{t?.[s]||(t[s]={idairguide:n?.bags?.[s]?.idairguide})}),p("linked",t),await Ne({ssg_manifest_key:a?.mId},{linkedBags:t}),y("/manifest",{replace:!0})},R=()=>{let t=[];S(B?.list).map(s=>{n?.bags?.[s]&&t.push(n?.bags?.[s])}),U(t)},U=async t=>{let s=await Ee(t,!0,{guia:t[0]?.idairnumber,date:Oe()});window.open(s)};return(()=>{var t=je(),s=t.firstChild,u=s.firstChild,d=u.firstChild,b=d.nextSibling,x=b.nextSibling,w=s.nextSibling,q=w.firstChild,W=q.nextSibling,C=w.nextSibling;return o(d,()=>e?.manifestObj?.ssg_manifest_key),o(b,()=>e?.manifestObj?.name),o(u,g(V,{get when(){return e?.manifestObj?.city},get children(){return["|",(()=>{var r=Te();return o(r,()=>e?.manifestObj?.city),r})()]}}),x),o(x,()=>e?.manifestObj?.province),o(q,g(ue,{get list(){return ee("M023009")?.manifestList},lbl_empty:"Guia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.manifest?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>H("manifest",r),width:"260px"})),o(W,g(ue,{get list(){return N?.list},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.warehouse?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>I("warehouse",r),width:"260px"})),o(w,g(V,{get when(){return e?.manifest?.id},get children(){var r=Fe();return o(r,g(Qe,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:k=>I("search",k)})),r}}),null),o(C,g(V,{get when(){return ke(()=>!!e?.manifest?.id)()&&c().length>0},get children(){var r=Ie(),k=r.firstChild,Q=k.firstChild,A=k.nextSibling,J=A.firstChild,ie=J.firstChild,se=ie.nextSibling;se.nextSibling;var be=A.nextSibling,X=be.nextSibling,ae=X.firstChild,ne=X.nextSibling,le=ne.firstChild;return r.style.setProperty("margin","18px 0"),Q.$$click=j,o(Q,g(re,{get name(){return S(B?.list)?.length<c()?.length?"minus-circle-outline":"check_circle_outline"},color:"var(--background-red-ssg)"})),o(J,()=>S(B?.list)?.length,ie),o(J,()=>c()?.length,se),ae.$$click=K,o(ae,g(re,{name:"link",color:"var(--background-red-ssg)"})),le.$$click=R,o(le,g(re,{name:"printer",color:"var(--background-red-ssg)"})),de(L=>{var oe=` ${te()?"tr_bar_15":"tr_bar_05"} tr_bar  align_itm centerBx"`,ce=` ${te()?"tr_bar_10":"tr_bar_05"} tr_bar  align_itm centerBx"`;return oe!==L.e&&(X.className=L.e=oe),ce!==L.t&&(ne.className=L.t=ce),L},{e:void 0,t:void 0}),r}}),null),o(C,g(Se,{fallback:r=>(()=>{var k=Re(),Q=k.firstChild,A=Q.nextSibling;return A.nextSibling,o(k,()=>r.toString(),A),k})(),get children(){return g(we,{get fallback(){return(()=>{var r=qe();return r.firstChild,o(r,g(We,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r})()},get children(){return g(V,{get when(){return c()},get children(){return g($e,{get each(){return c()},children:r=>g(Ve,{item:r,get isAlready(){return m?.linked?.[r.ssg_track_key]}})})}})}})}}),null),de(r=>Ce(C,` ${te(),"width:86vw;"} margin: 0 auto;`,r)),t})()}const Ye=async(a,l,e,i,n)=>{let f={params:{idairguide:l,":store":n}};a&&a.split(" ").map((p,y)=>{p&&(f.params[":search"+y]=p.trim())}),e&&(f.params[":estate"]=e),i&&(f.params[":city"]=i);let m=E(802001);if(f={...f,...m},l&&n){const p=await T(f);return p?.error?{}:p}else return{}},Ne=async(a,l)=>{let e={params:a,data2update:l},i=E(709002);e={...e,...i};const n=await T(e),f=S(l?.linkedBags).map(async(m,p)=>{await Ge({ssg_track_key:m,idairguide:l?.linkedBags?.[m]?.idairguide},{currentManifestKey:a?.ssg_manifest_key})});return await Promise.all(f),n},Ge=async(a,l)=>{let e={params:a,data2update:l},i=E(809004);return e={...e,...i},await T(e)},He=async a=>{let l={params:a},e=E(703003);return l={...l,...e},await T(l)},lt=async a=>{let l=[];a.map(e=>{let i={params:{id:e?.ssg_track_key,idairguide:e?.idairguide}},n=E(802002);i={...i,...n},l.push(i)}),Me(l,Ke)},Ke=async a=>{const e=await T(a);if(e)return e};xe(["click"]);export{nt as default,Ke as fetchCSVInve,lt as loadManifest,st as manifestObs,B as selectedManifest,at as setManifestObs,Y as setSelectedManifest,Ne as updLinkedBags};
