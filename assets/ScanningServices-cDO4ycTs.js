import{OpenToast as o}from"./Toast-8yH8rEbJ.js";import{k as S,r as H}from"./index-BJDLapRD.js";import{g as y}from"./globalSignal-DDaoVMvq.js";import{g as l,b as u,f as d}from"./Util-uEfv1z7O.js";let b="No se encontro ningun registro o el codigo es incorrecto",R=[400,300,400,300,400],c=[300,80,300,80,300,80,300];const A=e=>{e=e.split("'").join("-");let r=e.split("/");e.split("-").length>3&&(r=e.split("-").join);let t=r?.[0];t.indexOf("2300")===0&&(t="2300"+(t.split("2300")?.[1]).slice(0,5));let a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(a);let i=t.length===13&&s.test(t),g="^[0-9]{4}-[1-9]{4}";const h=new RegExp(g);let p=t.length===9&&h.test(t),v=r.length>4&&t.length===12,I="^Y24[0-9]{6}";const f=new RegExp(I);let k=t.length===9&&f.test(t),w="^[0-9]";const x=new RegExp(w);let C=t.length>6&&t.length<11&&x.test(t);if(i||v||p){let n={idairguide:r?.[0],":search0":r?.[1],":search1":r?.[3]};return i&&(n={idairguide:"175-2383"+t.slice(3,7),":search0":t}),p&&(n={idairguide:"175-2383"+t.slice(0,4),":search0":t}),{params:n,code:1}}else if(C||k)return{txt:t,code:1}},j=async(e,r)=>{let t=A(e),a={timeStamp:new Date().getTime(),latitude:y?.latitude,longitude:y?.longitude,statusId:r,userId:S?.profile?.userId};return t?.params?await L(t.params,a):t?.txt?await q(t.txt,a):(navigator.vibrate(c),{error:{alert:"error",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto"}}}})},L=async(e,r)=>{let t=await O(e),a=Object.keys(t)?.[0];if(t[a]?.cidentity){let s=m(t[a],r);return navigator.vibrate(500),s}o({text:b,timeout:2500,theme:"red",id:l()}),navigator.vibrate(c)},q=async(e,r)=>{let t=await _(e);if(t?.cidentity){let a=await m(t,r);return navigator.vibrate(500),a}o({text:b,timeout:2500,theme:"red",id:l()}),navigator.vibrate(c)},m=async(e,r)=>{let t=e?.statusHistory||[];if(t.push(r),H?.roles?.[e?.consigneeInfo?.ybestate]?.isActive)if(e?.currentStatus!==r.statusId){let a={statusHistory:t,currentStatus:r.statusId},s={ssg_track_key:e.ssg_track_key,idairguide:e.idairguide},i=await N(s,a),g={tracking:e?.tracking,idairguide:e.idairguide,city:e?.consigneeInfo?.ybcity,estate:e.estate};return{data:{...i,...g}}}else{let a={consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate}};return o({text:"FUE ESCANEADO EN "+e?.consigneeInfo?.ybestate,timeout:3500,theme:"orange",id:l()}),navigator.vibrate(R),{error:{alert:"warning",scanData:a}}}else{let a={consigneeInfo:{ybestate:"Zona incorrecta"}};return o({text:"ZONA INCORRECTA",timeout:3500,theme:"orange",id:l()}),navigator.vibrate(c),{error:{alert:"warning",scanData:a}}}},N=async(e,r)=>{let t={params:e,data2update:r},a=u(809004);return t={...t,...a},await d(t)},O=async e=>{let r={params:e,fldsQry:["idairguide","currentStatus","ssg_track_key","statusHistory","tracking","estate","city","cidentity","consigneeInfo:ybestate","consigneeInfo:ybcity"]},t=u(802001);return r={...r,...t},await d(r)},_=async e=>{let r={params:{id:e}},t=u(803001);return r={...r,...t},await d(r)};export{j as h};
