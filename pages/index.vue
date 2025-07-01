<template>
  <div class="relative md:pt-8 lg:pt-10">
    <NewHero />
    <!-- Logo Cloud -->
    <LogoCloud />
    <ThreeFeat />
    <VideoSpot />
    <TailFeat2 />
    <SocialProof />
    <ThreeSteps />
    <SimpleTest />
    <Faq2 />
    <TailCta />
    <TailFoot />
  </div>
</template>

<script>
import VideoSpot from '~/components/VideoSpot'
import NewHero from '~/components/NewHero'
import LogoCloud from '~/components/LogoCloud'
import ThreeSteps from '~/components/ThreeSteps'
import ThreeFeat from '~/components/ThreeFeat'
import TailFeat2 from '~/components/TailFeat2'
import SimpleTest from '~/components/SimpleTest'
import TailCta from '~/components/TailCta'
import SocialProof from '~/components/SocialProof'
import Faq2 from '~/components/Faq2'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    VideoSpot,
    NewHero,
    LogoCloud,
    ThreeFeat,
    ThreeSteps,
    TailFeat2,
    SimpleTest,
    TailCta,
    SocialProof,
    Faq2,
    TailFoot
  },
  head () {
    return {
      title: 'Custom Lapel Pins & Challenge Coins | Same Day Quotes | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'Professional custom lapel pins, challenge coins & keychains. Over 20 years experience, free artwork, same-day quotes. Military, corporate & promotional items. Get started today!' },
        { hid: 'keywords', name: 'keywords', content: 'custom lapel pins, challenge coins, keychains, promotional items, military pins, corporate gifts, enamel pins' },
        { hid: 'og:title', property: 'og:title', content: 'Custom Lapel Pins & Challenge Coins | Same Day Quotes' },
        { hid: 'og:description', property: 'og:description', content: 'Professional custom lapel pins, challenge coins & keychains. Over 20 years experience, free artwork, same-day quotes.' },
        { hid: 'og:image', property: 'og:image', content: 'https://lapelpinsandcoins.com/homePins.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://lapelpinsandcoins.com' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Custom Lapel Pins & Challenge Coins | Same Day Quotes' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Professional custom lapel pins, challenge coins & keychains. Over 20 years experience, free artwork, same-day quotes.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://lapelpinsandcoins.com/homePins.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://lapelpinsandcoins.com' }
      ]
    }
  }
}
</script>
