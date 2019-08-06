<template>
  <div id="single">
    <div class="first">
      <div class="left">
        <div class>
          <img-zoom
            src="https://img.alicdn.com/imgextra/i2/TB1BGsZLVXXXXXwapXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
            bigsrc="https://img.alicdn.com/imgextra/i2/TB1BGsZLVXXXXXwapXXXXXXXXXX_!!0-item_pic.jpg"
            :configs="configs"
          ></img-zoom>
        </div>
      </div>
      <div class="right">
        <h1>THE NORTH FACE/北面 17年春夏男款户外防风皮肤风衣NF00CUZ1</h1>
        <!-- <p>温和去黑头 告别草莓鼻</p> -->
        <div class="place">
          <dl>
            <dt>价格</dt>
            <dd>
              <em>￥</em>
              <span class="normal">1090.00</span>
            </dd>
          </dl>
          <dl>
            <dt>促销价</dt>
            <dd>
              <em>￥</em>
              <span class="special">685.00</span>
            </dd>
          </dl>
          <dl>
            <dt>规格</dt>
            <dd class="ul">
              <ul @click="change($event)">
                <li class="only" ref="only">蓝色</li>
                <li>黑色</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>送货地址</dt>
            <dd>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </dd>
          </dl>
          <div class="two">
            <el-button class="but buy" type="text" @click="dialogVisible = true">立即购买</el-button>

            <el-dialog
              title="支付"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
            >
              <span>这是一个二维码</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">支 付</el-button>
              </span>
            </el-dialog>
            <div class="but add">
              <p align="center" @click="myself()">加入购物车</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second">
      <div class="shopstore">
        <div>
          <p>类似商品</p>
        </div>
        <div class="similler">
          <img src="../assets/similler.jpg" alt>
          <div class="title">
            <p>
              <a href target="_blank">百纯家具小户型布艺沙发转角出租房北欧套装简约现代客厅整装组合</a>
            </p>
            <p class="price">
              <span class="symbol">¥</span>
              <span class="money">2500.00</span>
            </p>
          </div>
        </div>
        <div class="similler">
          <img src="../assets/similler.jpg" alt>
          <div class="title">
            <p>
              <a href target="_blank">百纯家具小户型布艺沙发转角出租房北欧套装简约现代客厅整装组合</a>
            </p>
            <p class="price">
              <span class="symbol">¥</span>
              <span class="money">2500.00</span>
            </p>
          </div>
        </div>
        <div class="similler">
          <img src="../assets/similler.jpg" alt>
          <div class="title">
            <p>
              <a href target="_blank">百纯家具小户型布艺沙发转角出租房北欧套装简约现代客厅整装组合</a>
            </p>
            <p class="price">
              <span class="symbol">¥</span>
              <span class="money">2500.00</span>
            </p>
          </div>
        </div>
      </div>
      <div class="message">
        <div class="top">
          <p align="center">产品介绍</p>
        </div>
        <img src="../assets/buttom.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import imgZoom from "vue2.0-zoom";
export default {
  name: "single",
  data() {
    return {
      options: [{
          value: '选项1',
          label: '湖南省长沙市'
        }, ],
        value: '',
      dialogVisible: false,
      configs: {
        width: 650,
        height: 500,
        maskWidth: 100,
        maskHeight: 100,
        maskColor: "red",
        maskOpacity: 0.2
      },
      onlyArray: []
    };
  },
  components: { imgZoom },
  methods: {
    myself() {
      //加一些与后台交互得操作
      this.$router.push("/myself");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    change(e) {
      //   alert(e);
      var item = e.target;
      this.onlyArray.push(item);
      if (this.onlyArray.length == 1) {
        this.$refs.only.setAttribute("class", "");
      } else {
        this.onlyArray[0].setAttribute("class", "");
      }
      item.setAttribute("class", "only");
      if (this.onlyArray.length == 2) {
        this.onlyArray.shift();
      }
    }
  }
};
</script>
<style scoped>
#single {
  margin: 0 150px;
}
.el-button--text:hover {
  color: #ff0036;
  background-color: #ffeded;
  border: 1px solid #ff0036;
}
.money {
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  color: #c00;
}
.symbol {
  font-family: arial;
  margin-right: 3px;
}
.buy {
  border: 1px solid #ff0036;
  color: #ff0036;
  background-color: #ffeded;
  margin-left: 50px !important;
}
.normal {
  text-decoration: line-through;
  font-size: 14px;
}
.two {
  margin-top: 70px;
  display: flex;
}
.similler {
  display: flex;
  margin-bottom: 30px;
}

.title > p {
  height: 16px;
  margin: 0;
  font-size: 10px;
  overflow: hidden;
  margin-left: 5px;
}
a {
  text-decoration: none;
  color: #666;
}
.but {
  width: 178px;
  height: 38px;
  margin: 0 15px;
  cursor: pointer;
}
.add {
  background-color: #ff0036;
  border: 1px solid #ff0036;
  color: #fff;
}
.but > p {
  line-height: 38px;
  margin: 0;
}
.special {
  vertical-align: middle;
  font-size: 30px;
  color: #ff0036;
  font-weight: bolder;
  font-family: Arial;
}
.ul>ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ul>ul>li {
  cursor: pointer;
  padding: 10px;
  float: left;
  border: 1px solid #b8b7bd;
  margin-left: 20px;
  margin-top: 10px;
}
.only {
  border: 1px solid red !important;
}
.first {
  display: flex;
  margin-top: 30px;
}
.second {
  margin-top: 50px;
  display: flex;
  /* height: 100px; */
}
.left {
  flex: 1;
}
dt {
  font-size: 14px;
}
dt,
dd {
  display: inline-block;
}
em {
  font-family: arial;
  font-style: normal;
}
.right {
  flex: 1.3;
  padding: 0 10px;
  background-color: #e9e9e9;
  /* background-color: blue; */
}
.place {
  padding-top: 40px;
}
h1 {
  line-height: 1;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}
.shopstore {
  flex: 0.5;
  /* background-color: #000000; */
}
.message {
  flex: 2;
  /* background-color: aqua; */
}
</style>
