import{a as e,cw as i,h as t,i as s,o,j as r,k as a,w as n}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./index.4113db93.js";import"./Trigger.1760f0d3.js";import"./omit.e8d97b70.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.211ac153.js";import"./CheckOutlined.6cb39299.js";import{s as m}from"./index.b1472a21.js";import"./colors.357808bb.js";import"./RightOutlined.20ea3258.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./index.6a991412.js";import"./index.a172b251.js";import"./index.51deba08.js";import"./UpOutlined.21cc6fac.js";import"./index.74d51768.js";import"./index.176873be.js";import"./index.f6608bc6.js";import"./index.26d03542.js";import{a as d}from"./index.5dad729e.js";import"./LoadingOutlined.53bec7b5.js";import"./RightOutlined.252275e0.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import"./useAttrs.bd8026f6.js";import"./index.c1040e54.js";import"./index.7dea14a1.js";import{T as l}from"./index.7b0253f6.js";const p=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>i(l,{value:e[t],onChange:i=>{e[t]=i}})}];var c=e({components:{BasicForm:m,CollapseContainer:d},setup(){const{createMessage:e}=t();return{schemas:p,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});const u={class:"m-4"};c.render=function(e,i,t,m,d,l){const p=s("BasicForm"),c=s("CollapseContainer");return o(),r("div",u,[a(c,{title:"富文本表单"},{default:n((()=>[a(p,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default c;