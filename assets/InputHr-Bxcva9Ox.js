import{c as g,a as S,i as v,e as $,S as w,n as E,f as s,m as I,s as _,k as i,h as A,t as b}from"./index-7ZM3jTwu.js";var T=b("<p class=label>"),q=b('<div class=_dsplFlx><div class=flexSpace></div><div class=field-block><input required=""></div><div class=flexSpace>');const H=e=>{g();const[n,m]=S(""),y=l=>{e?.handleClick(l),m(l)},h=l=>{l.keyCode===13&&typeof e?.onEnter=="function"&&e?.onEnter(n()),l.keyCode===27&&typeof e?.onEscape=="function"&&e?.onEscape(n()),l.keyCode===9&&typeof e?.onTab=="function"&&e?.onTab(n())};let k={"--txtInput--width":e?.width,"--txtInput--color":e?.colors,"--txtInput--backColor":e?.backColor,"--txtInput--border-color":e?.borderColor,"--txtInput--aborder-color":e?.borderActiveColor,padding:e?.label?"0.86em 1.2em":"0.99em 1.2em"};return(()=>{var l=q(),C=l.firstChild,o=C.nextSibling,a=o.firstChild;v(o,$(w,{get when(){return e?.label},get children(){var t=T();return v(t,()=>e?.label),t}}),a),a.$$input=t=>y(t.currentTarget.value),a.$$keydown=h;var c=e?.ref;return typeof c=="function"&&E(c,a),s(t=>{var d=`r7gAOb yyJm8b kk3791b ${e?.label,""}`,x=k,r=e?.type,f=e?.name,u=e?.placeholder;return d!==t.e&&I(a,t.e=d),t.t=_(a,x,t.t),r!==t.a&&i(a,"type",t.a=r),f!==t.o&&i(a,"name",t.o=f),u!==t.i&&i(a,"placeholder",t.i=u),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),s(()=>a.value=e?.value),l})()};A(["keydown","input"]);export{H as default};
