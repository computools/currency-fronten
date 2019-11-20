<template>
  <div>
    
    <h2>Currency list</h2>

    <template  v-if="currencies && currencies.length > 0">
      <table>
        <tr>
          <th>id</th>
          <th>original id</th>
          <th>name</th> 
          <th>code</th>
          <th>rate</th>
        </tr>
        <tr
          v-for="currency in currencies" :key="currency.id"
          @click="showDetailInfo(currency.originalId)"
        >
          <td>{{currency.id}}</td>
          <td>{{currency.originalId}}</td>
          <td>{{currency.name}}</td>
          <td>{{currency.code}}</td>
          <td>{{currency.rate}}</td>
        </tr>
      </table>

      <div class="block-with-btn">
        <div class="btn btn-prev" :class="disabledBtnClass.prev" @click="previous">Prev</div>
        <div class="btn btn-next" :class="disabledBtnClass.next" @click="next">Next</div>
      </div>

      <currency-details
        v-if="showDetails"
        @hide="hideDetailsModal($event)"
        @show-currency-history="showCurrencyHistory($event)"
        :currencyId="currencyId"
      />
    </template>
    <p v-else class="no-results">no results found</p>

  </div>
</template>

<script>
import CurrencyDetails from '@/components/CurrencyDetails.vue';

export default {
  name: 'CurrencyList',
  components: {
    CurrencyDetails
  },
  data() {
    return {
      take: 10,
      skip: 0,
      currencyId: 0,
      showDetails: false
    };
  },
  created() {
    this.fetchCurrenciesWithPagination();
  },
  computed: {
    currencies() {
      return this.$store.state.currencies;
    },
    disabledBtnClass() {
      let btnClasses = {
        prev: '',
        next: ''
      };

      if(this.skip === 0 ) {
        btnClasses.prev = 'disabled';
      } else {
        btnClasses.prev = '';
      }
      if(this.currencies && this.currencies.length < this.take ) {
        btnClasses.next = 'disabled';
      } else {
        btnClasses.next = '';
      }

      return btnClasses;
    }
  },
  methods: {
    next() {
      this.skip += this.take;
      this.fetchCurrenciesWithPagination();
    },
    previous() {
      if (this.take > this.skip) {
        this.skip = 0;
      } else {
        this.skip -= this.take
      }
      this.fetchCurrenciesWithPagination();
    },
    fetchCurrenciesWithPagination() {
      this.$store.dispatch('getCurrencyWithPagination', {
        take: this.take,
        skip: this.skip
      });
    },
    showDetailInfo(id) {
      this.currencyId = id;
      console.log(id, 'id')
      this.$store.dispatch('fetchCurrency', id);
      this.showDetails = true;
    },
    hideDetailsModal() {
      this.showDetails = false;      
    },
    showCurrencyHistory(id) {
      this.$router.push({
        name: 'history',
        params: { id },
      });
    },
  },
}
</script>
