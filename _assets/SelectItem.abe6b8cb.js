let e=document.createElement("style");e.innerHTML=".vben-setting-select-item[data-v-6110ac28]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-select-item-select[data-v-6110ac28]{width:126px}",document.head.appendChild(e);import{a as t,aY as i,I as s,i as a,o as n,j as r,k as d,n as o,J as l,bi as p}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import{S as m}from"./index.3d118838.js";import"./Trigger.10f3ef36.js";import"./omit.438f158a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d7b24863.js";import"./CheckOutlined.6e3f46e9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1c23be2f.js";import"./index.8e1cda31.js";import"./index.21a079ea.js";import"./index.17e57564.js";import"./index.aa8be349.js";import"./RightOutlined.2ede8112.js";import"./SettingOutlined.f912e4a6.js";import"./useTimeout.c8b873c8.js";import"./tsxHelper.cdbc5a80.js";import"./index.03b19eac.js";import"./domUtils.d9f4b793.js";import"./index.bf1aa8c9.js";import"./animation.b8dec64d.js";import"./useScrollTo.35a9ddd8.js";import"./useAttrs.74aef446.js";import"./useHeaderSetting.4dc7b70a.js";import{b as c}from"./index.267bc2e3.js";var u=t({name:"SelectItem",components:{Select:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=i("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const f=p("data-v-6110ac28")(((e,t,i,s,p,m)=>{const c=a("Select");return n(),r("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(c,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));u.render=f,u.__scopeId="data-v-6110ac28";export default u;