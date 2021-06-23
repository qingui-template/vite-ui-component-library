<template>
  <div class="buttonDemo">
    <h1>Button 按钮</h1>

    <RevealContainer :component="Base">
      <p>按钮的 type 分别为 <code>default</code>、primary、info、success、warning 和 error。。</p>
    </RevealContainer>

    <RevealContainer :component="Size">
      <p>按钮的 type 分别为 <code>default</code>、primary、info、success、warning 和 error。。</p>
    </RevealContainer>
   
    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import RevealContainer from '../utils/RevealContainer.vue'
import Attr from '../utils/Attr.vue'

import Base from './demo/base.vue'
import Size from './demo/size.vue'

export default {
  components: { RevealContainer, Attr },
  setup() {
    const data = [
      {
        params: 'level',
        desc: '按钮类型',
        type: 'string',
        select: 'default / primary / success / warning / danger',
        default: 'default',
      },
      {
        params: 'size',
        desc: '尺寸',
        type: 'string',
        select: 'mini / small / medium / large',
        default: 'medium',
      },
      {
        params: 'round',
        desc: '圆形边框',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
    ]
    return {
      Base,
      Size,
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
.buttonDemo {
  h1 {
    font-size: 28px;
  }
  code {
    background-color: #e2fafa;
    border-radius: 2px;
    padding: 3px 5px;
    margin: 0 3px;
  }
}
</style>
