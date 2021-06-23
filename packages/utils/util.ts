import { getCurrentInstance } from 'vue'

// 获取全局属性
export function useGlobalConfig() {
  const vm: any = getCurrentInstance()

  if ('$ELEMENT' in vm.proxy) {
    return vm.proxy.$ELEMENT
  }
  return {}
}
