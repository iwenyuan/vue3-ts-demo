<script setup lang="ts">
import type { FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const loginFormRef = ref<FormInstance | null>(null)

// 登录
const loginForm = reactive({
  username: '',
  password: '',
  captchaText: '',
  captchaUid: ''
})

// ts Record
const rules: Record<string, Rule[]> = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  captcha: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}

// 验证码
const captchaSrc = ref('')

const getCaptchaCode = () => {
  captchaSrc.value = 'data:image/*;base64, '
}

const submitLogin = () => {}

onMounted(() => {
  getCaptchaCode()
})

// 页面切换
const active = ref('signUp')
</script>

<template>
  <div h-full f-c-c class="login-view">
    <div
      class="relative w-768 max-w-full min-h-480 bg-dark card-shadow rd-12"
      :class="{ 'right-panel-active': active === 'signIn' }"
    >
      <div class="form-container sign-in-container">
        <a-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="rules"
          class="flex-col-c h-full rounded-10"
        >
          <h1 class="c-[#fff]">登录</h1>
          <a-space my-20 :size="10">
            <a-button shape="circle">
              <template #icon>
                <QqOutlined />
              </template>
            </a-button>
            <a-button shape="circle">
              <template #icon>
                <WechatOutlined />
              </template>
            </a-button>
            <a-button shape="circle">
              <template #icon>
                <GithubOutlined />
              </template>
            </a-button>
          </a-space>
          <span mb-10 font-size-12 style="color: #fff">或者使用你的账号</span>
          <a-form-item name="username" class="w-[80%]">
            <a-input v-model:value="loginForm.username" placeholder="用户名" />
          </a-form-item>
          <a-form-item name="password" class="w-[80%]">
            <a-input v-model:value="loginForm.password" placeholder="密码" />
          </a-form-item>
          <a-form-item name="captcha" class="w-[80%]">
            <a-input v-model:value="loginForm.captchaText" placeholder="验证码">
              <template #addonAfter>
                <a-image
                  :width="100"
                  :height="31"
                  :preview="false"
                  :src="captchaSrc"
                  @click="getCaptchaCode"
                />
              </template>
            </a-input>
          </a-form-item>
          <a-button
            class="w-[40%] font-bold"
            round
            type="primary"
            @click="submitLogin"
            @keyup.enter="submitLogin"
            >登录</a-button
          >
        </a-form>
      </div>
      <div class="form-container sign-up-container">
        <a-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="rules"
          class="flex-col-c h-full rounded-10"
        >
          <h1 class="c-[#fff]">注册</h1>
          <a-space my-20 :size="10">
            <a-button shape="circle">
              <template #icon>
                <QqOutlined />
              </template>
            </a-button>
            <a-button shape="circle">
              <template #icon>
                <WechatOutlined />
              </template>
            </a-button>
            <a-button shape="circle">
              <template #icon>
                <GithubOutlined />
              </template>
            </a-button>
          </a-space>
          <span mb-10 font-size-12 style="color: #fff">或者使用你的账号</span>
          <a-form-item name="username" class="w-[80%]">
            <a-input v-model:value="loginForm.username" placeholder="用户名" />
          </a-form-item>
          <a-form-item name="password" class="w-[80%]">
            <a-input v-model:value="loginForm.password" placeholder="密码" />
          </a-form-item>
          <a-form-item name="captcha" class="w-[80%]">
            <a-input v-model:value="loginForm.captchaText" placeholder="验证码">
              <template #addonAfter>
                <a-image
                  :width="100"
                  :height="31"
                  :preview="false"
                  :src="captchaSrc"
                  @click="getCaptchaCode"
                />
              </template>
            </a-input>
          </a-form-item>
          <a-button
            class="w-[40%] font-bold"
            round
            type="primary"
            @click="submitLogin"
            @keyup.enter="submitLogin"
            >注册</a-button
          >
        </a-form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overly-panel overly-left">
            <h1>
              欢迎回来！
              <a-image :width="48" :height="48" :preview="false" src="/logo.webp" />
            </h1>
            <p>要与我们保持联系，请使用您的个人信息登录</p>
            <a-button @click="active = 'signUp'">去登录</a-button>
          </div>
          <div class="overly-panel overly-right">
            <h1>
              你好，朋友！
              <a-image :width="48" :height="48" :preview="false" src="/logo.webp" />
            </h1>
            <p>非常感谢您选择我们！我们将竭诚为您提供最优质最全面的服务。</p>
            <a-button @click="active = 'signIn'">去注册</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-view {
  background-image: url('@/assets/svg/bg.svg');
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  color: #fff;
  h1 {
    color: #fff;
  }
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  right: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  z-index: 100;
}
.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  text-align: center;
}
.overlay {
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  color: #fff;
  background: linear-gradient(to right, #326957, #4d9078);
  transform: translateX(0);
  // transition: transform 0.6s ease-in-out;
}
.right-panel-active .overlay {
  transform: translateX(50%);
}
.overlay-left {
  transform: translateX(-20%);
}
.right-panel-active .overlay-left {
  transform: translateX(0);
}
.overlay-right {
  right: 0;
  transform: translateX(0);
}
.right-panel-active .overlay-right {
  transform: translateX(20%);
}
</style>

<style>
.ant-input-group-addon {
  padding: 0 !important;
  border: none !important;
}
</style>
