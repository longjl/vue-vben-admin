import{d as t,r as e,aa as a,o as i,i as r}from"./index.9a6e95d8.js";import"./useTimeout.fa08b045.js";import{u as o}from"./useECharts.5d502a07.js";import{b as n}from"./props.f48aca0b.js";var s=t({name:"AnalysisLine",props:n,setup(){const t=e(null),{setOptions:i}=o(t);return a((()=>{i({tooltip:{trigger:"axis",padding:3,backgroundColor:"rgba(0, 0, 0, .6)",borderColor:"#777",borderWidth:1},legend:{icon:"rect",itemWidth:15,itemHeight:4,left:80,top:0,orient:"horizontal",data:["产品一","产品二"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{inside:!0},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{type:"value",axisTick:{inside:!0}},series:[{name:"产品一",type:"line",itemStyle:{normal:{color:"#5B8FF9"}},data:[330,132,101,134,90,230,210,150,232,234,230,400],animationDuration:4e3},{name:"产品二",type:"line",itemStyle:{normal:{color:"#55D187"}},data:[220,182,191,234,290,330,310,330,232,201,330,190],animationDuration:4e3}]})})),{chartRef:t}}});s.render=function(t,e,a,o,n,s){return i(),r("div",{ref:"chartRef",style:{height:t.height,width:t.width}},null,4)};export default s;