const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BN-hRex2.js","assets/index-BVr2E-gh.js","assets/index-DGSEMnLR.css","assets/SVG-DkQy7UMp.js","assets/index-Ci0zXM0r.js","assets/ShowQR-Bdpgrqqm.js","assets/globalSignal-DRtGCXio.js","assets/ShowQRPrintLabel-DU-PtRrt.js","assets/fontkit.es-DEjOtITv.js","assets/qrcode-C5vWJp7P.js","assets/InitPrintServices-BI_Od3nu.js","assets/Util-dbxHFpkD.js","assets/Toast-B1WewHIY.js","assets/Toast-DLpFKn-Q.css","assets/ButonUploadHrm-DTw-6-p-.js","assets/ButonHrm-BSeWNUGQ.css","assets/ButonHrm-DA640hhc.js","assets/DropDwnSearch-C528omKg.js","assets/debounces-CUBfdAXL.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as n,_ as c,a as v,u as D,C as L,m as O,d as o,e as R,i as u,S as y,D as U,f as h,n as V,s as k,t as m,j as q}from"./index-BVr2E-gh.js";import{f as S,g as f,l as Y,O as F}from"./Util-dbxHFpkD.js";/* empty css                             */import{t as b}from"./manifestList-CSHEgbpJ.js";import"./index-Ci0zXM0r.js";var M=m('<div class="elastic_view_bx show"><div class=" spaceAround centerBx"><div>|</div>'),j=m("<div><img alt=sf>"),z=m('<div class="elastic_view_bx show centerBx"><div style="margin:15px 0"class=" spaceAround centerBx"></div><div class="errorBx centerBx mxW375 "><div class="icon_status centerBx"></div><p class=" centerBx">Click para completar la entrega si la imagen esta clara y con calidad'),H=m("<div>");n(()=>c(()=>import("./FlexSpace-BN-hRex2.js"),__vite__mapDeps([0,1,2])));const K=n(()=>c(()=>import("./SVG-DkQy7UMp.js"),__vite__mapDeps([3,1,2,4])));n(()=>c(()=>import("./ShowQR-Bdpgrqqm.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13])));const E=n(()=>c(()=>import("./ButonUploadHrm-DTw-6-p-.js"),__vite__mapDeps([14,1,2,3,4,11,15]))),G=n(()=>c(()=>import("./ButonHrm-DA640hhc.js"),__vite__mapDeps([16,1,2,3,4,11,15])));n(()=>c(()=>import("./DropDwnSearch-C528omKg.js"),__vite__mapDeps([17,1,2,18,3,4,19])));function ae(a){const[t,i]=v(null),[d,s]=v(!1),[I,Q]=D(),A=L();O(()=>{});const $=async(e,r)=>{let l=await W(e.type,r);if(await J(l,e)){let _={deliveryProof:w()+"/"+r,currentStatus:"YABA_99",deliveryUserId:q?.profile?.userId,wasDelivery:"OK",deliveryTime:Y()};const P=F(a?.list).map(async g=>{let T={ssg_track_key:g,idairguide:a?.list[g]?.idairguide};await N(T,_)});await Promise.all(P),A(`/delivery-detail?dId=${I?.dId}`,{replace:!0})}},x=async()=>{s(!1),console.log(a?.item);let e=a?.cid+"/"+f()+f()+"."+t()?.name.split(".").pop();console.log(e),$(t().file,e)},B=e=>{i(e),s(!0)},C=()=>{i(null),s(!1)};return[o(y,{get when(){return!d()||!t()?.source},get children(){var e=M(),r=e.firstChild,l=r.firstChild;return u(r,o(E,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Subir Imagen",handleClick:B}),l),u(r,o(E,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"progress-upload",label:"Subir Imagen mas tarde",handleClick:()=>{}}),null),e}}),o(y,{get when(){return U(()=>!!d())()&&t()?.source},get children(){return[(()=>{var e=j(),r=e.firstChild;return h(()=>V(r,"src",t()?.source)),e})(),(()=>{var e=z(),r=e.firstChild,l=r.nextSibling,p=l.firstChild;return u(r,o(G,{color:"#fa9514",icon:"reload",label:"Tomar imagen nuevamente",handleClick:C})),l.$$click=x,u(p,o(K,{name:"success",size:32,get color(){return b?.success?.svg}})),h(_=>k(l,b?.success,_)),e})(),H()]}})]}const N=async(a,t)=>await S({params:a,query:"updateLogisticYabaExpress",data2update:t}),w=()=>"YABABYSSolution",W=async(a,t)=>{let i={query:"SignedUrlUpload",params:{userId:w(),fileName:t,mimeType:a}};const s=await S(i);return s&&!s.error?s.uploadURL:null},J=async(a,t)=>(await fetch(a,{method:"PUT",headers:{"Content-Type":t.type},body:t}))?.status===200?!0:null;R(["click"]);export{ae as default,W as getSignedUploadUrlAsync,J as uploadSignedUrlBlob};