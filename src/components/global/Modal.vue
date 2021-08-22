<template>
  <transition mode="out-in" name="fade">
    <div class="modal" v-if="isOpen" @click.self="close">
      <div class="inner-modal">
        <button @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h6 class="header">Database</h6>
        <ul>
          <li>Categories</li>
          <li>Customers</li>
          <li>Employees</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Regions</li>
          <li>Shippers</li>
          <li>Suppliers</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    close() {
      this.isOpen = false
    },
    open() {
      this.isOpen = true
    }
  }
}
</script>
