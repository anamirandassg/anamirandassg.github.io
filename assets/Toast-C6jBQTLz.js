import{a as b,c as C,i as l,d,e as _,t as m,F as x,f as B,n as O,g as S,s as k}from"./index-Ce-I5KUz.js";import{g as u}from"./Util-DErZaF9J.js";import"./index-Ci0zXM0r.js";var y=m("<div>"),E=m('<div class=TtBase_Toast><div><div class=text></div><div class=actions><button class="md-button md-ink-ripple"type=button>OK');const[F,v]=b(""),[f,h]=C([]),H=()=>(()=>{var t=y();return l(t,()=>F()?" ":"",null),l(t,d(x,{get each(){return f?.toasts},children:(e,s)=>d(I,{item:e})}),null),t})(),I=t=>{let e=t?.colorBtn?{color:t?.colorBtn}:{};return(()=>{var s=E(),i=s.firstChild,o=i.firstChild,g=o.nextSibling,n=g.firstChild;return l(o,()=>t?.item.text),n.$$click=()=>T(t?.id),B(a=>{var r=t?.item?.id,c=`active toast  ${t?.item?.theme?t.item.theme:""} `,$=e;return r!==a.e&&O(s,"id",a.e=r),c!==a.t&&S(i,a.t=c),a.a=k(n,$,a.a),a},{e:void 0,t:void 0,a:void 0}),s})()},K=t=>{let e=[];f.map(s=>{e.push(s)}),e.push(t),h("toasts",e),v(u()),setTimeout(()=>{T(t.id)},t.timeout||3e3)},T=t=>{let e=[],s=null;e.map(i=>{s=i.id=t}),e.splice(s,1),h("toasts",e),v(u())};_(["click"]);export{T as CloseToast,K as OpenToast,H as default,h as setToastList,v as setToastObs,f as toastList,F as toastObs};
