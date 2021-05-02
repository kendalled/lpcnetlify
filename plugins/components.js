import Vue from 'vue'
import Page from '@/components/Page.vue'
import PinHeader from '@/components/PinHeader.vue'
import PinContentImage from '@/components/PinContentImage.vue'
import PinContentOnly from '@/components/PinContentOnly.vue'
import CoinContentImage from '@/components/CoinContentImage.vue'
import CoinContentOnly from '@/components/CoinContentOnly.vue'
import PageTitle from '@/components/PageTitle.vue'
import BlogHero from '@/components/BlogHero.vue'
import ContentOnly from '@/components/ContentOnly.vue'
import ContentImage from '@/components/ContentImage.vue'
import TwoColumnContent from '@/components/TwoColumnContent.vue'

Vue.component('page', Page)
Vue.component('TwoColumnContent', TwoColumnContent)
Vue.component('PinContentImage', PinContentImage)
Vue.component('PinHeader', PinHeader)
Vue.component('PinContentOnly', PinContentOnly)
Vue.component('CoinContentImage', CoinContentImage)
Vue.component('CoinContentOnly', CoinContentOnly)
Vue.component('BlogHero', BlogHero)
Vue.component('PageTitle', PageTitle)
Vue.component('ContentOnly', ContentOnly)
Vue.component('ContentImage', ContentImage)
Vue.directive('currency', {
  bind (el, binding, vnode) {
    el.value = binding.value && Number(binding.value).toLocaleString('en-US', {
      style: 'currency',
      currency: !binding.arg ? 'USD' : binding.arg
    })
    el.onblur = function (e) {
      const local = Number(e.target.value).toLocaleString('en-US', {
        style: 'currency',
        currency: !binding.arg ? 'USD' : binding.arg
      })
      e.target.value = local.substr(1)
    }
    el.onfocus = function (e) {
      e.target.value =
        e.target.value && Number(e.target.value.replace(/[^\d.]/g, ''))
    }
    el.oninput = function (e) {
      vnode.context.$data[binding.expression] = e.target.value
    }
  }
})
