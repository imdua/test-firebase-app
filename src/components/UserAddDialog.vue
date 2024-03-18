<template>
    <el-dialog
        v-model="dialogFormVisible"
        title="사용자 추가"
        width="500"
    >
        <el-form :model="form">
            <el-form-item
                :label-width="formLabelWidth"
                label="index"
            >
                <el-input
                    v-model="form.userIdx"
                    placeholder="index를 입력해주세요."
                ></el-input>
            </el-form-item>
            <el-form-item
                :label-width="formLabelWidth"
                label="사번"
            >
                <el-input
                    v-model="form.userId"
                    placeholder="사번을 입력해주세요."
                ></el-input>
            </el-form-item>
            <el-form-item
                :label-width="formLabelWidth"
                label="이름"
            >
                <el-input
                    v-model="form.userName"
                    placeholder="이름을 입력해주세요."
                ></el-input>
            </el-form-item>
            <el-form-item
                :label-width="formLabelWidth"
                label="직위"
            >
                <el-input
                    v-model="form.userPosition"
                    placeholder="직위를 입력해주세요."
                ></el-input>
            </el-form-item>
            <el-form-item
                :label-width="formLabelWidth"
                label="회사명"
            >
                <el-input
                    v-model="form.userCompanyName"
                    placeholder="회사명을 입력해주세요."
                ></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dislog-footer">
                <el-button @click="closeModal">취소</el-button>
                <el-button
                    type="primary"
                    @click="save"
                >저장</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
const form = ref({
    userIdx: '',
    userId: '',
    userName: '',
    userPosition: '',
    userCompanyName: '',
},)
</script>

<style scoped>
.test {
    margin: 10px;
}
</style>
