import{a as o,ao as e,u as t,i,o as s,j as r,k as n,w as a}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./Trigger.1760f0d3.js";import"./omit.e8d97b70.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import{T as d}from"./index.32b369e3.js";import"./index.5dad729e.js";import"./CloseOutlined.9540ff8f.js";import"./FullscreenOutlined.6392ddb3.js";import{L as m}from"./LockOutlined.a1a6f3cc.js";import"./RightOutlined.252275e0.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import"./useAttrs.bd8026f6.js";import{a as l}from"./index.91cefa6f.js";import"./useWindowSizeFn.f6909622.js";var p=o({name:"FullScreen",components:{LockOutlined:m,Tooltip:d,LockAction:e((()=>import("./LockModal.5419d6b7.js")))},setup(){const{t:o}=t(),[e,{openModal:i}]=l();return{t:o,register:e,handleLock:function(){i(!0)}}}});p.render=function(o,e,t,d,m,l){const p=i("LockOutlined"),c=i("Tooltip"),f=i("LockAction");return s(),r("span",{onClick:e[1]||(e[1]=(...e)=>o.handleLock&&o.handleLock(...e))},[n(c,{title:o.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:a((()=>[n(p)])),_:1},8,["title","mouseEnterDelay"]),n(f,{onRegister:o.register},null,8,["onRegister"])])};export default p;