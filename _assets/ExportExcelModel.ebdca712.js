import{a as e,u as s,i as t,o as i,j as o,w as r,k as a,J as l}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import"./index.3d118838.js";import"./Trigger.10f3ef36.js";import"./omit.438f158a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d7b24863.js";import"./CheckOutlined.6e3f46e9.js";import{s as n}from"./index.1b4dce19.js";import"./colors.4c63c846.js";import"./RightOutlined.0ed32762.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1c23be2f.js";import"./index.aa9264e4.js";import"./index.a172b251.js";import"./index.7275033a.js";import"./index.74c11c11.js";import"./UpOutlined.38e2afe5.js";import"./index.c057eda9.js";import"./index.2e035149.js";import"./index.d441ac4a.js";import"./index.cb987fa7.js";import"./index.797b6bb5.js";import"./index.17e57564.js";import"./CloseOutlined.b855f1e8.js";import"./FullscreenOutlined.ff04728b.js";import"./LoadingOutlined.5123c8e2.js";import"./RightOutlined.2ede8112.js";import"./useTimeout.c8b873c8.js";import"./tsxHelper.cdbc5a80.js";import"./index.03b19eac.js";import"./domUtils.d9f4b793.js";import"./index.bf1aa8c9.js";import"./animation.b8dec64d.js";import"./useScrollTo.35a9ddd8.js";import"./useAttrs.74aef446.js";import"./index.987cb735.js";import{u as m}from"./useForm.f8029a39.js";import{s as p,b as d}from"./index.4c709155.js";import"./useWindowSizeFn.63819168.js";const{t:c}=s(),j=[{field:"filename",component:"Input",label:c("component.excel.fileName"),rules:[{required:!0}]},{field:"bookType",component:"Select",label:c("component.excel.fileType"),defaultValue:"xlsx",rules:[{required:!0}],componentProps:{options:[{label:"xlsx",value:"xlsx",key:"xlsx"},{label:"html",value:"html",key:"html"},{label:"csv",value:"csv",key:"csv"},{label:"txt",value:"txt",key:"txt"}]}}];var u=e({components:{BasicModal:p,BasicForm:n},emits:["success","register"],setup(e,{emit:s}){const[t,{validateFields:i}]=m(),[o,{closeModal:r}]=d();return{schemas:j,handleOk:async function(){const e=await i(),{filename:t,bookType:o}=e;s("success",{filename:`${t.split(".").shift()}.${o}`,bookType:o}),r()},registerForm:t,registerModal:o,t:c}}});u.render=function(e,s,n,m,p,d){const c=t("BasicForm"),j=t("BasicModal");return i(),o(j,l(e.$attrs,{title:e.t("component.excel.exportModalTitle"),onOk:e.handleOk,onRegister:e.registerModal}),{default:r((()=>[a(c,{labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1,onRegister:e.registerForm},null,8,["schemas","onRegister"])])),_:1},16,["title","onOk","onRegister"])};export default u;