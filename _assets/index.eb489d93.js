import{a as e,r as n,f as a,i as t,o,j as r,k as s,w as l,p as u}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import{M as i}from"./index.4e2ee161.js";var c=e({components:{MarkDown:i},setup(){const e=n(null),t=n("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const n=a(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const m={class:"p-4"},f=u("黑暗主题");c.render=function(e,n,a,u,i,c){const d=t("a-button"),p=t("MarkDown");return o(),r("div",m,[s(d,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:l((()=>[f])),_:1},8,["onClick"]),s(p,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])};export default c;