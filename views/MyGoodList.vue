<template>
  <MyTable :list="list">
    <template #header>
      <th>#</th>
      <th>商品名称</th>
      <th>价格</th>
      <th>标签</th>
      <th>操作</th>
    </template>
    <template #content="scope">
      <td>{{ scope.row.id }}</td>
      <td>{{ scope.row.goods_name }}</td>
      <td>{{ scope.row.goods_price }}</td>
      <td class="tag">
        <input
          type="text"
          class="tag-input form-control"
          style="width: 100px"
          v-if="scope.row.inputVisible"
          @blur="scope.row.inputVisible = false"
          @keyup.enter="enterFn(scope.row)"
          @keyup.esc="scope.row.inputVisible = false"
          v-model="scope.row.inputValue"
          v-focus
        />
        <button
          class="btn btn-primary btn-sm add-tag"
          v-else
          @click="scope.row.inputVisible = true"
        >
          +Tag
        </button>
        <span
          style="margin-left: 10px"
          v-for="(item, index) in scope.row.tags"
          :key="index"
          class="badge badge-warning"
        >
          {{ item }}
        </span>
      </td>
      <td><button @click="del(id)">删除</button></td>
    </template>
  </MyTable>
</template>

<script>
import MyTable from ".././src/components/MyTable.vue";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      this.list = res.data.data;
      console.log(this.list);
    });
  },
  methods: {
    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(val) {
      if (val.inputValue.trim() == "") {
        val.inputValue = "";
        return alert("不会打字？");
      }
      val.tags.push(val.inputValue);
      val.inputValue = "";
    },
  },
  components: {
    MyTable,
  },
};
</script>

<style>
.tag .badge-warning {
  background-color: yellow;
  color: black;
}
</style>
