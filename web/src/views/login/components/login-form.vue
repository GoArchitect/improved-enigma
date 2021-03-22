<template>
  <div>
    <Form
      :model="formData"
      :rules="rules"
      @keydown.enter.native="login"
      ref="loginForm"
    >
      <FormItem prop="loginName">
        <Input placeholder="请输入用户名" v-model="formData.loginName"></Input>
      </FormItem>
      <FormItem prop="loginPwd">
        <Input
          placeholder="请输入密码"
          type="password"
          v-model="formData.loginPwd"
        ></Input>
      </FormItem>
      <!-- <FormItem prop="code">
        <Input class="code-input" placeholder="请输入验证码" v-model="formData.code"></Input>
        <img :src="codeUrl" @click="verificationCode" class="codeUrl" v-if="codeUrl" />
      </FormItem> -->
      <FormItem class="remember">
        <Checkbox>记住密码</Checkbox>
      </FormItem>
      <FormItem>
        <Button :loading="btnLoading" @click="login" long type="primary"
          >登录</Button
        >
      </FormItem>
      <!-- <div class="other-way">
        <p class="inline" style="float:left">其他方式登陆(账号：demo/123456)</p>
        <div class="inline align" style="float:right">
          <img alt class="marginLeft" src="../../../assets/images/login-taobao.png" />
          <img alt class="marginLeft" src="../../../assets/images/login-alipay.png" />
          <img alt class="marginLeft" src="../../../assets/images/login-sina.png" />
        </div>
      </div> -->
    </Form>
  </div>
