<template>
  <div class="bg-gray-50">
    <!-- cms content -->
    <main>
      <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
    </main>
    <!-- default interior content -->
    <PinBenefits />
    <LargeTest />
    <TailPricing />
    <TailSteps class="-mt-14" />
    <Faq2 />
    <TailCta />
    <TailFoot />
  </div>
</template>

<script>
import Faq2 from '~/components/Faq2'
import PinBenefits from '~/components/PinBenefits'
import TailPricing from '~/components/TailPricing'
import LargeTest from '~/components/LargeTest'
import TailSteps from '~/components/TailSteps'
import TailCta from '~/components/TailCta'
import TailFoot from '~/components/TailFoot'
import storyblokLivePreview from '~/mixins/storyblokLivePreview'
export default {
  components: {
    Faq2,
    PinBenefits,
    TailPricing,
    LargeTest,
    TailSteps,
    TailCta,
    TailFoot
  },
  mixins: [storyblokLivePreview],
  asyncData (context) {
    // Check if we are in the editor mode
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/pins/${context.params.slug}`, {
      version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  data () {
    return { story: { content: {} } }
  },
  head () {
    return {
      title: 'Custom ' + this.story.name + ' Pins | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: this.story.content.teaserText }
      ],
      link: [
        { rel: 'canonical', href: 'https://lapelpinsandcoins.com/pins/' + this.story.slug }
      ]
    }
  },
  mounted () {
    this.$store.commit('prefs/setPrefs', 'Lapel Pins')
  }
}
</script>
