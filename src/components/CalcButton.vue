<template>
  <button class="btn bg-[#eae3dc] text-[#444b5a] text-[2rem] shadow-[0_4px_#b4a597]" @click="updateScreen(value)">
    {{ text }}
  </button>
</template>

<script>
import stores from '@/stores'

export default {
  name: 'CalcButton',
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
  data () {
    return {
      data: 0
    }
  },
  methods: {
    updateScreen (value) {
      stores.screenStore.update(value)
    }
  }
}
</script>

<style scoped>

</style>
