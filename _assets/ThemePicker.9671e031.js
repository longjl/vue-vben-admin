let e=document.createElement("style");e.innerHTML=".vben-setting-theme-picker{display:flex;flex-wrap:wrap;margin:16px 0;justify-content:space-around}.vben-setting-theme-picker__item{width:20px;height:20px;cursor:pointer;border:1px solid #ddd;border-radius:2px}.vben-setting-theme-picker__item svg{display:none}.vben-setting-theme-picker__item--active{border:1px solid #31a5fe}.vben-setting-theme-picker__item--active svg{display:inline-block;margin:0 0 3px 3px;font-size:12px;fill:#fff!important}",document.head.appendChild(e);import{a as t,aY as i,i as r,o as s,j as n,aM as a,b9 as p,k as o}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1c23be2f.js";import"./index.8e1cda31.js";import"./index.21a079ea.js";import"./index.17e57564.js";import"./index.aa8be349.js";import{C as d}from"./CheckOutlined.92a90225.js";import"./RightOutlined.2ede8112.js";import"./SettingOutlined.f912e4a6.js";import"./useTimeout.c8b873c8.js";import"./tsxHelper.cdbc5a80.js";import"./index.03b19eac.js";import"./domUtils.d9f4b793.js";import"./index.bf1aa8c9.js";import"./animation.b8dec64d.js";import"./useScrollTo.35a9ddd8.js";import"./useAttrs.74aef446.js";import"./useHeaderSetting.4dc7b70a.js";import{b as m}from"./index.267bc2e3.js";var c=t({name:"ThemePicker",components:{CheckOutlined:d},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(t){e.event&&m(e.event,t)}}}});c.render=function(e,t,i,d,m,c){const l=r("CheckOutlined");return s(),n("div",{class:e.prefixCls},[(s(!0),n(a,null,p(e.colorList||[],(t=>(s(),n("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[o(l)],14,["onClick"])))),128))],2)};export default c;