<template>
<div>
  <button class="button" @click="goToCurrencyList($event)">
    Currency list
  </button>
  
  <div v-if="currencyHistory">
    <h2>Currency history</h2>
    <table>
        <tr>
          <th>id</th>
          <th>original id</th>
          <th>name</th> 
          <th>code</th>
          <th>rate</th>
        </tr>
        <tr
          v-for="currency in currencyHistory" :key="currency.id"
          @click="showDetailInfo(currency.originalId)"
        >
          <td>{{currency.id}}</td>
          <td>{{currency.originalId}}</td>
          <td>{{currency.name}}</td>
          <td>{{currency.code}}</td>
          <td>{{currency.rate}}</td>
        </tr>
      </table>
  </div>
  <div v-else>
    <h4>loading...</h4>
  </div>
</div>

</template>

<script>
export default {
  name: 'CurrencyHistory',
  created() {
    this.$store.dispatch('fetchCurrencyHistory', this.$route.params.id);
  },
  computed: {
    currencyHistory() {
      return this.$store.state.currencyHistory[this.$route.params.id];
    },
  },
  methods: {
    goToCurrencyList() {
      this.$router.push({ name: 'home' })
    }
  },
};
</script>
