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
      <FormItem class="remember">
        <Checkbox>记住密码</Checkbox>
      </FormItem>
      <FormItem>
        <Button :loading="btnLoading" @click="login" long type="primary"
        >登录
        </Button
        >
      </FormItem>
    </Form>
  </div>
</template>
<script>

export default {
  name: 'LoginForm',
  props: {
    // 登录名规则
    loginNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '账号不能为空', trigger: 'blur' }];
      }
    },
    // 密码规则
    loginPwdRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '密码不能为空', trigger: 'blur' }];
      }
    }
  },
  data () {
    return {
      // 防止重复提交 按钮加载状态
      btnLoading: false,
      formData: {
        code: '',
        codeUuid: '',
        loginName: 'sa',
        loginPwd: '123456'
      },
      codeUrl: ''
    };
  },
  computed: {
    rules () {
      return {
        loginName: this.loginNameRules,
        loginPwd: this.loginPwdRules
      };
    }
  },
  methods: {
    // 登录
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loginSuccess();
        }
      });
    },
    // 登录 - 异步
    async loginSuccess () {
      try {
        this.btnLoading = true;
        // TODO: 待修改数据为接口调用获得
        // let loginResult = await loginApi.login(this.formData);
        let loginResult = {
          code: 1,
          msg: '操作成功!',
          success: true,
          data: {
            id: 1,
            loginName: 'sa',
            nickName: '15515515515',
            actualName: '管理员',
            phone: '13112312131',
            idCard: '410306199202020020',
            birthday: '1992-02-02',
            createUser: null,
            departmentId: 1,
            isLeave: 0,
            isDisabled: 0,
            departmentName: '1024创新实验室',
            email: null,
            isSuperMan: true,
            privilegeList: [
              {
                key: 'Contract',
                type: 1,
                url: '/contract',
                parentKey: 'Business'
              },
              {
                key: 'Transaction',
                type: 1,
                url: '/contract/transaction',
                parentKey: 'Contract'
              },
              {
                key: 'Tenancy',
                type: 1,
                url: '/contract/tenancy',
                parentKey: 'Contract'
              },
              {
                key: 'Intermediate',
                type: 1,
                url: '/contract/intermediate',
                parentKey: 'Contract'
              },
              {
                key: 'transaction-list-add',
                type: 2,
                url: 'transacationController.add',
                parentKey: 'Transaction'
              },
              {
                key: 'Authenticate',
                type: 1,
                url: '/authenticate',
                parentKey: 'Business'
              },
              {
                key: 'Identity',
                type: 1,
                url: '/authenticate/identity',
                parentKey: 'Authenticate'
              },
              {
                key: 'Property',
                type: 1,
                url: '/authenticate/property',
                parentKey: 'Authenticate'
              },
              {
                key: 'House',
                type: 1,
                url: '/house',
                parentKey: 'Business'
              },
              {
                key: 'NewHouseList',
                type: 1,
                url: '/house/new-house-list',
                parentKey: 'House'
              },
              {
                key: 'OldHouseList',
                type: 1,
                url: '/house/old-house-list',
                parentKey: 'House'
              },
              {
                key: 'Business',
                type: 1,
                url: '/business',
                parentKey: null
              }
            ],
            xaccessToken:
              'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzOWJmZWIyMC1kNDYxLTQyNjQtODY2NC1iMTk3ZWZjNjU4NGMiLCJpZCI6MSwibmJmIjoxNjE2MzExNjI2LCJleHAiOjE2MTYzOTgwMjZ9.9pJbIGokiZKVQsMcu9x8U5kNssTuJV0fKi921fSsh506BdJ8waBeeVtJHBfw4hemxOCCO0ksicFt_cGAEJa7oQ'
          }
        };
        let loginInfo = loginResult.data;
        localStorage.clear();
        this.$store.commit('setToken', loginInfo.xaccessToken);
        // 保存用户登录
        this.$store.commit('setUserLoginInfo', {
          id: loginInfo.id,
          loginName: loginInfo.loginName,
          nickName: loginInfo.nickName,
          actualName: loginInfo.actualName,
          phone: loginInfo.phone,
          isSuperMan: loginInfo.isSuperMan
        });
        // 设置权限
        this.$store.commit('setUserPrivilege', loginInfo.privilegeList);
        this.btnLoading = false;
        // 跳转到首页
        this.$router.push({
          name: this.$config.homeName
        });
      } catch (e) {
        console.error(e);
        this.btnLoading = false;
      }
    }
  }
};
</script>
