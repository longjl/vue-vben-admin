import{dr as t,ay as e,u as a}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import"./colors.4c63c846.js";import{T as r}from"./index.2e035149.js";const{t:o}=a();function d(){return[{dataIndex:"type",title:o("sys.errorLog.tableColumnType"),width:80,customRender:({text:a})=>{const o=a===t.VUE?"green":a===t.RESOURCE?"cyan":a===t.PROMISE?"blue":t.AJAX?"red":"purple";return e(r,{color:o},(()=>a))}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:o("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:o("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:o("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:o("sys.errorLog.tableColumnStackMsg"),width:300}]}function l(){return d().map((t=>({field:t.dataIndex,label:t.title})))}export{d as getColumns,l as getDescSchema};