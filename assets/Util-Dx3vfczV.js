import{C as c}from"./index-Ci0zXM0r.js";const f=()=>"https://qvamarkets.com/",w=()=>"https://qvamarkets.com/";function A(){for(var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz",t=16,r="",n=0;n<t;n++)r+=e.charAt(Math.floor(Math.random()*e.length));return r}const I=()=>[{id:"35",label:"35"},{id:"36",label:"36"},{id:"37",label:"37"},{id:"38",label:"38"},{id:"39",label:"39"},{id:"40",label:"40"},{id:"41",label:"41"},{id:"42",label:"42"},{id:"43",label:"43"}],u={},T=(e,t)=>{u[e]=t},h=e=>e?u[e]:u;function x(e){try{return JSON.parse(e),!0}catch{return!1}}function q(e){var t=[];return e&&Object.keys(e).map(r=>{t.push(e[r])}),t}const _=async(e,t,r)=>{for(let n of e.map((a,o)=>()=>t(a,o,e,r)))await n()},F=async(e,t)=>{let r="",n=f()+"gql_api",a={method:"post",headers:{"Content-Type":"application/json",Authorization:`${r}`},body:JSON.stringify(e)};try{return(await fetch(n,a)).json()}catch{return null}};function m(e,t){try{var r=c.enc.Base64.parse(t),n=null;return n=c.AES.encrypt(e,r,{mode:c.mode.ECB,padding:c.pad.Pkcs7}),n.ciphertext.toString(c.enc.Base64)}catch{return null}}function y(e,t){var r=c.enc.Base64.parse(t),n=c.AES.decrypt(e,r,{mode:c.mode.ECB,padding:c.pad.Pkcs7});return n.toString(c.enc.Utf8)}function C(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?t[2]:null}const U=e=>f()+"gql_api/getStatic?fileName="+e,$=async(e,t)=>{const r=JSON.stringify(e);var n={};let a=h("sectionKey");var o=A();let i=m(o,a),s=m(r,o);if(!s)return{};const d={};d.d=s,d.k=i;let v=JSON.stringify(d);var g=C(N()),S=w()+"gql_v9";let k={method:"post",headers:{"Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json",Authorization:`${g}`},body:v};var j=await(await fetch(S,k)).json();const{data:l}=j;if(l&&l.d){let O=y(l.k,a),p=y(l.d,O);x(p)&&(n=JSON.parse(p))}return n};function H(e){var t=[];if(e)try{t=Object.keys(e)}catch{for(var r in e)t.push(r)}return t}const D=()=>"querys_callback",N=()=>"ssg_logistic_tkn";function K(e){var t=e?new Date(e):new Date;let r=t.getMonth()+1,n=t.getDate();return`${r>9?r:"0"+r}/${n>9?n:"0"+n}/${t.getFullYear()}`}function P(e){var t=new Date(e);let r=t.getHours(),n=t.getMinutes(),a=t.getSeconds();return`${r>9?r:"0"+r}:${n>9?n:"0"+n}:${a>9?a:"0"+a}`}function Y(){return new Date().getTime()}function z(e,t,r){var n=0,a=window.setInterval(function(){e(),++n===r&&window.clearInterval(a)},t)}const L=(e,t,r)=>{let n=0,a={};return e.map(o=>{b(t?.[o],r?.[o])||(n=1,a[o]=t[o])}),{hasChange:n,data:a}},b=(e,t)=>Object.prototype.toString.call(e)===Object.prototype.toString.call(t)?Object.prototype.toString.call(e)==="[object Object]"||Object.prototype.toString.call(e)==="[object Array]"?Object.keys(e).length!==Object.keys(t).length?!1:Object.keys(e).every(function(r){return b(e[r],t[r])}):e===t:!1,Q=(e,t,r=!0)=>e&&e.sort((a,o)=>{let i=a[t],s=o[t];return i<s?r?-1:1:i>s?r?1:-1:0}),V={error:{"--err-bx-color":"var(--background-red-ssg)","--err-bx-bgcolor":"var(--background-red35-ssg)",svg:"var(--err-bx-color)",icon:"alert"},success:{"--err-bx-color":"var(--hrm-palette-tertiary60)","--err-bx-bgcolor":"var(--hrm-palette-tertiary90)",svg:"var(--err-bx-color)",icon:"success"},warning:{"--err-bx-color":"#FF6F1D","--err-bx-bgcolor":"#ffdb99",svg:"var(--err-bx-color)",icon:"info"}},R=(e,t)=>{const r=(i,s)=>s===null?"":s,n=Object.keys(t[0]);let a=t.map(i=>n.map(s=>JSON.stringify(i[s],r)).join(","));a.unshift(n.join(",")),a=a.join(`\r
`);var o=document.createElement("a");o.setAttribute("href","data:text/csv;charset=utf-8,%EF%BB%BF"+encodeURIComponent(a)),o.setAttribute("download",e),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)},G=e=>({...h(D())})[e],X=()=>{if(!window.DATAMatrix){let e=null;e=setInterval(()=>{window.DATAMatrix?e&&clearInterval(e):M("https://qvamarkets.com/gql_api/getStatic?fileName=datamatrix.min.js")},1600)}},M=e=>{const t=document.createElement("script");t.src=e,t.refer,t.async,document.head.appendChild(t)};export{H as O,h as a,G as b,P as c,F as d,_ as e,$ as f,A as g,R as h,Q as i,M as j,X as k,I as l,y as m,N as n,U as o,K as p,D as q,C as r,z as s,V as t,T as u,q as v,b as w,L as x,Y as y};
