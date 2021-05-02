<template>
  <div class="w-full px-6 py-8 bg-white rounded-md shadow">
    <h2 class="pb-4 text-2xl font-extrabold leading-none text-gray-900 md:pb-6 lg:pb-8 md:text-3xl">
      Content Schedule
    </h2>
    <PageList :pages="pages" />
  </div>
</template>

<script>
import PageList from '~/components/PageList'
export default {
  name: 'AdminOrders',
  components: {
    PageList
  },
  data () {
    return {
      pages: [
        {
          title: 'Offset Printed Pins',
          slug: '/pins/offset-printed',
          status: 'Published',
          date: 'September 26, 2020'
        },
        {
          title: 'Silk Screen Pins',
          slug: '/pins/silk-screen',
          status: 'Published',
          date: 'September 26, 2020'
        },
        {
          title: 'Die Struck Pins',
          slug: '/pins/die-struck',
          status: 'Published',
          date: 'September 26, 2020'
        },
        {
          title: 'Soft Enamel Pins',
          slug: '/pins/soft-enamel',
          status: 'Published',
          date: 'September 26, 2020'
        },
        {
          title: 'American Flag Pins',
          slug: '/pins/american-flag',
          status: 'Published',
          date: 'September 1, 2020'
        },
        {
          title: 'Heart Pins',
          slug: '/pins/heart',
          status: 'Published',
          date: 'September 1, 2020'
        },
        {
          title: 'Animal Pins',
          slug: '/pins/animal',
          status: 'Published',
          date: 'September 1, 2020'
        },
        {
          title: 'School Pins',
          slug: '/pins/school',
          status: 'Published',
          date: 'September 1, 2020'
        },
        {
          title: 'Political Pins',
          slug: '/pins/political',
          status: 'Published',
          date: 'August 27, 2020'
        },
        {
          title: 'Varsity Pins',
          slug: '/pins/varsity',
          status: 'Published',
          date: 'August 27, 2020'
        },
        {
          title: 'World Flag Pins',
          slug: '/pins/world-flag',
          status: 'Published',
          date: 'August 27, 2020'
        },
        {
          title: 'State Flag Pins',
          slug: '/pins/state-flag',
          status: 'Published',
          date: 'August 27, 2020'
        },
        {
          title: 'Holiday Pins',
          slug: '/pins/holiday',
          status: 'Published',
          date: 'August 27, 2020'
        },
        {
          title: 'Tie Pins',
          slug: '/pins/tie',
          status: 'Published',
          date: 'August 25, 2020'
        },
        {
          title: 'TV Show Pins',
          slug: '/pins/tv-show',
          status: 'Published',
          date: 'August 24, 2020'
        },
        {
          title: 'Movie Pins',
          slug: '/pins/movie',
          status: 'Published',
          date: 'August 24, 2020'
        },
        {
          title: 'Fashion Pins',
          slug: '/pins/fashion',
          status: 'Published',
          date: 'August 24, 2020'
        },
        {
          title: 'Travel & Outdoor Pins',
          slug: '/pins/travel-outdoor',
          status: 'Published',
          date: 'August 20, 2020'
        },
        {
          title: 'Space Pins',
          slug: '/pins/space',
          status: 'Published',
          date: 'August 20, 2020'
        }, {
          title: 'Video Game Pins',
          slug: '/pins/video-game',
          status: 'Published',
          date: 'August 20, 2020'
        }, {
          title: 'Sports Trading Pins',
          slug: '/pins/sports-trading',
          status: 'Published',
          date: 'August 20, 2020'
        }, {
          title: 'Glitter Pins',
          slug: '/pins/glitter',
          status: 'Published',
          date: 'August 20, 2020'
        }, {
          title: 'Medical Pins',
          slug: '/pins/medical',
          status: 'Published',
          date: 'August 19, 2020'
        }, {
          title: 'Glow in the Dark Pins',
          slug: '/pins/glow-in-the-dark',
          status: 'Published',
          date: 'August 5, 2020'
        }, {
          title: 'Event Pins',
          slug: '/pins/event',
          status: 'Published',
          date: 'July 8, 2020'
        }, {
          title: 'Translucent Enamel Pins',
          slug: '/pins/translucent-enamel',
          status: 'Published',
          date: 'July 2, 2020'
        },
        {
          title: 'Safety Pins',
          slug: '/pins/safety',
          status: 'Published',
          date: 'June 26, 2020'
        },
        {
          title: 'Public Servant Pins',
          slug: '/pins/public-servant',
          status: 'Published',
          date: 'June 26, 2020'
        },
        {
          title: 'Rainbow Pins',
          slug: '/pins/rainbow',
          status: 'Published',
          date: 'June 26, 2020'
        },
        {
          title: 'Star Pins',
          slug: '/pins/star',
          status: 'Published',
          date: 'June 25, 2020'
        },
        {
          title: 'Police Pins',
          slug: '/pins/police',
          status: 'Published',
          date: 'June 19, 2020'
        },
        {
          title: 'Veteran Pins',
          slug: '/pins/veteran',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Volunteer Pins',
          slug: '/pins/volunteer',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Sports Pins',
          slug: '/pins/sports',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Flower Pins',
          slug: '/pins/flower',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Funny Pins',
          slug: '/pins/funny',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Environmental Pins',
          slug: '/pins/environmental',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Awareness Pins',
          slug: '/pins/awareness',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Military Pins',
          slug: '/pins/military',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Academic Pins',
          slug: '/pins/academic',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'LGBTQ Pride',
          slug: '/pins/lgbtq-pride',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Angel Pins',
          slug: '/pins/angel',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Religious Pins',
          slug: '/pins/religious',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Inspiration Pins',
          slug: '/pins/inspiration',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Magnetic Pins',
          slug: '/pins/magnetic',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Years of Service Pins',
          slug: '/pins/years-of-service',
          status: 'Published',
          date: 'June 17, 2020'
        },
        {
          title: 'Men\'s Accessories',
          slug: '/pins/mens-accessories',
          status: 'Published',
          date: 'June 17, 2020'
        }
      ]
    }
  }
}
</script>
