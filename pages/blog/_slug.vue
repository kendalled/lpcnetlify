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
    return {
      title: this.story.name + ' | Blog Posts | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: this.story.content.teaserText }
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
