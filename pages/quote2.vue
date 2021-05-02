<template>
  <div class="flex items-center justify-center w-full h-screen bg">
    <!-- Using utilities: -->
    <button class="max-w-sm px-4 py-2 mt-8 ml-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" @click="resetQuote">
      Reset Local Data
    </button>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    quote () {
      return [{
        title: 'Production',
        selected: this.$store.state.quote.quote[0].selected
      },
      {
        title: 'Plating',
        selected: this.$store.state.quote.quote[1].selected
      },
      {
        title: 'Sizing',
        selected: this.$store.state.quote.quote[2].selected
      },
      {
        title: 'Backing',
        selected: this.$store.state.quote.quote[3].selected
      },
      {
        title: 'Packaging',
        selected: this.$store.state.quote.quote[4].selected
      }
      ]
    }
  },
  methods: {
    resetQuote () {
      this.$store.dispatch('quote/quoteReset')
      console.log('reset pin')
      this.$store.dispatch('coinQuote/quoteCoinReset')
      console.log('reset coin')
      this.$store.dispatch('chainQuote/quoteChainReset')
      console.log('reset keychain')
    },
    updateQuote (title, choice) {
      // TODO: move logic to quoteredux
      let ind = 0
      switch (title) {
        case 'Production':
          ind = 0
          break
        case 'Plating':
          ind = 1
          break
        case 'Sizing':
          ind = 2
          break
        case 'Backing':
          ind = 3
          break
        case 'Packaging':
          ind = 4
          break

        default:
          ind = 0
          console.log('no category available')
          break
      }
      this.quote[ind].selected = choice
      this.$store.commit('quote/setQuote', JSON.stringify(this.quote))
      console.log('vuex updated!')
      // console.log('selected: ' + choice)
      // console.log('category: ' + title)
    }
  }
}
</script>

<style scoped>
.bg {
  background-color: #edf2f7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23bdbdbd' fill-opacity='0.37' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
