export default {
  mounted () {
    // this.$store.state.user !== null && this.$store.state.user.admin && this.$route.name === 'admin-login' ? this.$router.push('/admin') : console.log('no account')
    // this.$store.getters.isAdmin && isAdminRoute(this.$route) ? this.$router.push('/admin/login') : console.log('u not admin')
    isAdminRoute(this.$route) && !this.$store.getters.isAdmin ? this.$router.push('/admin/login') : console.log('u admin')
  }
}

function isAdminRoute (route) {
  if (route.matched.some(record => record.path === '/admin')) {
    return true
  }
}
