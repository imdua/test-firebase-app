<script setup>
// const tableData = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]

import { ref, inject } from 'vue'
import { ref as fbRef, child, get } from "firebase/database";

const db = inject('$db')
const dbRef = fbRef(db)

get(child(dbRef, 'userinfo/name')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val())
  } else {
    console.log('데이터 없음요.')
  }
}).catch((error) => {
  console.error(error)
})

const tableData = ref([])
</script>

<template>
<el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<style scoped>

</style>
