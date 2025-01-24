const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BGCtSUd4.js","assets/index-DmDoySfr.js","assets/index-BRlA1Q7g.css","assets/Util-BOZFT72w.js"])))=>i.map(i=>d[i]);
import{l as j,_ as H,a as o,c as J,b as K,n as U,a7 as Z,a1 as G,i as h,e as C,S as Q,f as Y,m as $,s as V,h as p,t as S}from"./index-DmDoySfr.js";var ee=S("<div class=visibility_passW>"),te=S('<div><div class="aCsJod oJeWuf"><div class="aXBtI Wic03c"><div class=Xb9hP><input class="whsOnd zHQkBf"autocomplete=false dir=ltr><div>');const ae=j(()=>H(()=>import("./SVG-BGCtSUd4.js"),__vite__mapDeps([0,1,2,3]))),se=t=>{const[s,I]=o(""),[v,le]=o(""),[r,g]=o(!1),[c,w]=J({isValid:{v:!0}});o(null);const[u,_]=o(!1),E=()=>c?.isValid?.m?c?.isValid?.m:t?.placeholder?t?.placeholder:"label",k=()=>{g(!0)},N=()=>{console.log("handleBlur"),g(!1)},L=e=>{const{validations:a,placeholder:f}=t;var i={v:!0,m:""};a&&(e?(a.minLength&&e.toString().length<a.minLength&&(i={v:!1,m:`Minimum ${a.minLength} characters required`}),a.maxLength&&e.toString().length>a.maxLength&&(i={v:!1,m:`Maximum characters are ${a.maxLength}`}),a.email&&(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||(i={v:!1,m:"email not valid"})),a.ssn&&(/^[\dX]{3}-?[\dX]{2}-?[\dX]{4}$/.test(e)||(i={v:!1,m:"ssn not valid"})),a.cid&&(/^[\dX]{2}?[0-1]{1}?[\dX]{1}?[0-3]{1}?[\dX]{1}?[\dX]{5}$/.test(e)||(i={v:!1,m:"carnet not valid"})),a.phone&&(isNaN(e)?i={v:!1,m:"phone not valid"}:(e=parseInt(e.toString()),/^[\dX]{3}-?[\dX]{3}-?[\dX]{4}$/.test(e)||(i={v:!1,m:"phone not valid"}))),a.cubaphone&&(isNaN(e)?i={v:!1,m:"phone not valid"}:(e=parseInt(e.toString()),/^(?:535[0-9]{7})$/.test(e)||(i={v:!1,m:"Invalid cuban phone format"}))),a.date&&(/^(\d{2})(\/)(\d{2})(\/)(\d{4})$/.test(e)||(i={v:!1,m:"date not valid"})),a.ip&&(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)||(i={v:!1,m:"invalid IP address"})),a.number&&(isNaN(e)?i={v:!1,m:"number not valid"}:(e=parseFloat(e.toString()),a.minValue&&e<a.minValue&&(i={v:!1,m:`value must be at least ${a.minValue}`}),a.maxValue&&e>a.maxValue&&(i={v:!1,m:"value greater than maximum allowed"}))),a.uppercase&&(e=e.toString().toUpperCase()),a.lowercase&&(e=e.toString().toLowerCase()),a.card&&(ie.test(e)||(i={v:!1,m:"card not valid"}))):a.required&&(i={v:!1,m:`${f} requerido`})),w("isValid",i),typeof t.OnChange=="function"&&t.OnChange(e)};K(e=>{L(t?.value)});const d=()=>!c?.isValid?.v,X=()=>s().length,A=()=>r()||X()?!0:!!d(),B=()=>t?.validations?.number?"number":t?.validations?.email?"email":t?.validations?.password&&!u?"password":"text",D=()=>r()?{}:{value:t?.initValue?t?.initValue:v()?v():""},P=()=>{var e={color:d()?"firebrick":r()?t?.borderActiveColor?t?.borderActiveColor:"#1a38e8":"#80868b"};return t?.background&&(e.background=t?.background),e},O=e=>{t?.handleClick(e),I(e)},F=e=>{e.keyCode===13&&typeof t?.onEnter=="function"&&t?.onEnter(s()),e.keyCode===27&&typeof t?.onEscape=="function"&&t?.onEscape(s()),e.keyCode===9&&typeof t?.onTab=="function"&&t?.onTab(s())},T=()=>s()?.length===0,z=()=>` N3Hzgf rFrNMe jjwyfe ${r()?"u3bW4e":""} ${T()?"CDELXb":""} ${d()?"INVALID":""}`,M=()=>`${A()?"labelActive":""}`,W=()=>({border:d()?"2px solid firebrick":r()?"2px solid "+t?.color?t?.color:"#1a38e8":"1px solid #dadce0","--txtInput--width":t?.width,"--txtInput--color":t?.colors,"--txtInput--backColor":t?.backColor,"--txtInput--border-color":t?.borderColor,"--txtInput--aborder-color":t?.borderActiveColor});return(()=>{var e=te(),a=e.firstChild,f=a.firstChild,i=f.firstChild,n=i.firstChild,m=n.nextSibling,b=t?.ref;return typeof b=="function"&&U(b,n),Z(n,G({get type(){return B()},get tabIndex(){return t?.index}},D,{get name(){return t?.name},get style(){return t?.width?{width:t?.width}:{}},onFocus:l=>k(),onBlur:l=>N(),onKeyDown:F,get value(){return t?.value},onInput:l=>O(l.currentTarget.value)}),!1),h(m,E),h(i,C(Q,{get when(){return t?.validations?.password},get children(){var l=ee();return l.$$click=()=>_(!u()),h(l,C(ae,{get name(){return u()?"visibility_off_outline":"visibility_on_outline"}})),l}}),null),Y(l=>{var x=z(),q=W(),y=`AxOyFc snByac ${M()}`,R=P();return x!==l.e&&$(e,l.e=x),l.t=V(f,q,l.t),y!==l.a&&$(m,l.a=y),l.o=V(m,R,l.o),l},{e:void 0,t:void 0,a:void 0,o:void 0}),e})()};var ie=/^(?:9[0-9]{15})$/;p(["click"]);export{se as default};
