<template functional>
  <div class="query-results">
    <template v-if="props.results && props.results.length">
      <h6>Results</h6>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th v-for="(result, key) in props.results[0]" :key="key" :title="key">
                {{ key }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(result, key) in props.results" :key="key">
              <td v-for="(data, index) in result" :key="index" :title="data">
                {{ data }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template v-else>
      <div>No Result found for this query</div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      default() {
        return null
      }
    }
  }
}
</script>

<style></style>
