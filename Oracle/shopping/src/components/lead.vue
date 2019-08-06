<template>
  <div id="lead">
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
    <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <p class="regin" @click="regin()">如果没有注册 请点击这里！</p>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  //   name: "lead",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        //判断用户名得函数
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      //   // if (valid) {
      //   //   alert("submit!");
      //   // } else {
      //   //   return false;
      //   // }
        
      //   console.log(valid);
      // });
      if(this.ruleForm2.username == '123'){
          if(this.ruleForm2.pass == '123'){
            // alert('123');
            this.$router.push('/myself');
          }
        }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    regin(){
        this.$router.push('/regin');
    }
  }
};
</script>
<style scoped>
#lead{
    margin: 0 auto;
}
.regin{
    color: #F56C6C;
    position: relative;
    left: 80px;
    cursor: pointer;
}
</style>
