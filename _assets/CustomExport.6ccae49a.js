import{a as e,i,o as t,j as o,k as s,w as r,p as a}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import"./useSortable.45284f08.js";import"./index.3d118838.js";import"./Trigger.10f3ef36.js";import"./omit.438f158a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d7b24863.js";import"./CheckOutlined.6e3f46e9.js";import"./index.1b4dce19.js";import"./colors.4c63c846.js";import"./index.5444a7ef.js";import"./RightOutlined.0ed32762.js";import"./index.bfdeacdc.js";import"./types.862677e9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1c23be2f.js";import"./_baseFor.f4e5f03f.js";import"./index.aa9264e4.js";import"./index.a172b251.js";import"./index.7275033a.js";import"./index.74c11c11.js";import"./UpOutlined.38e2afe5.js";import"./LeftOutlined.1c703b09.js";import"./index.c057eda9.js";import"./index.2e035149.js";import"./index.8e1cda31.js";import"./index.d441ac4a.js";import"./index.655ce238.js";import"./zh_CN.0242bd16.js";import"./index.cb987fa7.js";import"./index.797b6bb5.js";import"./CaretDownFilled.7857eebe.js";import"./index.17e57564.js";import"./CheckOutlined.92a90225.js";import"./CloseOutlined.b855f1e8.js";import{s as d}from"./index.0745fcc6.js";import"./FullscreenOutlined.ff04728b.js";import"./LeftOutlined.cc53e9a8.js";import"./LoadingOutlined.5123c8e2.js";import"./TableAction.d4cb015a.js";import"./RightOutlined.2ede8112.js";import"./SettingOutlined.f912e4a6.js";import"./useTimeout.c8b873c8.js";import"./tsxHelper.cdbc5a80.js";import"./index.03b19eac.js";import"./domUtils.d9f4b793.js";import"./index.bf1aa8c9.js";import"./animation.b8dec64d.js";import"./useScrollTo.35a9ddd8.js";import"./useAttrs.74aef446.js";import"./index.987cb735.js";import"./useForm.f8029a39.js";import{a as m}from"./index.4c709155.js";import"./useWindowSizeFn.63819168.js";import"./uuid.40269c00.js";import"./useExpose.01082bae.js";import{c as p,d as n,j as c}from"./data.7596f14f.js";import{E as j}from"./index.2bc30b7b.js";var l=e({components:{BasicTable:d,ExpExcelModel:j},setup(){const[e,{openModal:i}]=m();return{defaultHeader:function({filename:e,bookType:i}){c({data:n,filename:e,write2excelOpts:{bookType:i}})},columns:p,data:n,register:e,openModal:i}}});const u={class:"m-4"},f=a("导出");l.render=function(e,a,d,m,p,n){const c=i("a-button"),j=i("BasicTable"),l=i("ExpExcelModel");return t(),o("div",u,[s(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:r((()=>[s(c,{onClick:e.openModal},{default:r((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),s(l,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])};export default l;