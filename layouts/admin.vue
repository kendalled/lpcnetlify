<template>
  <div class="min-h-screen">
    <AdminNav v-show="loggedIn" />

    <div v-show="loggedIn" class="pb-32 bg-gray-800">
      <!-- nav -->
      <AdminHeader :heading="path" />
      <!-- end nav -->
    </div>
    <main class="-mt-32">
      <div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import AdminHeader from '~/components/AdminHeader'
import AdminNav from '~/components/AdminNav'
import adminauth from '~/mixins/adminauth'
export default {
  name: 'Admin',
  components: {
    AdminHeader,
    AdminNav
  },
  mixins: [adminauth],
  data () {
    return {
      animating: false
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters.isAdmin
    },
    path () {
      const first = this.$store.getters.getFirst || 'Admin'
      const msg = 'Welcome back, ' + first + '.'
      const path = this.$route.path
      return (path === '/admin/projects' ? 'Project Dashboard' : path === '/admin/artwork' ? 'Artwork Dashboard' : path === '/admin/changelog' ? 'Website Changelog' : path === '/admin/pricing' ? 'Pricing Assistant' : msg)
    },
    greeting () {
      const first = this.$store.getters.getFirst || 'Admin'
      return 'Welcome back, ' + first + '.'
    }
  }
}
</script>
