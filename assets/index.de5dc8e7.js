import{d as e,aO as a,aP as o,aN as s,aJ as r,aQ as t,u as n,N as i,f as d,bj as l,h as c,o as p,i as m,w as u,j as f,k as g,l as h}from"./index.9a6e95d8.js";import{D as x,M as j}from"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./isEqual.b9304b29.js";import"./index.b3ef3e6d.js";import"./index.8d91dadc.js";import{h as C}from"./header.3041aac3.js";import{d as D}from"./useHeaderSetting.4addfec3.js";import{D as w}from"./siteSetting.2daee9f0.js";var I=e({name:"UserDropdown",components:{Dropdown:x,Menu:j,MenuItem:a((()=>o((()=>__import__("./DropMenuItem.824c579e.js")),["/assets/DropMenuItem.824c579e.js","/assets/index.9a6e95d8.js","/assets/index.94daecd6.css","/assets/index.78d832da.js","/assets/index.bfe6e815.css","/assets/RightOutlined.a7006a51.js","/assets/types.3a3ca354.js","/assets/toInteger.858f2e82.js","/assets/isEqual.b9304b29.js","/assets/index.8d91dadc.js","/assets/index.0b3c95d7.css"]))),MenuDivider:j.Divider,Icon:s},props:{theme:r.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:a}=n(),{getShowDoc:o}=D();return{prefixCls:e,t:a,getUserInfo:i((()=>{const{realName:e="",desc:a}=d.getUserInfoState||{};return{realName:e,desc:a}})),handleMenuClick:function(e){switch(e.key){case"loginOut":d.confirmLoginOut();break;case"doc":l(w)}},getShowDoc:o,headerImg:C}}});I.render=function(e,a,o,s,r,t){const n=c("MenuItem"),i=c("MenuDivider"),d=c("Menu"),l=c("Dropdown");return p(),m(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:u((()=>[f(d,{onClick:e.handleMenuClick},{default:u((()=>[e.getShowDoc?(p(),m(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"gg:loadbar-doc"},null,8,["text"])):g("",!0),f(i),f(n,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"carbon:power"},null,8,["text"])])),_:1},8,["onClick"])])),default:u((()=>[f("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[f("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),f("span",{class:`${e.prefixCls}__info`},[f("span",{class:`${e.prefixCls}__name anticon`},h(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"])};export default I;