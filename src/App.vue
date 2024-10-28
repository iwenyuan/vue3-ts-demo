<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { setting } from './setting'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
</script>

<template>
  <a-config-provider :theme="setting.antdThemeOverrides">
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped></style>

<style scoped></style>
