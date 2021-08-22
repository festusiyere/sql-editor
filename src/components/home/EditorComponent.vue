<template>
  <div class="editor">
    <div class="d-flex between">
      <h5>SQL Statement</h5>
      <button class="button--text" @click="openModal">Database</button>
    </div>
    <form @submit.prevent="submitQuery">
      <textarea class="editor" name="Query Editor" v-model="queryString"></textarea>
      <div class="query-buttons d-flex middle">
        <button type="submit" class="button--primary button--uppercase">Run</button>
        <button type="button" class="button--secondary button--uppercase" @click="reset">reset</button>
      </div>
    </form>
    <ModalComponent ref="modalComponent" />
  </div>
</template>

<script>
import ModalComponent from '@/components/global/Modal.vue'

export default {
  components: {
    ModalComponent
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      queryString: 'SELECT * FROM "Employees"'
    }
  },
  methods: {
    async submitQuery() {
      this.$emit('submitQuery', this.queryString.toLowerCase())
    },
    reset() {
      this.queryString = 'SELECT * FROM ""'
    },

    openModal() {
      this.$refs.modalComponent.open()
    }
  }
}
</script>

<style></style>
