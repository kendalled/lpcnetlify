<template>
  <main class="min-h-screen bg-white">
    <ProductCard />
    <ParagraphImage />
    <SecondCard />
    <SecondCard :flipped="true" />
    <TailFoot />
  </main>
</template>

<script>
import ProductCard from '~/components/ProductCard'
import ParagraphImage from '~/components/ParagraphImage'
import SecondCard from '~/components/SecondCard'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    ProductCard,
    ParagraphImage,
    SecondCard,
    TailFoot
  },
  layout: 'default',
  head () {
    return {
      title: 'Custom Products | Lapel Pins, Challenge Coins & Keychains | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'Browse our complete collection of custom products including lapel pins, challenge coins, and keychains. High-quality promotional items with professional design services.' },
        { hid: 'keywords', name: 'keywords', content: 'custom products, lapel pins, challenge coins, keychains, promotional items, custom merchandise' },
        { hid: 'og:title', property: 'og:title', content: 'Custom Products | Lapel Pins, Challenge Coins & Keychains' },
        { hid: 'og:description', property: 'og:description', content: 'Browse our complete collection of custom products including lapel pins, challenge coins, and keychains. High-quality promotional items with professional design services.' },
        { hid: 'og:url', property: 'og:url', content: 'https://lapelpinsandcoins.com/products' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Custom Products | Lapel Pins, Challenge Coins & Keychains' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Browse our complete collection of custom products including lapel pins, challenge coins, and keychains. High-quality promotional items with professional design services.' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://lapelpinsandcoins.com/products' }
      ]
    }
  }
}
</script>
