<template>
  <!--
  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
  -->
  <div class="space-y-1" @keydown.up="moveHighlightUp" @keydown.down="moveHighlightDown" @keydown.enter="selectHighlighted" @keydown.escape="escapeHandler">
    <label :id="('listbox-label-' + title)" class="block text-sm font-medium leading-5 text-gray-700">
      {{ title }}
    </label>
    <div v-click-outside="clickAway" class="relative">
      <span class="inline-block w-full rounded-md shadow-sm">
        <button
          :id="('select-button-' + title)"
          type="button"
          aria-haspopup="listbox"
          :aria-expanded="expanded.toString()"
          :aria-labelledby="('listbox-label-' + title) + ('select-button-' + title)"
          :class="[expanded ? 'focus:outline-none' : 'focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50']"
          class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md cursor-default sm:text-sm"
          @click.prevent="toggleSelect"
        >
          <span v-if="selected" class="block truncate">
            {{ selected.name }}
          </span>
          <span v-else class="block text-gray-600 truncate">
            None selected
          </span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>
      </span>

      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <!-- Select popover, show/hide based on select state. :aria-activedescendant="[expanded ? 'listbox-item-' + options[ind] : '']" -->
        <div v-show="expanded" class="absolute z-30 w-full mt-1 bg-white rounded-md shadow-lg">
          <ul
            :id="'options-box-' + title "
            tabindex="-1"
            role="listbox"
            :aria-labelledby="('listbox-label-' + title)"
            class="py-1 overflow-auto text-base leading-6 rounded-md ring-1 ring-black ring-opacity-5 max-h-60 focus:outline-none sm:text-sm sm:leading-5"
          >
            <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            Highlighted: "text-white bg-blue-600", Not Highlighted: "text-gray-900"
          -->
            <li
              v-for="(option, o) in options"
              :id="'listbox-item-' + option.name"
              :key="option.name"
              :tabindex="o"
              :class="highlighted === o ? 'text-white bg-blue-600' : 'text-gray-900'"
              role="option"
              :aria-selected="selected === option"
              class="relative py-2 pl-3 cursor-pointer select-none pr-9 focus:outline-none"
              @mouseenter="highlightMe(o)"
              @mouseleave="unHighlight"
              @click="selectOption(option)"
            >
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="block antialiased truncate" :class="[selected === option ? 'font-semibold' : 'font-normal']">
                {{ option.name }} <span v-if="option.cost">- [{{ option.cost }}]</span>
              </span>

              <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "text-blue-600"
            -->
              <span v-if="selected === option" :class="[highlighted === o ? 'text-white' : 'text-blue-600']" class="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </li>

            <!-- More options... -->
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'CustomSelectAdmin',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    options: {
      type: Array,
      default () {
        return [
          { name: 'Soft Enamel', key: 'softEnamel' },
          { name: 'Hard Enamel', key: 'hardEnamel' },
          { name: 'Offset Printed', key: 'offsetPrinted' },
          { name: 'Die Struck', key: 'dieStruck' },
          { name: 'Silk Screen', key: 'silkScreen' }
        ]
      }
    },
    initial: {
      type: String,
      default: 'Lapel Pins'
    },
    title: {
      type: String,
      default: 'Select product'
    }
  },
  data () {
    return {
      highlighted: 0,
      expanded: false,
      selected: this.getInitialSelected()
    }
  },
  computed: {
    ind () {
      return (this.options.indexOf(this.selected))
    },
    optionsLength () {
      return (this.options.length - 1)
    }
  },
  watch: {
    // initialDiff (newVal) {
    //   if (newVal !== this.selected) {
    //     this.selected = newVal
    //     console.log(newVal)
    //   }
    // },
    expanded (newVal, oldVal) {
      if (newVal) {
        this.highlighted = this.ind
      } else if (!newVal && process.browser) {
        this.highlighted = -1
        document.getElementById('select-button-' + this.title).focus()
      }
    },
    highlighted (newVal, oldVal) {
      if (this.expanded && newVal !== -1) {
        const focusMe = 'listbox-item-' + this.options[this.highlighted].name
        if (process.browser) {
          document.getElementById(focusMe).focus()
        }
      }
    },
    selected (newVal, oldVal) {
      // note: do not use reserved keywords as emit names
      this.$emit('chosen', this.selected, this.title)
      this.expanded = false
    }
  },
  methods: {
    getInitialSelected () {
      const target = this.initial
      const isolated = this.options.filter(function (choice) {
        return choice.name === target
      })
      return isolated[0]
    },
    escapeHandler () {
      if (this.expanded) {
        this.expanded = false
      }
    },
    unHighlight () {
      this.highlighted = -1
    },
    selectHighlighted (e) {
      e.preventDefault()
      // selects the highlighted element
      // TODO: call func instead of set values
      if (this.expanded) {
        this.expanded = false
        this.selected = this.options[this.highlighted]
      } else {
        this.expanded = true
      }
      return true
    },
    highlightMe (val) {
      // highlight with mouse
      this.highlighted = val
    },
    moveHighlightDown (e) {
      e.preventDefault()
      if (this.expanded) {
        // changes the highlight with keyboard input
        (this.highlighted !== this.optionsLength ? this.highlighted += 1 : this.highlighted = 0)
        return true
      } else {
        this.expanded = true
      }
    },
    moveHighlightUp (e) {
      e.preventDefault()
      if (this.expanded) {
        (this.highlighted !== 0 ? this.highlighted -= 1 : this.highlighted = this.optionsLength)
        return true
      } else {
        this.expanded = true
      }
    },
    toggleSelect () {
      // shows select dropdown
      this.highlighted = this.ind
      this.expanded = !this.expanded
    },
    clickAway () {
      this.expanded = false
    },
    selectOption (option) {
      // chooses option
      this.selected = option
      this.expanded = false
      document.getElementById('select-button-' + this.title).focus()
    }
  }
}
</script>
