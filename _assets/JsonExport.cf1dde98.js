import{a as e,i,o as t,j as s,k as o,w as r,n as d}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.7b366c4b.js";import"./index.b3d27e93.js";import"./Trigger.1f027942.js";import"./omit.c8603bdb.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d1376850.js";import"./CheckOutlined.e291a1f5.js";import"./index.ecb658c5.js";import"./index.d2cb24e8.js";import"./colors.863e863c.js";import"./index.bbd9dec1.js";import"./RightOutlined.a721f23a.js";import"./index.648eb728.js";import"./types.ec785e86.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import"./index.ff61dcf3.js";import"./index.ea1c54a6.js";import"./UpOutlined.25f25eae.js";import"./LeftOutlined.670b6be7.js";import"./DownOutlined.6f919f42.js";import"./index.335f5816.js";import"./index.f15549ef.js";import"./index.5c0386e3.js";import"./zh_CN.0242bd16.js";import"./index.2ea1877e.js";import"./index.f02f1014.js";import"./CaretDownFilled.c5689b7c.js";import"./CheckOutlined.9988e31e.js";import"./CloseOutlined.1a46c05c.js";import{s as m}from"./EditTableHeaderIcon.78e8b2e6.js";import"./index.f6b60b0d.js";import"./LeftOutlined.f312add8.js";import"./functional.7d386e92.js";import"./RightOutlined.83a2612e.js";import"./useContext.2506cc4d.js";import"./useTimeout.e40508cb.js";import"./useDebounce.9c7c5ce5.js";import"./useEventListener.6468cfe0.js";import"./useBreakpoint.be0fab75.js";import"./resizeEvent.dd57c904.js";import"./domUtils.7b78aff8.js";import"./tsxHelper.c465228b.js";import"./useExpose.7e9a2ef1.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";import"./index.859e5d00.js";import"./index.663602f0.js";import"./useWindowSizeFn.6bad7e86.js";import"./uuid.40269c00.js";import"./download.b61d92d2.js";import"./useForm.162de352.js";import"./useFullScreen.923f5ed8.js";import"./index.99df5bc0.js";import"./index.230bb7c5.js";import{c as a,d as n,j as p}from"./data.7596f14f.js";var j=e({components:{BasicTable:m},setup:()=>({defaultHeader:function(){p({data:n,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){p({data:n,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:a,data:n})});const c={class:"m-4"},l=d("导出：默认头部"),u=d("导出：自定义头部");j.render=function(e,d,m,a,n,p){const j=i("a-button"),f=i("BasicTable");return t(),s("div",c,[o(f,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:r((()=>[o(j,{onClick:e.defaultHeader},{default:r((()=>[l])),_:1},8,["onClick"]),o(j,{onClick:e.customHeader},{default:r((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])};export default j;