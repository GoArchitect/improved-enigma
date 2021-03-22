<template>
  <div>
    <Button type="primary" v-on:click="getPdf()">
      下载PDF<Icon type="md-download" />
    </Button>
    <div class="container-fluid" id="pdfDom" s>
      <Row>
        <Col span="16" offset="4" class="contract-title"> 二手房买卖合同 </Col>
      </Row>
      <Row :gutter="16">
        <Col span="2" offset="4" class="contract-content"> 卖方（甲方)： </Col>
        <Col span="2">
          <Input
            v-model="keyWordData.sellerName"
            size="small"
            placeholder="卖方姓名"
          />
        </Col>
        <Col span="2" class="contract-content"> 身份证号码： </Col>
        <Col span="2">
          <Input
            v-model="keyWordData.sellerIdNum"
            size="small"
            placeholder="卖方身份证号码"
          />
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="2" offset="4" class="contract-content"> 买方（乙方)： </Col>
        <Col span="2">
          <Input
            v-model="keyWordData.buyerName"
            size="small"
            placeholder="买方姓名"
          />
        </Col>
        <Col span="2" class="contract-content"> 身份证号码： </Col>
        <Col span="2">
          <Input
            v-model="keyWordData.buyerIdNum"
            size="small"
            placeholder="买方身份证号码"
          />
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <p>
            根据《中华人民共和国合同经济法》、《中华人民共和国城市房地产管理法》及其他有关法律、法规之规定，甲、乙双方在平等、自愿、协商一致的基础上，就乙方向甲方构面房产签订合同，以资共同信守执行。
          </p>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <div class="contract-second-title">第一条</div>
          <p>
            乙方同意购买甲方拥有的座落在<Input
              v-model="keyWordData.nameOfCity"
              size="small"
              placeholder="请输入市名"
              class="input-text"
            />
            市
            <Input
              v-model="keyWordData.nameOfArea"
              size="small"
              placeholder="请输入区名"
              class="input-text"
            />
            区
            <Input
              v-model="keyWordData.detailAddress"
              size="small"
              placeholder="请输入详细地址"
              class="input-text"
            />
            拥有的房产住宅，建筑面积为
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入住房面积"
              class="input-text"
            />
            平方米。详该房屋的房产证号为
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入房产证号"
              class="input-text"
            />
            ,租赁该房屋
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入住宅/办公"
              class="input-text"
            />
            （住宅或办公）使用。
          </p>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <div class="contract-second-title">第二条</div>
          <p>
            乙方同意购买甲方拥有的座落在
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入市名"
              class="input-text"
            />
            市
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入区名"
              class="input-text"
            />
            区
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入详细地址"
              class="input-text"
            />
            拥有的房产住宅，建筑面积为
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入住房面积"
              class="input-text"
            />
            平方米。详该房屋的房产证号为
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入房产证号"
              class="input-text"
            />
            ,租赁该房屋
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入住宅/办公"
              class="input-text"
            />
            （住宅或办公）使用。
          </p>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <div class="contract-second-title">第三条</div>
          <p>
            1、甲乙双方同意以银行按揭方式付款，并约定在房地产交易中心缴交税费当日支付首付款（含定金）人民币
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            元整给甲方，剩余房款人民币
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            元整申请银行按揭（如银行实际审批数额不足前述申请额度，乙方应在缴交税费当日将差额一并支付给甲方），并于银行放款当日付给甲方。
          </p>
          <p>
            2、甲乙双方同意以一次性付款方式付款，并约定在房地产交易中心缴交税费当日支付首付款（含定金）人民币
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            元整给甲方，剩余房款人民币
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            元整于产权交割完毕当日付给甲方。
          </p>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <div class="contract-second-title">第四条</div>
          <p>
            甲方应于收到乙方全额房款之日起
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            天内将交易的房产全部交付给乙方使用，并应在交房当日将
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            等费用结清。
          </p>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <div class="contract-second-title">第五条</div>
          <p>
            税费分担
            甲乙双方应遵守国家房地产政策、法规，并按照规定缴纳办理房地产过户手续所需缴纳的税费。经双方协商，交易税费由
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            方承担，中介费及代办产权过户手续费由
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            方承担。
          </p>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <div class="contract-second-title">第六条</div>
          <p>
            违约责任
            甲、乙双方合同签订后，若乙方中途违约，应书面通知甲方，甲方应在
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            日内将乙方的已付款不计利息返还给乙方，但购房定金归甲方所有。若甲方中途违约，应书面通知乙方，并自违约之日起
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            日内应以乙方所付定金的双倍及已付款返还给乙方。
          </p>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <div class="contract-second-title">第七条</div>
          <p>
            本合同如需办理公证，经国家公证机关
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
            公证处公证。
          </p>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <div class="contract-second-title">第八条</div>
          <p>
            本合同发生争议的解决方式：在履约过程中发生的争议，双方可通过协商、诉讼方式解决。
          </p>
        </Col>
      </Row>
      <Row>
        <Col span="16" offset="4" class="contract-content">
          <div class="contract-second-title">第九条</div>
          <p>
            双方约定的其他事项：
            <Input
              v-model="keyWordData.todo"
              size="small"
              placeholder="请输入"
              class="input-text"
            />
          </p>
        </Col>
      </Row>
      <Row :gutter="16" style="margin-top: 2%">
        <Col span="3" offset="4" class="contract-content">甲方：</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.nameOfPartyA"
            size="small"
            placeholder="甲方"
          />
        </Col>
        <Col span="3" offset="4" class="contract-content">乙方：</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.nameOfPartyB"
            size="small"
            placeholder="乙方"
          />
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="3" offset="4" class="contract-content">甲方通讯地址：</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.addressOfPartyA"
            size="small"
            placeholder="甲方通讯地址"
          />
        </Col>
        <Col span="3" offset="4" class="contract-content">乙方通讯地址：</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.addressOfPartyB"
            size="small"
            placeholder="乙方通讯地址"
          />
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="3" offset="4" class="contract-content">甲方联系方式：</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.phoneNumOfPartyA"
            size="small"
            placeholder="甲方联系方式："
          />
        </Col>
        <Col span="3" offset="4" class="contract-content">乙方联系方式：</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.phoneNumOfPartyB"
            size="small"
            placeholder="乙方联系方式："
          />
        </Col>
      </Row>
      <Row :gutter="16" style="margin-top: 1%">
        <Col span="3" offset="4" class="contract-content">丙方</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.nameOfPartyC"
            size="small"
            placeholder="丙方"
          />
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="3" offset="4" class="contract-content">经办人</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.operator"
            size="small"
            placeholder="经办人"
          />
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="3" offset="4" class="contract-content">门店服务热线：</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.phoneNumOfPartyC"
            size="small"
            placeholder="门店服务热线"
          />
        </Col>
        <Col span="3" offset="4" class="contract-content">签约日期：</Col>
        <Col span="2">
          <Input
            v-model="keyWordData.dateOfContract"
            size="small"
            placeholder="签约日期"
          />
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import { peonyApi } from "@/api/peony";

