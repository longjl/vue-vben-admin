let t=document.createElement("style");t.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(t);import{a as e,i as o,o as a,j as i,k as s,w as n}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.211ac153.js";import{A as r}from"./index.759d79e3.js";import"./RightOutlined.20ea3258.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./index.491d83d6.js";import"./UpOutlined.21cc6fac.js";import"./LeftOutlined.f8e3b6ba.js";import"./index.9c5d94bf.js";import{b as m,S as c}from"./index.5dad729e.js";import"./RightOutlined.252275e0.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import d from"./TargetContent.a234f005.js";var p=e({components:{LazyContainer:m,TargetContent:d,Skeleton:c,Alert:r},setup:()=>({})});const l={class:"p-4 lazy-base-demo"},f={class:"lazy-base-demo-wrap"},u=s("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};p.render=function(t,e,r,m,c,d){const p=o("Alert"),x=o("TargetContent"),b=o("LazyContainer");return a(),i("div",l,[s(p,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),s("div",f,[u,s("div",j,[s(b,{transitionName:"custom"},{default:n((()=>[s(x)])),_:1})])])])};export default p;