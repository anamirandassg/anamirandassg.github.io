const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-D0ylncmC.js","assets/index-Dg4KpUrp.js","assets/index-DEEWbFNK.css","assets/Util-CKCUAuLU.js"])))=>i.map(i=>d[i]);
import{l as re,_ as ne,a as N,b as oe,i as e,d as r,F as Z,S as O,e as T,s as ae,f as m,g as P,h as de,t as I}from"./index-Dg4KpUrp.js";import{c as ce}from"./ShowQRPrintLabel-Bva8uCdr.js";import be from"./FlexSpace-D1DJRcmd.js";import{O as xe,d as ee}from"./Util-CKCUAuLU.js";import"./PDFButton-DzKPI8bv.js";import"./qrcode-DHy8FFhS.js";import"./fontkit.es-xY8_R9eo.js";import"./InitPrintServices-Cu6eu-iZ.js";import"./Toast-CrH5IJ1w.js";var pe=I('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Resume de Ingresos y Pagos</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div></div><div class="_dsplFlx flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div></div><div class="_dsplFlx flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=""></h5></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><p></p>'),he=I('<div class="centerBx bottombx"><h5 class=""></h5><h4 class="">$</h4>'),ve=I("<img width=48 height=24 class=picture-profile alt=ssg decoding=async>"),ue=I('<div class=itm0hist><div><div class="centerBx bottombx"><p></p><h4></h4></div><div class="centerBx bottombx"><h5></h5><h4></h4><p>');const g=re(()=>ne(()=>import("./SVG-D0ylncmC.js"),__vite__mapDeps([0,1,2,3]))),_e=2.20462;function Fe(M){const[L,te]=N([]),le=t=>{te([...L(),t])};N({});const[n,ie]=N({cost:0,sales:0,lbs:0,bulto:0,gross:0}),se=t=>{ce(t)},V=t=>{let y=0,C=0,F=0,w=0,h=0,z=[],a={},v={};M?.list.map((d,K)=>{let k=0,$=0,f=0;d?.hbls.map((c,E)=>{let i=c?.weight*_e;F+=i;let o=c?.pricePerPound?Number(c?.pricePerPound):0,x=c?.dutyFee?Number(c?.dutyFee):0;o&&!v[o]&&(v[o]=0),v[o]+=i*o,y+=i*o+x,C+=i*3;let S=i*o+x-i*3;h+=S,f+=S,k+=i*o+x,$+=i*3;let u=d?.billedBy||"anonymus";if(!a[u]){let R=ee("M023009")?.usersListSSG?.filter(A=>A.id===u);a[u]={total:0,name:R?.[0]?.label}}a[u].total+=i*o+x}),w+=1,z&&f!==0&&le({bagnumber:d?.bagnumber,total:f,totalC:$,totalS:k,shipper:d?.nameshipper,isSSG:d?.isSSG})}),ie({cost:C,sales:y,lbs:F,bulto:w,gross:h,billedBy:a})};return oe(()=>{V()}),(()=>{var t=pe(),y=t.firstChild,C=y.firstChild,F=C.firstChild,w=F.nextSibling,h=w.firstChild,z=h.nextSibling,a=y.nextSibling,v=a.firstChild,d=v.firstChild,K=d.nextSibling,k=v.nextSibling,$=k.firstChild,f=$.nextSibling,c=a.nextSibling,E=c.firstChild,i=E.firstChild,o=i.nextSibling,x=E.nextSibling,S=x.firstChild,u=S.nextSibling,R=x.nextSibling,A=R.firstChild,W=A.nextSibling;return t.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),h.$$click=()=>se(M?.item?.bagnumber),e(h,()=>M?.item?.bagnumber),z.$$click=V,e(z,r(g,{name:"printer",size:32})),a.style.setProperty("padding","16px"),e(d,r(g,{name:"open_package_file_outline",size:22})),e(K,()=>n()?.bulto?.toFixed(2)),e($,r(g,{name:"weight-pound",size:22})),e(f,()=>n()?.lbs?.toFixed(2)),c.style.setProperty("padding","16px"),e(i,r(g,{name:"money",size:22})),e(o,()=>n()?.sales?.toFixed(2)),e(S,r(g,{name:"money",size:22})),e(u,()=>n()?.cost?.toFixed(2)),e(A,r(g,{name:"money",size:22})),W.style.setProperty("padding","8px"),e(W,()=>(n()?.sales-n()?.cost).toFixed(2)),e(t,r(O,{get when(){return n()?.bulto>0},get children(){return r(Z,{get each(){return xe(n()?.billedBy)},children:(l,B)=>(()=>{var b=he(),p=b.firstChild,_=p.nextSibling;return _.firstChild,e(p,()=>n()?.billedBy?.[l]?.name||l),e(_,()=>n()?.billedBy?.[l]?.total?.toFixed(2),null),b})()})}}),null),e(t,r(O,{get when(){return n()?.bulto>0},get children(){return r(Z,{get each(){return L()},children:(l,B)=>(()=>{var b=ue(),p=b.firstChild,_=p.firstChild,G=_.firstChild,j=G.nextSibling,X=_.nextSibling,q=X.firstChild,H=q.nextSibling,D=H.nextSibling;return e(p,r(O,{get when(){return l?.isSSG},get children(){var s=ve();return T(()=>ae(s,"src",ee("SSG.webp"))),s}}),_),G.style.setProperty("padding","8px"),e(G,()=>l?.bagnumber),j.style.setProperty("padding","8px"),e(j,()=>l?.shipper),e(p,r(be,{}),X),e(q,()=>l?.totalS?.toFixed(2)),e(H,()=>l?.totalC?.toFixed(2)),D.style.setProperty("padding","8px"),e(D,()=>l?.total?.toFixed(2)),T(s=>{var J=`client_item_box gWXAaj jlytmu manifest  ${m()?"isMobile":"centerBx"}`,Q=` title_scan centerBx ${m(),""} `,U=` title_scan centerBx ${m(),""} `,Y=` title_scan centerBx ${m(),""} `;return J!==s.e&&P(p,s.e=J),Q!==s.t&&P(G,s.t=Q),U!==s.a&&P(j,s.a=U),Y!==s.o&&P(D,s.o=Y),s},{e:void 0,t:void 0,a:void 0,o:void 0}),b})()})}}),null),T(l=>{var B=m()?"86vw":"920px",b=` title_scan centerBx ${m(),""} `;return B!==l.e&&((l.e=B)!=null?t.style.setProperty("width",B):t.style.removeProperty("width")),b!==l.t&&P(W,l.t=b),l},{e:void 0,t:void 0}),t})()}de(["click"]);export{Fe as default};
