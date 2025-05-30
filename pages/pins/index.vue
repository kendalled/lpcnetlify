<template>
  <div class="w-auto h-auto bg-gray-50">
    <InteriorHeader :new-layout="true" :headline="headline" :subheading="subheading" :choices="choices" />
    <!-- <SimpleHeader /> -->
    <!-- <SplitBrandPanel /> -->
    <TwoColumnImage>
      <p>Our pins are struck from the highest quality metal to ensure a beautiful, classy, and durable product.</p>
      <p>There are several different kinds of printing processes and it can be overwhelming to do the research and know what best fits your design. That’s why we work with you every step of the way to ensure you’ll love the final product.</p>
      <p>Enamel pins can be used for:</p>
      <ul>
        <li>Promotional campaigns</li>
        <li>Fundraising for your organization</li>
        <li>Bringing fans together around a sports team</li>
        <li>Gifts for friends &amp; family</li>
        <li>Recognizing an employee</li>
        <li><span>&hellip;</span> and so much more!</li>
      </ul>
      <h2>What production method should I choose?</h2>
      <p>Most custom pin designs can be made into soft enamel pins, but this process often works best with designs that have minimal lines and clearly defined areas of color. These details are important because the colored areas sit slightly recessed, below the metal separations. If you’re not sure which type of pin to choose, don’t worry! Just ask, and we can provide suggestions from our experienced team.</p>
    </TwoColumnImage>
    <section>
      <div class="mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold leading-9 text-gray-900 sm:text-4xl sm:leading-10 lg:leading-none">
              <span class="sm:hidden">Get started today.</span>
              <span class="hidden sm:block">Get started with a free quote.</span>
            </h2>
            <p class="mt-4 text-xl leading-7 text-gray-500">
              Simply describe your design and select some basic options. We'll handle the rest.
            </p>
          </div>
        </div>
      </div>
      <div class="mx-auto mb-8 max-w-7xl sm:px-6 lg:px-8 sm:mb-10">
        <FinalQuote :option="0" :margin="1" :bg="1" @scroll="goQuote" />
      </div>
    </section>
    <InteriorContentImage :headline="'Design a custom pin in minutes.'" :p1="p1" :p2="p2" :img="img1" />
    <PinBenefits />
    <LargeTest />
    <TailPricing />
    <TailSteps class="-mt-14" :subject="'pins'" />
    <Faq2 />
    <TailCta />
    <TailFoot />
  </div>
</template>

<style scoped>
.heroPattern {
  background-color: #f9fafb;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%234895ea' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
}
.underline-blue {
  background-image: linear-gradient(180deg,transparent 70%,rgba(28, 100, 242,.2) 0);
}
.underline-orange {
  background-image: linear-gradient(180deg,transparent 70%,rgba(255,158,24,.4) 0);
}
.underline-gray {
  background-image: linear-gradient(180deg,transparent 70%,rgba(75,85,99,.175) 0);
}
</style>

