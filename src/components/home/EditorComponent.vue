<template>
  <div class="editor">
    <div class="d-flex between">
      <h5>SQL Statement</h5>
      <button class="button--text" data-name="modal-toggler" @click="openModal">Database</button>
    </div>
    <form @submit.prevent="submitQuery">
      <textarea class="editor" name="Query Editor" v-model="queryString"></textarea>
      <div class="query-buttons d-flex middle">
        <button type="submit" data-name="run" class="button--primary button--uppercase">Run</button>
        <button type="button" data-name="reset" class="button--secondary button--uppercase" @click="reset">reset</button>
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
    // Submit query
    submitQuery() {
      this.$emit('submitQuery', this.queryString.toLowerCase())
    },

    // Reset query string method
    reset() {
      this.queryString = 'SELECT * FROM ""'
    },

    //Method to open modal
    openModal() {
      this.$refs.modalComponent.open()
    }
  }
}
</script>

<style></style>
