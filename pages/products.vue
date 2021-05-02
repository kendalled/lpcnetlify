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
  layout: 'default',
  components: {
    ProductCard,
    ParagraphImage,
    SecondCard,
    TailFoot
  }
}
</script>
