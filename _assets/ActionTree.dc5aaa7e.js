import{a as e,r as t,h as a,f as n,i as s,o as l,j as c,k as o,w as d,p as i}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import{a as r}from"./index.5dad729e.js";import"./RightOutlined.252275e0.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import{B as u,t as p}from"./data.47173a0c.js";var f=e({components:{BasicTree:u,CollapseContainer:r},setup(){const e=t(null),{createMessage:s}=a();function l(){const t=n(e);if(!t)throw new Error("tree is null!");return t}return{treeData:p,treeRef:e,handleLevel:function(e){l().filterByLevel(e)},handleSetCheckData:function(){l().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=l().getCheckedKeys();s.success(JSON.stringify(e))},handleSetSelectData:function(){l().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=l().getSelectedKeys();s.success(JSON.stringify(e))},handleSetExpandData:function(){l().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=l().getExpandedKeys();s.success(JSON.stringify(e))},appendNodeByKey:function(e=null){l().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){l().deleteNodeByKey(e)},updateNodeByKey:function(e){l().updateNodeByKey(e,{title:"parent2-new"})}}}});const m={class:"p-4"},y={class:"mb-4"},h=i("显示到第2级"),C=i("显示到第1级"),k=i("设置勾选数据"),K=i("获取勾选数据"),S=i("设置选中数据"),j=i("获取选中数据"),D=i("设置展开数据"),x=i("获取展开数据"),_={class:"mb-4"},B=i("添加根节点"),N=i("添加在parent3内添加节点"),b=i("删除parent3节点"),g=i("更新parent2节点");f.render=function(e,t,a,n,i,r){const u=s("a-button"),p=s("BasicTree"),f=s("CollapseContainer");return l(),c("div",m,[o("div",y,[o(u,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:d((()=>[h])),_:1}),o(u,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:d((()=>[C])),_:1}),o(u,{onClick:e.handleSetCheckData,class:"mr-2"},{default:d((()=>[k])),_:1},8,["onClick"]),o(u,{onClick:e.handleGetCheckData,class:"mr-2"},{default:d((()=>[K])),_:1},8,["onClick"]),o(u,{onClick:e.handleSetSelectData,class:"mr-2"},{default:d((()=>[S])),_:1},8,["onClick"]),o(u,{onClick:e.handleGetSelectData,class:"mr-2"},{default:d((()=>[j])),_:1},8,["onClick"]),o(u,{onClick:e.handleSetExpandData,class:"mr-2"},{default:d((()=>[D])),_:1},8,["onClick"]),o(u,{onClick:e.handleGetExpandData,class:"mr-2"},{default:d((()=>[x])),_:1},8,["onClick"])]),o("div",_,[o(u,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:d((()=>[B])),_:1}),o(u,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:d((()=>[N])),_:1}),o(u,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:d((()=>[b])),_:1}),o(u,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:d((()=>[g])),_:1})]),o(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:d((()=>[o(p,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])};export default f;