let e=document.createElement("style");e.innerHTML=".desc-wrap[data-v-e07fa688]{padding:16px;background:#fff}",document.head.appendChild(e);import{a as t,d0 as i,d1 as s,i as r,o,j as a,k as d,bi as n}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import"./useSortable.45284f08.js";import"./index.3d118838.js";import"./Trigger.10f3ef36.js";import"./omit.438f158a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d7b24863.js";import"./CheckOutlined.6e3f46e9.js";import"./index.1b4dce19.js";import"./index.cc992b4f.js";import"./colors.4c63c846.js";import"./index.5444a7ef.js";import"./RightOutlined.0ed32762.js";import"./index.bfdeacdc.js";import"./types.862677e9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1c23be2f.js";import"./_baseFor.f4e5f03f.js";import"./index.aa9264e4.js";import"./index.a172b251.js";import"./index.7275033a.js";import"./index.74c11c11.js";import"./UpOutlined.38e2afe5.js";import"./LeftOutlined.1c703b09.js";import"./index.c057eda9.js";import"./index.2e035149.js";import"./index.8e1cda31.js";import"./index.d441ac4a.js";import"./index.655ce238.js";import"./zh_CN.0242bd16.js";import"./index.cb987fa7.js";import"./index.797b6bb5.js";import"./CaretDownFilled.7857eebe.js";import"./index.17e57564.js";import"./CheckOutlined.92a90225.js";import"./CloseOutlined.b855f1e8.js";import{s as m}from"./index.0745fcc6.js";import"./FullscreenOutlined.ff04728b.js";import"./LeftOutlined.cc53e9a8.js";import"./LoadingOutlined.5123c8e2.js";import"./TableAction.d4cb015a.js";import"./RightOutlined.2ede8112.js";import"./SettingOutlined.f912e4a6.js";import"./useTimeout.c8b873c8.js";import"./tsxHelper.cdbc5a80.js";import"./index.03b19eac.js";import"./domUtils.d9f4b793.js";import"./index.bf1aa8c9.js";import"./animation.b8dec64d.js";import"./useScrollTo.35a9ddd8.js";import{D as p}from"./index.3bb72cbe.js";import"./useAttrs.74aef446.js";import"./index.987cb735.js";import"./useForm.f8029a39.js";import"./index.4c709155.js";import"./useWindowSizeFn.63819168.js";import"./uuid.40269c00.js";import"./useExpose.01082bae.js";import{u as c}from"./useTable.6d82f1c8.js";import{refundSchema as l,refundData as j,personSchema as u,personData as f,refundTableData as b,refundTableSchema as x,refundTimeTableSchema as g,refundTimeTableData as h}from"./data.6be0c478.js";var T=t({components:{Description:p,BasicTable:m},setup(){const[e]=c({title:"退货商品",dataSource:b,columns:x,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=c({title:"退货进度",columns:g,pagination:!1,dataSource:h,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:l,refundData:j,personSchema:u,personData:f}}});const O=n("data-v-e07fa688");i("data-v-e07fa688");const S={class:"m-5 desc-wrap"};s();const D=O(((e,t,i,s,n,m)=>{const p=r("a-page-header"),c=r("Description"),l=r("a-divider"),j=r("BasicTable");return o(),a("div",null,[d(p,{title:"基础详情页",ghost:!1}),d("div",S,[d(c,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),d(l),d(c,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),d(l),d(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),d(l),d(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])}));T.render=D,T.__scopeId="data-v-e07fa688";export default T;