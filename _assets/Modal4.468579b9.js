import{a as e,r as i,i as s,o,j as t,w as r,k as d,v as m}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./index.4113db93.js";import"./Trigger.1760f0d3.js";import"./omit.e8d97b70.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.211ac153.js";import"./CheckOutlined.6cb39299.js";import{s as n}from"./index.b1472a21.js";import"./colors.357808bb.js";import"./RightOutlined.20ea3258.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./index.6a991412.js";import"./index.a172b251.js";import"./index.51deba08.js";import"./UpOutlined.21cc6fac.js";import"./index.74d51768.js";import"./index.176873be.js";import"./index.f6608bc6.js";import"./index.26d03542.js";import"./index.5dad729e.js";import"./CloseOutlined.9540ff8f.js";import"./FullscreenOutlined.6392ddb3.js";import"./LoadingOutlined.53bec7b5.js";import"./RightOutlined.252275e0.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import"./useAttrs.bd8026f6.js";import"./index.c1040e54.js";import"./index.7dea14a1.js";import{u as a}from"./useForm.8a043248.js";import{s as p,b as l}from"./index.91cefa6f.js";import"./useWindowSizeFn.f6909622.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=e({components:{BasicModal:p,BasicForm:n},setup(){const e=i({}),[s,{}]=a({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[o]=l((i=>{e.value={field2:i.data,field1:i.info}}));return{register:o,schemas:c,registerForm:s,model:e}}});j.render=function(e,i,n,a,p,l){const c=s("BasicForm"),j=s("BasicModal");return o(),t(j,m(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:r((()=>[d(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default j;