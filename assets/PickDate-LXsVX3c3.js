const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CalendarPicker-C0I6dOvD.js","assets/index-Dez0Dxi3.js","assets/index-mNJWtuMT.css","assets/Util-DZlMHKqJ.js","assets/DialogHRM-DDA_FmH0.js","assets/DialogHRM-V9_lZntj.css","assets/CalendarPicker-qn9fiehA.css"])))=>i.map(i=>d[i]);
import{l as s,_ as g,i as l,q as m,d as v,t as h,f as _}from"./index-Dez0Dxi3.js";import{OpenModal as b}from"./DialogHRM-DDA_FmH0.js";import{p as d,a as k}from"./Util-DZlMHKqJ.js";var p=h('<div class=datePick><div class="_dsplFlx bottombx lowbordr "><h5></h5></div><div class=date2Upd>');const u=s(()=>g(()=>import("./CalendarPicker-C0I6dOvD.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),y=e=>{const i=a=>{e?.updDate(a.initDate+800)},n=()=>{let a=k(),r={};r.id=a,r.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:850},r.content=_(u,{onConfirm:i,modalId:a,get init(){return e?.init},colors:{"--calendar-primary-color":"var(--background-red-ssg)","--calendar-primary-backcolor":"var(--primary-light)","--calendar-light-backcolor":"rgb(245, 245, 245)","--calendar-primary-hover-backcolor":"var(--background-red-ssg)","--calendar-light-300":"#6c6c6c","--calendar-light-200":"var(--dark-800)","--calendar-light-100":"rgb(245, 245, 245)","--calendar-dark-800":"var(--background-red-ssg)","--calendar-white-100":"var(--light-100)","--calendar-white":"var(--dark-700)","--calendar-selected_lbl_color":"var(--background-red-ssg)"}}),b(r)};return(()=>{var a=p(),r=a.firstChild,o=r.firstChild,t=r.nextSibling;return l(o,()=>e?.label||"Fecha"),t.$$click=n,l(t,(()=>{var c=m(()=>!!e?.init);return()=>c()?d(e?.init):d(new Date().getTime())})()),a})()};v(["click"]);export{u as CalendarModalPicker,y as default};
