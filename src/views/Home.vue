<template>
  <div class="">
    <EditorComponent @submitQuery="submitQuery" :isLoading="isLoading" />
    <transition mode="out-in" name="fade">
      <TableComponent v-if="results" :results="results" />
    </transition>
  </div>
</template>
<script>
import {QueryService} from '@/services'
import EditorComponent from '@/components/home/EditorComponent.vue'
import TableComponent from '@/components/home/TableComponent.vue'
export default {
  components: {
    TableComponent,
    EditorComponent
  },
  data() {
    return {
      isLoading: false,
      results: null
    }
  },
  methods: {
    // Submit query to server
    async submitQuery(query) {
      try {
        this.isLoading = true
        const {data} = await new QueryService(this).getResults(query)

         Sort the result based on  the primary key
        data.sort((a, b) => {
          let primaryKey = Object.keys(a)[0]
          return a[primaryKey] - b[primaryKey]
        })

        this.results = data
        this.isLoading = false
      } catch (error) {
        this.results = []
        this.isLoading = false
      }
    }
  }
}
</script>
