<template>
  <HelloWorld></HelloWorld>
  <div class="button-set">
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
    >사용자 추가</el-button>
    <el-button>수정</el-button>
    <el-button type="danger">삭제</el-button>
  </div>
  <el-table
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55"
    ></el-table-column>
    <el-table-column
      v-for="(col, index) in columns"
      :key="index"
      :prop="col.prop"
      :label="col.label"
    />
  </el-table>
  <UserAddDialog v-model="dialogFormVisible"></UserAddDialog>
</template>

<script setup>
import { ref as fbRef, child, get, set } from "firebase/database";

const tableData = ref([])
const columns = ref([
  { prop: "userIdx", label: 'Index' },
  { prop: "userId", label: '사번' },
  { prop: "userName", label: '이름' },
  { prop: "userPosition", label: '직위' },
  { prop: "userCompanyName", label: '회사명' },
])
const multipleSelection = ref([])
const dialogFormVisible = ref(false)
const formLabelWidth = '100px'

const db = inject('$db')
const dbRef = fbRef(db)
get(child(dbRef, 'user/')).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val()
    tableData.value = Object.values(data)
    console.log(tableData.value)
  } else {
    console.log('데이터 없음요.')
  }
}).catch((error) => {
  console.error(error)
})

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}
const closeModal = () => {
  dialogFormVisible.value = false
}
const save = () => {
}

</script>

<style scoped>
.button-set {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>
