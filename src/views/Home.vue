<template>
  <div>
    <currency-list />
  </div>
</template>

<script>
import CurrencyList from '@/components/CurrencyList.vue';

export default {
  name: 'home',
  components: {
    CurrencyList
  },
  computed: {
    currencies() {
      return this.$store.state.currencies;
    },
  }
};
</script>
