import{w as c}from"./index-BSIjyJfa.js";import{f as r,k as p,g as l}from"./Util-7ERmh4Cp.js";import{i as m}from"./browser-image-compression-BVJ4p9S0.js";const d=()=>"YABABYSSolution",y=()=>"https://qvamarkets.s3.us-east-2.amazonaws.com/V2_images/7258/";let u={webp:"image/webp",jpg:"image/jpg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",ts:"video/MP2T",m3u8:"application/x-mpegURL",mp4:"video/MP4",m4a:"audio/MP4",webm:"video/webm",weba:"audio/webm",m4s:"text/plain",txt:"text/plain",srt:"text/plain",vtt:"text/plain",js:"application/javascript; charset=UTF-8",css:"text/css; charset=utf-8",mpd:"video/vnd.mpeg.dash.mpd",aac:"audio/aac",mp3:"audio/mpeg",wav:"audio/wav",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",pdf:"application/pdf","7z":"application/x-7z-compressed",zip:"application/zip",xml:"application/xml",json:"application/json",html:"text/html; charset=UTF-8"};const g=a=>a&&a.split(".").pop().toLowerCase(),f=a=>{let e=g(a);return u[e]},w=async(a,e)=>{let t=await(await fetch(a)).blob();return e&&(t=t.slice(0,t.size,e)),URL.createObjectURL(t)},x=async a=>{let e={query:"getSignedUrl",params:{fileName:a}};var n;return c()?n=await r(e):n=(await p(e))?.data,n?.url?n:null},U=async a=>{let e=f(a);var n=await x(a),t=await w(n?.url,e);return t},j=async(a,e)=>{let n=e||{maxSizeMB:1,maxWidthOrHeight:1920};try{return await m(a,n)}catch(t){return t}},L=a=>new Promise(function(e,n){let t=new Image;t.addEventListener("load",function(){e(t)}),t.src=URL.createObjectURL(a)}).then(function(e){return new Promise(function(n,t){let o=document.createElement("canvas"),i=o.getContext("2d");o.width=e.width,o.height=e.height,i.drawImage(e,0,0),o.toBlob(function(s){n(URL.createObjectURL(s))},"image/webp")})}).then(function(e){return new Promise(function(n,t){let o=new Image;o.addEventListener("load",function(){n({imageURL:e,scaledImg:o})}),o.setAttribute("src",e)})}).then(function(e){return new Promise(function(n,t){n(e.imageURL)})}),I=async(a,e,n)=>{let t={params:{userId:d(),fileName:e,mimeType:a,public:n}},o=l(933001);t={...t,...o};const s=await r(t);return s&&!s.error?s.uploadURL:null},P=async(a,e)=>(await fetch(a,{method:"PUT",headers:{"Content-Type":e.type},body:e}))?.status===200?!0:null;export{d as a,I as b,j as c,y as g,L as i,U as l,P as u};
