import{d as e,aQ as s,h as i,o as a,i as t,j as r,w as l,k as n,aR as u,aS as m}from"./index.9a6e95d8.js";import"./RightOutlined.a7006a51.js";import{I as o}from"./index.47b09016.js";import"./LeftOutlined.7f33cb51.js";var p=e({name:"TableImage",components:{Image:o,PreviewGroup:o.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=s("basic-table-img");return{prefixCls:e}}});p.render=function(e,s,o,p,d,f){const g=i("Image"),c=i("PreviewGroup");return e.imgList&&e.imgList.length?(a(),t("div",{key:0,class:e.prefixCls},[r(c,null,{default:l((()=>[(a(!0),t(u,null,m(e.imgList,(s=>(a(),t(g,{key:s,width:e.size,src:s},null,8,["width","src"])))),128))])),_:1})],2)):n("",!0)};export default p;