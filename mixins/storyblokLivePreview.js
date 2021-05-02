export default {
  mounted () {
    const vm = this
    if (process.browser) {
      vm.$storybridge.on(['published', 'change'], (event) => {
        console.log('change')
        if (!event.slugChanged) {
          // Reload the page on save events (publish, save button or autosave)
          this.$nuxt.$router.go({
            path: this.$nuxt.$router.currentRoute,
            force: true
          })
        }
      })
    }
  }
}
