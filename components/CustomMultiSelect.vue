<template>
  <!--
  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
  -->
  <div class="space-y-1" @keydown.up="moveHighlightUp" @keydown.down="moveHighlightDown" @keydown.enter="selectHighlighted" @keydown.escape="escapeHandler">
    <label :id="('listbox-label-' + title)" class="block text-sm font-medium text-gray-700 leading-5">
      {{ title }}
    </label>
    <div v-click-outside="clickAway" class="relative">
      <span class="inline-block w-full rounded-md shadow-sm">
        <button
          :id="('select-button-' + title)"
          type="button"
          aria-haspopup="listbox"
          :aria-expanded="expanded.toString()"
          :aria-labelledby="('listbox-label-' + title) + (' select-button-' + title)"
          :class="[expanded ? 'focus:outline-none' : 'focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:border-blue-300']"
          class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 cursor-default transition duration-150 ease-in-out rounded-md sm:text-sm sm:leading-5"
          @click.prevent="toggleSelect"
        >
          <span v-if="selected.length > 0" class="block truncate">
            {{ selected }}
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
        enter-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-100 ease-in"
        leave-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <!-- Select popover, show/hide based on select state. -->
        <div v-show="expanded" class="absolute z-30 w-full mt-1 bg-white shadow-lg rounded-md">
          <ul
            :id="'options-box-' + title"
            tabindex="-1"
            role="listbox"
            :aria-labelledby="('listbox-label-' + title)"
            :aria-activedescendant="[expanded ? 'listbox-items-' + ind : '']"
            class="py-1 overflow-auto text-base leading-6 rounded-md ring-1 ring-black ring-opacity-5 max-h-60 focus:outline-none sm:text-sm sm:leading-5"
          >
            <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

            Highlighted: "text-white bg-blue-600", Not Highlighted: "text-gray-900"
          -->
            <li
              v-for="(option, o) in options"
              :id="'listbox-items-' + o"
              :key="option"
              :tabindex="o"
              role="option"
              :aria-selected="selected.includes(option)"
              :class="highlighted === o ? 'text-white bg-blue-600' : 'text-gray-900'"
              class="relative py-2 pl-3 cursor-pointer select-none pr-9 focus:outline-none"
              @mouseenter="highlightMe(o)"
              @mouseleave="unHighlight"
              @click="selectOption(option)"
            >
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="block antialiased truncate" :class="[selected.includes(option) ? 'font-semibold' : 'font-normal']">
                {{ option }}
              </span>

              <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "text-blue-600"
            -->
              <span v-if="selected.includes(option)" :class="[highlighted === o ? 'text-white' : 'text-blue-600']" class="absolute inset-y-0 right-0 flex items-center pr-4">
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
  name: 'CustomMultiSelect',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    options: {
      type: Array,
      default () {
        return [
          'Lapel Pins',
          'Challenge Coins',
          'Keychains'
        ]
      }
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
      selected: [this.options[0]]
    }
  },
  computed: {
    ind () {
      return (this.options.indexOf(this.selected[0]))
    },
    optionsLength () {
      return (this.options.length - 1)
    },
    focusID () {
      return ('listbox-items-' + this.highlighted.toString())
    }
  },
  watch: {
    // selects first active option and focuses it
    expanded (newVal, oldVal) {
      if (newVal) {
        this.highlighted = this.ind
      } else if (!newVal) {
        document.getElementById('select-button-' + this.title).focus()
      }
    },
    highlighted (newVal, oldVal) {
      if (this.expanded && newVal !== -1) {
        if (process.browser) {
          document.getElementById(this.focusID).focus()
        }
      }
    },
    selected (newVal, oldVal) {
      this.$emit('chosen', this.selected)
    }
  },
  methods: {
    escapeHandler () {
      if (this.expanded) {
        this.expanded = false
        document.getElementById('select-button-' + this.title).focus()
      }
    },
    // no highlighted elements (mouseleave)
    unHighlight () {
      this.highlighted = -1
    },
    selectHighlighted () {
      // checks membership of each option in multiselect
      const hasOption = this.selected.includes(this.options[this.highlighted])
      const data = this.options[this.highlighted]
      if (this.expanded) {
        if (!hasOption && data !== null) {
        // selects the highlighted element by adding to array
          this.selected.push(data)
        } else if (hasOption) {
          this.selected.splice(this.selected.indexOf(this.options))
        }
      }
    },
    clickAway () {
      this.expanded = false
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
      this.expanded = !this.expanded
    },
    selectOption (option) {
      // chooses option if not in multiselect, otherwise removes option
      if (!this.selected.includes(option)) {
        this.selected.push(option)
      } else {
        this.selected.splice(this.selected.indexOf(option), 1)
      }
    }
  }
}
</script>
