(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0a90e74"],{"37d6":function(e,t,i){},"58da":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[i("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{clearable:"",type:"text",placeholder:"请输入员工名进行搜索...","prefix-icon":"el-icon-search"},on:{clear:e.initEmpData},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initEmpData.apply(null,arguments)}},model:{value:e.empName,callback:function(t){e.empName=t},expression:"empName"}}),i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:e.initEmpData}},[e._v("搜索")]),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.showAdvanceSearch=!e.showAdvanceSearch}}},[i("i",{class:e.showAdvanceSearch?"fa fa-angle-double-up":"fa fa-angle-double-down",staticStyle:{"margin-right":"5px"},attrs:{"aria-hidden":"true"}}),e._v("高级搜索")])],1),i("div",[i("el-upload",{staticStyle:{display:"inline-block","margin-right":"8px"},attrs:{action:"/employee/basic/import","before-upload":e.beforeUpload,disabled:e.importDataDisabled,headers:e.headers,"show-file-list":!1,"on-success":e.onSuccess,"on-error":e.onError}},[i("el-button",{attrs:{type:"success",size:"small",icon:e.importDataIcon,disabled:e.importDataDisabled}},[e._v(e._s(e.importDataBtn))])],1),i("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-download"},on:{click:e.exportEmp}},[e._v("导出数据")]),i("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:e.showAddEmp}},[e._v("添加员工")])],1)])]),i("el-collapse-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanceSearch,expression:"showAdvanceSearch"}],staticClass:"searchStyle"},[i("el-row",[i("el-col",{attrs:{span:5}},[e._v(" 政治面貌: "),i("el-select",{staticStyle:{width:"130px"},attrs:{size:"mini",placeholder:"政治面貌"},model:{value:e.empSearch.politicId,callback:function(t){e.$set(e.empSearch,"politicId",t)},expression:"empSearch.politicId"}},e._l(e.politicsStatus,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:4}},[e._v(" 民族: "),i("el-select",{staticStyle:{width:"130px"},attrs:{size:"mini",placeholder:"民族"},model:{value:e.empSearch.nationId,callback:function(t){e.$set(e.empSearch,"nationId",t)},expression:"empSearch.nationId"}},e._l(e.nations,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:4}},[e._v(" 职位: "),i("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"职位"},model:{value:e.empSearch.posId,callback:function(t){e.$set(e.empSearch,"posId",t)},expression:"empSearch.posId"}},e._l(e.positions,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:4}},[e._v(" 职称: "),i("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"职称"},model:{value:e.empSearch.jobLevelId,callback:function(t){e.$set(e.empSearch,"jobLevelId",t)},expression:"empSearch.jobLevelId"}},e._l(e.jobLevels,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:7}},[e._v(" 聘用形式: "),i("el-radio-group",{model:{value:e.empSearch.engageForm,callback:function(t){e.$set(e.empSearch,"engageForm",t)},expression:"empSearch.engageForm"}},[i("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),i("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),i("el-row",{staticStyle:{"margin-top":"10px"}},[i("el-col",{attrs:{span:5}},[e._v(" 所属部门: "),i("el-popover",{attrs:{placement:"bottom",title:"请选择部门",width:"260",trigger:"manual"},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[i("el-tree",{attrs:{data:e.allDeps,props:e.defaultProps,"default-expand-all":""},on:{"node-click":e.handleNodeClick2}}),i("div",{staticClass:"deptSearch",attrs:{slot:"reference"},on:{click:e.showDeptView},slot:"reference"},[e._v(e._s(e.deptName))])],1)],1),i("el-col",{attrs:{span:10}},[e._v(" 入职日期: "),i("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","value-format":"yyyy-MM-dd",size:"mini","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.empSearch.beginDateScope,callback:function(t){e.$set(e.empSearch,"beginDateScope",t)},expression:"empSearch.beginDateScope"}})],1),i("el-col",{attrs:{span:5,offset:4}},[i("el-button",{attrs:{size:"mini"}},[e._v("取消")]),i("el-button",{attrs:{size:"mini",icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.initEmpData("advance")}}},[e._v("搜索")])],1)],1)],1)]),i("div",{staticStyle:{"margin-top":"10px"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.empData,"show-header":"",height:"500",border:"","element-loading-text":"数据加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{prop:"name",fixed:"",label:"姓名",align:"center",width:"70"}}),i("el-table-column",{attrs:{prop:"workID",label:"工号",align:"center",width:"85"}}),i("el-table-column",{attrs:{prop:"gender",label:"性别",align:"center",width:"50"}}),i("el-table-column",{attrs:{prop:"birthday",label:"出生日期",align:"left",width:"95"}}),i("el-table-column",{attrs:{prop:"idCard",label:"身份证号",align:"left",width:"170"}}),i("el-table-column",{attrs:{prop:"wedlock",label:"婚姻状况",align:"center",width:"100"}}),i("el-table-column",{attrs:{prop:"nation.name",label:"民族",align:"center",width:"50"}}),i("el-table-column",{attrs:{prop:"nativePlace",label:"籍贯",align:"center",width:"80"}}),i("el-table-column",{attrs:{prop:"politicsStatus.name",label:"政治面貌",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"email",label:"邮箱",align:"center",width:"180"}}),i("el-table-column",{attrs:{prop:"phone",label:"电话号码",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"address",label:"联系地址",align:"center",width:"300"}}),i("el-table-column",{attrs:{prop:"department.name",label:"所属部门",align:"center",width:"100"}}),i("el-table-column",{attrs:{prop:"joblevel.name",label:"职称",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"position.name",label:"职位",align:"center",width:"100"}}),i("el-table-column",{attrs:{prop:"engageForm",label:"聘用形式",align:"center",width:"100"}}),i("el-table-column",{attrs:{prop:"tiptopDegree",label:"最高学历",align:"center",width:"80"}}),i("el-table-column",{attrs:{prop:"workState",label:"毕业院校",align:"center",width:"100"}}),i("el-table-column",{attrs:{prop:"beginDate",label:"入职日期",align:"center",width:"95"}}),i("el-table-column",{attrs:{prop:"conversionTime",label:"转正日期",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"beginContract",label:"合同起始日期",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"endContract",label:"合同截止日期",align:"center",width:"120"}}),i("el-table-column",{attrs:{label:"合同期限",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",[e._v(e._s(t.row.contractTerm))]),e._v(" 年 ")]}}])}),i("el-table-column",{attrs:{label:"操作",fixed:"right",align:"center",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{staticStyle:{padding:"3px"},attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(i){return e.showEditView(t.row)}}},[e._v("编辑")]),i("el-button",{staticStyle:{padding:"3px"},attrs:{type:"info",icon:"el-icon-view",size:"mini"},on:{click:function(i){return e.showEmpInfo(t.row)}}},[e._v("查看高级资料")]),i("el-button",{staticStyle:{padding:"3px"},attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(i){return e.deleteEmp(t.row)}}},[e._v("删除")])]}}])})],1),i("el-pagination",{staticStyle:{display:"flex","justify-content":"flex-end"},attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50,100],"page-size":e.size,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),i("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,modal:"",width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[i("span",{staticClass:"dialog-footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.addEmp}},[e._v("确 定")])],1)]},proxy:!0}])},[i("div",[i("el-form",{ref:"empForm",attrs:{model:e.emp,rules:e.empRule}},[i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"请输入员工姓名","prefix-icon":"el-icon-edit"},model:{value:e.emp.name,callback:function(t){e.$set(e.emp,"name",t)},expression:"emp.name"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"性别：",prop:"gender"}},[i("el-radio-group",{staticStyle:{"margin-top":"10px"},model:{value:e.emp.gender,callback:function(t){e.$set(e.emp,"gender",t)},expression:"emp.gender"}},[i("el-radio",{attrs:{label:"男"}},[e._v("男")]),i("el-radio",{attrs:{label:"女"}},[e._v("女")])],1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"出生日期：",size:"mini",prop:"birthday"}},[i("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"出生日期"},model:{value:e.emp.birthday,callback:function(t){e.$set(e.emp,"birthday",t)},expression:"emp.birthday"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"政治面貌：",prop:"politicId"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"政治面貌"},model:{value:e.emp.politicId,callback:function(t){e.$set(e.emp,"politicId",t)},expression:"emp.politicId"}},e._l(e.politicsStatus,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"民族：",prop:"nationId"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"民族"},model:{value:e.emp.nationId,callback:function(t){e.$set(e.emp,"nationId",t)},expression:"emp.nationId"}},e._l(e.nations,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"籍贯：",prop:"nativePlace"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"请输入籍贯","prefix-icon":"el-icon-edit"},model:{value:e.emp.nativePlace,callback:function(t){e.$set(e.emp,"nativePlace",t)},expression:"emp.nativePlace"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"电子邮箱：",size:"mini",prop:"email"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"请输入电子邮箱","prefix-icon":"el-icon-message"},model:{value:e.emp.email,callback:function(t){e.$set(e.emp,"email",t)},expression:"emp.email"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"联系地址：",size:"mini",prop:"address"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"请输入联系地址","prefix-icon":"el-icon-edit"},model:{value:e.emp.address,callback:function(t){e.$set(e.emp,"address",t)},expression:"emp.address"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"职位：",prop:"posId"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"职位"},model:{value:e.emp.posId,callback:function(t){e.$set(e.emp,"posId",t)},expression:"emp.posId"}},e._l(e.positions,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"职称：",prop:"jobLevelId"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"职称"},model:{value:e.emp.jobLevelId,callback:function(t){e.$set(e.emp,"jobLevelId",t)},expression:"emp.jobLevelId"}},e._l(e.jobLevels,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"所属部门：",size:"mini",prop:"departmentId"}},[i("el-popover",{attrs:{placement:"bottom",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("el-tree",{attrs:{data:e.allDeps,props:e.defaultProps,"default-expand-all":""},on:{"node-click":e.handleNodeClick}}),i("div",{staticClass:"deptStyle",attrs:{slot:"reference"},on:{click:e.showDept},slot:"reference"},[e._v(e._s(e.deptName))])],1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"电话号码：",size:"mini",prop:"phone"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"请输入电话号码","prefix-icon":"el-icon-edit"},model:{value:e.emp.phone,callback:function(t){e.$set(e.emp,"phone",t)},expression:"emp.phone"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"工号：",prop:"workID"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{disabled:"",size:"mini",placeholder:"请输入工号"},model:{value:e.emp.workID,callback:function(t){e.$set(e.emp,"workID",t)},expression:"emp.workID"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"学历：",prop:"tiptopDegree"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"学历"},model:{value:e.emp.tiptopDegree,callback:function(t){e.$set(e.emp,"tiptopDegree",t)},expression:"emp.tiptopDegree"}},e._l(e.tiptopDegrees,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"毕业院校：",size:"mini",prop:"school"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"请输入毕业院校","prefix-icon":"el-icon-edit"},model:{value:e.emp.school,callback:function(t){e.$set(e.emp,"school",t)},expression:"emp.school"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"专业名称：",size:"mini",prop:"specialty"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"请输入专业名称","prefix-icon":"el-icon-edit"},model:{value:e.emp.specialty,callback:function(t){e.$set(e.emp,"specialty",t)},expression:"emp.specialty"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"入职日期：",prop:"workID",size:"mini"}},[i("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"入职日期"},model:{value:e.emp.beginDate,callback:function(t){e.$set(e.emp,"beginDate",t)},expression:"emp.beginDate"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"转正日期：",prop:"conversionTime",size:"mini"}},[i("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"转正日期"},model:{value:e.emp.conversionTime,callback:function(t){e.$set(e.emp,"conversionTime",t)},expression:"emp.conversionTime"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"合同起始日期：",size:"mini",prop:"beginContract"}},[i("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"合同起始日期"},model:{value:e.emp.beginContract,callback:function(t){e.$set(e.emp,"beginContract",t)},expression:"emp.beginContract"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"合同截止日期：",size:"mini",prop:"endContract"}},[i("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"合同截止日期"},model:{value:e.emp.endContract,callback:function(t){e.$set(e.emp,"endContract",t)},expression:"emp.endContract"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"身份证号：",prop:"idCard"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"请输入身份证号","prefix-icon":"el-icon-edit"},model:{value:e.emp.idCard,callback:function(t){e.$set(e.emp,"idCard",t)},expression:"emp.idCard"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"聘用形式：",prop:"engageForm"}},[i("el-radio-group",{staticStyle:{"margin-top":"10px"},model:{value:e.emp.engageForm,callback:function(t){e.$set(e.emp,"engageForm",t)},expression:"emp.engageForm"}},[i("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),i("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"婚姻状况：",prop:"wedlock"}},[i("el-radio-group",{staticStyle:{"margin-top":"10px"},model:{value:e.emp.wedlock,callback:function(t){e.$set(e.emp,"wedlock",t)},expression:"emp.wedlock"}},[i("el-radio",{attrs:{label:"已婚"}},[e._v("已婚")]),i("el-radio",{attrs:{label:"未婚"}},[e._v("未婚")]),i("el-radio",{attrs:{label:"离异"}},[e._v("离异")])],1)],1)],1)],1)],1)],1)])],1)},l=[],n=(i("f5bd"),{name:"EmpBasic",data:function(){return{nations:[],jobLevels:[],politicsStatus:[],positions:[],empData:[],loading:!1,tiptopDegrees:["博士","硕士","本科","大专","高中","初中","小学","其他"],allDeps:[],deptName:"",defaultProps:{children:"children",label:"name"},visible:!1,visible2:!1,showAdvanceSearch:!1,empSearch:{nationId:null,politicId:null,departmentId:null,posId:null,jobLevelId:null,engageForm:"",beginDateScope:null},emp:{id:null,name:"",gender:"",birthday:"",idCard:"",wedlock:"",nationId:null,nativePlace:"",politicId:null,email:"",phone:"",address:"",departmentId:null,jobLevelId:null,posId:null,engageForm:"",tiptopDegree:"",specialty:"",school:"",beginDate:"",workState:"在职",workID:"",contractTerm:null,conversionTime:"",notWorkDate:null,beginContract:"",endContract:"",workAge:null},empRule:{name:[{required:!0,message:"请输入员工姓名",trigger:"blur"}],gender:[{required:!0,message:"请输入员工性别",trigger:"blur"}],birthday:[{required:!0,message:"请输入出生日期",trigger:"blur"}],idCard:[{required:!0,message:"请输入身份证号",trigger:"blur"},{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2})$/,message:"身份证号格式不正确",trigger:"blur"}],wedlock:[{required:!0,message:"请选择婚姻状况",trigger:"blur"}],nationId:[{required:!0,message:"请选择民族",trigger:"blur"}],nativePlace:[{required:!0,message:"请输入籍贯",trigger:"blur"}],politicId:[{required:!0,message:"请选择政治面貌",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],departmentId:[{required:!0,message:"请选择部门",trigger:"blur"}],jobLevelId:[{required:!0,message:"请选择职称",trigger:"blur"}],posId:[{required:!0,message:"请选择职位",trigger:"blur"}],engageForm:[{required:!0,message:"请选择聘用形式",trigger:"blur"}],tiptopDegree:[{required:!0,message:"请选择学历",trigger:"blur"}],specialty:[{required:!0,message:"请输入专业",trigger:"blur"}],school:[{required:!0,message:"请输入毕业院校",trigger:"blur"}],beginDate:[{required:!0,message:"请输入入职日期",trigger:"blur"}],contractTerm:[{required:!0,message:"请输入合同日期",trigger:"blur"}],conversionTime:[{required:!0,message:"请输入转正日期",trigger:"blur"}],notWorkDate:[{required:!0,message:"请输入离职日期",trigger:"blur"}],beginContract:[{required:!0,message:"请输入合同起始日期",trigger:"blur"}],endContract:[{required:!0,message:"请输入合同截止日期",trigger:"blur"}]},currentPage:1,size:10,total:0,empName:"",dialogVisible:!1,title:"",importDataIcon:"el-icon-upload2",importDataBtn:"导入数据",importDataDisabled:!1,headers:{Authorization:window.sessionStorage.getItem("tokenStr")}}},mounted:function(){this.initEmpData(),this.initSelectData(),this.initPositions()},methods:{showEmpInfo:function(e){},showEditView:function(e){this.dialogVisible=!0,this.title="编辑员工信息",this.deptName=e.department.name,this.initPositions(),this.emp=e},deleteEmp:function(e){var t=this;this.$confirm("此操作将永久删除【"+e.name+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/employee/basic/delete/"+e.id).then((function(e){e&&t.initEmpData()}))})).catch((function(){t.$message({type:"warning",message:"取消删除"})}))},addEmp:function(){var e=this;this.$refs["empForm"].validate((function(t){t?e.emp.id?e.putRequest("/employee/basic/update",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmpData())})):e.postRequest("/employee/basic/add",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmpData())})):e.$message.warning("请完善表单信息！")}))},showDept:function(){this.visible=!this.visible},showDeptView:function(){this.visible2=!this.visible2},handleNodeClick:function(e){this.emp.departmentId=e.id,this.deptName=e.name,this.visible=!this.visible},handleNodeClick2:function(e){this.empSearch.departmentId=e.id,this.deptName=e.name,this.visible2=!this.visible2},initPositions:function(){var e=this;this.getRequest("/system/basic/pos/listAll").then((function(t){t&&(e.positions=t)}))},initSelectData:function(){var e=this,t=window.sessionStorage.getItem("nations"),i=window.sessionStorage.getItem("jobLevels"),a=window.sessionStorage.getItem("politicsStatus"),l=window.sessionStorage.getItem("allDeps");l?this.allDeps=JSON.parse(l):this.getRequest("/system/basic/department/listAll").then((function(t){t&&(e.allDeps=t,window.sessionStorage.setItem("allDeps",JSON.stringify(t)))})),a?this.politicsStatus=JSON.parse(a):this.getRequest("/employee/basic/politicsStatusAll").then((function(t){t&&(e.politicsStatus=t,window.sessionStorage.setItem("politicsStatus",JSON.stringify(t)))})),i?this.jobLevels=JSON.parse(i):this.getRequest("/system/basic/joblevel/listAll").then((function(t){t&&(e.jobLevels=t,window.sessionStorage.setItem("jobLevels",JSON.stringify(t)))})),t?this.nations=JSON.parse(t):this.getRequest("/employee/basic/nation").then((function(t){t&&(e.nations=t,window.sessionStorage.setItem("nations",JSON.stringify(t)))}))},getMaxId:function(){var e=this;this.getRequest("/employee/basic/maxId").then((function(t){t&&(e.emp.workID=t.obj)}))},beforeUpload:function(){this.importDataBtn="正在导入",this.importDataIcon="el-icon-loading",this.importDataDisabled=!0},onSuccess:function(){this.importDataBtn="导入数据",this.importDataIcon="el-icon-upload2",this.importDataDisabled=!1,this.initEmpData()},onError:function(){this.importDataBtn="导入数据",this.importDataIcon="el-icon-upload2",this.importDataDisabled=!1},exportEmp:function(){this.downloadRequest("/employee/basic/export")},showAddEmp:function(){this.initPositions(),this.getMaxId(),this.title="添加员工",this.deptName="",this.emp={},this.dialogVisible=!this.dialogVisible},handleCurrentChange:function(e){this.currentPage=e,this.initEmpData()},handleSizeChange:function(e){this.size=e,this.initEmpData()},initEmpData:function(e){var t=this,i="/employee/basic/listAll/?currentPage="+this.currentPage+"&size="+this.size;e&&"advance"===e?(this.empSearch.politicId&&(i+="&politicId="+this.empSearch.politicId),this.empSearch.nationId&&(i+="&nationId="+this.empSearch.nationId),this.empSearch.posId&&(i+="&posId="+this.empSearch.posId),this.empSearch.jobLevelId&&(i+="&jobLevelId="+this.empSearch.jobLevelId),this.empSearch.engageForm&&(i+="&engageForm="+this.empSearch.engageForm),this.empSearch.departmentId&&(i+="&departmentId="+this.empSearch.departmentId),this.empSearch.beginDateScope&&(i+="&beginDateScope="+this.empSearch.beginDateScope)):i+="&name="+this.empName,this.getRequest(i).then((function(e){t.loading=!0,e&&(t.loading=!1,t.empData=e.data,t.total=e.total)}))}}}),o=n,r=(i("6967"),i("5d22")),s=Object(r["a"])(o,a,l,!1,null,"617df147",null);t["default"]=s.exports},6967:function(e,t,i){"use strict";i("37d6")},fd11:function(e,t,i){var a={"./EmpBasic.vue":"58da"};function l(e){var t=n(e);return i(t)}function n(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=n,e.exports=l,l.id="fd11"}}]);
//# sourceMappingURL=chunk-f0a90e74.25d1ee82.js.map