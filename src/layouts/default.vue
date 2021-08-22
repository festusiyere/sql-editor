<template>
  <div class="main-wrapper">
    <!-- Side Nav Bar -->
    <NavMenu />
    <div class="page-content">
      <!-- Page Content View -->
      <router-view />
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/global/NavMenu.vue'
export default {
  components: {
    NavMenu
  }
}
</script>
