import{OpenToast as n}from"./Toast-BxAIWph8.js";import{j as S,z as E}from"./index-BxhEPllP.js";import{g as d}from"./globalSignal-BsEDA4Ln.js";import{g as o,f as g}from"./Util-dbxHFpkD.js";let p="No se encontro ningun registro o el codigo es incorrecto";const C=e=>{e=e.split("'").join("-");let a=e.split("/");e.split("-").length>3&&(a=e.split("-").join);let t=a?.[0],r="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(r);let i=t.length===13&&s.test(t),c="^[0-9]{4}-[1-9]{4}";const b=new RegExp(c);let u=t.length===9&&b.test(t),h=a.length>4&&t.length===12,m="^Y24[0-9]{6}";const I=new RegExp(m);let v=t.length===9&&I.test(t),f="^[0-9]";const w=new RegExp(f);let x=t.length>6&&t.length<11&&w.test(t);if(i||h||u){let l={idairguide:a?.[0],":search0":a?.[1],":search1":a?.[3]};return i&&(l={idairguide:"175-2383"+t.slice(3,7),":search0":t}),u&&(l={idairguide:"175-2383"+t.slice(0,4),":search0":t}),{params:l,code:1}}else if(x||v)return{txt:t,code:1}},O=async(e,a)=>{let t=C(e),r={timeStamp:new Date().getTime(),latitude:d?.latitude,longitude:d?.longitude,statusId:a,userId:S?.profile?.userId};return t.params?await q(t.params,r):t.txt?await A(t.txt,r):(navigator.vibrate([300,30,500,30,300]),{error:{alert:"error",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto"}}}})},q=async(e,a)=>{let t=await L(e),r=Object.keys(t)?.[0];if(t[r]?.cidentity){let s=y(t[r],a);return navigator.vibrate(500),s}n({text:p,timeout:2500,theme:"red",id:o()}),navigator.vibrate([200,30,200,30,200])},A=async(e,a)=>{let t=await N(e);if(t?.cidentity){let r=await y(t,a);return navigator.vibrate(500),r}n({text:p,timeout:2500,theme:"red",id:o()}),navigator.vibrate([200,30,200,30,200])},y=async(e,a)=>{let t=e?.statusHistory||[];if(t.push(a),E?.roles?.[e?.consigneeInfo?.ybestate]?.isActive)if(e?.currentStatus!==a.statusId){let r={statusHistory:t,currentStatus:a.statusId},s={ssg_track_key:e.ssg_track_key,idairguide:e.idairguide},i=await H(s,r),c={tracking:e?.tracking,idairguide:e.idairguide,city:e?.consigneeInfo?.ybcity,estate:e.estate};return{data:{...i,...c}}}else{let r={consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate}};return n({text:"FUE ESCANEADO EN "+e?.consigneeInfo?.ybestate,timeout:3500,theme:"orange",id:o()}),navigator.vibrate([300,30,500]),{error:{alert:"warning",scanData:r}}}else{let r={consigneeInfo:{ybestate:"Zona incorrecta"}};return n({text:"ZONA INCORRECTA",timeout:3500,theme:"orange",id:o()}),navigator.vibrate([300,30,500]),{error:{alert:"warning",scanData:r}}}},H=async(e,a)=>await g({params:e,query:"updateLogisticYabaExpress",data2update:a}),L=async e=>await g({params:e,query:"getScanLogisticYabaExpress",queryString:"!* contain :search0 AND !* contain :search1 AND !* contain :search2",fldsQry:["idairguide","currentStatus","ssg_track_key","statusHistory","tracking","estate","city","cidentity","consigneeInfo:ybestate","consigneeInfo:ybcity"]}),N=async e=>await g({params:{id:e},query:"getHblsIndex"});export{O as h};
