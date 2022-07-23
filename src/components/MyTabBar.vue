<template>
  <div>
    <router-view></router-view>
    <div class="my-tab-bar">
      <div
        class="tab-item"
        v-for="(item, index) in tabList"
        :key="item.componentName"
        :class="{ current: current == index }"
        @click="btn(index)"
      >
        <!-- 图标 -->
        <span class="iconfont" :class="item.iconText"></span>
        <!-- 文字 -->
        <span>{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
      arr: [
        {
          path: "/mygoodlist",
          name: "MyGoodList",
        },
        {
          path: "/mysearch",
          name: "MySearch",
        },
        {
          path: "/myinfo",
          name: "MyInfo",
        },
      ],
    };
  },

  props: {},
  methods: {
    btn(index) {
      this.$router.push({
        path: this.arr[index].path,
        name: this.arr[index].name
      });
      // {
      //   path: this.arr[index].path, // 都去 router/index.js定义
      //   //
      //   name:this.arr[index].name ,
      // }
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.current {
  color: #1d7bff;
}
</style>
