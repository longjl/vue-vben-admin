import{a as i,i as e,o as t,j as o,k as s,w as d}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./index.64140d77.js";import"./index.4113db93.js";import"./Trigger.1760f0d3.js";import"./omit.e8d97b70.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.211ac153.js";import"./CheckOutlined.6cb39299.js";import"./index.b1472a21.js";import"./colors.357808bb.js";import"./index.20c38e9d.js";import"./RightOutlined.20ea3258.js";import"./index.1e11f442.js";import"./types.3d31dfe9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./_baseFor.f4e5f03f.js";import"./index.6a991412.js";import"./index.a172b251.js";import"./index.32b369e3.js";import"./index.51deba08.js";import"./UpOutlined.21cc6fac.js";import"./LeftOutlined.f8e3b6ba.js";import"./index.74d51768.js";import"./index.176873be.js";import"./index.74af370d.js";import"./index.f6608bc6.js";import"./index.7cf13630.js";import"./zh_CN.0242bd16.js";import{T as n}from"./TableAction.78cddb36.js";import"./index.26d03542.js";import"./CaretDownFilled.87c9b5c9.js";import"./index.5dad729e.js";import"./CheckOutlined.476860fa.js";import"./CloseOutlined.9540ff8f.js";import{s as r}from"./EditTableHeaderIcon.4135a040.js";import"./DownOutlined.47094d14.js";import"./FullscreenOutlined.6392ddb3.js";import"./functional.97744b71.js";import"./LoadingOutlined.53bec7b5.js";import"./RedoOutlined.02659b57.js";import"./RightOutlined.252275e0.js";import"./SettingOutlined.4bd05219.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import"./useAttrs.bd8026f6.js";import"./index.c1040e54.js";import"./index.7dea14a1.js";import"./useForm.8a043248.js";import"./index.91cefa6f.js";import"./useWindowSizeFn.f6909622.js";import"./useFullScreen.29729aef.js";import"./uuid.40269c00.js";import"./useExpose.4d608728.js";import"./index.c2a21fc8.js";import{u as a}from"./useTable.489ae876.js";import{d as m}from"./table.4dbe5a02.js";const p=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address",width:260},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var l=i({components:{BasicTable:r,TableAction:n},setup(){const[i]=a({title:"TableAction组件及固定列示例",api:m,columns:p,rowSelection:{type:"radio"},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:i,handleDelete:function(i){},handleOpen:function(i){}}}});const c={class:"p-4"};l.render=function(i,n,r,a,m,p){const l=e("TableAction"),j=e("BasicTable");return t(),o("div",c,[s(j,{onRegister:i.registerTable},{action:d((({record:e})=>[s(l,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:i.handleDelete.bind(null,e)}],dropDownActions:[{label:"启用",onClick:i.handleOpen.bind(null,e)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default l;