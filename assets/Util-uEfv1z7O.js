import{C as c}from"./index-Ci0zXM0r.js";const d=()=>"https://qvamarkets.com/";function j(){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz",e=16,r="",n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}const u={},J=(t,e)=>{u[t]=e},y=t=>t?u[t]:u;function O(t){try{return JSON.parse(t),!0}catch{return!1}}function M(t){var e=[];return t&&Object.keys(t).map(r=>{e.push(t[r])}),e}const B=async(t,e,r)=>{for(let n of t.map((a,o)=>()=>e(a,o,t,r)))await n()},I=async t=>{let e="",r=d()+"gql_api",n={method:"post",headers:{"Content-Type":"application/json",Authorization:`${e}`},body:JSON.stringify(t)};try{return(await fetch(r,n)).json()}catch{return null}};function f(t,e){try{var r=c.enc.Base64.parse(e),n=null;return n=c.AES.encrypt(t,r,{mode:c.mode.ECB,padding:c.pad.Pkcs7}),n.ciphertext.toString(c.enc.Base64)}catch{return null}}function m(t,e){var r=c.enc.Base64.parse(e),n=c.AES.decrypt(t,r,{mode:c.mode.ECB,padding:c.pad.Pkcs7});return n.toString(c.enc.Utf8)}function w(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));return e?e[2]:null}const T=t=>d()+"gql_api/getStatic?fileName="+t,q=async t=>{const e=JSON.stringify(t);var r={};let n=y("sectionKey");var a=j();let o=f(a,n),i=f(e,a);const s={};s.d=i,s.k=o;var v=JSON.stringify(s),g=w(x());const b=d()+"gql_v9";if(i){var S=await(await fetch(b,{method:"post",headers:{"Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json",Authorization:`${g}`},body:v})).json();const{data:l}=S;if(l&&l.d){let k=m(l.k,n),p=m(l.d,k);O(p)&&(r=JSON.parse(p))}return r}};function _(t){var e=[];if(t)try{e=Object.keys(t)}catch{for(var r in t)e.push(r)}return e}const A=()=>"querys_callback",x=()=>"ssg_logistic_tkn";function F(t){var e=t?new Date(t):new Date;let r=e.getMonth()+1,n=e.getDate();return`${r>9?r:"0"+r}/${n>9?n:"0"+n}/${e.getFullYear()}`}function $(t){var e=new Date(t);let r=e.getHours(),n=e.getMinutes(),a=e.getSeconds();return`${r>9?r:"0"+r}:${n>9?n:"0"+n}:${a>9?a:"0"+a}`}function H(){return new Date().getTime()}function P(t,e,r){var n=0,a=window.setInterval(function(){t(),++n===r&&window.clearInterval(a)},e)}const U=(t,e,r)=>{let n=0,a={};return t.map(o=>{h(e?.[o],r?.[o])||(n=1,a[o]=e[o])}),{hasChange:n,data:a}},h=(t,e)=>Object.prototype.toString.call(t)===Object.prototype.toString.call(e)?Object.prototype.toString.call(t)==="[object Object]"||Object.prototype.toString.call(t)==="[object Array]"?Object.keys(t).length!==Object.keys(e).length?!1:Object.keys(t).every(function(r){return h(t[r],e[r])}):t===e:!1,K=(t,e,r=!0)=>t&&t.sort((a,o)=>{let i=a[e],s=o[e];return i<s?r?-1:1:i>s?r?1:-1:0}),Y={error:{"--err-bx-color":"var(--background-red-ssg)","--err-bx-bgcolor":"var(--background-red35-ssg)",svg:"var(--err-bx-color)",icon:"alert"},success:{"--err-bx-color":"var(--hrm-palette-tertiary60)","--err-bx-bgcolor":"var(--hrm-palette-tertiary90)",svg:"var(--err-bx-color)",icon:"success"},warning:{"--err-bx-color":"#FF6F1D","--err-bx-bgcolor":"#ffdb99",svg:"var(--err-bx-color)",icon:"info"}},z=(t,e)=>{const r=(i,s)=>s===null?"":s,n=Object.keys(e[0]);let a=e.map(i=>n.map(s=>JSON.stringify(i[s],r)).join(","));a.unshift(n.join(",")),a=a.join(`\r
`);var o=document.createElement("a");o.setAttribute("href","data:text/csv;charset=utf-8,%EF%BB%BF"+encodeURIComponent(a)),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)},L=t=>({...y(A())})[t],Q=()=>{if(!window.DATAMatrix){let t=null;t=setInterval(()=>{window.DATAMatrix?t&&clearInterval(t):C("https://qvamarkets.com/gql_api/getStatic?fileName=datamatrix.min.js")},1600)}},C=t=>{const e=document.createElement("script");e.src=t,e.refer,e.async,document.head.appendChild(e)};export{_ as O,y as a,L as b,$ as c,I as d,B as e,q as f,j as g,z as h,K as i,Q as j,m as k,C as l,x as m,T as n,w as o,F as p,A as q,M as r,P as s,Y as t,J as u,h as v,U as w,H as x};
