import{OpenToast as n}from"./Toast-C66aE0jK.js";import{j as C,z as q}from"./index-CKlS2mqf.js";import{g as p}from"./globalSignal-BjtWwNy3.js";import{g as o,f as g}from"./Util-dbxHFpkD.js";let b="No se encontro ningun registro o el codigo es incorrecto",y=[380,500,380],u=[300,80,300,80,300,80,300];const A=e=>{e=e.split("'").join("-");let a=e.split("/");e.split("-").length>3&&(a=e.split("-").join);let t=a?.[0],r="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(r);let i=t.length===13&&s.test(t),c="^[0-9]{4}-[1-9]{4}";const m=new RegExp(c);let d=t.length===9&&m.test(t),v=a.length>4&&t.length===12,I="^Y24[0-9]{6}";const f=new RegExp(I);let w=t.length===9&&f.test(t),x="^[0-9]";const k=new RegExp(x);let E=t.length>6&&t.length<11&&k.test(t);if(i||v||d){let l={idairguide:a?.[0],":search0":a?.[1],":search1":a?.[3]};return i&&(l={idairguide:"175-2383"+t.slice(3,7),":search0":t}),d&&(l={idairguide:"175-2383"+t.slice(0,4),":search0":t}),{params:l,code:1}}else if(E||w)return{txt:t,code:1}},G=async(e,a)=>{let t=A(e),r={timeStamp:new Date().getTime(),latitude:p?.latitude,longitude:p?.longitude,statusId:a,userId:C?.profile?.userId};return t.params?await H(t.params,r):t.txt?await L(t.txt,r):(navigator.vibrate(u),{error:{alert:"error",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto"}}}})},H=async(e,a)=>{let t=await R(e),r=Object.keys(t)?.[0];if(t[r]?.cidentity){let s=h(t[r],a);return navigator.vibrate(500),s}n({text:b,timeout:2500,theme:"red",id:o()}),navigator.vibrate(u)},L=async(e,a)=>{let t=await D(e);if(t?.cidentity){let r=await h(t,a);return navigator.vibrate(500),r}n({text:b,timeout:2500,theme:"red",id:o()}),navigator.vibrate(u)},h=async(e,a)=>{let t=e?.statusHistory||[];if(t.push(a),q?.roles?.[e?.consigneeInfo?.ybestate]?.isActive)if(e?.currentStatus!==a.statusId){let r={statusHistory:t,currentStatus:a.statusId},s={ssg_track_key:e.ssg_track_key,idairguide:e.idairguide},i=await N(s,r),c={tracking:e?.tracking,idairguide:e.idairguide,city:e?.consigneeInfo?.ybcity,estate:e.estate};return{data:{...i,...c}}}else{let r={consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate}};return n({text:"FUE ESCANEADO EN "+e?.consigneeInfo?.ybestate,timeout:3500,theme:"orange",id:o()}),navigator.vibrate(y),{error:{alert:"warning",scanData:r}}}else{let r={consigneeInfo:{ybestate:"Zona incorrecta"}};return n({text:"ZONA INCORRECTA",timeout:3500,theme:"orange",id:o()}),navigator.vibrate(y),{error:{alert:"warning",scanData:r}}}},N=async(e,a)=>await g({params:e,query:"updateLogisticYabaExpress",data2update:a}),R=async e=>await g({params:e,query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2",fldsQry:["idairguide","currentStatus","ssg_track_key","statusHistory","tracking","estate","city","cidentity","consigneeInfo:ybestate","consigneeInfo:ybcity"]}),D=async e=>await g({params:{id:e},query:"getHblsIndex"});export{G as h};
