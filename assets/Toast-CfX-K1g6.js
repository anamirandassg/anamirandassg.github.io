import{a as d,i as m,e as c,F as b,f as _,k as g,m as C,s as k,h as x,t as v}from"./index-CjD_SJv6.js";import"./Util-CJwQ4eI5.js";var B=v("<div>"),O=v('<div class=TtBase_Toast><div><div class=text></div><div class=actions><button class="md-button md-ink-ripple"type=button>OK');const[F,L]=d(""),[u,f]=d([]),R=()=>(()=>{var t=B();return m(t,c(b,{get each(){return u()},children:(a,s)=>c(y,{item:a})})),t})(),y=t=>{let a=t?.colorBtn?{color:t?.colorBtn}:{};return(()=>{var s=O(),i=s.firstChild,o=i.firstChild,h=o.nextSibling,l=h.firstChild;return m(o,()=>t?.item.text),l.$$click=()=>T(t?.id),_(e=>{var n=t?.item?.id,r=`active toast  ${t?.item?.theme?t.item.theme:""} `,$=a;return n!==e.e&&g(s,"id",e.e=n),r!==e.t&&C(i,e.t=r),e.a=k(l,$,e.a),e},{e:void 0,t:void 0,a:void 0}),s})()},A=t=>{f([...u(),t]),setTimeout(()=>{T(t.id)},t.timeout||3e3)},T=t=>{f(a=>a.filter((s,i)=>s.id!==t))};x(["click"]);export{T as CloseToast,A as OpenToast,R as default,f as setToastList,L as setToastObs,u as toastList,F as toastObs};
