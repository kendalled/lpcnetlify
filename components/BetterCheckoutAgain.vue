<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-start class pb-8">
    <main>
      <section class="bg-white sm:fixed w-full shadow-sm z-20">
        <!-- TODO: custom padding to stay inline with container, may need resizing -->
        <div class="flex px-4 sm:px-6 lg:px-10 justify-between py-6 sm:max-w-7xl mx-auto">
          <span class="flex items-center">
            <h1 class="font-bold text sm:text-lg text-gray-800">Order Summary</h1>
          </span>
          <div class="flex space-x-6 items-center">
            <p class="text-gray-800 sm:text-lg">
              ${{ price || '0.00' }}
            </p>
            <a href="mailto:info@lapelpinsandcoins.com?subject=Checkout Help" target="_blank" title="Email customer support" class="inline-flex text-blue-700 bg-blue-100 hover:bg-blue-200 items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <!-- Heroicon name: solid/mail -->
              <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Need help?
            </a>
          </div>
        </div>
      </section>
      <!-- TODO: fix margin and padding inconsistencies -->
      <form id="payment-form" action="https://formspree.io/mqkylvwz" method="post" class="space-y-6 mt-4 sm:mt-20 md:mt-24 bg-gray-100 z-10">
        <input type="hidden" name="_next" value="https://lapelpinsandcoins.com/ordered">
        <div class="py-5 sm:py-6 px-4 sm:px-6 lg:px-10 mx-auto max-w-7xl">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Payment Details
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Please fill out the correct shippping information so that we can ship it to the you directly.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <section id="payment-section">
                <span class="grid grid-cols-3 sm:grid-cols-5 gap-6 w-full">
                  <PaymentElement v-if="isStripeLoaded" @question="emitError" @token="tokenHandler" />
                  <div class="col-span-3">
                    <label for="_price" class="block text-sm font-medium text-gray-700">Order total</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm">
                          $
                        </span>
                      </div>
                      <input
                        id="price"
                        v-model="price"
                        type="text"
                        pattern="(\d+\.\d{1,2})"
                        name="_price"
                        class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                      >
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span id="price-currency" class="text-gray-500 sm:text-sm">
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-3 sm:col-span-2">
                    <label for="proof" class="block text-sm font-medium leading-5 text-gray-700">
                      Proof number
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input id="proof" type="text" name="proof" placeholder="Proof #3" class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                    </div>
                  </div>
                </span>
              </section>
            </div>
          </div>
        </div>

        <div class="px-4 py-5 border-t mx-auto max-w-7xl border-gray-200 sm:rounded-lg sm:px-6 lg:px-10">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Shipping Information
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Please fill out the correct shippping information so that we can ship it to the you directly.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <!-- used to say 'form' -->
              <section>
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                    <input id="first_name" type="text" name="first_name" autocomplete="given-name" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                    <input id="last_name" type="text" name="last_name" autocomplete="family-name" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input id="email_address" type="text" name="email_address" autocomplete="email" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Country / Region</label>
                    <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div class="col-span-6">
                    <label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
                    <input id="street_address" type="text" name="street_address" autocomplete="street-address" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                    <input id="city" type="text" name="city" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
                    <input id="state" type="text" name="state" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                    <input id="postal_code" type="text" name="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="px-4 mx-auto max-w-7xl py-5 border-t border-gray-200 sm:rounded-lg sm:px-6 lg:px-10">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Notifications
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Decide which communications you'd like to receive and how.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <!-- used to be form -->
              <section class="space-y-6">
                <fieldset>
                  <legend class="text-base font-medium text-gray-900">
                    By Email
                  </legend>
                  <div class="mt-4 space-y-4">
                    <div class="flex items-start">
                      <div class="h-5 flex items-center">
                        <input id="comments" name="comments" type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="comments" class="font-medium text-gray-700">Production updates</label>
                        <p class="text-gray-500">
                          Get notified when your items are put into production.
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="candidates" name="candidates" type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="candidates" class="font-medium text-gray-700">Order tracking</label>
                        <p class="text-gray-500">
                          Get notified when your order is shipped and receive tracking updates.
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="offers" name="offers" type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="offers" class="font-medium text-gray-700">Special Offers</label>
                        <p class="text-gray-500">
                          Get notified of future promotions and sales.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div>
                    <legend class="text-base font-medium text-gray-900">
                      Push Notifications
                    </legend>
                    <p class="text-sm text-gray-500">
                      These are delivered via SMS to your mobile phone.
                    </p>
                  </div>
                  <div class="mt-4 space-y-4">
                    <div class="flex items-center">
                      <input id="push_everything" name="push_notifications" type="radio" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                      <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700"> Everything </label>
                    </div>
                    <div class="flex items-center">
                      <input id="push_email" name="push_notifications" type="radio" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                      <label for="push_email" class="ml-3 block text-sm font-medium text-gray-700"> Same as email </label>
                    </div>
                    <div class="flex items-center">
                      <input id="push_nothing" name="push_notifications" type="radio" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                      <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700"> No push notifications </label>
                    </div>
                  </div>
                </fieldset>
              </section>
            </div>
          </div>
        </div>

        <div class="flex justify-end sm:max-w-7xl px-4 sm:px-6 lg:px-10 mx-auto">
          <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Cancel
          </button>
          <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit order
          </button>
        </div>
      </form>

    <!-- end checkout -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'BetterCheckoutAgain',
  data () {
    return {
      price: null,
      isStripeLoaded: false,
      states: [
        'Select State', 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ]
    }
  },
  head () {
    return {
      script: [
        { once: true, skip: this.isStripeLoaded, type: 'text/javascript', src: 'https://js.stripe.com/v3/', hid: 'stripe', defer: true, callback: () => { this.isStripeLoaded = true } }
      ]
    }
  },
  methods: {
    emitError () {
      this.$emit('error')
    },
    tokenHandler (token) {
      const form = document.getElementById('payment-form')
      const hiddenInput = document.createElement('input')
      hiddenInput.setAttribute('type', 'hidden')
      hiddenInput.setAttribute('name', '_stripe_token')
      hiddenInput.setAttribute('value', token.id)
      form.appendChild(hiddenInput)
      console.log(hiddenInput)
    // Submit the form
    }
  }
}
</script>
