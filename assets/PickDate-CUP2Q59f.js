const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CalendarPicker-DGwUwPub.js","assets/index-8-XoMm4f.js","assets/index-lCkr9jrN.css","assets/DialogHRM-DBDxQTtL.js","assets/DialogHRM-V9_lZntj.css","assets/CalendarPicker-qn9fiehA.css"])))=>i.map(i=>d[i]);
import{l as s,_ as g,i as l,m as v,aI as d,h as m,t as h,j as _,d as b}from"./index-8-XoMm4f.js";import{OpenModal as k}from"./DialogHRM-DBDxQTtL.js";var p=h('<div class=datePick><div class="_dsplFlx bottombx lowbordr "><h5></h5></div><div class=date2Upd>');const u=s(()=>g(()=>import("./CalendarPicker-DGwUwPub.js"),__vite__mapDeps([0,1,2,3,4,5]))),f=r=>{const i=a=>{r?.updDate(a.initDate+800)},n=()=>{let a=_(),e={};e.id=a,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:850},e.content=b(u,{onConfirm:i,modalId:a,get init(){return r?.init},colors:{"--calendar-primary-color":"var(--background-red-ssg)","--calendar-primary-backcolor":"var(--primary-light)","--calendar-light-backcolor":"rgb(245, 245, 245)","--calendar-primary-hover-backcolor":"var(--background-red-ssg)","--calendar-light-300":"#6c6c6c","--calendar-light-200":"var(--dark-800)","--calendar-light-100":"rgb(245, 245, 245)","--calendar-dark-800":"var(--background-red-ssg)","--calendar-white-100":"var(--light-100)","--calendar-white":"var(--dark-700)","--calendar-selected_lbl_color":"var(--background-red-ssg)"}}),k(e)};return(()=>{var a=p(),e=a.firstChild,c=e.firstChild,t=e.nextSibling;return l(c,()=>r?.label||"Fecha"),t.$$click=n,l(t,(()=>{var o=v(()=>!!r?.init);return()=>o()?d(r?.init):d(new Date().getTime())})()),a})()};m(["click"]);export{f as default};
