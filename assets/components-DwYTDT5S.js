import{a0 as c,a1 as v,a2 as f,a3 as h,a4 as m,q as C,a5 as l,a6 as g,t as d}from"./index-BBUjU3Og.js";var L=d("<a>");function _(t){t=c({inactiveClass:"inactive",activeClass:"active"},t);const[,i]=v(t,["href","state","class","activeClass","inactiveClass","end"]),n=f(()=>t.href),o=h(n),u=m(),r=C(()=>{const a=n();if(a===void 0)return[!1,!1];const e=l(a.split(/[?#]/,1)[0]).toLowerCase(),s=l(u.pathname).toLowerCase();return[t.end?e===s:s.startsWith(e+"/")||s===e,e===s]});return(()=>{var a=L();return g(a,c(i,{get href(){return o()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return{...t.class&&{[t.class]:!0},[t.inactiveClass]:!r()[0],[t.activeClass]:r()[0],...i.classList}},link:"",get"aria-current"(){return r()[1]?"page":void 0}}),!1),a})()}export{_ as A};
