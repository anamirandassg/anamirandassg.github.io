const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Cx6_GSZO.js","assets/index-DJKl8WNG.js","assets/index-lCkr9jrN.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-D6jn4hjo.js","assets/debounces-C3lNOb7L.js","assets/SVG-C47CCLgn.js","assets/DropDwnSearch-DMkLkRPc.css","assets/CheckBoxSlide-OsiQbuk4.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-CDuA0DWu.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifestList-JvNksU0-.js","assets/DialogHRM-DFKWnIeT.js","assets/DialogHRM-V9_lZntj.css","assets/PDFButton-ViT1fFng.js","assets/fontkit.es-C36kLZ2K.js"])))=>i.map(i=>d[i]);
import{l as M,_ as A,c as R,a as ge,u as be,a8 as he,r as pe,k as me,s as fe,b as ve,i as o,d,S as z,E as ye,m as xe,O as $,e as oe,g as X,H as ke,F as we,G as Se,w as $e,p as j,q,I as Ce,h as Me,t as C,j as ce,o as de,K as Z,y as Ae}from"./index-DJKl8WNG.js";import{u as Oe}from"./debounces-C3lNOb7L.js";import{P as Le,r as S}from"./PDFButton-ViT1fFng.js";import{f as Be}from"./fontkit.es-C36kLZ2K.js";import{i as Pe,t as x,b as De}from"./InitPrintServices-CjeaunaM.js";const Ee=(a,n,e)=>{const i=n.widthOfTextAtSize(a,40),l=n.widthOfTextAtSize(a,10);return Math.floor(e/((i-l)/30))},Ie=async(a,n,e)=>{const i=await Le.create();i.registerFontkit(Be);const l=await Pe(i);let v=265,u=30,k=Math.ceil(a.length/u);Array.from(Array(k).keys()).map(m=>{let O=a.slice(m*u,(m+1)*u);const f=i.addPage(),{height:L}=f.getSize();let V=L-74;O.map((b,B)=>{let c=V;B%2&&f?.drawRectangle({x:10,y:c-15,width:580,height:24,color:S(.7,.7,.7)});let Y=Ee(x(b?.state),l.roboto_bold,v),N=0;Y>42&&(Y=42,c=c-6);let W=b?.bagnumber;const H=l.Lexend_700.widthOfTextAtSize(x(W),5);f.drawText(x(W),{x:575-H,y:c-3,size:5,font:l.Lexend_700,color:S(0,0,0)});let G=b?.consigneeInfo?.ybcity+" | "+b?.consigneeInfo?.ybestate;const K=l.Lexend_700.widthOfTextAtSize(x(G),7);b?.cidentity&&f.drawText(x(b?.cidentity),{x:25,y:c+3,size:7,font:l.Lexend_700,color:S(0,0,0)}),b?.consigneeInfo?.ybestate&&f.drawText(x(G),{x:575-K,y:c+3,size:7,font:l.Lexend_700,color:S(0,0,0)});let r="";b?.hbls.map((s,g)=>{r+=(g>0?"  |  ":"")+s?.hbl}),f.drawText(x(r),{x:45,y:c-3,size:5,font:l.Lexend_700,color:S(0,0,0)}),N+=b?.pricePP*b?.totalWeight,V=c-18}),f.drawText("Guia: "+x(e?.guia),{x:17,y:L-22,size:12,font:l.Lexend_700,color:S(0,0,0)}),f.drawText("Fecha: "+x(e?.date),{x:19,y:L-35,size:10,font:l.Lexend_700,color:S(0,0,0)})});{const m=await i.save();return De(m)}};var Te=C("<h5>"),ze=C("<div style=padding:4px>"),Fe=C('<div class="centerBx bottombx "><h5 class="">is SSG'),Re=C('<div class="_dsplFlx hdr_bar purple"><div class="tr_bar tr_bar_5 align_itm centerBx"><div class="icon align_itm"></div></div><div class="tr_bar tr_bar_20 align_itm left_alg bottombx"><h5> / <!> Seleccionado(s)</h5></div><div class="tr_bar tr_bar_70"></div><div><div class="icon align_itm"></div></div><div><div class="icon align_itm">'),je=C('<div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div><div style=padding:4px></div></div><div>'),qe=C("<div> <!>."),Ve=C("<div> ");const We=M(()=>A(()=>import("./LoadingColorSpinner-Cx6_GSZO.js"),__vite__mapDeps([0,1,2,3]))),ue=M(()=>A(()=>import("./DropDwnSearch-D6jn4hjo.js"),__vite__mapDeps([4,1,2,5,6,7]))),Ge=M(()=>A(()=>import("./CheckBoxSlide-OsiQbuk4.js"),__vite__mapDeps([8,1,2,9]))),Qe=M(()=>A(()=>import("./InputHr-CDuA0DWu.js"),__vite__mapDeps([10,1,2,11]))),ee=M(()=>A(()=>import("./SVG-C47CCLgn.js"),__vite__mapDeps([6,1,2]))),Ye=M(()=>A(()=>import("./ItemOnManifestList-JvNksU0-.js"),__vite__mapDeps([12,1,2,5,13,14,15,16]))),[F,Q]=R({list:{}}),[at,st]=ge("");function lt(){const[a,n]=be(),[e,i]=R({search:""}),[l,v]=R(),[u,k]=R(),m=he(),[O,f]=R(),[L,V]=ge(""),b=Oe(V,400),B=(r,s)=>{i({[r]:s}),b(ce())};pe(()=>{Q("list",void 0)}),me(()=>{}),fe(async()=>{let r=[];[33,46,40,41,42,50,52,54,56].map(_=>{let h=_,y=de("M023009")?.whStList?.[h];Z?.roles?.[y?.id]?.isActive&&r.push(y)}),f("list",r);let g=[];if(de("M023009")?.provincias.map(_=>{let h=_.label;Z?.roles?.[h]?.isActive&&g.push(_)}),f("prov",g),a?.mId){let _={id:a?.mId},h=await Ue(_);i("province",h?.province),i("city",h?.city),i("manifestObj",h),k("linked",h?.linkedBags)}});const[c,{refetch:Y}]=ve(L,async r=>{let s=e?.manifest?.id,g=e?.province,_=g&&e?.city,h=e?.warehouse?.id,y=g&&e?.isSSG,P=[];if(s){const D=await Ne(e.search,s,g,_,h,y);v("bags",D),$(D).map(E=>{let t=D[E],p=t.currentStatus;Z?.roles?.[p]?.isActive&&p.split("_")?.[1]>=33&&P.push(t)})}return P}),N=(r,s)=>{i({[r]:s}),b(ce()),Q("list",void 0),setTimeout(()=>{Q("list",{})},670)},W=()=>{let r={},s=0;$(F?.list)?.length!==c()?.length?(s=1,c().map(g=>{let _=g.ssg_track_key;r[_]=s})):c().map(g=>{let _=g.ssg_track_key;r[_]=void 0}),Q("list",r)},H=async()=>{let r={...u?.linked};$(F?.list).map(s=>{r?.[s]||(r[s]={idairguide:"all"})}),k("linked",r),await He({id:a?.mId},{linkedBags:r}),m("/manifest",{replace:!0})},G=()=>{let r=[];$(F?.list).map(s=>{l?.bags?.[s]&&r.push(l?.bags?.[s])}),K(r)},K=async r=>{let s=await Ie(r,!0,{guia:r[0]?.idairnumber,date:Ae()});window.open(s)};return(()=>{var r=je(),s=r.firstChild,g=s.firstChild,_=g.firstChild,h=_.nextSibling,y=s.nextSibling,P=y.firstChild,D=P.nextSibling,E=y.nextSibling;return o(_,()=>e?.manifestObj?.name),o(g,d(z,{get when(){return e?.manifestObj?.city},get children(){return["|",(()=>{var t=Te();return o(t,()=>e?.manifestObj?.city),t})()]}}),h),o(h,()=>e?.manifestObj?.province),o(P,d(ue,{get list(){return Xe()},lbl_empty:"Guia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.manifest?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>N("manifest",t),width:"260px"})),o(D,d(ue,{get list(){return O?.list},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.warehouse?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:t=>B("warehouse",t),width:"260px"})),o(y,d(z,{get when(){return e?.manifest?.id},get children(){var t=ze();return o(t,d(Qe,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:p=>B("search",p)})),t}}),null),o(y,d(z,{get when(){return ye()},get children(){var t=Fe(),p=t.firstChild;return o(t,d(Ge,{get initValue(){return e?.isSSG},updChange:w=>B("isSSG",w?1:null),color:"var(--background-red-ssg)"}),p),t}}),null),o(E,d(z,{get when(){return xe(()=>!!e?.manifest?.id)()&&c().length>0},get children(){var t=Re(),p=t.firstChild,w=p.firstChild,I=p.nextSibling,U=I.firstChild,te=U.firstChild,re=te.nextSibling;re.nextSibling;var _e=I.nextSibling,J=_e.nextSibling,ie=J.firstChild,ae=J.nextSibling,se=ae.firstChild;return t.style.setProperty("margin","18px 0"),w.$$click=W,o(w,d(ee,{get name(){return $(F?.list)?.length<c()?.length?"minus-circle-outline":"check_circle_outline"},color:"var(--background-red-ssg)"})),o(U,()=>$(F?.list)?.length,te),o(U,()=>c()?.length,re),ie.$$click=H,o(ie,d(ee,{name:"link",color:"var(--background-red-ssg)"})),se.$$click=G,o(se,d(ee,{name:"printer",color:"var(--background-red-ssg)"})),oe(T=>{var le=` ${X()?"tr_bar_15":"tr_bar_05"} tr_bar  align_itm centerBx"`,ne=` ${X()?"tr_bar_10":"tr_bar_05"} tr_bar  align_itm centerBx"`;return le!==T.e&&(J.className=T.e=le),ne!==T.t&&(ae.className=T.t=ne),T},{e:void 0,t:void 0}),t}}),null),o(E,d(Se,{fallback:t=>(()=>{var p=qe(),w=p.firstChild,I=w.nextSibling;return I.nextSibling,o(p,()=>t.toString(),I),p})(),get children(){return d(ke,{get fallback(){return(()=>{var t=Ve();return t.firstChild,o(t,d(We,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return d(z,{get when(){return c()},get children(){return d(we,{get each(){return c()},children:t=>d(Ye,{item:t,get isAlready(){return u?.linked?.[t.ssg_track_key]}})})}})}})}}),null),oe(t=>$e(E,` ${X(),"width:86vw;"} margin: 0 auto;`,t)),r})()}const Ne=async(a,n,e,i,l,v)=>{let u={params:{idairguide:"all",":guia":n,":store":l}};a&&a.split(" ").map((m,O)=>{m&&(u.params[":search"+O]=m.trim())}),e&&(u.params[":estate"]=e),i&&(u.params[":city"]=i),v&&(u.params[":isSSG"]=v);let k=j(802001);if(u={...u,...k},n&&(l||v)){const m=await q(u);return m?.error?{}:m}else return{}},He=async(a,n)=>{let e={params:a,data2update:n},i=j(709002);e={...e,...i};const l=await q(e),v=$(n?.linkedBags).map(async(u,k)=>{await Ke({ssg_track_key:u,idairguide:"all"},{currentManifestKey:a?.ssg_manifest_key})});return await Promise.all(v),l},Ke=async(a,n)=>{let e={params:a,data2update:n},i=j(809004);return e={...e,...i},await q(e)},Ue=async a=>{let n={params:a},e=j(703003);return n={...n,...e},await q(n)},nt=async a=>{let n=[];a.map(e=>{let i={params:{id:e?.ssg_track_key,idairguide:"all"}},l=j(802002);i={...i,...l},n.push(i)}),Ce(n,Je)},Je=async a=>{const e=await q(a);if(e)return e},Xe=()=>[{id:"35",label:"35"},{id:"36",label:"36"},{id:"37",label:"37"},{id:"38",label:"38"},{id:"39",label:"39"},{id:"40",label:"40"},{id:"41",label:"41"},{id:"42",label:"42"}];Me(["click"]);export{lt as default,Je as fetchCSVInve,nt as loadManifest,at as manifestObs,F as selectedManifest,st as setManifestObs,Q as setSelectedManifest,He as updLinkedBags};
