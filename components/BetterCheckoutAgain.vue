<template>
  <div class="flex flex-col justify-start min-h-screen pb-8 bg-gray-100 class">
    <main>
      <section class="z-20 w-full bg-white shadow-sm sm:fixed">
        <!-- TODO: custom padding to stay inline with container, may need resizing -->
        <div class="flex justify-between px-4 py-6 mx-auto sm:px-6 lg:px-10 sm:max-w-7xl">
          <span class="flex items-center">
            <h1 class="font-bold text-gray-800 text sm:text-lg">Order Summary</h1>
          </span>
          <div class="flex items-center space-x-6">
            <p class="text-gray-800 sm:text-lg">
              ${{ price || '0.00' }}
            </p>
            <a href="mailto:info@lapelpinsandcoins.com?subject=Checkout Help" target="_blank" title="Email customer support" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-blue-700 bg-blue-100 border border-transparent rounded-md shadow-sm hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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
      <form id="payment-form" action="https://formspree.io/mqkylvwz" method="post" class="z-10 mt-4 space-y-6 bg-gray-100 sm:mt-20 md:mt-24">
        <input type="hidden" name="_next" value="https://lapelpinsandcoins.com/ordered">
        <div class="px-4 py-5 mx-auto sm:py-6 sm:px-6 lg:px-10 max-w-7xl">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Payment Details
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Begin by entering your payment information. The order total and proof number are attached to each quote.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <section id="payment-section">
                <span class="grid w-full grid-cols-3 gap-6 sm:grid-cols-5">
                  <PaymentElement v-if="isStripeLoaded" @question="emitError" @token="tokenHandler" />
                  <div class="col-span-3">
                    <label for="_price" class="block text-sm font-medium text-gray-700">Order total</label>
                    <div class="relative mt-1 rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span class="text-gray-500 sm:text-sm">
                          $
                        </span>
                      </div>
                      <input
                        id="price"
                        v-model="price"
                        type="text" 
                        required
                        pattern="(\d+\.\d{1,2})"
                        name="_price"
                        class="block w-full pr-12 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-7 sm:text-sm"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
                      <input id="proof" type="text" required name="proof" placeholder="Proof #3" class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                    </div>
                  </div>
                </span>
              </section>
            </div>
          </div>
        </div>

        <div class="px-4 py-5 mx-auto border-t border-gray-200 max-w-7xl sm:rounded-lg sm:px-6 lg:px-10">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Shipping Information
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Please enter the correct shippping information to ensure there are no delays in production.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <!-- used to say 'form' -->
              <section>
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                    <input id="first_name" type="text" required name="first_name" autocomplete="given-name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                    <input id="last_name" type="text" required name="last_name" autocomplete="family-name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input id="email_address" type="email" required name="email_address" autocomplete="email" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Country / Region</label>
                    <select id="country" name="country" autocomplete="country" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div class="col-span-6">
                    <label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
                    <input id="street_address" type="text" required name="street_address" autocomplete="street-address" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                    <input id="city" type="text" required name="city" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
                    <input id="state" type="text" required name="state" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                    <input id="postal_code" type="text" required name="postal_code" autocomplete="postal-code" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="px-4 py-5 mx-auto border-t border-gray-200 max-w-7xl sm:rounded-lg sm:px-6 lg:px-10">
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
                      <div class="flex items-center h-5">
                        <input id="production" name="production" checked type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="production" class="font-medium text-gray-700">Production updates</label>
                        <p class="text-gray-500">
                          Get notified when your items are put into production.
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="shipping" name="shipping" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="shipping" class="font-medium text-gray-700">Order tracking</label>
                        <p class="text-gray-500">
                          Get notified when your order is shipped and receive tracking updates.
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="offers" name="offers" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
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
                      <input id="push_everything" name="push_notifications" type="radio" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                      <label for="push_everything" class="block ml-3 text-sm font-medium text-gray-700"> Everything </label>
                    </div>
                    <div class="flex items-center">
                      <input id="push_email" name="push_notifications" type="radio" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                      <label for="push_email" class="block ml-3 text-sm font-medium text-gray-700"> Same as email </label>
                    </div>
                    <div class="flex items-center">
                      <input id="push_nothing" name="push_notifications" type="radio" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                      <label for="push_nothing" class="block ml-3 text-sm font-medium text-gray-700"> No push notifications </label>
                    </div>
                  </div>
                </fieldset>
              </section>
            </div>
          </div>
        </div>

        <div class="flex justify-end px-4 mx-auto sm:max-w-7xl sm:px-6 lg:px-10">
          <button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Cancel
          </button>
          <button type="submit" class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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
