<script setup>
import { ref, inject } from 'vue'
import { ref as fbRef, child, get } from "firebase/database";

const tableData = ref([])
const columns = [
  { prop: "userIdx", label: 'Index' },
  { prop: "userId", label: '사번' },
  { prop: "userName", label: '이름' },
  { prop: "userPosition", label: '직위' },
  { prop: "userCompanyName", label: '회사명' },
]

const db = inject('$db')
const dbRef = fbRef(db)

get(child(dbRef, 'user/')).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val()
    tableData.value = Object.values(data)
  } else {
    console.log('데이터 없음요.')
  }
}).catch((error) => {
  console.error(error)
})

</script>

<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      v-for="(col, index) in columns"
      :key="index"
      :prop="col.prop"
      :label="col.label"
    />
  </el-table>
</template>

<style scoped></style>
