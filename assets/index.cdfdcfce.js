import{d as e,h as t,o as a,i as r,aY as s,j as i}from"./index.c9b191ae.js";import"./index.62221c24.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import"./index.e9cfd29c.js";import"./index.b4918bad.js";import"./index.34b4eaee.js";import"./CheckOutlined.6db140fd.js";import"./index.27cba524.js";import{_ as o}from"./index.b9d582f5.js";import"./FullscreenOutlined.499766bf.js";import"./RightOutlined.ce1a9cb6.js";import"./SettingOutlined.3ccdf103.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import"./useAttrs.dd653939.js";import"./useWindowSizeFn.68f6ef4b.js";import"./index.e80c819c.js";import"./uuid.a6cec785.js";import"./download.e374d1b4.js";import"./useForm.d744eed5.js";import"./clickOutside.5c695aaa.js";import"./useSortable.7fd64a7b.js";import"./useExpose.1aedd396.js";import{u as d}from"./useTable.4f530c5e.js";import{_ as n}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";import{D as m}from"./index.d0ba04da.js";import{refundSchema as c,refundData as p,personSchema as u,personData as l,refundTableData as j,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as g}from"./data.f1ea6ad3.js";var x=e({components:{Description:m,BasicTable:o,PageWrapper:n},setup(){const[e]=d({title:"退货商品",dataSource:j,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,a=0;return e.forEach((e=>{t+=e.t5,a+=e.t6})),[{t1:"总计",t5:t,t6:a}]}}),[t]=d({title:"退货进度",columns:b,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:c,refundData:p,personSchema:u,personData:l}}});const h=s("data-v-7da24e93"),T=h(((e,s,o,d,n,m)=>{const c=t("Description"),p=t("a-divider"),u=t("BasicTable"),l=t("PageWrapper");return a(),r(l,{title:"基础详情页",contentBackground:""},{default:h((()=>[i(c,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),i(p),i(c,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),i(p),i(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),i(p),i(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));x.render=T,x.__scopeId="data-v-7da24e93";export default x;