import{r as c}from"./index--_JNbh3-.js";import{f as r,d as l,b as p}from"./Util-BwLP_5oJ.js";import{i as m}from"./browser-image-compression-BVJ4p9S0.js";const d=()=>"YABABYSSolution",y=()=>"https://qvamarkets.s3.us-east-2.amazonaws.com/V2_images/7258/";let u={webp:"image/webp",jpg:"image/jpg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",ts:"video/MP2T",m3u8:"application/x-mpegURL",mp4:"video/MP4",m4a:"audio/MP4",webm:"video/webm",weba:"audio/webm",m4s:"text/plain",txt:"text/plain",srt:"text/plain",vtt:"text/plain",js:"application/javascript; charset=UTF-8",css:"text/css; charset=utf-8",mpd:"video/vnd.mpeg.dash.mpd",aac:"audio/aac",mp3:"audio/mpeg",wav:"audio/wav",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",pdf:"application/pdf","7z":"application/x-7z-compressed",zip:"application/zip",xml:"application/xml",json:"application/json",html:"text/html; charset=UTF-8"};const g=n=>n&&n.split(".").pop().toLowerCase(),f=n=>{let e=g(n);return u[e]},w=async(n,e)=>{let a=await(await fetch(n)).blob();return e&&(a=a.slice(0,a.size,e)),URL.createObjectURL(a)},x=async n=>{let e={query:"getSignedUrl",params:{fileName:n}};var t;return c()?t=await r(e):t=(await l(e))?.data,t?.url?t:null},U=async n=>{let e=f(n);console.log(n);var t=await x(n);console.log(t);var a=await w(t?.url,e);return console.log(t?.url),a},j=async(n,e)=>{let t=e||{maxSizeMB:1,maxWidthOrHeight:1920};try{return await m(n,t)}catch(a){return a}},L=n=>new Promise(function(e,t){let a=new Image;a.addEventListener("load",function(){e(a)}),a.src=URL.createObjectURL(n)}).then(function(e){return new Promise(function(t,a){let o=document.createElement("canvas"),i=o.getContext("2d");o.width=e.width,o.height=e.height,i.drawImage(e,0,0),o.toBlob(function(s){t(URL.createObjectURL(s))},"image/webp")})}).then(function(e){return new Promise(function(t,a){let o=new Image;o.addEventListener("load",function(){t({imageURL:e,scaledImg:o})}),o.setAttribute("src",e)})}).then(function(e){return new Promise(function(t,a){t(e.imageURL)})}),I=async(n,e,t)=>{let a={params:{userId:d(),fileName:e,mimeType:n,public:t}},o=p(933001);a={...a,...o};const s=await r(a);return s&&!s.error?s.uploadURL:null},P=async(n,e)=>(await fetch(n,{method:"PUT",headers:{"Content-Type":e.type},body:e}))?.status===200?!0:null;export{d as a,I as b,j as c,y as g,L as i,U as l,P as u};
