<template>
  <div>
    <!-- pagetitle, -->
    <main>
      <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
    </main>
    <Author />
    <DarkFoot />
  </div>
</template>

<script>
import Author from '~/components/Author'
import DarkFoot from '~/components/DarkFoot'
import storyblokLivePreview from '~/mixins/storyblokLivePreview'
export default {
  components: {
    Author,
    DarkFoot
  },
  mixins: [storyblokLivePreview],
  asyncData (context) {
    // Check if we are in the editor mode
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/blog/${context.params.slug}`, {
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
    const title = this.story.name + ' | Blog | Lapel Pins & Coins'
    const description = this.story.content.teaserText || 'Read our latest blog post about ' + this.story.name + '. Expert insights on custom lapel pins, challenge coins, and promotional products.'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: 'https://lapelpinsandcoins.com/blog/' + this.story.slug },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ],
      link: [
        { rel: 'canonical', href: 'https://lapelpinsandcoins.com/blog/' + this.story.slug }
      ]
    }
  }
}
</script>

<style>
.blog__body > p {
  @apply leading-relaxed;
  color: #374151;
}
.blog__body > h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
