<template>
    <div>
        <div style="display: flex;justify-content: center;margin-top: 10px">
            <el-input v-model="keywords"
                    placeholder="通过用户名搜索用户..."
                    prefix-icon="el-icon-search"
                    style="width: 500px"
                    @keydown.enter.native="search"
            ></el-input>
        </div>
        <div class="admin-container">
            <el-card class="admin-card" v-for="(admin,index) in admins" :key="index">
                <div slot="header" class="clearfix">
                    <span>{{admin.name}}</span>
                    <el-button style="float: right;padding: 3px 0;color: red" type="text" icon="el-icon-delete" @click="deleteAdmin(admin)"></el-button>
                </div>
                <div class="img-container">
                    <img :name="admin.name" :title="admin.name"  :src="admin.userFace" class="admin-image">
                </div>
                <div  class="userinfo">
                    <div>用户名:{{admin.name}}</div>
                    <div>手机号码:{{admin.phone}}</div>
                    <div>电话号码:{{admin.telephone}}</div>
                    <div>地址:{{admin.address}}</div>
                    <div>用户状态:
                        <el-switch
                                style="margin-left: 10px"
                                v-model="admin.enabled"
                                @change="enableChange(admin)"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-text="启用"
                                inactive-text="暂不启用">
                        </el-switch>
                    </div>
                    <div>
                        用户角色: <el-tag style="margin-right: 4px" type="success" v-for="(item,index) in admin.roles">{{item.nameZh}}</el-tag>
                        <el-popover
                            placement="right"
                            title="角色列表"
                            width="200"
                            @show="showPop(admin)"
                            @hide="hidePop(admin)"
                            trigger="click">
                            <el-select v-model="selectedRoles" multiple placeholder="请选择">
                                <el-option
                                    v-for="(r,index) in allRoles"
                                    :key="index"
                                    :label="r.nameZh"
                                    :value="r.id">
                                </el-option>
                            </el-select>
                        <el-button slot="reference" type="text" icon="el-icon-more"></el-button>
                        </el-popover>
                    </div>
                    <div>备注:{{admin.remark}}</div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SysAdmin",
        data(){
            return{
                admins: [],
                keywords: '',
                allRoles: [],
                selectedRoles: []
            }
        },
        mounted() {
            this.initAdmin();
        },
        methods: {
            hidePop(admin){
                let roles = [];
                Object.assign(roles,admin.roles);
                let flag = false;
                if(roles.length != this.selectedRoles.length){
                    flag = true;
                }else{
                    for(let i = 0; i < roles.length; i++){
                        let role = roles[i];
                        for(let j = 0; j < this.selectedRoles.length; j++){
                            let sr = this.selectedRoles[j];
                            if(role.id == sr){
                                roles.splice(i,1);
                                i--;
                                break;
                            }
                        }
                    }
                    if(roles.length != 0){
                        flag = true;
                    }
                }

                if(flag){
                    let url = '/system/admin/updateAdminRole?adminId='+admin.id;
                    this.selectedRoles.forEach(sr=>{
                        url += '&rids=' + sr;
                    });
                    this.putRequest(url).then(resp=>{
                        if(resp){
                            this.initAdmin();
                        }
                    })
                }
            },
            showPop(admin){
                this.initAllRoles();
                let roles = admin.roles;
                this.selectedRoles = [];
                roles.forEach(r=>{
                    this.selectedRoles.push(r.id);
                });
            },
            initAllRoles(){
                this.getRequest('/system/admin/roles').then(resp=>{
                    if(resp){
                        this.allRoles = resp;
                    }
                })
            },
            enableChange(item){
                let admin = {
                    id: '',
                    enabled: false
                }
                admin.id = item.id
                admin.enabled = item.enabled
                console.log(item.username);
                this.postRequest('/system/admin/update/',admin).then(res=> {
                    if (res) {
                        this.initAdmin();
                    }
                })
            },
            deleteAdmin(admin){
                this.$confirm('此操作将永久删除【'+admin.name+'】管理员, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteRequest('/system/admin/delete/'+admin.id).then(res=>{
                        if (res){
                            this.initAdmin();
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            search(){
                this.initAdmin();
            },
            initAdmin(){
                this.getRequest('/system/admin/listAll/?keywords='+this.keywords).then(res =>{
                    if (res){
                        this.admins = res
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .admin-container{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .admin-card{
        width: 350px;
        margin-bottom: 20px;
    }
    .admin-image{
        width: 72px;
        height: 72px;
        border-radius: 72px;
    }
    .img-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .userinfo{
        font-size: 12px;
        color: #a6bed7;
    }
</style>
