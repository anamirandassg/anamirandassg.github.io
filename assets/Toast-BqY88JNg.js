import{a as d,i as m,d as c,F as b,e as _,A as g,f as C,w as x,h as B,t as v}from"./index-ulQ-TQRi.js";var O=v("<div>"),k=v('<div class=TtBase_Toast><div><div class=text></div><div class=actions><button class="md-button md-ink-ripple"type=button>OK');const[A,E]=d(""),[u,f]=d([]),F=()=>(()=>{var t=O();return m(t,c(b,{get each(){return u()},children:(a,s)=>c(y,{item:a})})),t})(),y=t=>{let a=t?.colorBtn?{color:t?.colorBtn}:{};return(()=>{var s=k(),i=s.firstChild,o=i.firstChild,h=o.nextSibling,l=h.firstChild;return m(o,()=>t?.item.text),l.$$click=()=>T(t?.id),_(e=>{var n=t?.item?.id,r=`active toast  ${t?.item?.theme?t.item.theme:""} `,$=a;return n!==e.e&&g(s,"id",e.e=n),r!==e.t&&C(i,e.t=r),e.a=x(l,$,e.a),e},{e:void 0,t:void 0,a:void 0}),s})()},L=t=>{f([...u(),t]),setTimeout(()=>{T(t.id)},t.timeout||3e3)},T=t=>{f(a=>a.filter((s,i)=>s.id!==t))};B(["click"]);export{T as CloseToast,L as OpenToast,F as default,f as setToastList,E as setToastObs,u as toastList,A as toastObs};