export default {
  name: "CodeReviewListForm",
  components: {},
  props: {
    //是否为更新表单
    isUpdate: {
      type: Boolean,
      default: true,
    },
    //更新的表单数据对象
    updateData: {
      type: Object,
    },
  },
  data() {
    return {
      // 导出PDF文件名称
      htmlTitle: "二手房买卖合同",
      // 合同关键数据
      keyWordData: {
        sellerName: "",
        sellerIdNum: "",
        buyerName: "",
        buyerIdNum: "",
      },
      //表单数据
      form: {
        //品种
        kind: null,
        //名字
        name: null,
        //颜色
        color: null,
        //图片链接
        imageUrl: null,
      },
      //表单验证
      formValidate: {
        //品种
        kind: [{ required: true, message: "请输入品种", trigger: "blur" }],
        //名字
        name: [{ required: true, message: "请输入名字", trigger: "blur" }],
        //颜色
        color: [{ required: true, message: "请输入颜色", trigger: "blur" }],
        //图片链接
        imageUrl: [
          { required: true, message: "请输入图片链接", trigger: "blur" },
        ],
      },
    };
  },
  watch: {
    updateData: function (newValue, oldValue) {
      this.$refs["form"].resetFields();
      if (this.isUpdate) {
        for (let k in this.form) {
          this.$set(this.form, k, newValue[k]);
        }
        this.$set(this.form, "id", newValue["id"]);
      }
    },
    isUpdate: function (newValue, oldValue) {
      if (!newValue) {
        this.resetForm();
        this.$refs["form"].resetFields();
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    cancel() {
      this.$emit("on-form-close");
    },
    save() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.isUpdate) {
            this.update();
          } else {
            this.add();
          }
        } else {
          this.$Message.error("参数验证错误，请仔细填写表单数据!");
        }
      });
    },
    resetForm() {
      this.form = {
        //品种
        kind: null,
        //名字
        name: null,
        //颜色
        color: null,
        //图片链接
        imageUrl: null,
      };
      this.$refs["form"].resetFields();
    },
    async add() {
      this.$Spin.show();
      let res = await peonyApi.addPeony(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
    async update() {
      this.$Spin.show();
      let res = await peonyApi.updatePeony(this.form);
      this.$Message.success(res.msg);
      this.$Spin.hide();
      this.resetForm();
      this.$emit("on-form-close");
    },
  },
};
</script>

<style>
.contract-title {
  font-size: 45px;
  text-align: center;
  margin-top: 8%;
  margin-bottom: 5%;
  color: #17233d;
}
.contract-second-title {
  font-size: 16px;
  font-weight: 800;
  color: #515a6e;
}
.contract-content {
  font-size: 16px;
  color: #515a6e;
}
.input-text {
  width: 100px;
  margin-right: 25px;
}
#contractpdf {
  font-size: 27px;
}
p {
  text-indent: 1em;
}
</style>
