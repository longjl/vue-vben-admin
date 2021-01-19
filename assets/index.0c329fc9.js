import{d as e,r as o,g as i,h as n,o as l,i as s,w as t,j as a}from"./index.9a6e95d8.js";import"./SearchOutlined.0274a049.js";import"./index.fa1a1838.js";import"./DownOutlined.7914d6be.js";import"./CheckOutlined.9adc9f3e.js";import"./index.a3a1e8cf.js";import"./EyeOutlined.301bca7e.js";import{_ as p}from"./index.55de31d8.js";import"./index.3970d233.js";import"./index.b4107331.js";import"./colors.2afe0cf1.js";import"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./index.074cf711.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./uuid.d595bce3.js";import"./findIndex.2287226b.js";import"./_stringToArray.c244b21e.js";import"./domUtils.4bf6def6.js";import"./isEqual.b9304b29.js";import"./_baseProperty.74f89655.js";import"./index.734b408e.js";import"./index.47b09016.js";import"./UpOutlined.2c90282e.js";import"./LeftOutlined.7f33cb51.js";import"./index.a42a59eb.js";import"./responsiveObserve.c545f1cc.js";import"./index.c13f1716.js";import"./index.5182ab2a.js";import"./index.dbe75ef4.js";import"./index.c729d376.js";import"./index.b3ef3e6d.js";import"./index.167971e0.js";import"./index.b10dc2f3.js";import"./index.5f0ec28f.js";import"./transButton.ee7e6c60.js";import"./util.61e89dd9.js";import{a as r}from"./index.3322d17d.js";import{_ as d}from"./index.dc0ec1cc.js";import"./index.f7e9d603.js";import"./FullscreenOutlined.ae5dc3db.js";import"./RightOutlined.ffcbe06b.js";import"./useTimeout.fa08b045.js";import"./index.7069600f.js";import"./index.8d91dadc.js";import"./animation.5c0b7ef6.js";import"./useScrollTo.162b59ba.js";import"./useAttrs.2a07db8f.js";import"./useWindowSizeFn.fed78a59.js";import"./download.8ba6c906.js";import"./usePageContext.dfe3de60.js";import{o as c}from"./select.146f6f88.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:c},colProps:{span:8},defaultValue:"0"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}}];var u=e({components:{BasicForm:p,CollapseContainer:r,PageWrapper:d},setup(){const e=o(null),{createMessage:n}=i();return{schemas:m,handleSubmit:e=>{n.success("click search,values:"+JSON.stringify(e))},check:e}}});u.render=function(e,o,i,p,r,d){const c=n("BasicForm"),m=n("CollapseContainer"),u=n("PageWrapper");return l(),s(u,{title:"表单基础示例"},{default:t((()=>[a(m,{title:"基础示例"},{default:t((()=>[a(c,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;