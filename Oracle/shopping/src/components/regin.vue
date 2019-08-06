<template>
  <div id="regin">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" class="username"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" class="username"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="where">
        <el-select v-model="ruleForm.where" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="ruleForm.phone" class="username"></el-input>
      </el-form-item>
      <el-form-item label="邮编" prop="code">
        <el-input v-model="ruleForm.code" class="username"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "regin",
  data() {
    return {
      ruleForm: {
        username: "",
        name: "",
        phone: "",
        where: "Beijing",
        code: ""
      },
      cities: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ],
      rules: {
        code: [{ required: false }],
        where: [
            { required: true, message: "请输入地址", trigger: "blur" },
        ],
        phone: [
            { required: true, message: "请输入手机号", trigger: "blur" },
            {min:11,max: 11, message: "长度为11", trigger: "blur"}
        ],
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度为3 到 5个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //   //   console.log("error submit!!");
      //     return false;
      //   }
      // });
      //跳转到/myself
      this.$router.push('/lead');
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
#regin {
  margin: 0 auto;
}
.username {
  width: 50%;
}
</style>
