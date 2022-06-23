<template>
  <div class="c-container">
    <header class="container__header">
      <h1 class="calc-title text-[2rem] font-bold">Fredchess Calc</h1>
    </header>
    <div class="container__screen text-[2rem] font-bold">{{ result.screenStore.state.text }}</div>
    <div class="container__buttons grid grid-cols-4 gap-4">
      <CalcButton text="7" value="7"></CalcButton>
      <CalcButton text="8" value="8"></CalcButton>
      <CalcButton text="9" value="9"></CalcButton>
      <StateButton text="DEL" value="del"></StateButton>
      <CalcButton text="4" value="4"></CalcButton>
      <CalcButton text="5" value="5"></CalcButton>
      <CalcButton text="6" value="6"></CalcButton>
      <CalcButton text="+" value="+"></CalcButton>
      <CalcButton text="1" value="1"></CalcButton>
      <CalcButton text="2" value="2"></CalcButton>
      <CalcButton text="3" value="3"></CalcButton>
      <CalcButton text="-" value="-"></CalcButton>
      <CalcButton text="." value="."></CalcButton>
      <CalcButton text="0" value="0"></CalcButton>
      <CalcButton text="/" value="/"></CalcButton>
      <CalcButton text="x" value="x"></CalcButton>
      <StateButton text="RESET" value="reset" class="col-span-2 bg-[#637097] text-[#fff] text-base shadow-[0_4px_#404e72] leading-[60px]"></StateButton>
      <ResultButton @calculate="calculate"></ResultButton>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import CalcButton from '@/components/CalcButton'
import StateButton from '@/components/StateButton'
import ResultButton from '@/components/ResultButton'
import stores from '@/stores'

export default {
  name: 'Calculator',
  components: {
    CalcButton,
    StateButton,
    ResultButton
  },
  data () {
    return {
      result: stores
    }
  },
  methods: {
    calculate () {
      if (this.verifyScreen()) {
        // replace all the '/' by '*'
        const str = this.result.screenStore.state.text.replace('x', '*')
        // eslint-disable-next-line no-eval
        stores.screenStore.state.text = eval(str) + ''
      } else console.log('erreur')
    },
    // replace with a verification by regex
    verifyScreen () {
      const reg = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/

      // replace all the '/' by '*'
      const str = this.result.screenStore.state.text.replace('x', '*')

      return reg.test(str)
    },
    // Can be used on keyup 'del' and 'crtl + del'
    remove () {
      stores.screenStore.delete()
    },
    reset () {
      stores.screenStore.reset()
    }
  }
}
</script>

<style scoped>

</style>
