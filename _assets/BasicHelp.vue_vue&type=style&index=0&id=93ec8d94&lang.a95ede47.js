import{k as t,J as e,cO as a,a as o,H as r,aY as n,I as s,M as i,f as l,dk as c,Y as p,cW as f}from"./index.ed640425.js";import{T as u}from"./index.7275033a.js";import{g as m}from"./tsxHelper.cdbc5a80.js";var d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var y=function(o,r){var n=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),o.forEach((function(e){b(t,e,a[e])}))}return t}({},o,r.attrs);return t(a,e(n,{icon:d}),null)};y.displayName="InfoCircleOutlined",y.inheritAttrs=!1;var g=o({name:"BasicHelp",components:{Tooltip:u},props:{maxWidth:r.string.def("600px"),showIndex:r.bool,color:r.string.def("#ffffff"),fontSize:r.string.def("14px"),placement:r.string.def("right"),absolute:r.bool,text:{type:[Array,String]},position:{type:[Object],default:()=>({position:"absolute",left:0,bottom:0})}},setup(t,{slots:e}){const{prefixCls:a}=n("basic-help"),o=s((()=>({maxWidth:t.maxWidth}))),r=s((()=>({color:t.color,fontSize:t.fontSize}))),d=s((()=>t.absolute?t.position:{})),b=()=>{const e=t.text;return p(e)?i("p",e):f(e)?e.map(((e,a)=>i("p",{key:e},[t.showIndex?`${a+1}. `:"",e]))):null};return()=>i(u,{title:i("div",{style:l(r)},[b()]),overlayClassName:`${a}__wrap`,autoAdjustOverflow:!0,overlayStyle:l(o),placement:t.placement,getPopupContainer:()=>c()},{default:()=>i("span",{class:a,style:l(d)},m(e)||i(y))})}});export{g as s};