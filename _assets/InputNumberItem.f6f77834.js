let e=document.createElement("style");e.innerHTML=".vben-setting-input-number-item[data-v-9dadcc20]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-input-number-item-input-number[data-v-9dadcc20]{width:126px}",document.head.appendChild(e);import{a as t,au as i,i as n,o as s,j as a,k as r,n as p,v as d,aS as m}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.211ac153.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./UpOutlined.21cc6fac.js";import"./index.74af370d.js";import{I as o}from"./index.f6608bc6.js";import"./index.270ac0e7.js";import"./index.5dad729e.js";import"./index.078c6fe7.js";import"./RightOutlined.252275e0.js";import"./SettingOutlined.4bd05219.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import"./useAttrs.bd8026f6.js";import"./useHeaderSetting.03b0d500.js";import{b as c}from"./index.44b92772.js";var u=t({name:"InputNumberItem",components:{InputNumber:o},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=i("setting-input-number-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)}}}});const l=m("data-v-9dadcc20")(((e,t,i,m,o,c)=>{const u=n("InputNumber");return s(),a("div",{class:e.prefixCls},[r("span",null,p(e.title),1),r(u,d(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));u.render=l,u.__scopeId="data-v-9dadcc20";export default u;