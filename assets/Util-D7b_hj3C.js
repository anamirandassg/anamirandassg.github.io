import{C as s}from"./index-Ci0zXM0r.js";function S(){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz",e=16,r="",n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}const u={},C=(t,e)=>{u[t]=e},O=t=>t?u[t]:u;function k(t){try{return JSON.parse(t),!0}catch{return!1}}function J(t){var e=[];return t&&Object.keys(t).map(r=>{e.push(t[r])}),e}const q=async(t,e,r)=>{for(let n of t.map((a,c)=>()=>e(a,c,t,r)))await n()},E=async t=>{let e="",r="https://qvamarkets.com/gql_api",n={method:"post",headers:{"Content-Type":"application/json",Authorization:`${e}`},body:JSON.stringify(t)};try{return(await fetch(r,n)).json()}catch(a){return console.log(a),null}};function f(t,e){try{var r=s.enc.Base64.parse(e),n=null;return n=s.AES.encrypt(t,r,{mode:s.mode.ECB,padding:s.pad.Pkcs7}),n.ciphertext.toString(s.enc.Base64)}catch{return null}}function y(t,e){var r=s.enc.Base64.parse(e),n=s.AES.decrypt(t,r,{mode:s.mode.ECB,padding:s.pad.Pkcs7});return n.toString(s.enc.Utf8)}function b(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));return e?e[2]:null}const M=t=>"https://qvamarkets.com/gql_api/getStatic?fileName="+t,T=async t=>{const e=JSON.stringify(t);var r={};let n=O("sectionKey");var a=S();let c=f(a,n),i=f(e,a);const o={};o.d=i,o.k=c;var d=JSON.stringify(o),h=b(j());const m="https://qvamarkets.com/gql_v9";if(i){var v=await(await fetch(m,{method:"post",headers:{"Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json",Authorization:`${h}`},body:d})).json();const{data:l}=v;if(l&&l.d){let g=y(l.k,n),p=y(l.d,g);k(p)&&(r=JSON.parse(p))}return r}};function B(t){var e=[];if(t)try{e=Object.keys(t)}catch{for(var r in t)e.push(r)}return e}const I=()=>"querys_callback",j=()=>"ssg_logistic_tkn";function _(t){var e=t?new Date(t):new Date;let r=e.getMonth()+1,n=e.getDate();return`${r>9?r:"0"+r}/${n>9?n:"0"+n}/${e.getFullYear()}`}function $(t){var e=new Date(t);let r=e.getHours(),n=e.getMinutes(),a=e.getSeconds();return`${r>9?r:"0"+r}:${n>9?n:"0"+n}:${a>9?a:"0"+a}`}function H(){return new Date().getTime()}function P(t,e,r){var n=0,a=window.setInterval(function(){t(),++n===r&&window.clearInterval(a)},e)}const w=(t,e)=>Object.prototype.toString.call(t)===Object.prototype.toString.call(e)?Object.prototype.toString.call(t)==="[object Object]"||Object.prototype.toString.call(t)==="[object Array]"?Object.keys(t).length!==Object.keys(e).length?!1:Object.keys(t).every(function(r){return w(t[r],e[r])}):t===e:!1,K=(t,e,r=!0)=>t&&t.sort((a,c)=>{let i=a[e],o=c[e];return i<o?r?-1:1:i>o?r?1:-1:0});export{B as O,O as a,E as b,b as c,y as d,q as e,T as f,S as g,$ as h,J as i,P as j,M as k,w as l,H as m,_ as p,I as q,K as s,j as t,C as u};
