import{c as g,a as S,i as v,d as $,S as w,u as E,e as s,g as I,q as _,s as i,h as A,t as b}from"./index-CnAi9qOS.js";var T=b("<p class=label>"),q=b('<div class=_dsplFlx><div class=flexSpace></div><div class=field-block><input required=""></div><div class=flexSpace>');const H=e=>{g();const[n,y]=S(""),m=l=>{e?.handleClick(l),y(l)},h=l=>{l.keyCode===13&&typeof e?.onEnter=="function"&&e?.onEnter(n()),l.keyCode===27&&typeof e?.onEscape=="function"&&e?.onEscape(n()),l.keyCode===9&&typeof e?.onTab=="function"&&e?.onTab(n())};let k={"--txtInput--width":e?.width,"--txtInput--color":e?.colors,"--txtInput--backColor":e?.backColor,"--txtInput--border-color":e?.borderColor,"--txtInput--aborder-color":e?.borderActiveColor,padding:e?.label?"0.6em 1.2em":"0.99em 1.2em"};return(()=>{var l=q(),C=l.firstChild,o=C.nextSibling,a=o.firstChild;v(o,$(w,{get when(){return e?.label},get children(){var t=T();return v(t,()=>e?.label),t}}),a),a.$$input=t=>m(t.currentTarget.value),a.$$keydown=h;var d=e?.ref;return typeof d=="function"&&E(d,a),s(t=>{var c=`r7gAOb yyJm8b kk3791b ${e?.label,""}`,x=k,r=e?.type,u=e?.name,f=e?.placeholder;return c!==t.e&&I(a,t.e=c),t.t=_(a,x,t.t),r!==t.a&&i(a,"type",t.a=r),u!==t.o&&i(a,"name",t.o=u),f!==t.i&&i(a,"placeholder",t.i=f),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),s(()=>a.value=e?.value),l})()};A(["keydown","input"]);export{H as default};
