import{a as d,i as m,d as c,e as h,t as v,F as g,f as _,n as C,g as x,s as B}from"./index-CGT10uUT.js";import"./index-Ci0zXM0r.js";var O=v("<div>"),k=v('<div class=TtBase_Toast><div><div class=text></div><div class=actions><button class="md-button md-ink-ripple"type=button>OK');const[F,L]=d(""),[u,f]=d([]),R=()=>(()=>{var t=O();return m(t,c(g,{get each(){return u()},children:(a,s)=>c(y,{item:a})})),t})(),y=t=>{let a=t?.colorBtn?{color:t?.colorBtn}:{};return(()=>{var s=k(),i=s.firstChild,o=i.firstChild,$=o.nextSibling,l=$.firstChild;return m(o,()=>t?.item.text),l.$$click=()=>T(t?.id),_(e=>{var n=t?.item?.id,r=`active toast  ${t?.item?.theme?t.item.theme:""} `,b=a;return n!==e.e&&C(s,"id",e.e=n),r!==e.t&&x(i,e.t=r),e.a=B(l,b,e.a),e},{e:void 0,t:void 0,a:void 0}),s})()},A=t=>{f([...u(),t]),setTimeout(()=>{T(t.id)},t.timeout||3e3)},T=t=>{f(a=>a.filter((s,i)=>s.id!==t))};h(["click"]);export{T as CloseToast,A as OpenToast,R as default,f as setToastList,L as setToastObs,u as toastList,F as toastObs};
