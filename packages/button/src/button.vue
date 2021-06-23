<template>
  <button
    class="qing-button"
    :class="[
      type ? 'qing-button--' + type : '',
      buttonSize ? 'qing-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-round': round,
      },
    ]"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useGlobalConfig } from '../../utils/util'

import type { PropType } from 'vue'

type IButtonType = PropType<'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger'>
type ComponentSize = PropType<'mini' | 'small' | 'medium' | 'large'>

interface IButtonProps {
  type: IButtonType
  size: ComponentSize
  disabled: boolean
  round: boolean
}

export default defineComponent({
  name: 'q-button',

  props: {
    type: {
      type: String as IButtonType,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'success', 'warning', 'danger'].includes(val)
      },
    },
    size: {
      type: String as ComponentSize,
      validator: (val: string) => {
        return ['mini', 'small', 'medium', 'large'].includes(val)
      },
      default: 'medium'
    },
    round: Boolean,
  },

  emits: ['click'],

  setup(props: IButtonProps, { emit }) {
    const $ELEMENT = useGlobalConfig()

    const buttonSize = computed(() => {
      return props.size || $ELEMENT.size
    })

    // methods
    const handleClick = (evt: MouseEvent) => {
      emit('click', evt)
    }

    return {
      buttonSize,
      handleClick,
    }
  },
})
</script>

