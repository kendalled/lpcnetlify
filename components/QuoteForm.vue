<template>
  <section class="pt-8 space-y-8 formRoot">
    <!-- <QuoteStep :margin="false" /> -->
    <QuoteStep :title="'Design Details'" :subtitle="'Please be as specific as possible.'" :show-submit="false" :margin="false">
      <form action="#" method="POST">
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label for="username" class="block text-sm font-medium leading-5 text-gray-700">
              Username
            </label>
            <div class="flex mt-1 rounded-md shadow-sm">
              <span class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                http://
              </span>
              <input id="company_website" class="flex-1 block w-full transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5" placeholder="www.example.com">
            </div>
          </div>
        </div>

        <div class="mt-6">
          <label for="about" class="block text-sm font-medium leading-5 text-gray-700">
            About
          </label>
          <div class="rounded-md shadow-sm">
            <textarea id="about" rows="3" class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5" placeholder="you@example.com" />
          </div>
          <p class="mt-2 text-sm text-gray-500">
            Brief description for your profile. URLs are hyperlinked.
          </p>
        </div>

        <div class="mt-6">
          <label for="photo" class="block text-sm font-medium leading-5 text-gray-700">
            Photo
          </label>
          <div class="flex items-center mt-2">
            <span class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
              <svg class="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <span class="ml-5 rounded-md shadow-sm">
              <button type="button" class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 active:bg-gray-50 active:text-gray-800">
                Change
              </button>
            </span>
          </div>
        </div>

        <div class="mt-6">
          <label for="cover_photo" class="block text-sm font-medium leading-5 text-gray-700">
            Cover photo
          </label>
          <div class="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md">
            <div class="text-center">
              <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p class="mt-1 text-sm text-gray-600">
                <button class="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline">
                  Upload a file
                </button>
                or drag and drop
              </p>
              <p class="mt-1 text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </form>
    </QuoteStep>

    <QuoteStep :title="'Contact Information'" :subtitle="'Use a permanent address where you can receive mail.'" :show-submit="false" :margin="true">
      <form action="#" method="POST">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
            <input id="first_name" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
            <input id="last_name" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Email address</label>
            <input id="email_address" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="phone_num" class="block text-sm font-medium leading-5 text-gray-700">Phone number</label>
            <input id="phone_num" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-5 text-gray-700">Country / Region</label>
            <select id="country" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div class="col-span-6">
            <label for="street_address" class="block text-sm font-medium leading-5 text-gray-700">Street address</label>
            <input id="street_address" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
          </div>

          <div class="col-span-6 sm:col-span-6 lg:col-span-2">
            <label for="city" class="block text-sm font-medium leading-5 text-gray-700">City</label>
            <input id="city" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label for="state" class="block text-sm font-medium leading-5 text-gray-700">State / Province</label>
            <input id="state" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label for="postal_code" class="block text-sm font-medium leading-5 text-gray-700">ZIP / Postal</label>
            <input id="postal_code" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300 sm:text-sm sm:leading-5">
          </div>
        </div>
      </form>
    </QuoteStep>

    <QuoteStep :title="'Notifications'" :subtitle="'Choose how you want us to stay in touch with you.'" :show-submit="true" :margin="true">
      <form action="#" method="POST">
        <fieldset>
          <legend class="text-base font-medium leading-6 text-gray-900">
            By Email
          </legend>
          <div class="mt-4">
            <div class="flex items-start">
              <div class="absolute flex items-center h-5">
                <input id="quotes" checked type="checkbox" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-checkbox">
              </div>
              <div class="text-sm leading-5 pl-7">
                <label for="quotes" class="font-medium text-gray-700">Quotes &amp; Art Proofs</label>
                <p class="text-gray-500">
                  Your initial look at your design should get to you in 24 hours or less.
                </p>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-start">
                <div class="absolute flex items-center h-5">
                  <input id="art_proofs" type="checkbox" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-checkbox">
                </div>
                <div class="text-sm leading-5 pl-7">
                  <label for="art_proofs" class="font-medium text-gray-700">Reminders</label>
                  <p class="text-gray-500">
                    Get the most up-to-date information any time something changes.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-start">
                <div class="absolute flex items-center h-5">
                  <input id="reminders" type="checkbox" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-checkbox">
                </div>
                <div class="text-sm leading-5 pl-7">
                  <label for="reminders" class="font-medium text-gray-700">Special Promotions</label>
                  <p class="text-gray-500">
                    We’d love to send you great deals!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="mt-6">
          <legend class="text-base font-medium leading-6 text-gray-900">
            Push Notifications
          </legend>
          <p class="text-sm leading-5 text-gray-500">
            These are delivered via SMS to your mobile phone.
          </p>
          <div class="mt-4">
            <div class="flex items-center">
              <input id="push_everything" name="form-input push_notifications" type="radio" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio">
              <label for="push_everything" class="ml-3">
                <span class="block text-sm font-medium leading-5 text-gray-700">Everything</span>
              </label>
            </div>
            <div class="flex items-center mt-4">
              <input id="push_email" name="form-input push_notifications" type="radio" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio">
              <label for="push_email" class="ml-3">
                <span class="block text-sm font-medium leading-5 text-gray-700">Same as email</span>
              </label>
            </div>
            <div class="flex items-center mt-4">
              <input id="push_nothing" name="form-input push_notifications" type="radio" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio">
              <label for="push_nothing" class="ml-3">
                <span class="block text-sm font-medium leading-5 text-gray-700">No push notifications</span>
              </label>
            </div>
          </div>
        </fieldset>
      </form>
    </QuoteStep>
  </section>
</template>

<script>
import QuoteStep from '~/Components/QuoteStep'
export default {
  name: 'QuoteForm',
  components: {
    QuoteStep
  }
}
</script>
