import{a as e,r as i,i as t,o,j as r,k as s,w as d,p as a,n}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./index.64140d77.js";import"./index.4113db93.js";import"./Trigger.1760f0d3.js";import"./omit.e8d97b70.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.211ac153.js";import"./CheckOutlined.6cb39299.js";import"./index.b1472a21.js";import"./colors.357808bb.js";import"./index.20c38e9d.js";import"./RightOutlined.20ea3258.js";import"./index.1e11f442.js";import"./types.3d31dfe9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./_baseFor.f4e5f03f.js";import"./index.6a991412.js";import"./index.a172b251.js";import"./index.32b369e3.js";import"./index.51deba08.js";import"./UpOutlined.21cc6fac.js";import"./LeftOutlined.f8e3b6ba.js";import"./index.74d51768.js";import"./index.176873be.js";import"./index.74af370d.js";import"./index.f6608bc6.js";import"./index.7cf13630.js";import"./zh_CN.0242bd16.js";import"./TableAction.78cddb36.js";import"./index.26d03542.js";import"./CaretDownFilled.87c9b5c9.js";import"./index.5dad729e.js";import"./CheckOutlined.476860fa.js";import"./CloseOutlined.9540ff8f.js";import{s as p}from"./EditTableHeaderIcon.4135a040.js";import"./DownOutlined.47094d14.js";import"./FullscreenOutlined.6392ddb3.js";import"./functional.97744b71.js";import"./LoadingOutlined.53bec7b5.js";import"./RedoOutlined.02659b57.js";import"./RightOutlined.252275e0.js";import"./SettingOutlined.4bd05219.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import"./useAttrs.bd8026f6.js";import"./index.c1040e54.js";import"./index.7dea14a1.js";import"./useForm.8a043248.js";import"./index.91cefa6f.js";import"./useWindowSizeFn.f6909622.js";import"./useFullScreen.29729aef.js";import"./uuid.40269c00.js";import"./useExpose.4d608728.js";import"./index.c2a21fc8.js";import{getBasicColumns as m,getBasicData as l}from"./tableData.a5b9270b.js";var c=e({components:{BasicTable:p},setup(){const e=i(!1),t=i(!1),o=i(!0),r=i(!0);return{columns:m(),data:l(),canResize:e,loading:t,striped:o,border:r,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1}),3e3)},toggleBorder:function(){r.value=!r.value}}}});const j={class:"p-4"},u=a(" 开启loading ");c.render=function(e,i,p,m,l,c){const f=t("a-button"),b=t("BasicTable");return o(),r("div",j,[s(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,pagination:{pageSize:20}},{toolbar:d((()=>[s(f,{type:"primary",onClick:e.toggleCanResize},{default:d((()=>[a(n(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleBorder},{default:d((()=>[a(n(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleLoading},{default:d((()=>[u])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleStriped},{default:d((()=>[a(n(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered"])])};export default c;