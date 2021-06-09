<template>
  <section class="col-span-3 sm:col-span-5">
    <label for="card-element" class="block text-sm font-medium text-gray-700 mb-1">Card details</label>
    <stripe-element
      ref="stripeElement"
      :els-options="elsOptions"
      :el-options="elOptions"
      type="card"
      class="text-base flex h-9.5"
      :stripe="'pk_live_IdjziiRxhaPu7DEfYmHlPFkS00bsvL7U0q'"
      @change="cdcompleted = $event.complete"
    >
      <template #default="slotProps">
        <!-- :disabled="!cdcompleted" -->
        <button v-if="cdcompleted" class="relative hidden sm:inline-flex items-center px-4 -ml-px text-sm font-medium leading-5 text-green-700 transition duration-150 ease-in-out rounded-r-md hover:text-green-500 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 focus:border-green-300 active:bg-green-100 active:text-green-700 h-9.5" @click.prevent="payByCard(slotProps)">
          <!-- <span class="ml-2">Save</span> -->
          <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
        </button>
        <button v-if="!cdcompleted" id="check-payment" class="hidden" aria-label="Credit card submit button" @click.prevent="payByCard(slotProps)" />
        <button v-if="!cdcompleted" class="relative hidden sm:inline-flex items-center px-4 -ml-px text-sm font-medium leading-5 text-blue-700 transition duration-150 ease-in-out rounded-r-md hover:text-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 active:bg-blue-100 active:text-blue-700 h-9.5" @click.prevent="emitQuestion">
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-gray-400"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>
        </button>
      </template>
    </stripe-element>
  </section>
</template>

<script>
import { StripeElement } from '~/plugins/StripeElement.client.js'
// import { firebase } from '~/plugins/firebase'
export default {
  name: 'PaymentElement',
  components: {
    StripeElement
  },
  props: {
    clicked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      elsOptions: {
        fonts: [{ cssSrc: 'https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.1/inter.css' }]
      },
      elOptions: {
        style: {
          base: {
            fontFamily: 'Inter UI, sans-serif'
          }
        }
      },
      windowWidth: null,
      cdcompleted: false,
      stripe: null,
      card: null,
      isStripeLoaded: false
    }
  },
  computed: {
    userAccount () {
      return (this.$store.state.user ? this.$store.state.user.id : 'none')
    }
  },
  watch: {
    cdcompleted (newVal) {
      if (newVal && process.browser) {
        document.getElementById('check-payment').click()
      }
    },
    windowWidth (newVal) {
      const cardElement = this.$refs.stripeElement
      if (newVal <= 640) {
        cardElement.update({ style: { base: { fontSize: '16px', lineHeight: '24px' } } })
      } else {
        cardElement.update({ style: { base: { fontSize: '14px', lineHeight: '20px' } } })
      }
    }
  },
  mounted () {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    emitQuestion () {
      this.$emit('question')
    },
    payByCard (slotProps) {
      const handler = this.stripeTokenHandler
      slotProps.elements
        .createToken()
        .then(handler)
        .catch(console.error)
    },
    stripeTokenHandler (token) {
      // const id = token.token.id
      this.$emit('token', token.token)
      console.log('create token: ' + token.token.id)
    }
  }
}
</script>

<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
 .h-9\.5 {
  height: 42px;
}
.StripeElement {
  font-family: 'Inter UI';
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  @apply shadow-sm;
  @apply px-3;
  @apply py-2;
  @apply leading-5;
  @apply rounded-md;
  border: 1px solid #d1d5db;
  /* border-top-right-radius: 0;
  border-bottom-right-radius: 0; */
  background-color: #fff;
}
@media screen and (min-width: 1024px){
  .StripeElement {
    width: 75%;
  }
}
@media screen and (min-width: 640px){
  .h-9\.5 {
    height: 38px !important;
  }
  /* .StripeElement > * {
    font-size: 14px !important;
  }
  .StripeElement {
    font-size: 14px !important;
  } */
  .StripeElement {
    height: 38px !important;
  }
  /* .StripeElemnt {
    font-size: 38px !important;
  } */
}
.StripeElement--focus {
  @apply ring-1;
  @apply border-blue-500;
  @apply ring-blue-500;
}

.StripeElement--invalid {
  @apply ring-1;
  @apply border-red-500;
  @apply ring-red-500;
}

.StripeElement--webkit-autofill {
  background-color: #f0feff !important;
}
</style>
