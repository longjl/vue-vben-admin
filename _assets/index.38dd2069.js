let e=document.createElement("style");e.innerHTML=".demo[data-v-c13dcea4]{background:#fff}",document.head.appendChild(e);import{a as s,ds as a,dt as n,d0 as t,d1 as o,i as d,o as c,j as r,k as i,bi as m,p as u}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import{A as l}from"./index.85b3b844.js";import"./index.8e1cda31.js";import p from"./CurrentPermissionMode.8a688ec2.js";var f=s({components:{Alert:l,CurrentPermissionMode:p},setup(){const{changeMenu:e}=n();return{RoleEnum:a,changeMenu:e}}});const g=m("data-v-c13dcea4");t("data-v-c13dcea4");const h={class:"p-4 m-4 demo"},M={class:"mt-4"},v=u(" 权限切换(请先切换权限模式为后台权限模式): "),b=u(" 获取用户id为1的菜单 "),j=u(" 获取用户id为2的菜单 ");o();const k=g(((e,s,a,n,t,o)=>{const m=d("Alert"),u=d("CurrentPermissionMode"),l=d("a-button"),p=d("a-button-group");return c(),r("div",h,[i(m,{message:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看","show-icon":""}),i(u),i(m,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),i("div",M,[v,i(p,null,{default:g((()=>[i(l,{onClick:s[1]||(s[1]=s=>e.changeMenu("1"))},{default:g((()=>[b])),_:1}),i(l,{onClick:s[2]||(s[2]=s=>e.changeMenu("2"))},{default:g((()=>[j])),_:1})])),_:1})])])}));f.render=k,f.__scopeId="data-v-c13dcea4";export default f;