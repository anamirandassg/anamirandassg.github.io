const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-BJgx9GLA.js","assets/index-DFllEmGK.js","assets/index-BRlA1Q7g.css","assets/Util-DCAGxQXf.js"])))=>i.map(i=>d[i]);
import{l as re,_ as ne,a as N,d as oe,i as e,e as r,F as Z,S as O,f as T,k as ae,j as m,m as P,h as de,t as I}from"./index-DFllEmGK.js";import{c as ce}from"./ShowQRPrintLabel-BRqlj31R.js";import be from"./FlexSpace-ByMz39bD.js";import{O as xe,e as ee}from"./Util-DCAGxQXf.js";import"./fontkit.es-bSs4huUp.js";import"./qrcode-DHy8FFhS.js";import"./InitPrintServices-DJ_AIouE.js";import"./Toast-E0cBWHcm.js";var pe=I('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Resume de Ingresos y Pagos</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div></div><div class="_dsplFlx flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div></div><div class="_dsplFlx flxWrp spaceAround "><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=""></h5></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h4 class=""></h4></div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><p></p>'),he=I('<div class="centerBx bottombx"><h5 class=""></h5><h4 class="">$</h4>'),ve=I("<img width=48 height=24 class=picture-profile alt=ssg decoding=async>"),ue=I('<div class=itm0hist><div><div class="centerBx bottombx"><p></p><h4></h4></div><div class="centerBx bottombx"><h5></h5><h4></h4><p>');const g=re(()=>ne(()=>import("./SVG-BJgx9GLA.js"),__vite__mapDeps([0,1,2,3]))),_e=2.20462;function Ce(M){const[L,te]=N([]),le=t=>{te([...L(),t])};N({});const[n,ie]=N({cost:0,sales:0,lbs:0,bulto:0,gross:0}),se=t=>{ce(t)},V=t=>{let y=0,C=0,F=0,w=0,h=0,k=[],a={},v={};M?.list.map((d,K)=>{let z=0,$=0,f=0;d?.hbls.map((c,j)=>{let i=c?.weight*_e;F+=i;let o=c?.pricePerPound?Number(c?.pricePerPound):0,x=c?.dutyFee?Number(c?.dutyFee):0;o&&!v[o]&&(v[o]=0),v[o]+=i*o,y+=i*o+x,C+=i*3;let S=i*o+x-i*3;h+=S,f+=S,z+=i*o+x,$+=i*3;let u=d?.billedBy||"anonymus";if(!a[u]){let E=ee("M023009")?.usersListSSG?.filter(A=>A.id===u);a[u]={total:0,name:E?.[0]?.label}}a[u].total+=i*o+x}),w+=1,k&&f!==0&&le({bagnumber:d?.bagnumber,total:f,totalC:$,totalS:z,shipper:d?.nameshipper,isSSG:d?.isSSG})}),ie({cost:C,sales:y,lbs:F,bulto:w,gross:h,billedBy:a})};return oe(()=>{V()}),(()=>{var t=pe(),y=t.firstChild,C=y.firstChild,F=C.firstChild,w=F.nextSibling,h=w.firstChild,k=h.nextSibling,a=y.nextSibling,v=a.firstChild,d=v.firstChild,K=d.nextSibling,z=v.nextSibling,$=z.firstChild,f=$.nextSibling,c=a.nextSibling,j=c.firstChild,i=j.firstChild,o=i.nextSibling,x=j.nextSibling,S=x.firstChild,u=S.nextSibling,E=x.nextSibling,A=E.firstChild,R=A.nextSibling;return t.style.setProperty("height","clamp(60vh, 80vh,  90vh)"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),h.$$click=()=>se(M?.item?.bagnumber),e(h,()=>M?.item?.bagnumber),k.$$click=V,e(k,r(g,{name:"printer",size:32})),a.style.setProperty("padding","16px"),e(d,r(g,{name:"open_package_file_outline",size:22})),e(K,()=>n()?.bulto?.toFixed(2)),e($,r(g,{name:"weight-pound",size:22})),e(f,()=>n()?.lbs?.toFixed(2)),c.style.setProperty("padding","16px"),e(i,r(g,{name:"money",size:22})),e(o,()=>n()?.sales?.toFixed(2)),e(S,r(g,{name:"money",size:22})),e(u,()=>n()?.cost?.toFixed(2)),e(A,r(g,{name:"money",size:22})),R.style.setProperty("padding","8px"),e(R,()=>(n()?.sales-n()?.cost).toFixed(2)),e(t,r(O,{get when(){return n()?.bulto>0},get children(){return r(Z,{get each(){return xe(n()?.billedBy)},children:(l,B)=>(()=>{var b=he(),p=b.firstChild,_=p.nextSibling;return _.firstChild,e(p,()=>n()?.billedBy?.[l]?.name||l),e(_,()=>n()?.billedBy?.[l]?.total?.toFixed(2),null),b})()})}}),null),e(t,r(O,{get when(){return n()?.bulto>0},get children(){return r(Z,{get each(){return L()},children:(l,B)=>(()=>{var b=ue(),p=b.firstChild,_=p.firstChild,G=_.firstChild,W=G.nextSibling,X=_.nextSibling,q=X.firstChild,H=q.nextSibling,D=H.nextSibling;return e(p,r(O,{get when(){return l?.isSSG},get children(){var s=ve();return T(()=>ae(s,"src",ee("SSG.webp"))),s}}),_),G.style.setProperty("padding","8px"),e(G,()=>l?.bagnumber),W.style.setProperty("padding","8px"),e(W,()=>l?.shipper),e(p,r(be,{}),X),e(q,()=>l?.totalS?.toFixed(2)),e(H,()=>l?.totalC?.toFixed(2)),D.style.setProperty("padding","8px"),e(D,()=>l?.total?.toFixed(2)),T(s=>{var J=`client_item_box gWXAaj jlytmu manifest  ${m()?"isMobile":"centerBx"}`,Q=` title_scan centerBx ${m(),""} `,U=` title_scan centerBx ${m(),""} `,Y=` title_scan centerBx ${m(),""} `;return J!==s.e&&P(p,s.e=J),Q!==s.t&&P(G,s.t=Q),U!==s.a&&P(W,s.a=U),Y!==s.o&&P(D,s.o=Y),s},{e:void 0,t:void 0,a:void 0,o:void 0}),b})()})}}),null),T(l=>{var B=m()?"86vw":"920px",b=` title_scan centerBx ${m(),""} `;return B!==l.e&&((l.e=B)!=null?t.style.setProperty("width",B):t.style.removeProperty("width")),b!==l.t&&P(R,l.t=b),l},{e:void 0,t:void 0}),t})()}de(["click"]);export{Ce as default};
