const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-lv9B8UIv.js","assets/index-Ce-I5KUz.js","assets/index-NFdrrltd.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-D-9IJwvw.js","assets/debounces-wN__sdFl.js","assets/SVG-3xaf9-9Q.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-CTG827Q_.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-DwmVjVaU.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifestList-BhyizNMR.js","assets/Util-DErZaF9J.js","assets/DialogHRM-BmiVfgEe.js","assets/DialogHRM-V9_lZntj.css","assets/globalSignal-DoH-l5IW.js","assets/PDFButton-B_0lS8EG.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-NgpjRc8z.js"])))=>i.map(i=>d[i]);
import{l as M,_ as A,c as R,a as ge,u as be,G as pe,o as me,h as fe,m as he,b as ve,i as o,d,f as oe,e as ye,t as C,v as X,S as I,q as xe,j as ke,r as we,F as Se,E as $e,s as Ce}from"./index-Ce-I5KUz.js";import{b as j,f as q,O as $,e as Me,a as ce,g as de,p as Ae}from"./Util-DErZaF9J.js";import{u as Oe}from"./debounces-wN__sdFl.js";import{i as Z}from"./globalSignal-DoH-l5IW.js";import{P as Le,r as S}from"./PDFButton-B_0lS8EG.js";import{f as Be}from"./fontkit.es-BKe7DAJ7.js";import{i as Pe,t as x,b as De}from"./InitPrintServices-NgpjRc8z.js";import"./index-Ci0zXM0r.js";const Ee=(a,n,e)=>{const i=n.widthOfTextAtSize(a,40),l=n.widthOfTextAtSize(a,10);return Math.floor(e/((i-l)/30))},Te=async(a,n,e)=>{const i=await Le.create();i.registerFontkit(Be);const l=await Pe(i);let v=265,u=30,k=Math.ceil(a.length/u);Array.from(Array(k).keys()).map(f=>{let O=a.slice(f*u,(f+1)*u);const h=i.addPage(),{height:L}=h.getSize();let V=L-74;O.map((b,B)=>{let c=V;B%2&&h?.drawRectangle({x:10,y:c-15,width:580,height:24,color:S(.7,.7,.7)});let Y=Ee(x(b?.state),l.roboto_bold,v),N=0;Y>42&&(Y=42,c=c-6);let W=b?.bagnumber;const H=l.Lexend_700.widthOfTextAtSize(x(W),5);h.drawText(x(W),{x:575-H,y:c-3,size:5,font:l.Lexend_700,color:S(0,0,0)});let G=b?.consigneeInfo?.ybcity+" | "+b?.consigneeInfo?.ybestate;const K=l.Lexend_700.widthOfTextAtSize(x(G),7);b?.cidentity&&h.drawText(x(b?.cidentity),{x:25,y:c+3,size:7,font:l.Lexend_700,color:S(0,0,0)}),b?.consigneeInfo?.ybestate&&h.drawText(x(G),{x:575-K,y:c+3,size:7,font:l.Lexend_700,color:S(0,0,0)});let r="";b?.hbls.map((s,g)=>{r+=(g>0?"  |  ":"")+s?.hbl}),h.drawText(x(r),{x:45,y:c-3,size:5,font:l.Lexend_700,color:S(0,0,0)}),N+=b?.pricePP*b?.totalWeight,V=c-18}),h.drawText("Guia: "+x(e?.guia),{x:17,y:L-22,size:12,font:l.Lexend_700,color:S(0,0,0)}),h.drawText("Fecha: "+x(e?.date),{x:19,y:L-35,size:10,font:l.Lexend_700,color:S(0,0,0)})});{const f=await i.save();return De(f)}};var ze=C("<h5>"),Ie=C("<div style=padding:4px>"),Fe=C('<div class="centerBx bottombx "><h5 class="">is SSG'),Re=C('<div class="_dsplFlx hdr_bar purple"><div class="tr_bar tr_bar_5 align_itm centerBx"><div class="icon align_itm"></div></div><div class="tr_bar tr_bar_20 align_itm left_alg bottombx"><h5> / <!> Seleccionado(s)</h5></div><div class="tr_bar tr_bar_70"></div><div><div class="icon align_itm"></div></div><div><div class="icon align_itm">'),je=C('<div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div><div style=padding:4px></div></div><div>'),qe=C("<div> <!>."),Ve=C("<div> ");const We=M(()=>A(()=>import("./LoadingColorSpinner-lv9B8UIv.js"),__vite__mapDeps([0,1,2,3]))),ue=M(()=>A(()=>import("./DropDwnSearch-D-9IJwvw.js"),__vite__mapDeps([4,1,2,5,6,7,8]))),Ge=M(()=>A(()=>import("./CheckBoxSlide-CTG827Q_.js"),__vite__mapDeps([9,1,2,10]))),Qe=M(()=>A(()=>import("./InputHr-DwmVjVaU.js"),__vite__mapDeps([11,1,2,12]))),ee=M(()=>A(()=>import("./SVG-3xaf9-9Q.js"),__vite__mapDeps([6,1,2,7]))),Ye=M(()=>A(()=>import("./ItemOnManifestList-BhyizNMR.js"),__vite__mapDeps([13,1,2,14,7,5,15,16,17,18,19,20]))),[F,Q]=R({list:{}}),[nt,ot]=ge("");function ct(){const[a,n]=be(),[e,i]=R({search:""}),[l,v]=R(),[u,k]=R(),f=pe(),[O,h]=R(),[L,V]=ge(""),b=Oe(V,400),B=(r,s)=>{i({[r]:s}),b(de())};me(()=>{Q("list",void 0)}),fe(()=>{}),he(async()=>{let r=[];[33,46,40,41,42,50,52,54,56].map(_=>{let p=_,y=ce("M023009")?.whStList?.[p];X?.roles?.[y?.id]?.isActive&&r.push(y)}),h("list",r);let g=[];if(ce("M023009")?.provincias.map(_=>{let p=_.label;X?.roles?.[p]?.isActive&&g.push(_)}),h("prov",g),a?.mId){let _={id:a?.mId},p=await Ue(_);i("province",p?.province),i("city",p?.city),i("manifestObj",p),k("linked",p?.linkedBags)}});const[c,{refetch:Y}]=ve(L,async r=>{let s=e?.manifest?.id,g=e?.province,_=g&&e?.city,p=e?.warehouse?.id,y=g&&e?.isSSG,P=[];if(s){const D=await Ne(e.search,s,g,_,p,y);v("bags",D),$(D).map(E=>{let t=D[E],m=t.currentStatus;X?.roles?.[m]?.isActive&&m.split("_")?.[1]>=33&&P.push(t)})}return P}),N=(r,s)=>{i({[r]:s}),b(de()),Q("list",void 0),setTimeout(()=>{Q("list",{})},670)},W=()=>{let r={},s=0;$(F?.list)?.length!==c()?.length?(s=1,c().map(g=>{let _=g.ssg_track_key;r[_]=s})):c().map(g=>{let _=g.ssg_track_key;r[_]=void 0}),Q("list",r)},H=async()=>{let r={...u?.linked};$(F?.list).map(s=>{r?.[s]||(r[s]={idairguide:"all"})}),k("linked",r),await He({id:a?.mId},{linkedBags:r}),f("/manifest",{replace:!0})},G=()=>{let r=[];$(F?.list).map(s=>{l?.bags?.[s]&&r.push(l?.bags?.[s])}),K(r)},K=async r=>{let s=await Te(r,!0,{guia:r[0]?.idairnumber,date:Ae()});window.open(s)};return(()=>{var r=je(),s=r.firstChild,g=s.firstChild,_=g.firstChild,p=_.nextSibling,y=s.nextSibling,P=y.firstChild,D=P.nextSibling,E=y.nextSibling;return o(_,()=>e?.manifestObj?.name),o(g,d(I,{get when(){return e?.manifestObj?.city},get children(){return["|",(()=>{var t=ze();return o(t,()=>e?.manifestObj?.city),t})()]}}),p),o(p,()=>e?.manifestObj?.province),o(P,d(ue,{get list(){return Xe()},lbl_empty:"Guia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.manifest?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>N("manifest",t),width:"260px"})),o(D,d(ue,{get list(){return O?.list},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.warehouse?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>B("warehouse",t),width:"260px"})),o(y,d(I,{get when(){return e?.manifest?.id},get children(){var t=Ie();return o(t,d(Qe,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:m=>B("search",m)})),t}}),null),o(y,d(I,{get when(){return xe()},get children(){var t=Fe(),m=t.firstChild;return o(t,d(Ge,{get initValue(){return e?.isSSG},updChange:w=>B("isSSG",w?1:null),color:"var(--background-red-ssg)"}),m),t}}),null),o(E,d(I,{get when(){return ke(()=>!!e?.manifest?.id)()&&c().length>0},get children(){var t=Re(),m=t.firstChild,w=m.firstChild,T=m.nextSibling,U=T.firstChild,te=U.firstChild,re=te.nextSibling;re.nextSibling;var _e=T.nextSibling,J=_e.nextSibling,ie=J.firstChild,ae=J.nextSibling,se=ae.firstChild;return t.style.setProperty("margin","18px 0"),w.$$click=W,o(w,d(ee,{get name(){return $(F?.list)?.length<c()?.length?"minus-circle-outline":"check_circle_outline"},color:"var(--background-red-ssg)"})),o(U,()=>$(F?.list)?.length,te),o(U,()=>c()?.length,re),ie.$$click=H,o(ie,d(ee,{name:"link",color:"var(--background-red-ssg)"})),se.$$click=G,o(se,d(ee,{name:"printer",color:"var(--background-red-ssg)"})),oe(z=>{var le=` ${Z()?"tr_bar_15":"tr_bar_05"} tr_bar  align_itm centerBx"`,ne=` ${Z()?"tr_bar_10":"tr_bar_05"} tr_bar  align_itm centerBx"`;return le!==z.e&&(J.className=z.e=le),ne!==z.t&&(ae.className=z.t=ne),z},{e:void 0,t:void 0}),t}}),null),o(E,d($e,{fallback:t=>(()=>{var m=qe(),w=m.firstChild,T=w.nextSibling;return T.nextSibling,o(m,()=>t.toString(),T),m})(),get children(){return d(we,{get fallback(){return(()=>{var t=Ve();return t.firstChild,o(t,d(We,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return d(I,{get when(){return c()},get children(){return d(Se,{get each(){return c()},children:t=>d(Ye,{item:t,get isAlready(){return u?.linked?.[t.ssg_track_key]}})})}})}})}}),null),oe(t=>Ce(E,` ${Z(),"width:86vw;"} margin: 0 auto;`,t)),r})()}const Ne=async(a,n,e,i,l,v)=>{let u={params:{idairguide:"all",":guia":n,":store":l}};a&&a.split(" ").map((f,O)=>{f&&(u.params[":search"+O]=f.trim())}),e&&(u.params[":estate"]=e),i&&(u.params[":city"]=i),v&&(u.params[":isSSG"]=v);let k=j(802001);if(u={...u,...k},n&&(l||v)){const f=await q(u);return f?.error?{}:f}else return{}},He=async(a,n)=>{let e={params:a,data2update:n},i=j(709002);e={...e,...i};const l=await q(e),v=$(n?.linkedBags).map(async(u,k)=>{await Ke({ssg_track_key:u,idairguide:"all"},{currentManifestKey:a?.ssg_manifest_key})});return await Promise.all(v),l},Ke=async(a,n)=>{let e={params:a,data2update:n},i=j(809004);return e={...e,...i},await q(e)},Ue=async a=>{let n={params:a},e=j(703003);return n={...n,...e},await q(n)},dt=async a=>{let n=[];a.map(e=>{let i={params:{id:e?.ssg_track_key,idairguide:"all"}},l=j(802002);i={...i,...l},n.push(i)}),Me(n,Je)},Je=async a=>{const e=await q(a);if(e)return e},Xe=()=>[{id:"35",label:"35"},{id:"36",label:"36"},{id:"37",label:"37"},{id:"38",label:"38"},{id:"39",label:"39"},{id:"40",label:"40"},{id:"41",label:"41"},{id:"42",label:"42"}];ye(["click"]);export{ct as default,Je as fetchCSVInve,dt as loadManifest,nt as manifestObs,F as selectedManifest,ot as setManifestObs,Q as setSelectedManifest,He as updLinkedBags};
