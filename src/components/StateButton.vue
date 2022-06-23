<template>
  <button class="btn bg-[#637097] text-[#fff] text-base shadow-[0_4px_#404e72]" @click="updateScreen(value)">
    {{ text }}
  </button>
</template>

<script>
import stores from '@/stores'

export default {
  name: 'StateButton',
  props: {
    text: {
      required: true,
      type: [String, Number]
    },
    value: {
      required: true,
      type: String
    }
  },
  methods: {
    updateScreen (value) {
      if (value) {
        if (value === 'reset') stores.screenStore.reset()
        else if (value === 'del') stores.screenStore.delete()
      }
    }
  }
}
</script>

<style scoped>

</style>
