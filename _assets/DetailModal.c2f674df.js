import{a as t,u as s,i as e,o as i,j as o,w as r,k as a,v as m}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./omit.e8d97b70.js";import"./_baseSlice.1123a25b.js";import"./colors.357808bb.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./index.176873be.js";import"./index.5dad729e.js";import"./CloseOutlined.9540ff8f.js";import"./FullscreenOutlined.6392ddb3.js";import"./RightOutlined.252275e0.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import{u as n}from"./useDescription.9c245e58.js";import{D as d}from"./index.fb189611.js";import"./useAttrs.bd8026f6.js";import{s as p}from"./index.91cefa6f.js";import"./useWindowSizeFn.f6909622.js";import{getDescSchema as f}from"./data.f1fd21a1.js";var c=t({name:"ErrorLogDetailModal",components:{BasicModal:p,Description:d},props:{info:{type:Object,default:null}},setup(){const{t:t}=s(),[e]=n({column:2,schema:f()});return{register:e,useI18n:s,t:t}}});c.render=function(t,s,n,d,p,f){const c=e("Description"),l=e("BasicModal");return i(),o(l,m({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(c,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default c;