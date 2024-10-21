<template>
  <div class="login-view">
    <el-form
      ref="formRef"
      :model="loginForm"
      :rules="rules"
      label-width="auto"
      style="max-width: 300px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
        <el-button @click="resetForm(formRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { LoginData } from '@/api/login'
const formRef = ref<FormInstance>()

const loginForm = reactive<LoginData>({
  username: 'admin',
  password: '123456',
  captchaKey: '',
  captchaCode: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      min: 3,
      max: 6,
      message: '长度在 3 到 6 个字符',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      min: 9,
      max: 16,
      message: '长度在 9 到 16 个字符',
      trigger: 'blur'
    }
  ]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('提交!')
    } else {
      console.log('提交失败!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped></style>
