import{c as g,a as w,i as v,d as S,S as $,ak as E,e as s,f as I,w as A,A as i,h as _,t as b}from"./index-0eJ7-OrP.js";var T=b("<p class=label>"),q=b('<div class=_dsplFlx><div class=flexSpace></div><div class=field-block><input required=""></div><div class=flexSpace>');const H=e=>{g();const[n,y]=w(""),m=l=>{e?.handleClick(l),y(l)},h=l=>{l.keyCode===13&&typeof e?.onEnter=="function"&&e?.onEnter(n()),l.keyCode===27&&typeof e?.onEscape=="function"&&e?.onEscape(n()),l.keyCode===9&&typeof e?.onTab=="function"&&e?.onTab(n())};let k={"--txtInput--width":e?.width,"--txtInput--color":e?.colors,"--txtInput--backColor":e?.backColor,"--txtInput--border-color":e?.borderColor,"--txtInput--aborder-color":e?.borderActiveColor,padding:e?.label?"0.6em 1.2em":"0.99em 1.2em"};return(()=>{var l=q(),C=l.firstChild,o=C.nextSibling,a=o.firstChild;v(o,S($,{get when(){return e?.label},get children(){var t=T();return v(t,()=>e?.label),t}}),a),a.$$input=t=>m(t.currentTarget.value),a.$$keydown=h;var d=e?.ref;return typeof d=="function"&&E(d,a),s(t=>{var c=`r7gAOb yyJm8b kk3791b ${e?.label,""}`,x=k,r=e?.type,f=e?.name,u=e?.placeholder;return c!==t.e&&I(a,t.e=c),t.t=A(a,x,t.t),r!==t.a&&i(a,"type",t.a=r),f!==t.o&&i(a,"name",t.o=f),u!==t.i&&i(a,"placeholder",t.i=u),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),s(()=>a.value=e?.value),l})()};_(["keydown","input"]);export{H as default};
