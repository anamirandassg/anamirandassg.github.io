import{K as c,L as v,N as f,O as h,P as m,j as C,Q as l,R as g,t as d}from"./index-B8K3ByHh.js";var L=d("<a>");function _(t){t=c({inactiveClass:"inactive",activeClass:"active"},t);const[,i]=v(t,["href","state","class","activeClass","inactiveClass","end"]),n=f(()=>t.href),o=h(n),u=m(),r=C(()=>{const e=n();if(e===void 0)return[!1,!1];const a=l(e.split(/[?#]/,1)[0]).toLowerCase(),s=l(u.pathname).toLowerCase();return[t.end?a===s:s.startsWith(a+"/")||s===a,a===s]});return(()=>{var e=L();return g(e,c(i,{get href(){return o()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return{...t.class&&{[t.class]:!0},[t.inactiveClass]:!r()[0],[t.activeClass]:r()[0],...i.classList}},link:"",get"aria-current"(){return r()[1]?"page":void 0}}),!1),e})()}export{_ as A};
