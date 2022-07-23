<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <!-- <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th> -->
        <slot name="header"></slot>
      </tr>
      
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="(item,index) in list" :key="item.id">
        <!-- <td>{{item.id}}</td>
        <td>{{item.goods_name}}</td>
        <td>{{item.goods_price}}</td>
        <td>{{item.tags}}</td>
        <td><button>删除</button></td> -->
        <slot name="content" :row="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MyTable',
  props :{
    list :{
      type : Array,
      dafault :()=>[]
    }
  }
}
</script>


<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>