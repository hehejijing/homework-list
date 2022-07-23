<template>
  <div>
    <MyHeader title="我爱一条柴"></MyHeader>
    <div style="margin-top: 45px">
      <!-- <component :is="comName"></component> -->
    </div>
    <MyTabBar ></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";


export default {
  data() {
    return {
      comName: "MyGoodsList",
     
    };
  },
  methods: {

  },
  
  components: {
    MyHeader,
    MyTabBar,

  },
};
</script>

<style></style>
