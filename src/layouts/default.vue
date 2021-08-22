<template>
  <div class="main-wrapper">
    <!--  Nav Bar -->
    <NavMenu />
    <main class="page-content">
      <!-- Page Content View -->
      <router-view />
    </main>
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