<script>
import LargeTest from '~/components/LargeTest'
import InteriorHeader from '~/components/InteriorHeader'
import TwoColumnImage from '~/components/TwoColumnImage'
import InteriorContentImage from '~/components/InteriorContentImage'
import FinalQuote from '~/components/FinalQuote'
import PinBenefits from '~/components/PinBenefits'
import TailPricing from '~/components/TailPricing'
import TailSteps from '~/components/TailSteps'
import Faq2 from '~/components/Faq2'
import TailCta from '~/components/TailCta'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    LargeTest,
    InteriorHeader,
    TwoColumnImage,
    InteriorContentImage,
    FinalQuote,
    PinBenefits,
    TailPricing,
    TailSteps,
    Faq2,
    TailCta,
    TailFoot
  },
  data () {
    return {
      headline: 'High quality, custom lapel pins designed by experts.',
      subheading: 'With over 20 years of experience, we make customized pins more accessible than ever. Our ordering process includes free artwork, professional designs, and unlimited revisions. Get started today.',
      choices: [
        {
          desk: 'Browse our various pin styles',
          mobile: 'Browse our pin styles'
        },
        {
          desk: 'See our industry-leading pricing',
          mobile: 'See our unmatched pricing'
        },
        {
          desk: 'View our streamlined ordering process',
          mobile: 'View our ordering process'
        }
      ],
      p1: 'Custom pins are small, customizable, and easy to make. You can design them to be as classy as you need them to be, and they make for the perfect subtle fashion statement. Showing pride in your achievements or support for a certain cause or movement is easier than ever with lapel pins. They may be small, but custom pins can be huge for your fundraiser, company, or team. We make pins for a variety of uses. Brand promotion, for one, is essential to a brand\'s success, and there’s no easier way to promote and establish your brand than with a pin. No matter how you plan on using them, our pins are sure to suit your needs.',
      p2: 'We make pins for a variety of uses. Brand promotion, for one, is essential to a brand\'s success, and there’s no easier way to promote and establish your brand than with a custom lapel pin. Award ceremonies can be stepped up a level with classy custom pins to reward those who earned it. No matter how you plan on using them, our pins are sure to suit your needs.',
      img1: require('~/static/homePins.png'),
      // todo: unify or split into 3 sets for one <FinalQuote />
      pages: [
        {
          ind: 0,
          pid: 'p1',
          desc: 'Select from a variety of pin styles, from soft enamel to die struck.',
          title: 'Production',
          pageTitle: 'Production Method',
          data:
          [
            {
              id: 0,
              sid: 'pr0',
              name: 'Die Struck',
              src: require('~/static/quote/diestruck.png')
            },
            {
              id: 1,
              sid: 'pr1',
              name: 'Soft Enamel',
              src: require('~/static/quote/softenamel.png')
            },
            {
              id: 2,
              sid: 'pr2',
              name: 'Hard Enamel',
              src: require('~/static/quote/cloisonne.png')
            },
            {
              id: 3,
              sid: 'pr3',
              name: 'Silk Screen',
              src: require('~/static/quote/silkscreen.png')
            },
            {
              id: 4,
              sid: 'pr4',
              name: 'Offset Printed',
              src: require('~/static/quote/offset2.png')
            }
          ]
        },
        {
          ind: 1,
          pid: 'p2',
          desc: 'Select from a variety of plating options.',
          title: 'Plating',
          pageTitle: 'Plating Options',
          data:
          [
            {
              id: 0,
              sid: 'pl0',
              name: 'Antique Gold',
              src: require('~/static/quote/AGold.png')
            },
            {
              id: 1,
              sid: 'pl1',
              name: 'Antique Silver',
              src: require('~/static/quote/ASilver.png')
            },
            {
              id: 2,
              sid: 'pl2',
              name: 'Antique Copper',
              src: require('~/static/quote/ACopper.png')
            },
            {
              id: 3,
              sid: 'pl3',
              name: 'Dual Plated',
              src: require('~/static/quote/DualPlated.png')
            },
            {
              id: 4,
              sid: 'pl4',
              name: 'Color Coated',
              src: require('~/static/quote/ColorCoated.png')
            },
            {
              id: 5,
              sid: 'pl5',
              name: 'Polished Gold',
              src: require('~/static/quote/HPGold.png')
            },
            {
              id: 6,
              sid: 'pl6',
              name: 'Polished Silver',
              src: require('~/static/quote/HPSilver.png')
            },
            {
              id: 7,
              sid: 'pl7',
              name: 'Polished Copper',
              src: require('~/static/quote/HPCopper.png')
            },
            {
              id: 8,
              sid: 'pl8',
              name: 'Polished Nickel',
              src: require('~/static/quote/HPNickel.png')
            },
            {
              id: 9,
              sid: 'pl9',
              name: 'Black Metal',
              src: require('~/static/quote/BlackMetal.png')
            }
          ]
        },
        {
          ind: 2,
          pid: 'p3',
          desc: 'Select your pin sizing, represented by common items.',
          title: 'Sizing',
          pageTitle: 'Pin Sizing',
          data:
          [
            {
              id: 0,
              sid: 'sz0',
              name: '0.75 inch',
              src: require('~/static/sizing/penny.png')
            },
            {
              id: 1,
              sid: 'sz1',
              name: '1.00 inch',
              src: require('~/static/sizing/quarter.png')
            },
            {
              id: 2,
              sid: 'sz2',
              name: '1.25 inch',
              src: require('~/static/sizing/50centcoin.png')
            },
            {
              id: 3,
              sid: 'sz3',
              name: '1.50 inch',
              src: require('~/static/sizing/dollarcoin.png')
            },
            {
              id: 4,
              sid: 'sz4',
              name: '1.75 inch',
              src: require('~/static/sizing/golfball.png')
            }
          ]
        },
        {
          ind: 3,
          pid: 'p4',
          desc: 'Select your pin backing, whether it\'s formal or casual.',
          title: 'Backing',
          pageTitle: 'Pin Backing',
          data:
          [
            {
              id: 0,
              sid: 'bk0',
              name: 'Butterfly Clutch',
              src: require('~/static/quote/butterfly.png')
            },
            {
              id: 1,
              sid: 'bk1',
              name: 'Black Rubber',
              src: require('~/static/quote/blackrubber.png')
            },
            {
              id: 2,
              sid: 'bk2',
              name: 'Yellow Rubber',
              src: require('~/static/quote/yellowrubber.png')
            },
            {
              id: 3,
              sid: 'bk3',
              name: 'Safety Pin',
              src: require('~/static/quote/safetypin.png')
            },
            {
              id: 4,
              sid: 'bk4',
              name: 'Deluxe Clutch',
              src: require('~/static/quote/deluxe.png')
            }
          ]
        },
        {
          ind: 4,
          pid: 'p5',
          desc: 'Select your pin packaging, whether it\'s formal or casual.',
          title: 'Packaging',
          pageTitle: 'Packaging Options',
          data:
          [
            {
              id: 0,
              sid: 'pk0',
              name: 'Poly Bag',
              src: require('~/static/quote/poly.jpg')
            },
            {
              id: 1,
              sid: 'pk1',
              name: 'Velvet Bag',
              src: require('~/static/quote/velvet.jpg')
            },
            {
              id: 2,
              sid: 'pk2',
              name: 'Acrylic Case',
              src: require('~/static/quote/acryliccase.jpg')
            },
            {
              id: 3,
              sid: 'pk3',
              name: 'Velvet Case',
              src: require('~/static/quote/velvetcase.jpg')
            }
          ]
        }
      ]
    }
  },
  head () {
    // FAQ Schema
    const faqItems = [
      {
        question: 'How long does shipping take?',
        answer: 'Once your design is finalized and you have checked out, you can expect to receive your custom items in under 14 days. Have a tight deadline? No worries! Rush orders are available.'
      },
      {
        question: 'How can I ensure the quality of my product(s)?',
        answer: 'We have the process down to a science. A high-quality digital proof will allow you to check spelling, verify color, adjust size, and make any additional changes or corrections prior to starting production. The size of your lapel pin, keychain, or coin is determined by measuring the widest or tallest point of your design. Your products are then made with stainless steel, and spot-checked for quality.'
      },
      {
        question: 'What material should I choose?',
        answer: 'There are several materials and plating options available to make your custom item stand out. If you are unsure about what choices on the quote form suit your needs, feel free to ask! At Lapel Pins and Coins, we believe in superior customer service. Each order is different, so we always help you choose the options that best suit your design.'
      },
      {
        question: 'Will I get my product on time?',
        answer: 'We will work with you to meet any deadline! Once we have received your approval and payment, we begin production on your order immediately. We give you expected delivery dates, but we have no control over unforeseen circumstances. If you experience any problem with your order arriving, contact us! We\'ll be here to help.'
      },
      {
        question: 'Can I change my design?',
        answer: 'Yes! We offer you unlimited revisions on all art proofs, free of charge. Change it up as much as you\'d like to get your design just right.'
      },
      {
        question: 'What is your minimum order size?',
        answer: 'Our minimum order quantity for pins is 100 pieces. Challenge coin orders need to be a minimum of 50 pieces. Contact us for any additional questions about your order size.'
      }
    ]

    const structuredData = [
      // LocalBusiness Schema
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Lapel Pins & Coins',
        'image': 'https://lapelpinsandcoins.com/logo.png',
        'telephone': '+1-800-482-9101',
        'email': 'info@lapelpinsandcoins.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '6566 University Blvd',
          'addressLocality': 'Winter Park',
          'addressRegion': 'FL',
          'postalCode': '32792',
          'addressCountry': 'US'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '28.59726257546487',
          'longitude': '-81.29533256082287'
        },
        'url': 'https://lapelpinsandcoins.com',
        'priceRange': '$$',
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday'
            ],
            'opens': '09:00',
            'closes': '18:00'
          }
        ],
        'sameAs': [
          'https://www.facebook.com/lapelpinscoins',
          'https://www.instagram.com/lapelpinscoins',
          'https://www.linkedin.com/company/lapelpinscoins'
        ]
      },
      // Product Schema
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Custom Lapel Pins',
        image: [
          'https://lapelpinsandcoins.com/homePins.png'
        ],
        description: 'Our customized pins are struck from the highest quality metals and plated in authentic gold or silver. Starting at 50 pcs, our pricing can\'t be beat.',
        sku: 'LA1234',
        mpn: '925872',
        brand: {
          '@type': 'Brand',
          name: 'Lapel Pins & Coins'
        },
        review: [
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5.0',
              bestRating: '5.0'
            },
            author: {
              '@type': 'Person',
              name: 'Judith Black'
            },
            reviewBody: 'Excellent quality and service! The pins turned out better than expected.',
            datePublished: '2024-01-15',
            itemReviewed: {
              '@type': 'Thing',
              name: 'Custom Lapel Pins'
            }
          },
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5.0',
              bestRating: '5.0'
            },
            author: {
              '@type': 'Person',
              name: 'Michael R.'
            },
            reviewBody: 'Great customer service and the pins were exactly what we wanted. Will order again!',
            datePublished: '2024-02-20',
            itemReviewed: {
              '@type': 'Thing',
              name: 'Custom Lapel Pins'
            }
          }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1'
        },
        offers: {
          '@type': 'Offer',
          url: 'https://lapelpinsandcoins.com/pins',
          priceCurrency: 'USD',
          price: '2.99',
          priceValidUntil: '2025-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: {
              '@type': 'MonetaryAmount',
              value: '0',
              currency: 'USD'
            },
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'US'
            }
          },
          seller: {
            '@type': 'Organization',
            name: 'Lapel Pins & Coins'
          }
        }
      },
      // FAQ Schema
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqItems.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      }
    ]

    return {
      script: [
        {
          hid: 'localBusinessJson',
          type: 'application/ld+json',
          json: structuredData[0] // LocalBusiness schema
        },
        {
          hid: 'productJson',
          type: 'application/ld+json',
          json: structuredData[1] // Product schema
        },
        {
          hid: 'faqJson',
          type: 'application/ld+json',
          json: structuredData[2] // FAQ schema
        }
      ],
      title: 'Custom Lapel Pins | Free Shipping | Lapel Pins & Coins',
      meta: [
        { hid: 'description', name: 'description', content: 'Custom designed lapel pins with same-day quotes. Get started with a complimentary art proof. With over 20 years of experience, we\'ve got you covered.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://lapelpinsandcoins.com/pins' }
      ]
    }
  },
  mounted () {
    this.$store.commit('prefs/setPrefs', 'Lapel Pins')
  },
  methods: {
    goQuote () {
      if (process.browser) {
        this.$router.push('/quote')
      }
    }
  }
}
</script>

<style>
.max-w-8xl {
  max-width: 90rem;
}
</style>
