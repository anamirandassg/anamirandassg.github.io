import{S as n}from"./PDFButton-Bkj4cawg.js";import{O as u,a as b,u as y,r as T}from"./Util-Dlxe-mBA.js";let _={webp:"image/webp",jpg:"image/jpg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",ts:"video/MP2T",m3u8:"application/x-mpegURL",mp4:"video/MP4",m4a:"audio/MP4",webm:"video/webm",weba:"audio/webm",m4s:"text/plain",txt:"text/plain",srt:"text/plain",vtt:"text/plain",js:"application/javascript; charset=UTF-8",css:"text/css; charset=utf-8",mpd:"video/vnd.mpeg.dash.mpd",aac:"audio/aac",mp3:"audio/mpeg",wav:"audio/wav",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",pdf:"application/pdf","7z":"application/x-7z-compressed",zip:"application/zip",xml:"application/xml",json:"application/json",html:"text/html; charset=UTF-8"},S=["ggSans-Italic.ttf","ggSans-Medium.ttf","Roboto-Bold.ttf","Roboto-Regular.ttf","arial_bold.ttf","moms_typewriter3.ttf","JMHTypewriter-Bold.ttf","JMHTypewriter-Black.ttf","JMHTypewriter-Thin.ttf","JMHTypewriter.ttf","L.C.Smith5typewriter.ttf","Harting_plain.ttf","TT2020Base-Regular.ttf","Lexend_300.ttf","Lexend_400.ttf","Lexend_500.ttf","Lexend_600.ttf","Lexend_700.ttf","SSG.png","SSG.webp","SSG-gray.png","SSG-black.png"];const l={GSansItalic:"ggSans-Italic.ttf",GSansBold:"ggSans-Medium.ttf",gSans:"ggSans-Medium.ttf",roboto_bold:"Roboto-Bold.ttf",roboto_regular:"Roboto-Regular.ttf",aria_regurlar:"arial_bold.ttf",moms_typewriter:"moms_typewriter3.ttf",JMHTypewriterBold:"JMHTypewriter-Bold.ttf",JMHTypewriterBlack:"JMHTypewriter-Black.ttf",JMHTypewriterThin:"JMHTypewriter-Thin.ttf",JMHTypewriter:"JMHTypewriter.ttf",LCSmith5:"L.C.Smith5typewriter.ttf",Harting_plain:"Harting_plain.ttf",TT2020BaseRegular:"TT2020Base-Regular.ttf",Lexend_300:"Lexend_300.ttf",Lexend_400:"Lexend_400.ttf",Lexend_500:"Lexend_500.ttf",Lexend_600:"Lexend_600.ttf",Lexend_700:"Lexend_700.ttf"},L=t=>!1,m=t=>t&&t.split(".").pop().toLowerCase(),v=t=>{let e=m(t);return _[e]},h=async(t,e)=>{let a=await(await fetch(t)).blob();return e&&(a=a.slice(0,a.size,e)),URL.createObjectURL(a)},B=async(t,e,i)=>{var a=await h(t,i);return y(e,a),1},R=async(t,e)=>{let i=v(m(t)),a=await B(T(t),t,i);return L()&&e(a),a},r={};function o(t,e){r[t]=e}function p(t){return t?r[t]:r}async function M(){const t=S.map(async e=>{await R(e)});await Promise.all(t)}async function J(t){p("Lexend_700")||await M();const e=await t.embedFont(n.Helvetica),i=await t.embedFont(n.HelveticaBold);let a=await t.embedFont(n.TimesRomanBold),c=await t.embedFont(n.TimesRoman);o("helvetica",e),o("helveticaBold",i),o("TimesRomanBold",a),o("TimesRomanItalic",c);const d=u(l).map(async s=>{let f=b(l[s]);const g=await fetch(f).then(x=>x.arrayBuffer()),w=await t.embedFont(g,{subset:!0});o(s,w)});return await Promise.all(d),p()}const j=t=>t?" "+t.toString().trim():"";export{M as d,J as i,j as t};