</template>
<script>
import { loginApi } from "@/api/login";
import { PRIVILEGE_TYPE } from "@/constants/login";
export default {
  name: "LoginForm",
  props: {
    // 登录名规则
    loginNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      },
    },
    // 密码规则
    loginPwdRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      },
    },
    // ,
    // // 验证码规则
    // codedRules: {
    //   type: Array,
    //   default: () => {
    //     return [{ required: true, message: '验证码不能为空', trigger: 'blur' }];
    //   }
    // }
  },
  data() {
    return {
      // 防止重复提交 按钮加载状态
      btnLoading: false,
      formData: {
        code: "",
        codeUuid: "",
        loginName: "sa",
        loginPwd: "123456",
      },
      codeUrl: "",
    };
  },
  computed: {
    rules() {
      return {
        loginName: this.loginNameRules,
        loginPwd: this.loginPwdRules,
        code: this.codedRules,
      };
    },
  },
  mounted() {
    // this.verificationCode();
  },
  methods: {
    // 获取验证码
    async verificationCode() {
      let result = await loginApi.getVerificationCode();
      let datas = result.data;
      this.formData.codeUuid = datas.uuid;
      this.codeUrl = datas.code;
    },
    // 登录
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loginSuccess();
        }
      });
    },
    // 登录 - 异步
    async loginSuccess() {
      try {
        this.btnLoading = true;
        // TODO: 待修改数据为接口调用获得
        // let loginResult = await loginApi.login(this.formData);
        let loginResult = {
          code: 1,
          msg: "操作成功!",
          success: true,
          data: {
            id: 1,
            loginName: "sa",
            nickName: "15515515515",
            actualName: "管理员",
            phone: "13112312131",
            idCard: "410306199202020020",
            birthday: "1992-02-02",
            createUser: null,
            departmentId: 1,
            isLeave: 0,
            isDisabled: 0,
            departmentName: "1024创新实验室",
            email: null,
            isSuperMan: true,
            privilegeList: [
              {
                key: "Contract",
                type: 1,
                url: "/contract",
                parentKey: "Business",
              },
              {
                key: "Transaction",
                type: 1,
                url: "/contract/transaction",
                parentKey: "Contract",
              },
              {
                key: "Tenancy",
                type: 1,
                url: "/contract/tenancy",
                parentKey: "Contract",
              },
              {
                key: "Intermediate",
                type: 1,
                url: "/contract/intermediate",
                parentKey: "Contract",
              },
              {
                key: "transaction-list-add",
                type: 2,
                url: "transacationController.add",
                parentKey: "Transaction",
              },
              {
                key: "Authenticate",
                type: 1,
                url: "/authenticate",
                parentKey: "Business",
              },
              {
                key: "Identity",
                type: 1,
                url: "/authenticate/identity",
                parentKey: "Authenticate",
              },
              {
                key: "Property",
                type: 1,
                url: "/authenticate/property",
                parentKey: "Authenticate",
              },
              {
                key: "House",
                type: 1,
                url: "/house",
                parentKey: "Business",
              },
              {
                key: "NewHouseList",
                type: 1,
                url: "/house/new-house-list",
                parentKey: "House",
              },
              {
                key: "OldHouseList",
                type: 1,
                url: "/house/old-house-list",
                parentKey: "House",
              },
              {
                key: "Business",
                type: 1,
                url: "/business",
                parentKey: null,
              },
              // {
              //   key: "Peony",
              //   type: 1,
              //   url: "/peony",
              //   parentKey: "Business",
              // },
              // {
              //   key: "PeonyList",
              //   type: 1,
              //   url: "/peony/peony-list",
              //   parentKey: "Peony",
              // },
              // {
              //   key: "PeonyList1",
              //   type: 1,
              //   url: "/peony/peony-list1",
              //   parentKey: "Peony",
              // },
              // {
              //   key: "Email",
              //   type: 1,
              //   url: "/email",
              //   parentKey: "Business",
              // },
              // {
              //   key: "EmailList",
              //   type: 1,
              //   url: "/email/email-list",
              //   parentKey: "Email",
              // },
              // {
              //   key: "SendMail",
              //   type: 1,
              //   url: "/email/send-mail",
              //   parentKey: "Email",
              // },
              // {
              //   key: "KeepAlive",
              //   type: 1,
              //   url: "/keep-alive",
              //   parentKey: "Business",
              // },
              // {
              //   key: "KeepAliveContentList",
              //   type: 1,
              //   url: "/keep-alive/content-list",
              //   parentKey: "KeepAlive",
              // },
              // {
              //   key: "KeepAliveAddContent",
              //   type: 1,
              //   url: "/keep-alive/add-content",
              //   parentKey: "KeepAlive",
              // },
              // {
              //   key: "Notice",
              //   type: 1,
              //   url: "/notice",
              //   parentKey: "Business",
              // },
              // {
              //   key: "NoticeList",
              //   type: 1,
              //   url: "/notice/notice-list",
              //   parentKey: "Notice",
              // },
              // {
              //   key: "PersonNotice",
              //   type: 1,
              //   url: "/notice/person-notice",
              //   parentKey: "Notice",
              // },
              // {
              //   key: "NoticeDetail",
              //   type: 1,
              //   url: "/notice/notice-detail",
              //   parentKey: "Notice",
              // },
              // {
              //   key: "ThreeRouter",
              //   type: 1,
              //   url: "/three-router",
              //   parentKey: "Business",
              // },
              // {
              //   key: "LevelTwo",
              //   type: 1,
              //   url: "/three-router/level-two",
              //   parentKey: "ThreeRouter",
              // },
              // {
              //   key: "ThreeLevelRouterView",
              //   type: 1,
              //   url: "/three-router/level-two/level-three1",
              //   parentKey: "LevelTwo",
              // },
              // {
              //   key: "RoleTwoTwo",
              //   type: 1,
              //   url: "/three-router/level-two/level-three2",
              //   parentKey: "LevelTwo",
              // },
              // {
              //   key: "RoleOneOne",
              //   type: 1,
              //   url: "/three-router/level-two2",
              //   parentKey: "ThreeRouter",
              // },
              // {
              //   key: "System",
              //   type: 1,
              //   url: "/system",
              //   parentKey: null,
              // },
              // {
              //   key: "Employee",
              //   type: 1,
              //   url: "/employee",
              //   parentKey: "System",
              // },
              // {
              //   key: "RoleManage",
              //   type: 1,
              //   url: "/employee/role",
              //   parentKey: "Employee",
              // },
              // {
              //   key: "PositionList",
              //   type: 1,
              //   url: "/employee/position",
              //   parentKey: "Employee",
              // },
              // {
              //   key: "RoleEmployeeManage",
              //   type: 1,
              //   url: "/employee/role-employee-manage",
              //   parentKey: "Employee",
              // },
              // {
              //   key: "File",
              //   type: 1,
              //   url: "/file",
              //   parentKey: "System",
              // },
              // {
              //   key: "FileList",
              //   type: 1,
              //   url: "/file/file-list",
              //   parentKey: "File",
              // },
              // {
              //   key: "UserLog",
              //   type: 1,
              //   url: "/user-log",
              //   parentKey: "System",
              // },
              // {
              //   key: "UserOperateLog",
              //   type: 1,
              //   url: "/user-log/user-operate-log",
              //   parentKey: "UserLog",
              // },
              // {
              //   key: "UserLoginLog",
              //   type: 1,
              //   url: "/user-log/user-login-log",
              //   parentKey: "UserLog",
              // },
              // {
              //   key: "SystemSetting",
              //   type: 1,
              //   url: "/system-setting",
              //   parentKey: "System",
              // },
              // {
              //   key: "SystemConfig",
              //   type: 1,
              //   url: "/system-setting/system-config",
              //   parentKey: "SystemSetting",
              // },
              // {
              //   key: "SystemPrivilege",
              //   type: 1,
              //   url: "/system-setting/system-privilege",
              //   parentKey: "SystemSetting",
              // },
              // {
              //   key: "Support",
              //   type: 1,
              //   url: "/support",
              //   parentKey: null,
              // },
              // {
              //   key: "ApiDoc",
              //   type: 1,
              //   url: "/api-doc",
              //   parentKey: "Support",
              // },
              // {
              //   key: "Swagger",
              //   type: 1,
              //   url: "/api-doc/swagger",
              //   parentKey: "ApiDoc",
              // },
              // {
              //   key: "HeartBeat",
              //   type: 1,
              //   url: "/heart-beat",
              //   parentKey: "Support",
              // },
              // {
              //   key: "HeartBeatList",
              //   type: 1,
              //   url: "/heart-beat/heart-beat-list",
              //   parentKey: "HeartBeat",
              // },
              // {
              //   key: "Monitor",
              //   type: 1,
              //   url: "/monitor",
              //   parentKey: "Support",
              // },
              // {
              //   key: "OnlineUser",
              //   type: 1,
              //   url: "/monitor/online-user",
              //   parentKey: "Monitor",
              // },
              // {
              //   key: "Sql",
              //   type: 1,
              //   url: "/monitor/sql",
              //   parentKey: "Monitor",
              // },
              // {
              //   key: "Reload",
              //   type: 1,
              //   url: "/reload",
              //   parentKey: "Support",
              // },
              // {
              //   key: "SmartReloadList",
              //   type: 1,
              //   url: "/reload/smart-reload-list",
              //   parentKey: "Reload",
              // },
              // {
              //   key: "Task",
              //   type: 1,
              //   url: "/task",
              //   parentKey: "Support",
              // },
              // {
              //   key: "TaskList",
              //   type: 1,
              //   url: "/system-setting/task-list",
              //   parentKey: "Task",
              // },
              // {
              //   key: "peony-list-add",
              //   type: 2,
              //   url: "",
              //   parentKey: "NewHousingList",
              // },
              // {
              //   key: "peony-list-update",
              //   type: 2,
              //   url: "",
              //   parentKey: "NewHousingList",
              // },
              // {
              //   key: "peony-list-batch-delete",
              //   type: 2,
              //   url: "",
              //   parentKey: "NewHousingList",
              // },
              // {
              //   key: "peony-list-batch-export",
              //   type: 2,
              //   url: "",
              //   parentKey: "NewHousingList",
              // },
              // {
              //   key: "peony-list-export-all",
              //   type: 2,
              //   url: "",
              //   parentKey: "NewHousingList",
              // },
              // {
              //   key: "peony1-list-query",
              //   type: 2,
              //   url: "",
              //   parentKey: "OldHousingList",
              // },
              // {
              //   key: "peony1-list-add",
              //   type: 2,
              //   url: "",
              //   parentKey: "OldHousingList",
              // },
              // {
              //   key: "peony1-list-update",
              //   type: 2,
              //   url: "",
              //   parentKey: "OldHousingList",
              // },
              // {
              //   key: "peony1-list-batch-delete",
              //   type: 2,
              //   url: "",
              //   parentKey: "OldHousingList",
              // },
              // {
              //   key: "peony1-list-batch-export",
              //   type: 2,
              //   url: "",
              //   parentKey: "OldHousingList",
              // },
              // {
              //   key: "peony1-list-export-all",
              //   type: 2,
              //   url: "",
              //   parentKey: "OldHousingList",
              // },
              // {
              //   key: "email-query",
              //   type: 2,
              //   url: "",
              //   parentKey: "EmailList",
              // },
              // {
              //   key: "email-add",
              //   type: 2,
              //   url: "",
              //   parentKey: "EmailList",
              // },
              // {
              //   key: "email-update",
              //   type: 2,
              //   url: "",
              //   parentKey: "EmailList",
              // },
              // {
              //   key: "email-delete",
              //   type: 2,
              //   url: "",
              //   parentKey: "EmailList",
              // }
            ],
            xaccessToken:
              "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzOWJmZWIyMC1kNDYxLTQyNjQtODY2NC1iMTk3ZWZjNjU4NGMiLCJpZCI6MSwibmJmIjoxNjE2MzExNjI2LCJleHAiOjE2MTYzOTgwMjZ9.9pJbIGokiZKVQsMcu9x8U5kNssTuJV0fKi921fSsh506BdJ8waBeeVtJHBfw4hemxOCCO0ksicFt_cGAEJa7oQ",
          },
        };
        let loginInfo = loginResult.data;
        localStorage.clear();
        this.$store.commit("setToken", loginInfo.xaccessToken);
        // 保存用户登录
        this.$store.commit("setUserLoginInfo", {
          id: loginInfo.id,
          loginName: loginInfo.loginName,
          nickName: loginInfo.nickName,
          actualName: loginInfo.actualName,
          phone: loginInfo.phone,
          isSuperMan: loginInfo.isSuperMan,
        });
        //设置权限
        this.$store.commit("setUserPrivilege", loginInfo.privilegeList);
        this.btnLoading = false;
        // 跳转到首页
        this.$router.push({
          name: this.$config.homeName,
        });
      } catch (e) {
        //TODO zhuoda sentry
        console.error(e);
        this.btnLoading = false;
        //this.verificationCode();
      }
    },
  },
};
</script>