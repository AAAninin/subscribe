<template>
  <div id="list">
    <div class="tabs" @click="white($event)">
      <div ref="first">综合</div>
      <div>销量从高到低</div>
      <div>信用</div>
      <div>
        价格
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="block"></div>
    </div>

    <div class="list">
      <div class="shop" v-for="item in titles">
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://img.alicdn.com/imgextra/i2/TB1BGsZLVXXXXXwapXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg" class="image pointer" @click="single()">
              <div style="padding: 14px;">
                <span class="pointer">{{item.message}}</span>
                <div class="bottom clearfix">
                  <div class="time">{{item.title}}</div>
                  <el-button type="text" class="button" @click="buy()">购买</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "list",
  data() {
    return {
      listarray: [],
      titles:[
        {message:'蓝色冲锋衣',title:'小可爱的店'},
        {message:'蓝色大衣',title:'小可爱的店'},
        {message:'蓝色长版衣服',title:'小可爱的店'},
        {message:'蓝色运动衣',title:'小可爱的店'},
      ]
    };
  },
  methods: {
    buy(){
      alert('购买成功');
      this.$router.push('/');
    },
    white(e) {
      var item;
      if (e.path.length == 11) {
        var arrlength = e.target.getAttribute("class").length;
        if (arrlength == 16) {
          e.target.setAttribute("class", "el-icon-arrow-down");
        } else {
          e.target.setAttribute("class", "el-icon-arrow-up");
        }
        item = e.path[1];
      } else {
        item = e.target;
      }
      this.listarray.push(item);
      if (this.listarray.length == 1) {
        this.$refs.first.style.borderBottomColor = "#1111";
      } else {
        this.listarray[0].style.borderBottomColor = "#1111";
      }
      item.style.borderBottomColor = "white";
      if (this.listarray.length == 2) {
        this.listarray.shift();
      }
    },
    single(){
      this.$router.push('/single');
    }
  }
};
</script>
<style scoped>
#list {
  margin: 0 100px;
}
.list {
  display: flex;
  margin: 0 10px;
  flex-wrap:wrap;
}
.shop {
  margin: 10px 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.clear {
  clear: both;
}
.tabs {
  display: flex;
  border-left: 1px solid #1111;
}
.tabs > div {
  border-top: 1px solid #1111;
  border-right: 1px solid #1111;
  border-bottom: 1px solid #1111;
  padding: 5px 15px;
  cursor: pointer;
}
.tabs > div:nth-child(1) {
  border-bottom: 1px solid white;
}
.tabs > div:nth-last-child(1) {
  border-top: 1px solid white;
  border-right: 1px solid white;
}
.block {
  flex: 1;
  border-bottom: 1px solid #1111;
}
.pointer{
  cursor: pointer;
}
.button{
  float: right;
}
.time{
  margin-top: 5px;
}
</style>

