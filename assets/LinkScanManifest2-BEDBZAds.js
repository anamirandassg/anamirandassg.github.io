const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-BAAKBS0B.js","assets/index-Cv4YO0m0.js","assets/index-ALtnuvRO.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-jpjKBWYi.js","assets/debounces-CQMmt6Zm.js","assets/SVG-DEKs_P2n.js","assets/Util-Df9CfxGL.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-XyjIoxhM.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-dD_OsbXE.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifestList-Ct5SkXvG.js","assets/DialogHRM-BWVWEPWN.js","assets/DialogHRM-V9_lZntj.css","assets/PDFButton-BDIa4If0.js","assets/fontkit.es-6TA5hJ2T.js"])))=>i.map(i=>d[i]);
import{l as M,_ as A,c as R,a as ge,p as be,L as pe,o as he,k as fe,b as me,j as ve,i as o,d,S as I,w as ye,m as xe,e as oe,f as X,x as ke,F as we,E as Se,q as $e,h as Ce,t as C,y as Z}from"./index-Cv4YO0m0.js";import{O as $,c as j,f as q,j as Me,b as ce,d as de,e as Ae}from"./Util-Df9CfxGL.js";import{u as Le}from"./debounces-CQMmt6Zm.js";import{P as Oe,r as S}from"./PDFButton-BDIa4If0.js";import{f as Be}from"./fontkit.es-6TA5hJ2T.js";import{i as Pe,t as x,b as De}from"./InitPrintServices-BR2Uf5F7.js";const Ee=(a,n,e)=>{const i=n.widthOfTextAtSize(a,40),l=n.widthOfTextAtSize(a,10);return Math.floor(e/((i-l)/30))},Te=async(a,n,e)=>{const i=await Oe.create();i.registerFontkit(Be);const l=await Pe(i);let v=265,u=30,k=Math.ceil(a.length/u);Array.from(Array(k).keys()).map(f=>{let L=a.slice(f*u,(f+1)*u);const m=i.addPage(),{height:O}=m.getSize();let V=O-74;L.map((b,B)=>{let c=V;B%2&&m?.drawRectangle({x:10,y:c-15,width:580,height:24,color:S(.7,.7,.7)});let Y=Ee(x(b?.state),l.roboto_bold,v),N=0;Y>42&&(Y=42,c=c-6);let W=b?.bagnumber;const H=l.Lexend_700.widthOfTextAtSize(x(W),5);m.drawText(x(W),{x:575-H,y:c-3,size:5,font:l.Lexend_700,color:S(0,0,0)});let G=b?.consigneeInfo?.ybcity+" | "+b?.consigneeInfo?.ybestate;const K=l.Lexend_700.widthOfTextAtSize(x(G),7);b?.cidentity&&m.drawText(x(b?.cidentity),{x:25,y:c+3,size:7,font:l.Lexend_700,color:S(0,0,0)}),b?.consigneeInfo?.ybestate&&m.drawText(x(G),{x:575-K,y:c+3,size:7,font:l.Lexend_700,color:S(0,0,0)});let r="";b?.hbls.map((s,g)=>{r+=(g>0?"  |  ":"")+s?.hbl}),m.drawText(x(r),{x:45,y:c-3,size:5,font:l.Lexend_700,color:S(0,0,0)}),N+=b?.pricePP*b?.totalWeight,V=c-18}),m.drawText("Guia: "+x(e?.guia),{x:17,y:O-22,size:12,font:l.Lexend_700,color:S(0,0,0)}),m.drawText("Fecha: "+x(e?.date),{x:19,y:O-35,size:10,font:l.Lexend_700,color:S(0,0,0)})});{const f=await i.save();return De(f)}};var ze=C("<h5>"),Ie=C("<div style=padding:4px>"),Fe=C('<div class="centerBx bottombx "><h5 class="">is SSG'),Re=C('<div class="_dsplFlx hdr_bar purple"><div class="tr_bar tr_bar_5 align_itm centerBx"><div class="icon align_itm"></div></div><div class="tr_bar tr_bar_20 align_itm left_alg bottombx"><h5> / <!> Seleccionado(s)</h5></div><div class="tr_bar tr_bar_70"></div><div><div class="icon align_itm"></div></div><div><div class="icon align_itm">'),je=C('<div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div><div style=padding:4px></div></div><div>'),qe=C("<div> <!>."),Ve=C("<div> ");const We=M(()=>A(()=>import("./LoadingColorSpinner-BAAKBS0B.js"),__vite__mapDeps([0,1,2,3]))),ue=M(()=>A(()=>import("./DropDwnSearch-jpjKBWYi.js"),__vite__mapDeps([4,1,2,5,6,7,8]))),Ge=M(()=>A(()=>import("./CheckBoxSlide-XyjIoxhM.js"),__vite__mapDeps([9,1,2,10]))),Qe=M(()=>A(()=>import("./InputHr-dD_OsbXE.js"),__vite__mapDeps([11,1,2,12]))),ee=M(()=>A(()=>import("./SVG-DEKs_P2n.js"),__vite__mapDeps([6,1,2,7]))),Ye=M(()=>A(()=>import("./ItemOnManifestList-Ct5SkXvG.js"),__vite__mapDeps([13,1,2,7,5,14,15,16,17]))),[F,Q]=R({list:{}}),[st,lt]=ge("");function nt(){const[a,n]=be(),[e,i]=R({search:""}),[l,v]=R(),[u,k]=R(),f=pe(),[L,m]=R(),[O,V]=ge(""),b=Le(V,400),B=(r,s)=>{i({[r]:s}),b(ce())};he(()=>{Q("list",void 0)}),fe(()=>{}),me(async()=>{let r=[];[33,46,40,41,42,50,52,54,56].map(_=>{let p=_,y=de("M023009")?.whStList?.[p];Z?.roles?.[y?.id]?.isActive&&r.push(y)}),m("list",r);let g=[];if(de("M023009")?.provincias.map(_=>{let p=_.label;Z?.roles?.[p]?.isActive&&g.push(_)}),m("prov",g),a?.mId){let _={id:a?.mId},p=await Ue(_);i("province",p?.province),i("city",p?.city),i("manifestObj",p),k("linked",p?.linkedBags)}});const[c,{refetch:Y}]=ve(O,async r=>{let s=e?.manifest?.id,g=e?.province,_=g&&e?.city,p=e?.warehouse?.id,y=g&&e?.isSSG,P=[];if(s){const D=await Ne(e.search,s,g,_,p,y);v("bags",D),$(D).map(E=>{let t=D[E],h=t.currentStatus;Z?.roles?.[h]?.isActive&&h.split("_")?.[1]>=33&&P.push(t)})}return P}),N=(r,s)=>{i({[r]:s}),b(ce()),Q("list",void 0),setTimeout(()=>{Q("list",{})},670)},W=()=>{let r={},s=0;$(F?.list)?.length!==c()?.length?(s=1,c().map(g=>{let _=g.ssg_track_key;r[_]=s})):c().map(g=>{let _=g.ssg_track_key;r[_]=void 0}),Q("list",r)},H=async()=>{let r={...u?.linked};$(F?.list).map(s=>{r?.[s]||(r[s]={idairguide:"all"})}),k("linked",r),await He({id:a?.mId},{linkedBags:r}),f("/manifest",{replace:!0})},G=()=>{let r=[];$(F?.list).map(s=>{l?.bags?.[s]&&r.push(l?.bags?.[s])}),K(r)},K=async r=>{let s=await Te(r,!0,{guia:r[0]?.idairnumber,date:Ae()});window.open(s)};return(()=>{var r=je(),s=r.firstChild,g=s.firstChild,_=g.firstChild,p=_.nextSibling,y=s.nextSibling,P=y.firstChild,D=P.nextSibling,E=y.nextSibling;return o(_,()=>e?.manifestObj?.name),o(g,d(I,{get when(){return e?.manifestObj?.city},get children(){return["|",(()=>{var t=ze();return o(t,()=>e?.manifestObj?.city),t})()]}}),p),o(p,()=>e?.manifestObj?.province),o(P,d(ue,{get list(){return Xe()},lbl_empty:"Guia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.manifest?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>N("manifest",t),width:"260px"})),o(D,d(ue,{get list(){return L?.list},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.warehouse?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>B("warehouse",t),width:"260px"})),o(y,d(I,{get when(){return e?.manifest?.id},get children(){var t=Ie();return o(t,d(Qe,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:h=>B("search",h)})),t}}),null),o(y,d(I,{get when(){return ye()},get children(){var t=Fe(),h=t.firstChild;return o(t,d(Ge,{get initValue(){return e?.isSSG},updChange:w=>B("isSSG",w?1:null),color:"var(--background-red-ssg)"}),h),t}}),null),o(E,d(I,{get when(){return xe(()=>!!e?.manifest?.id)()&&c().length>0},get children(){var t=Re(),h=t.firstChild,w=h.firstChild,T=h.nextSibling,U=T.firstChild,te=U.firstChild,re=te.nextSibling;re.nextSibling;var _e=T.nextSibling,J=_e.nextSibling,ie=J.firstChild,ae=J.nextSibling,se=ae.firstChild;return t.style.setProperty("margin","18px 0"),w.$$click=W,o(w,d(ee,{get name(){return $(F?.list)?.length<c()?.length?"minus-circle-outline":"check_circle_outline"},color:"var(--background-red-ssg)"})),o(U,()=>$(F?.list)?.length,te),o(U,()=>c()?.length,re),ie.$$click=H,o(ie,d(ee,{name:"link",color:"var(--background-red-ssg)"})),se.$$click=G,o(se,d(ee,{name:"printer",color:"var(--background-red-ssg)"})),oe(z=>{var le=` ${X()?"tr_bar_15":"tr_bar_05"} tr_bar  align_itm centerBx"`,ne=` ${X()?"tr_bar_10":"tr_bar_05"} tr_bar  align_itm centerBx"`;return le!==z.e&&(J.className=z.e=le),ne!==z.t&&(ae.className=z.t=ne),z},{e:void 0,t:void 0}),t}}),null),o(E,d(Se,{fallback:t=>(()=>{var h=qe(),w=h.firstChild,T=w.nextSibling;return T.nextSibling,o(h,()=>t.toString(),T),h})(),get children(){return d(ke,{get fallback(){return(()=>{var t=Ve();return t.firstChild,o(t,d(We,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return d(I,{get when(){return c()},get children(){return d(we,{get each(){return c()},children:t=>d(Ye,{item:t,get isAlready(){return u?.linked?.[t.ssg_track_key]}})})}})}})}}),null),oe(t=>$e(E,` ${X(),"width:86vw;"} margin: 0 auto;`,t)),r})()}const Ne=async(a,n,e,i,l,v)=>{let u={params:{idairguide:"all",":guia":n,":store":l}};a&&a.split(" ").map((f,L)=>{f&&(u.params[":search"+L]=f.trim())}),e&&(u.params[":estate"]=e),i&&(u.params[":city"]=i),v&&(u.params[":isSSG"]=v);let k=j(802001);if(u={...u,...k},n&&(l||v)){const f=await q(u);return f?.error?{}:f}else return{}},He=async(a,n)=>{let e={params:a,data2update:n},i=j(709002);e={...e,...i};const l=await q(e),v=$(n?.linkedBags).map(async(u,k)=>{await Ke({ssg_track_key:u,idairguide:"all"},{currentManifestKey:a?.ssg_manifest_key})});return await Promise.all(v),l},Ke=async(a,n)=>{let e={params:a,data2update:n},i=j(809004);return e={...e,...i},await q(e)},Ue=async a=>{let n={params:a},e=j(703003);return n={...n,...e},await q(n)},ot=async a=>{let n=[];a.map(e=>{let i={params:{id:e?.ssg_track_key,idairguide:"all"}},l=j(802002);i={...i,...l},n.push(i)}),Me(n,Je)},Je=async a=>{const e=await q(a);if(e)return e},Xe=()=>[{id:"35",label:"35"},{id:"36",label:"36"},{id:"37",label:"37"},{id:"38",label:"38"},{id:"39",label:"39"},{id:"40",label:"40"},{id:"41",label:"41"},{id:"42",label:"42"}];Ce(["click"]);export{nt as default,Je as fetchCSVInve,ot as loadManifest,st as manifestObs,F as selectedManifest,lt as setManifestObs,Q as setSelectedManifest,He as updLinkedBags};
