<template>
  <div class="relative">
    <!-- <transition
      enter-active-class="transition transition-opacity duration-300 ease-out-quad"
      leave-active-class=""
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <FullNav v-if="showNavbar" />
    </transition> -->
    <FullNav />
    <HeroNoDots />
    <TailFeat2 />
    <SocialProof />
    <LogoCloud />
    <SimpleTest />
    <Faq />
    <TailCta />
    <TailFoot />
  </div>
</template>

<script>
import FullNav from '~/components/FullNav'
import HeroNoDots from '~/components/HeroNoDots'
import LogoCloud from '~/components/LogoCloud'
import TailFeat2 from '~/components/TailFeat2'
import SimpleTest from '~/components/SimpleTest'
import TailCta from '~/components/TailCta'
import SocialProof from '~/components/SocialProof'
import Faq from '~/components/Faq'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    FullNav,
    HeroNoDots,
    LogoCloud,
    TailFeat2,
    SimpleTest,
    TailCta,
    SocialProof,
    Faq,
    TailFoot
  },
  data () {
    return {
      showNavbar: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 55) {
        return
      }
      this.showNavbar = (currentScrollPosition >= 240)
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>
