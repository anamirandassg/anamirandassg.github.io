import{C as c}from"./index-Ci0zXM0r.js";const p=()=>"https://qvamarkets.com/";function O(){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz",e=16,r="",n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}const u={},J=(t,e)=>{u[t]=e},h=t=>t?u[t]:u;function j(t){try{return JSON.parse(t),!0}catch{return!1}}function B(t){var e=[];return t&&Object.keys(t).map(r=>{e.push(t[r])}),e}const E=async(t,e,r)=>{for(let n of t.map((o,a)=>()=>e(o,a,t,r)))await n()},I=async t=>{let e="",r=p()+"gql_api",n={method:"post",headers:{"Content-Type":"application/json",Authorization:`${e}`},body:JSON.stringify(t)};try{return(await fetch(r,n)).json()}catch(o){return console.log(o),null}};function y(t,e){try{var r=c.enc.Base64.parse(e),n=null;return n=c.AES.encrypt(t,r,{mode:c.mode.ECB,padding:c.pad.Pkcs7}),n.ciphertext.toString(c.enc.Base64)}catch{return null}}function f(t,e){var r=c.enc.Base64.parse(e),n=c.AES.decrypt(t,r,{mode:c.mode.ECB,padding:c.pad.Pkcs7});return n.toString(c.enc.Utf8)}function w(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));return e?e[2]:null}const M=t=>p()+"gql_api/getStatic?fileName="+t,T=async t=>{const e=JSON.stringify(t);var r={};let n=h("sectionKey");var o=O();let a=y(o,n),i=y(e,o);const s={};s.d=i,s.k=a;var g=JSON.stringify(s),v=w(C());const b=p()+"gql_v9";if(i){var S=await(await fetch(b,{method:"post",headers:{"Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json",Authorization:`${v}`},body:g})).json();const{data:l}=S;if(l&&l.d){let k=f(l.k,n),d=f(l.d,k);j(d)&&(r=JSON.parse(d))}return r}};function _(t){var e=[];if(t)try{e=Object.keys(t)}catch{for(var r in t)e.push(r)}return e}const A=()=>"querys_callback",C=()=>"ssg_logistic_tkn";function q(t){var e=t?new Date(t):new Date;let r=e.getMonth()+1,n=e.getDate();return`${r>9?r:"0"+r}/${n>9?n:"0"+n}/${e.getFullYear()}`}function F(t){var e=new Date(t);let r=e.getHours(),n=e.getMinutes(),o=e.getSeconds();return`${r>9?r:"0"+r}:${n>9?n:"0"+n}:${o>9?o:"0"+o}`}function $(){return new Date().getTime()}function H(t,e,r){var n=0,o=window.setInterval(function(){t(),++n===r&&window.clearInterval(o)},e)}const P=(t,e,r)=>{let n=0,o={};return t.map(a=>{m(e?.[a],r?.[a])||(n=1,o[a]=e[a])}),{hasChange:n,data:o}},m=(t,e)=>Object.prototype.toString.call(t)===Object.prototype.toString.call(e)?Object.prototype.toString.call(t)==="[object Object]"||Object.prototype.toString.call(t)==="[object Array]"?Object.keys(t).length!==Object.keys(e).length?!1:Object.keys(t).every(function(r){return m(t[r],e[r])}):t===e:!1,U=(t,e,r=!0)=>t&&t.sort((o,a)=>{let i=o[e],s=a[e];return i<s?r?-1:1:i>s?r?1:-1:0}),K={error:{"--err-bx-color":"var(--background-red-ssg)","--err-bx-bgcolor":"var(--background-red35-ssg)",svg:"var(--err-bx-color)",icon:"alert"},success:{"--err-bx-color":"var(--hrm-palette-tertiary60)","--err-bx-bgcolor":"var(--hrm-palette-tertiary90)",svg:"var(--err-bx-color)",icon:"success"},warning:{"--err-bx-color":"#FF6F1D","--err-bx-bgcolor":"#ffdb99",svg:"var(--err-bx-color)",icon:"info"}},Y=(t,e)=>{const r=(i,s)=>s===null?"":s,n=Object.keys(e[0]);let o=e.map(i=>n.map(s=>JSON.stringify(i[s],r)).join(","));o.unshift(n.join(",")),o=o.join(`\r
`);var a=document.createElement("a");a.setAttribute("href","data:text/csv;charset=utf-8,%EF%BB%BF"+encodeURIComponent(o)),a.setAttribute("download",t),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a)},z=t=>({...h(A())})[t];export{_ as O,h as a,z as b,I as c,E as d,Y as e,T as f,O as g,U as h,f as i,C as j,M as k,w as l,B as m,F as n,m as o,q as p,A as q,P as r,H as s,K as t,J as u,$ as v};