import{S as r}from"./fontkit.es-CfiTgzL_.js";import{O as x,ae as b,R as y,af as T}from"./index-CAL5Ex2l.js";let L={webp:"image/webp",jpg:"image/jpg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",ts:"video/MP2T",m3u8:"application/x-mpegURL",mp4:"video/MP4",m4a:"audio/MP4",webm:"video/webm",weba:"audio/webm",m4s:"text/plain",txt:"text/plain",srt:"text/plain",vtt:"text/plain",js:"application/javascript; charset=UTF-8",css:"text/css; charset=utf-8",mpd:"video/vnd.mpeg.dash.mpd",aac:"audio/aac",mp3:"audio/mpeg",wav:"audio/wav",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",pdf:"application/pdf","7z":"application/x-7z-compressed",zip:"application/zip",xml:"application/xml",json:"application/json",html:"text/html; charset=UTF-8"},_=["ggSans-Italic.ttf","ggSans-Medium.ttf","Roboto-Bold.ttf","Roboto-Regular.ttf","arial_bold.ttf","moms_typewriter3.ttf","JMHTypewriter-Bold.ttf","JMHTypewriter-Black.ttf","JMHTypewriter-Thin.ttf","JMHTypewriter.ttf","L.C.Smith5typewriter.ttf","Harting_plain.ttf","TT2020Base-Regular.ttf","Lexend_300.ttf","Lexend_400.ttf","Lexend_500.ttf","Lexend_600.ttf","Lexend_700.ttf"];const p={GSansItalic:"ggSans-Italic.ttf",GSansBold:"ggSans-Medium.ttf",gSans:"ggSans-Medium.ttf",roboto_bold:"Roboto-Bold.ttf",roboto_regular:"Roboto-Regular.ttf",aria_regurlar:"arial_bold.ttf",moms_typewriter:"moms_typewriter3.ttf",JMHTypewriterBold:"JMHTypewriter-Bold.ttf",JMHTypewriterBlack:"JMHTypewriter-Black.ttf",JMHTypewriterThin:"JMHTypewriter-Thin.ttf",JMHTypewriter:"JMHTypewriter.ttf",LCSmith5:"L.C.Smith5typewriter.ttf",Harting_plain:"Harting_plain.ttf",TT2020BaseRegular:"TT2020Base-Regular.ttf",Lexend_300:"Lexend_300.ttf",Lexend_400:"Lexend_400.ttf",Lexend_500:"Lexend_500.ttf",Lexend_600:"Lexend_600.ttf",Lexend_700:"Lexend_700.ttf"},v=t=>!1,c=t=>t&&t.split(".").pop().toLowerCase(),R=t=>{let e=c(t);return L[e]},h=async(t,e)=>{let a=await(await fetch(t)).blob();return e&&(a=a.slice(0,a.size,e)),URL.createObjectURL(a)},B=async(t,e,i)=>{var a=await h(t,i);return y(e,a),1},M=async(t,e)=>{let i=R(c(t)),a=await B(T(t),t,i);return v()&&e(a),a},s={};function o(t,e){s[t]=e}function m(t){return t?s[t]:s}async function F(t){if(!m("helvetica")){const n=_.map(async l=>{await M(l)});await Promise.all(n)}const e=await t.embedFont(r.Helvetica),i=await t.embedFont(r.HelveticaBold);let a=await t.embedFont(r.TimesRomanBold),d=await t.embedFont(r.TimesRoman);o("helvetica",e),o("helveticaBold",i),o("TimesRomanBold",a),o("TimesRomanItalic",d);const f=x(p).map(async n=>{let l=b(p[n]);const g=await fetch(l).then(u=>u.arrayBuffer()),w=await t.embedFont(g,{subset:!0});o(n,w)});return await Promise.all(f),m()}const U=t=>t?" "+t.toString().trim():"";function J(t){let e=new Blob([t],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(e)}export{J as b,F as i,U as t};
