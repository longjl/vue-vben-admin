import{d as e,r as s,g as o,h as t,o as i,i as l,w as a,j as r,m as n}from"./index.9a6e95d8.js";import"./SearchOutlined.0274a049.js";import"./index.fa1a1838.js";import"./DownOutlined.7914d6be.js";import"./CheckOutlined.9adc9f3e.js";import"./index.a3a1e8cf.js";import"./EyeOutlined.301bca7e.js";import{_ as p}from"./index.55de31d8.js";import"./index.3970d233.js";import"./index.b4107331.js";import"./colors.2afe0cf1.js";import"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./index.074cf711.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./uuid.d595bce3.js";import"./findIndex.2287226b.js";import"./_stringToArray.c244b21e.js";import"./domUtils.4bf6def6.js";import"./isEqual.b9304b29.js";import"./_baseProperty.74f89655.js";import"./index.734b408e.js";import"./index.47b09016.js";import"./UpOutlined.2c90282e.js";import"./LeftOutlined.7f33cb51.js";import"./index.a42a59eb.js";import"./responsiveObserve.c545f1cc.js";import"./index.c13f1716.js";import"./index.5182ab2a.js";import"./index.dbe75ef4.js";import"./index.c729d376.js";import"./index.b3ef3e6d.js";import"./index.167971e0.js";import"./index.b10dc2f3.js";import"./index.5f0ec28f.js";import"./transButton.ee7e6c60.js";import"./util.61e89dd9.js";import{a as d}from"./index.3322d17d.js";import{_ as c}from"./index.dc0ec1cc.js";import"./index.f7e9d603.js";import"./FullscreenOutlined.ae5dc3db.js";import"./RightOutlined.ffcbe06b.js";import"./useTimeout.fa08b045.js";import"./index.7069600f.js";import"./index.8d91dadc.js";import"./animation.5c0b7ef6.js";import"./useScrollTo.162b59ba.js";import"./useAttrs.2a07db8f.js";import"./useWindowSizeFn.fed78a59.js";import"./download.8ba6c906.js";import"./usePageContext.dfe3de60.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=e({components:{BasicForm:p,CollapseContainer:d,PageWrapper:c},setup(){const e=s(null),{createMessage:t}=o();return{formElRef:e,schemas:m,handleSubmit:e=>{t.success("click search,values:"+JSON.stringify(e))},setProps(s){const o=e.value;o&&o.setProps(s)}}}});const f={class:"mb-4"},b=n("更改labelWidth"),j=n("还原labelWidth"),P=n("更改Size"),x=n("还原Size"),h=n("禁用表单"),C=n("解除禁用"),k=n("紧凑表单"),_=n("还原正常间距"),O=n(" 操作按钮位置 "),g={class:"mb-4"},v=n(" 隐藏操作按钮 "),S=n(" 显示操作按钮 "),w=n(" 隐藏重置按钮 "),B=n(" 显示重置按钮 "),R=n(" 隐藏查询按钮 "),W=n(" 显示查询按钮 "),y=n(" 修改重置按钮 "),z=n(" 修改查询按钮 ");u.render=function(e,s,o,n,p,d){const c=t("a-button"),m=t("BasicForm"),u=t("CollapseContainer"),A=t("PageWrapper");return i(),l(A,{title:"Ref操作示例"},{default:a((()=>[r("div",f,[r(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:a((()=>[b])),_:1}),r(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:a((()=>[j])),_:1}),r(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:a((()=>[P])),_:1}),r(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:a((()=>[x])),_:1}),r(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:a((()=>[h])),_:1}),r(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:a((()=>[C])),_:1}),r(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:a((()=>[k])),_:1}),r(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:a((()=>[_])),_:1}),r(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:a((()=>[O])),_:1})]),r("div",g,[r(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:a((()=>[v])),_:1}),r(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:a((()=>[S])),_:1}),r(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:a((()=>[w])),_:1}),r(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:a((()=>[B])),_:1}),r(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:a((()=>[R])),_:1}),r(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:a((()=>[W])),_:1}),r(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:a((()=>[y])),_:1}),r(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:a((()=>[z])),_:1})]),r(u,{title:"使用ref调用表单内部函数示例"},{default:a((()=>[r(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;