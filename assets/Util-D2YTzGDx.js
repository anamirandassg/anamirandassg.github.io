import{C as c}from"./index-Ci0zXM0r.js";const m=()=>"https://qvamarkets.com/",k=()=>"https://qvamarkets.com/";function w(){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz",e=16,r="",n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}function T(){for(var t="0123456789BCDFGKSY",e=9,r="",n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}const J=()=>[{id:"35",label:"35"},{id:"36",label:"36"},{id:"37",label:"37"},{id:"38",label:"38"},{id:"39",label:"39"},{id:"40",label:"40"},{id:"41",label:"41"},{id:"42",label:"42"},{id:"43",label:"43"}],u={},_=(t,e)=>{u[t]=e},v=t=>t?u[t]:u;function C(t){try{return JSON.parse(t),!0}catch{return!1}}function q(t,e){e=e||"id";var r={};return t.length>0?t.map(n=>{r[n[e]]=n}):r=null,r}function F(t){var e=[];return t&&Object.keys(t).map(r=>{e.push(t[r])}),e}const H=async(t,e,r)=>{for(let n of t.map((a,o)=>()=>e(a,o,t,r)))await n()},U=async(t,e)=>{let r="",n=m()+"gql_api",a={method:"post",headers:{"Content-Type":"application/json",Authorization:`${r}`},body:JSON.stringify(t)};try{return(await fetch(n,a)).json()}catch{return null}};function f(t,e){try{var r=c.enc.Base64.parse(e),n=null;return n=c.AES.encrypt(t,r,{mode:c.mode.ECB,padding:c.pad.Pkcs7}),n.ciphertext.toString(c.enc.Base64)}catch{return null}}function h(t,e){var r=c.enc.Base64.parse(e),n=c.AES.decrypt(t,r,{mode:c.mode.ECB,padding:c.pad.Pkcs7});return n.toString(c.enc.Utf8)}function x(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));return e?e[2]:null}const $=t=>m()+"gql_api/getStatic?fileName="+t,K=async(t,e)=>{const r=JSON.stringify(t);var n={};let a=v("sectionKey");var o=w();let i=f(o,a),s=f(r,o);if(!s)return{};const d={};d.d=s,d.k=i;let y=JSON.stringify(d);var g=x(N()),S=k()+"gql_v9";let j={method:"post",headers:{"Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json",Authorization:`${g}`},body:y};var A=await(await fetch(S,j)).json();const{data:l}=A;if(l&&l.d){let O=h(l.k,a),p=h(l.d,O);C(p)&&(n=JSON.parse(p))}return n};function L(t){var e=[];if(t)try{e=Object.keys(t)}catch{for(var r in t)e.push(r)}return e}const D=()=>"querys_callback",N=()=>"ssg_logistic_tkn";function P(t){var e=t?new Date(t):new Date;let r=e.getMonth()+1,n=e.getDate();return`${r>9?r:"0"+r}/${n>9?n:"0"+n}/${e.getFullYear()}`}function Y(t){var e=new Date(t);let r=e.getHours(),n=e.getMinutes(),a=e.getSeconds();return`${r>9?r:"0"+r}:${n>9?n:"0"+n}:${a>9?a:"0"+a}`}function z(){return new Date().getTime()}function Q(t,e,r){var n=0,a=window.setInterval(function(){t(),++n===r&&window.clearInterval(a)},e)}const G=(t,e,r)=>{let n=0,a={};return t.map(o=>{b(e?.[o],r?.[o])||(n=1,a[o]=e[o])}),{hasChange:n,data:a}},b=(t,e)=>Object.prototype.toString.call(t)===Object.prototype.toString.call(e)?Object.prototype.toString.call(t)==="[object Object]"||Object.prototype.toString.call(t)==="[object Array]"?Object.keys(t).length!==Object.keys(e).length?!1:Object.keys(t).every(function(r){return b(t[r],e[r])}):t===e:!1,V=(t,e,r=!0)=>t&&t.sort((a,o)=>{let i=a[e],s=o[e];return i<s?r?-1:1:i>s?r?1:-1:0}),R={error:{"--err-bx-color":"var(--background-red-ssg)","--err-bx-bgcolor":"var(--background-red35-ssg)",svg:"var(--err-bx-color)",icon:"alert"},success:{"--err-bx-color":"var(--hrm-palette-tertiary60)","--err-bx-bgcolor":"var(--hrm-palette-tertiary90)",svg:"var(--err-bx-color)",icon:"success"},warning:{"--err-bx-color":"#FF6F1D","--err-bx-bgcolor":"#ffdb99",svg:"var(--err-bx-color)",icon:"info"}},X=(t,e)=>{const r=(i,s)=>s===null?"":s,n=Object.keys(e[0]);let a=e.map(i=>n.map(s=>JSON.stringify(i[s],r)).join(","));a.unshift(n.join(",")),a=a.join(`\r
`);var o=document.createElement("a");o.setAttribute("href","data:text/csv;charset=utf-8,%EF%BB%BF"+encodeURIComponent(a)),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)},W=t=>({...v(D())})[t],Z=()=>{if(!window.DATAMatrix){let t=null;t=setInterval(()=>{window.DATAMatrix?t&&clearInterval(t):M("https://qvamarkets.com/gql_api/getStatic?fileName=datamatrix.min.js")},1600)}},M=t=>{const e=document.createElement("script");e.src=t,e.refer,e.async,document.head.appendChild(e)};export{T as A,L as O,v as a,W as b,Y as c,U as d,H as e,K as f,w as g,X as h,V as i,q as j,M as k,J as l,Z as m,h as n,N as o,P as p,D as q,x as r,Q as s,R as t,_ as u,$ as v,F as w,b as x,G as y,z};
