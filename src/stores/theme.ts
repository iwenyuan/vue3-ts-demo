import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'
import { theme } from 'ant-design-vue'
const isDark = useDark()

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      isDark,
      language: 'zh-CN'
    }
  },
  getters: {
    theme(state) {
      if (state.isDark) return theme.darkAlgorithm
      return undefined
    }
  },
  actions: {},
  persist: true
})
